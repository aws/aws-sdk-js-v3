import { _Encryption, _UnmarshalledEncryption } from "./_Encryption";
import { _Transport, _UnmarshalledTransport } from "./_Transport";

/**
 * The settings for an output.
 */
export interface _Output {
  /**
   * A description of the output.
   */
  Description?: string;

  /**
   * The address where you want to send the output.
   */
  Destination?: string;

  /**
   * The type of key used for the encryption. If no keyType is provided, the service will use the default setting (static-key).
   */
  Encryption?: _Encryption;

  /**
   * The ARN of the entitlement on the originator''s flow. This value is relevant only on entitled flows.
   */
  EntitlementArn?: string;

  /**
   * The input ARN of the AWS Elemental MediaLive channel. This parameter is relevant only for outputs that were added by creating a MediaLive input.
   */
  MediaLiveInputArn?: string;

  /**
   * The name of the output. This value must be unique within the current flow.
   */
  Name: string;

  /**
   * The ARN of the output.
   */
  OutputArn: string;

  /**
   * The port to use when content is distributed to this output.
   */
  Port?: number;

  /**
   * Attributes related to the transport stream that are used in the output.
   */
  Transport?: _Transport;
}

export interface _UnmarshalledOutput extends _Output {
  /**
   * The type of key used for the encryption. If no keyType is provided, the service will use the default setting (static-key).
   */
  Encryption?: _UnmarshalledEncryption;

  /**
   * Attributes related to the transport stream that are used in the output.
   */
  Transport?: _UnmarshalledTransport;
}
