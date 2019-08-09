import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListDeliveryStreamsOutput shape
 */
export interface ListDeliveryStreamsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The names of the delivery streams.</p>
   */
  DeliveryStreamNames: Array<string>;

  /**
   * <p>Indicates whether there are more delivery streams available to list.</p>
   */
  HasMoreDeliveryStreams: boolean;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
