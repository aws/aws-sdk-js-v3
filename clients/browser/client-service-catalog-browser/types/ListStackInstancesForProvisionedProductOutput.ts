import { _UnmarshalledStackInstance } from "./_StackInstance";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListStackInstancesForProvisionedProductOutput shape
 */
export interface ListStackInstancesForProvisionedProductOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>List of stack instances.</p>
   */
  StackInstances?: Array<_UnmarshalledStackInstance>;

  /**
   * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
   */
  NextPageToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
