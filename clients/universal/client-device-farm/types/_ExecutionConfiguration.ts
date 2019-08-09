/**
 * <p>Represents configuration information about a test run, such as the execution timeout (in minutes).</p>
 */
export interface _ExecutionConfiguration {
  /**
   * <p>The number of minutes a test run will execute before it times out.</p>
   */
  jobTimeoutMinutes?: number;

  /**
   * <p>True if account cleanup is enabled at the beginning of the test; otherwise, false.</p>
   */
  accountsCleanup?: boolean;

  /**
   * <p>True if app package cleanup is enabled at the beginning of the test; otherwise, false.</p>
   */
  appPackagesCleanup?: boolean;

  /**
   * <p>Set to true to enable video capture; otherwise, set to false. The default is true.</p>
   */
  videoCapture?: boolean;

  /**
   * <p>When set to <code>true</code>, for private devices, Device Farm will not sign your app again. For public devices, Device Farm always signs your apps again and this parameter has no effect.</p> <p>For more information about how Device Farm re-signs your app(s), see <a href="https://aws.amazon.com/device-farm/faq/">Do you modify my app?</a> in the <i>AWS Device Farm FAQs</i>.</p>
   */
  skipAppResign?: boolean;
}

export type _UnmarshalledExecutionConfiguration = _ExecutionConfiguration;
