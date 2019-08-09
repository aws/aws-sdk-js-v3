import { _UnmarshalledConfiguration } from "./_Configuration";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListConfigurationsOutput shape
 */
export interface ListConfigurationsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   *
   *             <p>An array of MSK configurations.</p>
   *
   */
  Configurations?: Array<_UnmarshalledConfiguration>;

  /**
   *
   *             <p>The paginated results marker. When the result of a ListConfigurations operation is truncated, the call returns NextToken in the response.
   *                To get another batch of configurations, provide this token in your next request.</p>
   *
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
