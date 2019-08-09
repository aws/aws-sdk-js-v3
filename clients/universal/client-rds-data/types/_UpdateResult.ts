import { _Field, _UnmarshalledField } from "./_Field";

/**
 * <p>The response elements represent the results of an update.</p>
 */
export interface _UpdateResult {
  /**
   * <p>Values for fields generated during the request.</p>
   */
  generatedFields?: Array<_Field> | Iterable<_Field>;
}

export interface _UnmarshalledUpdateResult extends _UpdateResult {
  /**
   * <p>Values for fields generated during the request.</p>
   */
  generatedFields?: Array<_UnmarshalledField>;
}
