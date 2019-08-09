import { _InstanceCount, _UnmarshalledInstanceCount } from "./_InstanceCount";
import { _PriceSchedule, _UnmarshalledPriceSchedule } from "./_PriceSchedule";
import { _Tag, _UnmarshalledTag } from "./_Tag";

/**
 * <p>Describes a Reserved Instance listing.</p>
 */
export interface _ReservedInstancesListing {
  /**
   * <p>A unique, case-sensitive key supplied by the client to ensure that the request is idempotent. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * <p>The time the listing was created.</p>
   */
  CreateDate?: Date | string | number;

  /**
   * <p>The number of instances in this state.</p>
   */
  InstanceCounts?: Array<_InstanceCount> | Iterable<_InstanceCount>;

  /**
   * <p>The price of the Reserved Instance listing.</p>
   */
  PriceSchedules?: Array<_PriceSchedule> | Iterable<_PriceSchedule>;

  /**
   * <p>The ID of the Reserved Instance.</p>
   */
  ReservedInstancesId?: string;

  /**
   * <p>The ID of the Reserved Instance listing.</p>
   */
  ReservedInstancesListingId?: string;

  /**
   * <p>The status of the Reserved Instance listing.</p>
   */
  Status?: "active" | "pending" | "cancelled" | "closed" | string;

  /**
   * <p>The reason for the current status of the Reserved Instance listing. The response can be blank.</p>
   */
  StatusMessage?: string;

  /**
   * <p>Any tags assigned to the resource.</p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;

  /**
   * <p>The last modified timestamp of the listing.</p>
   */
  UpdateDate?: Date | string | number;
}

export interface _UnmarshalledReservedInstancesListing
  extends _ReservedInstancesListing {
  /**
   * <p>The time the listing was created.</p>
   */
  CreateDate?: Date;

  /**
   * <p>The number of instances in this state.</p>
   */
  InstanceCounts?: Array<_UnmarshalledInstanceCount>;

  /**
   * <p>The price of the Reserved Instance listing.</p>
   */
  PriceSchedules?: Array<_UnmarshalledPriceSchedule>;

  /**
   * <p>Any tags assigned to the resource.</p>
   */
  Tags?: Array<_UnmarshalledTag>;

  /**
   * <p>The last modified timestamp of the listing.</p>
   */
  UpdateDate?: Date;
}
