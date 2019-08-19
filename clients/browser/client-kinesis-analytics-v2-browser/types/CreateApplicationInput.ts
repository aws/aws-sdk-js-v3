import { _ApplicationConfiguration } from "./_ApplicationConfiguration";
import { _CloudWatchLoggingOption } from "./_CloudWatchLoggingOption";
import { _Tag } from "./_Tag";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateApplicationInput shape
 */
export interface CreateApplicationInput {
  /**
   * <p>The name of your application (for example, <code>sample-app</code>).</p>
   */
  ApplicationName: string;

  /**
   * <p>A summary description of the application.</p>
   */
  ApplicationDescription?: string;

  /**
   * <p>The runtime environment for the application (<code>SQL-1.0</code> or <code>FLINK-1_6</code>).</p>
   */
  RuntimeEnvironment: "SQL-1_0" | "FLINK-1_6" | string;

  /**
   * <p>The IAM role used by the application to access Kinesis data streams, Kinesis Data Firehose delivery streams, Amazon S3 objects, and other external resources.</p>
   */
  ServiceExecutionRole: string;

  /**
   * <p>Use this parameter to configure the application.</p>
   */
  ApplicationConfiguration?: _ApplicationConfiguration;

  /**
   * <p>Use this parameter to configure an Amazon CloudWatch log stream to monitor application configuration errors. </p>
   */
  CloudWatchLoggingOptions?:
    | Array<_CloudWatchLoggingOption>
    | Iterable<_CloudWatchLoggingOption>;

  /**
   * <p>A list of one or more tags to assign to the application. A tag is a key-value pair that identifies an application. Note that the maximum number of application tags includes system tags. The maximum number of user-defined application tags is 50. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Using Cost Allocation Tags</a> in the <i>AWS Billing and Cost Management Guide</i>.</p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;

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
