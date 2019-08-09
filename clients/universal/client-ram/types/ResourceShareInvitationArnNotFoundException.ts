import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The Amazon Resource Name (ARN) for an invitation was not found.</p>
 */
export interface ResourceShareInvitationArnNotFoundException
  extends __ServiceException__<
    _ResourceShareInvitationArnNotFoundExceptionDetails
  > {
  name: "ResourceShareInvitationArnNotFoundException";
}

export interface _ResourceShareInvitationArnNotFoundExceptionDetails {
  /**
   * _String shape
   */
  message: string;
}
