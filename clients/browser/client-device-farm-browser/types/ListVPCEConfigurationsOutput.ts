import { _UnmarshalledVPCEConfiguration } from "./_VPCEConfiguration";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListVPCEConfigurationsOutput shape
 */
export interface ListVPCEConfigurationsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array of <code>VPCEConfiguration</code> objects containing information about your VPC endpoint configuration.</p>
   */
  vpceConfigurations?: Array<_UnmarshalledVPCEConfiguration>;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
