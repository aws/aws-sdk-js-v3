import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The invitation was already accepted.</p>
 */
export interface ResourceShareInvitationAlreadyAcceptedException
  extends __ServiceException__<
    _ResourceShareInvitationAlreadyAcceptedExceptionDetails
  > {
  name: "ResourceShareInvitationAlreadyAcceptedException";
}

export interface _ResourceShareInvitationAlreadyAcceptedExceptionDetails {
  /**
   * _String shape
   */
  message: string;
}
