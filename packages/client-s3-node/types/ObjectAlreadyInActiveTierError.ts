import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>This operation is not allowed against this storage tier</p>
 */
export interface ObjectAlreadyInActiveTierError
  extends __ServiceException__<_ObjectAlreadyInActiveTierErrorDetails> {
  name: "ObjectAlreadyInActiveTierError";
}

export interface _ObjectAlreadyInActiveTierErrorDetails {}
