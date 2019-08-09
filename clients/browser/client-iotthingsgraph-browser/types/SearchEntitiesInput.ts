import { _EntityFilter } from "./_EntityFilter";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * SearchEntitiesInput shape
 */
export interface SearchEntitiesInput {
  /**
   * <p>The entity types for which to search.</p>
   */
  entityTypes:
    | Array<
        | "DEVICE"
        | "SERVICE"
        | "DEVICE_MODEL"
        | "CAPABILITY"
        | "STATE"
        | "ACTION"
        | "EVENT"
        | "PROPERTY"
        | "MAPPING"
        | "ENUM"
        | string
      >
    | Iterable<
        | "DEVICE"
        | "SERVICE"
        | "DEVICE_MODEL"
        | "CAPABILITY"
        | "STATE"
        | "ACTION"
        | "EVENT"
        | "PROPERTY"
        | "MAPPING"
        | "ENUM"
        | string
      >;

  /**
   * <p>Optional filter to apply to the search. Valid filters are <code>NAME</code> <code>NAMESPACE</code>, <code>SEMANTIC_TYPE_PATH</code> and <code>REFERENCED_ENTITY_ID</code>. <code>REFERENCED_ENTITY_ID</code> filters on entities that are used by the entity in the result set. For example, you can filter on the ID of a property that is used in a state.</p> <p>Multiple filters function as OR criteria in the query. Multiple values passed inside the filter function as AND criteria.</p>
   */
  filters?: Array<_EntityFilter> | Iterable<_EntityFilter>;

  /**
   * <p>The string that specifies the next page of results. Use this when you're paginating results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return in the response.</p>
   */
  maxResults?: number;

  /**
   * <p>The version of the user's namespace. Defaults to the latest version of the user's namespace.</p>
   */
  namespaceVersion?: number;

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
