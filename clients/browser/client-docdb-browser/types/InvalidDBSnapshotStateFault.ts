import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The state of the DB snapshot doesn't allow deletion.</p>
 */
export interface InvalidDBSnapshotStateFault
  extends __ServiceException__<_InvalidDBSnapshotStateFaultDetails> {
  name: "InvalidDBSnapshotStateFault";
}

export interface _InvalidDBSnapshotStateFaultDetails {}
