import { _S3Resource, _UnmarshalledS3Resource } from "./_S3Resource";
import {
  _LambdaResource,
  _UnmarshalledLambdaResource
} from "./_LambdaResource";
import {
  _Ec2AmiResource,
  _UnmarshalledEc2AmiResource
} from "./_Ec2AmiResource";

/**
 * <p>Contains an array of AWS resource objects. Each object represents an Amazon S3 bucket, an AWS Lambda function, or an Amazon Machine Image (AMI) based on Amazon EC2 that is associated with a particular job.</p>
 */
export interface _JobResource {
  /**
   * <p>An array of <code>S3Resource</code> objects.</p>
   */
  S3Resources?: Array<_S3Resource> | Iterable<_S3Resource>;

  /**
   * <p>The Python-language Lambda functions for this job.</p>
   */
  LambdaResources?: Array<_LambdaResource> | Iterable<_LambdaResource>;

  /**
   * <p>The Amazon Machine Images (AMIs) associated with this job.</p>
   */
  Ec2AmiResources?: Array<_Ec2AmiResource> | Iterable<_Ec2AmiResource>;
}

export interface _UnmarshalledJobResource extends _JobResource {
  /**
   * <p>An array of <code>S3Resource</code> objects.</p>
   */
  S3Resources?: Array<_UnmarshalledS3Resource>;

  /**
   * <p>The Python-language Lambda functions for this job.</p>
   */
  LambdaResources?: Array<_UnmarshalledLambdaResource>;

  /**
   * <p>The Amazon Machine Images (AMIs) associated with this job.</p>
   */
  Ec2AmiResources?: Array<_UnmarshalledEc2AmiResource>;
}
