import { _UnmarshalledReceiptFilter } from "./_ReceiptFilter";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>A list of IP address filters that exist under your AWS account.</p>
 */
export interface ListReceiptFiltersOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of IP address filter data structures, which each consist of a name, an IP address range, and whether to allow or block mail from it.</p>
   */
  Filters?: Array<_UnmarshalledReceiptFilter>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
