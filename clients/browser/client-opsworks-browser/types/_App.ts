import { _DataSource, _UnmarshalledDataSource } from "./_DataSource";
import { _Source, _UnmarshalledSource } from "./_Source";
import {
  _SslConfiguration,
  _UnmarshalledSslConfiguration
} from "./_SslConfiguration";
import {
  _EnvironmentVariable,
  _UnmarshalledEnvironmentVariable
} from "./_EnvironmentVariable";

/**
 * <p>A description of the app.</p>
 */
export interface _App {
  /**
   * <p>The app ID.</p>
   */
  AppId?: string;

  /**
   * <p>The app stack ID.</p>
   */
  StackId?: string;

  /**
   * <p>The app's short name.</p>
   */
  Shortname?: string;

  /**
   * <p>The app name.</p>
   */
  Name?: string;

  /**
   * <p>A description of the app.</p>
   */
  Description?: string;

  /**
   * <p>The app's data sources.</p>
   */
  DataSources?: Array<_DataSource> | Iterable<_DataSource>;

  /**
   * <p>The app type.</p>
   */
  Type?:
    | "aws-flow-ruby"
    | "java"
    | "rails"
    | "php"
    | "nodejs"
    | "static"
    | "other"
    | string;

  /**
   * <p>A <code>Source</code> object that describes the app repository.</p>
   */
  AppSource?: _Source;

  /**
   * <p>The app vhost settings with multiple domains separated by commas. For example: <code>'www.example.com, example.com'</code> </p>
   */
  Domains?: Array<string> | Iterable<string>;

  /**
   * <p>Whether to enable SSL for the app.</p>
   */
  EnableSsl?: boolean;

  /**
   * <p>An <code>SslConfiguration</code> object with the SSL configuration.</p>
   */
  SslConfiguration?: _SslConfiguration;

  /**
   * <p>The stack attributes.</p>
   */
  Attributes?:
    | {
        [key in
          | "DocumentRoot"
          | "RailsEnv"
          | "AutoBundleOnDeploy"
          | "AwsFlowRubySettings"
          | string]: string
      }
    | Iterable<
        [

            | "DocumentRoot"
            | "RailsEnv"
            | "AutoBundleOnDeploy"
            | "AwsFlowRubySettings"
            | string,
          string
        ]
      >;

  /**
   * <p>When the app was created.</p>
   */
  CreatedAt?: string;

  /**
   * <p>An array of <code>EnvironmentVariable</code> objects that specify environment variables to be associated with the app. After you deploy the app, these variables are defined on the associated app server instances. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingapps-creating.html#workingapps-creating-environment"> Environment Variables</a>. </p> <note> <p>There is no specific limit on the number of environment variables. However, the size of the associated data structure - which includes the variable names, values, and protected flag values - cannot exceed 20 KB. This limit should accommodate most if not all use cases, but if you do exceed it, you will cause an exception (API) with an "Environment: is too large (maximum is 20 KB)" message.</p> </note>
   */
  Environment?: Array<_EnvironmentVariable> | Iterable<_EnvironmentVariable>;
}

export interface _UnmarshalledApp extends _App {
  /**
   * <p>The app's data sources.</p>
   */
  DataSources?: Array<_UnmarshalledDataSource>;

  /**
   * <p>A <code>Source</code> object that describes the app repository.</p>
   */
  AppSource?: _UnmarshalledSource;

  /**
   * <p>The app vhost settings with multiple domains separated by commas. For example: <code>'www.example.com, example.com'</code> </p>
   */
  Domains?: Array<string>;

  /**
   * <p>An <code>SslConfiguration</code> object with the SSL configuration.</p>
   */
  SslConfiguration?: _UnmarshalledSslConfiguration;

  /**
   * <p>The stack attributes.</p>
   */
  Attributes?: {
    [key in
      | "DocumentRoot"
      | "RailsEnv"
      | "AutoBundleOnDeploy"
      | "AwsFlowRubySettings"
      | string]: string
  };

  /**
   * <p>An array of <code>EnvironmentVariable</code> objects that specify environment variables to be associated with the app. After you deploy the app, these variables are defined on the associated app server instances. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingapps-creating.html#workingapps-creating-environment"> Environment Variables</a>. </p> <note> <p>There is no specific limit on the number of environment variables. However, the size of the associated data structure - which includes the variable names, values, and protected flag values - cannot exceed 20 KB. This limit should accommodate most if not all use cases, but if you do exceed it, you will cause an exception (API) with an "Environment: is too large (maximum is 20 KB)" message.</p> </note>
   */
  Environment?: Array<_UnmarshalledEnvironmentVariable>;
}
