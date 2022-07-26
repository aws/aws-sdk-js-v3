// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import { FinspaceServiceException as __BaseException } from "./FinspaceServiceException";

/**
 * <p>You do not have sufficient access to perform this action.</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
  }
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
  attributeMap?: Record<string, string>;
}

/**
 * <p>Configuration information for the superuser.</p>
 */
export interface SuperuserParameters {
  /**
   * <p>The email address of the superuser.</p>
   */
  emailAddress: string | undefined;

  /**
   * <p>The first name of the superuser.</p>
   */
  firstName: string | undefined;

  /**
   * <p>The last name of the superuser.</p>
   */
  lastName: string | undefined;
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
  tags?: Record<string, string>;

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

  /**
   * <p>Configuration information for the superuser.</p>
   */
  superuserParameters?: SuperuserParameters;

  /**
   * <p>The list of Amazon Resource Names (ARN) of the data bundles to install. Currently supported data bundle ARNs:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>arn:aws:finspace:${Region}::data-bundle/capital-markets-sample</code> - Contains sample Capital Markets datasets, categories and controlled vocabularies.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:finspace:${Region}::data-bundle/taq</code> (default) - Contains trades and quotes data in addition to sample Capital Markets data.</p>
   *             </li>
   *          </ul>
   */
  dataBundles?: string[];
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

/**
 * <p>The request processing has failed because of an unknown error, exception or
 *          failure.</p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
  }
}

/**
 * <p>A service limit or quota is exceeded.</p>
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LimitExceededException, __BaseException>) {
    super({
      name: "LimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LimitExceededException.prototype);
  }
}

/**
 * <p> You have exceeded your service quota. To perform the requested action,
 *          remove some of the relevant resources, or use Service Quotas to request a service quota increase.</p>
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
  }
}

/**
 * <p>The request was denied due to request throttling.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
  }
}

/**
 * <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
  }
}

export interface DeleteEnvironmentRequest {
  /**
   * <p>The identifier for the FinSpace environment.</p>
   */
  environmentId: string | undefined;
}

export interface DeleteEnvironmentResponse {}

/**
 * <p>One or more resources can't be found.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
  }
}

export interface GetEnvironmentRequest {
  /**
   * <p>The identifier of the FinSpace environment.</p>
   */
  environmentId: string | undefined;
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

export interface GetEnvironmentResponse {
  /**
   * <p>The name of the FinSpace environment.</p>
   */
  environment?: Environment;
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

/**
 * <p>The request is invalid. Something is wrong with the input to the request.</p>
 */
export class InvalidRequestException extends __BaseException {
  readonly name: "InvalidRequestException" = "InvalidRequestException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRequestException, __BaseException>) {
    super({
      name: "InvalidRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRequestException.prototype);
  }
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name of the resource.</p>
   */
  resourceArn: string | undefined;
}

export interface ListTagsForResourceResponse {
  /**
   * <p>A list of all tags for a resource.</p>
   */
  tags?: Record<string, string>;
}

export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) for the resource.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>One or more tags to be assigned to the resource.</p>
   */
  tags: Record<string, string> | undefined;
}

export interface TagResourceResponse {}

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

export interface UntagResourceResponse {}

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

export interface UpdateEnvironmentResponse {
  /**
   * <p>Returns the FinSpace environment object.</p>
   */
  environment?: Environment;
}

/**
 * @internal
 */
export const FederationParametersFilterSensitiveLog = (obj: FederationParameters): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SuperuserParametersFilterSensitiveLog = (obj: SuperuserParameters): any => ({
  ...obj,
  ...(obj.emailAddress && { emailAddress: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateEnvironmentRequestFilterSensitiveLog = (obj: CreateEnvironmentRequest): any => ({
  ...obj,
  ...(obj.superuserParameters && {
    superuserParameters: SuperuserParametersFilterSensitiveLog(obj.superuserParameters),
  }),
});

/**
 * @internal
 */
export const CreateEnvironmentResponseFilterSensitiveLog = (obj: CreateEnvironmentResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteEnvironmentRequestFilterSensitiveLog = (obj: DeleteEnvironmentRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteEnvironmentResponseFilterSensitiveLog = (obj: DeleteEnvironmentResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetEnvironmentRequestFilterSensitiveLog = (obj: GetEnvironmentRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EnvironmentFilterSensitiveLog = (obj: Environment): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetEnvironmentResponseFilterSensitiveLog = (obj: GetEnvironmentResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListEnvironmentsRequestFilterSensitiveLog = (obj: ListEnvironmentsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListEnvironmentsResponseFilterSensitiveLog = (obj: ListEnvironmentsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceRequestFilterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceResponseFilterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceRequestFilterSensitiveLog = (obj: TagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceResponseFilterSensitiveLog = (obj: TagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceRequestFilterSensitiveLog = (obj: UntagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceResponseFilterSensitiveLog = (obj: UntagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateEnvironmentRequestFilterSensitiveLog = (obj: UpdateEnvironmentRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateEnvironmentResponseFilterSensitiveLog = (obj: UpdateEnvironmentResponse): any => ({
  ...obj,
});
