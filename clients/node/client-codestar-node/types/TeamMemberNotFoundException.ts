import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified team member was not found.</p>
 */
export interface TeamMemberNotFoundException
  extends __ServiceException__<_TeamMemberNotFoundExceptionDetails> {
  name: "TeamMemberNotFoundException";
}

export interface _TeamMemberNotFoundExceptionDetails {}
