# language: en
@pinpoint
Feature: Amazon Pinpoint

  I want to use Amazon Pinpoint

  Scenario: Putting events
    Given I create an application
    Given I run the "putEvents" operation with EventsRequest:
    """
    {
        "BatchItem": {
            "foo": {
                "Endpoint": {
                    "Address": "fooEndpointAddress"
                },
                "Events": {
                    "foo": {
                        "EventType":"_session.start",
                        "Timestamp":"2015-03-19T17:32:40.577Z"
                    }
                }
            }
        }
    }
    """
    Then the request should be successful
    And I delete the application

  Scenario: Error handling
    Given I run the "putEvents" operation with params:
    """
    {"Events": [{"eventType": "test", "timestamp": "test"}], "ApplicationId": "test"}
    """
    Then the error code should be "NotFoundException"
