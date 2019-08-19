import {
  _OperatingSystemConfigurationManager,
  _UnmarshalledOperatingSystemConfigurationManager
} from "./_OperatingSystemConfigurationManager";

/**
 * <p>Describes supported operating systems in AWS OpsWorks Stacks.</p>
 */
export interface _OperatingSystem {
  /**
   * <p>The name of the operating system, such as <code>Amazon Linux 2018.03</code>.</p>
   */
  Name?: string;

  /**
   * <p>The ID of a supported operating system, such as <code>Amazon Linux 2018.03</code>.</p>
   */
  Id?: string;

  /**
   * <p>The type of a supported operating system, either <code>Linux</code> or <code>Windows</code>.</p>
   */
  Type?: string;

  /**
   * <p>Supported configuration manager name and versions for an AWS OpsWorks Stacks operating system.</p>
   */
  ConfigurationManagers?:
    | Array<_OperatingSystemConfigurationManager>
    | Iterable<_OperatingSystemConfigurationManager>;

  /**
   * <p>A short name for the operating system manufacturer.</p>
   */
  ReportedName?: string;

  /**
   * <p>The version of the operating system, including the release and edition, if applicable.</p>
   */
  ReportedVersion?: string;

  /**
   * <p>Indicates that an operating system is not supported for new instances.</p>
   */
  Supported?: boolean;
}

export interface _UnmarshalledOperatingSystem extends _OperatingSystem {
  /**
   * <p>Supported configuration manager name and versions for an AWS OpsWorks Stacks operating system.</p>
   */
  ConfigurationManagers?: Array<
    _UnmarshalledOperatingSystemConfigurationManager
  >;
}
