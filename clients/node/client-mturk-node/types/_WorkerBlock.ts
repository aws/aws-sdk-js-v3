/**
 * <p> The WorkerBlock data structure represents a Worker who has been blocked. It has two elements: the WorkerId and the Reason for the block. </p>
 */
export interface _WorkerBlock {
  /**
   * <p> The ID of the Worker who accepted the HIT.</p>
   */
  WorkerId?: string;

  /**
   * <p> A message explaining the reason the Worker was blocked. </p>
   */
  Reason?: string;
}

export type _UnmarshalledWorkerBlock = _WorkerBlock;
