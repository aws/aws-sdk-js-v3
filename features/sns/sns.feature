# language: en
@sns
Feature: Simple Notification Service

  I want to use Amazon Simple Notification Service

  Scenario: Topics
    Given I create an SNS topic with prefix "aws-js-sdk"
    And I list the SNS topics
    Then the list should contain the topic ARN

  Scenario: Error handling
    Given I get SNS topic attributes with an invalid ARN
    Then the error code should be "InvalidParameterException"
