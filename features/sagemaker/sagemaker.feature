# language: en
@sagemaker
Feature: Amazon SageMaker

  I want to use Amazon SageMaker

  Scenario: Listing Endpoints
    Given I run the "listEndpoints" operation
    Then the request should be successful
    And the value at "Endpoints" should be a list

  Scenario: Error handling
    Given I run the "describeEndpoint" operation with params:
    """
    { "EndpointName": "non-existent" }
    """
    Then the error code should be "ValidationException"
