import { _TagFilter, _UnmarshalledTagFilter } from "./_TagFilter";

/**
 * <p>Information about groups of on-premises instance tags.</p>
 */
export interface _OnPremisesTagSet {
  /**
   * <p>A list that contains other lists of on-premises instance tag groups. For an instance to be included in the deployment group, it must be identified by all of the tag groups in the list.</p>
   */
  onPremisesTagSetList?:
    | Array<Array<_TagFilter> | Iterable<_TagFilter>>
    | Iterable<Array<_TagFilter> | Iterable<_TagFilter>>;
}

export interface _UnmarshalledOnPremisesTagSet extends _OnPremisesTagSet {
  /**
   * <p>A list that contains other lists of on-premises instance tag groups. For an instance to be included in the deployment group, it must be identified by all of the tag groups in the list.</p>
   */
  onPremisesTagSetList?: Array<Array<_UnmarshalledTagFilter>>;
}
