import { _UnmarshalledLimits } from "./_Limits";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p> Container for the parameters received from <code> <a>DescribeElasticsearchInstanceTypeLimits</a> </code> operation. </p>
 */
export interface DescribeElasticsearchInstanceTypeLimitsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p> Map of Role of the Instance and Limits that are applicable. Role performed by given Instance in Elasticsearch can be one of the following: <ul> <li>Data: If the given InstanceType is used as Data node</li> <li>Master: If the given InstanceType is used as Master node</li> </ul> </p>
   */
  LimitsByRole?: { [key: string]: _UnmarshalledLimits };

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
