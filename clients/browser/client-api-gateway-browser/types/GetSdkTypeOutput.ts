import { _UnmarshalledSdkConfigurationProperty } from "./_SdkConfigurationProperty";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>A type of SDK that API Gateway can generate.</p>
 */
export interface GetSdkTypeOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The identifier of an <a>SdkType</a> instance.</p>
   */
  id?: string;

  /**
   * <p>The user-friendly name of an <a>SdkType</a> instance.</p>
   */
  friendlyName?: string;

  /**
   * <p>The description of an <a>SdkType</a>.</p>
   */
  description?: string;

  /**
   * <p>A list of configuration properties of an <a>SdkType</a>.</p>
   */
  configurationProperties?: Array<_UnmarshalledSdkConfigurationProperty>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
