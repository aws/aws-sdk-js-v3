/**
 * <p>A JSON-formatted object that describes a compatible Amazon Machine Image (AMI). For more information on compatible AMIs, see <a href="http://docs.aws.amazon.com/snowball/latest/developer-guide/using-ec2.html">Using Amazon EC2 Compute Instances</a> in the <i>AWS Snowball Developer Guide</i>.</p>
 */
export interface _CompatibleImage {
  /**
   * <p>The unique identifier for an individual Snowball Edge AMI.</p>
   */
  AmiId?: string;

  /**
   * <p>The optional name of a compatible image.</p>
   */
  Name?: string;
}

export type _UnmarshalledCompatibleImage = _CompatibleImage;
