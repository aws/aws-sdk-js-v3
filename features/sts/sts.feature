# language: en
@sts
Feature: AWS Security Token Service

  I want to use AWS Security Token Service

  @requiresakid @nosession
  Scenario: Get caller identity
    Given I run the "getCallerIdentity" operation
    Then the request should be successful
    Then the result should contain a property Account with a string
    Then the result should contain a property Arn with a string
    Then the result should contain a property UserId with a string

  Scenario: Error handling
    Given I get an STS session token with a duration of 60 seconds
    Then the error code should be "ValidationError"
