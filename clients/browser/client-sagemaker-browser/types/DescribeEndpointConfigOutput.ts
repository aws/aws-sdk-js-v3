import { _UnmarshalledProductionVariant } from "./_ProductionVariant";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeEndpointConfigOutput shape
 */
export interface DescribeEndpointConfigOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Name of the Amazon SageMaker endpoint configuration.</p>
   */
  EndpointConfigName: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint configuration.</p>
   */
  EndpointConfigArn: string;

  /**
   * <p>An array of <code>ProductionVariant</code> objects, one for each model that you want to host at this endpoint.</p>
   */
  ProductionVariants: Array<_UnmarshalledProductionVariant>;

  /**
   * <p>AWS KMS key ID Amazon SageMaker uses to encrypt data when storing it on the ML storage volume attached to the instance.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>A timestamp that shows when the endpoint configuration was created.</p>
   */
  CreationTime: Date;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
