// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { BCMRecommendedActionsServiceException as __BaseException } from "./BCMRecommendedActionsServiceException";

/**
 * <p>You do not have sufficient access to perform this action.</p>
 * @public
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

/**
 * @public
 * @enum
 */
export const FilterName = {
  FEATURE: "FEATURE",
  SEVERITY: "SEVERITY",
  TYPE: "TYPE",
} as const;

/**
 * @public
 */
export type FilterName = (typeof FilterName)[keyof typeof FilterName];

/**
 * @public
 * @enum
 */
export const MatchOption = {
  EQUALS: "EQUALS",
  NOT_EQUALS: "NOT_EQUALS",
} as const;

/**
 * @public
 */
export type MatchOption = (typeof MatchOption)[keyof typeof MatchOption];

/**
 * <p>Describes a filter that returns a more specific list of recommended actions.</p>
 * @public
 */
export interface ActionFilter {
  /**
   * <p>The category to filter on. Valid values are <code>FEATURE</code> for feature type, <code>SEVERITY</code> for severity level, and <code>TYPE</code> for recommendation type.</p>
   * @public
   */
  key: FilterName | undefined;

  /**
   * <p>Specifies how to apply the filter. Use <code>EQUALS</code> to include matching results or <code>NOT_EQUALS</code> to exclude matching results.</p>
   * @public
   */
  matchOption: MatchOption | undefined;

  /**
   * <p>One or more values to match against the specified key.</p>
   * @public
   */
  values: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const ActionType = {
  ADD_ALTERNATE_BILLING_CONTACT: "ADD_ALTERNATE_BILLING_CONTACT",
  CREATE_ANOMALY_MONITOR: "CREATE_ANOMALY_MONITOR",
  CREATE_BUDGET: "CREATE_BUDGET",
  ENABLE_COST_OPTIMIZATION_HUB: "ENABLE_COST_OPTIMIZATION_HUB",
  MIGRATE_TO_GRANULAR_PERMISSIONS: "MIGRATE_TO_GRANULAR_PERMISSIONS",
  PAYMENTS_DUE: "PAYMENTS_DUE",
  PAYMENTS_PAST_DUE: "PAYMENTS_PAST_DUE",
  REVIEW_ANOMALIES: "REVIEW_ANOMALIES",
  REVIEW_BUDGETS_EXCEEDED: "REVIEW_BUDGETS_EXCEEDED",
  REVIEW_BUDGET_ALERTS: "REVIEW_BUDGET_ALERTS",
  REVIEW_EXPIRING_RI: "REVIEW_EXPIRING_RI",
  REVIEW_EXPIRING_SP: "REVIEW_EXPIRING_SP",
  REVIEW_FREETIER_USAGE_ALERTS: "REVIEW_FREETIER_USAGE_ALERTS",
  REVIEW_SAVINGS_OPPORTUNITY_RECOMMENDATIONS: "REVIEW_SAVINGS_OPPORTUNITY_RECOMMENDATIONS",
  UPDATE_EXPIRED_PAYMENT_METHOD: "UPDATE_EXPIRED_PAYMENT_METHOD",
  UPDATE_INVALID_PAYMENT_METHOD: "UPDATE_INVALID_PAYMENT_METHOD",
  UPDATE_TAX_EXEMPTION_CERTIFICATE: "UPDATE_TAX_EXEMPTION_CERTIFICATE",
  UPDATE_TAX_REGISTRATION_NUMBER: "UPDATE_TAX_REGISTRATION_NUMBER",
} as const;

/**
 * @public
 */
export type ActionType = (typeof ActionType)[keyof typeof ActionType];

/**
 * <p>An unexpected error occurred during the processing of your request.</p>
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
 * <p>Enables filtering of results based on specified action criteria. You can define multiple action filters to refine results using combinations of feature type, severity level, and recommendation type.</p>
 * @public
 */
export interface RequestFilter {
  /**
   * <p>A list of action filters that define criteria for filtering results. Each filter specifies a key, match option, and corresponding values to filter on.</p>
   * @public
   */
  actions?: ActionFilter[] | undefined;
}

/**
 * @public
 */
export interface ListRecommendedActionsRequest {
  /**
   * <p>The criteria that you want all returned recommended actions to match.</p>
   * @public
   */
  filter?: RequestFilter | undefined;

  /**
   * <p>The maximum number of results to return in the response.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The pagination token that indicates the next set of results that you want to retrieve.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const Feature = {
  ACCOUNT: "ACCOUNT",
  BUDGETS: "BUDGETS",
  COST_ANOMALY_DETECTION: "COST_ANOMALY_DETECTION",
  COST_OPTIMIZATION_HUB: "COST_OPTIMIZATION_HUB",
  FREE_TIER: "FREE_TIER",
  IAM: "IAM",
  PAYMENTS: "PAYMENTS",
  RESERVATIONS: "RESERVATIONS",
  SAVINGS_PLANS: "SAVINGS_PLANS",
  TAX_SETTINGS: "TAX_SETTINGS",
} as const;

/**
 * @public
 */
export type Feature = (typeof Feature)[keyof typeof Feature];

/**
 * @public
 * @enum
 */
export const Severity = {
  CRITICAL: "CRITICAL",
  INFO: "INFO",
  WARNING: "WARNING",
} as const;

/**
 * @public
 */
export type Severity = (typeof Severity)[keyof typeof Severity];

/**
 * <p>Describes a specific recommended action.</p>
 * @public
 */
export interface RecommendedAction {
  /**
   * <p>The ID for the recommended action.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The type of action you can take by adopting the recommended action.</p>
   * @public
   */
  type?: ActionType | undefined;

  /**
   * <p>The account that the recommended action is for.</p>
   * @public
   */
  accountId?: string | undefined;

  /**
   * <p>The severity associated with the recommended action.</p>
   * @public
   */
  severity?: Severity | undefined;

  /**
   * <p>The feature associated with the recommended action.</p>
   * @public
   */
  feature?: Feature | undefined;

  /**
   * <p>Context that applies to the recommended action.</p>
   * @public
   */
  context?: Record<string, string> | undefined;

  /**
   * <p>The possible next steps to execute the recommended action.</p>
   * @public
   */
  nextSteps?: string[] | undefined;

  /**
   * <p>The time when the recommended action status was last updated.</p>
   * @public
   */
  lastUpdatedTimeStamp?: string | undefined;
}

/**
 * @public
 */
export interface ListRecommendedActionsResponse {
  /**
   * <p>The list of recommended actions that satisfy the filter criteria.</p>
   * @public
   */
  recommendedActions: RecommendedAction[] | undefined;

  /**
   * <p>The pagination token that indicates the next set of results that you want to retrieve.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>The request was denied due to request throttling.</p>
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
 * <p>Provides specific details about why a particular field failed validation.</p>
 * @public
 */
export interface ValidationExceptionField {
  /**
   * <p>Provides the name of the field that failed validation.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Provides a message explaining why the field failed validation.</p>
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  CANNOT_PARSE: "cannotParse",
  FIELD_VALIDATION_FAILED: "fieldValidationFailed",
  OTHER: "other",
  UNKNOWN_OPERATION: "unknownOperation",
} as const;

/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * <p>Provides a single, overarching explanation for the validation failure.</p>
   * @public
   */
  reason: ValidationExceptionReason | undefined;

  /**
   * <p>Lists each problematic field and why it failed validation.</p>
   * @public
   */
  fieldList?: ValidationExceptionField[] | undefined;

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
