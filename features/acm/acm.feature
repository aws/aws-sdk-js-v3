# language: en
@acm
<<<<<<< HEAD
Feature: 
=======
Feature:
>>>>>>> chore: copy v2 integ tests to v3 (#479)

  I want to use AWS Certificate Manager

  Scenario: Making a request
    Given I run the "listCertificates" operation
    Then the request should be successful
    And the value at "CertificateSummaryList" should be a list

  Scenario: Error handling
    Given I run the "describeCertificate" operation with params:
    """
    { "CertificateArn": "fake_arn" }
    """
    Then the error code should be "ValidationException"
