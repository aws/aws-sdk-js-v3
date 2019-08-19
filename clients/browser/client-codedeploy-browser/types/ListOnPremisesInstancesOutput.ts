import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the output of the list on-premises instances operation.</p>
 */
export interface ListOnPremisesInstancesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The list of matching on-premises instance names.</p>
   */
  instanceNames?: Array<string>;

  /**
   * <p>If a large amount of information is returned, an identifier is also returned. It can be used in a subsequent list on-premises instances call to return the next set of on-premises instances in the list.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
