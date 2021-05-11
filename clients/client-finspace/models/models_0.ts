import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>You do not have sufficient access to perform this action.</p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
}

export namespace AccessDeniedException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AccessDeniedException): any => ({
    ...obj,
  });
}

export enum FederationMode {
  FEDERATED = "FEDERATED",
  LOCAL = "LOCAL",
}

/**
 * <p>Configuration information when authentication mode is FEDERATED.</p>
 */
export interface FederationParameters {
  /**
   * <p>SAML 2.0 Metadata document from identity provider (IdP).</p>
   */
  samlMetadataDocument?: string;

  /**
   * <p>Provide the metadata URL from your SAML 2.0 compliant identity provider (IdP).</p>
   */
  samlMetadataURL?: string;

  /**
   * <p>The redirect or sign-in URL that should be entered into the SAML 2.0 compliant identity provider configuration
   *        (IdP).</p>
   */
  applicationCallBackURL?: string;

  /**
   * <p>The Uniform Resource Name (URN). Also referred as Service Provider URN or Audience URI or Service Provider Entity ID.</p>
   */
  federationURN?: string;

  /**
   * <p>Name of the identity provider (IdP).</p>
   */
  federationProviderName?: string;

  /**
   * <p>SAML attribute name and value. The name must always be <code>Email</code> and the value should be set to
   *          the attribute definition in which user email is set. For example, name would be <code>Email</code> and
   *          value <code>http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress</code>.
   *          Please check your SAML 2.0 compliant identity provider (IdP) documentation for details.</p>
   */
  attributeMap?: { [key: string]: string };
}

export namespace FederationParameters {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FederationParameters): any => ({
    ...obj,
  });
}

export interface CreateEnvironmentRequest {
  /**
   * <p>The name of the FinSpace environment to be created.</p>
   */
  name: string | undefined;

  /**
   * <p>The description of the FinSpace environment to be created.</p>
   */
  description?: string;

  /**
   * <p>The KMS key id to encrypt your data in the FinSpace environment.</p>
   */
  kmsKeyId?: string;

  /**
   * <p>Add tags to your FinSpace environment.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>Authentication mode for the environment.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>FEDERATED</code> - Users access FinSpace through Single Sign On (SSO) via your Identity provider.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LOCAL</code> - Users access FinSpace via email and password managed within the FinSpace environment.</p>
   *             </li>
   *          </ul>
   */
  federationMode?: FederationMode | string;

  /**
   * <p>Configuration information when authentication mode is FEDERATED.</p>
   */
  federationParameters?: FederationParameters;
}

export namespace CreateEnvironmentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateEnvironmentRequest): any => ({
    ...obj,
  });
}

export interface CreateEnvironmentResponse {
  /**
   * <p>The unique identifier for FinSpace environment that you created.</p>
   */
  environmentId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the FinSpace environment that you created.</p>
   */
  environmentArn?: string;

  /**
   * <p>The sign-in url for the web application of the FinSpace environment you created.</p>
   */
  environmentUrl?: string;
}

export namespace CreateEnvironmentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateEnvironmentResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The request processing has failed because of an unknown error, exception or
 *          failure.</p>
 */
export interface InternalServerException extends __SmithyException, $MetadataBearer {
  name: "InternalServerException";
  $fault: "server";
  message?: string;
}

export namespace InternalServerException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InternalServerException): any => ({
    ...obj,
  });
}

/**
 * <p>A service limit or quota is exceeded.</p>
 */
export interface LimitExceededException extends __SmithyException, $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  message?: string;
}

export namespace LimitExceededException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LimitExceededException): any => ({
    ...obj,
  });
}

/**
 * <p> You have exceeded your service quota. To perform the requested action,
 *          remove some of the relevant resources, or use Service Quotas to request a service quota increase.</p>
 */
export interface ServiceQuotaExceededException extends __SmithyException, $MetadataBearer {
  name: "ServiceQuotaExceededException";
  $fault: "client";
  message?: string;
}

export namespace ServiceQuotaExceededException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServiceQuotaExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>The request was denied due to request throttling.</p>
 */
export interface ThrottlingException extends __SmithyException, $MetadataBearer {
  name: "ThrottlingException";
  $fault: "client";
}

export namespace ThrottlingException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ThrottlingException): any => ({
    ...obj,
  });
}

/**
 * <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 */
export interface ValidationException extends __SmithyException, $MetadataBearer {
  name: "ValidationException";
  $fault: "client";
  message?: string;
}

export namespace ValidationException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ValidationException): any => ({
    ...obj,
  });
}

export interface DeleteEnvironmentRequest {
  /**
   * <p>The identifier for the FinSpace environment.</p>
   */
  environmentId: string | undefined;
}

export namespace DeleteEnvironmentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteEnvironmentRequest): any => ({
    ...obj,
  });
}

export interface DeleteEnvironmentResponse {}

export namespace DeleteEnvironmentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteEnvironmentResponse): any => ({
    ...obj,
  });
}

/**
 * <p>One or more resources can't be found.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  message?: string;
}

export namespace ResourceNotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
}

export interface GetEnvironmentRequest {
  /**
   * <p>The identifier of the FinSpace environment.</p>
   */
  environmentId: string | undefined;
}

export namespace GetEnvironmentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetEnvironmentRequest): any => ({
    ...obj,
  });
}

export enum EnvironmentStatus {
  CREATED = "CREATED",
  CREATE_REQUESTED = "CREATE_REQUESTED",
  CREATING = "CREATING",
  DELETED = "DELETED",
  DELETE_REQUESTED = "DELETE_REQUESTED",
  DELETING = "DELETING",
  FAILED_CREATION = "FAILED_CREATION",
  FAILED_DELETION = "FAILED_DELETION",
  RETRY_DELETION = "RETRY_DELETION",
  SUSPENDED = "SUSPENDED",
}

/**
 * <p>Represents an FinSpace environment.</p>
 */
export interface Environment {
  /**
   * <p>The name of the FinSpace environment.</p>
   */
  name?: string;

  /**
   * <p>The identifier of the FinSpace environment.</p>
   */
  environmentId?: string;

  /**
   * <p>The ID of the AWS account in which the FinSpace environment is created.</p>
   */
  awsAccountId?: string;

  /**
   * <p>The current status of creation of the FinSpace environment.</p>
   */
  status?: EnvironmentStatus | string;

  /**
   * <p>The sign-in url for the web application of your FinSpace environment.</p>
   */
  environmentUrl?: string;

  /**
   * <p>The description of the FinSpace environment.</p>
   */
  description?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of your FinSpace environment.</p>
   */
  environmentArn?: string;

  /**
   * <p>The url of the integrated FinSpace notebook environment in your web application.</p>
   */
  sageMakerStudioDomainUrl?: string;

  /**
   * <p>The KMS key id used to encrypt in the FinSpace environment.</p>
   */
  kmsKeyId?: string;

  /**
   * <p>The AWS account ID of the dedicated service account associated with your FinSpace
   *          environment.</p>
   */
  dedicatedServiceAccountId?: string;

  /**
   * <p>The authentication mode for the environment.</p>
   */
  federationMode?: FederationMode | string;

  /**
   * <p>Configuration information when authentication mode is FEDERATED.</p>
   */
  federationParameters?: FederationParameters;
}

export namespace Environment {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Environment): any => ({
    ...obj,
  });
}

export interface GetEnvironmentResponse {
  /**
   * <p>The name of the FinSpace environment.</p>
   */
  environment?: Environment;
}

export namespace GetEnvironmentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetEnvironmentResponse): any => ({
    ...obj,
  });
}

export interface ListEnvironmentsRequest {
  /**
   * <p>A token generated by FinSpace that specifies where to continue pagination if a previous
   *          request was truncated. To get the next set of pages, pass in the nextToken value from the
   *          response object of the previous page call.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return in this request.</p>
   */
  maxResults?: number;
}

export namespace ListEnvironmentsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListEnvironmentsRequest): any => ({
    ...obj,
  });
}

export interface ListEnvironmentsResponse {
  /**
   * <p>A list of all of your FinSpace environments.</p>
   */
  environments?: Environment[];

  /**
   * <p>A token that you can use in a subsequent call to retrieve the next set of
   *          results.</p>
   */
  nextToken?: string;
}

export namespace ListEnvironmentsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListEnvironmentsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The request is invalid. Something is wrong with the input to the request.</p>
 */
export interface InvalidRequestException extends __SmithyException, $MetadataBearer {
  name: "InvalidRequestException";
  $fault: "client";
  message?: string;
}

export namespace InvalidRequestException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidRequestException): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name of the resource.</p>
   */
  resourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceResponse {
  /**
   * <p>A list of all tags for a resource.</p>
   */
  tags?: { [key: string]: string };
}

export namespace ListTagsForResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) for the resource.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>One or more tags to be assigned to the resource.</p>
   */
  tags: { [key: string]: string } | undefined;
}

export namespace TagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface TagResourceResponse {}

export namespace TagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
}

export interface UntagResourceRequest {
  /**
   * <p>A FinSpace resource from which you want to remove a tag or tags. The value for this
   *          parameter is an Amazon Resource Name (ARN).</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The tag keys (names) of one or more tags to be removed.</p>
   */
  tagKeys: string[] | undefined;
}

export namespace UntagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceResponse {}

export namespace UntagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
}

export interface UpdateEnvironmentRequest {
  /**
   * <p>The identifier of the FinSpace environment.</p>
   */
  environmentId: string | undefined;

  /**
   * <p>The name of the environment.</p>
   */
  name?: string;

  /**
   * <p>The description of the environment.</p>
   */
  description?: string;

  /**
   * <p>Authentication mode for the environment.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>FEDERATED</code> - Users access FinSpace through Single Sign On (SSO) via your Identity provider.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LOCAL</code> - Users access FinSpace via email and password managed within the FinSpace environment.</p>
   *             </li>
   *          </ul>
   */
  federationMode?: FederationMode | string;

  /**
   * <p>Configuration information when authentication mode is FEDERATED.</p>
   */
  federationParameters?: FederationParameters;
}

export namespace UpdateEnvironmentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateEnvironmentRequest): any => ({
    ...obj,
  });
}

export interface UpdateEnvironmentResponse {
  /**
   * <p>Returns the FinSpace environment object.</p>
   */
  environment?: Environment;
}

export namespace UpdateEnvironmentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateEnvironmentResponse): any => ({
    ...obj,
  });
}
