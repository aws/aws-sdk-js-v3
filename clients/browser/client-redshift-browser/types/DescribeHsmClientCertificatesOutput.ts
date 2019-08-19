import { _UnmarshalledHsmClientCertificate } from "./_HsmClientCertificate";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p/>
 */
export interface DescribeHsmClientCertificatesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A value that indicates the starting point for the next set of response records in a subsequent request. If a value is returned in a response, you can retrieve the next set of records by providing this returned marker value in the <code>Marker</code> parameter and retrying the command. If the <code>Marker</code> field is empty, all response records have been retrieved for the request. </p>
   */
  Marker?: string;

  /**
   * <p>A list of the identifiers for one or more HSM client certificates used by Amazon Redshift clusters to store and retrieve database encryption keys in an HSM.</p>
   */
  HsmClientCertificates?: Array<_UnmarshalledHsmClientCertificate>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
