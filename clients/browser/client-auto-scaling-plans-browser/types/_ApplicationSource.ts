import { _TagFilter, _UnmarshalledTagFilter } from "./_TagFilter";

/**
 * <p>Represents an application source.</p>
 */
export interface _ApplicationSource {
  /**
   * <p>The Amazon Resource Name (ARN) of a AWS CloudFormation stack.</p>
   */
  CloudFormationStackARN?: string;

  /**
   * <p>A set of tags (up to 50).</p>
   */
  TagFilters?: Array<_TagFilter> | Iterable<_TagFilter>;
}

export interface _UnmarshalledApplicationSource extends _ApplicationSource {
  /**
   * <p>A set of tags (up to 50).</p>
   */
  TagFilters?: Array<_UnmarshalledTagFilter>;
}
