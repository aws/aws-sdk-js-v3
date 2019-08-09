/**
 * <p>Information about the source where the association execution details are stored.</p>
 */
export interface _OutputSource {
  /**
   * <p>The ID of the output source, for example the URL of an Amazon S3 bucket.</p>
   */
  OutputSourceId?: string;

  /**
   * <p>The type of source where the association execution details are stored, for example, Amazon S3.</p>
   */
  OutputSourceType?: string;
}

export type _UnmarshalledOutputSource = _OutputSource;
