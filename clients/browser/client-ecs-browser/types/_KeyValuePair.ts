/**
 * <p>A key-value pair object.</p>
 */
export interface _KeyValuePair {
  /**
   * <p>The name of the key-value pair. For environment variables, this is the name of the environment variable.</p>
   */
  name?: string;

  /**
   * <p>The value of the key-value pair. For environment variables, this is the value of the environment variable.</p>
   */
  value?: string;
}

export type _UnmarshalledKeyValuePair = _KeyValuePair;
