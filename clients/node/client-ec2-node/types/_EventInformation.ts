/**
 * <p>Describes an EC2 Fleet or Spot Fleet event.</p>
 */
export interface _EventInformation {
  /**
   * <p>The description of the event.</p>
   */
  EventDescription?: string;

  /**
   * <p>The event.</p> <p>The following are the <code>error</code> events:</p> <ul> <li> <p> <code>iamFleetRoleInvalid</code> - The EC2 Fleet or Spot Fleet did not have the required permissions either to launch or terminate an instance.</p> </li> <li> <p> <code>spotFleetRequestConfigurationInvalid</code> - The configuration is not valid. For more information, see the description of the event.</p> </li> <li> <p> <code>spotInstanceCountLimitExceeded</code> - You've reached the limit on the number of Spot Instances that you can launch.</p> </li> </ul> <p>The following are the <code>fleetRequestChange</code> events:</p> <ul> <li> <p> <code>active</code> - The EC2 Fleet or Spot Fleet request has been validated and Amazon EC2 is attempting to maintain the target number of running Spot Instances.</p> </li> <li> <p> <code>cancelled</code> - The EC2 Fleet or Spot Fleet request is canceled and has no running Spot Instances. The EC2 Fleet or Spot Fleet will be deleted two days after its instances were terminated.</p> </li> <li> <p> <code>cancelled_running</code> - The EC2 Fleet or Spot Fleet request is canceled and does not launch additional Spot Instances. Existing Spot Instances continue to run until they are interrupted or terminated.</p> </li> <li> <p> <code>cancelled_terminating</code> - The EC2 Fleet or Spot Fleet request is canceled and its Spot Instances are terminating.</p> </li> <li> <p> <code>expired</code> - The EC2 Fleet or Spot Fleet request has expired. A subsequent event indicates that the instances were terminated, if the request was created with <code>TerminateInstancesWithExpiration</code> set.</p> </li> <li> <p> <code>modify_in_progress</code> - A request to modify the EC2 Fleet or Spot Fleet request was accepted and is in progress.</p> </li> <li> <p> <code>modify_successful</code> - The EC2 Fleet or Spot Fleet request was modified.</p> </li> <li> <p> <code>price_update</code> - The price for a launch configuration was adjusted because it was too high. This change is permanent.</p> </li> <li> <p> <code>submitted</code> - The EC2 Fleet or Spot Fleet request is being evaluated and Amazon EC2 is preparing to launch the target number of Spot Instances.</p> </li> </ul> <p>The following are the <code>instanceChange</code> events:</p> <ul> <li> <p> <code>launched</code> - A request was fulfilled and a new instance was launched.</p> </li> <li> <p> <code>terminated</code> - An instance was terminated by the user.</p> </li> </ul> <p>The following are the <code>Information</code> events:</p> <ul> <li> <p> <code>launchSpecTemporarilyBlacklisted</code> - The configuration is not valid and several attempts to launch instances have failed. For more information, see the description of the event.</p> </li> <li> <p> <code>launchSpecUnusable</code> - The price in a launch specification is not valid because it is below the Spot price or the Spot price is above the On-Demand price.</p> </li> <li> <p> <code>fleetProgressHalted</code> - The price in every launch specification is not valid. A launch specification might become valid if the Spot price changes.</p> </li> </ul>
   */
  EventSubType?: string;

  /**
   * <p>The ID of the instance. This information is available only for <code>instanceChange</code> events.</p>
   */
  InstanceId?: string;
}

export type _UnmarshalledEventInformation = _EventInformation;
