// smithy-typescript generated code
import { JobStatus } from "./enums";
import type { StorageLensGroup } from "./models_0";

/**
 * @public
 */
export interface UpdateJobStatusResult {
  /**
   * <p>The ID for the job whose status was updated.</p>
   * @public
   */
  JobId?: string | undefined;

  /**
   * <p>The current status for the specified job.</p>
   * @public
   */
  Status?: JobStatus | undefined;

  /**
   * <p>The reason that the specified job's status was updated.</p>
   * @public
   */
  StatusUpdateReason?: string | undefined;
}

/**
 * @public
 */
export interface UpdateStorageLensGroupRequest {
  /**
   * <p>
   * The name of the Storage Lens group that you want to update.
   * </p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>
   * The Amazon Web Services account ID of the Storage Lens group owner.
   * </p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>
   * The JSON file that contains the Storage Lens group configuration.
   * </p>
   * @public
   */
  StorageLensGroup: StorageLensGroup | undefined;
}
