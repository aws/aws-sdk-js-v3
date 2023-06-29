// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { CleanRoomsServiceException as __BaseException } from "./CleanRoomsServiceException";

/**
 * @public
 * @enum
 */
export const AccessDeniedExceptionReason = {
  INSUFFICIENT_PERMISSIONS: "INSUFFICIENT_PERMISSIONS",
} as const;

/**
 * @public
 */
export type AccessDeniedExceptionReason =
  (typeof AccessDeniedExceptionReason)[keyof typeof AccessDeniedExceptionReason];

/**
 * @public
 * <p>Caller does not have sufficient access to perform this action.</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * <p>A reason code for the exception.</p>
   */
  reason?: AccessDeniedExceptionReason | string;

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
    this.reason = opts.reason;
  }
}

/**
 * @public
 * @enum
 */
export const AggregateFunctionName = {
  AVG: "AVG",
  COUNT: "COUNT",
  COUNT_DISTINCT: "COUNT_DISTINCT",
  SUM: "SUM",
  SUM_DISTINCT: "SUM_DISTINCT",
} as const;

/**
 * @public
 */
export type AggregateFunctionName = (typeof AggregateFunctionName)[keyof typeof AggregateFunctionName];

/**
 * @public
 * <p>Column in configured table that can be used in aggregate function in query.</p>
 */
export interface AggregateColumn {
  /**
   * <p>Column names in configured table of aggregate columns.</p>
   */
  columnNames: string[] | undefined;

  /**
   * <p>Aggregation function that can be applied to aggregate column in query.</p>
   */
  function: AggregateFunctionName | string | undefined;
}

/**
 * @public
 * @enum
 */
export const AggregationType = {
  COUNT_DISTINCT: "COUNT_DISTINCT",
} as const;

/**
 * @public
 */
export type AggregationType = (typeof AggregationType)[keyof typeof AggregationType];

/**
 * @public
 * <p>Constraint on query output removing output rows that do not meet a minimum number of distinct values of a specified column.</p>
 */
export interface AggregationConstraint {
  /**
   * <p>Column in aggregation constraint for which there must be a minimum number of distinct values in an output row for it to be in the query output.</p>
   */
  columnName: string | undefined;

  /**
   * <p>The minimum number of distinct values that an output row must be an aggregation of.
   *          Minimum threshold of distinct values for a specified column that must exist in an output
   *          row for it to be in the query output.</p>
   */
  minimum: number | undefined;

  /**
   * <p>The type of aggregation the constraint allows. The only valid value is currently
   *          `COUNT_DISTINCT`.</p>
   */
  type: AggregationType | string | undefined;
}

/**
 * @public
 * @enum
 */
export const AnalysisMethod = {
  DIRECT_QUERY: "DIRECT_QUERY",
} as const;

/**
 * @public
 */
export type AnalysisMethod = (typeof AnalysisMethod)[keyof typeof AnalysisMethod];

/**
 * @public
 * @enum
 */
export const JoinOperator = {
  AND: "AND",
  OR: "OR",
} as const;

/**
 * @public
 */
export type JoinOperator = (typeof JoinOperator)[keyof typeof JoinOperator];

/**
 * @public
 * @enum
 */
export const JoinRequiredOption = {
  QUERY_RUNNER: "QUERY_RUNNER",
} as const;

/**
 * @public
 */
export type JoinRequiredOption = (typeof JoinRequiredOption)[keyof typeof JoinRequiredOption];

/**
 * @public
 * @enum
 */
export const ScalarFunctions = {
  ABS: "ABS",
  CAST: "CAST",
  CEILING: "CEILING",
  COALESCE: "COALESCE",
  FLOOR: "FLOOR",
  LN: "LN",
  LOG: "LOG",
  LOWER: "LOWER",
  ROUND: "ROUND",
  RTRIM: "RTRIM",
  SQRT: "SQRT",
  TRUNC: "TRUNC",
  UPPER: "UPPER",
} as const;

/**
 * @public
 */
export type ScalarFunctions = (typeof ScalarFunctions)[keyof typeof ScalarFunctions];

/**
 * @public
 * <p>Enables query structure and specified queries that produce aggregate statistics.</p>
 */
export interface AnalysisRuleAggregation {
  /**
   * <p>The columns that query runners are allowed to use in aggregation queries.</p>
   */
  aggregateColumns: AggregateColumn[] | undefined;

  /**
   * <p>Columns in configured table that can be used in join statements and/or as aggregate
   *          columns. They can never be outputted directly.</p>
   */
  joinColumns: string[] | undefined;

  /**
   * <p>Control that requires member who runs query to do a join with their configured table
   *          and/or other configured table in query.</p>
   */
  joinRequired?: JoinRequiredOption | string;

  /**
   * <p>Which logical operators (if any) are to be used in an INNER JOIN match condition.
   *          Default is <code>AND</code>.</p>
   */
  allowedJoinOperators?: (JoinOperator | string)[];

  /**
   * <p>The columns that query runners are allowed to select, group by, or filter by.</p>
   */
  dimensionColumns: string[] | undefined;

  /**
   * <p>Set of scalar functions that are allowed to be used on dimension columns and the output of aggregation of metrics.</p>
   */
  scalarFunctions: (ScalarFunctions | string)[] | undefined;

  /**
   * <p>Columns that must meet a specific threshold value (after an aggregation function is applied to it) for each output row to be returned.</p>
   */
  outputConstraints: AggregationConstraint[] | undefined;
}

/**
 * @public
 * <p>A type of analysis rule that enables row-level analysis.</p>
 */
export interface AnalysisRuleList {
  /**
   * <p>Columns that can be used to join a configured table with the table of the member who can query and other members' configured tables.</p>
   */
  joinColumns: string[] | undefined;

  /**
   * <p>Which logical operators (if any) are to be used in an INNER JOIN match condition.
   *          Default is <code>AND</code>.</p>
   */
  allowedJoinOperators?: (JoinOperator | string)[];

  /**
   * <p>Columns that can be listed in the output.</p>
   */
  listColumns: string[] | undefined;
}

/**
 * @public
 * <p>Controls on the query specifications that can be run on configured table..</p>
 */
export type AnalysisRulePolicyV1 =
  | AnalysisRulePolicyV1.AggregationMember
  | AnalysisRulePolicyV1.ListMember
  | AnalysisRulePolicyV1.$UnknownMember;

/**
 * @public
 */
export namespace AnalysisRulePolicyV1 {
  /**
   * <p>Analysis rule type that enables only list queries on a configured table.</p>
   */
  export interface ListMember {
    list: AnalysisRuleList;
    aggregation?: never;
    $unknown?: never;
  }

  /**
   * <p>Analysis rule type that enables only aggregation queries on a configured table.</p>
   */
  export interface AggregationMember {
    list?: never;
    aggregation: AnalysisRuleAggregation;
    $unknown?: never;
  }

  export interface $UnknownMember {
    list?: never;
    aggregation?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    list: (value: AnalysisRuleList) => T;
    aggregation: (value: AnalysisRuleAggregation) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: AnalysisRulePolicyV1, visitor: Visitor<T>): T => {
    if (value.list !== undefined) return visitor.list(value.list);
    if (value.aggregation !== undefined) return visitor.aggregation(value.aggregation);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * <p>Controls on the query specifications that can be run on configured table..</p>
 */
export type AnalysisRulePolicy = AnalysisRulePolicy.V1Member | AnalysisRulePolicy.$UnknownMember;

/**
 * @public
 */
export namespace AnalysisRulePolicy {
  /**
   * <p>Controls on the query specifications that can be run on configured table..</p>
   */
  export interface V1Member {
    v1: AnalysisRulePolicyV1;
    $unknown?: never;
  }

  export interface $UnknownMember {
    v1?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    v1: (value: AnalysisRulePolicyV1) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: AnalysisRulePolicy, visitor: Visitor<T>): T => {
    if (value.v1 !== undefined) return visitor.v1(value.v1);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const AnalysisRuleType = {
  AGGREGATION: "AGGREGATION",
  LIST: "LIST",
} as const;

/**
 * @public
 */
export type AnalysisRuleType = (typeof AnalysisRuleType)[keyof typeof AnalysisRuleType];

/**
 * @public
 * <p>A specification about how data from the configured table can be used in a query.</p>
 */
export interface AnalysisRule {
  /**
   * <p>The unique ID for the associated collaboration.</p>
   */
  collaborationId: string | undefined;

  /**
   * <p>The type of analysis rule. Valid values are `AGGREGATION` and `LIST`.</p>
   */
  type: AnalysisRuleType | string | undefined;

  /**
   * <p>The name for the analysis rule.</p>
   */
  name: string | undefined;

  /**
   * <p>The time the analysis rule was created.</p>
   */
  createTime: Date | undefined;

  /**
   * <p>The time the analysis rule was last updated.</p>
   */
  updateTime: Date | undefined;

  /**
   * <p>A policy that describes the associated data usage limitations.</p>
   */
  policy: AnalysisRulePolicy | undefined;
}

/**
 * @public
 */
export interface BatchGetSchemaInput {
  /**
   * <p>A unique identifier for the collaboration that the schemas belong to. Currently accepts
   *          collaboration ID.</p>
   */
  collaborationIdentifier: string | undefined;

  /**
   * <p>The names for the schema objects to retrieve.&gt;</p>
   */
  names: string[] | undefined;
}

/**
 * @public
 * <p>An error describing why a schema could not be fetched.</p>
 */
export interface BatchGetSchemaError {
  /**
   * <p>An error name for the error.</p>
   */
  name: string | undefined;

  /**
   * <p>An error code for the error. </p>
   */
  code: string | undefined;

  /**
   * <p>An error message for the error.</p>
   */
  message: string | undefined;
}

/**
 * @public
 * <p>A column within a schema relation, derived from the underlying Glue table.</p>
 */
export interface Column {
  /**
   * <p>The name of the column.</p>
   */
  name: string | undefined;

  /**
   * <p>The type of the column.</p>
   */
  type: string | undefined;
}

/**
 * @public
 * @enum
 */
export const SchemaType = {
  TABLE: "TABLE",
} as const;

/**
 * @public
 */
export type SchemaType = (typeof SchemaType)[keyof typeof SchemaType];

/**
 * @public
 * <p>A schema is a relation within a collaboration.</p>
 */
export interface Schema {
  /**
   * <p>The columns for the relation this schema represents.</p>
   */
  columns: Column[] | undefined;

  /**
   * <p>The partition keys for the dataset underlying this schema.</p>
   */
  partitionKeys: Column[] | undefined;

  /**
   * <p>The analysis rule types associated with the schema. Valued values are LIST and
   *          AGGREGATION. Currently, only one entry is present.</p>
   */
  analysisRuleTypes: (AnalysisRuleType | string)[] | undefined;

  /**
   * <p>The analysis method for the schema. The only valid value is currently
   *          DIRECT_QUERY.</p>
   */
  analysisMethod?: AnalysisMethod | string;

  /**
   * <p>The unique account ID for the Amazon Web Services account that owns the schema.</p>
   */
  creatorAccountId: string | undefined;

  /**
   * <p>A name for the schema. The schema relation is referred to by this name when queried by a protected query.</p>
   */
  name: string | undefined;

  /**
   * <p>The unique ID for the collaboration that the schema belongs to.</p>
   */
  collaborationId: string | undefined;

  /**
   * <p>The unique ARN for the collaboration that the schema belongs to.</p>
   */
  collaborationArn: string | undefined;

  /**
   * <p>A description for the schema.</p>
   */
  description: string | undefined;

  /**
   * <p>The time the schema was created.</p>
   */
  createTime: Date | undefined;

  /**
   * <p>The time the schema was last updated.</p>
   */
  updateTime: Date | undefined;

  /**
   * <p>The type of schema. The only valid value is currently `TABLE`.</p>
   */
  type: SchemaType | string | undefined;
}

/**
 * @public
 */
export interface BatchGetSchemaOutput {
  /**
   * <p>The retrieved list of schemas.</p>
   */
  schemas: Schema[] | undefined;

  /**
   * <p>Error reasons for schemas that could not be retrieved. One error is returned for every
   *          schema that could not be retrieved.</p>
   */
  errors: BatchGetSchemaError[] | undefined;
}

/**
 * @public
 * <p>Unexpected error during processing of request.</p>
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
 * @public
 * @enum
 */
export const ResourceType = {
  COLLABORATION: "COLLABORATION",
  CONFIGURED_TABLE: "CONFIGURED_TABLE",
  CONFIGURED_TABLE_ASSOCIATION: "CONFIGURED_TABLE_ASSOCIATION",
  MEMBERSHIP: "MEMBERSHIP",
} as const;

/**
 * @public
 */
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];

/**
 * @public
 * <p>Request references a resource which does not exist.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * <p>The Id of the missing resource.</p>
   */
  resourceId: string | undefined;

  /**
   * <p>The type of the missing resource.</p>
   */
  resourceType: ResourceType | string | undefined;

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
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
  }
}

/**
 * @public
 * <p>Request was denied due to request throttling.</p>
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
 * @public
 * <p>Describes validation errors for specific input parameters.</p>
 */
export interface ValidationExceptionField {
  /**
   * <p>The name of the input parameter.</p>
   */
  name: string | undefined;

  /**
   * <p>A message for the input validation error.</p>
   */
  message: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  FIELD_VALIDATION_FAILED: "FIELD_VALIDATION_FAILED",
  INVALID_CONFIGURATION: "INVALID_CONFIGURATION",
  INVALID_QUERY: "INVALID_QUERY",
} as const;

/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * @public
 * <p>The input fails to satisfy the specified constraints.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * <p>A reason code for the exception.</p>
   */
  reason?: ValidationExceptionReason | string;

  /**
   * <p>Validation errors for specific input parameters.</p>
   */
  fieldList?: ValidationExceptionField[];

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
    this.reason = opts.reason;
    this.fieldList = opts.fieldList;
  }
}

/**
 * @public
 * @enum
 */
export const MemberAbility = {
  CAN_QUERY: "CAN_QUERY",
  CAN_RECEIVE_RESULTS: "CAN_RECEIVE_RESULTS",
} as const;

/**
 * @public
 */
export type MemberAbility = (typeof MemberAbility)[keyof typeof MemberAbility];

/**
 * @public
 * <p>The settings for client-side encryption for cryptographic computing.</p>
 */
export interface DataEncryptionMetadata {
  /**
   * <p>Indicates whether encrypted tables can contain cleartext data (true) or are to cryptographically process every column (false).</p>
   */
  allowCleartext: boolean | undefined;

  /**
   * <p>Indicates whether Fingerprint columns can contain duplicate entries (true) or are to contain only non-repeated values (false).</p>
   */
  allowDuplicates: boolean | undefined;

  /**
   * <p>Indicates whether Fingerprint columns can be joined on any other Fingerprint column with a different name (true) or can only be joined on Fingerprint columns of the same name (false).</p>
   */
  allowJoinsOnColumnsWithDifferentNames: boolean | undefined;

  /**
   * <p>Indicates whether NULL values are to be copied as NULL to encrypted tables (true) or cryptographically processed (false).</p>
   */
  preserveNulls: boolean | undefined;
}

/**
 * @public
 * <p>Basic metadata used to construct a new member.</p>
 */
export interface MemberSpecification {
  /**
   * <p>The identifier used to reference members of the collaboration. Currently only supports Amazon Web Services account ID.</p>
   */
  accountId: string | undefined;

  /**
   * <p>The abilities granted to the collaboration member.</p>
   */
  memberAbilities: (MemberAbility | string)[] | undefined;

  /**
   * <p>The member's display name.</p>
   */
  displayName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const CollaborationQueryLogStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type CollaborationQueryLogStatus =
  (typeof CollaborationQueryLogStatus)[keyof typeof CollaborationQueryLogStatus];

/**
 * @public
 */
export interface CreateCollaborationInput {
  /**
   * <p>A list of initial members, not including the creator. This list is immutable.</p>
   */
  members: MemberSpecification[] | undefined;

  /**
   * <p>The display name for a collaboration.</p>
   */
  name: string | undefined;

  /**
   * <p>A description of the collaboration provided by the collaboration owner.</p>
   */
  description: string | undefined;

  /**
   * <p>The abilities granted to the collaboration creator.</p>
   */
  creatorMemberAbilities: (MemberAbility | string)[] | undefined;

  /**
   * <p>The display name of the collaboration creator.</p>
   */
  creatorDisplayName: string | undefined;

  /**
   * <p>The settings for client-side encryption with Cryptographic Computing for Clean Rooms.</p>
   */
  dataEncryptionMetadata?: DataEncryptionMetadata;

  /**
   * <p>An indicator as to whether query logging has been enabled or disabled for the
   *          collaboration.</p>
   */
  queryLogStatus: CollaborationQueryLogStatus | string | undefined;

  /**
   * <p>An optional label that you can assign to a resource when you create it. Each tag
   *          consists of a key and an optional value, both of which you define. When you use tagging,
   *          you can also use tag-based access control in IAM policies to control access to this
   *          resource.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 * @enum
 */
export const MemberStatus = {
  ACTIVE: "ACTIVE",
  INVITED: "INVITED",
  LEFT: "LEFT",
  REMOVED: "REMOVED",
} as const;

/**
 * @public
 */
export type MemberStatus = (typeof MemberStatus)[keyof typeof MemberStatus];

/**
 * @public
 * <p>The multi-party data share environment. The collaboration contains metadata about its purpose and participants.</p>
 */
export interface Collaboration {
  /**
   * <p>The unique ID for the collaboration.</p>
   */
  id: string | undefined;

  /**
   * <p>The unique ARN for the collaboration.</p>
   */
  arn: string | undefined;

  /**
   * <p>A human-readable identifier provided by the collaboration owner. Display names are not unique.</p>
   */
  name: string | undefined;

  /**
   * <p>A description of the collaboration provided by the collaboration owner.</p>
   */
  description?: string;

  /**
   * <p>The identifier used to reference members of the collaboration. Currently only supports Amazon Web Services account ID.</p>
   */
  creatorAccountId: string | undefined;

  /**
   * <p>A display name of the collaboration creator.</p>
   */
  creatorDisplayName: string | undefined;

  /**
   * <p>The time when the collaboration was created.</p>
   */
  createTime: Date | undefined;

  /**
   * <p>The time the collaboration metadata was last updated.</p>
   */
  updateTime: Date | undefined;

  /**
   * <p>The status of a member in a collaboration.</p>
   */
  memberStatus: MemberStatus | string | undefined;

  /**
   * <p>The unique ID for your membership within the collaboration.</p>
   */
  membershipId?: string;

  /**
   * <p>The unique ARN for your membership within the collaboration.</p>
   */
  membershipArn?: string;

  /**
   * <p>The settings for client-side encryption for cryptographic computing.</p>
   */
  dataEncryptionMetadata?: DataEncryptionMetadata;

  /**
   * <p>An indicator as to whether query logging has been enabled or disabled for the
   *          collaboration.</p>
   */
  queryLogStatus: CollaborationQueryLogStatus | string | undefined;
}

/**
 * @public
 */
export interface CreateCollaborationOutput {
  /**
   * <p>The entire created collaboration object.</p>
   */
  collaboration: Collaboration | undefined;
}

/**
 * @public
 * <p>Request denied because service quota has been exceeded.</p>
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * <p>The name of the quota.</p>
   */
  quotaName: string | undefined;

  /**
   * <p>The value of the quota.</p>
   */
  quotaValue: number | undefined;

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
    this.quotaName = opts.quotaName;
    this.quotaValue = opts.quotaValue;
  }
}

/**
 * @public
 */
export interface DeleteCollaborationInput {
  /**
   * <p>The identifier for the collaboration.</p>
   */
  collaborationIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteCollaborationOutput {}

/**
 * @public
 * @enum
 */
export const ConflictExceptionReason = {
  ALREADY_EXISTS: "ALREADY_EXISTS",
  INVALID_STATE: "INVALID_STATE",
  SUBRESOURCES_EXIST: "SUBRESOURCES_EXIST",
} as const;

/**
 * @public
 */
export type ConflictExceptionReason = (typeof ConflictExceptionReason)[keyof typeof ConflictExceptionReason];

/**
 * @public
 * <p>Updating or deleting a resource can cause an inconsistent state.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * <p>The ID of the conflicting resource.</p>
   */
  resourceId?: string;

  /**
   * <p>The type of the conflicting resource.</p>
   */
  resourceType?: ResourceType | string;

  /**
   * <p>A reason code for the exception.</p>
   */
  reason?: ConflictExceptionReason | string;

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
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
    this.reason = opts.reason;
  }
}

/**
 * @public
 */
export interface DeleteMemberInput {
  /**
   * <p>The unique identifier for the associated collaboration.</p>
   */
  collaborationIdentifier: string | undefined;

  /**
   * <p>The account ID of the member to remove.</p>
   */
  accountId: string | undefined;
}

/**
 * @public
 */
export interface DeleteMemberOutput {}

/**
 * @public
 */
export interface GetCollaborationInput {
  /**
   * <p>The identifier for the collaboration.</p>
   */
  collaborationIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetCollaborationOutput {
  /**
   * <p>The entire collaboration for this identifier.</p>
   */
  collaboration: Collaboration | undefined;
}

/**
 * @public
 */
export interface GetSchemaInput {
  /**
   * <p>A unique identifier for the collaboration that the schema belongs to. Currently accepts
   *          a collaboration ID.</p>
   */
  collaborationIdentifier: string | undefined;

  /**
   * <p>The name of the relation to retrieve the schema for.</p>
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface GetSchemaOutput {
  /**
   * <p>The entire schema object.</p>
   */
  schema: Schema | undefined;
}

/**
 * @public
 */
export interface GetSchemaAnalysisRuleInput {
  /**
   * <p>A unique identifier for the collaboration that the schema belongs to. Currently accepts
   *          a collaboration ID.</p>
   */
  collaborationIdentifier: string | undefined;

  /**
   * <p>The name of the schema to retrieve the analysis rule for.</p>
   */
  name: string | undefined;

  /**
   * <p>The type of the schema analysis rule to retrieve. Schema analysis rules are uniquely identified by a combination of the collaboration, the schema name, and their type.</p>
   */
  type: AnalysisRuleType | string | undefined;
}

/**
 * @public
 */
export interface GetSchemaAnalysisRuleOutput {
  /**
   * <p>A specification about how data from the configured table can be used.</p>
   */
  analysisRule: AnalysisRule | undefined;
}

/**
 * @public
 * @enum
 */
export const FilterableMemberStatus = {
  ACTIVE: "ACTIVE",
  INVITED: "INVITED",
} as const;

/**
 * @public
 */
export type FilterableMemberStatus = (typeof FilterableMemberStatus)[keyof typeof FilterableMemberStatus];

/**
 * @public
 */
export interface ListCollaborationsInput {
  /**
   * <p>The token value retrieved from a previous call to access the next page of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum size of the results that is returned per call. Service chooses a default if
   *          it has not been set. Service may return a nextToken even if the maximum results has not
   *          been met.</p>
   */
  maxResults?: number;

  /**
   * <p>The caller's status in a collaboration.</p>
   */
  memberStatus?: FilterableMemberStatus | string;
}

/**
 * @public
 * <p>The metadata of the collaboration.</p>
 */
export interface CollaborationSummary {
  /**
   * <p>The identifier for the collaboration.</p>
   */
  id: string | undefined;

  /**
   * <p>The ARN of the collaboration.</p>
   */
  arn: string | undefined;

  /**
   * <p>A human-readable identifier provided by the collaboration owner. Display names are not unique.</p>
   */
  name: string | undefined;

  /**
   * <p>The identifier used to reference members of the collaboration. Currently only supports Amazon Web Services account ID.</p>
   */
  creatorAccountId: string | undefined;

  /**
   * <p>The display name of the collaboration creator.</p>
   */
  creatorDisplayName: string | undefined;

  /**
   * <p>The time when the collaboration was created.</p>
   */
  createTime: Date | undefined;

  /**
   * <p>The time the collaboration metadata was last updated.</p>
   */
  updateTime: Date | undefined;

  /**
   * <p>The status of a member in a collaboration.</p>
   */
  memberStatus: MemberStatus | string | undefined;

  /**
   * <p>The identifier of a member in a collaboration.</p>
   */
  membershipId?: string;

  /**
   * <p>The ARN of a member in a collaboration.</p>
   */
  membershipArn?: string;
}

/**
 * @public
 */
export interface ListCollaborationsOutput {
  /**
   * <p>The token value retrieved from a previous call to access the next page of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The list of collaborations.</p>
   */
  collaborationList: CollaborationSummary[] | undefined;
}

/**
 * @public
 */
export interface ListMembersInput {
  /**
   * <p>The identifier of the collaboration in which the members are listed.</p>
   */
  collaborationIdentifier: string | undefined;

  /**
   * <p>The token value retrieved from a previous call to access the next page of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum size of the results that is returned per call.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>The member object listed by the request.</p>
 */
export interface MemberSummary {
  /**
   * <p>The identifier used to reference members of the collaboration. Currently only supports Amazon Web Services account ID.</p>
   */
  accountId: string | undefined;

  /**
   * <p>The status of the member. Valid values are `INVITED`, `ACTIVE`, `LEFT`, and `REMOVED`.</p>
   */
  status: MemberStatus | string | undefined;

  /**
   * <p>The member's display name.</p>
   */
  displayName: string | undefined;

  /**
   * <p>The abilities granted to the collaboration member.</p>
   */
  abilities: (MemberAbility | string)[] | undefined;

  /**
   * <p>The time when the member was created.</p>
   */
  createTime: Date | undefined;

  /**
   * <p>The time the member metadata was last updated.</p>
   */
  updateTime: Date | undefined;

  /**
   * <p>The unique ID for the member's associated membership, if present.</p>
   */
  membershipId?: string;

  /**
   * <p>The unique ARN for the member's associated membership, if present.</p>
   */
  membershipArn?: string;
}

/**
 * @public
 */
export interface ListMembersOutput {
  /**
   * <p>The token value retrieved from a previous call to access the next page of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The list of members returned by the ListMembers operation.</p>
   */
  memberSummaries: MemberSummary[] | undefined;
}

/**
 * @public
 */
export interface ListSchemasInput {
  /**
   * <p>A unique identifier for the collaboration that the schema belongs to. Currently accepts
   *          a collaboration ID.</p>
   */
  collaborationIdentifier: string | undefined;

  /**
   * <p>If present, filter schemas by schema type. The only valid schema type is currently `TABLE`.</p>
   */
  schemaType?: SchemaType | string;

  /**
   * <p>The token value retrieved from a previous call to access the next page of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum size of the results that is returned per call.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>The schema summary for the objects listed by the request.</p>
 */
export interface SchemaSummary {
  /**
   * <p>The name for the schema object.</p>
   */
  name: string | undefined;

  /**
   * <p>The type of schema object. The only valid schema type is currently `TABLE`.</p>
   */
  type: SchemaType | string | undefined;

  /**
   * <p>The unique account ID for the Amazon Web Services account that owns the schema.</p>
   */
  creatorAccountId: string | undefined;

  /**
   * <p>The time the schema object was created.</p>
   */
  createTime: Date | undefined;

  /**
   * <p>The time the schema object was last updated.</p>
   */
  updateTime: Date | undefined;

  /**
   * <p>The unique ID for the collaboration that the schema belongs to.</p>
   */
  collaborationId: string | undefined;

  /**
   * <p>The unique ARN for the collaboration that the schema belongs to.</p>
   */
  collaborationArn: string | undefined;

  /**
   * <p>The types of analysis rules that are associated with this schema object.</p>
   */
  analysisRuleTypes: (AnalysisRuleType | string)[] | undefined;

  /**
   * <p>The analysis method for the associated schema. The only valid value is currently `DIRECT_QUERY`.</p>
   */
  analysisMethod?: AnalysisMethod | string;
}

/**
 * @public
 */
export interface ListSchemasOutput {
  /**
   * <p>The retrieved list of schemas.</p>
   */
  schemaSummaries: SchemaSummary[] | undefined;

  /**
   * <p>The token value retrieved from a previous call to access the next page of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface UpdateCollaborationInput {
  /**
   * <p>The identifier for the collaboration.</p>
   */
  collaborationIdentifier: string | undefined;

  /**
   * <p>A human-readable identifier provided by the collaboration owner. Display names are not unique.</p>
   */
  name?: string;

  /**
   * <p>A description of the collaboration.</p>
   */
  description?: string;
}

/**
 * @public
 */
export interface UpdateCollaborationOutput {
  /**
   * <p>The entire collaboration that has been updated.</p>
   */
  collaboration: Collaboration | undefined;
}

/**
 * @public
 */
export interface CreateConfiguredTableAssociationInput {
  /**
   * <p>The name of the configured table association. This name is used to query the underlying
   *          configured table.</p>
   */
  name: string | undefined;

  /**
   * <p>A description for the configured table association.</p>
   */
  description?: string;

  /**
   * <p>A unique identifier for one of your memberships for a collaboration. The configured
   *          table is associated to the collaboration that this membership belongs to. Currently accepts
   *          a membership ID.</p>
   */
  membershipIdentifier: string | undefined;

  /**
   * <p>A unique identifier for the configured table to be associated to. Currently accepts a
   *          configured table ID.</p>
   */
  configuredTableIdentifier: string | undefined;

  /**
   * <p>The service will assume this role to access catalog metadata and query the table.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>An optional label that you can assign to a resource when you create it. Each tag
   *          consists of a key and an optional value, both of which you define. When you use tagging,
   *          you can also use tag-based access control in IAM policies to control access to this
   *          resource.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 * <p>A configured table association links a configured table to a collaboration.</p>
 */
export interface ConfiguredTableAssociation {
  /**
   * <p>The unique ARN for the configured table association.</p>
   */
  arn: string | undefined;

  /**
   * <p>The unique ID for the configured table association.</p>
   */
  id: string | undefined;

  /**
   * <p>The unique ID for the configured table that the association refers to.</p>
   */
  configuredTableId: string | undefined;

  /**
   * <p>The unique ARN for the configured table that the association refers to.</p>
   */
  configuredTableArn: string | undefined;

  /**
   * <p>The unique ID for the membership this configured table association belongs to.</p>
   */
  membershipId: string | undefined;

  /**
   * <p>The unique ARN for the membership this configured table association belongs to.</p>
   */
  membershipArn: string | undefined;

  /**
   * <p>The service will assume this role to access catalog metadata and query the table.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>The name of the configured table association, in lowercase. The table is identified by this name when running protected queries against the underlying data.</p>
   */
  name: string | undefined;

  /**
   * <p>A description of the configured table association.</p>
   */
  description?: string;

  /**
   * <p>The time the configured table association was created.</p>
   */
  createTime: Date | undefined;

  /**
   * <p>The time the configured table association was last updated.</p>
   */
  updateTime: Date | undefined;
}

/**
 * @public
 */
export interface CreateConfiguredTableAssociationOutput {
  /**
   * <p>The entire configured table association object.</p>
   */
  configuredTableAssociation: ConfiguredTableAssociation | undefined;
}

/**
 * @public
 */
export interface DeleteConfiguredTableAssociationInput {
  /**
   * <p>The unique ID for the configured table association to be deleted. Currently accepts the configured table ID.</p>
   */
  configuredTableAssociationIdentifier: string | undefined;

  /**
   * <p>A unique identifier for the membership that the configured table association belongs to.
   *          Currently accepts the membership ID.</p>
   */
  membershipIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteConfiguredTableAssociationOutput {}

/**
 * @public
 */
export interface GetConfiguredTableAssociationInput {
  /**
   * <p>The unique ID for the configured table association to retrieve. Currently accepts the configured table ID.</p>
   */
  configuredTableAssociationIdentifier: string | undefined;

  /**
   * <p>A unique identifier for the membership that the configured table association belongs to.
   *          Currently accepts the membership ID.</p>
   */
  membershipIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetConfiguredTableAssociationOutput {
  /**
   * <p>The entire configured table association object.</p>
   */
  configuredTableAssociation: ConfiguredTableAssociation | undefined;
}

/**
 * @public
 */
export interface ListConfiguredTableAssociationsInput {
  /**
   * <p>A unique identifier for the membership to list configured table associations for. Currently accepts the membership ID.</p>
   */
  membershipIdentifier: string | undefined;

  /**
   * <p>The token value retrieved from a previous call to access the next page of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum size of the results that is returned per call.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>The configured table association summary for the objects listed by the request.</p>
 */
export interface ConfiguredTableAssociationSummary {
  /**
   * <p>The unique configured table ID that this configured table association refers to.</p>
   */
  configuredTableId: string | undefined;

  /**
   * <p>The unique ID for the membership that the configured table association belongs
   *          to.</p>
   */
  membershipId: string | undefined;

  /**
   * <p>The unique ARN for the membership that the configured table association belongs
   *          to.</p>
   */
  membershipArn: string | undefined;

  /**
   * <p>The name of the configured table association. The table is identified by this name when running Protected Queries against the underlying data.</p>
   */
  name: string | undefined;

  /**
   * <p>The time the configured table association was created.</p>
   */
  createTime: Date | undefined;

  /**
   * <p>The time the configured table association was last updated.</p>
   */
  updateTime: Date | undefined;

  /**
   * <p>The unique ID for the configured table association.</p>
   */
  id: string | undefined;

  /**
   * <p>The unique ARN for the configured table association.</p>
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface ListConfiguredTableAssociationsOutput {
  /**
   * <p>The retrieved list of configured table associations.</p>
   */
  configuredTableAssociationSummaries: ConfiguredTableAssociationSummary[] | undefined;

  /**
   * <p>The token value retrieved from a previous call to access the next page of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface UpdateConfiguredTableAssociationInput {
  /**
   * <p>The unique identifier for the configured table association to update. Currently accepts the configured table association ID.</p>
   */
  configuredTableAssociationIdentifier: string | undefined;

  /**
   * <p>The unique ID for the membership that the configured table association belongs
   *          to.</p>
   */
  membershipIdentifier: string | undefined;

  /**
   * <p>A new description for the configured table association.</p>
   */
  description?: string;

  /**
   * <p>The service will assume this role to access catalog metadata and query the table.</p>
   */
  roleArn?: string;
}

/**
 * @public
 */
export interface UpdateConfiguredTableAssociationOutput {
  /**
   * <p>The entire updated configured table association.</p>
   */
  configuredTableAssociation: ConfiguredTableAssociation | undefined;
}

/**
 * @public
 * <p>A reference to a table within an Glue data catalog.</p>
 */
export interface GlueTableReference {
  /**
   * <p>The name of the Glue table.</p>
   */
  tableName: string | undefined;

  /**
   * <p>The name of the database the Glue table belongs to.</p>
   */
  databaseName: string | undefined;
}

/**
 * @public
 * <p>A pointer to the dataset that underlies this table. Currently, this can only be an Glue table.</p>
 */
export type TableReference = TableReference.GlueMember | TableReference.$UnknownMember;

/**
 * @public
 */
export namespace TableReference {
  /**
   * <p>If present, a reference to the Glue table referred to by this table
   *          reference.</p>
   */
  export interface GlueMember {
    glue: GlueTableReference;
    $unknown?: never;
  }

  export interface $UnknownMember {
    glue?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    glue: (value: GlueTableReference) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: TableReference, visitor: Visitor<T>): T => {
    if (value.glue !== undefined) return visitor.glue(value.glue);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface CreateConfiguredTableInput {
  /**
   * <p>The name of the configured table.</p>
   */
  name: string | undefined;

  /**
   * <p>A description for the configured table.</p>
   */
  description?: string;

  /**
   * <p>A reference to the Glue table being configured.</p>
   */
  tableReference: TableReference | undefined;

  /**
   * <p>The columns of the underlying table that can be used by collaborations or analysis rules.</p>
   */
  allowedColumns: string[] | undefined;

  /**
   * <p>The analysis method for the configured tables. The only valid value is currently `DIRECT_QUERY`.</p>
   */
  analysisMethod: AnalysisMethod | string | undefined;

  /**
   * <p>An optional label that you can assign to a resource when you create it. Each tag
   *          consists of a key and an optional value, both of which you define. When you use tagging,
   *          you can also use tag-based access control in IAM policies to control access to this
   *          resource.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 * @enum
 */
export const ConfiguredTableAnalysisRuleType = {
  AGGREGATION: "AGGREGATION",
  LIST: "LIST",
} as const;

/**
 * @public
 */
export type ConfiguredTableAnalysisRuleType =
  (typeof ConfiguredTableAnalysisRuleType)[keyof typeof ConfiguredTableAnalysisRuleType];

/**
 * @public
 * <p>A table that has been configured for use in a collaboration.</p>
 */
export interface ConfiguredTable {
  /**
   * <p>The unique ID for the configured table.</p>
   */
  id: string | undefined;

  /**
   * <p>The unique ARN for the configured table.</p>
   */
  arn: string | undefined;

  /**
   * <p>A name for the configured table.</p>
   */
  name: string | undefined;

  /**
   * <p>A description for the configured table.</p>
   */
  description?: string;

  /**
   * <p>The Glue table that this configured table represents.</p>
   */
  tableReference: TableReference | undefined;

  /**
   * <p>The time the configured table was created.</p>
   */
  createTime: Date | undefined;

  /**
   * <p>The time the configured table was last updated</p>
   */
  updateTime: Date | undefined;

  /**
   * <p>The types of analysis rules associated with this configured table. Valid values are `AGGREGATION` and `LIST`. Currently, only one analysis rule may be associated with a configured table.</p>
   */
  analysisRuleTypes: (ConfiguredTableAnalysisRuleType | string)[] | undefined;

  /**
   * <p>The analysis method for the configured table. The only valid value is currently `DIRECT_QUERY`.</p>
   */
  analysisMethod: AnalysisMethod | string | undefined;

  /**
   * <p>The columns within the underlying Glue table that can be utilized within
   *          collaborations.</p>
   */
  allowedColumns: string[] | undefined;
}

/**
 * @public
 */
export interface CreateConfiguredTableOutput {
  /**
   * <p>The created configured table.</p>
   */
  configuredTable: ConfiguredTable | undefined;
}

/**
 * @public
 * <p>Controls on the query specifications that can be run on a configured table.</p>
 */
export type ConfiguredTableAnalysisRulePolicyV1 =
  | ConfiguredTableAnalysisRulePolicyV1.AggregationMember
  | ConfiguredTableAnalysisRulePolicyV1.ListMember
  | ConfiguredTableAnalysisRulePolicyV1.$UnknownMember;

/**
 * @public
 */
export namespace ConfiguredTableAnalysisRulePolicyV1 {
  /**
   * <p>Analysis rule type that enables only list queries on a configured table.</p>
   */
  export interface ListMember {
    list: AnalysisRuleList;
    aggregation?: never;
    $unknown?: never;
  }

  /**
   * <p>Analysis rule type that enables only aggregation queries on a configured table.</p>
   */
  export interface AggregationMember {
    list?: never;
    aggregation: AnalysisRuleAggregation;
    $unknown?: never;
  }

  export interface $UnknownMember {
    list?: never;
    aggregation?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    list: (value: AnalysisRuleList) => T;
    aggregation: (value: AnalysisRuleAggregation) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ConfiguredTableAnalysisRulePolicyV1, visitor: Visitor<T>): T => {
    if (value.list !== undefined) return visitor.list(value.list);
    if (value.aggregation !== undefined) return visitor.aggregation(value.aggregation);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * <p>Controls on the query specifications that can be run on a configured table.</p>
 */
export type ConfiguredTableAnalysisRulePolicy =
  | ConfiguredTableAnalysisRulePolicy.V1Member
  | ConfiguredTableAnalysisRulePolicy.$UnknownMember;

/**
 * @public
 */
export namespace ConfiguredTableAnalysisRulePolicy {
  /**
   * <p>Controls on the query specifications that can be run on a configured table.</p>
   */
  export interface V1Member {
    v1: ConfiguredTableAnalysisRulePolicyV1;
    $unknown?: never;
  }

  export interface $UnknownMember {
    v1?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    v1: (value: ConfiguredTableAnalysisRulePolicyV1) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ConfiguredTableAnalysisRulePolicy, visitor: Visitor<T>): T => {
    if (value.v1 !== undefined) return visitor.v1(value.v1);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface CreateConfiguredTableAnalysisRuleInput {
  /**
   * <p>The identifier for the configured table to create the analysis rule for. Currently accepts the configured table ID. </p>
   */
  configuredTableIdentifier: string | undefined;

  /**
   * <p>The type of analysis rule. Valid values are AGGREGATION and LIST.</p>
   */
  analysisRuleType: ConfiguredTableAnalysisRuleType | string | undefined;

  /**
   * <p>The entire created configured table analysis rule object.</p>
   */
  analysisRulePolicy: ConfiguredTableAnalysisRulePolicy | undefined;
}

/**
 * @public
 * <p>A configured table analysis rule, which limits how data for this table can be used.</p>
 */
export interface ConfiguredTableAnalysisRule {
  /**
   * <p>The unique ID for the configured table.</p>
   */
  configuredTableId: string | undefined;

  /**
   * <p>The unique ARN for the configured table.</p>
   */
  configuredTableArn: string | undefined;

  /**
   * <p>The policy that controls SQL query rules.</p>
   */
  policy: ConfiguredTableAnalysisRulePolicy | undefined;

  /**
   * <p>The type of configured table analysis rule. Valid values are `AGGREGATION` and `LIST`.</p>
   */
  type: ConfiguredTableAnalysisRuleType | string | undefined;

  /**
   * <p>The time the configured table analysis rule was created.</p>
   */
  createTime: Date | undefined;

  /**
   * <p>The time the configured table analysis rule was last updated.</p>
   */
  updateTime: Date | undefined;
}

/**
 * @public
 */
export interface CreateConfiguredTableAnalysisRuleOutput {
  /**
   * <p>The entire created analysis rule.</p>
   */
  analysisRule: ConfiguredTableAnalysisRule | undefined;
}

/**
 * @public
 */
export interface DeleteConfiguredTableInput {
  /**
   * <p>The unique ID for the configured table to delete.</p>
   */
  configuredTableIdentifier: string | undefined;
}

/**
 * @public
 * <p>The empty output for a successful deletion.</p>
 */
export interface DeleteConfiguredTableOutput {}

/**
 * @public
 */
export interface DeleteConfiguredTableAnalysisRuleInput {
  /**
   * <p>The unique identifier for the configured table that the analysis rule applies to.
   *          Currently accepts the configured table ID.</p>
   */
  configuredTableIdentifier: string | undefined;

  /**
   * <p>The analysis rule type to be deleted. Configured table analysis rules are uniquely identified by their configured table identifier and analysis rule type.</p>
   */
  analysisRuleType: ConfiguredTableAnalysisRuleType | string | undefined;
}

/**
 * @public
 * <p>An empty response that indicates a successful delete.</p>
 */
export interface DeleteConfiguredTableAnalysisRuleOutput {}

/**
 * @public
 */
export interface GetConfiguredTableInput {
  /**
   * <p>The unique ID for the configured table to retrieve.</p>
   */
  configuredTableIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetConfiguredTableOutput {
  /**
   * <p>The retrieved configured table.</p>
   */
  configuredTable: ConfiguredTable | undefined;
}

/**
 * @public
 */
export interface GetConfiguredTableAnalysisRuleInput {
  /**
   * <p>The unique identifier for the configured table to retrieve. Currently accepts the configured table ID.</p>
   */
  configuredTableIdentifier: string | undefined;

  /**
   * <p>The analysis rule to be retrieved. Configured table analysis rules are uniquely identified by their configured table identifier and analysis rule type.</p>
   */
  analysisRuleType: ConfiguredTableAnalysisRuleType | string | undefined;
}

/**
 * @public
 */
export interface GetConfiguredTableAnalysisRuleOutput {
  /**
   * <p>The entire analysis rule output.</p>
   */
  analysisRule: ConfiguredTableAnalysisRule | undefined;
}

/**
 * @public
 */
export interface ListConfiguredTablesInput {
  /**
   * <p>The token value retrieved from a previous call to access the next page of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum size of the results that is returned per call.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>The configured table summary for the objects listed by the request.</p>
 */
export interface ConfiguredTableSummary {
  /**
   * <p>The unique ID of the configured table.</p>
   */
  id: string | undefined;

  /**
   * <p>The unique ARN of the configured table.</p>
   */
  arn: string | undefined;

  /**
   * <p>The name of the configured table.</p>
   */
  name: string | undefined;

  /**
   * <p>The time the configured table was created.</p>
   */
  createTime: Date | undefined;

  /**
   * <p>The time the configured table was last updated.</p>
   */
  updateTime: Date | undefined;

  /**
   * <p>The types of analysis rules associated with this configured table.</p>
   */
  analysisRuleTypes: (ConfiguredTableAnalysisRuleType | string)[] | undefined;

  /**
   * <p>The analysis method for the configured tables. The only valid value is currently `DIRECT_QUERY`.</p>
   */
  analysisMethod: AnalysisMethod | string | undefined;
}

/**
 * @public
 */
export interface ListConfiguredTablesOutput {
  /**
   * <p>The configured tables listed by the request.</p>
   */
  configuredTableSummaries: ConfiguredTableSummary[] | undefined;

  /**
   * <p>The token value retrieved from a previous call to access the next page of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface UpdateConfiguredTableInput {
  /**
   * <p>The identifier for the configured table to update. Currently accepts the configured table ID.</p>
   */
  configuredTableIdentifier: string | undefined;

  /**
   * <p>A new name for the configured table.</p>
   */
  name?: string;

  /**
   * <p>A new description for the configured table.</p>
   */
  description?: string;
}

/**
 * @public
 */
export interface UpdateConfiguredTableOutput {
  /**
   * <p>The updated configured table.</p>
   */
  configuredTable: ConfiguredTable | undefined;
}

/**
 * @public
 */
export interface UpdateConfiguredTableAnalysisRuleInput {
  /**
   * <p>The unique identifier for the configured table that the analysis rule applies to.
   *          Currently accepts the configured table ID.</p>
   */
  configuredTableIdentifier: string | undefined;

  /**
   * <p>The analysis rule type to be updated. Configured table analysis rules are uniquely identified by their configured table identifier and analysis rule type.</p>
   */
  analysisRuleType: ConfiguredTableAnalysisRuleType | string | undefined;

  /**
   * <p>The new analysis rule policy for the configured table analysis rule.</p>
   */
  analysisRulePolicy: ConfiguredTableAnalysisRulePolicy | undefined;
}

/**
 * @public
 */
export interface UpdateConfiguredTableAnalysisRuleOutput {
  /**
   * <p>The entire updated analysis rule.</p>
   */
  analysisRule: ConfiguredTableAnalysisRule | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) associated with the resource you want to list tags on.</p>
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * <p>A map of objects specifying each key name and value.</p>
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 * @enum
 */
export const MembershipQueryLogStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type MembershipQueryLogStatus = (typeof MembershipQueryLogStatus)[keyof typeof MembershipQueryLogStatus];

/**
 * @public
 */
export interface CreateMembershipInput {
  /**
   * <p>The unique ID for the associated collaboration.</p>
   */
  collaborationIdentifier: string | undefined;

  /**
   * <p>An indicator as to whether query logging has been enabled or disabled for the
   *          collaboration.</p>
   */
  queryLogStatus: MembershipQueryLogStatus | string | undefined;

  /**
   * <p>An optional label that you can assign to a resource when you create it. Each tag
   *          consists of a key and an optional value, both of which you define. When you use tagging,
   *          you can also use tag-based access control in IAM policies to control access to this
   *          resource.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 * @enum
 */
export const MembershipStatus = {
  ACTIVE: "ACTIVE",
  COLLABORATION_DELETED: "COLLABORATION_DELETED",
  REMOVED: "REMOVED",
} as const;

/**
 * @public
 */
export type MembershipStatus = (typeof MembershipStatus)[keyof typeof MembershipStatus];

/**
 * @public
 * <p>The membership object.</p>
 */
export interface Membership {
  /**
   * <p>The unique ID of the membership.</p>
   */
  id: string | undefined;

  /**
   * <p>The unique ARN for the membership.</p>
   */
  arn: string | undefined;

  /**
   * <p>The unique ARN for the membership's associated collaboration.</p>
   */
  collaborationArn: string | undefined;

  /**
   * <p>The unique ID for the membership's collaboration.</p>
   */
  collaborationId: string | undefined;

  /**
   * <p>The identifier used to reference members of the collaboration. Currently only supports Amazon Web Services account ID.</p>
   */
  collaborationCreatorAccountId: string | undefined;

  /**
   * <p>The display name of the collaboration creator.</p>
   */
  collaborationCreatorDisplayName: string | undefined;

  /**
   * <p>The name of the membership's collaboration.</p>
   */
  collaborationName: string | undefined;

  /**
   * <p>The time when the membership was created.</p>
   */
  createTime: Date | undefined;

  /**
   * <p>The time the membership metadata was last updated.</p>
   */
  updateTime: Date | undefined;

  /**
   * <p>The status of the membership. Valid values are `ACTIVE`, `REMOVED`, and `COLLABORATION_DELETED`.</p>
   */
  status: MembershipStatus | string | undefined;

  /**
   * <p>The abilities granted to the collaboration member.</p>
   */
  memberAbilities: (MemberAbility | string)[] | undefined;

  /**
   * <p>An indicator as to whether query logging has been enabled or disabled for the
   *          collaboration.</p>
   */
  queryLogStatus: MembershipQueryLogStatus | string | undefined;
}

/**
 * @public
 */
export interface CreateMembershipOutput {
  /**
   * <p>The membership that was created.</p>
   */
  membership: Membership | undefined;
}

/**
 * @public
 */
export interface DeleteMembershipInput {
  /**
   * <p>The identifier for a membership resource.</p>
   */
  membershipIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteMembershipOutput {}

/**
 * @public
 */
export interface GetMembershipInput {
  /**
   * <p>The identifier for a membership resource.</p>
   */
  membershipIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetMembershipOutput {
  /**
   * <p>The membership retrieved for the provided identifier.</p>
   */
  membership: Membership | undefined;
}

/**
 * @public
 */
export interface GetProtectedQueryInput {
  /**
   * <p>The identifier for a membership in a protected query instance.</p>
   */
  membershipIdentifier: string | undefined;

  /**
   * <p>The identifier for a protected query instance.</p>
   */
  protectedQueryIdentifier: string | undefined;
}

/**
 * @public
 * <p>Details of errors thrown by the protected query.</p>
 */
export interface ProtectedQueryError {
  /**
   * <p>A description of why the query failed.</p>
   */
  message: string | undefined;

  /**
   * <p>An error code for the error.</p>
   */
  code: string | undefined;
}

/**
 * @public
 * <p>Contains output information for protected queries with an S3 output type.</p>
 */
export interface ProtectedQueryS3Output {
  /**
   * <p>The S3 location of the result.</p>
   */
  location: string | undefined;
}

/**
 * @public
 * <p>Contains details about the protected query output.</p>
 */
export type ProtectedQueryOutput = ProtectedQueryOutput.S3Member | ProtectedQueryOutput.$UnknownMember;

/**
 * @public
 */
export namespace ProtectedQueryOutput {
  /**
   * <p>If present, the output for a protected query with an `S3` output type.</p>
   */
  export interface S3Member {
    s3: ProtectedQueryS3Output;
    $unknown?: never;
  }

  export interface $UnknownMember {
    s3?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    s3: (value: ProtectedQueryS3Output) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ProtectedQueryOutput, visitor: Visitor<T>): T => {
    if (value.s3 !== undefined) return visitor.s3(value.s3);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * <p>Details about the query results.</p>
 */
export interface ProtectedQueryResult {
  /**
   * <p>The output of the protected query.</p>
   */
  output: ProtectedQueryOutput | undefined;
}

/**
 * @public
 * @enum
 */
export const ResultFormat = {
  CSV: "CSV",
  PARQUET: "PARQUET",
} as const;

/**
 * @public
 */
export type ResultFormat = (typeof ResultFormat)[keyof typeof ResultFormat];

/**
 * @public
 * <p>Contains the configuration to write the query results to S3.</p>
 */
export interface ProtectedQueryS3OutputConfiguration {
  /**
   * <p>Intended file format of the result.</p>
   */
  resultFormat: ResultFormat | string | undefined;

  /**
   * <p>The S3 bucket to unload the protected query results.</p>
   */
  bucket: string | undefined;

  /**
   * <p>The S3 prefix to unload the protected query results.</p>
   */
  keyPrefix?: string;
}

/**
 * @public
 * <p>Contains configuration details for protected query output.</p>
 */
export type ProtectedQueryOutputConfiguration =
  | ProtectedQueryOutputConfiguration.S3Member
  | ProtectedQueryOutputConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace ProtectedQueryOutputConfiguration {
  /**
   * <p>Required configuration for a protected query with an `S3` output type.</p>
   */
  export interface S3Member {
    s3: ProtectedQueryS3OutputConfiguration;
    $unknown?: never;
  }

  export interface $UnknownMember {
    s3?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    s3: (value: ProtectedQueryS3OutputConfiguration) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ProtectedQueryOutputConfiguration, visitor: Visitor<T>): T => {
    if (value.s3 !== undefined) return visitor.s3(value.s3);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * <p>Contains configurations for protected query results.</p>
 */
export interface ProtectedQueryResultConfiguration {
  /**
   * <p>Configuration for protected query results.</p>
   */
  outputConfiguration: ProtectedQueryOutputConfiguration | undefined;
}

/**
 * @public
 * <p>The parameters for the SQL type Protected Query.</p>
 */
export interface ProtectedQuerySQLParameters {
  /**
   * <p>The query string to be submitted.</p>
   */
  queryString?: string;
}

/**
 * @public
 * <p>Contains statistics about the execution of the protected query.</p>
 */
export interface ProtectedQueryStatistics {
  /**
   * <p>The duration of the Protected Query, from creation until query completion.</p>
   */
  totalDurationInMillis?: number;
}

/**
 * @public
 * @enum
 */
export const ProtectedQueryStatus = {
  CANCELLED: "CANCELLED",
  CANCELLING: "CANCELLING",
  FAILED: "FAILED",
  STARTED: "STARTED",
  SUBMITTED: "SUBMITTED",
  SUCCESS: "SUCCESS",
  TIMED_OUT: "TIMED_OUT",
} as const;

/**
 * @public
 */
export type ProtectedQueryStatus = (typeof ProtectedQueryStatus)[keyof typeof ProtectedQueryStatus];

/**
 * @public
 * <p>The parameters for an Clean Rooms  protected query.</p>
 */
export interface ProtectedQuery {
  /**
   * <p>The identifier for a protected query instance.</p>
   */
  id: string | undefined;

  /**
   * <p>The identifier for the membership.</p>
   */
  membershipId: string | undefined;

  /**
   * <p>The ARN of the membership.</p>
   */
  membershipArn: string | undefined;

  /**
   * <p>The time at which the protected query was created.</p>
   */
  createTime: Date | undefined;

  /**
   * <p>The protected query SQL parameters.</p>
   */
  sqlParameters: ProtectedQuerySQLParameters | undefined;

  /**
   * <p>The status of the query.</p>
   */
  status: ProtectedQueryStatus | string | undefined;

  /**
   * <p>Contains any details needed to write the query results.</p>
   */
  resultConfiguration: ProtectedQueryResultConfiguration | undefined;

  /**
   * <p>Statistics about protected query execution.</p>
   */
  statistics?: ProtectedQueryStatistics;

  /**
   * <p>The result of the protected query.</p>
   */
  result?: ProtectedQueryResult;

  /**
   * <p>An error thrown by the protected query.</p>
   */
  error?: ProtectedQueryError;
}

/**
 * @public
 */
export interface GetProtectedQueryOutput {
  /**
   * <p>The query processing metadata.</p>
   */
  protectedQuery: ProtectedQuery | undefined;
}

/**
 * @public
 */
export interface ListMembershipsInput {
  /**
   * <p>The token value retrieved from a previous call to access the next page of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum size of the results that is returned per call.</p>
   */
  maxResults?: number;

  /**
   * <p>A filter which will return only memberships in the specified status.</p>
   */
  status?: MembershipStatus | string;
}

/**
 * @public
 * <p>The membership object listed by the request.</p>
 */
export interface MembershipSummary {
  /**
   * <p>The unique ID for the membership's collaboration.</p>
   */
  id: string | undefined;

  /**
   * <p>The unique ARN for the membership.</p>
   */
  arn: string | undefined;

  /**
   * <p>The unique ARN for the membership's associated collaboration.</p>
   */
  collaborationArn: string | undefined;

  /**
   * <p>The unique ID for the membership's collaboration.</p>
   */
  collaborationId: string | undefined;

  /**
   * <p>The identifier of the Amazon Web Services principal that created the collaboration. Currently only supports Amazon Web Services account ID.</p>
   */
  collaborationCreatorAccountId: string | undefined;

  /**
   * <p>The display name of the collaboration creator.</p>
   */
  collaborationCreatorDisplayName: string | undefined;

  /**
   * <p>The name for the membership's collaboration.</p>
   */
  collaborationName: string | undefined;

  /**
   * <p>The time when the membership was created.</p>
   */
  createTime: Date | undefined;

  /**
   * <p>The time the membership metadata was last updated.</p>
   */
  updateTime: Date | undefined;

  /**
   * <p>The status of the membership. Valid values are `ACTIVE`, `REMOVED`, and `COLLABORATION_DELETED`.</p>
   */
  status: MembershipStatus | string | undefined;

  /**
   * <p>The abilities granted to the collaboration member.</p>
   */
  memberAbilities: (MemberAbility | string)[] | undefined;
}

/**
 * @public
 */
export interface ListMembershipsOutput {
  /**
   * <p>The token value retrieved from a previous call to access the next page of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The list of memberships returned from the ListMemberships operation.</p>
   */
  membershipSummaries: MembershipSummary[] | undefined;
}

/**
 * @public
 */
export interface ListProtectedQueriesInput {
  /**
   * <p>The identifier for the membership in the collaboration.</p>
   */
  membershipIdentifier: string | undefined;

  /**
   * <p>A filter on the status of the protected query.</p>
   */
  status?: ProtectedQueryStatus | string;

  /**
   * <p>The token value retrieved from a previous call to access the next page of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum size of the results that is returned per call. Service chooses a default if
   *          it has not been set. Service can return a nextToken even if the maximum results has not
   *          been met. </p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>The protected query summary for the objects listed by the request.</p>
 */
export interface ProtectedQuerySummary {
  /**
   * <p>The unique ID of the protected query.</p>
   */
  id: string | undefined;

  /**
   * <p>The unique ID for the membership that initiated the protected query.</p>
   */
  membershipId: string | undefined;

  /**
   * <p>The unique ARN for the membership that initiated the protected query.</p>
   */
  membershipArn: string | undefined;

  /**
   * <p>The time the protected query was created.</p>
   */
  createTime: Date | undefined;

  /**
   * <p>The status of the protected query. Value values are `SUBMITTED`, `STARTED`, `CANCELLED`, `CANCELLING`, `FAILED`, `SUCCESS`, `TIMED_OUT`.</p>
   */
  status: ProtectedQueryStatus | string | undefined;
}

/**
 * @public
 */
export interface ListProtectedQueriesOutput {
  /**
   * <p>The token value retrieved from a previous call to access the next page of results.</p>
   */
  nextToken?: string;

  /**
   * <p>A list of protected queries.</p>
   */
  protectedQueries: ProtectedQuerySummary[] | undefined;
}

/**
 * @public
 * @enum
 */
export const ProtectedQueryType = {
  SQL: "SQL",
} as const;

/**
 * @public
 */
export type ProtectedQueryType = (typeof ProtectedQueryType)[keyof typeof ProtectedQueryType];

/**
 * @public
 */
export interface StartProtectedQueryInput {
  /**
   * <p>The type of the protected query to be started.</p>
   */
  type: ProtectedQueryType | string | undefined;

  /**
   * <p>A unique identifier for the membership to run this query against. Currently accepts a membership ID.</p>
   */
  membershipIdentifier: string | undefined;

  /**
   * <p>The protected SQL query parameters.</p>
   */
  sqlParameters: ProtectedQuerySQLParameters | undefined;

  /**
   * <p>The details needed to write the query results.</p>
   */
  resultConfiguration: ProtectedQueryResultConfiguration | undefined;
}

/**
 * @public
 */
export interface StartProtectedQueryOutput {
  /**
   * <p>The protected query.</p>
   */
  protectedQuery: ProtectedQuery | undefined;
}

/**
 * @public
 */
export interface UpdateMembershipInput {
  /**
   * <p>The unique identifier of the membership.</p>
   */
  membershipIdentifier: string | undefined;

  /**
   * <p>An indicator as to whether query logging has been enabled or disabled for the
   *          collaboration.</p>
   */
  queryLogStatus?: MembershipQueryLogStatus | string;
}

/**
 * @public
 */
export interface UpdateMembershipOutput {
  /**
   * <p>The membership object.</p>
   */
  membership: Membership | undefined;
}

/**
 * @public
 * @enum
 */
export const TargetProtectedQueryStatus = {
  CANCELLED: "CANCELLED",
} as const;

/**
 * @public
 */
export type TargetProtectedQueryStatus = (typeof TargetProtectedQueryStatus)[keyof typeof TargetProtectedQueryStatus];

/**
 * @public
 */
export interface UpdateProtectedQueryInput {
  /**
   * <p>The identifier for a member of a protected query instance.</p>
   */
  membershipIdentifier: string | undefined;

  /**
   * <p>The identifier for a protected query instance.</p>
   */
  protectedQueryIdentifier: string | undefined;

  /**
   * <p>The target status of a query. Used to update the execution status of a currently running query.</p>
   */
  targetStatus: TargetProtectedQueryStatus | string | undefined;
}

/**
 * @public
 */
export interface UpdateProtectedQueryOutput {
  /**
   * <p>The protected query output.</p>
   */
  protectedQuery: ProtectedQuery | undefined;
}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) associated with the resource you want to tag.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>A map of objects specifying each key name and value.</p>
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceOutput {}

/**
 * @public
 */
export interface UntagResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) associated with the resource you want to remove the tag from.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>A list of key names of tags to be removed.</p>
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceOutput {}

/**
 * @internal
 */
export const ProtectedQuerySQLParametersFilterSensitiveLog = (obj: ProtectedQuerySQLParameters): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProtectedQueryFilterSensitiveLog = (obj: ProtectedQuery): any => ({
  ...obj,
  ...(obj.sqlParameters && { sqlParameters: SENSITIVE_STRING }),
  ...(obj.resultConfiguration && { resultConfiguration: obj.resultConfiguration }),
  ...(obj.result && { result: obj.result }),
});

/**
 * @internal
 */
export const GetProtectedQueryOutputFilterSensitiveLog = (obj: GetProtectedQueryOutput): any => ({
  ...obj,
  ...(obj.protectedQuery && { protectedQuery: ProtectedQueryFilterSensitiveLog(obj.protectedQuery) }),
});

/**
 * @internal
 */
export const StartProtectedQueryInputFilterSensitiveLog = (obj: StartProtectedQueryInput): any => ({
  ...obj,
  ...(obj.sqlParameters && { sqlParameters: SENSITIVE_STRING }),
  ...(obj.resultConfiguration && { resultConfiguration: obj.resultConfiguration }),
});

/**
 * @internal
 */
export const StartProtectedQueryOutputFilterSensitiveLog = (obj: StartProtectedQueryOutput): any => ({
  ...obj,
  ...(obj.protectedQuery && { protectedQuery: ProtectedQueryFilterSensitiveLog(obj.protectedQuery) }),
});

/**
 * @internal
 */
export const UpdateProtectedQueryOutputFilterSensitiveLog = (obj: UpdateProtectedQueryOutput): any => ({
  ...obj,
  ...(obj.protectedQuery && { protectedQuery: ProtectedQueryFilterSensitiveLog(obj.protectedQuery) }),
});
