import { _Encryption, _UnmarshalledEncryption } from "./_Encryption";

/**
 * The entitlements that you want to grant on a flow.
 */
export interface _GrantEntitlementRequest {
  /**
   * A description of the entitlement. This description appears only on the AWS Elemental MediaConnect console and will not be seen by the subscriber or end user.
   */
  Description?: string;

  /**
   * The type of encryption that will be used on the output that is associated with this entitlement.
   */
  Encryption?: _Encryption;

  /**
   * The name of the entitlement. This value must be unique within the current flow.
   */
  Name?: string;

  /**
   * The AWS account IDs that you want to share your content with. The receiving accounts (subscribers) will be allowed to create their own flows using your content as the source.
   */
  Subscribers: Array<string> | Iterable<string>;
}

export interface _UnmarshalledGrantEntitlementRequest
  extends _GrantEntitlementRequest {
  /**
   * The type of encryption that will be used on the output that is associated with this entitlement.
   */
  Encryption?: _UnmarshalledEncryption;

  /**
   * The AWS account IDs that you want to share your content with. The receiving accounts (subscribers) will be allowed to create their own flows using your content as the source.
   */
  Subscribers: Array<string>;
}
