import {
  _MonthlyTransfer,
  _UnmarshalledMonthlyTransfer
} from "./_MonthlyTransfer";
import {
  _InstancePortInfo,
  _UnmarshalledInstancePortInfo
} from "./_InstancePortInfo";

/**
 * <p>Describes monthly data transfer rates and port information for an instance.</p>
 */
export interface _InstanceNetworking {
  /**
   * <p>The amount of data in GB allocated for monthly data transfers.</p>
   */
  monthlyTransfer?: _MonthlyTransfer;

  /**
   * <p>An array of key-value pairs containing information about the ports on the instance.</p>
   */
  ports?: Array<_InstancePortInfo> | Iterable<_InstancePortInfo>;
}

export interface _UnmarshalledInstanceNetworking extends _InstanceNetworking {
  /**
   * <p>The amount of data in GB allocated for monthly data transfers.</p>
   */
  monthlyTransfer?: _UnmarshalledMonthlyTransfer;

  /**
   * <p>An array of key-value pairs containing information about the ports on the instance.</p>
   */
  ports?: Array<_UnmarshalledInstancePortInfo>;
}
