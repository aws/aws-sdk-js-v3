import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The source object of the COPY operation is not in the active tier and is only stored in Amazon Glacier.</p>
 */
export interface ObjectNotInActiveTierError
  extends __ServiceException__<_ObjectNotInActiveTierErrorDetails> {
  name: "ObjectNotInActiveTierError";
}

export interface _ObjectNotInActiveTierErrorDetails {}
