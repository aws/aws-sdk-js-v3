import {
  _OfferingStatus,
  _UnmarshalledOfferingStatus
} from "./_OfferingStatus";
import {
  _MonetaryAmount,
  _UnmarshalledMonetaryAmount
} from "./_MonetaryAmount";

/**
 * <p>Represents the metadata of an offering transaction.</p>
 */
export interface _OfferingTransaction {
  /**
   * <p>The status of an offering transaction.</p>
   */
  offeringStatus?: _OfferingStatus;

  /**
   * <p>The transaction ID of the offering transaction.</p>
   */
  transactionId?: string;

  /**
   * <p>The ID that corresponds to a device offering promotion.</p>
   */
  offeringPromotionId?: string;

  /**
   * <p>The date on which an offering transaction was created.</p>
   */
  createdOn?: Date | string | number;

  /**
   * <p>The cost of an offering transaction.</p>
   */
  cost?: _MonetaryAmount;
}

export interface _UnmarshalledOfferingTransaction extends _OfferingTransaction {
  /**
   * <p>The status of an offering transaction.</p>
   */
  offeringStatus?: _UnmarshalledOfferingStatus;

  /**
   * <p>The date on which an offering transaction was created.</p>
   */
  createdOn?: Date;

  /**
   * <p>The cost of an offering transaction.</p>
   */
  cost?: _UnmarshalledMonetaryAmount;
}
