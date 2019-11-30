# language: en
@workspaces
Feature: Amazon WorkSpaces

  I want to use Amazon WorkSpaces

<<<<<<< HEAD
  Scenario: Describing workspaces 
=======
  Scenario: Describing workspaces
>>>>>>> chore: copy v2 integ tests to v3 (#479)
    Given I run the "describeWorkspaces" operation
    Then the request should be successful
    And the value at "Workspaces" should be a list

  Scenario: Error handling
    Given I run the "rebuildWorkspaces" operation with params:
    """
    { "RebuildWorkspaceRequests": [] }
    """
    Then the error code should be "ValidationException"
