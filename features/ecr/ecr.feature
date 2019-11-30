# language: en
@ecr
<<<<<<< HEAD
Feature: 
=======
Feature:
>>>>>>> chore: copy v2 integ tests to v3 (#479)

  I want to use Amazon EC2 Container Registry

  Scenario: Making a request
    Given I run the "describeRepositories" operation
    Then the request should be successful
    And the value at "repositories" should be a list

  Scenario: Error handling
    Given I run the "listImages" operation with params:
    """
    { "repositoryName": "fake_name" }
    """
    Then the error code should be "RepositoryNotFoundException"
