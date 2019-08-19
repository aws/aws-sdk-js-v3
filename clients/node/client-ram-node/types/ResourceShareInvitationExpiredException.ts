import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The invitation is expired.</p>
 */
export interface ResourceShareInvitationExpiredException
  extends __ServiceException__<
    _ResourceShareInvitationExpiredExceptionDetails
  > {
  name: "ResourceShareInvitationExpiredException";
}

export interface _ResourceShareInvitationExpiredExceptionDetails {
  /**
   * _String shape
   */
  message: string;
}
