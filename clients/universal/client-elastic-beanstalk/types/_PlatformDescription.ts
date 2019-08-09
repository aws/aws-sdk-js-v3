import {
  _PlatformProgrammingLanguage,
  _UnmarshalledPlatformProgrammingLanguage
} from "./_PlatformProgrammingLanguage";
import {
  _PlatformFramework,
  _UnmarshalledPlatformFramework
} from "./_PlatformFramework";
import { _CustomAmi, _UnmarshalledCustomAmi } from "./_CustomAmi";

/**
 * <p>Detailed information about a platform.</p>
 */
export interface _PlatformDescription {
  /**
   * <p>The ARN of the platform.</p>
   */
  PlatformArn?: string;

  /**
   * <p>The AWS account ID of the person who created the platform.</p>
   */
  PlatformOwner?: string;

  /**
   * <p>The name of the platform.</p>
   */
  PlatformName?: string;

  /**
   * <p>The version of the platform.</p>
   */
  PlatformVersion?: string;

  /**
   * <p>The name of the solution stack used by the platform.</p>
   */
  SolutionStackName?: string;

  /**
   * <p>The status of the platform.</p>
   */
  PlatformStatus?:
    | "Creating"
    | "Failed"
    | "Ready"
    | "Deleting"
    | "Deleted"
    | string;

  /**
   * <p>The date when the platform was created.</p>
   */
  DateCreated?: Date | string | number;

  /**
   * <p>The date when the platform was last updated.</p>
   */
  DateUpdated?: Date | string | number;

  /**
   * <p>The category of the platform.</p>
   */
  PlatformCategory?: string;

  /**
   * <p>The description of the platform.</p>
   */
  Description?: string;

  /**
   * <p>Information about the maintainer of the platform.</p>
   */
  Maintainer?: string;

  /**
   * <p>The operating system used by the platform.</p>
   */
  OperatingSystemName?: string;

  /**
   * <p>The version of the operating system used by the platform.</p>
   */
  OperatingSystemVersion?: string;

  /**
   * <p>The programming languages supported by the platform.</p>
   */
  ProgrammingLanguages?:
    | Array<_PlatformProgrammingLanguage>
    | Iterable<_PlatformProgrammingLanguage>;

  /**
   * <p>The frameworks supported by the platform.</p>
   */
  Frameworks?: Array<_PlatformFramework> | Iterable<_PlatformFramework>;

  /**
   * <p>The custom AMIs supported by the platform.</p>
   */
  CustomAmiList?: Array<_CustomAmi> | Iterable<_CustomAmi>;

  /**
   * <p>The tiers supported by the platform.</p>
   */
  SupportedTierList?: Array<string> | Iterable<string>;

  /**
   * <p>The additions supported by the platform.</p>
   */
  SupportedAddonList?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledPlatformDescription extends _PlatformDescription {
  /**
   * <p>The date when the platform was created.</p>
   */
  DateCreated?: Date;

  /**
   * <p>The date when the platform was last updated.</p>
   */
  DateUpdated?: Date;

  /**
   * <p>The programming languages supported by the platform.</p>
   */
  ProgrammingLanguages?: Array<_UnmarshalledPlatformProgrammingLanguage>;

  /**
   * <p>The frameworks supported by the platform.</p>
   */
  Frameworks?: Array<_UnmarshalledPlatformFramework>;

  /**
   * <p>The custom AMIs supported by the platform.</p>
   */
  CustomAmiList?: Array<_UnmarshalledCustomAmi>;

  /**
   * <p>The tiers supported by the platform.</p>
   */
  SupportedTierList?: Array<string>;

  /**
   * <p>The additions supported by the platform.</p>
   */
  SupportedAddonList?: Array<string>;
}
