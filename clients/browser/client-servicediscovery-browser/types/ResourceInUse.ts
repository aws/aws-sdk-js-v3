import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified resource can't be deleted because it contains other resources. For example, you can't delete a service that contains any instances.</p>
 */
export interface ResourceInUse
  extends __ServiceException__<_ResourceInUseDetails> {
  name: "ResourceInUse";
}

export interface _ResourceInUseDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
