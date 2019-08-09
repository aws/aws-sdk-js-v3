import {
  _ApplicationVersionLifecycleConfig,
  _UnmarshalledApplicationVersionLifecycleConfig
} from "./_ApplicationVersionLifecycleConfig";

/**
 * <p>The resource lifecycle configuration for an application. Defines lifecycle settings for resources that belong to the application, and the service role that Elastic Beanstalk assumes in order to apply lifecycle settings. The version lifecycle configuration defines lifecycle settings for application versions.</p>
 */
export interface _ApplicationResourceLifecycleConfig {
  /**
   * <p>The ARN of an IAM service role that Elastic Beanstalk has permission to assume.</p> <p>The <code>ServiceRole</code> property is required the first time that you provide a <code>VersionLifecycleConfig</code> for the application in one of the supporting calls (<code>CreateApplication</code> or <code>UpdateApplicationResourceLifecycle</code>). After you provide it once, in either one of the calls, Elastic Beanstalk persists the Service Role with the application, and you don't need to specify it again in subsequent <code>UpdateApplicationResourceLifecycle</code> calls. You can, however, specify it in subsequent calls to change the Service Role to another value.</p>
   */
  ServiceRole?: string;

  /**
   * <p>The application version lifecycle configuration.</p>
   */
  VersionLifecycleConfig?: _ApplicationVersionLifecycleConfig;
}

export interface _UnmarshalledApplicationResourceLifecycleConfig
  extends _ApplicationResourceLifecycleConfig {
  /**
   * <p>The application version lifecycle configuration.</p>
   */
  VersionLifecycleConfig?: _UnmarshalledApplicationVersionLifecycleConfig;
}
