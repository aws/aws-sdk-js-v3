# language: en
@cloudwatchlogs
<<<<<<< HEAD
Feature: 
=======
Feature:
>>>>>>> chore: copy v2 integ tests to v3 (#479)

  I want to use Amazon CloudWatch Logs

  Scenario: Log Groups
    Given I create a CloudWatch logGroup with prefix "aws-js-sdk"
    And I list the CloudWatch logGroups
    Then the list should contain the CloudWatch logGroup
    And I delete the CloudWatch logGroup

  Scenario: Error handling
    Given I create a CloudWatch logGroup with prefix ""
    Then the error code should be "InvalidParameterException"
