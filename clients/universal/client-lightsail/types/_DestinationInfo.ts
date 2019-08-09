/**
 * <p>Describes the destination of a record.</p>
 */
export interface _DestinationInfo {
  /**
   * <p>The ID of the resource created at the destination.</p>
   */
  id?: string;

  /**
   * <p>The destination service of the record.</p>
   */
  service?: string;
}

export type _UnmarshalledDestinationInfo = _DestinationInfo;
