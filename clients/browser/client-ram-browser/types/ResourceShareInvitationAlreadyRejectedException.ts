import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The invitation was already rejected.</p>
 */
export interface ResourceShareInvitationAlreadyRejectedException
  extends __ServiceException__<
    _ResourceShareInvitationAlreadyRejectedExceptionDetails
  > {
  name: "ResourceShareInvitationAlreadyRejectedException";
}

export interface _ResourceShareInvitationAlreadyRejectedExceptionDetails {
  /**
   * _String shape
   */
  message: string;
}
