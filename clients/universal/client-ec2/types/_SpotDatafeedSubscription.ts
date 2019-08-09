import {
  _SpotInstanceStateFault,
  _UnmarshalledSpotInstanceStateFault
} from "./_SpotInstanceStateFault";

/**
 * <p>Describes the data feed for a Spot Instance.</p>
 */
export interface _SpotDatafeedSubscription {
  /**
   * <p>The Amazon S3 bucket where the Spot Instance data feed is located.</p>
   */
  Bucket?: string;

  /**
   * <p>The fault codes for the Spot Instance request, if any.</p>
   */
  Fault?: _SpotInstanceStateFault;

  /**
   * <p>The AWS account ID of the account.</p>
   */
  OwnerId?: string;

  /**
   * <p>The prefix that is prepended to data feed files.</p>
   */
  Prefix?: string;

  /**
   * <p>The state of the Spot Instance data feed subscription.</p>
   */
  State?: "Active" | "Inactive" | string;
}

export interface _UnmarshalledSpotDatafeedSubscription
  extends _SpotDatafeedSubscription {
  /**
   * <p>The fault codes for the Spot Instance request, if any.</p>
   */
  Fault?: _UnmarshalledSpotInstanceStateFault;
}
