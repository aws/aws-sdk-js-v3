# language: en

@dynamodb @tables
Feature: DynamoDB Tables

  Scenario: Creating a table
    When I create a table
    Then the table should eventually exist

  Scenario: Item CRUD
    Given I have a table
    When I put the item:
    """
    {"id": {"S": "foo"}, "data": {"S": "bår"}}
    """
    Then the item with id "foo" should exist
    And it should have attribute "data.S" containing "bår"

  Scenario: UTF-8 support
    Given I try to delete an item with key "føø" from table "table"
    Then the error code should be "ResourceNotFoundException"

  Scenario: Improper table deletion
    Given I try to delete a table with an empty table parameter
    Then the error code should be "ValidationException"
    And the error message should be:
    """
    TableName must be at least 3 characters long and at most 255 characters long
    """
    And the error status code should be 400

  @recursive
  Scenario: Recursive Attributes
    Given I have a table
    When I put a recursive item
    Then the request should be successful
    And the item with id "fooRecursive" should exist
    And it should have attribute "data.M.attr1.L[1].L[0].M.attr12.S" containing "value2"

  Scenario: Deleting the created table
    When I delete the table
    Then the table should eventually not exist

# @dynamodb @crc32
# Feature: CRC32 response validation
#   Scenario: Retry on corrupted request
#     Given my first request is corrupted with CRC checking ON
#     Then the request should be retried
#     And the request should not fail with a CRC checking error
#   Scenario: Failed retries on corrupted request
#     Given all of my requests are corrupted with CRC checking ON
#     Then the request is retried the maximum number of times
#     And the request should fail with a CRC checking error
#   Scenario: Ignore corrupted request with CRC checking OFF
#     Given my first request is corrupted with CRC checking OFF
#     Then the request should not be retried
#     And the request should not fail with a CRC checking error