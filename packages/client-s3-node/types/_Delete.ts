import {
  _ObjectIdentifier,
  _UnmarshalledObjectIdentifier
} from "./_ObjectIdentifier";

/**
 * _Delete shape
 */
export interface _Delete {
  /**
   * _ObjectIdentifierList shape
   */
  Objects: Array<_ObjectIdentifier> | Iterable<_ObjectIdentifier>;

  /**
   * <p>Element to enable quiet mode for the request. When you add this element, you must set its value to true.</p>
   */
  Quiet?: boolean;
}

export interface _UnmarshalledDelete extends _Delete {
  /**
   * _ObjectIdentifierList shape
   */
  Objects: Array<_UnmarshalledObjectIdentifier>;
}
