import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetSupportedResourceTypesOutput shape
 */
export interface GetSupportedResourceTypesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Contains a string with the supported AWS resource types:</p> <ul> <li> <p> <code>EBS</code> for Amazon Elastic Block Store</p> </li> <li> <p> <code>SGW</code> for AWS Storage Gateway</p> </li> <li> <p> <code>RDS</code> for Amazon Relational Database Service</p> </li> <li> <p> <code>DDB</code> for Amazon DynamoDB</p> </li> <li> <p> <code>EFS</code> for Amazon Elastic File System</p> </li> </ul>
   */
  ResourceTypes?: Array<string>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
