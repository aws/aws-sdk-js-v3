import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The commit cannot be created because one or more changes in this commit duplicate actions in the same file path. For example, you cannot make the same delete request to the same file in the same file path twice, or make a delete request and a move request to the same file as part of the same commit.</p>
 */
export interface SamePathRequestException
  extends __ServiceException__<_SamePathRequestExceptionDetails> {
  name: "SamePathRequestException";
}

export interface _SamePathRequestExceptionDetails {}
