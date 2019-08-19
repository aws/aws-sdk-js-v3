import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Request to retrieve a list of events for an environment.</p>
 */
export interface DescribeEventsInput {
  /**
   * <p>If specified, AWS Elastic Beanstalk restricts the returned descriptions to include only those associated with this application.</p>
   */
  ApplicationName?: string;

  /**
   * <p>If specified, AWS Elastic Beanstalk restricts the returned descriptions to those associated with this application version.</p>
   */
  VersionLabel?: string;

  /**
   * <p>If specified, AWS Elastic Beanstalk restricts the returned descriptions to those that are associated with this environment configuration.</p>
   */
  TemplateName?: string;

  /**
   * <p>If specified, AWS Elastic Beanstalk restricts the returned descriptions to those associated with this environment.</p>
   */
  EnvironmentId?: string;

  /**
   * <p>If specified, AWS Elastic Beanstalk restricts the returned descriptions to those associated with this environment.</p>
   */
  EnvironmentName?: string;

  /**
   * <p>The ARN of the version of the custom platform.</p>
   */
  PlatformArn?: string;

  /**
   * <p>If specified, AWS Elastic Beanstalk restricts the described events to include only those associated with this request ID.</p>
   */
  RequestId?: string;

  /**
   * <p>If specified, limits the events returned from this call to include only those with the specified severity or higher.</p>
   */
  Severity?: "TRACE" | "DEBUG" | "INFO" | "WARN" | "ERROR" | "FATAL" | string;

  /**
   * <p>If specified, AWS Elastic Beanstalk restricts the returned descriptions to those that occur on or after this time.</p>
   */
  StartTime?: Date | string | number;

  /**
   * <p> If specified, AWS Elastic Beanstalk restricts the returned descriptions to those that occur up to, but not including, the <code>EndTime</code>. </p>
   */
  EndTime?: Date | string | number;

  /**
   * <p>Specifies the maximum number of events that can be returned, beginning with the most recent event.</p>
   */
  MaxRecords?: number;

  /**
   * <p>Pagination token. If specified, the events return the next batch of results.</p>
   */
  NextToken?: string;

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
