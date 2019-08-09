/**
 * <p>Represents the instance profile.</p>
 */
export interface _InstanceProfile {
  /**
   * <p>The Amazon Resource Name (ARN) of the instance profile.</p>
   */
  arn?: string;

  /**
   * <p>When set to <code>true</code>, Device Farm will remove app packages after a test run. The default value is <code>false</code> for private devices.</p>
   */
  packageCleanup?: boolean;

  /**
   * <p>An array of strings specifying the list of app packages that should not be cleaned up from the device after a test run is over.</p> <p>The list of packages is only considered if you set <code>packageCleanup</code> to <code>true</code>.</p>
   */
  excludeAppPackagesFromCleanup?: Array<string> | Iterable<string>;

  /**
   * <p>When set to <code>true</code>, Device Farm will reboot the instance after a test run. The default value is <code>true</code>.</p>
   */
  rebootAfterUse?: boolean;

  /**
   * <p>The name of the instance profile.</p>
   */
  name?: string;

  /**
   * <p>The description of the instance profile.</p>
   */
  description?: string;
}

export interface _UnmarshalledInstanceProfile extends _InstanceProfile {
  /**
   * <p>An array of strings specifying the list of app packages that should not be cleaned up from the device after a test run is over.</p> <p>The list of packages is only considered if you set <code>packageCleanup</code> to <code>true</code>.</p>
   */
  excludeAppPackagesFromCleanup?: Array<string>;
}
