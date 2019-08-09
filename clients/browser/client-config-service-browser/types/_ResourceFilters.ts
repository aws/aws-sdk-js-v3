/**
 * <p>Filters the results by resource account ID, region, resource ID, and resource name.</p>
 */
export interface _ResourceFilters {
  /**
   * <p>The 12-digit source account ID.</p>
   */
  AccountId?: string;

  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId?: string;

  /**
   * <p>The name of the resource.</p>
   */
  ResourceName?: string;

  /**
   * <p>The source region.</p>
   */
  Region?: string;
}

export type _UnmarshalledResourceFilters = _ResourceFilters;
