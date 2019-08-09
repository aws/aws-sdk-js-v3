import { _UnmarshalledEventSelector } from "./_EventSelector";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * PutEventSelectorsOutput shape
 */
export interface PutEventSelectorsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Specifies the ARN of the trail that was updated with event selectors. The format of a trail ARN is:</p> <p> <code>arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail</code> </p>
   */
  TrailARN?: string;

  /**
   * <p>Specifies the event selectors configured for your trail.</p>
   */
  EventSelectors?: Array<_UnmarshalledEventSelector>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
