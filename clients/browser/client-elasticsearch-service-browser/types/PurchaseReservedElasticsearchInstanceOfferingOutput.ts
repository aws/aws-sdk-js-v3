import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the output of a <code>PurchaseReservedElasticsearchInstanceOffering</code> operation.</p>
 */
export interface PurchaseReservedElasticsearchInstanceOfferingOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Details of the reserved Elasticsearch instance which was purchased.</p>
   */
  ReservedElasticsearchInstanceId?: string;

  /**
   * <p>The customer-specified identifier used to track this reservation.</p>
   */
  ReservationName?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
