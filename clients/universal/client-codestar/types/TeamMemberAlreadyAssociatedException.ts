import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The team member is already associated with a role in this project.</p>
 */
export interface TeamMemberAlreadyAssociatedException
  extends __ServiceException__<_TeamMemberAlreadyAssociatedExceptionDetails> {
  name: "TeamMemberAlreadyAssociatedException";
}

export interface _TeamMemberAlreadyAssociatedExceptionDetails {}
