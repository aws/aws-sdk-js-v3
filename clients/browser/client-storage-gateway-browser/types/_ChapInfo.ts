/**
 * <p>Describes Challenge-Handshake Authentication Protocol (CHAP) information that supports authentication between your gateway and iSCSI initiators.</p>
 */
export interface _ChapInfo {
  /**
   * <p>The Amazon Resource Name (ARN) of the volume.</p> <p> Valid Values: 50 to 500 lowercase letters, numbers, periods (.), and hyphens (-).</p>
   */
  TargetARN?: string;

  /**
   * <p>The secret key that the initiator (for example, the Windows client) must provide to participate in mutual CHAP with the target.</p>
   */
  SecretToAuthenticateInitiator?: string;

  /**
   * <p>The iSCSI initiator that connects to the target.</p>
   */
  InitiatorName?: string;

  /**
   * <p>The secret key that the target must provide to participate in mutual CHAP with the initiator (e.g. Windows client).</p>
   */
  SecretToAuthenticateTarget?: string;
}

export type _UnmarshalledChapInfo = _ChapInfo;
