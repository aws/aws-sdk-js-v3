import { _UnmarshalledStandardsSubscription } from "./_StandardsSubscription";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetEnabledStandardsOutput shape
 */
export interface GetEnabledStandardsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of <code>StandardsSubscriptions</code> objects that include information about the enabled standards.</p>
   */
  StandardsSubscriptions?: Array<_UnmarshalledStandardsSubscription>;

  /**
   * <p>The token that is required for pagination.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
