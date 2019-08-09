import { _ObjectReference } from "./_ObjectReference";
import { _TypedLinkAttributeRange } from "./_TypedLinkAttributeRange";
import { _TypedLinkSchemaAndFacetName } from "./_TypedLinkSchemaAndFacetName";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListOutgoingTypedLinksInput shape
 */
export interface ListOutgoingTypedLinksInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the directory where you want to list the typed links.</p>
   */
  DirectoryArn: string;

  /**
   * <p>A reference that identifies the object whose attributes will be listed.</p>
   */
  ObjectReference: _ObjectReference;

  /**
   * <p>Provides range filters for multiple attributes. When providing ranges to typed link selection, any inexact ranges must be specified at the end. Any attributes that do not have a range specified are presumed to match the entire range.</p>
   */
  FilterAttributeRanges?:
    | Array<_TypedLinkAttributeRange>
    | Iterable<_TypedLinkAttributeRange>;

  /**
   * <p>Filters are interpreted in the order of the attributes defined on the typed link facet, not the order they are supplied to any API calls.</p>
   */
  FilterTypedLink?: _TypedLinkSchemaAndFacetName;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to retrieve.</p>
   */
  MaxResults?: number;

  /**
   * <p>The consistency level to execute the request at.</p>
   */
  ConsistencyLevel?: "SERIALIZABLE" | "EVENTUAL" | string;

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
