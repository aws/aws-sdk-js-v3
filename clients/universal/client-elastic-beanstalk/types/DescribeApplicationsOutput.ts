import { _UnmarshalledApplicationDescription } from "./_ApplicationDescription";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Result message containing a list of application descriptions.</p>
 */
export interface DescribeApplicationsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>This parameter contains a list of <a>ApplicationDescription</a>.</p>
   */
  Applications?: Array<_UnmarshalledApplicationDescription>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
