// smithy-typescript generated code
import type {
  AppAuthorizationStatus,
  AuthType,
  Format,
  IngestionDestinationStatus,
  IngestionState,
  IngestionType,
  Persona,
  ResultStatus,
  Schema,
} from "./enums";

/**
 * Contains API key credential information.
 *
 * @public
 */
export interface ApiKeyCredential {
  /**
   * An API key for an application.
   *
   * @public
   */
  apiKey: string | undefined;
}

/**
 * Contains information about an application tenant.
 *
 * @public
 */
export interface Tenant {
  /**
   * The ID of the application tenant.
   *
   * @public
   */
  tenantIdentifier: string | undefined;

  /**
   * The display name of the tenant.
   *
   * @public
   */
  tenantDisplayName: string | undefined;
}

/**
 * Contains information about an app authorization.
 *
 * @public
 */
export interface AppAuthorization {
  /**
   * The Amazon Resource Name (ARN) of the app authorization.
   *
   * @public
   */
  appAuthorizationArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the app bundle for the app authorization.
   *
   * @public
   */
  appBundleArn: string | undefined;

  /**
   * The name of the application.
   *
   * @public
   */
  app: string | undefined;

  /**
   * Contains information about an application tenant, such as the application display name and identifier.
   *
   * @public
   */
  tenant: Tenant | undefined;

  /**
   * The authorization type.
   *
   * @public
   */
  authType: AuthType | undefined;

  /**
   * The state of the app authorization.
   *
   * The following states are possible:
   *
   * - `PendingConnect`: The initial state of the app authorization. The app authorization is created but not yet connected.
   * - `Connected`: The app authorization is connected to the application, and is ready to be used.
   * - `ConnectionValidationFailed`: The app authorization received a validation exception when trying to connect to the application. If the app authorization is in this state, you should verify the configured credentials and try to connect the app authorization again.
   * - `TokenAutoRotationFailed`: AppFabric failed to refresh the access token. If the app authorization is in this state, you should try to reconnect the app authorization.
   *
   * @public
   */
  status: AppAuthorizationStatus | undefined;

  /**
   * The timestamp of when the app authorization was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp of when the app authorization was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The user persona of the app authorization.
   *
   * This field should always be `admin`.
   *
   * @public
   */
  persona?: Persona | undefined;

  /**
   * The application URL for the OAuth flow.
   *
   * @public
   */
  authUrl?: string | undefined;
}

/**
 * Contains a summary of an app authorization.
 *
 * @public
 */
export interface AppAuthorizationSummary {
  /**
   * The Amazon Resource Name (ARN) of the app authorization.
   *
   * @public
   */
  appAuthorizationArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the app bundle for the app authorization.
   *
   * @public
   */
  appBundleArn: string | undefined;

  /**
   * The name of the application.
   *
   * @public
   */
  app: string | undefined;

  /**
   * Contains information about an application tenant, such as the application display name and identifier.
   *
   * @public
   */
  tenant: Tenant | undefined;

  /**
   * The state of the app authorization.
   *
   * The following states are possible:
   *
   * - `PendingConnect`: The initial state of the app authorization. The app authorization is created but not yet connected.
   * - `Connected`: The app authorization is connected to the application, and is ready to be used.
   * - `ConnectionValidationFailed`: The app authorization received a validation exception when trying to connect to the application. If the app authorization is in this state, you should verify the configured credentials and try to connect the app authorization again.
   * - `TokenAutoRotationFailed`: AppFabric failed to refresh the access token. If the app authorization is in this state, you should try to reconnect the app authorization.
   *
   * @public
   */
  status: AppAuthorizationStatus | undefined;

  /**
   * Timestamp for when the app authorization was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * Contains information about an app bundle.
 *
 * @public
 */
export interface AppBundle {
  /**
   * The Amazon Resource Name (ARN) of the app bundle.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Key Management Service (KMS) key used to encrypt the application data.
   *
   * @public
   */
  customerManagedKeyArn?: string | undefined;
}

/**
 * Contains a summary of an app bundle.
 *
 * @public
 */
export interface AppBundleSummary {
  /**
   * The Amazon Resource Name (ARN) of the app bundle.
   *
   * @public
   */
  arn: string | undefined;
}

/**
 * Contains information about an Amazon Kinesis Data Firehose delivery stream.
 *
 * @public
 */
export interface FirehoseStream {
  /**
   * The name of the Amazon Kinesis Data Firehose delivery stream.
   *
   * @public
   */
  streamName: string | undefined;
}

/**
 * Contains information about an Amazon S3 bucket.
 *
 * @public
 */
export interface S3Bucket {
  /**
   * The name of the Amazon S3 bucket.
   *
   * @public
   */
  bucketName: string | undefined;

  /**
   * The object key to use.
   *
   * @public
   */
  prefix?: string | undefined;
}

/**
 * Contains information about an audit log destination.
 *
 * @public
 */
export type Destination =
  | Destination.FirehoseStreamMember
  | Destination.S3BucketMember
  | Destination.$UnknownMember;

/**
 * @public
 */
export namespace Destination {
  /**
   * Contains information about an Amazon S3 bucket.
   *
   * @public
   */
  export interface S3BucketMember {
    s3Bucket: S3Bucket;
    firehoseStream?: never;
    $unknown?: never;
  }

  /**
   * Contains information about an Amazon Kinesis Data Firehose delivery stream.
   *
   * @public
   */
  export interface FirehoseStreamMember {
    s3Bucket?: never;
    firehoseStream: FirehoseStream;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    s3Bucket?: never;
    firehoseStream?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    s3Bucket: (value: S3Bucket) => T;
    firehoseStream: (value: FirehoseStream) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Contains information about an audit log destination configuration.
 *
 * @public
 */
export interface AuditLogDestinationConfiguration {
  /**
   * Contains information about an audit log destination.
   *
   * @public
   */
  destination: Destination | undefined;
}

/**
 * Contains information about an audit log processing configuration.
 *
 * @public
 */
export interface AuditLogProcessingConfiguration {
  /**
   * The event schema in which the audit logs need to be formatted.
   *
   * @public
   */
  schema: Schema | undefined;

  /**
   * The format in which the audit logs need to be formatted.
   *
   * @public
   */
  format: Format | undefined;
}

/**
 * Contains authorization request information, which is required for Amazon Web Services AppFabric to get the OAuth2 access token for an application.
 *
 * @public
 */
export interface AuthRequest {
  /**
   * The redirect URL that is specified in the AuthURL and the application client.
   *
   * @public
   */
  redirectUri: string | undefined;

  /**
   * The authorization code returned by the application after permission is granted in the application OAuth page (after clicking on the AuthURL).
   *
   * @public
   */
  code: string | undefined;
}

/**
 * @public
 */
export interface BatchGetUserAccessTasksRequest {
  /**
   * The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the app bundle to use for the request.
   *
   * @public
   */
  appBundleIdentifier: string | undefined;

  /**
   * The tasks IDs to use for the request.
   *
   * @public
   */
  taskIdList: string[] | undefined;
}

/**
 * Contains information about an error returned from a user access task.
 *
 * @public
 */
export interface TaskError {
  /**
   * The code of the error.
   *
   * @public
   */
  errorCode?: string | undefined;

  /**
   * The message of the error.
   *
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * Contains information about a user's access to an application.
 *
 * @public
 */
export interface UserAccessResultItem {
  /**
   * The name of the application.
   *
   * @public
   */
  app?: string | undefined;

  /**
   * The ID of the application tenant.
   *
   * @public
   */
  tenantId?: string | undefined;

  /**
   * The display name of the tenant.
   *
   * @public
   */
  tenantDisplayName?: string | undefined;

  /**
   * The unique ID of the task.
   *
   * @public
   */
  taskId?: string | undefined;

  /**
   * The status of the user access result item.
   *
   * The following states are possible:
   *
   * - `IN_PROGRESS`: The user access task is in progress.
   * - `COMPLETED`: The user access task completed successfully.
   * - `FAILED`: The user access task failed.
   * - `EXPIRED`: The user access task expired.
   *
   * @public
   */
  resultStatus?: ResultStatus | undefined;

  /**
   * The email address of the target user.
   *
   * @public
   */
  email?: string | undefined;

  /**
   * The unique ID of user.
   *
   * @public
   */
  userId?: string | undefined;

  /**
   * The full name of the user.
   *
   * @public
   */
  userFullName?: string | undefined;

  /**
   * The first name of the user.
   *
   * @public
   */
  userFirstName?: string | undefined;

  /**
   * The last name of the user.
   *
   * @public
   */
  userLastName?: string | undefined;

  /**
   * The status of the user returned by the application.
   *
   * @public
   */
  userStatus?: string | undefined;

  /**
   * Contains information about an error returned from a user access task.
   *
   * @public
   */
  taskError?: TaskError | undefined;
}

/**
 * @public
 */
export interface BatchGetUserAccessTasksResponse {
  /**
   * Contains a list of user access results.
   *
   * @public
   */
  userAccessResultsList?: UserAccessResultItem[] | undefined;
}

/**
 * The input failed to meet the constraints specified by the Amazon Web Services service in a specified field.
 *
 * @public
 */
export interface ValidationExceptionField {
  /**
   * The field name where the invalid entry was detected.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A message about the validation exception.
   *
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 */
export interface ConnectAppAuthorizationRequest {
  /**
   * The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the app bundle that contains the app authorization to use for the request.
   *
   * @public
   */
  appBundleIdentifier: string | undefined;

  /**
   * The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the app authorization to use for the request.
   *
   * @public
   */
  appAuthorizationIdentifier: string | undefined;

  /**
   * Contains OAuth2 authorization information.
   *
   * This is required if the app authorization for the request is configured with an OAuth2 (`oauth2`) authorization type.
   *
   * @public
   */
  authRequest?: AuthRequest | undefined;
}

/**
 * @public
 */
export interface ConnectAppAuthorizationResponse {
  /**
   * Contains a summary of the app authorization.
   *
   * @public
   */
  appAuthorizationSummary: AppAuthorizationSummary | undefined;
}

/**
 * Contains OAuth2 client credential information.
 *
 * @public
 */
export interface Oauth2Credential {
  /**
   * The client ID of the client application.
   *
   * @public
   */
  clientId: string | undefined;

  /**
   * The client secret of the client application.
   *
   * @public
   */
  clientSecret: string | undefined;
}

/**
 * Contains credential information for an application.
 *
 * @public
 */
export type Credential =
  | Credential.ApiKeyCredentialMember
  | Credential.Oauth2CredentialMember
  | Credential.$UnknownMember;

/**
 * @public
 */
export namespace Credential {
  /**
   * Contains OAuth2 client credential information.
   *
   * @public
   */
  export interface Oauth2CredentialMember {
    oauth2Credential: Oauth2Credential;
    apiKeyCredential?: never;
    $unknown?: never;
  }

  /**
   * Contains API key credential information.
   *
   * @public
   */
  export interface ApiKeyCredentialMember {
    oauth2Credential?: never;
    apiKeyCredential: ApiKeyCredential;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    oauth2Credential?: never;
    apiKeyCredential?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    oauth2Credential: (value: Oauth2Credential) => T;
    apiKeyCredential: (value: ApiKeyCredential) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The key or keys of the key-value pairs for the tag or tags assigned to a resource.
 *
 * @public
 */
export interface Tag {
  /**
   * Tag key.
   *
   * @public
   */
  key: string | undefined;

  /**
   * Tag value.
   *
   * @public
   */
  value: string | undefined;
}

/**
 * @public
 */
export interface CreateAppAuthorizationRequest {
  /**
   * The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the app bundle to use for the request.
   *
   * @public
   */
  appBundleIdentifier: string | undefined;

  /**
   * The name of the application.
   *
   * Valid values are:
   *
   * - `SLACK`
   * - `ASANA`
   * - `JIRA`
   * - `M365`
   * - `M365AUDITLOGS`
   * - `ZOOM`
   * - `ZENDESK`
   * - `OKTA`
   * - `GOOGLE`
   * - `DROPBOX`
   * - `SMARTSHEET`
   * - `CISCO`
   *
   * @public
   */
  app: string | undefined;

  /**
   * Contains credentials for the application, such as an API key or OAuth2 client ID and secret.
   *
   * Specify credentials that match the authorization type for your request. For example, if the authorization type for your request is OAuth2 (`oauth2`), then you should provide only the OAuth2 credentials.
   *
   * @public
   */
  credential: Credential | undefined;

  /**
   * Contains information about an application tenant, such as the application display name and identifier.
   *
   * @public
   */
  tenant: Tenant | undefined;

  /**
   * The authorization type for the app authorization.
   *
   * @public
   */
  authType: AuthType | undefined;

  /**
   * Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a [UUID type of value](https://wikipedia.org/wiki/Universally_unique_identifier).
   *
   * If you don't provide this value, then Amazon Web Services generates a random one for you.
   *
   * If you retry the operation with the same `ClientToken`, but with different parameters, the retry fails with an `IdempotentParameterMismatch` error.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * A map of the key-value pairs of the tag or tags to assign to the resource.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateAppAuthorizationResponse {
  /**
   * Contains information about an app authorization.
   *
   * @public
   */
  appAuthorization: AppAuthorization | undefined;
}

/**
 * @public
 */
export interface CreateAppBundleRequest {
  /**
   * Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a [UUID type of value](https://wikipedia.org/wiki/Universally_unique_identifier).
   *
   * If you don't provide this value, then Amazon Web Services generates a random one for you.
   *
   * If you retry the operation with the same `ClientToken`, but with different parameters, the retry fails with an `IdempotentParameterMismatch` error.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Key Management Service (KMS) key to use to encrypt the application data. If this is not specified, an Amazon Web Services owned key is used for encryption.
   *
   * @public
   */
  customerManagedKeyIdentifier?: string | undefined;

  /**
   * A map of the key-value pairs of the tag or tags to assign to the resource.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateAppBundleResponse {
  /**
   * Contains information about an app bundle.
   *
   * @public
   */
  appBundle: AppBundle | undefined;
}

/**
 * @public
 */
export interface CreateIngestionRequest {
  /**
   * The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the app bundle to use for the request.
   *
   * @public
   */
  appBundleIdentifier: string | undefined;

  /**
   * The name of the application.
   *
   * Valid values are:
   *
   * - `SLACK`
   * - `ASANA`
   * - `JIRA`
   * - `M365`
   * - `M365AUDITLOGS`
   * - `ZOOM`
   * - `ZENDESK`
   * - `OKTA`
   * - `GOOGLE`
   * - `DROPBOX`
   * - `SMARTSHEET`
   * - `CISCO`
   *
   * @public
   */
  app: string | undefined;

  /**
   * The ID of the application tenant.
   *
   * @public
   */
  tenantId: string | undefined;

  /**
   * The ingestion type.
   *
   * @public
   */
  ingestionType: IngestionType | undefined;

  /**
   * Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a [UUID type of value](https://wikipedia.org/wiki/Universally_unique_identifier).
   *
   * If you don't provide this value, then Amazon Web Services generates a random one for you.
   *
   * If you retry the operation with the same `ClientToken`, but with different parameters, the retry fails with an `IdempotentParameterMismatch` error.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * A map of the key-value pairs of the tag or tags to assign to the resource.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * Contains information about an ingestion.
 *
 * @public
 */
export interface Ingestion {
  /**
   * The Amazon Resource Name (ARN) of the ingestion.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the app bundle for the ingestion.
   *
   * @public
   */
  appBundleArn: string | undefined;

  /**
   * The name of the application.
   *
   * @public
   */
  app: string | undefined;

  /**
   * The ID of the application tenant.
   *
   * @public
   */
  tenantId: string | undefined;

  /**
   * The timestamp of when the ingestion was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp of when the ingestion was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The status of the ingestion.
   *
   * @public
   */
  state: IngestionState | undefined;

  /**
   * The type of the ingestion.
   *
   * @public
   */
  ingestionType: IngestionType | undefined;
}

/**
 * @public
 */
export interface CreateIngestionResponse {
  /**
   * Contains information about an ingestion.
   *
   * @public
   */
  ingestion: Ingestion | undefined;
}

/**
 * Contains information about the destination of ingested data.
 *
 * @public
 */
export type DestinationConfiguration =
  | DestinationConfiguration.AuditLogMember
  | DestinationConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace DestinationConfiguration {
  /**
   * Contains information about an audit log destination configuration.
   *
   * @public
   */
  export interface AuditLogMember {
    auditLog: AuditLogDestinationConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    auditLog?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    auditLog: (value: AuditLogDestinationConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Contains information about how ingested data is processed.
 *
 * @public
 */
export type ProcessingConfiguration =
  | ProcessingConfiguration.AuditLogMember
  | ProcessingConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace ProcessingConfiguration {
  /**
   * Contains information about an audit log processing configuration.
   *
   * @public
   */
  export interface AuditLogMember {
    auditLog: AuditLogProcessingConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    auditLog?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    auditLog: (value: AuditLogProcessingConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateIngestionDestinationRequest {
  /**
   * The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the app bundle to use for the request.
   *
   * @public
   */
  appBundleIdentifier: string | undefined;

  /**
   * The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the ingestion to use for the request.
   *
   * @public
   */
  ingestionIdentifier: string | undefined;

  /**
   * Contains information about how ingested data is processed.
   *
   * @public
   */
  processingConfiguration: ProcessingConfiguration | undefined;

  /**
   * Contains information about the destination of ingested data.
   *
   * @public
   */
  destinationConfiguration: DestinationConfiguration | undefined;

  /**
   * Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a [UUID type of value](https://wikipedia.org/wiki/Universally_unique_identifier).
   *
   * If you don't provide this value, then Amazon Web Services generates a random one for you.
   *
   * If you retry the operation with the same `ClientToken`, but with different parameters, the retry fails with an `IdempotentParameterMismatch` error.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * A map of the key-value pairs of the tag or tags to assign to the resource.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * Contains information about an ingestion destination.
 *
 * @public
 */
export interface IngestionDestination {
  /**
   * The Amazon Resource Name (ARN) of the ingestion destination.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the ingestion.
   *
   * @public
   */
  ingestionArn: string | undefined;

  /**
   * Contains information about how ingested data is processed.
   *
   * @public
   */
  processingConfiguration: ProcessingConfiguration | undefined;

  /**
   * Contains information about the destination of ingested data.
   *
   * @public
   */
  destinationConfiguration: DestinationConfiguration | undefined;

  /**
   * The state of the ingestion destination.
   *
   * The following states are possible:
   *
   * - `Active`: The ingestion destination is active and is ready to be used.
   * - `Failed`: The ingestion destination has failed. If the ingestion destination is in this state, you should verify the ingestion destination configuration and try again.
   *
   * @public
   */
  status?: IngestionDestinationStatus | undefined;

  /**
   * The reason for the current status of the ingestion destination.
   *
   * Only present when the `status` of ingestion destination is `Failed`.
   *
   * @public
   */
  statusReason?: string | undefined;

  /**
   * The timestamp of when the ingestion destination was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The timestamp of when the ingestion destination was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface CreateIngestionDestinationResponse {
  /**
   * Contains information about an ingestion destination.
   *
   * @public
   */
  ingestionDestination: IngestionDestination | undefined;
}

/**
 * @public
 */
export interface DeleteAppAuthorizationRequest {
  /**
   * The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the app bundle to use for the request.
   *
   * @public
   */
  appBundleIdentifier: string | undefined;

  /**
   * The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the app authorization to use for the request.
   *
   * @public
   */
  appAuthorizationIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteAppAuthorizationResponse {}

/**
 * @public
 */
export interface DeleteAppBundleRequest {
  /**
   * The ID or Amazon Resource Name (ARN) of the app bundle that needs to be deleted.
   *
   * @public
   */
  appBundleIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteAppBundleResponse {}

/**
 * @public
 */
export interface DeleteIngestionRequest {
  /**
   * The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the app bundle to use for the request.
   *
   * @public
   */
  appBundleIdentifier: string | undefined;

  /**
   * The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the ingestion to use for the request.
   *
   * @public
   */
  ingestionIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteIngestionResponse {}

/**
 * @public
 */
export interface DeleteIngestionDestinationRequest {
  /**
   * The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the app bundle to use for the request.
   *
   * @public
   */
  appBundleIdentifier: string | undefined;

  /**
   * The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the ingestion to use for the request.
   *
   * @public
   */
  ingestionIdentifier: string | undefined;

  /**
   * The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the ingestion destination to use for the request.
   *
   * @public
   */
  ingestionDestinationIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteIngestionDestinationResponse {}

/**
 * @public
 */
export interface GetAppAuthorizationRequest {
  /**
   * The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the app bundle to use for the request.
   *
   * @public
   */
  appBundleIdentifier: string | undefined;

  /**
   * The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the app authorization to use for the request.
   *
   * @public
   */
  appAuthorizationIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetAppAuthorizationResponse {
  /**
   * Contains information about an app authorization.
   *
   * @public
   */
  appAuthorization: AppAuthorization | undefined;
}

/**
 * @public
 */
export interface GetAppBundleRequest {
  /**
   * The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the app bundle to use for the request.
   *
   * @public
   */
  appBundleIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetAppBundleResponse {
  /**
   * Contains information about an app bundle.
   *
   * @public
   */
  appBundle: AppBundle | undefined;
}

/**
 * @public
 */
export interface GetIngestionRequest {
  /**
   * The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the app bundle to use for the request.
   *
   * @public
   */
  appBundleIdentifier: string | undefined;

  /**
   * The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the ingestion to use for the request.
   *
   * @public
   */
  ingestionIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetIngestionResponse {
  /**
   * Contains information about an ingestion.
   *
   * @public
   */
  ingestion: Ingestion | undefined;
}

/**
 * @public
 */
export interface GetIngestionDestinationRequest {
  /**
   * The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the app bundle to use for the request.
   *
   * @public
   */
  appBundleIdentifier: string | undefined;

  /**
   * The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the ingestion to use for the request.
   *
   * @public
   */
  ingestionIdentifier: string | undefined;

  /**
   * The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the ingestion destination to use for the request.
   *
   * @public
   */
  ingestionDestinationIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetIngestionDestinationResponse {
  /**
   * Contains information about an ingestion destination.
   *
   * @public
   */
  ingestionDestination: IngestionDestination | undefined;
}

/**
 * @public
 */
export interface ListAppAuthorizationsRequest {
  /**
   * The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the app bundle to use for the request.
   *
   * @public
   */
  appBundleIdentifier: string | undefined;

  /**
   * The maximum number of results that are returned per call. You can use `nextToken` to obtain further pages of results.
   *
   * This is only an upper limit. The actual number of results returned per call might be fewer than the specified maximum.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * If `nextToken` is returned, there are more results available. The value of `nextToken` is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an *HTTP 400 InvalidToken error*.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAppAuthorizationsResponse {
  /**
   * Contains a list of app authorization summaries.
   *
   * @public
   */
  appAuthorizationSummaryList: AppAuthorizationSummary[] | undefined;

  /**
   * If `nextToken` is returned, there are more results available. The value of `nextToken` is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an *HTTP 400 InvalidToken error*.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAppBundlesRequest {
  /**
   * The maximum number of results that are returned per call. You can use `nextToken` to obtain further pages of results.
   *
   * This is only an upper limit. The actual number of results returned per call might be fewer than the specified maximum.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * If `nextToken` is returned, there are more results available. The value of `nextToken` is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an *HTTP 400 InvalidToken error*.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAppBundlesResponse {
  /**
   * Contains a list of app bundle summaries.
   *
   * @public
   */
  appBundleSummaryList: AppBundleSummary[] | undefined;

  /**
   * If `nextToken` is returned, there are more results available. The value of `nextToken` is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an *HTTP 400 InvalidToken error*.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListIngestionDestinationsRequest {
  /**
   * The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the app bundle to use for the request.
   *
   * @public
   */
  appBundleIdentifier: string | undefined;

  /**
   * The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the ingestion to use for the request.
   *
   * @public
   */
  ingestionIdentifier: string | undefined;

  /**
   * The maximum number of results that are returned per call. You can use `nextToken` to obtain further pages of results.
   *
   * This is only an upper limit. The actual number of results returned per call might be fewer than the specified maximum.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * If `nextToken` is returned, there are more results available. The value of `nextToken` is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an *HTTP 400 InvalidToken error*.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Contains a summary of an ingestion destination.
 *
 * @public
 */
export interface IngestionDestinationSummary {
  /**
   * The Amazon Resource Name (ARN) of the ingestion destination.
   *
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface ListIngestionDestinationsResponse {
  /**
   * Contains a list of ingestion destination summaries.
   *
   * @public
   */
  ingestionDestinations: IngestionDestinationSummary[] | undefined;

  /**
   * If `nextToken` is returned, there are more results available. The value of `nextToken` is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an *HTTP 400 InvalidToken error*.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListIngestionsRequest {
  /**
   * The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the app bundle to use for the request.
   *
   * @public
   */
  appBundleIdentifier: string | undefined;

  /**
   * The maximum number of results that are returned per call. You can use `nextToken` to obtain further pages of results.
   *
   * This is only an upper limit. The actual number of results returned per call might be fewer than the specified maximum.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * If `nextToken` is returned, there are more results available. The value of `nextToken` is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an *HTTP 400 InvalidToken error*.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Contains a summary of an ingestion.
 *
 * @public
 */
export interface IngestionSummary {
  /**
   * The Amazon Resource Name (ARN) of the ingestion.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The name of the application.
   *
   * @public
   */
  app: string | undefined;

  /**
   * The ID of the application tenant.
   *
   * @public
   */
  tenantId: string | undefined;

  /**
   * The status of the ingestion.
   *
   * @public
   */
  state: IngestionState | undefined;
}

/**
 * @public
 */
export interface ListIngestionsResponse {
  /**
   * Contains a list of ingestion summaries.
   *
   * @public
   */
  ingestions: IngestionSummary[] | undefined;

  /**
   * If `nextToken` is returned, there are more results available. The value of `nextToken` is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an *HTTP 400 InvalidToken error*.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource for which you want to retrieve tags.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * A map of the key-value pairs for the tag or tags assigned to the specified resource.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface StartIngestionRequest {
  /**
   * The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the ingestion to use for the request.
   *
   * @public
   */
  ingestionIdentifier: string | undefined;

  /**
   * The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the app bundle to use for the request.
   *
   * @public
   */
  appBundleIdentifier: string | undefined;
}

/**
 * @public
 */
export interface StartIngestionResponse {}

/**
 * @public
 */
export interface StartUserAccessTasksRequest {
  /**
   * The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the app bundle to use for the request.
   *
   * @public
   */
  appBundleIdentifier: string | undefined;

  /**
   * The email address of the target user.
   *
   * @public
   */
  email: string | undefined;
}

/**
 * Contains information about a user access task.
 *
 * @public
 */
export interface UserAccessTaskItem {
  /**
   * The name of the application.
   *
   * @public
   */
  app: string | undefined;

  /**
   * The ID of the application tenant.
   *
   * @public
   */
  tenantId: string | undefined;

  /**
   * The unique ID of the task.
   *
   * @public
   */
  taskId?: string | undefined;

  /**
   * Error from the task, if any.
   *
   * @public
   */
  error?: TaskError | undefined;
}

/**
 * @public
 */
export interface StartUserAccessTasksResponse {
  /**
   * Contains a list of user access task information.
   *
   * @public
   */
  userAccessTasksList?: UserAccessTaskItem[] | undefined;
}

/**
 * @public
 */
export interface StopIngestionRequest {
  /**
   * The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the ingestion to use for the request.
   *
   * @public
   */
  ingestionIdentifier: string | undefined;

  /**
   * The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the app bundle to use for the request.
   *
   * @public
   */
  appBundleIdentifier: string | undefined;
}

/**
 * @public
 */
export interface StopIngestionResponse {}

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
   * A map of the key-value pairs of the tag or tags to assign to the resource.
   *
   * @public
   */
  tags: Tag[] | undefined;
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
   * The keys of the key-value pairs for the tag or tags you want to remove from the specified resource.
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
export interface UpdateAppAuthorizationRequest {
  /**
   * The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the app bundle to use for the request.
   *
   * @public
   */
  appBundleIdentifier: string | undefined;

  /**
   * The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the app authorization to use for the request.
   *
   * @public
   */
  appAuthorizationIdentifier: string | undefined;

  /**
   * Contains credentials for the application, such as an API key or OAuth2 client ID and secret.
   *
   * Specify credentials that match the authorization type of the app authorization to update. For example, if the authorization type of the app authorization is OAuth2 (`oauth2`), then you should provide only the OAuth2 credentials.
   *
   * @public
   */
  credential?: Credential | undefined;

  /**
   * Contains information about an application tenant, such as the application display name and identifier.
   *
   * @public
   */
  tenant?: Tenant | undefined;
}

/**
 * @public
 */
export interface UpdateAppAuthorizationResponse {
  /**
   * Contains information about an app authorization.
   *
   * @public
   */
  appAuthorization: AppAuthorization | undefined;
}

/**
 * @public
 */
export interface UpdateIngestionDestinationRequest {
  /**
   * The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the app bundle to use for the request.
   *
   * @public
   */
  appBundleIdentifier: string | undefined;

  /**
   * The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the ingestion to use for the request.
   *
   * @public
   */
  ingestionIdentifier: string | undefined;

  /**
   * The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the ingestion destination to use for the request.
   *
   * @public
   */
  ingestionDestinationIdentifier: string | undefined;

  /**
   * Contains information about the destination of ingested data.
   *
   * @public
   */
  destinationConfiguration: DestinationConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateIngestionDestinationResponse {
  /**
   * Contains information about an ingestion destination.
   *
   * @public
   */
  ingestionDestination: IngestionDestination | undefined;
}
