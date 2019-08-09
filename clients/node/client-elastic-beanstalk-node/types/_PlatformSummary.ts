/**
 * <p>Detailed information about a platform.</p>
 */
export interface _PlatformSummary {
  /**
   * <p>The ARN of the platform.</p>
   */
  PlatformArn?: string;

  /**
   * <p>The AWS account ID of the person who created the platform.</p>
   */
  PlatformOwner?: string;

  /**
   * <p>The status of the platform. You can create an environment from the platform once it is ready.</p>
   */
  PlatformStatus?:
    | "Creating"
    | "Failed"
    | "Ready"
    | "Deleting"
    | "Deleted"
    | string;

  /**
   * <p>The category of platform.</p>
   */
  PlatformCategory?: string;

  /**
   * <p>The operating system used by the platform.</p>
   */
  OperatingSystemName?: string;

  /**
   * <p>The version of the operating system used by the platform.</p>
   */
  OperatingSystemVersion?: string;

  /**
   * <p>The tiers in which the platform runs.</p>
   */
  SupportedTierList?: Array<string> | Iterable<string>;

  /**
   * <p>The additions associated with the platform.</p>
   */
  SupportedAddonList?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledPlatformSummary extends _PlatformSummary {
  /**
   * <p>The tiers in which the platform runs.</p>
   */
  SupportedTierList?: Array<string>;

  /**
   * <p>The additions associated with the platform.</p>
   */
  SupportedAddonList?: Array<string>;
}
