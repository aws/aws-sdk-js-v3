# language: en
@cloudformation
Feature: AWS CloudFormation

  I want to use AWS CloudFormation

  Scenario: Describing stacks
    Given I run the "describeStacks" operation
    Then the request should be successful
    And the value at "Stacks" should be a list

  Scenario: Error handling
    Given I create a CloudFormation stack with name prefix ""
    Then the error code should be "ValidationError"

  @pagination
  Scenario: Paginating responses
<<<<<<< HEAD
    Given I paginate the "listStacks" operation 
=======
    Given I paginate the "listStacks" operation
>>>>>>> chore: copy v2 integ tests to v3 (#479)
    Then I should get at least one page
    And the last page should not contain a marker
