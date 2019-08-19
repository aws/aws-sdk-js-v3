/**
 * <p/>
 */
export interface _RefreshSchemasStatus {
  /**
   * <p>The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.</p>
   */
  EndpointArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the replication instance.</p>
   */
  ReplicationInstanceArn?: string;

  /**
   * <p>The status of the schema.</p>
   */
  Status?: "successful" | "failed" | "refreshing" | string;

  /**
   * <p>The date the schema was last refreshed.</p>
   */
  LastRefreshDate?: Date | string | number;

  /**
   * <p>The last failure message for the schema.</p>
   */
  LastFailureMessage?: string;
}

export interface _UnmarshalledRefreshSchemasStatus
  extends _RefreshSchemasStatus {
  /**
   * <p>The date the schema was last refreshed.</p>
   */
  LastRefreshDate?: Date;
}
