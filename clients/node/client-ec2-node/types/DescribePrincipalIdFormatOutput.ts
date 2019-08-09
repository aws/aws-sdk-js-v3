import { _UnmarshalledPrincipalIdFormat } from "./_PrincipalIdFormat";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribePrincipalIdFormatOutput shape
 */
export interface DescribePrincipalIdFormatOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the ID format settings for the ARN.</p>
   */
  Principals?: Array<_UnmarshalledPrincipalIdFormat>;

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
