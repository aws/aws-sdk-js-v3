import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetBootstrapBrokersOutput shape
 */
export interface GetBootstrapBrokersOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   *
   *             <p>A string containing one or more hostname:port pairs.</p>
   *
   */
  BootstrapBrokerString?: string;

  /**
   *
   *             <p>A string containing one or more DNS names (or IP) and TLS port pairs.</p>
   *
   */
  BootstrapBrokerStringTls?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
