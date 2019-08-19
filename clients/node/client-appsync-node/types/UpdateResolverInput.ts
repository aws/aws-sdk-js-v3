import { _PipelineConfig } from "./_PipelineConfig";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateResolverInput shape
 */
export interface UpdateResolverInput {
  /**
   * <p>The API ID.</p>
   */
  apiId: string;

  /**
   * <p>The new type name.</p>
   */
  typeName: string;

  /**
   * <p>The new field name.</p>
   */
  fieldName: string;

  /**
   * <p>The new data source name.</p>
   */
  dataSourceName?: string;

  /**
   * <p>The new request mapping template.</p>
   */
  requestMappingTemplate: string;

  /**
   * <p>The new response mapping template.</p>
   */
  responseMappingTemplate?: string;

  /**
   * <p>The resolver type.</p> <ul> <li> <p> <b>UNIT</b>: A UNIT resolver type. A UNIT resolver is the default resolver type. A UNIT resolver enables you to execute a GraphQL query against a single data source.</p> </li> <li> <p> <b>PIPELINE</b>: A PIPELINE resolver type. A PIPELINE resolver enables you to execute a series of <code>Function</code> in a serial manner. You can use a pipeline resolver to execute a GraphQL query against multiple data sources.</p> </li> </ul>
   */
  kind?: "UNIT" | "PIPELINE" | string;

  /**
   * <p>The <code>PipelineConfig</code>.</p>
   */
  pipelineConfig?: _PipelineConfig;

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
