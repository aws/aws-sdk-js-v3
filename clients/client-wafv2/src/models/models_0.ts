// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { WAFV2ServiceException as __BaseException } from "./WAFV2ServiceException";

/**
 * @public
 * @enum
 */
export const ActionValue = {
  ALLOW: "ALLOW",
  BLOCK: "BLOCK",
  CAPTCHA: "CAPTCHA",
  CHALLENGE: "CHALLENGE",
  COUNT: "COUNT",
  EXCLUDED_AS_COUNT: "EXCLUDED_AS_COUNT",
} as const;

/**
 * @public
 */
export type ActionValue = (typeof ActionValue)[keyof typeof ActionValue];

/**
 * @public
 * <p>A single action condition for a <a>Condition</a> in a logging filter.</p>
 */
export interface ActionCondition {
  /**
   * @public
   * <p>The action setting that a log record must contain in order to meet the condition. This is the action that WAF applied to the web request. </p>
   *          <p>For rule groups, this is either the configured rule action setting, or if you've applied a rule action override to the rule, it's the override action.
   *        The value <code>EXCLUDED_AS_COUNT</code> matches on
   *        excluded rules and also on rules that have a rule action override of Count. </p>
   */
  Action: ActionValue | undefined;
}

/**
 * @public
 * <p>The name of a field in the request payload that contains part or all of your customer's primary physical address. </p>
 *          <p>This data type is used in the <code>RequestInspectionACFP</code> data type. </p>
 */
export interface AddressField {
  /**
   * @public
   * <p>The name of a single primary address field. </p>
   *          <p>How you specify the address fields depends on the request inspection payload type.</p>
   *          <ul>
   *             <li>
   *                <p>For JSON payloads, specify the field identifiers in JSON
   *                pointer syntax. For information about the JSON Pointer
   *                syntax, see the Internet Engineering Task Force (IETF)
   *                documentation <a href="https://tools.ietf.org/html/rfc6901">JavaScript
   *                	Object Notation (JSON) Pointer</a>. </p>
   *                <p>For example, for the JSON payload <code>\{ "form": \{ "primaryaddressline1": "THE_ADDRESS1", "primaryaddressline2": "THE_ADDRESS2", "primaryaddressline3": "THE_ADDRESS3" \} \}</code>,
   *                  the address field idenfiers are <code>/form/primaryaddressline1</code>, <code>/form/primaryaddressline2</code>, and <code>/form/primaryaddressline3</code>.</p>
   *             </li>
   *             <li>
   *                <p>For form encoded payload types, use the HTML form names.</p>
   *                <p>For example, for an HTML form with input elements
   *                    named <code>primaryaddressline1</code>, <code>primaryaddressline2</code>, and <code>primaryaddressline3</code>, the address fields identifiers are <code>primaryaddressline1</code>, <code>primaryaddressline2</code>, and <code>primaryaddressline3</code>. </p>
   *             </li>
   *          </ul>
   */
  Identifier: string | undefined;
}

/**
 * @public
 * <p>Inspect all of the elements that WAF has parsed and extracted from the web request
 *          component that you've identified in your <a>FieldToMatch</a> specifications. </p>
 *          <p>This is used in the <a>FieldToMatch</a> specification for some web request component types. </p>
 *          <p>JSON specification: <code>"All": \{\}</code>
 *          </p>
 */
export interface All {}

/**
 * @public
 * <p>A custom header for custom request and response handling. This is used in <a>CustomResponse</a> and <a>CustomRequestHandling</a>.</p>
 */
export interface CustomHTTPHeader {
  /**
   * @public
   * <p>The name of the custom header. </p>
   *          <p>For custom request header insertion, when WAF inserts the header into the request,
   *          it prefixes this name <code>x-amzn-waf-</code>, to avoid confusion with the headers that
   *          are already in the request. For example, for the header name <code>sample</code>, WAF
   *          inserts the header <code>x-amzn-waf-sample</code>.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The value of the custom header.</p>
   */
  Value: string | undefined;
}

/**
 * @public
 * <p>Custom request handling behavior that inserts custom headers into a web request. You can
 *       add custom request handling for WAF to use when the rule action doesn't block the request.
 *           For example, <code>CaptchaAction</code> for requests with valid t okens, and <code>AllowAction</code>. </p>
 *          <p>For information about customizing web requests and responses,
 *            see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html">Customizing web requests and responses in WAF</a>
 *     in the <i>WAF Developer Guide</i>. </p>
 */
export interface CustomRequestHandling {
  /**
   * @public
   * <p>The HTTP headers to insert into the request. Duplicate header names are not allowed. </p>
   *          <p>For information about the limits on count and size for custom request and response settings, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/limits.html">WAF quotas</a>
   *      in the <i>WAF Developer Guide</i>. </p>
   */
  InsertHeaders: CustomHTTPHeader[] | undefined;
}

/**
 * @public
 * <p>Specifies that WAF should allow the request and optionally defines additional
 *          custom handling for the request.</p>
 *          <p>This is used in the context of other settings, for example to specify values for <a>RuleAction</a> and web ACL <a>DefaultAction</a>. </p>
 */
export interface AllowAction {
  /**
   * @public
   * <p>Defines custom handling for the web request.</p>
   *          <p>For information about customizing web requests and responses,
   *            see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html">Customizing web requests and responses in WAF</a>
   *     in the <i>WAF Developer Guide</i>. </p>
   */
  CustomRequestHandling?: CustomRequestHandling;
}

/**
 * @public
 * <p>Inspect all query arguments of the web request. </p>
 *          <p>This is used in the <a>FieldToMatch</a> specification for some web request component types. </p>
 *          <p>JSON specification: <code>"AllQueryArguments": \{\}</code>
 *          </p>
 */
export interface AllQueryArguments {}

/**
 * @public
 * @enum
 */
export const OversizeHandling = {
  CONTINUE: "CONTINUE",
  MATCH: "MATCH",
  NO_MATCH: "NO_MATCH",
} as const;

/**
 * @public
 */
export type OversizeHandling = (typeof OversizeHandling)[keyof typeof OversizeHandling];

/**
 * @public
 * <p>Inspect the body of the web request. The body immediately follows the request
 *          headers.</p>
 *          <p>This is used to indicate the web request component to inspect, in the <a>FieldToMatch</a> specification. </p>
 */
export interface Body {
  /**
   * @public
   * <p>What WAF should do if the body is larger than WAF can inspect.
   *     WAF does not support inspecting the entire contents of the web request body if the body
   *     exceeds the limit for the resource type. If the body is larger than the limit, the underlying host service
   *     only forwards the contents that are below the limit to WAF for inspection. </p>
   *          <p>The default limit is 8 KB (8,192 bytes) for regional resources and 16 KB (16,384 bytes) for CloudFront distributions. For CloudFront distributions,
   *     you can increase the limit in the web ACL <code>AssociationConfig</code>, for additional processing fees. </p>
   *          <p>The options for oversize handling are the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CONTINUE</code> - Inspect the available body contents normally, according to the rule inspection criteria. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MATCH</code> - Treat the web request as matching the rule statement. WAF
   *                applies the rule action to the request.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NO_MATCH</code> - Treat the web request as not matching the rule
   *                statement.</p>
   *             </li>
   *          </ul>
   *          <p>You can combine the <code>MATCH</code> or <code>NO_MATCH</code>
   *       settings for oversize handling with your rule and web ACL action settings, so that you block any request whose body is over the limit. </p>
   *          <p>Default: <code>CONTINUE</code>
   *          </p>
   */
  OversizeHandling?: OversizeHandling;
}

/**
 * @public
 * <p>The filter to use to identify the subset of cookies to inspect in a web request. </p>
 *          <p>You must specify exactly one setting: either <code>All</code>, <code>IncludedCookies</code>, or <code>ExcludedCookies</code>.</p>
 *          <p>Example JSON: <code>"MatchPattern": \{ "IncludedCookies": [ "session-id-time", "session-id" ] \}</code>
 *          </p>
 */
export interface CookieMatchPattern {
  /**
   * @public
   * <p>Inspect all cookies. </p>
   */
  All?: All;

  /**
   * @public
   * <p>Inspect only the cookies that have a key that matches one of the strings specified here.
   *       </p>
   */
  IncludedCookies?: string[];

  /**
   * @public
   * <p>Inspect only the cookies whose keys don't match any of the strings specified here.
   *       </p>
   */
  ExcludedCookies?: string[];
}

/**
 * @public
 * @enum
 */
export const MapMatchScope = {
  ALL: "ALL",
  KEY: "KEY",
  VALUE: "VALUE",
} as const;

/**
 * @public
 */
export type MapMatchScope = (typeof MapMatchScope)[keyof typeof MapMatchScope];

/**
 * @public
 * <p>Inspect the cookies in the web request. You can specify the parts of the cookies to
 *          inspect and you can narrow the set of cookies to inspect by including or excluding specific
 *          keys.</p>
 *          <p>This is used to indicate the web request component to inspect, in the <a>FieldToMatch</a> specification. </p>
 *          <p>Example JSON: <code>"Cookies": \{ "MatchPattern": \{ "All": \{\} \}, "MatchScope": "KEY",
 *             "OversizeHandling": "MATCH" \}</code>
 *          </p>
 */
export interface Cookies {
  /**
   * @public
   * <p>The filter to use to identify the subset of cookies to inspect in a web request. </p>
   *          <p>You must specify exactly one setting: either <code>All</code>, <code>IncludedCookies</code>, or <code>ExcludedCookies</code>.</p>
   *          <p>Example JSON: <code>"MatchPattern": \{ "IncludedCookies": [ "session-id-time", "session-id" ] \}</code>
   *          </p>
   */
  MatchPattern: CookieMatchPattern | undefined;

  /**
   * @public
   * <p>The parts of the cookies to inspect with the rule inspection criteria. If you specify
   *             <code>All</code>, WAF inspects both keys and values. </p>
   */
  MatchScope: MapMatchScope | undefined;

  /**
   * @public
   * <p>What WAF should do if the cookies of the request are more numerous or larger than WAF can inspect.
   *     WAF does not support inspecting the entire contents of request cookies
   *       when they exceed 8 KB (8192 bytes) or 200 total cookies. The underlying host service forwards a maximum of 200 cookies
   *       and at most 8 KB of cookie contents to WAF. </p>
   *          <p>The options for oversize handling are the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CONTINUE</code> - Inspect the available cookies normally, according to the rule inspection criteria. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MATCH</code> - Treat the web request as matching the rule statement. WAF
   *                applies the rule action to the request.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NO_MATCH</code> - Treat the web request as not matching the rule
   *                statement.</p>
   *             </li>
   *          </ul>
   */
  OversizeHandling: OversizeHandling | undefined;
}

/**
 * @public
 * <p>Inspect a string containing the list of the request's header names, ordered as they appear in the web request
 * that WAF receives for inspection.
 *            WAF generates the string and then uses that as the field to match component in its inspection.
 *     WAF separates the header names in the string using colons and no added spaces, for example <code>host:user-agent:accept:authorization:referer</code>.</p>
 */
export interface HeaderOrder {
  /**
   * @public
   * <p>What WAF should do if the headers of the request are more numerous or larger than WAF can inspect.
   *     WAF does not support inspecting the entire contents of request headers
   *       when they exceed 8 KB (8192 bytes) or 200 total headers. The underlying host service forwards a maximum of 200 headers
   *       and at most 8 KB of header contents to WAF. </p>
   *          <p>The options for oversize handling are the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CONTINUE</code> - Inspect the available headers normally, according to the rule inspection criteria. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MATCH</code> - Treat the web request as matching the rule statement. WAF
   *                applies the rule action to the request.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NO_MATCH</code> - Treat the web request as not matching the rule
   *                statement.</p>
   *             </li>
   *          </ul>
   */
  OversizeHandling: OversizeHandling | undefined;
}

/**
 * @public
 * <p>The filter to use to identify the subset of headers to inspect in a web request. </p>
 *          <p>You must specify exactly one setting: either <code>All</code>, <code>IncludedHeaders</code>, or <code>ExcludedHeaders</code>.</p>
 *          <p>Example JSON: <code>"MatchPattern": \{ "ExcludedHeaders": [ "KeyToExclude1", "KeyToExclude2" ] \}</code>
 *          </p>
 */
export interface HeaderMatchPattern {
  /**
   * @public
   * <p>Inspect all headers. </p>
   */
  All?: All;

  /**
   * @public
   * <p>Inspect only the headers that have a key that matches one of the strings specified here.
   *       </p>
   */
  IncludedHeaders?: string[];

  /**
   * @public
   * <p>Inspect only the headers whose keys don't match any of the strings specified here.
   *       </p>
   */
  ExcludedHeaders?: string[];
}

/**
 * @public
 * <p>Inspect all headers in the web request. You can specify the parts of the headers to
 *          inspect and you can narrow the set of headers to inspect by including or excluding specific
 *          keys.</p>
 *          <p>This is used to indicate the web request component to inspect, in the <a>FieldToMatch</a> specification. </p>
 *          <p>If you want to inspect just the value of a single header, use the
 *             <code>SingleHeader</code>
 *             <code>FieldToMatch</code> setting instead.</p>
 *          <p>Example JSON: <code>"Headers": \{ "MatchPattern": \{ "All": \{\} \}, "MatchScope": "KEY",
 *             "OversizeHandling": "MATCH" \}</code>
 *          </p>
 */
export interface Headers {
  /**
   * @public
   * <p>The filter to use to identify the subset of headers to inspect in a web request. </p>
   *          <p>You must specify exactly one setting: either <code>All</code>, <code>IncludedHeaders</code>, or <code>ExcludedHeaders</code>.</p>
   *          <p>Example JSON: <code>"MatchPattern": \{ "ExcludedHeaders": [ "KeyToExclude1", "KeyToExclude2" ] \}</code>
   *          </p>
   */
  MatchPattern: HeaderMatchPattern | undefined;

  /**
   * @public
   * <p>The parts of the headers to match with the rule inspection criteria. If you specify
   *             <code>All</code>, WAF inspects both keys and values. </p>
   */
  MatchScope: MapMatchScope | undefined;

  /**
   * @public
   * <p>What WAF should do if the headers of the request are more numerous or larger than WAF can inspect.
   *     WAF does not support inspecting the entire contents of request headers
   *       when they exceed 8 KB (8192 bytes) or 200 total headers. The underlying host service forwards a maximum of 200 headers
   *       and at most 8 KB of header contents to WAF. </p>
   *          <p>The options for oversize handling are the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CONTINUE</code> - Inspect the available headers normally, according to the rule inspection criteria. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MATCH</code> - Treat the web request as matching the rule statement. WAF
   *                applies the rule action to the request.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NO_MATCH</code> - Treat the web request as not matching the rule
   *                statement.</p>
   *             </li>
   *          </ul>
   */
  OversizeHandling: OversizeHandling | undefined;
}

/**
 * @public
 * @enum
 */
export const FallbackBehavior = {
  MATCH: "MATCH",
  NO_MATCH: "NO_MATCH",
} as const;

/**
 * @public
 */
export type FallbackBehavior = (typeof FallbackBehavior)[keyof typeof FallbackBehavior];

/**
 * @public
 * <p>Match against the request's JA3 fingerprint. The JA3 fingerprint is a 32-character hash derived from the TLS Client Hello of an incoming request. This fingerprint serves as a unique identifier for the client's TLS configuration. WAF calculates and logs this fingerprint for each
 * 						request that has enough TLS Client Hello information for the calculation. Almost
 *                         all web requests include this information.</p>
 *          <note>
 *             <p>You can use this choice only with a string match <code>ByteMatchStatement</code> with the <code>PositionalConstraint</code> set to
 *        <code>EXACTLY</code>.  </p>
 *          </note>
 *          <p>You can obtain the JA3 fingerprint for client requests from the web ACL logs.
 * 						If WAF is able to calculate the fingerprint, it includes it in the logs.
 * 						For information about the logging fields,
 * see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/logging-fields.html">Log fields</a> in the <i>WAF Developer Guide</i>. </p>
 *          <p>Provide the JA3 fingerprint string from the logs in your string match statement
 * 							specification, to match with any future requests that have the same TLS configuration.</p>
 */
export interface JA3Fingerprint {
  /**
   * @public
   * <p>The match status to assign to the web request if the request doesn't have a JA3 fingerprint. </p>
   *          <p>You can specify the following fallback behaviors:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>MATCH</code> - Treat the web request as matching the rule statement. WAF applies the rule action to the request.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NO_MATCH</code> - Treat the web request as not matching the rule statement.</p>
   *             </li>
   *          </ul>
   */
  FallbackBehavior: FallbackBehavior | undefined;
}

/**
 * @public
 * @enum
 */
export const BodyParsingFallbackBehavior = {
  EVALUATE_AS_STRING: "EVALUATE_AS_STRING",
  MATCH: "MATCH",
  NO_MATCH: "NO_MATCH",
} as const;

/**
 * @public
 */
export type BodyParsingFallbackBehavior =
  (typeof BodyParsingFallbackBehavior)[keyof typeof BodyParsingFallbackBehavior];

/**
 * @public
 * <p>The patterns to look for in the JSON body. WAF inspects the results of these
 *          pattern matches against the rule inspection criteria. This is used with the <a>FieldToMatch</a> option <code>JsonBody</code>. </p>
 */
export interface JsonMatchPattern {
  /**
   * @public
   * <p>Match all of the elements. See also
   *             <code>MatchScope</code>
   *          in <a>JsonBody</a>. </p>
   *          <p>You must specify either this setting or the <code>IncludedPaths</code> setting, but not
   *          both.</p>
   */
  All?: All;

  /**
   * @public
   * <p>Match only the specified include paths. See also
   *             <code>MatchScope</code>
   *          in <a>JsonBody</a>. </p>
   *          <p>Provide the include paths using JSON Pointer syntax. For example, <code>"IncludedPaths":
   *             ["/dogs/0/name", "/dogs/1/name"]</code>. For information about this syntax, see the
   *          Internet Engineering Task Force (IETF) documentation <a href="https://tools.ietf.org/html/rfc6901">JavaScript Object Notation (JSON)
   *             Pointer</a>. </p>
   *          <p>You must specify either this setting or the <code>All</code> setting, but not
   *          both.</p>
   *          <note>
   *             <p>Don't use this option to include all paths. Instead, use the <code>All</code>
   *             setting. </p>
   *          </note>
   */
  IncludedPaths?: string[];
}

/**
 * @public
 * @enum
 */
export const JsonMatchScope = {
  ALL: "ALL",
  KEY: "KEY",
  VALUE: "VALUE",
} as const;

/**
 * @public
 */
export type JsonMatchScope = (typeof JsonMatchScope)[keyof typeof JsonMatchScope];

/**
 * @public
 * <p>Inspect the body of the web request as JSON. The body immediately follows the request
 *          headers. </p>
 *          <p>This is used to indicate the web request component to inspect, in the <a>FieldToMatch</a> specification. </p>
 *          <p>Use the specifications in this object to indicate which parts of the JSON body to
 *          inspect using the rule's inspection criteria. WAF inspects only the parts of the JSON
 *          that result from the matches that you indicate.
 *       </p>
 *          <p>Example JSON: <code>"JsonBody": \{ "MatchPattern": \{ "All": \{\} \}, "MatchScope": "ALL"
 *             \}</code>
 *          </p>
 */
export interface JsonBody {
  /**
   * @public
   * <p>The patterns to look for in the JSON body. WAF inspects the results of these
   *          pattern matches against the rule inspection criteria. </p>
   */
  MatchPattern: JsonMatchPattern | undefined;

  /**
   * @public
   * <p>The parts of the JSON to match against using the <code>MatchPattern</code>. If you
   *          specify <code>All</code>, WAF matches against keys and values. </p>
   */
  MatchScope: JsonMatchScope | undefined;

  /**
   * @public
   * <p>What WAF should do if it fails to completely parse the JSON body. The options are
   *          the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>EVALUATE_AS_STRING</code> - Inspect the body as plain text. WAF
   *                applies the text transformations and inspection criteria that you defined for the
   *                JSON inspection to the body text string.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MATCH</code> - Treat the web request as matching the rule statement.
   *                WAF applies the rule action to the request.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NO_MATCH</code> - Treat the web request as not matching the rule
   *                statement.</p>
   *             </li>
   *          </ul>
   *          <p>If you don't provide this setting, WAF parses and evaluates the content only up to the
   *          first parsing failure that it encounters. </p>
   *          <p>WAF does its best to parse the entire JSON body, but might be forced to stop for
   *          reasons such as invalid characters, duplicate keys, truncation, and any content whose root
   *          node isn't an object or an array. </p>
   *          <p>WAF parses the JSON in the following examples as two valid key, value pairs: </p>
   *          <ul>
   *             <li>
   *                <p>Missing comma: <code>\{"key1":"value1""key2":"value2"\}</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Missing colon: <code>\{"key1":"value1","key2""value2"\}</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Extra colons: <code>\{"key1"::"value1","key2""value2"\}</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  InvalidFallbackBehavior?: BodyParsingFallbackBehavior;

  /**
   * @public
   * <p>What WAF should do if the body is larger than WAF can inspect.
   *     WAF does not support inspecting the entire contents of the web request body if the body
   *     exceeds the limit for the resource type. If the body is larger than the limit, the underlying host service
   *     only forwards the contents that are below the limit to WAF for inspection. </p>
   *          <p>The default limit is 8 KB (8,192 bytes) for regional resources and 16 KB (16,384 bytes) for CloudFront distributions. For CloudFront distributions,
   *     you can increase the limit in the web ACL <code>AssociationConfig</code>, for additional processing fees. </p>
   *          <p>The options for oversize handling are the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CONTINUE</code> - Inspect the available body contents normally, according to the rule inspection criteria. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MATCH</code> - Treat the web request as matching the rule statement. WAF
   *                applies the rule action to the request.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NO_MATCH</code> - Treat the web request as not matching the rule
   *                statement.</p>
   *             </li>
   *          </ul>
   *          <p>You can combine the <code>MATCH</code> or <code>NO_MATCH</code>
   *       settings for oversize handling with your rule and web ACL action settings, so that you block any request whose body is over the limit. </p>
   *          <p>Default: <code>CONTINUE</code>
   *          </p>
   */
  OversizeHandling?: OversizeHandling;
}

/**
 * @public
 * <p>Inspect the HTTP method of the web request. The method indicates the type of operation
 *          that the request is asking the origin to perform. </p>
 *          <p>This is used in the <a>FieldToMatch</a> specification for some web request component types. </p>
 *          <p>JSON specification: <code>"Method": \{\}</code>
 *          </p>
 */
export interface Method {}

/**
 * @public
 * <p>Inspect the query string of the web request. This is the part of a URL that appears
 *          after a <code>?</code> character, if any.</p>
 *          <p>This is used in the <a>FieldToMatch</a> specification for some web request component types. </p>
 *          <p>JSON specification: <code>"QueryString": \{\}</code>
 *          </p>
 */
export interface QueryString {}

/**
 * @public
 * <p>Inspect one of the headers in the web request, identified by name, for example,
 *             <code>User-Agent</code> or <code>Referer</code>. The name isn't case sensitive.</p>
 *          <p>You can filter and inspect all headers with the <code>FieldToMatch</code> setting
 *             <code>Headers</code>.</p>
 *          <p>This is used to indicate the web request component to inspect, in the <a>FieldToMatch</a> specification. </p>
 *          <p>Example JSON: <code>"SingleHeader": \{ "Name": "haystack" \}</code>
 *          </p>
 */
export interface SingleHeader {
  /**
   * @public
   * <p>The name of the query header to inspect.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 * <p>Inspect one query argument in the web request, identified by name, for example
 *             <i>UserName</i> or <i>SalesRegion</i>. The name isn't case
 *          sensitive. </p>
 *          <p>This is used to indicate the web request component to inspect, in the <a>FieldToMatch</a> specification. </p>
 *          <p>Example JSON: <code>"SingleQueryArgument": \{ "Name": "myArgument" \}</code>
 *          </p>
 */
export interface SingleQueryArgument {
  /**
   * @public
   * <p>The name of the query argument to inspect.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 * <p>Inspect the path component of the URI of the web request. This is the part of the web
 *          request that identifies a resource. For example, <code>/images/daily-ad.jpg</code>.</p>
 *          <p>This is used in the <a>FieldToMatch</a> specification for some web request component types. </p>
 *          <p>JSON specification: <code>"UriPath": \{\}</code>
 *          </p>
 */
export interface UriPath {}

/**
 * @public
 * <p>The part of the web request that you want WAF to inspect. Include the single
 *             <code>FieldToMatch</code> type that you want to inspect, with additional specifications
 *          as needed, according to the type. You specify a single request component in
 *             <code>FieldToMatch</code> for each rule statement that requires it. To inspect more than
 *          one component of the web request, create a separate rule statement for each
 *          component.</p>
 *          <p>Example JSON for a <code>QueryString</code> field to match: </p>
 *          <p>
 *             <code> "FieldToMatch": \{ "QueryString": \{\} \}</code>
 *          </p>
 *          <p>Example JSON for a <code>Method</code> field to match specification:</p>
 *          <p>
 *             <code> "FieldToMatch": \{ "Method": \{ "Name": "DELETE" \} \}</code>
 *          </p>
 */
export interface FieldToMatch {
  /**
   * @public
   * <p>Inspect a single header. Provide the name of the header to inspect, for example,
   *             <code>User-Agent</code> or <code>Referer</code>. This setting isn't case
   *          sensitive.</p>
   *          <p>Example JSON: <code>"SingleHeader": \{ "Name": "haystack" \}</code>
   *          </p>
   *          <p>Alternately, you can filter and inspect all headers with the <code>Headers</code>
   *             <code>FieldToMatch</code> setting. </p>
   */
  SingleHeader?: SingleHeader;

  /**
   * @public
   * <p>Inspect a single query argument. Provide the name of the query argument to inspect, such
   *          as <i>UserName</i> or <i>SalesRegion</i>. The name can be up to
   *          30 characters long and isn't case sensitive. </p>
   *          <p>Example JSON: <code>"SingleQueryArgument": \{ "Name": "myArgument" \}</code>
   *          </p>
   */
  SingleQueryArgument?: SingleQueryArgument;

  /**
   * @public
   * <p>Inspect all query arguments. </p>
   */
  AllQueryArguments?: AllQueryArguments;

  /**
   * @public
   * <p>Inspect the request URI path. This is the part of the web request that identifies a
   *          resource, for example, <code>/images/daily-ad.jpg</code>.</p>
   */
  UriPath?: UriPath;

  /**
   * @public
   * <p>Inspect the query string. This is the part of a URL that appears after a <code>?</code>
   *          character, if any.</p>
   */
  QueryString?: QueryString;

  /**
   * @public
   * <p>Inspect the request body as plain text. The request body immediately follows the request
   *          headers. This is the part of a request that contains any additional data that you want to
   *          send to your web server as the HTTP request body, such as data from a form. </p>
   *          <p>A limited amount of the request body is forwarded to WAF for
   *       inspection by the underlying host service. For regional resources, the limit is 8 KB (8,192 bytes) and for CloudFront distributions, the limit is 16 KB (16,384 bytes). For CloudFront distributions,
   *     you can increase the limit in the web ACL's <code>AssociationConfig</code>, for additional processing fees. </p>
   *          <p>For information about how to handle oversized
   *          request bodies, see the <code>Body</code> object configuration. </p>
   */
  Body?: Body;

  /**
   * @public
   * <p>Inspect the HTTP method. The method indicates the type of operation that the request is
   *          asking the origin to perform. </p>
   */
  Method?: Method;

  /**
   * @public
   * <p>Inspect the request body as JSON. The request body immediately follows the request
   *          headers. This is the part of a request that contains any additional data that you want to
   *          send to your web server as the HTTP request body, such as data from a form. </p>
   *          <p>A limited amount of the request body is forwarded to WAF for
   *       inspection by the underlying host service. For regional resources, the limit is 8 KB (8,192 bytes) and for CloudFront distributions, the limit is 16 KB (16,384 bytes). For CloudFront distributions,
   *     you can increase the limit in the web ACL's <code>AssociationConfig</code>, for additional processing fees. </p>
   *          <p>For information about how to handle oversized
   *          request bodies, see the <code>JsonBody</code> object configuration. </p>
   */
  JsonBody?: JsonBody;

  /**
   * @public
   * <p>Inspect the request headers. You must configure scope and pattern matching filters in
   *          the <code>Headers</code> object, to define the set of headers to and the parts of the
   *          headers that WAF inspects. </p>
   *          <p>Only the first 8 KB (8192 bytes) of a request's headers and only the first 200 headers
   *          are forwarded to WAF for inspection by the underlying host service. You must
   *          configure how to handle any oversize header content in the <code>Headers</code> object.
   *          WAF applies the pattern matching filters to the headers that it receives from the
   *          underlying host service. </p>
   */
  Headers?: Headers;

  /**
   * @public
   * <p>Inspect the request cookies. You must configure scope and pattern matching filters in
   *          the <code>Cookies</code> object, to define the set of cookies and the parts of the cookies
   *          that WAF inspects. </p>
   *          <p>Only the first 8 KB (8192 bytes) of a request's cookies and only the first 200 cookies
   *          are forwarded to WAF for inspection by the underlying host service. You must
   *          configure how to handle any oversize cookie content in the <code>Cookies</code> object.
   *          WAF applies the pattern matching filters to the cookies that it receives from the
   *          underlying host service. </p>
   */
  Cookies?: Cookies;

  /**
   * @public
   * <p>Inspect a string containing the list of the request's header names, ordered as they appear in the web request
   * that WAF receives for inspection.
   *            WAF generates the string and then uses that as the field to match component in its inspection.
   *     WAF separates the header names in the string using colons and no added spaces, for example <code>host:user-agent:accept:authorization:referer</code>.</p>
   */
  HeaderOrder?: HeaderOrder;

  /**
   * @public
   * <p>Match against the request's JA3 fingerprint. The JA3 fingerprint is a 32-character hash derived from the TLS Client Hello of an incoming request. This fingerprint serves as a unique identifier for the client's TLS configuration. WAF calculates and logs this fingerprint for each
   * 						request that has enough TLS Client Hello information for the calculation. Almost
   *                         all web requests include this information.</p>
   *          <note>
   *             <p>You can use this choice only with a string match <code>ByteMatchStatement</code> with the <code>PositionalConstraint</code> set to
   *        <code>EXACTLY</code>.  </p>
   *          </note>
   *          <p>You can obtain the JA3 fingerprint for client requests from the web ACL logs.
   * 						If WAF is able to calculate the fingerprint, it includes it in the logs.
   * 						For information about the logging fields,
   * see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/logging-fields.html">Log fields</a> in the <i>WAF Developer Guide</i>. </p>
   *          <p>Provide the JA3 fingerprint string from the logs in your string match statement
   * 							specification, to match with any future requests that have the same TLS configuration.</p>
   */
  JA3Fingerprint?: JA3Fingerprint;
}

/**
 * @public
 * @enum
 */
export const PositionalConstraint = {
  CONTAINS: "CONTAINS",
  CONTAINS_WORD: "CONTAINS_WORD",
  ENDS_WITH: "ENDS_WITH",
  EXACTLY: "EXACTLY",
  STARTS_WITH: "STARTS_WITH",
} as const;

/**
 * @public
 */
export type PositionalConstraint = (typeof PositionalConstraint)[keyof typeof PositionalConstraint];

/**
 * @public
 * @enum
 */
export const TextTransformationType = {
  BASE64_DECODE: "BASE64_DECODE",
  BASE64_DECODE_EXT: "BASE64_DECODE_EXT",
  CMD_LINE: "CMD_LINE",
  COMPRESS_WHITE_SPACE: "COMPRESS_WHITE_SPACE",
  CSS_DECODE: "CSS_DECODE",
  ESCAPE_SEQ_DECODE: "ESCAPE_SEQ_DECODE",
  HEX_DECODE: "HEX_DECODE",
  HTML_ENTITY_DECODE: "HTML_ENTITY_DECODE",
  JS_DECODE: "JS_DECODE",
  LOWERCASE: "LOWERCASE",
  MD5: "MD5",
  NONE: "NONE",
  NORMALIZE_PATH: "NORMALIZE_PATH",
  NORMALIZE_PATH_WIN: "NORMALIZE_PATH_WIN",
  REMOVE_NULLS: "REMOVE_NULLS",
  REPLACE_COMMENTS: "REPLACE_COMMENTS",
  REPLACE_NULLS: "REPLACE_NULLS",
  SQL_HEX_DECODE: "SQL_HEX_DECODE",
  URL_DECODE: "URL_DECODE",
  URL_DECODE_UNI: "URL_DECODE_UNI",
  UTF8_TO_UNICODE: "UTF8_TO_UNICODE",
} as const;

/**
 * @public
 */
export type TextTransformationType = (typeof TextTransformationType)[keyof typeof TextTransformationType];

/**
 * @public
 * <p>Text transformations eliminate some of the unusual formatting that attackers use in web
 *          requests in an effort to bypass detection. </p>
 */
export interface TextTransformation {
  /**
   * @public
   * <p>Sets the relative processing order for multiple transformations.
   *          WAF processes all transformations, from lowest priority to highest,
   *          before inspecting the transformed content. The priorities don't need to be consecutive, but
   *          they must all be different. </p>
   */
  Priority: number | undefined;

  /**
   * @public
   * <p>For detailed descriptions of each of the transformation types, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-rule-statement-transformation.html">Text transformations</a>
   *                in the <i>WAF Developer Guide</i>.</p>
   */
  Type: TextTransformationType | undefined;
}

/**
 * @public
 * <p>A rule statement that defines a string match search for WAF to apply to web requests. The byte match statement provides the bytes to search for, the location in requests that you want WAF to search, and other settings. The bytes to search for are typically a string that corresponds with ASCII characters. In the WAF console and the developer guide, this is called a string match statement.</p>
 */
export interface ByteMatchStatement {
  /**
   * @public
   * <p>A string value that you want WAF to search for. WAF searches only in the part of
   *          web requests that you designate for inspection in <a>FieldToMatch</a>. The
   *          maximum length of the value is 200 bytes.</p>
   *          <p>Valid values depend on the component that you specify for inspection in
   *             <code>FieldToMatch</code>:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Method</code>: The HTTP method that you want WAF to search for. This
   *                indicates the type of operation specified in the request. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UriPath</code>: The value that you want WAF to search for in the URI path,
   *                for example, <code>/images/daily-ad.jpg</code>. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>JA3Fingerprint</code>: Match against the request's JA3 fingerprint. The JA3 fingerprint is a 32-character hash derived from the TLS Client Hello of an incoming request. This fingerprint serves as a unique identifier for the client's TLS configuration. You can use this choice only with a string match <code>ByteMatchStatement</code> with the <code>PositionalConstraint</code> set to
   *        <code>EXACTLY</code>. </p>
   *                <p>You can obtain the JA3 fingerprint for client requests from the web ACL logs.
   * 						If WAF is able to calculate the fingerprint, it includes it in the logs.
   * 						For information about the logging fields,
   * see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/logging-fields.html">Log fields</a> in the <i>WAF Developer Guide</i>. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>HeaderOrder</code>: The comma-separated list of header names to match for. WAF creates a
   *                  string that contains the ordered list of header names, from the headers in the web request, and then matches against that string. </p>
   *             </li>
   *          </ul>
   *          <p>If <code>SearchString</code> includes alphabetic characters A-Z and a-z, note that the
   *          value is case sensitive.</p>
   *          <p>
   *             <b>If you're using the WAF API</b>
   *          </p>
   *          <p>Specify a base64-encoded version of the value. The maximum length of the value before
   *          you base64-encode it is 200 bytes.</p>
   *          <p>For example, suppose the value of <code>Type</code> is <code>HEADER</code> and the value
   *          of <code>Data</code> is <code>User-Agent</code>. If you want to search the
   *             <code>User-Agent</code> header for the value <code>BadBot</code>, you base64-encode
   *             <code>BadBot</code> using MIME base64-encoding and include the resulting value,
   *             <code>QmFkQm90</code>, in the value of <code>SearchString</code>.</p>
   *          <p>
   *             <b>If you're using the CLI or one of the Amazon Web Services SDKs</b>
   *          </p>
   *          <p>The value that you want WAF to search for. The SDK automatically base64 encodes the
   *          value.</p>
   */
  SearchString: Uint8Array | undefined;

  /**
   * @public
   * <p>The part of the web request that you want WAF to inspect. </p>
   */
  FieldToMatch: FieldToMatch | undefined;

  /**
   * @public
   * <p>Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection. Text transformations are used in rule match statements, to transform the <code>FieldToMatch</code> request component before inspecting it, and they're used in rate-based rule statements, to transform request components before using them as custom aggregation keys. If you specify one or more transformations to apply, WAF performs all transformations on the specified content, starting from the lowest priority setting, and then uses the transformed component contents. </p>
   */
  TextTransformations: TextTransformation[] | undefined;

  /**
   * @public
   * <p>The area within the portion of the web request that you want WAF to search for
   *             <code>SearchString</code>. Valid values include the following:</p>
   *          <p>
   *             <b>CONTAINS</b>
   *          </p>
   *          <p>The specified part of the web request must include the value of
   *             <code>SearchString</code>, but the location doesn't matter.</p>
   *          <p>
   *             <b>CONTAINS_WORD</b>
   *          </p>
   *          <p>The specified part of the web request must include the value of
   *             <code>SearchString</code>, and <code>SearchString</code> must contain only alphanumeric
   *          characters or underscore (A-Z, a-z, 0-9, or _). In addition, <code>SearchString</code> must
   *          be a word, which means that both of the following are true:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SearchString</code> is at the beginning of the specified part of the web
   *                request or is preceded by a character other than an alphanumeric character or
   *                underscore (_). Examples include the value of a header and
   *                <code>;BadBot</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SearchString</code> is at the end of the specified part of the web request or
   *                is followed by a character other than an alphanumeric character or underscore (_),
   *                for example, <code>BadBot;</code> and <code>-BadBot;</code>.</p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>EXACTLY</b>
   *          </p>
   *          <p>The value of the specified part of the web request must exactly match the value of
   *             <code>SearchString</code>.</p>
   *          <p>
   *             <b>STARTS_WITH</b>
   *          </p>
   *          <p>The value of <code>SearchString</code> must appear at the beginning of the specified
   *          part of the web request.</p>
   *          <p>
   *             <b>ENDS_WITH</b>
   *          </p>
   *          <p>The value of <code>SearchString</code> must appear at the end of the specified part of
   *          the web request.</p>
   */
  PositionalConstraint: PositionalConstraint | undefined;
}

/**
 * @public
 * @enum
 */
export const CountryCode = {
  AD: "AD",
  AE: "AE",
  AF: "AF",
  AG: "AG",
  AI: "AI",
  AL: "AL",
  AM: "AM",
  AO: "AO",
  AQ: "AQ",
  AR: "AR",
  AS: "AS",
  AT: "AT",
  AU: "AU",
  AW: "AW",
  AX: "AX",
  AZ: "AZ",
  BA: "BA",
  BB: "BB",
  BD: "BD",
  BE: "BE",
  BF: "BF",
  BG: "BG",
  BH: "BH",
  BI: "BI",
  BJ: "BJ",
  BL: "BL",
  BM: "BM",
  BN: "BN",
  BO: "BO",
  BQ: "BQ",
  BR: "BR",
  BS: "BS",
  BT: "BT",
  BV: "BV",
  BW: "BW",
  BY: "BY",
  BZ: "BZ",
  CA: "CA",
  CC: "CC",
  CD: "CD",
  CF: "CF",
  CG: "CG",
  CH: "CH",
  CI: "CI",
  CK: "CK",
  CL: "CL",
  CM: "CM",
  CN: "CN",
  CO: "CO",
  CR: "CR",
  CU: "CU",
  CV: "CV",
  CW: "CW",
  CX: "CX",
  CY: "CY",
  CZ: "CZ",
  DE: "DE",
  DJ: "DJ",
  DK: "DK",
  DM: "DM",
  DO: "DO",
  DZ: "DZ",
  EC: "EC",
  EE: "EE",
  EG: "EG",
  EH: "EH",
  ER: "ER",
  ES: "ES",
  ET: "ET",
  FI: "FI",
  FJ: "FJ",
  FK: "FK",
  FM: "FM",
  FO: "FO",
  FR: "FR",
  GA: "GA",
  GB: "GB",
  GD: "GD",
  GE: "GE",
  GF: "GF",
  GG: "GG",
  GH: "GH",
  GI: "GI",
  GL: "GL",
  GM: "GM",
  GN: "GN",
  GP: "GP",
  GQ: "GQ",
  GR: "GR",
  GS: "GS",
  GT: "GT",
  GU: "GU",
  GW: "GW",
  GY: "GY",
  HK: "HK",
  HM: "HM",
  HN: "HN",
  HR: "HR",
  HT: "HT",
  HU: "HU",
  ID: "ID",
  IE: "IE",
  IL: "IL",
  IM: "IM",
  IN: "IN",
  IO: "IO",
  IQ: "IQ",
  IR: "IR",
  IS: "IS",
  IT: "IT",
  JE: "JE",
  JM: "JM",
  JO: "JO",
  JP: "JP",
  KE: "KE",
  KG: "KG",
  KH: "KH",
  KI: "KI",
  KM: "KM",
  KN: "KN",
  KP: "KP",
  KR: "KR",
  KW: "KW",
  KY: "KY",
  KZ: "KZ",
  LA: "LA",
  LB: "LB",
  LC: "LC",
  LI: "LI",
  LK: "LK",
  LR: "LR",
  LS: "LS",
  LT: "LT",
  LU: "LU",
  LV: "LV",
  LY: "LY",
  MA: "MA",
  MC: "MC",
  MD: "MD",
  ME: "ME",
  MF: "MF",
  MG: "MG",
  MH: "MH",
  MK: "MK",
  ML: "ML",
  MM: "MM",
  MN: "MN",
  MO: "MO",
  MP: "MP",
  MQ: "MQ",
  MR: "MR",
  MS: "MS",
  MT: "MT",
  MU: "MU",
  MV: "MV",
  MW: "MW",
  MX: "MX",
  MY: "MY",
  MZ: "MZ",
  NA: "NA",
  NC: "NC",
  NE: "NE",
  NF: "NF",
  NG: "NG",
  NI: "NI",
  NL: "NL",
  NO: "NO",
  NP: "NP",
  NR: "NR",
  NU: "NU",
  NZ: "NZ",
  OM: "OM",
  PA: "PA",
  PE: "PE",
  PF: "PF",
  PG: "PG",
  PH: "PH",
  PK: "PK",
  PL: "PL",
  PM: "PM",
  PN: "PN",
  PR: "PR",
  PS: "PS",
  PT: "PT",
  PW: "PW",
  PY: "PY",
  QA: "QA",
  RE: "RE",
  RO: "RO",
  RS: "RS",
  RU: "RU",
  RW: "RW",
  SA: "SA",
  SB: "SB",
  SC: "SC",
  SD: "SD",
  SE: "SE",
  SG: "SG",
  SH: "SH",
  SI: "SI",
  SJ: "SJ",
  SK: "SK",
  SL: "SL",
  SM: "SM",
  SN: "SN",
  SO: "SO",
  SR: "SR",
  SS: "SS",
  ST: "ST",
  SV: "SV",
  SX: "SX",
  SY: "SY",
  SZ: "SZ",
  TC: "TC",
  TD: "TD",
  TF: "TF",
  TG: "TG",
  TH: "TH",
  TJ: "TJ",
  TK: "TK",
  TL: "TL",
  TM: "TM",
  TN: "TN",
  TO: "TO",
  TR: "TR",
  TT: "TT",
  TV: "TV",
  TW: "TW",
  TZ: "TZ",
  UA: "UA",
  UG: "UG",
  UM: "UM",
  US: "US",
  UY: "UY",
  UZ: "UZ",
  VA: "VA",
  VC: "VC",
  VE: "VE",
  VG: "VG",
  VI: "VI",
  VN: "VN",
  VU: "VU",
  WF: "WF",
  WS: "WS",
  XK: "XK",
  YE: "YE",
  YT: "YT",
  ZA: "ZA",
  ZM: "ZM",
  ZW: "ZW",
} as const;

/**
 * @public
 */
export type CountryCode = (typeof CountryCode)[keyof typeof CountryCode];

/**
 * @public
 * <p>The configuration for inspecting IP addresses in an HTTP header that you specify, instead of using the IP address that's reported by the web request origin. Commonly, this is the X-Forwarded-For (XFF) header, but you can specify any header name. </p>
 *          <note>
 *             <p>If the specified header isn't present in the request, WAF doesn't apply the rule to the web request at all.</p>
 *          </note>
 *          <p>This configuration is used for <a>GeoMatchStatement</a> and <a>RateBasedStatement</a>. For <a>IPSetReferenceStatement</a>, use <a>IPSetForwardedIPConfig</a> instead. </p>
 *          <p>WAF only evaluates the first IP address found in the specified HTTP header.
 *       </p>
 */
export interface ForwardedIPConfig {
  /**
   * @public
   * <p>The name of the HTTP header to use for the IP address. For example, to use the X-Forwarded-For (XFF) header, set this to <code>X-Forwarded-For</code>.</p>
   *          <note>
   *             <p>If the specified header isn't present in the request, WAF doesn't apply the rule to the web request at all.</p>
   *          </note>
   */
  HeaderName: string | undefined;

  /**
   * @public
   * <p>The match status to assign to the web request if the request doesn't have a valid IP address in the specified position.</p>
   *          <note>
   *             <p>If the specified header isn't present in the request, WAF doesn't apply the rule to the web request at all.</p>
   *          </note>
   *          <p>You can specify the following fallback behaviors:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>MATCH</code> - Treat the web request as matching the rule statement. WAF applies the rule action to the request.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NO_MATCH</code> - Treat the web request as not matching the rule statement.</p>
   *             </li>
   *          </ul>
   */
  FallbackBehavior: FallbackBehavior | undefined;
}

/**
 * @public
 * <p>A rule statement that labels web requests by country and region and that matches against web requests based on country code. A geo match rule labels every request that it inspects regardless of whether it finds a match.</p>
 *          <ul>
 *             <li>
 *                <p>To manage requests only by country, you can use this statement by itself and specify the countries that you want to match against in the <code>CountryCodes</code> array. </p>
 *             </li>
 *             <li>
 *                <p>Otherwise, configure your geo match rule with Count action so that it only labels requests. Then, add one or more label match rules to run after the geo match rule and configure them to match against the geographic labels and handle the requests as needed. </p>
 *             </li>
 *          </ul>
 *          <p>WAF labels requests using the alpha-2 country and region codes from the International Organization for Standardization (ISO) 3166 standard. WAF determines the codes using either the IP address in the web request origin or, if you specify it, the address in the geo match <code>ForwardedIPConfig</code>. </p>
 *          <p>If you use the web request origin, the label formats are <code>awswaf:clientip:geo:region:<ISO country code>-<ISO region code></code> and <code>awswaf:clientip:geo:country:<ISO country code></code>.</p>
 *          <p>If you use a forwarded IP address, the label formats are <code>awswaf:forwardedip:geo:region:<ISO country code>-<ISO region code></code> and <code>awswaf:forwardedip:geo:country:<ISO country code></code>.</p>
 *          <p>For additional details, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-rule-statement-type-geo-match.html">Geographic match rule statement</a> in the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">WAF Developer Guide</a>. </p>
 */
export interface GeoMatchStatement {
  /**
   * @public
   * <p>An array of two-character country codes that you want to match against, for example, <code>[ "US", "CN" ]</code>, from
   *          the alpha-2 country ISO codes of the ISO 3166 international standard. </p>
   *          <p>When you use a geo match statement just for the region and country labels that it adds to requests, you still have to supply a country code for the rule to evaluate. In this case, you configure the rule to only count matching requests, but it will still generate logging and count metrics for any matches. You can reduce the logging and metrics that the rule produces by specifying a country that's unlikely to be a source of traffic to your site.</p>
   */
  CountryCodes?: CountryCode[];

  /**
   * @public
   * <p>The configuration for inspecting IP addresses in an HTTP header that you specify, instead of using the IP address that's reported by the web request origin. Commonly, this is the X-Forwarded-For (XFF) header, but you can specify any header name. </p>
   *          <note>
   *             <p>If the specified header isn't present in the request, WAF doesn't apply the rule to the web request at all.</p>
   *          </note>
   */
  ForwardedIPConfig?: ForwardedIPConfig;
}

/**
 * @public
 * @enum
 */
export const ForwardedIPPosition = {
  ANY: "ANY",
  FIRST: "FIRST",
  LAST: "LAST",
} as const;

/**
 * @public
 */
export type ForwardedIPPosition = (typeof ForwardedIPPosition)[keyof typeof ForwardedIPPosition];

/**
 * @public
 * <p>The configuration for inspecting IP addresses in an HTTP header that you specify, instead of using the IP address that's reported by the web request origin. Commonly, this is the X-Forwarded-For (XFF) header, but you can specify any header name. </p>
 *          <note>
 *             <p>If the specified header isn't present in the request, WAF doesn't apply the rule to the web request at all.</p>
 *          </note>
 *          <p>This configuration is used only for <a>IPSetReferenceStatement</a>. For <a>GeoMatchStatement</a> and <a>RateBasedStatement</a>, use <a>ForwardedIPConfig</a> instead. </p>
 */
export interface IPSetForwardedIPConfig {
  /**
   * @public
   * <p>The name of the HTTP header to use for the IP address. For example, to use the X-Forwarded-For (XFF) header, set this to <code>X-Forwarded-For</code>.</p>
   *          <note>
   *             <p>If the specified header isn't present in the request, WAF doesn't apply the rule to the web request at all.</p>
   *          </note>
   */
  HeaderName: string | undefined;

  /**
   * @public
   * <p>The match status to assign to the web request if the request doesn't have a valid IP address in the specified position.</p>
   *          <note>
   *             <p>If the specified header isn't present in the request, WAF doesn't apply the rule to the web request at all.</p>
   *          </note>
   *          <p>You can specify the following fallback behaviors:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>MATCH</code> - Treat the web request as matching the rule statement. WAF applies the rule action to the request.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NO_MATCH</code> - Treat the web request as not matching the rule statement.</p>
   *             </li>
   *          </ul>
   */
  FallbackBehavior: FallbackBehavior | undefined;

  /**
   * @public
   * <p>The position in the header to search for the IP address. The header can contain IP
   *          addresses of the original client and also of proxies. For example, the header value could
   *          be <code>10.1.1.1, 127.0.0.0, 10.10.10.10</code> where the first IP address identifies the
   *          original client and the rest identify proxies that the request went through. </p>
   *          <p>The options for this setting are the following: </p>
   *          <ul>
   *             <li>
   *                <p>FIRST - Inspect the first IP address in the list of IP addresses in the
   *                header. This is usually the client's original IP.</p>
   *             </li>
   *             <li>
   *                <p>LAST - Inspect the last IP address in the list of IP addresses in the
   *                header.</p>
   *             </li>
   *             <li>
   *                <p>ANY - Inspect all IP addresses in the header for a match. If the header
   *                contains more than 10 IP addresses, WAF inspects the last 10.</p>
   *             </li>
   *          </ul>
   */
  Position: ForwardedIPPosition | undefined;
}

/**
 * @public
 * <p>A rule statement used to detect web requests coming from particular IP addresses or address ranges. To use this, create an <a>IPSet</a> that specifies the addresses you want to detect, then use the ARN of that set in this statement. To create an IP set, see <a>CreateIPSet</a>.</p>
 *          <p>Each IP set rule statement references an IP set. You create and maintain the set independent of your rules. This allows you to use the single set in multiple rules. When you update the referenced set, WAF automatically updates all rules that reference it.</p>
 */
export interface IPSetReferenceStatement {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the <a>IPSet</a> that this statement
   *          references.</p>
   */
  ARN: string | undefined;

  /**
   * @public
   * <p>The configuration for inspecting IP addresses in an HTTP header that you specify, instead of using the IP address that's reported by the web request origin. Commonly, this is the X-Forwarded-For (XFF) header, but you can specify any header name. </p>
   *          <note>
   *             <p>If the specified header isn't present in the request, WAF doesn't apply the rule to the web request at all.</p>
   *          </note>
   */
  IPSetForwardedIPConfig?: IPSetForwardedIPConfig;
}

/**
 * @public
 * @enum
 */
export const LabelMatchScope = {
  LABEL: "LABEL",
  NAMESPACE: "NAMESPACE",
} as const;

/**
 * @public
 */
export type LabelMatchScope = (typeof LabelMatchScope)[keyof typeof LabelMatchScope];

/**
 * @public
 * <p>A rule statement to match against labels that have been added to the web request by rules that have already run in the web ACL. </p>
 *          <p>The label match statement provides the label or namespace string to search for. The label string can represent a part or all of the fully qualified label name that had been added to the web request. Fully qualified labels have a prefix, optional namespaces, and label name. The prefix identifies the rule group or web ACL context of the rule that added the label.  If you do not provide the fully qualified name in your label match string, WAF performs the search for labels that were added in the same context as the label match statement. </p>
 */
export interface LabelMatchStatement {
  /**
   * @public
   * <p>Specify whether you want to match using the label name or just the namespace. </p>
   */
  Scope: LabelMatchScope | undefined;

  /**
   * @public
   * <p>The string to match against. The setting you provide for this depends on the match
   *          statement's <code>Scope</code> setting: </p>
   *          <ul>
   *             <li>
   *                <p>If the <code>Scope</code> indicates <code>LABEL</code>, then this specification
   *                must include the name and can include any number of preceding namespace
   *                specifications and prefix up to providing the fully qualified label name. </p>
   *             </li>
   *             <li>
   *                <p>If the <code>Scope</code> indicates <code>NAMESPACE</code>, then this
   *                specification can include any number of contiguous namespace strings, and can include
   *                the entire label namespace prefix from the rule group or web ACL where the label
   *                originates.</p>
   *             </li>
   *          </ul>
   *          <p>Labels are case sensitive and components of a label must be separated by colon, for
   *          example <code>NS1:NS2:name</code>.</p>
   */
  Key: string | undefined;
}

/**
 * @public
 * <p>Specifies a single rule in a rule group whose action you want to override to <code>Count</code>. </p>
 *          <note>
 *             <p>Instead of this option, use <code>RuleActionOverrides</code>. It accepts any valid action setting, including <code>Count</code>.</p>
 *          </note>
 */
export interface ExcludedRule {
  /**
   * @public
   * <p>The name of the rule whose action you want to override to <code>Count</code>.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 * <p>The name of the field in the request payload that contains your customer's email. </p>
 *          <p>This data type is used in the <code>RequestInspectionACFP</code> data type. </p>
 */
export interface EmailField {
  /**
   * @public
   * <p>The name of the email field. </p>
   *          <p>How you specify this depends on the request inspection payload type.</p>
   *          <ul>
   *             <li>
   *                <p>For JSON payloads, specify the field name in JSON
   *                pointer syntax. For information about the JSON Pointer
   *                syntax, see the Internet Engineering Task Force (IETF)
   *                documentation <a href="https://tools.ietf.org/html/rfc6901">JavaScript
   *                	Object Notation (JSON) Pointer</a>. </p>
   *                <p>For example, for the JSON payload <code>\{ "form": \{ "email": "THE_EMAIL" \} \}</code>,
   *                  the email field specification is <code>/form/email</code>.</p>
   *             </li>
   *             <li>
   *                <p>For form encoded payload types, use the HTML form names.</p>
   *                <p>For example, for an HTML form with the input element
   *                    named <code>email1</code>, the email field specification is <code>email1</code>.</p>
   *             </li>
   *          </ul>
   */
  Identifier: string | undefined;
}

/**
 * @public
 * <p>The name of the field in the request payload that contains your customer's password. </p>
 *          <p>This data type is used in the <code>RequestInspection</code> and <code>RequestInspectionACFP</code> data types. </p>
 */
export interface PasswordField {
  /**
   * @public
   * <p>The name of the password field. </p>
   *          <p>How you specify this depends on the request inspection payload type.</p>
   *          <ul>
   *             <li>
   *                <p>For JSON payloads, specify the field name in JSON
   *                pointer syntax. For information about the JSON Pointer
   *                syntax, see the Internet Engineering Task Force (IETF)
   *                documentation <a href="https://tools.ietf.org/html/rfc6901">JavaScript
   *                	Object Notation (JSON) Pointer</a>. </p>
   *                <p>For example, for the JSON payload <code>\{ "form": \{ "password": "THE_PASSWORD" \} \}</code>,
   *                  the password field specification is <code>/form/password</code>.</p>
   *             </li>
   *             <li>
   *                <p>For form encoded payload types, use the HTML form names.</p>
   *                <p>For example, for an HTML form with the input element
   *                    named <code>password1</code>, the password field specification is <code>password1</code>.</p>
   *             </li>
   *          </ul>
   */
  Identifier: string | undefined;
}

/**
 * @public
 * @enum
 */
export const PayloadType = {
  FORM_ENCODED: "FORM_ENCODED",
  JSON: "JSON",
} as const;

/**
 * @public
 */
export type PayloadType = (typeof PayloadType)[keyof typeof PayloadType];

/**
 * @public
 * <p>The name of a field in the request payload that contains part or all of your customer's primary phone number. </p>
 *          <p>This data type is used in the <code>RequestInspectionACFP</code> data type. </p>
 */
export interface PhoneNumberField {
  /**
   * @public
   * <p>The name of a single primary phone number field. </p>
   *          <p>How you specify the phone number fields depends on the request inspection payload type.</p>
   *          <ul>
   *             <li>
   *                <p>For JSON payloads, specify the field identifiers in JSON
   *                pointer syntax. For information about the JSON Pointer
   *                syntax, see the Internet Engineering Task Force (IETF)
   *                documentation <a href="https://tools.ietf.org/html/rfc6901">JavaScript
   *                	Object Notation (JSON) Pointer</a>. </p>
   *                <p>For example, for the JSON payload <code>\{ "form": \{ "primaryphoneline1": "THE_PHONE1", "primaryphoneline2": "THE_PHONE2", "primaryphoneline3": "THE_PHONE3" \} \}</code>,
   *                  the phone number field identifiers are <code>/form/primaryphoneline1</code>, <code>/form/primaryphoneline2</code>, and <code>/form/primaryphoneline3</code>.</p>
   *             </li>
   *             <li>
   *                <p>For form encoded payload types, use the HTML form names.</p>
   *                <p>For example, for an HTML form with input elements
   *                    named <code>primaryphoneline1</code>, <code>primaryphoneline2</code>, and <code>primaryphoneline3</code>, the phone number field identifiers are <code>primaryphoneline1</code>, <code>primaryphoneline2</code>, and <code>primaryphoneline3</code>. </p>
   *             </li>
   *          </ul>
   */
  Identifier: string | undefined;
}

/**
 * @public
 * <p>The name of the field in the request payload that contains your customer's username. </p>
 *          <p>This data type is used in the <code>RequestInspection</code> and <code>RequestInspectionACFP</code> data types. </p>
 */
export interface UsernameField {
  /**
   * @public
   * <p>The name of the username field. </p>
   *          <p>How you specify this depends on the request inspection payload type.</p>
   *          <ul>
   *             <li>
   *                <p>For JSON payloads, specify the field name in JSON
   *                pointer syntax. For information about the JSON Pointer
   *                syntax, see the Internet Engineering Task Force (IETF)
   *                documentation <a href="https://tools.ietf.org/html/rfc6901">JavaScript
   *                	Object Notation (JSON) Pointer</a>. </p>
   *                <p>For example, for the JSON payload <code>\{ "form": \{ "username": "THE_USERNAME" \} \}</code>,
   *                  the username field specification is <code>/form/username</code>. </p>
   *             </li>
   *             <li>
   *                <p>For form encoded payload types, use the HTML form names.</p>
   *                <p>For example, for an HTML form with the input element
   *                    named <code>username1</code>, the username field specification is
   *                    <code>username1</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Identifier: string | undefined;
}

/**
 * @public
 * <p>The criteria for inspecting account creation requests, used by the ACFP rule group to validate and track account creation attempts.  </p>
 *          <p>This is part of the <code>AWSManagedRulesACFPRuleSet</code> configuration in <code>ManagedRuleGroupConfig</code>.</p>
 *          <p>In these settings, you specify how your application accepts account creation attempts
 *            by providing the request payload type and the names of the fields
 *            within the request body where the username, password, email, and primary address and phone number fields are provided. </p>
 */
export interface RequestInspectionACFP {
  /**
   * @public
   * <p>The payload type for your account creation endpoint, either JSON or form encoded.</p>
   */
  PayloadType: PayloadType | undefined;

  /**
   * @public
   * <p>The name of the field in the request payload that contains your customer's username. </p>
   *          <p>How you specify this depends on the request inspection payload type.</p>
   *          <ul>
   *             <li>
   *                <p>For JSON payloads, specify the field name in JSON
   *                pointer syntax. For information about the JSON Pointer
   *                syntax, see the Internet Engineering Task Force (IETF)
   *                documentation <a href="https://tools.ietf.org/html/rfc6901">JavaScript
   *                	Object Notation (JSON) Pointer</a>. </p>
   *                <p>For example, for the JSON payload <code>\{ "form": \{ "username": "THE_USERNAME" \} \}</code>,
   *                  the username field specification is <code>/form/username</code>. </p>
   *             </li>
   *             <li>
   *                <p>For form encoded payload types, use the HTML form names.</p>
   *                <p>For example, for an HTML form with the input element
   *                    named <code>username1</code>, the username field specification is
   *                    <code>username1</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  UsernameField?: UsernameField;

  /**
   * @public
   * <p>The name of the field in the request payload that contains your customer's password. </p>
   *          <p>How you specify this depends on the request inspection payload type.</p>
   *          <ul>
   *             <li>
   *                <p>For JSON payloads, specify the field name in JSON
   *                pointer syntax. For information about the JSON Pointer
   *                syntax, see the Internet Engineering Task Force (IETF)
   *                documentation <a href="https://tools.ietf.org/html/rfc6901">JavaScript
   *                	Object Notation (JSON) Pointer</a>. </p>
   *                <p>For example, for the JSON payload <code>\{ "form": \{ "password": "THE_PASSWORD" \} \}</code>,
   *                  the password field specification is <code>/form/password</code>.</p>
   *             </li>
   *             <li>
   *                <p>For form encoded payload types, use the HTML form names.</p>
   *                <p>For example, for an HTML form with the input element
   *                    named <code>password1</code>, the password field specification is <code>password1</code>.</p>
   *             </li>
   *          </ul>
   */
  PasswordField?: PasswordField;

  /**
   * @public
   * <p>The name of the field in the request payload that contains your customer's email. </p>
   *          <p>How you specify this depends on the request inspection payload type.</p>
   *          <ul>
   *             <li>
   *                <p>For JSON payloads, specify the field name in JSON
   *                pointer syntax. For information about the JSON Pointer
   *                syntax, see the Internet Engineering Task Force (IETF)
   *                documentation <a href="https://tools.ietf.org/html/rfc6901">JavaScript
   *                	Object Notation (JSON) Pointer</a>. </p>
   *                <p>For example, for the JSON payload <code>\{ "form": \{ "email": "THE_EMAIL" \} \}</code>,
   *                  the email field specification is <code>/form/email</code>.</p>
   *             </li>
   *             <li>
   *                <p>For form encoded payload types, use the HTML form names.</p>
   *                <p>For example, for an HTML form with the input element
   *                    named <code>email1</code>, the email field specification is <code>email1</code>.</p>
   *             </li>
   *          </ul>
   */
  EmailField?: EmailField;

  /**
   * @public
   * <p>The names of the fields in the request payload that contain your customer's primary phone number. </p>
   *          <p>Order the phone number fields in the array exactly as they are ordered in the request payload. </p>
   *          <p>How you specify the phone number fields depends on the request inspection payload type.</p>
   *          <ul>
   *             <li>
   *                <p>For JSON payloads, specify the field identifiers in JSON
   *                pointer syntax. For information about the JSON Pointer
   *                syntax, see the Internet Engineering Task Force (IETF)
   *                documentation <a href="https://tools.ietf.org/html/rfc6901">JavaScript
   *                	Object Notation (JSON) Pointer</a>. </p>
   *                <p>For example, for the JSON payload <code>\{ "form": \{ "primaryphoneline1": "THE_PHONE1", "primaryphoneline2": "THE_PHONE2", "primaryphoneline3": "THE_PHONE3" \} \}</code>,
   *                  the phone number field identifiers are <code>/form/primaryphoneline1</code>, <code>/form/primaryphoneline2</code>, and <code>/form/primaryphoneline3</code>.</p>
   *             </li>
   *             <li>
   *                <p>For form encoded payload types, use the HTML form names.</p>
   *                <p>For example, for an HTML form with input elements
   *                    named <code>primaryphoneline1</code>, <code>primaryphoneline2</code>, and <code>primaryphoneline3</code>, the phone number field identifiers are <code>primaryphoneline1</code>, <code>primaryphoneline2</code>, and <code>primaryphoneline3</code>. </p>
   *             </li>
   *          </ul>
   */
  PhoneNumberFields?: PhoneNumberField[];

  /**
   * @public
   * <p>The names of the fields in the request payload that contain your customer's primary physical address. </p>
   *          <p>Order the address fields in the array exactly as they are ordered in the request payload. </p>
   *          <p>How you specify the address fields depends on the request inspection payload type.</p>
   *          <ul>
   *             <li>
   *                <p>For JSON payloads, specify the field identifiers in JSON
   *                pointer syntax. For information about the JSON Pointer
   *                syntax, see the Internet Engineering Task Force (IETF)
   *                documentation <a href="https://tools.ietf.org/html/rfc6901">JavaScript
   *                	Object Notation (JSON) Pointer</a>. </p>
   *                <p>For example, for the JSON payload <code>\{ "form": \{ "primaryaddressline1": "THE_ADDRESS1", "primaryaddressline2": "THE_ADDRESS2", "primaryaddressline3": "THE_ADDRESS3" \} \}</code>,
   *                  the address field idenfiers are <code>/form/primaryaddressline1</code>, <code>/form/primaryaddressline2</code>, and <code>/form/primaryaddressline3</code>.</p>
   *             </li>
   *             <li>
   *                <p>For form encoded payload types, use the HTML form names.</p>
   *                <p>For example, for an HTML form with input elements
   *                    named <code>primaryaddressline1</code>, <code>primaryaddressline2</code>, and <code>primaryaddressline3</code>, the address fields identifiers are <code>primaryaddressline1</code>, <code>primaryaddressline2</code>, and <code>primaryaddressline3</code>. </p>
   *             </li>
   *          </ul>
   */
  AddressFields?: AddressField[];
}

/**
 * @public
 * <p>Configures inspection of the response body. WAF can inspect the first 65,536 bytes (64 KB) of the response body.
 *            This is part of the <code>ResponseInspection</code> configuration for <code>AWSManagedRulesATPRuleSet</code> and  <code>AWSManagedRulesACFPRuleSet</code>. </p>
 *          <note>
 *             <p>Response inspection is available only in web ACLs that protect Amazon CloudFront distributions.</p>
 *          </note>
 */
export interface ResponseInspectionBodyContains {
  /**
   * @public
   * <p>Strings in the body of the response that indicate a successful login or account creation attempt. To be counted as a success, the string can be anywhere in the body and must be an exact match, including case. Each string must be unique among the success and failure strings. </p>
   *          <p>JSON examples: <code>"SuccessStrings": [ "Login successful" ]</code> and <code>"SuccessStrings": [ "Account creation successful", "Welcome to our site!" ]</code>
   *          </p>
   */
  SuccessStrings: string[] | undefined;

  /**
   * @public
   * <p>Strings in the body of the response that indicate a failed login or account creation attempt. To be counted as a failure, the string can be anywhere in the body and must be an exact match, including case. Each string must be unique among the success and failure strings. </p>
   *          <p>JSON example: <code>"FailureStrings": [ "Request failed" ]</code>
   *          </p>
   */
  FailureStrings: string[] | undefined;
}

/**
 * @public
 * <p>Configures inspection of the response header.
 *            This is part of the <code>ResponseInspection</code> configuration for <code>AWSManagedRulesATPRuleSet</code> and  <code>AWSManagedRulesACFPRuleSet</code>. </p>
 *          <note>
 *             <p>Response inspection is available only in web ACLs that protect Amazon CloudFront distributions.</p>
 *          </note>
 */
export interface ResponseInspectionHeader {
  /**
   * @public
   * <p>The name of the header to match against. The name must be an exact match, including case.</p>
   *          <p>JSON example: <code>"Name": [ "RequestResult" ]</code>
   *          </p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>Values in the response header with the specified name that indicate a successful login or account creation attempt. To be counted as a success, the value must be an exact match, including case. Each value must be unique among the success and failure values. </p>
   *          <p>JSON examples: <code>"SuccessValues": [ "LoginPassed", "Successful login" ]</code> and <code>"SuccessValues": [ "AccountCreated", "Successful account creation" ]</code>
   *          </p>
   */
  SuccessValues: string[] | undefined;

  /**
   * @public
   * <p>Values in the response header with the specified name that indicate a failed login or account creation attempt. To be counted as a failure, the value must be an exact match, including case. Each value must be unique among the success and failure values. </p>
   *          <p>JSON examples: <code>"FailureValues": [ "LoginFailed", "Failed login" ]</code> and <code>"FailureValues": [ "AccountCreationFailed" ]</code>
   *          </p>
   */
  FailureValues: string[] | undefined;
}

/**
 * @public
 * <p>Configures inspection of the response JSON. WAF can inspect the first 65,536 bytes (64 KB) of the response JSON.
 *            This is part of the <code>ResponseInspection</code> configuration for <code>AWSManagedRulesATPRuleSet</code> and  <code>AWSManagedRulesACFPRuleSet</code>. </p>
 *          <note>
 *             <p>Response inspection is available only in web ACLs that protect Amazon CloudFront distributions.</p>
 *          </note>
 */
export interface ResponseInspectionJson {
  /**
   * @public
   * <p>The identifier for the value to match against in the JSON. The identifier must be an exact match, including case.</p>
   *          <p>JSON examples: <code>"Identifier": [ "/login/success" ]</code> and <code>"Identifier": [ "/sign-up/success" ]</code>
   *          </p>
   */
  Identifier: string | undefined;

  /**
   * @public
   * <p>Values for the specified identifier in the response JSON that indicate a successful login or account creation attempt. To be counted as a success, the value must be an exact match, including case. Each value must be unique among the success and failure values. </p>
   *          <p>JSON example: <code>"SuccessValues": [ "True", "Succeeded" ]</code>
   *          </p>
   */
  SuccessValues: string[] | undefined;

  /**
   * @public
   * <p>Values for the specified identifier in the response JSON that indicate a failed login or account creation attempt. To be counted as a failure, the value must be an exact match, including case. Each value must be unique among the success and failure values. </p>
   *          <p>JSON example: <code>"FailureValues": [ "False", "Failed" ]</code>
   *          </p>
   */
  FailureValues: string[] | undefined;
}

/**
 * @public
 * <p>Configures inspection of the response status code.
 *            This is part of the <code>ResponseInspection</code> configuration for <code>AWSManagedRulesATPRuleSet</code> and  <code>AWSManagedRulesACFPRuleSet</code>. </p>
 *          <note>
 *             <p>Response inspection is available only in web ACLs that protect Amazon CloudFront distributions.</p>
 *          </note>
 */
export interface ResponseInspectionStatusCode {
  /**
   * @public
   * <p>Status codes in the response that indicate a successful login or account creation attempt. To be counted as a success, the response status code must match one of these. Each code must be unique among the success and failure status codes. </p>
   *          <p>JSON example: <code>"SuccessCodes": [ 200, 201 ]</code>
   *          </p>
   */
  SuccessCodes: number[] | undefined;

  /**
   * @public
   * <p>Status codes in the response that indicate a failed login or account creation attempt. To be counted as a failure, the response status code must match one of these. Each code must be unique among the success and failure status codes. </p>
   *          <p>JSON example: <code>"FailureCodes": [ 400, 404 ]</code>
   *          </p>
   */
  FailureCodes: number[] | undefined;
}

/**
 * @public
 * <p>The criteria for inspecting responses to login requests and account creation requests, used by the ATP and ACFP rule groups to track login and account creation success and failure rates. </p>
 *          <note>
 *             <p>Response inspection is available only in web ACLs that protect Amazon CloudFront distributions.</p>
 *          </note>
 *          <p>The rule groups evaluates the responses that your protected resources send back to client login and account creation attempts, keeping count of successful and failed attempts from each IP address and client session. Using this information, the rule group labels
 *                and mitigates requests from client sessions and IP addresses with too much suspicious activity in a short amount of time. </p>
 *          <p>This is part of the <code>AWSManagedRulesATPRuleSet</code> and <code>AWSManagedRulesACFPRuleSet</code> configurations in <code>ManagedRuleGroupConfig</code>.</p>
 *          <p>Enable response inspection by configuring exactly one component of the response to inspect, for example, <code>Header</code> or <code>StatusCode</code>. You can't configure more than one component for inspection. If you don't configure any of the response inspection options, response inspection is disabled. </p>
 */
export interface ResponseInspection {
  /**
   * @public
   * <p>Configures inspection of the response status code for success and failure indicators. </p>
   */
  StatusCode?: ResponseInspectionStatusCode;

  /**
   * @public
   * <p>Configures inspection of the response header for success and failure indicators. </p>
   */
  Header?: ResponseInspectionHeader;

  /**
   * @public
   * <p>Configures inspection of the response body for success and failure indicators. WAF can inspect the first 65,536 bytes (64 KB) of the response body. </p>
   */
  BodyContains?: ResponseInspectionBodyContains;

  /**
   * @public
   * <p>Configures inspection of the response JSON for success and failure indicators. WAF can inspect the first 65,536 bytes (64 KB) of the response JSON. </p>
   */
  Json?: ResponseInspectionJson;
}

/**
 * @public
 * <p>Details for your use of the account creation fraud prevention managed rule group, <code>AWSManagedRulesACFPRuleSet</code>. This configuration is used in <code>ManagedRuleGroupConfig</code>. </p>
 */
export interface AWSManagedRulesACFPRuleSet {
  /**
   * @public
   * <p>The path of the account creation endpoint for your application. This is the page on your website that accepts the completed registration form for a new user. This page must accept <code>POST</code> requests.</p>
   *          <p>For example, for the URL <code>https://example.com/web/newaccount</code>, you would provide
   * 	the path <code>/web/newaccount</code>. Account creation page paths that
   * 	start with the path that you provide are considered a match. For example
   * 	<code>/web/newaccount</code> matches the account creation paths
   * 		<code>/web/newaccount</code>, <code>/web/newaccount/</code>,
   * 		<code>/web/newaccountPage</code>, and
   * 		<code>/web/newaccount/thisPage</code>, but doesn't match the path
   * 		<code>/home/web/newaccount</code> or
   * 		<code>/website/newaccount</code>. </p>
   */
  CreationPath: string | undefined;

  /**
   * @public
   * <p>The path of the account registration endpoint for your application. This is the page on your website that presents the registration form to new users. </p>
   *          <note>
   *             <p>This page must accept <code>GET</code> text/html requests.</p>
   *          </note>
   *          <p>For example, for the URL <code>https://example.com/web/registration</code>, you would provide
   * 	the path <code>/web/registration</code>. Registration page paths that
   * 	start with the path that you provide are considered a match. For example
   * 	    <code>/web/registration</code> matches the registration paths
   * 	    <code>/web/registration</code>, <code>/web/registration/</code>,
   * 	    <code>/web/registrationPage</code>, and
   * 	    <code>/web/registration/thisPage</code>, but doesn't match the path
   * 	    <code>/home/web/registration</code> or
   * 	    <code>/website/registration</code>. </p>
   */
  RegistrationPagePath: string | undefined;

  /**
   * @public
   * <p>The criteria for inspecting account creation requests, used by the ACFP rule group to validate and track account creation attempts.  </p>
   */
  RequestInspection: RequestInspectionACFP | undefined;

  /**
   * @public
   * <p>The criteria for inspecting responses to account creation requests, used by the ACFP rule group to track account creation success rates. </p>
   *          <note>
   *             <p>Response inspection is available only in web ACLs that protect Amazon CloudFront distributions.</p>
   *          </note>
   *          <p>The ACFP rule group evaluates the responses that your protected resources send back to client account creation attempts, keeping count of successful and failed attempts from each IP address and client session. Using this information, the rule group labels
   *                and mitigates requests from client sessions and IP addresses that have had too many successful account creation attempts in a short amount of time. </p>
   */
  ResponseInspection?: ResponseInspection;

  /**
   * @public
   * <p>Allow the use of regular expressions in the registration page path and the account creation path. </p>
   */
  EnableRegexInPath?: boolean;
}

/**
 * @public
 * <p>The criteria for inspecting login requests, used by the ATP rule group to validate credentials usage.  </p>
 *          <p>This is part of the <code>AWSManagedRulesATPRuleSet</code> configuration in <code>ManagedRuleGroupConfig</code>.</p>
 *          <p>In these settings, you specify how your application accepts login attempts
 *            by providing the request payload type and the names of the fields
 *            within the request body where the username and password are provided. </p>
 */
export interface RequestInspection {
  /**
   * @public
   * <p>The payload type for your login endpoint, either JSON or form encoded.</p>
   */
  PayloadType: PayloadType | undefined;

  /**
   * @public
   * <p>The name of the field in the request payload that contains your customer's username. </p>
   *          <p>How you specify this depends on the request inspection payload type.</p>
   *          <ul>
   *             <li>
   *                <p>For JSON payloads, specify the field name in JSON
   *                pointer syntax. For information about the JSON Pointer
   *                syntax, see the Internet Engineering Task Force (IETF)
   *                documentation <a href="https://tools.ietf.org/html/rfc6901">JavaScript
   *                	Object Notation (JSON) Pointer</a>. </p>
   *                <p>For example, for the JSON payload <code>\{ "form": \{ "username": "THE_USERNAME" \} \}</code>,
   *                  the username field specification is <code>/form/username</code>. </p>
   *             </li>
   *             <li>
   *                <p>For form encoded payload types, use the HTML form names.</p>
   *                <p>For example, for an HTML form with the input element
   *                    named <code>username1</code>, the username field specification is
   *                    <code>username1</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  UsernameField: UsernameField | undefined;

  /**
   * @public
   * <p>The name of the field in the request payload that contains your customer's password. </p>
   *          <p>How you specify this depends on the request inspection payload type.</p>
   *          <ul>
   *             <li>
   *                <p>For JSON payloads, specify the field name in JSON
   *                pointer syntax. For information about the JSON Pointer
   *                syntax, see the Internet Engineering Task Force (IETF)
   *                documentation <a href="https://tools.ietf.org/html/rfc6901">JavaScript
   *                	Object Notation (JSON) Pointer</a>. </p>
   *                <p>For example, for the JSON payload <code>\{ "form": \{ "password": "THE_PASSWORD" \} \}</code>,
   *                  the password field specification is <code>/form/password</code>.</p>
   *             </li>
   *             <li>
   *                <p>For form encoded payload types, use the HTML form names.</p>
   *                <p>For example, for an HTML form with the input element
   *                    named <code>password1</code>, the password field specification is <code>password1</code>.</p>
   *             </li>
   *          </ul>
   */
  PasswordField: PasswordField | undefined;
}

/**
 * @public
 * <p>Details for your use of the account takeover prevention managed rule group, <code>AWSManagedRulesATPRuleSet</code>. This configuration is used in <code>ManagedRuleGroupConfig</code>. </p>
 */
export interface AWSManagedRulesATPRuleSet {
  /**
   * @public
   * <p>The path of the login endpoint for your application. For example, for the URL
   *             <code>https://example.com/web/login</code>, you would provide the path
   *             <code>/web/login</code>. Login paths that start with the path that you provide are considered a match. For example <code>/web/login</code> matches the login paths <code>/web/login</code>, <code>/web/login/</code>, <code>/web/loginPage</code>, and <code>/web/login/thisPage</code>, but doesn't match the login path <code>/home/web/login</code> or <code>/website/login</code>.</p>
   *          <p>The rule group inspects only HTTP <code>POST</code> requests to your specified login endpoint.</p>
   */
  LoginPath: string | undefined;

  /**
   * @public
   * <p>The criteria for inspecting login requests, used by the ATP rule group to validate credentials usage.  </p>
   */
  RequestInspection?: RequestInspection;

  /**
   * @public
   * <p>The criteria for inspecting responses to login requests, used by the ATP rule group to track login failure rates. </p>
   *          <note>
   *             <p>Response inspection is available only in web ACLs that protect Amazon CloudFront distributions.</p>
   *          </note>
   *          <p>The ATP rule group evaluates the responses that your protected resources send back to client login attempts, keeping count of successful and failed attempts for each IP address and client session. Using this information, the rule group labels
   *                and mitigates requests from client sessions and IP addresses that have had too many failed login attempts in a short amount of time. </p>
   */
  ResponseInspection?: ResponseInspection;

  /**
   * @public
   * <p>Allow the use of regular expressions in the login page path. </p>
   */
  EnableRegexInPath?: boolean;
}

/**
 * @public
 * @enum
 */
export const InspectionLevel = {
  COMMON: "COMMON",
  TARGETED: "TARGETED",
} as const;

/**
 * @public
 */
export type InspectionLevel = (typeof InspectionLevel)[keyof typeof InspectionLevel];

/**
 * @public
 * <p>Details for your use of the Bot Control managed rule group, <code>AWSManagedRulesBotControlRuleSet</code>. This configuration is used in <code>ManagedRuleGroupConfig</code>. </p>
 */
export interface AWSManagedRulesBotControlRuleSet {
  /**
   * @public
   * <p>The inspection level to use for the Bot Control rule group. The common level is the least expensive. The
   *            targeted level includes all common level rules and adds rules with more advanced inspection criteria. For
   *    details, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/aws-managed-rule-groups-bot.html">WAF Bot Control rule group</a>
   *                in the <i>WAF Developer Guide</i>.</p>
   */
  InspectionLevel: InspectionLevel | undefined;

  /**
   * @public
   * <p>Applies only to the targeted inspection level. </p>
   *          <p>Determines whether to use machine learning (ML) to
   *       analyze your web traffic for bot-related activity. Machine learning is required for the Bot Control rules <code>TGT_ML_CoordinatedActivityLow</code> and <code>TGT_ML_CoordinatedActivityMedium</code>, which
   * inspect for anomalous behavior that might indicate distributed, coordinated bot activity.</p>
   *          <p>For more information about this choice, see the listing for these rules in the table at <a href="https://docs.aws.amazon.com/waf/latest/developerguide/aws-managed-rule-groups-bot.html#aws-managed-rule-groups-bot-rules">Bot Control rules listing</a> in the
   *             <i>WAF Developer Guide</i>.</p>
   *          <p>Default: <code>TRUE</code>
   *          </p>
   */
  EnableMachineLearning?: boolean;
}

/**
 * @public
 * <p>Additional information that's used by a managed rule group. Many managed rule groups don't require this.</p>
 *          <p>The rule groups used for intelligent threat mitigation require additional configuration: </p>
 *          <ul>
 *             <li>
 *                <p>Use the <code>AWSManagedRulesACFPRuleSet</code> configuration object to configure the account creation fraud prevention managed rule group. The configuration includes the registration and sign-up pages of your application and the locations in the account creation request payload of data, such as the user email and phone number fields. </p>
 *             </li>
 *             <li>
 *                <p>Use the <code>AWSManagedRulesATPRuleSet</code> configuration object to configure the account takeover prevention managed rule group. The configuration includes the sign-in page of your application and the locations in the login request payload of data such as the username and password. </p>
 *             </li>
 *             <li>
 *                <p>Use the <code>AWSManagedRulesBotControlRuleSet</code> configuration object to configure the
 *        protection level that you want the Bot Control rule group to use. </p>
 *             </li>
 *          </ul>
 *          <p>For example specifications, see the examples section of <a>CreateWebACL</a>.</p>
 */
export interface ManagedRuleGroupConfig {
  /**
   * @public
   * @deprecated
   *
   * <note>
   *             <p>Instead of this setting, provide your configuration under <code>AWSManagedRulesATPRuleSet</code>. </p>
   *          </note>
   */
  LoginPath?: string;

  /**
   * @public
   * @deprecated
   *
   * <note>
   *             <p>Instead of this setting, provide your configuration under the request inspection configuration for <code>AWSManagedRulesATPRuleSet</code> or <code>AWSManagedRulesACFPRuleSet</code>. </p>
   *          </note>
   */
  PayloadType?: PayloadType;

  /**
   * @public
   * @deprecated
   *
   * <note>
   *             <p>Instead of this setting, provide your configuration under the request inspection configuration for <code>AWSManagedRulesATPRuleSet</code> or <code>AWSManagedRulesACFPRuleSet</code>. </p>
   *          </note>
   */
  UsernameField?: UsernameField;

  /**
   * @public
   * @deprecated
   *
   * <note>
   *             <p>Instead of this setting, provide your configuration under the request inspection configuration for <code>AWSManagedRulesATPRuleSet</code> or <code>AWSManagedRulesACFPRuleSet</code>. </p>
   *          </note>
   */
  PasswordField?: PasswordField;

  /**
   * @public
   * <p>Additional configuration for using the Bot Control managed rule group. Use this to specify the
   *        inspection level that you want to use. For information
   *        about using the Bot Control managed rule group, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/aws-managed-rule-groups-bot.html">WAF Bot Control rule group</a>
   *                and <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-bot-control.html">WAF Bot Control</a>
   *                in the <i>WAF Developer Guide</i>.</p>
   */
  AWSManagedRulesBotControlRuleSet?: AWSManagedRulesBotControlRuleSet;

  /**
   * @public
   * <p>Additional configuration for using the account takeover prevention (ATP) managed rule group, <code>AWSManagedRulesATPRuleSet</code>.
   *        Use this to provide login request information to the rule group. For web ACLs that protect CloudFront distributions, use this to also provide
   *            the information about how your distribution responds to login requests. </p>
   *          <p>This configuration replaces the individual configuration fields in <code>ManagedRuleGroupConfig</code> and provides additional feature configuration. </p>
   *          <p>For information
   *        about using the ATP managed rule group, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/aws-managed-rule-groups-atp.html">WAF Fraud Control account takeover prevention (ATP) rule group</a>
   *                and <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-atp.html">WAF Fraud Control account takeover prevention (ATP)</a>
   *                in the <i>WAF Developer Guide</i>.</p>
   */
  AWSManagedRulesATPRuleSet?: AWSManagedRulesATPRuleSet;

  /**
   * @public
   * <p>Additional configuration for using the account creation fraud prevention (ACFP) managed rule group, <code>AWSManagedRulesACFPRuleSet</code>.
   *        Use this to provide account creation request information to the rule group. For web ACLs that protect CloudFront distributions, use this to also provide
   *            the information about how your distribution responds to account creation requests. </p>
   *          <p>For information
   *        about using the ACFP managed rule group, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/aws-managed-rule-groups-acfp.html">WAF Fraud Control account creation fraud prevention (ACFP) rule group</a>
   *                and <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-acfp.html">WAF Fraud Control account creation fraud prevention (ACFP)</a>
   *                in the <i>WAF Developer Guide</i>.</p>
   */
  AWSManagedRulesACFPRuleSet?: AWSManagedRulesACFPRuleSet;
}

/**
 * @public
 * <p>A custom response to send to the client. You can define a custom response for rule
 *          actions and default web ACL actions that are set to <a>BlockAction</a>. </p>
 *          <p>For information about customizing web requests and responses,
 *            see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html">Customizing web requests and responses in WAF</a>
 *     in the <i>WAF Developer Guide</i>. </p>
 */
export interface CustomResponse {
  /**
   * @public
   * <p>The HTTP status code to return to the client. </p>
   *          <p>For a list of status codes that you can use in your custom responses, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/customizing-the-response-status-codes.html">Supported status codes for custom response</a>
   *      in the <i>WAF Developer Guide</i>. </p>
   */
  ResponseCode: number | undefined;

  /**
   * @public
   * <p>References the response body that you want WAF to return to the web request
   *          client. You can define a custom response for a rule action or a default web ACL action that
   *          is set to block. To do this, you first define the response body key and value in the
   *             <code>CustomResponseBodies</code> setting for the <a>WebACL</a> or <a>RuleGroup</a> where you want to use it. Then, in the rule action or web ACL
   *          default action <code>BlockAction</code> setting, you reference the response body using this
   *          key. </p>
   */
  CustomResponseBodyKey?: string;

  /**
   * @public
   * <p>The HTTP headers to use in the response. You can specify any header name except for <code>content-type</code>. Duplicate header names are not allowed.</p>
   *          <p>For information about the limits on count and size for custom request and response settings, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/limits.html">WAF quotas</a>
   *      in the <i>WAF Developer Guide</i>. </p>
   */
  ResponseHeaders?: CustomHTTPHeader[];
}

/**
 * @public
 * <p>Specifies that WAF should block the request and optionally defines additional
 *          custom handling for the response to the web request.</p>
 *          <p>This is used in the context of other settings, for example to specify values for <a>RuleAction</a> and web ACL <a>DefaultAction</a>. </p>
 */
export interface BlockAction {
  /**
   * @public
   * <p>Defines a custom response for the web request.</p>
   *          <p>For information about customizing web requests and responses,
   *            see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html">Customizing web requests and responses in WAF</a>
   *     in the <i>WAF Developer Guide</i>. </p>
   */
  CustomResponse?: CustomResponse;
}

/**
 * @public
 * <p>Specifies that WAF should run a <code>CAPTCHA</code> check against the request: </p>
 *          <ul>
 *             <li>
 *                <p>If the request includes a valid, unexpired <code>CAPTCHA</code> token,
 *                WAF applies any custom request handling and labels that you've configured and then allows the web request inspection to
 *                proceed to the next rule, similar to a <code>CountAction</code>. </p>
 *             </li>
 *             <li>
 *                <p>If the request doesn't include a valid, unexpired token, WAF
 *                    discontinues the web ACL evaluation of the request and blocks it from going to its intended destination.</p>
 *                <p>WAF generates a response that it sends back to the client, which includes the following: </p>
 *                <ul>
 *                   <li>
 *                      <p>The header <code>x-amzn-waf-action</code> with a value of <code>captcha</code>. </p>
 *                   </li>
 *                   <li>
 *                      <p>The HTTP status code <code>405 Method Not Allowed</code>. </p>
 *                   </li>
 *                   <li>
 *                      <p>If the request contains an <code>Accept</code> header with a value of <code>text/html</code>, the response includes a <code>CAPTCHA</code> JavaScript page interstitial. </p>
 *                   </li>
 *                </ul>
 *             </li>
 *          </ul>
 *          <p>You can configure the expiration time
 *                in the <code>CaptchaConfig</code>
 *             <code>ImmunityTimeProperty</code> setting at the rule and web ACL level. The rule setting overrides the web ACL setting. </p>
 *          <p>This action option is available for rules. It isn't available for web ACL default actions. </p>
 */
export interface CaptchaAction {
  /**
   * @public
   * <p>Defines custom handling for the web request, used when the <code>CAPTCHA</code> inspection determines that the request's token is valid and unexpired.</p>
   *          <p>For information about customizing web requests and responses,
   *            see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html">Customizing web requests and responses in WAF</a>
   *     in the <i>WAF Developer Guide</i>. </p>
   */
  CustomRequestHandling?: CustomRequestHandling;
}

/**
 * @public
 * <p>Specifies that WAF should run a <code>Challenge</code> check against the request to verify that the request is coming from a legitimate client session: </p>
 *          <ul>
 *             <li>
 *                <p>If the request includes a valid, unexpired challenge token,
 *                WAF applies any custom request handling and labels that you've configured and then allows the web request inspection to
 *                proceed to the next rule, similar to a <code>CountAction</code>. </p>
 *             </li>
 *             <li>
 *                <p>If the request doesn't include a valid, unexpired challenge token, WAF
 *                    discontinues the web ACL evaluation of the request and blocks it from going to its intended destination.</p>
 *                <p>WAF then generates a challenge response that it sends back to the client, which includes the following: </p>
 *                <ul>
 *                   <li>
 *                      <p>The header <code>x-amzn-waf-action</code> with a value of <code>challenge</code>. </p>
 *                   </li>
 *                   <li>
 *                      <p>The HTTP status code <code>202 Request Accepted</code>. </p>
 *                   </li>
 *                   <li>
 *                      <p>If the request contains an <code>Accept</code> header with a value of <code>text/html</code>, the response includes a JavaScript page interstitial with a challenge script. </p>
 *                   </li>
 *                </ul>
 *                <p>Challenges run silent browser interrogations in the background, and don't generally affect the end user experience. </p>
 *                <p>A challenge enforces token acquisition using an interstitial JavaScript challenge that inspects the client session for legitimate behavior. The challenge blocks bots or at least increases the cost of operating sophisticated bots. </p>
 *                <p>After the client session successfully responds to
 *            the challenge, it receives a new token from WAF, which the challenge script uses to resubmit the original request. </p>
 *             </li>
 *          </ul>
 *          <p>You can configure the expiration time
 *          in the <code>ChallengeConfig</code>
 *             <code>ImmunityTimeProperty</code> setting at the rule and web ACL level. The rule setting overrides the web ACL setting. </p>
 *          <p>This action option is available for rules. It isn't available for web ACL default actions. </p>
 */
export interface ChallengeAction {
  /**
   * @public
   * <p>Defines custom handling for the web request, used when the challenge inspection determines that the request's token is valid and unexpired.</p>
   *          <p>For information about customizing web requests and responses,
   *            see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html">Customizing web requests and responses in WAF</a>
   *     in the <i>WAF Developer Guide</i>. </p>
   */
  CustomRequestHandling?: CustomRequestHandling;
}

/**
 * @public
 * <p>Specifies that WAF should count the request. Optionally defines additional custom
 *          handling for the request.</p>
 *          <p>This is used in the context of other settings, for example to specify values for <a>RuleAction</a> and web ACL <a>DefaultAction</a>. </p>
 */
export interface CountAction {
  /**
   * @public
   * <p>Defines custom handling for the web request.</p>
   *          <p>For information about customizing web requests and responses,
   *            see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html">Customizing web requests and responses in WAF</a>
   *     in the <i>WAF Developer Guide</i>. </p>
   */
  CustomRequestHandling?: CustomRequestHandling;
}

/**
 * @public
 * <p>The action that WAF should take on a web request when it matches a rule's
 *          statement. Settings at the web ACL level can override the rule action setting. </p>
 */
export interface RuleAction {
  /**
   * @public
   * <p>Instructs WAF to block the web request.</p>
   */
  Block?: BlockAction;

  /**
   * @public
   * <p>Instructs WAF to allow the web request.</p>
   */
  Allow?: AllowAction;

  /**
   * @public
   * <p>Instructs WAF to count the web request and then continue evaluating the request using the remaining rules in the web ACL.</p>
   */
  Count?: CountAction;

  /**
   * @public
   * <p>Instructs WAF to run a <code>CAPTCHA</code> check against the web request.</p>
   */
  Captcha?: CaptchaAction;

  /**
   * @public
   * <p>Instructs WAF to run a <code>Challenge</code> check against the web request.</p>
   */
  Challenge?: ChallengeAction;
}

/**
 * @public
 * <p>Action setting to use in the place of a rule action that is configured inside the rule group. You specify one override for each rule whose action you want to change. </p>
 *          <p>You can use overrides for testing, for example you can override all of rule actions to <code>Count</code> and then monitor the resulting count metrics to understand how the rule group would handle your web traffic. You can also permanently override some or all actions, to modify how the rule group manages your web traffic.</p>
 */
export interface RuleActionOverride {
  /**
   * @public
   * <p>The name of the rule to override.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The override action to use, in place of the configured action of the rule in the rule group. </p>
   */
  ActionToUse: RuleAction | undefined;
}

/**
 * @public
 * @enum
 */
export const RateBasedStatementAggregateKeyType = {
  CONSTANT: "CONSTANT",
  CUSTOM_KEYS: "CUSTOM_KEYS",
  FORWARDED_IP: "FORWARDED_IP",
  IP: "IP",
} as const;

/**
 * @public
 */
export type RateBasedStatementAggregateKeyType =
  (typeof RateBasedStatementAggregateKeyType)[keyof typeof RateBasedStatementAggregateKeyType];

/**
 * @public
 * <p>Specifies a cookie as an aggregate key for a rate-based rule. Each distinct value in the cookie contributes to the aggregation instance. If you use a single
 *     cookie as your custom key, then each value fully defines an aggregation instance.  </p>
 */
export interface RateLimitCookie {
  /**
   * @public
   * <p>The name of the cookie to use. </p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection. Text transformations are used in rule match statements, to transform the <code>FieldToMatch</code> request component before inspecting it, and they're used in rate-based rule statements, to transform request components before using them as custom aggregation keys. If you specify one or more transformations to apply, WAF performs all transformations on the specified content, starting from the lowest priority setting, and then uses the transformed component contents. </p>
   */
  TextTransformations: TextTransformation[] | undefined;
}

/**
 * @public
 * <p>Specifies the first IP address in an HTTP header as an aggregate key for a rate-based rule. Each distinct forwarded IP address contributes to the aggregation instance.</p>
 *          <p>This setting is used only in the <code>RateBasedStatementCustomKey</code> specification of a rate-based rule statement.
 *        When you specify an IP or forwarded IP in the custom key settings, you must also specify at least one other key to use.
 *        You can aggregate on only the forwarded IP address by specifying <code>FORWARDED_IP</code> in your rate-based statement's <code>AggregateKeyType</code>. </p>
 *          <p>This data type supports using the forwarded IP address in the web request aggregation for a rate-based rule, in <code>RateBasedStatementCustomKey</code>. The JSON specification for using the forwarded IP address doesn't explicitly use this data type. </p>
 *          <p>JSON specification: <code>"ForwardedIP": \{\}</code>
 *          </p>
 *          <p>When you use this specification, you must also configure the forwarded IP address in the rate-based statement's <code>ForwardedIPConfig</code>. </p>
 */
export interface RateLimitForwardedIP {}

/**
 * @public
 * <p>Specifies a header as an aggregate key for a rate-based rule. Each distinct value in the header contributes to the aggregation instance. If you use a single
 *       header as your custom key, then each value fully defines an aggregation instance.  </p>
 */
export interface RateLimitHeader {
  /**
   * @public
   * <p>The name of the header to use. </p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection. Text transformations are used in rule match statements, to transform the <code>FieldToMatch</code> request component before inspecting it, and they're used in rate-based rule statements, to transform request components before using them as custom aggregation keys. If you specify one or more transformations to apply, WAF performs all transformations on the specified content, starting from the lowest priority setting, and then uses the transformed component contents. </p>
   */
  TextTransformations: TextTransformation[] | undefined;
}

/**
 * @public
 * <p>Specifies the request's HTTP method as an aggregate key for a rate-based rule. Each distinct HTTP method contributes to the aggregation instance. If you use just the HTTP method
 *     as your custom key, then each method fully defines an aggregation instance. </p>
 *          <p>JSON specification: <code>"RateLimitHTTPMethod": \{\}</code>
 *          </p>
 */
export interface RateLimitHTTPMethod {}

/**
 * @public
 * <p>Specifies the IP address in the web request as an aggregate key for a rate-based rule. Each distinct IP address contributes to the aggregation instance. </p>
 *          <p>This setting is used only in the <code>RateBasedStatementCustomKey</code> specification of a rate-based rule statement.
 *        To use this in the custom key settings, you must specify at least one other key to use, along with the IP address.
 *        To aggregate on only the IP address, in your rate-based statement's <code>AggregateKeyType</code>, specify <code>IP</code>.</p>
 *          <p>JSON specification: <code>"RateLimitIP": \{\}</code>
 *          </p>
 */
export interface RateLimitIP {}

/**
 * @public
 * <p>Specifies a label namespace to use as an aggregate key for a rate-based rule. Each distinct fully qualified label name that has the specified label namespace contributes to the aggregation instance. If you use just one label namespace as your custom key, then each label name fully defines an aggregation instance.  </p>
 *          <p>This uses only labels that have been added to the request by rules that are evaluated before this rate-based rule in the web ACL. </p>
 *          <p>For information about label namespaces and names, see
 *            <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-rule-label-requirements.html">Label syntax and naming requirements</a> in the <i>WAF Developer Guide</i>.</p>
 */
export interface RateLimitLabelNamespace {
  /**
   * @public
   * <p>The namespace to use for aggregation. </p>
   */
  Namespace: string | undefined;
}

/**
 * @public
 * <p>Specifies a query argument in the request as an aggregate key for a rate-based rule. Each distinct value for the named query argument contributes to the aggregation instance. If you
 *       use a single query argument as your custom key, then each value fully defines an aggregation instance.  </p>
 */
export interface RateLimitQueryArgument {
  /**
   * @public
   * <p>The name of the query argument to use. </p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection. Text transformations are used in rule match statements, to transform the <code>FieldToMatch</code> request component before inspecting it, and they're used in rate-based rule statements, to transform request components before using them as custom aggregation keys. If you specify one or more transformations to apply, WAF performs all transformations on the specified content, starting from the lowest priority setting, and then uses the transformed component contents. </p>
   */
  TextTransformations: TextTransformation[] | undefined;
}

/**
 * @public
 * <p>Specifies the request's query string as an aggregate key for a rate-based rule. Each distinct string contributes to the aggregation instance. If you use just the
 *     query string as your custom key, then each string fully defines an aggregation instance.  </p>
 */
export interface RateLimitQueryString {
  /**
   * @public
   * <p>Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection. Text transformations are used in rule match statements, to transform the <code>FieldToMatch</code> request component before inspecting it, and they're used in rate-based rule statements, to transform request components before using them as custom aggregation keys. If you specify one or more transformations to apply, WAF performs all transformations on the specified content, starting from the lowest priority setting, and then uses the transformed component contents. </p>
   */
  TextTransformations: TextTransformation[] | undefined;
}

/**
 * @public
 * <p>Specifies the request's URI path as an aggregate key for a rate-based rule. Each distinct URI path contributes to the aggregation instance. If you use just the
 *     URI path as your custom key, then each URI path fully defines an aggregation instance.  </p>
 */
export interface RateLimitUriPath {
  /**
   * @public
   * <p>Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection. Text transformations are used in rule match statements, to transform the <code>FieldToMatch</code> request component before inspecting it, and they're used in rate-based rule statements, to transform request components before using them as custom aggregation keys. If you specify one or more transformations to apply, WAF performs all transformations on the specified content, starting from the lowest priority setting, and then uses the transformed component contents. </p>
   */
  TextTransformations: TextTransformation[] | undefined;
}

/**
 * @public
 * <p>Specifies a single custom aggregate key for a rate-base rule. </p>
 *          <note>
 *             <p>Web requests that are missing any of the components specified in the aggregation keys
 *                 are omitted from the rate-based rule evaluation and handling. </p>
 *          </note>
 */
export interface RateBasedStatementCustomKey {
  /**
   * @public
   * <p>Use the value of a header in the request as an aggregate key. Each distinct value in the header contributes to the aggregation instance. If you use a single
   *       header as your custom key, then each value fully defines an aggregation instance. </p>
   */
  Header?: RateLimitHeader;

  /**
   * @public
   * <p>Use the value of a cookie in the request as an aggregate key. Each distinct value in the cookie contributes to the aggregation instance. If you use a single
   *     cookie as your custom key, then each value fully defines an aggregation instance. </p>
   */
  Cookie?: RateLimitCookie;

  /**
   * @public
   * <p>Use the specified query argument as an aggregate key. Each distinct value for the named query argument contributes to the aggregation instance. If you
   *       use a single query argument as your custom key, then each value fully defines an aggregation instance.  </p>
   */
  QueryArgument?: RateLimitQueryArgument;

  /**
   * @public
   * <p>Use the request's query string as an aggregate key. Each distinct string contributes to the aggregation instance. If you use just the
   *     query string as your custom key, then each string fully defines an aggregation instance.  </p>
   */
  QueryString?: RateLimitQueryString;

  /**
   * @public
   * <p>Use the request's HTTP method as an aggregate key. Each distinct HTTP method contributes to the aggregation instance. If you use just the HTTP method
   *     as your custom key, then each method fully defines an aggregation instance.  </p>
   */
  HTTPMethod?: RateLimitHTTPMethod;

  /**
   * @public
   * <p>Use the first IP address in an HTTP header as an aggregate key. Each distinct forwarded IP address contributes to the aggregation instance.</p>
   *          <p>When you specify an IP or forwarded IP in the custom key settings, you must also specify at least one other key to use.
   *        You can aggregate on only the forwarded IP address by specifying <code>FORWARDED_IP</code> in your rate-based statement's <code>AggregateKeyType</code>. </p>
   *          <p>With this option, you must specify the header to use in the rate-based rule's <code>ForwardedIPConfig</code> property. </p>
   */
  ForwardedIP?: RateLimitForwardedIP;

  /**
   * @public
   * <p>Use the request's originating IP address as an aggregate key. Each distinct IP address contributes to the aggregation instance.</p>
   *          <p>When you specify an IP or forwarded IP in the custom key settings, you must also specify at least one other key to use.
   *        You can aggregate on only the IP address by specifying <code>IP</code> in your rate-based statement's <code>AggregateKeyType</code>. </p>
   */
  IP?: RateLimitIP;

  /**
   * @public
   * <p>Use the specified label namespace as an aggregate key. Each distinct fully qualified label name that has the specified label namespace contributes to the aggregation instance. If you use just one label namespace as your custom key, then each label name fully defines an aggregation instance.  </p>
   *          <p>This uses only labels that have been added to the request by rules that are evaluated before this rate-based rule in the web ACL. </p>
   *          <p>For information about label namespaces and names, see
   *            <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-rule-label-requirements.html">Label syntax and naming requirements</a> in the <i>WAF Developer Guide</i>.</p>
   */
  LabelNamespace?: RateLimitLabelNamespace;

  /**
   * @public
   * <p>Use the request's URI path as an aggregate key. Each distinct URI path contributes to the aggregation instance. If you use just the
   *     URI path as your custom key, then each URI path fully defines an aggregation instance.  </p>
   */
  UriPath?: RateLimitUriPath;
}

/**
 * @public
 * <p>A rule statement used to search web request components for a match against a single regular expression. </p>
 */
export interface RegexMatchStatement {
  /**
   * @public
   * <p>The string representing the regular expression.</p>
   */
  RegexString: string | undefined;

  /**
   * @public
   * <p>The part of the web request that you want WAF to inspect. </p>
   */
  FieldToMatch: FieldToMatch | undefined;

  /**
   * @public
   * <p>Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection. Text transformations are used in rule match statements, to transform the <code>FieldToMatch</code> request component before inspecting it, and they're used in rate-based rule statements, to transform request components before using them as custom aggregation keys. If you specify one or more transformations to apply, WAF performs all transformations on the specified content, starting from the lowest priority setting, and then uses the transformed component contents. </p>
   */
  TextTransformations: TextTransformation[] | undefined;
}

/**
 * @public
 * <p>A rule statement used to search web request components for matches with regular expressions. To use this, create a <a>RegexPatternSet</a> that specifies the expressions that you want to detect, then use the ARN of that set in this statement. A web request matches the pattern set rule statement if the request component matches any of the patterns in the set. To create a regex pattern set, see <a>CreateRegexPatternSet</a>.</p>
 *          <p>Each regex pattern set rule statement references a regex pattern set. You create and maintain the set independent of your rules. This allows you to use the single set in multiple rules. When you update the referenced set, WAF automatically updates all rules that reference it.</p>
 */
export interface RegexPatternSetReferenceStatement {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the <a>RegexPatternSet</a> that this
   *          statement references.</p>
   */
  ARN: string | undefined;

  /**
   * @public
   * <p>The part of the web request that you want WAF to inspect. </p>
   */
  FieldToMatch: FieldToMatch | undefined;

  /**
   * @public
   * <p>Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection. Text transformations are used in rule match statements, to transform the <code>FieldToMatch</code> request component before inspecting it, and they're used in rate-based rule statements, to transform request components before using them as custom aggregation keys. If you specify one or more transformations to apply, WAF performs all transformations on the specified content, starting from the lowest priority setting, and then uses the transformed component contents. </p>
   */
  TextTransformations: TextTransformation[] | undefined;
}

/**
 * @public
 * <p>A rule statement used to run the rules that are defined in a <a>RuleGroup</a>. To use this, create a rule group with your rules, then provide the ARN of the rule group in this statement.</p>
 *          <p>You cannot nest a <code>RuleGroupReferenceStatement</code>, for example for use inside a <code>NotStatement</code> or <code>OrStatement</code>. You cannot use a rule group
 *       reference statement inside another rule group. You can only reference a rule group as a top-level statement within a rule that you define in a web ACL.</p>
 */
export interface RuleGroupReferenceStatement {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the entity.</p>
   */
  ARN: string | undefined;

  /**
   * @public
   * <p>Rules in the referenced rule group whose actions are set to <code>Count</code>. </p>
   *          <note>
   *             <p>Instead of this option, use <code>RuleActionOverrides</code>. It accepts any valid action setting, including <code>Count</code>.</p>
   *          </note>
   */
  ExcludedRules?: ExcludedRule[];

  /**
   * @public
   * <p>Action settings to use in the place of the rule actions that are configured inside the rule group. You specify one override for each rule whose action you want to change. </p>
   *          <p>You can use overrides for testing, for example you can override all of rule actions to <code>Count</code> and then monitor the resulting count metrics to understand how the rule group would handle your web traffic. You can also permanently override some or all actions, to modify how the rule group manages your web traffic.</p>
   */
  RuleActionOverrides?: RuleActionOverride[];
}

/**
 * @public
 * @enum
 */
export const ComparisonOperator = {
  EQ: "EQ",
  GE: "GE",
  GT: "GT",
  LE: "LE",
  LT: "LT",
  NE: "NE",
} as const;

/**
 * @public
 */
export type ComparisonOperator = (typeof ComparisonOperator)[keyof typeof ComparisonOperator];

/**
 * @public
 * <p>A rule statement that compares a number of bytes against the size of a request component, using a comparison operator, such as greater than (>) or less than (<). For example, you can use a size constraint statement to look for query strings that are longer than 100 bytes. </p>
 *          <p>If you configure WAF to inspect the request body, WAF inspects only the number of bytes of the body up to the limit for the web ACL. By default, for regional web ACLs, this limit is 8 KB (8,192 bytes) and for CloudFront web ACLs, this limit is 16 KB (16,384 bytes). For CloudFront web ACLs, you can increase the limit in the web ACL <code>AssociationConfig</code>, for additional fees. If you know that the request body for your web requests should never exceed the inspection limit, you could use a size constraint statement to block requests that have a larger request body size.</p>
 *          <p>If you choose URI for the value of Part of the request to filter on, the slash (/) in the URI counts as one character. For example, the URI <code>/logo.jpg</code> is nine characters long.</p>
 */
export interface SizeConstraintStatement {
  /**
   * @public
   * <p>The part of the web request that you want WAF to inspect. </p>
   */
  FieldToMatch: FieldToMatch | undefined;

  /**
   * @public
   * <p>The operator to use to compare the request part to the size setting. </p>
   */
  ComparisonOperator: ComparisonOperator | undefined;

  /**
   * @public
   * <p>The size, in byte, to compare to the request part, after any transformations.</p>
   */
  Size: number | undefined;

  /**
   * @public
   * <p>Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection. Text transformations are used in rule match statements, to transform the <code>FieldToMatch</code> request component before inspecting it, and they're used in rate-based rule statements, to transform request components before using them as custom aggregation keys. If you specify one or more transformations to apply, WAF performs all transformations on the specified content, starting from the lowest priority setting, and then uses the transformed component contents. </p>
   */
  TextTransformations: TextTransformation[] | undefined;
}

/**
 * @public
 * @enum
 */
export const SensitivityLevel = {
  HIGH: "HIGH",
  LOW: "LOW",
} as const;

/**
 * @public
 */
export type SensitivityLevel = (typeof SensitivityLevel)[keyof typeof SensitivityLevel];

/**
 * @public
 * <p>A rule statement that inspects for malicious SQL code. Attackers insert malicious SQL code into web requests to do things like modify your database or extract data from it. </p>
 */
export interface SqliMatchStatement {
  /**
   * @public
   * <p>The part of the web request that you want WAF to inspect. </p>
   */
  FieldToMatch: FieldToMatch | undefined;

  /**
   * @public
   * <p>Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection. Text transformations are used in rule match statements, to transform the <code>FieldToMatch</code> request component before inspecting it, and they're used in rate-based rule statements, to transform request components before using them as custom aggregation keys. If you specify one or more transformations to apply, WAF performs all transformations on the specified content, starting from the lowest priority setting, and then uses the transformed component contents. </p>
   */
  TextTransformations: TextTransformation[] | undefined;

  /**
   * @public
   * <p>The sensitivity that you want WAF to use to inspect for SQL injection attacks. </p>
   *          <p>
   *             <code>HIGH</code> detects more attacks, but might generate more false positives,
   *        especially if your web requests frequently contain unusual strings.
   *        For information about identifying and mitigating false positives, see
   *            <a href="https://docs.aws.amazon.com/waf/latest/developerguide/web-acl-testing.html">Testing and tuning</a> in the
   *            <i>WAF Developer Guide</i>.</p>
   *          <p>
   *             <code>LOW</code> is generally a better choice for resources that already have other
   *            protections against SQL injection attacks or that have a low tolerance for false positives. </p>
   *          <p>Default: <code>LOW</code>
   *          </p>
   */
  SensitivityLevel?: SensitivityLevel;
}

/**
 * @public
 * <p>A rule statement that inspects for cross-site scripting (XSS) attacks. In XSS attacks, the attacker
 * uses vulnerabilities in a benign website as a vehicle to inject malicious client-site scripts into other legitimate web browsers. </p>
 */
export interface XssMatchStatement {
  /**
   * @public
   * <p>The part of the web request that you want WAF to inspect. </p>
   */
  FieldToMatch: FieldToMatch | undefined;

  /**
   * @public
   * <p>Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection. Text transformations are used in rule match statements, to transform the <code>FieldToMatch</code> request component before inspecting it, and they're used in rate-based rule statements, to transform request components before using them as custom aggregation keys. If you specify one or more transformations to apply, WAF performs all transformations on the specified content, starting from the lowest priority setting, and then uses the transformed component contents. </p>
   */
  TextTransformations: TextTransformation[] | undefined;
}

/**
 * @public
 * <p>Information for a single API key. </p>
 *          <p>API keys are required for the integration of the CAPTCHA API in your JavaScript client applications.
 *            The API lets you customize the placement and characteristics of the CAPTCHA puzzle for your end users.
 *            For more information about the CAPTCHA JavaScript integration, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-application-integration.html">WAF client application integration</a> in the <i>WAF Developer Guide</i>.</p>
 */
export interface APIKeySummary {
  /**
   * @public
   * <p>The token domains that are defined in this API key. </p>
   */
  TokenDomains?: string[];

  /**
   * @public
   * <p>The generated, encrypted API key. You can copy this for use in your JavaScript CAPTCHA integration.  </p>
   */
  APIKey?: string;

  /**
   * @public
   * <p>The date and time that the key was created. </p>
   */
  CreationTimestamp?: Date;

  /**
   * @public
   * <p>Internal value used by WAF to manage the key. </p>
   */
  Version?: number;
}

/**
 * @public
 * @enum
 */
export const AssociatedResourceType = {
  CLOUDFRONT: "CLOUDFRONT",
} as const;

/**
 * @public
 */
export type AssociatedResourceType = (typeof AssociatedResourceType)[keyof typeof AssociatedResourceType];

/**
 * @public
 */
export interface AssociateWebACLRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the web ACL that you want to associate with the
   *          resource.</p>
   */
  WebACLArn: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource to associate with the web ACL. </p>
   *          <p>The ARN must be in one of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>For an Application Load Balancer: <code>arn:<i>partition</i>:elasticloadbalancing:<i>region</i>:<i>account-id</i>:loadbalancer/app/<i>load-balancer-name</i>/<i>load-balancer-id</i>
   *                   </code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>For an Amazon API Gateway REST API: <code>arn:<i>partition</i>:apigateway:<i>region</i>::/restapis/<i>api-id</i>/stages/<i>stage-name</i>
   *                   </code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>For an AppSync GraphQL API: <code>arn:<i>partition</i>:appsync:<i>region</i>:<i>account-id</i>:apis/<i>GraphQLApiId</i>
   *                   </code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>For an Amazon Cognito user pool: <code>arn:<i>partition</i>:cognito-idp:<i>region</i>:<i>account-id</i>:userpool/<i>user-pool-id</i>
   *                   </code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>For an App Runner service: <code>arn:<i>partition</i>:apprunner:<i>region</i>:<i>account-id</i>:service/<i>apprunner-service-name</i>/<i>apprunner-service-id</i>
   *                   </code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>For an Amazon Web Services Verified Access instance: <code>arn:<i>partition</i>:ec2:<i>region</i>:<i>account-id</i>:verified-access-instance/<i>instance-id</i>
   *                   </code>
   *                </p>
   *             </li>
   *          </ul>
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface AssociateWebACLResponse {}

/**
 * @public
 * <p>Your request is valid, but WAF couldn’t perform the operation because of a system
 *          problem. Retry your request. </p>
 */
export class WAFInternalErrorException extends __BaseException {
  readonly name: "WAFInternalErrorException" = "WAFInternalErrorException";
  readonly $fault: "server" = "server";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<WAFInternalErrorException, __BaseException>) {
    super({
      name: "WAFInternalErrorException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, WAFInternalErrorException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>The operation isn't valid. </p>
 */
export class WAFInvalidOperationException extends __BaseException {
  readonly name: "WAFInvalidOperationException" = "WAFInvalidOperationException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<WAFInvalidOperationException, __BaseException>) {
    super({
      name: "WAFInvalidOperationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, WAFInvalidOperationException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * @enum
 */
export const ParameterExceptionField = {
  ACP_RULE_SET_RESPONSE_INSPECTION: "ACP_RULE_SET_RESPONSE_INSPECTION",
  AND_STATEMENT: "AND_STATEMENT",
  ASSOCIABLE_RESOURCE: "ASSOCIABLE_RESOURCE",
  ASSOCIATED_RESOURCE_TYPE: "ASSOCIATED_RESOURCE_TYPE",
  ATP_RULE_SET_RESPONSE_INSPECTION: "ATP_RULE_SET_RESPONSE_INSPECTION",
  BODY_PARSING_FALLBACK_BEHAVIOR: "BODY_PARSING_FALLBACK_BEHAVIOR",
  BYTE_MATCH_STATEMENT: "BYTE_MATCH_STATEMENT",
  CHALLENGE_CONFIG: "CHALLENGE_CONFIG",
  CHANGE_PROPAGATION_STATUS: "CHANGE_PROPAGATION_STATUS",
  COOKIE_MATCH_PATTERN: "COOKIE_MATCH_PATTERN",
  CUSTOM_KEYS: "CUSTOM_KEYS",
  CUSTOM_REQUEST_HANDLING: "CUSTOM_REQUEST_HANDLING",
  CUSTOM_RESPONSE: "CUSTOM_RESPONSE",
  CUSTOM_RESPONSE_BODY: "CUSTOM_RESPONSE_BODY",
  DEFAULT_ACTION: "DEFAULT_ACTION",
  ENTITY_LIMIT: "ENTITY_LIMIT",
  EXCLUDED_RULE: "EXCLUDED_RULE",
  EXPIRE_TIMESTAMP: "EXPIRE_TIMESTAMP",
  FALLBACK_BEHAVIOR: "FALLBACK_BEHAVIOR",
  FIELD_TO_MATCH: "FIELD_TO_MATCH",
  FILTER_CONDITION: "FILTER_CONDITION",
  FIREWALL_MANAGER_STATEMENT: "FIREWALL_MANAGER_STATEMENT",
  FORWARDED_IP_CONFIG: "FORWARDED_IP_CONFIG",
  GEO_MATCH_STATEMENT: "GEO_MATCH_STATEMENT",
  HEADER_MATCH_PATTERN: "HEADER_MATCH_PATTERN",
  HEADER_NAME: "HEADER_NAME",
  IP_ADDRESS: "IP_ADDRESS",
  IP_ADDRESS_VERSION: "IP_ADDRESS_VERSION",
  IP_SET: "IP_SET",
  IP_SET_FORWARDED_IP_CONFIG: "IP_SET_FORWARDED_IP_CONFIG",
  IP_SET_REFERENCE_STATEMENT: "IP_SET_REFERENCE_STATEMENT",
  JSON_MATCH_PATTERN: "JSON_MATCH_PATTERN",
  JSON_MATCH_SCOPE: "JSON_MATCH_SCOPE",
  LABEL_MATCH_STATEMENT: "LABEL_MATCH_STATEMENT",
  LOGGING_FILTER: "LOGGING_FILTER",
  LOG_DESTINATION: "LOG_DESTINATION",
  MANAGED_RULE_GROUP_CONFIG: "MANAGED_RULE_GROUP_CONFIG",
  MANAGED_RULE_SET: "MANAGED_RULE_SET",
  MANAGED_RULE_SET_STATEMENT: "MANAGED_RULE_SET_STATEMENT",
  MAP_MATCH_SCOPE: "MAP_MATCH_SCOPE",
  METRIC_NAME: "METRIC_NAME",
  NOT_STATEMENT: "NOT_STATEMENT",
  OR_STATEMENT: "OR_STATEMENT",
  OVERRIDE_ACTION: "OVERRIDE_ACTION",
  OVERSIZE_HANDLING: "OVERSIZE_HANDLING",
  PAYLOAD_TYPE: "PAYLOAD_TYPE",
  POSITION: "POSITION",
  RATE_BASED_STATEMENT: "RATE_BASED_STATEMENT",
  REGEX_PATTERN_REFERENCE_STATEMENT: "REGEX_PATTERN_REFERENCE_STATEMENT",
  REGEX_PATTERN_SET: "REGEX_PATTERN_SET",
  RESOURCE_ARN: "RESOURCE_ARN",
  RESOURCE_TYPE: "RESOURCE_TYPE",
  RESPONSE_CONTENT_TYPE: "RESPONSE_CONTENT_TYPE",
  RULE: "RULE",
  RULE_ACTION: "RULE_ACTION",
  RULE_GROUP: "RULE_GROUP",
  RULE_GROUP_REFERENCE_STATEMENT: "RULE_GROUP_REFERENCE_STATEMENT",
  SCOPE_DOWN: "SCOPE_DOWN",
  SCOPE_VALUE: "SCOPE_VALUE",
  SINGLE_HEADER: "SINGLE_HEADER",
  SINGLE_QUERY_ARGUMENT: "SINGLE_QUERY_ARGUMENT",
  SIZE_CONSTRAINT_STATEMENT: "SIZE_CONSTRAINT_STATEMENT",
  SQLI_MATCH_STATEMENT: "SQLI_MATCH_STATEMENT",
  STATEMENT: "STATEMENT",
  TAGS: "TAGS",
  TAG_KEYS: "TAG_KEYS",
  TEXT_TRANSFORMATION: "TEXT_TRANSFORMATION",
  TOKEN_DOMAIN: "TOKEN_DOMAIN",
  WEB_ACL: "WEB_ACL",
  XSS_MATCH_STATEMENT: "XSS_MATCH_STATEMENT",
} as const;

/**
 * @public
 */
export type ParameterExceptionField = (typeof ParameterExceptionField)[keyof typeof ParameterExceptionField];

/**
 * @public
 * <p>The operation failed because WAF didn't recognize a parameter in the request. For
 *          example: </p>
 *          <ul>
 *             <li>
 *                <p>You specified a parameter name or value that isn't valid.</p>
 *             </li>
 *             <li>
 *                <p>Your nested statement isn't valid. You might have tried to nest a statement that
 *                can’t be nested. </p>
 *             </li>
 *             <li>
 *                <p>You tried to update a <code>WebACL</code> with a <code>DefaultAction</code> that
 *                isn't among the types available at <a>DefaultAction</a>.</p>
 *             </li>
 *             <li>
 *                <p>Your request references an ARN that is malformed, or corresponds to a resource
 *                with which a web ACL can't be associated.</p>
 *             </li>
 *          </ul>
 */
export class WAFInvalidParameterException extends __BaseException {
  readonly name: "WAFInvalidParameterException" = "WAFInvalidParameterException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The settings where the invalid parameter was found. </p>
   */
  Field?: ParameterExceptionField;

  /**
   * @public
   * <p>The invalid parameter that resulted in the exception. </p>
   */
  Parameter?: string;

  /**
   * @public
   * <p>Additional information about the exception.</p>
   */
  Reason?: string;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<WAFInvalidParameterException, __BaseException>) {
    super({
      name: "WAFInvalidParameterException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, WAFInvalidParameterException.prototype);
    this.Field = opts.Field;
    this.Parameter = opts.Parameter;
    this.Reason = opts.Reason;
  }
}

/**
 * @public
 * <p>WAF couldn’t perform the operation because your resource doesn't exist.
 *        If you've just created a resource that you're using in this operation, you might
 *        just need to wait a few minutes. It can take from a few seconds to a number of minutes
 *        for changes to propagate. </p>
 */
export class WAFNonexistentItemException extends __BaseException {
  readonly name: "WAFNonexistentItemException" = "WAFNonexistentItemException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<WAFNonexistentItemException, __BaseException>) {
    super({
      name: "WAFNonexistentItemException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, WAFNonexistentItemException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>WAF couldn’t retrieve a resource that you specified for this operation.
 *        If you've just created a resource that you're using in this operation, you might
 *        just need to wait a few minutes. It can take from a few seconds to a number of minutes
 *        for changes to propagate. Verify the resources that you are specifying in your request
 *        parameters and then retry the operation.</p>
 */
export class WAFUnavailableEntityException extends __BaseException {
  readonly name: "WAFUnavailableEntityException" = "WAFUnavailableEntityException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<WAFUnavailableEntityException, __BaseException>) {
    super({
      name: "WAFUnavailableEntityException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, WAFUnavailableEntityException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * @enum
 */
export const SizeInspectionLimit = {
  KB_16: "KB_16",
  KB_32: "KB_32",
  KB_48: "KB_48",
  KB_64: "KB_64",
} as const;

/**
 * @public
 */
export type SizeInspectionLimit = (typeof SizeInspectionLimit)[keyof typeof SizeInspectionLimit];

/**
 * @public
 * <p>Customizes the maximum size of the request body that your protected CloudFront distributions forward to WAF for inspection. The default size is 16 KB (16,384 bytes). </p>
 *          <note>
 *             <p>You are charged additional fees when your protected resources forward body sizes that are larger than the default. For more information, see <a href="http://aws.amazon.com/waf/pricing/">WAF Pricing</a>.</p>
 *          </note>
 *          <p>This is used in the <code>AssociationConfig</code> of the web ACL. </p>
 */
export interface RequestBodyAssociatedResourceTypeConfig {
  /**
   * @public
   * <p>Specifies the maximum size of the web request body component that an associated CloudFront distribution should send to WAF for inspection. This applies to statements in the web ACL that inspect the body or JSON body. </p>
   *          <p>Default: <code>16 KB (16,384 bytes)</code>
   *          </p>
   */
  DefaultSizeInspectionLimit: SizeInspectionLimit | undefined;
}

/**
 * @public
 * <p>Specifies custom configurations for the associations between the web ACL and protected resources.  </p>
 *          <p>Use this to customize the maximum size of the request body that your protected CloudFront distributions forward to WAF for inspection. The default is 16 KB (16,384 bytes). </p>
 *          <note>
 *             <p>You are charged additional fees when your protected resources forward body sizes that are larger than the default. For more information, see <a href="http://aws.amazon.com/waf/pricing/">WAF Pricing</a>.</p>
 *          </note>
 */
export interface AssociationConfig {
  /**
   * @public
   * <p>Customizes the maximum size of the request body that your protected CloudFront distributions forward to WAF for inspection. The default size is 16 KB (16,384 bytes). </p>
   *          <note>
   *             <p>You are charged additional fees when your protected resources forward body sizes that are larger than the default. For more information, see <a href="http://aws.amazon.com/waf/pricing/">WAF Pricing</a>.</p>
   *          </note>
   */
  RequestBody?: Record<AssociatedResourceType, RequestBodyAssociatedResourceTypeConfig>;
}

/**
 * @public
 * <p>Used for CAPTCHA and challenge token settings. Determines
 *        how long a <code>CAPTCHA</code> or challenge timestamp remains valid after WAF updates it for a successful <code>CAPTCHA</code> or challenge response. </p>
 */
export interface ImmunityTimeProperty {
  /**
   * @public
   * <p>The amount of time, in seconds, that a <code>CAPTCHA</code> or challenge timestamp is considered valid by WAF. The default
   *           setting is 300. </p>
   *          <p>For the Challenge action, the minimum setting is 300. </p>
   */
  ImmunityTime: number | undefined;
}

/**
 * @public
 * <p>Specifies how WAF should handle <code>CAPTCHA</code> evaluations. This is
 *          available at the web ACL level and in each rule. </p>
 */
export interface CaptchaConfig {
  /**
   * @public
   * <p>Determines how long a <code>CAPTCHA</code> timestamp in the token remains valid after the client
   *          successfully solves a <code>CAPTCHA</code> puzzle. </p>
   */
  ImmunityTimeProperty?: ImmunityTimeProperty;
}

/**
 * @public
 * <p>Specifies how WAF should handle <code>Challenge</code> evaluations. This is
 *          available at the web ACL level and in each rule. </p>
 */
export interface ChallengeConfig {
  /**
   * @public
   * <p>Determines how long a challenge timestamp in the token remains valid after the client
   *          successfully responds to a challenge. </p>
   */
  ImmunityTimeProperty?: ImmunityTimeProperty;
}

/**
 * @public
 * <p>Specifies that WAF should do nothing. This is used for the
 *             <code>OverrideAction</code> setting on a <a>Rule</a> when the rule uses a
 *          rule group reference statement. </p>
 *          <p>This is used in the context of other settings, for example to specify values for <a>RuleAction</a> and web ACL <a>DefaultAction</a>. </p>
 *          <p>JSON specification: <code>"None": \{\}</code>
 *          </p>
 */
export interface NoneAction {}

/**
 * @public
 * <p>The action to use in the place of the action that results from the rule group evaluation. Set the override action to none to leave the result of the rule group alone. Set it to count to override the result to count only. </p>
 *          <p>You can only use this for rule statements that reference a rule group, like <code>RuleGroupReferenceStatement</code> and <code>ManagedRuleGroupStatement</code>. </p>
 *          <note>
 *             <p>This option is usually set to none. It does not affect how the rules in the rule group are evaluated. If you want the rules in the rule group to only count
 *   matches, do not use this and instead use the rule action override option, with <code>Count</code> action, in your rule group reference statement settings. </p>
 *          </note>
 */
export interface OverrideAction {
  /**
   * @public
   * <p>Override the rule group evaluation result to count only. </p>
   *          <note>
   *             <p>This option is usually set to none. It does not affect how the rules in the rule group are evaluated. If you want the rules in the rule group to only count
   *   matches, do not use this and instead use the rule action override option, with <code>Count</code> action, in your rule group reference statement settings. </p>
   *          </note>
   */
  Count?: CountAction;

  /**
   * @public
   * <p>Don't override the rule group evaluation result. This is the most common setting.</p>
   */
  None?: NoneAction;
}

/**
 * @public
 * <p>A single label container. This is used as an element of a label array in multiple
 *          contexts, for example, in <code>RuleLabels</code> inside a <a>Rule</a> and in
 *             <code>Labels</code> inside a <a>SampledHTTPRequest</a>. </p>
 */
export interface Label {
  /**
   * @public
   * <p>The label string. </p>
   */
  Name: string | undefined;
}

/**
 * @public
 * <p>Defines and enables Amazon CloudWatch metrics and web request sample collection.  </p>
 */
export interface VisibilityConfig {
  /**
   * @public
   * <p>Indicates whether WAF should store a sampling of the web requests that
   *          match the rules. You can view the sampled requests through the WAF console. </p>
   */
  SampledRequestsEnabled: boolean | undefined;

  /**
   * @public
   * <p>Indicates whether the associated resource sends metrics to Amazon CloudWatch. For the
   *          list of available metrics, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/monitoring-cloudwatch.html#waf-metrics">WAF
   *             Metrics</a> in the <i>WAF Developer Guide</i>.</p>
   *          <p>For web ACLs, the metrics are for web requests that have the web ACL default action applied.
   *         WAF applies the default action to web requests that pass the inspection of all rules
   *         in the web ACL without being either allowed or blocked. For more information,
   * see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/web-acl-default-action.html">The web ACL default action</a> in the <i>WAF Developer Guide</i>.</p>
   */
  CloudWatchMetricsEnabled: boolean | undefined;

  /**
   * @public
   * <p>A name of the Amazon CloudWatch metric dimension. The name can contain only the characters: A-Z, a-z, 0-9,
   *          - (hyphen), and _ (underscore). The name can be from one to 128 characters long. It can't
   *       contain whitespace or metric names that are reserved for WAF, for example <code>All</code> and
   *       <code>Default_Action</code>. </p>
   */
  MetricName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const Scope = {
  CLOUDFRONT: "CLOUDFRONT",
  REGIONAL: "REGIONAL",
} as const;

/**
 * @public
 */
export type Scope = (typeof Scope)[keyof typeof Scope];

/**
 * @public
 */
export interface CheckCapacityResponse {
  /**
   * @public
   * <p>The capacity required by the rules and scope.</p>
   */
  Capacity?: number;
}

/**
 * @public
 * <p>The operation failed because the specified version for the managed rule group has
 *          expired. You can retrieve the available versions for the managed rule group by calling
 *             <a>ListAvailableManagedRuleGroupVersions</a>.</p>
 */
export class WAFExpiredManagedRuleGroupVersionException extends __BaseException {
  readonly name: "WAFExpiredManagedRuleGroupVersionException" = "WAFExpiredManagedRuleGroupVersionException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<WAFExpiredManagedRuleGroupVersionException, __BaseException>) {
    super({
      name: "WAFExpiredManagedRuleGroupVersionException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, WAFExpiredManagedRuleGroupVersionException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>WAF couldn’t perform the operation because the resource that you requested isn’t
 *          valid. Check the resource, and try again.</p>
 */
export class WAFInvalidResourceException extends __BaseException {
  readonly name: "WAFInvalidResourceException" = "WAFInvalidResourceException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<WAFInvalidResourceException, __BaseException>) {
    super({
      name: "WAFInvalidResourceException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, WAFInvalidResourceException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>WAF couldn’t perform the operation because you exceeded your resource limit. For
 *          example, the maximum number of <code>WebACL</code> objects that you can create for an Amazon Web Services
 *          account. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/limits.html">WAF quotas</a> in the
 *             <i>WAF Developer Guide</i>.</p>
 */
export class WAFLimitsExceededException extends __BaseException {
  readonly name: "WAFLimitsExceededException" = "WAFLimitsExceededException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<WAFLimitsExceededException, __BaseException>) {
    super({
      name: "WAFLimitsExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, WAFLimitsExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>You tried to use a managed rule group that's available by subscription, but you aren't
 *          subscribed to it yet. </p>
 */
export class WAFSubscriptionNotFoundException extends __BaseException {
  readonly name: "WAFSubscriptionNotFoundException" = "WAFSubscriptionNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<WAFSubscriptionNotFoundException, __BaseException>) {
    super({
      name: "WAFSubscriptionNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, WAFSubscriptionNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface CreateAPIKeyRequest {
  /**
   * @public
   * <p>Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, an App Runner service, or an Amazon Web Services Verified Access instance.  </p>
   *          <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p>
   *          <ul>
   *             <li>
   *                <p>CLI - Specify the Region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p>
   *             </li>
   *             <li>
   *                <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p>
   *             </li>
   *          </ul>
   */
  Scope: Scope | undefined;

  /**
   * @public
   * <p>The client application domains that you want to use this API key for.  </p>
   *          <p>Example JSON: <code>"TokenDomains": ["abc.com", "store.abc.com"]</code>
   *          </p>
   *          <p>Public suffixes aren't allowed. For example, you can't use <code>usa.gov</code> or <code>co.uk</code> as token domains.</p>
   */
  TokenDomains: string[] | undefined;
}

/**
 * @public
 */
export interface CreateAPIKeyResponse {
  /**
   * @public
   * <p>The generated, encrypted API key. You can copy this for use in your JavaScript CAPTCHA integration.  </p>
   */
  APIKey?: string;
}

/**
 * @public
 * @enum
 */
export const IPAddressVersion = {
  IPV4: "IPV4",
  IPV6: "IPV6",
} as const;

/**
 * @public
 */
export type IPAddressVersion = (typeof IPAddressVersion)[keyof typeof IPAddressVersion];

/**
 * @public
 * <p>A tag associated with an Amazon Web Services resource. Tags are key:value pairs that you can use to
 *          categorize and manage your resources, for purposes like billing or other management.
 *          Typically, the tag key represents a category, such as "environment", and the tag value
 *          represents a specific value within that category, such as "test," "development," or
 *          "production". Or you might set the tag key to "customer" and the value to the customer name
 *          or ID. You can specify one or more tags to add to each Amazon Web Services resource, up to 50 tags for a
 *          resource.</p>
 *          <p>You can tag the Amazon Web Services resources that you manage through WAF: web ACLs, rule
 *          groups, IP sets, and regex pattern sets. You can't manage or view tags through the WAF
 *          console. </p>
 */
export interface Tag {
  /**
   * @public
   * <p>Part of the key:value pair that defines a tag. You can use a tag key to describe a
   *          category of information, such as "customer." Tag keys are case-sensitive.</p>
   */
  Key: string | undefined;

  /**
   * @public
   * <p>Part of the key:value pair that defines a tag. You can use a tag value to describe a
   *          specific value within a category, such as "companyA" or "companyB." Tag values are
   *          case-sensitive.</p>
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface CreateIPSetRequest {
  /**
   * @public
   * <p>The name of the IP set. You cannot change the name of an <code>IPSet</code> after you create it.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, an App Runner service, or an Amazon Web Services Verified Access instance.  </p>
   *          <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p>
   *          <ul>
   *             <li>
   *                <p>CLI - Specify the Region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p>
   *             </li>
   *             <li>
   *                <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p>
   *             </li>
   *          </ul>
   */
  Scope: Scope | undefined;

  /**
   * @public
   * <p>A description of the IP set that helps with identification. </p>
   */
  Description?: string;

  /**
   * @public
   * <p>The version of the IP addresses, either <code>IPV4</code> or <code>IPV6</code>. </p>
   */
  IPAddressVersion: IPAddressVersion | undefined;

  /**
   * @public
   * <p>Contains an array of strings that specifies zero or more IP addresses or blocks of IP addresses that you want WAF to inspect for in incoming requests. All addresses must be specified using Classless Inter-Domain Routing (CIDR) notation. WAF supports all IPv4 and IPv6 CIDR ranges except for <code>/0</code>. </p>
   *          <p>Example address strings: </p>
   *          <ul>
   *             <li>
   *                <p>For requests that originated from the IP address 192.0.2.44, specify <code>192.0.2.44/32</code>.</p>
   *             </li>
   *             <li>
   *                <p>For requests that originated from IP addresses from 192.0.2.0 to 192.0.2.255, specify
   *                <code>192.0.2.0/24</code>.</p>
   *             </li>
   *             <li>
   *                <p>For requests that originated from the IP address 1111:0000:0000:0000:0000:0000:0000:0111, specify <code>1111:0000:0000:0000:0000:0000:0000:0111/128</code>.</p>
   *             </li>
   *             <li>
   *                <p>For requests that originated from IP addresses 1111:0000:0000:0000:0000:0000:0000:0000 to 1111:0000:0000:0000:ffff:ffff:ffff:ffff, specify <code>1111:0000:0000:0000:0000:0000:0000:0000/64</code>.</p>
   *             </li>
   *          </ul>
   *          <p>For more information about CIDR notation, see the Wikipedia entry <a href="https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Classless Inter-Domain Routing</a>.</p>
   *          <p>Example JSON <code>Addresses</code> specifications: </p>
   *          <ul>
   *             <li>
   *                <p>Empty array: <code>"Addresses": []</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Array with one address: <code>"Addresses": ["192.0.2.44/32"]</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Array with three addresses: <code>"Addresses": ["192.0.2.44/32", "192.0.2.0/24", "192.0.0.0/16"]</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>INVALID specification: <code>"Addresses": [""]</code> INVALID </p>
   *             </li>
   *          </ul>
   */
  Addresses: string[] | undefined;

  /**
   * @public
   * <p>An array of key:value pairs to associate with the resource.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 * <p>High-level information about an <a>IPSet</a>, returned by operations like create and list. This provides information like the ID, that you can use to retrieve and manage an <code>IPSet</code>, and the ARN, that you provide to the <a>IPSetReferenceStatement</a> to use the address set in a <a>Rule</a>.</p>
 */
export interface IPSetSummary {
  /**
   * @public
   * <p>The name of the IP set. You cannot change the name of an <code>IPSet</code> after you create it.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>A unique identifier for the set. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>A description of the IP set that helps with identification. </p>
   */
  Description?: string;

  /**
   * @public
   * <p>A token used for optimistic locking. WAF returns a token to your <code>get</code> and <code>list</code> requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like <code>update</code> and <code>delete</code>. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another <code>get</code>, and use the new token returned by that operation. </p>
   */
  LockToken?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the entity.</p>
   */
  ARN?: string;
}

/**
 * @public
 */
export interface CreateIPSetResponse {
  /**
   * @public
   * <p>High-level information about an <a>IPSet</a>, returned by operations like create and list. This provides information like the ID, that you can use to retrieve and manage an <code>IPSet</code>, and the ARN, that you provide to the <a>IPSetReferenceStatement</a> to use the address set in a <a>Rule</a>.</p>
   */
  Summary?: IPSetSummary;
}

/**
 * @public
 * <p>WAF couldn’t perform the operation because the resource that you tried to save is
 *          a duplicate of an existing one.</p>
 */
export class WAFDuplicateItemException extends __BaseException {
  readonly name: "WAFDuplicateItemException" = "WAFDuplicateItemException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<WAFDuplicateItemException, __BaseException>) {
    super({
      name: "WAFDuplicateItemException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, WAFDuplicateItemException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>WAF couldn’t save your changes because you tried to update or delete a resource
 *          that has changed since you last retrieved it. Get the resource again, make any changes you
 *          need to make to the new copy, and retry your operation. </p>
 */
export class WAFOptimisticLockException extends __BaseException {
  readonly name: "WAFOptimisticLockException" = "WAFOptimisticLockException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<WAFOptimisticLockException, __BaseException>) {
    super({
      name: "WAFOptimisticLockException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, WAFOptimisticLockException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>An error occurred during the tagging operation. Retry your request.</p>
 */
export class WAFTagOperationException extends __BaseException {
  readonly name: "WAFTagOperationException" = "WAFTagOperationException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<WAFTagOperationException, __BaseException>) {
    super({
      name: "WAFTagOperationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, WAFTagOperationException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>WAF couldn’t perform your tagging operation because of an internal error. Retry
 *          your request.</p>
 */
export class WAFTagOperationInternalErrorException extends __BaseException {
  readonly name: "WAFTagOperationInternalErrorException" = "WAFTagOperationInternalErrorException";
  readonly $fault: "server" = "server";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<WAFTagOperationInternalErrorException, __BaseException>) {
    super({
      name: "WAFTagOperationInternalErrorException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, WAFTagOperationInternalErrorException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>A single regular expression. This is used in a <a>RegexPatternSet</a>.</p>
 */
export interface Regex {
  /**
   * @public
   * <p>The string representing the regular expression.</p>
   */
  RegexString?: string;
}

/**
 * @public
 */
export interface CreateRegexPatternSetRequest {
  /**
   * @public
   * <p>The name of the set. You cannot change the name after you create the set.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, an App Runner service, or an Amazon Web Services Verified Access instance.  </p>
   *          <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p>
   *          <ul>
   *             <li>
   *                <p>CLI - Specify the Region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p>
   *             </li>
   *             <li>
   *                <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p>
   *             </li>
   *          </ul>
   */
  Scope: Scope | undefined;

  /**
   * @public
   * <p>A description of the set that helps with identification. </p>
   */
  Description?: string;

  /**
   * @public
   * <p>Array of regular expression strings. </p>
   */
  RegularExpressionList: Regex[] | undefined;

  /**
   * @public
   * <p>An array of key:value pairs to associate with the resource.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 * <p>High-level information about a <a>RegexPatternSet</a>, returned by operations like create and list. This provides information like the ID, that you can use to retrieve and manage a <code>RegexPatternSet</code>, and the ARN, that you provide to the <a>RegexPatternSetReferenceStatement</a> to use the pattern set in a <a>Rule</a>.</p>
 */
export interface RegexPatternSetSummary {
  /**
   * @public
   * <p>The name of the data type instance. You cannot change the name after you create the instance.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>A unique identifier for the set. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>A description of the set that helps with identification. </p>
   */
  Description?: string;

  /**
   * @public
   * <p>A token used for optimistic locking. WAF returns a token to your <code>get</code> and <code>list</code> requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like <code>update</code> and <code>delete</code>. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another <code>get</code>, and use the new token returned by that operation. </p>
   */
  LockToken?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the entity.</p>
   */
  ARN?: string;
}

/**
 * @public
 */
export interface CreateRegexPatternSetResponse {
  /**
   * @public
   * <p>High-level information about a <a>RegexPatternSet</a>, returned by operations like create and list. This provides information like the ID, that you can use to retrieve and manage a <code>RegexPatternSet</code>, and the ARN, that you provide to the <a>RegexPatternSetReferenceStatement</a> to use the pattern set in a <a>Rule</a>.</p>
   */
  Summary?: RegexPatternSetSummary;
}

/**
 * @public
 * @enum
 */
export const ResponseContentType = {
  APPLICATION_JSON: "APPLICATION_JSON",
  TEXT_HTML: "TEXT_HTML",
  TEXT_PLAIN: "TEXT_PLAIN",
} as const;

/**
 * @public
 */
export type ResponseContentType = (typeof ResponseContentType)[keyof typeof ResponseContentType];

/**
 * @public
 * <p>The response body to use in a custom response to a web request. This is referenced by
 *          key from <a>CustomResponse</a>
 *             <code>CustomResponseBodyKey</code>.</p>
 */
export interface CustomResponseBody {
  /**
   * @public
   * <p>The type of content in the payload that you are defining in the <code>Content</code>
   *          string.</p>
   */
  ContentType: ResponseContentType | undefined;

  /**
   * @public
   * <p>The payload of the custom response. </p>
   *          <p>You can use JSON escape strings in JSON content. To do this, you must specify JSON
   *          content in the <code>ContentType</code> setting. </p>
   *          <p>For information about the limits on count and size for custom request and response settings, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/limits.html">WAF quotas</a>
   *      in the <i>WAF Developer Guide</i>. </p>
   */
  Content: string | undefined;
}

/**
 * @public
 * <p>High-level information about a <a>RuleGroup</a>, returned by operations like create and list. This provides information like the ID, that you can use to retrieve and manage a <code>RuleGroup</code>, and the ARN, that you provide to the <a>RuleGroupReferenceStatement</a> to use the rule group in a <a>Rule</a>.</p>
 */
export interface RuleGroupSummary {
  /**
   * @public
   * <p>The name of the data type instance. You cannot change the name after you create the instance.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>A unique identifier for the rule group. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>A description of the rule group that helps with identification. </p>
   */
  Description?: string;

  /**
   * @public
   * <p>A token used for optimistic locking. WAF returns a token to your <code>get</code> and <code>list</code> requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like <code>update</code> and <code>delete</code>. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another <code>get</code>, and use the new token returned by that operation. </p>
   */
  LockToken?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the entity.</p>
   */
  ARN?: string;
}

/**
 * @public
 */
export interface CreateRuleGroupResponse {
  /**
   * @public
   * <p>High-level information about a <a>RuleGroup</a>, returned by operations like create and list. This provides information like the ID, that you can use to retrieve and manage a <code>RuleGroup</code>, and the ARN, that you provide to the <a>RuleGroupReferenceStatement</a> to use the rule group in a <a>Rule</a>.</p>
   */
  Summary?: RuleGroupSummary;
}

/**
 * @public
 * <p>In a <a>WebACL</a>, this is the action that you want WAF to perform
 *          when a web request doesn't match any of the rules in the <code>WebACL</code>. The default
 *          action must be a terminating action.</p>
 */
export interface DefaultAction {
  /**
   * @public
   * <p>Specifies that WAF should block requests by default. </p>
   */
  Block?: BlockAction;

  /**
   * @public
   * <p>Specifies that WAF should allow requests by default.</p>
   */
  Allow?: AllowAction;
}

/**
 * @public
 * <p>High-level information about a <a>WebACL</a>, returned by operations like create and list. This provides information like the ID, that you can use to retrieve and manage a <code>WebACL</code>, and the ARN, that you provide to operations like <a>AssociateWebACL</a>.</p>
 */
export interface WebACLSummary {
  /**
   * @public
   * <p>The name of the web ACL. You cannot change the name of a web ACL after you create it.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The unique identifier for the web ACL. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>A description of the web ACL that helps with identification. </p>
   */
  Description?: string;

  /**
   * @public
   * <p>A token used for optimistic locking. WAF returns a token to your <code>get</code> and <code>list</code> requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like <code>update</code> and <code>delete</code>. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another <code>get</code>, and use the new token returned by that operation. </p>
   */
  LockToken?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the entity.</p>
   */
  ARN?: string;
}

/**
 * @public
 */
export interface CreateWebACLResponse {
  /**
   * @public
   * <p>High-level information about a <a>WebACL</a>, returned by operations like create and list. This provides information like the ID, that you can use to retrieve and manage a <code>WebACL</code>, and the ARN, that you provide to operations like <a>AssociateWebACL</a>.</p>
   */
  Summary?: WebACLSummary;
}

/**
 * @public
 * <p>The operation failed because you are inspecting the web request body, headers, or
 *          cookies without specifying how to handle oversize components. Rules that inspect the body
 *          must either provide an <code>OversizeHandling</code> configuration or they must be preceded
 *          by a <code>SizeConstraintStatement</code> that blocks the body content from being too
 *          large. Rules that inspect the headers or cookies must provide an
 *             <code>OversizeHandling</code> configuration. </p>
 *          <p>Provide the handling configuration and retry your operation.</p>
 *          <p>Alternately, you can suppress this warning by adding the following tag to the resource
 *          that you provide to this operation: <code>Tag</code>
 *             (key:<code>WAF:OversizeFieldsHandlingConstraintOptOut</code>,
 *          value:<code>true</code>).</p>
 */
export class WAFConfigurationWarningException extends __BaseException {
  readonly name: "WAFConfigurationWarningException" = "WAFConfigurationWarningException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<WAFConfigurationWarningException, __BaseException>) {
    super({
      name: "WAFConfigurationWarningException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, WAFConfigurationWarningException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface DeleteFirewallManagerRuleGroupsRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the web ACL.</p>
   */
  WebACLArn: string | undefined;

  /**
   * @public
   * <p>A token used for optimistic locking. WAF returns a token to your <code>get</code> and <code>list</code> requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like <code>update</code> and <code>delete</code>. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another <code>get</code>, and use the new token returned by that operation. </p>
   */
  WebACLLockToken: string | undefined;
}

/**
 * @public
 */
export interface DeleteFirewallManagerRuleGroupsResponse {
  /**
   * @public
   * <p>A token used for optimistic locking. WAF returns a token to your <code>get</code> and <code>list</code> requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like <code>update</code> and <code>delete</code>. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another <code>get</code>, and use the new token returned by that operation. </p>
   */
  NextWebACLLockToken?: string;
}

/**
 * @public
 */
export interface DeleteIPSetRequest {
  /**
   * @public
   * <p>The name of the IP set. You cannot change the name of an <code>IPSet</code> after you create it.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, an App Runner service, or an Amazon Web Services Verified Access instance.  </p>
   *          <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p>
   *          <ul>
   *             <li>
   *                <p>CLI - Specify the Region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p>
   *             </li>
   *             <li>
   *                <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p>
   *             </li>
   *          </ul>
   */
  Scope: Scope | undefined;

  /**
   * @public
   * <p>A unique identifier for the set. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>A token used for optimistic locking. WAF returns a token to your <code>get</code> and <code>list</code> requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like <code>update</code> and <code>delete</code>. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another <code>get</code>, and use the new token returned by that operation. </p>
   */
  LockToken: string | undefined;
}

/**
 * @public
 */
export interface DeleteIPSetResponse {}

/**
 * @public
 * <p>WAF couldn’t perform the operation because your resource is being used by another
 *          resource or it’s associated with another resource. </p>
 */
export class WAFAssociatedItemException extends __BaseException {
  readonly name: "WAFAssociatedItemException" = "WAFAssociatedItemException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<WAFAssociatedItemException, __BaseException>) {
    super({
      name: "WAFAssociatedItemException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, WAFAssociatedItemException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface DeleteLoggingConfigurationRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the web ACL from which you want to delete the <a>LoggingConfiguration</a>.</p>
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteLoggingConfigurationResponse {}

/**
 * @public
 */
export interface DeletePermissionPolicyRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the rule group from which you want to delete the
   *          policy.</p>
   *          <p>You must be the owner of the rule group to perform this operation.</p>
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface DeletePermissionPolicyResponse {}

/**
 * @public
 */
export interface DeleteRegexPatternSetRequest {
  /**
   * @public
   * <p>The name of the set. You cannot change the name after you create the set.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, an App Runner service, or an Amazon Web Services Verified Access instance.  </p>
   *          <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p>
   *          <ul>
   *             <li>
   *                <p>CLI - Specify the Region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p>
   *             </li>
   *             <li>
   *                <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p>
   *             </li>
   *          </ul>
   */
  Scope: Scope | undefined;

  /**
   * @public
   * <p>A unique identifier for the set. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>A token used for optimistic locking. WAF returns a token to your <code>get</code> and <code>list</code> requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like <code>update</code> and <code>delete</code>. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another <code>get</code>, and use the new token returned by that operation. </p>
   */
  LockToken: string | undefined;
}

/**
 * @public
 */
export interface DeleteRegexPatternSetResponse {}

/**
 * @public
 */
export interface DeleteRuleGroupRequest {
  /**
   * @public
   * <p>The name of the rule group. You cannot change the name of a rule group after you create it.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, an App Runner service, or an Amazon Web Services Verified Access instance.  </p>
   *          <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p>
   *          <ul>
   *             <li>
   *                <p>CLI - Specify the Region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p>
   *             </li>
   *             <li>
   *                <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p>
   *             </li>
   *          </ul>
   */
  Scope: Scope | undefined;

  /**
   * @public
   * <p>A unique identifier for the rule group. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>A token used for optimistic locking. WAF returns a token to your <code>get</code> and <code>list</code> requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like <code>update</code> and <code>delete</code>. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another <code>get</code>, and use the new token returned by that operation. </p>
   */
  LockToken: string | undefined;
}

/**
 * @public
 */
export interface DeleteRuleGroupResponse {}

/**
 * @public
 */
export interface DeleteWebACLRequest {
  /**
   * @public
   * <p>The name of the web ACL. You cannot change the name of a web ACL after you create it.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, an App Runner service, or an Amazon Web Services Verified Access instance.  </p>
   *          <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p>
   *          <ul>
   *             <li>
   *                <p>CLI - Specify the Region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p>
   *             </li>
   *             <li>
   *                <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p>
   *             </li>
   *          </ul>
   */
  Scope: Scope | undefined;

  /**
   * @public
   * <p>The unique identifier for the web ACL. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>A token used for optimistic locking. WAF returns a token to your <code>get</code> and <code>list</code> requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like <code>update</code> and <code>delete</code>. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another <code>get</code>, and use the new token returned by that operation. </p>
   */
  LockToken: string | undefined;
}

/**
 * @public
 */
export interface DeleteWebACLResponse {}

/**
 * @public
 */
export interface DescribeAllManagedProductsRequest {
  /**
   * @public
   * <p>Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, an App Runner service, or an Amazon Web Services Verified Access instance.  </p>
   *          <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p>
   *          <ul>
   *             <li>
   *                <p>CLI - Specify the Region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p>
   *             </li>
   *             <li>
   *                <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p>
   *             </li>
   *          </ul>
   */
  Scope: Scope | undefined;
}

/**
 * @public
 * <p>The properties of a managed product, such as an Amazon Web Services Managed Rules rule group or an Amazon Web Services Marketplace managed rule group. </p>
 */
export interface ManagedProductDescriptor {
  /**
   * @public
   * <p>The name of the managed rule group vendor. You use this, along with the rule group name, to identify a rule group.</p>
   */
  VendorName?: string;

  /**
   * @public
   * <p>The name of the managed rule group. For example, <code>AWSManagedRulesAnonymousIpList</code> or <code>AWSManagedRulesATPRuleSet</code>.</p>
   */
  ManagedRuleSetName?: string;

  /**
   * @public
   * <p>A unique identifier for the rule group. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.</p>
   */
  ProductId?: string;

  /**
   * @public
   * <p>For Amazon Web Services Marketplace managed rule groups only, the link to the rule group product page. </p>
   */
  ProductLink?: string;

  /**
   * @public
   * <p>The display name for the managed rule group. For example, <code>Anonymous IP list</code> or <code>Account takeover prevention</code>.</p>
   */
  ProductTitle?: string;

  /**
   * @public
   * <p>A short description of the managed rule group.</p>
   */
  ProductDescription?: string;

  /**
   * @public
   * <p>The Amazon resource name (ARN) of the Amazon Simple Notification Service SNS topic that's used to provide notification of changes
   *          to the managed rule group. You can subscribe to the SNS topic to receive notifications when
   *          the managed rule group is modified, such as for new versions and for version expiration.
   *          For more information, see the <a href="https://docs.aws.amazon.com/sns/latest/dg/welcome.html">Amazon Simple Notification Service Developer Guide</a>.</p>
   */
  SnsTopicArn?: string;

  /**
   * @public
   * <p>Indicates whether the rule group is versioned. </p>
   */
  IsVersioningSupported?: boolean;

  /**
   * @public
   * <p>Indicates whether the rule group provides an advanced set of protections, such as the the Amazon Web Services Managed Rules rule groups that
   *            are used for WAF intelligent threat mitigation.  </p>
   */
  IsAdvancedManagedRuleSet?: boolean;
}

/**
 * @public
 */
export interface DescribeAllManagedProductsResponse {
  /**
   * @public
   * <p>High-level information for the Amazon Web Services Managed Rules rule groups and Amazon Web Services Marketplace managed rule groups. </p>
   */
  ManagedProducts?: ManagedProductDescriptor[];
}

/**
 * @public
 */
export interface DescribeManagedProductsByVendorRequest {
  /**
   * @public
   * <p>The name of the managed rule group vendor. You use this, along with the rule group name, to identify a rule group.</p>
   */
  VendorName: string | undefined;

  /**
   * @public
   * <p>Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, an App Runner service, or an Amazon Web Services Verified Access instance.  </p>
   *          <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p>
   *          <ul>
   *             <li>
   *                <p>CLI - Specify the Region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p>
   *             </li>
   *             <li>
   *                <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p>
   *             </li>
   *          </ul>
   */
  Scope: Scope | undefined;
}

/**
 * @public
 */
export interface DescribeManagedProductsByVendorResponse {
  /**
   * @public
   * <p>High-level information for the managed rule groups owned by the specified vendor.  </p>
   */
  ManagedProducts?: ManagedProductDescriptor[];
}

/**
 * @public
 */
export interface DescribeManagedRuleGroupRequest {
  /**
   * @public
   * <p>The name of the managed rule group vendor. You use this, along with the rule group name, to identify a rule group.</p>
   */
  VendorName: string | undefined;

  /**
   * @public
   * <p>The name of the managed rule group. You use this, along with the vendor name, to identify the rule group.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, an App Runner service, or an Amazon Web Services Verified Access instance.  </p>
   *          <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p>
   *          <ul>
   *             <li>
   *                <p>CLI - Specify the Region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p>
   *             </li>
   *             <li>
   *                <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p>
   *             </li>
   *          </ul>
   */
  Scope: Scope | undefined;

  /**
   * @public
   * <p>The version of the rule group. You can only use a version that is not scheduled for
   *          expiration. If you don't provide this, WAF uses the vendor's default version. </p>
   */
  VersionName?: string;
}

/**
 * @public
 * <p>List of labels used by one or more of the rules of a <a>RuleGroup</a>. This
 *          summary object is used for the following rule group lists: </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>AvailableLabels</code> - Labels that rules add to matching requests.
 *                These labels are defined in the <code>RuleLabels</code> for a <a>Rule</a>. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ConsumedLabels</code> - Labels that rules match against.
 *                These labels are defined in a <code>LabelMatchStatement</code> specification, in the <a>Statement</a> definition of a rule.  </p>
 *             </li>
 *          </ul>
 */
export interface LabelSummary {
  /**
   * @public
   * <p>An individual label specification.</p>
   */
  Name?: string;
}

/**
 * @public
 * <p>High-level information about a <a>Rule</a>, returned by operations like <a>DescribeManagedRuleGroup</a>. This provides information like the ID, that you can use to retrieve and manage a <code>RuleGroup</code>, and the ARN, that you provide to the <a>RuleGroupReferenceStatement</a> to use the rule group in a <a>Rule</a>.</p>
 */
export interface RuleSummary {
  /**
   * @public
   * <p>The name of the rule. </p>
   */
  Name?: string;

  /**
   * @public
   * <p>The action that WAF should take on a web request when it matches a rule's
   *          statement. Settings at the web ACL level can override the rule action setting. </p>
   */
  Action?: RuleAction;
}

/**
 * @public
 */
export interface DescribeManagedRuleGroupResponse {
  /**
   * @public
   * <p>The managed rule group's version. </p>
   */
  VersionName?: string;

  /**
   * @public
   * <p>The Amazon resource name (ARN) of the Amazon Simple Notification Service SNS topic that's used to provide notification of changes
   *          to the managed rule group. You can subscribe to the SNS topic to receive notifications when
   *          the managed rule group is modified, such as for new versions and for version expiration.
   *          For more information, see the <a href="https://docs.aws.amazon.com/sns/latest/dg/welcome.html">Amazon Simple Notification Service Developer Guide</a>.</p>
   */
  SnsTopicArn?: string;

  /**
   * @public
   * <p>The web ACL capacity units (WCUs) required for this rule group.</p>
   *          <p>WAF uses WCUs to calculate and control the operating
   *          resources that are used to run your rules, rule groups, and web ACLs. WAF
   *          calculates capacity differently for each rule type, to reflect the relative cost of each rule.
   *          Simple rules that cost little to run use fewer WCUs than more complex rules
   * 				that use more processing power.
   * 				Rule group capacity is fixed at creation, which helps users plan their
   *          web ACL WCU usage when they use a rule group. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/aws-waf-capacity-units.html">WAF web ACL capacity units (WCU)</a>
   *     in the <i>WAF Developer Guide</i>. </p>
   */
  Capacity?: number;

  /**
   * @public
   * <p></p>
   */
  Rules?: RuleSummary[];

  /**
   * @public
   * <p>The label namespace prefix for this rule group. All labels added by rules in this rule group have this prefix. </p>
   *          <ul>
   *             <li>
   *                <p>The syntax for the label namespace prefix for a managed rule group is the following: </p>
   *                <p>
   *                   <code>awswaf:managed:<vendor>:<rule group name></code>:</p>
   *             </li>
   *             <li>
   *                <p>When a rule with a label matches a web request, WAF adds the fully qualified label to the request. A fully qualified label is made up of the label namespace from the rule group or web ACL where the rule is defined and the label from the rule, separated by a colon: </p>
   *                <p>
   *                   <code><label namespace>:<label from rule></code>
   *                </p>
   *             </li>
   *          </ul>
   */
  LabelNamespace?: string;

  /**
   * @public
   * <p>The labels that one or more rules in this rule group add to matching web requests. These labels are defined in the <code>RuleLabels</code> for a <a>Rule</a>.</p>
   */
  AvailableLabels?: LabelSummary[];

  /**
   * @public
   * <p>The labels that one or more rules in this rule group match against in label match statements. These labels are defined in a <code>LabelMatchStatement</code> specification, in the <a>Statement</a> definition of a rule.  </p>
   */
  ConsumedLabels?: LabelSummary[];
}

/**
 * @public
 */
export interface DisassociateWebACLRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource to disassociate from the web ACL. </p>
   *          <p>The ARN must be in one of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>For an Application Load Balancer: <code>arn:<i>partition</i>:elasticloadbalancing:<i>region</i>:<i>account-id</i>:loadbalancer/app/<i>load-balancer-name</i>/<i>load-balancer-id</i>
   *                   </code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>For an Amazon API Gateway REST API: <code>arn:<i>partition</i>:apigateway:<i>region</i>::/restapis/<i>api-id</i>/stages/<i>stage-name</i>
   *                   </code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>For an AppSync GraphQL API: <code>arn:<i>partition</i>:appsync:<i>region</i>:<i>account-id</i>:apis/<i>GraphQLApiId</i>
   *                   </code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>For an Amazon Cognito user pool: <code>arn:<i>partition</i>:cognito-idp:<i>region</i>:<i>account-id</i>:userpool/<i>user-pool-id</i>
   *                   </code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>For an App Runner service: <code>arn:<i>partition</i>:apprunner:<i>region</i>:<i>account-id</i>:service/<i>apprunner-service-name</i>/<i>apprunner-service-id</i>
   *                   </code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>For an Amazon Web Services Verified Access instance: <code>arn:<i>partition</i>:ec2:<i>region</i>:<i>account-id</i>:verified-access-instance/<i>instance-id</i>
   *                   </code>
   *                </p>
   *             </li>
   *          </ul>
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface DisassociateWebACLResponse {}

/**
 * @public
 * @enum
 */
export const Platform = {
  ANDROID: "ANDROID",
  IOS: "IOS",
} as const;

/**
 * @public
 */
export type Platform = (typeof Platform)[keyof typeof Platform];

/**
 * @public
 */
export interface GenerateMobileSdkReleaseUrlRequest {
  /**
   * @public
   * <p>The device platform.</p>
   */
  Platform: Platform | undefined;

  /**
   * @public
   * <p>The release version. For the latest available version, specify
   *          <code>LATEST</code>.</p>
   */
  ReleaseVersion: string | undefined;
}

/**
 * @public
 */
export interface GenerateMobileSdkReleaseUrlResponse {
  /**
   * @public
   * <p>The presigned download URL for the specified SDK release.</p>
   */
  Url?: string;
}

/**
 * @public
 */
export interface GetDecryptedAPIKeyRequest {
  /**
   * @public
   * <p>Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, an App Runner service, or an Amazon Web Services Verified Access instance.  </p>
   *          <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p>
   *          <ul>
   *             <li>
   *                <p>CLI - Specify the Region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p>
   *             </li>
   *             <li>
   *                <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p>
   *             </li>
   *          </ul>
   */
  Scope: Scope | undefined;

  /**
   * @public
   * <p>The encrypted API key. </p>
   */
  APIKey: string | undefined;
}

/**
 * @public
 */
export interface GetDecryptedAPIKeyResponse {
  /**
   * @public
   * <p>The token domains that are defined in this API key. </p>
   */
  TokenDomains?: string[];

  /**
   * @public
   * <p>The date and time that the key was created. </p>
   */
  CreationTimestamp?: Date;
}

/**
 * @public
 */
export interface GetIPSetRequest {
  /**
   * @public
   * <p>The name of the IP set. You cannot change the name of an <code>IPSet</code> after you create it.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, an App Runner service, or an Amazon Web Services Verified Access instance.  </p>
   *          <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p>
   *          <ul>
   *             <li>
   *                <p>CLI - Specify the Region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p>
   *             </li>
   *             <li>
   *                <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p>
   *             </li>
   *          </ul>
   */
  Scope: Scope | undefined;

  /**
   * @public
   * <p>A unique identifier for the set. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.</p>
   */
  Id: string | undefined;
}

/**
 * @public
 * <p>Contains zero or more IP addresses or blocks of IP addresses specified in Classless
 *          Inter-Domain Routing (CIDR) notation. WAF supports all IPv4 and IPv6 CIDR ranges
 *          except for /0. For information about CIDR notation, see the Wikipedia entry <a href="https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Classless
 *             Inter-Domain Routing</a>. </p>
 *          <p>WAF assigns an ARN to each <code>IPSet</code> that you create. To use an IP set in a
 *          rule, you provide the ARN to the <a>Rule</a> statement <a>IPSetReferenceStatement</a>. </p>
 */
export interface IPSet {
  /**
   * @public
   * <p>The name of the IP set. You cannot change the name of an <code>IPSet</code> after you create it.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>A unique identifier for the set. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the entity.</p>
   */
  ARN: string | undefined;

  /**
   * @public
   * <p>A description of the IP set that helps with identification. </p>
   */
  Description?: string;

  /**
   * @public
   * <p>The version of the IP addresses, either <code>IPV4</code> or <code>IPV6</code>. </p>
   */
  IPAddressVersion: IPAddressVersion | undefined;

  /**
   * @public
   * <p>Contains an array of strings that specifies zero or more IP addresses or blocks of IP addresses that you want WAF to inspect for in incoming requests. All addresses must be specified using Classless Inter-Domain Routing (CIDR) notation. WAF supports all IPv4 and IPv6 CIDR ranges except for <code>/0</code>. </p>
   *          <p>Example address strings: </p>
   *          <ul>
   *             <li>
   *                <p>For requests that originated from the IP address 192.0.2.44, specify <code>192.0.2.44/32</code>.</p>
   *             </li>
   *             <li>
   *                <p>For requests that originated from IP addresses from 192.0.2.0 to 192.0.2.255, specify
   *                <code>192.0.2.0/24</code>.</p>
   *             </li>
   *             <li>
   *                <p>For requests that originated from the IP address 1111:0000:0000:0000:0000:0000:0000:0111, specify <code>1111:0000:0000:0000:0000:0000:0000:0111/128</code>.</p>
   *             </li>
   *             <li>
   *                <p>For requests that originated from IP addresses 1111:0000:0000:0000:0000:0000:0000:0000 to 1111:0000:0000:0000:ffff:ffff:ffff:ffff, specify <code>1111:0000:0000:0000:0000:0000:0000:0000/64</code>.</p>
   *             </li>
   *          </ul>
   *          <p>For more information about CIDR notation, see the Wikipedia entry <a href="https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Classless Inter-Domain Routing</a>.</p>
   *          <p>Example JSON <code>Addresses</code> specifications: </p>
   *          <ul>
   *             <li>
   *                <p>Empty array: <code>"Addresses": []</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Array with one address: <code>"Addresses": ["192.0.2.44/32"]</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Array with three addresses: <code>"Addresses": ["192.0.2.44/32", "192.0.2.0/24", "192.0.0.0/16"]</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>INVALID specification: <code>"Addresses": [""]</code> INVALID </p>
   *             </li>
   *          </ul>
   */
  Addresses: string[] | undefined;
}

/**
 * @public
 */
export interface GetIPSetResponse {
  /**
   * @public
   * <p></p>
   */
  IPSet?: IPSet;

  /**
   * @public
   * <p>A token used for optimistic locking. WAF returns a token to your <code>get</code> and <code>list</code> requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like <code>update</code> and <code>delete</code>. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another <code>get</code>, and use the new token returned by that operation. </p>
   */
  LockToken?: string;
}

/**
 * @public
 */
export interface GetLoggingConfigurationRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the web ACL for which you want to get the <a>LoggingConfiguration</a>.</p>
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const FilterBehavior = {
  DROP: "DROP",
  KEEP: "KEEP",
} as const;

/**
 * @public
 */
export type FilterBehavior = (typeof FilterBehavior)[keyof typeof FilterBehavior];

/**
 * @public
 * <p>A single label name condition for a <a>Condition</a> in a logging
 *          filter.</p>
 */
export interface LabelNameCondition {
  /**
   * @public
   * <p>The label name that a log record must contain in order to meet the condition. This must
   *          be a fully qualified label name. Fully qualified labels have a prefix, optional namespaces, and label name. The prefix identifies the rule group or web ACL context of the rule that added the label.  </p>
   */
  LabelName: string | undefined;
}

/**
 * @public
 * <p>A single match condition for a <a>Filter</a>.</p>
 */
export interface Condition {
  /**
   * @public
   * <p>A single action condition. This is the action setting that a log record must contain in order to meet the condition.</p>
   */
  ActionCondition?: ActionCondition;

  /**
   * @public
   * <p>A single label name condition. This is the fully qualified label name that a log record must contain in order to meet the condition.
   *        Fully qualified labels have a prefix, optional namespaces, and label name. The prefix identifies the rule group or web ACL context of the rule that added the label.  </p>
   */
  LabelNameCondition?: LabelNameCondition;
}

/**
 * @public
 * @enum
 */
export const FilterRequirement = {
  MEETS_ALL: "MEETS_ALL",
  MEETS_ANY: "MEETS_ANY",
} as const;

/**
 * @public
 */
export type FilterRequirement = (typeof FilterRequirement)[keyof typeof FilterRequirement];

/**
 * @public
 * <p>A single logging filter, used in <a>LoggingFilter</a>. </p>
 */
export interface Filter {
  /**
   * @public
   * <p>How to handle logs that satisfy the filter's conditions and requirement. </p>
   */
  Behavior: FilterBehavior | undefined;

  /**
   * @public
   * <p>Logic to apply to the filtering conditions. You can specify that, in order to satisfy
   *          the filter, a log must match all conditions or must match at least one condition.</p>
   */
  Requirement: FilterRequirement | undefined;

  /**
   * @public
   * <p>Match conditions for the filter.</p>
   */
  Conditions: Condition[] | undefined;
}

/**
 * @public
 * <p>Filtering that specifies which web requests are kept in the logs and which are dropped,
 *          defined for a web ACL's <a>LoggingConfiguration</a>. </p>
 *          <p>You can filter on the rule action and on the web request labels that were applied by
 *          matching rules during web ACL evaluation. </p>
 */
export interface LoggingFilter {
  /**
   * @public
   * <p>The filters that you want to apply to the logs. </p>
   */
  Filters: Filter[] | undefined;

  /**
   * @public
   * <p>Default handling for logs that don't match any of the specified filtering conditions.
   *       </p>
   */
  DefaultBehavior: FilterBehavior | undefined;
}

/**
 * @public
 * <p>Defines an association between logging destinations and a web ACL resource, for logging
 *          from WAF. As part of the association, you can specify parts of the standard logging
 *          fields to keep out of the logs and you can specify filters so that you log only a subset of
 *          the logging records. </p>
 *          <note>
 *             <p>You can define one logging destination per web ACL.</p>
 *          </note>
 *          <p>You can access information about the traffic that WAF inspects using the following
 *          steps:</p>
 *          <ol>
 *             <li>
 *                <p>Create your logging destination. You can use an Amazon CloudWatch Logs log group, an Amazon Simple Storage Service (Amazon S3) bucket, or an Amazon Kinesis Data Firehose. </p>
 *                <p>The name that you give the destination must start with <code>aws-waf-logs-</code>. Depending on the type of destination, you might need to configure additional settings or permissions. </p>
 *                <p>For configuration requirements and pricing information for each destination type, see
 *                  <a href="https://docs.aws.amazon.com/waf/latest/developerguide/logging.html">Logging web ACL traffic</a>
 *                  in the <i>WAF Developer Guide</i>.</p>
 *             </li>
 *             <li>
 *                <p>Associate your logging destination to your web ACL using a
 *                   <code>PutLoggingConfiguration</code> request.</p>
 *             </li>
 *          </ol>
 *          <p>When you successfully enable logging using a <code>PutLoggingConfiguration</code>
 *           request, WAF creates an additional role or policy that is required to write
 *               logs to the logging destination. For an Amazon CloudWatch Logs log group, WAF creates a resource policy on the log group.
 *           For an Amazon S3 bucket, WAF creates a bucket policy. For an Amazon Kinesis Data Firehose, WAF creates a service-linked role.</p>
 *          <p>For additional information about web ACL logging, see
 *            <a href="https://docs.aws.amazon.com/waf/latest/developerguide/logging.html">Logging web ACL traffic information</a>
 *                in the <i>WAF Developer Guide</i>.</p>
 */
export interface LoggingConfiguration {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the web ACL that you want to associate with
   *             <code>LogDestinationConfigs</code>.</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>The logging destination configuration that you want to associate with the web
   *          ACL.</p>
   *          <note>
   *             <p>You can associate one logging destination to a web ACL.</p>
   *          </note>
   */
  LogDestinationConfigs: string[] | undefined;

  /**
   * @public
   * <p>The parts of the request that you want to keep out of the logs.</p>
   *          <p>For example, if you
   *          redact the <code>SingleHeader</code> field, the <code>HEADER</code> field in the logs will
   *          be <code>REDACTED</code> for all rules that use the <code>SingleHeader</code>
   *             <code>FieldToMatch</code> setting. </p>
   *          <p>Redaction applies only to the component that's specified in the rule's <code>FieldToMatch</code> setting, so the <code>SingleHeader</code> redaction
   *          doesn't apply to rules that use the <code>Headers</code>
   *             <code>FieldToMatch</code>.</p>
   *          <note>
   *             <p>You can specify only the following fields for redaction: <code>UriPath</code>,
   *          <code>QueryString</code>, <code>SingleHeader</code>, and <code>Method</code>.</p>
   *          </note>
   */
  RedactedFields?: FieldToMatch[];

  /**
   * @public
   * <p>Indicates whether the logging configuration was created by Firewall Manager, as part of an
   *          WAF policy configuration. If true, only Firewall Manager can modify or delete the
   *          configuration. </p>
   */
  ManagedByFirewallManager?: boolean;

  /**
   * @public
   * <p>Filtering that specifies which web requests are kept in the logs and which are dropped.
   *          You can filter on the rule action and on the web request labels that were applied by
   *          matching rules during web ACL evaluation. </p>
   */
  LoggingFilter?: LoggingFilter;
}

/**
 * @public
 */
export interface GetLoggingConfigurationResponse {
  /**
   * @public
   * <p>The <a>LoggingConfiguration</a> for the specified web ACL.</p>
   */
  LoggingConfiguration?: LoggingConfiguration;
}

/**
 * @public
 */
export interface GetManagedRuleSetRequest {
  /**
   * @public
   * <p>The name of the managed rule set. You use this, along with the rule set ID, to identify the rule set.</p>
   *          <p>This name is assigned to the corresponding managed rule group, which your customers can access and use. </p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, an App Runner service, or an Amazon Web Services Verified Access instance.  </p>
   *          <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p>
   *          <ul>
   *             <li>
   *                <p>CLI - Specify the Region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p>
   *             </li>
   *             <li>
   *                <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p>
   *             </li>
   *          </ul>
   */
  Scope: Scope | undefined;

  /**
   * @public
   * <p>A unique identifier for the managed rule set. The ID is returned in the responses to commands like <code>list</code>. You provide it to operations like <code>get</code> and <code>update</code>.</p>
   */
  Id: string | undefined;
}

/**
 * @public
 * <p>Information for a single version of a managed rule set. </p>
 *          <note>
 *             <p>This is intended for use only by vendors of managed rule sets. Vendors are Amazon Web Services and Amazon Web Services Marketplace sellers. </p>
 *             <p>Vendors, you can use the managed rule set APIs to provide controlled rollout of your versioned managed rule group offerings for your customers. The APIs are <code>ListManagedRuleSets</code>, <code>GetManagedRuleSet</code>, <code>PutManagedRuleSetVersions</code>, and <code>UpdateManagedRuleSetVersionExpiryDate</code>.</p>
 *          </note>
 */
export interface ManagedRuleSetVersion {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the vendor rule group that's used to define the
   *          published version of your managed rule group. </p>
   */
  AssociatedRuleGroupArn?: string;

  /**
   * @public
   * <p>The web ACL capacity units (WCUs) required for this rule group.</p>
   *          <p>WAF uses WCUs to calculate and control the operating
   *          resources that are used to run your rules, rule groups, and web ACLs. WAF
   *          calculates capacity differently for each rule type, to reflect the relative cost of each rule.
   *          Simple rules that cost little to run use fewer WCUs than more complex rules
   * 				that use more processing power.
   * 				Rule group capacity is fixed at creation, which helps users plan their
   *          web ACL WCU usage when they use a rule group. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/aws-waf-capacity-units.html">WAF web ACL capacity units (WCU)</a>
   *     in the <i>WAF Developer Guide</i>. </p>
   */
  Capacity?: number;

  /**
   * @public
   * <p>The amount of time you expect this version of your managed rule group to last, in days.
   *       </p>
   */
  ForecastedLifetime?: number;

  /**
   * @public
   * <p>The time that you first published this version. </p>
   *          <p>Times are in Coordinated Universal Time (UTC) format. UTC format includes the special designator, Z. For example, "2016-09-27T14:50Z". </p>
   */
  PublishTimestamp?: Date;

  /**
   * @public
   * <p>The last time that you updated this version. </p>
   *          <p>Times are in Coordinated Universal Time (UTC) format. UTC format includes the special designator, Z. For example, "2016-09-27T14:50Z". </p>
   */
  LastUpdateTimestamp?: Date;

  /**
   * @public
   * <p>The time that this version is set to expire.</p>
   *          <p>Times are in Coordinated Universal Time (UTC) format. UTC format includes the special designator, Z. For example, "2016-09-27T14:50Z". </p>
   */
  ExpiryTimestamp?: Date;
}

/**
 * @public
 * <p>A set of rules that is managed by Amazon Web Services and Amazon Web Services Marketplace sellers to provide versioned managed
 *          rule groups for customers of WAF.</p>
 *          <note>
 *             <p>This is intended for use only by vendors of managed rule sets. Vendors are Amazon Web Services and Amazon Web Services Marketplace sellers. </p>
 *             <p>Vendors, you can use the managed rule set APIs to provide controlled rollout of your versioned managed rule group offerings for your customers. The APIs are <code>ListManagedRuleSets</code>, <code>GetManagedRuleSet</code>, <code>PutManagedRuleSetVersions</code>, and <code>UpdateManagedRuleSetVersionExpiryDate</code>.</p>
 *          </note>
 */
export interface ManagedRuleSet {
  /**
   * @public
   * <p>The name of the managed rule set. You use this, along with the rule set ID, to identify the rule set.</p>
   *          <p>This name is assigned to the corresponding managed rule group, which your customers can access and use. </p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>A unique identifier for the managed rule set. The ID is returned in the responses to commands like <code>list</code>. You provide it to operations like <code>get</code> and <code>update</code>.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the entity.</p>
   */
  ARN: string | undefined;

  /**
   * @public
   * <p>A description of the set that helps with identification. </p>
   */
  Description?: string;

  /**
   * @public
   * <p>The versions of this managed rule set that are available for use by customers. </p>
   */
  PublishedVersions?: Record<string, ManagedRuleSetVersion>;

  /**
   * @public
   * <p>The version that you would like your customers to use.</p>
   */
  RecommendedVersion?: string;

  /**
   * @public
   * <p>The label namespace prefix for the managed rule groups that are offered to customers from this managed rule set. All labels that are added by rules in the managed rule group have this prefix. </p>
   *          <ul>
   *             <li>
   *                <p>The syntax for the label namespace prefix for a managed rule group is the following: </p>
   *                <p>
   *                   <code>awswaf:managed:<vendor>:<rule group name></code>:</p>
   *             </li>
   *             <li>
   *                <p>When a rule with a label matches a web request, WAF adds the fully qualified label to the request. A fully qualified label is made up of the label namespace from the rule group or web ACL where the rule is defined and the label from the rule, separated by a colon: </p>
   *                <p>
   *                   <code><label namespace>:<label from rule></code>
   *                </p>
   *             </li>
   *          </ul>
   */
  LabelNamespace?: string;
}

/**
 * @public
 */
export interface GetManagedRuleSetResponse {
  /**
   * @public
   * <p>The managed rule set that you requested. </p>
   */
  ManagedRuleSet?: ManagedRuleSet;

  /**
   * @public
   * <p>A token used for optimistic locking. WAF returns a token to your <code>get</code> and <code>list</code> requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like <code>update</code> and <code>delete</code>. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another <code>get</code>, and use the new token returned by that operation. </p>
   */
  LockToken?: string;
}

/**
 * @public
 */
export interface GetMobileSdkReleaseRequest {
  /**
   * @public
   * <p>The device platform.</p>
   */
  Platform: Platform | undefined;

  /**
   * @public
   * <p>The release version. For the latest available version, specify
   *          <code>LATEST</code>.</p>
   */
  ReleaseVersion: string | undefined;
}

/**
 * @public
 * <p>Information for a release of the mobile SDK, including release notes and tags.</p>
 *          <p>The mobile SDK is not generally available. Customers who have access to the mobile SDK can use it to establish and manage WAF tokens for use in HTTP(S) requests from a mobile device to WAF. For more information, see
 * <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-application-integration.html">WAF client application integration</a> in the <i>WAF Developer Guide</i>.</p>
 */
export interface MobileSdkRelease {
  /**
   * @public
   * <p>The release version. </p>
   */
  ReleaseVersion?: string;

  /**
   * @public
   * <p>The timestamp of the release. </p>
   */
  Timestamp?: Date;

  /**
   * @public
   * <p>Notes describing the release.</p>
   */
  ReleaseNotes?: string;

  /**
   * @public
   * <p>Tags that are associated with the release. </p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface GetMobileSdkReleaseResponse {
  /**
   * @public
   * <p>Information for a specified SDK release, including release notes and tags.</p>
   */
  MobileSdkRelease?: MobileSdkRelease;
}

/**
 * @public
 */
export interface GetPermissionPolicyRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the rule group for which you want to get the
   *          policy.</p>
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface GetPermissionPolicyResponse {
  /**
   * @public
   * <p>The IAM policy that is attached to the specified rule group.</p>
   */
  Policy?: string;
}

/**
 * @public
 */
export interface GetRateBasedStatementManagedKeysRequest {
  /**
   * @public
   * <p>Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, an App Runner service, or an Amazon Web Services Verified Access instance.  </p>
   *          <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p>
   *          <ul>
   *             <li>
   *                <p>CLI - Specify the Region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p>
   *             </li>
   *             <li>
   *                <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p>
   *             </li>
   *          </ul>
   */
  Scope: Scope | undefined;

  /**
   * @public
   * <p>The name of the web ACL. You cannot change the name of a web ACL after you create it.</p>
   */
  WebACLName: string | undefined;

  /**
   * @public
   * <p>The unique identifier for the web ACL. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.</p>
   */
  WebACLId: string | undefined;

  /**
   * @public
   * <p>The name of the rule group reference statement in your web ACL. This is required only
   *          when you have the rate-based rule nested inside a rule group. </p>
   */
  RuleGroupRuleName?: string;

  /**
   * @public
   * <p>The name of the rate-based rule to get the keys for. If you have the rule defined inside
   *          a rule group that you're using in your web ACL, also provide the name of the rule group
   *          reference statement in the request parameter <code>RuleGroupRuleName</code>.</p>
   */
  RuleName: string | undefined;
}

/**
 * @public
 * <p>The set of IP addresses that are currently blocked for a <a>RateBasedStatement</a>. This is only available for rate-based rules
 *           that aggregate on just the IP address, with the <code>AggregateKeyType</code> set to <code>IP</code> or <code>FORWARDED_IP</code>.</p>
 *          <p>A rate-based rule applies its rule action to requests from IP addresses that are in the rule's managed keys list and that match the rule's scope-down statement. When a rule has no scope-down statement, it applies the action to all requests from the IP addresses that are in the list. The rule applies its rule action to rate limit the matching requests. The action is usually Block but it can be any valid rule action except for Allow. </p>
 *          <p>The maximum number of IP addresses that can be rate limited by a single rate-based rule instance is 10,000. If more than 10,000 addresses exceed the rate limit, WAF limits those with the highest rates. </p>
 */
export interface RateBasedStatementManagedKeysIPSet {
  /**
   * @public
   * <p>The version of the IP addresses, either <code>IPV4</code> or <code>IPV6</code>. </p>
   */
  IPAddressVersion?: IPAddressVersion;

  /**
   * @public
   * <p>The IP addresses that are currently blocked.</p>
   */
  Addresses?: string[];
}

/**
 * @public
 */
export interface GetRateBasedStatementManagedKeysResponse {
  /**
   * @public
   * <p>The keys that are of Internet Protocol version 4 (IPv4). </p>
   */
  ManagedKeysIPV4?: RateBasedStatementManagedKeysIPSet;

  /**
   * @public
   * <p>The keys that are of Internet Protocol version 6 (IPv6). </p>
   */
  ManagedKeysIPV6?: RateBasedStatementManagedKeysIPSet;
}

/**
 * @public
 * <p>The rule that you've named doesn't aggregate solely on the IP address or solely on the forwarded IP address. This call
 *            is only available for rate-based rules with an <code>AggregateKeyType</code> setting of <code>IP</code> or <code>FORWARDED_IP</code>.</p>
 */
export class WAFUnsupportedAggregateKeyTypeException extends __BaseException {
  readonly name: "WAFUnsupportedAggregateKeyTypeException" = "WAFUnsupportedAggregateKeyTypeException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<WAFUnsupportedAggregateKeyTypeException, __BaseException>) {
    super({
      name: "WAFUnsupportedAggregateKeyTypeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, WAFUnsupportedAggregateKeyTypeException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface GetRegexPatternSetRequest {
  /**
   * @public
   * <p>The name of the set. You cannot change the name after you create the set.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, an App Runner service, or an Amazon Web Services Verified Access instance.  </p>
   *          <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p>
   *          <ul>
   *             <li>
   *                <p>CLI - Specify the Region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p>
   *             </li>
   *             <li>
   *                <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p>
   *             </li>
   *          </ul>
   */
  Scope: Scope | undefined;

  /**
   * @public
   * <p>A unique identifier for the set. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.</p>
   */
  Id: string | undefined;
}

/**
 * @public
 * <p>Contains one or more regular expressions. </p>
 *          <p>WAF assigns an ARN to each <code>RegexPatternSet</code> that you create. To use a
 *          set in a rule, you provide the ARN to the <a>Rule</a> statement <a>RegexPatternSetReferenceStatement</a>. </p>
 */
export interface RegexPatternSet {
  /**
   * @public
   * <p>The name of the set. You cannot change the name after you create the set.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>A unique identifier for the set. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the entity.</p>
   */
  ARN?: string;

  /**
   * @public
   * <p>A description of the set that helps with identification. </p>
   */
  Description?: string;

  /**
   * @public
   * <p>The regular expression patterns in the set.</p>
   */
  RegularExpressionList?: Regex[];
}

/**
 * @public
 */
export interface GetRegexPatternSetResponse {
  /**
   * @public
   * <p></p>
   */
  RegexPatternSet?: RegexPatternSet;

  /**
   * @public
   * <p>A token used for optimistic locking. WAF returns a token to your <code>get</code> and <code>list</code> requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like <code>update</code> and <code>delete</code>. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another <code>get</code>, and use the new token returned by that operation. </p>
   */
  LockToken?: string;
}

/**
 * @public
 */
export interface GetRuleGroupRequest {
  /**
   * @public
   * <p>The name of the rule group. You cannot change the name of a rule group after you create it.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, an App Runner service, or an Amazon Web Services Verified Access instance.  </p>
   *          <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p>
   *          <ul>
   *             <li>
   *                <p>CLI - Specify the Region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p>
   *             </li>
   *             <li>
   *                <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p>
   *             </li>
   *          </ul>
   */
  Scope?: Scope;

  /**
   * @public
   * <p>A unique identifier for the rule group. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the entity.</p>
   */
  ARN?: string;
}

/**
 * @public
 * <p>In a <a>GetSampledRequests</a> request, the <code>StartTime</code> and
 *             <code>EndTime</code> objects specify the time range for which you want WAF to
 *          return a sample of web requests.</p>
 *          <p>You must specify the times in Coordinated Universal Time (UTC) format. UTC format
 *          includes the special designator, <code>Z</code>. For example,
 *             <code>"2016-09-27T14:50Z"</code>. You can specify any time range in the previous three
 *          hours.</p>
 *          <p>In a <a>GetSampledRequests</a> response, the <code>StartTime</code> and
 *             <code>EndTime</code> objects specify the time range for which WAF actually returned a
 *          sample of web requests. WAF gets the specified number of requests from among the first
 *          5,000 requests that your Amazon Web Services resource receives during the specified time period. If your
 *          resource receives more than 5,000 requests during that period, WAF stops sampling after
 *          the 5,000th request. In that case, <code>EndTime</code> is the time that WAF received the
 *          5,000th request.</p>
 */
export interface TimeWindow {
  /**
   * @public
   * <p>The beginning of the time range from which you want <code>GetSampledRequests</code> to
   *          return a sample of the requests that your Amazon Web Services resource received. You must specify the
   *          times in Coordinated Universal Time (UTC) format. UTC format includes the special
   *          designator, <code>Z</code>. For example, <code>"2016-09-27T14:50Z"</code>. You can specify
   *          any time range in the previous three hours.</p>
   */
  StartTime: Date | undefined;

  /**
   * @public
   * <p>The end of the time range from which you want <code>GetSampledRequests</code> to return
   *          a sample of the requests that your Amazon Web Services resource received. You must specify the times in
   *          Coordinated Universal Time (UTC) format. UTC format includes the special designator,
   *             <code>Z</code>. For example, <code>"2016-09-27T14:50Z"</code>. You can specify any time
   *          range in the previous three hours.</p>
   */
  EndTime: Date | undefined;
}

/**
 * @public
 */
export interface GetSampledRequestsRequest {
  /**
   * @public
   * <p>The Amazon resource name (ARN) of the <code>WebACL</code> for which you want a sample of
   *          requests.</p>
   */
  WebAclArn: string | undefined;

  /**
   * @public
   * <p>The metric name assigned to the <code>Rule</code> or <code>RuleGroup</code> dimension for which
   *          you want a sample of requests.</p>
   */
  RuleMetricName: string | undefined;

  /**
   * @public
   * <p>Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, an App Runner service, or an Amazon Web Services Verified Access instance.  </p>
   *          <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p>
   *          <ul>
   *             <li>
   *                <p>CLI - Specify the Region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p>
   *             </li>
   *             <li>
   *                <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p>
   *             </li>
   *          </ul>
   */
  Scope: Scope | undefined;

  /**
   * @public
   * <p>The start date and time and the end date and time of the range for which you want
   *             <code>GetSampledRequests</code> to return a sample of requests. You must specify the
   *          times in Coordinated Universal Time (UTC) format. UTC format includes the special
   *          designator, <code>Z</code>. For example, <code>"2016-09-27T14:50Z"</code>. You can specify
   *          any time range in the previous three hours. If you specify a start time that's earlier than
   *          three hours ago, WAF sets it to three hours ago.</p>
   */
  TimeWindow: TimeWindow | undefined;

  /**
   * @public
   * <p>The number of requests that you want WAF to return from among the first 5,000
   *          requests that your Amazon Web Services resource received during the time range. If your resource received
   *          fewer requests than the value of <code>MaxItems</code>, <code>GetSampledRequests</code>
   *          returns information about all of them. </p>
   */
  MaxItems: number | undefined;
}

/**
 * @public
 * @enum
 */
export const FailureReason = {
  TOKEN_DOMAIN_MISMATCH: "TOKEN_DOMAIN_MISMATCH",
  TOKEN_EXPIRED: "TOKEN_EXPIRED",
  TOKEN_INVALID: "TOKEN_INVALID",
  TOKEN_MISSING: "TOKEN_MISSING",
} as const;

/**
 * @public
 */
export type FailureReason = (typeof FailureReason)[keyof typeof FailureReason];

/**
 * @public
 * <p>The result from the inspection of the web request for a valid <code>CAPTCHA</code> token. </p>
 */
export interface CaptchaResponse {
  /**
   * @public
   * <p>The HTTP response code indicating the status of the <code>CAPTCHA</code> token in the
   *          web request. If the token is missing, invalid, or expired, this code is <code>405 Method
   *             Not Allowed</code>.</p>
   */
  ResponseCode?: number;

  /**
   * @public
   * <p>The time that the <code>CAPTCHA</code> was last solved for the supplied token. </p>
   */
  SolveTimestamp?: number;

  /**
   * @public
   * <p>The reason for failure, populated when the evaluation of the token fails.</p>
   */
  FailureReason?: FailureReason;
}

/**
 * @public
 * <p>The result from the inspection of the web request for a valid challenge token. </p>
 */
export interface ChallengeResponse {
  /**
   * @public
   * <p>The HTTP response code indicating the status of the challenge token in the
   *          web request. If the token is missing, invalid, or expired, this code is <code>202 Request Accepted</code>.</p>
   */
  ResponseCode?: number;

  /**
   * @public
   * <p>The time that the challenge was last solved for the supplied token. </p>
   */
  SolveTimestamp?: number;

  /**
   * @public
   * <p>The reason for failure, populated when the evaluation of the token fails.</p>
   */
  FailureReason?: FailureReason;
}

/**
 * @public
 * <p>Part of the response from <a>GetSampledRequests</a>. This is a complex type
 *          that appears as <code>Headers</code> in the response syntax. <code>HTTPHeader</code>
 *          contains the names and values of all of the headers that appear in one of the web requests.
 *       </p>
 */
export interface HTTPHeader {
  /**
   * @public
   * <p>The name of the HTTP header.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The value of the HTTP header.</p>
   */
  Value?: string;
}

/**
 * @public
 * <p>Part of the response from <a>GetSampledRequests</a>. This is a complex type
 *          that appears as <code>Request</code> in the response syntax. <code>HTTPRequest</code>
 *          contains information about one of the web requests. </p>
 */
export interface HTTPRequest {
  /**
   * @public
   * <p>The IP address that the request originated from. If the web ACL is associated with a
   *          CloudFront distribution, this is the value of one of the following fields in CloudFront access
   *          logs:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>c-ip</code>, if the viewer did not use an HTTP proxy or a load balancer to send
   *                the request</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>x-forwarded-for</code>, if the viewer did use an HTTP proxy or a load balancer
   *                to send the request</p>
   *             </li>
   *          </ul>
   */
  ClientIP?: string;

  /**
   * @public
   * <p>The two-letter country code for the country that the request originated from. For a
   *          current list of country codes, see the Wikipedia entry <a href="https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2">ISO 3166-1
   *          alpha-2</a>.</p>
   */
  Country?: string;

  /**
   * @public
   * <p>The URI path of the request, which identifies the resource, for example,
   *             <code>/images/daily-ad.jpg</code>.</p>
   */
  URI?: string;

  /**
   * @public
   * <p>The HTTP method specified in the sampled web request. </p>
   */
  Method?: string;

  /**
   * @public
   * <p>The HTTP version specified in the sampled web request, for example,
   *             <code>HTTP/1.1</code>.</p>
   */
  HTTPVersion?: string;

  /**
   * @public
   * <p>A complex type that contains the name and value for each header in the sampled web
   *          request.</p>
   */
  Headers?: HTTPHeader[];
}

/**
 * @public
 * <p>Represents a single sampled web request. The response from <a>GetSampledRequests</a> includes a <code>SampledHTTPRequests</code> complex type
 *          that appears as <code>SampledRequests</code> in the response syntax.
 *             <code>SampledHTTPRequests</code> contains an array of <code>SampledHTTPRequest</code>
 *          objects.</p>
 */
export interface SampledHTTPRequest {
  /**
   * @public
   * <p>A complex type that contains detailed information about the request.</p>
   */
  Request: HTTPRequest | undefined;

  /**
   * @public
   * <p>A value that indicates how one result in the response relates proportionally to other
   *          results in the response. For example, a result that has a weight of <code>2</code>
   *          represents roughly twice as many web requests as a result that has a weight of
   *             <code>1</code>.</p>
   */
  Weight: number | undefined;

  /**
   * @public
   * <p>The time at which WAF received the request from your Amazon Web Services resource, in Unix time
   *          format (in seconds).</p>
   */
  Timestamp?: Date;

  /**
   * @public
   * <p>The action that WAF applied to the request.</p>
   */
  Action?: string;

  /**
   * @public
   * <p>The name of the <code>Rule</code> that the request matched. For managed rule groups, the
   *          format for this name is <code><vendor name>#<managed rule group name>#<rule
   *             name></code>. For your own rule groups, the format for this name is <code><rule
   *             group name>#<rule name></code>. If the rule is not in a rule group, this field
   *          is absent. </p>
   */
  RuleNameWithinRuleGroup?: string;

  /**
   * @public
   * <p>Custom request headers inserted by WAF into the request, according to the custom
   *          request configuration for the matching rule action.</p>
   */
  RequestHeadersInserted?: HTTPHeader[];

  /**
   * @public
   * <p>The response code that was sent for the request.</p>
   */
  ResponseCodeSent?: number;

  /**
   * @public
   * <p>Labels applied to the web request by matching rules. WAF applies fully qualified
   *          labels to matching web requests. A fully qualified label is the concatenation of a label
   *          namespace and a rule label. The rule's rule group or web ACL defines the label namespace. </p>
   *          <p>For example,
   *             <code>awswaf:111122223333:myRuleGroup:testRules:testNS1:testNS2:labelNameA</code> or
   *             <code>awswaf:managed:aws:managed-rule-set:header:encoding:utf8</code>. </p>
   */
  Labels?: Label[];

  /**
   * @public
   * <p>The <code>CAPTCHA</code> response for the request.</p>
   */
  CaptchaResponse?: CaptchaResponse;

  /**
   * @public
   * <p>The <code>Challenge</code> response for the request.</p>
   */
  ChallengeResponse?: ChallengeResponse;

  /**
   * @public
   * <p>Used only for rule group rules that have a rule action override in place in the web ACL. This is the action that the rule group rule is configured for, and not the action that was applied to the request. The action that WAF applied is the <code>Action</code> value. </p>
   */
  OverriddenAction?: string;
}

/**
 * @public
 */
export interface GetSampledRequestsResponse {
  /**
   * @public
   * <p>A complex type that contains detailed information about each of the requests in the
   *          sample.</p>
   */
  SampledRequests?: SampledHTTPRequest[];

  /**
   * @public
   * <p>The total number of requests from which <code>GetSampledRequests</code> got a sample of
   *             <code>MaxItems</code> requests. If <code>PopulationSize</code> is less than
   *             <code>MaxItems</code>, the sample includes every request that your Amazon Web Services resource
   *          received during the specified time range.</p>
   */
  PopulationSize?: number;

  /**
   * @public
   * <p>Usually, <code>TimeWindow</code> is the time range that you specified in the
   *             <code>GetSampledRequests</code> request. However, if your Amazon Web Services resource received more
   *          than 5,000 requests during the time range that you specified in the request,
   *             <code>GetSampledRequests</code> returns the time range for the first 5,000 requests.
   *          Times are in Coordinated Universal Time (UTC) format.</p>
   */
  TimeWindow?: TimeWindow;
}

/**
 * @public
 */
export interface GetWebACLRequest {
  /**
   * @public
   * <p>The name of the web ACL. You cannot change the name of a web ACL after you create it.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, an App Runner service, or an Amazon Web Services Verified Access instance.  </p>
   *          <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p>
   *          <ul>
   *             <li>
   *                <p>CLI - Specify the Region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p>
   *             </li>
   *             <li>
   *                <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p>
   *             </li>
   *          </ul>
   */
  Scope: Scope | undefined;

  /**
   * @public
   * <p>The unique identifier for the web ACL. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.</p>
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface GetWebACLForResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource whose web ACL you want to retrieve. </p>
   *          <p>The ARN must be in one of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>For an Application Load Balancer: <code>arn:<i>partition</i>:elasticloadbalancing:<i>region</i>:<i>account-id</i>:loadbalancer/app/<i>load-balancer-name</i>/<i>load-balancer-id</i>
   *                   </code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>For an Amazon API Gateway REST API: <code>arn:<i>partition</i>:apigateway:<i>region</i>::/restapis/<i>api-id</i>/stages/<i>stage-name</i>
   *                   </code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>For an AppSync GraphQL API: <code>arn:<i>partition</i>:appsync:<i>region</i>:<i>account-id</i>:apis/<i>GraphQLApiId</i>
   *                   </code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>For an Amazon Cognito user pool: <code>arn:<i>partition</i>:cognito-idp:<i>region</i>:<i>account-id</i>:userpool/<i>user-pool-id</i>
   *                   </code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>For an App Runner service: <code>arn:<i>partition</i>:apprunner:<i>region</i>:<i>account-id</i>:service/<i>apprunner-service-name</i>/<i>apprunner-service-id</i>
   *                   </code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>For an Amazon Web Services Verified Access instance: <code>arn:<i>partition</i>:ec2:<i>region</i>:<i>account-id</i>:verified-access-instance/<i>instance-id</i>
   *                   </code>
   *                </p>
   *             </li>
   *          </ul>
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListAPIKeysRequest {
  /**
   * @public
   * <p>Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, an App Runner service, or an Amazon Web Services Verified Access instance.  </p>
   *          <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p>
   *          <ul>
   *             <li>
   *                <p>CLI - Specify the Region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p>
   *             </li>
   *             <li>
   *                <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p>
   *             </li>
   *          </ul>
   */
  Scope: Scope | undefined;

  /**
   * @public
   * <p>When you request a list of objects with a <code>Limit</code> setting, if the number of objects that are still available
   *          for retrieval exceeds the limit, WAF returns a <code>NextMarker</code>
   *          value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.</p>
   */
  NextMarker?: string;

  /**
   * @public
   * <p>The maximum number of objects that you want WAF to return for this request. If more
   *           objects are available, in the response, WAF provides a
   *          <code>NextMarker</code> value that you can use in a subsequent call to get the next batch of objects.</p>
   */
  Limit?: number;
}

/**
 * @public
 */
export interface ListAPIKeysResponse {
  /**
   * @public
   * <p>When you request a list of objects with a <code>Limit</code> setting, if the number of objects that are still available
   *          for retrieval exceeds the limit, WAF returns a <code>NextMarker</code>
   *          value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.</p>
   */
  NextMarker?: string;

  /**
   * @public
   * <p>The array of key summaries. If you specified a <code>Limit</code> in your request, this might not be the full list. </p>
   */
  APIKeySummaries?: APIKeySummary[];

  /**
   * @public
   * <p>The CAPTCHA application integration URL, for use in your JavaScript implementation. </p>
   */
  ApplicationIntegrationURL?: string;
}

/**
 * @public
 */
export interface ListAvailableManagedRuleGroupsRequest {
  /**
   * @public
   * <p>Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, an App Runner service, or an Amazon Web Services Verified Access instance.  </p>
   *          <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p>
   *          <ul>
   *             <li>
   *                <p>CLI - Specify the Region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p>
   *             </li>
   *             <li>
   *                <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p>
   *             </li>
   *          </ul>
   */
  Scope: Scope | undefined;

  /**
   * @public
   * <p>When you request a list of objects with a <code>Limit</code> setting, if the number of objects that are still available
   *          for retrieval exceeds the limit, WAF returns a <code>NextMarker</code>
   *          value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.</p>
   */
  NextMarker?: string;

  /**
   * @public
   * <p>The maximum number of objects that you want WAF to return for this request. If more
   *           objects are available, in the response, WAF provides a
   *          <code>NextMarker</code> value that you can use in a subsequent call to get the next batch of objects.</p>
   */
  Limit?: number;
}

/**
 * @public
 * <p>High-level information about a managed rule group, returned by <a>ListAvailableManagedRuleGroups</a>. This provides information like the name and vendor name, that you provide when you add a <a>ManagedRuleGroupStatement</a> to a web ACL. Managed rule groups include Amazon Web Services Managed Rules rule groups and Amazon Web Services Marketplace managed rule groups. To use any Amazon Web Services Marketplace managed rule group, first subscribe to the rule group through Amazon Web Services Marketplace. </p>
 */
export interface ManagedRuleGroupSummary {
  /**
   * @public
   * <p>The name of the managed rule group vendor. You use this, along with the rule group name, to identify a rule group.</p>
   */
  VendorName?: string;

  /**
   * @public
   * <p>The name of the managed rule group. You use this, along with the vendor name, to identify the rule group.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>Indicates whether the managed rule group is versioned. If it is, you can retrieve the
   *          versions list by calling <a>ListAvailableManagedRuleGroupVersions</a>. </p>
   */
  VersioningSupported?: boolean;

  /**
   * @public
   * <p>The description of the managed rule group, provided by Amazon Web Services Managed Rules or the Amazon Web Services Marketplace seller who manages it.</p>
   */
  Description?: string;
}

/**
 * @public
 */
export interface ListAvailableManagedRuleGroupsResponse {
  /**
   * @public
   * <p>When you request a list of objects with a <code>Limit</code> setting, if the number of objects that are still available
   *          for retrieval exceeds the limit, WAF returns a <code>NextMarker</code>
   *          value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.</p>
   */
  NextMarker?: string;

  /**
   * @public
   * <p>Array of managed rule groups that you can use. If you specified a <code>Limit</code> in your request, this might not be the full list. </p>
   */
  ManagedRuleGroups?: ManagedRuleGroupSummary[];
}

/**
 * @public
 */
export interface ListAvailableManagedRuleGroupVersionsRequest {
  /**
   * @public
   * <p>The name of the managed rule group vendor. You use this, along with the rule group name, to identify a rule group.</p>
   */
  VendorName: string | undefined;

  /**
   * @public
   * <p>The name of the managed rule group. You use this, along with the vendor name, to identify the rule group.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, an App Runner service, or an Amazon Web Services Verified Access instance.  </p>
   *          <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p>
   *          <ul>
   *             <li>
   *                <p>CLI - Specify the Region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p>
   *             </li>
   *             <li>
   *                <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p>
   *             </li>
   *          </ul>
   */
  Scope: Scope | undefined;

  /**
   * @public
   * <p>When you request a list of objects with a <code>Limit</code> setting, if the number of objects that are still available
   *          for retrieval exceeds the limit, WAF returns a <code>NextMarker</code>
   *          value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.</p>
   */
  NextMarker?: string;

  /**
   * @public
   * <p>The maximum number of objects that you want WAF to return for this request. If more
   *           objects are available, in the response, WAF provides a
   *          <code>NextMarker</code> value that you can use in a subsequent call to get the next batch of objects.</p>
   */
  Limit?: number;
}

/**
 * @public
 * <p>Describes a single version of a managed rule group. </p>
 */
export interface ManagedRuleGroupVersion {
  /**
   * @public
   * <p>The version name. </p>
   */
  Name?: string;

  /**
   * @public
   * <p>The date and time that the managed rule group owner updated the rule group version
   *          information. </p>
   */
  LastUpdateTimestamp?: Date;
}

/**
 * @public
 */
export interface ListAvailableManagedRuleGroupVersionsResponse {
  /**
   * @public
   * <p>When you request a list of objects with a <code>Limit</code> setting, if the number of objects that are still available
   *          for retrieval exceeds the limit, WAF returns a <code>NextMarker</code>
   *          value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.</p>
   */
  NextMarker?: string;

  /**
   * @public
   * <p>The versions that are currently available for the specified managed rule group. If you specified a <code>Limit</code> in your request, this might not be the full list. </p>
   */
  Versions?: ManagedRuleGroupVersion[];

  /**
   * @public
   * <p>The name of the version that's currently set as the default. </p>
   */
  CurrentDefaultVersion?: string;
}

/**
 * @public
 */
export interface ListIPSetsRequest {
  /**
   * @public
   * <p>Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, an App Runner service, or an Amazon Web Services Verified Access instance.  </p>
   *          <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p>
   *          <ul>
   *             <li>
   *                <p>CLI - Specify the Region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p>
   *             </li>
   *             <li>
   *                <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p>
   *             </li>
   *          </ul>
   */
  Scope: Scope | undefined;

  /**
   * @public
   * <p>When you request a list of objects with a <code>Limit</code> setting, if the number of objects that are still available
   *          for retrieval exceeds the limit, WAF returns a <code>NextMarker</code>
   *          value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.</p>
   */
  NextMarker?: string;

  /**
   * @public
   * <p>The maximum number of objects that you want WAF to return for this request. If more
   *           objects are available, in the response, WAF provides a
   *          <code>NextMarker</code> value that you can use in a subsequent call to get the next batch of objects.</p>
   */
  Limit?: number;
}

/**
 * @public
 */
export interface ListIPSetsResponse {
  /**
   * @public
   * <p>When you request a list of objects with a <code>Limit</code> setting, if the number of objects that are still available
   *          for retrieval exceeds the limit, WAF returns a <code>NextMarker</code>
   *          value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.</p>
   */
  NextMarker?: string;

  /**
   * @public
   * <p>Array of IPSets. If you specified a <code>Limit</code> in your request, this might not be the full list. </p>
   */
  IPSets?: IPSetSummary[];
}

/**
 * @public
 */
export interface ListLoggingConfigurationsRequest {
  /**
   * @public
   * <p>Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, an App Runner service, or an Amazon Web Services Verified Access instance.  </p>
   *          <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p>
   *          <ul>
   *             <li>
   *                <p>CLI - Specify the Region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p>
   *             </li>
   *             <li>
   *                <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p>
   *             </li>
   *          </ul>
   */
  Scope: Scope | undefined;

  /**
   * @public
   * <p>When you request a list of objects with a <code>Limit</code> setting, if the number of objects that are still available
   *          for retrieval exceeds the limit, WAF returns a <code>NextMarker</code>
   *          value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.</p>
   */
  NextMarker?: string;

  /**
   * @public
   * <p>The maximum number of objects that you want WAF to return for this request. If more
   *           objects are available, in the response, WAF provides a
   *          <code>NextMarker</code> value that you can use in a subsequent call to get the next batch of objects.</p>
   */
  Limit?: number;
}

/**
 * @public
 */
export interface ListLoggingConfigurationsResponse {
  /**
   * @public
   * <p>Array of logging configurations. If you specified a <code>Limit</code> in your request, this might not be the full list. </p>
   */
  LoggingConfigurations?: LoggingConfiguration[];

  /**
   * @public
   * <p>When you request a list of objects with a <code>Limit</code> setting, if the number of objects that are still available
   *          for retrieval exceeds the limit, WAF returns a <code>NextMarker</code>
   *          value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.</p>
   */
  NextMarker?: string;
}

/**
 * @public
 */
export interface ListManagedRuleSetsRequest {
  /**
   * @public
   * <p>Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, an App Runner service, or an Amazon Web Services Verified Access instance.  </p>
   *          <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p>
   *          <ul>
   *             <li>
   *                <p>CLI - Specify the Region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p>
   *             </li>
   *             <li>
   *                <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p>
   *             </li>
   *          </ul>
   */
  Scope: Scope | undefined;

  /**
   * @public
   * <p>When you request a list of objects with a <code>Limit</code> setting, if the number of objects that are still available
   *          for retrieval exceeds the limit, WAF returns a <code>NextMarker</code>
   *          value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.</p>
   */
  NextMarker?: string;

  /**
   * @public
   * <p>The maximum number of objects that you want WAF to return for this request. If more
   *           objects are available, in the response, WAF provides a
   *          <code>NextMarker</code> value that you can use in a subsequent call to get the next batch of objects.</p>
   */
  Limit?: number;
}

/**
 * @public
 * <p>High-level information for a managed rule set. </p>
 *          <note>
 *             <p>This is intended for use only by vendors of managed rule sets. Vendors are Amazon Web Services and Amazon Web Services Marketplace sellers. </p>
 *             <p>Vendors, you can use the managed rule set APIs to provide controlled rollout of your versioned managed rule group offerings for your customers. The APIs are <code>ListManagedRuleSets</code>, <code>GetManagedRuleSet</code>, <code>PutManagedRuleSetVersions</code>, and <code>UpdateManagedRuleSetVersionExpiryDate</code>.</p>
 *          </note>
 */
export interface ManagedRuleSetSummary {
  /**
   * @public
   * <p>The name of the managed rule set. You use this, along with the rule set ID, to identify the rule set.</p>
   *          <p>This name is assigned to the corresponding managed rule group, which your customers can access and use. </p>
   */
  Name?: string;

  /**
   * @public
   * <p>A unique identifier for the managed rule set. The ID is returned in the responses to commands like <code>list</code>. You provide it to operations like <code>get</code> and <code>update</code>.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>A description of the set that helps with identification. </p>
   */
  Description?: string;

  /**
   * @public
   * <p>A token used for optimistic locking. WAF returns a token to your <code>get</code> and <code>list</code> requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like <code>update</code> and <code>delete</code>. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another <code>get</code>, and use the new token returned by that operation. </p>
   */
  LockToken?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the entity.</p>
   */
  ARN?: string;

  /**
   * @public
   * <p>The label namespace prefix for the managed rule groups that are offered to customers from this managed rule set. All labels that are added by rules in the managed rule group have this prefix. </p>
   *          <ul>
   *             <li>
   *                <p>The syntax for the label namespace prefix for a managed rule group is the following: </p>
   *                <p>
   *                   <code>awswaf:managed:<vendor>:<rule group name></code>:</p>
   *             </li>
   *             <li>
   *                <p>When a rule with a label matches a web request, WAF adds the fully qualified label to the request. A fully qualified label is made up of the label namespace from the rule group or web ACL where the rule is defined and the label from the rule, separated by a colon: </p>
   *                <p>
   *                   <code><label namespace>:<label from rule></code>
   *                </p>
   *             </li>
   *          </ul>
   */
  LabelNamespace?: string;
}

/**
 * @public
 */
export interface ListManagedRuleSetsResponse {
  /**
   * @public
   * <p>When you request a list of objects with a <code>Limit</code> setting, if the number of objects that are still available
   *          for retrieval exceeds the limit, WAF returns a <code>NextMarker</code>
   *          value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.</p>
   */
  NextMarker?: string;

  /**
   * @public
   * <p>Your managed rule sets. If you specified a <code>Limit</code> in your request, this might not be the full list. </p>
   */
  ManagedRuleSets?: ManagedRuleSetSummary[];
}

/**
 * @public
 */
export interface ListMobileSdkReleasesRequest {
  /**
   * @public
   * <p>The device platform to retrieve the list for.</p>
   */
  Platform: Platform | undefined;

  /**
   * @public
   * <p>When you request a list of objects with a <code>Limit</code> setting, if the number of objects that are still available
   *          for retrieval exceeds the limit, WAF returns a <code>NextMarker</code>
   *          value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.</p>
   */
  NextMarker?: string;

  /**
   * @public
   * <p>The maximum number of objects that you want WAF to return for this request. If more
   *           objects are available, in the response, WAF provides a
   *          <code>NextMarker</code> value that you can use in a subsequent call to get the next batch of objects.</p>
   */
  Limit?: number;
}

/**
 * @public
 * <p>High level information for an SDK release. </p>
 */
export interface ReleaseSummary {
  /**
   * @public
   * <p>The release version. </p>
   */
  ReleaseVersion?: string;

  /**
   * @public
   * <p>The timestamp of the release. </p>
   */
  Timestamp?: Date;
}

/**
 * @public
 */
export interface ListMobileSdkReleasesResponse {
  /**
   * @public
   * <p>The high level information for the available SDK releases. If you specified a <code>Limit</code> in your request, this might not be the full list. </p>
   */
  ReleaseSummaries?: ReleaseSummary[];

  /**
   * @public
   * <p>When you request a list of objects with a <code>Limit</code> setting, if the number of objects that are still available
   *          for retrieval exceeds the limit, WAF returns a <code>NextMarker</code>
   *          value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.</p>
   */
  NextMarker?: string;
}

/**
 * @public
 */
export interface ListRegexPatternSetsRequest {
  /**
   * @public
   * <p>Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, an App Runner service, or an Amazon Web Services Verified Access instance.  </p>
   *          <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p>
   *          <ul>
   *             <li>
   *                <p>CLI - Specify the Region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p>
   *             </li>
   *             <li>
   *                <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p>
   *             </li>
   *          </ul>
   */
  Scope: Scope | undefined;

  /**
   * @public
   * <p>When you request a list of objects with a <code>Limit</code> setting, if the number of objects that are still available
   *          for retrieval exceeds the limit, WAF returns a <code>NextMarker</code>
   *          value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.</p>
   */
  NextMarker?: string;

  /**
   * @public
   * <p>The maximum number of objects that you want WAF to return for this request. If more
   *           objects are available, in the response, WAF provides a
   *          <code>NextMarker</code> value that you can use in a subsequent call to get the next batch of objects.</p>
   */
  Limit?: number;
}

/**
 * @public
 */
export interface ListRegexPatternSetsResponse {
  /**
   * @public
   * <p>When you request a list of objects with a <code>Limit</code> setting, if the number of objects that are still available
   *          for retrieval exceeds the limit, WAF returns a <code>NextMarker</code>
   *          value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.</p>
   */
  NextMarker?: string;

  /**
   * @public
   * <p>Array of regex pattern sets. If you specified a <code>Limit</code> in your request, this might not be the full list. </p>
   */
  RegexPatternSets?: RegexPatternSetSummary[];
}

/**
 * @public
 * @enum
 */
export const ResourceType = {
  API_GATEWAY: "API_GATEWAY",
  APPLICATION_LOAD_BALANCER: "APPLICATION_LOAD_BALANCER",
  APPSYNC: "APPSYNC",
  APP_RUNNER_SERVICE: "APP_RUNNER_SERVICE",
  COGNITIO_USER_POOL: "COGNITO_USER_POOL",
  VERIFIED_ACCESS_INSTANCE: "VERIFIED_ACCESS_INSTANCE",
} as const;

/**
 * @public
 */
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];

/**
 * @public
 */
export interface ListResourcesForWebACLRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the web ACL.</p>
   */
  WebACLArn: string | undefined;

  /**
   * @public
   * <p>Used for web ACLs that are scoped for regional applications.
   *          A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, an App Runner service, or an Amazon Web Services Verified Access instance. </p>
   *          <note>
   *             <p>If you don't provide a resource type, the call uses the resource type <code>APPLICATION_LOAD_BALANCER</code>. </p>
   *          </note>
   *          <p>Default: <code>APPLICATION_LOAD_BALANCER</code>
   *          </p>
   */
  ResourceType?: ResourceType;
}

/**
 * @public
 */
export interface ListResourcesForWebACLResponse {
  /**
   * @public
   * <p>The array of Amazon Resource Names (ARNs) of the associated resources.</p>
   */
  ResourceArns?: string[];
}

/**
 * @public
 */
export interface ListRuleGroupsRequest {
  /**
   * @public
   * <p>Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, an App Runner service, or an Amazon Web Services Verified Access instance.  </p>
   *          <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p>
   *          <ul>
   *             <li>
   *                <p>CLI - Specify the Region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p>
   *             </li>
   *             <li>
   *                <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p>
   *             </li>
   *          </ul>
   */
  Scope: Scope | undefined;

  /**
   * @public
   * <p>When you request a list of objects with a <code>Limit</code> setting, if the number of objects that are still available
   *          for retrieval exceeds the limit, WAF returns a <code>NextMarker</code>
   *          value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.</p>
   */
  NextMarker?: string;

  /**
   * @public
   * <p>The maximum number of objects that you want WAF to return for this request. If more
   *           objects are available, in the response, WAF provides a
   *          <code>NextMarker</code> value that you can use in a subsequent call to get the next batch of objects.</p>
   */
  Limit?: number;
}

/**
 * @public
 */
export interface ListRuleGroupsResponse {
  /**
   * @public
   * <p>When you request a list of objects with a <code>Limit</code> setting, if the number of objects that are still available
   *          for retrieval exceeds the limit, WAF returns a <code>NextMarker</code>
   *          value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.</p>
   */
  NextMarker?: string;

  /**
   * @public
   * <p>Array of rule groups. If you specified a <code>Limit</code> in your request, this might not be the full list. </p>
   */
  RuleGroups?: RuleGroupSummary[];
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>When you request a list of objects with a <code>Limit</code> setting, if the number of objects that are still available
   *          for retrieval exceeds the limit, WAF returns a <code>NextMarker</code>
   *          value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.</p>
   */
  NextMarker?: string;

  /**
   * @public
   * <p>The maximum number of objects that you want WAF to return for this request. If more
   *           objects are available, in the response, WAF provides a
   *          <code>NextMarker</code> value that you can use in a subsequent call to get the next batch of objects.</p>
   */
  Limit?: number;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  ResourceARN: string | undefined;
}

/**
 * @public
 * <p>The collection of tagging definitions for an Amazon Web Services resource. Tags are key:value pairs
 *          that you can use to categorize and manage your resources, for purposes like billing or
 *          other management. Typically, the tag key represents a category, such as "environment", and
 *          the tag value represents a specific value within that category, such as "test,"
 *          "development," or "production". Or you might set the tag key to "customer" and the value to
 *          the customer name or ID. You can specify one or more tags to add to each Amazon Web Services resource, up
 *          to 50 tags for a resource.</p>
 *          <p>You can tag the Amazon Web Services resources that you manage through WAF: web ACLs, rule
 *          groups, IP sets, and regex pattern sets. You can't manage or view tags through the WAF
 *          console. </p>
 */
export interface TagInfoForResource {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  ResourceARN?: string;

  /**
   * @public
   * <p>The array of <a>Tag</a> objects defined for the resource. </p>
   */
  TagList?: Tag[];
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p>When you request a list of objects with a <code>Limit</code> setting, if the number of objects that are still available
   *          for retrieval exceeds the limit, WAF returns a <code>NextMarker</code>
   *          value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.</p>
   */
  NextMarker?: string;

  /**
   * @public
   * <p>The collection of tagging definitions for the resource. If you specified a <code>Limit</code> in your request, this might not be the full list. </p>
   */
  TagInfoForResource?: TagInfoForResource;
}

/**
 * @public
 */
export interface ListWebACLsRequest {
  /**
   * @public
   * <p>Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, an App Runner service, or an Amazon Web Services Verified Access instance.  </p>
   *          <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p>
   *          <ul>
   *             <li>
   *                <p>CLI - Specify the Region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p>
   *             </li>
   *             <li>
   *                <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p>
   *             </li>
   *          </ul>
   */
  Scope: Scope | undefined;

  /**
   * @public
   * <p>When you request a list of objects with a <code>Limit</code> setting, if the number of objects that are still available
   *          for retrieval exceeds the limit, WAF returns a <code>NextMarker</code>
   *          value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.</p>
   */
  NextMarker?: string;

  /**
   * @public
   * <p>The maximum number of objects that you want WAF to return for this request. If more
   *           objects are available, in the response, WAF provides a
   *          <code>NextMarker</code> value that you can use in a subsequent call to get the next batch of objects.</p>
   */
  Limit?: number;
}

/**
 * @public
 */
export interface ListWebACLsResponse {
  /**
   * @public
   * <p>When you request a list of objects with a <code>Limit</code> setting, if the number of objects that are still available
   *          for retrieval exceeds the limit, WAF returns a <code>NextMarker</code>
   *          value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.</p>
   */
  NextMarker?: string;

  /**
   * @public
   * <p>Array of web ACLs. If you specified a <code>Limit</code> in your request, this might not be the full list. </p>
   */
  WebACLs?: WebACLSummary[];
}

/**
 * @public
 */
export interface PutLoggingConfigurationRequest {
  /**
   * @public
   * <p></p>
   */
  LoggingConfiguration: LoggingConfiguration | undefined;
}

/**
 * @public
 */
export interface PutLoggingConfigurationResponse {
  /**
   * @public
   * <p></p>
   */
  LoggingConfiguration?: LoggingConfiguration;
}

/**
 * @public
 * <p>The operation failed because you don't have the permissions that your logging
 *          configuration requires. For information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/logging.html">Logging web ACL traffic information</a>
 *          in the <i>WAF Developer Guide</i>.</p>
 */
export class WAFLogDestinationPermissionIssueException extends __BaseException {
  readonly name: "WAFLogDestinationPermissionIssueException" = "WAFLogDestinationPermissionIssueException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<WAFLogDestinationPermissionIssueException, __BaseException>) {
    super({
      name: "WAFLogDestinationPermissionIssueException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, WAFLogDestinationPermissionIssueException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>WAF is not able to access the service linked role. This can be caused by a
 *          previous <code>PutLoggingConfiguration</code> request, which can lock the service linked
 *          role for about 20 seconds. Please try your request again. The service linked role can also
 *          be locked by a previous <code>DeleteServiceLinkedRole</code> request, which can lock the
 *          role for 15 minutes or more. If you recently made a call to
 *             <code>DeleteServiceLinkedRole</code>, wait at least 15 minutes and try the request
 *          again. If you receive this same exception again, you will have to wait additional time
 *          until the role is unlocked.</p>
 */
export class WAFServiceLinkedRoleErrorException extends __BaseException {
  readonly name: "WAFServiceLinkedRoleErrorException" = "WAFServiceLinkedRoleErrorException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<WAFServiceLinkedRoleErrorException, __BaseException>) {
    super({
      name: "WAFServiceLinkedRoleErrorException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, WAFServiceLinkedRoleErrorException.prototype);
  }
}

/**
 * @public
 * <p>A version of the named managed rule group, that the rule group's vendor publishes for
 *          use by customers. </p>
 *          <note>
 *             <p>This is intended for use only by vendors of managed rule sets. Vendors are Amazon Web Services and Amazon Web Services Marketplace sellers. </p>
 *             <p>Vendors, you can use the managed rule set APIs to provide controlled rollout of your versioned managed rule group offerings for your customers. The APIs are <code>ListManagedRuleSets</code>, <code>GetManagedRuleSet</code>, <code>PutManagedRuleSetVersions</code>, and <code>UpdateManagedRuleSetVersionExpiryDate</code>.</p>
 *          </note>
 */
export interface VersionToPublish {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the vendor's rule group that's used in the published
   *          managed rule group version. </p>
   */
  AssociatedRuleGroupArn?: string;

  /**
   * @public
   * <p>The amount of time the vendor expects this version of the managed rule group to last, in
   *          days. </p>
   */
  ForecastedLifetime?: number;
}

/**
 * @public
 */
export interface PutManagedRuleSetVersionsRequest {
  /**
   * @public
   * <p>The name of the managed rule set. You use this, along with the rule set ID, to identify the rule set.</p>
   *          <p>This name is assigned to the corresponding managed rule group, which your customers can access and use. </p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, an App Runner service, or an Amazon Web Services Verified Access instance.  </p>
   *          <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p>
   *          <ul>
   *             <li>
   *                <p>CLI - Specify the Region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p>
   *             </li>
   *             <li>
   *                <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p>
   *             </li>
   *          </ul>
   */
  Scope: Scope | undefined;

  /**
   * @public
   * <p>A unique identifier for the managed rule set. The ID is returned in the responses to commands like <code>list</code>. You provide it to operations like <code>get</code> and <code>update</code>.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>A token used for optimistic locking. WAF returns a token to your <code>get</code> and <code>list</code> requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like <code>update</code> and <code>delete</code>. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another <code>get</code>, and use the new token returned by that operation. </p>
   */
  LockToken: string | undefined;

  /**
   * @public
   * <p>The version of the named managed rule group that you'd like your customers to choose,
   *          from among your version offerings. </p>
   */
  RecommendedVersion?: string;

  /**
   * @public
   * <p>The versions of the named managed rule group that you want to offer to your customers.
   *       </p>
   */
  VersionsToPublish?: Record<string, VersionToPublish>;
}

/**
 * @public
 */
export interface PutManagedRuleSetVersionsResponse {
  /**
   * @public
   * <p>A token used for optimistic locking. WAF returns a token to your <code>get</code> and <code>list</code> requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like <code>update</code> and <code>delete</code>. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another <code>get</code>, and use the new token returned by that operation. </p>
   */
  NextLockToken?: string;
}

/**
 * @public
 */
export interface PutPermissionPolicyRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the <a>RuleGroup</a> to which you want to
   *          attach the policy.</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>The policy to attach to the specified rule group. </p>
   *          <p>The policy specifications must conform to the following:</p>
   *          <ul>
   *             <li>
   *                <p>The policy must be composed using IAM Policy version 2012-10-17.</p>
   *             </li>
   *             <li>
   *                <p>The policy must include specifications for <code>Effect</code>, <code>Action</code>, and <code>Principal</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Effect</code> must specify <code>Allow</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Action</code> must specify <code>wafv2:CreateWebACL</code>, <code>wafv2:UpdateWebACL</code>, and
   *              <code>wafv2:PutFirewallManagerRuleGroups</code> and may optionally specify <code>wafv2:GetRuleGroup</code>.
   *                  WAF rejects any extra actions or wildcard actions in the policy.</p>
   *             </li>
   *             <li>
   *                <p>The policy must not include a <code>Resource</code> parameter.</p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html">IAM Policies</a>.  </p>
   */
  Policy: string | undefined;
}

/**
 * @public
 */
export interface PutPermissionPolicyResponse {}

/**
 * @public
 * <p>The operation failed because the specified policy isn't in the proper format. </p>
 *          <p>The policy specifications must conform to the following:</p>
 *          <ul>
 *             <li>
 *                <p>The policy must be composed using IAM Policy version 2012-10-17.</p>
 *             </li>
 *             <li>
 *                <p>The policy must include specifications for <code>Effect</code>, <code>Action</code>, and <code>Principal</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Effect</code> must specify <code>Allow</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Action</code> must specify <code>wafv2:CreateWebACL</code>, <code>wafv2:UpdateWebACL</code>, and
 *              <code>wafv2:PutFirewallManagerRuleGroups</code> and may optionally specify <code>wafv2:GetRuleGroup</code>.
 *                  WAF rejects any extra actions or wildcard actions in the policy.</p>
 *             </li>
 *             <li>
 *                <p>The policy must not include a <code>Resource</code> parameter.</p>
 *             </li>
 *          </ul>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html">IAM Policies</a>.  </p>
 */
export class WAFInvalidPermissionPolicyException extends __BaseException {
  readonly name: "WAFInvalidPermissionPolicyException" = "WAFInvalidPermissionPolicyException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<WAFInvalidPermissionPolicyException, __BaseException>) {
    super({
      name: "WAFInvalidPermissionPolicyException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, WAFInvalidPermissionPolicyException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  ResourceARN: string | undefined;

  /**
   * @public
   * <p>An array of key:value pairs to associate with the resource.</p>
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  ResourceARN: string | undefined;

  /**
   * @public
   * <p>An array of keys identifying the tags to disassociate from the resource.</p>
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateIPSetRequest {
  /**
   * @public
   * <p>The name of the IP set. You cannot change the name of an <code>IPSet</code> after you create it.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, an App Runner service, or an Amazon Web Services Verified Access instance.  </p>
   *          <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p>
   *          <ul>
   *             <li>
   *                <p>CLI - Specify the Region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p>
   *             </li>
   *             <li>
   *                <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p>
   *             </li>
   *          </ul>
   */
  Scope: Scope | undefined;

  /**
   * @public
   * <p>A unique identifier for the set. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>A description of the IP set that helps with identification. </p>
   */
  Description?: string;

  /**
   * @public
   * <p>Contains an array of strings that specifies zero or more IP addresses or blocks of IP addresses that you want WAF to inspect for in incoming requests. All addresses must be specified using Classless Inter-Domain Routing (CIDR) notation. WAF supports all IPv4 and IPv6 CIDR ranges except for <code>/0</code>. </p>
   *          <p>Example address strings: </p>
   *          <ul>
   *             <li>
   *                <p>For requests that originated from the IP address 192.0.2.44, specify <code>192.0.2.44/32</code>.</p>
   *             </li>
   *             <li>
   *                <p>For requests that originated from IP addresses from 192.0.2.0 to 192.0.2.255, specify
   *                <code>192.0.2.0/24</code>.</p>
   *             </li>
   *             <li>
   *                <p>For requests that originated from the IP address 1111:0000:0000:0000:0000:0000:0000:0111, specify <code>1111:0000:0000:0000:0000:0000:0000:0111/128</code>.</p>
   *             </li>
   *             <li>
   *                <p>For requests that originated from IP addresses 1111:0000:0000:0000:0000:0000:0000:0000 to 1111:0000:0000:0000:ffff:ffff:ffff:ffff, specify <code>1111:0000:0000:0000:0000:0000:0000:0000/64</code>.</p>
   *             </li>
   *          </ul>
   *          <p>For more information about CIDR notation, see the Wikipedia entry <a href="https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Classless Inter-Domain Routing</a>.</p>
   *          <p>Example JSON <code>Addresses</code> specifications: </p>
   *          <ul>
   *             <li>
   *                <p>Empty array: <code>"Addresses": []</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Array with one address: <code>"Addresses": ["192.0.2.44/32"]</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Array with three addresses: <code>"Addresses": ["192.0.2.44/32", "192.0.2.0/24", "192.0.0.0/16"]</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>INVALID specification: <code>"Addresses": [""]</code> INVALID </p>
   *             </li>
   *          </ul>
   */
  Addresses: string[] | undefined;

  /**
   * @public
   * <p>A token used for optimistic locking. WAF returns a token to your <code>get</code> and <code>list</code> requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like <code>update</code> and <code>delete</code>. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another <code>get</code>, and use the new token returned by that operation. </p>
   */
  LockToken: string | undefined;
}

/**
 * @public
 */
export interface UpdateIPSetResponse {
  /**
   * @public
   * <p>A token used for optimistic locking. WAF returns this token to your <code>update</code> requests. You use <code>NextLockToken</code> in the same manner as you use <code>LockToken</code>. </p>
   */
  NextLockToken?: string;
}

/**
 * @public
 */
export interface UpdateManagedRuleSetVersionExpiryDateRequest {
  /**
   * @public
   * <p>The name of the managed rule set. You use this, along with the rule set ID, to identify the rule set.</p>
   *          <p>This name is assigned to the corresponding managed rule group, which your customers can access and use. </p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, an App Runner service, or an Amazon Web Services Verified Access instance.  </p>
   *          <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p>
   *          <ul>
   *             <li>
   *                <p>CLI - Specify the Region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p>
   *             </li>
   *             <li>
   *                <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p>
   *             </li>
   *          </ul>
   */
  Scope: Scope | undefined;

  /**
   * @public
   * <p>A unique identifier for the managed rule set. The ID is returned in the responses to commands like <code>list</code>. You provide it to operations like <code>get</code> and <code>update</code>.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>A token used for optimistic locking. WAF returns a token to your <code>get</code> and <code>list</code> requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like <code>update</code> and <code>delete</code>. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another <code>get</code>, and use the new token returned by that operation. </p>
   */
  LockToken: string | undefined;

  /**
   * @public
   * <p>The version that you want to remove from your list of offerings for the named managed
   *          rule group. </p>
   */
  VersionToExpire: string | undefined;

  /**
   * @public
   * <p>The time that you want the version to expire.</p>
   *          <p>Times are in Coordinated Universal Time (UTC) format. UTC format includes the special designator, Z. For example, "2016-09-27T14:50Z". </p>
   */
  ExpiryTimestamp: Date | undefined;
}

/**
 * @public
 */
export interface UpdateManagedRuleSetVersionExpiryDateResponse {
  /**
   * @public
   * <p>The version that is set to expire. </p>
   */
  ExpiringVersion?: string;

  /**
   * @public
   * <p>The time that the version will expire. </p>
   *          <p>Times are in Coordinated Universal Time (UTC) format. UTC format includes the special designator, Z. For example, "2016-09-27T14:50Z". </p>
   */
  ExpiryTimestamp?: Date;

  /**
   * @public
   * <p>A token used for optimistic locking. WAF returns a token to your <code>get</code> and <code>list</code> requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like <code>update</code> and <code>delete</code>. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another <code>get</code>, and use the new token returned by that operation. </p>
   */
  NextLockToken?: string;
}

/**
 * @public
 */
export interface UpdateRegexPatternSetRequest {
  /**
   * @public
   * <p>The name of the set. You cannot change the name after you create the set.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, an App Runner service, or an Amazon Web Services Verified Access instance.  </p>
   *          <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p>
   *          <ul>
   *             <li>
   *                <p>CLI - Specify the Region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p>
   *             </li>
   *             <li>
   *                <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p>
   *             </li>
   *          </ul>
   */
  Scope: Scope | undefined;

  /**
   * @public
   * <p>A unique identifier for the set. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>A description of the set that helps with identification. </p>
   */
  Description?: string;

  /**
   * @public
   * <p></p>
   */
  RegularExpressionList: Regex[] | undefined;

  /**
   * @public
   * <p>A token used for optimistic locking. WAF returns a token to your <code>get</code> and <code>list</code> requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like <code>update</code> and <code>delete</code>. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another <code>get</code>, and use the new token returned by that operation. </p>
   */
  LockToken: string | undefined;
}

/**
 * @public
 */
export interface UpdateRegexPatternSetResponse {
  /**
   * @public
   * <p>A token used for optimistic locking. WAF returns this token to your <code>update</code> requests. You use <code>NextLockToken</code> in the same manner as you use <code>LockToken</code>. </p>
   */
  NextLockToken?: string;
}

/**
 * @public
 */
export interface UpdateRuleGroupResponse {
  /**
   * @public
   * <p>A token used for optimistic locking. WAF returns this token to your <code>update</code> requests. You use <code>NextLockToken</code> in the same manner as you use <code>LockToken</code>. </p>
   */
  NextLockToken?: string;
}

/**
 * @public
 */
export interface UpdateWebACLResponse {
  /**
   * @public
   * <p>A token used for optimistic locking. WAF returns this token to your <code>update</code> requests. You use <code>NextLockToken</code> in the same manner as you use <code>LockToken</code>. </p>
   */
  NextLockToken?: string;
}

/**
 * @public
 * <p>The processing guidance for a <a>Rule</a>, used by WAF to determine whether
 *          a web request matches the rule. </p>
 *          <p>For example specifications, see the examples section of <a>CreateWebACL</a>.</p>
 */
export interface Statement {
  /**
   * @public
   * <p>A rule statement that defines a string match search for WAF to apply to web requests. The byte match statement provides the bytes to search for, the location in requests that you want WAF to search, and other settings. The bytes to search for are typically a string that corresponds with ASCII characters. In the WAF console and the developer guide, this is called a string match statement.</p>
   */
  ByteMatchStatement?: ByteMatchStatement;

  /**
   * @public
   * <p>A rule statement that inspects for malicious SQL code. Attackers insert malicious SQL code into web requests to do things like modify your database or extract data from it. </p>
   */
  SqliMatchStatement?: SqliMatchStatement;

  /**
   * @public
   * <p>A rule statement that inspects for cross-site scripting (XSS) attacks. In XSS attacks, the attacker
   * uses vulnerabilities in a benign website as a vehicle to inject malicious client-site scripts into other legitimate web browsers. </p>
   */
  XssMatchStatement?: XssMatchStatement;

  /**
   * @public
   * <p>A rule statement that compares a number of bytes against the size of a request component, using a comparison operator, such as greater than (>) or less than (<). For example, you can use a size constraint statement to look for query strings that are longer than 100 bytes. </p>
   *          <p>If you configure WAF to inspect the request body, WAF inspects only the number of bytes of the body up to the limit for the web ACL. By default, for regional web ACLs, this limit is 8 KB (8,192 bytes) and for CloudFront web ACLs, this limit is 16 KB (16,384 bytes). For CloudFront web ACLs, you can increase the limit in the web ACL <code>AssociationConfig</code>, for additional fees. If you know that the request body for your web requests should never exceed the inspection limit, you could use a size constraint statement to block requests that have a larger request body size.</p>
   *          <p>If you choose URI for the value of Part of the request to filter on, the slash (/) in the URI counts as one character. For example, the URI <code>/logo.jpg</code> is nine characters long.</p>
   */
  SizeConstraintStatement?: SizeConstraintStatement;

  /**
   * @public
   * <p>A rule statement that labels web requests by country and region and that matches against web requests based on country code. A geo match rule labels every request that it inspects regardless of whether it finds a match.</p>
   *          <ul>
   *             <li>
   *                <p>To manage requests only by country, you can use this statement by itself and specify the countries that you want to match against in the <code>CountryCodes</code> array. </p>
   *             </li>
   *             <li>
   *                <p>Otherwise, configure your geo match rule with Count action so that it only labels requests. Then, add one or more label match rules to run after the geo match rule and configure them to match against the geographic labels and handle the requests as needed. </p>
   *             </li>
   *          </ul>
   *          <p>WAF labels requests using the alpha-2 country and region codes from the International Organization for Standardization (ISO) 3166 standard. WAF determines the codes using either the IP address in the web request origin or, if you specify it, the address in the geo match <code>ForwardedIPConfig</code>. </p>
   *          <p>If you use the web request origin, the label formats are <code>awswaf:clientip:geo:region:<ISO country code>-<ISO region code></code> and <code>awswaf:clientip:geo:country:<ISO country code></code>.</p>
   *          <p>If you use a forwarded IP address, the label formats are <code>awswaf:forwardedip:geo:region:<ISO country code>-<ISO region code></code> and <code>awswaf:forwardedip:geo:country:<ISO country code></code>.</p>
   *          <p>For additional details, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-rule-statement-type-geo-match.html">Geographic match rule statement</a> in the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">WAF Developer Guide</a>. </p>
   */
  GeoMatchStatement?: GeoMatchStatement;

  /**
   * @public
   * <p>A rule statement used to run the rules that are defined in a <a>RuleGroup</a>. To use this, create a rule group with your rules, then provide the ARN of the rule group in this statement.</p>
   *          <p>You cannot nest a <code>RuleGroupReferenceStatement</code>, for example for use inside a <code>NotStatement</code> or <code>OrStatement</code>. You cannot use a rule group
   *       reference statement inside another rule group. You can only reference a rule group as a top-level statement within a rule that you define in a web ACL.</p>
   */
  RuleGroupReferenceStatement?: RuleGroupReferenceStatement;

  /**
   * @public
   * <p>A rule statement used to detect web requests coming from particular IP addresses or address ranges. To use this, create an <a>IPSet</a> that specifies the addresses you want to detect, then use the ARN of that set in this statement. To create an IP set, see <a>CreateIPSet</a>.</p>
   *          <p>Each IP set rule statement references an IP set. You create and maintain the set independent of your rules. This allows you to use the single set in multiple rules. When you update the referenced set, WAF automatically updates all rules that reference it.</p>
   */
  IPSetReferenceStatement?: IPSetReferenceStatement;

  /**
   * @public
   * <p>A rule statement used to search web request components for matches with regular expressions. To use this, create a <a>RegexPatternSet</a> that specifies the expressions that you want to detect, then use the ARN of that set in this statement. A web request matches the pattern set rule statement if the request component matches any of the patterns in the set. To create a regex pattern set, see <a>CreateRegexPatternSet</a>.</p>
   *          <p>Each regex pattern set rule statement references a regex pattern set. You create and maintain the set independent of your rules. This allows you to use the single set in multiple rules. When you update the referenced set, WAF automatically updates all rules that reference it.</p>
   */
  RegexPatternSetReferenceStatement?: RegexPatternSetReferenceStatement;

  /**
   * @public
   * <p>A rate-based rule counts incoming requests and rate limits requests when they are coming at too fast a rate. The rule categorizes requests according to your aggregation criteria, collects them into aggregation instances, and counts and rate limits the requests for each instance. </p>
   *          <p>You can specify individual aggregation keys, like IP address or HTTP method. You can also specify aggregation key combinations, like IP address and HTTP method, or HTTP method, query argument, and cookie. </p>
   *          <p>Each unique set of values for the aggregation keys that you specify is a separate aggregation instance, with the value from each key contributing to the aggregation instance definition. </p>
   *          <p>For example, assume the rule evaluates web requests with the following IP address and HTTP method values: </p>
   *          <ul>
   *             <li>
   *                <p>IP address 10.1.1.1, HTTP method POST</p>
   *             </li>
   *             <li>
   *                <p>IP address 10.1.1.1, HTTP method GET</p>
   *             </li>
   *             <li>
   *                <p>IP address 127.0.0.0, HTTP method POST</p>
   *             </li>
   *             <li>
   *                <p>IP address 10.1.1.1, HTTP method GET</p>
   *             </li>
   *          </ul>
   *          <p>The rule would create different aggregation instances according to your aggregation criteria, for example: </p>
   *          <ul>
   *             <li>
   *                <p>If the aggregation criteria is just the IP address, then each individual address is an aggregation instance, and WAF counts requests separately for each. The aggregation instances and request counts for our example would be the following: </p>
   *                <ul>
   *                   <li>
   *                      <p>IP address 10.1.1.1: count 3</p>
   *                   </li>
   *                   <li>
   *                      <p>IP address 127.0.0.0: count 1</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>If the aggregation criteria is HTTP method, then each individual HTTP method is an aggregation instance. The aggregation instances and request counts for our example would be the following: </p>
   *                <ul>
   *                   <li>
   *                      <p>HTTP method POST: count 2</p>
   *                   </li>
   *                   <li>
   *                      <p>HTTP method GET: count 2</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>If the aggregation criteria is IP address and HTTP method, then each IP address and each HTTP method would contribute to the combined aggregation instance. The aggregation instances and request counts for our example would be the following: </p>
   *                <ul>
   *                   <li>
   *                      <p>IP address 10.1.1.1, HTTP method POST: count 1</p>
   *                   </li>
   *                   <li>
   *                      <p>IP address 10.1.1.1, HTTP method GET: count 2</p>
   *                   </li>
   *                   <li>
   *                      <p>IP address 127.0.0.0, HTTP method POST: count 1</p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   *          <p>For any n-tuple of aggregation keys, each unique combination of values for the keys defines a separate aggregation instance, which WAF counts and rate-limits individually. </p>
   *          <p>You can optionally nest another statement inside the rate-based statement, to narrow the scope of the rule so that it only counts and rate limits requests that match the nested statement. You can use this nested scope-down statement in conjunction with your aggregation key specifications or you can just count and rate limit all requests that match the scope-down statement, without additional aggregation. When you choose to just manage all requests that match a scope-down statement, the aggregation instance is singular for the rule. </p>
   *          <p>You cannot nest a <code>RateBasedStatement</code> inside another statement, for example inside a <code>NotStatement</code> or <code>OrStatement</code>. You can define a <code>RateBasedStatement</code> inside a web ACL and inside a rule group. </p>
   *          <p>For additional information about the options, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-rate-based-rules.html">Rate limiting web requests using rate-based rules</a>
   *     in the <i>WAF Developer Guide</i>. </p>
   *          <p>If you only aggregate on the individual IP address or forwarded IP address, you can retrieve the list of IP addresses that WAF
   *           is currently rate limiting for a rule through the API call <code>GetRateBasedStatementManagedKeys</code>. This option is not available
   *       for other aggregation configurations.</p>
   *          <p>WAF tracks and manages web requests separately for each instance of a rate-based rule that you use. For example, if you provide the same rate-based rule settings in two web ACLs, each of the two rule statements represents a separate instance of the rate-based rule and gets its own tracking and management by WAF. If you define a rate-based rule inside a rule group, and then use that rule group in multiple places, each use creates a separate instance of the rate-based rule that gets its own tracking and management by WAF. </p>
   */
  RateBasedStatement?: RateBasedStatement;

  /**
   * @public
   * <p>A logical rule statement used to combine other rule statements with AND logic. You provide more than one <a>Statement</a> within the <code>AndStatement</code>. </p>
   */
  AndStatement?: AndStatement;

  /**
   * @public
   * <p>A logical rule statement used to combine other rule statements with OR logic. You provide more than one <a>Statement</a> within the <code>OrStatement</code>. </p>
   */
  OrStatement?: OrStatement;

  /**
   * @public
   * <p>A logical rule statement used to negate the results of another rule statement. You provide one <a>Statement</a> within the <code>NotStatement</code>.</p>
   */
  NotStatement?: NotStatement;

  /**
   * @public
   * <p>A rule statement used to run the rules that are defined in a managed rule group. To use this, provide the vendor name and the name of the rule group in this statement. You can retrieve the required names by calling <a>ListAvailableManagedRuleGroups</a>.</p>
   *          <p>You cannot nest a <code>ManagedRuleGroupStatement</code>, for example for use inside a <code>NotStatement</code> or <code>OrStatement</code>. You cannot use a managed rule group
   *       inside another rule group. You can only reference a managed rule group as a top-level statement within a rule that you define in a web ACL.</p>
   *          <note>
   *             <p>You are charged additional fees when you use the WAF Bot Control managed rule group <code>AWSManagedRulesBotControlRuleSet</code>, the WAF Fraud Control account takeover prevention (ATP) managed rule group <code>AWSManagedRulesATPRuleSet</code>, or the WAF Fraud Control account creation fraud prevention (ACFP) managed rule group <code>AWSManagedRulesACFPRuleSet</code>. For more information, see <a href="http://aws.amazon.com/waf/pricing/">WAF Pricing</a>.</p>
   *          </note>
   */
  ManagedRuleGroupStatement?: ManagedRuleGroupStatement;

  /**
   * @public
   * <p>A rule statement to match against labels that have been added to the web request by rules that have already run in the web ACL. </p>
   *          <p>The label match statement provides the label or namespace string to search for. The label string can represent a part or all of the fully qualified label name that had been added to the web request. Fully qualified labels have a prefix, optional namespaces, and label name. The prefix identifies the rule group or web ACL context of the rule that added the label.  If you do not provide the fully qualified name in your label match string, WAF performs the search for labels that were added in the same context as the label match statement. </p>
   */
  LabelMatchStatement?: LabelMatchStatement;

  /**
   * @public
   * <p>A rule statement used to search web request components for a match against a single regular expression. </p>
   */
  RegexMatchStatement?: RegexMatchStatement;
}

/**
 * @public
 * <p>A rule statement used to run the rules that are defined in a managed rule group. To use this, provide the vendor name and the name of the rule group in this statement. You can retrieve the required names by calling <a>ListAvailableManagedRuleGroups</a>.</p>
 *          <p>You cannot nest a <code>ManagedRuleGroupStatement</code>, for example for use inside a <code>NotStatement</code> or <code>OrStatement</code>. You cannot use a managed rule group
 *       inside another rule group. You can only reference a managed rule group as a top-level statement within a rule that you define in a web ACL.</p>
 *          <note>
 *             <p>You are charged additional fees when you use the WAF Bot Control managed rule group <code>AWSManagedRulesBotControlRuleSet</code>, the WAF Fraud Control account takeover prevention (ATP) managed rule group <code>AWSManagedRulesATPRuleSet</code>, or the WAF Fraud Control account creation fraud prevention (ACFP) managed rule group <code>AWSManagedRulesACFPRuleSet</code>. For more information, see <a href="http://aws.amazon.com/waf/pricing/">WAF Pricing</a>.</p>
 *          </note>
 */
export interface ManagedRuleGroupStatement {
  /**
   * @public
   * <p>The name of the managed rule group vendor. You use this, along with the rule group name, to identify a rule group.</p>
   */
  VendorName: string | undefined;

  /**
   * @public
   * <p>The name of the managed rule group. You use this, along with the vendor name, to identify the rule group.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The version of the managed rule group to use. If you specify this, the version setting
   *          is fixed until you change it. If you don't specify this, WAF uses the vendor's
   *          default version, and then keeps the version at the vendor's default when the vendor updates
   *          the managed rule group settings. </p>
   */
  Version?: string;

  /**
   * @public
   * <p>Rules in the referenced rule group whose actions are set to <code>Count</code>. </p>
   *          <note>
   *             <p>Instead of this option, use <code>RuleActionOverrides</code>. It accepts any valid action setting, including <code>Count</code>.</p>
   *          </note>
   */
  ExcludedRules?: ExcludedRule[];

  /**
   * @public
   * <p>An optional nested statement that narrows the scope of the web requests that are
   *          evaluated by the managed rule group. Requests are only evaluated by the rule group if they
   *          match the scope-down statement. You can use any nestable <a>Statement</a> in the
   *          scope-down statement, and you can nest statements at any level, the same as you can for a
   *          rule statement. </p>
   */
  ScopeDownStatement?: Statement;

  /**
   * @public
   * <p>Additional information that's used by a managed rule group. Many managed rule groups don't require this.</p>
   *          <p>The rule groups used for intelligent threat mitigation require additional configuration: </p>
   *          <ul>
   *             <li>
   *                <p>Use the <code>AWSManagedRulesACFPRuleSet</code> configuration object to configure the account creation fraud prevention managed rule group. The configuration includes the registration and sign-up pages of your application and the locations in the account creation request payload of data, such as the user email and phone number fields. </p>
   *             </li>
   *             <li>
   *                <p>Use the <code>AWSManagedRulesATPRuleSet</code> configuration object to configure the account takeover prevention managed rule group. The configuration includes the sign-in page of your application and the locations in the login request payload of data such as the username and password. </p>
   *             </li>
   *             <li>
   *                <p>Use the <code>AWSManagedRulesBotControlRuleSet</code> configuration object to configure the
   *        protection level that you want the Bot Control rule group to use. </p>
   *             </li>
   *          </ul>
   */
  ManagedRuleGroupConfigs?: ManagedRuleGroupConfig[];

  /**
   * @public
   * <p>Action settings to use in the place of the rule actions that are configured inside the rule group. You specify one override for each rule whose action you want to change. </p>
   *          <p>You can use overrides for testing, for example you can override all of rule actions to <code>Count</code> and then monitor the resulting count metrics to understand how the rule group would handle your web traffic. You can also permanently override some or all actions, to modify how the rule group manages your web traffic.</p>
   */
  RuleActionOverrides?: RuleActionOverride[];
}

/**
 * @public
 * <p>A logical rule statement used to negate the results of another rule statement. You provide one <a>Statement</a> within the <code>NotStatement</code>.</p>
 */
export interface NotStatement {
  /**
   * @public
   * <p>The statement to negate. You can use any statement that can be nested.</p>
   */
  Statement: Statement | undefined;
}

/**
 * @public
 * <p>A rate-based rule counts incoming requests and rate limits requests when they are coming at too fast a rate. The rule categorizes requests according to your aggregation criteria, collects them into aggregation instances, and counts and rate limits the requests for each instance. </p>
 *          <p>You can specify individual aggregation keys, like IP address or HTTP method. You can also specify aggregation key combinations, like IP address and HTTP method, or HTTP method, query argument, and cookie. </p>
 *          <p>Each unique set of values for the aggregation keys that you specify is a separate aggregation instance, with the value from each key contributing to the aggregation instance definition. </p>
 *          <p>For example, assume the rule evaluates web requests with the following IP address and HTTP method values: </p>
 *          <ul>
 *             <li>
 *                <p>IP address 10.1.1.1, HTTP method POST</p>
 *             </li>
 *             <li>
 *                <p>IP address 10.1.1.1, HTTP method GET</p>
 *             </li>
 *             <li>
 *                <p>IP address 127.0.0.0, HTTP method POST</p>
 *             </li>
 *             <li>
 *                <p>IP address 10.1.1.1, HTTP method GET</p>
 *             </li>
 *          </ul>
 *          <p>The rule would create different aggregation instances according to your aggregation criteria, for example: </p>
 *          <ul>
 *             <li>
 *                <p>If the aggregation criteria is just the IP address, then each individual address is an aggregation instance, and WAF counts requests separately for each. The aggregation instances and request counts for our example would be the following: </p>
 *                <ul>
 *                   <li>
 *                      <p>IP address 10.1.1.1: count 3</p>
 *                   </li>
 *                   <li>
 *                      <p>IP address 127.0.0.0: count 1</p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>If the aggregation criteria is HTTP method, then each individual HTTP method is an aggregation instance. The aggregation instances and request counts for our example would be the following: </p>
 *                <ul>
 *                   <li>
 *                      <p>HTTP method POST: count 2</p>
 *                   </li>
 *                   <li>
 *                      <p>HTTP method GET: count 2</p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>If the aggregation criteria is IP address and HTTP method, then each IP address and each HTTP method would contribute to the combined aggregation instance. The aggregation instances and request counts for our example would be the following: </p>
 *                <ul>
 *                   <li>
 *                      <p>IP address 10.1.1.1, HTTP method POST: count 1</p>
 *                   </li>
 *                   <li>
 *                      <p>IP address 10.1.1.1, HTTP method GET: count 2</p>
 *                   </li>
 *                   <li>
 *                      <p>IP address 127.0.0.0, HTTP method POST: count 1</p>
 *                   </li>
 *                </ul>
 *             </li>
 *          </ul>
 *          <p>For any n-tuple of aggregation keys, each unique combination of values for the keys defines a separate aggregation instance, which WAF counts and rate-limits individually. </p>
 *          <p>You can optionally nest another statement inside the rate-based statement, to narrow the scope of the rule so that it only counts and rate limits requests that match the nested statement. You can use this nested scope-down statement in conjunction with your aggregation key specifications or you can just count and rate limit all requests that match the scope-down statement, without additional aggregation. When you choose to just manage all requests that match a scope-down statement, the aggregation instance is singular for the rule. </p>
 *          <p>You cannot nest a <code>RateBasedStatement</code> inside another statement, for example inside a <code>NotStatement</code> or <code>OrStatement</code>. You can define a <code>RateBasedStatement</code> inside a web ACL and inside a rule group. </p>
 *          <p>For additional information about the options, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-rate-based-rules.html">Rate limiting web requests using rate-based rules</a>
 *     in the <i>WAF Developer Guide</i>. </p>
 *          <p>If you only aggregate on the individual IP address or forwarded IP address, you can retrieve the list of IP addresses that WAF
 *           is currently rate limiting for a rule through the API call <code>GetRateBasedStatementManagedKeys</code>. This option is not available
 *       for other aggregation configurations.</p>
 *          <p>WAF tracks and manages web requests separately for each instance of a rate-based rule that you use. For example, if you provide the same rate-based rule settings in two web ACLs, each of the two rule statements represents a separate instance of the rate-based rule and gets its own tracking and management by WAF. If you define a rate-based rule inside a rule group, and then use that rule group in multiple places, each use creates a separate instance of the rate-based rule that gets its own tracking and management by WAF. </p>
 */
export interface RateBasedStatement {
  /**
   * @public
   * <p>The limit on requests per 5-minute period for a single aggregation instance for the rate-based rule.
   *        If the rate-based statement includes a <code>ScopeDownStatement</code>, this limit is applied only to the
   *          requests that match the statement.</p>
   *          <p>Examples: </p>
   *          <ul>
   *             <li>
   *                <p>If you aggregate on just the IP address, this is the limit on requests from any single IP address. </p>
   *             </li>
   *             <li>
   *                <p>If you aggregate on the HTTP method and the query argument name "city", then this is the limit on
   *              requests for any single method, city pair. </p>
   *             </li>
   *          </ul>
   */
  Limit: number | undefined;

  /**
   * @public
   * <p>Setting that indicates how to aggregate the request counts. </p>
   *          <note>
   *             <p>Web requests that are missing any of the components specified in the aggregation keys
   *                 are omitted from the rate-based rule evaluation and handling. </p>
   *          </note>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CONSTANT</code> - Count and limit the requests that match the rate-based rule's scope-down
   *              statement. With this option, the counted requests aren't further aggregated. The scope-down statement
   *                  is the only specification used. When the count of all requests that satisfy the scope-down statement
   *                  goes over the limit, WAF applies the rule action to all requests that satisfy the scope-down statement. </p>
   *                <p>With this option, you must configure the <code>ScopeDownStatement</code> property. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CUSTOM_KEYS</code> - Aggregate the request counts using one or more web request components as the aggregate keys.</p>
   *                <p>With this option, you must specify the aggregate keys in the <code>CustomKeys</code> property. </p>
   *                <p>To aggregate on only the IP address or only the forwarded IP address, don't use custom keys. Instead, set the aggregate
   *                  key type to <code>IP</code> or <code>FORWARDED_IP</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FORWARDED_IP</code> - Aggregate the request counts on the first IP address in an HTTP header. </p>
   *                <p>With this option, you must specify the header to use in the <code>ForwardedIPConfig</code> property. </p>
   *                <p>To aggregate on a combination of the forwarded IP address with other aggregate keys, use <code>CUSTOM_KEYS</code>. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IP</code> - Aggregate the request counts on the IP address from the web request
   *                origin.</p>
   *                <p>To aggregate on a combination of the IP address with other aggregate keys, use <code>CUSTOM_KEYS</code>. </p>
   *             </li>
   *          </ul>
   */
  AggregateKeyType: RateBasedStatementAggregateKeyType | undefined;

  /**
   * @public
   * <p>An optional nested statement that narrows the scope of the web requests that are
   *       evaluated and managed by the rate-based statement. When you use a scope-down statement,
   *       the rate-based rule only tracks and rate limits
   *       requests that match the scope-down statement. You can use any nestable <a>Statement</a> in the scope-down statement, and you can nest statements at any
   *          level, the same as you can for a rule statement. </p>
   */
  ScopeDownStatement?: Statement;

  /**
   * @public
   * <p>The configuration for inspecting IP addresses in an HTTP header that you specify, instead of using the IP address that's reported by the web request origin. Commonly, this is the X-Forwarded-For (XFF) header, but you can specify any header name. </p>
   *          <note>
   *             <p>If the specified header isn't present in the request, WAF doesn't apply the rule to the web request at all.</p>
   *          </note>
   *          <p>This is required if you specify a forwarded IP in the rule's aggregate key settings. </p>
   */
  ForwardedIPConfig?: ForwardedIPConfig;

  /**
   * @public
   * <p>Specifies the aggregate keys to use in a rate-base rule. </p>
   */
  CustomKeys?: RateBasedStatementCustomKey[];
}

/**
 * @public
 * <p>A single rule, which you can use in a <a>WebACL</a> or <a>RuleGroup</a> to identify web requests that you want to manage in some way.
 *       Each rule includes one top-level <a>Statement</a> that WAF uses to
 *          identify matching web requests, and parameters that govern how WAF handles them. </p>
 */
export interface Rule {
  /**
   * @public
   * <p>The name of the rule. </p>
   *          <p>If you change the name of a <code>Rule</code> after you create
   *            it and you want the rule's metric name to reflect the change, update the metric name in the rule's <code>VisibilityConfig</code> settings. WAF
   *           doesn't automatically update the metric name when you update the rule name. </p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>If you define more than one <code>Rule</code> in a <code>WebACL</code>, WAF
   *          evaluates each request against the <code>Rules</code> in order based on the value of
   *             <code>Priority</code>. WAF processes rules with lower priority first. The priorities
   *          don't need to be consecutive, but they must all be different.</p>
   */
  Priority: number | undefined;

  /**
   * @public
   * <p>The WAF processing statement for the rule, for example <a>ByteMatchStatement</a> or <a>SizeConstraintStatement</a>. </p>
   */
  Statement: Statement | undefined;

  /**
   * @public
   * <p>The action that WAF should take on a web request when it matches the rule statement. Settings at the web ACL level can override the rule action setting. </p>
   *          <p>This is used only for rules whose statements do not reference a rule group. Rule statements that reference a rule group include <code>RuleGroupReferenceStatement</code> and <code>ManagedRuleGroupStatement</code>. </p>
   *          <p>You must specify either this <code>Action</code> setting or the rule <code>OverrideAction</code> setting, but not both:</p>
   *          <ul>
   *             <li>
   *                <p>If the rule statement does not reference a rule group, use this rule action setting and not the rule override action setting. </p>
   *             </li>
   *             <li>
   *                <p>If the rule statement references a rule group, use the override action setting and not this action setting.  </p>
   *             </li>
   *          </ul>
   */
  Action?: RuleAction;

  /**
   * @public
   * <p>The action to use in the place of the action that results from the rule group evaluation. Set the override action to none to leave the result of the rule group alone. Set it to count to override the result to count only. </p>
   *          <p>You can only use this for rule statements that reference a rule group, like <code>RuleGroupReferenceStatement</code> and <code>ManagedRuleGroupStatement</code>. </p>
   *          <note>
   *             <p>This option is usually set to none. It does not affect how the rules in the rule group are evaluated. If you want the rules in the rule group to only count
   *   matches, do not use this and instead use the rule action override option, with <code>Count</code> action, in your rule group reference statement settings. </p>
   *          </note>
   */
  OverrideAction?: OverrideAction;

  /**
   * @public
   * <p>Labels to apply to web requests that match the rule match statement. WAF applies
   *          fully qualified labels to matching web requests. A fully qualified label is the
   *          concatenation of a label namespace and a rule label. The rule's rule group or web ACL
   *          defines the label namespace. </p>
   *          <p>Rules that run after this rule in the web ACL can match against these labels using a
   *             <code>LabelMatchStatement</code>.</p>
   *          <p>For each label, provide a case-sensitive string containing optional namespaces and a
   *          label name, according to the following guidelines:</p>
   *          <ul>
   *             <li>
   *                <p>Separate each component of the label with a colon. </p>
   *             </li>
   *             <li>
   *                <p>Each namespace or name can have up to 128 characters.</p>
   *             </li>
   *             <li>
   *                <p>You can specify up to 5 namespaces in a label.</p>
   *             </li>
   *             <li>
   *                <p>Don't use the following reserved words in your label specification:
   *                   <code>aws</code>, <code>waf</code>, <code>managed</code>, <code>rulegroup</code>,
   *                   <code>webacl</code>, <code>regexpatternset</code>, or <code>ipset</code>.</p>
   *             </li>
   *          </ul>
   *          <p>For example, <code>myLabelName</code> or <code>nameSpace1:nameSpace2:myLabelName</code>.
   *       </p>
   */
  RuleLabels?: Label[];

  /**
   * @public
   * <p>Defines and enables Amazon CloudWatch metrics and web request sample collection.  </p>
   *          <p>If you change the name of a <code>Rule</code> after you create
   *           it and you want the rule's metric name to reflect the change, update the metric name as well. WAF
   *           doesn't automatically update the metric name. </p>
   */
  VisibilityConfig: VisibilityConfig | undefined;

  /**
   * @public
   * <p>Specifies how WAF should handle <code>CAPTCHA</code> evaluations. If you don't specify this, WAF uses the <code>CAPTCHA</code> configuration that's defined for the web ACL. </p>
   */
  CaptchaConfig?: CaptchaConfig;

  /**
   * @public
   * <p>Specifies how WAF should handle <code>Challenge</code> evaluations. If you don't specify this, WAF uses the challenge configuration that's defined for the web ACL. </p>
   */
  ChallengeConfig?: ChallengeConfig;
}

/**
 * @public
 * <p>A logical rule statement used to combine other rule statements with AND logic. You provide more than one <a>Statement</a> within the <code>AndStatement</code>. </p>
 */
export interface AndStatement {
  /**
   * @public
   * <p>The statements to combine with AND logic. You can use any statements that can be nested.
   *       </p>
   */
  Statements: Statement[] | undefined;
}

/**
 * @public
 * <p>A logical rule statement used to combine other rule statements with OR logic. You provide more than one <a>Statement</a> within the <code>OrStatement</code>. </p>
 */
export interface OrStatement {
  /**
   * @public
   * <p>The statements to combine with OR logic. You can use any statements that can be
   *          nested.</p>
   */
  Statements: Statement[] | undefined;
}

/**
 * @public
 * <p>The processing guidance for an Firewall Manager rule. This is like a regular rule <a>Statement</a>, but it can only contain a single rule group reference.</p>
 */
export interface FirewallManagerStatement {
  /**
   * @public
   * <p>A statement used by Firewall Manager to run the rules that are defined in a managed rule group. This is managed by Firewall Manager for an Firewall Manager WAF policy.</p>
   */
  ManagedRuleGroupStatement?: ManagedRuleGroupStatement;

  /**
   * @public
   * <p>A statement used by Firewall Manager to run the rules that are defined in a rule group. This is managed by Firewall Manager for an Firewall Manager WAF policy.</p>
   */
  RuleGroupReferenceStatement?: RuleGroupReferenceStatement;
}

/**
 * @public
 * <p>A rule group that's defined for an Firewall Manager WAF policy.</p>
 */
export interface FirewallManagerRuleGroup {
  /**
   * @public
   * <p>The name of the rule group. You cannot change the name of a rule group after you create it.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>If you define more than one rule group in the first or last Firewall Manager rule groups, WAF
   *          evaluates each request against the rule groups in order, starting from the lowest priority
   *          setting. The priorities don't need to be consecutive, but they must all be
   *          different.</p>
   */
  Priority: number | undefined;

  /**
   * @public
   * <p>The processing guidance for an Firewall Manager rule. This is like a regular rule <a>Statement</a>, but it can only contain a rule group reference.</p>
   */
  FirewallManagerStatement: FirewallManagerStatement | undefined;

  /**
   * @public
   * <p>The action to use in the place of the action that results from the rule group evaluation. Set the override action to none to leave the result of the rule group alone. Set it to count to override the result to count only. </p>
   *          <p>You can only use this for rule statements that reference a rule group, like <code>RuleGroupReferenceStatement</code> and <code>ManagedRuleGroupStatement</code>. </p>
   *          <note>
   *             <p>This option is usually set to none. It does not affect how the rules in the rule group are evaluated. If you want the rules in the rule group to only count
   *   matches, do not use this and instead use the rule action override option, with <code>Count</code> action, in your rule group reference statement settings. </p>
   *          </note>
   */
  OverrideAction: OverrideAction | undefined;

  /**
   * @public
   * <p>Defines and enables Amazon CloudWatch metrics and web request sample collection.  </p>
   */
  VisibilityConfig: VisibilityConfig | undefined;
}

/**
 * @public
 */
export interface CheckCapacityRequest {
  /**
   * @public
   * <p>Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, an App Runner service, or an Amazon Web Services Verified Access instance.  </p>
   *          <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p>
   *          <ul>
   *             <li>
   *                <p>CLI - Specify the Region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p>
   *             </li>
   *             <li>
   *                <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p>
   *             </li>
   *          </ul>
   */
  Scope: Scope | undefined;

  /**
   * @public
   * <p>An array of <a>Rule</a> that you're configuring to use in a rule group or web
   *          ACL. </p>
   */
  Rules: Rule[] | undefined;
}

/**
 * @public
 */
export interface CreateRuleGroupRequest {
  /**
   * @public
   * <p>The name of the rule group. You cannot change the name of a rule group after you create it.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, an App Runner service, or an Amazon Web Services Verified Access instance.  </p>
   *          <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p>
   *          <ul>
   *             <li>
   *                <p>CLI - Specify the Region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p>
   *             </li>
   *             <li>
   *                <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p>
   *             </li>
   *          </ul>
   */
  Scope: Scope | undefined;

  /**
   * @public
   * <p>The web ACL capacity units (WCUs) required for this rule group.</p>
   *          <p>When you create your own rule group, you define this, and you cannot change it after creation.
   *           When you add or modify the rules in a rule group, WAF enforces this limit. You can check the capacity
   *           for a set of rules using <a>CheckCapacity</a>.</p>
   *          <p>WAF uses WCUs to calculate and control the operating
   *          resources that are used to run your rules, rule groups, and web ACLs. WAF
   *          calculates capacity differently for each rule type, to reflect the relative cost of each rule.
   *          Simple rules that cost little to run use fewer WCUs than more complex rules
   * 				that use more processing power.
   * 				Rule group capacity is fixed at creation, which helps users plan their
   *          web ACL WCU usage when they use a rule group. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/aws-waf-capacity-units.html">WAF web ACL capacity units (WCU)</a>
   *     in the <i>WAF Developer Guide</i>. </p>
   */
  Capacity: number | undefined;

  /**
   * @public
   * <p>A description of the rule group that helps with identification. </p>
   */
  Description?: string;

  /**
   * @public
   * <p>The <a>Rule</a> statements used to identify the web requests that you
   *          want to manage. Each rule includes one top-level statement that WAF uses to identify matching
   *          web requests, and parameters that govern how WAF handles them.
   *       </p>
   */
  Rules?: Rule[];

  /**
   * @public
   * <p>Defines and enables Amazon CloudWatch metrics and web request sample collection.  </p>
   */
  VisibilityConfig: VisibilityConfig | undefined;

  /**
   * @public
   * <p>An array of key:value pairs to associate with the resource.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>A map of custom response keys and content bodies. When you create a rule with a block action, you can send a custom response to the web request. You define these for the rule group, and then use them in the rules that you define in the rule group. </p>
   *          <p>For information about customizing web requests and responses,
   *            see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html">Customizing web requests and responses in WAF</a>
   *     in the <i>WAF Developer Guide</i>. </p>
   *          <p>For information about the limits on count and size for custom request and response settings, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/limits.html">WAF quotas</a>
   *      in the <i>WAF Developer Guide</i>. </p>
   */
  CustomResponseBodies?: Record<string, CustomResponseBody>;
}

/**
 * @public
 */
export interface CreateWebACLRequest {
  /**
   * @public
   * <p>The name of the web ACL. You cannot change the name of a web ACL after you create it.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, an App Runner service, or an Amazon Web Services Verified Access instance.  </p>
   *          <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p>
   *          <ul>
   *             <li>
   *                <p>CLI - Specify the Region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p>
   *             </li>
   *             <li>
   *                <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p>
   *             </li>
   *          </ul>
   */
  Scope: Scope | undefined;

  /**
   * @public
   * <p>The action to perform if none of the <code>Rules</code> contained in the <code>WebACL</code> match. </p>
   */
  DefaultAction: DefaultAction | undefined;

  /**
   * @public
   * <p>A description of the web ACL that helps with identification. </p>
   */
  Description?: string;

  /**
   * @public
   * <p>The <a>Rule</a> statements used to identify the web requests that you
   *          want to manage. Each rule includes one top-level statement that WAF uses to identify matching
   *          web requests, and parameters that govern how WAF handles them.
   *       </p>
   */
  Rules?: Rule[];

  /**
   * @public
   * <p>Defines and enables Amazon CloudWatch metrics and web request sample collection.  </p>
   */
  VisibilityConfig: VisibilityConfig | undefined;

  /**
   * @public
   * <p>An array of key:value pairs to associate with the resource.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>A map of custom response keys and content bodies. When you create a rule with a block action, you can send a custom response to the web request. You define these for the web ACL, and then use them in the rules and default actions that you define in the web ACL. </p>
   *          <p>For information about customizing web requests and responses,
   *            see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html">Customizing web requests and responses in WAF</a>
   *     in the <i>WAF Developer Guide</i>. </p>
   *          <p>For information about the limits on count and size for custom request and response settings, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/limits.html">WAF quotas</a>
   *      in the <i>WAF Developer Guide</i>. </p>
   */
  CustomResponseBodies?: Record<string, CustomResponseBody>;

  /**
   * @public
   * <p>Specifies how WAF should handle <code>CAPTCHA</code> evaluations for rules that don't have their own <code>CaptchaConfig</code> settings. If you don't specify this, WAF uses its default settings for <code>CaptchaConfig</code>. </p>
   */
  CaptchaConfig?: CaptchaConfig;

  /**
   * @public
   * <p>Specifies how WAF should handle challenge evaluations for rules that don't have
   * their own <code>ChallengeConfig</code> settings. If you don't specify this, WAF uses its default settings for <code>ChallengeConfig</code>. </p>
   */
  ChallengeConfig?: ChallengeConfig;

  /**
   * @public
   * <p>Specifies the domains that WAF should accept in a web request token. This enables the use of tokens across multiple protected websites. When WAF provides a token, it uses the domain of the Amazon Web Services resource that the web ACL is protecting. If you don't specify a list of token domains, WAF accepts tokens only for the domain of the protected resource. With a token domain list, WAF accepts the resource's host domain plus all domains in the token domain list, including their prefixed subdomains.</p>
   *          <p>Example JSON: <code>"TokenDomains": \{ "mywebsite.com", "myotherwebsite.com" \}</code>
   *          </p>
   *          <p>Public suffixes aren't allowed. For example, you can't use <code>usa.gov</code> or <code>co.uk</code> as token domains.</p>
   */
  TokenDomains?: string[];

  /**
   * @public
   * <p>Specifies custom configurations for the associations between the web ACL and protected resources.  </p>
   *          <p>Use this to customize the maximum size of the request body that your protected CloudFront distributions forward to WAF for inspection. The default is 16 KB (16,384 bytes). </p>
   *          <note>
   *             <p>You are charged additional fees when your protected resources forward body sizes that are larger than the default. For more information, see <a href="http://aws.amazon.com/waf/pricing/">WAF Pricing</a>.</p>
   *          </note>
   */
  AssociationConfig?: AssociationConfig;
}

/**
 * @public
 * <p> A rule group defines a collection of rules to inspect and control web requests that you can use in a <a>WebACL</a>. When you create a rule group, you define an immutable capacity limit. If you update a rule group, you must stay within the capacity. This allows others to reuse the rule group with confidence in its capacity requirements. </p>
 */
export interface RuleGroup {
  /**
   * @public
   * <p>The name of the rule group. You cannot change the name of a rule group after you create it.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>A unique identifier for the rule group. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The web ACL capacity units (WCUs) required for this rule group.</p>
   *          <p>When you create your own rule group, you define this, and you cannot change it after creation.
   *           When you add or modify the rules in a rule group, WAF enforces this limit. You can check the capacity
   *           for a set of rules using <a>CheckCapacity</a>.</p>
   *          <p>WAF uses WCUs to calculate and control the operating
   *          resources that are used to run your rules, rule groups, and web ACLs. WAF
   *          calculates capacity differently for each rule type, to reflect the relative cost of each rule.
   *          Simple rules that cost little to run use fewer WCUs than more complex rules
   * 				that use more processing power.
   * 				Rule group capacity is fixed at creation, which helps users plan their
   *          web ACL WCU usage when they use a rule group. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/aws-waf-capacity-units.html">WAF web ACL capacity units (WCU)</a>
   *     in the <i>WAF Developer Guide</i>. </p>
   */
  Capacity: number | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the entity.</p>
   */
  ARN: string | undefined;

  /**
   * @public
   * <p>A description of the rule group that helps with identification. </p>
   */
  Description?: string;

  /**
   * @public
   * <p>The <a>Rule</a> statements used to identify the web requests that you
   *          want to manage. Each rule includes one top-level statement that WAF uses to identify matching
   *          web requests, and parameters that govern how WAF handles them.
   *       </p>
   */
  Rules?: Rule[];

  /**
   * @public
   * <p>Defines and enables Amazon CloudWatch metrics and web request sample collection.  </p>
   */
  VisibilityConfig: VisibilityConfig | undefined;

  /**
   * @public
   * <p>The label namespace prefix for this rule group. All labels added by rules in this rule group have this prefix. </p>
   *          <ul>
   *             <li>
   *                <p>The syntax for the label namespace prefix for your rule groups is the following: </p>
   *                <p>
   *                   <code>awswaf:<account ID>:rulegroup:<rule group name>:</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>When a rule with a label matches a web request, WAF adds the fully qualified label to the request. A fully qualified label is made up of the label namespace from the rule group or web ACL where the rule is defined and the label from the rule, separated by a colon: </p>
   *                <p>
   *                   <code><label namespace>:<label from rule></code>
   *                </p>
   *             </li>
   *          </ul>
   */
  LabelNamespace?: string;

  /**
   * @public
   * <p>A map of custom response keys and content bodies. When you create a rule with a block action, you can send a custom response to the web request. You define these for the rule group, and then use them in the rules that you define in the rule group. </p>
   *          <p>For information about customizing web requests and responses,
   *            see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html">Customizing web requests and responses in WAF</a>
   *     in the <i>WAF Developer Guide</i>. </p>
   *          <p>For information about the limits on count and size for custom request and response settings, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/limits.html">WAF quotas</a>
   *      in the <i>WAF Developer Guide</i>. </p>
   */
  CustomResponseBodies?: Record<string, CustomResponseBody>;

  /**
   * @public
   * <p>The labels that one or more rules in this rule group add to matching web requests. These labels are defined in the <code>RuleLabels</code> for a <a>Rule</a>.</p>
   */
  AvailableLabels?: LabelSummary[];

  /**
   * @public
   * <p>The labels that one or more rules in this rule group match against in label match statements. These labels are defined in a <code>LabelMatchStatement</code> specification, in the <a>Statement</a> definition of a rule.  </p>
   */
  ConsumedLabels?: LabelSummary[];
}

/**
 * @public
 */
export interface UpdateRuleGroupRequest {
  /**
   * @public
   * <p>The name of the rule group. You cannot change the name of a rule group after you create it.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, an App Runner service, or an Amazon Web Services Verified Access instance.  </p>
   *          <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p>
   *          <ul>
   *             <li>
   *                <p>CLI - Specify the Region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p>
   *             </li>
   *             <li>
   *                <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p>
   *             </li>
   *          </ul>
   */
  Scope: Scope | undefined;

  /**
   * @public
   * <p>A unique identifier for the rule group. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>A description of the rule group that helps with identification. </p>
   */
  Description?: string;

  /**
   * @public
   * <p>The <a>Rule</a> statements used to identify the web requests that you
   *          want to manage. Each rule includes one top-level statement that WAF uses to identify matching
   *          web requests, and parameters that govern how WAF handles them.
   *       </p>
   */
  Rules?: Rule[];

  /**
   * @public
   * <p>Defines and enables Amazon CloudWatch metrics and web request sample collection.  </p>
   */
  VisibilityConfig: VisibilityConfig | undefined;

  /**
   * @public
   * <p>A token used for optimistic locking. WAF returns a token to your <code>get</code> and <code>list</code> requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like <code>update</code> and <code>delete</code>. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another <code>get</code>, and use the new token returned by that operation. </p>
   */
  LockToken: string | undefined;

  /**
   * @public
   * <p>A map of custom response keys and content bodies. When you create a rule with a block action, you can send a custom response to the web request. You define these for the rule group, and then use them in the rules that you define in the rule group. </p>
   *          <p>For information about customizing web requests and responses,
   *            see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html">Customizing web requests and responses in WAF</a>
   *     in the <i>WAF Developer Guide</i>. </p>
   *          <p>For information about the limits on count and size for custom request and response settings, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/limits.html">WAF quotas</a>
   *      in the <i>WAF Developer Guide</i>. </p>
   */
  CustomResponseBodies?: Record<string, CustomResponseBody>;
}

/**
 * @public
 */
export interface UpdateWebACLRequest {
  /**
   * @public
   * <p>The name of the web ACL. You cannot change the name of a web ACL after you create it.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, an App Runner service, or an Amazon Web Services Verified Access instance.  </p>
   *          <p>To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: </p>
   *          <ul>
   *             <li>
   *                <p>CLI - Specify the Region when you use the CloudFront scope: <code>--scope=CLOUDFRONT --region=us-east-1</code>. </p>
   *             </li>
   *             <li>
   *                <p>API and SDKs - For all calls, use the Region endpoint us-east-1. </p>
   *             </li>
   *          </ul>
   */
  Scope: Scope | undefined;

  /**
   * @public
   * <p>The unique identifier for the web ACL. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The action to perform if none of the <code>Rules</code> contained in the <code>WebACL</code> match. </p>
   */
  DefaultAction: DefaultAction | undefined;

  /**
   * @public
   * <p>A description of the web ACL that helps with identification. </p>
   */
  Description?: string;

  /**
   * @public
   * <p>The <a>Rule</a> statements used to identify the web requests that you
   *          want to manage. Each rule includes one top-level statement that WAF uses to identify matching
   *          web requests, and parameters that govern how WAF handles them.
   *       </p>
   */
  Rules?: Rule[];

  /**
   * @public
   * <p>Defines and enables Amazon CloudWatch metrics and web request sample collection.  </p>
   */
  VisibilityConfig: VisibilityConfig | undefined;

  /**
   * @public
   * <p>A token used for optimistic locking. WAF returns a token to your <code>get</code> and <code>list</code> requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like <code>update</code> and <code>delete</code>. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another <code>get</code>, and use the new token returned by that operation. </p>
   */
  LockToken: string | undefined;

  /**
   * @public
   * <p>A map of custom response keys and content bodies. When you create a rule with a block action, you can send a custom response to the web request. You define these for the web ACL, and then use them in the rules and default actions that you define in the web ACL. </p>
   *          <p>For information about customizing web requests and responses,
   *            see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html">Customizing web requests and responses in WAF</a>
   *     in the <i>WAF Developer Guide</i>. </p>
   *          <p>For information about the limits on count and size for custom request and response settings, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/limits.html">WAF quotas</a>
   *      in the <i>WAF Developer Guide</i>. </p>
   */
  CustomResponseBodies?: Record<string, CustomResponseBody>;

  /**
   * @public
   * <p>Specifies how WAF should handle <code>CAPTCHA</code> evaluations for rules that don't have their own <code>CaptchaConfig</code> settings. If you don't specify this, WAF uses its default settings for <code>CaptchaConfig</code>. </p>
   */
  CaptchaConfig?: CaptchaConfig;

  /**
   * @public
   * <p>Specifies how WAF should handle challenge evaluations for rules that don't have
   * their own <code>ChallengeConfig</code> settings. If you don't specify this, WAF uses its default settings for <code>ChallengeConfig</code>. </p>
   */
  ChallengeConfig?: ChallengeConfig;

  /**
   * @public
   * <p>Specifies the domains that WAF should accept in a web request token. This enables the use of tokens across multiple protected websites. When WAF provides a token, it uses the domain of the Amazon Web Services resource that the web ACL is protecting. If you don't specify a list of token domains, WAF accepts tokens only for the domain of the protected resource. With a token domain list, WAF accepts the resource's host domain plus all domains in the token domain list, including their prefixed subdomains.</p>
   *          <p>Example JSON: <code>"TokenDomains": \{ "mywebsite.com", "myotherwebsite.com" \}</code>
   *          </p>
   *          <p>Public suffixes aren't allowed. For example, you can't use <code>usa.gov</code> or <code>co.uk</code> as token domains.</p>
   */
  TokenDomains?: string[];

  /**
   * @public
   * <p>Specifies custom configurations for the associations between the web ACL and protected resources.  </p>
   *          <p>Use this to customize the maximum size of the request body that your protected CloudFront distributions forward to WAF for inspection. The default is 16 KB (16,384 bytes). </p>
   *          <note>
   *             <p>You are charged additional fees when your protected resources forward body sizes that are larger than the default. For more information, see <a href="http://aws.amazon.com/waf/pricing/">WAF Pricing</a>.</p>
   *          </note>
   */
  AssociationConfig?: AssociationConfig;
}

/**
 * @public
 */
export interface GetRuleGroupResponse {
  /**
   * @public
   * <p></p>
   */
  RuleGroup?: RuleGroup;

  /**
   * @public
   * <p>A token used for optimistic locking. WAF returns a token to your <code>get</code> and <code>list</code> requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like <code>update</code> and <code>delete</code>. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another <code>get</code>, and use the new token returned by that operation. </p>
   */
  LockToken?: string;
}

/**
 * @public
 * <p> A web ACL defines a collection of rules to use to inspect and control web requests. Each rule has a statement that defines what to look for in web requests and an action that WAF applies to requests that match the statement. In the web ACL, you assign a default action to take (allow, block) for any request that does not match any of the rules. The rules in a web ACL can be a combination of the types <a>Rule</a>, <a>RuleGroup</a>, and managed rule group. You can associate a web ACL with one or more Amazon Web Services resources to protect. The resources can be an Amazon CloudFront distribution, an Amazon API Gateway REST API, an Application Load Balancer, an AppSync GraphQL API, an Amazon Cognito user pool, an App Runner service, or an Amazon Web Services Verified Access instance.  </p>
 */
export interface WebACL {
  /**
   * @public
   * <p>The name of the web ACL. You cannot change the name of a web ACL after you create it.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>A unique identifier for the <code>WebACL</code>. This ID is returned in the responses to
   *          create and list commands. You use this ID to do things like get, update, and delete a
   *             <code>WebACL</code>.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the web ACL that you want to associate with the
   *          resource.</p>
   */
  ARN: string | undefined;

  /**
   * @public
   * <p>The action to perform if none of the <code>Rules</code> contained in the <code>WebACL</code> match. </p>
   */
  DefaultAction: DefaultAction | undefined;

  /**
   * @public
   * <p>A description of the web ACL that helps with identification. </p>
   */
  Description?: string;

  /**
   * @public
   * <p>The <a>Rule</a> statements used to identify the web requests that you
   *          want to manage. Each rule includes one top-level statement that WAF uses to identify matching
   *          web requests, and parameters that govern how WAF handles them.
   *       </p>
   */
  Rules?: Rule[];

  /**
   * @public
   * <p>Defines and enables Amazon CloudWatch metrics and web request sample collection.  </p>
   */
  VisibilityConfig: VisibilityConfig | undefined;

  /**
   * @public
   * <p>The web ACL capacity units (WCUs) currently being used by this web ACL. </p>
   *          <p>WAF uses WCUs to calculate and control the operating
   *          resources that are used to run your rules, rule groups, and web ACLs. WAF
   *          calculates capacity differently for each rule type, to reflect the relative cost of each rule.
   *          Simple rules that cost little to run use fewer WCUs than more complex rules
   * 				that use more processing power.
   * 				Rule group capacity is fixed at creation, which helps users plan their
   *          web ACL WCU usage when they use a rule group. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/aws-waf-capacity-units.html">WAF web ACL capacity units (WCU)</a>
   *     in the <i>WAF Developer Guide</i>. </p>
   */
  Capacity?: number;

  /**
   * @public
   * <p>The first set of rules for WAF to process in the web ACL. This is defined in an
   *          Firewall Manager WAF policy and contains only rule group references. You can't alter these. Any
   *          rules and rule groups that you define for the web ACL are prioritized after these. </p>
   *          <p>In the Firewall Manager WAF policy, the Firewall Manager administrator can define a set of rule groups to run
   *          first in the web ACL and a set of rule groups to run last. Within each set, the
   *          administrator prioritizes the rule groups, to determine their relative processing
   *          order.</p>
   */
  PreProcessFirewallManagerRuleGroups?: FirewallManagerRuleGroup[];

  /**
   * @public
   * <p>The last set of rules for WAF to process in the web ACL. This is defined in an
   *          Firewall Manager WAF policy and contains only rule group references. You can't alter these. Any
   *          rules and rule groups that you define for the web ACL are prioritized before these. </p>
   *          <p>In the Firewall Manager WAF policy, the Firewall Manager administrator can define a set of rule groups to run
   *          first in the web ACL and a set of rule groups to run last. Within each set, the
   *          administrator prioritizes the rule groups, to determine their relative processing
   *          order.</p>
   */
  PostProcessFirewallManagerRuleGroups?: FirewallManagerRuleGroup[];

  /**
   * @public
   * <p>Indicates whether this web ACL is managed by Firewall Manager. If true, then only Firewall Manager can
   *          delete the web ACL or any Firewall Manager rule groups in the web ACL. </p>
   */
  ManagedByFirewallManager?: boolean;

  /**
   * @public
   * <p>The label namespace prefix for this web ACL. All labels added by rules in this web ACL have this prefix. </p>
   *          <ul>
   *             <li>
   *                <p>The syntax for the label namespace prefix for a web ACL is the following: </p>
   *                <p>
   *                   <code>awswaf:<account ID>:webacl:<web ACL name>:</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>When a rule with a label matches a web request, WAF adds the fully qualified label to the request. A fully qualified label is made up of the label namespace from the rule group or web ACL where the rule is defined and the label from the rule, separated by a colon: </p>
   *                <p>
   *                   <code><label namespace>:<label from rule></code>
   *                </p>
   *             </li>
   *          </ul>
   */
  LabelNamespace?: string;

  /**
   * @public
   * <p>A map of custom response keys and content bodies. When you create a rule with a block action, you can send a custom response to the web request. You define these for the web ACL, and then use them in the rules and default actions that you define in the web ACL. </p>
   *          <p>For information about customizing web requests and responses,
   *            see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html">Customizing web requests and responses in WAF</a>
   *     in the <i>WAF Developer Guide</i>. </p>
   *          <p>For information about the limits on count and size for custom request and response settings, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/limits.html">WAF quotas</a>
   *      in the <i>WAF Developer Guide</i>. </p>
   */
  CustomResponseBodies?: Record<string, CustomResponseBody>;

  /**
   * @public
   * <p>Specifies how WAF should handle <code>CAPTCHA</code> evaluations for rules that don't have their own <code>CaptchaConfig</code> settings. If you don't specify this, WAF uses its default settings for <code>CaptchaConfig</code>. </p>
   */
  CaptchaConfig?: CaptchaConfig;

  /**
   * @public
   * <p>Specifies how WAF should handle challenge evaluations for rules that don't have
   * their own <code>ChallengeConfig</code> settings. If you don't specify this, WAF uses its default settings for <code>ChallengeConfig</code>. </p>
   */
  ChallengeConfig?: ChallengeConfig;

  /**
   * @public
   * <p>Specifies the domains that WAF should accept in a web request token. This enables the use of tokens across multiple protected websites. When WAF provides a token, it uses the domain of the Amazon Web Services resource that the web ACL is protecting. If you don't specify a list of token domains, WAF accepts tokens only for the domain of the protected resource. With a token domain list, WAF accepts the resource's host domain plus all domains in the token domain list, including their prefixed subdomains.</p>
   */
  TokenDomains?: string[];

  /**
   * @public
   * <p>Specifies custom configurations for the associations between the web ACL and protected resources.  </p>
   *          <p>Use this to customize the maximum size of the request body that your protected CloudFront distributions forward to WAF for inspection. The default is 16 KB (16,384 bytes). </p>
   *          <note>
   *             <p>You are charged additional fees when your protected resources forward body sizes that are larger than the default. For more information, see <a href="http://aws.amazon.com/waf/pricing/">WAF Pricing</a>.</p>
   *          </note>
   */
  AssociationConfig?: AssociationConfig;
}

/**
 * @public
 */
export interface GetWebACLForResourceResponse {
  /**
   * @public
   * <p>The web ACL that is associated with the resource. If there is no associated resource,
   *          WAF returns a null web ACL.</p>
   */
  WebACL?: WebACL;
}

/**
 * @public
 */
export interface GetWebACLResponse {
  /**
   * @public
   * <p>The web ACL specification. You can modify the settings in this web ACL and use it to
   *          update this web ACL or create a new one.</p>
   */
  WebACL?: WebACL;

  /**
   * @public
   * <p>A token used for optimistic locking. WAF returns a token to your <code>get</code> and <code>list</code> requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like <code>update</code> and <code>delete</code>. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a <code>WAFOptimisticLockException</code>. If this happens, perform another <code>get</code>, and use the new token returned by that operation. </p>
   */
  LockToken?: string;

  /**
   * @public
   * <p>The URL to use in SDK integrations with Amazon Web Services managed rule groups. For example, you can use the integration SDKs with the account takeover prevention managed rule group <code>AWSManagedRulesATPRuleSet</code> and the account creation fraud prevention managed rule group <code>AWSManagedRulesACFPRuleSet</code>. This is only populated if you are using a rule group in your web ACL that integrates with your applications in this way. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-application-integration.html">WAF client application integration</a>
   * in the <i>WAF Developer Guide</i>.</p>
   */
  ApplicationIntegrationURL?: string;
}
