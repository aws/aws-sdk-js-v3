# language: en
@cloudfront
Feature: Amazon CloudFront

  I want to use Amazon CloudFront

  Scenario: Listing distributions
    Given I list CloudFront distributions
    Then the result at DistributionList should contain a property Quantity with a number

  # Let this fail with NoSuchOrigin to confirm we serialized inputs
  # but without creating a distribution.
  Scenario: Creating a distribution
    Given I create a CloudFront distribution with name prefix "aws-js-sdk"
    Then the error code should be "NoSuchOrigin"
    And the error status code should be 404

  Scenario: Error handling
    Given I create a CloudFront distribution with name prefix ""
    Then the error code should be "InvalidArgument"
