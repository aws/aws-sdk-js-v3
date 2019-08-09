/**
 * <p>An OpsItems that shares something in common with the current OpsItem. For example, related OpsItems can include OpsItems with similar error messages, impacted resources, or statuses for the impacted resource.</p>
 */
export interface _RelatedOpsItem {
  /**
   * <p>The ID of an OpsItem related to the current OpsItem.</p>
   */
  OpsItemId: string;
}

export type _UnmarshalledRelatedOpsItem = _RelatedOpsItem;
