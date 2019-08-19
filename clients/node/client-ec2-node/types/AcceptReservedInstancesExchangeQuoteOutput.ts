import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The result of the exchange and whether it was <code>successful</code>.</p>
 */
export interface AcceptReservedInstancesExchangeQuoteOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ID of the successful exchange.</p>
   */
  ExchangeId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
