import { _StorageType, _UnmarshalledStorageType } from "./_StorageType";
import {
  _InstanceLimits,
  _UnmarshalledInstanceLimits
} from "./_InstanceLimits";
import {
  _AdditionalLimit,
  _UnmarshalledAdditionalLimit
} from "./_AdditionalLimit";

/**
 * <p> Limits for given InstanceType and for each of it's role. <br/> Limits contains following <code> <a>StorageTypes,</a> </code> <code> <a>InstanceLimits</a> </code> and <code> <a>AdditionalLimits</a> </code> </p>
 */
export interface _Limits {
  /**
   * <p>StorageType represents the list of storage related types and attributes that are available for given InstanceType. </p>
   */
  StorageTypes?: Array<_StorageType> | Iterable<_StorageType>;

  /**
   * <p>InstanceLimits represents the list of instance related attributes that are available for given InstanceType. </p>
   */
  InstanceLimits?: _InstanceLimits;

  /**
   * <p> List of additional limits that are specific to a given InstanceType and for each of it's <code> <a>InstanceRole</a> </code> . </p>
   */
  AdditionalLimits?: Array<_AdditionalLimit> | Iterable<_AdditionalLimit>;
}

export interface _UnmarshalledLimits extends _Limits {
  /**
   * <p>StorageType represents the list of storage related types and attributes that are available for given InstanceType. </p>
   */
  StorageTypes?: Array<_UnmarshalledStorageType>;

  /**
   * <p>InstanceLimits represents the list of instance related attributes that are available for given InstanceType. </p>
   */
  InstanceLimits?: _UnmarshalledInstanceLimits;

  /**
   * <p> List of additional limits that are specific to a given InstanceType and for each of it's <code> <a>InstanceRole</a> </code> . </p>
   */
  AdditionalLimits?: Array<_UnmarshalledAdditionalLimit>;
}
