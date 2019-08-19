import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>A specified entity does not exist</p>
 */
export interface EntityNotFoundException
  extends __ServiceException__<_EntityNotFoundExceptionDetails> {
  name: "EntityNotFoundException";
}

export interface _EntityNotFoundExceptionDetails {
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
}
