/**
 * <p>Describes the resources available for a container instance.</p>
 */
export interface _Resource {
  /**
   * <p>The name of the resource, such as <code>CPU</code>, <code>MEMORY</code>, <code>PORTS</code>, <code>PORTS_UDP</code>, or a user-defined resource.</p>
   */
  name?: string;

  /**
   * <p>The type of the resource, such as <code>INTEGER</code>, <code>DOUBLE</code>, <code>LONG</code>, or <code>STRINGSET</code>.</p>
   */
  type?: string;

  /**
   * <p>When the <code>doubleValue</code> type is set, the value of the resource must be a double precision floating-point type.</p>
   */
  doubleValue?: number;

  /**
   * <p>When the <code>longValue</code> type is set, the value of the resource must be an extended precision floating-point type.</p>
   */
  longValue?: number;

  /**
   * <p>When the <code>integerValue</code> type is set, the value of the resource must be an integer.</p>
   */
  integerValue?: number;

  /**
   * <p>When the <code>stringSetValue</code> type is set, the value of the resource must be a string type.</p>
   */
  stringSetValue?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledResource extends _Resource {
  /**
   * <p>When the <code>stringSetValue</code> type is set, the value of the resource must be a string type.</p>
   */
  stringSetValue?: Array<string>;
}
