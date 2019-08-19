/**
 * <p>Information about the progress of a deployment job.</p>
 */
export interface _ProgressDetail {
  /**
   * <p>The current progress status.</p> <dl> <dt>Validating</dt> <dd> <p>Validating the deployment.</p> </dd> <dt>DownloadingExtracting</dt> <dd> <p>Downloading and extracting the bundle on the robot.</p> </dd> <dt>ExecutingPreLaunch</dt> <dd> <p>Executing pre-launch script(s) if provided.</p> </dd> <dt>Launching</dt> <dd> <p>Launching the robot application.</p> </dd> <dt>ExecutingPostLaunch</dt> <dd> <p>Executing post-launch script(s) if provided.</p> </dd> <dt>Finished</dt> <dd> <p>Deployment is complete.</p> </dd> </dl>
   */
  currentProgress?:
    | "Validating"
    | "DownloadingExtracting"
    | "ExecutingPreLaunch"
    | "Launching"
    | "ExecutingPostLaunch"
    | "Finished"
    | string;

  /**
   * <p>Precentage of the step that is done. This currently only applies to the <code>Downloading/Extracting</code> step of the deployment. It is empty for other steps.</p>
   */
  percentDone?: number;

  /**
   * <p>Estimated amount of time in seconds remaining in the step. This currently only applies to the <code>Downloading/Extracting</code> step of the deployment. It is empty for other steps.</p>
   */
  estimatedTimeRemainingSeconds?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the deployment job.</p>
   */
  targetResource?: string;
}

export type _UnmarshalledProgressDetail = _ProgressDetail;
