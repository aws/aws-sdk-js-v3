import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The commit cannot be created because one of the changes specifies copying or moving a .gitkeep file.</p>
 */
export interface RestrictedSourceFileException
  extends __ServiceException__<_RestrictedSourceFileExceptionDetails> {
  name: "RestrictedSourceFileException";
}

export interface _RestrictedSourceFileExceptionDetails {}
