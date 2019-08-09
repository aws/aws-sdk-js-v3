import { _InputStartingPositionConfiguration } from "./_InputStartingPositionConfiguration";
import { _S3Configuration } from "./_S3Configuration";
import { _InputProcessingConfiguration } from "./_InputProcessingConfiguration";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DiscoverInputSchemaInput shape
 */
export interface DiscoverInputSchemaInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the streaming source.</p>
   */
  ResourceARN?: string;

  /**
   * <p>The ARN of the role that is used to access the streaming source.</p>
   */
  ServiceExecutionRole: string;

  /**
   * <p>The point at which you want Kinesis Data Analytics to start reading records from the specified streaming source discovery purposes.</p>
   */
  InputStartingPositionConfiguration?: _InputStartingPositionConfiguration;

  /**
   * <p>Specify this parameter to discover a schema from data in an Amazon S3 object.</p>
   */
  S3Configuration?: _S3Configuration;

  /**
   * <p>The <a>InputProcessingConfiguration</a> to use to preprocess the records before discovering the schema of the records.</p>
   */
  InputProcessingConfiguration?: _InputProcessingConfiguration;

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
