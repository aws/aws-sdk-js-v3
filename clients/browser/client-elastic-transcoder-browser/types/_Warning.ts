/**
 * <p>Elastic Transcoder returns a warning if the resources used by your pipeline are not in the same region as the pipeline.</p> <p>Using resources in the same region, such as your Amazon S3 buckets, Amazon SNS notification topics, and AWS KMS key, reduces processing time and prevents cross-regional charges.</p>
 */
export interface _Warning {
  /**
   * <p>The code of the cross-regional warning.</p>
   */
  Code?: string;

  /**
   * <p>The message explaining what resources are in a different region from the pipeline.</p> <note> <p>AWS KMS keys must be in the same region as the pipeline.</p> </note>
   */
  Message?: string;
}

export type _UnmarshalledWarning = _Warning;
