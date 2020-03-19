# language: en
@sqs @queues
Feature: SQS Queues

  I want to be able to create, list and delete queues.

  Scenario: Creating and deleting queues
    Given I create a queue with the prefix name "aws-js-sdk"
    And I create a queue with the prefix name "aws-js-sdk"
    Then list queues should eventually return the queue urls
    Then I delete the SQS queue
    Then I delete the SQS queue
