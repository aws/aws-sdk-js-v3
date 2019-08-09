import { _UnmarshalledResourceCount } from "./_ResourceCount";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetDiscoveredResourceCountsOutput shape
 */
export interface GetDiscoveredResourceCountsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The total number of resources that AWS Config is recording in the region for your account. If you specify resource types in the request, AWS Config returns only the total number of resources for those resource types.</p> <p class="title"> <b>Example</b> </p> <ol> <li> <p>AWS Config is recording three resource types in the US East (Ohio) Region for your account: 25 EC2 instances, 20 IAM users, and 15 S3 buckets, for a total of 60 resources.</p> </li> <li> <p>You make a call to the <code>GetDiscoveredResourceCounts</code> action and specify the resource type, <code>"AWS::EC2::Instances"</code>, in the request.</p> </li> <li> <p>AWS Config returns 25 for <code>totalDiscoveredResources</code>.</p> </li> </ol>
   */
  totalDiscoveredResources?: number;

  /**
   * <p>The list of <code>ResourceCount</code> objects. Each object is listed in descending order by the number of resources.</p>
   */
  resourceCounts?: Array<_UnmarshalledResourceCount>;

  /**
   * <p>The string that you use in a subsequent request to get the next page of results in a paginated response.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
