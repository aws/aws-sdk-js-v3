import {
  _HandshakeParty,
  _UnmarshalledHandshakeParty
} from "./_HandshakeParty";
import {
  _HandshakeResource,
  _UnmarshalledHandshakeResource
} from "./_HandshakeResource";

/**
 * <p>Contains information that must be exchanged to securely establish a relationship between two accounts (an <i>originator</i> and a <i>recipient</i>). For example, when a master account (the originator) invites another account (the recipient) to join its organization, the two accounts exchange information as a series of handshake requests and responses.</p> <p> <b>Note:</b> Handshakes that are CANCELED, ACCEPTED, or DECLINED show up in lists for only 30 days after entering that state After that they are deleted.</p>
 */
export interface _Handshake {
  /**
   * <p>The unique identifier (ID) of a handshake. The originating account creates the ID when it initiates the handshake.</p> <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for handshake ID string requires "h-" followed by from 8 to 32 lower-case letters or digits.</p>
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of a handshake.</p> <p>For more information about ARNs in Organizations, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_permissions.html#orgs-permissions-arns">ARN Formats Supported by Organizations</a> in the <i>AWS Organizations User Guide</i>.</p>
   */
  Arn?: string;

  /**
   * <p>Information about the two accounts that are participating in the handshake.</p>
   */
  Parties?: Array<_HandshakeParty> | Iterable<_HandshakeParty>;

  /**
   * <p>The current state of the handshake. Use the state to trace the flow of the handshake through the process from its creation to its acceptance. The meaning of each of the valid values is as follows:</p> <ul> <li> <p> <b>REQUESTED</b>: This handshake was sent to multiple recipients (applicable to only some handshake types) and not all recipients have responded yet. The request stays in this state until all recipients respond.</p> </li> <li> <p> <b>OPEN</b>: This handshake was sent to multiple recipients (applicable to only some policy types) and all recipients have responded, allowing the originator to complete the handshake action.</p> </li> <li> <p> <b>CANCELED</b>: This handshake is no longer active because it was canceled by the originating account.</p> </li> <li> <p> <b>ACCEPTED</b>: This handshake is complete because it has been accepted by the recipient.</p> </li> <li> <p> <b>DECLINED</b>: This handshake is no longer active because it was declined by the recipient account.</p> </li> <li> <p> <b>EXPIRED</b>: This handshake is no longer active because the originator did not receive a response of any kind from the recipient before the expiration time (15 days).</p> </li> </ul>
   */
  State?:
    | "REQUESTED"
    | "OPEN"
    | "CANCELED"
    | "ACCEPTED"
    | "DECLINED"
    | "EXPIRED"
    | string;

  /**
   * <p>The date and time that the handshake request was made.</p>
   */
  RequestedTimestamp?: Date | string | number;

  /**
   * <p>The date and time that the handshake expires. If the recipient of the handshake request fails to respond before the specified date and time, the handshake becomes inactive and is no longer valid.</p>
   */
  ExpirationTimestamp?: Date | string | number;

  /**
   * <p>The type of handshake, indicating what action occurs when the recipient accepts the handshake. The following handshake types are supported:</p> <ul> <li> <p> <b>INVITE</b>: This type of handshake represents a request to join an organization. It is always sent from the master account to only non-member accounts.</p> </li> <li> <p> <b>ENABLE_ALL_FEATURES</b>: This type of handshake represents a request to enable all features in an organization. It is always sent from the master account to only <i>invited</i> member accounts. Created accounts do not receive this because those accounts were created by the organization's master account and approval is inferred.</p> </li> <li> <p> <b>APPROVE_ALL_FEATURES</b>: This type of handshake is sent from the Organizations service when all member accounts have approved the <code>ENABLE_ALL_FEATURES</code> invitation. It is sent only to the master account and signals the master that it can finalize the process to enable all features.</p> </li> </ul>
   */
  Action?:
    | "INVITE"
    | "ENABLE_ALL_FEATURES"
    | "APPROVE_ALL_FEATURES"
    | "ADD_ORGANIZATIONS_SERVICE_LINKED_ROLE"
    | string;

  /**
   * <p>Additional information that is needed to process the handshake.</p>
   */
  Resources?: Array<_HandshakeResource> | Iterable<_HandshakeResource>;
}

export interface _UnmarshalledHandshake extends _Handshake {
  /**
   * <p>Information about the two accounts that are participating in the handshake.</p>
   */
  Parties?: Array<_UnmarshalledHandshakeParty>;

  /**
   * <p>The date and time that the handshake request was made.</p>
   */
  RequestedTimestamp?: Date;

  /**
   * <p>The date and time that the handshake expires. If the recipient of the handshake request fails to respond before the specified date and time, the handshake becomes inactive and is no longer valid.</p>
   */
  ExpirationTimestamp?: Date;

  /**
   * <p>Additional information that is needed to process the handshake.</p>
   */
  Resources?: Array<_UnmarshalledHandshakeResource>;
}
