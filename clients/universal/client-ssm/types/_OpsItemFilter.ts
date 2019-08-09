/**
 * <p>Describes an OpsItem filter.</p>
 */
export interface _OpsItemFilter {
  /**
   * <p>The name of the filter.</p>
   */
  Key:
    | "Status"
    | "CreatedBy"
    | "Source"
    | "Priority"
    | "Title"
    | "OpsItemId"
    | "CreatedTime"
    | "LastModifiedTime"
    | "OperationalData"
    | "OperationalDataKey"
    | "OperationalDataValue"
    | "ResourceId"
    | "AutomationId"
    | string;

  /**
   * <p>The filter value.</p>
   */
  Values: Array<string> | Iterable<string>;

  /**
   * <p>The operator used by the filter call.</p>
   */
  Operator: "Equal" | "Contains" | "GreaterThan" | "LessThan" | string;
}

export interface _UnmarshalledOpsItemFilter extends _OpsItemFilter {
  /**
   * <p>The filter value.</p>
   */
  Values: Array<string>;
}
