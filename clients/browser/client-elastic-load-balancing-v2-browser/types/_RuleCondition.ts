import {
  _HostHeaderConditionConfig,
  _UnmarshalledHostHeaderConditionConfig
} from "./_HostHeaderConditionConfig";
import {
  _PathPatternConditionConfig,
  _UnmarshalledPathPatternConditionConfig
} from "./_PathPatternConditionConfig";
import {
  _HttpHeaderConditionConfig,
  _UnmarshalledHttpHeaderConditionConfig
} from "./_HttpHeaderConditionConfig";
import {
  _QueryStringConditionConfig,
  _UnmarshalledQueryStringConditionConfig
} from "./_QueryStringConditionConfig";
import {
  _HttpRequestMethodConditionConfig,
  _UnmarshalledHttpRequestMethodConditionConfig
} from "./_HttpRequestMethodConditionConfig";
import {
  _SourceIpConditionConfig,
  _UnmarshalledSourceIpConditionConfig
} from "./_SourceIpConditionConfig";

/**
 * <p>Information about a condition for a rule.</p>
 */
export interface _RuleCondition {
  /**
   * <p>The field in the HTTP request. The following are the possible values:</p> <ul> <li> <p> <code>http-header</code> </p> </li> <li> <p> <code>http-request-method</code> </p> </li> <li> <p> <code>host-header</code> </p> </li> <li> <p> <code>path-pattern</code> </p> </li> <li> <p> <code>query-string</code> </p> </li> <li> <p> <code>source-ip</code> </p> </li> </ul>
   */
  Field?: string;

  /**
   * <p>The condition value. You can use <code>Values</code> if the rule contains only <code>host-header</code> and <code>path-pattern</code> conditions. Otherwise, you can use <code>HostHeaderConfig</code> for <code>host-header</code> conditions and <code>PathPatternConfig</code> for <code>path-pattern</code> conditions.</p> <p>If <code>Field</code> is <code>host-header</code>, you can specify a single host name (for example, my.example.com). A host name is case insensitive, can be up to 128 characters in length, and can contain any of the following characters.</p> <ul> <li> <p>A-Z, a-z, 0-9</p> </li> <li> <p>- .</p> </li> <li> <p>* (matches 0 or more characters)</p> </li> <li> <p>? (matches exactly 1 character)</p> </li> </ul> <p>If <code>Field</code> is <code>path-pattern</code>, you can specify a single path pattern (for example, /img/*). A path pattern is case-sensitive, can be up to 128 characters in length, and can contain any of the following characters.</p> <ul> <li> <p>A-Z, a-z, 0-9</p> </li> <li> <p>_ - . $ / ~ " ' @ : +</p> </li> <li> <p>&amp; (using &amp;amp;)</p> </li> <li> <p>* (matches 0 or more characters)</p> </li> <li> <p>? (matches exactly 1 character)</p> </li> </ul>
   */
  Values?: Array<string> | Iterable<string>;

  /**
   * <p>Information for a host header condition. Specify only when <code>Field</code> is <code>host-header</code>.</p>
   */
  HostHeaderConfig?: _HostHeaderConditionConfig;

  /**
   * <p>Information for a path pattern condition. Specify only when <code>Field</code> is <code>path-pattern</code>.</p>
   */
  PathPatternConfig?: _PathPatternConditionConfig;

  /**
   * <p>Information for an HTTP header condition. Specify only when <code>Field</code> is <code>http-header</code>.</p>
   */
  HttpHeaderConfig?: _HttpHeaderConditionConfig;

  /**
   * <p>Information for a query string condition. Specify only when <code>Field</code> is <code>query-string</code>.</p>
   */
  QueryStringConfig?: _QueryStringConditionConfig;

  /**
   * <p>Information for an HTTP method condition. Specify only when <code>Field</code> is <code>http-request-method</code>.</p>
   */
  HttpRequestMethodConfig?: _HttpRequestMethodConditionConfig;

  /**
   * <p>Information for a source IP condition. Specify only when <code>Field</code> is <code>source-ip</code>.</p>
   */
  SourceIpConfig?: _SourceIpConditionConfig;
}

export interface _UnmarshalledRuleCondition extends _RuleCondition {
  /**
   * <p>The condition value. You can use <code>Values</code> if the rule contains only <code>host-header</code> and <code>path-pattern</code> conditions. Otherwise, you can use <code>HostHeaderConfig</code> for <code>host-header</code> conditions and <code>PathPatternConfig</code> for <code>path-pattern</code> conditions.</p> <p>If <code>Field</code> is <code>host-header</code>, you can specify a single host name (for example, my.example.com). A host name is case insensitive, can be up to 128 characters in length, and can contain any of the following characters.</p> <ul> <li> <p>A-Z, a-z, 0-9</p> </li> <li> <p>- .</p> </li> <li> <p>* (matches 0 or more characters)</p> </li> <li> <p>? (matches exactly 1 character)</p> </li> </ul> <p>If <code>Field</code> is <code>path-pattern</code>, you can specify a single path pattern (for example, /img/*). A path pattern is case-sensitive, can be up to 128 characters in length, and can contain any of the following characters.</p> <ul> <li> <p>A-Z, a-z, 0-9</p> </li> <li> <p>_ - . $ / ~ " ' @ : +</p> </li> <li> <p>&amp; (using &amp;amp;)</p> </li> <li> <p>* (matches 0 or more characters)</p> </li> <li> <p>? (matches exactly 1 character)</p> </li> </ul>
   */
  Values?: Array<string>;

  /**
   * <p>Information for a host header condition. Specify only when <code>Field</code> is <code>host-header</code>.</p>
   */
  HostHeaderConfig?: _UnmarshalledHostHeaderConditionConfig;

  /**
   * <p>Information for a path pattern condition. Specify only when <code>Field</code> is <code>path-pattern</code>.</p>
   */
  PathPatternConfig?: _UnmarshalledPathPatternConditionConfig;

  /**
   * <p>Information for an HTTP header condition. Specify only when <code>Field</code> is <code>http-header</code>.</p>
   */
  HttpHeaderConfig?: _UnmarshalledHttpHeaderConditionConfig;

  /**
   * <p>Information for a query string condition. Specify only when <code>Field</code> is <code>query-string</code>.</p>
   */
  QueryStringConfig?: _UnmarshalledQueryStringConditionConfig;

  /**
   * <p>Information for an HTTP method condition. Specify only when <code>Field</code> is <code>http-request-method</code>.</p>
   */
  HttpRequestMethodConfig?: _UnmarshalledHttpRequestMethodConditionConfig;

  /**
   * <p>Information for a source IP condition. Specify only when <code>Field</code> is <code>source-ip</code>.</p>
   */
  SourceIpConfig?: _UnmarshalledSourceIpConditionConfig;
}
