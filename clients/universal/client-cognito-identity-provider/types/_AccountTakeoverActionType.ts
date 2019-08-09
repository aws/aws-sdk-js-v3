/**
 * <p>Account takeover action type.</p>
 */
export interface _AccountTakeoverActionType {
  /**
   * <p>Flag specifying whether to send a notification.</p>
   */
  Notify: boolean;

  /**
   * <p>The event action.</p> <ul> <li> <p> <code>BLOCK</code> Choosing this action will block the request.</p> </li> <li> <p> <code>MFA_IF_CONFIGURED</code> Throw MFA challenge if user has configured it, else allow the request.</p> </li> <li> <p> <code>MFA_REQUIRED</code> Throw MFA challenge if user has configured it, else block the request.</p> </li> <li> <p> <code>NO_ACTION</code> Allow the user sign-in.</p> </li> </ul>
   */
  EventAction:
    | "BLOCK"
    | "MFA_IF_CONFIGURED"
    | "MFA_REQUIRED"
    | "NO_ACTION"
    | string;
}

export type _UnmarshalledAccountTakeoverActionType = _AccountTakeoverActionType;
