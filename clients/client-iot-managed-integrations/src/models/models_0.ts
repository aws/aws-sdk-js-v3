// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { DocumentType as __DocumentType } from "@smithy/types";

import { IoTManagedIntegrationsServiceException as __BaseException } from "./IoTManagedIntegrationsServiceException";

/**
 * @public
 * @enum
 */
export const AbortCriteriaAction = {
  CANCEL: "CANCEL",
} as const;

/**
 * @public
 */
export type AbortCriteriaAction = (typeof AbortCriteriaAction)[keyof typeof AbortCriteriaAction];

/**
 * @public
 * @enum
 */
export const AbortCriteriaFailureType = {
  ALL: "ALL",
  FAILED: "FAILED",
  REJECTED: "REJECTED",
  TIMED_OUT: "TIMED_OUT",
} as const;

/**
 * @public
 */
export type AbortCriteriaFailureType = (typeof AbortCriteriaFailureType)[keyof typeof AbortCriteriaFailureType];

/**
 * <p>Structure representing one abort config criteria.</p>
 * @public
 */
export interface AbortConfigCriteria {
  /**
   * <p>The action taken by the abort configuration.</p>
   * @public
   */
  Action?: AbortCriteriaAction | undefined;

  /**
   * <p>Over-the-air (OTA) task abort criteria failure type.</p>
   * @public
   */
  FailureType?: AbortCriteriaFailureType | undefined;

  /**
   * <p>The minimum number of things that must receive task execution notifications before the task can be aborted.</p>
   * @public
   */
  MinNumberOfExecutedThings?: number | undefined;

  /**
   * <p>The minimum percentage of over-the-air (OTA) task execution failures that must occur to initiate the last abort.</p>
   * @public
   */
  ThresholdPercentage?: number | undefined;
}

/**
 * <p>User is not authorized.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * @public
 * @enum
 */
export const AssociationState = {
  ASSOCIATION_DELETING: "ASSOCIATION_DELETING",
  ASSOCIATION_FAILED: "ASSOCIATION_FAILED",
  ASSOCIATION_IN_PROGRESS: "ASSOCIATION_IN_PROGRESS",
  ASSOCIATION_SUCCEEDED: "ASSOCIATION_SUCCEEDED",
  REFRESH_TOKEN_EXPIRED: "REFRESH_TOKEN_EXPIRED",
} as const;

/**
 * @public
 */
export type AssociationState = (typeof AssociationState)[keyof typeof AssociationState];

/**
 * <p>Structure containing information about an account association, including its identifier, state, and related metadata.</p>
 * @public
 */
export interface AccountAssociationItem {
  /**
   * <p>The unique identifier of the account association.</p>
   * @public
   */
  AccountAssociationId: string | undefined;

  /**
   * <p>The current state of the account association, indicating its status in the association lifecycle.</p>
   * @public
   */
  AssociationState: AssociationState | undefined;

  /**
   * <p>The error message explaining any issues with the account association, if applicable.</p>
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * <p>The identifier of the connector destination associated with this account association.</p>
   * @public
   */
  ConnectorDestinationId?: string | undefined;

  /**
   * <p>The name of the account association.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A description of the account association.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the account association.</p>
   * @public
   */
  Arn?: string | undefined;
}

/**
 * <p>There is a conflict with the request.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface CreateAccountAssociationRequest {
  /**
   * <p>An idempotency token. If you retry a request that completed successfully initially using the same client token and parameters, then the retry attempt will succeed without performing any further actions.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The identifier of the connector destination.</p>
   * @public
   */
  ConnectorDestinationId: string | undefined;

  /**
   * <p>The name of the destination for the new account association.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A description of the account association request.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>A set of key/value pairs that are used to manage the account association.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateAccountAssociationResponse {
  /**
   * <p>Third-party IoT platform OAuth authorization server URL backed with all the required parameters to perform end-user authentication.</p>
   * @public
   */
  OAuthAuthorizationUrl: string | undefined;

  /**
   * <p>The identifier for the account association request.</p>
   * @public
   */
  AccountAssociationId: string | undefined;

  /**
   * <p>The current state of the account association request.</p>
   * @public
   */
  AssociationState: AssociationState | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the account association.</p>
   * @public
   */
  Arn?: string | undefined;
}

/**
 * <p>Internal error from the service that indicates an unexpected error or that the service is unavailable.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  Message?: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified resource does not exist.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * Id of the affected resource
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * Type of the affected resource
   * @public
   */
  ResourceType?: string | undefined;
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
    this.Message = opts.Message;
    this.ResourceId = opts.ResourceId;
    this.ResourceType = opts.ResourceType;
  }
}

/**
 * <p>The service is temporarily unavailable.</p>
 * @public
 */
export class ServiceUnavailableException extends __BaseException {
  readonly name: "ServiceUnavailableException" = "ServiceUnavailableException";
  readonly $fault: "server" = "server";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceUnavailableException, __BaseException>) {
    super({
      name: "ServiceUnavailableException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceUnavailableException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The rate exceeds the limit.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * <p>A validation error occurred when performing the API request.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface DeleteAccountAssociationRequest {
  /**
   * <p>The unique identifier of the account association to be deleted.</p>
   * @public
   */
  AccountAssociationId: string | undefined;
}

/**
 * @public
 */
export interface GetAccountAssociationRequest {
  /**
   * <p>The unique identifier of the account association to retrieve.</p>
   * @public
   */
  AccountAssociationId: string | undefined;
}

/**
 * @public
 */
export interface GetAccountAssociationResponse {
  /**
   * <p>The unique identifier of the retrieved account association.</p>
   * @public
   */
  AccountAssociationId: string | undefined;

  /**
   * <p>The current status state for the account association.</p>
   * @public
   */
  AssociationState: AssociationState | undefined;

  /**
   * <p>The error message explaining the current account association error.</p>
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * <p>The identifier of the connector destination associated with this account association.</p>
   * @public
   */
  ConnectorDestinationId?: string | undefined;

  /**
   * <p>The name of the account association.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The description of the account association.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the account association.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>Third party IoT platform OAuth authorization server URL backed with all the required parameters to perform end-user authentication.</p>
   * @public
   */
  OAuthAuthorizationUrl: string | undefined;

  /**
   * <p>A set of key/value pairs that are used to manage the account association.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListAccountAssociationsRequest {
  /**
   * <p>The identifier of the connector destination to filter account associations by.</p>
   * @public
   */
  ConnectorDestinationId?: string | undefined;

  /**
   * <p>The maximum number of account associations to return in a single response.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A token used for pagination of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAccountAssociationsResponse {
  /**
   * <p>The list of account associations that match the specified criteria.</p>
   * @public
   */
  Items?: AccountAssociationItem[] | undefined;

  /**
   * <p>A token used for pagination of results when there are more account associations than can be returned in a single response.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface StartAccountAssociationRefreshRequest {
  /**
   * <p>The unique identifier of the account association to refresh.</p>
   * @public
   */
  AccountAssociationId: string | undefined;
}

/**
 * @public
 */
export interface StartAccountAssociationRefreshResponse {
  /**
   * <p>Third-party IoT platform OAuth authorization server URL with all required parameters to perform end-user authentication during the refresh process.</p>
   * @public
   */
  OAuthAuthorizationUrl: string | undefined;
}

/**
 * @public
 */
export interface UpdateAccountAssociationRequest {
  /**
   * <p>The unique identifier of the account association to update.</p>
   * @public
   */
  AccountAssociationId: string | undefined;

  /**
   * <p>The new name to assign to the account association.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The new description to assign to the account association.</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * <p>Configuration settings for proactively refreshing OAuth tokens before they expire.</p>
 * @public
 */
export interface ProactiveRefreshTokenRenewal {
  /**
   * <p>Indicates whether proactive refresh token renewal is enabled.</p>
   * @public
   */
  enabled?: boolean | undefined;

  /**
   * <p>The days before token expiration when the system should attempt to renew the token, specified in days.</p>
   * @public
   */
  DaysBeforeRenewal?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const TokenEndpointAuthenticationScheme = {
  HTTP_BASIC: "HTTP_BASIC",
  REQUEST_BODY_CREDENTIALS: "REQUEST_BODY_CREDENTIALS",
} as const;

/**
 * @public
 */
export type TokenEndpointAuthenticationScheme =
  (typeof TokenEndpointAuthenticationScheme)[keyof typeof TokenEndpointAuthenticationScheme];

/**
 * <p>Configuration details for OAuth authentication with a third-party service.</p>
 * @public
 */
export interface OAuthConfig {
  /**
   * <p>The authorization URL for the OAuth service, where users are directed to authenticate and authorize access.</p>
   * @public
   */
  authUrl: string | undefined;

  /**
   * <p>The token URL for the OAuth service, where authorization codes are exchanged for access tokens.</p>
   * @public
   */
  tokenUrl: string | undefined;

  /**
   * <p>The OAuth scopes requested during authorization, which define the permissions granted to the application.</p>
   * @public
   */
  scope?: string | undefined;

  /**
   * <p>The authentication scheme used when requesting tokens from the token endpoint.</p>
   * @public
   */
  tokenEndpointAuthenticationScheme: TokenEndpointAuthenticationScheme | undefined;

  /**
   * <p>The URL where users are redirected after completing the OAuth authorization process.</p>
   * @public
   */
  oAuthCompleteRedirectUrl?: string | undefined;

  /**
   * <p>Configuration for proactively refreshing OAuth tokens before they expire.</p>
   * @public
   */
  proactiveRefreshTokenRenewal?: ProactiveRefreshTokenRenewal | undefined;
}

/**
 * <p>The authentication configuration details for a connector destination, including OAuth settings and other authentication parameters.</p>
 * @public
 */
export interface AuthConfig {
  /**
   * <p>The OAuth configuration settings used for authentication with the third-party service.</p>
   * @public
   */
  oAuth?: OAuthConfig | undefined;
}

/**
 * <p>Structure containing updated OAuth configuration settings.</p>
 * @public
 */
export interface OAuthUpdate {
  /**
   * <p>The updated URL where users are redirected after completing the OAuth authorization process.</p>
   * @public
   */
  oAuthCompleteRedirectUrl?: string | undefined;

  /**
   * <p>Updated configuration for proactively refreshing OAuth tokens before they expire.</p>
   * @public
   */
  proactiveRefreshTokenRenewal?: ProactiveRefreshTokenRenewal | undefined;
}

/**
 * <p>The updated authentication configuration details for a connector destination.</p>
 * @public
 */
export interface AuthConfigUpdate {
  /**
   * <p>The updated OAuth configuration settings for the authentication configuration.</p>
   * @public
   */
  oAuthUpdate?: OAuthUpdate | undefined;
}

/**
 * @public
 * @enum
 */
export const AuthMaterialType = {
  CUSTOM_PROTOCOL_QR_BAR_CODE: "CUSTOM_PROTOCOL_QR_BAR_CODE",
  DISCOVERED_DEVICE: "DISCOVERED_DEVICE",
  WIFI_SETUP_QR_BAR_CODE: "WIFI_SETUP_QR_BAR_CODE",
  ZIGBEE_QR_BAR_CODE: "ZIGBEE_QR_BAR_CODE",
  ZWAVE_QR_BAR_CODE: "ZWAVE_QR_BAR_CODE",
} as const;

/**
 * @public
 */
export type AuthMaterialType = (typeof AuthMaterialType)[keyof typeof AuthMaterialType];

/**
 * @public
 * @enum
 */
export const AuthType = {
  OAUTH: "OAUTH",
} as const;

/**
 * @public
 */
export type AuthType = (typeof AuthType)[keyof typeof AuthType];

/**
 * <p>Action for an Amazon Web Services capability, containing the action parameters for control.</p>
 * @public
 */
export interface CapabilityAction {
  /**
   * <p>Describe a capability action with a name.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Describe a capability action with an reference.</p>
   * @public
   */
  ref?: string | undefined;

  /**
   * <p>Describe a capability action with an <code>actionTraceId</code> for a response command.</p>
   * @public
   */
  actionTraceId?: string | undefined;

  /**
   * <p>Describe a capability action with a capability property.</p>
   * @public
   */
  parameters?: __DocumentType | undefined;
}

/**
 * <p>The capability used in capability report.</p>
 * @public
 */
export interface CapabilityReportCapability {
  /**
   * <p>The id of the schema version.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of the capability.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The version of the capability.</p>
   * @public
   */
  version: string | undefined;

  /**
   * <p>The capability properties used in the capability report.</p>
   * @public
   */
  properties: string[] | undefined;

  /**
   * <p>The capability actions used in the capability report.</p>
   * @public
   */
  actions: string[] | undefined;

  /**
   * <p>The capability events used in the capability report.</p>
   * @public
   */
  events: string[] | undefined;
}

/**
 * <p>The endpoint used in the capability report.</p>
 * @public
 */
export interface CapabilityReportEndpoint {
  /**
   * <p>The id of the endpoint used in the capability report.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The type of device.</p>
   * @public
   */
  deviceTypes: string[] | undefined;

  /**
   * <p>The capabilities used in the capability report.</p>
   * @public
   */
  capabilities: CapabilityReportCapability[] | undefined;
}

/**
 * <p>Report of all capabilities supported by the device.</p>
 * @public
 */
export interface CapabilityReport {
  /**
   * <p>The version of the capability report.</p>
   * @public
   */
  version: string | undefined;

  /**
   * <p>The numeric identifier of the node.</p>
   * @public
   */
  nodeId?: string | undefined;

  /**
   * <p>The endpoints used in the capability report.</p>
   * @public
   */
  endpoints: CapabilityReportEndpoint[] | undefined;
}

/**
 * @public
 * @enum
 */
export const SchemaVersionFormat = {
  AWS: "AWS",
  CONNECTOR: "CONNECTOR",
  ZCL: "ZCL",
} as const;

/**
 * @public
 */
export type SchemaVersionFormat = (typeof SchemaVersionFormat)[keyof typeof SchemaVersionFormat];

/**
 * <p>Structure representing a capability schema item that defines the functionality and features supported by a managed thing.</p>
 * @public
 */
export interface CapabilitySchemaItem {
  /**
   * <p>The format of the capability schema, which defines how the schema is structured and interpreted.</p>
   * @public
   */
  Format: SchemaVersionFormat | undefined;

  /**
   * <p>The unique identifier of the capability defined in the schema.</p>
   * @public
   */
  CapabilityId: string | undefined;

  /**
   * <p>The external identifier for the capability, used when referencing the capability outside of the AWS ecosystem.</p>
   * @public
   */
  ExtrinsicId: string | undefined;

  /**
   * <p>The version of the external capability definition, used to track compatibility with external systems.</p>
   * @public
   */
  ExtrinsicVersion: number | undefined;

  /**
   * <p>The actual schema definition that describes the capability's properties, actions, and events.</p>
   * @public
   */
  Schema: __DocumentType | undefined;
}

/**
 * <p>Configuration details for an AWS Lambda function used as an endpoint for a cloud connector.</p>
 * @public
 */
export interface LambdaConfig {
  /**
   * <p>The Amazon Resource Name (ARN) of the Lambda function used as an endpoint.</p>
   * @public
   */
  arn: string | undefined;
}

/**
 * <p>The configuration details for an endpoint, which defines how to connect to and communicate with external services.</p>
 * @public
 */
export interface EndpointConfig {
  /**
   * <p>The Lambda function configuration for the endpoint, used when the endpoint communicates through an AWS Lambda function.</p>
   * @public
   */
  lambda?: LambdaConfig | undefined;
}

/**
 * @public
 * @enum
 */
export const EndpointType = {
  LAMBDA: "LAMBDA",
} as const;

/**
 * @public
 */
export type EndpointType = (typeof EndpointType)[keyof typeof EndpointType];

/**
 * @public
 */
export interface CreateCloudConnectorRequest {
  /**
   * <p>The display name of the C2C connector.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The configuration details for the cloud connector endpoint, including connection parameters and authentication requirements.</p>
   * @public
   */
  EndpointConfig: EndpointConfig | undefined;

  /**
   * <p>A description of the C2C connector.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The type of endpoint used for the cloud connector, which defines how the connector communicates with external services.</p>
   * @public
   */
  EndpointType?: EndpointType | undefined;

  /**
   * <p>An idempotency token. If you retry a request that completed successfully initially using the same client token and parameters, then the retry attempt will succeed without performing any further actions.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateCloudConnectorResponse {
  /**
   * <p>The unique identifier assigned to the newly created cloud connector.</p>
   * @public
   */
  Id?: string | undefined;
}

/**
 * @public
 */
export interface DeleteCloudConnectorRequest {
  /**
   * <p>The identifier of the cloud connector.</p>
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface GetCloudConnectorRequest {
  /**
   * <p>The identifier of the C2C connector.</p>
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 * @enum
 */
export const CloudConnectorType = {
  LISTED: "LISTED",
  UNLISTED: "UNLISTED",
} as const;

/**
 * @public
 */
export type CloudConnectorType = (typeof CloudConnectorType)[keyof typeof CloudConnectorType];

/**
 * @public
 */
export interface GetCloudConnectorResponse {
  /**
   * <p>The display name of the C2C connector.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The configuration details for the cloud connector endpoint, including connection parameters and authentication requirements.</p>
   * @public
   */
  EndpointConfig: EndpointConfig | undefined;

  /**
   * <p>A description of the C2C connector.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The type of endpoint used for the cloud connector, which defines how the connector communicates with external services.</p>
   * @public
   */
  EndpointType?: EndpointType | undefined;

  /**
   * <p>The unique identifier of the cloud connector.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The type of cloud connector created.</p>
   * @public
   */
  Type?: CloudConnectorType | undefined;
}

/**
 * @public
 */
export interface ListCloudConnectorsRequest {
  /**
   * <p>The type of cloud connectors to filter by when listing available connectors.</p>
   * @public
   */
  Type?: CloudConnectorType | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Lambda function to filter cloud connectors by.</p>
   * @public
   */
  LambdaArn?: string | undefined;

  /**
   * <p>The maximum number of results to return at one time.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A token that can be used to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Structure describing a connector.</p>
 * @public
 */
export interface ConnectorItem {
  /**
   * <p>The display name of the C2C connector.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The configuration details for the cloud connector endpoint, including connection parameters and authentication requirements.</p>
   * @public
   */
  EndpointConfig: EndpointConfig | undefined;

  /**
   * <p>A description of the C2C connector.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The type of endpoint used for the C2C connector.</p>
   * @public
   */
  EndpointType?: EndpointType | undefined;

  /**
   * <p>The identifier of the C2C connector.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The type of cloud connector created.</p>
   * @public
   */
  Type?: CloudConnectorType | undefined;
}

/**
 * @public
 */
export interface ListCloudConnectorsResponse {
  /**
   * <p>The list of connectors.</p>
   * @public
   */
  Items?: ConnectorItem[] | undefined;

  /**
   * <p>A token that can be used to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateCloudConnectorRequest {
  /**
   * <p>The unique identifier of the cloud connector to update.</p>
   * @public
   */
  Identifier: string | undefined;

  /**
   * <p>The new display name to assign to the cloud connector.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The new description to assign to the cloud connector.</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * <p>The command capabilities added for the managed thing</p>
 * @public
 */
export interface CommandCapability {
  /**
   * <p>Describe the capability with an id.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>Describe the capability with an name.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Describe the capability with a version.</p>
   * @public
   */
  version: string | undefined;

  /**
   * <p>Describe the command capability with the actions it supports.</p>
   * @public
   */
  actions: CapabilityAction[] | undefined;
}

/**
 * <p>The endpoint for a managed thing when sending a command.</p>
 * @public
 */
export interface CommandEndpoint {
  /**
   * <p>The id of the endpoint for a managed thing.</p>
   * @public
   */
  endpointId: string | undefined;

  /**
   * <p>Describe the endpoint with an id, a name, and the relevant capabilities for sending commands.</p>
   * @public
   */
  capabilities: CommandCapability[] | undefined;
}

/**
 * <p>Provides the default encryption configuration error update details.</p>
 * @public
 */
export interface ConfigurationError {
  /**
   * <p>The error code returned when the default encryption configuration update fails.</p>
   * @public
   */
  code?: string | undefined;

  /**
   * <p>The error message returned when the default encryption configuration update fails.</p>
   * @public
   */
  message?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ConfigurationState = {
  ENABLED: "ENABLED",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATE_IN_PROGRESS: "UPDATE_IN_PROGRESS",
} as const;

/**
 * @public
 */
export type ConfigurationState = (typeof ConfigurationState)[keyof typeof ConfigurationState];

/**
 * <p>Provides the status of the default encryption configuration for an Amazon Web Services account.</p>
 * @public
 */
export interface ConfigurationStatus {
  /**
   * <p>The error details describing a failed default encryption configuration update.</p>
   * @public
   */
  error?: ConfigurationError | undefined;

  /**
   * <p>The status state describing the default encryption configuration update.</p>
   * @public
   */
  state: ConfigurationState | undefined;
}

/**
 * <p>Structure containing summary information about a connector destination, which defines how a cloud-to-cloud connector connects to a customer's AWS account.</p>
 * @public
 */
export interface ConnectorDestinationSummary {
  /**
   * <p>The display name of the connector destination.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A description of the connector destination.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The identifier of the cloud connector associated with this connector destination.</p>
   * @public
   */
  CloudConnectorId?: string | undefined;

  /**
   * <p>The unique identifier of the connector destination.</p>
   * @public
   */
  Id?: string | undefined;
}

/**
 * <p>Configuration for AWS Secrets Manager, used to securely store and manage sensitive information for connector destinations.</p>
 * @public
 */
export interface SecretsManager {
  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Secrets Manager secret.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The version ID of the AWS Secrets Manager secret.</p>
   * @public
   */
  versionId: string | undefined;
}

/**
 * @public
 */
export interface CreateConnectorDestinationRequest {
  /**
   * <p>The display name of the connector destination.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A description of the connector destination.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The identifier of the C2C connector.</p>
   * @public
   */
  CloudConnectorId: string | undefined;

  /**
   * <p>The authentication type used for the connector destination, which determines how credentials and access are managed.</p>
   * @public
   */
  AuthType: AuthType | undefined;

  /**
   * <p>The authentication configuration details for the connector destination, including OAuth settings and other authentication parameters.</p>
   * @public
   */
  AuthConfig: AuthConfig | undefined;

  /**
   * <p>The AWS Secrets Manager configuration used to securely store and manage sensitive information for the connector destination.</p>
   * @public
   */
  SecretsManager: SecretsManager | undefined;

  /**
   * <p>An idempotency token. If you retry a request that completed successfully initially using the same client token and parameters, then the retry attempt will succeed without performing any further actions.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateConnectorDestinationResponse {
  /**
   * <p>The identifier of the C2C connector destination creation request.</p>
   * @public
   */
  Id?: string | undefined;
}

/**
 * @public
 */
export interface DeleteConnectorDestinationRequest {
  /**
   * <p>The identifier of the connector destination.</p>
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface GetConnectorDestinationRequest {
  /**
   * <p>The identifier of the C2C connector destination.</p>
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface GetConnectorDestinationResponse {
  /**
   * <p>The display name of the connector destination.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A description of the connector destination.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The identifier of the C2C connector.</p>
   * @public
   */
  CloudConnectorId?: string | undefined;

  /**
   * <p>The unique identifier of the connector destination.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The authentication type used for the connector destination, which determines how credentials and access are managed.</p>
   * @public
   */
  AuthType?: AuthType | undefined;

  /**
   * <p>The authentication configuration details for the connector destination, including OAuth settings and other authentication parameters.</p>
   * @public
   */
  AuthConfig?: AuthConfig | undefined;

  /**
   * <p>The AWS Secrets Manager configuration used to securely store and manage sensitive information for the connector destination.</p>
   * @public
   */
  SecretsManager?: SecretsManager | undefined;

  /**
   * <p>The URL where users are redirected after completing the OAuth authorization process for the connector destination.</p>
   * @public
   */
  OAuthCompleteRedirectUrl?: string | undefined;
}

/**
 * @public
 */
export interface ListConnectorDestinationsRequest {
  /**
   * <p>The identifier of the cloud connector to filter connector destinations by.</p>
   * @public
   */
  CloudConnectorId?: string | undefined;

  /**
   * <p>A token used for pagination of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of connector destinations to return in a single response.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListConnectorDestinationsResponse {
  /**
   * <p>The list of connector destinations that match the specified criteria.</p>
   * @public
   */
  ConnectorDestinationList?: ConnectorDestinationSummary[] | undefined;

  /**
   * <p>A token used for pagination of results when there are more connector destinations than can be returned in a single response.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateConnectorDestinationRequest {
  /**
   * <p>The unique identifier of the connector destination to update.</p>
   * @public
   */
  Identifier: string | undefined;

  /**
   * <p>The new description to assign to the connector destination.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The new display name to assign to the connector destination.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The new authentication type to use for the connector destination.</p>
   * @public
   */
  AuthType?: AuthType | undefined;

  /**
   * <p>The updated authentication configuration details for the connector destination.</p>
   * @public
   */
  AuthConfig?: AuthConfigUpdate | undefined;

  /**
   * <p>The updated AWS Secrets Manager configuration for the connector destination.</p>
   * @public
   */
  SecretsManager?: SecretsManager | undefined;
}

/**
 * @public
 * @enum
 */
export const ConnectorEventOperation = {
  DEVICE_COMMAND_REQUEST: "DEVICE_COMMAND_REQUEST",
  DEVICE_COMMAND_RESPONSE: "DEVICE_COMMAND_RESPONSE",
  DEVICE_DISCOVERY: "DEVICE_DISCOVERY",
  DEVICE_EVENT: "DEVICE_EVENT",
} as const;

/**
 * @public
 */
export type ConnectorEventOperation = (typeof ConnectorEventOperation)[keyof typeof ConnectorEventOperation];

/**
 * @public
 */
export interface CreateCredentialLockerRequest {
  /**
   * <p>The name of the credential locker.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>An idempotency token. If you retry a request that completed successfully initially using the same client token and parameters, then the retry attempt will succeed without performing any further actions.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>A set of key/value pairs that are used to manage the credential locker.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateCredentialLockerResponse {
  /**
   * <p>The identifier of the credential locker creation request.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the credential locker.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The timestamp value of when the credential locker request occurred.</p>
   * @public
   */
  CreatedAt?: Date | undefined;
}

/**
 * <p>The service quota has been exceeded for this request.</p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * @public
 * @enum
 */
export const DeliveryDestinationType = {
  KINESIS: "KINESIS",
} as const;

/**
 * @public
 */
export type DeliveryDestinationType = (typeof DeliveryDestinationType)[keyof typeof DeliveryDestinationType];

/**
 * @public
 */
export interface CreateDestinationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the customer-managed destination.</p>
   * @public
   */
  DeliveryDestinationArn: string | undefined;

  /**
   * <p>The destination type for the customer-managed destination.</p>
   * @public
   */
  DeliveryDestinationType: DeliveryDestinationType | undefined;

  /**
   * <p>The name of the customer-managed destination.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the delivery destination role.</p>
   * @public
   */
  RoleArn: string | undefined;

  /**
   * <p>An idempotency token. If you retry a request that completed successfully initially using the same client token and parameters, then the retry attempt will succeed without performing any further actions.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The description of the customer-managed destination.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>A set of key/value pairs that are used to manage the destination.</p>
   *
   * @deprecated Tags have been deprecated from this api
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateDestinationResponse {
  /**
   * <p>The name of the customer-managed destination.</p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const LogLevel = {
  DEBUG: "DEBUG",
  ERROR: "ERROR",
  INFO: "INFO",
  WARN: "WARN",
} as const;

/**
 * @public
 */
export type LogLevel = (typeof LogLevel)[keyof typeof LogLevel];

/**
 * @public
 */
export interface CreateEventLogConfigurationRequest {
  /**
   * <p>The type of resource for the event log configuration.</p>
   * @public
   */
  ResourceType: string | undefined;

  /**
   * <p>The identifier of the resource for the event log configuration.</p>
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * <p>The logging level for the event log configuration.</p>
   * @public
   */
  EventLogLevel: LogLevel | undefined;

  /**
   * <p>An idempotency token. If you retry a request that completed successfully initially using the same client token and parameters, then the retry attempt will succeed without performing any further actions.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateEventLogConfigurationResponse {
  /**
   * <p>The identifier of the event log configuration request.</p>
   * @public
   */
  Id?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const Role = {
  CONTROLLER: "CONTROLLER",
  DEVICE: "DEVICE",
} as const;

/**
 * @public
 */
export type Role = (typeof Role)[keyof typeof Role];

/**
 * @public
 */
export interface CreateManagedThingRequest {
  /**
   * <p>The type of device used. This will be the hub controller, cloud device, or AWS IoT device.</p>
   * @public
   */
  Role: Role | undefined;

  /**
   * <p>Owner of the device, usually an indication of whom the device belongs to. This value should not contain personal identifiable information.</p>
   * @public
   */
  Owner?: string | undefined;

  /**
   * <p>The identifier of the credential for the managed thing.</p>
   * @public
   */
  CredentialLockerId?: string | undefined;

  /**
   * <p>The authentication material defining the device connectivity setup requests. The authentication materials used are the device bar code.</p>
   * @public
   */
  AuthenticationMaterial: string | undefined;

  /**
   * <p>The type of authentication material used for device connectivity setup requests.</p>
   * @public
   */
  AuthenticationMaterialType: AuthMaterialType | undefined;

  /**
   * <p>The serial number of the device.</p>
   * @public
   */
  SerialNumber?: string | undefined;

  /**
   * <p>The brand of the device.</p>
   * @public
   */
  Brand?: string | undefined;

  /**
   * <p>The model of the device.</p>
   * @public
   */
  Model?: string | undefined;

  /**
   * <p>The name of the managed thing representing the physical device.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A report of the capabilities for the managed thing.</p>
   * @public
   */
  CapabilityReport?: CapabilityReport | undefined;

  /**
   * <p>The capability schemas that define the functionality and features supported by the managed thing, including device capabilities and their associated properties.</p>
   * @public
   */
  CapabilitySchemas?: CapabilitySchemaItem[] | undefined;

  /**
   * <p>The capabilities of the device such as light bulb.</p>
   * @public
   */
  Capabilities?: string | undefined;

  /**
   * <p>An idempotency token. If you retry a request that completed successfully initially using the same client token and parameters, then the retry attempt will succeed without performing any further actions.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The classification of the managed thing such as light bulb or thermostat.</p>
   * @public
   */
  Classification?: string | undefined;

  /**
   * <p>A set of key/value pairs that are used to manage the managed thing.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The metadata for the managed thing.</p> <note> <p>The <code>managedThing</code> <code>metadata</code> parameter is used for associating attributes with a <code>managedThing</code> that can be used for grouping over-the-air (OTA) tasks. Name value pairs in <code>metadata</code> can be used in the <code>OtaTargetQueryString</code> parameter for the <code>CreateOtaTask</code> API operation.</p> </note>
   * @public
   */
  MetaData?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateManagedThingResponse {
  /**
   * <p>The id of the managed thing.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the managed thing.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The timestamp value of when the device creation request occurred.</p>
   * @public
   */
  CreatedAt?: Date | undefined;
}

/**
 * <p>You are not authorized to perform this operation.</p>
 * @public
 */
export class UnauthorizedException extends __BaseException {
  readonly name: "UnauthorizedException" = "UnauthorizedException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnauthorizedException, __BaseException>) {
    super({
      name: "UnauthorizedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnauthorizedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * @enum
 */
export const EventType = {
  ACCOUNT_ASSOCIATION: "ACCOUNT_ASSOCIATION",
  CONNECTOR_ASSOCIATION: "CONNECTOR_ASSOCIATION",
  CONNECTOR_ERROR_REPORT: "CONNECTOR_ERROR_REPORT",
  DEVICE_COMMAND: "DEVICE_COMMAND",
  DEVICE_COMMAND_REQUEST: "DEVICE_COMMAND_REQUEST",
  DEVICE_DISCOVERY_STATUS: "DEVICE_DISCOVERY_STATUS",
  DEVICE_EVENT: "DEVICE_EVENT",
  DEVICE_LIFE_CYCLE: "DEVICE_LIFE_CYCLE",
  DEVICE_OTA: "DEVICE_OTA",
  DEVICE_STATE: "DEVICE_STATE",
} as const;

/**
 * @public
 */
export type EventType = (typeof EventType)[keyof typeof EventType];

/**
 * @public
 */
export interface CreateNotificationConfigurationRequest {
  /**
   * <p>The type of event triggering a device notification to the customer-managed destination.</p>
   * @public
   */
  EventType: EventType | undefined;

  /**
   * <p>The name of the destination for the notification configuration.</p>
   * @public
   */
  DestinationName: string | undefined;

  /**
   * <p>An idempotency token. If you retry a request that completed successfully initially using the same client token and parameters, then the retry attempt will succeed without performing any further actions.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>A set of key/value pairs that are used to manage the notification configuration.</p>
   *
   * @deprecated Tags has been deprecated from this api
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateNotificationConfigurationResponse {
  /**
   * <p>The type of event triggering a device notification to the customer-managed destination.</p>
   * @public
   */
  EventType?: EventType | undefined;
}

/**
 * @public
 * @enum
 */
export const OtaMechanism = {
  PUSH: "PUSH",
} as const;

/**
 * @public
 */
export type OtaMechanism = (typeof OtaMechanism)[keyof typeof OtaMechanism];

/**
 * @public
 * @enum
 */
export const SchedulingConfigEndBehavior = {
  CANCEL: "CANCEL",
  FORCE_CANCEL: "FORCE_CANCEL",
  STOP_ROLLOUT: "STOP_ROLLOUT",
} as const;

/**
 * @public
 */
export type SchedulingConfigEndBehavior =
  (typeof SchedulingConfigEndBehavior)[keyof typeof SchedulingConfigEndBehavior];

/**
 * <p>Structure representing scheduling maintenance window.</p>
 * @public
 */
export interface ScheduleMaintenanceWindow {
  /**
   * <p>Displays the duration of the next maintenance window.</p>
   * @public
   */
  DurationInMinutes?: number | undefined;

  /**
   * <p>Displays the start time of the next maintenance window.</p>
   * @public
   */
  StartTime?: string | undefined;
}

/**
 * <p>Over-the-air (OTA) task scheduling config.</p>
 * @public
 */
export interface OtaTaskSchedulingConfig {
  /**
   * <p>Specifies the end behavior for all task executions after a task reaches the selected <code>endTime</code>. If <code>endTime</code> is not selected when creating the task, then <code>endBehavior</code> does not apply.</p>
   * @public
   */
  EndBehavior?: SchedulingConfigEndBehavior | undefined;

  /**
   * <p>The time an over-the-air (OTA) task will stop.</p>
   * @public
   */
  EndTime?: string | undefined;

  /**
   * <p>Maintenance window list for over-the-air (OTA) task scheduling config.</p>
   * @public
   */
  MaintenanceWindows?: ScheduleMaintenanceWindow[] | undefined;

  /**
   * <p>The time an over-the-air (OTA) task will start.</p>
   * @public
   */
  StartTime?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const RetryCriteriaFailureType = {
  ALL: "ALL",
  FAILED: "FAILED",
  TIMED_OUT: "TIMED_OUT",
} as const;

/**
 * @public
 */
export type RetryCriteriaFailureType = (typeof RetryCriteriaFailureType)[keyof typeof RetryCriteriaFailureType];

/**
 * <p>Structure representing one retry config criteria.</p>
 * @public
 */
export interface RetryConfigCriteria {
  /**
   * <p>Over-the-air (OTA) retry criteria failure type.</p>
   * @public
   */
  FailureType?: RetryCriteriaFailureType | undefined;

  /**
   * <p>The number of retries allowed for a failure type for the over-the-air (OTA) task.</p>
   * @public
   */
  MinNumberOfRetries?: number | undefined;
}

/**
 * <p>Over-the-air (OTA) task retry config.</p>
 * @public
 */
export interface OtaTaskExecutionRetryConfig {
  /**
   * <p>The list of retry config criteria.</p>
   * @public
   */
  RetryConfigCriteria?: RetryConfigCriteria[] | undefined;
}

/**
 * @public
 * @enum
 */
export const OtaType = {
  CONTINUOUS: "CONTINUOUS",
  ONE_TIME: "ONE_TIME",
} as const;

/**
 * @public
 */
export type OtaType = (typeof OtaType)[keyof typeof OtaType];

/**
 * @public
 * @enum
 */
export const OtaProtocol = {
  HTTP: "HTTP",
} as const;

/**
 * @public
 */
export type OtaProtocol = (typeof OtaProtocol)[keyof typeof OtaProtocol];

/**
 * @public
 */
export interface CreateOtaTaskRequest {
  /**
   * <p>The description of the over-the-air (OTA) task.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The URL to the Amazon S3 bucket where the over-the-air (OTA) task is stored.</p>
   * @public
   */
  S3Url: string | undefined;

  /**
   * <p>The connection protocol the over-the-air (OTA) task uses to update the device.</p>
   * @public
   */
  Protocol?: OtaProtocol | undefined;

  /**
   * <p>The device targeted for the over-the-air (OTA) task.</p>
   * @public
   */
  Target?: string[] | undefined;

  /**
   * <p>The identifier for the over-the-air (OTA) task configuration.</p>
   * @public
   */
  TaskConfigurationId?: string | undefined;

  /**
   * <p>The deployment mechanism for the over-the-air (OTA) task.</p>
   * @public
   */
  OtaMechanism?: OtaMechanism | undefined;

  /**
   * <p>The frequency type for the over-the-air (OTA) task.</p>
   * @public
   */
  OtaType: OtaType | undefined;

  /**
   * <p>The query string to add things to the thing group.</p>
   * @public
   */
  OtaTargetQueryString?: string | undefined;

  /**
   * <p>An idempotency token. If you retry a request that completed successfully initially using the same client token and parameters, then the retry attempt will succeed without performing any further actions.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>Over-the-air (OTA) task scheduling config.</p>
   * @public
   */
  OtaSchedulingConfig?: OtaTaskSchedulingConfig | undefined;

  /**
   * <p>Over-the-air (OTA) task retry config.</p>
   * @public
   */
  OtaTaskExecutionRetryConfig?: OtaTaskExecutionRetryConfig | undefined;

  /**
   * <p>A set of key/value pairs that are used to manage the over-the-air (OTA) task.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateOtaTaskResponse {
  /**
   * <p>The identifier of the over-the-air (OTA) task.</p>
   * @public
   */
  TaskId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the over-the-air (OTA) task.</p>
   * @public
   */
  TaskArn?: string | undefined;

  /**
   * <p>A description of the over-the-air (OTA) task.</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * <p>Over-the-air (OTA) task abort config.</p>
 * @public
 */
export interface OtaTaskAbortConfig {
  /**
   * <p>The list of criteria for the abort config.</p>
   * @public
   */
  AbortConfigCriteriaList?: AbortConfigCriteria[] | undefined;
}

/**
 * <p>Structure representing rollout config criteria.</p>
 * @public
 */
export interface RolloutRateIncreaseCriteria {
  /**
   * <p>The threshold for number of notified things that will initiate the increase in rate of rollout.</p>
   * @public
   */
  numberOfNotifiedThings?: number | undefined;

  /**
   * <p>The threshold for number of succeeded things that will initiate the increase in rate of rollout.</p>
   * @public
   */
  numberOfSucceededThings?: number | undefined;
}

/**
 * <p>Structure representing exponential rate of rollout for an over-the-air (OTA) task.</p>
 * @public
 */
export interface ExponentialRolloutRate {
  /**
   * <p>The base rate per minute for the rollout of an over-the-air (OTA) task.</p>
   * @public
   */
  BaseRatePerMinute?: number | undefined;

  /**
   * <p>The incremental factor for increasing the rollout rate of an over-the-air (OTA) task.</p>
   * @public
   */
  IncrementFactor?: number | undefined;

  /**
   * <p>The criteria for increasing the rollout rate of an over-the-air (OTA) task.</p>
   * @public
   */
  RateIncreaseCriteria?: RolloutRateIncreaseCriteria | undefined;
}

/**
 * <p>Over-the-air (OTA) task rollout config.</p>
 * @public
 */
export interface OtaTaskExecutionRolloutConfig {
  /**
   * <p>Structure representing exponential rate of rollout for an over-the-air (OTA) task.</p>
   * @public
   */
  ExponentialRolloutRate?: ExponentialRolloutRate | undefined;

  /**
   * <p>The maximum number of things that will be notified of a pending task, per minute.</p>
   * @public
   */
  MaximumPerMinute?: number | undefined;
}

/**
 * <p>Over-the-air (OTA) task timeout config.</p>
 * @public
 */
export interface OtaTaskTimeoutConfig {
  /**
   * <p>Specifies the amount of time the device has to finish execution of this task. The timeout interval can be anywhere between 1 minute and 7 days.</p>
   * @public
   */
  InProgressTimeoutInMinutes?: number | undefined;
}

/**
 * <p>Structure representing a push config.</p>
 * @public
 */
export interface PushConfig {
  /**
   * <p>Structure representing one abort config.</p>
   * @public
   */
  AbortConfig?: OtaTaskAbortConfig | undefined;

  /**
   * <p>Structure representing one rollout config.</p>
   * @public
   */
  RolloutConfig?: OtaTaskExecutionRolloutConfig | undefined;

  /**
   * <p>Structure representing one timeout config.</p>
   * @public
   */
  TimeoutConfig?: OtaTaskTimeoutConfig | undefined;
}

/**
 * @public
 */
export interface CreateOtaTaskConfigurationRequest {
  /**
   * <p>A description of the over-the-air (OTA) task configuration.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The name of the over-the-air (OTA) task.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Describes the type of configuration used for the over-the-air (OTA) task.</p>
   * @public
   */
  PushConfig?: PushConfig | undefined;

  /**
   * <p>An idempotency token. If you retry a request that completed successfully initially using the same client token and parameters, then the retry attempt will succeed without performing any further actions.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateOtaTaskConfigurationResponse {
  /**
   * <p>The identifier of the over-the-air (OTA) task configuration.</p>
   * @public
   */
  TaskConfigurationId?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ProvisioningType = {
  FLEET_PROVISIONING: "FLEET_PROVISIONING",
  JITR: "JITR",
} as const;

/**
 * @public
 */
export type ProvisioningType = (typeof ProvisioningType)[keyof typeof ProvisioningType];

/**
 * @public
 */
export interface CreateProvisioningProfileRequest {
  /**
   * <p>The type of provisioning workflow the device uses for onboarding to IoT managed integrations.</p>
   * @public
   */
  ProvisioningType: ProvisioningType | undefined;

  /**
   * <p>The id of the certificate authority (CA) certificate.</p>
   * @public
   */
  CaCertificate?: string | undefined;

  /**
   * <p>The name of the provisioning template.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>An idempotency token. If you retry a request that completed successfully initially using the same client token and parameters, then the retry attempt will succeed without performing any further actions.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>A set of key/value pairs that are used to manage the provisioning profile.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateProvisioningProfileResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the provisioning template used in the provisioning profile.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name of the provisioning template.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The type of provisioning workflow the device uses for onboarding to IoT managed integrations.</p>
   * @public
   */
  ProvisioningType?: ProvisioningType | undefined;

  /**
   * <p>The identifier of the provisioning profile.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The id of the claim certificate.</p>
   * @public
   */
  ClaimCertificate?: string | undefined;

  /**
   * <p>The private key of the claim certificate. This is stored securely on the device for validating the connection endpoint with IoT managed integrations using the public key.</p>
   * @public
   */
  ClaimCertificatePrivateKey?: string | undefined;
}

/**
 * <p>Structure describing one Credential Locker.</p>
 * @public
 */
export interface CredentialLockerSummary {
  /**
   * <p>The id of the credential locker.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the credential locker.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name of the credential locker.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The timestampe value of when the credential locker was created at.</p>
   * @public
   */
  CreatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface DeleteCredentialLockerRequest {
  /**
   * <p>The identifier of the credential locker.</p>
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface GetCredentialLockerRequest {
  /**
   * <p>The identifier of the credential locker.</p>
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface GetCredentialLockerResponse {
  /**
   * <p>The identifier of the credential locker.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the credential locker.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name of the credential locker.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The timestamp value of when the credential locker requset occurred.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>A set of key/value pairs that are used to manage the credential locker.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListCredentialLockersRequest {
  /**
   * <p>A token that can be used to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return at one time.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListCredentialLockersResponse {
  /**
   * <p>The list of credential lockers.</p>
   * @public
   */
  Items?: CredentialLockerSummary[] | undefined;

  /**
   * <p>A token that can be used to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteDestinationRequest {
  /**
   * <p>The id of the customer-managed destination.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteEventLogConfigurationRequest {
  /**
   * <p>The identifier of the event log configuration.</p>
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface DeleteManagedThingRequest {
  /**
   * <p>The id of the managed thing.</p>
   * @public
   */
  Identifier: string | undefined;

  /**
   * <p>When set to <code>TRUE</code>, a forceful deteletion of the managed thing will occur. When set to <code>FALSE</code>, a non-forceful deletion of the managed thing will occur.</p>
   * @public
   */
  Force?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteNotificationConfigurationRequest {
  /**
   * <p>The type of event triggering a device notification to the customer-managed destination.</p>
   * @public
   */
  EventType: EventType | undefined;
}

/**
 * @public
 */
export interface DeleteOtaTaskRequest {
  /**
   * <p>The identifier of the over-the-air (OTA) task.</p>
   * @public
   */
  Identifier: string | undefined;
}

/**
 * <p>The request exceeds a service limit or quota. Adjust your request parameters and try again.</p>
 * @public
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface DeleteOtaTaskConfigurationRequest {
  /**
   * <p>The identifier of the over-the-air (OTA) task configuration.</p>
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteProvisioningProfileRequest {
  /**
   * <p>The name of the provisioning template.</p>
   * @public
   */
  Identifier: string | undefined;
}

/**
 * Request for deregister a managed thing from account association
 * @public
 */
export interface DeregisterAccountAssociationRequest {
  /**
   * <p>The identifier of the managed thing to be deregistered from the account association.</p>
   * @public
   */
  ManagedThingId: string | undefined;

  /**
   * <p>The unique identifier of the account association to be deregistered.</p>
   * @public
   */
  AccountAssociationId: string | undefined;
}

/**
 * <p>Structure describing a destination for IoT managed integrations to deliver notifications for a device.</p>
 * @public
 */
export interface DestinationSummary {
  /**
   * <p>The description of the customer-managed destination.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the customer-managed destination.</p>
   * @public
   */
  DeliveryDestinationArn?: string | undefined;

  /**
   * <p>The destination type for the customer-managed destination.</p>
   * @public
   */
  DeliveryDestinationType?: DeliveryDestinationType | undefined;

  /**
   * <p>The name of the customer-managed destination.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the delivery destination.</p>
   * @public
   */
  RoleArn?: string | undefined;
}

/**
 * @public
 */
export interface GetDestinationRequest {
  /**
   * <p>The name of the customer-managed destination.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface GetDestinationResponse {
  /**
   * <p>The description of the customer-managed destination.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the customer-managed destination.</p>
   * @public
   */
  DeliveryDestinationArn?: string | undefined;

  /**
   * <p>The destination type for the customer-managed destination.</p>
   * @public
   */
  DeliveryDestinationType?: DeliveryDestinationType | undefined;

  /**
   * <p>The name of the customer-managed destination.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the delivery destination role.</p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p>The timestamp value of when the destination creation requset occurred.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The timestamp value of when the destination update requset occurred.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * <p>A set of key/value pairs that are used to manage the customer-managed destination.</p>
   *
   * @deprecated Tags has been deprecated from this api
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListDestinationsRequest {
  /**
   * <p>A token that can be used to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return at one time.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListDestinationsResponse {
  /**
   * <p>The list of destinations.</p>
   * @public
   */
  DestinationList?: DestinationSummary[] | undefined;

  /**
   * <p>A token that can be used to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDestinationRequest {
  /**
   * <p>The name of the customer-managed destination.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the customer-managed destination.</p>
   * @public
   */
  DeliveryDestinationArn?: string | undefined;

  /**
   * <p>The destination type for the customer-managed destination.</p>
   * @public
   */
  DeliveryDestinationType?: DeliveryDestinationType | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the delivery destination role.</p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p>The description of the customer-managed destination.</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * <p>Matter attribute used in capability report.</p>
 * @public
 */
export interface MatterCapabilityReportAttribute {
  /**
   * <p>The id of the Matter attribute.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>Name for the Amazon Web Services Matter capability report attribute.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>Value for the Amazon Web Services Matter capability report attribute.</p>
   * @public
   */
  value?: __DocumentType | undefined;
}

/**
 * <p>Capability used in Matter capability report.</p>
 * @public
 */
export interface MatterCapabilityReportCluster {
  /**
   * <p>The id of the Amazon Web Services Matter capability report cluster.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The id of the revision for the Amazon Web Services Matter capability report.</p>
   * @public
   */
  revision: number | undefined;

  /**
   * <p>The id of the schema version.</p>
   * @public
   */
  publicId?: string | undefined;

  /**
   * <p>The capability name used in the Amazon Web Services Matter capability report.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The spec version used in the Amazon Web Services Matter capability report.</p>
   * @public
   */
  specVersion?: string | undefined;

  /**
   * <p>The attributes of the Amazon Web Services Matter capability report.</p>
   * @public
   */
  attributes?: MatterCapabilityReportAttribute[] | undefined;

  /**
   * <p>The commands used with the Amazon Web Services Matter capability report.</p>
   * @public
   */
  commands?: string[] | undefined;

  /**
   * <p>The events used with the Amazon Web Services Matter capability report.</p>
   * @public
   */
  events?: string[] | undefined;

  /**
   * <p>32 bit-map used to indicate which features a cluster supports.</p>
   * @public
   */
  featureMap?: number | undefined;

  /**
   * <p>Matter clusters used in capability report.</p>
   * @public
   */
  generatedCommands?: string[] | undefined;

  /**
   * <p>The fabric index for the Amazon Web Services Matter capability report.</p>
   * @public
   */
  fabricIndex?: number | undefined;
}

/**
 * <p>Matter endpoint used in capability report.</p>
 * @public
 */
export interface MatterCapabilityReportEndpoint {
  /**
   * <p>The id of the Amazon Web Services Matter capability report endpoint.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The type of device.</p>
   * @public
   */
  deviceTypes: string[] | undefined;

  /**
   * <p>Matter clusters used in capability report.</p>
   * @public
   */
  clusters: MatterCapabilityReportCluster[] | undefined;

  /**
   * <p>Heirachy of child endpoints contained in the given endpoint.</p>
   * @public
   */
  parts?: string[] | undefined;

  /**
   * <p>Semantic information related to endpoint.</p>
   * @public
   */
  semanticTags?: string[] | undefined;

  /**
   * <p>Semantic information related to endpoint.</p>
   * @public
   */
  clientClusters?: string[] | undefined;
}

/**
 * <p>Matter based capability report.</p>
 * @public
 */
export interface MatterCapabilityReport {
  /**
   * <p>The version of the capability report.</p>
   * @public
   */
  version: string | undefined;

  /**
   * <p>The numeric identifier of the node.</p>
   * @public
   */
  nodeId?: string | undefined;

  /**
   * <p>The endpoints used in the capability report.</p>
   * @public
   */
  endpoints: MatterCapabilityReportEndpoint[] | undefined;
}

/**
 * <p>Describe the device using the relevant metadata and supported clusters for device discovery.</p>
 * @public
 */
export interface Device {
  /**
   * <p>The device id as defined by the connector.</p> <note> <p>This parameter is used for cloud-to-cloud devices only.</p> </note>
   * @public
   */
  ConnectorDeviceId: string | undefined;

  /**
   * <p>The name of the device as defined by the connector.</p>
   * @public
   */
  ConnectorDeviceName?: string | undefined;

  /**
   * <p>The capability report for the device.</p>
   * @public
   */
  CapabilityReport: MatterCapabilityReport | undefined;

  /**
   * <p>Report of all capabilities supported by the device.</p>
   * @public
   */
  CapabilitySchemas?: CapabilitySchemaItem[] | undefined;

  /**
   * <p>The metadata attributes for a device.</p>
   * @public
   */
  DeviceMetadata?: __DocumentType | undefined;
}

/**
 * @public
 * @enum
 */
export const DiscoveryType = {
  CLOUD: "CLOUD",
  CUSTOM: "CUSTOM",
  ZIGBEE: "ZIGBEE",
  ZWAVE: "ZWAVE",
} as const;

/**
 * @public
 */
export type DiscoveryType = (typeof DiscoveryType)[keyof typeof DiscoveryType];

/**
 * @public
 * @enum
 */
export const DeviceDiscoveryStatus = {
  FAILED: "FAILED",
  RUNNING: "RUNNING",
  SUCCEEDED: "SUCCEEDED",
  TIMED_OUT: "TIMED_OUT",
} as const;

/**
 * @public
 */
export type DeviceDiscoveryStatus = (typeof DeviceDiscoveryStatus)[keyof typeof DeviceDiscoveryStatus];

/**
 * <p>Structure containing summary information about a device discovery job, including its identifier, type, and status.</p>
 * @public
 */
export interface DeviceDiscoverySummary {
  /**
   * <p>The unique identifier of the device discovery job.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The type of discovery process used to find devices.</p>
   * @public
   */
  DiscoveryType?: DiscoveryType | undefined;

  /**
   * <p>The current status of the device discovery job.</p>
   * @public
   */
  Status?: DeviceDiscoveryStatus | undefined;
}

/**
 * @public
 */
export interface GetDeviceDiscoveryRequest {
  /**
   * <p>The id of the device discovery job request.</p>
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface GetDeviceDiscoveryResponse {
  /**
   * <p>The id of the device discovery job request.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the device discovery job request.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The discovery type supporting the type of device to be discovered in the device discovery job request.</p>
   * @public
   */
  DiscoveryType: DiscoveryType | undefined;

  /**
   * <p>The status of the device discovery job request.</p>
   * @public
   */
  Status: DeviceDiscoveryStatus | undefined;

  /**
   * <p>The timestamp value for the start time of the device discovery.</p>
   * @public
   */
  StartedAt: Date | undefined;

  /**
   * <p>The id of the end-user's IoT hub.</p>
   * @public
   */
  ControllerId?: string | undefined;

  /**
   * <p>The ID tracking the current discovery process for one connector association.</p>
   *
   * @deprecated ConnectorAssociationId has been deprecated
   * @public
   */
  ConnectorAssociationId?: string | undefined;

  /**
   * <p>The identifier of the account association used for the device discovery.</p>
   * @public
   */
  AccountAssociationId?: string | undefined;

  /**
   * <p>The timestamp value for the completion time of the device discovery.</p>
   * @public
   */
  FinishedAt?: Date | undefined;

  /**
   * <p>A set of key/value pairs that are used to manage the device discovery request.</p>
   *
   * @deprecated Tags have been deprecated from this api
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListDeviceDiscoveriesRequest {
  /**
   * <p>A token used for pagination of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of device discovery jobs to return in a single response.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The discovery type to filter device discovery jobs by.</p>
   * @public
   */
  TypeFilter?: DiscoveryType | undefined;

  /**
   * <p>The status to filter device discovery jobs by.</p>
   * @public
   */
  StatusFilter?: DeviceDiscoveryStatus | undefined;
}

/**
 * @public
 */
export interface ListDeviceDiscoveriesResponse {
  /**
   * <p>The list of device discovery jobs that match the specified criteria.</p>
   * @public
   */
  Items?: DeviceDiscoverySummary[] | undefined;

  /**
   * <p>A token used for pagination of results when there are more device discovery jobs than can be returned in a single response.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDiscoveredDevicesRequest {
  /**
   * <p>The identifier of the device discovery job to list discovered devices for.</p>
   * @public
   */
  Identifier: string | undefined;

  /**
   * <p>A token used for pagination of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of discovered devices to return in a single response.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const DiscoveryModification = {
  DISCOVERED: "DISCOVERED",
  NO_CHANGE: "NO_CHANGE",
  UPDATED: "UPDATED",
} as const;

/**
 * @public
 */
export type DiscoveryModification = (typeof DiscoveryModification)[keyof typeof DiscoveryModification];

/**
 * <p>Structure containing summary information about a device discovered during a device discovery job.</p>
 * @public
 */
export interface DiscoveredDeviceSummary {
  /**
   * <p>The third-party device identifier as defined by the connector. This identifier must not contain personal identifiable information (PII).</p>
   * @public
   */
  ConnectorDeviceId?: string | undefined;

  /**
   * <p>The name of the device as defined by the connector or third-party system.</p>
   * @public
   */
  ConnectorDeviceName?: string | undefined;

  /**
   * <p>The list of device types or categories that the discovered device belongs to.</p>
   * @public
   */
  DeviceTypes?: string[] | undefined;

  /**
   * <p>The identifier of the managed thing created for this discovered device, if one exists.</p>
   * @public
   */
  ManagedThingId?: string | undefined;

  /**
   * <p>The status of the discovered device, indicating whether it has been added, removed, or modified since the last discovery.</p>
   * @public
   */
  Modification?: DiscoveryModification | undefined;

  /**
   * <p>The timestamp indicating when the device was discovered.</p>
   * @public
   */
  DiscoveredAt?: Date | undefined;

  /**
   * <p>The brand of the discovered device.</p>
   * @public
   */
  Brand?: string | undefined;

  /**
   * <p>The model of the discovered device.</p>
   * @public
   */
  Model?: string | undefined;

  /**
   * <p>The authentication material required for connecting to the discovered device, such as credentials or tokens.</p>
   * @public
   */
  AuthenticationMaterial?: string | undefined;
}

/**
 * @public
 */
export interface ListDiscoveredDevicesResponse {
  /**
   * <p>The list of discovered devices that match the specified criteria.</p>
   * @public
   */
  Items?: DiscoveredDeviceSummary[] | undefined;

  /**
   * <p>A token used for pagination of results when there are more discovered devices than can be returned in a single response.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const DiscoveryAuthMaterialType = {
  ZWAVE_INSTALL_CODE: "ZWAVE_INSTALL_CODE",
} as const;

/**
 * @public
 */
export type DiscoveryAuthMaterialType = (typeof DiscoveryAuthMaterialType)[keyof typeof DiscoveryAuthMaterialType];

/**
 * @public
 */
export interface StartDeviceDiscoveryRequest {
  /**
   * <p>The discovery type supporting the type of device to be discovered in the device discovery task request.</p>
   * @public
   */
  DiscoveryType: DiscoveryType | undefined;

  /**
   * <p>Additional protocol-specific details required for device discovery, which vary based on the discovery type.</p> <note> <p>For a <code>DiscoveryType</code> of <code>CUSTOM</code>, the string-to-string map must have a key value of <code>Name</code> set to a non-empty-string.</p> </note>
   * @public
   */
  CustomProtocolDetail?: Record<string, string> | undefined;

  /**
   * <p>The id of the end-user's IoT hub.</p>
   * @public
   */
  ControllerIdentifier?: string | undefined;

  /**
   * <p>The id of the connector association.</p>
   *
   * @deprecated ConnectorAssociationIdentifier is deprecated
   * @public
   */
  ConnectorAssociationIdentifier?: string | undefined;

  /**
   * <p>The identifier of the cloud-to-cloud account association to use for discovery of third-party devices.</p>
   * @public
   */
  AccountAssociationId?: string | undefined;

  /**
   * <p>The authentication material required to start the local device discovery job request.</p>
   * @public
   */
  AuthenticationMaterial?: string | undefined;

  /**
   * <p>The type of authentication material used for device discovery jobs.</p>
   * @public
   */
  AuthenticationMaterialType?: DiscoveryAuthMaterialType | undefined;

  /**
   * <p>An idempotency token. If you retry a request that completed successfully initially using the same client token and parameters, then the retry attempt will succeed without performing any further actions.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>A set of key/value pairs that are used to manage the device discovery request.</p>
   *
   * @deprecated Tags have been deprecated from this api
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface StartDeviceDiscoveryResponse {
  /**
   * <p>The id of the device discovery job request.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The timestamp value for the start time of the device discovery.</p>
   * @public
   */
  StartedAt?: Date | undefined;
}

/**
 * @public
 * @enum
 */
export const DisconnectReasonValue = {
  AUTH_ERROR: "AUTH_ERROR",
  CLIENT_ERROR: "CLIENT_ERROR",
  CLIENT_INITIATED_DISCONNECT: "CLIENT_INITIATED_DISCONNECT",
  CONNECTION_LOST: "CONNECTION_LOST",
  CUSTOMAUTH_TTL_EXPIRATION: "CUSTOMAUTH_TTL_EXPIRATION",
  DUPLICATE_CLIENTID: "DUPLICATE_CLIENTID",
  FORBIDDEN_ACCESS: "FORBIDDEN_ACCESS",
  MQTT_KEEP_ALIVE_TIMEOUT: "MQTT_KEEP_ALIVE_TIMEOUT",
  NONE: "NONE",
  SERVER_ERROR: "SERVER_ERROR",
  SERVER_INITIATED_DISCONNECT: "SERVER_INITIATED_DISCONNECT",
  THROTTLED: "THROTTLED",
  UNKNOWN: "UNKNOWN",
  WEBSOCKET_TTL_EXPIRATION: "WEBSOCKET_TTL_EXPIRATION",
} as const;

/**
 * @public
 */
export type DisconnectReasonValue = (typeof DisconnectReasonValue)[keyof typeof DisconnectReasonValue];

/**
 * @public
 * @enum
 */
export const EncryptionType = {
  CUSTOMER_KEY_ENCRYPTION: "CUSTOMER_KEY_ENCRYPTION",
  MANAGED_INTEGRATIONS_DEFAULT_ENCRYPTION: "MANAGED_INTEGRATIONS_DEFAULT_ENCRYPTION",
} as const;

/**
 * @public
 */
export type EncryptionType = (typeof EncryptionType)[keyof typeof EncryptionType];

/**
 * <p>List of event log configurations.</p>
 * @public
 */
export interface EventLogConfigurationSummary {
  /**
   * <p>The identifier of the event log configuration.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The type of resource for the event log configuration.</p>
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * <p>The identifier of the resource for the event log configuration.</p>
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * <p>The logging level for the event log configuration.</p>
   * @public
   */
  EventLogLevel?: LogLevel | undefined;
}

/**
 * @public
 */
export interface GetEventLogConfigurationRequest {
  /**
   * <p>The identifier of the event log configuration.</p>
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface GetEventLogConfigurationResponse {
  /**
   * <p>The identifier of the event log configuration.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The type of resource for the event log configuration.</p>
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * <p>The identifier of the resource for the event log configuration.</p>
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * <p>The logging level for the event log configuration.</p>
   * @public
   */
  EventLogLevel?: LogLevel | undefined;
}

/**
 * @public
 */
export interface ListEventLogConfigurationsRequest {
  /**
   * <p>A token that can be used to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return at one time.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListEventLogConfigurationsResponse {
  /**
   * <p>A list of each event log configuration and pertinent information.</p>
   * @public
   */
  EventLogConfigurationList?: EventLogConfigurationSummary[] | undefined;

  /**
   * <p>A token that can be used to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateEventLogConfigurationRequest {
  /**
   * <p>The log configuration id.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The log level for the event in terms of severity.</p>
   * @public
   */
  EventLogLevel: LogLevel | undefined;
}

/**
 * @public
 */
export interface GetCustomEndpointRequest {}

/**
 * @public
 */
export interface GetCustomEndpointResponse {
  /**
   * <p>The IoT managed integrations dedicated, custom endpoint for the device to route traffic through.</p>
   * @public
   */
  EndpointAddress: string | undefined;
}

/**
 * @public
 */
export interface GetDefaultEncryptionConfigurationRequest {}

/**
 * @public
 */
export interface GetDefaultEncryptionConfigurationResponse {
  /**
   * <p>Provides the status of the default encryption configuration for an Amazon Web Services account.</p>
   * @public
   */
  configurationStatus: ConfigurationStatus | undefined;

  /**
   * <p>The type of encryption used for the encryption configuration.</p>
   * @public
   */
  encryptionType: EncryptionType | undefined;

  /**
   * <p>The Key Amazon Resource Name (ARN) of the AWS KMS key used for KMS encryption if you use <code>KMS_BASED_ENCRYPTION</code>.</p>
   * @public
   */
  kmsKeyArn?: string | undefined;
}

/**
 * <p>An unexpected error has occurred.</p>
 * @public
 */
export class InternalFailureException extends __BaseException {
  readonly name: "InternalFailureException" = "InternalFailureException";
  readonly $fault: "server" = "server";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalFailureException, __BaseException>) {
    super({
      name: "InternalFailureException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalFailureException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface GetHubConfigurationRequest {}

/**
 * @public
 */
export interface GetHubConfigurationResponse {
  /**
   * <p>A user-defined integer value that represents the hub token timer expiry setting in seconds.</p>
   * @public
   */
  HubTokenTimerExpirySettingInSeconds?: number | undefined;

  /**
   * <p>The timestamp value of when the hub configuration was updated.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetManagedThingRequest {
  /**
   * <p>The id of the managed thing.</p>
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 * @enum
 */
export const HubNetworkMode = {
  NETWORK_WIDE_EXCLUSION: "NETWORK_WIDE_EXCLUSION",
  STANDARD: "STANDARD",
} as const;

/**
 * @public
 */
export type HubNetworkMode = (typeof HubNetworkMode)[keyof typeof HubNetworkMode];

/**
 * @public
 * @enum
 */
export const ProvisioningStatus = {
  ACTIVATED: "ACTIVATED",
  DELETED: "DELETED",
  DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
  DELETION_FAILED: "DELETION_FAILED",
  DISCOVERED: "DISCOVERED",
  ISOLATED: "ISOLATED",
  PRE_ASSOCIATED: "PRE_ASSOCIATED",
  UNASSOCIATED: "UNASSOCIATED",
} as const;

/**
 * @public
 */
export type ProvisioningStatus = (typeof ProvisioningStatus)[keyof typeof ProvisioningStatus];

/**
 * @public
 */
export interface GetManagedThingResponse {
  /**
   * <p>The id of the managed thing.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the managed thing.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>Owner of the device, usually an indication of whom the device belongs to. This value should not contain personal identifiable information.</p>
   * @public
   */
  Owner?: string | undefined;

  /**
   * <p>The identifier of the credential locker for the managed thing.</p>
   * @public
   */
  CredentialLockerId?: string | undefined;

  /**
   * <p>The id of the advertised product.</p>
   * @public
   */
  AdvertisedProductId?: string | undefined;

  /**
   * <p>The type of device used. This will be the Amazon Web Services hub controller, cloud device, or IoT device.</p>
   * @public
   */
  Role?: Role | undefined;

  /**
   * <p>The provisioning status of the device in the provisioning workflow for onboarding to IoT managed integrations.</p>
   * @public
   */
  ProvisioningStatus?: ProvisioningStatus | undefined;

  /**
   * <p>The name of the managed thing representing the physical device.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The model of the device.</p>
   * @public
   */
  Model?: string | undefined;

  /**
   * <p>The brand of the device.</p>
   * @public
   */
  Brand?: string | undefined;

  /**
   * <p>The serial number of the device.</p>
   * @public
   */
  SerialNumber?: string | undefined;

  /**
   * <p>The universal product code (UPC) of the device model. The UPC is typically used in the United States of America and Canada.</p>
   * @public
   */
  UniversalProductCode?: string | undefined;

  /**
   * <p>The unique 13 digit number that identifies the managed thing.</p>
   * @public
   */
  InternationalArticleNumber?: string | undefined;

  /**
   * <p>The id of the connector policy.</p> <note> <p>This parameter is used for cloud-to-cloud devices only.</p> </note>
   *
   * @deprecated ConnectorPolicyId is deprecated
   * @public
   */
  ConnectorPolicyId?: string | undefined;

  /**
   * <p>The identifier of the connector destination associated with this managed thing.</p>
   * @public
   */
  ConnectorDestinationId?: string | undefined;

  /**
   * <p>The third-party device id as defined by the connector. This device id must not contain personal identifiable information (PII).</p> <note> <p>This parameter is used for cloud-to-cloud devices only.</p> </note>
   * @public
   */
  ConnectorDeviceId?: string | undefined;

  /**
   * <p>A Zwave device-specific key used during device activation.</p> <note> <p>This parameter is used for Zwave devices only.</p> </note>
   * @public
   */
  DeviceSpecificKey?: string | undefined;

  /**
   * <p>The media access control (MAC) address for the device represented by the managed thing.</p> <note> <p>This parameter is used for Zigbee devices only.</p> </note>
   * @public
   */
  MacAddress?: string | undefined;

  /**
   * <p>Id of the controller device used for the discovery job.</p>
   * @public
   */
  ParentControllerId?: string | undefined;

  /**
   * <p>The classification of the managed thing such as light bulb or thermostat.</p>
   * @public
   */
  Classification?: string | undefined;

  /**
   * <p>The timestamp value of when the device creation request occurred.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The timestamp value of when the managed thing was last updated at.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * <p>The timestampe value of when the device was activated.</p>
   * @public
   */
  ActivatedAt?: Date | undefined;

  /**
   * <p>The network mode for the hub-connected device.</p>
   * @public
   */
  HubNetworkMode?: HubNetworkMode | undefined;

  /**
   * <p>The metadata for the managed thing.</p>
   * @public
   */
  MetaData?: Record<string, string> | undefined;

  /**
   * <p>A set of key/value pairs that are used to manage the managed thing.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetManagedThingCapabilitiesRequest {
  /**
   * <p>The id of the device.</p>
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface GetManagedThingCapabilitiesResponse {
  /**
   * <p>The id of the device.</p>
   * @public
   */
  ManagedThingId?: string | undefined;

  /**
   * <p>The capabilities of the device such as light bulb.</p>
   * @public
   */
  Capabilities?: string | undefined;

  /**
   * <p>A report of the capabilities for the managed thing.</p>
   * @public
   */
  CapabilityReport?: CapabilityReport | undefined;
}

/**
 * @public
 */
export interface GetManagedThingConnectivityDataRequest {
  /**
   * <p>The identifier of a managed thing.</p>
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface GetManagedThingConnectivityDataResponse {
  /**
   * <p>The id of a managed thing.</p>
   * @public
   */
  ManagedThingId?: string | undefined;

  /**
   * <p>The connectivity status for a managed thing.</p>
   * @public
   */
  Connected?: boolean | undefined;

  /**
   * <p>The timestamp value of when the connectivity status for a managed thing was last taken.</p>
   * @public
   */
  Timestamp?: Date | undefined;

  /**
   * <p>The reason for the connectivity disconnect with the managed thing.</p>
   * @public
   */
  DisconnectReason?: DisconnectReasonValue | undefined;
}

/**
 * @public
 */
export interface GetManagedThingMetaDataRequest {
  /**
   * <p>The managed thing id.</p>
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface GetManagedThingMetaDataResponse {
  /**
   * <p>The managed thing id.</p>
   * @public
   */
  ManagedThingId?: string | undefined;

  /**
   * <p>The metadata for the managed thing.</p>
   * @public
   */
  MetaData?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetManagedThingStateRequest {
  /**
   * <p>The id of the device.</p>
   * @public
   */
  ManagedThingId: string | undefined;
}

/**
 * <p>State capabilities added for the managed thing.</p>
 * @public
 */
export interface StateCapability {
  /**
   * <p>The id of the managed thing in the capability report.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>Name for the Amazon Web Services capability.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Version for the Amazon Web Services capability.</p>
   * @public
   */
  version: string | undefined;

  /**
   * <p>Describe the command capability with the properties it supports.</p>
   * @public
   */
  properties?: __DocumentType | undefined;
}

/**
 * <p>Describe the endpoint with an Id, a name, and the relevant capabilities for reporting state</p>
 * @public
 */
export interface StateEndpoint {
  /**
   * <p>Numeric identifier of the endpoint</p>
   * @public
   */
  endpointId: string | undefined;

  /**
   * <p>Describe the endpoint with an id, a name, and the relevant capabilities for the reporting state.</p>
   * @public
   */
  capabilities: StateCapability[] | undefined;
}

/**
 * @public
 */
export interface GetManagedThingStateResponse {
  /**
   * <p>The device endpoint.</p>
   * @public
   */
  Endpoints: StateEndpoint[] | undefined;
}

/**
 * @public
 */
export interface GetNotificationConfigurationRequest {
  /**
   * <p>The type of event triggering a device notification to the customer-managed destination.</p>
   * @public
   */
  EventType: EventType | undefined;
}

/**
 * @public
 */
export interface GetNotificationConfigurationResponse {
  /**
   * <p>The type of event triggering a device notification to the customer-managed destination.</p>
   * @public
   */
  EventType?: EventType | undefined;

  /**
   * <p>The name of the destination for the notification configuration.</p>
   * @public
   */
  DestinationName?: string | undefined;

  /**
   * <p>The timestamp value of when the notification configuration was created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The timestamp value of when the notification configuration was last updated.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * <p>A set of key/value pairs that are used to manage the notification configuration.</p>
   *
   * @deprecated Tags has been deprecated for this api
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetOtaTaskRequest {
  /**
   * <p>The over-the-air (OTA) task id.</p>
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 * @enum
 */
export const OtaStatus = {
  CANCELED: "CANCELED",
  COMPLETED: "COMPLETED",
  DELETION_IN_PROGRESS: "DELETION_IN_PROGRESS",
  IN_PROGRESS: "IN_PROGRESS",
  SCHEDULED: "SCHEDULED",
} as const;

/**
 * @public
 */
export type OtaStatus = (typeof OtaStatus)[keyof typeof OtaStatus];

/**
 * <p>Details about the over-the-air (OTA) task process.</p>
 * @public
 */
export interface TaskProcessingDetails {
  /**
   * <p>The number of canceled things in an over-the-air (OTA) task.</p>
   * @public
   */
  NumberOfCanceledThings?: number | undefined;

  /**
   * <p>The number of failed things in an over-the-air (OTA) task.</p>
   * @public
   */
  NumberOfFailedThings?: number | undefined;

  /**
   * <p>The number of in progress things in an over-the-air (OTA) task.</p>
   * @public
   */
  NumberOfInProgressThings?: number | undefined;

  /**
   * <p>The number of queued things in an over-the-air (OTA) task.</p>
   * @public
   */
  numberOfQueuedThings?: number | undefined;

  /**
   * <p>The number of rejected things in an over-the-air (OTA) task.</p>
   * @public
   */
  numberOfRejectedThings?: number | undefined;

  /**
   * <p>The number of removed things in an over-the-air (OTA) task.</p>
   * @public
   */
  numberOfRemovedThings?: number | undefined;

  /**
   * <p>The number of succeeded things in an over-the-air (OTA) task.</p>
   * @public
   */
  numberOfSucceededThings?: number | undefined;

  /**
   * <p>The number of timed out things in an over-the-air (OTA) task.</p>
   * @public
   */
  numberOfTimedOutThings?: number | undefined;

  /**
   * <p>The targets of the over-the-air (OTA) task.</p>
   * @public
   */
  processingTargets?: string[] | undefined;
}

/**
 * @public
 */
export interface GetOtaTaskResponse {
  /**
   * <p>The id of the over-the-air (OTA) task.</p>
   * @public
   */
  TaskId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the over-the-air (OTA) task</p>
   * @public
   */
  TaskArn?: string | undefined;

  /**
   * <p>The description of the over-the-air (OTA) task.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The URL to the Amazon S3 bucket where the over-the-air (OTA) task is stored.</p>
   * @public
   */
  S3Url?: string | undefined;

  /**
   * <p>The connection protocol the over-the-air (OTA) task uses to update the device.</p>
   * @public
   */
  Protocol?: OtaProtocol | undefined;

  /**
   * <p>The frequency type for the over-the-air (OTA) task.</p>
   * @public
   */
  OtaType?: OtaType | undefined;

  /**
   * <p>The query string to add things to the thing group.</p>
   * @public
   */
  OtaTargetQueryString?: string | undefined;

  /**
   * <p>The deployment mechanism for the over-the-air (OTA) task.</p>
   * @public
   */
  OtaMechanism?: OtaMechanism | undefined;

  /**
   * <p>The device targeted for the over-the-air (OTA) task.</p>
   * @public
   */
  Target?: string[] | undefined;

  /**
   * <p>The timestamp value of when the over-the-air (OTA) task was created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The timestamp value of when the over-the-air (OTA) task was last updated at.</p>
   * @public
   */
  LastUpdatedAt?: Date | undefined;

  /**
   * <p>The identifier for the over-the-air (OTA) task configuration.</p>
   * @public
   */
  TaskConfigurationId?: string | undefined;

  /**
   * <p>The processing details of all over-the-air (OTA) tasks.</p>
   * @public
   */
  TaskProcessingDetails?: TaskProcessingDetails | undefined;

  /**
   * <p>Over-the-air (OTA) task scheduling config.</p>
   * @public
   */
  OtaSchedulingConfig?: OtaTaskSchedulingConfig | undefined;

  /**
   * <p>Over-the-air (OTA) task retry config.</p>
   * @public
   */
  OtaTaskExecutionRetryConfig?: OtaTaskExecutionRetryConfig | undefined;

  /**
   * <p>The status of the over-the-air (OTA) task.</p>
   * @public
   */
  Status?: OtaStatus | undefined;

  /**
   * <p>A set of key/value pairs that are used to manage the over-the-air (OTA) task.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetOtaTaskConfigurationRequest {
  /**
   * <p>The over-the-air (OTA) task configuration id.</p>
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface GetOtaTaskConfigurationResponse {
  /**
   * <p>The over-the-air (OTA) task configuration id.</p>
   * @public
   */
  TaskConfigurationId?: string | undefined;

  /**
   * <p>The name of the over-the-air (OTA) task configuration.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Describes the type of configuration used for the over-the-air (OTA) task.</p>
   * @public
   */
  PushConfig?: PushConfig | undefined;

  /**
   * <p>A description of the over-the-air (OTA) task configuration.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The timestamp value of when the over-the-air (OTA) task configuration was created at.</p>
   * @public
   */
  CreatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetProvisioningProfileRequest {
  /**
   * <p>The provisioning template the device uses for the provisioning process.</p>
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface GetProvisioningProfileResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the provisioning template used in the provisioning profile.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name of the provisioning template.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The type of provisioning workflow the device uses for onboarding to IoT managed integrations.</p>
   * @public
   */
  ProvisioningType?: ProvisioningType | undefined;

  /**
   * <p>The provisioning profile id..</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The id of the claim certificate.</p>
   * @public
   */
  ClaimCertificate?: string | undefined;

  /**
   * <p>A set of key/value pairs that are used to manage the provisioning profile.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetRuntimeLogConfigurationRequest {
  /**
   * <p>The id for a managed thing.</p>
   * @public
   */
  ManagedThingId: string | undefined;
}

/**
 * <p>The different configurations for runtime logs.</p>
 * @public
 */
export interface RuntimeLogConfigurations {
  /**
   * <p>The different log levels available for configuration.</p>
   * @public
   */
  LogLevel?: LogLevel | undefined;

  /**
   * <p>The different log levels available for configuration.</p>
   * @public
   */
  LogFlushLevel?: LogLevel | undefined;

  /**
   * <p>Configuration of where to store runtime logs in the device.</p>
   * @public
   */
  LocalStoreLocation?: string | undefined;

  /**
   * <p>Configuration to set the maximum number of runtime log files that can be stored on the device before the oldest files are deleted or overwritten.</p>
   * @public
   */
  LocalStoreFileRotationMaxFiles?: number | undefined;

  /**
   * <p>Configuration to set the maximum bytes of runtime logs that can be stored on the device before the oldest logs are deleted or overwritten.</p>
   * @public
   */
  LocalStoreFileRotationMaxBytes?: number | undefined;

  /**
   * <p>Configuration to enable or disable uploading of runtime logs to the cloud.</p>
   * @public
   */
  UploadLog?: boolean | undefined;

  /**
   * <p>Configuration to set the time interval in minutes between each batch of runtime logs that the device uploads to the cloud.</p>
   * @public
   */
  UploadPeriodMinutes?: number | undefined;

  /**
   * <p>Configuration to enable or disable deleting of runtime logs in the device once uploaded to the cloud.</p>
   * @public
   */
  DeleteLocalStoreAfterUpload?: boolean | undefined;
}

/**
 * @public
 */
export interface GetRuntimeLogConfigurationResponse {
  /**
   * <p>The id for a managed thing.</p>
   * @public
   */
  ManagedThingId?: string | undefined;

  /**
   * <p>The runtime log configuration for a managed thing.</p>
   * @public
   */
  RuntimeLogConfigurations?: RuntimeLogConfigurations | undefined;
}

/**
 * @public
 * @enum
 */
export const SchemaVersionType = {
  CAPABILITY: "capability",
  DEFINITION: "definition",
} as const;

/**
 * @public
 */
export type SchemaVersionType = (typeof SchemaVersionType)[keyof typeof SchemaVersionType];

/**
 * @public
 */
export interface GetSchemaVersionRequest {
  /**
   * <p>The type of schema version.</p>
   * @public
   */
  Type: SchemaVersionType | undefined;

  /**
   * <p>Schema id with a version specified. If the version is missing, it defaults to latest version.</p>
   * @public
   */
  SchemaVersionedId: string | undefined;

  /**
   * <p>The format of the schema version.</p>
   * @public
   */
  Format?: SchemaVersionFormat | undefined;
}

/**
 * @public
 * @enum
 */
export const SchemaVersionVisibility = {
  PRIVATE: "PRIVATE",
  PUBLIC: "PUBLIC",
} as const;

/**
 * @public
 */
export type SchemaVersionVisibility = (typeof SchemaVersionVisibility)[keyof typeof SchemaVersionVisibility];

/**
 * @public
 */
export interface GetSchemaVersionResponse {
  /**
   * <p>The id of the schema version.</p>
   * @public
   */
  SchemaId?: string | undefined;

  /**
   * <p>The type of schema version.</p>
   * @public
   */
  Type?: SchemaVersionType | undefined;

  /**
   * <p>The description of the schema version.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The name of the schema version.</p>
   * @public
   */
  Namespace?: string | undefined;

  /**
   * <p>The schema version. If this is left blank, it defaults to the latest version.</p>
   * @public
   */
  SemanticVersion?: string | undefined;

  /**
   * <p>The visibility of the schema version.</p>
   * @public
   */
  Visibility?: SchemaVersionVisibility | undefined;

  /**
   * <p>The schema of the schema version.</p>
   * @public
   */
  Schema?: __DocumentType | undefined;
}

/**
 * @public
 */
export interface PutHubConfigurationRequest {
  /**
   * <p>A user-defined integer value that represents the hub token timer expiry setting in seconds.</p>
   * @public
   */
  HubTokenTimerExpirySettingInSeconds: number | undefined;
}

/**
 * @public
 */
export interface PutHubConfigurationResponse {
  /**
   * <p>A user-defined integer value that represents the hub token timer expiry setting in seconds.</p>
   * @public
   */
  HubTokenTimerExpirySettingInSeconds?: number | undefined;
}

/**
 * <p>The request is not valid.</p>
 * @public
 */
export class InvalidRequestException extends __BaseException {
  readonly name: "InvalidRequestException" = "InvalidRequestException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface PutDefaultEncryptionConfigurationRequest {
  /**
   * <p>The type of encryption used for the encryption configuration.</p>
   * @public
   */
  encryptionType: EncryptionType | undefined;

  /**
   * <p>The Key Amazon Resource Name (ARN) of the AWS KMS key used for KMS encryption if you use <code>KMS_BASED_ENCRYPTION</code>.</p>
   * @public
   */
  kmsKeyArn?: string | undefined;
}

/**
 * @public
 */
export interface PutDefaultEncryptionConfigurationResponse {
  /**
   * <p>Provides the status of the default encryption configuration for an Amazon Web Services account.</p>
   * @public
   */
  configurationStatus: ConfigurationStatus | undefined;

  /**
   * <p>The type of encryption used for the encryption configuration.</p>
   * @public
   */
  encryptionType: EncryptionType | undefined;

  /**
   * <p>The Key Amazon Resource Name (ARN) of the AWS KMS key used for KMS encryption if you use <code>KMS_BASED_ENCRYPTION</code>.</p>
   * @public
   */
  kmsKeyArn?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The ARN of the resource for which to list tags.
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * A set of key/value pairs that are used to manage the resource.
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListManagedThingAccountAssociationsRequest {
  /**
   * <p>The identifier of the managed thing to list account associations for.</p>
   * @public
   */
  ManagedThingId?: string | undefined;

  /**
   * <p>The identifier of the account association to filter results by. When specified, only associations with this account association ID will be returned.</p>
   * @public
   */
  AccountAssociationId?: string | undefined;

  /**
   * <p>The maximum number of account associations to return in a single response.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A token used for pagination of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Structure representing an association between a managed thing and an account association, which connects a device to a third-party account.</p>
 * @public
 */
export interface ManagedThingAssociation {
  /**
   * <p>The identifier of the managed thing in the association.</p>
   * @public
   */
  ManagedThingId?: string | undefined;

  /**
   * <p>The identifier of the account association in the association.</p>
   * @public
   */
  AccountAssociationId?: string | undefined;
}

/**
 * @public
 */
export interface ListManagedThingAccountAssociationsResponse {
  /**
   * <p>The list of managed thing associations that match the specified criteria, including the managed thing ID and account association ID for each association.</p>
   * @public
   */
  Items?: ManagedThingAssociation[] | undefined;

  /**
   * <p>A token used for pagination of results when there are more account associations than can be returned in a single response.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface RegisterAccountAssociationRequest {
  /**
   * <p>The identifier of the managed thing to register with the account association.</p>
   * @public
   */
  ManagedThingId: string | undefined;

  /**
   * <p>The identifier of the account association to register with the managed thing.</p>
   * @public
   */
  AccountAssociationId: string | undefined;

  /**
   * <p>The identifier of the device discovery job associated with this registration.</p>
   * @public
   */
  DeviceDiscoveryId: string | undefined;
}

/**
 * @public
 */
export interface RegisterAccountAssociationResponse {
  /**
   * <p>The identifier of the account association that was registered.</p>
   * @public
   */
  AccountAssociationId?: string | undefined;

  /**
   * <p>The identifier of the device discovery job associated with this registration.</p>
   * @public
   */
  DeviceDiscoveryId?: string | undefined;

  /**
   * <p>The identifier of the managed thing that was registered with the account association.</p>
   * @public
   */
  ManagedThingId?: string | undefined;
}

/**
 * @public
 */
export interface SendManagedThingCommandRequest {
  /**
   * <p>The id of the device.</p>
   * @public
   */
  ManagedThingId: string | undefined;

  /**
   * <p>The device endpoint.</p>
   * @public
   */
  Endpoints: CommandEndpoint[] | undefined;

  /**
   * <p>The ID tracking the current discovery process for one connector association.</p>
   *
   * @deprecated ConnectorAssociationId has been deprecated
   * @public
   */
  ConnectorAssociationId?: string | undefined;

  /**
   * <p>The identifier of the account association to use when sending a command to a managed thing.</p>
   * @public
   */
  AccountAssociationId?: string | undefined;
}

/**
 * @public
 */
export interface SendManagedThingCommandResponse {
  /**
   * <p>The trace request identifier. This is specified by the device owner, but will be generated by IoT managed integrations if not provided by the device owner.</p>
   * @public
   */
  TraceId?: string | undefined;
}

/**
 * @public
 */
export interface ListManagedThingsRequest {
  /**
   * <p>Filter on device owners when listing managed things.</p>
   * @public
   */
  OwnerFilter?: string | undefined;

  /**
   * <p>Filter on a credential locker for a managed thing.</p>
   * @public
   */
  CredentialLockerFilter?: string | undefined;

  /**
   * <p>Filter on the type of device used. This will be the Amazon Web Services hub controller, cloud device, or IoT device.</p>
   * @public
   */
  RoleFilter?: Role | undefined;

  /**
   * <p>Filter on a parent controller id for a managed thing.</p>
   * @public
   */
  ParentControllerIdentifierFilter?: string | undefined;

  /**
   * <p>Filter on a connector policy id for a managed thing.</p>
   *
   * @deprecated ConnectorPolicyIdFilter is deprecated
   * @public
   */
  ConnectorPolicyIdFilter?: string | undefined;

  /**
   * <p>Filter managed things by the connector destination ID they are associated with.</p>
   * @public
   */
  ConnectorDestinationIdFilter?: string | undefined;

  /**
   * <p>Filter managed things by the connector device ID they are associated with. When specified, only managed things with this connector device ID will be returned.</p>
   * @public
   */
  ConnectorDeviceIdFilter?: string | undefined;

  /**
   * <p>Filter on the serial number of the device.</p>
   * @public
   */
  SerialNumberFilter?: string | undefined;

  /**
   * <p>Filter on the status of the device.</p>
   * @public
   */
  ProvisioningStatusFilter?: ProvisioningStatus | undefined;

  /**
   * <p>A token that can be used to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return at one time.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Structure representing one managed thing.</p>
 * @public
 */
export interface ManagedThingSummary {
  /**
   * <p>The id of the device.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the managed thing.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The id of the advertised product.</p>
   * @public
   */
  AdvertisedProductId?: string | undefined;

  /**
   * <p>The brand of the device.</p>
   * @public
   */
  Brand?: string | undefined;

  /**
   * <p>The classification of the managed thing such as light bulb or thermostat.</p>
   * @public
   */
  Classification?: string | undefined;

  /**
   * <p>The third-party device id as defined by the connector. This device id must not contain personal identifiable information (PII).</p> <note> <p>This parameter is used for cloud-to-cloud devices only.</p> </note>
   * @public
   */
  ConnectorDeviceId?: string | undefined;

  /**
   * <p>The id of the connector policy.</p> <note> <p>This parameter is used for cloud-to-cloud devices only.</p> </note>
   *
   * @deprecated ConnectorPolicyId has been deprecated
   * @public
   */
  ConnectorPolicyId?: string | undefined;

  /**
   * <p>The identifier of the connector destination associated with this managed thing, if applicable.</p>
   * @public
   */
  ConnectorDestinationId?: string | undefined;

  /**
   * <p>The model of the device.</p>
   * @public
   */
  Model?: string | undefined;

  /**
   * <p>The name of the managed thing representing the physical device.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Owner of the device, usually an indication of whom the device belongs to. This value should not contain personal identifiable information.</p>
   * @public
   */
  Owner?: string | undefined;

  /**
   * <p>The identifier of the credential locker for the managed thing.</p>
   * @public
   */
  CredentialLockerId?: string | undefined;

  /**
   * <p>Id of the controller device used for the discovery job.</p>
   * @public
   */
  ParentControllerId?: string | undefined;

  /**
   * <p>The provisioning status of the device in the provisioning workflow for onboarding to IoT managed integrations.</p>
   * @public
   */
  ProvisioningStatus?: ProvisioningStatus | undefined;

  /**
   * <p>The type of device used. This will be the Amazon Web Services hub controller, cloud device, or IoT device.</p>
   * @public
   */
  Role?: Role | undefined;

  /**
   * <p>The serial number of the device.</p>
   * @public
   */
  SerialNumber?: string | undefined;

  /**
   * <p>The timestamp value of when the device creation request occurred.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The timestamp value of when the managed thing was last updated at.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * <p>The timestampe value of when the managed thing was activated at.</p>
   * @public
   */
  ActivatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListManagedThingsResponse {
  /**
   * <p>The list of managed things.</p>
   * @public
   */
  Items?: ManagedThingSummary[] | undefined;

  /**
   * <p>A token that can be used to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListManagedThingSchemasRequest {
  /**
   * <p>The managed thing id.</p>
   * @public
   */
  Identifier: string | undefined;

  /**
   * <p>Filter on an endpoint id.</p>
   * @public
   */
  EndpointIdFilter?: string | undefined;

  /**
   * <p>Filter on a capability id.</p>
   * @public
   */
  CapabilityIdFilter?: string | undefined;

  /**
   * <p>A token that can be used to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return at one time.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Structure representing one schema item associated with a managed thing.</p>
 * @public
 */
export interface ManagedThingSchemaListItem {
  /**
   * <p>The id of the endpoint for a managed thing.</p>
   * @public
   */
  EndpointId?: string | undefined;

  /**
   * <p>The id of the capability for a managed thing.</p>
   * @public
   */
  CapabilityId?: string | undefined;

  /**
   * <p>The validation schema for one schema item associated with a managed thing.</p>
   * @public
   */
  Schema?: __DocumentType | undefined;
}

/**
 * @public
 */
export interface ListManagedThingSchemasResponse {
  /**
   * <p>The list of managed thing schemas.</p>
   * @public
   */
  Items?: ManagedThingSchemaListItem[] | undefined;

  /**
   * <p>A token that can be used to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateManagedThingRequest {
  /**
   * <p>The id of the managed thing.</p>
   * @public
   */
  Identifier: string | undefined;

  /**
   * <p>Owner of the device, usually an indication of whom the device belongs to. This value should not contain personal identifiable information.</p>
   * @public
   */
  Owner?: string | undefined;

  /**
   * <p>The identifier of the credential for the managed thing.</p>
   * @public
   */
  CredentialLockerId?: string | undefined;

  /**
   * <p>The serial number of the device.</p>
   * @public
   */
  SerialNumber?: string | undefined;

  /**
   * <p>The brand of the device.</p>
   * @public
   */
  Brand?: string | undefined;

  /**
   * <p>The model of the device.</p>
   * @public
   */
  Model?: string | undefined;

  /**
   * <p>The name of the managed thing representing the physical device.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A report of the capabilities for the managed thing.</p>
   * @public
   */
  CapabilityReport?: CapabilityReport | undefined;

  /**
   * <p>The updated capability schemas that define the functionality and features supported by the managed thing.</p>
   * @public
   */
  CapabilitySchemas?: CapabilitySchemaItem[] | undefined;

  /**
   * <p>The capabilities of the device such as light bulb.</p>
   * @public
   */
  Capabilities?: string | undefined;

  /**
   * <p>The classification of the managed thing such as light bulb or thermostat.</p>
   * @public
   */
  Classification?: string | undefined;

  /**
   * <p>The network mode for the hub-connected device.</p>
   * @public
   */
  HubNetworkMode?: HubNetworkMode | undefined;

  /**
   * <p>The metadata for the managed thing.</p>
   * @public
   */
  MetaData?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListNotificationConfigurationsRequest {
  /**
   * <p>The maximum number of results to return at one time.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A token that can be used to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Structure describing a notification configuration.</p>
 * @public
 */
export interface NotificationConfigurationSummary {
  /**
   * <p>The type of event triggering a device notification to the customer-managed destination.</p>
   * @public
   */
  EventType?: EventType | undefined;

  /**
   * <p>The name of the destination for the notification configuration.</p>
   * @public
   */
  DestinationName?: string | undefined;
}

/**
 * @public
 */
export interface ListNotificationConfigurationsResponse {
  /**
   * <p>The list of notification configurations.</p>
   * @public
   */
  NotificationConfigurationList?: NotificationConfigurationSummary[] | undefined;

  /**
   * <p>A token that can be used to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateNotificationConfigurationRequest {
  /**
   * <p>The type of event triggering a device notification to the customer-managed destination.</p>
   * @public
   */
  EventType: EventType | undefined;

  /**
   * <p>The name of the destination for the notification configuration.</p>
   * @public
   */
  DestinationName: string | undefined;
}

/**
 * @public
 */
export interface ListOtaTaskConfigurationsRequest {
  /**
   * <p>A token that can be used to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return at one time.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Structure representing one over-the-air (OTA) task configuration.</p>
 * @public
 */
export interface OtaTaskConfigurationSummary {
  /**
   * <p>The id of the over-the-air (OTA) task configuration</p>
   * @public
   */
  TaskConfigurationId?: string | undefined;

  /**
   * <p>The name of the over-the-air (OTA) task configuration.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The timestamp value of when the over-the-air (OTA) task configuration was created at.</p>
   * @public
   */
  CreatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListOtaTaskConfigurationsResponse {
  /**
   * <p>The list of the over-the-air (OTA) task configurations.</p>
   * @public
   */
  Items?: OtaTaskConfigurationSummary[] | undefined;

  /**
   * <p>A token that can be used to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListOtaTaskExecutionsRequest {
  /**
   * <p>The over-the-air (OTA) task id.</p>
   * @public
   */
  Identifier: string | undefined;

  /**
   * <p>A token that can be used to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return at one time.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const OtaTaskExecutionStatus = {
  CANCELED: "CANCELED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  QUEUED: "QUEUED",
  REJECTED: "REJECTED",
  REMOVED: "REMOVED",
  SUCCEEDED: "SUCCEEDED",
  TIMED_OUT: "TIMED_OUT",
} as const;

/**
 * @public
 */
export type OtaTaskExecutionStatus = (typeof OtaTaskExecutionStatus)[keyof typeof OtaTaskExecutionStatus];

/**
 * <p>Structure representing one over-the-air (OTA) task execution summary.</p>
 * @public
 */
export interface OtaTaskExecutionSummary {
  /**
   * <p>The execution number of the over-the-air (OTA) task execution summary.</p>
   * @public
   */
  ExecutionNumber?: number | undefined;

  /**
   * <p>The timestamp value of when the over-the-air (OTA) task execution summary was last updated.</p>
   * @public
   */
  LastUpdatedAt?: Date | undefined;

  /**
   * <p>The timestamp value of when the over-the-air (OTA) task execution summary is targeted to start.</p>
   * @public
   */
  QueuedAt?: Date | undefined;

  /**
   * <p>The number of retry attempts for starting the over-the-air (OTA) task execution summary after a failed attempt.</p>
   * @public
   */
  RetryAttempt?: number | undefined;

  /**
   * <p>The timestamp value of when the over-the-air (OTA) task execution summary started.</p>
   * @public
   */
  StartedAt?: Date | undefined;

  /**
   * <p>The status of the over-the-air (OTA) task execution summary.</p>
   * @public
   */
  Status?: OtaTaskExecutionStatus | undefined;
}

/**
 * <p>Structure representing one execution summary.</p>
 * @public
 */
export interface OtaTaskExecutionSummaries {
  /**
   * <p>Structure representing one over-the-air (OTA) task execution summary</p>
   * @public
   */
  TaskExecutionSummary?: OtaTaskExecutionSummary | undefined;

  /**
   * <p>The id of a managed thing.</p>
   * @public
   */
  ManagedThingId?: string | undefined;
}

/**
 * @public
 */
export interface ListOtaTaskExecutionsResponse {
  /**
   * <p>A list of all of the over-the-air (OTA) task executions.</p>
   * @public
   */
  ExecutionSummaries?: OtaTaskExecutionSummaries[] | undefined;

  /**
   * <p>A token that can be used to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListOtaTasksRequest {
  /**
   * <p>A token that can be used to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return at one time.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Structure representing one over-the-air (OTA) task.</p>
 * @public
 */
export interface OtaTaskSummary {
  /**
   * <p>The id of the over-the-air (OTA) task.</p>
   * @public
   */
  TaskId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the over-the-air (OTA) task.</p>
   * @public
   */
  TaskArn?: string | undefined;

  /**
   * <p>The timestamp value of when the over-the-air (OTA) task was created at.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The timestamp value of when the over-the-air (OTA) task was last updated at.</p>
   * @public
   */
  LastUpdatedAt?: Date | undefined;

  /**
   * <p>The identifier for the over-the-air (OTA) task configuration.</p>
   * @public
   */
  TaskConfigurationId?: string | undefined;

  /**
   * <p>The status of the over-the-air (OTA) task summary.</p>
   * @public
   */
  Status?: OtaStatus | undefined;
}

/**
 * @public
 */
export interface ListOtaTasksResponse {
  /**
   * <p>A list of all of the over-the-air (OTA) tasks.</p>
   * @public
   */
  Tasks?: OtaTaskSummary[] | undefined;

  /**
   * <p>A token that can be used to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateOtaTaskRequest {
  /**
   * <p>The over-the-air (OTA) task id.</p>
   * @public
   */
  Identifier: string | undefined;

  /**
   * <p>The description of the over-the-air (OTA) task.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The identifier for the over-the-air (OTA) task configuration.</p>
   * @public
   */
  TaskConfigurationId?: string | undefined;
}

/**
 * @public
 */
export interface ListProvisioningProfilesRequest {
  /**
   * <p>A token that can be used to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return at one time.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Structure describing a provisioning profile. </p>
 * @public
 */
export interface ProvisioningProfileSummary {
  /**
   * <p>The name of the provisioning template.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The identifier of the provisioning profile.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the provisioning template used in the provisioning profile.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The type of provisioning workflow the device uses for onboarding to IoT managed integrations.</p>
   * @public
   */
  ProvisioningType?: ProvisioningType | undefined;
}

/**
 * @public
 */
export interface ListProvisioningProfilesResponse {
  /**
   * <p>The list of provisioning profiles.</p>
   * @public
   */
  Items?: ProvisioningProfileSummary[] | undefined;

  /**
   * <p>A token that can be used to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface RegisterCustomEndpointRequest {}

/**
 * @public
 */
export interface RegisterCustomEndpointResponse {
  /**
   * <p>The IoT managed integrations dedicated, custom endpoint for the device to route traffic through.</p>
   * @public
   */
  EndpointAddress: string | undefined;
}

/**
 * @public
 */
export interface PutRuntimeLogConfigurationRequest {
  /**
   * <p>The id for a managed thing.</p>
   * @public
   */
  ManagedThingId: string | undefined;

  /**
   * <p>The runtime log configuration for a managed thing.</p>
   * @public
   */
  RuntimeLogConfigurations: RuntimeLogConfigurations | undefined;
}

/**
 * @public
 */
export interface ResetRuntimeLogConfigurationRequest {
  /**
   * <p>The id of a managed thing.</p>
   * @public
   */
  ManagedThingId: string | undefined;
}

/**
 * @public
 */
export interface ListSchemaVersionsRequest {
  /**
   * <p>Filter on the type of schema version.</p>
   * @public
   */
  Type: SchemaVersionType | undefined;

  /**
   * <p>The maximum number of results to return at one time.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A token that can be used to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Filter on the id of the schema version.</p>
   * @public
   */
  SchemaId?: string | undefined;

  /**
   * <p>Filter on the name of the schema version.</p>
   * @public
   */
  Namespace?: string | undefined;

  /**
   * <p>The visibility of the schema version.</p>
   * @public
   */
  Visibility?: SchemaVersionVisibility | undefined;

  /**
   * <p>The schema version. If this is left blank, it defaults to the latest version.</p>
   * @public
   */
  SemanticVersion?: string | undefined;
}

/**
 * <p>List item describing a schema version.</p>
 * @public
 */
export interface SchemaVersionListItem {
  /**
   * <p>The identifier of the schema version.</p>
   * @public
   */
  SchemaId?: string | undefined;

  /**
   * <p>The type of schema version.</p>
   * @public
   */
  Type?: SchemaVersionType | undefined;

  /**
   * <p>A description of the schema version.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The name of the schema version.</p>
   * @public
   */
  Namespace?: string | undefined;

  /**
   * <p>The schema version. If this is left blank, it defaults to the latest version.</p>
   * @public
   */
  SemanticVersion?: string | undefined;

  /**
   * <p>The visibility of the schema version.</p>
   * @public
   */
  Visibility?: SchemaVersionVisibility | undefined;
}

/**
 * @public
 */
export interface ListSchemaVersionsResponse {
  /**
   * <p>The list of schema versions.</p>
   * @public
   */
  Items?: SchemaVersionListItem[] | undefined;

  /**
   * <p>A token that can be used to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Describe a Matter cluster with an id, and the relevant attributes, commands, and events.</p>
 * @public
 */
export interface MatterCluster {
  /**
   * <p>The cluster id.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The Matter attributes.</p>
   * @public
   */
  attributes?: __DocumentType | undefined;

  /**
   * <p>Describe the Matter commands with the Matter command identifier mapped to the command fields.</p>
   * @public
   */
  commands?: Record<string, __DocumentType> | undefined;

  /**
   * <p>Describe the Matter events with the Matter event identifier mapped to the event fields.</p>
   * @public
   */
  events?: Record<string, __DocumentType> | undefined;
}

/**
 * <p>Structure describing a managed thing.</p>
 * @public
 */
export interface MatterEndpoint {
  /**
   * <p>The Matter endpoint id.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>A list of Matter clusters for a managed thing.</p>
   * @public
   */
  clusters?: MatterCluster[] | undefined;
}

/**
 * @public
 */
export interface SendConnectorEventRequest {
  /**
   * <p>The id of the connector between the third-party cloud provider and IoT managed integrations.</p>
   * @public
   */
  ConnectorId: string | undefined;

  /**
   * <p>The id of the third-party cloud provider.</p>
   * @public
   */
  UserId?: string | undefined;

  /**
   * <p>The Open Connectivity Foundation (OCF) operation requested to be performed on the managed thing.</p> <note> <p>The field op can have a value of "I" or "U". The field "cn" will contain the capability types.</p> </note>
   * @public
   */
  Operation: ConnectorEventOperation | undefined;

  /**
   * <p>The Open Connectivity Foundation (OCF) security specification version for the operation being requested on the managed thing. For more information, see <a href="https://openconnectivity.org/specs/OCF_Security_Specification_v1.0.0.pdf">OCF Security Specification</a>.</p>
   * @public
   */
  OperationVersion?: string | undefined;

  /**
   * <p>The status code of the Open Connectivity Foundation (OCF) operation being performed on the managed thing.</p>
   * @public
   */
  StatusCode?: number | undefined;

  /**
   * <p>The device state change event payload.</p> <p>This parameter will include the following three fields:</p> <ul> <li> <p> <code>uri</code>: <code>schema auc://&lt;PARTNER-DEVICE-ID&gt;/ResourcePath</code> (The <code>Resourcepath</code> corresponds to an OCF resource.)</p> </li> <li> <p> <code>op</code>: For device state changes, this field must populate as <code>n+d</code>.</p> </li> <li> <p> <code>cn</code>: The content depends on the OCF resource referenced in <code>ResourcePath</code>.</p> </li> </ul>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The id for the device discovery job.</p>
   * @public
   */
  DeviceDiscoveryId?: string | undefined;

  /**
   * <p>The third-party device id as defined by the connector. This device id must not contain personal identifiable information (PII).</p> <note> <p>This parameter is used for cloud-to-cloud devices only.</p> </note>
   * @public
   */
  ConnectorDeviceId?: string | undefined;

  /**
   * <p>The trace request identifier used to correlate a command request and response. This is specified by the device owner, but will be generated by IoT managed integrations if not provided by the device owner.</p>
   * @public
   */
  TraceId?: string | undefined;

  /**
   * <p>The list of devices.</p>
   * @public
   */
  Devices?: Device[] | undefined;

  /**
   * <p>The device endpoint.</p>
   * @public
   */
  MatterEndpoint?: MatterEndpoint | undefined;
}

/**
 * @public
 */
export interface SendConnectorEventResponse {
  /**
   * <p>The id of the connector between the third-party cloud provider and IoT managed integrations.</p>
   * @public
   */
  ConnectorId: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The ARN of the resource to which to add tags.
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * A set of key/value pairs that are used to manage the resource
   * @public
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * The ARN of the resource to which to add tags.
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * A list of tag keys to remove from the resource.
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @internal
 */
export const CreateAccountAssociationRequestFilterSensitiveLog = (obj: CreateAccountAssociationRequest): any => ({
  ...obj,
  ...(obj.Tags && { Tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateAccountAssociationResponseFilterSensitiveLog = (obj: CreateAccountAssociationResponse): any => ({
  ...obj,
  ...(obj.OAuthAuthorizationUrl && { OAuthAuthorizationUrl: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetAccountAssociationResponseFilterSensitiveLog = (obj: GetAccountAssociationResponse): any => ({
  ...obj,
  ...(obj.OAuthAuthorizationUrl && { OAuthAuthorizationUrl: SENSITIVE_STRING }),
  ...(obj.Tags && { Tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const StartAccountAssociationRefreshResponseFilterSensitiveLog = (
  obj: StartAccountAssociationRefreshResponse
): any => ({
  ...obj,
  ...(obj.OAuthAuthorizationUrl && { OAuthAuthorizationUrl: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CapabilityActionFilterSensitiveLog = (obj: CapabilityAction): any => ({
  ...obj,
  ...(obj.parameters && { parameters: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CommandCapabilityFilterSensitiveLog = (obj: CommandCapability): any => ({
  ...obj,
  ...(obj.actions && { actions: obj.actions.map((item) => CapabilityActionFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const CommandEndpointFilterSensitiveLog = (obj: CommandEndpoint): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateCredentialLockerRequestFilterSensitiveLog = (obj: CreateCredentialLockerRequest): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
  ...(obj.Tags && { Tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateDestinationRequestFilterSensitiveLog = (obj: CreateDestinationRequest): any => ({
  ...obj,
  ...(obj.Tags && { Tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateManagedThingRequestFilterSensitiveLog = (obj: CreateManagedThingRequest): any => ({
  ...obj,
  ...(obj.Owner && { Owner: SENSITIVE_STRING }),
  ...(obj.AuthenticationMaterial && { AuthenticationMaterial: SENSITIVE_STRING }),
  ...(obj.SerialNumber && { SerialNumber: SENSITIVE_STRING }),
  ...(obj.Brand && { Brand: SENSITIVE_STRING }),
  ...(obj.Model && { Model: SENSITIVE_STRING }),
  ...(obj.Classification && { Classification: SENSITIVE_STRING }),
  ...(obj.Tags && { Tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateNotificationConfigurationRequestFilterSensitiveLog = (
  obj: CreateNotificationConfigurationRequest
): any => ({
  ...obj,
  ...(obj.Tags && { Tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateOtaTaskRequestFilterSensitiveLog = (obj: CreateOtaTaskRequest): any => ({
  ...obj,
  ...(obj.Tags && { Tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateOtaTaskConfigurationRequestFilterSensitiveLog = (obj: CreateOtaTaskConfigurationRequest): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateProvisioningProfileRequestFilterSensitiveLog = (obj: CreateProvisioningProfileRequest): any => ({
  ...obj,
  ...(obj.CaCertificate && { CaCertificate: SENSITIVE_STRING }),
  ...(obj.Tags && { Tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateProvisioningProfileResponseFilterSensitiveLog = (obj: CreateProvisioningProfileResponse): any => ({
  ...obj,
  ...(obj.ClaimCertificate && { ClaimCertificate: SENSITIVE_STRING }),
  ...(obj.ClaimCertificatePrivateKey && { ClaimCertificatePrivateKey: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CredentialLockerSummaryFilterSensitiveLog = (obj: CredentialLockerSummary): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetCredentialLockerResponseFilterSensitiveLog = (obj: GetCredentialLockerResponse): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
  ...(obj.Tags && { Tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListCredentialLockersResponseFilterSensitiveLog = (obj: ListCredentialLockersResponse): any => ({
  ...obj,
  ...(obj.Items && { Items: obj.Items.map((item) => CredentialLockerSummaryFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const GetDestinationResponseFilterSensitiveLog = (obj: GetDestinationResponse): any => ({
  ...obj,
  ...(obj.Tags && { Tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DeviceFilterSensitiveLog = (obj: Device): any => ({
  ...obj,
  ...(obj.ConnectorDeviceId && { ConnectorDeviceId: SENSITIVE_STRING }),
  ...(obj.ConnectorDeviceName && { ConnectorDeviceName: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetDeviceDiscoveryResponseFilterSensitiveLog = (obj: GetDeviceDiscoveryResponse): any => ({
  ...obj,
  ...(obj.Tags && { Tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DiscoveredDeviceSummaryFilterSensitiveLog = (obj: DiscoveredDeviceSummary): any => ({
  ...obj,
  ...(obj.ConnectorDeviceId && { ConnectorDeviceId: SENSITIVE_STRING }),
  ...(obj.ConnectorDeviceName && { ConnectorDeviceName: SENSITIVE_STRING }),
  ...(obj.Brand && { Brand: SENSITIVE_STRING }),
  ...(obj.Model && { Model: SENSITIVE_STRING }),
  ...(obj.AuthenticationMaterial && { AuthenticationMaterial: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListDiscoveredDevicesResponseFilterSensitiveLog = (obj: ListDiscoveredDevicesResponse): any => ({
  ...obj,
  ...(obj.Items && { Items: obj.Items.map((item) => DiscoveredDeviceSummaryFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const StartDeviceDiscoveryRequestFilterSensitiveLog = (obj: StartDeviceDiscoveryRequest): any => ({
  ...obj,
  ...(obj.AuthenticationMaterial && { AuthenticationMaterial: SENSITIVE_STRING }),
  ...(obj.Tags && { Tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetManagedThingResponseFilterSensitiveLog = (obj: GetManagedThingResponse): any => ({
  ...obj,
  ...(obj.Owner && { Owner: SENSITIVE_STRING }),
  ...(obj.Model && { Model: SENSITIVE_STRING }),
  ...(obj.Brand && { Brand: SENSITIVE_STRING }),
  ...(obj.SerialNumber && { SerialNumber: SENSITIVE_STRING }),
  ...(obj.UniversalProductCode && { UniversalProductCode: SENSITIVE_STRING }),
  ...(obj.InternationalArticleNumber && { InternationalArticleNumber: SENSITIVE_STRING }),
  ...(obj.ConnectorDeviceId && { ConnectorDeviceId: SENSITIVE_STRING }),
  ...(obj.DeviceSpecificKey && { DeviceSpecificKey: SENSITIVE_STRING }),
  ...(obj.MacAddress && { MacAddress: SENSITIVE_STRING }),
  ...(obj.Classification && { Classification: SENSITIVE_STRING }),
  ...(obj.Tags && { Tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const StateCapabilityFilterSensitiveLog = (obj: StateCapability): any => ({
  ...obj,
  ...(obj.properties && { properties: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const StateEndpointFilterSensitiveLog = (obj: StateEndpoint): any => ({
  ...obj,
  ...(obj.capabilities && { capabilities: obj.capabilities.map((item) => StateCapabilityFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const GetManagedThingStateResponseFilterSensitiveLog = (obj: GetManagedThingStateResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetNotificationConfigurationResponseFilterSensitiveLog = (
  obj: GetNotificationConfigurationResponse
): any => ({
  ...obj,
  ...(obj.Tags && { Tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetOtaTaskResponseFilterSensitiveLog = (obj: GetOtaTaskResponse): any => ({
  ...obj,
  ...(obj.Tags && { Tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetOtaTaskConfigurationResponseFilterSensitiveLog = (obj: GetOtaTaskConfigurationResponse): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetProvisioningProfileResponseFilterSensitiveLog = (obj: GetProvisioningProfileResponse): any => ({
  ...obj,
  ...(obj.ClaimCertificate && { ClaimCertificate: SENSITIVE_STRING }),
  ...(obj.Tags && { Tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListTagsForResourceResponseFilterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
  ...obj,
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SendManagedThingCommandRequestFilterSensitiveLog = (obj: SendManagedThingCommandRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListManagedThingsRequestFilterSensitiveLog = (obj: ListManagedThingsRequest): any => ({
  ...obj,
  ...(obj.OwnerFilter && { OwnerFilter: SENSITIVE_STRING }),
  ...(obj.ConnectorDeviceIdFilter && { ConnectorDeviceIdFilter: SENSITIVE_STRING }),
  ...(obj.SerialNumberFilter && { SerialNumberFilter: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ManagedThingSummaryFilterSensitiveLog = (obj: ManagedThingSummary): any => ({
  ...obj,
  ...(obj.Brand && { Brand: SENSITIVE_STRING }),
  ...(obj.Classification && { Classification: SENSITIVE_STRING }),
  ...(obj.ConnectorDeviceId && { ConnectorDeviceId: SENSITIVE_STRING }),
  ...(obj.Model && { Model: SENSITIVE_STRING }),
  ...(obj.Owner && { Owner: SENSITIVE_STRING }),
  ...(obj.SerialNumber && { SerialNumber: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListManagedThingsResponseFilterSensitiveLog = (obj: ListManagedThingsResponse): any => ({
  ...obj,
  ...(obj.Items && { Items: obj.Items.map((item) => ManagedThingSummaryFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const UpdateManagedThingRequestFilterSensitiveLog = (obj: UpdateManagedThingRequest): any => ({
  ...obj,
  ...(obj.Owner && { Owner: SENSITIVE_STRING }),
  ...(obj.SerialNumber && { SerialNumber: SENSITIVE_STRING }),
  ...(obj.Brand && { Brand: SENSITIVE_STRING }),
  ...(obj.Model && { Model: SENSITIVE_STRING }),
  ...(obj.Classification && { Classification: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const OtaTaskConfigurationSummaryFilterSensitiveLog = (obj: OtaTaskConfigurationSummary): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListOtaTaskConfigurationsResponseFilterSensitiveLog = (obj: ListOtaTaskConfigurationsResponse): any => ({
  ...obj,
  ...(obj.Items && { Items: obj.Items.map((item) => OtaTaskConfigurationSummaryFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const MatterClusterFilterSensitiveLog = (obj: MatterCluster): any => ({
  ...obj,
  ...(obj.attributes && { attributes: SENSITIVE_STRING }),
  ...(obj.commands && { commands: SENSITIVE_STRING }),
  ...(obj.events && { events: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const MatterEndpointFilterSensitiveLog = (obj: MatterEndpoint): any => ({
  ...obj,
  ...(obj.clusters && { clusters: obj.clusters.map((item) => MatterClusterFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const SendConnectorEventRequestFilterSensitiveLog = (obj: SendConnectorEventRequest): any => ({
  ...obj,
  ...(obj.UserId && { UserId: SENSITIVE_STRING }),
  ...(obj.OperationVersion && { OperationVersion: SENSITIVE_STRING }),
  ...(obj.StatusCode && { StatusCode: SENSITIVE_STRING }),
  ...(obj.Message && { Message: SENSITIVE_STRING }),
  ...(obj.ConnectorDeviceId && { ConnectorDeviceId: SENSITIVE_STRING }),
  ...(obj.Devices && { Devices: obj.Devices.map((item) => DeviceFilterSensitiveLog(item)) }),
  ...(obj.MatterEndpoint && { MatterEndpoint: MatterEndpointFilterSensitiveLog(obj.MatterEndpoint) }),
});

/**
 * @internal
 */
export const TagResourceRequestFilterSensitiveLog = (obj: TagResourceRequest): any => ({
  ...obj,
  ...(obj.Tags && { Tags: SENSITIVE_STRING }),
});
