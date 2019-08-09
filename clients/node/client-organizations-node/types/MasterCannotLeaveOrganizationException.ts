import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You can't remove a master account from an organization. If you want the master account to become a member account in another organization, you must first delete the current organization of the master account.</p>
 */
export interface MasterCannotLeaveOrganizationException
  extends __ServiceException__<_MasterCannotLeaveOrganizationExceptionDetails> {
  name: "MasterCannotLeaveOrganizationException";
}

export interface _MasterCannotLeaveOrganizationExceptionDetails {
  /**
   * _ExceptionMessage shape
   */
  Message?: string;
}
