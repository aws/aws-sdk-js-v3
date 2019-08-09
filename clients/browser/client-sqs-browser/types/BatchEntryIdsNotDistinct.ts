import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Two or more batch entries in the request have the same <code>Id</code>.</p>
 */
export interface BatchEntryIdsNotDistinct
  extends __ServiceException__<_BatchEntryIdsNotDistinctDetails> {
  name: "BatchEntryIdsNotDistinct";
}

export interface _BatchEntryIdsNotDistinctDetails {}
