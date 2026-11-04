// smithy-typescript generated code
import type { DocumentType as __DocumentType } from "@smithy/types";

import type {
  AbortCriteriaAction,
  AbortCriteriaFailureType,
  AssociationState,
  AuthMaterialType,
  AuthType,
  CloudConnectorType,
  ConfigurationState,
  ConnectorEventOperation,
  DeliveryDestinationType,
  DeviceDiscoveryStatus,
  DisconnectReasonValue,
  DiscoveryAuthMaterialType,
  DiscoveryModification,
  DiscoveryType,
  EncryptionType,
  EndpointType,
  EventType,
  HubNetworkMode,
  LogLevel,
  ManagedThingAssociationStatus,
  OtaMechanism,
  OtaProtocol,
  OtaStatus,
  OtaTaskExecutionStatus,
  OtaType,
  ProtocolType,
  ProvisioningProfileStatus,
  ProvisioningStatus,
  ProvisioningType,
  RetryCriteriaFailureType,
  Role,
  SchedulingConfigEndBehavior,
  SchemaVersionFormat,
  SchemaVersionType,
  SchemaVersionVisibility,
  TokenEndpointAuthenticationScheme,
} from "./enums";

/**
 * Structure representing one abort config criteria.
 *
 * @public
 */
export interface AbortConfigCriteria {
  /**
   * The action taken by the abort configuration.
   *
   * @public
   */
  Action?: AbortCriteriaAction | undefined;

  /**
   * Over-the-air (OTA) task abort criteria failure type.
   *
   * @public
   */
  FailureType?: AbortCriteriaFailureType | undefined;

  /**
   * The minimum number of things that must receive task execution notifications before the task can be aborted.
   *
   * @public
   */
  MinNumberOfExecutedThings?: number | undefined;

  /**
   * The minimum percentage of over-the-air (OTA) task execution failures that must occur to initiate the last abort.
   *
   * @public
   */
  ThresholdPercentage?: number | undefined;
}

/**
 * Structure containing information about an account association, including its identifier, state, and related metadata.
 *
 * @public
 */
export interface AccountAssociationItem {
  /**
   * The unique identifier of the account association.
   *
   * @public
   */
  AccountAssociationId: string | undefined;

  /**
   * The current state of the account association, indicating its status in the association lifecycle.
   *
   * @public
   */
  AssociationState: AssociationState | undefined;

  /**
   * The error message explaining any issues with the account association, if applicable.
   *
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * The identifier of the connector destination associated with this account association.
   *
   * @public
   */
  ConnectorDestinationId?: string | undefined;

  /**
   * The name of the account association.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A description of the account association.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the account association.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * The General Authorization reference by authorization material name.
 *
 * @public
 */
export interface GeneralAuthorizationName {
  /**
   * The name of the authorization material.
   *
   * @public
   */
  AuthMaterialName?: string | undefined;
}

/**
 * @public
 */
export interface CreateAccountAssociationRequest {
  /**
   * An idempotency token. If you retry a request that completed successfully initially using the same client token and parameters, then the retry attempt will succeed without performing any further actions.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The identifier of the connector destination.
   *
   * @public
   */
  ConnectorDestinationId: string | undefined;

  /**
   * The name of the destination for the new account association.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A description of the account association request.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A set of key/value pairs that are used to manage the account association.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The General Authorization reference by authorization material name.
   *
   * @public
   */
  GeneralAuthorization?: GeneralAuthorizationName | undefined;
}

/**
 * @public
 */
export interface CreateAccountAssociationResponse {
  /**
   * Third-party IoT platform OAuth authorization server URL backed with all the required parameters to perform end-user authentication. This field will be empty when using General Authorization flows that do not require OAuth.
   *
   * @public
   */
  OAuthAuthorizationUrl: string | undefined;

  /**
   * The identifier for the account association request.
   *
   * @public
   */
  AccountAssociationId: string | undefined;

  /**
   * The current state of the account association request.
   *
   * @public
   */
  AssociationState: AssociationState | undefined;

  /**
   * The Amazon Resource Name (ARN) of the account association.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteAccountAssociationRequest {
  /**
   * The unique identifier of the account association to be deleted.
   *
   * @public
   */
  AccountAssociationId: string | undefined;
}

/**
 * @public
 */
export interface GetAccountAssociationRequest {
  /**
   * The unique identifier of the account association to retrieve.
   *
   * @public
   */
  AccountAssociationId: string | undefined;
}

/**
 * @public
 */
export interface GetAccountAssociationResponse {
  /**
   * The unique identifier of the retrieved account association.
   *
   * @public
   */
  AccountAssociationId: string | undefined;

  /**
   * The current status state for the account association.
   *
   * @public
   */
  AssociationState: AssociationState | undefined;

  /**
   * The error message explaining the current account association error.
   *
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * The identifier of the connector destination associated with this account association.
   *
   * @public
   */
  ConnectorDestinationId?: string | undefined;

  /**
   * The name of the account association.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The description of the account association.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the account association.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * Third party IoT platform OAuth authorization server URL backed with all the required parameters to perform end-user authentication. This field will be empty when using General Authorization flows that do not require OAuth.
   *
   * @public
   */
  OAuthAuthorizationUrl: string | undefined;

  /**
   * A set of key/value pairs that are used to manage the account association.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The General Authorization reference by authorization material name.
   *
   * @public
   */
  GeneralAuthorization?: GeneralAuthorizationName | undefined;
}

/**
 * @public
 */
export interface ListAccountAssociationsRequest {
  /**
   * The identifier of the connector destination to filter account associations by.
   *
   * @public
   */
  ConnectorDestinationId?: string | undefined;

  /**
   * The maximum number of account associations to return in a single response.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A token used for pagination of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAccountAssociationsResponse {
  /**
   * The list of account associations that match the specified criteria.
   *
   * @public
   */
  Items?: AccountAssociationItem[] | undefined;

  /**
   * A token used for pagination of results when there are more account associations than can be returned in a single response.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface StartAccountAssociationRefreshRequest {
  /**
   * The unique identifier of the account association to refresh.
   *
   * @public
   */
  AccountAssociationId: string | undefined;
}

/**
 * @public
 */
export interface StartAccountAssociationRefreshResponse {
  /**
   * Third-party IoT platform OAuth authorization server URL with all required parameters to perform end-user authentication during the refresh process. This field will be empty when using General Authorization flows that do not require OAuth.
   *
   * @public
   */
  OAuthAuthorizationUrl: string | undefined;
}

/**
 * @public
 */
export interface UpdateAccountAssociationRequest {
  /**
   * The unique identifier of the account association to update.
   *
   * @public
   */
  AccountAssociationId: string | undefined;

  /**
   * The new name to assign to the account association.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The new description to assign to the account association.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * Configuration for AWS Secrets Manager, used to securely store and manage sensitive information for connector destinations.
 *
 * @public
 */
export interface SecretsManager {
  /**
   * The Amazon Resource Name (ARN) of the AWS Secrets Manager secret.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The version ID of the AWS Secrets Manager secret.
   *
   * @public
   */
  versionId: string | undefined;
}

/**
 * The authorization material containing the Secrets Manager arn and version.
 *
 * @public
 */
export interface AuthMaterial {
  /**
   * Configuration for AWS Secrets Manager, used to securely store and manage sensitive information for connector destinations.
   *
   * @public
   */
  SecretsManager: SecretsManager | undefined;

  /**
   * The name of the authorization material.
   *
   * @public
   */
  AuthMaterialName: string | undefined;
}

/**
 * Configuration settings for proactively refreshing OAuth tokens before they expire.
 *
 * @public
 */
export interface ProactiveRefreshTokenRenewal {
  /**
   * Indicates whether proactive refresh token renewal is enabled.
   *
   * @public
   */
  enabled?: boolean | undefined;

  /**
   * The days before token expiration when the system should attempt to renew the token, specified in days.
   *
   * @public
   */
  DaysBeforeRenewal?: number | undefined;
}

/**
 * Configuration details for OAuth authentication with a third-party service.
 *
 * @public
 */
export interface OAuthConfig {
  /**
   * The authorization URL for the OAuth service, where users are directed to authenticate and authorize access.
   *
   * @public
   */
  authUrl: string | undefined;

  /**
   * The token URL for the OAuth service, where authorization codes are exchanged for access tokens.
   *
   * @public
   */
  tokenUrl: string | undefined;

  /**
   * The OAuth scopes requested during authorization, which define the permissions granted to the application.
   *
   * @public
   */
  scope?: string | undefined;

  /**
   * The authentication scheme used when requesting tokens from the token endpoint.
   *
   * @public
   */
  tokenEndpointAuthenticationScheme: TokenEndpointAuthenticationScheme | undefined;

  /**
   * The URL where users are redirected after completing the OAuth authorization process.
   *
   * @public
   */
  oAuthCompleteRedirectUrl?: string | undefined;

  /**
   * Configuration for proactively refreshing OAuth tokens before they expire.
   *
   * @public
   */
  proactiveRefreshTokenRenewal?: ProactiveRefreshTokenRenewal | undefined;
}

/**
 * The authentication configuration details for a connector destination, including OAuth settings and other authentication parameters.
 *
 * @public
 */
export interface AuthConfig {
  /**
   * The OAuth configuration settings used for authentication with the third-party service.
   *
   * @public
   */
  oAuth?: OAuthConfig | undefined;

  /**
   * The authorization materials for General Authorization.
   *
   * @public
   */
  GeneralAuthorization?: AuthMaterial[] | undefined;
}

/**
 * The General Authorization update information containing authorization materials to add or update.
 *
 * @public
 */
export interface GeneralAuthorizationUpdate {
  /**
   * The authorization materials to add.
   *
   * @public
   */
  AuthMaterialsToAdd?: AuthMaterial[] | undefined;

  /**
   * The authorization materials to update.
   *
   * @public
   */
  AuthMaterialsToUpdate?: AuthMaterial[] | undefined;
}

/**
 * Structure containing updated OAuth configuration settings.
 *
 * @public
 */
export interface OAuthUpdate {
  /**
   * The updated URL where users are redirected after completing the OAuth authorization process.
   *
   * @public
   */
  oAuthCompleteRedirectUrl?: string | undefined;

  /**
   * Updated configuration for proactively refreshing OAuth tokens before they expire.
   *
   * @public
   */
  proactiveRefreshTokenRenewal?: ProactiveRefreshTokenRenewal | undefined;
}

/**
 * The updated authentication configuration details for a connector destination.
 *
 * @public
 */
export interface AuthConfigUpdate {
  /**
   * The updated OAuth configuration settings for the authentication configuration.
   *
   * @public
   */
  oAuthUpdate?: OAuthUpdate | undefined;

  /**
   * The General Authorization update information containing authorization materials to add or update.
   *
   * @public
   */
  GeneralAuthorizationUpdate?: GeneralAuthorizationUpdate | undefined;
}

/**
 * Action for an Amazon Web Services capability, containing the action parameters for control.
 *
 * @public
 */
export interface CapabilityAction {
  /**
   * Describe a capability action with a name.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Describe a capability action with an reference.
   *
   * @public
   */
  ref?: string | undefined;

  /**
   * Describe a capability action with an `actionTraceId` for a response command.
   *
   * @public
   */
  actionTraceId?: string | undefined;

  /**
   * Describe a capability action with a capability property.
   *
   * @public
   */
  parameters?: __DocumentType | undefined;
}

/**
 * The capability used in capability report.
 *
 * @public
 */
export interface CapabilityReportCapability {
  /**
   * The id of the schema version.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The name of the capability.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The version of the capability.
   *
   * @public
   */
  version: string | undefined;

  /**
   * The capability properties used in the capability report.
   *
   * @public
   */
  properties: string[] | undefined;

  /**
   * The capability actions used in the capability report.
   *
   * @public
   */
  actions: string[] | undefined;

  /**
   * The capability events used in the capability report.
   *
   * @public
   */
  events: string[] | undefined;
}

/**
 * The endpoint used in the capability report.
 *
 * @public
 */
export interface CapabilityReportEndpoint {
  /**
   * The id of the endpoint used in the capability report.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The type of device.
   *
   * @public
   */
  deviceTypes: string[] | undefined;

  /**
   * The capabilities used in the capability report.
   *
   * @public
   */
  capabilities: CapabilityReportCapability[] | undefined;
}

/**
 * Report of all capabilities supported by the device.
 *
 * @public
 */
export interface CapabilityReport {
  /**
   * The version of the capability report.
   *
   * @public
   */
  version: string | undefined;

  /**
   * The numeric identifier of the node.
   *
   * @public
   */
  nodeId?: string | undefined;

  /**
   * The endpoints used in the capability report.
   *
   * @public
   */
  endpoints: CapabilityReportEndpoint[] | undefined;
}

/**
 * Structure representing a capability schema item that defines the functionality and features supported by a managed thing.
 *
 * @public
 */
export interface CapabilitySchemaItem {
  /**
   * The format of the capability schema, which defines how the schema is structured and interpreted.
   *
   * @public
   */
  Format: SchemaVersionFormat | undefined;

  /**
   * The unique identifier of the capability defined in the schema.
   *
   * @public
   */
  CapabilityId: string | undefined;

  /**
   * The external identifier for the capability, used when referencing the capability outside of the AWS ecosystem.
   *
   * @public
   */
  ExtrinsicId: string | undefined;

  /**
   * The version of the external capability definition, used to track compatibility with external systems.
   *
   * @public
   */
  ExtrinsicVersion: number | undefined;

  /**
   * The actual schema definition that describes the capability's properties, actions, and events.
   *
   * @public
   */
  Schema: __DocumentType | undefined;
}

/**
 * Configuration details for an AWS Lambda function used as an endpoint for a cloud connector.
 *
 * @public
 */
export interface LambdaConfig {
  /**
   * The Amazon Resource Name (ARN) of the Lambda function used as an endpoint.
   *
   * @public
   */
  arn: string | undefined;
}

/**
 * The configuration details for an endpoint, which defines how to connect to and communicate with external services.
 *
 * @public
 */
export interface EndpointConfig {
  /**
   * The Lambda function configuration for the endpoint, used when the endpoint communicates through an AWS Lambda function.
   *
   * @public
   */
  lambda?: LambdaConfig | undefined;
}

/**
 * @public
 */
export interface CreateCloudConnectorRequest {
  /**
   * The display name of the C2C connector.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The configuration details for the cloud connector endpoint, including connection parameters and authentication requirements.
   *
   * @public
   */
  EndpointConfig: EndpointConfig | undefined;

  /**
   * A description of the C2C connector.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The type of endpoint used for the cloud connector, which defines how the connector communicates with external services.
   *
   * @public
   */
  EndpointType?: EndpointType | undefined;

  /**
   * An idempotency token. If you retry a request that completed successfully initially using the same client token and parameters, then the retry attempt will succeed without performing any further actions.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateCloudConnectorResponse {
  /**
   * The unique identifier assigned to the newly created cloud connector.
   *
   * @public
   */
  Id?: string | undefined;
}

/**
 * @public
 */
export interface DeleteCloudConnectorRequest {
  /**
   * The identifier of the cloud connector.
   *
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface GetCloudConnectorRequest {
  /**
   * The identifier of the C2C connector.
   *
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface GetCloudConnectorResponse {
  /**
   * The display name of the C2C connector.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The configuration details for the cloud connector endpoint, including connection parameters and authentication requirements.
   *
   * @public
   */
  EndpointConfig: EndpointConfig | undefined;

  /**
   * A description of the C2C connector.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The type of endpoint used for the cloud connector, which defines how the connector communicates with external services.
   *
   * @public
   */
  EndpointType?: EndpointType | undefined;

  /**
   * The unique identifier of the cloud connector.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The type of cloud connector created.
   *
   * @public
   */
  Type?: CloudConnectorType | undefined;
}

/**
 * @public
 */
export interface ListCloudConnectorsRequest {
  /**
   * The type of cloud connectors to filter by when listing available connectors.
   *
   * @public
   */
  Type?: CloudConnectorType | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Lambda function to filter cloud connectors by.
   *
   * @public
   */
  LambdaArn?: string | undefined;

  /**
   * The maximum number of results to return at one time.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A token that can be used to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Structure describing a connector.
 *
 * @public
 */
export interface ConnectorItem {
  /**
   * The display name of the C2C connector.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The configuration details for the cloud connector endpoint, including connection parameters and authentication requirements.
   *
   * @public
   */
  EndpointConfig: EndpointConfig | undefined;

  /**
   * A description of the C2C connector.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The type of endpoint used for the C2C connector.
   *
   * @public
   */
  EndpointType?: EndpointType | undefined;

  /**
   * The identifier of the C2C connector.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The type of cloud connector created.
   *
   * @public
   */
  Type?: CloudConnectorType | undefined;
}

/**
 * @public
 */
export interface ListCloudConnectorsResponse {
  /**
   * The list of connectors.
   *
   * @public
   */
  Items?: ConnectorItem[] | undefined;

  /**
   * A token that can be used to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateCloudConnectorRequest {
  /**
   * The unique identifier of the cloud connector to update.
   *
   * @public
   */
  Identifier: string | undefined;

  /**
   * The new display name to assign to the cloud connector.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The new description to assign to the cloud connector.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * The command capabilities added for the managed thing
 *
 * @public
 */
export interface CommandCapability {
  /**
   * Describe the capability with an id.
   *
   * @public
   */
  id: string | undefined;

  /**
   * Describe the capability with an name.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Describe the capability with a version.
   *
   * @public
   */
  version: string | undefined;

  /**
   * Describe the command capability with the actions it supports.
   *
   * @public
   */
  actions: CapabilityAction[] | undefined;
}

/**
 * The endpoint for a managed thing when sending a command.
 *
 * @public
 */
export interface CommandEndpoint {
  /**
   * The id of the endpoint for a managed thing.
   *
   * @public
   */
  endpointId: string | undefined;

  /**
   * Describe the endpoint with an id, a name, and the relevant capabilities for sending commands.
   *
   * @public
   */
  capabilities: CommandCapability[] | undefined;
}

/**
 * Provides the default encryption configuration error update details.
 *
 * @public
 */
export interface ConfigurationError {
  /**
   * The error code returned when the default encryption configuration update fails.
   *
   * @public
   */
  code?: string | undefined;

  /**
   * The error message returned when the default encryption configuration update fails.
   *
   * @public
   */
  message?: string | undefined;
}

/**
 * Provides the status of the default encryption configuration for an Amazon Web Services account.
 *
 * @public
 */
export interface ConfigurationStatus {
  /**
   * The error details describing a failed default encryption configuration update.
   *
   * @public
   */
  error?: ConfigurationError | undefined;

  /**
   * The status state describing the default encryption configuration update.
   *
   * @public
   */
  state: ConfigurationState | undefined;
}

/**
 * Structure containing summary information about a connector destination, which defines how a cloud-to-cloud connector connects to a customer's AWS account.
 *
 * @public
 */
export interface ConnectorDestinationSummary {
  /**
   * The display name of the connector destination.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A description of the connector destination.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The identifier of the cloud connector associated with this connector destination.
   *
   * @public
   */
  CloudConnectorId?: string | undefined;

  /**
   * The unique identifier of the connector destination.
   *
   * @public
   */
  Id?: string | undefined;
}

/**
 * @public
 */
export interface CreateConnectorDestinationRequest {
  /**
   * The display name of the connector destination.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A description of the connector destination.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The identifier of the C2C connector.
   *
   * @public
   */
  CloudConnectorId: string | undefined;

  /**
   * The authentication type used for the connector destination, which determines how credentials and access are managed.
   *
   * @public
   */
  AuthType?: AuthType | undefined;

  /**
   * The authentication configuration details for the connector destination, including OAuth settings and other authentication parameters.
   *
   * @public
   */
  AuthConfig: AuthConfig | undefined;

  /**
   * The AWS Secrets Manager configuration used to securely store and manage sensitive information for the connector destination.
   *
   * @public
   */
  SecretsManager?: SecretsManager | undefined;

  /**
   * An idempotency token. If you retry a request that completed successfully initially using the same client token and parameters, then the retry attempt will succeed without performing any further actions.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateConnectorDestinationResponse {
  /**
   * The identifier of the C2C connector destination creation request.
   *
   * @public
   */
  Id?: string | undefined;
}

/**
 * @public
 */
export interface DeleteConnectorDestinationRequest {
  /**
   * The identifier of the connector destination.
   *
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface GetConnectorDestinationRequest {
  /**
   * The identifier of the C2C connector destination.
   *
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface GetConnectorDestinationResponse {
  /**
   * The display name of the connector destination.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A description of the connector destination.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The identifier of the C2C connector.
   *
   * @public
   */
  CloudConnectorId?: string | undefined;

  /**
   * The unique identifier of the connector destination.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The authentication type used for the connector destination, which determines how credentials and access are managed.
   *
   * @public
   */
  AuthType?: AuthType | undefined;

  /**
   * The authentication configuration details for the connector destination, including OAuth settings and other authentication parameters.
   *
   * @public
   */
  AuthConfig?: AuthConfig | undefined;

  /**
   * The AWS Secrets Manager configuration used to securely store and manage sensitive information for the connector destination.
   *
   * @public
   */
  SecretsManager?: SecretsManager | undefined;

  /**
   * The URL where users are redirected after completing the OAuth authorization process for the connector destination.
   *
   * @public
   */
  OAuthCompleteRedirectUrl?: string | undefined;
}

/**
 * @public
 */
export interface ListConnectorDestinationsRequest {
  /**
   * The identifier of the cloud connector to filter connector destinations by.
   *
   * @public
   */
  CloudConnectorId?: string | undefined;

  /**
   * A token used for pagination of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of connector destinations to return in a single response.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListConnectorDestinationsResponse {
  /**
   * The list of connector destinations that match the specified criteria.
   *
   * @public
   */
  ConnectorDestinationList?: ConnectorDestinationSummary[] | undefined;

  /**
   * A token used for pagination of results when there are more connector destinations than can be returned in a single response.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateConnectorDestinationRequest {
  /**
   * The unique identifier of the connector destination to update.
   *
   * @public
   */
  Identifier: string | undefined;

  /**
   * The new description to assign to the connector destination.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The new display name to assign to the connector destination.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The new authentication type to use for the connector destination.
   *
   * @public
   */
  AuthType?: AuthType | undefined;

  /**
   * The updated authentication configuration details for the connector destination.
   *
   * @public
   */
  AuthConfig?: AuthConfigUpdate | undefined;

  /**
   * The updated AWS Secrets Manager configuration for the connector destination.
   *
   * @public
   */
  SecretsManager?: SecretsManager | undefined;
}

/**
 * @public
 */
export interface CreateCredentialLockerRequest {
  /**
   * The name of the credential locker.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * An idempotency token. If you retry a request that completed successfully initially using the same client token and parameters, then the retry attempt will succeed without performing any further actions.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * A set of key/value pairs that are used to manage the credential locker.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateCredentialLockerResponse {
  /**
   * The identifier of the credential locker creation request.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the credential locker.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The timestamp value of when the credential locker request occurred.
   *
   * @public
   */
  CreatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface CreateDestinationRequest {
  /**
   * The Amazon Resource Name (ARN) of the customer-managed destination.
   *
   * @public
   */
  DeliveryDestinationArn: string | undefined;

  /**
   * The destination type for the customer-managed destination.
   *
   * @public
   */
  DeliveryDestinationType: DeliveryDestinationType | undefined;

  /**
   * The name of the customer-managed destination.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the delivery destination role.
   *
   * @public
   */
  RoleArn: string | undefined;

  /**
   * An idempotency token. If you retry a request that completed successfully initially using the same client token and parameters, then the retry attempt will succeed without performing any further actions.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The description of the customer-managed destination.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A set of key/value pairs that are used to manage the destination.
   *
   * @deprecated (since 06-25-2025) Tags have been deprecated from this api.
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateDestinationResponse {
  /**
   * The name of the customer-managed destination.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 */
export interface CreateEventLogConfigurationRequest {
  /**
   * The type of resource for the event log configuration.
   *
   * @public
   */
  ResourceType: string | undefined;

  /**
   * The identifier of the resource for the event log configuration.
   *
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * The logging level for the event log configuration.
   *
   * @public
   */
  EventLogLevel: LogLevel | undefined;

  /**
   * An idempotency token. If you retry a request that completed successfully initially using the same client token and parameters, then the retry attempt will succeed without performing any further actions.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateEventLogConfigurationResponse {
  /**
   * The identifier of the event log configuration request.
   *
   * @public
   */
  Id?: string | undefined;
}

/**
 * The Wi-Fi Simple Setup configuration for the managed thing, which defines provisioning capabilities and timeout settings.
 *
 * @public
 */
export interface WiFiSimpleSetupConfiguration {
  /**
   * Indicates whether the device can act as a provisioner in Wi-Fi Simple Setup, allowing it to configure other devices.
   *
   * @public
   */
  EnableAsProvisioner?: boolean | undefined;

  /**
   * Indicates whether the device can act as a provisionee in Wi-Fi Simple Setup, allowing it to be configured by other devices.
   *
   * @public
   */
  EnableAsProvisionee?: boolean | undefined;

  /**
   * The timeout duration in minutes for Wi-Fi Simple Setup. Valid range is 5 to 15 minutes.
   *
   * @public
   */
  TimeoutInMinutes?: number | undefined;
}

/**
 * @public
 */
export interface CreateManagedThingRequest {
  /**
   * The type of device used. This will be the hub controller, cloud device, or AWS IoT device.
   *
   * @public
   */
  Role: Role | undefined;

  /**
   * Owner of the device, usually an indication of whom the device belongs to. This value should not contain personal identifiable information.
   *
   * @public
   */
  Owner?: string | undefined;

  /**
   * The identifier of the credential for the managed thing.
   *
   * @public
   */
  CredentialLockerId?: string | undefined;

  /**
   * The authentication material defining the device connectivity setup requests. The authorization materials used are the device bar code.
   *
   * @public
   */
  AuthenticationMaterial: string | undefined;

  /**
   * The type of authentication material used for device connectivity setup requests.
   *
   * @public
   */
  AuthenticationMaterialType: AuthMaterialType | undefined;

  /**
   * The Wi-Fi Simple Setup configuration for the managed thing, which defines provisioning capabilities and timeout settings.
   *
   * @public
   */
  WiFiSimpleSetupConfiguration?: WiFiSimpleSetupConfiguration | undefined;

  /**
   * The serial number of the device.
   *
   * @public
   */
  SerialNumber?: string | undefined;

  /**
   * The brand of the device.
   *
   * @public
   */
  Brand?: string | undefined;

  /**
   * The model of the device.
   *
   * @public
   */
  Model?: string | undefined;

  /**
   * The name of the managed thing representing the physical device.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A report of the capabilities for the managed thing.
   *
   * @public
   */
  CapabilityReport?: CapabilityReport | undefined;

  /**
   * The capability schemas that define the functionality and features supported by the managed thing, including device capabilities and their associated properties.
   *
   * @public
   */
  CapabilitySchemas?: CapabilitySchemaItem[] | undefined;

  /**
   * The capabilities of the device such as light bulb.
   *
   * @deprecated (since 06-25-2025) Capabilities has been deprecated, use CapabilityReport instead.
   * @public
   */
  Capabilities?: string | undefined;

  /**
   * An idempotency token. If you retry a request that completed successfully initially using the same client token and parameters, then the retry attempt will succeed without performing any further actions.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The classification of the managed thing such as light bulb or thermostat.
   *
   * @public
   */
  Classification?: string | undefined;

  /**
   * A set of key/value pairs that are used to manage the managed thing.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The metadata for the managed thing.
   *
   * > **Note:** The `managedThing` `metadata` parameter is used for associating attributes with a `managedThing` that can be used for grouping over-the-air (OTA) tasks. Name value pairs in `metadata` can be used in the `OtaTargetQueryString` parameter for the `CreateOtaTask` API operation.
   *
   * @public
   */
  MetaData?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateManagedThingResponse {
  /**
   * The id of the managed thing.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the managed thing.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The timestamp value of when the device creation request occurred.
   *
   * @public
   */
  CreatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface CreateNotificationConfigurationRequest {
  /**
   * The type of event triggering a device notification to the customer-managed destination.
   *
   * @public
   */
  EventType: EventType | undefined;

  /**
   * The name of the destination for the notification configuration.
   *
   * @public
   */
  DestinationName: string | undefined;

  /**
   * An idempotency token. If you retry a request that completed successfully initially using the same client token and parameters, then the retry attempt will succeed without performing any further actions.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * A set of key/value pairs that are used to manage the notification configuration.
   *
   * @deprecated (since 06-25-2025) Tags has been deprecated from this api.
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateNotificationConfigurationResponse {
  /**
   * The type of event triggering a device notification to the customer-managed destination.
   *
   * @public
   */
  EventType?: EventType | undefined;
}

/**
 * Structure representing scheduling maintenance window.
 *
 * @public
 */
export interface ScheduleMaintenanceWindow {
  /**
   * Displays the duration of the next maintenance window.
   *
   * @public
   */
  DurationInMinutes?: number | undefined;

  /**
   * Displays the start time of the next maintenance window.
   *
   * @public
   */
  StartTime?: string | undefined;
}

/**
 * Over-the-air (OTA) task scheduling config.
 *
 * @public
 */
export interface OtaTaskSchedulingConfig {
  /**
   * Specifies the end behavior for all task executions after a task reaches the selected `endTime`. If `endTime` is not selected when creating the task, then `endBehavior` does not apply.
   *
   * @public
   */
  EndBehavior?: SchedulingConfigEndBehavior | undefined;

  /**
   * The time an over-the-air (OTA) task will stop.
   *
   * @public
   */
  EndTime?: string | undefined;

  /**
   * Maintenance window list for over-the-air (OTA) task scheduling config.
   *
   * @public
   */
  MaintenanceWindows?: ScheduleMaintenanceWindow[] | undefined;

  /**
   * The time an over-the-air (OTA) task will start.
   *
   * @public
   */
  StartTime?: string | undefined;
}

/**
 * Structure representing one retry config criteria.
 *
 * @public
 */
export interface RetryConfigCriteria {
  /**
   * Over-the-air (OTA) retry criteria failure type.
   *
   * @public
   */
  FailureType?: RetryCriteriaFailureType | undefined;

  /**
   * The number of retries allowed for a failure type for the over-the-air (OTA) task.
   *
   * @public
   */
  MinNumberOfRetries?: number | undefined;
}

/**
 * Over-the-air (OTA) task retry config.
 *
 * @public
 */
export interface OtaTaskExecutionRetryConfig {
  /**
   * The list of retry config criteria.
   *
   * @public
   */
  RetryConfigCriteria?: RetryConfigCriteria[] | undefined;
}

/**
 * @public
 */
export interface CreateOtaTaskRequest {
  /**
   * The description of the over-the-air (OTA) task.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The URL to the Amazon S3 bucket where the over-the-air (OTA) task is stored.
   *
   * @public
   */
  S3Url: string | undefined;

  /**
   * The connection protocol the over-the-air (OTA) task uses to update the device.
   *
   * @public
   */
  Protocol?: OtaProtocol | undefined;

  /**
   * The device targeted for the over-the-air (OTA) task.
   *
   * @public
   */
  Target?: string[] | undefined;

  /**
   * The identifier for the over-the-air (OTA) task configuration.
   *
   * @public
   */
  TaskConfigurationId?: string | undefined;

  /**
   * The deployment mechanism for the over-the-air (OTA) task.
   *
   * @public
   */
  OtaMechanism?: OtaMechanism | undefined;

  /**
   * The frequency type for the over-the-air (OTA) task.
   *
   * @public
   */
  OtaType: OtaType | undefined;

  /**
   * The query string to add things to the thing group.
   *
   * @public
   */
  OtaTargetQueryString?: string | undefined;

  /**
   * An idempotency token. If you retry a request that completed successfully initially using the same client token and parameters, then the retry attempt will succeed without performing any further actions.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * Over-the-air (OTA) task scheduling config.
   *
   * @public
   */
  OtaSchedulingConfig?: OtaTaskSchedulingConfig | undefined;

  /**
   * Over-the-air (OTA) task retry config.
   *
   * @public
   */
  OtaTaskExecutionRetryConfig?: OtaTaskExecutionRetryConfig | undefined;

  /**
   * A set of key/value pairs that are used to manage the over-the-air (OTA) task.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateOtaTaskResponse {
  /**
   * The identifier of the over-the-air (OTA) task.
   *
   * @public
   */
  TaskId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the over-the-air (OTA) task.
   *
   * @public
   */
  TaskArn?: string | undefined;

  /**
   * A description of the over-the-air (OTA) task.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * Over-the-air (OTA) task abort config.
 *
 * @public
 */
export interface OtaTaskAbortConfig {
  /**
   * The list of criteria for the abort config.
   *
   * @public
   */
  AbortConfigCriteriaList?: AbortConfigCriteria[] | undefined;
}

/**
 * Structure representing rollout config criteria.
 *
 * @public
 */
export interface RolloutRateIncreaseCriteria {
  /**
   * The threshold for number of notified things that will initiate the increase in rate of rollout.
   *
   * @public
   */
  numberOfNotifiedThings?: number | undefined;

  /**
   * The threshold for number of succeeded things that will initiate the increase in rate of rollout.
   *
   * @public
   */
  numberOfSucceededThings?: number | undefined;
}

/**
 * Structure representing exponential rate of rollout for an over-the-air (OTA) task.
 *
 * @public
 */
export interface ExponentialRolloutRate {
  /**
   * The base rate per minute for the rollout of an over-the-air (OTA) task.
   *
   * @public
   */
  BaseRatePerMinute?: number | undefined;

  /**
   * The incremental factor for increasing the rollout rate of an over-the-air (OTA) task.
   *
   * @public
   */
  IncrementFactor?: number | undefined;

  /**
   * The criteria for increasing the rollout rate of an over-the-air (OTA) task.
   *
   * @public
   */
  RateIncreaseCriteria?: RolloutRateIncreaseCriteria | undefined;
}

/**
 * Over-the-air (OTA) task rollout config.
 *
 * @public
 */
export interface OtaTaskExecutionRolloutConfig {
  /**
   * Structure representing exponential rate of rollout for an over-the-air (OTA) task.
   *
   * @public
   */
  ExponentialRolloutRate?: ExponentialRolloutRate | undefined;

  /**
   * The maximum number of things that will be notified of a pending task, per minute.
   *
   * @public
   */
  MaximumPerMinute?: number | undefined;
}

/**
 * Over-the-air (OTA) task timeout config.
 *
 * @public
 */
export interface OtaTaskTimeoutConfig {
  /**
   * Specifies the amount of time the device has to finish execution of this task. The timeout interval can be anywhere between 1 minute and 7 days.
   *
   * @public
   */
  InProgressTimeoutInMinutes?: number | undefined;
}

/**
 * Structure representing a push config.
 *
 * @public
 */
export interface PushConfig {
  /**
   * Structure representing one abort config.
   *
   * @public
   */
  AbortConfig?: OtaTaskAbortConfig | undefined;

  /**
   * Structure representing one rollout config.
   *
   * @public
   */
  RolloutConfig?: OtaTaskExecutionRolloutConfig | undefined;

  /**
   * Structure representing one timeout config.
   *
   * @public
   */
  TimeoutConfig?: OtaTaskTimeoutConfig | undefined;
}

/**
 * @public
 */
export interface CreateOtaTaskConfigurationRequest {
  /**
   * A description of the over-the-air (OTA) task configuration.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The name of the over-the-air (OTA) task.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Describes the type of configuration used for the over-the-air (OTA) task.
   *
   * @public
   */
  PushConfig?: PushConfig | undefined;

  /**
   * An idempotency token. If you retry a request that completed successfully initially using the same client token and parameters, then the retry attempt will succeed without performing any further actions.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateOtaTaskConfigurationResponse {
  /**
   * The identifier of the over-the-air (OTA) task configuration.
   *
   * @public
   */
  TaskConfigurationId?: string | undefined;
}

/**
 * @public
 */
export interface CreateProvisioningProfileRequest {
  /**
   * The type of provisioning workflow the device uses for onboarding to IoT managed integrations.
   *
   * @public
   */
  ProvisioningType: ProvisioningType | undefined;

  /**
   * The body of the PEM-encoded certificate authority (CA) certificate.
   *
   * @public
   */
  CaCertificate?: string | undefined;

  /**
   * The body of the PEM-encoded claim certificate. If a claim certificate is provided, it will be used for the provisioning profile. Otherwise, a claim certificate will be generated.
   *
   * @public
   */
  ClaimCertificate?: string | undefined;

  /**
   * The name of the provisioning profile.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * An idempotency token. If you retry a request that completed successfully initially using the same client token and parameters, then the retry attempt will succeed without performing any further actions.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * A set of key/value pairs that are used to manage the provisioning profile.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateProvisioningProfileResponse {
  /**
   * The Amazon Resource Name (ARN) of the provisioning profile.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The name of the provisioning profile.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The type of provisioning workflow the device uses for onboarding to IoT managed integrations.
   *
   * @public
   */
  ProvisioningType?: ProvisioningType | undefined;

  /**
   * The identifier of the provisioning profile.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The status of a provisioning profile.
   *
   * @public
   */
  Status?: ProvisioningProfileStatus | undefined;

  /**
   * The body of the PEM-encoded claim certificate.
   *
   * @public
   */
  ClaimCertificate?: string | undefined;

  /**
   * The private key of the claim certificate. This may be stored securely on the device for validating the connection endpoint with IoT managed integrations using the public key.
   *
   * @public
   */
  ClaimCertificatePrivateKey?: string | undefined;
}

/**
 * Structure describing one Credential Locker.
 *
 * @public
 */
export interface CredentialLockerSummary {
  /**
   * The id of the credential locker.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the credential locker.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The name of the credential locker.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The timestampe value of when the credential locker was created at.
   *
   * @public
   */
  CreatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface DeleteCredentialLockerRequest {
  /**
   * The identifier of the credential locker.
   *
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface GetCredentialLockerRequest {
  /**
   * The identifier of the credential locker.
   *
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface GetCredentialLockerResponse {
  /**
   * The identifier of the credential locker.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the credential locker.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The name of the credential locker.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The timestamp value of when the credential locker requset occurred.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * A set of key/value pairs that are used to manage the credential locker.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListCredentialLockersRequest {
  /**
   * A token that can be used to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return at one time.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListCredentialLockersResponse {
  /**
   * The list of credential lockers.
   *
   * @public
   */
  Items?: CredentialLockerSummary[] | undefined;

  /**
   * A token that can be used to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteDestinationRequest {
  /**
   * The id of the customer-managed destination.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteEventLogConfigurationRequest {
  /**
   * The identifier of the event log configuration.
   *
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface DeleteManagedThingRequest {
  /**
   * The id of the managed thing.
   *
   * @public
   */
  Identifier: string | undefined;

  /**
   * When set to `TRUE`, a forceful deteletion of the managed thing will occur. When set to `FALSE`, a non-forceful deletion of the managed thing will occur.
   *
   * @public
   */
  Force?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteNotificationConfigurationRequest {
  /**
   * The type of event triggering a device notification to the customer-managed destination.
   *
   * @public
   */
  EventType: EventType | undefined;
}

/**
 * @public
 */
export interface DeleteOtaTaskRequest {
  /**
   * The identifier of the over-the-air (OTA) task.
   *
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteOtaTaskConfigurationRequest {
  /**
   * The identifier of the over-the-air (OTA) task configuration.
   *
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteProvisioningProfileRequest {
  /**
   * The id of the provisioning profile.
   *
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
   * The identifier of the managed thing to be deregistered from the account association.
   *
   * @public
   */
  ManagedThingId: string | undefined;

  /**
   * The unique identifier of the account association to be deregistered.
   *
   * @public
   */
  AccountAssociationId: string | undefined;
}

/**
 * Structure describing a destination for IoT managed integrations to deliver notifications for a device.
 *
 * @public
 */
export interface DestinationSummary {
  /**
   * The description of the customer-managed destination.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the customer-managed destination.
   *
   * @public
   */
  DeliveryDestinationArn?: string | undefined;

  /**
   * The destination type for the customer-managed destination.
   *
   * @public
   */
  DeliveryDestinationType?: DeliveryDestinationType | undefined;

  /**
   * The name of the customer-managed destination.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the delivery destination.
   *
   * @public
   */
  RoleArn?: string | undefined;
}

/**
 * @public
 */
export interface GetDestinationRequest {
  /**
   * The name of the customer-managed destination.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface GetDestinationResponse {
  /**
   * The description of the customer-managed destination.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the customer-managed destination.
   *
   * @public
   */
  DeliveryDestinationArn?: string | undefined;

  /**
   * The destination type for the customer-managed destination.
   *
   * @public
   */
  DeliveryDestinationType?: DeliveryDestinationType | undefined;

  /**
   * The name of the customer-managed destination.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the delivery destination role.
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * The timestamp value of when the destination creation requset occurred.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The timestamp value of when the destination update requset occurred.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * A set of key/value pairs that are used to manage the customer-managed destination.
   *
   * @deprecated (since 06-25-2025) Tags has been deprecated from this api.
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListDestinationsRequest {
  /**
   * A token that can be used to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return at one time.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListDestinationsResponse {
  /**
   * The list of destinations.
   *
   * @public
   */
  DestinationList?: DestinationSummary[] | undefined;

  /**
   * A token that can be used to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDestinationRequest {
  /**
   * The name of the customer-managed destination.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the customer-managed destination.
   *
   * @public
   */
  DeliveryDestinationArn?: string | undefined;

  /**
   * The destination type for the customer-managed destination.
   *
   * @public
   */
  DeliveryDestinationType?: DeliveryDestinationType | undefined;

  /**
   * The Amazon Resource Name (ARN) of the delivery destination role.
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * The description of the customer-managed destination.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * Matter attribute used in capability report.
 *
 * @public
 */
export interface MatterCapabilityReportAttribute {
  /**
   * The id of the Matter attribute.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * Name for the Amazon Web Services Matter capability report attribute.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Value for the Amazon Web Services Matter capability report attribute.
   *
   * @public
   */
  value?: __DocumentType | undefined;
}

/**
 * Capability used in Matter capability report.
 *
 * @public
 */
export interface MatterCapabilityReportCluster {
  /**
   * The id of the Amazon Web Services Matter capability report cluster.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The id of the revision for the Amazon Web Services Matter capability report.
   *
   * @public
   */
  revision: number | undefined;

  /**
   * The id of the schema version.
   *
   * @public
   */
  publicId?: string | undefined;

  /**
   * The capability name used in the Amazon Web Services Matter capability report.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The spec version used in the Amazon Web Services Matter capability report.
   *
   * @public
   */
  specVersion?: string | undefined;

  /**
   * The attributes of the Amazon Web Services Matter capability report.
   *
   * @public
   */
  attributes?: MatterCapabilityReportAttribute[] | undefined;

  /**
   * The commands used with the Amazon Web Services Matter capability report.
   *
   * @public
   */
  commands?: string[] | undefined;

  /**
   * The events used with the Amazon Web Services Matter capability report.
   *
   * @public
   */
  events?: string[] | undefined;

  /**
   * 32 bit-map used to indicate which features a cluster supports.
   *
   * @public
   */
  featureMap?: number | undefined;

  /**
   * Matter clusters used in capability report.
   *
   * @public
   */
  generatedCommands?: string[] | undefined;

  /**
   * The fabric index for the Amazon Web Services Matter capability report.
   *
   * @public
   */
  fabricIndex?: number | undefined;
}

/**
 * Matter endpoint used in capability report.
 *
 * @public
 */
export interface MatterCapabilityReportEndpoint {
  /**
   * The id of the Amazon Web Services Matter capability report endpoint.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The type of device.
   *
   * @public
   */
  deviceTypes: string[] | undefined;

  /**
   * Matter clusters used in capability report.
   *
   * @public
   */
  clusters: MatterCapabilityReportCluster[] | undefined;

  /**
   * Heirachy of child endpoints contained in the given endpoint.
   *
   * @public
   */
  parts?: string[] | undefined;

  /**
   * Semantic information related to endpoint.
   *
   * @public
   */
  semanticTags?: string[] | undefined;

  /**
   * Semantic information related to endpoint.
   *
   * @public
   */
  clientClusters?: string[] | undefined;
}

/**
 * Matter based capability report.
 *
 * @public
 */
export interface MatterCapabilityReport {
  /**
   * The version of the capability report.
   *
   * @public
   */
  version: string | undefined;

  /**
   * The numeric identifier of the node.
   *
   * @public
   */
  nodeId?: string | undefined;

  /**
   * The endpoints used in the capability report.
   *
   * @public
   */
  endpoints: MatterCapabilityReportEndpoint[] | undefined;
}

/**
 * Describe the device using the relevant metadata and supported clusters for device discovery.
 *
 * @public
 */
export interface Device {
  /**
   * The device id as defined by the connector.
   *
   * > **Note:** This parameter is used for cloud-to-cloud devices only.
   *
   * @public
   */
  ConnectorDeviceId: string | undefined;

  /**
   * The name of the device as defined by the connector.
   *
   * @public
   */
  ConnectorDeviceName?: string | undefined;

  /**
   * The capability report for the device.
   *
   * @public
   */
  CapabilityReport: MatterCapabilityReport | undefined;

  /**
   * Report of all capabilities supported by the device.
   *
   * @public
   */
  CapabilitySchemas?: CapabilitySchemaItem[] | undefined;

  /**
   * The metadata attributes for a device.
   *
   * @public
   */
  DeviceMetadata?: __DocumentType | undefined;
}

/**
 * Structure containing summary information about a device discovery job, including its identifier, type, and status.
 *
 * @public
 */
export interface DeviceDiscoverySummary {
  /**
   * The unique identifier of the device discovery job.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The type of discovery process used to find devices.
   *
   * @public
   */
  DiscoveryType?: DiscoveryType | undefined;

  /**
   * The current status of the device discovery job.
   *
   * @public
   */
  Status?: DeviceDiscoveryStatus | undefined;
}

/**
 * @public
 */
export interface GetDeviceDiscoveryRequest {
  /**
   * The id of the device discovery job request.
   *
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface GetDeviceDiscoveryResponse {
  /**
   * The id of the device discovery job request.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the device discovery job request.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The discovery type supporting the type of device to be discovered in the device discovery job request.
   *
   * @public
   */
  DiscoveryType: DiscoveryType | undefined;

  /**
   * The status of the device discovery job request.
   *
   * @public
   */
  Status: DeviceDiscoveryStatus | undefined;

  /**
   * The timestamp value for the start time of the device discovery.
   *
   * @public
   */
  StartedAt: Date | undefined;

  /**
   * The id of the end-user's IoT hub.
   *
   * @public
   */
  ControllerId?: string | undefined;

  /**
   * The ID tracking the current discovery process for one connector association.
   *
   * @deprecated (since 2025-06-25) ConnectorAssociationId has been deprecated.
   * @public
   */
  ConnectorAssociationId?: string | undefined;

  /**
   * The identifier of the account association used for the device discovery.
   *
   * @public
   */
  AccountAssociationId?: string | undefined;

  /**
   * The timestamp value for the completion time of the device discovery.
   *
   * @public
   */
  FinishedAt?: Date | undefined;

  /**
   * A set of key/value pairs that are used to manage the device discovery request.
   *
   * @deprecated (since 06-25-2025) Tags have been deprecated from this api.
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListDeviceDiscoveriesRequest {
  /**
   * A token used for pagination of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of device discovery jobs to return in a single response.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The discovery type to filter device discovery jobs by.
   *
   * @public
   */
  TypeFilter?: DiscoveryType | undefined;

  /**
   * The status to filter device discovery jobs by.
   *
   * @public
   */
  StatusFilter?: DeviceDiscoveryStatus | undefined;
}

/**
 * @public
 */
export interface ListDeviceDiscoveriesResponse {
  /**
   * The list of device discovery jobs that match the specified criteria.
   *
   * @public
   */
  Items?: DeviceDiscoverySummary[] | undefined;

  /**
   * A token used for pagination of results when there are more device discovery jobs than can be returned in a single response.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDiscoveredDevicesRequest {
  /**
   * The identifier of the device discovery job to list discovered devices for.
   *
   * @public
   */
  Identifier: string | undefined;

  /**
   * A token used for pagination of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of discovered devices to return in a single response.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Structure containing summary information about a device discovered during a device discovery job.
 *
 * @public
 */
export interface DiscoveredDeviceSummary {
  /**
   * The third-party device identifier as defined by the connector. This identifier must not contain personal identifiable information (PII).
   *
   * @public
   */
  ConnectorDeviceId?: string | undefined;

  /**
   * The name of the device as defined by the connector or third-party system.
   *
   * @public
   */
  ConnectorDeviceName?: string | undefined;

  /**
   * The list of device types or categories that the discovered device belongs to.
   *
   * @public
   */
  DeviceTypes?: string[] | undefined;

  /**
   * The identifier of the managed thing created for this discovered device, if one exists.
   *
   * @public
   */
  ManagedThingId?: string | undefined;

  /**
   * The status of the discovered device, indicating whether it has been added, removed, or modified since the last discovery.
   *
   * @public
   */
  Modification?: DiscoveryModification | undefined;

  /**
   * The timestamp indicating when the device was discovered.
   *
   * @public
   */
  DiscoveredAt?: Date | undefined;

  /**
   * The brand of the discovered device.
   *
   * @public
   */
  Brand?: string | undefined;

  /**
   * The model of the discovered device.
   *
   * @public
   */
  Model?: string | undefined;

  /**
   * The authentication material required for connecting to the discovered device, such as credentials or tokens.
   *
   * @public
   */
  AuthenticationMaterial?: string | undefined;
}

/**
 * @public
 */
export interface ListDiscoveredDevicesResponse {
  /**
   * The list of discovered devices that match the specified criteria.
   *
   * @public
   */
  Items?: DiscoveredDeviceSummary[] | undefined;

  /**
   * A token used for pagination of results when there are more discovered devices than can be returned in a single response.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface StartDeviceDiscoveryRequest {
  /**
   * The discovery type supporting the type of device to be discovered in the device discovery task request.
   *
   * @public
   */
  DiscoveryType: DiscoveryType | undefined;

  /**
   * Additional protocol-specific details required for device discovery, which vary based on the discovery type.
   *
   * > **Note:** For a `DiscoveryType` of `CUSTOM`, the string-to-string map must have a key value of `Name` set to a non-empty-string.
   *
   * @public
   */
  CustomProtocolDetail?: Record<string, string> | undefined;

  /**
   * The id of the end-user's IoT hub.
   *
   * @public
   */
  ControllerIdentifier?: string | undefined;

  /**
   * The id of the connector association.
   *
   * @deprecated (since 06-25-2025) ConnectorAssociationIdentifier is deprecated.
   * @public
   */
  ConnectorAssociationIdentifier?: string | undefined;

  /**
   * The identifier of the cloud-to-cloud account association to use for discovery of third-party devices.
   *
   * @public
   */
  AccountAssociationId?: string | undefined;

  /**
   * The authentication material required to start the local device discovery job request.
   *
   * @public
   */
  AuthenticationMaterial?: string | undefined;

  /**
   * The type of authentication material used for device discovery jobs.
   *
   * @public
   */
  AuthenticationMaterialType?: DiscoveryAuthMaterialType | undefined;

  /**
   * An idempotency token. If you retry a request that completed successfully initially using the same client token and parameters, then the retry attempt will succeed without performing any further actions.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * A set of key/value pairs that are used to manage the device discovery request.
   *
   * @deprecated (since 06-25-2025) Tags have been deprecated from this api.
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * Used as a filter for PLA discoveries.
   *
   * @public
   */
  ConnectorDeviceIdList?: string[] | undefined;

  /**
   * The protocol type for capability rediscovery (ZWAVE, ZIGBEE, or CUSTOM).
   *
   * > **Note:** This parameter is only available when the discovery type is CONTROLLER_CAPABILITY_REDISCOVERY.
   *
   * @public
   */
  Protocol?: ProtocolType | undefined;

  /**
   * The unique id of the end device for capability rediscovery.
   *
   * > **Note:** This parameter is only available when the discovery type is CONTROLLER_CAPABILITY_REDISCOVERY.
   *
   * @public
   */
  EndDeviceIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface StartDeviceDiscoveryResponse {
  /**
   * The id of the device discovery job request.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The timestamp value for the start time of the device discovery.
   *
   * @public
   */
  StartedAt?: Date | undefined;
}

/**
 * List of event log configurations.
 *
 * @public
 */
export interface EventLogConfigurationSummary {
  /**
   * The identifier of the event log configuration.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The type of resource for the event log configuration.
   *
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * The identifier of the resource for the event log configuration.
   *
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * The logging level for the event log configuration.
   *
   * @public
   */
  EventLogLevel?: LogLevel | undefined;
}

/**
 * @public
 */
export interface GetEventLogConfigurationRequest {
  /**
   * The identifier of the event log configuration.
   *
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface GetEventLogConfigurationResponse {
  /**
   * The identifier of the event log configuration.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The type of resource for the event log configuration.
   *
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * The identifier of the resource for the event log configuration.
   *
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * The logging level for the event log configuration.
   *
   * @public
   */
  EventLogLevel?: LogLevel | undefined;
}

/**
 * @public
 */
export interface ListEventLogConfigurationsRequest {
  /**
   * A token that can be used to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return at one time.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListEventLogConfigurationsResponse {
  /**
   * A list of each event log configuration and pertinent information.
   *
   * @public
   */
  EventLogConfigurationList?: EventLogConfigurationSummary[] | undefined;

  /**
   * A token that can be used to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateEventLogConfigurationRequest {
  /**
   * The log configuration id.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The log level for the event in terms of severity.
   *
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
   * The IoT managed integrations dedicated, custom endpoint for the device to route traffic through.
   *
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
   * Provides the status of the default encryption configuration for an Amazon Web Services account.
   *
   * @public
   */
  configurationStatus: ConfigurationStatus | undefined;

  /**
   * The type of encryption used for the encryption configuration.
   *
   * @public
   */
  encryptionType: EncryptionType | undefined;

  /**
   * The Key Amazon Resource Name (ARN) of the AWS KMS key used for KMS encryption if you use `KMS_BASED_ENCRYPTION`.
   *
   * @public
   */
  kmsKeyArn?: string | undefined;
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
   * A user-defined integer value that represents the hub token timer expiry setting in seconds.
   *
   * @public
   */
  HubTokenTimerExpirySettingInSeconds?: number | undefined;

  /**
   * The timestamp value of when the hub configuration was updated.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetManagedThingRequest {
  /**
   * The id of the managed thing.
   *
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface GetManagedThingResponse {
  /**
   * The id of the managed thing.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the managed thing.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * Owner of the device, usually an indication of whom the device belongs to. This value should not contain personal identifiable information.
   *
   * @public
   */
  Owner?: string | undefined;

  /**
   * The identifier of the credential locker for the managed thing.
   *
   * @public
   */
  CredentialLockerId?: string | undefined;

  /**
   * The id of the advertised product.
   *
   * @public
   */
  AdvertisedProductId?: string | undefined;

  /**
   * The type of device used. This will be the Amazon Web Services hub controller, cloud device, or IoT device.
   *
   * @public
   */
  Role?: Role | undefined;

  /**
   * The provisioning status of the device in the provisioning workflow for onboarding to IoT managed integrations. For more information, see [Device Provisioning](https://docs.aws.amazon.com/iot-mi/latest/devguide/device-provisioning.html).
   *
   * @public
   */
  ProvisioningStatus?: ProvisioningStatus | undefined;

  /**
   * The name of the managed thing representing the physical device.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The model of the device.
   *
   * @public
   */
  Model?: string | undefined;

  /**
   * The brand of the device.
   *
   * @public
   */
  Brand?: string | undefined;

  /**
   * The serial number of the device.
   *
   * @public
   */
  SerialNumber?: string | undefined;

  /**
   * The universal product code (UPC) of the device model. The UPC is typically used in the United States of America and Canada.
   *
   * @public
   */
  UniversalProductCode?: string | undefined;

  /**
   * The unique 13 digit number that identifies the managed thing.
   *
   * @public
   */
  InternationalArticleNumber?: string | undefined;

  /**
   * The id of the connector policy.
   *
   * > **Note:** This parameter is used for cloud-to-cloud devices only.
   *
   * @deprecated (since 2025-06-25) ConnectorPolicyId is deprecated.
   * @public
   */
  ConnectorPolicyId?: string | undefined;

  /**
   * The identifier of the connector destination associated with this managed thing.
   *
   * @public
   */
  ConnectorDestinationId?: string | undefined;

  /**
   * The third-party device id as defined by the connector. This device id must not contain personal identifiable information (PII).
   *
   * > **Note:** This parameter is used for cloud-to-cloud devices only.
   *
   * @public
   */
  ConnectorDeviceId?: string | undefined;

  /**
   * A Zwave device-specific key used during device activation.
   *
   * > **Note:** This parameter is used for Zwave devices only.
   *
   * @public
   */
  DeviceSpecificKey?: string | undefined;

  /**
   * The media access control (MAC) address for the device represented by the managed thing.
   *
   * > **Note:** This parameter is used for Zigbee devices only.
   *
   * @public
   */
  MacAddress?: string | undefined;

  /**
   * Id of the controller device used for the discovery job.
   *
   * @public
   */
  ParentControllerId?: string | undefined;

  /**
   * The classification of the managed thing such as light bulb or thermostat.
   *
   * @public
   */
  Classification?: string | undefined;

  /**
   * The timestamp value of when the device creation request occurred.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The timestamp value of when the managed thing was last updated at.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * The timestampe value of when the device was activated.
   *
   * @public
   */
  ActivatedAt?: Date | undefined;

  /**
   * The network mode for the hub-connected device.
   *
   * @public
   */
  HubNetworkMode?: HubNetworkMode | undefined;

  /**
   * The metadata for the managed thing.
   *
   * @public
   */
  MetaData?: Record<string, string> | undefined;

  /**
   * A set of key/value pairs that are used to manage the managed thing.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The Wi-Fi Simple Setup configuration for the managed thing, which defines provisioning capabilities and timeout settings.
   *
   * @public
   */
  WiFiSimpleSetupConfiguration?: WiFiSimpleSetupConfiguration | undefined;
}

/**
 * @public
 */
export interface GetManagedThingCapabilitiesRequest {
  /**
   * The id of the device.
   *
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface GetManagedThingCapabilitiesResponse {
  /**
   * The id of the device.
   *
   * @public
   */
  ManagedThingId?: string | undefined;

  /**
   * The capabilities of the device such as light bulb.
   *
   * @deprecated (since 06-25-2025) Capabilities has been deprecated, use CapabilityReport instead.
   * @public
   */
  Capabilities?: string | undefined;

  /**
   * A report of the capabilities for the managed thing.
   *
   * @public
   */
  CapabilityReport?: CapabilityReport | undefined;
}

/**
 * @public
 */
export interface GetManagedThingCertificateRequest {
  /**
   * The identifier of the managed thing.
   *
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface GetManagedThingCertificateResponse {
  /**
   * The identifier of the managed thing.
   *
   * @public
   */
  ManagedThingId?: string | undefined;

  /**
   * The PEM-encoded certificate for the managed thing.
   *
   * @public
   */
  CertificatePem?: string | undefined;
}

/**
 * @public
 */
export interface GetManagedThingConnectivityDataRequest {
  /**
   * The identifier of a managed thing.
   *
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface GetManagedThingConnectivityDataResponse {
  /**
   * The id of a managed thing.
   *
   * @public
   */
  ManagedThingId?: string | undefined;

  /**
   * The connectivity status for a managed thing.
   *
   * @public
   */
  Connected?: boolean | undefined;

  /**
   * The timestamp value of when the connectivity status for a managed thing was last taken.
   *
   * @public
   */
  Timestamp?: Date | undefined;

  /**
   * The reason for the connectivity disconnect with the managed thing.
   *
   * @public
   */
  DisconnectReason?: DisconnectReasonValue | undefined;
}

/**
 * @public
 */
export interface GetManagedThingMetaDataRequest {
  /**
   * The managed thing id.
   *
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface GetManagedThingMetaDataResponse {
  /**
   * The managed thing id.
   *
   * @public
   */
  ManagedThingId?: string | undefined;

  /**
   * The metadata for the managed thing.
   *
   * @public
   */
  MetaData?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetManagedThingStateRequest {
  /**
   * The id of the device.
   *
   * @public
   */
  ManagedThingId: string | undefined;
}

/**
 * State capabilities added for the managed thing.
 *
 * @public
 */
export interface StateCapability {
  /**
   * The id of the managed thing in the capability report.
   *
   * @public
   */
  id: string | undefined;

  /**
   * Name for the Amazon Web Services capability.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Version for the Amazon Web Services capability.
   *
   * @public
   */
  version: string | undefined;

  /**
   * Describe the command capability with the properties it supports.
   *
   * @public
   */
  properties?: __DocumentType | undefined;
}

/**
 * Describe the endpoint with an Id, a name, and the relevant capabilities for reporting state
 *
 * @public
 */
export interface StateEndpoint {
  /**
   * Numeric identifier of the endpoint
   *
   * @public
   */
  endpointId: string | undefined;

  /**
   * Describe the endpoint with an id, a name, and the relevant capabilities for the reporting state.
   *
   * @public
   */
  capabilities: StateCapability[] | undefined;
}

/**
 * @public
 */
export interface GetManagedThingStateResponse {
  /**
   * The device endpoint.
   *
   * @public
   */
  Endpoints: StateEndpoint[] | undefined;
}

/**
 * @public
 */
export interface GetNotificationConfigurationRequest {
  /**
   * The type of event triggering a device notification to the customer-managed destination.
   *
   * @public
   */
  EventType: EventType | undefined;
}

/**
 * @public
 */
export interface GetNotificationConfigurationResponse {
  /**
   * The type of event triggering a device notification to the customer-managed destination.
   *
   * @public
   */
  EventType?: EventType | undefined;

  /**
   * The name of the destination for the notification configuration.
   *
   * @public
   */
  DestinationName?: string | undefined;

  /**
   * The timestamp value of when the notification configuration was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The timestamp value of when the notification configuration was last updated.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * A set of key/value pairs that are used to manage the notification configuration.
   *
   * @deprecated (since 06-25-2025) Tags has been deprecated for this api.
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetOtaTaskRequest {
  /**
   * The over-the-air (OTA) task id.
   *
   * @public
   */
  Identifier: string | undefined;
}

/**
 * Details about the over-the-air (OTA) task process.
 *
 * @public
 */
export interface TaskProcessingDetails {
  /**
   * The number of canceled things in an over-the-air (OTA) task.
   *
   * @public
   */
  NumberOfCanceledThings?: number | undefined;

  /**
   * The number of failed things in an over-the-air (OTA) task.
   *
   * @public
   */
  NumberOfFailedThings?: number | undefined;

  /**
   * The number of in progress things in an over-the-air (OTA) task.
   *
   * @public
   */
  NumberOfInProgressThings?: number | undefined;

  /**
   * The number of queued things in an over-the-air (OTA) task.
   *
   * @public
   */
  numberOfQueuedThings?: number | undefined;

  /**
   * The number of rejected things in an over-the-air (OTA) task.
   *
   * @public
   */
  numberOfRejectedThings?: number | undefined;

  /**
   * The number of removed things in an over-the-air (OTA) task.
   *
   * @public
   */
  numberOfRemovedThings?: number | undefined;

  /**
   * The number of succeeded things in an over-the-air (OTA) task.
   *
   * @public
   */
  numberOfSucceededThings?: number | undefined;

  /**
   * The number of timed out things in an over-the-air (OTA) task.
   *
   * @public
   */
  numberOfTimedOutThings?: number | undefined;

  /**
   * The targets of the over-the-air (OTA) task.
   *
   * @public
   */
  processingTargets?: string[] | undefined;
}

/**
 * @public
 */
export interface GetOtaTaskResponse {
  /**
   * The id of the over-the-air (OTA) task.
   *
   * @public
   */
  TaskId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the over-the-air (OTA) task
   *
   * @public
   */
  TaskArn?: string | undefined;

  /**
   * The description of the over-the-air (OTA) task.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The URL to the Amazon S3 bucket where the over-the-air (OTA) task is stored.
   *
   * @public
   */
  S3Url?: string | undefined;

  /**
   * The connection protocol the over-the-air (OTA) task uses to update the device.
   *
   * @public
   */
  Protocol?: OtaProtocol | undefined;

  /**
   * The frequency type for the over-the-air (OTA) task.
   *
   * @public
   */
  OtaType?: OtaType | undefined;

  /**
   * The query string to add things to the thing group.
   *
   * @public
   */
  OtaTargetQueryString?: string | undefined;

  /**
   * The deployment mechanism for the over-the-air (OTA) task.
   *
   * @public
   */
  OtaMechanism?: OtaMechanism | undefined;

  /**
   * The device targeted for the over-the-air (OTA) task.
   *
   * @public
   */
  Target?: string[] | undefined;

  /**
   * The timestamp value of when the over-the-air (OTA) task was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The timestamp value of when the over-the-air (OTA) task was last updated at.
   *
   * @public
   */
  LastUpdatedAt?: Date | undefined;

  /**
   * The identifier for the over-the-air (OTA) task configuration.
   *
   * @public
   */
  TaskConfigurationId?: string | undefined;

  /**
   * The processing details of all over-the-air (OTA) tasks.
   *
   * @public
   */
  TaskProcessingDetails?: TaskProcessingDetails | undefined;

  /**
   * Over-the-air (OTA) task scheduling config.
   *
   * @public
   */
  OtaSchedulingConfig?: OtaTaskSchedulingConfig | undefined;

  /**
   * Over-the-air (OTA) task retry config.
   *
   * @public
   */
  OtaTaskExecutionRetryConfig?: OtaTaskExecutionRetryConfig | undefined;

  /**
   * The status of the over-the-air (OTA) task.
   *
   * @public
   */
  Status?: OtaStatus | undefined;

  /**
   * A set of key/value pairs that are used to manage the over-the-air (OTA) task.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetOtaTaskConfigurationRequest {
  /**
   * The over-the-air (OTA) task configuration id.
   *
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface GetOtaTaskConfigurationResponse {
  /**
   * The over-the-air (OTA) task configuration id.
   *
   * @public
   */
  TaskConfigurationId?: string | undefined;

  /**
   * The name of the over-the-air (OTA) task configuration.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Describes the type of configuration used for the over-the-air (OTA) task.
   *
   * @public
   */
  PushConfig?: PushConfig | undefined;

  /**
   * A description of the over-the-air (OTA) task configuration.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The timestamp value of when the over-the-air (OTA) task configuration was created at.
   *
   * @public
   */
  CreatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetProvisioningProfileRequest {
  /**
   * The id of a provisioning profile.
   *
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface GetProvisioningProfileResponse {
  /**
   * The Amazon Resource Name (ARN) of the provisioning profile.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The name of the provisioning profile.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The type of provisioning workflow the device uses for onboarding to IoT managed integrations.
   *
   * @public
   */
  ProvisioningType?: ProvisioningType | undefined;

  /**
   * The provisioning profile id.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The status of a provisioning profile.
   *
   * @public
   */
  Status?: ProvisioningProfileStatus | undefined;

  /**
   * The body of the PEM-encoded claim certificate.
   *
   * @public
   */
  ClaimCertificate?: string | undefined;

  /**
   * A set of key/value pairs that are used to manage the provisioning profile.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetRuntimeLogConfigurationRequest {
  /**
   * The id for a managed thing.
   *
   * @public
   */
  ManagedThingId: string | undefined;
}

/**
 * The different configurations for runtime logs.
 *
 * @public
 */
export interface RuntimeLogConfigurations {
  /**
   * The different log levels available for configuration.
   *
   * @public
   */
  LogLevel?: LogLevel | undefined;

  /**
   * The different log levels available for configuration.
   *
   * @public
   */
  LogFlushLevel?: LogLevel | undefined;

  /**
   * Configuration of where to store runtime logs in the device.
   *
   * @public
   */
  LocalStoreLocation?: string | undefined;

  /**
   * Configuration to set the maximum number of runtime log files that can be stored on the device before the oldest files are deleted or overwritten.
   *
   * @public
   */
  LocalStoreFileRotationMaxFiles?: number | undefined;

  /**
   * Configuration to set the maximum bytes of runtime logs that can be stored on the device before the oldest logs are deleted or overwritten.
   *
   * @public
   */
  LocalStoreFileRotationMaxBytes?: number | undefined;

  /**
   * Configuration to enable or disable uploading of runtime logs to the cloud.
   *
   * @public
   */
  UploadLog?: boolean | undefined;

  /**
   * Configuration to set the time interval in minutes between each batch of runtime logs that the device uploads to the cloud.
   *
   * @public
   */
  UploadPeriodMinutes?: number | undefined;

  /**
   * Configuration to enable or disable deleting of runtime logs in the device once uploaded to the cloud.
   *
   * @public
   */
  DeleteLocalStoreAfterUpload?: boolean | undefined;
}

/**
 * @public
 */
export interface GetRuntimeLogConfigurationResponse {
  /**
   * The id for a managed thing.
   *
   * @public
   */
  ManagedThingId?: string | undefined;

  /**
   * The runtime log configuration for a managed thing.
   *
   * @public
   */
  RuntimeLogConfigurations?: RuntimeLogConfigurations | undefined;
}

/**
 * @public
 */
export interface GetSchemaVersionRequest {
  /**
   * The type of schema version.
   *
   * @public
   */
  Type: SchemaVersionType | undefined;

  /**
   * Schema id with a version specified. If the version is missing, it defaults to latest version.
   *
   * @public
   */
  SchemaVersionedId: string | undefined;

  /**
   * The format of the schema version.
   *
   * @public
   */
  Format?: SchemaVersionFormat | undefined;
}

/**
 * @public
 */
export interface GetSchemaVersionResponse {
  /**
   * The id of the schema version.
   *
   * @public
   */
  SchemaId?: string | undefined;

  /**
   * The type of schema version.
   *
   * @public
   */
  Type?: SchemaVersionType | undefined;

  /**
   * The description of the schema version.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The name of the schema version.
   *
   * @public
   */
  Namespace?: string | undefined;

  /**
   * The schema version. If this is left blank, it defaults to the latest version.
   *
   * @public
   */
  SemanticVersion?: string | undefined;

  /**
   * The visibility of the schema version.
   *
   * @public
   */
  Visibility?: SchemaVersionVisibility | undefined;

  /**
   * The schema of the schema version.
   *
   * @public
   */
  Schema?: __DocumentType | undefined;
}

/**
 * @public
 */
export interface PutHubConfigurationRequest {
  /**
   * A user-defined integer value that represents the hub token timer expiry setting in seconds.
   *
   * @public
   */
  HubTokenTimerExpirySettingInSeconds: number | undefined;
}

/**
 * @public
 */
export interface PutHubConfigurationResponse {
  /**
   * A user-defined integer value that represents the hub token timer expiry setting in seconds.
   *
   * @public
   */
  HubTokenTimerExpirySettingInSeconds?: number | undefined;
}

/**
 * @public
 */
export interface PutDefaultEncryptionConfigurationRequest {
  /**
   * The type of encryption used for the encryption configuration.
   *
   * @public
   */
  encryptionType: EncryptionType | undefined;

  /**
   * The Key Amazon Resource Name (ARN) of the AWS KMS key used for KMS encryption if you use `KMS_BASED_ENCRYPTION`.
   *
   * @public
   */
  kmsKeyArn?: string | undefined;
}

/**
 * @public
 */
export interface PutDefaultEncryptionConfigurationResponse {
  /**
   * Provides the status of the default encryption configuration for an Amazon Web Services account.
   *
   * @public
   */
  configurationStatus: ConfigurationStatus | undefined;

  /**
   * The type of encryption used for the encryption configuration.
   *
   * @public
   */
  encryptionType: EncryptionType | undefined;

  /**
   * The Key Amazon Resource Name (ARN) of the AWS KMS key used for KMS encryption if you use `KMS_BASED_ENCRYPTION`.
   *
   * @public
   */
  kmsKeyArn?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource for which to list tags.
   *
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
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListManagedThingAccountAssociationsRequest {
  /**
   * The identifier of the managed thing to list account associations for.
   *
   * @public
   */
  ManagedThingId?: string | undefined;

  /**
   * The identifier of the account association to filter results by. When specified, only associations with this account association ID will be returned.
   *
   * @public
   */
  AccountAssociationId?: string | undefined;

  /**
   * The maximum number of account associations to return in a single response.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A token used for pagination of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Structure representing an association between a managed thing and an account association, which connects a device to a third-party account.
 *
 * @public
 */
export interface ManagedThingAssociation {
  /**
   * The identifier of the managed thing in the association.
   *
   * @public
   */
  ManagedThingId?: string | undefined;

  /**
   * The identifier of the account association in the association.
   *
   * @public
   */
  AccountAssociationId?: string | undefined;

  /**
   * The status of the registration between the managed thing and the account association. Indicates whether the device is pre-associated or fully associated with the account association.
   *
   * @public
   */
  ManagedThingAssociationStatus?: ManagedThingAssociationStatus | undefined;
}

/**
 * @public
 */
export interface ListManagedThingAccountAssociationsResponse {
  /**
   * The list of managed thing associations that match the specified criteria, including the managed thing ID and account association ID for each association.
   *
   * @public
   */
  Items?: ManagedThingAssociation[] | undefined;

  /**
   * A token used for pagination of results when there are more account associations than can be returned in a single response.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface RegisterAccountAssociationRequest {
  /**
   * The identifier of the managed thing to register with the account association.
   *
   * @public
   */
  ManagedThingId: string | undefined;

  /**
   * The identifier of the account association to register with the managed thing.
   *
   * @public
   */
  AccountAssociationId: string | undefined;

  /**
   * The identifier of the device discovery job associated with this registration.
   *
   * @public
   */
  DeviceDiscoveryId: string | undefined;
}

/**
 * @public
 */
export interface RegisterAccountAssociationResponse {
  /**
   * The identifier of the account association that was registered.
   *
   * @public
   */
  AccountAssociationId?: string | undefined;

  /**
   * The identifier of the device discovery job associated with this registration.
   *
   * @public
   */
  DeviceDiscoveryId?: string | undefined;

  /**
   * The identifier of the managed thing that was registered with the account association.
   *
   * @public
   */
  ManagedThingId?: string | undefined;
}

/**
 * @public
 */
export interface SendManagedThingCommandRequest {
  /**
   * The id of the device.
   *
   * @public
   */
  ManagedThingId: string | undefined;

  /**
   * The device endpoint.
   *
   * @public
   */
  Endpoints: CommandEndpoint[] | undefined;

  /**
   * The ID tracking the current discovery process for one connector association.
   *
   * @deprecated (since 06-25-2025) ConnectorAssociationId has been deprecated.
   * @public
   */
  ConnectorAssociationId?: string | undefined;

  /**
   * The identifier of the account association to use when sending a command to a managed thing.
   *
   * @public
   */
  AccountAssociationId?: string | undefined;
}

/**
 * @public
 */
export interface SendManagedThingCommandResponse {
  /**
   * The trace request identifier. This is generated by IoT managed integrations and can be used to trace this command and its related operations in CloudWatch.
   *
   * @public
   */
  TraceId?: string | undefined;
}

/**
 * @public
 */
export interface ListManagedThingsRequest {
  /**
   * Filter on device owners when listing managed things.
   *
   * @public
   */
  OwnerFilter?: string | undefined;

  /**
   * Filter on a credential locker for a managed thing.
   *
   * @public
   */
  CredentialLockerFilter?: string | undefined;

  /**
   * Filter on the type of device used. This will be the Amazon Web Services hub controller, cloud device, or IoT device.
   *
   * @public
   */
  RoleFilter?: Role | undefined;

  /**
   * Filter on a parent controller id for a managed thing.
   *
   * @public
   */
  ParentControllerIdentifierFilter?: string | undefined;

  /**
   * Filter on a connector policy id for a managed thing.
   *
   * @deprecated (since 06-25-2025) ConnectorPolicyIdFilter is deprecated.
   * @public
   */
  ConnectorPolicyIdFilter?: string | undefined;

  /**
   * Filter managed things by the connector destination ID they are associated with.
   *
   * @public
   */
  ConnectorDestinationIdFilter?: string | undefined;

  /**
   * Filter managed things by the connector device ID they are associated with. When specified, only managed things with this connector device ID will be returned.
   *
   * @public
   */
  ConnectorDeviceIdFilter?: string | undefined;

  /**
   * Filter on the serial number of the device.
   *
   * @public
   */
  SerialNumberFilter?: string | undefined;

  /**
   * Filter on the status of the device. For more information, see [Device Provisioning](https://docs.aws.amazon.com/iot-mi/latest/devguide/device-provisioning.html).
   *
   * @public
   */
  ProvisioningStatusFilter?: ProvisioningStatus | undefined;

  /**
   * A token that can be used to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return at one time.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Structure representing one managed thing.
 *
 * @public
 */
export interface ManagedThingSummary {
  /**
   * The id of the device.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the managed thing.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The id of the advertised product.
   *
   * @public
   */
  AdvertisedProductId?: string | undefined;

  /**
   * The brand of the device.
   *
   * @public
   */
  Brand?: string | undefined;

  /**
   * The classification of the managed thing such as light bulb or thermostat.
   *
   * @public
   */
  Classification?: string | undefined;

  /**
   * The third-party device id as defined by the connector. This device id must not contain personal identifiable information (PII).
   *
   * > **Note:** This parameter is used for cloud-to-cloud devices only.
   *
   * @public
   */
  ConnectorDeviceId?: string | undefined;

  /**
   * The id of the connector policy.
   *
   * > **Note:** This parameter is used for cloud-to-cloud devices only.
   *
   * @deprecated (since 06-25-2025) ConnectorPolicyId has been deprecated.
   * @public
   */
  ConnectorPolicyId?: string | undefined;

  /**
   * The identifier of the connector destination associated with this managed thing, if applicable.
   *
   * @public
   */
  ConnectorDestinationId?: string | undefined;

  /**
   * The model of the device.
   *
   * @public
   */
  Model?: string | undefined;

  /**
   * The name of the managed thing representing the physical device.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Owner of the device, usually an indication of whom the device belongs to. This value should not contain personal identifiable information.
   *
   * @public
   */
  Owner?: string | undefined;

  /**
   * The identifier of the credential locker for the managed thing.
   *
   * @public
   */
  CredentialLockerId?: string | undefined;

  /**
   * Id of the controller device used for the discovery job.
   *
   * @public
   */
  ParentControllerId?: string | undefined;

  /**
   * The provisioning status of the device in the provisioning workflow for onboarding to IoT managed integrations. For more information, see [Device Provisioning](https://docs.aws.amazon.com/iot-mi/latest/devguide/device-provisioning.html).
   *
   * @public
   */
  ProvisioningStatus?: ProvisioningStatus | undefined;

  /**
   * The type of device used. This will be the Amazon Web Services hub controller, cloud device, or IoT device.
   *
   * @public
   */
  Role?: Role | undefined;

  /**
   * The serial number of the device.
   *
   * @public
   */
  SerialNumber?: string | undefined;

  /**
   * The timestamp value of when the device creation request occurred.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The timestamp value of when the managed thing was last updated at.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * The timestampe value of when the managed thing was activated at.
   *
   * @public
   */
  ActivatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListManagedThingsResponse {
  /**
   * The list of managed things.
   *
   * @public
   */
  Items?: ManagedThingSummary[] | undefined;

  /**
   * A token that can be used to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListManagedThingSchemasRequest {
  /**
   * The managed thing id.
   *
   * @public
   */
  Identifier: string | undefined;

  /**
   * Filter on an endpoint id.
   *
   * @public
   */
  EndpointIdFilter?: string | undefined;

  /**
   * Filter on a capability id.
   *
   * @public
   */
  CapabilityIdFilter?: string | undefined;

  /**
   * A token that can be used to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return at one time.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Structure representing one schema item associated with a managed thing.
 *
 * @public
 */
export interface ManagedThingSchemaListItem {
  /**
   * The id of the endpoint for a managed thing.
   *
   * @public
   */
  EndpointId?: string | undefined;

  /**
   * The id of the capability for a managed thing.
   *
   * @public
   */
  CapabilityId?: string | undefined;

  /**
   * The validation schema for one schema item associated with a managed thing.
   *
   * @public
   */
  Schema?: __DocumentType | undefined;
}

/**
 * @public
 */
export interface ListManagedThingSchemasResponse {
  /**
   * The list of managed thing schemas.
   *
   * @public
   */
  Items?: ManagedThingSchemaListItem[] | undefined;

  /**
   * A token that can be used to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateManagedThingRequest {
  /**
   * The id of the managed thing.
   *
   * @public
   */
  Identifier: string | undefined;

  /**
   * Owner of the device, usually an indication of whom the device belongs to. This value should not contain personal identifiable information.
   *
   * @public
   */
  Owner?: string | undefined;

  /**
   * The identifier of the credential for the managed thing.
   *
   * @public
   */
  CredentialLockerId?: string | undefined;

  /**
   * The serial number of the device.
   *
   * @public
   */
  SerialNumber?: string | undefined;

  /**
   * The Wi-Fi Simple Setup configuration for the managed thing, which defines provisioning capabilities and timeout settings.
   *
   * @public
   */
  WiFiSimpleSetupConfiguration?: WiFiSimpleSetupConfiguration | undefined;

  /**
   * The brand of the device.
   *
   * @public
   */
  Brand?: string | undefined;

  /**
   * The model of the device.
   *
   * @public
   */
  Model?: string | undefined;

  /**
   * The name of the managed thing representing the physical device.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A report of the capabilities for the managed thing.
   *
   * @public
   */
  CapabilityReport?: CapabilityReport | undefined;

  /**
   * The updated capability schemas that define the functionality and features supported by the managed thing.
   *
   * @public
   */
  CapabilitySchemas?: CapabilitySchemaItem[] | undefined;

  /**
   * The capabilities of the device such as light bulb.
   *
   * @deprecated (since 06-25-2025) Capabilities has been deprecated, use CapabilityReport instead.
   * @public
   */
  Capabilities?: string | undefined;

  /**
   * The classification of the managed thing such as light bulb or thermostat.
   *
   * @public
   */
  Classification?: string | undefined;

  /**
   * The network mode for the hub-connected device.
   *
   * @public
   */
  HubNetworkMode?: HubNetworkMode | undefined;

  /**
   * The metadata for the managed thing.
   *
   * @public
   */
  MetaData?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListNotificationConfigurationsRequest {
  /**
   * The maximum number of results to return at one time.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A token that can be used to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Structure describing a notification configuration.
 *
 * @public
 */
export interface NotificationConfigurationSummary {
  /**
   * The type of event triggering a device notification to the customer-managed destination.
   *
   * @public
   */
  EventType?: EventType | undefined;

  /**
   * The name of the destination for the notification configuration.
   *
   * @public
   */
  DestinationName?: string | undefined;
}

/**
 * @public
 */
export interface ListNotificationConfigurationsResponse {
  /**
   * The list of notification configurations.
   *
   * @public
   */
  NotificationConfigurationList?: NotificationConfigurationSummary[] | undefined;

  /**
   * A token that can be used to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateNotificationConfigurationRequest {
  /**
   * The type of event triggering a device notification to the customer-managed destination.
   *
   * @public
   */
  EventType: EventType | undefined;

  /**
   * The name of the destination for the notification configuration.
   *
   * @public
   */
  DestinationName: string | undefined;
}

/**
 * @public
 */
export interface ListOtaTaskConfigurationsRequest {
  /**
   * A token that can be used to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return at one time.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Structure representing one over-the-air (OTA) task configuration.
 *
 * @public
 */
export interface OtaTaskConfigurationSummary {
  /**
   * The id of the over-the-air (OTA) task configuration
   *
   * @public
   */
  TaskConfigurationId?: string | undefined;

  /**
   * The name of the over-the-air (OTA) task configuration.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The timestamp value of when the over-the-air (OTA) task configuration was created at.
   *
   * @public
   */
  CreatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListOtaTaskConfigurationsResponse {
  /**
   * The list of the over-the-air (OTA) task configurations.
   *
   * @public
   */
  Items?: OtaTaskConfigurationSummary[] | undefined;

  /**
   * A token that can be used to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListOtaTaskExecutionsRequest {
  /**
   * The over-the-air (OTA) task id.
   *
   * @public
   */
  Identifier: string | undefined;

  /**
   * A token that can be used to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return at one time.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Structure representing one over-the-air (OTA) task execution summary.
 *
 * @public
 */
export interface OtaTaskExecutionSummary {
  /**
   * The execution number of the over-the-air (OTA) task execution summary.
   *
   * @public
   */
  ExecutionNumber?: number | undefined;

  /**
   * The timestamp value of when the over-the-air (OTA) task execution summary was last updated.
   *
   * @public
   */
  LastUpdatedAt?: Date | undefined;

  /**
   * The timestamp value of when the over-the-air (OTA) task execution summary is targeted to start.
   *
   * @public
   */
  QueuedAt?: Date | undefined;

  /**
   * The number of retry attempts for starting the over-the-air (OTA) task execution summary after a failed attempt.
   *
   * @public
   */
  RetryAttempt?: number | undefined;

  /**
   * The timestamp value of when the over-the-air (OTA) task execution summary started.
   *
   * @public
   */
  StartedAt?: Date | undefined;

  /**
   * The status of the over-the-air (OTA) task execution summary.
   *
   * @public
   */
  Status?: OtaTaskExecutionStatus | undefined;
}

/**
 * Structure representing one execution summary.
 *
 * @public
 */
export interface OtaTaskExecutionSummaries {
  /**
   * Structure representing one over-the-air (OTA) task execution summary
   *
   * @public
   */
  TaskExecutionSummary?: OtaTaskExecutionSummary | undefined;

  /**
   * The id of a managed thing.
   *
   * @public
   */
  ManagedThingId?: string | undefined;
}

/**
 * @public
 */
export interface ListOtaTaskExecutionsResponse {
  /**
   * A list of all of the over-the-air (OTA) task executions.
   *
   * @public
   */
  ExecutionSummaries?: OtaTaskExecutionSummaries[] | undefined;

  /**
   * A token that can be used to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListOtaTasksRequest {
  /**
   * A token that can be used to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return at one time.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Structure representing one over-the-air (OTA) task.
 *
 * @public
 */
export interface OtaTaskSummary {
  /**
   * The id of the over-the-air (OTA) task.
   *
   * @public
   */
  TaskId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the over-the-air (OTA) task.
   *
   * @public
   */
  TaskArn?: string | undefined;

  /**
   * The timestamp value of when the over-the-air (OTA) task was created at.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The timestamp value of when the over-the-air (OTA) task was last updated at.
   *
   * @public
   */
  LastUpdatedAt?: Date | undefined;

  /**
   * The identifier for the over-the-air (OTA) task configuration.
   *
   * @public
   */
  TaskConfigurationId?: string | undefined;

  /**
   * The status of the over-the-air (OTA) task summary.
   *
   * @public
   */
  Status?: OtaStatus | undefined;
}

/**
 * @public
 */
export interface ListOtaTasksResponse {
  /**
   * A list of all of the over-the-air (OTA) tasks.
   *
   * @public
   */
  Tasks?: OtaTaskSummary[] | undefined;

  /**
   * A token that can be used to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateOtaTaskRequest {
  /**
   * The over-the-air (OTA) task id.
   *
   * @public
   */
  Identifier: string | undefined;

  /**
   * The description of the over-the-air (OTA) task.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The identifier for the over-the-air (OTA) task configuration.
   *
   * @public
   */
  TaskConfigurationId?: string | undefined;
}

/**
 * @public
 */
export interface ListProvisioningProfilesRequest {
  /**
   * A token that can be used to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return at one time.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Structure describing a provisioning profile.
 *
 * @public
 */
export interface ProvisioningProfileSummary {
  /**
   * The name of the provisioning profile.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The identifier of the provisioning profile.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the provisioning profile.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The type of provisioning workflow the device uses for onboarding to IoT managed integrations.
   *
   * @public
   */
  ProvisioningType?: ProvisioningType | undefined;

  /**
   * The status of a provisioning profile.
   *
   * @public
   */
  Status?: ProvisioningProfileStatus | undefined;
}

/**
 * @public
 */
export interface ListProvisioningProfilesResponse {
  /**
   * The list of provisioning profiles.
   *
   * @public
   */
  Items?: ProvisioningProfileSummary[] | undefined;

  /**
   * A token that can be used to retrieve the next set of results.
   *
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
   * The IoT managed integrations dedicated, custom endpoint for the device to route traffic through.
   *
   * @public
   */
  EndpointAddress: string | undefined;
}

/**
 * @public
 */
export interface PutRuntimeLogConfigurationRequest {
  /**
   * The id for a managed thing.
   *
   * @public
   */
  ManagedThingId: string | undefined;

  /**
   * The runtime log configuration for a managed thing.
   *
   * @public
   */
  RuntimeLogConfigurations: RuntimeLogConfigurations | undefined;
}

/**
 * @public
 */
export interface ResetRuntimeLogConfigurationRequest {
  /**
   * The id of a managed thing.
   *
   * @public
   */
  ManagedThingId: string | undefined;
}

/**
 * @public
 */
export interface ListSchemaVersionsRequest {
  /**
   * Filter on the type of schema version.
   *
   * @public
   */
  Type: SchemaVersionType | undefined;

  /**
   * The maximum number of results to return at one time.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A token that can be used to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Filter on the id of the schema version.
   *
   * @public
   */
  SchemaId?: string | undefined;

  /**
   * Filter on the name of the schema version.
   *
   * @public
   */
  Namespace?: string | undefined;

  /**
   * The visibility of the schema version.
   *
   * @public
   */
  Visibility?: SchemaVersionVisibility | undefined;

  /**
   * The schema version. If this is left blank, it defaults to the latest version.
   *
   * @public
   */
  SemanticVersion?: string | undefined;
}

/**
 * List item describing a schema version.
 *
 * @public
 */
export interface SchemaVersionListItem {
  /**
   * The identifier of the schema version.
   *
   * @public
   */
  SchemaId?: string | undefined;

  /**
   * The type of schema version.
   *
   * @public
   */
  Type?: SchemaVersionType | undefined;

  /**
   * A description of the schema version.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The name of the schema version.
   *
   * @public
   */
  Namespace?: string | undefined;

  /**
   * The schema version. If this is left blank, it defaults to the latest version.
   *
   * @public
   */
  SemanticVersion?: string | undefined;

  /**
   * The visibility of the schema version.
   *
   * @public
   */
  Visibility?: SchemaVersionVisibility | undefined;
}

/**
 * @public
 */
export interface ListSchemaVersionsResponse {
  /**
   * The list of schema versions.
   *
   * @public
   */
  Items?: SchemaVersionListItem[] | undefined;

  /**
   * A token that can be used to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Describe a Matter cluster with an id, and the relevant attributes, commands, and events.
 *
 * @public
 */
export interface MatterCluster {
  /**
   * The cluster id.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The Matter attributes.
   *
   * @public
   */
  attributes?: __DocumentType | undefined;

  /**
   * Describe the Matter commands with the Matter command identifier mapped to the command fields.
   *
   * @public
   */
  commands?: Record<string, __DocumentType> | undefined;

  /**
   * Describe the Matter events with the Matter event identifier mapped to the event fields.
   *
   * @public
   */
  events?: Record<string, __DocumentType> | undefined;
}

/**
 * Structure describing a managed thing.
 *
 * @public
 */
export interface MatterEndpoint {
  /**
   * The Matter endpoint id.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * A list of Matter clusters for a managed thing.
   *
   * @public
   */
  clusters?: MatterCluster[] | undefined;
}

/**
 * @public
 */
export interface SendConnectorEventRequest {
  /**
   * The id of the connector between the third-party cloud provider and IoT managed integrations.
   *
   * @public
   */
  ConnectorId: string | undefined;

  /**
   * The id of the third-party cloud provider.
   *
   * @public
   */
  UserId?: string | undefined;

  /**
   * The Open Connectivity Foundation (OCF) operation requested to be performed on the managed thing.
   *
   * > **Note:** The field op can have a value of "I" or "U". The field "cn" will contain the capability types.
   *
   * @public
   */
  Operation: ConnectorEventOperation | undefined;

  /**
   * The Open Connectivity Foundation (OCF) security specification version for the operation being requested on the managed thing. For more information, see [OCF Security Specification](https://openconnectivity.org/specs/OCF_Security_Specification_v1.0.0.pdf).
   *
   * @public
   */
  OperationVersion?: string | undefined;

  /**
   * The status code of the Open Connectivity Foundation (OCF) operation being performed on the managed thing.
   *
   * @public
   */
  StatusCode?: number | undefined;

  /**
   * The device state change event payload.
   *
   * This parameter will include the following three fields:
   *
   * - `uri`: `schema auc://<PARTNER-DEVICE-ID>/ResourcePath` (The `Resourcepath` corresponds to an OCF resource.)
   * - `op`: For device state changes, this field must populate as `n+d`.
   * - `cn`: The content depends on the OCF resource referenced in `ResourcePath`.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The id for the device discovery job.
   *
   * @public
   */
  DeviceDiscoveryId?: string | undefined;

  /**
   * The third-party device id as defined by the connector. This device id must not contain personal identifiable information (PII).
   *
   * > **Note:** This parameter is used for cloud-to-cloud devices only.
   *
   * @public
   */
  ConnectorDeviceId?: string | undefined;

  /**
   * The trace request identifier. This is generated by IoT managed integrations and can be used to trace this command and its related operations in CloudWatch.
   *
   * @public
   */
  TraceId?: string | undefined;

  /**
   * The list of devices.
   *
   * @public
   */
  Devices?: Device[] | undefined;

  /**
   * The device endpoint.
   *
   * @public
   */
  MatterEndpoint?: MatterEndpoint | undefined;
}

/**
 * @public
 */
export interface SendConnectorEventResponse {
  /**
   * The id of the connector between the third-party cloud provider and IoT managed integrations.
   *
   * @public
   */
  ConnectorId: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource to which to add tags.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * A set of key/value pairs that are used to manage the resource.
   *
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
   * The Amazon Resource Name (ARN) of the resource from which to remove tags.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * A list of tag keys to remove from the resource.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}
