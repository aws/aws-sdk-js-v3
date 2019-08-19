import { _DataSource } from "./_DataSource";
import { _Source } from "./_Source";
import { _SslConfiguration } from "./_SslConfiguration";
import { _EnvironmentVariable } from "./_EnvironmentVariable";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateAppInput shape
 */
export interface CreateAppInput {
  /**
   * <p>The stack ID.</p>
   */
  StackId: string;

  /**
   * <p>The app's short name.</p>
   */
  Shortname?: string;

  /**
   * <p>The app name.</p>
   */
  Name: string;

  /**
   * <p>A description of the app.</p>
   */
  Description?: string;

  /**
   * <p>The app's data source.</p>
   */
  DataSources?: Array<_DataSource> | Iterable<_DataSource>;

  /**
   * <p>The app type. Each supported type is associated with a particular layer. For example, PHP applications are associated with a PHP layer. AWS OpsWorks Stacks deploys an application to those instances that are members of the corresponding layer. If your app isn't one of the standard types, or you prefer to implement your own Deploy recipes, specify <code>other</code>.</p>
   */
  Type:
    | "aws-flow-ruby"
    | "java"
    | "rails"
    | "php"
    | "nodejs"
    | "static"
    | "other"
    | string;

  /**
   * <p>A <code>Source</code> object that specifies the app repository.</p>
   */
  AppSource?: _Source;

  /**
   * <p>The app virtual host settings, with multiple domains separated by commas. For example: <code>'www.example.com, example.com'</code> </p>
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
   * <p>One or more user-defined key/value pairs to be added to the stack attributes.</p>
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
   * <p>An array of <code>EnvironmentVariable</code> objects that specify environment variables to be associated with the app. After you deploy the app, these variables are defined on the associated app server instance. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingapps-creating.html#workingapps-creating-environment"> Environment Variables</a>.</p> <p>There is no specific limit on the number of environment variables. However, the size of the associated data structure - which includes the variables' names, values, and protected flag values - cannot exceed 20 KB. This limit should accommodate most if not all use cases. Exceeding it will cause an exception with the message, "Environment: is too large (maximum is 20KB)."</p> <note> <p>If you have specified one or more environment variables, you cannot modify the stack's Chef version.</p> </note>
   */
  Environment?: Array<_EnvironmentVariable> | Iterable<_EnvironmentVariable>;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
