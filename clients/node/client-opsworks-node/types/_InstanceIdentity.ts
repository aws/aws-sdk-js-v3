/**
 * <p>Contains a description of an Amazon EC2 instance from the Amazon EC2 metadata service. For more information, see <a href="https://docs.aws.amazon.com/sdkfornet/latest/apidocs/Index.html">Instance Metadata and User Data</a>.</p>
 */
export interface _InstanceIdentity {
  /**
   * <p>A JSON document that contains the metadata.</p>
   */
  Document?: string;

  /**
   * <p>A signature that can be used to verify the document's accuracy and authenticity.</p>
   */
  Signature?: string;
}

export type _UnmarshalledInstanceIdentity = _InstanceIdentity;
