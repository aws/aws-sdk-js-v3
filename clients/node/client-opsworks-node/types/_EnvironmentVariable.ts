/**
 * <p>Represents an app's environment variable.</p>
 */
export interface _EnvironmentVariable {
  /**
   * <p>(Required) The environment variable's name, which can consist of up to 64 characters and must be specified. The name can contain upper- and lowercase letters, numbers, and underscores (_), but it must start with a letter or underscore.</p>
   */
  Key: string;

  /**
   * <p>(Optional) The environment variable's value, which can be left empty. If you specify a value, it can contain up to 256 characters, which must all be printable.</p>
   */
  Value: string;

  /**
   * <p>(Optional) Whether the variable's value will be returned by the <a>DescribeApps</a> action. To conceal an environment variable's value, set <code>Secure</code> to <code>true</code>. <code>DescribeApps</code> then returns <code>*****FILTERED*****</code> instead of the actual value. The default value for <code>Secure</code> is <code>false</code>. </p>
   */
  Secure?: boolean;
}

export type _UnmarshalledEnvironmentVariable = _EnvironmentVariable;
