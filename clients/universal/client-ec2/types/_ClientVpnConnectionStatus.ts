/**
 * <p>Describes the status of a client connection.</p>
 */
export interface _ClientVpnConnectionStatus {
  /**
   * <p>The state of the client connection.</p>
   */
  Code?:
    | "active"
    | "failed-to-terminate"
    | "terminating"
    | "terminated"
    | string;

  /**
   * <p>A message about the status of the client connection, if applicable.</p>
   */
  Message?: string;
}

export type _UnmarshalledClientVpnConnectionStatus = _ClientVpnConnectionStatus;
