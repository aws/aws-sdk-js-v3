import { _Encryption, _UnmarshalledEncryption } from "./_Encryption";

/**
 * The settings for a flow entitlement.
 */
export interface _Entitlement {
  /**
   * A description of the entitlement.
   */
  Description?: string;

  /**
   * The type of encryption that will be used on the output that is associated with this entitlement.
   */
  Encryption?: _Encryption;

  /**
   * The ARN of the entitlement.
   */
  EntitlementArn: string;

  /**
   * The name of the entitlement.
   */
  Name: string;

  /**
   * The AWS account IDs that you want to share your content with. The receiving accounts (subscribers) will be allowed to create their own flow using your content as the source.
   */
  Subscribers: Array<string> | Iterable<string>;
}

export interface _UnmarshalledEntitlement extends _Entitlement {
  /**
   * The type of encryption that will be used on the output that is associated with this entitlement.
   */
  Encryption?: _UnmarshalledEncryption;

  /**
   * The AWS account IDs that you want to share your content with. The receiving accounts (subscribers) will be allowed to create their own flow using your content as the source.
   */
  Subscribers: Array<string>;
}
