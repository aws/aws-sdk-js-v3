/**
 * <p><p>Identity information for the EC2 instance that is hosting the task runner. You can get this value by calling a metadata URI from the EC2 instance. For more information, see <a href="http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AESDG-chapter-instancedata.html">Instance Metadata</a> in the <i>Amazon Elastic Compute Cloud User Guide.</i> Passing in this value proves that your task runner is running on an EC2 instance, and ensures the proper AWS Data Pipeline service charges are applied to your pipeline.</p></p>
 */
export interface _InstanceIdentity {
  /**
   * <p>A description of an EC2 instance that is generated when the instance is launched and exposed to the instance via the instance metadata service in the form of a JSON representation of an object.</p>
   */
  document?: string;

  /**
   * <p>A signature which can be used to verify the accuracy and authenticity of the information provided in the instance identity document.</p>
   */
  signature?: string;
}

export type _UnmarshalledInstanceIdentity = _InstanceIdentity;
