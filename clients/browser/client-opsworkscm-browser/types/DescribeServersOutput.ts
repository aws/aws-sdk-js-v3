import { _UnmarshalledServer } from "./_Server";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeServersOutput shape
 */
export interface DescribeServersOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Contains the response to a <code>DescribeServers</code> request.</p> <p> <i>For Puppet Server:</i> <code>DescribeServersResponse$Servers$EngineAttributes</code> contains PUPPET_API_CA_CERT. This is the PEM-encoded CA certificate that is used by the Puppet API over TCP port number 8140. The CA certificate is also used to sign node certificates.</p>
   */
  Servers?: Array<_UnmarshalledServer>;

  /**
   * <p>This is not currently implemented for <code>DescribeServers</code> requests. </p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
