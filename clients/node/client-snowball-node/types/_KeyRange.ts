/**
 * <p>Contains a key range. For export jobs, a <code>S3Resource</code> object can have an optional <code>KeyRange</code> value. The length of the range is defined at job creation, and has either an inclusive <code>BeginMarker</code>, an inclusive <code>EndMarker</code>, or both. Ranges are UTF-8 binary sorted.</p>
 */
export interface _KeyRange {
  /**
   * <p>The key that starts an optional key range for an export job. Ranges are inclusive and UTF-8 binary sorted.</p>
   */
  BeginMarker?: string;

  /**
   * <p>The key that ends an optional key range for an export job. Ranges are inclusive and UTF-8 binary sorted.</p>
   */
  EndMarker?: string;
}

export type _UnmarshalledKeyRange = _KeyRange;
