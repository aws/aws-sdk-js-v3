import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The accelerator that you specified has a listener associated with it. You must remove all dependent resources from an accelerator before you can delete it.</p>
 */
export interface AssociatedListenerFoundException
  extends __ServiceException__<_AssociatedListenerFoundExceptionDetails> {
  name: "AssociatedListenerFoundException";
}

export interface _AssociatedListenerFoundExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
