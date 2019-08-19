/**
 * <p>The metadata that you can use to filter and group your results. You can use <code>GetDimensionValues</code> to find specific values.</p>
 */
export interface _DimensionValues {
  /**
   * <p>The names of the metadata types that you can use to filter and group your results. For example, <code>AZ</code> returns a list of Availability Zones.</p>
   */
  Key?:
    | "AZ"
    | "INSTANCE_TYPE"
    | "LINKED_ACCOUNT"
    | "OPERATION"
    | "PURCHASE_TYPE"
    | "REGION"
    | "SERVICE"
    | "USAGE_TYPE"
    | "USAGE_TYPE_GROUP"
    | "RECORD_TYPE"
    | "OPERATING_SYSTEM"
    | "TENANCY"
    | "SCOPE"
    | "PLATFORM"
    | "SUBSCRIPTION_ID"
    | "LEGAL_ENTITY_NAME"
    | "DEPLOYMENT_OPTION"
    | "DATABASE_ENGINE"
    | "CACHE_ENGINE"
    | "INSTANCE_TYPE_FAMILY"
    | "BILLING_ENTITY"
    | "RESERVATION_ID"
    | "RIGHTSIZING_TYPE"
    | string;

  /**
   * <p>The metadata values that you can use to filter and group your results. You can use <code>GetDimensionValues</code> to find specific values.</p> <p>Valid values for the <code>SERVICE</code> dimension are <code>Amazon Elastic Compute Cloud - Compute</code>, <code>Amazon Elasticsearch Service</code>, <code>Amazon ElastiCache</code>, <code>Amazon Redshift</code>, and <code>Amazon Relational Database Service</code>.</p>
   */
  Values?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledDimensionValues extends _DimensionValues {
  /**
   * <p>The metadata values that you can use to filter and group your results. You can use <code>GetDimensionValues</code> to find specific values.</p> <p>Valid values for the <code>SERVICE</code> dimension are <code>Amazon Elastic Compute Cloud - Compute</code>, <code>Amazon Elasticsearch Service</code>, <code>Amazon ElastiCache</code>, <code>Amazon Redshift</code>, and <code>Amazon Relational Database Service</code>.</p>
   */
  Values?: Array<string>;
}
