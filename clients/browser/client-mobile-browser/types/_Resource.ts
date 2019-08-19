/**
 * <p> Information about an instance of an AWS resource associated with a project. </p>
 */
export interface _Resource {
  /**
   * <p> Simplified name for type of AWS resource (e.g., bucket is an Amazon S3 bucket). </p>
   */
  type?: string;

  /**
   * <p> Name of the AWS resource (e.g., for an Amazon S3 bucket this is the name of the bucket). </p>
   */
  name?: string;

  /**
   * <p> AWS resource name which uniquely identifies the resource in AWS systems. </p>
   */
  arn?: string;

  /**
   * <p> Identifies which feature in AWS Mobile Hub is associated with this AWS resource. </p>
   */
  feature?: string;

  /**
   * <p> Key-value attribute pairs. </p>
   */
  attributes?: { [key: string]: string } | Iterable<[string, string]>;
}

export interface _UnmarshalledResource extends _Resource {
  /**
   * <p> Key-value attribute pairs. </p>
   */
  attributes?: { [key: string]: string };
}
