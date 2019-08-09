import { _UnmarshalledStandardsSubscription } from "./_StandardsSubscription";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * BatchEnableStandardsOutput shape
 */
export interface BatchEnableStandardsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The details of the standards subscriptions that were enabled.</p>
   */
  StandardsSubscriptions?: Array<_UnmarshalledStandardsSubscription>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
