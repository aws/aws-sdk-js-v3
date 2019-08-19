import { _PriceScheduleSpecification } from "./_PriceScheduleSpecification";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the parameters for CreateReservedInstancesListing.</p>
 */
export interface CreateReservedInstancesListingInput {
  /**
   * <p>Unique, case-sensitive identifier you provide to ensure idempotency of your listings. This helps avoid duplicate listings. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring Idempotency</a>.</p>
   */
  ClientToken: string;

  /**
   * <p>The number of instances that are a part of a Reserved Instance account to be listed in the Reserved Instance Marketplace. This number should be less than or equal to the instance count associated with the Reserved Instance ID specified in this call.</p>
   */
  InstanceCount: number;

  /**
   * <p>A list specifying the price of the Standard Reserved Instance for each month remaining in the Reserved Instance term.</p>
   */
  PriceSchedules:
    | Array<_PriceScheduleSpecification>
    | Iterable<_PriceScheduleSpecification>;

  /**
   * <p>The ID of the active Standard Reserved Instance.</p>
   */
  ReservedInstancesId: string;

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
