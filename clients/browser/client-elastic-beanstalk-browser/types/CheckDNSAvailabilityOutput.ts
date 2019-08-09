import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Indicates if the specified CNAME is available.</p>
 */
export interface CheckDNSAvailabilityOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Indicates if the specified CNAME is available:</p> <ul> <li> <p> <code>true</code> : The CNAME is available.</p> </li> <li> <p> <code>false</code> : The CNAME is not available.</p> </li> </ul>
   */
  Available?: boolean;

  /**
   * <p>The fully qualified CNAME to reserve when <a>CreateEnvironment</a> is called with the provided prefix.</p>
   */
  FullyQualifiedCNAME?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
