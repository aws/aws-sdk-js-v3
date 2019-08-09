import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified branch name is not valid because it is a tag name. Type the name of a current branch in the repository. For a list of valid branch names, use <a>ListBranches</a>.</p>
 */
export interface BranchNameIsTagNameException
  extends __ServiceException__<_BranchNameIsTagNameExceptionDetails> {
  name: "BranchNameIsTagNameException";
}

export interface _BranchNameIsTagNameExceptionDetails {}
