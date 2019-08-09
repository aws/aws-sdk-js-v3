/**
 * <p>Represents information about incompatibility.</p>
 */
export interface _IncompatibilityMessage {
  /**
   * <p>A message about the incompatibility.</p>
   */
  message?: string;

  /**
   * <p>The type of incompatibility.</p> <p>Allowed values include:</p> <ul> <li> <p>ARN: The ARN.</p> </li> <li> <p>FORM_FACTOR: The form factor (for example, phone or tablet).</p> </li> <li> <p>MANUFACTURER: The manufacturer.</p> </li> <li> <p>PLATFORM: The platform (for example, Android or iOS).</p> </li> <li> <p>REMOTE_ACCESS_ENABLED: Whether the device is enabled for remote access.</p> </li> <li> <p>APPIUM_VERSION: The Appium version for the test.</p> </li> </ul>
   */
  type?:
    | "ARN"
    | "PLATFORM"
    | "FORM_FACTOR"
    | "MANUFACTURER"
    | "REMOTE_ACCESS_ENABLED"
    | "REMOTE_DEBUG_ENABLED"
    | "APPIUM_VERSION"
    | "INSTANCE_ARN"
    | "INSTANCE_LABELS"
    | "FLEET_TYPE"
    | "OS_VERSION"
    | "MODEL"
    | "AVAILABILITY"
    | string;
}

export type _UnmarshalledIncompatibilityMessage = _IncompatibilityMessage;
