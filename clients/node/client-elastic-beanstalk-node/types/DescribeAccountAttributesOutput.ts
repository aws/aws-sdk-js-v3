import { _UnmarshalledResourceQuotas } from "./_ResourceQuotas";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeAccountAttributesOutput shape
 */
export interface DescribeAccountAttributesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The Elastic Beanstalk resource quotas associated with the calling AWS account.</p>
   */
  ResourceQuotas?: _UnmarshalledResourceQuotas;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
