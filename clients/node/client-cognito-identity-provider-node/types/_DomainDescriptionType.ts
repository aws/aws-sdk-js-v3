import {
  _CustomDomainConfigType,
  _UnmarshalledCustomDomainConfigType
} from "./_CustomDomainConfigType";

/**
 * <p>A container for information about a domain.</p>
 */
export interface _DomainDescriptionType {
  /**
   * <p>The user pool ID.</p>
   */
  UserPoolId?: string;

  /**
   * <p>The AWS account ID for the user pool owner.</p>
   */
  AWSAccountId?: string;

  /**
   * <p>The domain string.</p>
   */
  Domain?: string;

  /**
   * <p>The S3 bucket where the static files for this domain are stored.</p>
   */
  S3Bucket?: string;

  /**
   * <p>The ARN of the CloudFront distribution.</p>
   */
  CloudFrontDistribution?: string;

  /**
   * <p>The app version.</p>
   */
  Version?: string;

  /**
   * <p>The domain status.</p>
   */
  Status?: "CREATING" | "DELETING" | "UPDATING" | "ACTIVE" | "FAILED" | string;

  /**
   * <p>The configuration for a custom domain that hosts the sign-up and sign-in webpages for your application.</p>
   */
  CustomDomainConfig?: _CustomDomainConfigType;
}

export interface _UnmarshalledDomainDescriptionType
  extends _DomainDescriptionType {
  /**
   * <p>The configuration for a custom domain that hosts the sign-up and sign-in webpages for your application.</p>
   */
  CustomDomainConfig?: _UnmarshalledCustomDomainConfigType;
}
