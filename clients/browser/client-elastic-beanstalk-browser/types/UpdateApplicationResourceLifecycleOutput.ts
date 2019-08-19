import { _UnmarshalledApplicationResourceLifecycleConfig } from "./_ApplicationResourceLifecycleConfig";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateApplicationResourceLifecycleOutput shape
 */
export interface UpdateApplicationResourceLifecycleOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The name of the application.</p>
   */
  ApplicationName?: string;

  /**
   * <p>The lifecycle configuration.</p>
   */
  ResourceLifecycleConfig?: _UnmarshalledApplicationResourceLifecycleConfig;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
