import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateFunctionInput shape
 */
export interface UpdateFunctionInput {
  /**
   * <p>The GraphQL API ID.</p>
   */
  apiId: string;

  /**
   * <p>The <code>Function</code> name.</p>
   */
  name: string;

  /**
   * <p>The <code>Function</code> description.</p>
   */
  description?: string;

  /**
   * <p>The function ID.</p>
   */
  functionId: string;

  /**
   * <p>The <code>Function</code> <code>DataSource</code> name.</p>
   */
  dataSourceName: string;

  /**
   * <p>The <code>Function</code> request mapping template. Functions support only the 2018-05-29 version of the request mapping template.</p>
   */
  requestMappingTemplate: string;

  /**
   * <p>The <code>Function</code> request mapping template. </p>
   */
  responseMappingTemplate?: string;

  /**
   * <p>The <code>version</code> of the request mapping template. Currently the supported value is 2018-05-29. </p>
   */
  functionVersion: string;

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
