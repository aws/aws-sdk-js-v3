import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified resource exists, but has been changed.</p>
 */
export interface CreatedButModifiedException
  extends __ServiceException__<_CreatedButModifiedExceptionDetails> {
  name: "CreatedButModifiedException";
}

export interface _CreatedButModifiedExceptionDetails {}
