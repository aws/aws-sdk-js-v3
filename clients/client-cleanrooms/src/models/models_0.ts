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
 * <p>Caller does not have sufficient access to perform this action.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * <p>A reason code for the exception.</p>
   * @public
   */
  reason?: AccessDeniedExceptionReason;

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
 * <p>Column in configured table that can be used in aggregate function in query.</p>
 * @public
 */
export interface AggregateColumn {
  /**
   * <p>Column names in configured table of aggregate columns.</p>
   * @public
   */
  columnNames: string[] | undefined;

  /**
   * <p>Aggregation function that can be applied to aggregate column in query.</p>
   * @public
   */
  function: AggregateFunctionName | undefined;
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
 * <p>Constraint on query output removing output rows that do not meet a minimum number of
 *          distinct values of a specified column.</p>
 * @public
 */
export interface AggregationConstraint {
  /**
   * <p>Column in aggregation constraint for which there must be a minimum number of distinct
   *          values in an output row for it to be in the query output.</p>
   * @public
   */
  columnName: string | undefined;

  /**
   * <p>The minimum number of distinct values that an output row must be an aggregation of.
   *          Minimum threshold of distinct values for a specified column that must exist in an output
   *          row for it to be in the query output.</p>
   * @public
   */
  minimum: number | undefined;

  /**
   * <p>The type of aggregation the constraint allows. The only valid value is currently
   *          `COUNT_DISTINCT`.</p>
   * @public
   */
  type: AggregationType | undefined;
}

/**
 * @public
 * @enum
 */
export const AnalysisFormat = {
  SQL: "SQL",
} as const;

/**
 * @public
 */
export type AnalysisFormat = (typeof AnalysisFormat)[keyof typeof AnalysisFormat];

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
export const ParameterType = {
  BIGINT: "BIGINT",
  BOOLEAN: "BOOLEAN",
  CHAR: "CHAR",
  DATE: "DATE",
  DECIMAL: "DECIMAL",
  DOUBLE_PRECISION: "DOUBLE_PRECISION",
  INTEGER: "INTEGER",
  REAL: "REAL",
  SMALLINT: "SMALLINT",
  TIME: "TIME",
  TIMESTAMP: "TIMESTAMP",
  TIMESTAMPTZ: "TIMESTAMPTZ",
  TIMETZ: "TIMETZ",
  VARBYTE: "VARBYTE",
  VARCHAR: "VARCHAR",
} as const;

/**
 * @public
 */
export type ParameterType = (typeof ParameterType)[keyof typeof ParameterType];

/**
 * <p>Optional. The member who can query can provide this placeholder for a literal data value
 *          in an analysis template.</p>
 * @public
 */
export interface AnalysisParameter {
  /**
   * <p>The name of the parameter. The name must use only alphanumeric, underscore (_), or
   *          hyphen (-) characters but cannot start or end with a hyphen.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The type of parameter.</p>
   * @public
   */
  type: ParameterType | undefined;

  /**
   * <p>Optional. The default value that is applied in the analysis template. The member who can
   *          query can override this value in the query editor.</p>
   * @public
   */
  defaultValue?: string;
}

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
  CONVERT: "CONVERT",
  CURRENT_DATE: "CURRENT_DATE",
  DATEADD: "DATEADD",
  EXTRACT: "EXTRACT",
  FLOOR: "FLOOR",
  GETDATE: "GETDATE",
  LN: "LN",
  LOG: "LOG",
  LOWER: "LOWER",
  ROUND: "ROUND",
  RTRIM: "RTRIM",
  SQRT: "SQRT",
  SUBSTRING: "SUBSTRING",
  TO_CHAR: "TO_CHAR",
  TO_DATE: "TO_DATE",
  TO_NUMBER: "TO_NUMBER",
  TO_TIMESTAMP: "TO_TIMESTAMP",
  TRIM: "TRIM",
  TRUNC: "TRUNC",
  UPPER: "UPPER",
} as const;

/**
 * @public
 */
export type ScalarFunctions = (typeof ScalarFunctions)[keyof typeof ScalarFunctions];

/**
 * <p>A type of analysis rule that enables query structure and specified queries that produce
 *          aggregate statistics.</p>
 * @public
 */
export interface AnalysisRuleAggregation {
  /**
   * <p>The columns that query runners are allowed to use in aggregation queries.</p>
   * @public
   */
  aggregateColumns: AggregateColumn[] | undefined;

  /**
   * <p>Columns in configured table that can be used in join statements and/or as aggregate
   *          columns. They can never be outputted directly.</p>
   * @public
   */
  joinColumns: string[] | undefined;

  /**
   * <p>Control that requires member who runs query to do a join with their configured table
   *          and/or other configured table in query.</p>
   * @public
   */
  joinRequired?: JoinRequiredOption;

  /**
   * <p>Which logical operators (if any) are to be used in an INNER JOIN match condition.
   *          Default is <code>AND</code>.</p>
   * @public
   */
  allowedJoinOperators?: JoinOperator[];

  /**
   * <p>The columns that query runners are allowed to select, group by, or filter by.</p>
   * @public
   */
  dimensionColumns: string[] | undefined;

  /**
   * <p>Set of scalar functions that are allowed to be used on dimension columns and the output
   *          of aggregation of metrics.</p>
   * @public
   */
  scalarFunctions: ScalarFunctions[] | undefined;

  /**
   * <p>Columns that must meet a specific threshold value (after an aggregation function is
   *          applied to it) for each output row to be returned.</p>
   * @public
   */
  outputConstraints: AggregationConstraint[] | undefined;
}

/**
 * <p>Specifies the name of the column that contains the unique identifier of your users, whose privacy you want to protect.</p>
 * @public
 */
export interface DifferentialPrivacyColumn {
  /**
   * <p>The name of the column, such as user_id, that contains the unique identifier of your users, whose privacy you want to protect. If you want to turn on differential privacy for two or more tables in a collaboration, you must configure the same column as the user identifier column in both analysis rules.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * <p>Specifies the unique identifier for your users.</p>
 * @public
 */
export interface DifferentialPrivacyConfiguration {
  /**
   * <p>The name of the column (such as user_id) that contains the unique identifier of your users whose privacy you want to protect. If you want to turn on diﬀerential privacy for two or more tables in a collaboration, you must conﬁgure the same column as the user identiﬁer column in both analysis rules.</p>
   * @public
   */
  columns: DifferentialPrivacyColumn[] | undefined;
}

/**
 * <p>A type of analysis rule that enables the table owner to approve custom SQL queries on
 *          their configured tables. It supports differential privacy.</p>
 * @public
 */
export interface AnalysisRuleCustom {
  /**
   * <p>The ARN of the analysis templates that are allowed by the custom analysis rule.</p>
   * @public
   */
  allowedAnalyses: string[] | undefined;

  /**
   * <p>The IDs of the Amazon Web Services accounts that are allowed to query by the custom analysis rule. Required when
   *             <code>allowedAnalyses</code> is <code>ANY_QUERY</code>.</p>
   * @public
   */
  allowedAnalysisProviders?: string[];

  /**
   * <p>The differential privacy configuration.</p>
   * @public
   */
  differentialPrivacy?: DifferentialPrivacyConfiguration;
}

/**
 * <p>A type of analysis rule that enables row-level analysis.</p>
 * @public
 */
export interface AnalysisRuleList {
  /**
   * <p>Columns that can be used to join a configured table with the table of the member who can
   *          query and other members' configured tables.</p>
   * @public
   */
  joinColumns: string[] | undefined;

  /**
   * <p>The logical operators (if any) that are to be used in an INNER JOIN match condition.
   *          Default is <code>AND</code>.</p>
   * @public
   */
  allowedJoinOperators?: JoinOperator[];

  /**
   * <p>Columns that can be listed in the output.</p>
   * @public
   */
  listColumns: string[] | undefined;
}

/**
 * <p>Controls on the query specifications that can be run on configured table.</p>
 * @public
 */
export type AnalysisRulePolicyV1 =
  | AnalysisRulePolicyV1.AggregationMember
  | AnalysisRulePolicyV1.CustomMember
  | AnalysisRulePolicyV1.ListMember
  | AnalysisRulePolicyV1.$UnknownMember;

/**
 * @public
 */
export namespace AnalysisRulePolicyV1 {
  /**
   * <p>Analysis rule type that enables only list queries on a configured table.</p>
   * @public
   */
  export interface ListMember {
    list: AnalysisRuleList;
    aggregation?: never;
    custom?: never;
    $unknown?: never;
  }

  /**
   * <p>Analysis rule type that enables only aggregation queries on a configured table.</p>
   * @public
   */
  export interface AggregationMember {
    list?: never;
    aggregation: AnalysisRuleAggregation;
    custom?: never;
    $unknown?: never;
  }

  /**
   * <p>Analysis rule type that enables custom SQL queries on a configured table.</p>
   * @public
   */
  export interface CustomMember {
    list?: never;
    aggregation?: never;
    custom: AnalysisRuleCustom;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    list?: never;
    aggregation?: never;
    custom?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    list: (value: AnalysisRuleList) => T;
    aggregation: (value: AnalysisRuleAggregation) => T;
    custom: (value: AnalysisRuleCustom) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: AnalysisRulePolicyV1, visitor: Visitor<T>): T => {
    if (value.list !== undefined) return visitor.list(value.list);
    if (value.aggregation !== undefined) return visitor.aggregation(value.aggregation);
    if (value.custom !== undefined) return visitor.custom(value.custom);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Controls on the query specifications that can be run on configured table.</p>
 * @public
 */
export type AnalysisRulePolicy = AnalysisRulePolicy.V1Member | AnalysisRulePolicy.$UnknownMember;

/**
 * @public
 */
export namespace AnalysisRulePolicy {
  /**
   * <p>Controls on the query specifications that can be run on configured table.</p>
   * @public
   */
  export interface V1Member {
    v1: AnalysisRulePolicyV1;
    $unknown?: never;
  }

  /**
   * @public
   */
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
  CUSTOM: "CUSTOM",
  LIST: "LIST",
} as const;

/**
 * @public
 */
export type AnalysisRuleType = (typeof AnalysisRuleType)[keyof typeof AnalysisRuleType];

/**
 * <p>A specification about how data from the configured table can be used in a query.</p>
 * @public
 */
export interface AnalysisRule {
  /**
   * <p>The unique ID for the associated collaboration.</p>
   * @public
   */
  collaborationId: string | undefined;

  /**
   * <p>The type of analysis rule.</p>
   * @public
   */
  type: AnalysisRuleType | undefined;

  /**
   * <p>The name for the analysis rule.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The time the analysis rule was created.</p>
   * @public
   */
  createTime: Date | undefined;

  /**
   * <p>The time the analysis rule was last updated.</p>
   * @public
   */
  updateTime: Date | undefined;

  /**
   * <p>A policy that describes the associated data usage limitations.</p>
   * @public
   */
  policy: AnalysisRulePolicy | undefined;
}

/**
 * <p>A relation within an analysis.</p>
 * @public
 */
export interface AnalysisSchema {
  /**
   * <p>The tables referenced in the analysis schema.</p>
   * @public
   */
  referencedTables?: string[];
}

/**
 * <p>The structure that defines the body of the analysis template.</p>
 * @public
 */
export type AnalysisSource = AnalysisSource.TextMember | AnalysisSource.$UnknownMember;

/**
 * @public
 */
export namespace AnalysisSource {
  /**
   * <p>The query text.</p>
   * @public
   */
  export interface TextMember {
    text: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    text?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    text: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: AnalysisSource, visitor: Visitor<T>): T => {
    if (value.text !== undefined) return visitor.text(value.text);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>The analysis template.</p>
 * @public
 */
export interface AnalysisTemplate {
  /**
   * <p>The identifier for the analysis template.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the analysis template.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The unique ID for the associated collaboration of the analysis template.</p>
   * @public
   */
  collaborationId: string | undefined;

  /**
   * <p>The unique ARN for the analysis template’s associated collaboration.</p>
   * @public
   */
  collaborationArn: string | undefined;

  /**
   * <p>The identifier of a member who created the analysis template.</p>
   * @public
   */
  membershipId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the member who created the analysis template.</p>
   * @public
   */
  membershipArn: string | undefined;

  /**
   * <p>The description of the analysis template.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The name of the analysis template.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The time that the analysis template was created.</p>
   * @public
   */
  createTime: Date | undefined;

  /**
   * <p>The time that the analysis template was last updated.</p>
   * @public
   */
  updateTime: Date | undefined;

  /**
   * <p>The entire schema object.</p>
   * @public
   */
  schema: AnalysisSchema | undefined;

  /**
   * <p>The format of the analysis template.</p>
   * @public
   */
  format: AnalysisFormat | undefined;

  /**
   * <p>The source of the analysis template.</p>
   * @public
   */
  source: AnalysisSource | undefined;

  /**
   * <p>The parameters of the analysis template.</p>
   * @public
   */
  analysisParameters?: AnalysisParameter[];
}

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
 * <p>Updating or deleting a resource can cause an inconsistent state.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * <p>The ID of the conflicting resource.</p>
   * @public
   */
  resourceId?: string;

  /**
   * <p>The type of the conflicting resource.</p>
   * @public
   */
  resourceType?: ResourceType;

  /**
   * <p>A reason code for the exception.</p>
   * @public
   */
  reason?: ConflictExceptionReason;

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
export interface CreateAnalysisTemplateInput {
  /**
   * <p>The description of the analysis template.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The identifier for a membership resource.</p>
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * <p>The name of the analysis template.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The format of the analysis template.</p>
   * @public
   */
  format: AnalysisFormat | undefined;

  /**
   * <p>The information in the analysis template. Currently supports <code>text</code>, the
   *          query text for the analysis template.</p>
   * @public
   */
  source: AnalysisSource | undefined;

  /**
   * <p>An optional label that you can assign to a resource when you create it. Each tag
   *          consists of a key and an optional value, both of which you define. When you use tagging,
   *          you can also use tag-based access control in IAM policies to control access
   *          to this resource.</p>
   * @public
   */
  tags?: Record<string, string>;

  /**
   * <p>The parameters of the analysis template.</p>
   * @public
   */
  analysisParameters?: AnalysisParameter[];
}

/**
 * @public
 */
export interface CreateAnalysisTemplateOutput {
  /**
   * <p>The analysis template.</p>
   * @public
   */
  analysisTemplate: AnalysisTemplate | undefined;
}

/**
 * <p>Unexpected error during processing of request.</p>
 * @public
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
 * <p>Request references a resource which does not exist.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * <p>The Id of the missing resource.</p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p>The type of the missing resource.</p>
   * @public
   */
  resourceType: ResourceType | undefined;

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
 * <p>Request denied because service quota has been exceeded.</p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * <p>The name of the quota.</p>
   * @public
   */
  quotaName: string | undefined;

  /**
   * <p>The value of the quota.</p>
   * @public
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
 * <p>Request was denied due to request throttling.</p>
 * @public
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
 * <p>Describes validation errors for specific input parameters.</p>
 * @public
 */
export interface ValidationExceptionField {
  /**
   * <p>The name of the input parameter.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A message for the input validation error.</p>
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  FIELD_VALIDATION_FAILED: "FIELD_VALIDATION_FAILED",
  IAM_SYNCHRONIZATION_DELAY: "IAM_SYNCHRONIZATION_DELAY",
  INVALID_CONFIGURATION: "INVALID_CONFIGURATION",
  INVALID_QUERY: "INVALID_QUERY",
} as const;

/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * <p>The input fails to satisfy the specified constraints.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * <p>A reason code for the exception.</p>
   * @public
   */
  reason?: ValidationExceptionReason;

  /**
   * <p>Validation errors for specific input parameters.</p>
   * @public
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
 */
export interface DeleteAnalysisTemplateInput {
  /**
   * <p>The identifier for a membership resource.</p>
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * <p>The identifier for the analysis template resource.</p>
   * @public
   */
  analysisTemplateIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteAnalysisTemplateOutput {}

/**
 * @public
 */
export interface GetAnalysisTemplateInput {
  /**
   * <p>The identifier for a membership resource.</p>
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * <p>The identifier for the analysis template resource.</p>
   * @public
   */
  analysisTemplateIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetAnalysisTemplateOutput {
  /**
   * <p>The analysis template.</p>
   * @public
   */
  analysisTemplate: AnalysisTemplate | undefined;
}

/**
 * @public
 */
export interface ListAnalysisTemplatesInput {
  /**
   * <p>The identifier for a membership resource.</p>
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * <p>The token value retrieved from a previous call to access the next page of
   *          results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The maximum size of the results that is returned per call.</p>
   * @public
   */
  maxResults?: number;
}

/**
 * <p>The metadata of the analysis template.</p>
 * @public
 */
export interface AnalysisTemplateSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the analysis template.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The time that the analysis template summary was created.</p>
   * @public
   */
  createTime: Date | undefined;

  /**
   * <p>The identifier of the analysis template.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of the analysis template. </p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The time that the analysis template summary was last updated.</p>
   * @public
   */
  updateTime: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the member who created the analysis template.</p>
   * @public
   */
  membershipArn: string | undefined;

  /**
   * <p>The identifier for a membership resource.</p>
   * @public
   */
  membershipId: string | undefined;

  /**
   * <p>The unique ARN for the analysis template summary’s associated collaboration.</p>
   * @public
   */
  collaborationArn: string | undefined;

  /**
   * <p>A unique identifier for the collaboration that the analysis template summary belongs to.
   *          Currently accepts collaboration ID.</p>
   * @public
   */
  collaborationId: string | undefined;

  /**
   * <p>The description of the analysis template.</p>
   * @public
   */
  description?: string;
}

/**
 * @public
 */
export interface ListAnalysisTemplatesOutput {
  /**
   * <p>The token value retrieved from a previous call to access the next page of
   *          results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>Lists analysis template metadata.</p>
   * @public
   */
  analysisTemplateSummaries: AnalysisTemplateSummary[] | undefined;
}

/**
 * @public
 */
export interface UpdateAnalysisTemplateInput {
  /**
   * <p>The identifier for a membership resource.</p>
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * <p>The identifier for the analysis template resource.</p>
   * @public
   */
  analysisTemplateIdentifier: string | undefined;

  /**
   * <p>A new description for the analysis template.</p>
   * @public
   */
  description?: string;
}

/**
 * @public
 */
export interface UpdateAnalysisTemplateOutput {
  /**
   * <p>The analysis template.</p>
   * @public
   */
  analysisTemplate: AnalysisTemplate | undefined;
}

/**
 * @public
 */
export interface BatchGetCollaborationAnalysisTemplateInput {
  /**
   * <p>A unique identifier for the collaboration that the analysis templates belong to.
   *          Currently accepts collaboration ID.</p>
   * @public
   */
  collaborationIdentifier: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) associated with the analysis template within a
   *          collaboration.</p>
   * @public
   */
  analysisTemplateArns: string[] | undefined;
}

/**
 * <p>The analysis template within a collaboration.</p>
 * @public
 */
export interface CollaborationAnalysisTemplate {
  /**
   * <p>The identifier of the analysis template.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the analysis template.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>A unique identifier for the collaboration that the analysis templates belong to.
   *          Currently accepts collaboration ID.</p>
   * @public
   */
  collaborationId: string | undefined;

  /**
   * <p>The unique ARN for the analysis template’s associated collaboration.</p>
   * @public
   */
  collaborationArn: string | undefined;

  /**
   * <p>The description of the analysis template.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The identifier used to reference members of the collaboration. Currently only supports
   *          Amazon Web Services account ID.</p>
   * @public
   */
  creatorAccountId: string | undefined;

  /**
   * <p>The name of the analysis template.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The time that the analysis template within a collaboration was created.</p>
   * @public
   */
  createTime: Date | undefined;

  /**
   * <p>The time that the analysis template in the collaboration was last updated.</p>
   * @public
   */
  updateTime: Date | undefined;

  /**
   * <p>The entire schema object.</p>
   * @public
   */
  schema: AnalysisSchema | undefined;

  /**
   * <p>The format of the analysis template in the collaboration.</p>
   * @public
   */
  format: AnalysisFormat | undefined;

  /**
   * <p>The source of the analysis template within a collaboration.</p>
   * @public
   */
  source: AnalysisSource | undefined;

  /**
   * <p>The analysis parameters that have been specified in the analysis template.</p>
   * @public
   */
  analysisParameters?: AnalysisParameter[];
}

/**
 * <p>Details of errors thrown by the call to retrieve multiple analysis templates within a
 *          collaboration by their identifiers.</p>
 * @public
 */
export interface BatchGetCollaborationAnalysisTemplateError {
  /**
   * <p>The Amazon Resource Name (ARN) of the analysis template.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>An error code for the error.</p>
   * @public
   */
  code: string | undefined;

  /**
   * <p>A description of why the call failed.</p>
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 */
export interface BatchGetCollaborationAnalysisTemplateOutput {
  /**
   * <p>The retrieved list of analysis templates within a collaboration.</p>
   * @public
   */
  collaborationAnalysisTemplates: CollaborationAnalysisTemplate[] | undefined;

  /**
   * <p>Error reasons for collaboration analysis templates that could not be retrieved. One
   *          error is returned for every collaboration analysis template that could not be
   *          retrieved.</p>
   * @public
   */
  errors: BatchGetCollaborationAnalysisTemplateError[] | undefined;
}

/**
 * @public
 */
export interface BatchGetSchemaInput {
  /**
   * <p>A unique identifier for the collaboration that the schemas belong to. Currently accepts
   *          collaboration ID.</p>
   * @public
   */
  collaborationIdentifier: string | undefined;

  /**
   * <p>The names for the schema objects to
   *          retrieve.</p>
   * @public
   */
  names: string[] | undefined;
}

/**
 * <p>An error describing why a schema could not be fetched.</p>
 * @public
 */
export interface BatchGetSchemaError {
  /**
   * <p>An error name for the error.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>An error code for the error. </p>
   * @public
   */
  code: string | undefined;

  /**
   * <p>An error message for the error.</p>
   * @public
   */
  message: string | undefined;
}

/**
 * <p>A column within a schema relation, derived from the underlying Glue
 *          table.</p>
 * @public
 */
export interface Column {
  /**
   * <p>The name of the column.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The type of the column.</p>
   * @public
   */
  type: string | undefined;
}

/**
 * @public
 * @enum
 */
export const SchemaConfiguration = {
  DIFFERENTIAL_PRIVACY: "DIFFERENTIAL_PRIVACY",
} as const;

/**
 * @public
 */
export type SchemaConfiguration = (typeof SchemaConfiguration)[keyof typeof SchemaConfiguration];

/**
 * @public
 * @enum
 */
export const SchemaStatusReasonCode = {
  ANALYSIS_PROVIDERS_NOT_CONFIGURED: "ANALYSIS_PROVIDERS_NOT_CONFIGURED",
  ANALYSIS_RULE_MISSING: "ANALYSIS_RULE_MISSING",
  ANALYSIS_TEMPLATES_NOT_CONFIGURED: "ANALYSIS_TEMPLATES_NOT_CONFIGURED",
  DIFFERENTIAL_PRIVACY_POLICY_NOT_CONFIGURED: "DIFFERENTIAL_PRIVACY_POLICY_NOT_CONFIGURED",
} as const;

/**
 * @public
 */
export type SchemaStatusReasonCode = (typeof SchemaStatusReasonCode)[keyof typeof SchemaStatusReasonCode];

/**
 * <p>A reason why the schema status is set to its current value.</p>
 * @public
 */
export interface SchemaStatusReason {
  /**
   * <p>The schema status reason code.</p>
   * @public
   */
  code: SchemaStatusReasonCode | undefined;

  /**
   * <p>An explanation of the schema status reason code.</p>
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 * @enum
 */
export const SchemaStatus = {
  NOT_READY: "NOT_READY",
  READY: "READY",
} as const;

/**
 * @public
 */
export type SchemaStatus = (typeof SchemaStatus)[keyof typeof SchemaStatus];

/**
 * <p>Information about the schema status.</p>
 *          <p>A status of <code>READY</code> means that based on the schema analysis rule, queries of the given analysis rule type are properly configured to run queries on this schema.</p>
 * @public
 */
export interface SchemaStatusDetail {
  /**
   * <p>The status of the schema.</p>
   * @public
   */
  status: SchemaStatus | undefined;

  /**
   * <p>The reasons why the schema status is set to its current state.</p>
   * @public
   */
  reasons?: SchemaStatusReason[];

  /**
   * <p>The analysis rule type for which the schema status has been evaluated.</p>
   * @public
   */
  analysisRuleType?: AnalysisRuleType;

  /**
   * <p>The configuration details of the schema analysis rule for the given type.</p>
   * @public
   */
  configurations?: SchemaConfiguration[];
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
 * <p>A schema is a relation within a collaboration.</p>
 * @public
 */
export interface Schema {
  /**
   * <p>The columns for the relation this schema represents.</p>
   * @public
   */
  columns: Column[] | undefined;

  /**
   * <p>The partition keys for the dataset underlying this schema.</p>
   * @public
   */
  partitionKeys: Column[] | undefined;

  /**
   * <p>The analysis rule types associated with the schema. Currently, only one entry is
   *          present.</p>
   * @public
   */
  analysisRuleTypes: AnalysisRuleType[] | undefined;

  /**
   * <p>The analysis method for the schema. The only valid value is currently
   *          DIRECT_QUERY.</p>
   * @public
   */
  analysisMethod?: AnalysisMethod;

  /**
   * <p>The unique account ID for the Amazon Web Services account that owns the schema.</p>
   * @public
   */
  creatorAccountId: string | undefined;

  /**
   * <p>A name for the schema. The schema relation is referred to by this name when queried by a
   *          protected query.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The unique ID for the collaboration that the schema belongs to.</p>
   * @public
   */
  collaborationId: string | undefined;

  /**
   * <p>The unique ARN for the collaboration that the schema belongs to.</p>
   * @public
   */
  collaborationArn: string | undefined;

  /**
   * <p>A description for the schema.</p>
   * @public
   */
  description: string | undefined;

  /**
   * <p>The time the schema was created.</p>
   * @public
   */
  createTime: Date | undefined;

  /**
   * <p>The time the schema was last updated.</p>
   * @public
   */
  updateTime: Date | undefined;

  /**
   * <p>The type of schema. The only valid value is currently `TABLE`.</p>
   * @public
   */
  type: SchemaType | undefined;

  /**
   * <p>Details about the status of the schema. Currently, only one entry is present.</p>
   * @public
   */
  schemaStatusDetails: SchemaStatusDetail[] | undefined;
}

/**
 * @public
 */
export interface BatchGetSchemaOutput {
  /**
   * <p>The retrieved list of schemas.</p>
   * @public
   */
  schemas: Schema[] | undefined;

  /**
   * <p>Error reasons for schemas that could not be retrieved. One error is returned for every
   *          schema that could not be retrieved.</p>
   * @public
   */
  errors: BatchGetSchemaError[] | undefined;
}

/**
 * <p>Defines the information that's necessary to retrieve an analysis rule schema. Schema analysis rules are uniquely identiﬁed by a combination of the schema name and the analysis rule type for a given collaboration.</p>
 * @public
 */
export interface SchemaAnalysisRuleRequest {
  /**
   * <p>The name of the analysis rule schema that you are requesting.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The type of analysis rule schema that you are requesting.</p>
   * @public
   */
  type: AnalysisRuleType | undefined;
}

/**
 * @public
 */
export interface BatchGetSchemaAnalysisRuleInput {
  /**
   * <p>The unique identifier of the collaboration that contains the schema analysis rule.</p>
   * @public
   */
  collaborationIdentifier: string | undefined;

  /**
   * <p>The information that's necessary to retrieve a schema analysis rule.</p>
   * @public
   */
  schemaAnalysisRuleRequests: SchemaAnalysisRuleRequest[] | undefined;
}

/**
 * <p>An error that describes why a schema could not be fetched.</p>
 * @public
 */
export interface BatchGetSchemaAnalysisRuleError {
  /**
   * <p>An error name for the error.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The analysis rule type.</p>
   * @public
   */
  type: AnalysisRuleType | undefined;

  /**
   * <p>An error code for the error.</p>
   * @public
   */
  code: string | undefined;

  /**
   * <p>A description of why the call failed.</p>
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 */
export interface BatchGetSchemaAnalysisRuleOutput {
  /**
   * <p>The retrieved list of analysis rules.</p>
   * @public
   */
  analysisRules: AnalysisRule[] | undefined;

  /**
   * <p>Error reasons for schemas that could not be retrieved. One error is returned for every schema that could not be retrieved.</p>
   * @public
   */
  errors: BatchGetSchemaAnalysisRuleError[] | undefined;
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
 * <p>An object
 *          representing the collaboration member's payment responsibilities set by the collaboration
 *          creator for query compute costs.</p>
 * @public
 */
export interface QueryComputePaymentConfig {
  /**
   * <p>Indicates whether
   *          the collaboration creator has configured the collaboration member to pay for query compute
   *          costs (<code>TRUE</code>) or has not configured the collaboration member to pay for query
   *          compute costs (<code>FALSE</code>).</p>
   *          <p>Exactly one member can be configured to pay for query compute costs. An error is
   *          returned if the collaboration creator sets a <code>TRUE</code> value for more than one
   *          member in the collaboration. </p>
   *          <p>If the collaboration creator hasn't specified anyone as the member paying for query
   *          compute costs, then the member who can query is the default payer. An error is returned if
   *          the collaboration creator sets a <code>FALSE</code> value for the member who can
   *          query.</p>
   * @public
   */
  isResponsible: boolean | undefined;
}

/**
 * <p>An object
 *          representing the collaboration member's payment responsibilities set by the collaboration
 *          creator.</p>
 * @public
 */
export interface PaymentConfiguration {
  /**
   * <p>The collaboration
   *          member's payment responsibilities set by the collaboration creator for query compute
   *          costs.</p>
   * @public
   */
  queryCompute: QueryComputePaymentConfig | undefined;
}

/**
 * <p>The settings for client-side encryption for cryptographic computing.</p>
 * @public
 */
export interface DataEncryptionMetadata {
  /**
   * <p>Indicates whether encrypted tables can contain cleartext data
   *             (<code>TRUE</code>)
   *          or are to cryptographically process every column
   *             (<code>FALSE</code>).</p>
   * @public
   */
  allowCleartext: boolean | undefined;

  /**
   * <p>Indicates whether Fingerprint columns can contain duplicate entries
   *             (<code>TRUE</code>)
   *          or are to contain only non-repeated values
   *             (<code>FALSE</code>).</p>
   * @public
   */
  allowDuplicates: boolean | undefined;

  /**
   * <p>Indicates whether Fingerprint columns can be joined on any other Fingerprint column with
   *          a different name
   *             (<code>TRUE</code>)
   *          or can only be joined on Fingerprint columns of the same name
   *             (<code>FALSE</code>).</p>
   * @public
   */
  allowJoinsOnColumnsWithDifferentNames: boolean | undefined;

  /**
   * <p>Indicates whether NULL values are to be copied as NULL to encrypted tables
   *             (<code>TRUE</code>)
   *          or cryptographically processed
   *             (<code>FALSE</code>).</p>
   * @public
   */
  preserveNulls: boolean | undefined;
}

/**
 * <p>Basic metadata used to construct a new member.</p>
 * @public
 */
export interface MemberSpecification {
  /**
   * <p>The identifier used to reference members of the collaboration. Currently only supports
   *          Amazon Web Services account ID.</p>
   * @public
   */
  accountId: string | undefined;

  /**
   * <p>The abilities granted to the collaboration member.</p>
   * @public
   */
  memberAbilities: MemberAbility[] | undefined;

  /**
   * <p>The member's display name.</p>
   * @public
   */
  displayName: string | undefined;

  /**
   * <p>The collaboration
   *          member's payment responsibilities set by the collaboration creator.
   *          </p>
   *          <p>If the collaboration creator hasn't speciﬁed anyone as the member paying for query
   *          compute costs, then the member who can query is the default payer.</p>
   * @public
   */
  paymentConfiguration?: PaymentConfiguration;
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
   * @public
   */
  members: MemberSpecification[] | undefined;

  /**
   * <p>The display name for a collaboration.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A description of the collaboration provided by the collaboration owner.</p>
   * @public
   */
  description: string | undefined;

  /**
   * <p>The abilities granted to the collaboration creator.</p>
   * @public
   */
  creatorMemberAbilities: MemberAbility[] | undefined;

  /**
   * <p>The display name of the collaboration creator.</p>
   * @public
   */
  creatorDisplayName: string | undefined;

  /**
   * <p>The settings for client-side encryption with Cryptographic Computing for Clean
   *          Rooms.</p>
   * @public
   */
  dataEncryptionMetadata?: DataEncryptionMetadata;

  /**
   * <p>An indicator as to whether query logging has been enabled or disabled for the
   *          collaboration.</p>
   * @public
   */
  queryLogStatus: CollaborationQueryLogStatus | undefined;

  /**
   * <p>An optional label that you can assign to a resource when you create it. Each tag
   *          consists of a key and an optional value, both of which you define. When you use tagging,
   *          you can also use tag-based access control in IAM policies to control access
   *          to this resource.</p>
   * @public
   */
  tags?: Record<string, string>;

  /**
   * <p>The collaboration
   *          creator's payment responsibilities set by the collaboration creator. </p>
   *          <p>If the collaboration creator hasn't specified anyone as the member paying for query
   *          compute costs, then the member who can query is the default payer.</p>
   * @public
   */
  creatorPaymentConfiguration?: PaymentConfiguration;
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
 * <p>The multi-party data share environment. The collaboration contains metadata about its
 *          purpose and participants.</p>
 * @public
 */
export interface Collaboration {
  /**
   * <p>The unique ID for the collaboration.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The unique ARN for the collaboration.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>A human-readable identifier provided by the collaboration owner. Display names are not
   *          unique.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A description of the collaboration provided by the collaboration owner.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The identifier used to reference members of the collaboration. Currently only supports
   *          Amazon Web Services account ID.</p>
   * @public
   */
  creatorAccountId: string | undefined;

  /**
   * <p>A display name of the collaboration creator.</p>
   * @public
   */
  creatorDisplayName: string | undefined;

  /**
   * <p>The time when the collaboration was created.</p>
   * @public
   */
  createTime: Date | undefined;

  /**
   * <p>The time the collaboration metadata was last updated.</p>
   * @public
   */
  updateTime: Date | undefined;

  /**
   * <p>The status of a member in a collaboration.</p>
   * @public
   */
  memberStatus: MemberStatus | undefined;

  /**
   * <p>The unique ID for your membership within the collaboration.</p>
   * @public
   */
  membershipId?: string;

  /**
   * <p>The unique ARN for your membership within the collaboration.</p>
   * @public
   */
  membershipArn?: string;

  /**
   * <p>The settings for client-side encryption for cryptographic computing.</p>
   * @public
   */
  dataEncryptionMetadata?: DataEncryptionMetadata;

  /**
   * <p>An indicator as to whether query logging has been enabled or disabled for the
   *          collaboration.</p>
   * @public
   */
  queryLogStatus: CollaborationQueryLogStatus | undefined;
}

/**
 * @public
 */
export interface CreateCollaborationOutput {
  /**
   * <p>The entire created collaboration object.</p>
   * @public
   */
  collaboration: Collaboration | undefined;
}

/**
 * @public
 */
export interface DeleteCollaborationInput {
  /**
   * <p>The identifier for the collaboration.</p>
   * @public
   */
  collaborationIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteCollaborationOutput {}

/**
 * @public
 */
export interface DeleteMemberInput {
  /**
   * <p>The unique identifier for the associated collaboration.</p>
   * @public
   */
  collaborationIdentifier: string | undefined;

  /**
   * <p>The account ID of the member to remove.</p>
   * @public
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
   * @public
   */
  collaborationIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetCollaborationOutput {
  /**
   * <p>The entire collaboration for this identifier.</p>
   * @public
   */
  collaboration: Collaboration | undefined;
}

/**
 * @public
 */
export interface GetCollaborationAnalysisTemplateInput {
  /**
   * <p>A unique identifier for the collaboration that the analysis templates belong to.
   *          Currently accepts collaboration ID.</p>
   * @public
   */
  collaborationIdentifier: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) associated with the analysis template within a
   *          collaboration.</p>
   * @public
   */
  analysisTemplateArn: string | undefined;
}

/**
 * @public
 */
export interface GetCollaborationAnalysisTemplateOutput {
  /**
   * <p>The analysis template within a collaboration.</p>
   * @public
   */
  collaborationAnalysisTemplate: CollaborationAnalysisTemplate | undefined;
}

/**
 * @public
 */
export interface GetCollaborationConfiguredAudienceModelAssociationInput {
  /**
   * <p>A unique identifier for the collaboration that the configured audience model association belongs to. Accepts a collaboration ID.</p>
   * @public
   */
  collaborationIdentifier: string | undefined;

  /**
   * <p>A unique identifier for the configured audience model association that you want to retrieve.</p>
   * @public
   */
  configuredAudienceModelAssociationIdentifier: string | undefined;
}

/**
 * <p>The configured audience model association within a collaboration.</p>
 * @public
 */
export interface CollaborationConfiguredAudienceModelAssociation {
  /**
   * <p>The identifier of the configured audience model association.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the configured audience model association.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>A unique identifier for the collaboration that the configured audience model associations belong to. Accepts collaboration ID.</p>
   * @public
   */
  collaborationId: string | undefined;

  /**
   * <p>The unique ARN for the configured audience model's associated collaboration.</p>
   * @public
   */
  collaborationArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the configure audience model.</p>
   * @public
   */
  configuredAudienceModelArn: string | undefined;

  /**
   * <p>The name of the configured audience model association.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the configured audience model association.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The identifier used to reference members of the collaboration. Only supports AWS account ID.</p>
   * @public
   */
  creatorAccountId: string | undefined;

  /**
   * <p>The time at which the configured audience model association was created.</p>
   * @public
   */
  createTime: Date | undefined;

  /**
   * <p>The most recent time at which the configured audience model association was updated.</p>
   * @public
   */
  updateTime: Date | undefined;
}

/**
 * @public
 */
export interface GetCollaborationConfiguredAudienceModelAssociationOutput {
  /**
   * <p>The metadata of the configured audience model association.</p>
   * @public
   */
  collaborationConfiguredAudienceModelAssociation: CollaborationConfiguredAudienceModelAssociation | undefined;
}

/**
 * @public
 */
export interface GetCollaborationPrivacyBudgetTemplateInput {
  /**
   * <p>A unique identifier for one of your collaborations.</p>
   * @public
   */
  collaborationIdentifier: string | undefined;

  /**
   * <p>A unique identifier for one of your privacy budget templates.</p>
   * @public
   */
  privacyBudgetTemplateIdentifier: string | undefined;
}

/**
 * @public
 * @enum
 */
export const PrivacyBudgetTemplateAutoRefresh = {
  CALENDAR_MONTH: "CALENDAR_MONTH",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type PrivacyBudgetTemplateAutoRefresh =
  (typeof PrivacyBudgetTemplateAutoRefresh)[keyof typeof PrivacyBudgetTemplateAutoRefresh];

/**
 * <p>The epsilon and noise parameter values that were used for the differential privacy template.</p>
 * @public
 */
export interface DifferentialPrivacyTemplateParametersOutput {
  /**
   * <p>The epsilon value that you specified.</p>
   * @public
   */
  epsilon: number | undefined;

  /**
   * <p>Noise added per query is measured in terms of the number of users whose contributions you want to obscure. This value governs the rate at which the privacy budget is depleted.</p>
   * @public
   */
  usersNoisePerQuery: number | undefined;
}

/**
 * <p>The epsilon and noise parameters that were used in the privacy budget template.</p>
 * @public
 */
export type PrivacyBudgetTemplateParametersOutput =
  | PrivacyBudgetTemplateParametersOutput.DifferentialPrivacyMember
  | PrivacyBudgetTemplateParametersOutput.$UnknownMember;

/**
 * @public
 */
export namespace PrivacyBudgetTemplateParametersOutput {
  /**
   * <p>The epsilon and noise parameters.</p>
   * @public
   */
  export interface DifferentialPrivacyMember {
    differentialPrivacy: DifferentialPrivacyTemplateParametersOutput;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    differentialPrivacy?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    differentialPrivacy: (value: DifferentialPrivacyTemplateParametersOutput) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: PrivacyBudgetTemplateParametersOutput, visitor: Visitor<T>): T => {
    if (value.differentialPrivacy !== undefined) return visitor.differentialPrivacy(value.differentialPrivacy);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const PrivacyBudgetType = {
  DIFFERENTIAL_PRIVACY: "DIFFERENTIAL_PRIVACY",
} as const;

/**
 * @public
 */
export type PrivacyBudgetType = (typeof PrivacyBudgetType)[keyof typeof PrivacyBudgetType];

/**
 * <p>An array that specifies the information for a collaboration's privacy budget template.</p>
 * @public
 */
export interface CollaborationPrivacyBudgetTemplate {
  /**
   * <p>The unique identifier of the collaboration privacy budget template.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The ARN of the collaboration privacy budget template.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The unique identifier of the collaboration that includes this collaboration privacy budget template.</p>
   * @public
   */
  collaborationId: string | undefined;

  /**
   * <p>The ARN of the collaboration that includes this collaboration privacy budget template.</p>
   * @public
   */
  collaborationArn: string | undefined;

  /**
   * <p>The unique identifier of the account that created this collaboration privacy budget template.</p>
   * @public
   */
  creatorAccountId: string | undefined;

  /**
   * <p>The time at which the collaboration privacy budget template was created.</p>
   * @public
   */
  createTime: Date | undefined;

  /**
   * <p>The most recent time at which the collaboration privacy budget template was updated.</p>
   * @public
   */
  updateTime: Date | undefined;

  /**
   * <p>The type of privacy budget template.</p>
   * @public
   */
  privacyBudgetType: PrivacyBudgetType | undefined;

  /**
   * <p>How often the privacy budget refreshes.</p>
   *          <important>
   *             <p>If you plan to regularly bring new data into the collaboration, use <code>CALENDAR_MONTH</code> to automatically get a new privacy budget for the collaboration every calendar month. Choosing this option allows arbitrary amounts of information to be revealed about rows of the data when repeatedly queried across refreshes. Avoid choosing this if the same rows will be repeatedly queried between privacy budget refreshes.</p>
   *          </important>
   * @public
   */
  autoRefresh: PrivacyBudgetTemplateAutoRefresh | undefined;

  /**
   * <p>Specifies the epsilon and noise parameters for the privacy budget template.</p>
   * @public
   */
  parameters: PrivacyBudgetTemplateParametersOutput | undefined;
}

/**
 * @public
 */
export interface GetCollaborationPrivacyBudgetTemplateOutput {
  /**
   * <p>Returns the details of the privacy budget template that you requested.</p>
   * @public
   */
  collaborationPrivacyBudgetTemplate: CollaborationPrivacyBudgetTemplate | undefined;
}

/**
 * @public
 */
export interface GetSchemaInput {
  /**
   * <p>A unique identifier for the collaboration that the schema belongs to. Currently accepts
   *          a collaboration ID.</p>
   * @public
   */
  collaborationIdentifier: string | undefined;

  /**
   * <p>The name of the relation to retrieve the schema for.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface GetSchemaOutput {
  /**
   * <p>The entire schema object.</p>
   * @public
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
   * @public
   */
  collaborationIdentifier: string | undefined;

  /**
   * <p>The name of the schema to retrieve the analysis rule for.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The type of the schema analysis rule to retrieve. Schema analysis rules are uniquely
   *          identified by a combination of the collaboration, the schema name, and their type.</p>
   * @public
   */
  type: AnalysisRuleType | undefined;
}

/**
 * @public
 */
export interface GetSchemaAnalysisRuleOutput {
  /**
   * <p>A specification about how data from the configured table can be used.</p>
   * @public
   */
  analysisRule: AnalysisRule | undefined;
}

/**
 * @public
 */
export interface ListCollaborationAnalysisTemplatesInput {
  /**
   * <p>A unique identifier for the collaboration that the analysis templates belong to.
   *          Currently accepts collaboration ID.</p>
   * @public
   */
  collaborationIdentifier: string | undefined;

  /**
   * <p>The token value retrieved from a previous call to access the next page of
   *          results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The maximum size of the results that is returned per call.</p>
   * @public
   */
  maxResults?: number;
}

/**
 * <p>The metadata of the analysis template within a collaboration.</p>
 * @public
 */
export interface CollaborationAnalysisTemplateSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the analysis template.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The time that the summary of the analysis template in a collaboration was
   *          created.</p>
   * @public
   */
  createTime: Date | undefined;

  /**
   * <p>The identifier of the analysis template.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of the analysis template.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The time that the summary of the analysis template in the collaboration was last
   *          updated.</p>
   * @public
   */
  updateTime: Date | undefined;

  /**
   * <p>The unique ARN for the analysis template’s associated collaboration.</p>
   * @public
   */
  collaborationArn: string | undefined;

  /**
   * <p>A unique identifier for the collaboration that the analysis templates belong to.
   *          Currently accepts collaboration ID.</p>
   * @public
   */
  collaborationId: string | undefined;

  /**
   * <p>The identifier used to reference members of the collaboration. Currently only supports
   *          Amazon Web Services account ID.</p>
   * @public
   */
  creatorAccountId: string | undefined;

  /**
   * <p>The description of the analysis template.</p>
   * @public
   */
  description?: string;
}

/**
 * @public
 */
export interface ListCollaborationAnalysisTemplatesOutput {
  /**
   * <p>The token value retrieved from a previous call to access the next page of
   *          results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The metadata of the analysis template within a collaboration.</p>
   * @public
   */
  collaborationAnalysisTemplateSummaries: CollaborationAnalysisTemplateSummary[] | undefined;
}

/**
 * @public
 */
export interface ListCollaborationConfiguredAudienceModelAssociationsInput {
  /**
   * <p>A unique identifier for the collaboration that the configured audience model association belongs to. Accepts a collaboration ID.</p>
   * @public
   */
  collaborationIdentifier: string | undefined;

  /**
   * <p>The token value retrieved from a previous call to access the next page of results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The maximum size of the results that is returned per call.</p>
   * @public
   */
  maxResults?: number;
}

/**
 * <p>A summary of the configured audience model association in the collaboration.</p>
 * @public
 */
export interface CollaborationConfiguredAudienceModelAssociationSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the configured audience model association.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The time at which the configured audience model association was created.</p>
   * @public
   */
  createTime: Date | undefined;

  /**
   * <p>The identifier of the configured audience model association.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of the configured audience model association.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The most recent time at which the configured audience model association was updated.</p>
   * @public
   */
  updateTime: Date | undefined;

  /**
   * <p>The unique ARN for the configured audience model's associated collaboration.</p>
   * @public
   */
  collaborationArn: string | undefined;

  /**
   * <p>A unique identifier for the collaboration that the configured audience model associations belong to. Accepts collaboration ID.</p>
   * @public
   */
  collaborationId: string | undefined;

  /**
   * <p>The identifier used to reference members of the collaboration. Only supports AWS account ID.</p>
   * @public
   */
  creatorAccountId: string | undefined;

  /**
   * <p>The description of the configured audience model association.</p>
   * @public
   */
  description?: string;
}

/**
 * @public
 */
export interface ListCollaborationConfiguredAudienceModelAssociationsOutput {
  /**
   * <p>The metadata of the configured audience model association within a collaboration.</p>
   * @public
   */
  collaborationConfiguredAudienceModelAssociationSummaries:
    | CollaborationConfiguredAudienceModelAssociationSummary[]
    | undefined;

  /**
   * <p>The token value retrieved from a previous call to access the next page of results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListCollaborationPrivacyBudgetsInput {
  /**
   * <p>A unique identifier for one of your collaborations.</p>
   * @public
   */
  collaborationIdentifier: string | undefined;

  /**
   * <p>Specifies the type of the privacy budget.</p>
   * @public
   */
  privacyBudgetType: PrivacyBudgetType | undefined;

  /**
   * <p>The maximum size of the results that is returned per call. Service chooses a default if
   *          it has not been set. Service may return a nextToken even if the maximum results has not
   *          been met.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>The token value retrieved from a previous call to access the next page of
   *          results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 * @enum
 */
export const DifferentialPrivacyAggregationType = {
  AVG: "AVG",
  COUNT: "COUNT",
  COUNT_DISTINCT: "COUNT_DISTINCT",
  STDDEV: "STDDEV",
  SUM: "SUM",
} as const;

/**
 * @public
 */
export type DifferentialPrivacyAggregationType =
  (typeof DifferentialPrivacyAggregationType)[keyof typeof DifferentialPrivacyAggregationType];

/**
 * <p>Information about the total number of aggregations, as well as the remaining aggregations.</p>
 * @public
 */
export interface DifferentialPrivacyPrivacyBudgetAggregation {
  /**
   * <p>The different types of aggregation functions that you can perform.</p>
   * @public
   */
  type: DifferentialPrivacyAggregationType | undefined;

  /**
   * <p>The maximum number of aggregation functions that you can perform with the given privacy budget.</p>
   * @public
   */
  maxCount: number | undefined;

  /**
   * <p>The remaining number of aggregation functions that can be run with the available privacy budget.</p>
   * @public
   */
  remainingCount: number | undefined;
}

/**
 * <p>Specifies the configured epsilon value and the utility in terms of total aggregations, as well as the remaining aggregations available.</p>
 * @public
 */
export interface DifferentialPrivacyPrivacyBudget {
  /**
   * <p>This information includes the configured epsilon value and the utility in terms of total aggregations, as well as the remaining aggregations.</p>
   * @public
   */
  aggregations: DifferentialPrivacyPrivacyBudgetAggregation[] | undefined;

  /**
   * <p>The epsilon value that you configured.</p>
   * @public
   */
  epsilon: number | undefined;
}

/**
 * <p>The epsilon parameter value and number of each aggregation function that you can perform.</p>
 * @public
 */
export type PrivacyBudget = PrivacyBudget.DifferentialPrivacyMember | PrivacyBudget.$UnknownMember;

/**
 * @public
 */
export namespace PrivacyBudget {
  /**
   * <p>An object that specifies the epsilon parameter and the utility in terms of total aggregations, as well as the remaining aggregations available.</p>
   * @public
   */
  export interface DifferentialPrivacyMember {
    differentialPrivacy: DifferentialPrivacyPrivacyBudget;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    differentialPrivacy?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    differentialPrivacy: (value: DifferentialPrivacyPrivacyBudget) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: PrivacyBudget, visitor: Visitor<T>): T => {
    if (value.differentialPrivacy !== undefined) return visitor.differentialPrivacy(value.differentialPrivacy);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>A summary of the collaboration privacy budgets. This summary includes the collaboration information, creation information, epsilon provided, and utility in terms of aggregations.</p>
 * @public
 */
export interface CollaborationPrivacyBudgetSummary {
  /**
   * <p>The unique identifier of the collaboration privacy budget.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The unique identifier of the collaboration privacy budget template.</p>
   * @public
   */
  privacyBudgetTemplateId: string | undefined;

  /**
   * <p>The ARN of the collaboration privacy budget template.</p>
   * @public
   */
  privacyBudgetTemplateArn: string | undefined;

  /**
   * <p>The unique identifier of the collaboration that includes this privacy budget.</p>
   * @public
   */
  collaborationId: string | undefined;

  /**
   * <p>The ARN of the collaboration that includes this privacy budget.</p>
   * @public
   */
  collaborationArn: string | undefined;

  /**
   * <p>The unique identifier of the account that created this privacy budget.</p>
   * @public
   */
  creatorAccountId: string | undefined;

  /**
   * <p>The type of privacy budget template.</p>
   * @public
   */
  type: PrivacyBudgetType | undefined;

  /**
   * <p>The time at which the privacy budget was created.</p>
   * @public
   */
  createTime: Date | undefined;

  /**
   * <p>The most recent time at which the privacy budget was updated.</p>
   * @public
   */
  updateTime: Date | undefined;

  /**
   * <p>The includes epsilon provided and utility in terms of aggregations.</p>
   * @public
   */
  budget: PrivacyBudget | undefined;
}

/**
 * @public
 */
export interface ListCollaborationPrivacyBudgetsOutput {
  /**
   * <p>Summaries of the collaboration privacy budgets.</p>
   * @public
   */
  collaborationPrivacyBudgetSummaries: CollaborationPrivacyBudgetSummary[] | undefined;

  /**
   * <p>The token value retrieved from a previous call to access the next page of
   *          results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListCollaborationPrivacyBudgetTemplatesInput {
  /**
   * <p>A unique identifier for one of your collaborations.</p>
   * @public
   */
  collaborationIdentifier: string | undefined;

  /**
   * <p>The token value retrieved from a previous call to access the next page of
   *          results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The maximum size of the results that is returned per call. Service chooses a default if
   *          it has not been set. Service may return a nextToken even if the maximum results has not
   *          been met.</p>
   * @public
   */
  maxResults?: number;
}

/**
 * <p>A summary of the collaboration's privacy budget template. This summary includes information about who created the privacy budget template and what collaborations it belongs to.</p>
 * @public
 */
export interface CollaborationPrivacyBudgetTemplateSummary {
  /**
   * <p>The unique identifier of the collaboration privacy budget template.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The ARN of the collaboration privacy budget template.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The unique identifier of the collaboration that contains this collaboration privacy budget template.</p>
   * @public
   */
  collaborationId: string | undefined;

  /**
   * <p>The ARN of the collaboration that contains this collaboration privacy budget template.</p>
   * @public
   */
  collaborationArn: string | undefined;

  /**
   * <p>The unique identifier of the account that created this collaboration privacy budget template.</p>
   * @public
   */
  creatorAccountId: string | undefined;

  /**
   * <p>The type of the privacy budget template.</p>
   * @public
   */
  privacyBudgetType: PrivacyBudgetType | undefined;

  /**
   * <p>The time at which the collaboration privacy budget template was created.</p>
   * @public
   */
  createTime: Date | undefined;

  /**
   * <p>The most recent time at which the collaboration privacy budget template was updated.</p>
   * @public
   */
  updateTime: Date | undefined;
}

/**
 * @public
 */
export interface ListCollaborationPrivacyBudgetTemplatesOutput {
  /**
   * <p>The token value retrieved from a previous call to access the next page of
   *          results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>An array that summarizes the collaboration privacy budget templates. The summary includes collaboration information, creation information, the privacy budget type.</p>
   * @public
   */
  collaborationPrivacyBudgetTemplateSummaries: CollaborationPrivacyBudgetTemplateSummary[] | undefined;
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
   * <p>The token value retrieved from a previous call to access the next page of
   *          results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The maximum size of the results that is returned per call. Service chooses a default if
   *          it has not been set. Service may return a nextToken even if the maximum results has not
   *          been met.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>The caller's status in a collaboration.</p>
   * @public
   */
  memberStatus?: FilterableMemberStatus;
}

/**
 * <p>The metadata of the collaboration.</p>
 * @public
 */
export interface CollaborationSummary {
  /**
   * <p>The identifier for the collaboration.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The ARN of the collaboration.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>A human-readable identifier provided by the collaboration owner. Display names are not
   *          unique.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The identifier used to reference members of the collaboration. Currently only supports
   *          Amazon Web Services account ID.</p>
   * @public
   */
  creatorAccountId: string | undefined;

  /**
   * <p>The display name of the collaboration creator.</p>
   * @public
   */
  creatorDisplayName: string | undefined;

  /**
   * <p>The time when the collaboration was created.</p>
   * @public
   */
  createTime: Date | undefined;

  /**
   * <p>The time the collaboration metadata was last updated.</p>
   * @public
   */
  updateTime: Date | undefined;

  /**
   * <p>The status of a member in a collaboration.</p>
   * @public
   */
  memberStatus: MemberStatus | undefined;

  /**
   * <p>The identifier of a member in a collaboration.</p>
   * @public
   */
  membershipId?: string;

  /**
   * <p>The ARN of a member in a collaboration.</p>
   * @public
   */
  membershipArn?: string;
}

/**
 * @public
 */
export interface ListCollaborationsOutput {
  /**
   * <p>The token value retrieved from a previous call to access the next page of
   *          results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The list of collaborations.</p>
   * @public
   */
  collaborationList: CollaborationSummary[] | undefined;
}

/**
 * @public
 */
export interface ListMembersInput {
  /**
   * <p>The identifier of the collaboration in which the members are listed.</p>
   * @public
   */
  collaborationIdentifier: string | undefined;

  /**
   * <p>The token value retrieved from a previous call to access the next page of
   *          results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The maximum size of the results that is returned per call.</p>
   * @public
   */
  maxResults?: number;
}

/**
 * <p>The member object listed by the request.</p>
 * @public
 */
export interface MemberSummary {
  /**
   * <p>The identifier used to reference members of the collaboration. Currently only supports
   *          Amazon Web Services account ID.</p>
   * @public
   */
  accountId: string | undefined;

  /**
   * <p>The status of the member.
   *          </p>
   * @public
   */
  status: MemberStatus | undefined;

  /**
   * <p>The member's display name.</p>
   * @public
   */
  displayName: string | undefined;

  /**
   * <p>The abilities granted to the collaboration member.</p>
   * @public
   */
  abilities: MemberAbility[] | undefined;

  /**
   * <p>The time when the member was created.</p>
   * @public
   */
  createTime: Date | undefined;

  /**
   * <p>The time the member metadata was last updated.</p>
   * @public
   */
  updateTime: Date | undefined;

  /**
   * <p>The unique ID for the member's associated membership, if present.</p>
   * @public
   */
  membershipId?: string;

  /**
   * <p>The unique ARN for the member's associated membership, if present.</p>
   * @public
   */
  membershipArn?: string;

  /**
   * <p>The collaboration
   *          member's payment responsibilities set by the collaboration creator.
   *          </p>
   * @public
   */
  paymentConfiguration: PaymentConfiguration | undefined;
}

/**
 * @public
 */
export interface ListMembersOutput {
  /**
   * <p>The token value retrieved from a previous call to access the next page of
   *          results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The list of members returned by the ListMembers operation.</p>
   * @public
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
   * @public
   */
  collaborationIdentifier: string | undefined;

  /**
   * <p>If present, filter schemas by schema type. The only valid schema type is currently
   *          `TABLE`.</p>
   * @public
   */
  schemaType?: SchemaType;

  /**
   * <p>The token value retrieved from a previous call to access the next page of
   *          results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The maximum size of the results that is returned per call.</p>
   * @public
   */
  maxResults?: number;
}

/**
 * <p>The schema summary for the objects listed by the request.</p>
 * @public
 */
export interface SchemaSummary {
  /**
   * <p>The name for the schema object.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The type of schema object. The only valid schema type is currently `TABLE`.</p>
   * @public
   */
  type: SchemaType | undefined;

  /**
   * <p>The unique account ID for the Amazon Web Services account that owns the schema.</p>
   * @public
   */
  creatorAccountId: string | undefined;

  /**
   * <p>The time the schema object was created.</p>
   * @public
   */
  createTime: Date | undefined;

  /**
   * <p>The time the schema object was last updated.</p>
   * @public
   */
  updateTime: Date | undefined;

  /**
   * <p>The unique ID for the collaboration that the schema belongs to.</p>
   * @public
   */
  collaborationId: string | undefined;

  /**
   * <p>The unique ARN for the collaboration that the schema belongs to.</p>
   * @public
   */
  collaborationArn: string | undefined;

  /**
   * <p>The types of analysis rules that are associated with this schema object.</p>
   * @public
   */
  analysisRuleTypes: AnalysisRuleType[] | undefined;

  /**
   * <p>The analysis method for the associated schema. The only valid value is currently
   *          `DIRECT_QUERY`.</p>
   * @public
   */
  analysisMethod?: AnalysisMethod;
}

/**
 * @public
 */
export interface ListSchemasOutput {
  /**
   * <p>The retrieved list of schemas.</p>
   * @public
   */
  schemaSummaries: SchemaSummary[] | undefined;

  /**
   * <p>The token value retrieved from a previous call to access the next page of
   *          results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface UpdateCollaborationInput {
  /**
   * <p>The identifier for the collaboration.</p>
   * @public
   */
  collaborationIdentifier: string | undefined;

  /**
   * <p>A human-readable identifier provided by the collaboration owner. Display names are not
   *          unique.</p>
   * @public
   */
  name?: string;

  /**
   * <p>A description of the collaboration.</p>
   * @public
   */
  description?: string;
}

/**
 * @public
 */
export interface UpdateCollaborationOutput {
  /**
   * <p>The entire collaboration that has been updated.</p>
   * @public
   */
  collaboration: Collaboration | undefined;
}

/**
 * @public
 */
export interface CreateConfiguredAudienceModelAssociationInput {
  /**
   * <p>A unique identifier for one of your memberships for a collaboration. The configured
   *          audience model is associated to the collaboration that this membership belongs to. Accepts
   *          a membership ID.</p>
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * <p>A unique identifier for the configured audience model that you want to associate.</p>
   * @public
   */
  configuredAudienceModelArn: string | undefined;

  /**
   * <p>The name of the configured audience model association.</p>
   * @public
   */
  configuredAudienceModelAssociationName: string | undefined;

  /**
   * <p>When <code>TRUE</code>, indicates that the resource policy for the configured audience model resource being associated is configured for Clean Rooms to manage permissions related to the given collaboration. When <code>FALSE</code>, indicates that the configured audience model resource owner will manage permissions related to the given collaboration.</p>
   *          <p>Setting this to <code>TRUE</code> requires you to have permissions to create, update, and delete the resource policy for the <code>cleanrooms-ml</code> resource when you call the <a>DeleteConfiguredAudienceModelAssociation</a> resource. In addition, if you are the collaboration creator and specify <code>TRUE</code>, you must have the same permissions when you call the <a>DeleteMember</a> and <a>DeleteCollaboration</a> APIs.</p>
   * @public
   */
  manageResourcePolicies: boolean | undefined;

  /**
   * <p>An optional label that you can assign to a resource when you create it. Each tag
   *          consists of a key and an optional value, both of which you define. When you use tagging,
   *          you can also use tag-based access control in IAM policies to control access
   *          to this resource.</p>
   * @public
   */
  tags?: Record<string, string>;

  /**
   * <p>A description of the configured audience model association.</p>
   * @public
   */
  description?: string;
}

/**
 * <p>Details about the configured audience model association.</p>
 * @public
 */
export interface ConfiguredAudienceModelAssociation {
  /**
   * <p>A unique identifier of the configured audience model association.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the configured audience model association.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the configured audience model that was used for this configured audience model association.</p>
   * @public
   */
  configuredAudienceModelArn: string | undefined;

  /**
   * <p>A unique identifier for the membership that contains this configured audience model association.</p>
   * @public
   */
  membershipId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the membership that contains this configured audience model association.</p>
   * @public
   */
  membershipArn: string | undefined;

  /**
   * <p>A unique identifier of the collaboration that contains this configured audience model association.</p>
   * @public
   */
  collaborationId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the collaboration that contains this configured audience model association.</p>
   * @public
   */
  collaborationArn: string | undefined;

  /**
   * <p>The name of the configured audience model association.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>When <code>TRUE</code>, indicates that the resource policy for the configured audience model resource being associated is configured for Clean Rooms to manage permissions related to the given collaboration. When <code>FALSE</code>, indicates that the configured audience model resource owner will manage permissions related to the given collaboration.</p>
   * @public
   */
  manageResourcePolicies: boolean | undefined;

  /**
   * <p>The description of the configured audience model association.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The time at which the configured audience model association was created.</p>
   * @public
   */
  createTime: Date | undefined;

  /**
   * <p>The most recent time at which the configured audience model association was updated.</p>
   * @public
   */
  updateTime: Date | undefined;
}

/**
 * @public
 */
export interface CreateConfiguredAudienceModelAssociationOutput {
  /**
   * <p>Information about the configured audience model association.</p>
   * @public
   */
  configuredAudienceModelAssociation: ConfiguredAudienceModelAssociation | undefined;
}

/**
 * @public
 */
export interface DeleteConfiguredAudienceModelAssociationInput {
  /**
   * <p>A unique identifier of the configured audience model association that you want to delete.</p>
   * @public
   */
  configuredAudienceModelAssociationIdentifier: string | undefined;

  /**
   * <p>A unique identifier of the membership that contains the audience model association that you want to delete.</p>
   * @public
   */
  membershipIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteConfiguredAudienceModelAssociationOutput {}

/**
 * @public
 */
export interface GetConfiguredAudienceModelAssociationInput {
  /**
   * <p>A unique identifier for the configured audience model association that you want to retrieve.</p>
   * @public
   */
  configuredAudienceModelAssociationIdentifier: string | undefined;

  /**
   * <p>A unique identifier for the membership that contains the configured audience model association that you want to retrieve.</p>
   * @public
   */
  membershipIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetConfiguredAudienceModelAssociationOutput {
  /**
   * <p>Information about the configured audience model association that you requested.</p>
   * @public
   */
  configuredAudienceModelAssociation: ConfiguredAudienceModelAssociation | undefined;
}

/**
 * @public
 */
export interface ListConfiguredAudienceModelAssociationsInput {
  /**
   * <p>A unique identifier for a membership that contains the configured audience model associations that you want to retrieve.</p>
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * <p>The token value retrieved from a previous call to access the next page of results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The maximum size of the results that is returned per call. Service chooses a default if
   *          it has not been set. Service may return a nextToken even if the maximum results has not
   *          been met.</p>
   * @public
   */
  maxResults?: number;
}

/**
 * <p>A summary of the configured audience model association.</p>
 * @public
 */
export interface ConfiguredAudienceModelAssociationSummary {
  /**
   * <p>A unique identifier of the membership that contains the configured audience model association.</p>
   * @public
   */
  membershipId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the membership that contains the configured audience model association.</p>
   * @public
   */
  membershipArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the collaboration that contains the configured audience model association.</p>
   * @public
   */
  collaborationArn: string | undefined;

  /**
   * <p>A unique identifier of the collaboration that configured audience model is associated with.</p>
   * @public
   */
  collaborationId: string | undefined;

  /**
   * <p>The time at which the configured audience model association was created.</p>
   * @public
   */
  createTime: Date | undefined;

  /**
   * <p>The most recent time at which the configured audience model association was updated.</p>
   * @public
   */
  updateTime: Date | undefined;

  /**
   * <p>A unique identifier of the configured audience model association.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the configured audience model association.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The name of the configured audience model association.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the configured audience model that was used for this configured audience model association.</p>
   * @public
   */
  configuredAudienceModelArn: string | undefined;

  /**
   * <p>The description of the configured audience model association.</p>
   * @public
   */
  description?: string;
}

/**
 * @public
 */
export interface ListConfiguredAudienceModelAssociationsOutput {
  /**
   * <p>Summaries of the configured audience model associations that you requested.</p>
   * @public
   */
  configuredAudienceModelAssociationSummaries: ConfiguredAudienceModelAssociationSummary[] | undefined;

  /**
   * <p>The token value provided to access the next page of results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface UpdateConfiguredAudienceModelAssociationInput {
  /**
   * <p>A unique identifier for the configured audience model association that you want to update.</p>
   * @public
   */
  configuredAudienceModelAssociationIdentifier: string | undefined;

  /**
   * <p>A unique identifier of the membership that contains the configured audience model association that you want to update.</p>
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * <p>A new description for the configured audience model association.</p>
   * @public
   */
  description?: string;

  /**
   * <p>A new name for the configured audience model association.</p>
   * @public
   */
  name?: string;
}

/**
 * @public
 */
export interface UpdateConfiguredAudienceModelAssociationOutput {
  /**
   * <p>Details about the configured audience model association that you updated.</p>
   * @public
   */
  configuredAudienceModelAssociation: ConfiguredAudienceModelAssociation | undefined;
}

/**
 * @public
 */
export interface CreateConfiguredTableAssociationInput {
  /**
   * <p>The name of the configured table association. This name is used to query the underlying
   *          configured table.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A description for the configured table association.</p>
   * @public
   */
  description?: string;

  /**
   * <p>A unique identifier for one of your memberships for a collaboration. The configured
   *          table is associated to the collaboration that this membership belongs to. Currently accepts
   *          a membership ID.</p>
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * <p>A unique identifier for the configured table to be associated to. Currently accepts a
   *          configured table ID.</p>
   * @public
   */
  configuredTableIdentifier: string | undefined;

  /**
   * <p>The service will assume this role to access catalog metadata and query the table.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>An optional label that you can assign to a resource when you create it. Each tag
   *          consists of a key and an optional value, both of which you define. When you use tagging,
   *          you can also use tag-based access control in IAM policies to control access
   *          to this resource.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * <p>A configured table association links a configured table to a collaboration.</p>
 * @public
 */
export interface ConfiguredTableAssociation {
  /**
   * <p>The unique ARN for the configured table association.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The unique ID for the configured table association.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The unique ID for the configured table that the association refers to.</p>
   * @public
   */
  configuredTableId: string | undefined;

  /**
   * <p>The unique ARN for the configured table that the association refers to.</p>
   * @public
   */
  configuredTableArn: string | undefined;

  /**
   * <p>The unique ID for the membership this configured table association belongs to.</p>
   * @public
   */
  membershipId: string | undefined;

  /**
   * <p>The unique ARN for the membership this configured table association belongs to.</p>
   * @public
   */
  membershipArn: string | undefined;

  /**
   * <p>The service will assume this role to access catalog metadata and query the table.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>The name of the configured table association, in lowercase. The table is identified by
   *          this name when running protected queries against the underlying data.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A description of the configured table association.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The time the configured table association was created.</p>
   * @public
   */
  createTime: Date | undefined;

  /**
   * <p>The time the configured table association was last updated.</p>
   * @public
   */
  updateTime: Date | undefined;
}

/**
 * @public
 */
export interface CreateConfiguredTableAssociationOutput {
  /**
   * <p>The entire configured table association object.</p>
   * @public
   */
  configuredTableAssociation: ConfiguredTableAssociation | undefined;
}

/**
 * @public
 */
export interface DeleteConfiguredTableAssociationInput {
  /**
   * <p>The unique ID for the configured table association to be deleted. Currently accepts the
   *          configured table ID.</p>
   * @public
   */
  configuredTableAssociationIdentifier: string | undefined;

  /**
   * <p>A unique identifier for the membership that the configured table association belongs to.
   *          Currently accepts the membership ID.</p>
   * @public
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
   * <p>The unique ID for the configured table association to retrieve. Currently accepts the
   *          configured table ID.</p>
   * @public
   */
  configuredTableAssociationIdentifier: string | undefined;

  /**
   * <p>A unique identifier for the membership that the configured table association belongs to.
   *          Currently accepts the membership ID.</p>
   * @public
   */
  membershipIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetConfiguredTableAssociationOutput {
  /**
   * <p>The entire configured table association object.</p>
   * @public
   */
  configuredTableAssociation: ConfiguredTableAssociation | undefined;
}

/**
 * @public
 */
export interface ListConfiguredTableAssociationsInput {
  /**
   * <p>A unique identifier for the membership to list configured table associations for.
   *          Currently accepts the membership ID.</p>
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * <p>The token value retrieved from a previous call to access the next page of
   *          results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The maximum size of the results that is returned per call.</p>
   * @public
   */
  maxResults?: number;
}

/**
 * <p>The configured table association summary for the objects listed by the request.</p>
 * @public
 */
export interface ConfiguredTableAssociationSummary {
  /**
   * <p>The unique configured table ID that this configured table association refers to.</p>
   * @public
   */
  configuredTableId: string | undefined;

  /**
   * <p>The unique ID for the membership that the configured table association belongs
   *          to.</p>
   * @public
   */
  membershipId: string | undefined;

  /**
   * <p>The unique ARN for the membership that the configured table association belongs
   *          to.</p>
   * @public
   */
  membershipArn: string | undefined;

  /**
   * <p>The name of the configured table association. The table is identified by this name when
   *          running Protected Queries against the underlying data.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The time the configured table association was created.</p>
   * @public
   */
  createTime: Date | undefined;

  /**
   * <p>The time the configured table association was last updated.</p>
   * @public
   */
  updateTime: Date | undefined;

  /**
   * <p>The unique ID for the configured table association.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The unique ARN for the configured table association.</p>
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface ListConfiguredTableAssociationsOutput {
  /**
   * <p>The retrieved list of configured table associations.</p>
   * @public
   */
  configuredTableAssociationSummaries: ConfiguredTableAssociationSummary[] | undefined;

  /**
   * <p>The token value retrieved from a previous call to access the next page of
   *          results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface UpdateConfiguredTableAssociationInput {
  /**
   * <p>The unique identifier for the configured table association to update. Currently accepts
   *          the configured table association ID.</p>
   * @public
   */
  configuredTableAssociationIdentifier: string | undefined;

  /**
   * <p>The unique ID for the membership that the configured table association belongs
   *          to.</p>
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * <p>A new description for the configured table association.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The service will assume this role to access catalog metadata and query the table.</p>
   * @public
   */
  roleArn?: string;
}

/**
 * @public
 */
export interface UpdateConfiguredTableAssociationOutput {
  /**
   * <p>The entire updated configured table association.</p>
   * @public
   */
  configuredTableAssociation: ConfiguredTableAssociation | undefined;
}

/**
 * <p>A reference to a table within an Glue data catalog.</p>
 * @public
 */
export interface GlueTableReference {
  /**
   * <p>The name of the Glue table.</p>
   * @public
   */
  tableName: string | undefined;

  /**
   * <p>The name of the database the Glue table belongs to.</p>
   * @public
   */
  databaseName: string | undefined;
}

/**
 * <p>A pointer to the dataset that underlies this table. Currently, this can only be an Glue
 *          table.</p>
 * @public
 */
export type TableReference = TableReference.GlueMember | TableReference.$UnknownMember;

/**
 * @public
 */
export namespace TableReference {
  /**
   * <p>If present, a reference to the Glue table referred to by this table
   *          reference.</p>
   * @public
   */
  export interface GlueMember {
    glue: GlueTableReference;
    $unknown?: never;
  }

  /**
   * @public
   */
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
   * @public
   */
  name: string | undefined;

  /**
   * <p>A description for the configured table.</p>
   * @public
   */
  description?: string;

  /**
   * <p>A reference to the Glue table being configured.</p>
   * @public
   */
  tableReference: TableReference | undefined;

  /**
   * <p>The columns of the underlying table that can be used by collaborations or analysis
   *          rules.</p>
   * @public
   */
  allowedColumns: string[] | undefined;

  /**
   * <p>The analysis method for the configured tables. The only valid value is currently
   *          `DIRECT_QUERY`.</p>
   * @public
   */
  analysisMethod: AnalysisMethod | undefined;

  /**
   * <p>An optional label that you can assign to a resource when you create it. Each tag
   *          consists of a key and an optional value, both of which you define. When you use tagging,
   *          you can also use tag-based access control in IAM policies to control access
   *          to this resource.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * @public
 * @enum
 */
export const ConfiguredTableAnalysisRuleType = {
  AGGREGATION: "AGGREGATION",
  CUSTOM: "CUSTOM",
  LIST: "LIST",
} as const;

/**
 * @public
 */
export type ConfiguredTableAnalysisRuleType =
  (typeof ConfiguredTableAnalysisRuleType)[keyof typeof ConfiguredTableAnalysisRuleType];

/**
 * <p>A table that has been configured for use in a collaboration.</p>
 * @public
 */
export interface ConfiguredTable {
  /**
   * <p>The unique ID for the configured table.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The unique ARN for the configured table.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>A name for the configured table.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A description for the configured table.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The Glue table that this configured table represents.</p>
   * @public
   */
  tableReference: TableReference | undefined;

  /**
   * <p>The time the configured table was created.</p>
   * @public
   */
  createTime: Date | undefined;

  /**
   * <p>The time the configured table was last updated</p>
   * @public
   */
  updateTime: Date | undefined;

  /**
   * <p>The types of analysis rules associated with this configured table. Currently, only one
   *          analysis rule may be associated with a configured table.</p>
   * @public
   */
  analysisRuleTypes: ConfiguredTableAnalysisRuleType[] | undefined;

  /**
   * <p>The analysis method for the configured table. The only valid value is currently
   *          `DIRECT_QUERY`.</p>
   * @public
   */
  analysisMethod: AnalysisMethod | undefined;

  /**
   * <p>The columns within the underlying Glue table that can be utilized within
   *          collaborations.</p>
   * @public
   */
  allowedColumns: string[] | undefined;
}

/**
 * @public
 */
export interface CreateConfiguredTableOutput {
  /**
   * <p>The created configured table.</p>
   * @public
   */
  configuredTable: ConfiguredTable | undefined;
}

/**
 * <p>Controls on the query specifications that can be run on a configured table.</p>
 * @public
 */
export type ConfiguredTableAnalysisRulePolicyV1 =
  | ConfiguredTableAnalysisRulePolicyV1.AggregationMember
  | ConfiguredTableAnalysisRulePolicyV1.CustomMember
  | ConfiguredTableAnalysisRulePolicyV1.ListMember
  | ConfiguredTableAnalysisRulePolicyV1.$UnknownMember;

/**
 * @public
 */
export namespace ConfiguredTableAnalysisRulePolicyV1 {
  /**
   * <p>Analysis rule type that enables only list queries on a configured table.</p>
   * @public
   */
  export interface ListMember {
    list: AnalysisRuleList;
    aggregation?: never;
    custom?: never;
    $unknown?: never;
  }

  /**
   * <p>Analysis rule type that enables only aggregation queries on a configured table.</p>
   * @public
   */
  export interface AggregationMember {
    list?: never;
    aggregation: AnalysisRuleAggregation;
    custom?: never;
    $unknown?: never;
  }

  /**
   * <p>A type of analysis rule that enables the table owner to approve custom SQL queries on
   *          their configured tables. It supports differential privacy.</p>
   * @public
   */
  export interface CustomMember {
    list?: never;
    aggregation?: never;
    custom: AnalysisRuleCustom;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    list?: never;
    aggregation?: never;
    custom?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    list: (value: AnalysisRuleList) => T;
    aggregation: (value: AnalysisRuleAggregation) => T;
    custom: (value: AnalysisRuleCustom) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ConfiguredTableAnalysisRulePolicyV1, visitor: Visitor<T>): T => {
    if (value.list !== undefined) return visitor.list(value.list);
    if (value.aggregation !== undefined) return visitor.aggregation(value.aggregation);
    if (value.custom !== undefined) return visitor.custom(value.custom);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Controls on the query specifications that can be run on a configured table.</p>
 * @public
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
   * @public
   */
  export interface V1Member {
    v1: ConfiguredTableAnalysisRulePolicyV1;
    $unknown?: never;
  }

  /**
   * @public
   */
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
   * <p>The identifier for the configured table to create the analysis rule for. Currently
   *          accepts the configured table ID. </p>
   * @public
   */
  configuredTableIdentifier: string | undefined;

  /**
   * <p>The type of analysis rule.</p>
   * @public
   */
  analysisRuleType: ConfiguredTableAnalysisRuleType | undefined;

  /**
   * <p>The entire created configured table analysis rule object.</p>
   * @public
   */
  analysisRulePolicy: ConfiguredTableAnalysisRulePolicy | undefined;
}

/**
 * <p>A configured table analysis rule, which limits how data for this table can be
 *          used.</p>
 * @public
 */
export interface ConfiguredTableAnalysisRule {
  /**
   * <p>The unique ID for the configured table.</p>
   * @public
   */
  configuredTableId: string | undefined;

  /**
   * <p>The unique ARN for the configured table.</p>
   * @public
   */
  configuredTableArn: string | undefined;

  /**
   * <p>The policy that controls SQL query rules.</p>
   * @public
   */
  policy: ConfiguredTableAnalysisRulePolicy | undefined;

  /**
   * <p>The type of configured table analysis rule.</p>
   * @public
   */
  type: ConfiguredTableAnalysisRuleType | undefined;

  /**
   * <p>The time the configured table analysis rule was created.</p>
   * @public
   */
  createTime: Date | undefined;

  /**
   * <p>The time the configured table analysis rule was last updated.</p>
   * @public
   */
  updateTime: Date | undefined;
}

/**
 * @public
 */
export interface CreateConfiguredTableAnalysisRuleOutput {
  /**
   * <p>The entire created analysis rule.</p>
   * @public
   */
  analysisRule: ConfiguredTableAnalysisRule | undefined;
}

/**
 * @public
 */
export interface DeleteConfiguredTableInput {
  /**
   * <p>The unique ID for the configured table to delete.</p>
   * @public
   */
  configuredTableIdentifier: string | undefined;
}

/**
 * <p>The empty output for a successful deletion.</p>
 * @public
 */
export interface DeleteConfiguredTableOutput {}

/**
 * @public
 */
export interface DeleteConfiguredTableAnalysisRuleInput {
  /**
   * <p>The unique identifier for the configured table that the analysis rule applies to.
   *          Currently accepts the configured table ID.</p>
   * @public
   */
  configuredTableIdentifier: string | undefined;

  /**
   * <p>The analysis rule type to be deleted. Configured table analysis rules are uniquely
   *          identified by their configured table identifier and analysis rule type.</p>
   * @public
   */
  analysisRuleType: ConfiguredTableAnalysisRuleType | undefined;
}

/**
 * <p>An empty response that indicates a successful delete.</p>
 * @public
 */
export interface DeleteConfiguredTableAnalysisRuleOutput {}

/**
 * @public
 */
export interface GetConfiguredTableInput {
  /**
   * <p>The unique ID for the configured table to retrieve.</p>
   * @public
   */
  configuredTableIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetConfiguredTableOutput {
  /**
   * <p>The retrieved configured table.</p>
   * @public
   */
  configuredTable: ConfiguredTable | undefined;
}

/**
 * @public
 */
export interface GetConfiguredTableAnalysisRuleInput {
  /**
   * <p>The unique identifier for the configured table to retrieve. Currently accepts the
   *          configured table ID.</p>
   * @public
   */
  configuredTableIdentifier: string | undefined;

  /**
   * <p>The analysis rule to be retrieved. Configured table analysis rules are uniquely
   *          identified by their configured table identifier and analysis rule type.</p>
   * @public
   */
  analysisRuleType: ConfiguredTableAnalysisRuleType | undefined;
}

/**
 * @public
 */
export interface GetConfiguredTableAnalysisRuleOutput {
  /**
   * <p>The entire analysis rule output.</p>
   * @public
   */
  analysisRule: ConfiguredTableAnalysisRule | undefined;
}

/**
 * @public
 */
export interface ListConfiguredTablesInput {
  /**
   * <p>The token value retrieved from a previous call to access the next page of
   *          results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The maximum size of the results that is returned per call.</p>
   * @public
   */
  maxResults?: number;
}

/**
 * <p>The configured table summary for the objects listed by the request.</p>
 * @public
 */
export interface ConfiguredTableSummary {
  /**
   * <p>The unique ID of the configured table.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The unique ARN of the configured table.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The name of the configured table.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The time the configured table was created.</p>
   * @public
   */
  createTime: Date | undefined;

  /**
   * <p>The time the configured table was last updated.</p>
   * @public
   */
  updateTime: Date | undefined;

  /**
   * <p>The types of analysis rules associated with this configured table.</p>
   * @public
   */
  analysisRuleTypes: ConfiguredTableAnalysisRuleType[] | undefined;

  /**
   * <p>The analysis method for the configured tables. The only valid value is currently
   *          `DIRECT_QUERY`.</p>
   * @public
   */
  analysisMethod: AnalysisMethod | undefined;
}

/**
 * @public
 */
export interface ListConfiguredTablesOutput {
  /**
   * <p>The configured tables listed by the request.</p>
   * @public
   */
  configuredTableSummaries: ConfiguredTableSummary[] | undefined;

  /**
   * <p>The token value retrieved from a previous call to access the next page of
   *          results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface UpdateConfiguredTableInput {
  /**
   * <p>The identifier for the configured table to update. Currently accepts the configured
   *          table ID.</p>
   * @public
   */
  configuredTableIdentifier: string | undefined;

  /**
   * <p>A new name for the configured table.</p>
   * @public
   */
  name?: string;

  /**
   * <p>A new description for the configured table.</p>
   * @public
   */
  description?: string;
}

/**
 * @public
 */
export interface UpdateConfiguredTableOutput {
  /**
   * <p>The updated configured table.</p>
   * @public
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
   * @public
   */
  configuredTableIdentifier: string | undefined;

  /**
   * <p>The analysis rule type to be updated. Configured table analysis rules are uniquely
   *          identified by their configured table identifier and analysis rule type.</p>
   * @public
   */
  analysisRuleType: ConfiguredTableAnalysisRuleType | undefined;

  /**
   * <p>The new analysis rule policy for the configured table analysis rule.</p>
   * @public
   */
  analysisRulePolicy: ConfiguredTableAnalysisRulePolicy | undefined;
}

/**
 * @public
 */
export interface UpdateConfiguredTableAnalysisRuleOutput {
  /**
   * <p>The entire updated analysis rule.</p>
   * @public
   */
  analysisRule: ConfiguredTableAnalysisRule | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) associated with the resource you want to list tags
   *          on.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * <p>A map of objects specifying each key name and value.</p>
   * @public
   */
  tags: Record<string, string> | undefined;
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
 * <p>Contains the configuration to write the query results to S3.</p>
 * @public
 */
export interface ProtectedQueryS3OutputConfiguration {
  /**
   * <p>Intended file format of the result.</p>
   * @public
   */
  resultFormat: ResultFormat | undefined;

  /**
   * <p>The S3 bucket to unload the protected query results.</p>
   * @public
   */
  bucket: string | undefined;

  /**
   * <p>The S3 prefix to unload the protected query results.</p>
   * @public
   */
  keyPrefix?: string;
}

/**
 * <p>Contains configurations for protected query results.</p>
 * @public
 */
export type MembershipProtectedQueryOutputConfiguration =
  | MembershipProtectedQueryOutputConfiguration.S3Member
  | MembershipProtectedQueryOutputConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace MembershipProtectedQueryOutputConfiguration {
  /**
   * <p>Contains the configuration to write the query results to S3.</p>
   * @public
   */
  export interface S3Member {
    s3: ProtectedQueryS3OutputConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    s3?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    s3: (value: ProtectedQueryS3OutputConfiguration) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: MembershipProtectedQueryOutputConfiguration, visitor: Visitor<T>): T => {
    if (value.s3 !== undefined) return visitor.s3(value.s3);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Contains configurations for protected query results.</p>
 * @public
 */
export interface MembershipProtectedQueryResultConfiguration {
  /**
   * <p>Configuration for protected query results.</p>
   * @public
   */
  outputConfiguration: MembershipProtectedQueryOutputConfiguration | undefined;

  /**
   * <p>The unique ARN for an IAM role that is used by Clean Rooms to write protected
   *          query results to the result location, given by the member who can receive results.</p>
   * @public
   */
  roleArn?: string;
}

/**
 * <p>An object
 *          representing the payment responsibilities accepted by the collaboration member for query
 *          compute costs.</p>
 * @public
 */
export interface MembershipQueryComputePaymentConfig {
  /**
   * <p>Indicates whether
   *          the collaboration member has accepted to pay for query compute costs (<code>TRUE</code>) or
   *          has not accepted to pay for query compute costs
   *          (<code>FALSE</code>).</p>
   *          <p>If the collaboration creator has not specified anyone to pay for query compute costs,
   *          then the member who can query is the default payer. </p>
   *          <p>An error message is returned for the following reasons: </p>
   *          <ul>
   *             <li>
   *                <p>If you set the value to <code>FALSE</code> but you are responsible to pay for
   *                query compute costs. </p>
   *             </li>
   *             <li>
   *                <p>If you set the value to <code>TRUE</code> but you are not responsible to pay for
   *                query compute costs. </p>
   *             </li>
   *          </ul>
   * @public
   */
  isResponsible: boolean | undefined;
}

/**
 * <p>An object
 *          representing the payment responsibilities accepted by the collaboration
 *          member.</p>
 * @public
 */
export interface MembershipPaymentConfiguration {
  /**
   * <p>The payment
   *          responsibilities accepted by the collaboration member for query compute
   *          costs.</p>
   * @public
   */
  queryCompute: MembershipQueryComputePaymentConfig | undefined;
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
   * @public
   */
  collaborationIdentifier: string | undefined;

  /**
   * <p>An indicator as to whether query logging has been enabled or disabled for the
   *          membership.</p>
   * @public
   */
  queryLogStatus: MembershipQueryLogStatus | undefined;

  /**
   * <p>An optional label that you can assign to a resource when you create it. Each tag
   *          consists of a key and an optional value, both of which you define. When you use tagging,
   *          you can also use tag-based access control in IAM policies to control access
   *          to this resource.</p>
   * @public
   */
  tags?: Record<string, string>;

  /**
   * <p>The default
   *          protected query result configuration as specified by the member who can receive
   *          results.</p>
   * @public
   */
  defaultResultConfiguration?: MembershipProtectedQueryResultConfiguration;

  /**
   * <p>The payment
   *          responsibilities accepted by the collaboration member.</p>
   *          <p>Not required if the collaboration member has the member ability to run queries. </p>
   *          <p>Required if the collaboration member doesn't have the member ability to run queries but
   *          is configured as a payer by the collaboration creator. </p>
   * @public
   */
  paymentConfiguration?: MembershipPaymentConfiguration;
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
 * <p>The membership object.</p>
 * @public
 */
export interface Membership {
  /**
   * <p>The unique ID of the membership.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The unique ARN for the membership.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The unique ARN for the membership's associated collaboration.</p>
   * @public
   */
  collaborationArn: string | undefined;

  /**
   * <p>The unique ID for the membership's collaboration.</p>
   * @public
   */
  collaborationId: string | undefined;

  /**
   * <p>The identifier used to reference members of the collaboration. Currently only supports
   *          Amazon Web Services account ID.</p>
   * @public
   */
  collaborationCreatorAccountId: string | undefined;

  /**
   * <p>The display name of the collaboration creator.</p>
   * @public
   */
  collaborationCreatorDisplayName: string | undefined;

  /**
   * <p>The name of the membership's collaboration.</p>
   * @public
   */
  collaborationName: string | undefined;

  /**
   * <p>The time when the membership was created.</p>
   * @public
   */
  createTime: Date | undefined;

  /**
   * <p>The time the membership metadata was last updated.</p>
   * @public
   */
  updateTime: Date | undefined;

  /**
   * <p>The status of the
   *          membership.</p>
   * @public
   */
  status: MembershipStatus | undefined;

  /**
   * <p>The abilities granted to the collaboration member.</p>
   * @public
   */
  memberAbilities: MemberAbility[] | undefined;

  /**
   * <p>An indicator as to whether query logging has been enabled or disabled for the
   *          membership.</p>
   * @public
   */
  queryLogStatus: MembershipQueryLogStatus | undefined;

  /**
   * <p>The default protected query result configuration as specified by the member who can
   *          receive results.</p>
   * @public
   */
  defaultResultConfiguration?: MembershipProtectedQueryResultConfiguration;

  /**
   * <p>The payment
   *          responsibilities accepted by the collaboration member.</p>
   * @public
   */
  paymentConfiguration: MembershipPaymentConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateMembershipOutput {
  /**
   * <p>The membership that was created.</p>
   * @public
   */
  membership: Membership | undefined;
}

/**
 * @public
 */
export interface DeleteMembershipInput {
  /**
   * <p>The identifier for a membership resource.</p>
   * @public
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
   * @public
   */
  membershipIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetMembershipOutput {
  /**
   * <p>The membership retrieved for the provided identifier.</p>
   * @public
   */
  membership: Membership | undefined;
}

/**
 * @public
 */
export interface GetProtectedQueryInput {
  /**
   * <p>The identifier for a membership in a protected query instance.</p>
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * <p>The identifier for a protected query instance.</p>
   * @public
   */
  protectedQueryIdentifier: string | undefined;
}

/**
 * <p>Provides the sensitivity parameters.</p>
 * @public
 */
export interface DifferentialPrivacySensitivityParameters {
  /**
   * <p>The type of aggregation function that was run.</p>
   * @public
   */
  aggregationType: DifferentialPrivacyAggregationType | undefined;

  /**
   * <p>The aggregation expression that was run.</p>
   * @public
   */
  aggregationExpression: string | undefined;

  /**
   * <p>The maximum number of rows contributed by a user in a SQL query.</p>
   * @public
   */
  userContributionLimit: number | undefined;

  /**
   * <p>The lower bound of the aggregation expression.</p>
   * @public
   */
  minColumnValue?: number;

  /**
   * <p>The upper bound of the aggregation expression.</p>
   * @public
   */
  maxColumnValue?: number;
}

/**
 * <p>An array that contains the sensitivity parameters.</p>
 * @public
 */
export interface DifferentialPrivacyParameters {
  /**
   * <p>Provides the sensitivity parameters that you can use to better understand the total amount of noise in query results.</p>
   * @public
   */
  sensitivityParameters: DifferentialPrivacySensitivityParameters[] | undefined;
}

/**
 * <p>Details of errors thrown by the protected query.</p>
 * @public
 */
export interface ProtectedQueryError {
  /**
   * <p>A description of why the query failed.</p>
   * @public
   */
  message: string | undefined;

  /**
   * <p>An error code for the error.</p>
   * @public
   */
  code: string | undefined;
}

/**
 * <p>Details about the member who received the query result.</p>
 * @public
 */
export interface ProtectedQuerySingleMemberOutput {
  /**
   * <p>The Amazon Web Services account ID of the member in the collaboration who can receive results for the
   *          query.</p>
   * @public
   */
  accountId: string | undefined;
}

/**
 * <p>Contains output information for protected queries with an S3 output type.</p>
 * @public
 */
export interface ProtectedQueryS3Output {
  /**
   * <p>The S3 location of the result.</p>
   * @public
   */
  location: string | undefined;
}

/**
 * <p>Contains details about the protected query output.</p>
 * @public
 */
export type ProtectedQueryOutput =
  | ProtectedQueryOutput.MemberListMember
  | ProtectedQueryOutput.S3Member
  | ProtectedQueryOutput.$UnknownMember;

/**
 * @public
 */
export namespace ProtectedQueryOutput {
  /**
   * <p>If present, the output for a protected query with an `S3` output type.</p>
   * @public
   */
  export interface S3Member {
    s3: ProtectedQueryS3Output;
    memberList?: never;
    $unknown?: never;
  }

  /**
   * <p>The list of member Amazon Web Services account(s) that received the results of the query. </p>
   * @public
   */
  export interface MemberListMember {
    s3?: never;
    memberList: ProtectedQuerySingleMemberOutput[];
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    s3?: never;
    memberList?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    s3: (value: ProtectedQueryS3Output) => T;
    memberList: (value: ProtectedQuerySingleMemberOutput[]) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ProtectedQueryOutput, visitor: Visitor<T>): T => {
    if (value.s3 !== undefined) return visitor.s3(value.s3);
    if (value.memberList !== undefined) return visitor.memberList(value.memberList);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Details about the query results.</p>
 * @public
 */
export interface ProtectedQueryResult {
  /**
   * <p>The output of the protected query.</p>
   * @public
   */
  output: ProtectedQueryOutput | undefined;
}

/**
 * <p>Contains configuration details for protected query output.</p>
 * @public
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
   * @public
   */
  export interface S3Member {
    s3: ProtectedQueryS3OutputConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
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
 * <p>Contains configurations for protected query results.</p>
 * @public
 */
export interface ProtectedQueryResultConfiguration {
  /**
   * <p>Configuration for protected query results.</p>
   * @public
   */
  outputConfiguration: ProtectedQueryOutputConfiguration | undefined;
}

/**
 * <p>The parameters for the SQL type Protected Query.</p>
 * @public
 */
export interface ProtectedQuerySQLParameters {
  /**
   * <p>The query string to be submitted.</p>
   * @public
   */
  queryString?: string;

  /**
   * <p>The Amazon Resource Name (ARN) associated with the analysis template within a
   *          collaboration.</p>
   * @public
   */
  analysisTemplateArn?: string;

  /**
   * <p>The protected query SQL parameters.</p>
   * @public
   */
  parameters?: Record<string, string>;
}

/**
 * <p>Contains statistics about the execution of the protected query.</p>
 * @public
 */
export interface ProtectedQueryStatistics {
  /**
   * <p>The duration of the Protected Query, from creation until query completion.</p>
   * @public
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
 * <p>The parameters for an Clean Rooms protected query.</p>
 * @public
 */
export interface ProtectedQuery {
  /**
   * <p>The identifier for a protected query instance.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The identifier for the membership.</p>
   * @public
   */
  membershipId: string | undefined;

  /**
   * <p>The ARN of the membership.</p>
   * @public
   */
  membershipArn: string | undefined;

  /**
   * <p>The time at which the protected query was created.</p>
   * @public
   */
  createTime: Date | undefined;

  /**
   * <p>The protected query SQL parameters.</p>
   * @public
   */
  sqlParameters?: ProtectedQuerySQLParameters;

  /**
   * <p>The status of the query.</p>
   * @public
   */
  status: ProtectedQueryStatus | undefined;

  /**
   * <p>Contains any details needed to write the query results.</p>
   * @public
   */
  resultConfiguration?: ProtectedQueryResultConfiguration;

  /**
   * <p>Statistics about protected query execution.</p>
   * @public
   */
  statistics?: ProtectedQueryStatistics;

  /**
   * <p>The result of the protected query.</p>
   * @public
   */
  result?: ProtectedQueryResult;

  /**
   * <p>An error thrown by the protected query.</p>
   * @public
   */
  error?: ProtectedQueryError;

  /**
   * <p>The sensitivity parameters of the differential privacy results of the protected query.</p>
   * @public
   */
  differentialPrivacy?: DifferentialPrivacyParameters;
}

/**
 * @public
 */
export interface GetProtectedQueryOutput {
  /**
   * <p>The query processing metadata.</p>
   * @public
   */
  protectedQuery: ProtectedQuery | undefined;
}

/**
 * @public
 */
export interface ListMembershipsInput {
  /**
   * <p>The token value retrieved from a previous call to access the next page of
   *          results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The maximum size of the results that is returned per call.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>A filter which will return only memberships in the specified status.</p>
   * @public
   */
  status?: MembershipStatus;
}

/**
 * <p>The membership object listed by the request.</p>
 * @public
 */
export interface MembershipSummary {
  /**
   * <p>The unique ID for the membership's collaboration.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The unique ARN for the membership.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The unique ARN for the membership's associated collaboration.</p>
   * @public
   */
  collaborationArn: string | undefined;

  /**
   * <p>The unique ID for the membership's collaboration.</p>
   * @public
   */
  collaborationId: string | undefined;

  /**
   * <p>The identifier of the Amazon Web Services principal that created the collaboration. Currently only
   *          supports Amazon Web Services account ID.</p>
   * @public
   */
  collaborationCreatorAccountId: string | undefined;

  /**
   * <p>The display name of the collaboration creator.</p>
   * @public
   */
  collaborationCreatorDisplayName: string | undefined;

  /**
   * <p>The name for the membership's collaboration.</p>
   * @public
   */
  collaborationName: string | undefined;

  /**
   * <p>The time when the membership was created.</p>
   * @public
   */
  createTime: Date | undefined;

  /**
   * <p>The time the membership metadata was last updated.</p>
   * @public
   */
  updateTime: Date | undefined;

  /**
   * <p>The status of the
   *          membership.</p>
   * @public
   */
  status: MembershipStatus | undefined;

  /**
   * <p>The abilities granted to the collaboration member.</p>
   * @public
   */
  memberAbilities: MemberAbility[] | undefined;

  /**
   * <p>The payment
   *          responsibilities accepted by the collaboration member.</p>
   * @public
   */
  paymentConfiguration: MembershipPaymentConfiguration | undefined;
}

/**
 * @public
 */
export interface ListMembershipsOutput {
  /**
   * <p>The token value retrieved from a previous call to access the next page of
   *          results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The list of memberships returned from the ListMemberships operation.</p>
   * @public
   */
  membershipSummaries: MembershipSummary[] | undefined;
}

/**
 * @public
 */
export interface ListPrivacyBudgetsInput {
  /**
   * <p>A unique identifier for one of your memberships for a collaboration. The privacy budget is retrieved from the collaboration that this membership belongs to. Accepts a membership ID.</p>
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * <p>The privacy budget type.</p>
   * @public
   */
  privacyBudgetType: PrivacyBudgetType | undefined;

  /**
   * <p>The token value retrieved from a previous call to access the next page of
   *          results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The maximum size of the results that is returned per call. Service chooses a default if
   *          it has not been set. Service may return a nextToken even if the maximum results has not
   *          been met.</p>
   * @public
   */
  maxResults?: number;
}

/**
 * <p>An array that summaries the specified privacy budget. This summary includes collaboration information, creation information, membership information, and privacy budget information.</p>
 * @public
 */
export interface PrivacyBudgetSummary {
  /**
   * <p>The unique identifier of the privacy budget.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The unique identifier of the privacy budget template.</p>
   * @public
   */
  privacyBudgetTemplateId: string | undefined;

  /**
   * <p>The ARN of the privacy budget template.</p>
   * @public
   */
  privacyBudgetTemplateArn: string | undefined;

  /**
   * <p>The identifier for a membership resource.</p>
   * @public
   */
  membershipId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the member who created the privacy budget summary.</p>
   * @public
   */
  membershipArn: string | undefined;

  /**
   * <p>The unique identifier of the collaboration that contains this privacy budget.</p>
   * @public
   */
  collaborationId: string | undefined;

  /**
   * <p>The ARN of the collaboration that contains this privacy budget.</p>
   * @public
   */
  collaborationArn: string | undefined;

  /**
   * <p>Specifies the type of the privacy budget.</p>
   * @public
   */
  type: PrivacyBudgetType | undefined;

  /**
   * <p>The time at which the privacy budget was created.</p>
   * @public
   */
  createTime: Date | undefined;

  /**
   * <p>The most recent time at which the privacy budget was updated.</p>
   * @public
   */
  updateTime: Date | undefined;

  /**
   * <p>The provided privacy budget.</p>
   * @public
   */
  budget: PrivacyBudget | undefined;
}

/**
 * @public
 */
export interface ListPrivacyBudgetsOutput {
  /**
   * <p>An array that summarizes the privacy budgets. The summary includes collaboration information, membership information, privacy budget template information, and privacy budget details.</p>
   * @public
   */
  privacyBudgetSummaries: PrivacyBudgetSummary[] | undefined;

  /**
   * <p>The token value retrieved from a previous call to access the next page of
   *          results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListProtectedQueriesInput {
  /**
   * <p>The identifier for the membership in the collaboration.</p>
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * <p>A filter on the status of the protected query.</p>
   * @public
   */
  status?: ProtectedQueryStatus;

  /**
   * <p>The token value retrieved from a previous call to access the next page of
   *          results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The maximum size of the results that is returned per call. Service chooses a default if
   *          it has not been set. Service can return a nextToken even if the maximum results has not
   *          been met. </p>
   * @public
   */
  maxResults?: number;
}

/**
 * <p>The protected query summary for the objects listed by the request.</p>
 * @public
 */
export interface ProtectedQuerySummary {
  /**
   * <p>The unique ID of the protected query.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The unique ID for the membership that initiated the protected query.</p>
   * @public
   */
  membershipId: string | undefined;

  /**
   * <p>The unique ARN for the membership that initiated the protected query.</p>
   * @public
   */
  membershipArn: string | undefined;

  /**
   * <p>The time the protected query was created.</p>
   * @public
   */
  createTime: Date | undefined;

  /**
   * <p>The status of the protected query. Value values are `SUBMITTED`, `STARTED`, `CANCELLED`,
   *          `CANCELLING`, `FAILED`, `SUCCESS`, `TIMED_OUT`.</p>
   * @public
   */
  status: ProtectedQueryStatus | undefined;
}

/**
 * @public
 */
export interface ListProtectedQueriesOutput {
  /**
   * <p>The token value retrieved from a previous call to access the next page of
   *          results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>A list of protected queries.</p>
   * @public
   */
  protectedQueries: ProtectedQuerySummary[] | undefined;
}

/**
 * <p>The epsilon and noise parameters that you want to preview.</p>
 * @public
 */
export interface DifferentialPrivacyPreviewParametersInput {
  /**
   * <p>The epsilon value that you want to preview.</p>
   * @public
   */
  epsilon: number | undefined;

  /**
   * <p>Noise added per query is measured in terms of the number of users whose contributions you want to obscure. This value governs the rate at which the privacy budget is depleted.</p>
   * @public
   */
  usersNoisePerQuery: number | undefined;
}

/**
 * <p>Specifies the updated epsilon and noise parameters to preview. The preview allows you to see how the maximum number of each type of aggregation function would change with the new parameters.</p>
 * @public
 */
export type PreviewPrivacyImpactParametersInput =
  | PreviewPrivacyImpactParametersInput.DifferentialPrivacyMember
  | PreviewPrivacyImpactParametersInput.$UnknownMember;

/**
 * @public
 */
export namespace PreviewPrivacyImpactParametersInput {
  /**
   * <p>An array that specifies the epsilon and noise parameters.</p>
   * @public
   */
  export interface DifferentialPrivacyMember {
    differentialPrivacy: DifferentialPrivacyPreviewParametersInput;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    differentialPrivacy?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    differentialPrivacy: (value: DifferentialPrivacyPreviewParametersInput) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: PreviewPrivacyImpactParametersInput, visitor: Visitor<T>): T => {
    if (value.differentialPrivacy !== undefined) return visitor.differentialPrivacy(value.differentialPrivacy);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface PreviewPrivacyImpactInput {
  /**
   * <p>A unique identifier for one of your memberships for a collaboration. Accepts a membership ID.</p>
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * <p>Specifies the desired epsilon and noise parameters to preview.</p>
   * @public
   */
  parameters: PreviewPrivacyImpactParametersInput | undefined;
}

/**
 * <p>Provides an estimate of the number of aggregation functions that the member who can query can run given the epsilon and noise parameters.</p>
 * @public
 */
export interface DifferentialPrivacyPreviewAggregation {
  /**
   * <p>The type of aggregation function.</p>
   * @public
   */
  type: DifferentialPrivacyAggregationType | undefined;

  /**
   * <p>The maximum number of aggregations that the member who can query can run given the epsilon and noise parameters.</p>
   * @public
   */
  maxCount: number | undefined;
}

/**
 * <p>Information about the number of aggregation functions that the member who can query can run given the epsilon and noise parameters.</p>
 * @public
 */
export interface DifferentialPrivacyPrivacyImpact {
  /**
   * <p>The number of aggregation functions that you can perform.</p>
   * @public
   */
  aggregations: DifferentialPrivacyPreviewAggregation[] | undefined;
}

/**
 * <p>Provides an estimate of the number of aggregation functions that the member who can query can run given the epsilon and noise parameters.</p>
 * @public
 */
export type PrivacyImpact = PrivacyImpact.DifferentialPrivacyMember | PrivacyImpact.$UnknownMember;

/**
 * @public
 */
export namespace PrivacyImpact {
  /**
   * <p>An object that lists the number and type of aggregation functions you can perform.</p>
   * @public
   */
  export interface DifferentialPrivacyMember {
    differentialPrivacy: DifferentialPrivacyPrivacyImpact;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    differentialPrivacy?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    differentialPrivacy: (value: DifferentialPrivacyPrivacyImpact) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: PrivacyImpact, visitor: Visitor<T>): T => {
    if (value.differentialPrivacy !== undefined) return visitor.differentialPrivacy(value.differentialPrivacy);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface PreviewPrivacyImpactOutput {
  /**
   * <p>An estimate of the number of aggregation functions that the member who can query can run given the epsilon and noise parameters. This does not change the privacy budget.</p>
   * @public
   */
  privacyImpact: PrivacyImpact | undefined;
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
   * @public
   */
  type: ProtectedQueryType | undefined;

  /**
   * <p>A unique identifier for the membership to run this query against. Currently accepts a
   *          membership ID.</p>
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * <p>The protected SQL query parameters.</p>
   * @public
   */
  sqlParameters: ProtectedQuerySQLParameters | undefined;

  /**
   * <p>The details needed to write the query results.</p>
   * @public
   */
  resultConfiguration?: ProtectedQueryResultConfiguration;
}

/**
 * @public
 */
export interface StartProtectedQueryOutput {
  /**
   * <p>The protected query.</p>
   * @public
   */
  protectedQuery: ProtectedQuery | undefined;
}

/**
 * @public
 */
export interface UpdateMembershipInput {
  /**
   * <p>The unique identifier of the membership.</p>
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * <p>An indicator as to whether query logging has been enabled or disabled for the
   *          membership.</p>
   * @public
   */
  queryLogStatus?: MembershipQueryLogStatus;

  /**
   * <p>The default protected query result configuration as specified by the member who can
   *          receive results.</p>
   * @public
   */
  defaultResultConfiguration?: MembershipProtectedQueryResultConfiguration;
}

/**
 * @public
 */
export interface UpdateMembershipOutput {
  /**
   * <p>The membership object.</p>
   * @public
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
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * <p>The identifier for a protected query instance.</p>
   * @public
   */
  protectedQueryIdentifier: string | undefined;

  /**
   * <p>The target status of a query. Used to update the execution status of a currently running
   *          query.</p>
   * @public
   */
  targetStatus: TargetProtectedQueryStatus | undefined;
}

/**
 * @public
 */
export interface UpdateProtectedQueryOutput {
  /**
   * <p>The protected query output.</p>
   * @public
   */
  protectedQuery: ProtectedQuery | undefined;
}

/**
 * <p>The epsilon and noise parameter values that you want to use for the differential privacy template.</p>
 * @public
 */
export interface DifferentialPrivacyTemplateParametersInput {
  /**
   * <p>The epsilon value that you want to use.</p>
   * @public
   */
  epsilon: number | undefined;

  /**
   * <p>Noise added per query is measured in terms of the number of users whose contributions you want to obscure. This value governs the rate at which the privacy budget is depleted.</p>
   * @public
   */
  usersNoisePerQuery: number | undefined;
}

/**
 * <p>The epsilon and noise parameters that you want to use for the privacy budget template.</p>
 * @public
 */
export type PrivacyBudgetTemplateParametersInput =
  | PrivacyBudgetTemplateParametersInput.DifferentialPrivacyMember
  | PrivacyBudgetTemplateParametersInput.$UnknownMember;

/**
 * @public
 */
export namespace PrivacyBudgetTemplateParametersInput {
  /**
   * <p>An object that specifies the epsilon and noise parameters.</p>
   * @public
   */
  export interface DifferentialPrivacyMember {
    differentialPrivacy: DifferentialPrivacyTemplateParametersInput;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    differentialPrivacy?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    differentialPrivacy: (value: DifferentialPrivacyTemplateParametersInput) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: PrivacyBudgetTemplateParametersInput, visitor: Visitor<T>): T => {
    if (value.differentialPrivacy !== undefined) return visitor.differentialPrivacy(value.differentialPrivacy);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface CreatePrivacyBudgetTemplateInput {
  /**
   * <p>A unique identifier for one of your memberships for a collaboration. The privacy budget template is created in the collaboration that this membership belongs to. Accepts a membership ID.</p>
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * <p>How often the privacy budget refreshes.</p>
   *          <important>
   *             <p>If you plan to regularly bring new data into the collaboration, you can use <code>CALENDAR_MONTH</code> to automatically get a new privacy budget for the collaboration every calendar month. Choosing this option allows arbitrary amounts of information to be revealed about rows of the data when repeatedly queries across refreshes. Avoid choosing this if the same rows will be repeatedly queried between privacy budget refreshes.</p>
   *          </important>
   * @public
   */
  autoRefresh: PrivacyBudgetTemplateAutoRefresh | undefined;

  /**
   * <p>Specifies the type of the privacy budget template.</p>
   * @public
   */
  privacyBudgetType: PrivacyBudgetType | undefined;

  /**
   * <p>Specifies your parameters for the privacy budget template.</p>
   * @public
   */
  parameters: PrivacyBudgetTemplateParametersInput | undefined;

  /**
   * <p>An optional label that you can assign to a resource when you create it. Each tag
   *          consists of a key and an optional value, both of which you define. When you use tagging,
   *          you can also use tag-based access control in IAM policies to control access
   *          to this resource.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * <p>An object that defines the privacy budget template.</p>
 * @public
 */
export interface PrivacyBudgetTemplate {
  /**
   * <p>The unique identifier of the privacy budget template.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The ARN of the privacy budget template.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The identifier for a membership resource.</p>
   * @public
   */
  membershipId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the member who created the privacy budget template.</p>
   * @public
   */
  membershipArn: string | undefined;

  /**
   * <p>The unique ID of the collaboration that contains this privacy budget template.</p>
   * @public
   */
  collaborationId: string | undefined;

  /**
   * <p>The ARN of the collaboration that contains this privacy budget template.</p>
   * @public
   */
  collaborationArn: string | undefined;

  /**
   * <p>The time at which the privacy budget template was created.</p>
   * @public
   */
  createTime: Date | undefined;

  /**
   * <p>The most recent time at which the privacy budget template was updated.</p>
   * @public
   */
  updateTime: Date | undefined;

  /**
   * <p>Specifies the type of the privacy budget template.</p>
   * @public
   */
  privacyBudgetType: PrivacyBudgetType | undefined;

  /**
   * <p>How often the privacy budget refreshes.</p>
   *          <important>
   *             <p>If you plan to regularly bring new data into the collaboration, use <code>CALENDAR_MONTH</code> to automatically get a new privacy budget for the collaboration every calendar month. Choosing this option allows arbitrary amounts of information to be revealed about rows of the data when repeatedly queried across refreshes. Avoid choosing this if the same rows will be repeatedly queried between privacy budget refreshes.</p>
   *          </important>
   * @public
   */
  autoRefresh: PrivacyBudgetTemplateAutoRefresh | undefined;

  /**
   * <p>Specifies the epislon and noise parameters for the privacy budget template.</p>
   * @public
   */
  parameters: PrivacyBudgetTemplateParametersOutput | undefined;
}

/**
 * @public
 */
export interface CreatePrivacyBudgetTemplateOutput {
  /**
   * <p>A summary of the elements in the privacy budget template.</p>
   * @public
   */
  privacyBudgetTemplate: PrivacyBudgetTemplate | undefined;
}

/**
 * @public
 */
export interface DeletePrivacyBudgetTemplateInput {
  /**
   * <p>A unique identifier for one of your memberships for a collaboration. The privacy budget template is deleted from the collaboration that this membership belongs to. Accepts a membership ID.</p>
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * <p>A unique identifier for your privacy budget template. </p>
   * @public
   */
  privacyBudgetTemplateIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeletePrivacyBudgetTemplateOutput {}

/**
 * @public
 */
export interface GetPrivacyBudgetTemplateInput {
  /**
   * <p>A unique identifier for one of your memberships for a collaboration. The privacy budget template is retrieved from the collaboration that this membership belongs to. Accepts a membership ID.</p>
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * <p>A unique identifier for your privacy budget template.</p>
   * @public
   */
  privacyBudgetTemplateIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetPrivacyBudgetTemplateOutput {
  /**
   * <p>Returns the details of the privacy budget template that you requested.</p>
   * @public
   */
  privacyBudgetTemplate: PrivacyBudgetTemplate | undefined;
}

/**
 * @public
 */
export interface ListPrivacyBudgetTemplatesInput {
  /**
   * <p>A unique identifier for one of your memberships for a collaboration. The privacy budget templates are retrieved from the collaboration that this membership belongs to. Accepts a membership ID.</p>
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * <p>The token value retrieved from a previous call to access the next page of
   *          results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The maximum size of the results that is returned per call. Service chooses a default if
   *          it has not been set. Service may return a nextToken even if the maximum results has not
   *          been met.</p>
   * @public
   */
  maxResults?: number;
}

/**
 * <p>A summary of the privacy budget template. The summary includes membership information, collaboration information, and creation information.</p>
 * @public
 */
export interface PrivacyBudgetTemplateSummary {
  /**
   * <p>The unique identifier of the privacy budget template.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The ARN of the privacy budget template.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The identifier for a membership resource.</p>
   * @public
   */
  membershipId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the member who created the privacy budget template.</p>
   * @public
   */
  membershipArn: string | undefined;

  /**
   * <p>The unique ID of the collaboration that contains this privacy budget template.</p>
   * @public
   */
  collaborationId: string | undefined;

  /**
   * <p>The ARN of the collaboration that contains this privacy budget template.</p>
   * @public
   */
  collaborationArn: string | undefined;

  /**
   * <p>The type of the privacy budget template.</p>
   * @public
   */
  privacyBudgetType: PrivacyBudgetType | undefined;

  /**
   * <p>The time at which the privacy budget template was created.</p>
   * @public
   */
  createTime: Date | undefined;

  /**
   * <p>The most recent time at which the privacy budget template was updated.</p>
   * @public
   */
  updateTime: Date | undefined;
}

/**
 * @public
 */
export interface ListPrivacyBudgetTemplatesOutput {
  /**
   * <p>The token value retrieved from a previous call to access the next page of
   *          results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>An array that summarizes the privacy budget templates. The summary includes collaboration information, creation information, and privacy budget type.</p>
   * @public
   */
  privacyBudgetTemplateSummaries: PrivacyBudgetTemplateSummary[] | undefined;
}

/**
 * <p>The epsilon and noise parameter values that you want to update in the differential privacy template.</p>
 * @public
 */
export interface DifferentialPrivacyTemplateUpdateParameters {
  /**
   * <p>The updated epsilon value that you want to use.</p>
   * @public
   */
  epsilon?: number;

  /**
   * <p>The updated value of noise added per query. It is measured in terms of the number of users whose contributions you want to obscure. This value governs the rate at which the privacy budget is depleted.</p>
   * @public
   */
  usersNoisePerQuery?: number;
}

/**
 * <p>The epsilon and noise parameters that you want to update in the privacy budget template.</p>
 * @public
 */
export type PrivacyBudgetTemplateUpdateParameters =
  | PrivacyBudgetTemplateUpdateParameters.DifferentialPrivacyMember
  | PrivacyBudgetTemplateUpdateParameters.$UnknownMember;

/**
 * @public
 */
export namespace PrivacyBudgetTemplateUpdateParameters {
  /**
   * <p>An object that specifies the new values for the epsilon and noise parameters.</p>
   * @public
   */
  export interface DifferentialPrivacyMember {
    differentialPrivacy: DifferentialPrivacyTemplateUpdateParameters;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    differentialPrivacy?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    differentialPrivacy: (value: DifferentialPrivacyTemplateUpdateParameters) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: PrivacyBudgetTemplateUpdateParameters, visitor: Visitor<T>): T => {
    if (value.differentialPrivacy !== undefined) return visitor.differentialPrivacy(value.differentialPrivacy);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface UpdatePrivacyBudgetTemplateInput {
  /**
   * <p>A unique identifier for one of your memberships for a collaboration. The privacy budget template is updated in the collaboration that this membership belongs to. Accepts a membership ID.</p>
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * <p>A unique identifier for your privacy budget template that you want to update.</p>
   * @public
   */
  privacyBudgetTemplateIdentifier: string | undefined;

  /**
   * <p>Specifies the type of the privacy budget template.</p>
   * @public
   */
  privacyBudgetType: PrivacyBudgetType | undefined;

  /**
   * <p>Specifies the epsilon and noise parameters for the privacy budget template.</p>
   * @public
   */
  parameters?: PrivacyBudgetTemplateUpdateParameters;
}

/**
 * @public
 */
export interface UpdatePrivacyBudgetTemplateOutput {
  /**
   * <p>Summary of the privacy budget template.</p>
   * @public
   */
  privacyBudgetTemplate: PrivacyBudgetTemplate | undefined;
}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) associated with the resource you want to tag.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>A map of objects specifying each key name and value.</p>
   * @public
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
   * <p>The Amazon Resource Name (ARN) associated with the resource you want to remove the tag
   *          from.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>A list of key names of tags to be removed.</p>
   * @public
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
export const AnalysisParameterFilterSensitiveLog = (obj: AnalysisParameter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AnalysisSourceFilterSensitiveLog = (obj: AnalysisSource): any => {
  if (obj.text !== undefined) return { text: obj.text };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const AnalysisTemplateFilterSensitiveLog = (obj: AnalysisTemplate): any => ({
  ...obj,
  ...(obj.source && { source: SENSITIVE_STRING }),
  ...(obj.analysisParameters && { analysisParameters: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateAnalysisTemplateInputFilterSensitiveLog = (obj: CreateAnalysisTemplateInput): any => ({
  ...obj,
  ...(obj.source && { source: SENSITIVE_STRING }),
  ...(obj.analysisParameters && { analysisParameters: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateAnalysisTemplateOutputFilterSensitiveLog = (obj: CreateAnalysisTemplateOutput): any => ({
  ...obj,
  ...(obj.analysisTemplate && { analysisTemplate: AnalysisTemplateFilterSensitiveLog(obj.analysisTemplate) }),
});

/**
 * @internal
 */
export const GetAnalysisTemplateOutputFilterSensitiveLog = (obj: GetAnalysisTemplateOutput): any => ({
  ...obj,
  ...(obj.analysisTemplate && { analysisTemplate: AnalysisTemplateFilterSensitiveLog(obj.analysisTemplate) }),
});

/**
 * @internal
 */
export const UpdateAnalysisTemplateOutputFilterSensitiveLog = (obj: UpdateAnalysisTemplateOutput): any => ({
  ...obj,
  ...(obj.analysisTemplate && { analysisTemplate: AnalysisTemplateFilterSensitiveLog(obj.analysisTemplate) }),
});

/**
 * @internal
 */
export const CollaborationAnalysisTemplateFilterSensitiveLog = (obj: CollaborationAnalysisTemplate): any => ({
  ...obj,
  ...(obj.source && { source: SENSITIVE_STRING }),
  ...(obj.analysisParameters && { analysisParameters: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const BatchGetCollaborationAnalysisTemplateOutputFilterSensitiveLog = (
  obj: BatchGetCollaborationAnalysisTemplateOutput
): any => ({
  ...obj,
  ...(obj.collaborationAnalysisTemplates && {
    collaborationAnalysisTemplates: obj.collaborationAnalysisTemplates.map((item) =>
      CollaborationAnalysisTemplateFilterSensitiveLog(item)
    ),
  }),
});

/**
 * @internal
 */
export const GetCollaborationAnalysisTemplateOutputFilterSensitiveLog = (
  obj: GetCollaborationAnalysisTemplateOutput
): any => ({
  ...obj,
  ...(obj.collaborationAnalysisTemplate && {
    collaborationAnalysisTemplate: CollaborationAnalysisTemplateFilterSensitiveLog(obj.collaborationAnalysisTemplate),
  }),
});

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
