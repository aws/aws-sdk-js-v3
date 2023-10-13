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
   * @public
   * <p>A reason code for the exception.</p>
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
 * @public
 * <p>Column in configured table that can be used in aggregate function in query.</p>
 */
export interface AggregateColumn {
  /**
   * @public
   * <p>Column names in configured table of aggregate columns.</p>
   */
  columnNames: string[] | undefined;

  /**
   * @public
   * <p>Aggregation function that can be applied to aggregate column in query.</p>
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
 * @public
 * <p>Constraint on query output removing output rows that do not meet a minimum number of
 *          distinct values of a specified column.</p>
 */
export interface AggregationConstraint {
  /**
   * @public
   * <p>Column in aggregation constraint for which there must be a minimum number of distinct
   *          values in an output row for it to be in the query output.</p>
   */
  columnName: string | undefined;

  /**
   * @public
   * <p>The minimum number of distinct values that an output row must be an aggregation of.
   *          Minimum threshold of distinct values for a specified column that must exist in an output
   *          row for it to be in the query output.</p>
   */
  minimum: number | undefined;

  /**
   * @public
   * <p>The type of aggregation the constraint allows. The only valid value is currently
   *          `COUNT_DISTINCT`.</p>
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
 * @public
 * <p>Optional. The member who can query can provide this placeholder for a literal data value
 *          in an analysis template.</p>
 */
export interface AnalysisParameter {
  /**
   * @public
   * <p>The name of the parameter. The name must use only alphanumeric, underscore (_), or
   *          hyphen (-) characters but cannot start or end with a hyphen.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The type of parameter.</p>
   */
  type: ParameterType | undefined;

  /**
   * @public
   * <p>Optional. The default value that is applied in the analysis template. The member who can
   *          query can override this value in the query editor.</p>
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
 * <p>A type of analysis rule that enables query structure and specified queries that produce
 *          aggregate statistics.</p>
 */
export interface AnalysisRuleAggregation {
  /**
   * @public
   * <p>The columns that query runners are allowed to use in aggregation queries.</p>
   */
  aggregateColumns: AggregateColumn[] | undefined;

  /**
   * @public
   * <p>Columns in configured table that can be used in join statements and/or as aggregate
   *          columns. They can never be outputted directly.</p>
   */
  joinColumns: string[] | undefined;

  /**
   * @public
   * <p>Control that requires member who runs query to do a join with their configured table
   *          and/or other configured table in query.</p>
   */
  joinRequired?: JoinRequiredOption;

  /**
   * @public
   * <p>Which logical operators (if any) are to be used in an INNER JOIN match condition.
   *          Default is <code>AND</code>.</p>
   */
  allowedJoinOperators?: JoinOperator[];

  /**
   * @public
   * <p>The columns that query runners are allowed to select, group by, or filter by.</p>
   */
  dimensionColumns: string[] | undefined;

  /**
   * @public
   * <p>Set of scalar functions that are allowed to be used on dimension columns and the output
   *          of aggregation of metrics.</p>
   */
  scalarFunctions: ScalarFunctions[] | undefined;

  /**
   * @public
   * <p>Columns that must meet a specific threshold value (after an aggregation function is
   *          applied to it) for each output row to be returned.</p>
   */
  outputConstraints: AggregationConstraint[] | undefined;
}

/**
 * @public
 * <p>A type of analysis rule that enables the table owner to approve custom SQL queries on
 *          their configured tables.</p>
 */
export interface AnalysisRuleCustom {
  /**
   * @public
   * <p>The analysis templates that are allowed by the custom analysis rule.</p>
   */
  allowedAnalyses: string[] | undefined;

  /**
   * @public
   * <p>The Amazon Web Services accounts that are allowed to query by the custom analysis rule. Required when
   *             <code>allowedAnalyses</code> is <code>ANY_QUERY</code>.</p>
   */
  allowedAnalysisProviders?: string[];
}

/**
 * @public
 * <p>A type of analysis rule that enables row-level analysis.</p>
 */
export interface AnalysisRuleList {
  /**
   * @public
   * <p>Columns that can be used to join a configured table with the table of the member who can
   *          query and other members' configured tables.</p>
   */
  joinColumns: string[] | undefined;

  /**
   * @public
   * <p>The logical operators (if any) that are to be used in an INNER JOIN match condition.
   *          Default is <code>AND</code>.</p>
   */
  allowedJoinOperators?: JoinOperator[];

  /**
   * @public
   * <p>Columns that can be listed in the output.</p>
   */
  listColumns: string[] | undefined;
}

/**
 * @public
 * <p>Controls on the query specifications that can be run on configured table.</p>
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
   * @public
   * <p>Analysis rule type that enables only list queries on a configured table.</p>
   */
  export interface ListMember {
    list: AnalysisRuleList;
    aggregation?: never;
    custom?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>Analysis rule type that enables only aggregation queries on a configured table.</p>
   */
  export interface AggregationMember {
    list?: never;
    aggregation: AnalysisRuleAggregation;
    custom?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>Analysis rule type that enables custom SQL queries on a configured table.</p>
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
 * @public
 * <p>Controls on the query specifications that can be run on configured table.</p>
 */
export type AnalysisRulePolicy = AnalysisRulePolicy.V1Member | AnalysisRulePolicy.$UnknownMember;

/**
 * @public
 */
export namespace AnalysisRulePolicy {
  /**
   * @public
   * <p>Controls on the query specifications that can be run on configured table.</p>
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
 * @public
 * <p>A specification about how data from the configured table can be used in a query.</p>
 */
export interface AnalysisRule {
  /**
   * @public
   * <p>The unique ID for the associated collaboration.</p>
   */
  collaborationId: string | undefined;

  /**
   * @public
   * <p>The type of analysis rule.</p>
   */
  type: AnalysisRuleType | undefined;

  /**
   * @public
   * <p>The name for the analysis rule.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The time the analysis rule was created.</p>
   */
  createTime: Date | undefined;

  /**
   * @public
   * <p>The time the analysis rule was last updated.</p>
   */
  updateTime: Date | undefined;

  /**
   * @public
   * <p>A policy that describes the associated data usage limitations.</p>
   */
  policy: AnalysisRulePolicy | undefined;
}

/**
 * @public
 * <p>A relation within an analysis.</p>
 */
export interface AnalysisSchema {
  /**
   * @public
   * <p>The tables referenced in the analysis schema.</p>
   */
  referencedTables?: string[];
}

/**
 * @public
 * <p>The structure that defines the body of the analysis template.</p>
 */
export type AnalysisSource = AnalysisSource.TextMember | AnalysisSource.$UnknownMember;

/**
 * @public
 */
export namespace AnalysisSource {
  /**
   * @public
   * <p>The query text.</p>
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
 * @public
 * <p>The analysis template.</p>
 */
export interface AnalysisTemplate {
  /**
   * @public
   * <p>The identifier for the analysis template.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the analysis template.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>The unique ID for the associated collaboration of the analysis template.</p>
   */
  collaborationId: string | undefined;

  /**
   * @public
   * <p>The unique ARN for the analysis template’s associated collaboration.</p>
   */
  collaborationArn: string | undefined;

  /**
   * @public
   * <p>The identifier of a member who created the analysis template.</p>
   */
  membershipId: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the member who created the analysis template.</p>
   */
  membershipArn: string | undefined;

  /**
   * @public
   * <p>The description of the analysis template.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The name of the analysis template.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The time that the analysis template was created.</p>
   */
  createTime: Date | undefined;

  /**
   * @public
   * <p>The time that the analysis template was last updated.</p>
   */
  updateTime: Date | undefined;

  /**
   * @public
   * <p>The entire schema object.</p>
   */
  schema: AnalysisSchema | undefined;

  /**
   * @public
   * <p>The format of the analysis template.</p>
   */
  format: AnalysisFormat | undefined;

  /**
   * @public
   * <p>The source of the analysis template.</p>
   */
  source: AnalysisSource | undefined;

  /**
   * @public
   * <p>The parameters of the analysis template.</p>
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
 * @public
 * <p>Updating or deleting a resource can cause an inconsistent state.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The ID of the conflicting resource.</p>
   */
  resourceId?: string;

  /**
   * @public
   * <p>The type of the conflicting resource.</p>
   */
  resourceType?: ResourceType;

  /**
   * @public
   * <p>A reason code for the exception.</p>
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
   * @public
   * <p>The description of the analysis template.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The identifier for a membership resource.</p>
   */
  membershipIdentifier: string | undefined;

  /**
   * @public
   * <p>The name of the analysis template.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The format of the analysis template.</p>
   */
  format: AnalysisFormat | undefined;

  /**
   * @public
   * <p>The information in the analysis template. Currently supports <code>text</code>, the
   *          query text for the analysis template.</p>
   */
  source: AnalysisSource | undefined;

  /**
   * @public
   * <p>An optional label that you can assign to a resource when you create it. Each tag
   *          consists of a key and an optional value, both of which you define. When you use tagging,
   *          you can also use tag-based access control in IAM policies to control access
   *          to this resource.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>The parameters of the analysis template.</p>
   */
  analysisParameters?: AnalysisParameter[];
}

/**
 * @public
 */
export interface CreateAnalysisTemplateOutput {
  /**
   * @public
   * <p>The analysis template.</p>
   */
  analysisTemplate: AnalysisTemplate | undefined;
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
 * <p>Request references a resource which does not exist.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The Id of the missing resource.</p>
   */
  resourceId: string | undefined;

  /**
   * @public
   * <p>The type of the missing resource.</p>
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
 * @public
 * <p>Request denied because service quota has been exceeded.</p>
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The name of the quota.</p>
   */
  quotaName: string | undefined;

  /**
   * @public
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
   * @public
   * <p>The name of the input parameter.</p>
   */
  name: string | undefined;

  /**
   * @public
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
  IAM_SYNCHRONIZATION_DELAY: "IAM_SYNCHRONIZATION_DELAY",
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
   * @public
   * <p>A reason code for the exception.</p>
   */
  reason?: ValidationExceptionReason;

  /**
   * @public
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
 */
export interface DeleteAnalysisTemplateInput {
  /**
   * @public
   * <p>The identifier for a membership resource.</p>
   */
  membershipIdentifier: string | undefined;

  /**
   * @public
   * <p>The identifier for the analysis template resource.</p>
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
   * @public
   * <p>The identifier for a membership resource.</p>
   */
  membershipIdentifier: string | undefined;

  /**
   * @public
   * <p>The identifier for the analysis template resource.</p>
   */
  analysisTemplateIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetAnalysisTemplateOutput {
  /**
   * @public
   * <p>The analysis template.</p>
   */
  analysisTemplate: AnalysisTemplate | undefined;
}

/**
 * @public
 */
export interface ListAnalysisTemplatesInput {
  /**
   * @public
   * <p>The identifier for a membership resource.</p>
   */
  membershipIdentifier: string | undefined;

  /**
   * @public
   * <p>The token value retrieved from a previous call to access the next page of
   *          results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum size of the results that is returned per call.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>The metadata of the analysis template.</p>
 */
export interface AnalysisTemplateSummary {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the analysis template.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>The time that the analysis template summary was created.</p>
   */
  createTime: Date | undefined;

  /**
   * @public
   * <p>The identifier of the analysis template.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The name of the analysis template. </p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The time that the analysis template summary was last updated.</p>
   */
  updateTime: Date | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the member who created the analysis template.</p>
   */
  membershipArn: string | undefined;

  /**
   * @public
   * <p>The identifier for a membership resource.</p>
   */
  membershipId: string | undefined;

  /**
   * @public
   * <p>The unique ARN for the analysis template summary’s associated collaboration.</p>
   */
  collaborationArn: string | undefined;

  /**
   * @public
   * <p>A unique identifier for the collaboration that the analysis template summary belongs to.
   *          Currently accepts collaboration ID.</p>
   */
  collaborationId: string | undefined;

  /**
   * @public
   * <p>The description of the analysis template.</p>
   */
  description?: string;
}

/**
 * @public
 */
export interface ListAnalysisTemplatesOutput {
  /**
   * @public
   * <p>The token value retrieved from a previous call to access the next page of
   *          results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>Lists analysis template metadata.</p>
   */
  analysisTemplateSummaries: AnalysisTemplateSummary[] | undefined;
}

/**
 * @public
 */
export interface UpdateAnalysisTemplateInput {
  /**
   * @public
   * <p>The identifier for a membership resource.</p>
   */
  membershipIdentifier: string | undefined;

  /**
   * @public
   * <p>The identifier for the analysis template resource.</p>
   */
  analysisTemplateIdentifier: string | undefined;

  /**
   * @public
   * <p>A new description for the analysis template.</p>
   */
  description?: string;
}

/**
 * @public
 */
export interface UpdateAnalysisTemplateOutput {
  /**
   * @public
   * <p>The analysis template.</p>
   */
  analysisTemplate: AnalysisTemplate | undefined;
}

/**
 * @public
 */
export interface BatchGetCollaborationAnalysisTemplateInput {
  /**
   * @public
   * <p>A unique identifier for the collaboration that the analysis templates belong to.
   *          Currently accepts collaboration ID.</p>
   */
  collaborationIdentifier: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) associated with the analysis template within a
   *          collaboration.</p>
   */
  analysisTemplateArns: string[] | undefined;
}

/**
 * @public
 * <p>The analysis template within a collaboration.</p>
 */
export interface CollaborationAnalysisTemplate {
  /**
   * @public
   * <p>The identifier of the analysis template.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the analysis template.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>A unique identifier for the collaboration that the analysis templates belong to.
   *          Currently accepts collaboration ID.</p>
   */
  collaborationId: string | undefined;

  /**
   * @public
   * <p>The unique ARN for the analysis template’s associated collaboration.</p>
   */
  collaborationArn: string | undefined;

  /**
   * @public
   * <p>The description of the analysis template.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The identifier used to reference members of the collaboration. Currently only supports
   *          Amazon Web Services account ID.</p>
   */
  creatorAccountId: string | undefined;

  /**
   * @public
   * <p>The name of the analysis template.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The time that the analysis template within a collaboration was created.</p>
   */
  createTime: Date | undefined;

  /**
   * @public
   * <p>The time that the analysis template in the collaboration was last updated.</p>
   */
  updateTime: Date | undefined;

  /**
   * @public
   * <p>The entire schema object.</p>
   */
  schema: AnalysisSchema | undefined;

  /**
   * @public
   * <p>The format of the analysis template in the collaboration.</p>
   */
  format: AnalysisFormat | undefined;

  /**
   * @public
   * <p>The source of the analysis template within a collaboration.</p>
   */
  source: AnalysisSource | undefined;

  /**
   * @public
   * <p>The analysis parameters that have been specified in the analysis template.</p>
   */
  analysisParameters?: AnalysisParameter[];
}

/**
 * @public
 * <p>Details of errors thrown by the call to retrieve multiple analysis templates within a
 *          collaboration by their identifiers.</p>
 */
export interface BatchGetCollaborationAnalysisTemplateError {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the analysis template.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>An error code for the error.</p>
   */
  code: string | undefined;

  /**
   * @public
   * <p>A description of why the call failed.</p>
   */
  message: string | undefined;
}

/**
 * @public
 */
export interface BatchGetCollaborationAnalysisTemplateOutput {
  /**
   * @public
   * <p>The retrieved list of analysis templates within a collaboration.</p>
   */
  collaborationAnalysisTemplates: CollaborationAnalysisTemplate[] | undefined;

  /**
   * @public
   * <p>Error reasons for collaboration analysis templates that could not be retrieved. One
   *          error is returned for every collaboration analysis template that could not be
   *          retrieved.</p>
   */
  errors: BatchGetCollaborationAnalysisTemplateError[] | undefined;
}

/**
 * @public
 */
export interface BatchGetSchemaInput {
  /**
   * @public
   * <p>A unique identifier for the collaboration that the schemas belong to. Currently accepts
   *          collaboration ID.</p>
   */
  collaborationIdentifier: string | undefined;

  /**
   * @public
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
   * @public
   * <p>An error name for the error.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>An error code for the error. </p>
   */
  code: string | undefined;

  /**
   * @public
   * <p>An error message for the error.</p>
   */
  message: string | undefined;
}

/**
 * @public
 * <p>A column within a schema relation, derived from the underlying Glue
 *          table.</p>
 */
export interface Column {
  /**
   * @public
   * <p>The name of the column.</p>
   */
  name: string | undefined;

  /**
   * @public
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
   * @public
   * <p>The columns for the relation this schema represents.</p>
   */
  columns: Column[] | undefined;

  /**
   * @public
   * <p>The partition keys for the dataset underlying this schema.</p>
   */
  partitionKeys: Column[] | undefined;

  /**
   * @public
   * <p>The analysis rule types associated with the schema. Currently, only one entry is
   *          present.</p>
   */
  analysisRuleTypes: AnalysisRuleType[] | undefined;

  /**
   * @public
   * <p>The analysis method for the schema. The only valid value is currently
   *          DIRECT_QUERY.</p>
   */
  analysisMethod?: AnalysisMethod;

  /**
   * @public
   * <p>The unique account ID for the Amazon Web Services account that owns the schema.</p>
   */
  creatorAccountId: string | undefined;

  /**
   * @public
   * <p>A name for the schema. The schema relation is referred to by this name when queried by a
   *          protected query.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The unique ID for the collaboration that the schema belongs to.</p>
   */
  collaborationId: string | undefined;

  /**
   * @public
   * <p>The unique ARN for the collaboration that the schema belongs to.</p>
   */
  collaborationArn: string | undefined;

  /**
   * @public
   * <p>A description for the schema.</p>
   */
  description: string | undefined;

  /**
   * @public
   * <p>The time the schema was created.</p>
   */
  createTime: Date | undefined;

  /**
   * @public
   * <p>The time the schema was last updated.</p>
   */
  updateTime: Date | undefined;

  /**
   * @public
   * <p>The type of schema. The only valid value is currently `TABLE`.</p>
   */
  type: SchemaType | undefined;
}

/**
 * @public
 */
export interface BatchGetSchemaOutput {
  /**
   * @public
   * <p>The retrieved list of schemas.</p>
   */
  schemas: Schema[] | undefined;

  /**
   * @public
   * <p>Error reasons for schemas that could not be retrieved. One error is returned for every
   *          schema that could not be retrieved.</p>
   */
  errors: BatchGetSchemaError[] | undefined;
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
   * @public
   * <p>Indicates whether encrypted tables can contain cleartext data (true) or are to
   *          cryptographically process every column (false).</p>
   */
  allowCleartext: boolean | undefined;

  /**
   * @public
   * <p>Indicates whether Fingerprint columns can contain duplicate entries (true) or are to
   *          contain only non-repeated values (false).</p>
   */
  allowDuplicates: boolean | undefined;

  /**
   * @public
   * <p>Indicates whether Fingerprint columns can be joined on any other Fingerprint column with
   *          a different name (true) or can only be joined on Fingerprint columns of the same name
   *          (false).</p>
   */
  allowJoinsOnColumnsWithDifferentNames: boolean | undefined;

  /**
   * @public
   * <p>Indicates whether NULL values are to be copied as NULL to encrypted tables (true) or
   *          cryptographically processed (false).</p>
   */
  preserveNulls: boolean | undefined;
}

/**
 * @public
 * <p>Basic metadata used to construct a new member.</p>
 */
export interface MemberSpecification {
  /**
   * @public
   * <p>The identifier used to reference members of the collaboration. Currently only supports
   *          Amazon Web Services account ID.</p>
   */
  accountId: string | undefined;

  /**
   * @public
   * <p>The abilities granted to the collaboration member.</p>
   */
  memberAbilities: MemberAbility[] | undefined;

  /**
   * @public
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
   * @public
   * <p>A list of initial members, not including the creator. This list is immutable.</p>
   */
  members: MemberSpecification[] | undefined;

  /**
   * @public
   * <p>The display name for a collaboration.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>A description of the collaboration provided by the collaboration owner.</p>
   */
  description: string | undefined;

  /**
   * @public
   * <p>The abilities granted to the collaboration creator.</p>
   */
  creatorMemberAbilities: MemberAbility[] | undefined;

  /**
   * @public
   * <p>The display name of the collaboration creator.</p>
   */
  creatorDisplayName: string | undefined;

  /**
   * @public
   * <p>The settings for client-side encryption with Cryptographic Computing for Clean
   *          Rooms.</p>
   */
  dataEncryptionMetadata?: DataEncryptionMetadata;

  /**
   * @public
   * <p>An indicator as to whether query logging has been enabled or disabled for the
   *          collaboration.</p>
   */
  queryLogStatus: CollaborationQueryLogStatus | undefined;

  /**
   * @public
   * <p>An optional label that you can assign to a resource when you create it. Each tag
   *          consists of a key and an optional value, both of which you define. When you use tagging,
   *          you can also use tag-based access control in IAM policies to control access
   *          to this resource.</p>
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
 * <p>The multi-party data share environment. The collaboration contains metadata about its
 *          purpose and participants.</p>
 */
export interface Collaboration {
  /**
   * @public
   * <p>The unique ID for the collaboration.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The unique ARN for the collaboration.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>A human-readable identifier provided by the collaboration owner. Display names are not
   *          unique.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>A description of the collaboration provided by the collaboration owner.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The identifier used to reference members of the collaboration. Currently only supports
   *          Amazon Web Services account ID.</p>
   */
  creatorAccountId: string | undefined;

  /**
   * @public
   * <p>A display name of the collaboration creator.</p>
   */
  creatorDisplayName: string | undefined;

  /**
   * @public
   * <p>The time when the collaboration was created.</p>
   */
  createTime: Date | undefined;

  /**
   * @public
   * <p>The time the collaboration metadata was last updated.</p>
   */
  updateTime: Date | undefined;

  /**
   * @public
   * <p>The status of a member in a collaboration.</p>
   */
  memberStatus: MemberStatus | undefined;

  /**
   * @public
   * <p>The unique ID for your membership within the collaboration.</p>
   */
  membershipId?: string;

  /**
   * @public
   * <p>The unique ARN for your membership within the collaboration.</p>
   */
  membershipArn?: string;

  /**
   * @public
   * <p>The settings for client-side encryption for cryptographic computing.</p>
   */
  dataEncryptionMetadata?: DataEncryptionMetadata;

  /**
   * @public
   * <p>An indicator as to whether query logging has been enabled or disabled for the
   *          collaboration.</p>
   */
  queryLogStatus: CollaborationQueryLogStatus | undefined;
}

/**
 * @public
 */
export interface CreateCollaborationOutput {
  /**
   * @public
   * <p>The entire created collaboration object.</p>
   */
  collaboration: Collaboration | undefined;
}

/**
 * @public
 */
export interface DeleteCollaborationInput {
  /**
   * @public
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
 */
export interface DeleteMemberInput {
  /**
   * @public
   * <p>The unique identifier for the associated collaboration.</p>
   */
  collaborationIdentifier: string | undefined;

  /**
   * @public
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
   * @public
   * <p>The identifier for the collaboration.</p>
   */
  collaborationIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetCollaborationOutput {
  /**
   * @public
   * <p>The entire collaboration for this identifier.</p>
   */
  collaboration: Collaboration | undefined;
}

/**
 * @public
 */
export interface GetCollaborationAnalysisTemplateInput {
  /**
   * @public
   * <p>A unique identifier for the collaboration that the analysis templates belong to.
   *          Currently accepts collaboration ID.</p>
   */
  collaborationIdentifier: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) associated with the analysis template within a
   *          collaboration.</p>
   */
  analysisTemplateArn: string | undefined;
}

/**
 * @public
 */
export interface GetCollaborationAnalysisTemplateOutput {
  /**
   * @public
   * <p>The analysis template within a collaboration.</p>
   */
  collaborationAnalysisTemplate: CollaborationAnalysisTemplate | undefined;
}

/**
 * @public
 */
export interface GetSchemaInput {
  /**
   * @public
   * <p>A unique identifier for the collaboration that the schema belongs to. Currently accepts
   *          a collaboration ID.</p>
   */
  collaborationIdentifier: string | undefined;

  /**
   * @public
   * <p>The name of the relation to retrieve the schema for.</p>
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface GetSchemaOutput {
  /**
   * @public
   * <p>The entire schema object.</p>
   */
  schema: Schema | undefined;
}

/**
 * @public
 */
export interface GetSchemaAnalysisRuleInput {
  /**
   * @public
   * <p>A unique identifier for the collaboration that the schema belongs to. Currently accepts
   *          a collaboration ID.</p>
   */
  collaborationIdentifier: string | undefined;

  /**
   * @public
   * <p>The name of the schema to retrieve the analysis rule for.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The type of the schema analysis rule to retrieve. Schema analysis rules are uniquely
   *          identified by a combination of the collaboration, the schema name, and their type.</p>
   */
  type: AnalysisRuleType | undefined;
}

/**
 * @public
 */
export interface GetSchemaAnalysisRuleOutput {
  /**
   * @public
   * <p>A specification about how data from the configured table can be used.</p>
   */
  analysisRule: AnalysisRule | undefined;
}

/**
 * @public
 */
export interface ListCollaborationAnalysisTemplatesInput {
  /**
   * @public
   * <p>A unique identifier for the collaboration that the analysis templates belong to.
   *          Currently accepts collaboration ID.</p>
   */
  collaborationIdentifier: string | undefined;

  /**
   * @public
   * <p>The token value retrieved from a previous call to access the next page of
   *          results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum size of the results that is returned per call.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>The metadata of the analysis template within a collaboration.</p>
 */
export interface CollaborationAnalysisTemplateSummary {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the analysis template.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>The time that the summary of the analysis template in a collaboration was
   *          created.</p>
   */
  createTime: Date | undefined;

  /**
   * @public
   * <p>The identifier of the analysis template.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The name of the analysis template.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The time that the summary of the analysis template in the collaboration was last
   *          updated.</p>
   */
  updateTime: Date | undefined;

  /**
   * @public
   * <p>The unique ARN for the analysis template’s associated collaboration.</p>
   */
  collaborationArn: string | undefined;

  /**
   * @public
   * <p>A unique identifier for the collaboration that the analysis templates belong to.
   *          Currently accepts collaboration ID.</p>
   */
  collaborationId: string | undefined;

  /**
   * @public
   * <p>The identifier used to reference members of the collaboration. Currently only supports
   *          Amazon Web Services account ID.</p>
   */
  creatorAccountId: string | undefined;

  /**
   * @public
   * <p>The description of the analysis template.</p>
   */
  description?: string;
}

/**
 * @public
 */
export interface ListCollaborationAnalysisTemplatesOutput {
  /**
   * @public
   * <p>The token value retrieved from a previous call to access the next page of
   *          results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The metadata of the analysis template within a collaboration.</p>
   */
  collaborationAnalysisTemplateSummaries: CollaborationAnalysisTemplateSummary[] | undefined;
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
   * @public
   * <p>The token value retrieved from a previous call to access the next page of
   *          results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum size of the results that is returned per call. Service chooses a default if
   *          it has not been set. Service may return a nextToken even if the maximum results has not
   *          been met.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The caller's status in a collaboration.</p>
   */
  memberStatus?: FilterableMemberStatus;
}

/**
 * @public
 * <p>The metadata of the collaboration.</p>
 */
export interface CollaborationSummary {
  /**
   * @public
   * <p>The identifier for the collaboration.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The ARN of the collaboration.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>A human-readable identifier provided by the collaboration owner. Display names are not
   *          unique.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The identifier used to reference members of the collaboration. Currently only supports
   *          Amazon Web Services account ID.</p>
   */
  creatorAccountId: string | undefined;

  /**
   * @public
   * <p>The display name of the collaboration creator.</p>
   */
  creatorDisplayName: string | undefined;

  /**
   * @public
   * <p>The time when the collaboration was created.</p>
   */
  createTime: Date | undefined;

  /**
   * @public
   * <p>The time the collaboration metadata was last updated.</p>
   */
  updateTime: Date | undefined;

  /**
   * @public
   * <p>The status of a member in a collaboration.</p>
   */
  memberStatus: MemberStatus | undefined;

  /**
   * @public
   * <p>The identifier of a member in a collaboration.</p>
   */
  membershipId?: string;

  /**
   * @public
   * <p>The ARN of a member in a collaboration.</p>
   */
  membershipArn?: string;
}

/**
 * @public
 */
export interface ListCollaborationsOutput {
  /**
   * @public
   * <p>The token value retrieved from a previous call to access the next page of
   *          results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The list of collaborations.</p>
   */
  collaborationList: CollaborationSummary[] | undefined;
}

/**
 * @public
 */
export interface ListMembersInput {
  /**
   * @public
   * <p>The identifier of the collaboration in which the members are listed.</p>
   */
  collaborationIdentifier: string | undefined;

  /**
   * @public
   * <p>The token value retrieved from a previous call to access the next page of
   *          results.</p>
   */
  nextToken?: string;

  /**
   * @public
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
   * @public
   * <p>The identifier used to reference members of the collaboration. Currently only supports
   *          Amazon Web Services account ID.</p>
   */
  accountId: string | undefined;

  /**
   * @public
   * <p>The status of the member. Valid values are `INVITED`, `ACTIVE`, `LEFT`, and
   *          `REMOVED`.</p>
   */
  status: MemberStatus | undefined;

  /**
   * @public
   * <p>The member's display name.</p>
   */
  displayName: string | undefined;

  /**
   * @public
   * <p>The abilities granted to the collaboration member.</p>
   */
  abilities: MemberAbility[] | undefined;

  /**
   * @public
   * <p>The time when the member was created.</p>
   */
  createTime: Date | undefined;

  /**
   * @public
   * <p>The time the member metadata was last updated.</p>
   */
  updateTime: Date | undefined;

  /**
   * @public
   * <p>The unique ID for the member's associated membership, if present.</p>
   */
  membershipId?: string;

  /**
   * @public
   * <p>The unique ARN for the member's associated membership, if present.</p>
   */
  membershipArn?: string;
}

/**
 * @public
 */
export interface ListMembersOutput {
  /**
   * @public
   * <p>The token value retrieved from a previous call to access the next page of
   *          results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The list of members returned by the ListMembers operation.</p>
   */
  memberSummaries: MemberSummary[] | undefined;
}

/**
 * @public
 */
export interface ListSchemasInput {
  /**
   * @public
   * <p>A unique identifier for the collaboration that the schema belongs to. Currently accepts
   *          a collaboration ID.</p>
   */
  collaborationIdentifier: string | undefined;

  /**
   * @public
   * <p>If present, filter schemas by schema type. The only valid schema type is currently
   *          `TABLE`.</p>
   */
  schemaType?: SchemaType;

  /**
   * @public
   * <p>The token value retrieved from a previous call to access the next page of
   *          results.</p>
   */
  nextToken?: string;

  /**
   * @public
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
   * @public
   * <p>The name for the schema object.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The type of schema object. The only valid schema type is currently `TABLE`.</p>
   */
  type: SchemaType | undefined;

  /**
   * @public
   * <p>The unique account ID for the Amazon Web Services account that owns the schema.</p>
   */
  creatorAccountId: string | undefined;

  /**
   * @public
   * <p>The time the schema object was created.</p>
   */
  createTime: Date | undefined;

  /**
   * @public
   * <p>The time the schema object was last updated.</p>
   */
  updateTime: Date | undefined;

  /**
   * @public
   * <p>The unique ID for the collaboration that the schema belongs to.</p>
   */
  collaborationId: string | undefined;

  /**
   * @public
   * <p>The unique ARN for the collaboration that the schema belongs to.</p>
   */
  collaborationArn: string | undefined;

  /**
   * @public
   * <p>The types of analysis rules that are associated with this schema object.</p>
   */
  analysisRuleTypes: AnalysisRuleType[] | undefined;

  /**
   * @public
   * <p>The analysis method for the associated schema. The only valid value is currently
   *          `DIRECT_QUERY`.</p>
   */
  analysisMethod?: AnalysisMethod;
}

/**
 * @public
 */
export interface ListSchemasOutput {
  /**
   * @public
   * <p>The retrieved list of schemas.</p>
   */
  schemaSummaries: SchemaSummary[] | undefined;

  /**
   * @public
   * <p>The token value retrieved from a previous call to access the next page of
   *          results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface UpdateCollaborationInput {
  /**
   * @public
   * <p>The identifier for the collaboration.</p>
   */
  collaborationIdentifier: string | undefined;

  /**
   * @public
   * <p>A human-readable identifier provided by the collaboration owner. Display names are not
   *          unique.</p>
   */
  name?: string;

  /**
   * @public
   * <p>A description of the collaboration.</p>
   */
  description?: string;
}

/**
 * @public
 */
export interface UpdateCollaborationOutput {
  /**
   * @public
   * <p>The entire collaboration that has been updated.</p>
   */
  collaboration: Collaboration | undefined;
}

/**
 * @public
 */
export interface CreateConfiguredTableAssociationInput {
  /**
   * @public
   * <p>The name of the configured table association. This name is used to query the underlying
   *          configured table.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>A description for the configured table association.</p>
   */
  description?: string;

  /**
   * @public
   * <p>A unique identifier for one of your memberships for a collaboration. The configured
   *          table is associated to the collaboration that this membership belongs to. Currently accepts
   *          a membership ID.</p>
   */
  membershipIdentifier: string | undefined;

  /**
   * @public
   * <p>A unique identifier for the configured table to be associated to. Currently accepts a
   *          configured table ID.</p>
   */
  configuredTableIdentifier: string | undefined;

  /**
   * @public
   * <p>The service will assume this role to access catalog metadata and query the table.</p>
   */
  roleArn: string | undefined;

  /**
   * @public
   * <p>An optional label that you can assign to a resource when you create it. Each tag
   *          consists of a key and an optional value, both of which you define. When you use tagging,
   *          you can also use tag-based access control in IAM policies to control access
   *          to this resource.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 * <p>A configured table association links a configured table to a collaboration.</p>
 */
export interface ConfiguredTableAssociation {
  /**
   * @public
   * <p>The unique ARN for the configured table association.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>The unique ID for the configured table association.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The unique ID for the configured table that the association refers to.</p>
   */
  configuredTableId: string | undefined;

  /**
   * @public
   * <p>The unique ARN for the configured table that the association refers to.</p>
   */
  configuredTableArn: string | undefined;

  /**
   * @public
   * <p>The unique ID for the membership this configured table association belongs to.</p>
   */
  membershipId: string | undefined;

  /**
   * @public
   * <p>The unique ARN for the membership this configured table association belongs to.</p>
   */
  membershipArn: string | undefined;

  /**
   * @public
   * <p>The service will assume this role to access catalog metadata and query the table.</p>
   */
  roleArn: string | undefined;

  /**
   * @public
   * <p>The name of the configured table association, in lowercase. The table is identified by
   *          this name when running protected queries against the underlying data.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>A description of the configured table association.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The time the configured table association was created.</p>
   */
  createTime: Date | undefined;

  /**
   * @public
   * <p>The time the configured table association was last updated.</p>
   */
  updateTime: Date | undefined;
}

/**
 * @public
 */
export interface CreateConfiguredTableAssociationOutput {
  /**
   * @public
   * <p>The entire configured table association object.</p>
   */
  configuredTableAssociation: ConfiguredTableAssociation | undefined;
}

/**
 * @public
 */
export interface DeleteConfiguredTableAssociationInput {
  /**
   * @public
   * <p>The unique ID for the configured table association to be deleted. Currently accepts the
   *          configured table ID.</p>
   */
  configuredTableAssociationIdentifier: string | undefined;

  /**
   * @public
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
   * @public
   * <p>The unique ID for the configured table association to retrieve. Currently accepts the
   *          configured table ID.</p>
   */
  configuredTableAssociationIdentifier: string | undefined;

  /**
   * @public
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
   * @public
   * <p>The entire configured table association object.</p>
   */
  configuredTableAssociation: ConfiguredTableAssociation | undefined;
}

/**
 * @public
 */
export interface ListConfiguredTableAssociationsInput {
  /**
   * @public
   * <p>A unique identifier for the membership to list configured table associations for.
   *          Currently accepts the membership ID.</p>
   */
  membershipIdentifier: string | undefined;

  /**
   * @public
   * <p>The token value retrieved from a previous call to access the next page of
   *          results.</p>
   */
  nextToken?: string;

  /**
   * @public
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
   * @public
   * <p>The unique configured table ID that this configured table association refers to.</p>
   */
  configuredTableId: string | undefined;

  /**
   * @public
   * <p>The unique ID for the membership that the configured table association belongs
   *          to.</p>
   */
  membershipId: string | undefined;

  /**
   * @public
   * <p>The unique ARN for the membership that the configured table association belongs
   *          to.</p>
   */
  membershipArn: string | undefined;

  /**
   * @public
   * <p>The name of the configured table association. The table is identified by this name when
   *          running Protected Queries against the underlying data.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The time the configured table association was created.</p>
   */
  createTime: Date | undefined;

  /**
   * @public
   * <p>The time the configured table association was last updated.</p>
   */
  updateTime: Date | undefined;

  /**
   * @public
   * <p>The unique ID for the configured table association.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The unique ARN for the configured table association.</p>
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface ListConfiguredTableAssociationsOutput {
  /**
   * @public
   * <p>The retrieved list of configured table associations.</p>
   */
  configuredTableAssociationSummaries: ConfiguredTableAssociationSummary[] | undefined;

  /**
   * @public
   * <p>The token value retrieved from a previous call to access the next page of
   *          results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface UpdateConfiguredTableAssociationInput {
  /**
   * @public
   * <p>The unique identifier for the configured table association to update. Currently accepts
   *          the configured table association ID.</p>
   */
  configuredTableAssociationIdentifier: string | undefined;

  /**
   * @public
   * <p>The unique ID for the membership that the configured table association belongs
   *          to.</p>
   */
  membershipIdentifier: string | undefined;

  /**
   * @public
   * <p>A new description for the configured table association.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The service will assume this role to access catalog metadata and query the table.</p>
   */
  roleArn?: string;
}

/**
 * @public
 */
export interface UpdateConfiguredTableAssociationOutput {
  /**
   * @public
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
   * @public
   * <p>The name of the Glue table.</p>
   */
  tableName: string | undefined;

  /**
   * @public
   * <p>The name of the database the Glue table belongs to.</p>
   */
  databaseName: string | undefined;
}

/**
 * @public
 * <p>A pointer to the dataset that underlies this table. Currently, this can only be an Glue
 *          table.</p>
 */
export type TableReference = TableReference.GlueMember | TableReference.$UnknownMember;

/**
 * @public
 */
export namespace TableReference {
  /**
   * @public
   * <p>If present, a reference to the Glue table referred to by this table
   *          reference.</p>
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
   * @public
   * <p>The name of the configured table.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>A description for the configured table.</p>
   */
  description?: string;

  /**
   * @public
   * <p>A reference to the Glue table being configured.</p>
   */
  tableReference: TableReference | undefined;

  /**
   * @public
   * <p>The columns of the underlying table that can be used by collaborations or analysis
   *          rules.</p>
   */
  allowedColumns: string[] | undefined;

  /**
   * @public
   * <p>The analysis method for the configured tables. The only valid value is currently
   *          `DIRECT_QUERY`.</p>
   */
  analysisMethod: AnalysisMethod | undefined;

  /**
   * @public
   * <p>An optional label that you can assign to a resource when you create it. Each tag
   *          consists of a key and an optional value, both of which you define. When you use tagging,
   *          you can also use tag-based access control in IAM policies to control access
   *          to this resource.</p>
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
 * @public
 * <p>A table that has been configured for use in a collaboration.</p>
 */
export interface ConfiguredTable {
  /**
   * @public
   * <p>The unique ID for the configured table.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The unique ARN for the configured table.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>A name for the configured table.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>A description for the configured table.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The Glue table that this configured table represents.</p>
   */
  tableReference: TableReference | undefined;

  /**
   * @public
   * <p>The time the configured table was created.</p>
   */
  createTime: Date | undefined;

  /**
   * @public
   * <p>The time the configured table was last updated</p>
   */
  updateTime: Date | undefined;

  /**
   * @public
   * <p>The types of analysis rules associated with this configured table. Currently, only one
   *          analysis rule may be associated with a configured table.</p>
   */
  analysisRuleTypes: ConfiguredTableAnalysisRuleType[] | undefined;

  /**
   * @public
   * <p>The analysis method for the configured table. The only valid value is currently
   *          `DIRECT_QUERY`.</p>
   */
  analysisMethod: AnalysisMethod | undefined;

  /**
   * @public
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
   * @public
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
  | ConfiguredTableAnalysisRulePolicyV1.CustomMember
  | ConfiguredTableAnalysisRulePolicyV1.ListMember
  | ConfiguredTableAnalysisRulePolicyV1.$UnknownMember;

/**
 * @public
 */
export namespace ConfiguredTableAnalysisRulePolicyV1 {
  /**
   * @public
   * <p>Analysis rule type that enables only list queries on a configured table.</p>
   */
  export interface ListMember {
    list: AnalysisRuleList;
    aggregation?: never;
    custom?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>Analysis rule type that enables only aggregation queries on a configured table.</p>
   */
  export interface AggregationMember {
    list?: never;
    aggregation: AnalysisRuleAggregation;
    custom?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>A type of analysis rule that enables the table owner to approve custom SQL queries on
   *          their configured tables.</p>
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
   * @public
   * <p>Controls on the query specifications that can be run on a configured table.</p>
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
   * @public
   * <p>The identifier for the configured table to create the analysis rule for. Currently
   *          accepts the configured table ID. </p>
   */
  configuredTableIdentifier: string | undefined;

  /**
   * @public
   * <p>The type of analysis rule.</p>
   */
  analysisRuleType: ConfiguredTableAnalysisRuleType | undefined;

  /**
   * @public
   * <p>The entire created configured table analysis rule object.</p>
   */
  analysisRulePolicy: ConfiguredTableAnalysisRulePolicy | undefined;
}

/**
 * @public
 * <p>A configured table analysis rule, which limits how data for this table can be
 *          used.</p>
 */
export interface ConfiguredTableAnalysisRule {
  /**
   * @public
   * <p>The unique ID for the configured table.</p>
   */
  configuredTableId: string | undefined;

  /**
   * @public
   * <p>The unique ARN for the configured table.</p>
   */
  configuredTableArn: string | undefined;

  /**
   * @public
   * <p>The policy that controls SQL query rules.</p>
   */
  policy: ConfiguredTableAnalysisRulePolicy | undefined;

  /**
   * @public
   * <p>The type of configured table analysis rule.</p>
   */
  type: ConfiguredTableAnalysisRuleType | undefined;

  /**
   * @public
   * <p>The time the configured table analysis rule was created.</p>
   */
  createTime: Date | undefined;

  /**
   * @public
   * <p>The time the configured table analysis rule was last updated.</p>
   */
  updateTime: Date | undefined;
}

/**
 * @public
 */
export interface CreateConfiguredTableAnalysisRuleOutput {
  /**
   * @public
   * <p>The entire created analysis rule.</p>
   */
  analysisRule: ConfiguredTableAnalysisRule | undefined;
}

/**
 * @public
 */
export interface DeleteConfiguredTableInput {
  /**
   * @public
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
   * @public
   * <p>The unique identifier for the configured table that the analysis rule applies to.
   *          Currently accepts the configured table ID.</p>
   */
  configuredTableIdentifier: string | undefined;

  /**
   * @public
   * <p>The analysis rule type to be deleted. Configured table analysis rules are uniquely
   *          identified by their configured table identifier and analysis rule type.</p>
   */
  analysisRuleType: ConfiguredTableAnalysisRuleType | undefined;
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
   * @public
   * <p>The unique ID for the configured table to retrieve.</p>
   */
  configuredTableIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetConfiguredTableOutput {
  /**
   * @public
   * <p>The retrieved configured table.</p>
   */
  configuredTable: ConfiguredTable | undefined;
}

/**
 * @public
 */
export interface GetConfiguredTableAnalysisRuleInput {
  /**
   * @public
   * <p>The unique identifier for the configured table to retrieve. Currently accepts the
   *          configured table ID.</p>
   */
  configuredTableIdentifier: string | undefined;

  /**
   * @public
   * <p>The analysis rule to be retrieved. Configured table analysis rules are uniquely
   *          identified by their configured table identifier and analysis rule type.</p>
   */
  analysisRuleType: ConfiguredTableAnalysisRuleType | undefined;
}

/**
 * @public
 */
export interface GetConfiguredTableAnalysisRuleOutput {
  /**
   * @public
   * <p>The entire analysis rule output.</p>
   */
  analysisRule: ConfiguredTableAnalysisRule | undefined;
}

/**
 * @public
 */
export interface ListConfiguredTablesInput {
  /**
   * @public
   * <p>The token value retrieved from a previous call to access the next page of
   *          results.</p>
   */
  nextToken?: string;

  /**
   * @public
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
   * @public
   * <p>The unique ID of the configured table.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The unique ARN of the configured table.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>The name of the configured table.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The time the configured table was created.</p>
   */
  createTime: Date | undefined;

  /**
   * @public
   * <p>The time the configured table was last updated.</p>
   */
  updateTime: Date | undefined;

  /**
   * @public
   * <p>The types of analysis rules associated with this configured table.</p>
   */
  analysisRuleTypes: ConfiguredTableAnalysisRuleType[] | undefined;

  /**
   * @public
   * <p>The analysis method for the configured tables. The only valid value is currently
   *          `DIRECT_QUERY`.</p>
   */
  analysisMethod: AnalysisMethod | undefined;
}

/**
 * @public
 */
export interface ListConfiguredTablesOutput {
  /**
   * @public
   * <p>The configured tables listed by the request.</p>
   */
  configuredTableSummaries: ConfiguredTableSummary[] | undefined;

  /**
   * @public
   * <p>The token value retrieved from a previous call to access the next page of
   *          results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface UpdateConfiguredTableInput {
  /**
   * @public
   * <p>The identifier for the configured table to update. Currently accepts the configured
   *          table ID.</p>
   */
  configuredTableIdentifier: string | undefined;

  /**
   * @public
   * <p>A new name for the configured table.</p>
   */
  name?: string;

  /**
   * @public
   * <p>A new description for the configured table.</p>
   */
  description?: string;
}

/**
 * @public
 */
export interface UpdateConfiguredTableOutput {
  /**
   * @public
   * <p>The updated configured table.</p>
   */
  configuredTable: ConfiguredTable | undefined;
}

/**
 * @public
 */
export interface UpdateConfiguredTableAnalysisRuleInput {
  /**
   * @public
   * <p>The unique identifier for the configured table that the analysis rule applies to.
   *          Currently accepts the configured table ID.</p>
   */
  configuredTableIdentifier: string | undefined;

  /**
   * @public
   * <p>The analysis rule type to be updated. Configured table analysis rules are uniquely
   *          identified by their configured table identifier and analysis rule type.</p>
   */
  analysisRuleType: ConfiguredTableAnalysisRuleType | undefined;

  /**
   * @public
   * <p>The new analysis rule policy for the configured table analysis rule.</p>
   */
  analysisRulePolicy: ConfiguredTableAnalysisRulePolicy | undefined;
}

/**
 * @public
 */
export interface UpdateConfiguredTableAnalysisRuleOutput {
  /**
   * @public
   * <p>The entire updated analysis rule.</p>
   */
  analysisRule: ConfiguredTableAnalysisRule | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) associated with the resource you want to list tags
   *          on.</p>
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * @public
   * <p>A map of objects specifying each key name and value.</p>
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
 * @public
 * <p>Contains the configuration to write the query results to S3.</p>
 */
export interface ProtectedQueryS3OutputConfiguration {
  /**
   * @public
   * <p>Intended file format of the result.</p>
   */
  resultFormat: ResultFormat | undefined;

  /**
   * @public
   * <p>The S3 bucket to unload the protected query results.</p>
   */
  bucket: string | undefined;

  /**
   * @public
   * <p>The S3 prefix to unload the protected query results.</p>
   */
  keyPrefix?: string;
}

/**
 * @public
 * <p>Contains
 *          configurations for protected query results.</p>
 */
export type MembershipProtectedQueryOutputConfiguration =
  | MembershipProtectedQueryOutputConfiguration.S3Member
  | MembershipProtectedQueryOutputConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace MembershipProtectedQueryOutputConfiguration {
  /**
   * @public
   * <p>Contains the configuration to write the query results to S3.</p>
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
 * @public
 * <p>Contains
 *          configurations for protected query results.</p>
 */
export interface MembershipProtectedQueryResultConfiguration {
  /**
   * @public
   * <p>Configuration for
   *          protected query results.</p>
   */
  outputConfiguration: MembershipProtectedQueryOutputConfiguration | undefined;

  /**
   * @public
   * <p>The unique ARN for
   *          an IAM role that is used by Clean Rooms to write protected query results to the
   *          result location, given by the member who can receive results.</p>
   */
  roleArn?: string;
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
   * @public
   * <p>The unique ID for the associated collaboration.</p>
   */
  collaborationIdentifier: string | undefined;

  /**
   * @public
   * <p>An indicator as to whether query logging has been enabled or disabled for the
   *          collaboration.</p>
   */
  queryLogStatus: MembershipQueryLogStatus | undefined;

  /**
   * @public
   * <p>An optional label that you can assign to a resource when you create it. Each tag
   *          consists of a key and an optional value, both of which you define. When you use tagging,
   *          you can also use tag-based access control in IAM policies to control access
   *          to this resource.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>The default
   *          protected query result configuration as specified by the member who can receive
   *          results.</p>
   */
  defaultResultConfiguration?: MembershipProtectedQueryResultConfiguration;
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
   * @public
   * <p>The unique ID of the membership.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The unique ARN for the membership.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>The unique ARN for the membership's associated collaboration.</p>
   */
  collaborationArn: string | undefined;

  /**
   * @public
   * <p>The unique ID for the membership's collaboration.</p>
   */
  collaborationId: string | undefined;

  /**
   * @public
   * <p>The identifier used to reference members of the collaboration. Currently only supports
   *          Amazon Web Services account ID.</p>
   */
  collaborationCreatorAccountId: string | undefined;

  /**
   * @public
   * <p>The display name of the collaboration creator.</p>
   */
  collaborationCreatorDisplayName: string | undefined;

  /**
   * @public
   * <p>The name of the membership's collaboration.</p>
   */
  collaborationName: string | undefined;

  /**
   * @public
   * <p>The time when the membership was created.</p>
   */
  createTime: Date | undefined;

  /**
   * @public
   * <p>The time the membership metadata was last updated.</p>
   */
  updateTime: Date | undefined;

  /**
   * @public
   * <p>The status of the membership. Valid values are `ACTIVE`, `REMOVED`, and
   *          `COLLABORATION_DELETED`.</p>
   */
  status: MembershipStatus | undefined;

  /**
   * @public
   * <p>The abilities granted to the collaboration member.</p>
   */
  memberAbilities: MemberAbility[] | undefined;

  /**
   * @public
   * <p>An indicator as to whether query logging has been enabled or disabled for the
   *          collaboration.</p>
   */
  queryLogStatus: MembershipQueryLogStatus | undefined;

  /**
   * @public
   * <p>The default
   *          protected query result configuration as specified by the member who can receive
   *          results.</p>
   */
  defaultResultConfiguration?: MembershipProtectedQueryResultConfiguration;
}

/**
 * @public
 */
export interface CreateMembershipOutput {
  /**
   * @public
   * <p>The membership that was created.</p>
   */
  membership: Membership | undefined;
}

/**
 * @public
 */
export interface DeleteMembershipInput {
  /**
   * @public
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
   * @public
   * <p>The identifier for a membership resource.</p>
   */
  membershipIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetMembershipOutput {
  /**
   * @public
   * <p>The membership retrieved for the provided identifier.</p>
   */
  membership: Membership | undefined;
}

/**
 * @public
 */
export interface GetProtectedQueryInput {
  /**
   * @public
   * <p>The identifier for a membership in a protected query instance.</p>
   */
  membershipIdentifier: string | undefined;

  /**
   * @public
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
   * @public
   * <p>A description of why the query failed.</p>
   */
  message: string | undefined;

  /**
   * @public
   * <p>An error code for the error.</p>
   */
  code: string | undefined;
}

/**
 * @public
 * <p>Details about the
 *          member who received the query result.</p>
 */
export interface ProtectedQuerySingleMemberOutput {
  /**
   * @public
   * <p>The Amazon Web Services account
   *          ID of the member in the collaboration who can receive results for the
   *          query.</p>
   */
  accountId: string | undefined;
}

/**
 * @public
 * <p>Contains output information for protected queries with an S3 output type.</p>
 */
export interface ProtectedQueryS3Output {
  /**
   * @public
   * <p>The S3 location of the result.</p>
   */
  location: string | undefined;
}

/**
 * @public
 * <p>Contains details about the protected query output.</p>
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
   * @public
   * <p>If present, the output for a protected query with an `S3` output type.</p>
   */
  export interface S3Member {
    s3: ProtectedQueryS3Output;
    memberList?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>The list of member
   *          Amazon Web Services account(s) that received the results of the query. </p>
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
 * @public
 * <p>Details about the query results.</p>
 */
export interface ProtectedQueryResult {
  /**
   * @public
   * <p>The output of the protected query.</p>
   */
  output: ProtectedQueryOutput | undefined;
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
   * @public
   * <p>Required configuration for a protected query with an `S3` output type.</p>
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
 * @public
 * <p>Contains configurations for protected query results.</p>
 */
export interface ProtectedQueryResultConfiguration {
  /**
   * @public
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
   * @public
   * <p>The query string to be submitted.</p>
   */
  queryString?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) associated with the analysis template within a
   *          collaboration.</p>
   */
  analysisTemplateArn?: string;

  /**
   * @public
   * <p>The protected query SQL parameters.</p>
   */
  parameters?: Record<string, string>;
}

/**
 * @public
 * <p>Contains statistics about the execution of the protected query.</p>
 */
export interface ProtectedQueryStatistics {
  /**
   * @public
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
 * <p>The parameters for an Clean Rooms protected query.</p>
 */
export interface ProtectedQuery {
  /**
   * @public
   * <p>The identifier for a protected query instance.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The identifier for the membership.</p>
   */
  membershipId: string | undefined;

  /**
   * @public
   * <p>The ARN of the membership.</p>
   */
  membershipArn: string | undefined;

  /**
   * @public
   * <p>The time at which the protected query was created.</p>
   */
  createTime: Date | undefined;

  /**
   * @public
   * <p>The protected query SQL parameters.</p>
   */
  sqlParameters?: ProtectedQuerySQLParameters;

  /**
   * @public
   * <p>The status of the query.</p>
   */
  status: ProtectedQueryStatus | undefined;

  /**
   * @public
   * <p>Contains any details needed to write the query results.</p>
   */
  resultConfiguration?: ProtectedQueryResultConfiguration;

  /**
   * @public
   * <p>Statistics about protected query execution.</p>
   */
  statistics?: ProtectedQueryStatistics;

  /**
   * @public
   * <p>The result of the protected query.</p>
   */
  result?: ProtectedQueryResult;

  /**
   * @public
   * <p>An error thrown by the protected query.</p>
   */
  error?: ProtectedQueryError;
}

/**
 * @public
 */
export interface GetProtectedQueryOutput {
  /**
   * @public
   * <p>The query processing metadata.</p>
   */
  protectedQuery: ProtectedQuery | undefined;
}

/**
 * @public
 */
export interface ListMembershipsInput {
  /**
   * @public
   * <p>The token value retrieved from a previous call to access the next page of
   *          results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum size of the results that is returned per call.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>A filter which will return only memberships in the specified status.</p>
   */
  status?: MembershipStatus;
}

/**
 * @public
 * <p>The membership object listed by the request.</p>
 */
export interface MembershipSummary {
  /**
   * @public
   * <p>The unique ID for the membership's collaboration.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The unique ARN for the membership.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>The unique ARN for the membership's associated collaboration.</p>
   */
  collaborationArn: string | undefined;

  /**
   * @public
   * <p>The unique ID for the membership's collaboration.</p>
   */
  collaborationId: string | undefined;

  /**
   * @public
   * <p>The identifier of the Amazon Web Services principal that created the collaboration. Currently only
   *          supports Amazon Web Services account ID.</p>
   */
  collaborationCreatorAccountId: string | undefined;

  /**
   * @public
   * <p>The display name of the collaboration creator.</p>
   */
  collaborationCreatorDisplayName: string | undefined;

  /**
   * @public
   * <p>The name for the membership's collaboration.</p>
   */
  collaborationName: string | undefined;

  /**
   * @public
   * <p>The time when the membership was created.</p>
   */
  createTime: Date | undefined;

  /**
   * @public
   * <p>The time the membership metadata was last updated.</p>
   */
  updateTime: Date | undefined;

  /**
   * @public
   * <p>The status of the membership. Valid values are `ACTIVE`, `REMOVED`, and
   *          `COLLABORATION_DELETED`.</p>
   */
  status: MembershipStatus | undefined;

  /**
   * @public
   * <p>The abilities granted to the collaboration member.</p>
   */
  memberAbilities: MemberAbility[] | undefined;
}

/**
 * @public
 */
export interface ListMembershipsOutput {
  /**
   * @public
   * <p>The token value retrieved from a previous call to access the next page of
   *          results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The list of memberships returned from the ListMemberships operation.</p>
   */
  membershipSummaries: MembershipSummary[] | undefined;
}

/**
 * @public
 */
export interface ListProtectedQueriesInput {
  /**
   * @public
   * <p>The identifier for the membership in the collaboration.</p>
   */
  membershipIdentifier: string | undefined;

  /**
   * @public
   * <p>A filter on the status of the protected query.</p>
   */
  status?: ProtectedQueryStatus;

  /**
   * @public
   * <p>The token value retrieved from a previous call to access the next page of
   *          results.</p>
   */
  nextToken?: string;

  /**
   * @public
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
   * @public
   * <p>The unique ID of the protected query.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The unique ID for the membership that initiated the protected query.</p>
   */
  membershipId: string | undefined;

  /**
   * @public
   * <p>The unique ARN for the membership that initiated the protected query.</p>
   */
  membershipArn: string | undefined;

  /**
   * @public
   * <p>The time the protected query was created.</p>
   */
  createTime: Date | undefined;

  /**
   * @public
   * <p>The status of the protected query. Value values are `SUBMITTED`, `STARTED`, `CANCELLED`,
   *          `CANCELLING`, `FAILED`, `SUCCESS`, `TIMED_OUT`.</p>
   */
  status: ProtectedQueryStatus | undefined;
}

/**
 * @public
 */
export interface ListProtectedQueriesOutput {
  /**
   * @public
   * <p>The token value retrieved from a previous call to access the next page of
   *          results.</p>
   */
  nextToken?: string;

  /**
   * @public
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
   * @public
   * <p>The type of the protected query to be started.</p>
   */
  type: ProtectedQueryType | undefined;

  /**
   * @public
   * <p>A unique identifier for the membership to run this query against. Currently accepts a
   *          membership ID.</p>
   */
  membershipIdentifier: string | undefined;

  /**
   * @public
   * <p>The protected SQL query parameters.</p>
   */
  sqlParameters: ProtectedQuerySQLParameters | undefined;

  /**
   * @public
   * <p>The details needed to write the query results.</p>
   */
  resultConfiguration?: ProtectedQueryResultConfiguration;
}

/**
 * @public
 */
export interface StartProtectedQueryOutput {
  /**
   * @public
   * <p>The protected query.</p>
   */
  protectedQuery: ProtectedQuery | undefined;
}

/**
 * @public
 */
export interface UpdateMembershipInput {
  /**
   * @public
   * <p>The unique identifier of the membership.</p>
   */
  membershipIdentifier: string | undefined;

  /**
   * @public
   * <p>An indicator as to whether query logging has been enabled or disabled for the
   *          collaboration.</p>
   */
  queryLogStatus?: MembershipQueryLogStatus;

  /**
   * @public
   * <p>The default
   *          protected query result configuration as specified by the member who can receive
   *          results.</p>
   */
  defaultResultConfiguration?: MembershipProtectedQueryResultConfiguration;
}

/**
 * @public
 */
export interface UpdateMembershipOutput {
  /**
   * @public
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
   * @public
   * <p>The identifier for a member of a protected query instance.</p>
   */
  membershipIdentifier: string | undefined;

  /**
   * @public
   * <p>The identifier for a protected query instance.</p>
   */
  protectedQueryIdentifier: string | undefined;

  /**
   * @public
   * <p>The target status of a query. Used to update the execution status of a currently running
   *          query.</p>
   */
  targetStatus: TargetProtectedQueryStatus | undefined;
}

/**
 * @public
 */
export interface UpdateProtectedQueryOutput {
  /**
   * @public
   * <p>The protected query output.</p>
   */
  protectedQuery: ProtectedQuery | undefined;
}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) associated with the resource you want to tag.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
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
   * @public
   * <p>The Amazon Resource Name (ARN) associated with the resource you want to remove the tag
   *          from.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
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
