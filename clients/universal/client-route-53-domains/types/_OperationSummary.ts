/**
 * <p>OperationSummary includes the following elements.</p>
 */
export interface _OperationSummary {
  /**
   * <p>Identifier returned to track the requested action.</p>
   */
  OperationId: string;

  /**
   * <p>The current status of the requested operation in the system.</p>
   */
  Status:
    | "SUBMITTED"
    | "IN_PROGRESS"
    | "ERROR"
    | "SUCCESSFUL"
    | "FAILED"
    | string;

  /**
   * <p>Type of the action requested.</p>
   */
  Type:
    | "REGISTER_DOMAIN"
    | "DELETE_DOMAIN"
    | "TRANSFER_IN_DOMAIN"
    | "UPDATE_DOMAIN_CONTACT"
    | "UPDATE_NAMESERVER"
    | "CHANGE_PRIVACY_PROTECTION"
    | "DOMAIN_LOCK"
    | "ENABLE_AUTORENEW"
    | "DISABLE_AUTORENEW"
    | "ADD_DNSSEC"
    | "REMOVE_DNSSEC"
    | "EXPIRE_DOMAIN"
    | "TRANSFER_OUT_DOMAIN"
    | "CHANGE_DOMAIN_OWNER"
    | "RENEW_DOMAIN"
    | "PUSH_DOMAIN"
    | string;

  /**
   * <p>The date when the request was submitted.</p>
   */
  SubmittedDate: Date | string | number;
}

export interface _UnmarshalledOperationSummary extends _OperationSummary {
  /**
   * <p>The date when the request was submitted.</p>
   */
  SubmittedDate: Date;
}
