import { _PhaseContext, _UnmarshalledPhaseContext } from "./_PhaseContext";

/**
 * <p>Information about a stage for a build.</p>
 */
export interface _BuildPhase {
  /**
   * <p>The name of the build phase. Valid values include:</p> <ul> <li> <p> <code>BUILD</code>: Core build activities typically occur in this build phase.</p> </li> <li> <p> <code>COMPLETED</code>: The build has been completed.</p> </li> <li> <p> <code>DOWNLOAD_SOURCE</code>: Source code is being downloaded in this build phase.</p> </li> <li> <p> <code>FINALIZING</code>: The build process is completing in this build phase.</p> </li> <li> <p> <code>INSTALL</code>: Installation activities typically occur in this build phase.</p> </li> <li> <p> <code>POST_BUILD</code>: Post-build activities typically occur in this build phase.</p> </li> <li> <p> <code>PRE_BUILD</code>: Pre-build activities typically occur in this build phase.</p> </li> <li> <p> <code>PROVISIONING</code>: The build environment is being set up.</p> </li> <li> <p> <code>QUEUED</code>: The build has been submitted and is queued behind other submitted builds.</p> </li> <li> <p> <code>SUBMITTED</code>: The build has been submitted.</p> </li> <li> <p> <code>UPLOAD_ARTIFACTS</code>: Build output artifacts are being uploaded to the output location.</p> </li> </ul>
   */
  phaseType?:
    | "SUBMITTED"
    | "QUEUED"
    | "PROVISIONING"
    | "DOWNLOAD_SOURCE"
    | "INSTALL"
    | "PRE_BUILD"
    | "BUILD"
    | "POST_BUILD"
    | "UPLOAD_ARTIFACTS"
    | "FINALIZING"
    | "COMPLETED"
    | string;

  /**
   * <p>The current status of the build phase. Valid values include:</p> <ul> <li> <p> <code>FAILED</code>: The build phase failed.</p> </li> <li> <p> <code>FAULT</code>: The build phase faulted.</p> </li> <li> <p> <code>IN_PROGRESS</code>: The build phase is still in progress.</p> </li> <li> <p> <code>QUEUED</code>: The build has been submitted and is queued behind other submitted builds.</p> </li> <li> <p> <code>STOPPED</code>: The build phase stopped.</p> </li> <li> <p> <code>SUCCEEDED</code>: The build phase succeeded.</p> </li> <li> <p> <code>TIMED_OUT</code>: The build phase timed out.</p> </li> </ul>
   */
  phaseStatus?:
    | "SUCCEEDED"
    | "FAILED"
    | "FAULT"
    | "TIMED_OUT"
    | "IN_PROGRESS"
    | "STOPPED"
    | string;

  /**
   * <p>When the build phase started, expressed in Unix time format.</p>
   */
  startTime?: Date | string | number;

  /**
   * <p>When the build phase ended, expressed in Unix time format.</p>
   */
  endTime?: Date | string | number;

  /**
   * <p>How long, in seconds, between the starting and ending times of the build's phase.</p>
   */
  durationInSeconds?: number;

  /**
   * <p>Additional information about a build phase, especially to help troubleshoot a failed build.</p>
   */
  contexts?: Array<_PhaseContext> | Iterable<_PhaseContext>;
}

export interface _UnmarshalledBuildPhase extends _BuildPhase {
  /**
   * <p>When the build phase started, expressed in Unix time format.</p>
   */
  startTime?: Date;

  /**
   * <p>When the build phase ended, expressed in Unix time format.</p>
   */
  endTime?: Date;

  /**
   * <p>Additional information about a build phase, especially to help troubleshoot a failed build.</p>
   */
  contexts?: Array<_UnmarshalledPhaseContext>;
}
