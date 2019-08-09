import { _Location, _UnmarshalledLocation } from "./_Location";
import {
  _CustomerArtifactPaths,
  _UnmarshalledCustomerArtifactPaths
} from "./_CustomerArtifactPaths";
import { _Radios, _UnmarshalledRadios } from "./_Radios";

/**
 * <p>Represents the settings for a run. Includes things like location, radio states, auxiliary apps, and network profiles.</p>
 */
export interface _ScheduleRunConfiguration {
  /**
   * <p>The ARN of the extra data for the run. The extra data is a .zip file that AWS Device Farm will extract to external data for Android or the app's sandbox for iOS.</p>
   */
  extraDataPackageArn?: string;

  /**
   * <p>Reserved for internal use.</p>
   */
  networkProfileArn?: string;

  /**
   * <p>Information about the locale that is used for the run.</p>
   */
  locale?: string;

  /**
   * <p>Information about the location that is used for the run.</p>
   */
  location?: _Location;

  /**
   * <p>An array of Amazon Resource Names (ARNs) for your VPC endpoint configurations.</p>
   */
  vpceConfigurationArns?: Array<string> | Iterable<string>;

  /**
   * <p>Input <code>CustomerArtifactPaths</code> object for the scheduled run configuration.</p>
   */
  customerArtifactPaths?: _CustomerArtifactPaths;

  /**
   * <p>Information about the radio states for the run.</p>
   */
  radios?: _Radios;

  /**
   * <p>A list of auxiliary apps for the run.</p>
   */
  auxiliaryApps?: Array<string> | Iterable<string>;

  /**
   * <p>Specifies the billing method for a test run: <code>metered</code> or <code>unmetered</code>. If the parameter is not specified, the default value is <code>metered</code>.</p>
   */
  billingMethod?: "METERED" | "UNMETERED" | string;
}

export interface _UnmarshalledScheduleRunConfiguration
  extends _ScheduleRunConfiguration {
  /**
   * <p>Information about the location that is used for the run.</p>
   */
  location?: _UnmarshalledLocation;

  /**
   * <p>An array of Amazon Resource Names (ARNs) for your VPC endpoint configurations.</p>
   */
  vpceConfigurationArns?: Array<string>;

  /**
   * <p>Input <code>CustomerArtifactPaths</code> object for the scheduled run configuration.</p>
   */
  customerArtifactPaths?: _UnmarshalledCustomerArtifactPaths;

  /**
   * <p>Information about the radio states for the run.</p>
   */
  radios?: _UnmarshalledRadios;

  /**
   * <p>A list of auxiliary apps for the run.</p>
   */
  auxiliaryApps?: Array<string>;
}
