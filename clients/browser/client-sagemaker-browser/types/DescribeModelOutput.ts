import { _UnmarshalledContainerDefinition } from "./_ContainerDefinition";
import { _UnmarshalledVpcConfig } from "./_VpcConfig";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeModelOutput shape
 */
export interface DescribeModelOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Name of the Amazon SageMaker model.</p>
   */
  ModelName: string;

  /**
   * <p>The location of the primary inference code, associated artifacts, and custom environment map that the inference code uses when it is deployed in production. </p>
   */
  PrimaryContainer?: _UnmarshalledContainerDefinition;

  /**
   * <p>The containers in the inference pipeline.</p>
   */
  Containers?: Array<_UnmarshalledContainerDefinition>;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that you specified for the model.</p>
   */
  ExecutionRoleArn: string;

  /**
   * <p>A <a>VpcConfig</a> object that specifies the VPC that this model has access to. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/host-vpc.html">Protect Endpoints by Using an Amazon Virtual Private Cloud</a> </p>
   */
  VpcConfig?: _UnmarshalledVpcConfig;

  /**
   * <p>A timestamp that shows when the model was created.</p>
   */
  CreationTime: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the model.</p>
   */
  ModelArn: string;

  /**
   * <p>If <code>True</code>, no inbound or outbound network calls can be made to or from the model container.</p> <note> <p>The Semantic Segmentation built-in algorithm does not support network isolation.</p> </note>
   */
  EnableNetworkIsolation?: boolean;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
