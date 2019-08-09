import { _AccountAggregationSource } from "./_AccountAggregationSource";
import { _OrganizationAggregationSource } from "./_OrganizationAggregationSource";
import { _Tag } from "./_Tag";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * PutConfigurationAggregatorInput shape
 */
export interface PutConfigurationAggregatorInput {
  /**
   * <p>The name of the configuration aggregator.</p>
   */
  ConfigurationAggregatorName: string;

  /**
   * <p>A list of AccountAggregationSource object. </p>
   */
  AccountAggregationSources?:
    | Array<_AccountAggregationSource>
    | Iterable<_AccountAggregationSource>;

  /**
   * <p>An OrganizationAggregationSource object.</p>
   */
  OrganizationAggregationSource?: _OrganizationAggregationSource;

  /**
   * _TagsList shape
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
