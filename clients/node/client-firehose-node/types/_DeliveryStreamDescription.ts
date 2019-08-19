import {
  _DeliveryStreamEncryptionConfiguration,
  _UnmarshalledDeliveryStreamEncryptionConfiguration
} from "./_DeliveryStreamEncryptionConfiguration";
import {
  _SourceDescription,
  _UnmarshalledSourceDescription
} from "./_SourceDescription";
import {
  _DestinationDescription,
  _UnmarshalledDestinationDescription
} from "./_DestinationDescription";

/**
 * <p>Contains information about a delivery stream.</p>
 */
export interface _DeliveryStreamDescription {
  /**
   * <p>The name of the delivery stream.</p>
   */
  DeliveryStreamName: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the delivery stream. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a>.</p>
   */
  DeliveryStreamARN: string;

  /**
   * <p>The status of the delivery stream.</p>
   */
  DeliveryStreamStatus: "CREATING" | "DELETING" | "ACTIVE" | string;

  /**
   * <p>Indicates the server-side encryption (SSE) status for the delivery stream.</p>
   */
  DeliveryStreamEncryptionConfiguration?: _DeliveryStreamEncryptionConfiguration;

  /**
   * <p>The delivery stream type. This can be one of the following values:</p> <ul> <li> <p> <code>DirectPut</code>: Provider applications access the delivery stream directly.</p> </li> <li> <p> <code>KinesisStreamAsSource</code>: The delivery stream uses a Kinesis data stream as a source.</p> </li> </ul>
   */
  DeliveryStreamType: "DirectPut" | "KinesisStreamAsSource" | string;

  /**
   * <p>Each time the destination is updated for a delivery stream, the version ID is changed, and the current version ID is required when updating the destination. This is so that the service knows it is applying the changes to the correct version of the delivery stream.</p>
   */
  VersionId: string;

  /**
   * <p>The date and time that the delivery stream was created.</p>
   */
  CreateTimestamp?: Date | string | number;

  /**
   * <p>The date and time that the delivery stream was last updated.</p>
   */
  LastUpdateTimestamp?: Date | string | number;

  /**
   * <p>If the <code>DeliveryStreamType</code> parameter is <code>KinesisStreamAsSource</code>, a <a>SourceDescription</a> object describing the source Kinesis data stream.</p>
   */
  Source?: _SourceDescription;

  /**
   * <p>The destinations.</p>
   */
  Destinations:
    | Array<_DestinationDescription>
    | Iterable<_DestinationDescription>;

  /**
   * <p>Indicates whether there are more destinations available to list.</p>
   */
  HasMoreDestinations: boolean;
}

export interface _UnmarshalledDeliveryStreamDescription
  extends _DeliveryStreamDescription {
  /**
   * <p>Indicates the server-side encryption (SSE) status for the delivery stream.</p>
   */
  DeliveryStreamEncryptionConfiguration?: _UnmarshalledDeliveryStreamEncryptionConfiguration;

  /**
   * <p>The date and time that the delivery stream was created.</p>
   */
  CreateTimestamp?: Date;

  /**
   * <p>The date and time that the delivery stream was last updated.</p>
   */
  LastUpdateTimestamp?: Date;

  /**
   * <p>If the <code>DeliveryStreamType</code> parameter is <code>KinesisStreamAsSource</code>, a <a>SourceDescription</a> object describing the source Kinesis data stream.</p>
   */
  Source?: _UnmarshalledSourceDescription;

  /**
   * <p>The destinations.</p>
   */
  Destinations: Array<_UnmarshalledDestinationDescription>;
}
