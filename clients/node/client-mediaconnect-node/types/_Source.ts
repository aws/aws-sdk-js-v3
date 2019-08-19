import { _Encryption, _UnmarshalledEncryption } from "./_Encryption";
import { _Transport, _UnmarshalledTransport } from "./_Transport";

/**
 * The settings for the source of the flow.
 */
export interface _Source {
  /**
   * The type of encryption that is used on the content ingested from this source.
   */
  Decryption?: _Encryption;

  /**
   * A description for the source. This value is not used or seen outside of the current AWS Elemental MediaConnect account.
   */
  Description?: string;

  /**
   * The ARN of the entitlement that allows you to subscribe to content that comes from another AWS account. The entitlement is set by the content originator and the ARN is generated as part of the originator's flow.
   */
  EntitlementArn?: string;

  /**
   * The IP address that the flow will be listening on for incoming content.
   */
  IngestIp?: string;

  /**
   * The port that the flow will be listening on for incoming content.
   */
  IngestPort?: number;

  /**
   * The name of the source.
   */
  Name: string;

  /**
   * The ARN of the source.
   */
  SourceArn: string;

  /**
   * Attributes related to the transport stream that are used in the source.
   */
  Transport?: _Transport;

  /**
   * The range of IP addresses that should be allowed to contribute content to your source. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.
   */
  WhitelistCidr?: string;
}

export interface _UnmarshalledSource extends _Source {
  /**
   * The type of encryption that is used on the content ingested from this source.
   */
  Decryption?: _UnmarshalledEncryption;

  /**
   * Attributes related to the transport stream that are used in the source.
   */
  Transport?: _UnmarshalledTransport;
}
