/**
 * <note> <p>Amazon EMR releases 4.x or later.</p> </note> <p>An optional configuration specification to be used when provisioning cluster instances, which can include configurations for applications and software bundled with Amazon EMR. A configuration consists of a classification, properties, and optional nested configurations. A classification refers to an application-specific configuration file. Properties are the settings you want to change in that file. For more information, see <a href="https://docs.aws.amazon.com/emr/latest/ReleaseGuide/emr-configure-apps.html">Configuring Applications</a>.</p>
 */
export interface _Configuration {
  /**
   * <p>The classification within a configuration.</p>
   */
  Classification?: string;

  /**
   * <p>A list of additional configurations to apply within a configuration object.</p>
   */
  Configurations?: Array<_Configuration> | Iterable<_Configuration>;

  /**
   * <p>A set of properties specified within a configuration classification.</p>
   */
  Properties?: { [key: string]: string } | Iterable<[string, string]>;
}

export interface _UnmarshalledConfiguration extends _Configuration {
  /**
   * <p>A list of additional configurations to apply within a configuration object.</p>
   */
  Configurations?: Array<_UnmarshalledConfiguration>;

  /**
   * <p>A set of properties specified within a configuration classification.</p>
   */
  Properties?: { [key: string]: string };
}
