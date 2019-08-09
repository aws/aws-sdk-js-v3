/**
 * <p>Provides options for specifying a range inventory retrieval job.</p>
 */
export interface _InventoryRetrievalJobInput {
  /**
   * <p>The start of the date range in UTC for vault inventory retrieval that includes archives created on or after this date. This value should be a string in the ISO 8601 date format, for example <code>2013-03-20T17:03:43Z</code>.</p>
   */
  StartDate?: string;

  /**
   * <p>The end of the date range in UTC for vault inventory retrieval that includes archives created before this date. This value should be a string in the ISO 8601 date format, for example <code>2013-03-20T17:03:43Z</code>.</p>
   */
  EndDate?: string;

  /**
   * <p>Specifies the maximum number of inventory items returned per vault inventory retrieval request. Valid values are greater than or equal to 1.</p>
   */
  Limit?: string;

  /**
   * <p>An opaque string that represents where to continue pagination of the vault inventory retrieval results. You use the marker in a new <b>InitiateJob</b> request to obtain additional inventory items. If there are no more inventory items, this value is <code>null</code>.</p>
   */
  Marker?: string;
}

export type _UnmarshalledInventoryRetrievalJobInput = _InventoryRetrievalJobInput;
