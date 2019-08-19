/**
 * <p>One or more filters. Use a filter to return a more specific list of results.</p>
 */
export interface _InventoryFilter {
  /**
   * <p>The name of the filter key.</p>
   */
  Key: string;

  /**
   * <p>Inventory filter values. Example: inventory filter where instance IDs are specified as values Key=AWS:InstanceInformation.InstanceId,Values= i-a12b3c4d5e6g, i-1a2b3c4d5e6,Type=Equal </p>
   */
  Values: Array<string> | Iterable<string>;

  /**
   * <p>The type of filter. Valid values include the following: "Equal"|"NotEqual"|"BeginWith"|"LessThan"|"GreaterThan"</p>
   */
  Type?:
    | "Equal"
    | "NotEqual"
    | "BeginWith"
    | "LessThan"
    | "GreaterThan"
    | "Exists"
    | string;
}

export interface _UnmarshalledInventoryFilter extends _InventoryFilter {
  /**
   * <p>Inventory filter values. Example: inventory filter where instance IDs are specified as values Key=AWS:InstanceInformation.InstanceId,Values= i-a12b3c4d5e6g, i-1a2b3c4d5e6,Type=Equal </p>
   */
  Values: Array<string>;
}
