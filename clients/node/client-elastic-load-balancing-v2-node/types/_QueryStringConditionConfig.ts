import {
  _QueryStringKeyValuePair,
  _UnmarshalledQueryStringKeyValuePair
} from "./_QueryStringKeyValuePair";

/**
 * <p>Information about a query string condition.</p> <p>The query string component of a URI starts after the first '?' character and is terminated by either a '#' character or the end of the URI. A typical query string contains key/value pairs separated by '&amp;' characters. The allowed characters are specified by RFC 3986. Any character can be percentage encoded.</p>
 */
export interface _QueryStringConditionConfig {
  /**
   * <p>One or more key/value pairs or values to find in the query string. The maximum size of each string is 128 characters. The comparison is case insensitive. The following wildcard characters are supported: * (matches 0 or more characters) and ? (matches exactly 1 character). To search for a literal '*' or '?' character in a query string, you must escape these characters in <code>Values</code> using a '\' character.</p> <p>If you specify multiple key/value pairs or values, the condition is satisfied if one of them is found in the query string.</p>
   */
  Values?: Array<_QueryStringKeyValuePair> | Iterable<_QueryStringKeyValuePair>;
}

export interface _UnmarshalledQueryStringConditionConfig
  extends _QueryStringConditionConfig {
  /**
   * <p>One or more key/value pairs or values to find in the query string. The maximum size of each string is 128 characters. The comparison is case insensitive. The following wildcard characters are supported: * (matches 0 or more characters) and ? (matches exactly 1 character). To search for a literal '*' or '?' character in a query string, you must escape these characters in <code>Values</code> using a '\' character.</p> <p>If you specify multiple key/value pairs or values, the condition is satisfied if one of them is found in the query string.</p>
   */
  Values?: Array<_UnmarshalledQueryStringKeyValuePair>;
}
