import {
  _ParameterMapEntry,
  _UnmarshalledParameterMapEntry
} from "./_ParameterMapEntry";

/**
 * <p> Name of the parameter from the Review policy. </p>
 */
export interface _PolicyParameter {
  /**
   * <p> Name of the parameter from the list of Review Polices. </p>
   */
  Key?: string;

  /**
   * <p> The list of values of the Parameter</p>
   */
  Values?: Array<string> | Iterable<string>;

  /**
   * <p> List of ParameterMapEntry objects. </p>
   */
  MapEntries?: Array<_ParameterMapEntry> | Iterable<_ParameterMapEntry>;
}

export interface _UnmarshalledPolicyParameter extends _PolicyParameter {
  /**
   * <p> The list of values of the Parameter</p>
   */
  Values?: Array<string>;

  /**
   * <p> List of ParameterMapEntry objects. </p>
   */
  MapEntries?: Array<_UnmarshalledParameterMapEntry>;
}
