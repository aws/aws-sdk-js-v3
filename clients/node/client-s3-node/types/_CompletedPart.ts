/**
 * <p/>
 */
export interface _CompletedPart {
  /**
   * <p>Entity tag returned when the part was uploaded.</p>
   */
  ETag?: string;

  /**
   * <p>Part number that identifies the part. This is a positive integer between 1 and 10,000.</p>
   */
  PartNumber?: number;
}

export type _UnmarshalledCompletedPart = _CompletedPart;
