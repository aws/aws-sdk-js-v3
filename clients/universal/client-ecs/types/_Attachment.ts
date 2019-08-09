import { _KeyValuePair, _UnmarshalledKeyValuePair } from "./_KeyValuePair";

/**
 * <p>An object representing a container instance or task attachment.</p>
 */
export interface _Attachment {
  /**
   * <p>The unique identifier for the attachment.</p>
   */
  id?: string;

  /**
   * <p>The type of the attachment, such as <code>ElasticNetworkInterface</code>.</p>
   */
  type?: string;

  /**
   * <p> The status of the attachment. Valid values are <code>PRECREATED</code>, <code>CREATED</code>, <code>ATTACHING</code>, <code>ATTACHED</code>, <code>DETACHING</code>, <code>DETACHED</code>, and <code>DELETED</code>.</p>
   */
  status?: string;

  /**
   * <p>Details of the attachment. For elastic network interfaces, this includes the network interface ID, the MAC address, the subnet ID, and the private IPv4 address.</p>
   */
  details?: Array<_KeyValuePair> | Iterable<_KeyValuePair>;
}

export interface _UnmarshalledAttachment extends _Attachment {
  /**
   * <p>Details of the attachment. For elastic network interfaces, this includes the network interface ID, the MAC address, the subnet ID, and the private IPv4 address.</p>
   */
  details?: Array<_UnmarshalledKeyValuePair>;
}
