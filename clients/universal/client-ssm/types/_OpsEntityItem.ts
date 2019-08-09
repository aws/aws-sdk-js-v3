/**
 * <p>The OpsItem summaries result item.</p>
 */
export interface _OpsEntityItem {
  /**
   * <p>The detailed data content for an OpsItem summaries result item.</p>
   */
  Content?:
    | Array<{ [key: string]: string } | Iterable<[string, string]>>
    | Iterable<{ [key: string]: string } | Iterable<[string, string]>>;
}

export interface _UnmarshalledOpsEntityItem extends _OpsEntityItem {
  /**
   * <p>The detailed data content for an OpsItem summaries result item.</p>
   */
  Content?: Array<{ [key: string]: string }>;
}
