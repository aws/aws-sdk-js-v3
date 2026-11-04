// smithy-typescript generated code
import type {
  CoinbaseCdpSecret,
  DescriptorType,
  EnforcementMode,
  FindingType,
  PaymentConnectorProvisionMode,
  PaymentConnectorStatus,
  PaymentConnectorType,
  PaymentManagerStatus,
  PaymentsAuthorizerType,
  PolicyEngineStatus,
  PolicyGenerationStatus,
  PolicyStatus,
  PolicyValidationMode,
  RegistryAuthorizerType,
  RegistryRecordCredentialProviderType,
  RegistryRecordOAuthGrantType,
  RegistryRecordStatus,
  RegistryStatus,
  SchemaType,
  SynchronizationType,
  TargetProtocolType,
  TargetStatus,
} from "./enums";
import type {
  A2aDescriptor,
  AgentSkillsDescriptor,
  AuthorizerConfiguration,
  PrivateEndpoint,
  SkillDefinition,
  SkillMdDefinition,
  UpdatedDescription,
  WorkloadIdentityDetails,
} from "./models_0";
import type {
  ApiGatewayTargetConfiguration,
  ApiSchemaConfiguration,
  AuthorizationData,
  CertificateConfiguration,
  ConnectorTargetConfiguration,
  CredentialProviderConfiguration,
  HttpTargetConfiguration,
  InferenceTargetConfiguration,
  KmsConfiguration,
  ManagedResourceDetails,
  McpServerTargetConfiguration,
  MetadataConfiguration,
  S3Configuration,
  UpdatedAuthorizerConfiguration,
} from "./models_1";

/**
 * @public
 */
export interface CreatePaymentManagerResponse {
  /**
   * The Amazon Resource Name (ARN) of the created payment manager.
   *
   * @public
   */
  paymentManagerArn: string | undefined;

  /**
   * The unique identifier of the created payment manager.
   *
   * @public
   */
  paymentManagerId: string | undefined;

  /**
   * The name of the created payment manager.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The type of authorizer for the created payment manager.
   *
   * @public
   */
  authorizerType: PaymentsAuthorizerType | undefined;

  /**
   * Represents inbound authorization configuration options used to authenticate incoming requests.
   *
   * @public
   */
  authorizerConfiguration?: AuthorizerConfiguration | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role associated with the created payment manager.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * The information about the workload identity.
   *
   * @public
   */
  workloadIdentityDetails?: WorkloadIdentityDetails | undefined;

  /**
   * The timestamp when the payment manager was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The current status of the payment manager. Possible values include `CREATING`, `READY`, `UPDATING`, `DELETING`, `CREATE_FAILED`, `UPDATE_FAILED`, and `DELETE_FAILED`.
   *
   * @public
   */
  status: PaymentManagerStatus | undefined;

  /**
   * The tags associated with the created payment manager.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The Amazon Resource Name (ARN) of the KMS key used to encrypt sensitive payment manager data at rest, if configured.
   *
   * @public
   */
  kmsKeyArn?: string | undefined;
}

/**
 * @public
 */
export interface DeletePaymentManagerRequest {
  /**
   * The unique identifier of the payment manager to delete.
   *
   * @public
   */
  paymentManagerId: string | undefined;

  /**
   * A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If you don't specify this field, a value is randomly generated for you. If this token matches a previous request, the service ignores the request, but doesn't return an error. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html).
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface DeletePaymentManagerResponse {
  /**
   * The current status of the payment manager, set to `DELETING` when deletion is initiated. Possible values include `CREATING`, `READY`, `UPDATING`, `DELETING`, `CREATE_FAILED`, `UPDATE_FAILED`, and `DELETE_FAILED`.
   *
   * @public
   */
  status: PaymentManagerStatus | undefined;

  /**
   * The unique identifier of the deleted payment manager.
   *
   * @public
   */
  paymentManagerId?: string | undefined;
}

/**
 * @public
 */
export interface GetPaymentManagerRequest {
  /**
   * The unique identifier of the payment manager to retrieve.
   *
   * @public
   */
  paymentManagerId: string | undefined;
}

/**
 * @public
 */
export interface GetPaymentManagerResponse {
  /**
   * The Amazon Resource Name (ARN) of the payment manager.
   *
   * @public
   */
  paymentManagerArn: string | undefined;

  /**
   * The unique identifier of the payment manager.
   *
   * @public
   */
  paymentManagerId: string | undefined;

  /**
   * The name of the payment manager.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the payment manager.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The type of authorizer used by the payment manager.
   *
   * - `CUSTOM_JWT` - Authorize with a bearer token.
   * - `AWS_IAM` - Authorize with your Amazon Web Services IAM credentials.
   *
   * @public
   */
  authorizerType: PaymentsAuthorizerType | undefined;

  /**
   * Represents inbound authorization configuration options used to authenticate incoming requests.
   *
   * @public
   */
  authorizerConfiguration?: AuthorizerConfiguration | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role associated with the payment manager.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * The information about the workload identity.
   *
   * @public
   */
  workloadIdentityDetails?: WorkloadIdentityDetails | undefined;

  /**
   * The timestamp when the payment manager was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the payment manager was last updated.
   *
   * @public
   */
  lastUpdatedAt: Date | undefined;

  /**
   * The current status of the payment manager. Possible values include `CREATING`, `READY`, `UPDATING`, `DELETING`, `CREATE_FAILED`, `UPDATE_FAILED`, and `DELETE_FAILED`.
   *
   * @public
   */
  status: PaymentManagerStatus | undefined;

  /**
   * The tags associated with the payment manager.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The Amazon Resource Name (ARN) of the KMS key used to encrypt sensitive payment manager data at rest, if configured.
   *
   * @public
   */
  kmsKeyArn?: string | undefined;
}

/**
 * @public
 */
export interface ListPaymentManagersRequest {
  /**
   * The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the `nextToken` field when making another request to return the next batch of results.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * If the total number of results is greater than the `maxResults` value provided in the request, enter the token returned in the `nextToken` field in the response in this field to return the next batch of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Contains summary information about a payment manager.
 *
 * @public
 */
export interface PaymentManagerSummary {
  /**
   * The Amazon Resource Name (ARN) of the payment manager.
   *
   * @public
   */
  paymentManagerArn: string | undefined;

  /**
   * The unique identifier of the payment manager.
   *
   * @public
   */
  paymentManagerId: string | undefined;

  /**
   * The name of the payment manager.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the payment manager.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The type of authorizer used by the payment manager.
   *
   * - `CUSTOM_JWT` - Authorize with a bearer token.
   * - `AWS_IAM` - Authorize with your Amazon Web Services IAM credentials.
   *
   * @public
   */
  authorizerType: PaymentsAuthorizerType | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role associated with the payment manager.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * The current status of the payment manager. Possible values include `CREATING`, `READY`, `UPDATING`, `DELETING`, `CREATE_FAILED`, `UPDATE_FAILED`, and `DELETE_FAILED`.
   *
   * @public
   */
  status: PaymentManagerStatus | undefined;

  /**
   * The timestamp when the payment manager was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The timestamp when the payment manager was last updated.
   *
   * @public
   */
  lastUpdatedAt: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the KMS key used to encrypt sensitive payment manager data at rest, if configured.
   *
   * @public
   */
  kmsKeyArn?: string | undefined;
}

/**
 * @public
 */
export interface ListPaymentManagersResponse {
  /**
   * The list of payment manager summaries. For details about the fields in each summary, see the `PaymentManagerSummary` data type.
   *
   * @public
   */
  paymentManagers: PaymentManagerSummary[] | undefined;

  /**
   * If the total number of results is greater than the `maxResults` value provided in the request, use this token when making another request in the `nextToken` field to return the next batch of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Configuration for a payment credential provider that stores authentication credentials for a payment provider.
 *
 * @public
 */
export interface PaymentCredentialProviderConfiguration {
  /**
   * The Amazon Resource Name (ARN) of the credential provider that stores the authentication credentials for the payment provider.
   *
   * @public
   */
  credentialProviderArn: string | undefined;
}

/**
 * The credential provider configuration for a payment connector. Specifies the payment provider type and its associated credential provider.
 *
 * @public
 */
export type CredentialsProviderConfiguration =
  | CredentialsProviderConfiguration.CoinbaseCDPMember
  | CredentialsProviderConfiguration.StripePrivyMember
  | CredentialsProviderConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace CredentialsProviderConfiguration {
  /**
   * The credential provider configuration for a Coinbase CDP payment connector.
   *
   * @public
   */
  export interface CoinbaseCDPMember {
    coinbaseCDP: PaymentCredentialProviderConfiguration;
    stripePrivy?: never;
    $unknown?: never;
  }

  /**
   * The credential provider configuration for a Stripe Privy payment connector.
   *
   * @public
   */
  export interface StripePrivyMember {
    coinbaseCDP?: never;
    stripePrivy: PaymentCredentialProviderConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    coinbaseCDP?: never;
    stripePrivy?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    coinbaseCDP: (value: PaymentCredentialProviderConfiguration) => T;
    stripePrivy: (value: PaymentCredentialProviderConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreatePaymentConnectorRequest {
  /**
   * The unique identifier of the payment manager to create the connector for.
   *
   * @public
   */
  paymentManagerId: string | undefined;

  /**
   * The name of the payment connector.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A description of the payment connector.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The type of payment connector, which determines the payment provider integration.
   *
   * @public
   */
  type: PaymentConnectorType | undefined;

  /**
   * The credential provider configurations for the payment connector. These configurations specify how the connector authenticates with the payment provider.
   *
   * @public
   */
  credentialProviderConfigurations: CredentialsProviderConfiguration[] | undefined;

  /**
   * The provision mode for creating the payment connector. If you don't specify a value, the default is `MANUAL`.
   *
   * - `MANUAL` - You provide the credential provider configurations directly.
   * - `QUICK_CREATE` - The service orchestrates OAuth consent and provisions the credential provider for you.
   *
   * @public
   */
  provisionMode?: PaymentConnectorProvisionMode | undefined;

  /**
   * A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If you don't specify this field, a value is randomly generated for you. If this token matches a previous request, the service ignores the request, but doesn't return an error. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html).
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreatePaymentConnectorResponse {
  /**
   * The unique identifier of the created payment connector.
   *
   * @public
   */
  paymentConnectorId: string | undefined;

  /**
   * The unique identifier of the parent payment manager.
   *
   * @public
   */
  paymentManagerId: string | undefined;

  /**
   * The name of the created payment connector.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The type of the created payment connector.
   *
   * @public
   */
  type: PaymentConnectorType | undefined;

  /**
   * The credential provider configurations for the created payment connector.
   *
   * @public
   */
  credentialProviderConfigurations: CredentialsProviderConfiguration[] | undefined;

  /**
   * The timestamp when the payment connector was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The current status of the payment connector. Possible values include `CREATING`, `READY`, `UPDATING`, `DELETING`, `CREATE_FAILED`, `UPDATE_FAILED`, and `DELETE_FAILED`.
   *
   * @public
   */
  status: PaymentConnectorStatus | undefined;

  /**
   * The URL that the user must open to complete OAuth consent. This field is only present when the payment connector status is `PENDING_AUTHENTICATION`.
   *
   * @public
   */
  authorizationUrl?: string | undefined;
}

/**
 * @public
 */
export interface DeletePaymentConnectorRequest {
  /**
   * The unique identifier of the parent payment manager.
   *
   * @public
   */
  paymentManagerId: string | undefined;

  /**
   * The unique identifier of the payment connector to delete.
   *
   * @public
   */
  paymentConnectorId: string | undefined;

  /**
   * A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If you don't specify this field, a value is randomly generated for you. If this token matches a previous request, the service ignores the request, but doesn't return an error. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html).
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface DeletePaymentConnectorResponse {
  /**
   * The current status of the payment connector, set to `DELETING` when deletion is initiated. Possible values include `CREATING`, `READY`, `UPDATING`, `DELETING`, `CREATE_FAILED`, `UPDATE_FAILED`, and `DELETE_FAILED`.
   *
   * @public
   */
  status: PaymentConnectorStatus | undefined;

  /**
   * The unique identifier of the deleted payment connector.
   *
   * @public
   */
  paymentConnectorId?: string | undefined;
}

/**
 * @public
 */
export interface GetPaymentConnectorRequest {
  /**
   * The unique identifier of the parent payment manager.
   *
   * @public
   */
  paymentManagerId: string | undefined;

  /**
   * The unique identifier of the payment connector to retrieve.
   *
   * @public
   */
  paymentConnectorId: string | undefined;
}

/**
 * @public
 */
export interface GetPaymentConnectorResponse {
  /**
   * The unique identifier of the payment connector.
   *
   * @public
   */
  paymentConnectorId: string | undefined;

  /**
   * The name of the payment connector.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the payment connector.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The type of the payment connector, which determines the payment provider integration.
   *
   * @public
   */
  type: PaymentConnectorType | undefined;

  /**
   * Specifies how the payment connector was provisioned. Payment connectors that were created before this field was available return `MANUAL`.
   *
   * - `MANUAL` - You provided the credential provider configurations, so you own the credentials. Rotate them with the payment provider, then call `UpdatePaymentCredentialProvider`.
   * - `QUICK_CREATE` - AgentCore provisioned the credential provider for you, so the credentials are service-managed. You can rotate them with `RotatePaymentConnectorCredentials`.
   *
   * @public
   */
  provisionMode?: PaymentConnectorProvisionMode | undefined;

  /**
   * The credential provider configurations for the payment connector.
   *
   * @public
   */
  credentialProviderConfigurations: CredentialsProviderConfiguration[] | undefined;

  /**
   * The timestamp when the payment connector was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the payment connector was last updated.
   *
   * @public
   */
  lastUpdatedAt: Date | undefined;

  /**
   * The current status of the payment connector. Possible values include `CREATING`, `READY`, `UPDATING`, `DELETING`, `CREATE_FAILED`, `UPDATE_FAILED`, and `DELETE_FAILED`.
   *
   * @public
   */
  status: PaymentConnectorStatus | undefined;

  /**
   * The URL that the user must open to complete OAuth consent. This field is only present when the payment connector status is `PENDING_AUTHENTICATION`.
   *
   * @public
   */
  authorizationUrl?: string | undefined;

  /**
   * The timestamp when the payment connector's current service-managed credentials took effect. It is first set when the credentials are provisioned and is updated by each rotation. This field is present only for payment connectors with a `provisionMode` of `QUICK_CREATE`.
   *
   * @public
   */
  credentialsUpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListPaymentConnectorsRequest {
  /**
   * The unique identifier of the payment manager whose connectors to list.
   *
   * @public
   */
  paymentManagerId: string | undefined;

  /**
   * The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the `nextToken` field when making another request to return the next batch of results.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * If the total number of results is greater than the `maxResults` value provided in the request, enter the token returned in the `nextToken` field in the response in this field to return the next batch of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Contains summary information about a payment connector.
 *
 * @public
 */
export interface PaymentConnectorSummary {
  /**
   * The unique identifier of the payment connector.
   *
   * @public
   */
  paymentConnectorId: string | undefined;

  /**
   * The name of the payment connector.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The type of the payment connector, which determines the payment provider integration.
   *
   * @public
   */
  type: PaymentConnectorType | undefined;

  /**
   * Specifies how the payment connector was provisioned. Payment connectors that were created before this field was available return `MANUAL`.
   *
   * - `MANUAL` - You provided the credential provider configurations, so you own the credentials.
   * - `QUICK_CREATE` - AgentCore provisioned the credential provider for you, so the credentials are service-managed and you can rotate them with `RotatePaymentConnectorCredentials`.
   *
   * @public
   */
  provisionMode?: PaymentConnectorProvisionMode | undefined;

  /**
   * The current status of the payment connector. Possible values include `CREATING`, `READY`, `UPDATING`, `DELETING`, `CREATE_FAILED`, `UPDATE_FAILED`, and `DELETE_FAILED`.
   *
   * @public
   */
  status: PaymentConnectorStatus | undefined;

  /**
   * The timestamp when the payment connector was last updated.
   *
   * @public
   */
  lastUpdatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListPaymentConnectorsResponse {
  /**
   * The list of payment connector summaries. For details about the fields in each summary, see the `PaymentConnectorSummary` data type.
   *
   * @public
   */
  paymentConnectors: PaymentConnectorSummary[] | undefined;

  /**
   * If the total number of results is greater than the `maxResults` value provided in the request, use this token when making another request in the `nextToken` field to return the next batch of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Specifies the service-managed Coinbase CDP secrets to rotate.
 *
 * @public
 */
export interface CoinbaseCdpRotationTargets {
  /**
   * The secrets to rotate. Specify at least one value. Each secret that you specify is rotated independently.
   *
   * - `API_KEY` - The API key that the payment connector uses to call Coinbase CDP. Rotate it as routine maintenance, or if you suspect that it is compromised.
   * - `WALLET_SECRET` - The wallet secret that signs transactions. Rotate it only if it is lost or compromised. Coinbase CDP allows one wallet secret per project, so it is replaced in place and signing can be briefly interrupted.
   *
   * @public
   */
  secrets: CoinbaseCdpSecret[] | undefined;
}

/**
 * Specifies the service-managed credentials to rotate. Provide the member that matches the payment connector's `type`.
 *
 * @public
 */
export type CredentialRotationConfig =
  | CredentialRotationConfig.CoinbaseCDPMember
  | CredentialRotationConfig.$UnknownMember;

/**
 * @public
 */
export namespace CredentialRotationConfig {
  /**
   * The credentials to rotate for a Coinbase CDP payment connector.
   *
   * @public
   */
  export interface CoinbaseCDPMember {
    coinbaseCDP: CoinbaseCdpRotationTargets;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    coinbaseCDP?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    coinbaseCDP: (value: CoinbaseCdpRotationTargets) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface RotatePaymentConnectorCredentialsRequest {
  /**
   * The unique identifier of the parent payment manager.
   *
   * @public
   */
  paymentManagerId: string | undefined;

  /**
   * The unique identifier of the payment connector whose credentials you want to rotate.
   *
   * @public
   */
  paymentConnectorId: string | undefined;

  /**
   * The credentials to rotate. Specify the member that matches the payment connector's `type`. Each credential that you select is rotated independently.
   *
   * @public
   */
  credentialsToRotate: CredentialRotationConfig | undefined;

  /**
   * A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If you don't specify this field, a value is randomly generated for you. If this token matches a previous request, the service ignores the request, but doesn't return an error. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html).
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface RotatePaymentConnectorCredentialsResponse {
  /**
   * The unique identifier of the payment connector.
   *
   * @public
   */
  paymentConnectorId: string | undefined;

  /**
   * The unique identifier of the parent payment manager.
   *
   * @public
   */
  paymentManagerId: string | undefined;

  /**
   * The timestamp when the payment connector was last updated, which is when the rotation completed.
   *
   * @public
   */
  lastUpdatedAt: Date | undefined;

  /**
   * The current status of the payment connector, which is `READY` after a successful rotation.
   *
   * @public
   */
  status: PaymentConnectorStatus | undefined;
}

/**
 * @public
 */
export interface UpdatePaymentConnectorRequest {
  /**
   * The unique identifier of the parent payment manager.
   *
   * @public
   */
  paymentManagerId: string | undefined;

  /**
   * The unique identifier of the payment connector to update.
   *
   * @public
   */
  paymentConnectorId: string | undefined;

  /**
   * The updated description of the payment connector.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The updated type of the payment connector.
   *
   * @public
   */
  type?: PaymentConnectorType | undefined;

  /**
   * The updated credential provider configurations for the payment connector.
   *
   * @public
   */
  credentialProviderConfigurations?: CredentialsProviderConfiguration[] | undefined;

  /**
   * A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If you don't specify this field, a value is randomly generated for you. If this token matches a previous request, the service ignores the request, but doesn't return an error. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html).
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdatePaymentConnectorResponse {
  /**
   * The unique identifier of the updated payment connector.
   *
   * @public
   */
  paymentConnectorId: string | undefined;

  /**
   * The unique identifier of the parent payment manager.
   *
   * @public
   */
  paymentManagerId: string | undefined;

  /**
   * The name of the updated payment connector.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The type of the updated payment connector.
   *
   * @public
   */
  type: PaymentConnectorType | undefined;

  /**
   * The credential provider configurations for the updated payment connector.
   *
   * @public
   */
  credentialProviderConfigurations: CredentialsProviderConfiguration[] | undefined;

  /**
   * The timestamp when the payment connector was last updated.
   *
   * @public
   */
  lastUpdatedAt: Date | undefined;

  /**
   * The current status of the updated payment connector. Possible values include `CREATING`, `READY`, `UPDATING`, `DELETING`, `CREATE_FAILED`, `UPDATE_FAILED`, and `DELETE_FAILED`.
   *
   * @public
   */
  status: PaymentConnectorStatus | undefined;

  /**
   * The URL that the user must open to complete OAuth consent. This field is only present when the payment connector status is `PENDING_AUTHENTICATION`.
   *
   * @public
   */
  authorizationUrl?: string | undefined;
}

/**
 * @public
 */
export interface UpdatePaymentManagerRequest {
  /**
   * The unique identifier of the payment manager to update.
   *
   * @public
   */
  paymentManagerId: string | undefined;

  /**
   * The updated description of the payment manager.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The updated authorizer type for the payment manager.
   *
   * @public
   */
  authorizerType?: PaymentsAuthorizerType | undefined;

  /**
   * The updated authorizer configuration for the payment manager.
   *
   * @public
   */
  authorizerConfiguration?: AuthorizerConfiguration | undefined;

  /**
   * The updated Amazon Resource Name (ARN) of the IAM role for the payment manager.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If you don't specify this field, a value is randomly generated for you. If this token matches a previous request, the service ignores the request, but doesn't return an error. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html).
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The updated Amazon Resource Name (ARN) of the customer managed KMS key used to encrypt sensitive payment manager data at rest.
   *
   * @public
   */
  kmsKeyArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdatePaymentManagerResponse {
  /**
   * The Amazon Resource Name (ARN) of the updated payment manager.
   *
   * @public
   */
  paymentManagerArn: string | undefined;

  /**
   * The unique identifier of the updated payment manager.
   *
   * @public
   */
  paymentManagerId: string | undefined;

  /**
   * The name of the updated payment manager.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The type of authorizer for the updated payment manager.
   *
   * @public
   */
  authorizerType: PaymentsAuthorizerType | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role associated with the updated payment manager.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * The information about the workload identity.
   *
   * @public
   */
  workloadIdentityDetails?: WorkloadIdentityDetails | undefined;

  /**
   * The timestamp when the payment manager was last updated.
   *
   * @public
   */
  lastUpdatedAt: Date | undefined;

  /**
   * The current status of the updated payment manager. Possible values include `CREATING`, `READY`, `UPDATING`, `DELETING`, `CREATE_FAILED`, `UPDATE_FAILED`, and `DELETE_FAILED`.
   *
   * @public
   */
  status: PaymentManagerStatus | undefined;

  /**
   * The Amazon Resource Name (ARN) of the KMS key used to encrypt sensitive payment manager data at rest, if configured.
   *
   * @public
   */
  kmsKeyArn?: string | undefined;
}

/**
 * @public
 */
export interface CreatePolicyEngineRequest {
  /**
   * The customer-assigned immutable name for the policy engine. This name identifies the policy engine and cannot be changed after creation.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A human-readable description of the policy engine's purpose and scope (1-4,096 characters). This helps administrators understand the policy engine's role in the overall governance strategy. Document which Gateway this engine will be associated with, what types of tools or workflows it governs, and the team or service responsible for maintaining it. Clear descriptions are essential when managing multiple policy engines across different services or environments.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you retry a request with the same client token, the service returns the same response without creating a duplicate policy engine.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the KMS key used to encrypt the policy engine data.
   *
   * @public
   */
  encryptionKeyArn?: string | undefined;

  /**
   * A map of tag keys and values to assign to an AgentCore Policy. Tags enable you to categorize your resources in different ways, for example, by purpose, owner, or environment.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreatePolicyEngineResponse {
  /**
   * The unique identifier for the created policy engine. This system-generated identifier consists of the user name plus a 10-character generated suffix and is used for all subsequent policy engine operations.
   *
   * @public
   */
  policyEngineId: string | undefined;

  /**
   * The customer-assigned name of the created policy engine. This matches the name provided in the request and serves as the human-readable identifier.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The timestamp when the policy engine was created. This is automatically set by the service and used for auditing and lifecycle management.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the policy engine was last updated. For newly created policy engines, this matches the `createdAt` timestamp.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the created policy engine. This globally unique identifier can be used for cross-service references and IAM policy statements.
   *
   * @public
   */
  policyEngineArn: string | undefined;

  /**
   * The current status of the policy engine. A status of `ACTIVE` indicates the policy engine is ready for use.
   *
   * @public
   */
  status: PolicyEngineStatus | undefined;

  /**
   * The Amazon Resource Name (ARN) of the KMS key used to encrypt the policy engine data.
   *
   * @public
   */
  encryptionKeyArn?: string | undefined;

  /**
   * A human-readable description of the policy engine's purpose.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Additional information about the policy engine status. This provides details about any failures or the current state of the policy engine creation process.
   *
   * @public
   */
  statusReasons: string[] | undefined;
}

/**
 * @public
 */
export interface DeletePolicyEngineRequest {
  /**
   * The unique identifier of the policy engine to be deleted. This must be a valid policy engine ID that exists within the account.
   *
   * @public
   */
  policyEngineId: string | undefined;
}

/**
 * @public
 */
export interface DeletePolicyEngineResponse {
  /**
   * The unique identifier of the policy engine being deleted. This confirms which policy engine the deletion operation targets.
   *
   * @public
   */
  policyEngineId: string | undefined;

  /**
   * The customer-assigned name of the deleted policy engine.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The timestamp when the deleted policy engine was originally created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the deleted policy engine was last modified before deletion. This tracks the final state of the policy engine before it was removed from the system.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the deleted policy engine. This globally unique identifier confirms which policy engine resource was successfully removed.
   *
   * @public
   */
  policyEngineArn: string | undefined;

  /**
   * The status of the policy engine deletion operation. This provides status about any issues that occurred during the deletion process.
   *
   * @public
   */
  status: PolicyEngineStatus | undefined;

  /**
   * The Amazon Resource Name (ARN) of the KMS key used to encrypt the policy engine data.
   *
   * @public
   */
  encryptionKeyArn?: string | undefined;

  /**
   * The human-readable description of the deleted policy engine.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Additional information about the deletion status. This provides details about the deletion process or any issues that may have occurred.
   *
   * @public
   */
  statusReasons: string[] | undefined;
}

/**
 * @public
 */
export interface GetPolicyEngineRequest {
  /**
   * The unique identifier of the policy engine to be retrieved. This must be a valid policy engine ID that exists within the account.
   *
   * @public
   */
  policyEngineId: string | undefined;
}

/**
 * @public
 */
export interface GetPolicyEngineResponse {
  /**
   * The unique identifier of the retrieved policy engine. This matches the policy engine ID provided in the request and serves as the system identifier.
   *
   * @public
   */
  policyEngineId: string | undefined;

  /**
   * The customer-assigned name of the policy engine. This is the human-readable identifier that was specified when the policy engine was created.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The timestamp when the policy engine was originally created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the policy engine was last modified. This tracks the most recent changes to the policy engine configuration.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the policy engine. This globally unique identifier can be used for cross-service references and IAM policy statements.
   *
   * @public
   */
  policyEngineArn: string | undefined;

  /**
   * The current status of the policy engine.
   *
   * @public
   */
  status: PolicyEngineStatus | undefined;

  /**
   * The Amazon Resource Name (ARN) of the KMS key used to encrypt the policy engine data.
   *
   * @public
   */
  encryptionKeyArn?: string | undefined;

  /**
   * The human-readable description of the policy engine's purpose and scope. This helps administrators understand the policy engine's role in governance.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Additional information about the policy engine status. This provides details about any failures or the current state of the policy engine.
   *
   * @public
   */
  statusReasons: string[] | undefined;
}

/**
 * @public
 */
export interface GetPolicyEngineSummaryRequest {
  /**
   * The unique identifier of the policy engine to retrieve the summary for. This must be a valid policy engine ID that exists within the account.
   *
   * @public
   */
  policyEngineId: string | undefined;
}

/**
 * @public
 */
export interface GetPolicyEngineSummaryResponse {
  /**
   * The unique identifier of the policy engine.
   *
   * @public
   */
  policyEngineId: string | undefined;

  /**
   * The customer-assigned name of the policy engine.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The timestamp when the policy engine was originally created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the policy engine was last modified.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the policy engine.
   *
   * @public
   */
  policyEngineArn: string | undefined;

  /**
   * The current status of the policy engine.
   *
   * @public
   */
  status: PolicyEngineStatus | undefined;

  /**
   * The Amazon Resource Name (ARN) of the KMS key used to encrypt the policy engine data.
   *
   * @public
   */
  encryptionKeyArn?: string | undefined;
}

/**
 * @public
 */
export interface ListPolicyEnginesRequest {
  /**
   * A pagination token returned from a previous [ListPolicyEngines](https://docs.aws.amazon.com/bedrock-agentcore-control/latest/APIReference/API_ListPolicyEngines.html) call. Use this token to retrieve the next page of results when the response is paginated.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of policy engines to return in a single response. If not specified, the default is 10 policy engines per page, with a maximum of 100 per page.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Represents a policy engine resource within the AgentCore Policy system. Policy engines serve as containers for grouping related policies and provide the execution context for policy evaluation and management. Each policy engine can be associated with one Gateway (one engine per Gateway), where it intercepts all agent tool calls and evaluates them against the contained policies before allowing tools to execute. The policy engine maintains the Cedar schema generated from the Gateway's tool manifest, ensuring that policies are validated against the actual tools and parameters available. Policy engines support two enforcement modes that can be configured when associating with a Gateway: log-only mode for testing (evaluates decisions without blocking) and enforce mode for production (actively allows or denies based on policy evaluation).
 *
 * @public
 */
export interface PolicyEngine {
  /**
   * The unique identifier for the policy engine. This system-generated identifier consists of the user name plus a 10-character generated suffix and serves as the primary key for policy engine operations.
   *
   * @public
   */
  policyEngineId: string | undefined;

  /**
   * The customer-assigned immutable name for the policy engine. This human-readable identifier must be unique within the account and cannot exceed 48 characters.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The timestamp when the policy engine was originally created. This is automatically set by the service and used for auditing and lifecycle management.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the policy engine was last modified. This tracks the most recent changes to the policy engine configuration or metadata.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the policy engine. This globally unique identifier can be used for cross-service references and IAM policy statements.
   *
   * @public
   */
  policyEngineArn: string | undefined;

  /**
   * The current status of the policy engine.
   *
   * @public
   */
  status: PolicyEngineStatus | undefined;

  /**
   * The Amazon Resource Name (ARN) of the KMS key used to encrypt the policy engine data.
   *
   * @public
   */
  encryptionKeyArn?: string | undefined;

  /**
   * A human-readable description of the policy engine's purpose and scope. Limited to 4,096 characters, this helps administrators understand the policy engine's role in the overall governance strategy.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Additional information about the policy engine status. This provides details about any failures or the current state of the policy engine lifecycle.
   *
   * @public
   */
  statusReasons: string[] | undefined;
}

/**
 * @public
 */
export interface ListPolicyEnginesResponse {
  /**
   * An array of policy engine objects that exist in the account. Each policy engine object contains the engine metadata, status, and key identifiers for further operations.
   *
   * @public
   */
  policyEngines: PolicyEngine[] | undefined;

  /**
   * A pagination token that can be used in subsequent [ListPolicyEngines](https://docs.aws.amazon.com/bedrock-agentcore-control/latest/APIReference/API_ListPolicyEngines.html) calls to retrieve additional results. This token is only present when there are more results available.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPolicyEngineSummariesRequest {
  /**
   * A pagination token returned from a previous [ListPolicyEngineSummaries](https://docs.aws.amazon.com/bedrock-agentcore-control/latest/APIReference/API_ListPolicyEngineSummaries.html) call. Use this token to retrieve the next page of results when the response is paginated.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of policy engine summaries to return in a single response.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Represents a metadata-only summary of a policy engine resource. This structure contains resource identifiers, status, and timestamps without customer-encrypted fields such as description or status reasons. Policy engine summaries are returned by operations that do not require access to the customer's KMS key.
 *
 * @public
 */
export interface PolicyEngineSummary {
  /**
   * The unique identifier for the policy engine.
   *
   * @public
   */
  policyEngineId: string | undefined;

  /**
   * The customer-assigned name of the policy engine.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The timestamp when the policy engine was originally created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the policy engine was last modified.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the policy engine.
   *
   * @public
   */
  policyEngineArn: string | undefined;

  /**
   * The current status of the policy engine.
   *
   * @public
   */
  status: PolicyEngineStatus | undefined;

  /**
   * The Amazon Resource Name (ARN) of the KMS key used to encrypt the policy engine data.
   *
   * @public
   */
  encryptionKeyArn?: string | undefined;
}

/**
 * @public
 */
export interface ListPolicyEngineSummariesResponse {
  /**
   * An array of policy engine summary objects that exist in the account. Each summary contains resource identifiers, status, and timestamps without customer-encrypted content.
   *
   * @public
   */
  policyEngines: PolicyEngineSummary[] | undefined;

  /**
   * A pagination token that can be used in subsequent [ListPolicyEngineSummaries](https://docs.aws.amazon.com/bedrock-agentcore-control/latest/APIReference/API_ListPolicyEngineSummaries.html) calls to retrieve additional results. This token is only present when there are more results available.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdatePolicyEngineRequest {
  /**
   * The unique identifier of the policy engine to be updated.
   *
   * @public
   */
  policyEngineId: string | undefined;

  /**
   * The new description for the policy engine.
   *
   * @public
   */
  description?: UpdatedDescription | undefined;
}

/**
 * @public
 */
export interface UpdatePolicyEngineResponse {
  /**
   * The unique identifier of the updated policy engine.
   *
   * @public
   */
  policyEngineId: string | undefined;

  /**
   * The name of the updated policy engine.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The original creation timestamp of the policy engine.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the policy engine was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The ARN of the updated policy engine.
   *
   * @public
   */
  policyEngineArn: string | undefined;

  /**
   * The current status of the updated policy engine.
   *
   * @public
   */
  status: PolicyEngineStatus | undefined;

  /**
   * The Amazon Resource Name (ARN) of the KMS key used to encrypt the policy engine data.
   *
   * @public
   */
  encryptionKeyArn?: string | undefined;

  /**
   * The updated description of the policy engine.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Additional information about the update status.
   *
   * @public
   */
  statusReasons: string[] | undefined;
}

/**
 * @public
 */
export interface GetPolicyGenerationRequest {
  /**
   * The unique identifier of the policy generation request to be retrieved. This must be a valid generation ID from a previous [StartPolicyGeneration](https://docs.aws.amazon.com/bedrock-agentcore-control/latest/APIReference/API_StartPolicyGeneration.html) call.
   *
   * @public
   */
  policyGenerationId: string | undefined;

  /**
   * The identifier of the policy engine associated with the policy generation request. This provides the context for the generation operation and schema validation.
   *
   * @public
   */
  policyEngineId: string | undefined;
}

/**
 * Represents a resource within the AgentCore Policy system. Resources are the targets of policy evaluation. Currently, only AgentCore Gateways are supported as resources for policy enforcement.
 *
 * @public
 */
export type Resource =
  | Resource.ArnMember
  | Resource.$UnknownMember;

/**
 * @public
 */
export namespace Resource {
  /**
   * The Amazon Resource Name (ARN) of the resource. This globally unique identifier specifies the exact resource that policies will be evaluated against for access control decisions.
   *
   * @public
   */
  export interface ArnMember {
    arn: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    arn?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    arn: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface GetPolicyGenerationResponse {
  /**
   * The identifier of the policy engine associated with this policy generation. This confirms the policy engine context for the generation operation.
   *
   * @public
   */
  policyEngineId: string | undefined;

  /**
   * The unique identifier of the policy generation request. This matches the generation ID provided in the request and serves as the tracking identifier.
   *
   * @public
   */
  policyGenerationId: string | undefined;

  /**
   * The customer-assigned name for the policy generation request. This helps identify and track generation operations across multiple requests.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the policy generation. This globally unique identifier can be used for tracking, auditing, and cross-service references.
   *
   * @public
   */
  policyGenerationArn: string | undefined;

  /**
   * The resource information associated with the policy generation. This provides context about the target resources for which the policies are being generated.
   *
   * @public
   */
  resource: Resource | undefined;

  /**
   * The timestamp when the policy generation request was created. This is used for tracking and auditing generation operations and their lifecycle.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the policy generation was last updated. This tracks the progress of the generation process and any status changes.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The current status of the policy generation. This indicates whether the generation is in progress, completed successfully, or failed during processing.
   *
   * @public
   */
  status: PolicyGenerationStatus | undefined;

  /**
   * The findings and results from the policy generation process. This includes any issues, recommendations, validation results, or insights from the generated policies.
   *
   * @public
   */
  findings?: string | undefined;

  /**
   * Additional information about the generation status. This provides details about any failures, warnings, or the current state of the generation process.
   *
   * @public
   */
  statusReasons: string[] | undefined;
}

/**
 * @public
 */
export interface GetPolicyGenerationSummaryRequest {
  /**
   * The unique identifier of the policy generation request to retrieve the summary for.
   *
   * @public
   */
  policyGenerationId: string | undefined;

  /**
   * The identifier of the policy engine associated with the policy generation request.
   *
   * @public
   */
  policyEngineId: string | undefined;
}

/**
 * @public
 */
export interface GetPolicyGenerationSummaryResponse {
  /**
   * The identifier of the policy engine associated with this policy generation.
   *
   * @public
   */
  policyEngineId: string | undefined;

  /**
   * The unique identifier of the policy generation request.
   *
   * @public
   */
  policyGenerationId: string | undefined;

  /**
   * The customer-assigned name for the policy generation request.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the policy generation request.
   *
   * @public
   */
  policyGenerationArn: string | undefined;

  /**
   * The resource information associated with the policy generation.
   *
   * @public
   */
  resource: Resource | undefined;

  /**
   * The timestamp when the policy generation request was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the policy generation was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The current status of the policy generation request.
   *
   * @public
   */
  status: PolicyGenerationStatus | undefined;

  /**
   * The findings from the policy generation process, if available.
   *
   * @public
   */
  findings?: string | undefined;
}

/**
 * @public
 */
export interface ListPolicyGenerationAssetsRequest {
  /**
   * The unique identifier of the policy generation request whose assets are to be retrieved. This must be a valid generation ID from a previous [StartPolicyGeneration](https://docs.aws.amazon.com/bedrock-agentcore-control/latest/APIReference/API_StartPolicyGeneration.html) call that has completed processing.
   *
   * @public
   */
  policyGenerationId: string | undefined;

  /**
   * The unique identifier of the policy engine associated with the policy generation request. This provides the context for the generation operation and ensures assets are retrieved from the correct policy engine.
   *
   * @public
   */
  policyEngineId: string | undefined;

  /**
   * A pagination token returned from a previous [ListPolicyGenerationAssets](https://docs.aws.amazon.com/bedrock-agentcore-control/latest/APIReference/API_ListPolicyGenerationAssets.html) call. Use this token to retrieve the next page of assets when the response is paginated due to large numbers of generated policy options.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of policy generation assets to return in a single response. If not specified, the default is 10 assets per page, with a maximum of 100 per page. This helps control response size when dealing with policy generations that produce many alternative policy options.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Represents a Cedar policy statement within the AgentCore Policy system. Cedar is a policy language designed for authorization that provides human-readable, analyzable, and high-performance policy evaluation for controlling agent behavior and access decisions.
 *
 * @public
 */
export interface CedarPolicy {
  /**
   * The Cedar policy statement that defines the authorization logic. This statement follows Cedar syntax and specifies principals, actions, resources, and conditions that determine when access should be allowed or denied.
   *
   * @public
   */
  statement: string | undefined;
}

/**
 * An AgentCore Cedar or Dogwood policy statement, which supports plain Cedar policies, temporal policies, and guardrails definitions.
 *
 * @public
 */
export interface PolicyStatement {
  /**
   * The body of the AgentCore Cedar or Dogwood policy statement. Contains the policy logic, which can be a Cedar policy, a temporal policy, or a guardrails definition.
   *
   * @public
   */
  statement: string | undefined;
}

/**
 * Represents the information identifying a generated policy asset from the AI-powered policy generation process within the AgentCore Policy system. Each asset contains a Dogwood policy statement generated from natural language input, along with associated metadata and analysis findings to help users evaluate and select the most appropriate policy option.
 *
 * @public
 */
export interface PolicyGenerationDetails {
  /**
   * The unique identifier for this policy generation request.
   *
   * @public
   */
  policyGenerationId: string | undefined;

  /**
   * The unique identifier for this generated policy asset within the policy generation request.
   *
   * @public
   */
  policyGenerationAssetId: string | undefined;
}

/**
 * Represents the definition structure for policies within the AgentCore Policy system. This structure encapsulates different policy formats and languages that can be used to define access control rules.
 *
 * @public
 */
export type PolicyDefinition =
  | PolicyDefinition.CedarMember
  | PolicyDefinition.PolicyMember
  | PolicyDefinition.PolicyGenerationMember
  | PolicyDefinition.$UnknownMember;

/**
 * @public
 */
export namespace PolicyDefinition {
  /**
   * The Cedar policy definition within the policy definition structure. This contains the Cedar policy statement that defines the authorization logic using Cedar's human-readable, analyzable policy language. Cedar policies specify principals (who can access), actions (what operations are allowed), resources (what can be accessed), and optional conditions for fine-grained control. Cedar provides a formal policy language designed for authorization with deterministic evaluation, making policies testable, reviewable, and auditable. All Cedar policies follow a default-deny model where actions are denied unless explicitly permitted, and forbid policies always override permit policies.
   *
   * @public
   */
  export interface CedarMember {
    cedar: CedarPolicy;
    policyGeneration?: never;
    policy?: never;
    $unknown?: never;
  }

  /**
   * The generated policy asset information within the policy definition structure. This contains information identifying a generated policy asset from the AI-powered policy generation process within the AgentCore Policy system. Each asset contains a Dogwood policy statement generated from natural language input, along with associated metadata and analysis findings to help users evaluate and select the most appropriate policy option.
   *
   * @public
   */
  export interface PolicyGenerationMember {
    cedar?: never;
    policyGeneration: PolicyGenerationDetails;
    policy?: never;
    $unknown?: never;
  }

  /**
   * The Dogwood policy statement that defines the access control rules. This policy definition can include Dogwood policies and supports temporal conditions and information providers such as guardrails.
   *
   * @public
   */
  export interface PolicyMember {
    cedar?: never;
    policyGeneration?: never;
    policy: PolicyStatement;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    cedar?: never;
    policyGeneration?: never;
    policy?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    cedar: (value: CedarPolicy) => T;
    policyGeneration: (value: PolicyGenerationDetails) => T;
    policy: (value: PolicyStatement) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Represents a finding or issue discovered during policy generation or validation. Findings provide insights about potential problems, recommendations, or validation results from policy analysis operations. Finding types include: VALID (policy is ready to use), INVALID (policy has validation errors that must be fixed), NOT_TRANSLATABLE (input couldn't be converted to policy), ALLOW_ALL (policy would allow all actions, potential security risk), ALLOW_NONE (policy would allow no actions, unusable), DENY_ALL (policy would deny all actions, may be too restrictive), and DENY_NONE (policy would deny no actions, ineffective). Review all findings before creating policies from generated assets to ensure they match your security requirements.
 *
 * @public
 */
export interface Finding {
  /**
   * The type or category of the finding. This classifies the finding as an error, warning, recommendation, or informational message to help users understand the severity and nature of the issue.
   *
   * @public
   */
  type?: FindingType | undefined;

  /**
   * A human-readable description of the finding. This provides detailed information about the issue, recommendation, or validation result to help users understand and address the finding.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * Represents a generated policy asset from the AI-powered policy generation process within the AgentCore Policy system. Each asset contains a Dogwood policy statement generated from natural language input, along with associated metadata and analysis findings to help users evaluate and select the most appropriate policy option.
 *
 * @public
 */
export interface PolicyGenerationAsset {
  /**
   * The unique identifier for this generated policy asset within the policy generation request. This ID can be used to reference specific generated policy options when creating actual policies from the generation results.
   *
   * @public
   */
  policyGenerationAssetId: string | undefined;

  /**
   * Represents the definition structure for policies within the AgentCore Policy system. This structure encapsulates different policy formats and languages that can be used to define access control rules.
   *
   * @public
   */
  definition?: PolicyDefinition | undefined;

  /**
   * The portion of the original natural language input that this generated policy asset addresses. This helps users understand which part of their policy description was translated into this specific Dogwood policy statement, enabling better policy selection and refinement. When a single natural language input describes multiple authorization requirements, the generation process creates separate policy assets for each requirement, with each asset's rawTextFragment showing which requirement it addresses. Use this mapping to verify that all parts of your natural language input were correctly translated into Dogwood policies.
   *
   * @public
   */
  rawTextFragment: string | undefined;

  /**
   * Analysis findings and insights related to this specific generated policy asset. These findings may include validation results, potential issues, or recommendations for improvement to help users evaluate the quality and appropriateness of the generated policy.
   *
   * @public
   */
  findings: Finding[] | undefined;
}

/**
 * @public
 */
export interface ListPolicyGenerationAssetsResponse {
  /**
   * An array of generated policy assets including Dogwood policies and related artifacts from the AI-powered policy generation process. Each asset represents a different policy option or variation generated from the original natural language input.
   *
   * @public
   */
  policyGenerationAssets?: PolicyGenerationAsset[] | undefined;

  /**
   * A pagination token that can be used in subsequent [ListPolicyGenerationAssets](https://docs.aws.amazon.com/bedrock-agentcore-control/latest/APIReference/API_ListPolicyGenerationAssets.html) calls to retrieve additional assets. This token is only present when there are more generated policy assets available beyond the current response.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPolicyGenerationsRequest {
  /**
   * A pagination token for retrieving additional policy generations when results are paginated.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of policy generations to return in a single response.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The identifier of the policy engine whose policy generations to retrieve.
   *
   * @public
   */
  policyEngineId: string | undefined;
}

/**
 * Represents a policy generation request within the AgentCore Policy system. Tracks the AI-powered conversion of natural language descriptions into Dogwood policy statements, enabling users to author policies by describing authorization requirements in plain English. The generation process analyzes the natural language input along with the Gateway's tool context and Cedar schema to produce one or more validated policy options. Each generation request tracks the status of the conversion process and maintains findings about the generated policies, including validation results and potential issues. Generated policy assets remain available for one week after successful generation, allowing time to review and create policies from the generated options.
 *
 * @public
 */
export interface PolicyGeneration {
  /**
   * The identifier of the policy engine associated with this generation request.
   *
   * @public
   */
  policyEngineId: string | undefined;

  /**
   * The unique identifier for this policy generation request.
   *
   * @public
   */
  policyGenerationId: string | undefined;

  /**
   * The customer-assigned name for this policy generation request.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The ARN of this policy generation request.
   *
   * @public
   */
  policyGenerationArn: string | undefined;

  /**
   * The resource information associated with this policy generation.
   *
   * @public
   */
  resource: Resource | undefined;

  /**
   * The timestamp when this policy generation request was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when this policy generation was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The current status of this policy generation request.
   *
   * @public
   */
  status: PolicyGenerationStatus | undefined;

  /**
   * Findings and insights from this policy generation process.
   *
   * @public
   */
  findings?: string | undefined;

  /**
   * Additional information about the generation status.
   *
   * @public
   */
  statusReasons: string[] | undefined;
}

/**
 * @public
 */
export interface ListPolicyGenerationsResponse {
  /**
   * An array of policy generation objects that match the specified criteria.
   *
   * @public
   */
  policyGenerations: PolicyGeneration[] | undefined;

  /**
   * A pagination token for retrieving additional policy generations if more results are available.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPolicyGenerationSummariesRequest {
  /**
   * A pagination token returned from a previous [ListPolicyGenerationSummaries](https://docs.aws.amazon.com/bedrock-agentcore-control/latest/APIReference/API_ListPolicyGenerationSummaries.html) call. Use this token to retrieve the next page of results when the response is paginated.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of policy generation summaries to return in a single response.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The identifier of the policy engine whose policy generation summaries to retrieve.
   *
   * @public
   */
  policyEngineId: string | undefined;
}

/**
 * Represents a metadata-only summary of a policy generation resource. This structure contains resource identifiers, status, timestamps, and findings without customer-encrypted fields such as status reasons. Policy generation summaries are returned by operations that do not require access to the customer's KMS key.
 *
 * @public
 */
export interface PolicyGenerationSummary {
  /**
   * The identifier of the policy engine associated with this generation request.
   *
   * @public
   */
  policyEngineId: string | undefined;

  /**
   * The unique identifier for this policy generation request.
   *
   * @public
   */
  policyGenerationId: string | undefined;

  /**
   * The customer-assigned name for this policy generation request.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The ARN of this policy generation request.
   *
   * @public
   */
  policyGenerationArn: string | undefined;

  /**
   * The resource information associated with this policy generation.
   *
   * @public
   */
  resource: Resource | undefined;

  /**
   * The timestamp when this policy generation request was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when this policy generation was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The current status of this policy generation request.
   *
   * @public
   */
  status: PolicyGenerationStatus | undefined;

  /**
   * Findings and insights from this policy generation process.
   *
   * @public
   */
  findings?: string | undefined;
}

/**
 * @public
 */
export interface ListPolicyGenerationSummariesResponse {
  /**
   * An array of policy generation summary objects that match the specified criteria. Each summary contains resource identifiers, status, timestamps, and findings without customer-encrypted content.
   *
   * @public
   */
  policyGenerations: PolicyGenerationSummary[] | undefined;

  /**
   * A pagination token that can be used in subsequent [ListPolicyGenerationSummaries](https://docs.aws.amazon.com/bedrock-agentcore-control/latest/APIReference/API_ListPolicyGenerationSummaries.html) calls to retrieve additional results. This token is only present when there are more results available.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Represents content input for policy generation operations. This structure encapsulates the natural language descriptions or other content formats that are used as input for AI-powered policy generation.
 *
 * @public
 */
export type Content =
  | Content.RawTextMember
  | Content.$UnknownMember;

/**
 * @public
 */
export namespace Content {
  /**
   * The raw text content containing natural language descriptions of desired policy behavior. This text is processed by AI to generate corresponding Dogwood policy statements that match the described intent.
   *
   * @public
   */
  export interface RawTextMember {
    rawText: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    rawText?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    rawText: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface StartPolicyGenerationRequest {
  /**
   * The identifier of the policy engine that provides the context for policy generation. This engine's schema and tool context are used to ensure generated policies are valid and applicable.
   *
   * @public
   */
  policyEngineId: string | undefined;

  /**
   * The resource information that provides context for policy generation. This helps the AI understand the target resources and generate appropriate access control rules.
   *
   * @public
   */
  resource: Resource | undefined;

  /**
   * The natural language description of the desired policy behavior. This content is processed by AI to generate corresponding Dogwood policy statements that match the described intent.
   *
   * @public
   */
  content: Content | undefined;

  /**
   * A customer-assigned name for the policy generation request. This helps track and identify generation operations, especially when running multiple generations simultaneously.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A unique, case-sensitive identifier to ensure the idempotency of the request. The Amazon Web Services SDK automatically generates this token, so you don't need to provide it in most cases. If you retry a request with the same client token, the service returns the same response without starting a duplicate generation.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface StartPolicyGenerationResponse {
  /**
   * The identifier of the policy engine associated with the started policy generation.
   *
   * @public
   */
  policyEngineId: string | undefined;

  /**
   * The unique identifier assigned to the policy generation request for tracking progress.
   *
   * @public
   */
  policyGenerationId: string | undefined;

  /**
   * The customer-assigned name for the policy generation request.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The ARN of the created policy generation request.
   *
   * @public
   */
  policyGenerationArn: string | undefined;

  /**
   * The resource information associated with the policy generation request.
   *
   * @public
   */
  resource: Resource | undefined;

  /**
   * The timestamp when the policy generation request was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the policy generation was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The initial status of the policy generation request.
   *
   * @public
   */
  status: PolicyGenerationStatus | undefined;

  /**
   * Initial findings from the policy generation process.
   *
   * @public
   */
  findings?: string | undefined;

  /**
   * Additional information about the generation status.
   *
   * @public
   */
  statusReasons: string[] | undefined;
}

/**
 * @public
 */
export interface CreatePolicyRequest {
  /**
   * The customer-assigned immutable name for the policy. Must be unique within the account. This name is used for policy identification and cannot be changed after creation.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The Cedar or Dogwood policy statement that defines the access control rules. This contains the actual policy logic written in Cedar or Dogwood, specifying effect (permit or forbid), principals, actions, resources, and conditions for agent behavior control.
   *
   * @public
   */
  definition: PolicyDefinition | undefined;

  /**
   * A human-readable description of the policy's purpose and functionality (1-4,096 characters). This helps policy administrators understand the policy's intent, business rules, and operational scope. Use this field to document why the policy exists, what business requirement it addresses, and any special considerations for maintenance. Clear descriptions are essential for policy governance, auditing, and troubleshooting.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The validation mode for the policy creation. Determines how Cedar analyzer validation results are handled during policy creation. FAIL_ON_ANY_FINDINGS (default) runs the Cedar analyzer to validate the policy against the Cedar schema and tool context, failing creation if the analyzer detects any validation issues to ensure strict conformance. IGNORE_ALL_FINDINGS runs the Cedar analyzer but allows policy creation even if validation issues are detected, useful for testing or when the policy schema is evolving. Use FAIL_ON_ANY_FINDINGS for production policies to ensure correctness, and IGNORE_ALL_FINDINGS only when you understand and accept the analyzer findings.
   *
   * @public
   */
  validationMode?: PolicyValidationMode | undefined;

  /**
   * The enforcement mode for the policy. Run this policy in `LOG_ONLY` mode to collect data on how it affects your application. Once you are satisfied with the data gathered, switch the policy to `ACTIVE`. Defaults to `ACTIVE`.
   *
   * @public
   */
  enforcementMode?: EnforcementMode | undefined;

  /**
   * The identifier of the policy engine which contains this policy. Policy engines group related policies and provide the execution context for policy evaluation.
   *
   * @public
   */
  policyEngineId: string | undefined;

  /**
   * A unique, case-sensitive identifier to ensure the idempotency of the request. The Amazon Web Services SDK automatically generates this token, so you don't need to provide it in most cases. If you retry a request with the same client token, the service returns the same response without creating a duplicate policy.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreatePolicyResponse {
  /**
   * The unique identifier for the created policy. This is a system-generated identifier consisting of the user name plus a 10-character generated suffix, used for all subsequent policy operations.
   *
   * @public
   */
  policyId: string | undefined;

  /**
   * The customer-assigned name of the created policy. This matches the name provided in the request and serves as the human-readable identifier for the policy.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The identifier of the policy engine that manages this policy. This confirms the policy engine assignment and is used for policy evaluation routing.
   *
   * @public
   */
  policyEngineId: string | undefined;

  /**
   * The timestamp when the policy was created. This is automatically set by the service and used for auditing and lifecycle management.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the policy was last updated. For newly created policies, this matches the createdAt timestamp.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the created policy. This globally unique identifier can be used for cross-service references and IAM policy statements.
   *
   * @public
   */
  policyArn: string | undefined;

  /**
   * The current status of the policy. A status of `ACTIVE` indicates the policy is ready for use.
   *
   * @public
   */
  status: PolicyStatus | undefined;

  /**
   * The enforcement mode of the created policy.
   *
   * @public
   */
  enforcementMode?: EnforcementMode | undefined;

  /**
   * The Cedar or Dogwood policy statement that was created. This is the validated policy definition that will be used for agent behavior control and access decisions.
   *
   * @public
   */
  definition: PolicyDefinition | undefined;

  /**
   * The human-readable description of the policy's purpose and functionality. This helps administrators understand and manage the policy.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Additional information about the policy status. This provides details about any failures or the current state of the policy creation process.
   *
   * @public
   */
  statusReasons: string[] | undefined;
}

/**
 * @public
 */
export interface DeletePolicyRequest {
  /**
   * The identifier of the policy engine that manages the policy to be deleted. This ensures the policy is deleted from the correct policy engine context.
   *
   * @public
   */
  policyEngineId: string | undefined;

  /**
   * The unique identifier of the policy to be deleted. This must be a valid policy ID that exists within the specified policy engine.
   *
   * @public
   */
  policyId: string | undefined;
}

/**
 * @public
 */
export interface DeletePolicyResponse {
  /**
   * The unique identifier of the policy being deleted. This confirms which policy the deletion operation targets.
   *
   * @public
   */
  policyId: string | undefined;

  /**
   * The customer-assigned name of the deleted policy. This confirms which policy was successfully removed from the system and matches the name that was originally assigned during policy creation.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The identifier of the policy engine from which the policy was deleted. This confirms the policy engine context for the deletion operation.
   *
   * @public
   */
  policyEngineId: string | undefined;

  /**
   * The timestamp when the deleted policy was originally created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the deleted policy was last modified before deletion. This tracks the final state of the policy before it was removed from the system.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the deleted policy. This globally unique identifier confirms which policy resource was successfully removed.
   *
   * @public
   */
  policyArn: string | undefined;

  /**
   * The status of the policy deletion operation. This provides information about any issues that occurred during the deletion process.
   *
   * @public
   */
  status: PolicyStatus | undefined;

  /**
   * The enforcement mode of the deleted policy.
   *
   * @public
   */
  enforcementMode?: EnforcementMode | undefined;

  /**
   * Represents the definition structure for policies within the AgentCore Policy system. This structure encapsulates different policy formats and languages that can be used to define access control rules.
   *
   * @public
   */
  definition: PolicyDefinition | undefined;

  /**
   * The human-readable description of the deleted policy.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Additional information about the deletion status. This provides details about the deletion process or any issues that may have occurred.
   *
   * @public
   */
  statusReasons: string[] | undefined;
}

/**
 * @public
 */
export interface GetPolicyRequest {
  /**
   * The identifier of the policy engine that manages the policy to be retrieved.
   *
   * @public
   */
  policyEngineId: string | undefined;

  /**
   * The unique identifier of the policy to be retrieved. This must be a valid policy ID that exists within the specified policy engine.
   *
   * @public
   */
  policyId: string | undefined;
}

/**
 * @public
 */
export interface GetPolicyResponse {
  /**
   * The unique identifier of the retrieved policy. This matches the policy ID provided in the request and serves as the system identifier for the policy.
   *
   * @public
   */
  policyId: string | undefined;

  /**
   * The customer-assigned name of the policy. This is the human-readable identifier that was specified when the policy was created.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The identifier of the policy engine that manages this policy. This confirms the policy engine context for the retrieved policy.
   *
   * @public
   */
  policyEngineId: string | undefined;

  /**
   * The timestamp when the policy was originally created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the policy was last modified. This tracks the most recent changes to the policy configuration.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the policy. This globally unique identifier can be used for cross-service references and IAM policy statements.
   *
   * @public
   */
  policyArn: string | undefined;

  /**
   * The current status of the policy.
   *
   * @public
   */
  status: PolicyStatus | undefined;

  /**
   * The current enforcement mode of the policy.
   *
   * @public
   */
  enforcementMode?: EnforcementMode | undefined;

  /**
   * The Cedar or Dogwood policy statement that defines the access control rules. This contains the actual policy logic used for agent behavior control and access decisions.
   *
   * @public
   */
  definition: PolicyDefinition | undefined;

  /**
   * The human-readable description of the policy's purpose and functionality. This helps administrators understand and manage the policy.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Additional information about the policy status. This provides details about any failures or the current state of the policy.
   *
   * @public
   */
  statusReasons: string[] | undefined;
}

/**
 * @public
 */
export interface GetPolicySummaryRequest {
  /**
   * The identifier of the policy engine that manages the policy to retrieve the summary for.
   *
   * @public
   */
  policyEngineId: string | undefined;

  /**
   * The unique identifier of the policy to retrieve the summary for. This must be a valid policy ID that exists within the specified policy engine.
   *
   * @public
   */
  policyId: string | undefined;
}

/**
 * @public
 */
export interface GetPolicySummaryResponse {
  /**
   * The unique identifier of the policy.
   *
   * @public
   */
  policyId: string | undefined;

  /**
   * The customer-assigned name of the policy.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The identifier of the policy engine that manages this policy.
   *
   * @public
   */
  policyEngineId: string | undefined;

  /**
   * The timestamp when the policy was originally created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the policy was last modified.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the policy.
   *
   * @public
   */
  policyArn: string | undefined;

  /**
   * The current status of the policy.
   *
   * @public
   */
  status: PolicyStatus | undefined;

  /**
   * The current enforcement mode of the policy.
   *
   * @public
   */
  enforcementMode?: EnforcementMode | undefined;
}

/**
 * @public
 */
export interface ListPoliciesRequest {
  /**
   * A pagination token returned from a previous [ListPolicies](https://docs.aws.amazon.com/bedrock-agentcore-control/latest/APIReference/API_ListPolicies.html) call. Use this token to retrieve the next page of results when the response is paginated.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of policies to return in a single response. If not specified, the default is 10 policies per page, with a maximum of 100 per page.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The identifier of the policy engine whose policies to retrieve.
   *
   * @public
   */
  policyEngineId: string | undefined;

  /**
   * Optional filter to list policies that apply to a specific resource scope or resource type. This helps narrow down policy results to those relevant for particular Amazon Web Services resources, agent tools, or operational contexts within the policy engine ecosystem.
   *
   * @public
   */
  targetResourceScope?: string | undefined;
}

/**
 * Represents a complete policy resource within the AgentCore Policy system. Policies are ARN-able resources that contain Cedar or Dogwood policy statements and associated metadata for controlling agent behavior and access decisions. Each policy belongs to a policy engine and defines fine-grained authorization rules that are evaluated in real-time as agents interact with tools through Gateway. Policies use Cedar or Dogwood to specify who (principals based on OAuth claims like username, role, or scope) can perform what actions (tool calls) on which resources (Gateways), with optional conditions for attribute-based access control. Multiple policies can apply to a single request, with forbid-wins semantics ensuring that security restrictions are never accidentally overridden.
 *
 * @public
 */
export interface Policy {
  /**
   * The unique identifier for the policy. This system-generated identifier consists of the user name plus a 10-character generated suffix and serves as the primary key for policy operations.
   *
   * @public
   */
  policyId: string | undefined;

  /**
   * The customer-assigned immutable name for the policy. This human-readable identifier must be unique within the account and cannot exceed 48 characters.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The identifier of the policy engine that manages this policy. This establishes the policy engine context for policy evaluation and management.
   *
   * @public
   */
  policyEngineId: string | undefined;

  /**
   * The timestamp when the policy was originally created. This is automatically set by the service and used for auditing and lifecycle management.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the policy was last modified. This tracks the most recent changes to the policy configuration or metadata.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the policy. This globally unique identifier can be used for cross-service references and IAM policy statements.
   *
   * @public
   */
  policyArn: string | undefined;

  /**
   * The current status of the policy.
   *
   * @public
   */
  status: PolicyStatus | undefined;

  /**
   * The current enforcement mode of the policy.
   *
   * @public
   */
  enforcementMode?: EnforcementMode | undefined;

  /**
   * The Cedar or Dogwood policy statement that defines the access control rules. This contains the actual policy logic used for agent behavior control and access decisions.
   *
   * @public
   */
  definition: PolicyDefinition | undefined;

  /**
   * A human-readable description of the policy's purpose and functionality. Limited to 4,096 characters, this helps administrators understand and manage the policy.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Additional information about the policy status. This provides details about any failures or the current state of the policy lifecycle.
   *
   * @public
   */
  statusReasons: string[] | undefined;
}

/**
 * @public
 */
export interface ListPoliciesResponse {
  /**
   * An array of policy objects that match the specified criteria. Each policy object contains the policy metadata, status, and key identifiers for further operations.
   *
   * @public
   */
  policies: Policy[] | undefined;

  /**
   * A pagination token that can be used in subsequent ListPolicies calls to retrieve additional results. This token is only present when there are more results available.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPolicySummariesRequest {
  /**
   * A pagination token returned from a previous [ListPolicySummaries](https://docs.aws.amazon.com/bedrock-agentcore-control/latest/APIReference/API_ListPolicySummaries.html) call. Use this token to retrieve the next page of results when the response is paginated.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of policy summaries to return in a single response.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The identifier of the policy engine whose policy summaries to retrieve.
   *
   * @public
   */
  policyEngineId: string | undefined;

  /**
   * Optional filter to list policy summaries that apply to a specific resource scope or resource type. This helps narrow down results to those relevant for particular Amazon Web Services resources, agent tools, or operational contexts within the policy engine ecosystem.
   *
   * @public
   */
  targetResourceScope?: string | undefined;
}

/**
 * Represents a metadata-only summary of a policy resource. This structure contains resource identifiers, status, and timestamps without customer-encrypted fields such as definition, description, or status reasons. Policy summaries are returned by operations that do not require access to the customer's KMS key.
 *
 * @public
 */
export interface PolicySummary {
  /**
   * The unique identifier for the policy.
   *
   * @public
   */
  policyId: string | undefined;

  /**
   * The customer-assigned name of the policy.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The identifier of the policy engine that manages this policy.
   *
   * @public
   */
  policyEngineId: string | undefined;

  /**
   * The timestamp when the policy was originally created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the policy was last modified.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the policy.
   *
   * @public
   */
  policyArn: string | undefined;

  /**
   * The current status of the policy.
   *
   * @public
   */
  status: PolicyStatus | undefined;

  /**
   * The current enforcement mode of the policy.
   *
   * @public
   */
  enforcementMode?: EnforcementMode | undefined;
}

/**
 * @public
 */
export interface ListPolicySummariesResponse {
  /**
   * An array of policy summary objects that match the specified criteria. Each summary contains resource identifiers, status, and timestamps without customer-encrypted content.
   *
   * @public
   */
  policies: PolicySummary[] | undefined;

  /**
   * A pagination token that can be used in subsequent [ListPolicySummaries](https://docs.aws.amazon.com/bedrock-agentcore-control/latest/APIReference/API_ListPolicySummaries.html) calls to retrieve additional results. This token is only present when there are more results available.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdatePolicyRequest {
  /**
   * The identifier of the policy engine that manages the policy to be updated. This ensures the policy is updated within the correct policy engine context.
   *
   * @public
   */
  policyEngineId: string | undefined;

  /**
   * The unique identifier of the policy to be updated. This must be a valid policy ID that exists within the specified policy engine.
   *
   * @public
   */
  policyId: string | undefined;

  /**
   * The new human-readable description for the policy. This optional field allows updating the policy's documentation while keeping the same policy logic.
   *
   * @public
   */
  description?: UpdatedDescription | undefined;

  /**
   * The new Cedar or Dogwood policy statement that defines the access control rules. This replaces the existing policy definition with new logic while maintaining the policy's identity.
   *
   * @public
   */
  definition?: PolicyDefinition | undefined;

  /**
   * The validation mode for the policy update. Determines how Cedar analyzer validation results are handled during policy updates. FAIL_ON_ANY_FINDINGS runs the Cedar analyzer and fails the update if validation issues are detected, ensuring the policy conforms to the Cedar schema and tool context. IGNORE_ALL_FINDINGS runs the Cedar analyzer but allows updates despite validation warnings. Use FAIL_ON_ANY_FINDINGS to ensure policy correctness during updates, especially when modifying policy logic or conditions.
   *
   * @public
   */
  validationMode?: PolicyValidationMode | undefined;

  /**
   * The enforcement mode for the policy. Run this policy in `LOG_ONLY` mode to collect data on how it affects your application. Once you are satisfied with the data gathered, switch the policy to `ACTIVE`. If you omit this field, the policy's existing enforcement mode is unchanged.
   *
   * @public
   */
  enforcementMode?: EnforcementMode | undefined;
}

/**
 * @public
 */
export interface UpdatePolicyResponse {
  /**
   * The unique identifier of the updated policy.
   *
   * @public
   */
  policyId: string | undefined;

  /**
   * The name of the updated policy.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The identifier of the policy engine managing the updated policy.
   *
   * @public
   */
  policyEngineId: string | undefined;

  /**
   * The original creation timestamp of the policy.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the policy was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The ARN of the updated policy.
   *
   * @public
   */
  policyArn: string | undefined;

  /**
   * The current status of the updated policy.
   *
   * @public
   */
  status: PolicyStatus | undefined;

  /**
   * The current enforcement mode of the updated policy.
   *
   * @public
   */
  enforcementMode?: EnforcementMode | undefined;

  /**
   * The updated Cedar or Dogwood policy statement.
   *
   * @public
   */
  definition: PolicyDefinition | undefined;

  /**
   * The updated description of the policy.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Additional information about the update status.
   *
   * @public
   */
  statusReasons: string[] | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource for which to create or update the resource policy.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The resource policy to create or update.
   *
   * @public
   */
  policy: string | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyResponse {
  /**
   * The resource policy that was created or updated.
   *
   * @public
   */
  policy: string | undefined;
}

/**
 * A custom descriptor for a registry record. Use this for resources such as APIs, Lambda functions, or servers that do not conform to a standard protocol like MCP or A2A.
 *
 * @public
 */
export interface CustomDescriptor {
  /**
   * The custom descriptor content as a valid JSON document. You can define any custom schema that describes your resource.
   *
   * @public
   */
  inlineContent?: string | undefined;
}

/**
 * The server definition for an MCP descriptor. Contains the schema version and inline content for the MCP server configuration.
 *
 * @public
 */
export interface ServerDefinition {
  /**
   * The schema version of the server definition based on the MCP protocol specification. If not specified, the version is auto-detected from the content.
   *
   * @public
   */
  schemaVersion?: string | undefined;

  /**
   * The JSON content containing the MCP server definition, conforming to the MCP protocol specification.
   *
   * @public
   */
  inlineContent?: string | undefined;
}

/**
 * The tools definition for an MCP descriptor. Contains the protocol version and inline content describing the available tools.
 *
 * @public
 */
export interface ToolsDefinition {
  /**
   * The protocol version of the tools definition based on the MCP protocol specification. If not specified, the version is auto-detected from the content.
   *
   * @public
   */
  protocolVersion?: string | undefined;

  /**
   * The JSON content containing the MCP tools definition, conforming to the MCP protocol specification.
   *
   * @public
   */
  inlineContent?: string | undefined;
}

/**
 * The Model Context Protocol (MCP) descriptor for a registry record. Contains the server definition and tools definition for an MCP-compatible server. The schema is validated against the MCP protocol specification.
 *
 * @public
 */
export interface McpDescriptor {
  /**
   * The MCP server definition, containing the server configuration and schema as defined by the MCP protocol specification.
   *
   * @public
   */
  server?: ServerDefinition | undefined;

  /**
   * The MCP tools definition, containing the tools available on the MCP server as defined by the MCP protocol specification.
   *
   * @public
   */
  tools?: ToolsDefinition | undefined;
}

/**
 * Contains descriptor-type-specific configurations for a registry record. Only the descriptor matching the record's `descriptorType` should be populated.
 *
 * @public
 */
export interface Descriptors {
  /**
   * The Model Context Protocol (MCP) descriptor configuration. Use this when the `descriptorType` is `MCP`.
   *
   * @public
   */
  mcp?: McpDescriptor | undefined;

  /**
   * The Agent-to-Agent (A2A) protocol descriptor configuration. Use this when the `descriptorType` is `A2A`.
   *
   * @public
   */
  a2a?: A2aDescriptor | undefined;

  /**
   * The custom descriptor configuration. Use this when the `descriptorType` is `CUSTOM`.
   *
   * @public
   */
  custom?: CustomDescriptor | undefined;

  /**
   * The agent skills descriptor configuration. Use this when the `descriptorType` is `AGENT_SKILLS`.
   *
   * @public
   */
  agentSkills?: AgentSkillsDescriptor | undefined;
}

/**
 * IAM credential provider configuration for authenticating with an external source using SigV4 signing during synchronization.
 *
 * @public
 */
export interface RegistryRecordIamCredentialProvider {
  /**
   * The Amazon Resource Name (ARN) of the IAM role to assume for SigV4 signing.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * The SigV4 signing service name (for example, `execute-api` or `bedrock-agentcore`).
   *
   * @public
   */
  service?: string | undefined;

  /**
   * The Amazon Web Services region for SigV4 signing (for example, `us-west-2`). If not specified, the region is extracted from the MCP server URL hostname, with fallback to the service's own region.
   *
   * @public
   */
  region?: string | undefined;
}

/**
 * OAuth credential provider configuration for authenticating with an external source during synchronization.
 *
 * @public
 */
export interface RegistryRecordOAuthCredentialProvider {
  /**
   * The Amazon Resource Name (ARN) of the OAuth credential provider resource.
   *
   * @public
   */
  providerArn: string | undefined;

  /**
   * The OAuth grant type. Currently only `CLIENT_CREDENTIALS` is supported.
   *
   * @public
   */
  grantType?: RegistryRecordOAuthGrantType | undefined;

  /**
   * The OAuth scopes to request during authentication.
   *
   * @public
   */
  scopes?: string[] | undefined;

  /**
   * Additional custom parameters for the OAuth flow.
   *
   * @public
   */
  customParameters?: Record<string, string> | undefined;
}

/**
 * Union of supported credential provider types for registry record synchronization.
 *
 * @public
 */
export type RegistryRecordCredentialProviderUnion =
  | RegistryRecordCredentialProviderUnion.IamCredentialProviderMember
  | RegistryRecordCredentialProviderUnion.OauthCredentialProviderMember
  | RegistryRecordCredentialProviderUnion.$UnknownMember;

/**
 * @public
 */
export namespace RegistryRecordCredentialProviderUnion {
  /**
   * The OAuth credential provider configuration for authenticating with the external source.
   *
   * @public
   */
  export interface OauthCredentialProviderMember {
    oauthCredentialProvider: RegistryRecordOAuthCredentialProvider;
    iamCredentialProvider?: never;
    $unknown?: never;
  }

  /**
   * The IAM credential provider configuration for authenticating with the external source using SigV4 signing.
   *
   * @public
   */
  export interface IamCredentialProviderMember {
    oauthCredentialProvider?: never;
    iamCredentialProvider: RegistryRecordIamCredentialProvider;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    oauthCredentialProvider?: never;
    iamCredentialProvider?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    oauthCredentialProvider: (value: RegistryRecordOAuthCredentialProvider) => T;
    iamCredentialProvider: (value: RegistryRecordIamCredentialProvider) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A pairing of a credential provider type with its corresponding provider details for authenticating with external sources.
 *
 * @public
 */
export interface RegistryRecordCredentialProviderConfiguration {
  /**
   * The type of credential provider.
   *
   * - `OAUTH` - OAuth-based authentication.
   * - `IAM` - Amazon Web Services IAM-based authentication using SigV4 signing.
   *
   * @public
   */
  credentialProviderType: RegistryRecordCredentialProviderType | undefined;

  /**
   * The credential provider configuration details. The structure depends on the `credentialProviderType`.
   *
   * @public
   */
  credentialProvider: RegistryRecordCredentialProviderUnion | undefined;
}

/**
 * Configuration for synchronizing from a URL-based MCP server.
 *
 * @public
 */
export interface FromUrlSynchronizationConfiguration {
  /**
   * The HTTPS URL of the MCP server to synchronize from.
   *
   * @public
   */
  url: string | undefined;

  /**
   * Optional list of credential provider configurations for authenticating with the MCP server. At most one credential provider configuration can be specified.
   *
   * @public
   */
  credentialProviderConfigurations?: RegistryRecordCredentialProviderConfiguration[] | undefined;
}

/**
 * Configuration for synchronizing registry record metadata from an external source.
 *
 * @public
 */
export interface SynchronizationConfiguration {
  /**
   * Configuration for synchronizing from a URL-based source.
   *
   * @public
   */
  fromUrl?: FromUrlSynchronizationConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateRegistryRecordRequest {
  /**
   * The identifier of the registry where the record will be created. You can specify either the Amazon Resource Name (ARN) or the ID of the registry.
   *
   * @public
   */
  registryId: string | undefined;

  /**
   * The name of the registry record.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A description of the registry record.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The descriptor type of the registry record.
   *
   * - `MCP` - Model Context Protocol descriptor for MCP-compatible servers and tools.
   * - `A2A` - Agent-to-Agent protocol descriptor.
   * - `CUSTOM` - Custom descriptor type for resources such as APIs, Lambda functions, or servers not conforming to a standard protocol.
   * - `AGENT_SKILLS` - Agent skills descriptor for defining agent skill definitions.
   *
   * @public
   */
  descriptorType: DescriptorType | undefined;

  /**
   * The descriptor-type-specific configuration containing the resource schema and metadata. The structure of this field depends on the `descriptorType` you specify.
   *
   * @public
   */
  descriptors?: Descriptors | undefined;

  /**
   * The version of the registry record. Use this to track different versions of the record's content.
   *
   * @public
   */
  recordVersion?: string | undefined;

  /**
   * The type of synchronization to use for keeping the record metadata up to date from an external source. Possible values include `FROM_URL` and `NONE`.
   *
   * @public
   */
  synchronizationType?: SynchronizationType | undefined;

  /**
   * The configuration for synchronizing registry record metadata from an external source, such as a URL-based MCP server.
   *
   * @public
   */
  synchronizationConfiguration?: SynchronizationConfiguration | undefined;

  /**
   * A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If you don't specify this field, a value is randomly generated for you. If this token matches a previous request, the service ignores the request, but doesn't return an error. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html).
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateRegistryRecordResponse {
  /**
   * The Amazon Resource Name (ARN) of the created registry record.
   *
   * @public
   */
  recordArn: string | undefined;

  /**
   * The status of the registry record. Set to `CREATING` while the asynchronous workflow is in progress.
   *
   * @public
   */
  status: RegistryRecordStatus | undefined;
}

/**
 * @public
 */
export interface DeleteRegistryRecordRequest {
  /**
   * The identifier of the registry containing the record. You can specify either the Amazon Resource Name (ARN) or the ID of the registry.
   *
   * @public
   */
  registryId: string | undefined;

  /**
   * The identifier of the registry record to delete. You can specify either the Amazon Resource Name (ARN) or the ID of the record.
   *
   * @public
   */
  recordId: string | undefined;
}

/**
 * @public
 */
export interface DeleteRegistryRecordResponse {}

/**
 * @public
 */
export interface GetRegistryRecordRequest {
  /**
   * The identifier of the registry containing the record. You can specify either the Amazon Resource Name (ARN) or the ID of the registry.
   *
   * @public
   */
  registryId: string | undefined;

  /**
   * The identifier of the registry record to retrieve. You can specify either the Amazon Resource Name (ARN) or the ID of the record.
   *
   * @public
   */
  recordId: string | undefined;
}

/**
 * @public
 */
export interface GetRegistryRecordResponse {
  /**
   * The Amazon Resource Name (ARN) of the registry that contains the record.
   *
   * @public
   */
  registryArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the registry record.
   *
   * @public
   */
  recordArn: string | undefined;

  /**
   * The unique identifier of the registry record.
   *
   * @public
   */
  recordId: string | undefined;

  /**
   * The name of the registry record.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the registry record.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The descriptor type of the registry record. Possible values are `MCP`, `A2A`, `CUSTOM`, and `AGENT_SKILLS`.
   *
   * @public
   */
  descriptorType: DescriptorType | undefined;

  /**
   * The descriptor-type-specific configuration containing the resource schema and metadata. For details, see the `Descriptors` data type.
   *
   * @public
   */
  descriptors: Descriptors | undefined;

  /**
   * The version of the registry record.
   *
   * @public
   */
  recordVersion?: string | undefined;

  /**
   * The current status of the registry record. Possible values include `CREATING`, `DRAFT`, `APPROVED`, `PENDING_APPROVAL`, `REJECTED`, `DEPRECATED`, `UPDATING`, `CREATE_FAILED`, and `UPDATE_FAILED`. A record transitions from `CREATING` to `DRAFT`, then to `PENDING_APPROVAL` (via `SubmitRegistryRecordForApproval`), and finally to `APPROVED` upon approval.
   *
   * @public
   */
  status: RegistryRecordStatus | undefined;

  /**
   * The timestamp when the registry record was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the registry record was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The reason for the current status, typically set when the status is a failure state.
   *
   * @public
   */
  statusReason?: string | undefined;

  /**
   * The type of synchronization used for this record.
   *
   * @public
   */
  synchronizationType?: SynchronizationType | undefined;

  /**
   * The configuration for synchronizing registry record metadata from an external source.
   *
   * @public
   */
  synchronizationConfiguration?: SynchronizationConfiguration | undefined;
}

/**
 * @public
 */
export interface ListRegistryRecordsRequest {
  /**
   * The identifier of the registry to list records from. You can specify either the Amazon Resource Name (ARN) or the ID of the registry.
   *
   * @public
   */
  registryId: string | undefined;

  /**
   * The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the `nextToken` field when making another request to return the next batch of results.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * If the total number of results is greater than the `maxResults` value provided in the request, enter the token returned in the `nextToken` field in the response in this field to return the next batch of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Filter registry records by name.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Filter registry records by their current status. Possible values include `CREATING`, `DRAFT`, `APPROVED`, `PENDING_APPROVAL`, `REJECTED`, `DEPRECATED`, `UPDATING`, `CREATE_FAILED`, and `UPDATE_FAILED`.
   *
   * @public
   */
  status?: RegistryRecordStatus | undefined;

  /**
   * Filter registry records by their descriptor type. Possible values are `MCP`, `A2A`, `CUSTOM`, and `AGENT_SKILLS`.
   *
   * @public
   */
  descriptorType?: DescriptorType | undefined;
}

/**
 * Contains summary information about a registry record.
 *
 * @public
 */
export interface RegistryRecordSummary {
  /**
   * The Amazon Resource Name (ARN) of the registry that contains the record.
   *
   * @public
   */
  registryArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the registry record.
   *
   * @public
   */
  recordArn: string | undefined;

  /**
   * The unique identifier of the registry record.
   *
   * @public
   */
  recordId: string | undefined;

  /**
   * The name of the registry record.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the registry record.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The descriptor type of the registry record. Possible values are `MCP`, `A2A`, `CUSTOM`, and `AGENT_SKILLS`.
   *
   * @public
   */
  descriptorType: DescriptorType | undefined;

  /**
   * The version of the registry record.
   *
   * @public
   */
  recordVersion: string | undefined;

  /**
   * The current status of the registry record. Possible values include `CREATING`, `DRAFT`, `APPROVED`, `PENDING_APPROVAL`, `REJECTED`, `DEPRECATED`, `UPDATING`, `CREATE_FAILED`, and `UPDATE_FAILED`.
   *
   * @public
   */
  status: RegistryRecordStatus | undefined;

  /**
   * The timestamp when the registry record was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the registry record was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListRegistryRecordsResponse {
  /**
   * The list of registry record summaries. For details about the fields in each summary, see the `RegistryRecordSummary` data type.
   *
   * @public
   */
  registryRecords: RegistryRecordSummary[] | undefined;

  /**
   * If the total number of results is greater than the `maxResults` value provided in the request, use this token when making another request in the `nextToken` field to return the next batch of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface SubmitRegistryRecordForApprovalRequest {
  /**
   * The identifier of the registry containing the record. You can specify either the Amazon Resource Name (ARN) or the ID of the registry.
   *
   * @public
   */
  registryId: string | undefined;

  /**
   * The identifier of the registry record to submit for approval. You can specify either the Amazon Resource Name (ARN) or the ID of the record.
   *
   * @public
   */
  recordId: string | undefined;
}

/**
 * @public
 */
export interface SubmitRegistryRecordForApprovalResponse {
  /**
   * The Amazon Resource Name (ARN) of the registry that contains the record.
   *
   * @public
   */
  registryArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the registry record.
   *
   * @public
   */
  recordArn: string | undefined;

  /**
   * The unique identifier of the registry record.
   *
   * @public
   */
  recordId: string | undefined;

  /**
   * The resulting status of the registry record after submission.
   *
   * @public
   */
  status: RegistryRecordStatus | undefined;

  /**
   * The timestamp when the record was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * Wrapper for updating an A2A descriptor with PATCH semantics. When present, the A2A descriptor is replaced with the provided value. When absent, the A2A descriptor is left unchanged. To unset, include the wrapper with the value set to null.
 *
 * @public
 */
export interface UpdatedA2aDescriptor {
  /**
   * The updated A2A descriptor value.
   *
   * @public
   */
  optionalValue?: A2aDescriptor | undefined;
}

/**
 * Wrapper for updating a skill definition with PATCH semantics.
 *
 * @public
 */
export interface UpdatedSkillDefinition {
  /**
   * The updated skill definition value.
   *
   * @public
   */
  optionalValue?: SkillDefinition | undefined;
}

/**
 * Wrapper for updating a skill markdown definition with PATCH semantics.
 *
 * @public
 */
export interface UpdatedSkillMdDefinition {
  /**
   * The updated skill markdown definition value.
   *
   * @public
   */
  optionalValue?: SkillMdDefinition | undefined;
}

/**
 * Individual agent skills descriptor fields that can be updated independently.
 *
 * @public
 */
export interface UpdatedAgentSkillsDescriptorFields {
  /**
   * The updated skill markdown definition.
   *
   * @public
   */
  skillMd?: UpdatedSkillMdDefinition | undefined;

  /**
   * The updated skill definition.
   *
   * @public
   */
  skillDefinition?: UpdatedSkillDefinition | undefined;
}

/**
 * Wrapper for updating an agent skills descriptor with PATCH semantics. When present with a value, individual fields can be updated independently. When present with a null value, the entire agent skills descriptor is unset. When absent, the agent skills descriptor is left unchanged.
 *
 * @public
 */
export interface UpdatedAgentSkillsDescriptor {
  /**
   * The updated agent skills descriptor fields.
   *
   * @public
   */
  optionalValue?: UpdatedAgentSkillsDescriptorFields | undefined;
}

/**
 * Wrapper for updating a custom descriptor with PATCH semantics. When present, the custom descriptor is replaced with the provided value. When absent, the custom descriptor is left unchanged. To unset, include the wrapper with the value set to null.
 *
 * @public
 */
export interface UpdatedCustomDescriptor {
  /**
   * The updated custom descriptor value.
   *
   * @public
   */
  optionalValue?: CustomDescriptor | undefined;
}

/**
 * Wrapper for updating a server definition with PATCH semantics. When present, the server definition is replaced with the provided value. When absent, the server definition is left unchanged. To unset, include the wrapper with the value set to null.
 *
 * @public
 */
export interface UpdatedServerDefinition {
  /**
   * The updated server definition value.
   *
   * @public
   */
  optionalValue?: ServerDefinition | undefined;
}

/**
 * Wrapper for updating a tools definition with PATCH semantics. When present, the tools definition is replaced with the provided value. When absent, the tools definition is left unchanged. To unset, include the wrapper with the value set to null.
 *
 * @public
 */
export interface UpdatedToolsDefinition {
  /**
   * The updated tools definition value.
   *
   * @public
   */
  optionalValue?: ToolsDefinition | undefined;
}

/**
 * Individual MCP descriptor fields that can be updated independently.
 *
 * @public
 */
export interface UpdatedMcpDescriptorFields {
  /**
   * The updated server definition for the MCP descriptor.
   *
   * @public
   */
  server?: UpdatedServerDefinition | undefined;

  /**
   * The updated tools definition for the MCP descriptor.
   *
   * @public
   */
  tools?: UpdatedToolsDefinition | undefined;
}

/**
 * Wrapper for updating an MCP descriptor with PATCH semantics. When present with a value, individual MCP fields can be updated independently. When present with a null value, the entire MCP descriptor is unset. When absent, the MCP descriptor is left unchanged.
 *
 * @public
 */
export interface UpdatedMcpDescriptor {
  /**
   * The updated MCP descriptor fields.
   *
   * @public
   */
  optionalValue?: UpdatedMcpDescriptorFields | undefined;
}

/**
 * Contains per-descriptor-type wrappers for updating descriptors. Each descriptor type can be updated independently.
 *
 * @public
 */
export interface UpdatedDescriptorsUnion {
  /**
   * The updated MCP descriptor.
   *
   * @public
   */
  mcp?: UpdatedMcpDescriptor | undefined;

  /**
   * The updated A2A descriptor.
   *
   * @public
   */
  a2a?: UpdatedA2aDescriptor | undefined;

  /**
   * The updated custom descriptor.
   *
   * @public
   */
  custom?: UpdatedCustomDescriptor | undefined;

  /**
   * The updated agent skills descriptor.
   *
   * @public
   */
  agentSkills?: UpdatedAgentSkillsDescriptor | undefined;
}

/**
 * Wrapper for updating an optional descriptors field with PATCH semantics. When present with a value, individual descriptors can be updated. When present with a null value, all descriptors are unset. When absent, descriptors are left unchanged.
 *
 * @public
 */
export interface UpdatedDescriptors {
  /**
   * The updated descriptors value. Contains per-descriptor-type wrappers that are each independently updatable.
   *
   * @public
   */
  optionalValue?: UpdatedDescriptorsUnion | undefined;
}

/**
 * Wrapper for updating the synchronization configuration with PATCH semantics. Must be matched with `UpdatedSynchronizationType`.
 *
 * @public
 */
export interface UpdatedSynchronizationConfiguration {
  /**
   * The updated synchronization configuration value.
   *
   * @public
   */
  optionalValue?: SynchronizationConfiguration | undefined;
}

/**
 * Wrapper for updating the synchronization type with PATCH semantics. Must be matched with `UpdatedSynchronizationConfiguration`.
 *
 * @public
 */
export interface UpdatedSynchronizationType {
  /**
   * The updated synchronization type value.
   *
   * @public
   */
  optionalValue?: SynchronizationType | undefined;
}

/**
 * @public
 */
export interface UpdateRegistryRecordRequest {
  /**
   * The identifier of the registry containing the record. You can specify either the Amazon Resource Name (ARN) or the ID of the registry.
   *
   * @public
   */
  registryId: string | undefined;

  /**
   * The identifier of the registry record to update. You can specify either the Amazon Resource Name (ARN) or the ID of the record.
   *
   * @public
   */
  recordId: string | undefined;

  /**
   * The updated name for the registry record.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The updated description for the registry record. To clear the description, include the `UpdatedDescription` wrapper with `optionalValue` not specified.
   *
   * @public
   */
  description?: UpdatedDescription | undefined;

  /**
   * The updated descriptor type for the registry record. Changing the descriptor type may require updating the `descriptors` field to match the new type's schema requirements.
   *
   * @public
   */
  descriptorType?: DescriptorType | undefined;

  /**
   * The updated descriptor-type-specific configuration containing the resource schema and metadata. Uses PATCH semantics where individual descriptor fields can be updated independently.
   *
   * @public
   */
  descriptors?: UpdatedDescriptors | undefined;

  /**
   * The version of the registry record for optimistic locking. If provided, it must match the current version of the record. The service automatically increments the version after a successful update.
   *
   * @public
   */
  recordVersion?: string | undefined;

  /**
   * The updated synchronization type for the registry record.
   *
   * @public
   */
  synchronizationType?: UpdatedSynchronizationType | undefined;

  /**
   * The updated synchronization configuration for the registry record.
   *
   * @public
   */
  synchronizationConfiguration?: UpdatedSynchronizationConfiguration | undefined;

  /**
   * Whether to trigger synchronization using the stored or provided configuration. When set to `true`, the service will synchronize the record metadata from the configured external source.
   *
   * @public
   */
  triggerSynchronization?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateRegistryRecordResponse {
  /**
   * The Amazon Resource Name (ARN) of the registry that contains the updated record.
   *
   * @public
   */
  registryArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the updated registry record.
   *
   * @public
   */
  recordArn: string | undefined;

  /**
   * The unique identifier of the updated registry record.
   *
   * @public
   */
  recordId: string | undefined;

  /**
   * The name of the updated registry record.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the updated registry record.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The descriptor type of the updated registry record. Possible values are `MCP`, `A2A`, `CUSTOM`, and `AGENT_SKILLS`.
   *
   * @public
   */
  descriptorType: DescriptorType | undefined;

  /**
   * The descriptor-type-specific configuration of the updated registry record. For details, see the `Descriptors` data type.
   *
   * @public
   */
  descriptors: Descriptors | undefined;

  /**
   * The version of the updated registry record.
   *
   * @public
   */
  recordVersion?: string | undefined;

  /**
   * The current status of the updated registry record. Possible values include `CREATING`, `DRAFT`, `APPROVED`, `PENDING_APPROVAL`, `REJECTED`, `DEPRECATED`, `UPDATING`, `CREATE_FAILED`, and `UPDATE_FAILED`.
   *
   * @public
   */
  status: RegistryRecordStatus | undefined;

  /**
   * The timestamp when the registry record was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the registry record was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The reason for the current status of the updated registry record.
   *
   * @public
   */
  statusReason?: string | undefined;

  /**
   * The synchronization type of the updated registry record.
   *
   * @public
   */
  synchronizationType?: SynchronizationType | undefined;

  /**
   * The synchronization configuration of the updated registry record.
   *
   * @public
   */
  synchronizationConfiguration?: SynchronizationConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateRegistryRecordStatusRequest {
  /**
   * The identifier of the registry containing the record. You can specify either the Amazon Resource Name (ARN) or the ID of the registry.
   *
   * @public
   */
  registryId: string | undefined;

  /**
   * The identifier of the registry record to update the status for. You can specify either the Amazon Resource Name (ARN) or the ID of the record.
   *
   * @public
   */
  recordId: string | undefined;

  /**
   * The target status for the registry record.
   *
   * @public
   */
  status: RegistryRecordStatus | undefined;

  /**
   * The reason for the status change, such as why the record was approved or rejected.
   *
   * @public
   */
  statusReason: string | undefined;
}

/**
 * @public
 */
export interface UpdateRegistryRecordStatusResponse {
  /**
   * The Amazon Resource Name (ARN) of the registry that contains the record.
   *
   * @public
   */
  registryArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the registry record.
   *
   * @public
   */
  recordArn: string | undefined;

  /**
   * The unique identifier of the registry record.
   *
   * @public
   */
  recordId: string | undefined;

  /**
   * The resulting status of the registry record.
   *
   * @public
   */
  status: RegistryRecordStatus | undefined;

  /**
   * The reason for the status change.
   *
   * @public
   */
  statusReason: string | undefined;

  /**
   * The timestamp when the record was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * Configuration for the registry record approval workflow. Controls whether records added to the registry require explicit approval before becoming active.
 *
 * @public
 */
export interface ApprovalConfiguration {
  /**
   * Whether registry records are auto-approved. When set to `true`, records are automatically approved upon creation. When set to `false` (the default), records require explicit approval for security purposes.
   *
   * @public
   */
  autoApproval?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateRegistryRequest {
  /**
   * The name of the registry. The name must be unique within your account and can contain alphanumeric characters and underscores.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A description of the registry.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The type of authorizer to use for the registry. This controls the authorization method for the Search and Invoke APIs used by consumers, and does not affect the standard CRUDL APIs for registry and registry record management used by administrators.
   *
   * - `CUSTOM_JWT` - Authorize with a bearer token.
   * - `AWS_IAM` - Authorize with your Amazon Web Services IAM credentials.
   *
   * @public
   */
  authorizerType?: RegistryAuthorizerType | undefined;

  /**
   * The authorizer configuration for the registry. Required if `authorizerType` is `CUSTOM_JWT`. For details, see the `AuthorizerConfiguration` data type.
   *
   * @public
   */
  authorizerConfiguration?: AuthorizerConfiguration | undefined;

  /**
   * A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If you don't specify this field, a value is randomly generated for you. If this token matches a previous request, the service ignores the request, but doesn't return an error. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html).
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The approval configuration for registry records. Controls whether records require explicit approval before becoming active. See the `ApprovalConfiguration` data type for supported configuration options.
   *
   * @public
   */
  approvalConfiguration?: ApprovalConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateRegistryResponse {
  /**
   * The Amazon Resource Name (ARN) of the created registry.
   *
   * @public
   */
  registryArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteRegistryRequest {
  /**
   * The identifier of the registry to delete. You can specify either the Amazon Resource Name (ARN) or the ID of the registry.
   *
   * @public
   */
  registryId: string | undefined;
}

/**
 * @public
 */
export interface DeleteRegistryResponse {
  /**
   * The current status of the registry, set to `DELETING` when deletion is initiated. For a list of all possible registry statuses, see the `RegistryStatus` data type.
   *
   * @public
   */
  status: RegistryStatus | undefined;
}

/**
 * @public
 */
export interface GetRegistryRequest {
  /**
   * The identifier of the registry to retrieve. You can specify either the Amazon Resource Name (ARN) or the ID of the registry.
   *
   * @public
   */
  registryId: string | undefined;
}

/**
 * @public
 */
export interface GetRegistryResponse {
  /**
   * The name of the registry.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the registry.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The unique identifier of the registry.
   *
   * @public
   */
  registryId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the registry.
   *
   * @public
   */
  registryArn: string | undefined;

  /**
   * The type of authorizer used by the registry. This controls the authorization method for the Search and Invoke APIs used by consumers.
   *
   * - `CUSTOM_JWT` - Authorize with a bearer token.
   * - `AWS_IAM` - Authorize with your Amazon Web Services IAM credentials.
   *
   * @public
   */
  authorizerType?: RegistryAuthorizerType | undefined;

  /**
   * The authorizer configuration for the registry. For details, see the `AuthorizerConfiguration` data type.
   *
   * @public
   */
  authorizerConfiguration?: AuthorizerConfiguration | undefined;

  /**
   * The approval configuration for registry records. For details, see the `ApprovalConfiguration` data type.
   *
   * @public
   */
  approvalConfiguration?: ApprovalConfiguration | undefined;

  /**
   * The current status of the registry. Possible values include `CREATING`, `READY`, `UPDATING`, `CREATE_FAILED`, `UPDATE_FAILED`, `DELETING`, and `DELETE_FAILED`.
   *
   * @public
   */
  status: RegistryStatus | undefined;

  /**
   * The reason for the current status, typically set when the status is a failure state.
   *
   * @public
   */
  statusReason?: string | undefined;

  /**
   * The timestamp when the registry was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the registry was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListRegistriesRequest {
  /**
   * The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the `nextToken` field when making another request to return the next batch of results.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * If the total number of results is greater than the `maxResults` value provided in the request, enter the token returned in the `nextToken` field in the response in this field to return the next batch of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Filter registries by their current status. Possible values include `CREATING`, `READY`, `UPDATING`, `CREATE_FAILED`, `UPDATE_FAILED`, `DELETING`, and `DELETE_FAILED`.
   *
   * @public
   */
  status?: RegistryStatus | undefined;

  /**
   * Filter registries by their authorizer type. Possible values are `CUSTOM_JWT` and `AWS_IAM`. For more information about authorizer types, see the `RegistryAuthorizerType` enum.
   *
   * @public
   */
  authorizerType?: RegistryAuthorizerType | undefined;
}

/**
 * Contains summary information about a registry.
 *
 * @public
 */
export interface RegistrySummary {
  /**
   * The name of the registry.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the registry.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The unique identifier of the registry.
   *
   * @public
   */
  registryId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the registry.
   *
   * @public
   */
  registryArn: string | undefined;

  /**
   * The type of authorizer used by the registry. This controls the authorization method for the Search and Invoke APIs used by consumers.
   *
   * - `CUSTOM_JWT` - Authorize with a bearer token.
   * - `AWS_IAM` - Authorize with your Amazon Web Services IAM credentials.
   *
   * @public
   */
  authorizerType?: RegistryAuthorizerType | undefined;

  /**
   * The current status of the registry. Possible values include `CREATING`, `READY`, `UPDATING`, `CREATE_FAILED`, `UPDATE_FAILED`, `DELETING`, and `DELETE_FAILED`.
   *
   * @public
   */
  status: RegistryStatus | undefined;

  /**
   * The reason for the current status, typically set when the status is a failure state.
   *
   * @public
   */
  statusReason?: string | undefined;

  /**
   * The timestamp when the registry was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the registry was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListRegistriesResponse {
  /**
   * The list of registry summaries. For details about the fields in each summary, see the `RegistrySummary` data type.
   *
   * @public
   */
  registries: RegistrySummary[] | undefined;

  /**
   * If the total number of results is greater than the `maxResults` value provided in the request, use this token when making another request in the `nextToken` field to return the next batch of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Wrapper for updating an optional approval configuration field with PATCH semantics. When present in an update request, the approval configuration is replaced with the provided value. When absent, the approval configuration is left unchanged.
 *
 * @public
 */
export interface UpdatedApprovalConfiguration {
  /**
   * The updated approval configuration value. Set to `null` to unset the approval configuration.
   *
   * @public
   */
  optionalValue?: ApprovalConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateRegistryRequest {
  /**
   * The identifier of the registry to update. You can specify either the Amazon Resource Name (ARN) or the ID of the registry.
   *
   * @public
   */
  registryId: string | undefined;

  /**
   * The updated name of the registry.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The updated description of the registry. To clear the description, include the `UpdatedDescription` wrapper with `optionalValue` not specified.
   *
   * @public
   */
  description?: UpdatedDescription | undefined;

  /**
   * The updated authorizer configuration for the registry. Changing the authorizer configuration can break existing consumers of the registry who are using the authorization type prior to the update.
   *
   * @public
   */
  authorizerConfiguration?: UpdatedAuthorizerConfiguration | undefined;

  /**
   * The updated approval configuration for registry records. The updated configuration only affects new records that move to `PENDING_APPROVAL` status after the change. Existing records already in `PENDING_APPROVAL` status are not affected.
   *
   * @public
   */
  approvalConfiguration?: UpdatedApprovalConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateRegistryResponse {
  /**
   * The name of the updated registry.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the updated registry.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The unique identifier of the updated registry.
   *
   * @public
   */
  registryId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the updated registry.
   *
   * @public
   */
  registryArn: string | undefined;

  /**
   * The type of authorizer used by the updated registry. This controls the authorization method for the Search and Invoke APIs used by consumers.
   *
   * - `CUSTOM_JWT` - Authorize with a bearer token.
   * - `AWS_IAM` - Authorize with your Amazon Web Services IAM credentials.
   *
   * @public
   */
  authorizerType?: RegistryAuthorizerType | undefined;

  /**
   * The authorizer configuration for the updated registry. For details, see the `AuthorizerConfiguration` data type.
   *
   * @public
   */
  authorizerConfiguration?: AuthorizerConfiguration | undefined;

  /**
   * The approval configuration for the updated registry. For details, see the `ApprovalConfiguration` data type.
   *
   * @public
   */
  approvalConfiguration?: ApprovalConfiguration | undefined;

  /**
   * The current status of the updated registry. Possible values include `CREATING`, `READY`, `UPDATING`, `CREATE_FAILED`, `UPDATE_FAILED`, `DELETING`, and `DELETE_FAILED`.
   *
   * @public
   */
  status: RegistryStatus | undefined;

  /**
   * The reason for the current status of the updated registry.
   *
   * @public
   */
  statusReason?: string | undefined;

  /**
   * The timestamp when the registry was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the registry was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ResetTokenVaultKeyMaterialRequest {
  /**
   * The unique identifier of the token vault to reset. To reset your account's default token vault, specify `default`.
   *
   * @public
   */
  tokenVaultId: string | undefined;
}

/**
 * @public
 */
export interface ResetTokenVaultKeyMaterialResponse {
  /**
   * The ID of the token vault.
   *
   * @public
   */
  tokenVaultId: string | undefined;

  /**
   * The KMS configuration for the token vault after the reset. The token vault uses an Amazon Web Services managed key.
   *
   * @public
   */
  kmsConfiguration: KmsConfiguration | undefined;

  /**
   * The timestamp when the token vault was last modified.
   *
   * @public
   */
  lastModifiedDate: Date | undefined;
}

/**
 * @public
 */
export interface SetTokenVaultCMKRequest {
  /**
   * The unique identifier of the token vault to update.
   *
   * @public
   */
  tokenVaultId?: string | undefined;

  /**
   * The KMS configuration for the token vault, including the key type and KMS key ARN.
   *
   * @public
   */
  kmsConfiguration: KmsConfiguration | undefined;
}

/**
 * @public
 */
export interface SetTokenVaultCMKResponse {
  /**
   * The ID of the token vault.
   *
   * @public
   */
  tokenVaultId: string | undefined;

  /**
   * The KMS configuration for the token vault.
   *
   * @public
   */
  kmsConfiguration: KmsConfiguration | undefined;

  /**
   * The timestamp when the token vault was last modified.
   *
   * @public
   */
  lastModifiedDate: Date | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource that you want to tag.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The tags to add to the resource. A tag is a key-value pair.
   *
   * @public
   */
  tags: Record<string, string> | undefined;
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
   * The Amazon Resource Name (ARN) of the resource that you want to untag.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The tag keys of the tags to remove from the resource.
   *
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface CreateWorkloadIdentityRequest {
  /**
   * The name of the workload identity. The name must be unique within your account.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The list of allowed OAuth2 return URLs for resources associated with this workload identity.
   *
   * @public
   */
  allowedResourceOauth2ReturnUrls?: string[] | undefined;

  /**
   * A map of tag keys and values to assign to the workload identity. Tags enable you to categorize your resources in different ways, for example, by purpose, owner, or environment.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateWorkloadIdentityResponse {
  /**
   * The name of the workload identity.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the workload identity.
   *
   * @public
   */
  workloadIdentityArn: string | undefined;

  /**
   * The list of allowed OAuth2 return URLs for resources associated with this workload identity.
   *
   * @public
   */
  allowedResourceOauth2ReturnUrls?: string[] | undefined;
}

/**
 * @public
 */
export interface DeleteWorkloadIdentityRequest {
  /**
   * The name of the workload identity to delete.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface DeleteWorkloadIdentityResponse {}

/**
 * @public
 */
export interface GetWorkloadIdentityRequest {
  /**
   * The name of the workload identity to retrieve.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface GetWorkloadIdentityResponse {
  /**
   * The name of the workload identity.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the workload identity.
   *
   * @public
   */
  workloadIdentityArn: string | undefined;

  /**
   * The list of allowed OAuth2 return URLs for resources associated with this workload identity.
   *
   * @public
   */
  allowedResourceOauth2ReturnUrls?: string[] | undefined;

  /**
   * The timestamp when the workload identity was created.
   *
   * @public
   */
  createdTime: Date | undefined;

  /**
   * The timestamp when the workload identity was last updated.
   *
   * @public
   */
  lastUpdatedTime: Date | undefined;
}

/**
 * @public
 */
export interface ListWorkloadIdentitiesRequest {
  /**
   * Pagination token.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Maximum number of results to return.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Contains information about a workload identity.
 *
 * @public
 */
export interface WorkloadIdentityType {
  /**
   * The name of the workload identity.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the workload identity.
   *
   * @public
   */
  workloadIdentityArn: string | undefined;
}

/**
 * @public
 */
export interface ListWorkloadIdentitiesResponse {
  /**
   * The list of workload identities.
   *
   * @public
   */
  workloadIdentities: WorkloadIdentityType[] | undefined;

  /**
   * Pagination token for the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateWorkloadIdentityRequest {
  /**
   * The name of the workload identity to update.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The new list of allowed OAuth2 return URLs for resources associated with this workload identity. This list replaces the existing list.
   *
   * @public
   */
  allowedResourceOauth2ReturnUrls?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateWorkloadIdentityResponse {
  /**
   * The name of the workload identity.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the workload identity.
   *
   * @public
   */
  workloadIdentityArn: string | undefined;

  /**
   * The list of allowed OAuth2 return URLs for resources associated with this workload identity.
   *
   * @public
   */
  allowedResourceOauth2ReturnUrls?: string[] | undefined;

  /**
   * The timestamp when the workload identity was created.
   *
   * @public
   */
  createdTime: Date | undefined;

  /**
   * The timestamp when the workload identity was last updated.
   *
   * @public
   */
  lastUpdatedTime: Date | undefined;
}

/**
 * A schema definition for a gateway target. This structure defines the structure of the API that the target exposes.
 *
 * @public
 */
export interface SchemaDefinition {
  /**
   * The type of the schema definition. This field specifies the data type of the schema.
   *
   * @public
   */
  type: SchemaType | undefined;

  /**
   * The properties of the schema definition. These properties define the fields in the schema.
   *
   * @public
   */
  properties?: Record<string, SchemaDefinition> | undefined;

  /**
   * The required fields in the schema definition. These fields must be provided when using the schema.
   *
   * @public
   */
  required?: string[] | undefined;

  /**
   * The items in the schema definition. This field is used for array types to define the structure of the array elements.
   *
   * @public
   */
  items?: SchemaDefinition | undefined;

  /**
   * The description of the schema definition. This description provides information about the purpose and usage of the schema.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * A tool definition for a gateway target. This structure defines a tool that the target exposes through the Model Context Protocol.
 *
 * @public
 */
export interface ToolDefinition {
  /**
   * The name of the tool. This name identifies the tool in the Model Context Protocol.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the tool. This description provides information about the purpose and usage of the tool.
   *
   * @public
   */
  description: string | undefined;

  /**
   * The input schema for the tool. This schema defines the structure of the input that the tool accepts.
   *
   * @public
   */
  inputSchema: SchemaDefinition | undefined;

  /**
   * The output schema for the tool. This schema defines the structure of the output that the tool produces.
   *
   * @public
   */
  outputSchema?: SchemaDefinition | undefined;
}

/**
 * A tool schema for a gateway target. This structure defines the schema for a tool that the target exposes through the Model Context Protocol.
 *
 * @public
 */
export type ToolSchema =
  | ToolSchema.InlinePayloadMember
  | ToolSchema.S3Member
  | ToolSchema.$UnknownMember;

/**
 * @public
 */
export namespace ToolSchema {
  /**
   * The Amazon S3 location of the tool schema. This location contains the schema definition file.
   *
   * @public
   */
  export interface S3Member {
    s3: S3Configuration;
    inlinePayload?: never;
    $unknown?: never;
  }

  /**
   * The inline payload of the tool schema. This payload contains the schema definition directly in the request.
   *
   * @public
   */
  export interface InlinePayloadMember {
    s3?: never;
    inlinePayload: ToolDefinition[];
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    s3?: never;
    inlinePayload?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    s3: (value: S3Configuration) => T;
    inlinePayload: (value: ToolDefinition[]) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The Lambda configuration for a Model Context Protocol target. This structure defines how the gateway uses a Lambda function to communicate with the target.
 *
 * @public
 */
export interface McpLambdaTargetConfiguration {
  /**
   * The Amazon Resource Name (ARN) of the Lambda function. This function is invoked by the gateway to communicate with the target.
   *
   * @public
   */
  lambdaArn: string | undefined;

  /**
   * The tool schema for the Lambda function. This schema defines the structure of the tools that the Lambda function provides.
   *
   * @public
   */
  toolSchema: ToolSchema | undefined;
}

/**
 * The Model Context Protocol (MCP) configuration for a target. This structure defines how the gateway uses MCP to communicate with the target.
 *
 * @public
 */
export type McpTargetConfiguration =
  | McpTargetConfiguration.ApiGatewayMember
  | McpTargetConfiguration.ConnectorMember
  | McpTargetConfiguration.LambdaMember
  | McpTargetConfiguration.McpServerMember
  | McpTargetConfiguration.OpenApiSchemaMember
  | McpTargetConfiguration.SmithyModelMember
  | McpTargetConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace McpTargetConfiguration {
  /**
   * The OpenAPI schema for the Model Context Protocol target. This schema defines the API structure of the target.
   *
   * @public
   */
  export interface OpenApiSchemaMember {
    openApiSchema: ApiSchemaConfiguration;
    smithyModel?: never;
    lambda?: never;
    mcpServer?: never;
    apiGateway?: never;
    connector?: never;
    $unknown?: never;
  }

  /**
   * The Smithy model for the Model Context Protocol target. This model defines the API structure of the target using the Smithy specification.
   *
   * @public
   */
  export interface SmithyModelMember {
    openApiSchema?: never;
    smithyModel: ApiSchemaConfiguration;
    lambda?: never;
    mcpServer?: never;
    apiGateway?: never;
    connector?: never;
    $unknown?: never;
  }

  /**
   * The Lambda configuration for the Model Context Protocol target. This configuration defines how the gateway uses a Lambda function to communicate with the target.
   *
   * @public
   */
  export interface LambdaMember {
    openApiSchema?: never;
    smithyModel?: never;
    lambda: McpLambdaTargetConfiguration;
    mcpServer?: never;
    apiGateway?: never;
    connector?: never;
    $unknown?: never;
  }

  /**
   * The MCP server specified as the gateway target.
   *
   * @public
   */
  export interface McpServerMember {
    openApiSchema?: never;
    smithyModel?: never;
    lambda?: never;
    mcpServer: McpServerTargetConfiguration;
    apiGateway?: never;
    connector?: never;
    $unknown?: never;
  }

  /**
   * The configuration for an Amazon API Gateway target.
   *
   * @public
   */
  export interface ApiGatewayMember {
    openApiSchema?: never;
    smithyModel?: never;
    lambda?: never;
    mcpServer?: never;
    apiGateway: ApiGatewayTargetConfiguration;
    connector?: never;
    $unknown?: never;
  }

  /**
   * The connector integration configuration for the Model Context Protocol target. This configuration defines how the gateway uses a pre-built connector to communicate with the target.
   *
   * @public
   */
  export interface ConnectorMember {
    openApiSchema?: never;
    smithyModel?: never;
    lambda?: never;
    mcpServer?: never;
    apiGateway?: never;
    connector: ConnectorTargetConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    openApiSchema?: never;
    smithyModel?: never;
    lambda?: never;
    mcpServer?: never;
    apiGateway?: never;
    connector?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    openApiSchema: (value: ApiSchemaConfiguration) => T;
    smithyModel: (value: ApiSchemaConfiguration) => T;
    lambda: (value: McpLambdaTargetConfiguration) => T;
    mcpServer: (value: McpServerTargetConfiguration) => T;
    apiGateway: (value: ApiGatewayTargetConfiguration) => T;
    connector: (value: ConnectorTargetConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The configuration for a gateway target. This structure defines how the gateway connects to and interacts with the target endpoint.
 *
 * @public
 */
export type TargetConfiguration =
  | TargetConfiguration.HttpMember
  | TargetConfiguration.InferenceMember
  | TargetConfiguration.McpMember
  | TargetConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace TargetConfiguration {
  /**
   * The Model Context Protocol (MCP) configuration for the target. This configuration defines how the gateway uses MCP to communicate with the target.
   *
   * @public
   */
  export interface McpMember {
    mcp: McpTargetConfiguration;
    http?: never;
    inference?: never;
    $unknown?: never;
  }

  /**
   * The HTTP target configuration. Use this to route gateway requests to an HTTP-based endpoint such as an AgentCore Runtime.
   *
   * @public
   */
  export interface HttpMember {
    mcp?: never;
    http: HttpTargetConfiguration;
    inference?: never;
    $unknown?: never;
  }

  /**
   * The inference configuration for the target. This configuration routes requests to a large language model (LLM) provider.
   *
   * @public
   */
  export interface InferenceMember {
    mcp?: never;
    http?: never;
    inference: InferenceTargetConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    mcp?: never;
    http?: never;
    inference?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    mcp: (value: McpTargetConfiguration) => T;
    http: (value: HttpTargetConfiguration) => T;
    inference: (value: InferenceTargetConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateGatewayTargetRequest {
  /**
   * The identifier of the gateway to create a target for.
   *
   * @public
   */
  gatewayIdentifier: string | undefined;

  /**
   * The name of the gateway target. The name must be unique within the gateway.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The description of the gateway target.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If you don't specify this field, a value is randomly generated for you. If this token matches a previous request, the service ignores the request, but doesn't return an error. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html).
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The configuration settings for the target, including endpoint information and schema definitions.
   *
   * @public
   */
  targetConfiguration: TargetConfiguration | undefined;

  /**
   * The credential provider configurations for the target. These configurations specify how the gateway authenticates with the target endpoint.
   *
   * @public
   */
  credentialProviderConfigurations?: CredentialProviderConfiguration[] | undefined;

  /**
   * Optional configuration for HTTP header and query parameter propagation to and from the gateway target.
   *
   * @public
   */
  metadataConfiguration?: MetadataConfiguration | undefined;

  /**
   * The private endpoint configuration for the gateway target. Use this to connect the gateway to private resources in your VPC.
   *
   * @public
   */
  privateEndpoint?: PrivateEndpoint | undefined;

  /**
   * The private certificate authority (CA) configurations for the gateway target. Use this to have the gateway trust a private CA when it establishes TLS connections to the target endpoint. Provide each certificate by reference to an Amazon S3 object or an Amazon Web Services Secrets Manager secret. You can specify only one certificate authority configuration in this list.
   *
   * @public
   */
  certificateConfigurations?: CertificateConfiguration[] | undefined;
}

/**
 * @public
 */
export interface CreateGatewayTargetResponse {
  /**
   * The Amazon Resource Name (ARN) of the gateway.
   *
   * @public
   */
  gatewayArn: string | undefined;

  /**
   * The unique identifier of the created target.
   *
   * @public
   */
  targetId: string | undefined;

  /**
   * The timestamp when the target was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the target was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The current status of the target.
   *
   * @public
   */
  status: TargetStatus | undefined;

  /**
   * The reasons for the current status of the target.
   *
   * @public
   */
  statusReasons?: string[] | undefined;

  /**
   * The name of the target.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the target.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The configuration settings for the target.
   *
   * @public
   */
  targetConfiguration: TargetConfiguration | undefined;

  /**
   * The credential provider configurations for the target.
   *
   * @public
   */
  credentialProviderConfigurations: CredentialProviderConfiguration[] | undefined;

  /**
   * The last synchronization of the target.
   *
   * @public
   */
  lastSynchronizedAt?: Date | undefined;

  /**
   * The metadata configuration that was applied to the created gateway target.
   *
   * @public
   */
  metadataConfiguration?: MetadataConfiguration | undefined;

  /**
   * The private endpoint configuration for the gateway target.
   *
   * @public
   */
  privateEndpoint?: PrivateEndpoint | undefined;

  /**
   * The managed resources created by the gateway for private endpoint connectivity.
   *
   * @public
   */
  privateEndpointManagedResources?: ManagedResourceDetails[] | undefined;

  /**
   * OAuth2 authorization data for the created gateway target. This data is returned when a target is configured with a credential provider with authorization code grant type and requires user federation.
   *
   * @public
   */
  authorizationData?: AuthorizationData | undefined;

  /**
   * The protocol type of the created gateway target.
   *
   * @public
   */
  protocolType?: TargetProtocolType | undefined;

  /**
   * The private certificate authority (CA) configurations for the gateway target.
   *
   * @public
   */
  certificateConfigurations?: CertificateConfiguration[] | undefined;
}

/**
 * The gateway target.
 *
 * @public
 */
export interface GatewayTarget {
  /**
   * The Amazon Resource Name (ARN) of the gateway target.
   *
   * @public
   */
  gatewayArn: string | undefined;

  /**
   * The target ID.
   *
   * @public
   */
  targetId: string | undefined;

  /**
   * The date and time at which the target was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The date and time at which the target was updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The status of the gateway target.
   *
   * @public
   */
  status: TargetStatus | undefined;

  /**
   * The status reasons for the target status.
   *
   * @public
   */
  statusReasons?: string[] | undefined;

  /**
   * The name of the gateway target.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description for the gateway target.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The configuration for a gateway target. This structure defines how the gateway connects to and interacts with the target endpoint.
   *
   * @public
   */
  targetConfiguration: TargetConfiguration | undefined;

  /**
   * The provider configurations.
   *
   * @public
   */
  credentialProviderConfigurations: CredentialProviderConfiguration[] | undefined;

  /**
   * The last synchronization time.
   *
   * @public
   */
  lastSynchronizedAt?: Date | undefined;

  /**
   * The metadata configuration for HTTP header and query parameter propagation to and from this gateway target.
   *
   * @public
   */
  metadataConfiguration?: MetadataConfiguration | undefined;

  /**
   * The private endpoint configuration for a gateway target. Defines how the gateway connects to private resources in your VPC.
   *
   * @public
   */
  privateEndpoint?: PrivateEndpoint | undefined;

  /**
   * A list of managed resources created by the gateway for private endpoint connectivity. These resources are created in your account when you use a managed VPC Lattice resource configuration.
   *
   * @public
   */
  privateEndpointManagedResources?: ManagedResourceDetails[] | undefined;

  /**
   * OAuth2 authorization data for the gateway target. This data is returned when a target is configured with a credential provider with authorization code grant type and requires user federation.
   *
   * @public
   */
  authorizationData?: AuthorizationData | undefined;

  /**
   * The protocol type of the gateway target.
   *
   * @public
   */
  protocolType?: TargetProtocolType | undefined;

  /**
   * The private certificate authority (CA) configurations for the gateway target.
   *
   * @public
   */
  certificateConfigurations?: CertificateConfiguration[] | undefined;
}

/**
 * @public
 */
export interface GetGatewayTargetResponse {
  /**
   * The Amazon Resource Name (ARN) of the gateway.
   *
   * @public
   */
  gatewayArn: string | undefined;

  /**
   * The unique identifier of the gateway target.
   *
   * @public
   */
  targetId: string | undefined;

  /**
   * The timestamp when the gateway target was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the gateway target was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The current status of the gateway target.
   *
   * @public
   */
  status: TargetStatus | undefined;

  /**
   * The reasons for the current status of the gateway target.
   *
   * @public
   */
  statusReasons?: string[] | undefined;

  /**
   * The name of the gateway target.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the gateway target.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The configuration for a gateway target. This structure defines how the gateway connects to and interacts with the target endpoint.
   *
   * @public
   */
  targetConfiguration: TargetConfiguration | undefined;

  /**
   * The credential provider configurations for the gateway target.
   *
   * @public
   */
  credentialProviderConfigurations: CredentialProviderConfiguration[] | undefined;

  /**
   * The last synchronization of the target.
   *
   * @public
   */
  lastSynchronizedAt?: Date | undefined;

  /**
   * The metadata configuration for HTTP header and query parameter propagation for the retrieved gateway target.
   *
   * @public
   */
  metadataConfiguration?: MetadataConfiguration | undefined;

  /**
   * The private endpoint configuration for the gateway target.
   *
   * @public
   */
  privateEndpoint?: PrivateEndpoint | undefined;

  /**
   * The managed resources created by the gateway for private endpoint connectivity.
   *
   * @public
   */
  privateEndpointManagedResources?: ManagedResourceDetails[] | undefined;

  /**
   * OAuth2 authorization data for the gateway target. This data is returned when a target is configured with a credential provider with authorization code grant type and requires user federation.
   *
   * @public
   */
  authorizationData?: AuthorizationData | undefined;

  /**
   * The protocol type of the gateway target.
   *
   * @public
   */
  protocolType?: TargetProtocolType | undefined;

  /**
   * The private certificate authority (CA) configurations for the gateway target.
   *
   * @public
   */
  certificateConfigurations?: CertificateConfiguration[] | undefined;
}

/**
 * @public
 */
export interface UpdateGatewayTargetRequest {
  /**
   * The unique identifier of the gateway associated with the target.
   *
   * @public
   */
  gatewayIdentifier: string | undefined;

  /**
   * The unique identifier of the gateway target to update.
   *
   * @public
   */
  targetId: string | undefined;

  /**
   * The updated name for the gateway target.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The updated description for the gateway target.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The configuration for a gateway target. This structure defines how the gateway connects to and interacts with the target endpoint.
   *
   * @public
   */
  targetConfiguration: TargetConfiguration | undefined;

  /**
   * The updated credential provider configurations for the gateway target.
   *
   * @public
   */
  credentialProviderConfigurations?: CredentialProviderConfiguration[] | undefined;

  /**
   * Configuration for HTTP header and query parameter propagation to the gateway target.
   *
   * @public
   */
  metadataConfiguration?: MetadataConfiguration | undefined;

  /**
   * The private endpoint configuration for the gateway target. Use this to connect the gateway to private resources in your VPC.
   *
   * @public
   */
  privateEndpoint?: PrivateEndpoint | undefined;

  /**
   * The private certificate authority (CA) configurations for the gateway target. Use this to have the gateway trust a private CA when it establishes TLS connections to the target endpoint. Provide each certificate by reference to an Amazon S3 object or an Amazon Web Services Secrets Manager secret. You can specify only one certificate authority configuration in this list. To remove a previously configured certificate authority, omit this field on update.
   *
   * @public
   */
  certificateConfigurations?: CertificateConfiguration[] | undefined;
}

/**
 * @public
 */
export interface UpdateGatewayTargetResponse {
  /**
   * The Amazon Resource Name (ARN) of the gateway.
   *
   * @public
   */
  gatewayArn: string | undefined;

  /**
   * The unique identifier of the updated gateway target.
   *
   * @public
   */
  targetId: string | undefined;

  /**
   * The timestamp when the gateway target was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the gateway target was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The current status of the updated gateway target.
   *
   * @public
   */
  status: TargetStatus | undefined;

  /**
   * The reasons for the current status of the updated gateway target.
   *
   * @public
   */
  statusReasons?: string[] | undefined;

  /**
   * The updated name of the gateway target.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The updated description of the gateway target.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The configuration for a gateway target. This structure defines how the gateway connects to and interacts with the target endpoint.
   *
   * @public
   */
  targetConfiguration: TargetConfiguration | undefined;

  /**
   * The updated credential provider configurations for the gateway target.
   *
   * @public
   */
  credentialProviderConfigurations: CredentialProviderConfiguration[] | undefined;

  /**
   * The date and time at which the targets were last synchronized.
   *
   * @public
   */
  lastSynchronizedAt?: Date | undefined;

  /**
   * The metadata configuration that was applied to the gateway target.
   *
   * @public
   */
  metadataConfiguration?: MetadataConfiguration | undefined;

  /**
   * The private endpoint configuration for the gateway target.
   *
   * @public
   */
  privateEndpoint?: PrivateEndpoint | undefined;

  /**
   * The managed resources created by the gateway for private endpoint connectivity.
   *
   * @public
   */
  privateEndpointManagedResources?: ManagedResourceDetails[] | undefined;

  /**
   * OAuth2 authorization data for the updated gateway target. This data is returned when a target is configured with a credential provider with authorization code grant type and requires user federation.
   *
   * @public
   */
  authorizationData?: AuthorizationData | undefined;

  /**
   * The protocol type of the updated gateway target.
   *
   * @public
   */
  protocolType?: TargetProtocolType | undefined;

  /**
   * The private certificate authority (CA) configurations for the gateway target.
   *
   * @public
   */
  certificateConfigurations?: CertificateConfiguration[] | undefined;
}

/**
 * @public
 */
export interface SynchronizeGatewayTargetsResponse {
  /**
   * The gateway targets for synchronization.
   *
   * @public
   */
  targets?: GatewayTarget[] | undefined;
}
