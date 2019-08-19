/**
 * <p>A block that contains information about the configuration manager (Chef) and the versions of the configuration manager that are supported for an operating system.</p>
 */
export interface _OperatingSystemConfigurationManager {
  /**
   * <p>The name of the configuration manager, which is Chef.</p>
   */
  Name?: string;

  /**
   * <p>The versions of the configuration manager that are supported by an operating system.</p>
   */
  Version?: string;
}

export type _UnmarshalledOperatingSystemConfigurationManager = _OperatingSystemConfigurationManager;
