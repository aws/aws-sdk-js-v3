import { _UnmarshalledLoggingConfiguration } from "./_LoggingConfiguration";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListLoggingConfigurationsOutput shape
 */
export interface ListLoggingConfigurationsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array of <a>LoggingConfiguration</a> objects.</p>
   */
  LoggingConfigurations?: Array<_UnmarshalledLoggingConfiguration>;

  /**
   * <p>If you have more <code>LoggingConfigurations</code> than the number that you specified for <code>Limit</code> in the request, the response includes a <code>NextMarker</code> value. To list more <code>LoggingConfigurations</code>, submit another <code>ListLoggingConfigurations</code> request, and specify the <code>NextMarker</code> value from the response in the <code>NextMarker</code> value in the next request.</p>
   */
  NextMarker?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
