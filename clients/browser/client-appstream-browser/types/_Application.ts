/**
 * <p>Describes an application in the application catalog.</p>
 */
export interface _Application {
  /**
   * <p>The name of the application.</p>
   */
  Name?: string;

  /**
   * <p>The application name to display.</p>
   */
  DisplayName?: string;

  /**
   * <p>The URL for the application icon. This URL might be time-limited.</p>
   */
  IconURL?: string;

  /**
   * <p>The path to the application executable in the instance.</p>
   */
  LaunchPath?: string;

  /**
   * <p>The arguments that are passed to the application at launch.</p>
   */
  LaunchParameters?: string;

  /**
   * <p>If there is a problem, the application can be disabled after image creation.</p>
   */
  Enabled?: boolean;

  /**
   * <p>Additional attributes that describe the application.</p>
   */
  Metadata?: { [key: string]: string } | Iterable<[string, string]>;
}

export interface _UnmarshalledApplication extends _Application {
  /**
   * <p>Additional attributes that describe the application.</p>
   */
  Metadata?: { [key: string]: string };
}
