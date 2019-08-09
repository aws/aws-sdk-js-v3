import {
  _ObjectIdentifier,
  _UnmarshalledObjectIdentifier
} from "./_ObjectIdentifier";

/**
 * <p/>
 */
export interface _Delete {
  /**
   * <p/>
   */
  Objects: Array<_ObjectIdentifier> | Iterable<_ObjectIdentifier>;

  /**
   * <p>Element to enable quiet mode for the request. When you add this element, you must set its value to true.</p>
   */
  Quiet?: boolean;
}

export interface _UnmarshalledDelete extends _Delete {
  /**
   * <p/>
   */
  Objects: Array<_UnmarshalledObjectIdentifier>;
}
