import { _ServiceSpecification } from "./_ServiceSpecification";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetReservationPurchaseRecommendationInput shape
 */
export interface GetReservationPurchaseRecommendationInput {
  /**
   * <p>The account ID that is associated with the recommendation. </p>
   */
  AccountId?: string;

  /**
   * <p>The specific service that you want recommendations for.</p>
   */
  Service: string;

  /**
   * <p>The account scope that you want recommendations for. <code>PAYER</code> means that AWS includes the master account and any member accounts when it calculates its recommendations. <code>LINKED</code> means that AWS includes only member accounts when it calculates its recommendations.</p> <p>Valid values are <code>PAYER</code> and <code>LINKED</code>.</p>
   */
  AccountScope?: "PAYER" | "LINKED" | string;

  /**
   * <p>The number of previous days that you want AWS to consider when it calculates your recommendations.</p>
   */
  LookbackPeriodInDays?: "SEVEN_DAYS" | "THIRTY_DAYS" | "SIXTY_DAYS" | string;

  /**
   * <p>The reservation term that you want recommendations for.</p>
   */
  TermInYears?: "ONE_YEAR" | "THREE_YEARS" | string;

  /**
   * <p>The reservation purchase option that you want recommendations for.</p>
   */
  PaymentOption?:
    | "NO_UPFRONT"
    | "PARTIAL_UPFRONT"
    | "ALL_UPFRONT"
    | "LIGHT_UTILIZATION"
    | "MEDIUM_UTILIZATION"
    | "HEAVY_UTILIZATION"
    | string;

  /**
   * <p>The hardware specifications for the service instances that you want recommendations for, such as standard or convertible Amazon EC2 instances.</p>
   */
  ServiceSpecification?: _ServiceSpecification;

  /**
   * <p>The number of recommendations that you want returned in a single response object.</p>
   */
  PageSize?: number;

  /**
   * <p>The pagination token that indicates the next set of results that you want to retrieve.</p>
   */
  NextPageToken?: string;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
