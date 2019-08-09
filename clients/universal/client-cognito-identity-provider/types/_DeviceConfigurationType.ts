/**
 * <p>The configuration for the user pool's device tracking.</p>
 */
export interface _DeviceConfigurationType {
  /**
   * <p>Indicates whether a challenge is required on a new device. Only applicable to a new device.</p>
   */
  ChallengeRequiredOnNewDevice?: boolean;

  /**
   * <p>If true, a device is only remembered on user prompt.</p>
   */
  DeviceOnlyRememberedOnUserPrompt?: boolean;
}

export type _UnmarshalledDeviceConfigurationType = _DeviceConfigurationType;
