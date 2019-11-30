# language: en
@machinelearning
Feature: Amazon Machine Learning

  I want to use Amazon Machine Learning

<<<<<<< HEAD
  Scenario: Describing MLModels 
=======
  Scenario: Describing MLModels
>>>>>>> chore: copy v2 integ tests to v3 (#479)
    Given I run the "describeMLModels" operation
    Then the request should be successful
    And the value at "Results" should be a list

  Scenario: Error handling
    Given I run the "getBatchPrediction" operation with params:
    """
    { "BatchPredictionId": "non-exist" }
    """
    Then the error code should be "ResourceNotFoundException"
