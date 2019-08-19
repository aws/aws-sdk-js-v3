/**
 * <p>A specification for an environment configuration</p>
 */
export interface _SourceConfiguration {
  /**
   * <p>The name of the application associated with the configuration.</p>
   */
  ApplicationName?: string;

  /**
   * <p>The name of the configuration template.</p>
   */
  TemplateName?: string;
}

export type _UnmarshalledSourceConfiguration = _SourceConfiguration;
