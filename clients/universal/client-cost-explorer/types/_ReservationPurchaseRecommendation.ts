import {
  _ServiceSpecification,
  _UnmarshalledServiceSpecification
} from "./_ServiceSpecification";
import {
  _ReservationPurchaseRecommendationDetail,
  _UnmarshalledReservationPurchaseRecommendationDetail
} from "./_ReservationPurchaseRecommendationDetail";
import {
  _ReservationPurchaseRecommendationSummary,
  _UnmarshalledReservationPurchaseRecommendationSummary
} from "./_ReservationPurchaseRecommendationSummary";

/**
 * <p>A specific reservation that AWS recommends for purchase.</p>
 */
export interface _ReservationPurchaseRecommendation {
  /**
   * <p>The account scope that AWS recommends that you purchase this instance for. For example, you can purchase this reservation for an entire organization in AWS Organizations.</p>
   */
  AccountScope?: "PAYER" | "LINKED" | string;

  /**
   * <p>How many days of previous usage that AWS considers when making this recommendation.</p>
   */
  LookbackPeriodInDays?: "SEVEN_DAYS" | "THIRTY_DAYS" | "SIXTY_DAYS" | string;

  /**
   * <p>The term of the reservation that you want recommendations for, in years.</p>
   */
  TermInYears?: "ONE_YEAR" | "THREE_YEARS" | string;

  /**
   * <p>The payment option for the reservation. For example, <code>AllUpfront</code> or <code>NoUpfront</code>.</p>
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
   * <p>Hardware specifications for the service that you want recommendations for.</p>
   */
  ServiceSpecification?: _ServiceSpecification;

  /**
   * <p>Details about the recommended purchases.</p>
   */
  RecommendationDetails?:
    | Array<_ReservationPurchaseRecommendationDetail>
    | Iterable<_ReservationPurchaseRecommendationDetail>;

  /**
   * <p>A summary about the recommended purchase.</p>
   */
  RecommendationSummary?: _ReservationPurchaseRecommendationSummary;
}

export interface _UnmarshalledReservationPurchaseRecommendation
  extends _ReservationPurchaseRecommendation {
  /**
   * <p>Hardware specifications for the service that you want recommendations for.</p>
   */
  ServiceSpecification?: _UnmarshalledServiceSpecification;

  /**
   * <p>Details about the recommended purchases.</p>
   */
  RecommendationDetails?: Array<
    _UnmarshalledReservationPurchaseRecommendationDetail
  >;

  /**
   * <p>A summary about the recommended purchase.</p>
   */
  RecommendationSummary?: _UnmarshalledReservationPurchaseRecommendationSummary;
}
