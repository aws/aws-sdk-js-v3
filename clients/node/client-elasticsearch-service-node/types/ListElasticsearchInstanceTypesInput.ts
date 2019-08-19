import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p> Container for the parameters to the <code> <a>ListElasticsearchInstanceTypes</a> </code> operation. </p>
 */
export interface ListElasticsearchInstanceTypesInput {
  /**
   * <p>Version of Elasticsearch for which list of supported elasticsearch instance types are needed. </p>
   */
  ElasticsearchVersion: string;

  /**
   * <p>DomainName represents the name of the Domain that we are trying to modify. This should be present only if we are querying for list of available Elasticsearch instance types when modifying existing domain. </p>
   */
  DomainName?: string;

  /**
   * <p> Set this value to limit the number of results returned. Value provided must be greater than 30 else it wont be honored. </p>
   */
  MaxResults?: number;

  /**
   * <p>NextToken should be sent in case if earlier API call produced result containing NextToken. It is used for pagination. </p>
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
