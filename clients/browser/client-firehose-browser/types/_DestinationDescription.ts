import {
  _S3DestinationDescription,
  _UnmarshalledS3DestinationDescription
} from "./_S3DestinationDescription";
import {
  _ExtendedS3DestinationDescription,
  _UnmarshalledExtendedS3DestinationDescription
} from "./_ExtendedS3DestinationDescription";
import {
  _RedshiftDestinationDescription,
  _UnmarshalledRedshiftDestinationDescription
} from "./_RedshiftDestinationDescription";
import {
  _ElasticsearchDestinationDescription,
  _UnmarshalledElasticsearchDestinationDescription
} from "./_ElasticsearchDestinationDescription";
import {
  _SplunkDestinationDescription,
  _UnmarshalledSplunkDestinationDescription
} from "./_SplunkDestinationDescription";

/**
 * <p>Describes the destination for a delivery stream.</p>
 */
export interface _DestinationDescription {
  /**
   * <p>The ID of the destination.</p>
   */
  DestinationId: string;

  /**
   * <p>[Deprecated] The destination in Amazon S3.</p>
   */
  S3DestinationDescription?: _S3DestinationDescription;

  /**
   * <p>The destination in Amazon S3.</p>
   */
  ExtendedS3DestinationDescription?: _ExtendedS3DestinationDescription;

  /**
   * <p>The destination in Amazon Redshift.</p>
   */
  RedshiftDestinationDescription?: _RedshiftDestinationDescription;

  /**
   * <p>The destination in Amazon ES.</p>
   */
  ElasticsearchDestinationDescription?: _ElasticsearchDestinationDescription;

  /**
   * <p>The destination in Splunk.</p>
   */
  SplunkDestinationDescription?: _SplunkDestinationDescription;
}

export interface _UnmarshalledDestinationDescription
  extends _DestinationDescription {
  /**
   * <p>[Deprecated] The destination in Amazon S3.</p>
   */
  S3DestinationDescription?: _UnmarshalledS3DestinationDescription;

  /**
   * <p>The destination in Amazon S3.</p>
   */
  ExtendedS3DestinationDescription?: _UnmarshalledExtendedS3DestinationDescription;

  /**
   * <p>The destination in Amazon Redshift.</p>
   */
  RedshiftDestinationDescription?: _UnmarshalledRedshiftDestinationDescription;

  /**
   * <p>The destination in Amazon ES.</p>
   */
  ElasticsearchDestinationDescription?: _UnmarshalledElasticsearchDestinationDescription;

  /**
   * <p>The destination in Splunk.</p>
   */
  SplunkDestinationDescription?: _UnmarshalledSplunkDestinationDescription;
}
