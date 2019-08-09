import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The <code>Targets</code> parameter includes too many tags. Remove one or more tags and try the command again.</p>
 */
export interface TooManyTagsError
  extends __ServiceException__<_TooManyTagsErrorDetails> {
  name: "TooManyTagsError";
}

export interface _TooManyTagsErrorDetails {}
