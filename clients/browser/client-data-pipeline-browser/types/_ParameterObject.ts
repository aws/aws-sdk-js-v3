import {
  _ParameterAttribute,
  _UnmarshalledParameterAttribute
} from "./_ParameterAttribute";

/**
 * <p>Contains information about a parameter object.</p>
 */
export interface _ParameterObject {
  /**
   * <p>The ID of the parameter object. </p>
   */
  id: string;

  /**
   * <p>The attributes of the parameter object.</p>
   */
  attributes: Array<_ParameterAttribute> | Iterable<_ParameterAttribute>;
}

export interface _UnmarshalledParameterObject extends _ParameterObject {
  /**
   * <p>The attributes of the parameter object.</p>
   */
  attributes: Array<_UnmarshalledParameterAttribute>;
}
