// smithy-typescript generated code
import type { StreamingBlobTypes } from "@smithy/types";

import type {
  ApplicationStatus,
  ComparisonOperator,
  CredentialsScope,
  DataLakeResourceType,
  EnableStatus,
  FieldNameString,
  OptimizerType,
  Permission,
  PermissionType,
  QueryStateString,
  ResourceShareType,
  ResourceType,
  ServiceAuthorization,
  TransactionStatus,
  TransactionStatusFilter,
  TransactionType,
  VerificationStatus,
} from "./enums";

/**
 * A structure containing an LF-tag key-value pair.
 *
 * @public
 */
export interface LFTagPair {
  /**
   * The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment.
   *
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * The key-name for the LF-tag.
   *
   * @public
   */
  TagKey: string | undefined;

  /**
   * A list of possible values an attribute can take.
   *
   * @public
   */
  TagValues: string[] | undefined;
}

/**
 * A structure for the catalog object.
 *
 * @public
 */
export interface CatalogResource {
  /**
   * An identifier for the catalog resource.
   *
   * @public
   */
  Id?: string | undefined;
}

/**
 * A structure for the database object.
 *
 * @public
 */
export interface DatabaseResource {
  /**
   * The identifier for the Data Catalog. By default, it is the account ID of the caller.
   *
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * The name of the database resource. Unique to the Data Catalog.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * A structure for a data cells filter resource.
 *
 * @public
 */
export interface DataCellsFilterResource {
  /**
   * The ID of the catalog to which the table belongs.
   *
   * @public
   */
  TableCatalogId?: string | undefined;

  /**
   * A database in the Glue Data Catalog.
   *
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * The name of the table.
   *
   * @public
   */
  TableName?: string | undefined;

  /**
   * The name of the data cells filter.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * A structure for a data location object where permissions are granted or revoked.
 *
 * @public
 */
export interface DataLocationResource {
  /**
   * The identifier for the Data Catalog where the location is registered with Lake Formation. By default, it is the account ID of the caller.
   *
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) that uniquely identifies the data location resource.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * A structure containing an LF-tag key and values for a resource.
 *
 * @public
 */
export interface LFTagKeyResource {
  /**
   * The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment.
   *
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * The key-name for the LF-tag.
   *
   * @public
   */
  TagKey: string | undefined;

  /**
   * A list of possible values an attribute can take.
   *
   * @public
   */
  TagValues: string[] | undefined;
}

/**
 * A structure containing a LF-Tag expression (keys and values).
 *
 * @public
 */
export interface LFTagExpressionResource {
  /**
   * The identifier for the Data Catalog. By default, the account ID.
   *
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * The name of the LF-Tag expression to grant permissions on.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * A structure that allows an admin to grant user permissions on certain conditions. For example, granting a role access to all columns that do not have the LF-tag 'PII' in tables that have the LF-tag 'Prod'.
 *
 * @public
 */
export interface LFTag {
  /**
   * The key-name for the LF-tag.
   *
   * @public
   */
  TagKey: string | undefined;

  /**
   * A list of possible values an attribute can take.
   *
   * The maximum number of values that can be defined for a LF-Tag is 1000. A single API call supports 50 values. You can use multiple API calls to add more values.
   *
   * @public
   */
  TagValues: string[] | undefined;
}

/**
 * A structure containing a list of LF-tag conditions or saved LF-Tag expressions that apply to a resource's LF-tag policy.
 *
 * @public
 */
export interface LFTagPolicyResource {
  /**
   * The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment.
   *
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * The resource type for which the LF-tag policy applies.
   *
   * @public
   */
  ResourceType: ResourceType | undefined;

  /**
   * A list of LF-tag conditions or a saved expression that apply to the resource's LF-tag policy.
   *
   * @public
   */
  Expression?: LFTag[] | undefined;

  /**
   * If provided, permissions are granted to the Data Catalog resources whose assigned LF-Tags match the expression body of the saved expression under the provided `ExpressionName`.
   *
   * @public
   */
  ExpressionName?: string | undefined;
}

/**
 * A structure that identifies a row-level security policy as a resource, used when granting permissions on the policy.
 *
 * @public
 */
export interface RLSPolicyResource {
  /**
   * The identifier for the Data Catalog that contains the policy. By default, the account ID.
   *
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * The name of the row-level security policy.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * A wildcard object representing every table under a database.
 *
 * @public
 */
export interface TableWildcard {}

/**
 * A structure for the table object. A table is a metadata definition that represents your data. You can Grant and Revoke table privileges to a principal.
 *
 * @public
 */
export interface TableResource {
  /**
   * The identifier for the Data Catalog. By default, it is the account ID of the caller.
   *
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * The name of the database for the table. Unique to a Data Catalog. A database is a set of associated table definitions organized into a logical group. You can Grant and Revoke database privileges to a principal.
   *
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * The name of the table.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A wildcard object representing every table under a database.
   *
   * At least one of `TableResource$Name` or `TableResource$TableWildcard` is required.
   *
   * @public
   */
  TableWildcard?: TableWildcard | undefined;
}

/**
 * A wildcard object, consisting of an optional list of excluded column names or indexes.
 *
 * @public
 */
export interface ColumnWildcard {
  /**
   * Excludes column names. Any column with this name will be excluded.
   *
   * @public
   */
  ExcludedColumnNames?: string[] | undefined;
}

/**
 * A structure for a table with columns object. This object is only used when granting a SELECT permission.
 *
 * This object must take a value for at least one of `ColumnsNames`, `ColumnsIndexes`, or `ColumnsWildcard`.
 *
 * @public
 */
export interface TableWithColumnsResource {
  /**
   * The identifier for the Data Catalog. By default, it is the account ID of the caller.
   *
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * The name of the database for the table with columns resource. Unique to the Data Catalog. A database is a set of associated table definitions organized into a logical group. You can Grant and Revoke database privileges to a principal.
   *
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * The name of the table resource. A table is a metadata definition that represents your data. You can Grant and Revoke table privileges to a principal.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The list of column names for the table. At least one of `ColumnNames` or `ColumnWildcard` is required.
   *
   * @public
   */
  ColumnNames?: string[] | undefined;

  /**
   * A wildcard specified by a `ColumnWildcard` object. At least one of `ColumnNames` or `ColumnWildcard` is required.
   *
   * @public
   */
  ColumnWildcard?: ColumnWildcard | undefined;
}

/**
 * A structure for the resource.
 *
 * @public
 */
export interface Resource {
  /**
   * The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment.
   *
   * @public
   */
  Catalog?: CatalogResource | undefined;

  /**
   * The database for the resource. Unique to the Data Catalog. A database is a set of associated table definitions organized into a logical group. You can Grant and Revoke database permissions to a principal.
   *
   * @public
   */
  Database?: DatabaseResource | undefined;

  /**
   * The table for the resource. A table is a metadata definition that represents your data. You can Grant and Revoke table privileges to a principal.
   *
   * @public
   */
  Table?: TableResource | undefined;

  /**
   * The table with columns for the resource. A principal with permissions to this resource can select metadata from the columns of a table in the Data Catalog and the underlying data in Amazon S3.
   *
   * @public
   */
  TableWithColumns?: TableWithColumnsResource | undefined;

  /**
   * The location of an Amazon S3 path where permissions are granted or revoked.
   *
   * @public
   */
  DataLocation?: DataLocationResource | undefined;

  /**
   * A data cell filter.
   *
   * @public
   */
  DataCellsFilter?: DataCellsFilterResource | undefined;

  /**
   * The LF-Tag key and values attached to a resource.
   *
   * @public
   */
  LFTag?: LFTagKeyResource | undefined;

  /**
   * A list of LF-tag conditions or saved LF-Tag expressions that define a resource's LF-tag policy.
   *
   * @public
   */
  LFTagPolicy?: LFTagPolicyResource | undefined;

  /**
   * LF-Tag expression resource. A logical expression composed of one or more LF-Tag key:value pairs.
   *
   * @public
   */
  LFTagExpression?: LFTagExpressionResource | undefined;

  /**
   * A row-level security policy resource. Specify this when granting or revoking permissions on a row-level security policy.
   *
   * @public
   */
  RLSPolicy?: RLSPolicyResource | undefined;
}

/**
 * @public
 */
export interface AddLFTagsToResourceRequest {
  /**
   * The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment.
   *
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * The database, table, or column resource to which to attach an LF-tag.
   *
   * @public
   */
  Resource: Resource | undefined;

  /**
   * The LF-tags to attach to the resource.
   *
   * @public
   */
  LFTags: LFTagPair[] | undefined;
}

/**
 * Contains details about an error.
 *
 * @public
 */
export interface ErrorDetail {
  /**
   * The code associated with this error.
   *
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * A message describing the error.
   *
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * A structure containing an error related to a `TagResource` or `UnTagResource` operation.
 *
 * @public
 */
export interface LFTagError {
  /**
   * The key-name of the LF-tag.
   *
   * @public
   */
  LFTag?: LFTagPair | undefined;

  /**
   * An error that occurred with the attachment or detachment of the LF-tag.
   *
   * @public
   */
  Error?: ErrorDetail | undefined;
}

/**
 * @public
 */
export interface AddLFTagsToResourceResponse {
  /**
   * A list of failures to tag the resource.
   *
   * @public
   */
  Failures?: LFTagError[] | undefined;
}

/**
 * A new object to add to the governed table.
 *
 * @public
 */
export interface AddObjectInput {
  /**
   * The Amazon S3 location of the object.
   *
   * @public
   */
  Uri: string | undefined;

  /**
   * The Amazon S3 ETag of the object. Returned by `GetTableObjects` for validation and used to identify changes to the underlying data.
   *
   * @public
   */
  ETag: string | undefined;

  /**
   * The size of the Amazon S3 object in bytes.
   *
   * @public
   */
  Size: number | undefined;

  /**
   * A list of partition values for the object. A value must be specified for each partition key associated with the table.
   *
   * The supported data types are integer, long, date(yyyy-MM-dd), timestamp(yyyy-MM-dd HH:mm:ssXXX or yyyy-MM-dd HH:mm:ss"), string and decimal.
   *
   * @public
   */
  PartitionValues?: string[] | undefined;
}

/**
 * A structure that you pass to indicate you want all rows in a filter.
 *
 * @public
 */
export interface AllRowsWildcard {}

/**
 * @public
 */
export interface AssumeDecoratedRoleWithSAMLRequest {
  /**
   * A SAML assertion consisting of an assertion statement for the user who needs temporary credentials. This must match the SAML assertion that was issued to IAM. This must be Base64 encoded.
   *
   * @public
   */
  SAMLAssertion: string | undefined;

  /**
   * The role that represents an IAM principal whose scope down policy allows it to call credential vending APIs such as `GetTemporaryTableCredentials`. The caller must also have iam:PassRole permission on this role.
   *
   * @public
   */
  RoleArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the SAML provider in IAM that describes the IdP.
   *
   * @public
   */
  PrincipalArn: string | undefined;

  /**
   * The time period, between 900 and 43,200 seconds, for the timeout of the temporary credentials.
   *
   * @public
   */
  DurationSeconds?: number | undefined;
}

/**
 * @public
 */
export interface AssumeDecoratedRoleWithSAMLResponse {
  /**
   * The access key ID for the temporary credentials. (The access key consists of an access key ID and a secret key).
   *
   * @public
   */
  AccessKeyId?: string | undefined;

  /**
   * The secret key for the temporary credentials. (The access key consists of an access key ID and a secret key).
   *
   * @public
   */
  SecretAccessKey?: string | undefined;

  /**
   * The session token for the temporary credentials.
   *
   * @public
   */
  SessionToken?: string | undefined;

  /**
   * The date and time when the temporary credentials expire.
   *
   * @public
   */
  Expiration?: Date | undefined;
}

/**
 * A Lake Formation condition, which applies to permissions and opt-ins that contain an expression.
 *
 * @public
 */
export interface Condition {
  /**
   * An expression written based on the Cedar Policy Language used to match the principal attributes.
   *
   * @public
   */
  Expression?: string | undefined;
}

/**
 * The Lake Formation principal. Supported principals are IAM users or IAM roles.
 *
 * @public
 */
export interface DataLakePrincipal {
  /**
   * An identifier for the Lake Formation principal.
   *
   * @public
   */
  DataLakePrincipalIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface AttachRLSPolicyRequest {
  /**
   * The name of the row-level security policy to attach.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The resource to which the row-level security policy is attached.
   *
   * @public
   */
  Resource: Resource | undefined;

  /**
   * The principal to which the row-level security policy applies.
   *
   * @public
   */
  Principal?: DataLakePrincipal | undefined;

  /**
   * A Lake Formation condition, which applies to the row-level security policy attachment and contains an expression.
   *
   * @public
   */
  Condition?: Condition | undefined;

  /**
   * Indicates whether this policy becomes the default row-level security policy for the resource. The default policy applies to all principals by default.
   *
   * @public
   */
  SetDefault?: boolean | undefined;
}

/**
 * @public
 */
export interface AttachRLSPolicyResponse {}

/**
 * A structure used to include auditing information on the privileged API.
 *
 * @public
 */
export interface AuditContext {
  /**
   * The filter engine can populate the 'AdditionalAuditContext' information with the request ID for you to track. This information will be displayed in CloudTrail log in your account.
   *
   * @public
   */
  AdditionalAuditContext?: string | undefined;
}

/**
 * A permission to a resource granted by batch operation to the principal.
 *
 * @public
 */
export interface BatchPermissionsRequestEntry {
  /**
   * A unique identifier for the batch permissions request entry.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The principal to be granted a permission.
   *
   * @public
   */
  Principal?: DataLakePrincipal | undefined;

  /**
   * The resource to which the principal is to be granted a permission.
   *
   * @public
   */
  Resource?: Resource | undefined;

  /**
   * The permissions to be granted.
   *
   * @public
   */
  Permissions?: Permission[] | undefined;

  /**
   * A Lake Formation condition, which applies to permissions and opt-ins that contain an expression.
   *
   * @public
   */
  Condition?: Condition | undefined;

  /**
   * Indicates if the option to pass permissions is granted.
   *
   * @public
   */
  PermissionsWithGrantOption?: Permission[] | undefined;
}

/**
 * @public
 */
export interface BatchGrantPermissionsRequest {
  /**
   * The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment.
   *
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * A list of up to 20 entries for resource permissions to be granted by batch operation to the principal.
   *
   * @public
   */
  Entries: BatchPermissionsRequestEntry[] | undefined;
}

/**
 * A list of failures when performing a batch grant or batch revoke operation.
 *
 * @public
 */
export interface BatchPermissionsFailureEntry {
  /**
   * An identifier for an entry of the batch request.
   *
   * @public
   */
  RequestEntry?: BatchPermissionsRequestEntry | undefined;

  /**
   * An error message that applies to the failure of the entry.
   *
   * @public
   */
  Error?: ErrorDetail | undefined;
}

/**
 * @public
 */
export interface BatchGrantPermissionsResponse {
  /**
   * A list of failures to grant permissions to the resources.
   *
   * @public
   */
  Failures?: BatchPermissionsFailureEntry[] | undefined;
}

/**
 * @public
 */
export interface BatchRevokePermissionsRequest {
  /**
   * The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment.
   *
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * A list of up to 20 entries for resource permissions to be revoked by batch operation to the principal.
   *
   * @public
   */
  Entries: BatchPermissionsRequestEntry[] | undefined;
}

/**
 * @public
 */
export interface BatchRevokePermissionsResponse {
  /**
   * A list of failures to revoke permissions to the resources.
   *
   * @public
   */
  Failures?: BatchPermissionsFailureEntry[] | undefined;
}

/**
 * @public
 */
export interface CancelTransactionRequest {
  /**
   * The transaction to cancel.
   *
   * @public
   */
  TransactionId: string | undefined;
}

/**
 * @public
 */
export interface CancelTransactionResponse {}

/**
 * @public
 */
export interface CommitTransactionRequest {
  /**
   * The transaction to commit.
   *
   * @public
   */
  TransactionId: string | undefined;
}

/**
 * @public
 */
export interface CommitTransactionResponse {
  /**
   * The status of the transaction.
   *
   * @public
   */
  TransactionStatus?: TransactionStatus | undefined;
}

/**
 * A PartiQL predicate.
 *
 * @public
 */
export interface RowFilter {
  /**
   * A filter expression.
   *
   * @public
   */
  FilterExpression?: string | undefined;

  /**
   * A wildcard for all rows.
   *
   * @public
   */
  AllRowsWildcard?: AllRowsWildcard | undefined;
}

/**
 * A structure that describes certain columns on certain rows.
 *
 * @public
 */
export interface DataCellsFilter {
  /**
   * The ID of the catalog to which the table belongs.
   *
   * @public
   */
  TableCatalogId: string | undefined;

  /**
   * A database in the Glue Data Catalog.
   *
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * A table in the database.
   *
   * @public
   */
  TableName: string | undefined;

  /**
   * The name given by the user to the data filter cell.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A PartiQL predicate.
   *
   * @public
   */
  RowFilter?: RowFilter | undefined;

  /**
   * A list of column names and/or nested column attributes. When specifying nested attributes, use a qualified dot (.) delimited format such as "address"."zip". Nested attributes within this list may not exceed a depth of 5.
   *
   * @public
   */
  ColumnNames?: string[] | undefined;

  /**
   * A wildcard with exclusions.
   *
   * You must specify either a `ColumnNames` list or the `ColumnWildCard`.
   *
   * @public
   */
  ColumnWildcard?: ColumnWildcard | undefined;

  /**
   * The ID of the data cells filter version.
   *
   * @public
   */
  VersionId?: string | undefined;
}

/**
 * @public
 */
export interface CreateDataCellsFilterRequest {
  /**
   * A `DataCellsFilter` structure containing information about the data cells filter.
   *
   * @public
   */
  TableData: DataCellsFilter | undefined;
}

/**
 * @public
 */
export interface CreateDataCellsFilterResponse {}

/**
 * Configuration for enabling external data filtering for third-party applications to access data managed by Lake Formation .
 *
 * @public
 */
export interface ExternalFilteringConfiguration {
  /**
   * Allows to enable or disable the third-party applications that are allowed to access data managed by Lake Formation.
   *
   * @public
   */
  Status: EnableStatus | undefined;

  /**
   * List of third-party application `ARNs` integrated with Lake Formation.
   *
   * @public
   */
  AuthorizedTargets: string[] | undefined;
}

/**
 * Configuration for enabling trusted identity propagation with Redshift Connect.
 *
 * @public
 */
export interface RedshiftConnect {
  /**
   * The authorization status for Redshift Connect. Valid values are ENABLED or DISABLED.
   *
   * @public
   */
  Authorization: ServiceAuthorization | undefined;
}

/**
 * A union structure representing different Redshift integration scopes.
 *
 * @public
 */
export type RedshiftScopeUnion =
  | RedshiftScopeUnion.RedshiftConnectMember
  | RedshiftScopeUnion.$UnknownMember;

/**
 * @public
 */
export namespace RedshiftScopeUnion {
  /**
   * Configuration for Redshift Connect integration.
   *
   * @public
   */
  export interface RedshiftConnectMember {
    RedshiftConnect: RedshiftConnect;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    RedshiftConnect?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    RedshiftConnect: (value: RedshiftConnect) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A union structure representing different service integration types.
 *
 * @public
 */
export type ServiceIntegrationUnion =
  | ServiceIntegrationUnion.RedshiftMember
  | ServiceIntegrationUnion.$UnknownMember;

/**
 * @public
 */
export namespace ServiceIntegrationUnion {
  /**
   * Redshift service integration configuration.
   *
   * @public
   */
  export interface RedshiftMember {
    Redshift: RedshiftScopeUnion[];
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Redshift?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    Redshift: (value: RedshiftScopeUnion[]) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateLakeFormationIdentityCenterConfigurationRequest {
  /**
   * The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, view definitions, and other control information to manage your Lake Formation environment.
   *
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * The ARN of the IAM Identity Center instance for which the operation will be executed. For more information about ARNs, see Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces in the Amazon Web Services General Reference.
   *
   * @public
   */
  InstanceArn?: string | undefined;

  /**
   * A list of the account IDs of Amazon Web Services accounts of third-party applications that are allowed to access data managed by Lake Formation.
   *
   * @public
   */
  ExternalFiltering?: ExternalFilteringConfiguration | undefined;

  /**
   * A list of Amazon Web Services account IDs and/or Amazon Web Services organization/organizational unit ARNs that are allowed to access data managed by Lake Formation.
   *
   * If the `ShareRecipients` list includes valid values, a resource share is created with the principals you want to have access to the resources.
   *
   * If the `ShareRecipients` value is null or the list is empty, no resource share is created.
   *
   * @public
   */
  ShareRecipients?: DataLakePrincipal[] | undefined;

  /**
   * A list of service integrations for enabling trusted identity propagation with external services such as Redshift.
   *
   * @public
   */
  ServiceIntegrations?: ServiceIntegrationUnion[] | undefined;
}

/**
 * @public
 */
export interface CreateLakeFormationIdentityCenterConfigurationResponse {
  /**
   * The Amazon Resource Name (ARN) of the Lake Formation application integrated with IAM Identity Center.
   *
   * @public
   */
  ApplicationArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateLakeFormationOptInRequest {
  /**
   * The Lake Formation principal. Supported principals are IAM users or IAM roles.
   *
   * @public
   */
  Principal: DataLakePrincipal | undefined;

  /**
   * A structure for the resource.
   *
   * @public
   */
  Resource: Resource | undefined;

  /**
   * A Lake Formation condition, which applies to permissions and opt-ins that contain an expression.
   *
   * @public
   */
  Condition?: Condition | undefined;
}

/**
 * @public
 */
export interface CreateLakeFormationOptInResponse {}

/**
 * @public
 */
export interface CreateLFTagRequest {
  /**
   * The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment.
   *
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * The key-name for the LF-tag.
   *
   * @public
   */
  TagKey: string | undefined;

  /**
   * A list of possible values an attribute can take.
   *
   * @public
   */
  TagValues: string[] | undefined;
}

/**
 * @public
 */
export interface CreateLFTagResponse {}

/**
 * @public
 */
export interface CreateLFTagExpressionRequest {
  /**
   * A name for the expression.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A description with information about the LF-Tag expression.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment.
   *
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * A list of LF-Tag conditions (key-value pairs).
   *
   * @public
   */
  Expression: LFTag[] | undefined;
}

/**
 * @public
 */
export interface CreateLFTagExpressionResponse {}

/**
 * A column in a table that a row-level security policy's filter expression can reference.
 *
 * @public
 */
export interface Column {
  /**
   * The name of the column.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The data type of the column.
   *
   * @public
   */
  Type?: string | undefined;
}

/**
 * @public
 */
export interface CreateRLSPolicyRequest {
  /**
   * A unique name for the row-level security policy within the Data Catalog.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The list of columns that the filter expression references. These columns define the shape of the data that the policy can be attached to.
   *
   * @public
   */
  AttachmentColumns: Column[] | undefined;

  /**
   * A filter predicate, written in a SQL-like syntax, that Lake Formation evaluates against each row. Only the rows for which the expression evaluates to true are returned to the principal.
   *
   * @public
   */
  FilterExpression: string | undefined;
}

/**
 * @public
 */
export interface CreateRLSPolicyResponse {}

/**
 * @public
 */
export interface DeleteDataCellsFilterRequest {
  /**
   * The ID of the catalog to which the table belongs.
   *
   * @public
   */
  TableCatalogId?: string | undefined;

  /**
   * A database in the Glue Data Catalog.
   *
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * A table in the database.
   *
   * @public
   */
  TableName?: string | undefined;

  /**
   * The name given by the user to the data filter cell.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 */
export interface DeleteDataCellsFilterResponse {}

/**
 * @public
 */
export interface DeleteLakeFormationIdentityCenterConfigurationRequest {
  /**
   * The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, view definition, and other control information to manage your Lake Formation environment.
   *
   * @public
   */
  CatalogId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteLakeFormationIdentityCenterConfigurationResponse {}

/**
 * @public
 */
export interface DeleteLakeFormationOptInRequest {
  /**
   * The Lake Formation principal. Supported principals are IAM users or IAM roles.
   *
   * @public
   */
  Principal: DataLakePrincipal | undefined;

  /**
   * A structure for the resource.
   *
   * @public
   */
  Resource: Resource | undefined;

  /**
   * A Lake Formation condition, which applies to permissions and opt-ins that contain an expression.
   *
   * @public
   */
  Condition?: Condition | undefined;
}

/**
 * @public
 */
export interface DeleteLakeFormationOptInResponse {}

/**
 * @public
 */
export interface DeleteLFTagRequest {
  /**
   * The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment.
   *
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * The key-name for the LF-tag to delete.
   *
   * @public
   */
  TagKey: string | undefined;
}

/**
 * @public
 */
export interface DeleteLFTagResponse {}

/**
 * @public
 */
export interface DeleteLFTagExpressionRequest {
  /**
   * The name for the LF-Tag expression.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The identifier for the Data Catalog. By default, the account ID in which the LF-Tag expression is saved.
   *
   * @public
   */
  CatalogId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteLFTagExpressionResponse {}

/**
 * An object that defines an Amazon S3 object to be deleted if a transaction cancels, provided that `VirtualPut` was called before writing the object.
 *
 * @public
 */
export interface VirtualObject {
  /**
   * The path to the Amazon S3 object. Must start with s3://
   *
   * @public
   */
  Uri: string | undefined;

  /**
   * The ETag of the Amazon S3 object.
   *
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface DeleteObjectsOnCancelRequest {
  /**
   * The Glue data catalog that contains the governed table. Defaults to the current account ID.
   *
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * The database that contains the governed table.
   *
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * The name of the governed table.
   *
   * @public
   */
  TableName: string | undefined;

  /**
   * ID of the transaction that the writes occur in.
   *
   * @public
   */
  TransactionId: string | undefined;

  /**
   * A list of VirtualObject structures, which indicates the Amazon S3 objects to be deleted if the transaction cancels.
   *
   * @public
   */
  Objects: VirtualObject[] | undefined;
}

/**
 * @public
 */
export interface DeleteObjectsOnCancelResponse {}

/**
 * @public
 */
export interface DeleteRLSPolicyRequest {
  /**
   * The name of the row-level security policy to delete.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteRLSPolicyResponse {}

/**
 * @public
 */
export interface DeregisterResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource that you want to deregister.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface DeregisterResourceResponse {}

/**
 * @public
 */
export interface DescribeLakeFormationIdentityCenterConfigurationRequest {
  /**
   * The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment.
   *
   * @public
   */
  CatalogId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeLakeFormationIdentityCenterConfigurationResponse {
  /**
   * The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment.
   *
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the connection.
   *
   * @public
   */
  InstanceArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Lake Formation application integrated with IAM Identity Center.
   *
   * @public
   */
  ApplicationArn?: string | undefined;

  /**
   * Indicates if external filtering is enabled.
   *
   * @public
   */
  ExternalFiltering?: ExternalFilteringConfiguration | undefined;

  /**
   * A list of Amazon Web Services account IDs or Amazon Web Services organization/organizational unit ARNs that are allowed to access data managed by Lake Formation.
   *
   * If the `ShareRecipients` list includes valid values, a resource share is created with the principals you want to have access to the resources as the `ShareRecipients`.
   *
   * If the `ShareRecipients` value is null or the list is empty, no resource share is created.
   *
   * @public
   */
  ShareRecipients?: DataLakePrincipal[] | undefined;

  /**
   * A list of service integrations for enabling trusted identity propagation with external services such as Redshift.
   *
   * @public
   */
  ServiceIntegrations?: ServiceIntegrationUnion[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the RAM share.
   *
   * @public
   */
  ResourceShare?: string | undefined;
}

/**
 * @public
 */
export interface DescribeResourceRequest {
  /**
   * The resource ARN.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * A structure containing information about an Lake Formation resource.
 *
 * @public
 */
export interface ResourceInfo {
  /**
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * The IAM role that registered a resource.
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * The date and time the resource was last modified.
   *
   * @public
   */
  LastModified?: Date | undefined;

  /**
   * Whether or not the resource is a federated resource.
   *
   * @public
   */
  WithFederation?: boolean | undefined;

  /**
   * Indicates whether the data access of tables pointing to the location can be managed by both Lake Formation permissions as well as Amazon S3 bucket policies.
   *
   * @public
   */
  HybridAccessEnabled?: boolean | undefined;

  /**
   * Grants the calling principal the permissions to perform all supported Lake Formation operations on the registered data location.
   *
   * @public
   */
  WithPrivilegedAccess?: boolean | undefined;

  /**
   * Indicates whether the registered role has sufficient permissions to access registered Amazon S3 location. Verification Status can be one of the following:
   *
   * - VERIFIED - Registered role has sufficient permissions to access registered Amazon S3 location.
   * - NOT_VERIFIED - Registered role does not have sufficient permissions to access registered Amazon S3 location.
   * - VERIFICATION_FAILED - Unable to verify if the registered role can access the registered Amazon S3 location.
   *
   * @public
   */
  VerificationStatus?: VerificationStatus | undefined;

  /**
   * The Amazon Web Services account that owns the Glue tables associated with specific Amazon S3 locations.
   *
   * @public
   */
  ExpectedResourceOwnerAccount?: string | undefined;
}

/**
 * @public
 */
export interface DescribeResourceResponse {
  /**
   * A structure containing information about an Lake Formation resource.
   *
   * @public
   */
  ResourceInfo?: ResourceInfo | undefined;
}

/**
 * @public
 */
export interface DescribeTransactionRequest {
  /**
   * The transaction for which to return status.
   *
   * @public
   */
  TransactionId: string | undefined;
}

/**
 * A structure that contains information about a transaction.
 *
 * @public
 */
export interface TransactionDescription {
  /**
   * The ID of the transaction.
   *
   * @public
   */
  TransactionId?: string | undefined;

  /**
   * A status of ACTIVE, COMMITTED, or ABORTED.
   *
   * @public
   */
  TransactionStatus?: TransactionStatus | undefined;

  /**
   * The time when the transaction started.
   *
   * @public
   */
  TransactionStartTime?: Date | undefined;

  /**
   * The time when the transaction committed or aborted, if it is not currently active.
   *
   * @public
   */
  TransactionEndTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeTransactionResponse {
  /**
   * Returns a `TransactionDescription` object containing information about the transaction.
   *
   * @public
   */
  TransactionDescription?: TransactionDescription | undefined;
}

/**
 * @public
 */
export interface DetachRLSPolicyRequest {
  /**
   * The name of the row-level security policy to detach.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The resource from which the row-level security policy is detached.
   *
   * @public
   */
  Resource: Resource | undefined;

  /**
   * The principal for which the row-level security policy is detached.
   *
   * @public
   */
  Principal?: DataLakePrincipal | undefined;

  /**
   * A Lake Formation condition, which applies to the row-level security policy attachment and contains an expression.
   *
   * @public
   */
  Condition?: Condition | undefined;

  /**
   * Indicates whether to remove this policy as the default row-level security policy for the resource.
   *
   * @public
   */
  RemoveDefault?: boolean | undefined;
}

/**
 * @public
 */
export interface DetachRLSPolicyResponse {}

/**
 * @public
 */
export interface ExtendTransactionRequest {
  /**
   * The transaction to extend.
   *
   * @public
   */
  TransactionId?: string | undefined;
}

/**
 * @public
 */
export interface ExtendTransactionResponse {}

/**
 * @public
 */
export interface GetDataCellsFilterRequest {
  /**
   * The ID of the catalog to which the table belongs.
   *
   * @public
   */
  TableCatalogId: string | undefined;

  /**
   * A database in the Glue Data Catalog.
   *
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * A table in the database.
   *
   * @public
   */
  TableName: string | undefined;

  /**
   * The name given by the user to the data filter cell.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface GetDataCellsFilterResponse {
  /**
   * A structure that describes certain columns on certain rows.
   *
   * @public
   */
  DataCellsFilter?: DataCellsFilter | undefined;
}

/**
 * @public
 */
export interface GetDataLakePrincipalRequest {}

/**
 * @public
 */
export interface GetDataLakePrincipalResponse {
  /**
   * A unique identifier of the invoking principal.
   *
   * @public
   */
  Identity?: string | undefined;
}

/**
 * @public
 */
export interface GetDataLakeSettingsRequest {
  /**
   * The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment.
   *
   * @public
   */
  CatalogId?: string | undefined;
}

/**
 * Permissions granted to a principal.
 *
 * @public
 */
export interface PrincipalPermissions {
  /**
   * The principal who is granted permissions.
   *
   * @public
   */
  Principal?: DataLakePrincipal | undefined;

  /**
   * The permissions that are granted to the principal.
   *
   * @public
   */
  Permissions?: Permission[] | undefined;
}

/**
 * A structure representing a list of Lake Formation principals designated as data lake administrators and lists of principal permission entries for default create database and default create table permissions.
 *
 * @public
 */
export interface DataLakeSettings {
  /**
   * A list of Lake Formation principals. Supported principals are IAM users or IAM roles.
   *
   * @public
   */
  DataLakeAdmins?: DataLakePrincipal[] | undefined;

  /**
   * A list of Lake Formation principals with only view access to the resources, without the ability to make changes. Supported principals are IAM users or IAM roles.
   *
   * @public
   */
  ReadOnlyAdmins?: DataLakePrincipal[] | undefined;

  /**
   * Specifies whether access control on newly created database is managed by Lake Formation permissions or exclusively by IAM permissions.
   *
   * A null value indicates access control by Lake Formation permissions. A value that assigns ALL to IAM_ALLOWED_PRINCIPALS indicates access control by IAM permissions. This is referred to as the setting "Use only IAM access control," and is for backward compatibility with the Glue permission model implemented by IAM permissions.
   *
   * The only permitted values are an empty array or an array that contains a single JSON object that grants ALL to IAM_ALLOWED_PRINCIPALS.
   *
   * For more information, see [Changing the Default Security Settings for Your Data Lake](https://docs.aws.amazon.com/lake-formation/latest/dg/change-settings.html).
   *
   * @public
   */
  CreateDatabaseDefaultPermissions?: PrincipalPermissions[] | undefined;

  /**
   * Specifies whether access control on newly created table is managed by Lake Formation permissions or exclusively by IAM permissions.
   *
   * A null value indicates access control by Lake Formation permissions. A value that assigns ALL to IAM_ALLOWED_PRINCIPALS indicates access control by IAM permissions. This is referred to as the setting "Use only IAM access control," and is for backward compatibility with the Glue permission model implemented by IAM permissions.
   *
   * The only permitted values are an empty array or an array that contains a single JSON object that grants ALL to IAM_ALLOWED_PRINCIPALS.
   *
   * For more information, see [Changing the Default Security Settings for Your Data Lake](https://docs.aws.amazon.com/lake-formation/latest/dg/change-settings.html).
   *
   * @public
   */
  CreateTableDefaultPermissions?: PrincipalPermissions[] | undefined;

  /**
   * A key-value map that provides an additional configuration on your data lake. The following key-value pairs are supported:
   *
   * - `CROSS_ACCOUNT_VERSION` - Accepted values are 1, 2, 3, 4, and 5.
   * - `SET_SOURCE_IDENTITY` - Accepted values are `TRUE` and `FALSE`. When set to `TRUE`, Lake Formation includes the IAM role identifier that was used to query in the S3 data event CloudTrail logs for `s3:GetObject` calls. For more information, see [Tracking query engine IAM roles in S3 data events](https://docs.aws.amazon.com/lake-formation/latest/dg/cloudtrail-logging.html#source-identity-cloudtrail).
   *
   * @public
   */
  Parameters?: Record<string, string> | undefined;

  /**
   * A list of the resource-owning account IDs that the caller's account can use to share their user access details (user ARNs). The user ARNs can be logged in the resource owner's CloudTrail log.
   *
   * You may want to specify this property when you are in a high-trust boundary, such as the same team or company.
   *
   * @public
   */
  TrustedResourceOwners?: string[] | undefined;

  /**
   * Whether to allow Amazon EMR clusters to access data managed by Lake Formation.
   *
   * If true, you allow Amazon EMR clusters to access data in Amazon S3 locations that are registered with Lake Formation.
   *
   * If false or null, no Amazon EMR clusters will be able to access data in Amazon S3 locations that are registered with Lake Formation.
   *
   * For more information, see [(Optional) Allow external data filtering](https://docs.aws.amazon.com/lake-formation/latest/dg/initial-LF-setup.html#external-data-filter).
   *
   * @public
   */
  AllowExternalDataFiltering?: boolean | undefined;

  /**
   * Whether to allow a third-party query engine to get data access credentials without session tags when a caller has full data access permissions.
   *
   * @public
   */
  AllowFullTableExternalDataAccess?: boolean | undefined;

  /**
   * A list of the account IDs of Amazon Web Services accounts with Amazon EMR clusters that are to perform data filtering.>
   *
   * @public
   */
  ExternalDataFilteringAllowList?: DataLakePrincipal[] | undefined;

  /**
   * Lake Formation relies on a privileged process secured by Amazon EMR or the third party integrator to tag the user's role while assuming it. Lake Formation will publish the acceptable key-value pair, for example key = "LakeFormationTrustedCaller" and value = "TRUE" and the third party integrator must properly tag the temporary security credentials that will be used to call Lake Formation's administrative APIs.
   *
   * @public
   */
  AuthorizedSessionTagValueList?: string[] | undefined;
}

/**
 * @public
 */
export interface GetDataLakeSettingsResponse {
  /**
   * A structure representing a list of Lake Formation principals designated as data lake administrators.
   *
   * @public
   */
  DataLakeSettings?: DataLakeSettings | undefined;
}

/**
 * @public
 */
export interface GetEffectivePermissionsForPathRequest {
  /**
   * The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment.
   *
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the resource for which you want to get permissions.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * A continuation token, if this is not the first call to retrieve this list.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * A structure containing the additional details to be returned in the `AdditionalDetails` attribute of `PrincipalResourcePermissions`.
 *
 * If a catalog resource is shared through Resource Access Manager (RAM), then there will exist a corresponding RAM resource share ARN.
 *
 * @public
 */
export interface DetailsMap {
  /**
   * A resource share ARN for a catalog resource shared through RAM.
   *
   * @public
   */
  ResourceShare?: string[] | undefined;
}

/**
 * The permissions granted or revoked on a resource.
 *
 * @public
 */
export interface PrincipalResourcePermissions {
  /**
   * The Data Lake principal to be granted or revoked permissions.
   *
   * @public
   */
  Principal?: DataLakePrincipal | undefined;

  /**
   * The resource where permissions are to be granted or revoked.
   *
   * @public
   */
  Resource?: Resource | undefined;

  /**
   * A Lake Formation condition, which applies to permissions and opt-ins that contain an expression.
   *
   * @public
   */
  Condition?: Condition | undefined;

  /**
   * The permissions to be granted or revoked on the resource.
   *
   * @public
   */
  Permissions?: Permission[] | undefined;

  /**
   * Indicates whether to grant the ability to grant permissions (as a subset of permissions granted).
   *
   * @public
   */
  PermissionsWithGrantOption?: Permission[] | undefined;

  /**
   * This attribute can be used to return any additional details of `PrincipalResourcePermissions`. Currently returns only as a RAM resource share ARN.
   *
   * @public
   */
  AdditionalDetails?: DetailsMap | undefined;

  /**
   * The date and time when the resource was last updated.
   *
   * @public
   */
  LastUpdated?: Date | undefined;

  /**
   * The user who updated the record.
   *
   * @public
   */
  LastUpdatedBy?: string | undefined;
}

/**
 * @public
 */
export interface GetEffectivePermissionsForPathResponse {
  /**
   * A list of the permissions for the specified table or database resource located at the path in Amazon S3.
   *
   * @public
   */
  Permissions?: PrincipalResourcePermissions[] | undefined;

  /**
   * A continuation token, if this is not the first call to retrieve this list.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetLFTagRequest {
  /**
   * The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment.
   *
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * The key-name for the LF-tag.
   *
   * @public
   */
  TagKey: string | undefined;
}

/**
 * @public
 */
export interface GetLFTagResponse {
  /**
   * The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment.
   *
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * The key-name for the LF-tag.
   *
   * @public
   */
  TagKey?: string | undefined;

  /**
   * A list of possible values an attribute can take.
   *
   * @public
   */
  TagValues?: string[] | undefined;
}

/**
 * @public
 */
export interface GetLFTagExpressionRequest {
  /**
   * The name for the LF-Tag expression
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The identifier for the Data Catalog. By default, the account ID.
   *
   * @public
   */
  CatalogId?: string | undefined;
}

/**
 * @public
 */
export interface GetLFTagExpressionResponse {
  /**
   * The name for the LF-Tag expression.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The description with information about the LF-Tag expression.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The identifier for the Data Catalog. By default, the account ID in which the LF-Tag expression is saved.
   *
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * The body of the LF-Tag expression. It is composed of one or more LF-Tag key-value pairs.
   *
   * @public
   */
  Expression?: LFTag[] | undefined;
}

/**
 * @public
 */
export interface GetQueryStateRequest {
  /**
   * The ID of the plan query operation.
   *
   * @public
   */
  QueryId: string | undefined;
}

/**
 * A structure for the output.
 *
 * @public
 */
export interface GetQueryStateResponse {
  /**
   * An error message when the operation fails.
   *
   * @public
   */
  Error?: string | undefined;

  /**
   * The state of a query previously submitted. The possible states are:
   *
   * - PENDING: the query is pending.
   * - WORKUNITS_AVAILABLE: some work units are ready for retrieval and execution.
   * - FINISHED: the query planning finished successfully, and all work units are ready for retrieval and execution.
   * - ERROR: an error occurred with the query, such as an invalid query ID or a backend error.
   *
   * @public
   */
  State: QueryStateString | undefined;
}

/**
 * @public
 */
export interface GetQueryStatisticsRequest {
  /**
   * The ID of the plan query operation.
   *
   * @public
   */
  QueryId: string | undefined;
}

/**
 * Statistics related to the processing of a query statement.
 *
 * @public
 */
export interface ExecutionStatistics {
  /**
   * The average time the request took to be executed.
   *
   * @public
   */
  AverageExecutionTimeMillis?: number | undefined;

  /**
   * The amount of data that was scanned in bytes.
   *
   * @public
   */
  DataScannedBytes?: number | undefined;

  /**
   * The number of work units executed.
   *
   * @public
   */
  WorkUnitsExecutedCount?: number | undefined;
}

/**
 * Statistics related to the processing of a query statement.
 *
 * @public
 */
export interface PlanningStatistics {
  /**
   * An estimate of the data that was scanned in bytes.
   *
   * @public
   */
  EstimatedDataToScanBytes?: number | undefined;

  /**
   * The time that it took to process the request.
   *
   * @public
   */
  PlanningTimeMillis?: number | undefined;

  /**
   * The time the request was in queue to be processed.
   *
   * @public
   */
  QueueTimeMillis?: number | undefined;

  /**
   * The number of work units generated.
   *
   * @public
   */
  WorkUnitsGeneratedCount?: number | undefined;
}

/**
 * @public
 */
export interface GetQueryStatisticsResponse {
  /**
   * An `ExecutionStatistics` structure containing execution statistics.
   *
   * @public
   */
  ExecutionStatistics?: ExecutionStatistics | undefined;

  /**
   * A `PlanningStatistics` structure containing query planning statistics.
   *
   * @public
   */
  PlanningStatistics?: PlanningStatistics | undefined;

  /**
   * The time that the query was submitted.
   *
   * @public
   */
  QuerySubmissionTime?: Date | undefined;
}

/**
 * @public
 */
export interface GetResourceLFTagsRequest {
  /**
   * The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment.
   *
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * The database, table, or column resource for which you want to return LF-tags.
   *
   * @public
   */
  Resource: Resource | undefined;

  /**
   * Indicates whether to show the assigned LF-tags.
   *
   * @public
   */
  ShowAssignedLFTags?: boolean | undefined;
}

/**
 * A structure containing the name of a column resource and the LF-tags attached to it.
 *
 * @public
 */
export interface ColumnLFTag {
  /**
   * The name of a column resource.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The LF-tags attached to a column resource.
   *
   * @public
   */
  LFTags?: LFTagPair[] | undefined;
}

/**
 * @public
 */
export interface GetResourceLFTagsResponse {
  /**
   * A list of LF-tags applied to a database resource.
   *
   * @public
   */
  LFTagOnDatabase?: LFTagPair[] | undefined;

  /**
   * A list of LF-tags applied to a table resource.
   *
   * @public
   */
  LFTagsOnTable?: LFTagPair[] | undefined;

  /**
   * A list of LF-tags applied to a column resource.
   *
   * @public
   */
  LFTagsOnColumns?: ColumnLFTag[] | undefined;
}

/**
 * @public
 */
export interface GetRLSPolicyRequest {
  /**
   * The name of the row-level security policy to retrieve.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * A structure that describes a row-level security policy, including the columns its filter expression references and the filter expression itself.
 *
 * @public
 */
export interface RLSPolicy {
  /**
   * The identifier for the Data Catalog that contains the policy. By default, the account ID.
   *
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * The name of the row-level security policy.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The list of columns that the filter expression references.
   *
   * @public
   */
  AttachmentColumns?: Column[] | undefined;

  /**
   * The filter predicate, written in a SQL-like syntax, that determines which rows are returned to the principal.
   *
   * @public
   */
  FilterExpression?: string | undefined;
}

/**
 * @public
 */
export interface GetRLSPolicyResponse {
  /**
   * An `RLSPolicy` structure containing the definition of the requested row-level security policy.
   *
   * @public
   */
  RLSPolicy?: RLSPolicy | undefined;
}

/**
 * @public
 */
export interface GetTableObjectsRequest {
  /**
   * The catalog containing the governed table. Defaults to the caller’s account.
   *
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * The database containing the governed table.
   *
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * The governed table for which to retrieve objects.
   *
   * @public
   */
  TableName: string | undefined;

  /**
   * The transaction ID at which to read the governed table contents. If this transaction has aborted, an error is returned. If not set, defaults to the most recent committed transaction. Cannot be specified along with `QueryAsOfTime`.
   *
   * @public
   */
  TransactionId?: string | undefined;

  /**
   * The time as of when to read the governed table contents. If not set, the most recent transaction commit time is used. Cannot be specified along with `TransactionId`.
   *
   * @public
   */
  QueryAsOfTime?: Date | undefined;

  /**
   * A predicate to filter the objects returned based on the partition keys defined in the governed table.
   *
   * - The comparison operators supported are: =, >, <, >=, <=
   * - The logical operators supported are: AND
   * - The data types supported are integer, long, date(yyyy-MM-dd), timestamp(yyyy-MM-dd HH:mm:ssXXX or yyyy-MM-dd HH:mm:ss"), string and decimal.
   *
   * @public
   */
  PartitionPredicate?: string | undefined;

  /**
   * Specifies how many values to return in a page.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A continuation token if this is not the first call to retrieve these objects.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Specifies the details of a governed table.
 *
 * @public
 */
export interface TableObject {
  /**
   * The Amazon S3 location of the object.
   *
   * @public
   */
  Uri?: string | undefined;

  /**
   * The Amazon S3 ETag of the object. Returned by `GetTableObjects` for validation and used to identify changes to the underlying data.
   *
   * @public
   */
  ETag?: string | undefined;

  /**
   * The size of the Amazon S3 object in bytes.
   *
   * @public
   */
  Size?: number | undefined;
}

/**
 * A structure containing a list of partition values and table objects.
 *
 * @public
 */
export interface PartitionObjects {
  /**
   * A list of partition values.
   *
   * @public
   */
  PartitionValues?: string[] | undefined;

  /**
   * A list of table objects
   *
   * @public
   */
  Objects?: TableObject[] | undefined;
}

/**
 * @public
 */
export interface GetTableObjectsResponse {
  /**
   * A list of objects organized by partition keys.
   *
   * @public
   */
  Objects?: PartitionObjects[] | undefined;

  /**
   * A continuation token indicating whether additional data is available.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetTemporaryDataLocationCredentialsRequest {
  /**
   * The time period, between 900 and 43,200 seconds, for the timeout of the temporary credentials.
   *
   * @public
   */
  DurationSeconds?: number | undefined;

  /**
   * A structure used to include auditing information on the privileged API.
   *
   * @public
   */
  AuditContext?: AuditContext | undefined;

  /**
   * The Amazon S3 data location that you want to access.
   *
   * @public
   */
  DataLocations?: string[] | undefined;

  /**
   * The credential scope is determined by the caller's Lake Formation permission on the associated table. Credential scope can be either:
   *
   * - READ - Provides read-only access to the data location.
   * - READ_WRITE - Provides both read and write access to the data location.
   *
   * @public
   */
  CredentialsScope?: CredentialsScope | undefined;
}

/**
 * A temporary set of credentials for an Lake Formation user. These credentials are scoped down to only access the raw data sources that the user has access to.
 *
 * The temporary security credentials consist of an access key and a session token. The access key consists of an access key ID and a secret key. When the credentials are created, they are associated with an IAM access control policy that limits what the user can do when using the credentials.
 *
 * @public
 */
export interface TemporaryCredentials {
  /**
   * The access key ID for the temporary credentials.
   *
   * @public
   */
  AccessKeyId?: string | undefined;

  /**
   * The secret key for the temporary credentials.
   *
   * @public
   */
  SecretAccessKey?: string | undefined;

  /**
   * The session token for the temporary credentials.
   *
   * @public
   */
  SessionToken?: string | undefined;

  /**
   * The date and time when the temporary credentials expire.
   *
   * @public
   */
  Expiration?: Date | undefined;
}

/**
 * @public
 */
export interface GetTemporaryDataLocationCredentialsResponse {
  /**
   * A temporary set of credentials for an Lake Formation user. These credentials are scoped down to only access the raw data sources that the user has access to.
   *
   * The temporary security credentials consist of an access key and a session token. The access key consists of an access key ID and a secret key. When the credentials are created, they are associated with an IAM access control policy that limits what the user can do when using the credentials.
   *
   * @public
   */
  Credentials?: TemporaryCredentials | undefined;

  /**
   * Refers to the Amazon S3 locations that can be accessed through the `GetTemporaryCredentialsForLocation` API operation.
   *
   * @public
   */
  AccessibleDataLocations?: string[] | undefined;

  /**
   * The credential scope is determined by the caller's Lake Formation permission on the associated table. Credential scope can be either:
   *
   * - READ - Provides read-only access to the data location.
   * - READ_WRITE - Provides both read and write access to the data location.
   *
   * @public
   */
  CredentialsScope?: CredentialsScope | undefined;
}

/**
 * Contains a list of values defining partitions.
 *
 * @public
 */
export interface PartitionValueList {
  /**
   * The list of partition values.
   *
   * @public
   */
  Values: string[] | undefined;
}

/**
 * @public
 */
export interface GetTemporaryGluePartitionCredentialsRequest {
  /**
   * The ARN of the partitions' table.
   *
   * @public
   */
  TableArn: string | undefined;

  /**
   * A list of partition values identifying a single partition.
   *
   * @public
   */
  Partition: PartitionValueList | undefined;

  /**
   * Filters the request based on the user having been granted a list of specified permissions on the requested resource(s).
   *
   * @public
   */
  Permissions?: Permission[] | undefined;

  /**
   * The time period, between 900 and 21,600 seconds, for the timeout of the temporary credentials.
   *
   * @public
   */
  DurationSeconds?: number | undefined;

  /**
   * A structure representing context to access a resource (column names, query ID, etc).
   *
   * @public
   */
  AuditContext?: AuditContext | undefined;

  /**
   * A list of supported permission types for the partition. Valid values are `COLUMN_PERMISSION` and `CELL_FILTER_PERMISSION`.
   *
   * @public
   */
  SupportedPermissionTypes?: PermissionType[] | undefined;
}

/**
 * @public
 */
export interface GetTemporaryGluePartitionCredentialsResponse {
  /**
   * The access key ID for the temporary credentials.
   *
   * @public
   */
  AccessKeyId?: string | undefined;

  /**
   * The secret key for the temporary credentials.
   *
   * @public
   */
  SecretAccessKey?: string | undefined;

  /**
   * The session token for the temporary credentials.
   *
   * @public
   */
  SessionToken?: string | undefined;

  /**
   * The date and time when the temporary credentials expire.
   *
   * @public
   */
  Expiration?: Date | undefined;
}

/**
 * A structure used as a protocol between query engines and Lake Formation or Glue. Contains both a Lake Formation generated authorization identifier and information from the request's authorization context.
 *
 * For more information about how to utilize QuerySessionContext, see [Lake Formation workflow for application integration API operations](https://docs.aws.amazon.com/lake-formation/latest/dg/api-overview.html) in the developer guide.
 *
 * @public
 */
export interface QuerySessionContext {
  /**
   * A unique identifier generated by the query engine for the query.
   *
   * @public
   */
  QueryId?: string | undefined;

  /**
   * A timestamp provided by the query engine for when the query started.
   *
   * @public
   */
  QueryStartTime?: Date | undefined;

  /**
   * An identifier string for the consumer cluster.
   *
   * @public
   */
  ClusterId?: string | undefined;

  /**
   * A cryptographically generated query identifier generated by Glue or Lake Formation.
   *
   * @public
   */
  QueryAuthorizationId?: string | undefined;

  /**
   * An opaque string-string map passed by the query engine.
   *
   * @public
   */
  AdditionalContext?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetTemporaryGlueTableCredentialsRequest {
  /**
   * The ARN identifying a table in the Data Catalog for the temporary credentials request.
   *
   * @public
   */
  TableArn: string | undefined;

  /**
   * Filters the request based on the user having been granted a list of specified permissions on the requested resource(s).
   *
   * @public
   */
  Permissions?: Permission[] | undefined;

  /**
   * The time period, between 900 and 21,600 seconds, for the timeout of the temporary credentials.
   *
   * @public
   */
  DurationSeconds?: number | undefined;

  /**
   * A structure representing context to access a resource (column names, query ID, etc).
   *
   * @public
   */
  AuditContext?: AuditContext | undefined;

  /**
   * A list of supported permission types for the table. Valid values are `COLUMN_PERMISSION` and `CELL_FILTER_PERMISSION`.
   *
   * @public
   */
  SupportedPermissionTypes?: PermissionType[] | undefined;

  /**
   * The Amazon S3 path for the table.
   *
   * @public
   */
  S3Path?: string | undefined;

  /**
   * A structure used as a protocol between query engines and Lake Formation or Glue. Contains both a Lake Formation generated authorization identifier and information from the request's authorization context.
   *
   * @public
   */
  QuerySessionContext?: QuerySessionContext | undefined;
}

/**
 * @public
 */
export interface GetTemporaryGlueTableCredentialsResponse {
  /**
   * The access key ID for the temporary credentials.
   *
   * @public
   */
  AccessKeyId?: string | undefined;

  /**
   * The secret key for the temporary credentials.
   *
   * @public
   */
  SecretAccessKey?: string | undefined;

  /**
   * The session token for the temporary credentials.
   *
   * @public
   */
  SessionToken?: string | undefined;

  /**
   * The date and time when the temporary credentials expire.
   *
   * @public
   */
  Expiration?: Date | undefined;

  /**
   * The Amazon S3 path for the temporary credentials.
   *
   * @public
   */
  VendedS3Path?: string[] | undefined;
}

/**
 * @public
 */
export interface GetWorkUnitResultsRequest {
  /**
   * The ID of the plan query operation for which to get results.
   *
   * @public
   */
  QueryId: string | undefined;

  /**
   * The work unit ID for which to get results. Value generated by enumerating `WorkUnitIdMin` to `WorkUnitIdMax` (inclusive) from the `WorkUnitRange` in the output of `GetWorkUnits`.
   *
   * @public
   */
  WorkUnitId: number | undefined;

  /**
   * A work token used to query the execution service. Token output from `GetWorkUnits`.
   *
   * @public
   */
  WorkUnitToken: string | undefined;
}

/**
 * A structure for the output.
 *
 * @public
 */
export interface GetWorkUnitResultsResponse {
  /**
   * Rows returned from the `GetWorkUnitResults` operation as a stream of Apache Arrow v1.0 messages.
   *
   * @public
   */
  ResultStream?: StreamingBlobTypes | undefined;
}

/**
 * @public
 */
export interface GetWorkUnitsRequest {
  /**
   * A continuation token, if this is a continuation call.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The size of each page to get in the Amazon Web Services service call. This does not affect the number of items returned in the command's output. Setting a smaller page size results in more calls to the Amazon Web Services service, retrieving fewer items in each call. This can help prevent the Amazon Web Services service calls from timing out.
   *
   * @public
   */
  PageSize?: number | undefined;

  /**
   * The ID of the plan query operation.
   *
   * @public
   */
  QueryId: string | undefined;
}

/**
 * Defines the valid range of work unit IDs for querying the execution service.
 *
 * @public
 */
export interface WorkUnitRange {
  /**
   * Defines the maximum work unit ID in the range. The maximum value is inclusive.
   *
   * @public
   */
  WorkUnitIdMax: number | undefined;

  /**
   * Defines the minimum work unit ID in the range.
   *
   * @public
   */
  WorkUnitIdMin: number | undefined;

  /**
   * A work token used to query the execution service.
   *
   * @public
   */
  WorkUnitToken: string | undefined;
}

/**
 * A structure for the output.
 *
 * @public
 */
export interface GetWorkUnitsResponse {
  /**
   * A continuation token for paginating the returned list of tokens, returned if the current segment of the list is not the last.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The ID of the plan query operation.
   *
   * @public
   */
  QueryId: string | undefined;

  /**
   * A `WorkUnitRangeList` object that specifies the valid range of work unit IDs for querying the execution service.
   *
   * @public
   */
  WorkUnitRanges: WorkUnitRange[] | undefined;
}

/**
 * @public
 */
export interface GrantPermissionsRequest {
  /**
   * The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment.
   *
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * The principal to be granted the permissions on the resource. Supported principals are IAM users or IAM roles, and they are defined by their principal type and their ARN.
   *
   * Note that if you define a resource with a particular ARN, then later delete, and recreate a resource with that same ARN, the resource maintains the permissions already granted.
   *
   * @public
   */
  Principal: DataLakePrincipal | undefined;

  /**
   * The resource to which permissions are to be granted. Resources in Lake Formation are the Data Catalog, databases, and tables.
   *
   * @public
   */
  Resource: Resource | undefined;

  /**
   * The permissions granted to the principal on the resource. Lake Formation defines privileges to grant and revoke access to metadata in the Data Catalog and data organized in underlying data storage such as Amazon S3. Lake Formation requires that each principal be authorized to perform a specific task on Lake Formation resources.
   *
   * @public
   */
  Permissions: Permission[] | undefined;

  /**
   * A Lake Formation condition, which applies to permissions and opt-ins that contain an expression.
   *
   * @public
   */
  Condition?: Condition | undefined;

  /**
   * Indicates a list of the granted permissions that the principal may pass to other users. These permissions may only be a subset of the permissions granted in the `Privileges`.
   *
   * @public
   */
  PermissionsWithGrantOption?: Permission[] | undefined;
}

/**
 * @public
 */
export interface GrantPermissionsResponse {}

/**
 * @public
 */
export interface ListDataCellsFilterRequest {
  /**
   * A table in the Glue Data Catalog.
   *
   * @public
   */
  Table?: TableResource | undefined;

  /**
   * A continuation token, if this is a continuation call.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum size of the response.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListDataCellsFilterResponse {
  /**
   * A list of `DataCellFilter` structures.
   *
   * @public
   */
  DataCellsFilters?: DataCellsFilter[] | undefined;

  /**
   * A continuation token, if not all requested data cell filters have been returned.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListLakeFormationOptInsRequest {
  /**
   * The Lake Formation principal. Supported principals are IAM users or IAM roles.
   *
   * @public
   */
  Principal?: DataLakePrincipal | undefined;

  /**
   * A structure for the resource.
   *
   * @public
   */
  Resource?: Resource | undefined;

  /**
   * The maximum number of results to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A continuation token, if this is not the first call to retrieve this list.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A single principal-resource pair that has Lake Formation permissins enforced.
 *
 * @public
 */
export interface LakeFormationOptInsInfo {
  /**
   * A structure for the resource.
   *
   * @public
   */
  Resource?: Resource | undefined;

  /**
   * The Lake Formation principal. Supported principals are IAM users or IAM roles.
   *
   * @public
   */
  Principal?: DataLakePrincipal | undefined;

  /**
   * A Lake Formation condition, which applies to permissions and opt-ins that contain an expression.
   *
   * @public
   */
  Condition?: Condition | undefined;

  /**
   * The last modified date and time of the record.
   *
   * @public
   */
  LastModified?: Date | undefined;

  /**
   * The user who updated the record.
   *
   * @public
   */
  LastUpdatedBy?: string | undefined;
}

/**
 * @public
 */
export interface ListLakeFormationOptInsResponse {
  /**
   * A list of principal-resource pairs that have Lake Formation permissins enforced.
   *
   * @public
   */
  LakeFormationOptInsInfoList?: LakeFormationOptInsInfo[] | undefined;

  /**
   * A continuation token, if this is not the first call to retrieve this list.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListLFTagExpressionsRequest {
  /**
   * The identifier for the Data Catalog. By default, the account ID.
   *
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * The maximum number of results to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A continuation token, if this is not the first call to retrieve this list.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A structure consists LF-Tag expression name and catalog ID.
 *
 * @public
 */
export interface LFTagExpression {
  /**
   * The name for saved the LF-Tag expression.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A structure that contains information about the LF-Tag expression.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The identifier for the Data Catalog. By default, the account ID.
   *
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * A logical expression composed of one or more LF-Tags.
   *
   * @public
   */
  Expression?: LFTag[] | undefined;
}

/**
 * @public
 */
export interface ListLFTagExpressionsResponse {
  /**
   * Logical expressions composed of one more LF-Tag key-value pairs.
   *
   * @public
   */
  LFTagExpressions?: LFTagExpression[] | undefined;

  /**
   * A continuation token, if this is not the first call to retrieve this list.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListLFTagsRequest {
  /**
   * The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment.
   *
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * If resource share type is `ALL`, returns both in-account LF-tags and shared LF-tags that the requester has permission to view. If resource share type is `FOREIGN`, returns all share LF-tags that the requester can view. If no resource share type is passed, lists LF-tags in the given catalog ID that the requester has permission to view.
   *
   * @public
   */
  ResourceShareType?: ResourceShareType | undefined;

  /**
   * The maximum number of results to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A continuation token, if this is not the first call to retrieve this list.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListLFTagsResponse {
  /**
   * A list of LF-tags that the requested has permission to view.
   *
   * @public
   */
  LFTags?: LFTagPair[] | undefined;

  /**
   * A continuation token, present if the current list segment is not the last.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPermissionsRequest {
  /**
   * The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment.
   *
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * Specifies a principal to filter the permissions returned.
   *
   * @public
   */
  Principal?: DataLakePrincipal | undefined;

  /**
   * Specifies a resource type to filter the permissions returned.
   *
   * @public
   */
  ResourceType?: DataLakeResourceType | undefined;

  /**
   * A resource where you will get a list of the principal permissions.
   *
   * This operation does not support getting privileges on a table with columns. Instead, call this operation on the table, and the operation returns the table and the table w columns.
   *
   * @public
   */
  Resource?: Resource | undefined;

  /**
   * A continuation token, if this is not the first call to retrieve this list.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Indicates that related permissions should be included in the results when listing permissions on a table resource.
   *
   * Set the field to `TRUE` to show the cell filters on a table resource. Default is `FALSE`. The Principal parameter must not be specified when requesting cell filter information.
   *
   * @public
   */
  IncludeRelated?: string | undefined;
}

/**
 * @public
 */
export interface ListPermissionsResponse {
  /**
   * A list of principals and their permissions on the resource for the specified principal and resource types.
   *
   * @public
   */
  PrincipalResourcePermissions?: PrincipalResourcePermissions[] | undefined;

  /**
   * A continuation token, if this is not the first call to retrieve this list.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * This structure describes the filtering of columns in a table based on a filter condition.
 *
 * @public
 */
export interface FilterCondition {
  /**
   * The field to filter in the filter condition.
   *
   * @public
   */
  Field?: FieldNameString | undefined;

  /**
   * The comparison operator used in the filter condition.
   *
   * @public
   */
  ComparisonOperator?: ComparisonOperator | undefined;

  /**
   * A string with values used in evaluating the filter condition.
   *
   * @public
   */
  StringValueList?: string[] | undefined;
}

/**
 * @public
 */
export interface ListResourcesRequest {
  /**
   * Any applicable row-level and/or column-level filtering conditions for the resources.
   *
   * @public
   */
  FilterConditionList?: FilterCondition[] | undefined;

  /**
   * The maximum number of resource results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A continuation token, if this is not the first call to retrieve these resources.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListResourcesResponse {
  /**
   * A summary of the data lake resources.
   *
   * @public
   */
  ResourceInfoList?: ResourceInfo[] | undefined;

  /**
   * A continuation token, if this is not the first call to retrieve these resources.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRLSPoliciesRequest {
  /**
   * The maximum number of row-level security policies to return in a single response.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A continuation token, if this is a continuation call.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRLSPoliciesResponse {
  /**
   * A list of `RLSPolicy` structures.
   *
   * @public
   */
  RLSPolicies?: RLSPolicy[] | undefined;

  /**
   * A continuation token, if not all row-level security policies have been returned.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRLSPolicyAttachmentsRequest {
  /**
   * If specified, returns only the attachments for the given resource.
   *
   * @public
   */
  Resource?: Resource | undefined;

  /**
   * If specified, returns only the attachments for the given principal.
   *
   * @public
   */
  Principal?: DataLakePrincipal | undefined;

  /**
   * If specified, returns only the attachments for the row-level security policy with this name.
   *
   * @public
   */
  PolicyName?: string | undefined;

  /**
   * The maximum number of attachments to return in a single response.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A continuation token, if this is a continuation call.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A structure that describes the attachment of a row-level security policy to a resource for a principal.
 *
 * @public
 */
export interface RLSPolicyAttachment {
  /**
   * The identifier for the Data Catalog that contains the attachment. By default, the account ID.
   *
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * The name of the attached row-level security policy.
   *
   * @public
   */
  PolicyName?: string | undefined;

  /**
   * The principal to which the attached policy applies.
   *
   * @public
   */
  Principal?: DataLakePrincipal | undefined;

  /**
   * The resource to which the policy is attached.
   *
   * @public
   */
  Resource?: Resource | undefined;

  /**
   * A Lake Formation condition, which applies to the row-level security policy attachment and contains an expression.
   *
   * @public
   */
  Condition?: Condition | undefined;

  /**
   * Indicates whether this attachment is the default row-level security policy for the resource.
   *
   * @public
   */
  DefaultRLSPolicy?: boolean | undefined;
}

/**
 * @public
 */
export interface ListRLSPolicyAttachmentsResponse {
  /**
   * A list of `RLSPolicyAttachment` structures.
   *
   * @public
   */
  RLSPolicyAttachments?: RLSPolicyAttachment[] | undefined;

  /**
   * A continuation token, if not all attachments have been returned.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTableStorageOptimizersRequest {
  /**
   * The Catalog ID of the table.
   *
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * Name of the database where the table is present.
   *
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * Name of the table.
   *
   * @public
   */
  TableName: string | undefined;

  /**
   * The specific type of storage optimizers to list. The supported value is `compaction`.
   *
   * @public
   */
  StorageOptimizerType?: OptimizerType | undefined;

  /**
   * The number of storage optimizers to return on each call.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A continuation token, if this is a continuation call.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A structure describing the configuration and details of a storage optimizer.
 *
 * @public
 */
export interface StorageOptimizer {
  /**
   * The specific type of storage optimizer. The supported value is `compaction`.
   *
   * @public
   */
  StorageOptimizerType?: OptimizerType | undefined;

  /**
   * A map of the storage optimizer configuration. Currently contains only one key-value pair: `is_enabled` indicates true or false for acceleration.
   *
   * @public
   */
  Config?: Record<string, string> | undefined;

  /**
   * A message that contains information about any error (if present).
   *
   * When an acceleration result has an enabled status, the error message is empty.
   *
   * When an acceleration result has a disabled status, the message describes an error or simply indicates "disabled by the user".
   *
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * A message that contains information about any warnings (if present).
   *
   * @public
   */
  Warnings?: string | undefined;

  /**
   * When an acceleration result has an enabled status, contains the details of the last job run.
   *
   * @public
   */
  LastRunDetails?: string | undefined;
}

/**
 * @public
 */
export interface ListTableStorageOptimizersResponse {
  /**
   * A list of the storage optimizers associated with a table.
   *
   * @public
   */
  StorageOptimizerList?: StorageOptimizer[] | undefined;

  /**
   * A continuation token for paginating the returned list of tokens, returned if the current segment of the list is not the last.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTransactionsRequest {
  /**
   * The catalog for which to list transactions. Defaults to the account ID of the caller.
   *
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * A filter indicating the status of transactions to return. Options are ALL | COMPLETED | COMMITTED | ABORTED | ACTIVE. The default is `ALL`.
   *
   * @public
   */
  StatusFilter?: TransactionStatusFilter | undefined;

  /**
   * The maximum number of transactions to return in a single call.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A continuation token if this is not the first call to retrieve transactions.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTransactionsResponse {
  /**
   * A list of transactions. The record for each transaction is a `TransactionDescription` object.
   *
   * @public
   */
  Transactions?: TransactionDescription[] | undefined;

  /**
   * A continuation token indicating whether additional data is available.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface PutDataLakeSettingsRequest {
  /**
   * The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment.
   *
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * A structure representing a list of Lake Formation principals designated as data lake administrators.
   *
   * @public
   */
  DataLakeSettings: DataLakeSettings | undefined;
}

/**
 * @public
 */
export interface PutDataLakeSettingsResponse {}

/**
 * @public
 */
export interface RegisterResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource that you want to register.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * Designates an Identity and Access Management (IAM) service-linked role by registering this role with the Data Catalog. A service-linked role is a unique type of IAM role that is linked directly to Lake Formation.
   *
   * For more information, see [Using Service-Linked Roles for Lake Formation](https://docs.aws.amazon.com/lake-formation/latest/dg/service-linked-roles.html).
   *
   * @public
   */
  UseServiceLinkedRole?: boolean | undefined;

  /**
   * The identifier for the role that registers the resource.
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * Whether or not the resource is a federated resource.
   *
   * @public
   */
  WithFederation?: boolean | undefined;

  /**
   * Specifies whether the data access of tables pointing to the location can be managed by both Lake Formation permissions as well as Amazon S3 bucket policies.
   *
   * @public
   */
  HybridAccessEnabled?: boolean | undefined;

  /**
   * Grants the calling principal the permissions to perform all supported Lake Formation operations on the registered data location.
   *
   * @public
   */
  WithPrivilegedAccess?: boolean | undefined;

  /**
   * The Amazon Web Services account that owns the Glue tables associated with specific Amazon S3 locations.
   *
   * @public
   */
  ExpectedResourceOwnerAccount?: string | undefined;
}

/**
 * @public
 */
export interface RegisterResourceResponse {}

/**
 * @public
 */
export interface RemoveLFTagsFromResourceRequest {
  /**
   * The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment.
   *
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * The database, table, or column resource where you want to remove an LF-tag.
   *
   * @public
   */
  Resource: Resource | undefined;

  /**
   * The LF-tags to be removed from the resource.
   *
   * @public
   */
  LFTags: LFTagPair[] | undefined;
}

/**
 * @public
 */
export interface RemoveLFTagsFromResourceResponse {
  /**
   * A list of failures to untag a resource.
   *
   * @public
   */
  Failures?: LFTagError[] | undefined;
}

/**
 * @public
 */
export interface RevokePermissionsRequest {
  /**
   * The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment.
   *
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * The principal to be revoked permissions on the resource.
   *
   * @public
   */
  Principal: DataLakePrincipal | undefined;

  /**
   * The resource to which permissions are to be revoked.
   *
   * @public
   */
  Resource: Resource | undefined;

  /**
   * The permissions revoked to the principal on the resource. For information about permissions, see [Security and Access Control to Metadata and Data](https://docs.aws.amazon.com/lake-formation/latest/dg/security-data-access.html).
   *
   * @public
   */
  Permissions: Permission[] | undefined;

  /**
   * A Lake Formation condition, which applies to permissions and opt-ins that contain an expression.
   *
   * @public
   */
  Condition?: Condition | undefined;

  /**
   * Indicates a list of permissions for which to revoke the grant option allowing the principal to pass permissions to other principals.
   *
   * @public
   */
  PermissionsWithGrantOption?: Permission[] | undefined;
}

/**
 * @public
 */
export interface RevokePermissionsResponse {}

/**
 * @public
 */
export interface SearchDatabasesByLFTagsRequest {
  /**
   * A continuation token, if this is not the first call to retrieve this list.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment.
   *
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * A list of conditions (`LFTag` structures) to search for in database resources.
   *
   * @public
   */
  Expression: LFTag[] | undefined;
}

/**
 * A structure describing a database resource with LF-tags.
 *
 * @public
 */
export interface TaggedDatabase {
  /**
   * A database that has LF-tags attached to it.
   *
   * @public
   */
  Database?: DatabaseResource | undefined;

  /**
   * A list of LF-tags attached to the database.
   *
   * @public
   */
  LFTags?: LFTagPair[] | undefined;
}

/**
 * @public
 */
export interface SearchDatabasesByLFTagsResponse {
  /**
   * A continuation token, present if the current list segment is not the last.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A list of databases that meet the LF-tag conditions.
   *
   * @public
   */
  DatabaseList?: TaggedDatabase[] | undefined;
}

/**
 * @public
 */
export interface SearchTablesByLFTagsRequest {
  /**
   * A continuation token, if this is not the first call to retrieve this list.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment.
   *
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * A list of conditions (`LFTag` structures) to search for in table resources.
   *
   * @public
   */
  Expression: LFTag[] | undefined;
}

/**
 * A structure describing a table resource with LF-tags.
 *
 * @public
 */
export interface TaggedTable {
  /**
   * A table that has LF-tags attached to it.
   *
   * @public
   */
  Table?: TableResource | undefined;

  /**
   * A list of LF-tags attached to the database where the table resides.
   *
   * @public
   */
  LFTagOnDatabase?: LFTagPair[] | undefined;

  /**
   * A list of LF-tags attached to the table.
   *
   * @public
   */
  LFTagsOnTable?: LFTagPair[] | undefined;

  /**
   * A list of LF-tags attached to columns in the table.
   *
   * @public
   */
  LFTagsOnColumns?: ColumnLFTag[] | undefined;
}

/**
 * @public
 */
export interface SearchTablesByLFTagsResponse {
  /**
   * A continuation token, present if the current list segment is not the last. On the first run, if you include a not null (a value) token you can get empty pages.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A list of tables that meet the LF-tag conditions.
   *
   * @public
   */
  TableList?: TaggedTable[] | undefined;
}

/**
 * A structure containing information about the query plan.
 *
 * @public
 */
export interface QueryPlanningContext {
  /**
   * The ID of the Data Catalog where the partition in question resides. If none is provided, the Amazon Web Services account ID is used by default.
   *
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * The database containing the table.
   *
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * The time as of when to read the table contents. If not set, the most recent transaction commit time will be used. Cannot be specified along with `TransactionId`.
   *
   * @public
   */
  QueryAsOfTime?: Date | undefined;

  /**
   * A map consisting of key-value pairs.
   *
   * @public
   */
  QueryParameters?: Record<string, string> | undefined;

  /**
   * The transaction ID at which to read the table contents. If this transaction is not committed, the read will be treated as part of that transaction and will see its writes. If this transaction has aborted, an error will be returned. If not set, defaults to the most recent committed transaction. Cannot be specified along with `QueryAsOfTime`.
   *
   * @public
   */
  TransactionId?: string | undefined;
}

/**
 * @public
 */
export interface StartQueryPlanningRequest {
  /**
   * A structure containing information about the query plan.
   *
   * @public
   */
  QueryPlanningContext: QueryPlanningContext | undefined;

  /**
   * A PartiQL query statement used as an input to the planner service.
   *
   * @public
   */
  QueryString: string | undefined;
}

/**
 * A structure for the output.
 *
 * @public
 */
export interface StartQueryPlanningResponse {
  /**
   * The ID of the plan query operation can be used to fetch the actual work unit descriptors that are produced as the result of the operation. The ID is also used to get the query state and as an input to the `Execute` operation.
   *
   * @public
   */
  QueryId: string | undefined;
}

/**
 * @public
 */
export interface StartTransactionRequest {
  /**
   * Indicates whether this transaction should be read only or read and write. Writes made using a read-only transaction ID will be rejected. Read-only transactions do not need to be committed.
   *
   * @public
   */
  TransactionType?: TransactionType | undefined;
}

/**
 * @public
 */
export interface StartTransactionResponse {
  /**
   * An opaque identifier for the transaction.
   *
   * @public
   */
  TransactionId?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDataCellsFilterRequest {
  /**
   * A `DataCellsFilter` structure containing information about the data cells filter.
   *
   * @public
   */
  TableData: DataCellsFilter | undefined;
}

/**
 * @public
 */
export interface UpdateDataCellsFilterResponse {}

/**
 * @public
 */
export interface UpdateLakeFormationIdentityCenterConfigurationRequest {
  /**
   * The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, view definitions, and other control information to manage your Lake Formation environment.
   *
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * A list of Amazon Web Services account IDs or Amazon Web Services organization/organizational unit ARNs that are allowed to access to access data managed by Lake Formation.
   *
   * If the `ShareRecipients` list includes valid values, then the resource share is updated with the principals you want to have access to the resources.
   *
   * If the `ShareRecipients` value is null, both the list of share recipients and the resource share remain unchanged.
   *
   * If the `ShareRecipients` value is an empty list, then the existing share recipients list will be cleared, and the resource share will be deleted.
   *
   * @public
   */
  ShareRecipients?: DataLakePrincipal[] | undefined;

  /**
   * A list of service integrations for enabling trusted identity propagation with external services such as Redshift.
   *
   * @public
   */
  ServiceIntegrations?: ServiceIntegrationUnion[] | undefined;

  /**
   * Allows to enable or disable the IAM Identity Center connection.
   *
   * @public
   */
  ApplicationStatus?: ApplicationStatus | undefined;

  /**
   * A list of the account IDs of Amazon Web Services accounts of third-party applications that are allowed to access data managed by Lake Formation.
   *
   * @public
   */
  ExternalFiltering?: ExternalFilteringConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateLakeFormationIdentityCenterConfigurationResponse {}

/**
 * @public
 */
export interface UpdateLFTagRequest {
  /**
   * The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment.
   *
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * The key-name for the LF-tag for which to add or delete values.
   *
   * @public
   */
  TagKey: string | undefined;

  /**
   * A list of LF-tag values to delete from the LF-tag.
   *
   * @public
   */
  TagValuesToDelete?: string[] | undefined;

  /**
   * A list of LF-tag values to add from the LF-tag.
   *
   * @public
   */
  TagValuesToAdd?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateLFTagResponse {}

/**
 * @public
 */
export interface UpdateLFTagExpressionRequest {
  /**
   * The name for the LF-Tag expression.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The description with information about the saved LF-Tag expression.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The identifier for the Data Catalog. By default, the account ID.
   *
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * The LF-Tag expression body composed of one more LF-Tag key-value pairs.
   *
   * @public
   */
  Expression: LFTag[] | undefined;
}

/**
 * @public
 */
export interface UpdateLFTagExpressionResponse {}

/**
 * @public
 */
export interface UpdateResourceRequest {
  /**
   * The new role to use for the given resource registered in Lake Formation.
   *
   * @public
   */
  RoleArn: string | undefined;

  /**
   * The resource ARN.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * Whether or not the resource is a federated resource.
   *
   * @public
   */
  WithFederation?: boolean | undefined;

  /**
   * Specifies whether the data access of tables pointing to the location can be managed by both Lake Formation permissions as well as Amazon S3 bucket policies.
   *
   * @public
   */
  HybridAccessEnabled?: boolean | undefined;

  /**
   * The Amazon Web Services account that owns the Glue tables associated with specific Amazon S3 locations.
   *
   * @public
   */
  ExpectedResourceOwnerAccount?: string | undefined;
}

/**
 * @public
 */
export interface UpdateResourceResponse {}

/**
 * @public
 */
export interface UpdateRLSPolicyRequest {
  /**
   * The name of the row-level security policy to update.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The new filter predicate, written in a SQL-like syntax, that replaces the policy's current filter expression.
   *
   * @public
   */
  FilterExpression?: string | undefined;
}

/**
 * @public
 */
export interface UpdateRLSPolicyResponse {}

/**
 * An object to delete from the governed table.
 *
 * @public
 */
export interface DeleteObjectInput {
  /**
   * The Amazon S3 location of the object to delete.
   *
   * @public
   */
  Uri: string | undefined;

  /**
   * The Amazon S3 ETag of the object. Returned by `GetTableObjects` for validation and used to identify changes to the underlying data.
   *
   * @public
   */
  ETag?: string | undefined;

  /**
   * A list of partition values for the object. A value must be specified for each partition key associated with the governed table.
   *
   * @public
   */
  PartitionValues?: string[] | undefined;
}

/**
 * Defines an object to add to or delete from a governed table.
 *
 * @public
 */
export interface WriteOperation {
  /**
   * A new object to add to the governed table.
   *
   * @public
   */
  AddObject?: AddObjectInput | undefined;

  /**
   * An object to delete from the governed table.
   *
   * @public
   */
  DeleteObject?: DeleteObjectInput | undefined;
}

/**
 * @public
 */
export interface UpdateTableObjectsRequest {
  /**
   * The catalog containing the governed table to update. Defaults to the caller’s account ID.
   *
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * The database containing the governed table to update.
   *
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * The governed table to update.
   *
   * @public
   */
  TableName: string | undefined;

  /**
   * The transaction at which to do the write.
   *
   * @public
   */
  TransactionId?: string | undefined;

  /**
   * A list of `WriteOperation` objects that define an object to add to or delete from the manifest for a governed table.
   *
   * @public
   */
  WriteOperations: WriteOperation[] | undefined;
}

/**
 * @public
 */
export interface UpdateTableObjectsResponse {}

/**
 * @public
 */
export interface UpdateTableStorageOptimizerRequest {
  /**
   * The Catalog ID of the table.
   *
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * Name of the database where the table is present.
   *
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * Name of the table for which to enable the storage optimizer.
   *
   * @public
   */
  TableName: string | undefined;

  /**
   * Name of the configuration for the storage optimizer.
   *
   * @public
   */
  StorageOptimizerConfig: Partial<Record<OptimizerType, Record<string, string>>> | undefined;
}

/**
 * @public
 */
export interface UpdateTableStorageOptimizerResponse {
  /**
   * A response indicating the success of failure of the operation.
   *
   * @public
   */
  Result?: string | undefined;
}
