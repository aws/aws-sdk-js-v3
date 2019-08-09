/**
 * <p>Log entry describing an event that involves Amazon GameLift resources (such as a fleet). In addition to tracking activity, event codes and messages can provide additional information for troubleshooting and debugging problems.</p>
 */
export interface _Event {
  /**
   * <p>Unique identifier for a fleet event.</p>
   */
  EventId?: string;

  /**
   * <p>Unique identifier for an event resource, such as a fleet ID.</p>
   */
  ResourceId?: string;

  /**
   * <p>Type of event being logged. The following events are currently in use:</p> <p> <b>Fleet creation events:</b> </p> <ul> <li> <p>FLEET_CREATED -- A fleet record was successfully created with a status of <code>NEW</code>. Event messaging includes the fleet ID.</p> </li> <li> <p>FLEET_STATE_DOWNLOADING -- Fleet status changed from <code>NEW</code> to <code>DOWNLOADING</code>. The compressed build has started downloading to a fleet instance for installation.</p> </li> <li> <p> FLEET_BINARY_DOWNLOAD_FAILED -- The build failed to download to the fleet instance.</p> </li> <li> <p>FLEET_CREATION_EXTRACTING_BUILD – The game server build was successfully downloaded to an instance, and the build files are now being extracted from the uploaded build and saved to an instance. Failure at this stage prevents a fleet from moving to <code>ACTIVE</code> status. Logs for this stage display a list of the files that are extracted and saved on the instance. Access the logs by using the URL in <i>PreSignedLogUrl</i>.</p> </li> <li> <p>FLEET_CREATION_RUNNING_INSTALLER – The game server build files were successfully extracted, and the Amazon GameLift is now running the build's install script (if one is included). Failure in this stage prevents a fleet from moving to <code>ACTIVE</code> status. Logs for this stage list the installation steps and whether or not the install completed successfully. Access the logs by using the URL in <i>PreSignedLogUrl</i>. </p> </li> <li> <p>FLEET_CREATION_VALIDATING_RUNTIME_CONFIG -- The build process was successful, and the Amazon GameLift is now verifying that the game server launch paths, which are specified in the fleet's run-time configuration, exist. If any listed launch path exists, Amazon GameLift tries to launch a game server process and waits for the process to report ready. Failures in this stage prevent a fleet from moving to <code>ACTIVE</code> status. Logs for this stage list the launch paths in the run-time configuration and indicate whether each is found. Access the logs by using the URL in <i>PreSignedLogUrl</i>. </p> </li> <li> <p>FLEET_STATE_VALIDATING -- Fleet status changed from <code>DOWNLOADING</code> to <code>VALIDATING</code>.</p> </li> <li> <p> FLEET_VALIDATION_LAUNCH_PATH_NOT_FOUND -- Validation of the run-time configuration failed because the executable specified in a launch path does not exist on the instance.</p> </li> <li> <p>FLEET_STATE_BUILDING -- Fleet status changed from <code>VALIDATING</code> to <code>BUILDING</code>.</p> </li> <li> <p>FLEET_VALIDATION_EXECUTABLE_RUNTIME_FAILURE -- Validation of the run-time configuration failed because the executable specified in a launch path failed to run on the fleet instance.</p> </li> <li> <p>FLEET_STATE_ACTIVATING -- Fleet status changed from <code>BUILDING</code> to <code>ACTIVATING</code>. </p> </li> <li> <p> FLEET_ACTIVATION_FAILED - The fleet failed to successfully complete one of the steps in the fleet activation process. This event code indicates that the game build was successfully downloaded to a fleet instance, built, and validated, but was not able to start a server process. A possible reason for failure is that the game server is not reporting "process ready" to the Amazon GameLift service.</p> </li> <li> <p>FLEET_STATE_ACTIVE -- The fleet's status changed from <code>ACTIVATING</code> to <code>ACTIVE</code>. The fleet is now ready to host game sessions.</p> </li> </ul> <p> <b>VPC peering events:</b> </p> <ul> <li> <p>FLEET_VPC_PEERING_SUCCEEDED -- A VPC peering connection has been established between the VPC for an Amazon GameLift fleet and a VPC in your AWS account.</p> </li> <li> <p>FLEET_VPC_PEERING_FAILED -- A requested VPC peering connection has failed. Event details and status information (see <a>DescribeVpcPeeringConnections</a>) provide additional detail. A common reason for peering failure is that the two VPCs have overlapping CIDR blocks of IPv4 addresses. To resolve this, change the CIDR block for the VPC in your AWS account. For more information on VPC peering failures, see <a href="https://docs.aws.amazon.com/AmazonVPC/latest/PeeringGuide/invalid-peering-configurations.html">https://docs.aws.amazon.com/AmazonVPC/latest/PeeringGuide/invalid-peering-configurations.html</a> </p> </li> <li> <p>FLEET_VPC_PEERING_DELETED -- A VPC peering connection has been successfully deleted.</p> </li> </ul> <p> <b>Spot instance events:</b> </p> <ul> <li> <p> INSTANCE_INTERRUPTED -- A spot instance was interrupted by EC2 with a two-minute notification.</p> </li> </ul> <p> <b>Other fleet events:</b> </p> <ul> <li> <p>FLEET_SCALING_EVENT -- A change was made to the fleet's capacity settings (desired instances, minimum/maximum scaling limits). Event messaging includes the new capacity settings.</p> </li> <li> <p>FLEET_NEW_GAME_SESSION_PROTECTION_POLICY_UPDATED -- A change was made to the fleet's game session protection policy setting. Event messaging includes both the old and new policy setting. </p> </li> <li> <p>FLEET_DELETED -- A request to delete a fleet was initiated.</p> </li> <li> <p> GENERIC_EVENT -- An unspecified event has occurred.</p> </li> </ul>
   */
  EventCode?:
    | "GENERIC_EVENT"
    | "FLEET_CREATED"
    | "FLEET_DELETED"
    | "FLEET_SCALING_EVENT"
    | "FLEET_STATE_DOWNLOADING"
    | "FLEET_STATE_VALIDATING"
    | "FLEET_STATE_BUILDING"
    | "FLEET_STATE_ACTIVATING"
    | "FLEET_STATE_ACTIVE"
    | "FLEET_STATE_ERROR"
    | "FLEET_INITIALIZATION_FAILED"
    | "FLEET_BINARY_DOWNLOAD_FAILED"
    | "FLEET_VALIDATION_LAUNCH_PATH_NOT_FOUND"
    | "FLEET_VALIDATION_EXECUTABLE_RUNTIME_FAILURE"
    | "FLEET_VALIDATION_TIMED_OUT"
    | "FLEET_ACTIVATION_FAILED"
    | "FLEET_ACTIVATION_FAILED_NO_INSTANCES"
    | "FLEET_NEW_GAME_SESSION_PROTECTION_POLICY_UPDATED"
    | "SERVER_PROCESS_INVALID_PATH"
    | "SERVER_PROCESS_SDK_INITIALIZATION_TIMEOUT"
    | "SERVER_PROCESS_PROCESS_READY_TIMEOUT"
    | "SERVER_PROCESS_CRASHED"
    | "SERVER_PROCESS_TERMINATED_UNHEALTHY"
    | "SERVER_PROCESS_FORCE_TERMINATED"
    | "SERVER_PROCESS_PROCESS_EXIT_TIMEOUT"
    | "GAME_SESSION_ACTIVATION_TIMEOUT"
    | "FLEET_CREATION_EXTRACTING_BUILD"
    | "FLEET_CREATION_RUNNING_INSTALLER"
    | "FLEET_CREATION_VALIDATING_RUNTIME_CONFIG"
    | "FLEET_VPC_PEERING_SUCCEEDED"
    | "FLEET_VPC_PEERING_FAILED"
    | "FLEET_VPC_PEERING_DELETED"
    | "INSTANCE_INTERRUPTED"
    | string;

  /**
   * <p>Additional information related to the event.</p>
   */
  Message?: string;

  /**
   * <p>Time stamp indicating when this event occurred. Format is a number expressed in Unix time as milliseconds (for example "1469498468.057").</p>
   */
  EventTime?: Date | string | number;

  /**
   * <p>Location of stored logs with additional detail that is related to the event. This is useful for debugging issues. The URL is valid for 15 minutes. You can also access fleet creation logs through the Amazon GameLift console.</p>
   */
  PreSignedLogUrl?: string;
}

export interface _UnmarshalledEvent extends _Event {
  /**
   * <p>Time stamp indicating when this event occurred. Format is a number expressed in Unix time as milliseconds (for example "1469498468.057").</p>
   */
  EventTime?: Date;
}
