// smithy-typescript generated code
import type {
  ActionValue,
  AssociatedResourceType,
  BlockchainChain,
  BodyParsingFallbackBehavior,
  ComparisonOperator,
  CountryCode,
  CryptoCurrency,
  Currency,
  CurrencyMode,
  DataProtectionAction,
  FailureReason,
  FallbackBehavior,
  FieldToProtectType,
  FilterBehavior,
  FilterRequirement,
  ForwardedIPPosition,
  GroupByType,
  InspectionLevel,
  IntervalType,
  IPAddressVersion,
  JsonMatchScope,
  LabelMatchScope,
  LogScope,
  LogType,
  LowReputationMode,
  MapMatchScope,
  OversizeHandling,
  PayloadType,
  Platform,
  PositionalConstraint,
  PreParseTextTransformationType,
  RankingSortBy,
  RankingStatisticType,
  RateBasedStatementAggregateKeyType,
  ResourceType,
  ResponseContentType,
  Scope,
  SensitivityLevel,
  SensitivityToAct,
  SettlementSortBy,
  SettlementStatus,
  SizeInspectionLimit,
  SortOrder,
  TextTransformationType,
  TimeSeriesStatisticType,
  UsageOfAction,
} from "./enums";

/**
 * A single action condition for a Condition in a logging filter.
 *
 * @public
 */
export interface ActionCondition {
  /**
   * The action setting that a log record must contain in order to meet the condition. This is the action that WAF applied to the web request.
   *
   * For rule groups, this is either the configured rule action setting, or if you've applied a rule action override to the rule, it's the override action. The value `EXCLUDED_AS_COUNT` matches on excluded rules and also on rules that have a rule action override of Count.
   *
   * @public
   */
  Action: ActionValue | undefined;
}

/**
 * The name of a field in the request payload that contains part or all of your customer's primary physical address.
 *
 * This data type is used in the `RequestInspectionACFP` data type.
 *
 * @public
 */
export interface AddressField {
  /**
   * The name of a single primary address field.
   *
   * How you specify the address fields depends on the request inspection payload type.
   *
   * - For JSON payloads, specify the field identifiers in JSON pointer syntax. For information about the JSON Pointer syntax, see the Internet Engineering Task Force (IETF) documentation [JavaScript Object Notation (JSON) Pointer](https://tools.ietf.org/html/rfc6901).
   *
   *   For example, for the JSON payload `\{ "form": \{ "primaryaddressline1": "THE_ADDRESS1", "primaryaddressline2": "THE_ADDRESS2", "primaryaddressline3": "THE_ADDRESS3" \} \}`, the address field idenfiers are `/form/primaryaddressline1`, `/form/primaryaddressline2`, and `/form/primaryaddressline3`.
   * - For form encoded payload types, use the HTML form names.
   *
   *   For example, for an HTML form with input elements named `primaryaddressline1`, `primaryaddressline2`, and `primaryaddressline3`, the address fields identifiers are `primaryaddressline1`, `primaryaddressline2`, and `primaryaddressline3`.
   *
   * @public
   */
  Identifier: string | undefined;
}

/**
 * Inspect all of the elements that WAF has parsed and extracted from the web request component that you've identified in your FieldToMatch specifications.
 *
 * This is used in the FieldToMatch specification for some web request component types.
 *
 * JSON specification: `"All": \{\}`
 *
 * @public
 */
export interface All {}

/**
 * A custom header for custom request and response handling. This is used in CustomResponse and CustomRequestHandling.
 *
 * @public
 */
export interface CustomHTTPHeader {
  /**
   * The name of the custom header.
   *
   * For custom request header insertion, when WAF inserts the header into the request, it prefixes this name `x-amzn-waf-`, to avoid confusion with the headers that are already in the request. For example, for the header name `sample`, WAF inserts the header `x-amzn-waf-sample`.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The value of the custom header.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * Custom request handling behavior that inserts custom headers into a web request. You can add custom request handling for WAF to use when the rule action doesn't block the request. For example, `CaptchaAction` for requests with valid t okens, and `AllowAction`.
 *
 * For information about customizing web requests and responses, see [Customizing web requests and responses in WAF](https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html) in the *WAF Developer Guide*.
 *
 * @public
 */
export interface CustomRequestHandling {
  /**
   * The HTTP headers to insert into the request. Duplicate header names are not allowed.
   *
   * For information about the limits on count and size for custom request and response settings, see [WAF quotas](https://docs.aws.amazon.com/waf/latest/developerguide/limits.html) in the *WAF Developer Guide*.
   *
   * @public
   */
  InsertHeaders: CustomHTTPHeader[] | undefined;
}

/**
 * Specifies that WAF should allow the request and optionally defines additional custom handling for the request.
 *
 * This is used in the context of other settings, for example to specify values for RuleAction and web ACL DefaultAction.
 *
 * @public
 */
export interface AllowAction {
  /**
   * Defines custom handling for the web request.
   *
   * For information about customizing web requests and responses, see [Customizing web requests and responses in WAF](https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html) in the *WAF Developer Guide*.
   *
   * @public
   */
  CustomRequestHandling?: CustomRequestHandling | undefined;
}

/**
 * Inspect all query arguments of the web request.
 *
 * This is used in the FieldToMatch specification for some web request component types.
 *
 * JSON specification: `"AllQueryArguments": \{\}`
 *
 * @public
 */
export interface AllQueryArguments {}

/**
 * The configuration for inspecting IP addresses in an HTTP header that you specify, instead of using the IP address that's reported by the web request origin. Commonly, this is the X-Forwarded-For (XFF) header, but you can specify any header name.
 *
 * > **Note:** If the specified header isn't present in the request, WAF doesn't apply the rule to the web request at all.
 *
 * This configuration is used for GeoMatchStatement, AsnMatchStatement, and RateBasedStatement. For IPSetReferenceStatement, use IPSetForwardedIPConfig instead.
 *
 * WAF only evaluates the first IP address found in the specified HTTP header.
 *
 * @public
 */
export interface ForwardedIPConfig {
  /**
   * The name of the HTTP header to use for the IP address. For example, to use the X-Forwarded-For (XFF) header, set this to `X-Forwarded-For`.
   *
   * > **Note:** If the specified header isn't present in the request, WAF doesn't apply the rule to the web request at all.
   *
   * @public
   */
  HeaderName: string | undefined;

  /**
   * The match status to assign to the web request if the request doesn't have a valid IP address in the specified position.
   *
   * > **Note:** If the specified header isn't present in the request, WAF doesn't apply the rule to the web request at all.
   *
   * You can specify the following fallback behaviors:
   *
   * - `MATCH` - Treat the web request as matching the rule statement. WAF applies the rule action to the request.
   * - `NO_MATCH` - Treat the web request as not matching the rule statement.
   *
   * @public
   */
  FallbackBehavior: FallbackBehavior | undefined;
}

/**
 * A rule statement that inspects web traffic based on the Autonomous System Number (ASN) associated with the request's IP address.
 *
 * For additional details, see [ASN match rule statement](https://docs.aws.amazon.com/waf/latest/developerguide/waf-rule-statement-type-asn-match.html) in the [WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html).
 *
 * @public
 */
export interface AsnMatchStatement {
  /**
   * Contains one or more Autonomous System Numbers (ASNs). ASNs are unique identifiers assigned to large internet networks managed by organizations such as internet service providers, enterprises, universities, or government agencies.
   *
   * @public
   */
  AsnList: number[] | undefined;

  /**
   * The configuration for inspecting IP addresses to match against an ASN in an HTTP header that you specify, instead of using the IP address that's reported by the web request origin. Commonly, this is the X-Forwarded-For (XFF) header, but you can specify any header name.
   *
   * @public
   */
  ForwardedIPConfig?: ForwardedIPConfig | undefined;
}

/**
 * Inspect the body of the web request. The body immediately follows the request headers.
 *
 * This is used to indicate the web request component to inspect, in the FieldToMatch specification.
 *
 * @public
 */
export interface Body {
  /**
   * What WAF should do if the body is larger than WAF can inspect.
   *
   * WAF does not support inspecting the entire contents of the web request body if the body exceeds the limit for the resource type. When a web request body is larger than the limit, the underlying host service only forwards the contents that are within the limit to WAF for inspection.
   *
   * - For Application Load Balancer and AppSync, the limit is fixed at 8 KB (8,192 bytes).
   * - For CloudFront, API Gateway, Amazon Cognito, App Runner, and Verified Access, the default limit is 16 KB (16,384 bytes), and you can increase the limit for each resource type in the web ACL `AssociationConfig`, for additional processing fees.
   * - For Amplify, use the CloudFront limit.
   *
   * The options for oversize handling are the following:
   *
   * - `CONTINUE` - Inspect the available body contents normally, according to the rule inspection criteria.
   * - `MATCH` - Treat the web request as matching the rule statement. WAF applies the rule action to the request.
   * - `NO_MATCH` - Treat the web request as not matching the rule statement.
   *
   * You can combine the `MATCH` or `NO_MATCH` settings for oversize handling with your rule and web ACL action settings, so that you block any request whose body is over the limit.
   *
   * Default: `CONTINUE`
   *
   * @public
   */
  OversizeHandling?: OversizeHandling | undefined;
}

/**
 * The filter to use to identify the subset of cookies to inspect in a web request.
 *
 * You must specify exactly one setting: either `All`, `IncludedCookies`, or `ExcludedCookies`.
 *
 * Example JSON: `"MatchPattern": \{ "IncludedCookies": [ "session-id-time", "session-id" ] \}`
 *
 * @public
 */
export interface CookieMatchPattern {
  /**
   * Inspect all cookies.
   *
   * @public
   */
  All?: All | undefined;

  /**
   * Inspect only the cookies that have a key that matches one of the strings specified here.
   *
   * @public
   */
  IncludedCookies?: string[] | undefined;

  /**
   * Inspect only the cookies whose keys don't match any of the strings specified here.
   *
   * @public
   */
  ExcludedCookies?: string[] | undefined;
}

/**
 * Inspect the cookies in the web request. You can specify the parts of the cookies to inspect and you can narrow the set of cookies to inspect by including or excluding specific keys.
 *
 * This is used to indicate the web request component to inspect, in the FieldToMatch specification.
 *
 * Example JSON: `"Cookies": \{ "MatchPattern": \{ "All": \{\} \}, "MatchScope": "KEY", "OversizeHandling": "MATCH" \}`
 *
 * @public
 */
export interface Cookies {
  /**
   * The filter to use to identify the subset of cookies to inspect in a web request.
   *
   * You must specify exactly one setting: either `All`, `IncludedCookies`, or `ExcludedCookies`.
   *
   * Example JSON: `"MatchPattern": \{ "IncludedCookies": [ "session-id-time", "session-id" ] \}`
   *
   * @public
   */
  MatchPattern: CookieMatchPattern | undefined;

  /**
   * The parts of the cookies to inspect with the rule inspection criteria. If you specify `ALL`, WAF inspects both keys and values.
   *
   * `All` does not require a match to be found in the keys and a match to be found in the values. It requires a match to be found in the keys or the values or both. To require a match in the keys and in the values, use a logical `AND` statement to combine two match rules, one that inspects the keys and another that inspects the values.
   *
   * @public
   */
  MatchScope: MapMatchScope | undefined;

  /**
   * What WAF should do if the cookies of the request are more numerous or larger than WAF can inspect. WAF does not support inspecting the entire contents of request cookies when they exceed 8 KB (8192 bytes) or 200 total cookies. The underlying host service forwards a maximum of 200 cookies and at most 8 KB of cookie contents to WAF.
   *
   * The options for oversize handling are the following:
   *
   * - `CONTINUE` - Inspect the available cookies normally, according to the rule inspection criteria.
   * - `MATCH` - Treat the web request as matching the rule statement. WAF applies the rule action to the request.
   * - `NO_MATCH` - Treat the web request as not matching the rule statement.
   *
   * @public
   */
  OversizeHandling: OversizeHandling | undefined;
}

/**
 * Inspect a string containing the list of the request's header names, ordered as they appear in the web request that WAF receives for inspection. WAF generates the string and then uses that as the field to match component in its inspection. WAF separates the header names in the string using colons and no added spaces, for example `host:user-agent:accept:authorization:referer`.
 *
 * @public
 */
export interface HeaderOrder {
  /**
   * What WAF should do if the headers determined by your match scope are more numerous or larger than WAF can inspect. WAF does not support inspecting the entire contents of request headers when they exceed 8 KB (8192 bytes) or 200 total headers. The underlying host service forwards a maximum of 200 headers and at most 8 KB of header contents to WAF.
   *
   * The options for oversize handling are the following:
   *
   * - `CONTINUE` - Inspect the available headers normally, according to the rule inspection criteria.
   * - `MATCH` - Treat the web request as matching the rule statement. WAF applies the rule action to the request.
   * - `NO_MATCH` - Treat the web request as not matching the rule statement.
   *
   * @public
   */
  OversizeHandling: OversizeHandling | undefined;
}

/**
 * The filter to use to identify the subset of headers to inspect in a web request.
 *
 * You must specify exactly one setting: either `All`, `IncludedHeaders`, or `ExcludedHeaders`.
 *
 * Example JSON: `"MatchPattern": \{ "ExcludedHeaders": [ "KeyToExclude1", "KeyToExclude2" ] \}`
 *
 * @public
 */
export interface HeaderMatchPattern {
  /**
   * Inspect all headers.
   *
   * @public
   */
  All?: All | undefined;

  /**
   * Inspect only the headers that have a key that matches one of the strings specified here.
   *
   * @public
   */
  IncludedHeaders?: string[] | undefined;

  /**
   * Inspect only the headers whose keys don't match any of the strings specified here.
   *
   * @public
   */
  ExcludedHeaders?: string[] | undefined;
}

/**
 * Inspect all headers in the web request. You can specify the parts of the headers to inspect and you can narrow the set of headers to inspect by including or excluding specific keys.
 *
 * This is used to indicate the web request component to inspect, in the FieldToMatch specification.
 *
 * If you want to inspect just the value of a single header, use the `SingleHeader` `FieldToMatch` setting instead.
 *
 * Example JSON: `"Headers": \{ "MatchPattern": \{ "All": \{\} \}, "MatchScope": "KEY", "OversizeHandling": "MATCH" \}`
 *
 * @public
 */
export interface Headers {
  /**
   * The filter to use to identify the subset of headers to inspect in a web request.
   *
   * You must specify exactly one setting: either `All`, `IncludedHeaders`, or `ExcludedHeaders`.
   *
   * Example JSON: `"MatchPattern": \{ "ExcludedHeaders": [ "KeyToExclude1", "KeyToExclude2" ] \}`
   *
   * @public
   */
  MatchPattern: HeaderMatchPattern | undefined;

  /**
   * The parts of the headers to match with the rule inspection criteria. If you specify `ALL`, WAF inspects both keys and values.
   *
   * `All` does not require a match to be found in the keys and a match to be found in the values. It requires a match to be found in the keys or the values or both. To require a match in the keys and in the values, use a logical `AND` statement to combine two match rules, one that inspects the keys and another that inspects the values.
   *
   * @public
   */
  MatchScope: MapMatchScope | undefined;

  /**
   * What WAF should do if the headers determined by your match scope are more numerous or larger than WAF can inspect. WAF does not support inspecting the entire contents of request headers when they exceed 8 KB (8192 bytes) or 200 total headers. The underlying host service forwards a maximum of 200 headers and at most 8 KB of header contents to WAF.
   *
   * The options for oversize handling are the following:
   *
   * - `CONTINUE` - Inspect the available headers normally, according to the rule inspection criteria.
   * - `MATCH` - Treat the web request as matching the rule statement. WAF applies the rule action to the request.
   * - `NO_MATCH` - Treat the web request as not matching the rule statement.
   *
   * @public
   */
  OversizeHandling: OversizeHandling | undefined;
}

/**
 * Available for use with Amazon CloudFront distributions and Application Load Balancers. Match against the request's JA3 fingerprint. The JA3 fingerprint is a 32-character hash derived from the TLS Client Hello of an incoming request. This fingerprint serves as a unique identifier for the client's TLS configuration. WAF calculates and logs this fingerprint for each request that has enough TLS Client Hello information for the calculation. Almost all web requests include this information.
 *
 * > **Note:** You can use this choice only with a string match `ByteMatchStatement` with the `PositionalConstraint` set to `EXACTLY`.
 *
 * You can obtain the JA3 fingerprint for client requests from the web ACL logs. If WAF is able to calculate the fingerprint, it includes it in the logs. For information about the logging fields, see [Log fields](https://docs.aws.amazon.com/waf/latest/developerguide/logging-fields.html) in the *WAF Developer Guide*.
 *
 * Provide the JA3 fingerprint string from the logs in your string match statement specification, to match with any future requests that have the same TLS configuration.
 *
 * @public
 */
export interface JA3Fingerprint {
  /**
   * The match status to assign to the web request if the request doesn't have a JA3 fingerprint.
   *
   * You can specify the following fallback behaviors:
   *
   * - `MATCH` - Treat the web request as matching the rule statement. WAF applies the rule action to the request.
   * - `NO_MATCH` - Treat the web request as not matching the rule statement.
   *
   * @public
   */
  FallbackBehavior: FallbackBehavior | undefined;
}

/**
 * Available for use with Amazon CloudFront distributions and Application Load Balancers. Match against the request's JA4 fingerprint. The JA4 fingerprint is a 36-character hash derived from the TLS Client Hello of an incoming request. This fingerprint serves as a unique identifier for the client's TLS configuration. WAF calculates and logs this fingerprint for each request that has enough TLS Client Hello information for the calculation. Almost all web requests include this information.
 *
 * > **Note:** You can use this choice only with a string match `ByteMatchStatement` with the `PositionalConstraint` set to `EXACTLY`.
 *
 * You can obtain the JA4 fingerprint for client requests from the web ACL logs. If WAF is able to calculate the fingerprint, it includes it in the logs. For information about the logging fields, see [Log fields](https://docs.aws.amazon.com/waf/latest/developerguide/logging-fields.html) in the *WAF Developer Guide*.
 *
 * Provide the JA4 fingerprint string from the logs in your string match statement specification, to match with any future requests that have the same TLS configuration.
 *
 * @public
 */
export interface JA4Fingerprint {
  /**
   * The match status to assign to the web request if the request doesn't have a JA4 fingerprint.
   *
   * You can specify the following fallback behaviors:
   *
   * - `MATCH` - Treat the web request as matching the rule statement. WAF applies the rule action to the request.
   * - `NO_MATCH` - Treat the web request as not matching the rule statement.
   *
   * @public
   */
  FallbackBehavior: FallbackBehavior | undefined;
}

/**
 * The patterns to look for in the JSON body. WAF inspects the results of these pattern matches against the rule inspection criteria. This is used with the FieldToMatch option `JsonBody`.
 *
 * @public
 */
export interface JsonMatchPattern {
  /**
   * Match all of the elements. See also `MatchScope` in JsonBody.
   *
   * You must specify either this setting or the `IncludedPaths` setting, but not both.
   *
   * @public
   */
  All?: All | undefined;

  /**
   * Match only the specified include paths. See also `MatchScope` in JsonBody.
   *
   * Provide the include paths using JSON Pointer syntax. For example, `"IncludedPaths": ["/dogs/0/name", "/dogs/1/name"]`. For information about this syntax, see the Internet Engineering Task Force (IETF) documentation [JavaScript Object Notation (JSON) Pointer](https://tools.ietf.org/html/rfc6901).
   *
   * You must specify either this setting or the `All` setting, but not both.
   *
   * > **Note:** Don't use this option to include all paths. Instead, use the `All` setting.
   *
   * @public
   */
  IncludedPaths?: string[] | undefined;
}

/**
 * Inspect the body of the web request as JSON. The body immediately follows the request headers.
 *
 * This is used to indicate the web request component to inspect, in the FieldToMatch specification.
 *
 * Use the specifications in this object to indicate which parts of the JSON body to inspect using the rule's inspection criteria. WAF inspects only the parts of the JSON that result from the matches that you indicate.
 *
 * Example JSON: `"JsonBody": \{ "MatchPattern": \{ "All": \{\} \}, "MatchScope": "ALL" \}`
 *
 * For additional information about this request component option, see [JSON body](https://docs.aws.amazon.com/waf/latest/developerguide/waf-rule-statement-fields-list.html#waf-rule-statement-request-component-json-body) in the *WAF Developer Guide*.
 *
 * @public
 */
export interface JsonBody {
  /**
   * The patterns to look for in the JSON body. WAF inspects the results of these pattern matches against the rule inspection criteria.
   *
   * @public
   */
  MatchPattern: JsonMatchPattern | undefined;

  /**
   * The parts of the JSON to match against using the `MatchPattern`. If you specify `ALL`, WAF matches against keys and values.
   *
   * `All` does not require a match to be found in the keys and a match to be found in the values. It requires a match to be found in the keys or the values or both. To require a match in the keys and in the values, use a logical `AND` statement to combine two match rules, one that inspects the keys and another that inspects the values.
   *
   * @public
   */
  MatchScope: JsonMatchScope | undefined;

  /**
   * What WAF should do if it fails to completely parse the JSON body. The options are the following:
   *
   * - `EVALUATE_AS_STRING` - Inspect the body as plain text. WAF applies the text transformations and inspection criteria that you defined for the JSON inspection to the body text string.
   * - `MATCH` - Treat the web request as matching the rule statement. WAF applies the rule action to the request.
   * - `NO_MATCH` - Treat the web request as not matching the rule statement.
   *
   * If you don't provide this setting, WAF parses and evaluates the content only up to the first parsing failure that it encounters.
   *
   * > **Note:** WAF parsing doesn't fully validate the input JSON string, so parsing can succeed even for invalid JSON. When parsing succeeds, WAF doesn't apply the fallback behavior. For more information, see [JSON body](https://docs.aws.amazon.com/waf/latest/developerguide/waf-rule-statement-fields-list.html#waf-rule-statement-request-component-json-body) in the *WAF Developer Guide*.
   *
   * @public
   */
  InvalidFallbackBehavior?: BodyParsingFallbackBehavior | undefined;

  /**
   * What WAF should do if the body is larger than WAF can inspect.
   *
   * WAF does not support inspecting the entire contents of the web request body if the body exceeds the limit for the resource type. When a web request body is larger than the limit, the underlying host service only forwards the contents that are within the limit to WAF for inspection.
   *
   * - For Application Load Balancer and AppSync, the limit is fixed at 8 KB (8,192 bytes).
   * - For CloudFront, API Gateway, Amazon Cognito, App Runner, and Verified Access, the default limit is 16 KB (16,384 bytes), and you can increase the limit for each resource type in the web ACL `AssociationConfig`, for additional processing fees.
   * - For Amplify, use the CloudFront limit.
   *
   * The options for oversize handling are the following:
   *
   * - `CONTINUE` - Inspect the available body contents normally, according to the rule inspection criteria.
   * - `MATCH` - Treat the web request as matching the rule statement. WAF applies the rule action to the request.
   * - `NO_MATCH` - Treat the web request as not matching the rule statement.
   *
   * You can combine the `MATCH` or `NO_MATCH` settings for oversize handling with your rule and web ACL action settings, so that you block any request whose body is over the limit.
   *
   * Default: `CONTINUE`
   *
   * @public
   */
  OversizeHandling?: OversizeHandling | undefined;
}

/**
 * Inspect the HTTP method of the web request. The method indicates the type of operation that the request is asking the origin to perform.
 *
 * This is used in the FieldToMatch specification for some web request component types.
 *
 * JSON specification: `"Method": \{\}`
 *
 * @public
 */
export interface Method {}

/**
 * Inspect the query string of the web request. This is the part of a URL that appears after a `?` character, if any.
 *
 * This is used in the FieldToMatch specification for some web request component types.
 *
 * JSON specification: `"QueryString": \{\}`
 *
 * @public
 */
export interface QueryString {}

/**
 * Inspect one of the headers in the web request, identified by name, for example, `User-Agent` or `Referer`. The name isn't case sensitive.
 *
 * You can filter and inspect all headers with the `FieldToMatch` setting `Headers`.
 *
 * This is used to indicate the web request component to inspect, in the FieldToMatch specification.
 *
 * Example JSON: `"SingleHeader": \{ "Name": "haystack" \}`
 *
 * @public
 */
export interface SingleHeader {
  /**
   * The name of the query header to inspect.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * Inspect one query argument in the web request, identified by name, for example *UserName* or *SalesRegion*. The name isn't case sensitive.
 *
 * This is used to indicate the web request component to inspect, in the FieldToMatch specification.
 *
 * Example JSON: `"SingleQueryArgument": \{ "Name": "myArgument" \}`
 *
 * @public
 */
export interface SingleQueryArgument {
  /**
   * The name of the query argument to inspect.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * Inspect fragments of the request URI. You can specify the parts of the URI fragment to inspect and you can narrow the set of URI fragments to inspect by including or excluding specific keys.
 *
 * This is used to indicate the web request component to inspect, in the FieldToMatch specification.
 *
 * Example JSON: `"UriFragment": \{ "MatchPattern": \{ "All": \{\} \}, "MatchScope": "KEY", "OversizeHandling": "MATCH" \}`
 *
 * @public
 */
export interface UriFragment {
  /**
   * What WAF should do if it fails to completely parse the JSON body. The options are the following:
   *
   * - `EVALUATE_AS_STRING` - Inspect the body as plain text. WAF applies the text transformations and inspection criteria that you defined for the JSON inspection to the body text string.
   * - `MATCH` - Treat the web request as matching the rule statement. WAF applies the rule action to the request.
   * - `NO_MATCH` - Treat the web request as not matching the rule statement.
   *
   * If you don't provide this setting, WAF parses and evaluates the content only up to the first parsing failure that it encounters.
   *
   * Example JSON: `\{ "UriFragment": \{ "FallbackBehavior": "MATCH"\} \}`
   *
   * > **Note:** WAF parsing doesn't fully validate the input JSON string, so parsing can succeed even for invalid JSON. When parsing succeeds, WAF doesn't apply the fallback behavior. For more information, see [JSON body](https://docs.aws.amazon.com/waf/latest/developerguide/waf-rule-statement-fields-list.html#waf-rule-statement-request-component-json-body) in the *WAF Developer Guide*.
   *
   * @public
   */
  FallbackBehavior?: FallbackBehavior | undefined;
}

/**
 * Inspect the path component of the URI of the web request. This is the part of the web request that identifies a resource. For example, `/images/daily-ad.jpg`.
 *
 * This is used in the FieldToMatch specification for some web request component types.
 *
 * JSON specification: `"UriPath": \{\}`
 *
 * @public
 */
export interface UriPath {}

/**
 * Specifies a web request component to be used in a rule match statement or in a logging configuration.
 *
 * - In a rule statement, this is the part of the web request that you want WAF to inspect. Include the single `FieldToMatch` type that you want to inspect, with additional specifications as needed, according to the type. You specify a single request component in `FieldToMatch` for each rule statement that requires it. To inspect more than one component of the web request, create a separate rule statement for each component.
 *
 *   Example JSON for a `QueryString` field to match:
 *
 *   `"FieldToMatch": \{ "QueryString": \{\} \}`
 *
 *   Example JSON for a `Method` field to match specification:
 *
 *   `"FieldToMatch": \{ "Method": \{ "Name": "DELETE" \} \}`
 * - In a logging configuration, this is used in the `RedactedFields` property to specify a field to redact from the logging records. For this use case, note the following:
 *
 *   - Even though all `FieldToMatch` settings are available, the only valid settings for field redaction are `UriPath`, `QueryString`, `SingleHeader`, and `Method`.
 *   - In this documentation, the descriptions of the individual fields talk about specifying the web request component to inspect, but for field redaction, you are specifying the component type to redact from the logs.
 *   - If you have request sampling enabled, the redacted fields configuration for logging has no impact on sampling. You can only exclude fields from request sampling by disabling sampling in the web ACL visibility configuration or by configuring data protection for the web ACL.
 *
 * @public
 */
export interface FieldToMatch {
  /**
   * Inspect a single header. Provide the name of the header to inspect, for example, `User-Agent` or `Referer`. This setting isn't case sensitive.
   *
   * Example JSON: `"SingleHeader": \{ "Name": "haystack" \}`
   *
   * Alternately, you can filter and inspect all headers with the `Headers` `FieldToMatch` setting.
   *
   * @public
   */
  SingleHeader?: SingleHeader | undefined;

  /**
   * Inspect a single query argument. Provide the name of the query argument to inspect, such as *UserName* or *SalesRegion*. The name can be up to 30 characters long and isn't case sensitive.
   *
   * Example JSON: `"SingleQueryArgument": \{ "Name": "myArgument" \}`
   *
   * @public
   */
  SingleQueryArgument?: SingleQueryArgument | undefined;

  /**
   * Inspect all query arguments.
   *
   * @public
   */
  AllQueryArguments?: AllQueryArguments | undefined;

  /**
   * Inspect the request URI path. This is the part of the web request that identifies a resource, for example, `/images/daily-ad.jpg`.
   *
   * @public
   */
  UriPath?: UriPath | undefined;

  /**
   * Inspect the query string. This is the part of a URL that appears after a `?` character, if any.
   *
   * @public
   */
  QueryString?: QueryString | undefined;

  /**
   * Inspect the request body as plain text. The request body immediately follows the request headers. This is the part of a request that contains any additional data that you want to send to your web server as the HTTP request body, such as data from a form.
   *
   * WAF does not support inspecting the entire contents of the web request body if the body exceeds the limit for the resource type. When a web request body is larger than the limit, the underlying host service only forwards the contents that are within the limit to WAF for inspection.
   *
   * - For Application Load Balancer and AppSync, the limit is fixed at 8 KB (8,192 bytes).
   * - For CloudFront, API Gateway, Amazon Cognito, App Runner, and Verified Access, the default limit is 16 KB (16,384 bytes), and you can increase the limit for each resource type in the web ACL `AssociationConfig`, for additional processing fees.
   * - For Amplify, use the CloudFront limit.
   *
   * For information about how to handle oversized request bodies, see the `Body` object configuration.
   *
   * @public
   */
  Body?: Body | undefined;

  /**
   * Inspect the HTTP method. The method indicates the type of operation that the request is asking the origin to perform.
   *
   * @public
   */
  Method?: Method | undefined;

  /**
   * Inspect the request body as JSON. The request body immediately follows the request headers. This is the part of a request that contains any additional data that you want to send to your web server as the HTTP request body, such as data from a form.
   *
   * WAF does not support inspecting the entire contents of the web request body if the body exceeds the limit for the resource type. When a web request body is larger than the limit, the underlying host service only forwards the contents that are within the limit to WAF for inspection.
   *
   * - For Application Load Balancer and AppSync, the limit is fixed at 8 KB (8,192 bytes).
   * - For CloudFront, API Gateway, Amazon Cognito, App Runner, and Verified Access, the default limit is 16 KB (16,384 bytes), and you can increase the limit for each resource type in the web ACL `AssociationConfig`, for additional processing fees.
   * - For Amplify, use the CloudFront limit.
   *
   * For information about how to handle oversized request bodies, see the `JsonBody` object configuration.
   *
   * @public
   */
  JsonBody?: JsonBody | undefined;

  /**
   * Inspect the request headers. You must configure scope and pattern matching filters in the `Headers` object, to define the set of headers to and the parts of the headers that WAF inspects.
   *
   * Only the first 8 KB (8192 bytes) of a request's headers and only the first 200 headers are forwarded to WAF for inspection by the underlying host service. You must configure how to handle any oversize header content in the `Headers` object. WAF applies the pattern matching filters to the headers that it receives from the underlying host service.
   *
   * @public
   */
  Headers?: Headers | undefined;

  /**
   * Inspect the request cookies. You must configure scope and pattern matching filters in the `Cookies` object, to define the set of cookies and the parts of the cookies that WAF inspects.
   *
   * Only the first 8 KB (8192 bytes) of a request's cookies and only the first 200 cookies are forwarded to WAF for inspection by the underlying host service. You must configure how to handle any oversize cookie content in the `Cookies` object. WAF applies the pattern matching filters to the cookies that it receives from the underlying host service.
   *
   * @public
   */
  Cookies?: Cookies | undefined;

  /**
   * Inspect a string containing the list of the request's header names, ordered as they appear in the web request that WAF receives for inspection. WAF generates the string and then uses that as the field to match component in its inspection. WAF separates the header names in the string using colons and no added spaces, for example `host:user-agent:accept:authorization:referer`.
   *
   * @public
   */
  HeaderOrder?: HeaderOrder | undefined;

  /**
   * Available for use with Amazon CloudFront distributions and Application Load Balancers. Match against the request's JA3 fingerprint. The JA3 fingerprint is a 32-character hash derived from the TLS Client Hello of an incoming request. This fingerprint serves as a unique identifier for the client's TLS configuration. WAF calculates and logs this fingerprint for each request that has enough TLS Client Hello information for the calculation. Almost all web requests include this information.
   *
   * > **Note:** You can use this choice only with a string match `ByteMatchStatement` with the `PositionalConstraint` set to `EXACTLY`.
   *
   * You can obtain the JA3 fingerprint for client requests from the web ACL logs. If WAF is able to calculate the fingerprint, it includes it in the logs. For information about the logging fields, see [Log fields](https://docs.aws.amazon.com/waf/latest/developerguide/logging-fields.html) in the *WAF Developer Guide*.
   *
   * Provide the JA3 fingerprint string from the logs in your string match statement specification, to match with any future requests that have the same TLS configuration.
   *
   * @public
   */
  JA3Fingerprint?: JA3Fingerprint | undefined;

  /**
   * Available for use with Amazon CloudFront distributions and Application Load Balancers. Match against the request's JA4 fingerprint. The JA4 fingerprint is a 36-character hash derived from the TLS Client Hello of an incoming request. This fingerprint serves as a unique identifier for the client's TLS configuration. WAF calculates and logs this fingerprint for each request that has enough TLS Client Hello information for the calculation. Almost all web requests include this information.
   *
   * > **Note:** You can use this choice only with a string match `ByteMatchStatement` with the `PositionalConstraint` set to `EXACTLY`.
   *
   * You can obtain the JA4 fingerprint for client requests from the web ACL logs. If WAF is able to calculate the fingerprint, it includes it in the logs. For information about the logging fields, see [Log fields](https://docs.aws.amazon.com/waf/latest/developerguide/logging-fields.html) in the *WAF Developer Guide*.
   *
   * Provide the JA4 fingerprint string from the logs in your string match statement specification, to match with any future requests that have the same TLS configuration.
   *
   * @public
   */
  JA4Fingerprint?: JA4Fingerprint | undefined;

  /**
   * Inspect fragments of the request URI. You must configure scope and pattern matching filters in the `UriFragment` object, to define the fragment of a URI that WAF inspects.
   *
   * Only the first 8 KB (8192 bytes) of a request's URI fragments and only the first 200 URI fragments are forwarded to WAF for inspection by the underlying host service. You must configure how to handle any oversize URI fragment content in the `UriFragment` object. WAF applies the pattern matching filters to the cookies that it receives from the underlying host service.
   *
   * @public
   */
  UriFragment?: UriFragment | undefined;
}

/**
 * A pre-parse text transformation that normalizes the raw query string before WAF parses it into individual query arguments. Pre-parse text transformations are only supported when `FieldToMatch` is `SingleQueryArgument` or `AllQueryArguments`.
 *
 * @public
 */
export interface PreParseTextTransformation {
  /**
   * Sets the relative processing order for the pre-parse text transformations that you define. WAF processes all transformations, from lowest priority value to highest, before inspecting the transformed content.
   *
   * @public
   */
  Priority: number | undefined;

  /**
   * The type of pre-parse text transformation to apply to the raw query string.
   *
   * @public
   */
  Type: PreParseTextTransformationType | undefined;
}

/**
 * Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection.
 *
 * @public
 */
export interface TextTransformation {
  /**
   * Sets the relative processing order for multiple transformations. WAF processes all transformations, from lowest priority to highest, before inspecting the transformed content. The priorities don't need to be consecutive, but they must all be different.
   *
   * @public
   */
  Priority: number | undefined;

  /**
   * For detailed descriptions of each of the transformation types, see [Text transformations](https://docs.aws.amazon.com/waf/latest/developerguide/waf-rule-statement-transformation.html) in the *WAF Developer Guide*.
   *
   * @public
   */
  Type: TextTransformationType | undefined;
}

/**
 * A rule statement that defines a string match search for WAF to apply to web requests. The byte match statement provides the bytes to search for, the location in requests that you want WAF to search, and other settings. The bytes to search for are typically a string that corresponds with ASCII characters. In the WAF console and the developer guide, this is called a string match statement.
 *
 * @public
 */
export interface ByteMatchStatement {
  /**
   * A string value that you want WAF to search for. WAF searches only in the part of web requests that you designate for inspection in FieldToMatch. The maximum length of the value is 200 bytes.
   *
   * Valid values depend on the component that you specify for inspection in `FieldToMatch`:
   *
   * - `Method`: The HTTP method that you want WAF to search for. This indicates the type of operation specified in the request.
   * - `UriPath`: The value that you want WAF to search for in the URI path, for example, `/images/daily-ad.jpg`.
   * - `JA3Fingerprint`: Available for use with Amazon CloudFront distributions and Application Load Balancers. Match against the request's JA3 fingerprint. The JA3 fingerprint is a 32-character hash derived from the TLS Client Hello of an incoming request. This fingerprint serves as a unique identifier for the client's TLS configuration. You can use this choice only with a string match `ByteMatchStatement` with the `PositionalConstraint` set to `EXACTLY`.
   *
   *   You can obtain the JA3 fingerprint for client requests from the web ACL logs. If WAF is able to calculate the fingerprint, it includes it in the logs. For information about the logging fields, see [Log fields](https://docs.aws.amazon.com/waf/latest/developerguide/logging-fields.html) in the *WAF Developer Guide*.
   * - `HeaderOrder`: The list of header names to match for. WAF creates a string that contains the ordered list of header names, from the headers in the web request, and then matches against that string.
   *
   * If `SearchString` includes alphabetic characters A-Z and a-z, note that the value is case sensitive.
   *
   * **If you're using the WAF API**
   *
   * Specify a base64-encoded version of the value. The maximum length of the value before you base64-encode it is 200 bytes.
   *
   * For example, suppose the value of `Type` is `HEADER` and the value of `Data` is `User-Agent`. If you want to search the `User-Agent` header for the value `BadBot`, you base64-encode `BadBot` using MIME base64-encoding and include the resulting value, `QmFkQm90`, in the value of `SearchString`.
   *
   * **If you're using the CLI or one of the Amazon Web Services SDKs**
   *
   * The value that you want WAF to search for. The SDK automatically base64 encodes the value.
   *
   * @public
   */
  SearchString: Uint8Array | undefined;

  /**
   * The part of the web request that you want WAF to inspect.
   *
   * @public
   */
  FieldToMatch: FieldToMatch | undefined;

  /**
   * Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection. Text transformations are used in rule match statements, to transform the `FieldToMatch` request component before inspecting it, and they're used in rate-based rule statements, to transform request components before using them as custom aggregation keys. If you specify one or more transformations to apply, WAF performs all transformations on the specified content, starting from the lowest priority setting, and then uses the transformed component contents.
   *
   * @public
   */
  TextTransformations: TextTransformation[] | undefined;

  /**
   * Pre-parse text transformations normalize the raw query string before WAF parses it into individual query arguments. They are applied before the standard text transformations. Pre-parse text transformations are only supported when `FieldToMatch` is `SingleQueryArgument` or `AllQueryArguments`. You can specify up to 10 pre-parse text transformations per rule statement.
   *
   * @public
   */
  PreParseTextTransformations?: PreParseTextTransformation[] | undefined;

  /**
   * The area within the portion of the web request that you want WAF to search for `SearchString`. Valid values include the following:
   *
   * **CONTAINS**
   *
   * The specified part of the web request must include the value of `SearchString`, but the location doesn't matter.
   *
   * **CONTAINS_WORD**
   *
   * The specified part of the web request must include the value of `SearchString`, and `SearchString` must contain only alphanumeric characters or underscore (A-Z, a-z, 0-9, or _). In addition, `SearchString` must be a word, which means that both of the following are true:
   *
   * - `SearchString` is at the beginning of the specified part of the web request or is preceded by a character other than an alphanumeric character or underscore (_). Examples include the value of a header and `;BadBot`.
   * - `SearchString` is at the end of the specified part of the web request or is followed by a character other than an alphanumeric character or underscore (_), for example, `BadBot;` and `-BadBot;`.
   *
   * **EXACTLY**
   *
   * The value of the specified part of the web request must exactly match the value of `SearchString`.
   *
   * **STARTS_WITH**
   *
   * The value of `SearchString` must appear at the beginning of the specified part of the web request.
   *
   * **ENDS_WITH**
   *
   * The value of `SearchString` must appear at the end of the specified part of the web request.
   *
   * @public
   */
  PositionalConstraint: PositionalConstraint | undefined;
}

/**
 * A rule statement that labels web requests by country and region and that matches against web requests based on country code. A geo match rule labels every request that it inspects regardless of whether it finds a match.
 *
 * - To manage requests only by country, you can use this statement by itself and specify the countries that you want to match against in the `CountryCodes` array.
 * - Otherwise, configure your geo match rule with Count action so that it only labels requests. Then, add one or more label match rules to run after the geo match rule and configure them to match against the geographic labels and handle the requests as needed.
 *
 * WAF labels requests using the alpha-2 country and region codes from the International Organization for Standardization (ISO) 3166 standard. WAF determines the codes using either the IP address in the web request origin or, if you specify it, the address in the geo match `ForwardedIPConfig`.
 *
 * If you use the web request origin, the label formats are `awswaf:clientip:geo:region:<ISO country code>-<ISO region code>` and `awswaf:clientip:geo:country:<ISO country code>`.
 *
 * If you use a forwarded IP address, the label formats are `awswaf:forwardedip:geo:region:<ISO country code>-<ISO region code>` and `awswaf:forwardedip:geo:country:<ISO country code>`.
 *
 * For additional details, see [Geographic match rule statement](https://docs.aws.amazon.com/waf/latest/developerguide/waf-rule-statement-type-geo-match.html) in the [WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html).
 *
 * @public
 */
export interface GeoMatchStatement {
  /**
   * An array of two-character country codes that you want to match against, for example, `[ "US", "CN" ]`, from the alpha-2 country ISO codes of the ISO 3166 international standard.
   *
   * When you use a geo match statement just for the region and country labels that it adds to requests, you still have to supply a country code for the rule to evaluate. In this case, you configure the rule to only count matching requests, but it will still generate logging and count metrics for any matches. You can reduce the logging and metrics that the rule produces by specifying a country that's unlikely to be a source of traffic to your site.
   *
   * @public
   */
  CountryCodes?: CountryCode[] | undefined;

  /**
   * The configuration for inspecting IP addresses in an HTTP header that you specify, instead of using the IP address that's reported by the web request origin. Commonly, this is the X-Forwarded-For (XFF) header, but you can specify any header name.
   *
   * > **Note:** If the specified header isn't present in the request, WAF doesn't apply the rule to the web request at all.
   *
   * @public
   */
  ForwardedIPConfig?: ForwardedIPConfig | undefined;
}

/**
 * The configuration for inspecting IP addresses in an HTTP header that you specify, instead of using the IP address that's reported by the web request origin. Commonly, this is the X-Forwarded-For (XFF) header, but you can specify any header name.
 *
 * > **Note:** If the specified header isn't present in the request, WAF doesn't apply the rule to the web request at all.
 *
 * This configuration is used only for IPSetReferenceStatement. For GeoMatchStatement and RateBasedStatement, use ForwardedIPConfig instead.
 *
 * @public
 */
export interface IPSetForwardedIPConfig {
  /**
   * The name of the HTTP header to use for the IP address. For example, to use the X-Forwarded-For (XFF) header, set this to `X-Forwarded-For`.
   *
   * > **Note:** If the specified header isn't present in the request, WAF doesn't apply the rule to the web request at all.
   *
   * @public
   */
  HeaderName: string | undefined;

  /**
   * The match status to assign to the web request if the request doesn't have a valid IP address in the specified position.
   *
   * > **Note:** If the specified header isn't present in the request, WAF doesn't apply the rule to the web request at all.
   *
   * You can specify the following fallback behaviors:
   *
   * - `MATCH` - Treat the web request as matching the rule statement. WAF applies the rule action to the request.
   * - `NO_MATCH` - Treat the web request as not matching the rule statement.
   *
   * @public
   */
  FallbackBehavior: FallbackBehavior | undefined;

  /**
   * The position in the header to search for the IP address. The header can contain IP addresses of the original client and also of proxies. For example, the header value could be `10.1.1.1, 127.0.0.0, 10.10.10.10` where the first IP address identifies the original client and the rest identify proxies that the request went through.
   *
   * The options for this setting are the following:
   *
   * - FIRST - Inspect the first IP address in the list of IP addresses in the header. This is usually the client's original IP.
   * - LAST - Inspect the last IP address in the list of IP addresses in the header.
   * - ANY - Inspect all IP addresses in the header for a match. If the header contains more than 10 IP addresses, WAF inspects the last 10.
   *
   * @public
   */
  Position: ForwardedIPPosition | undefined;
}

/**
 * A rule statement used to detect web requests coming from particular IP addresses or address ranges. To use this, create an IPSet that specifies the addresses you want to detect, then use the ARN of that set in this statement. To create an IP set, see CreateIPSet.
 *
 * Each IP set rule statement references an IP set. You create and maintain the set independent of your rules. This allows you to use the single set in multiple rules. When you update the referenced set, WAF automatically updates all rules that reference it.
 *
 * @public
 */
export interface IPSetReferenceStatement {
  /**
   * The Amazon Resource Name (ARN) of the IPSet that this statement references.
   *
   * @public
   */
  ARN: string | undefined;

  /**
   * The configuration for inspecting IP addresses in an HTTP header that you specify, instead of using the IP address that's reported by the web request origin. Commonly, this is the X-Forwarded-For (XFF) header, but you can specify any header name.
   *
   * > **Note:** If the specified header isn't present in the request, WAF doesn't apply the rule to the web request at all.
   *
   * @public
   */
  IPSetForwardedIPConfig?: IPSetForwardedIPConfig | undefined;
}

/**
 * A rule statement to match against labels that have been added to the web request by rules that have already run in the web ACL.
 *
 * The label match statement provides the label or namespace string to search for. The label string can represent a part or all of the fully qualified label name that had been added to the web request. Fully qualified labels have a prefix, optional namespaces, and label name. The prefix identifies the rule group or web ACL context of the rule that added the label. If you do not provide the fully qualified name in your label match string, WAF performs the search for labels that were added in the same context as the label match statement.
 *
 * @public
 */
export interface LabelMatchStatement {
  /**
   * Specify whether you want to match using the label name or just the namespace.
   *
   * @public
   */
  Scope: LabelMatchScope | undefined;

  /**
   * The string to match against. The setting you provide for this depends on the match statement's `Scope` setting:
   *
   * - If the `Scope` indicates `LABEL`, then this specification must include the name and can include any number of preceding namespace specifications and prefix up to providing the fully qualified label name.
   * - If the `Scope` indicates `NAMESPACE`, then this specification can include any number of contiguous namespace strings, and can include the entire label namespace prefix from the rule group or web ACL where the label originates.
   *
   * Labels are case sensitive and components of a label must be separated by colon, for example `NS1:NS2:name`.
   *
   * @public
   */
  Key: string | undefined;
}

/**
 * Specifies a single rule in a rule group whose action you want to override to `Count`.
 *
 * > **Note:** Instead of this option, use `RuleActionOverrides`. It accepts any valid action setting, including `Count`.
 *
 * @public
 */
export interface ExcludedRule {
  /**
   * The name of the rule whose action you want to override to `Count`.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * The name of the field in the request payload that contains your customer's email.
 *
 * This data type is used in the `RequestInspectionACFP` data type.
 *
 * @public
 */
export interface EmailField {
  /**
   * The name of the email field.
   *
   * How you specify this depends on the request inspection payload type.
   *
   * - For JSON payloads, specify the field name in JSON pointer syntax. For information about the JSON Pointer syntax, see the Internet Engineering Task Force (IETF) documentation [JavaScript Object Notation (JSON) Pointer](https://tools.ietf.org/html/rfc6901).
   *
   *   For example, for the JSON payload `\{ "form": \{ "email": "THE_EMAIL" \} \}`, the email field specification is `/form/email`.
   * - For form encoded payload types, use the HTML form names.
   *
   *   For example, for an HTML form with the input element named `email1`, the email field specification is `email1`.
   *
   * @public
   */
  Identifier: string | undefined;
}

/**
 * The name of the field in the request payload that contains your customer's password.
 *
 * This data type is used in the `RequestInspection` and `RequestInspectionACFP` data types.
 *
 * @public
 */
export interface PasswordField {
  /**
   * The name of the password field.
   *
   * How you specify this depends on the request inspection payload type.
   *
   * - For JSON payloads, specify the field name in JSON pointer syntax. For information about the JSON Pointer syntax, see the Internet Engineering Task Force (IETF) documentation [JavaScript Object Notation (JSON) Pointer](https://tools.ietf.org/html/rfc6901).
   *
   *   For example, for the JSON payload `\{ "form": \{ "password": "THE_PASSWORD" \} \}`, the password field specification is `/form/password`.
   * - For form encoded payload types, use the HTML form names.
   *
   *   For example, for an HTML form with the input element named `password1`, the password field specification is `password1`.
   *
   * @public
   */
  Identifier: string | undefined;
}

/**
 * The name of a field in the request payload that contains part or all of your customer's primary phone number.
 *
 * This data type is used in the `RequestInspectionACFP` data type.
 *
 * @public
 */
export interface PhoneNumberField {
  /**
   * The name of a single primary phone number field.
   *
   * How you specify the phone number fields depends on the request inspection payload type.
   *
   * - For JSON payloads, specify the field identifiers in JSON pointer syntax. For information about the JSON Pointer syntax, see the Internet Engineering Task Force (IETF) documentation [JavaScript Object Notation (JSON) Pointer](https://tools.ietf.org/html/rfc6901).
   *
   *   For example, for the JSON payload `\{ "form": \{ "primaryphoneline1": "THE_PHONE1", "primaryphoneline2": "THE_PHONE2", "primaryphoneline3": "THE_PHONE3" \} \}`, the phone number field identifiers are `/form/primaryphoneline1`, `/form/primaryphoneline2`, and `/form/primaryphoneline3`.
   * - For form encoded payload types, use the HTML form names.
   *
   *   For example, for an HTML form with input elements named `primaryphoneline1`, `primaryphoneline2`, and `primaryphoneline3`, the phone number field identifiers are `primaryphoneline1`, `primaryphoneline2`, and `primaryphoneline3`.
   *
   * @public
   */
  Identifier: string | undefined;
}

/**
 * The name of the field in the request payload that contains your customer's username.
 *
 * This data type is used in the `RequestInspection` and `RequestInspectionACFP` data types.
 *
 * @public
 */
export interface UsernameField {
  /**
   * The name of the username field.
   *
   * How you specify this depends on the request inspection payload type.
   *
   * - For JSON payloads, specify the field name in JSON pointer syntax. For information about the JSON Pointer syntax, see the Internet Engineering Task Force (IETF) documentation [JavaScript Object Notation (JSON) Pointer](https://tools.ietf.org/html/rfc6901).
   *
   *   For example, for the JSON payload `\{ "form": \{ "username": "THE_USERNAME" \} \}`, the username field specification is `/form/username`.
   * - For form encoded payload types, use the HTML form names.
   *
   *   For example, for an HTML form with the input element named `username1`, the username field specification is `username1`
   *
   * @public
   */
  Identifier: string | undefined;
}

/**
 * The criteria for inspecting account creation requests, used by the ACFP rule group to validate and track account creation attempts.
 *
 * This is part of the `AWSManagedRulesACFPRuleSet` configuration in `ManagedRuleGroupConfig`.
 *
 * In these settings, you specify how your application accepts account creation attempts by providing the request payload type and the names of the fields within the request body where the username, password, email, and primary address and phone number fields are provided.
 *
 * @public
 */
export interface RequestInspectionACFP {
  /**
   * The payload type for your account creation endpoint, either JSON or form encoded.
   *
   * @public
   */
  PayloadType: PayloadType | undefined;

  /**
   * The name of the field in the request payload that contains your customer's username.
   *
   * How you specify this depends on the request inspection payload type.
   *
   * - For JSON payloads, specify the field name in JSON pointer syntax. For information about the JSON Pointer syntax, see the Internet Engineering Task Force (IETF) documentation [JavaScript Object Notation (JSON) Pointer](https://tools.ietf.org/html/rfc6901).
   *
   *   For example, for the JSON payload `\{ "form": \{ "username": "THE_USERNAME" \} \}`, the username field specification is `/form/username`.
   * - For form encoded payload types, use the HTML form names.
   *
   *   For example, for an HTML form with the input element named `username1`, the username field specification is `username1`
   *
   * @public
   */
  UsernameField?: UsernameField | undefined;

  /**
   * The name of the field in the request payload that contains your customer's password.
   *
   * How you specify this depends on the request inspection payload type.
   *
   * - For JSON payloads, specify the field name in JSON pointer syntax. For information about the JSON Pointer syntax, see the Internet Engineering Task Force (IETF) documentation [JavaScript Object Notation (JSON) Pointer](https://tools.ietf.org/html/rfc6901).
   *
   *   For example, for the JSON payload `\{ "form": \{ "password": "THE_PASSWORD" \} \}`, the password field specification is `/form/password`.
   * - For form encoded payload types, use the HTML form names.
   *
   *   For example, for an HTML form with the input element named `password1`, the password field specification is `password1`.
   *
   * @public
   */
  PasswordField?: PasswordField | undefined;

  /**
   * The name of the field in the request payload that contains your customer's email.
   *
   * How you specify this depends on the request inspection payload type.
   *
   * - For JSON payloads, specify the field name in JSON pointer syntax. For information about the JSON Pointer syntax, see the Internet Engineering Task Force (IETF) documentation [JavaScript Object Notation (JSON) Pointer](https://tools.ietf.org/html/rfc6901).
   *
   *   For example, for the JSON payload `\{ "form": \{ "email": "THE_EMAIL" \} \}`, the email field specification is `/form/email`.
   * - For form encoded payload types, use the HTML form names.
   *
   *   For example, for an HTML form with the input element named `email1`, the email field specification is `email1`.
   *
   * @public
   */
  EmailField?: EmailField | undefined;

  /**
   * The names of the fields in the request payload that contain your customer's primary phone number.
   *
   * Order the phone number fields in the array exactly as they are ordered in the request payload.
   *
   * How you specify the phone number fields depends on the request inspection payload type.
   *
   * - For JSON payloads, specify the field identifiers in JSON pointer syntax. For information about the JSON Pointer syntax, see the Internet Engineering Task Force (IETF) documentation [JavaScript Object Notation (JSON) Pointer](https://tools.ietf.org/html/rfc6901).
   *
   *   For example, for the JSON payload `\{ "form": \{ "primaryphoneline1": "THE_PHONE1", "primaryphoneline2": "THE_PHONE2", "primaryphoneline3": "THE_PHONE3" \} \}`, the phone number field identifiers are `/form/primaryphoneline1`, `/form/primaryphoneline2`, and `/form/primaryphoneline3`.
   * - For form encoded payload types, use the HTML form names.
   *
   *   For example, for an HTML form with input elements named `primaryphoneline1`, `primaryphoneline2`, and `primaryphoneline3`, the phone number field identifiers are `primaryphoneline1`, `primaryphoneline2`, and `primaryphoneline3`.
   *
   * @public
   */
  PhoneNumberFields?: PhoneNumberField[] | undefined;

  /**
   * The names of the fields in the request payload that contain your customer's primary physical address.
   *
   * Order the address fields in the array exactly as they are ordered in the request payload.
   *
   * How you specify the address fields depends on the request inspection payload type.
   *
   * - For JSON payloads, specify the field identifiers in JSON pointer syntax. For information about the JSON Pointer syntax, see the Internet Engineering Task Force (IETF) documentation [JavaScript Object Notation (JSON) Pointer](https://tools.ietf.org/html/rfc6901).
   *
   *   For example, for the JSON payload `\{ "form": \{ "primaryaddressline1": "THE_ADDRESS1", "primaryaddressline2": "THE_ADDRESS2", "primaryaddressline3": "THE_ADDRESS3" \} \}`, the address field idenfiers are `/form/primaryaddressline1`, `/form/primaryaddressline2`, and `/form/primaryaddressline3`.
   * - For form encoded payload types, use the HTML form names.
   *
   *   For example, for an HTML form with input elements named `primaryaddressline1`, `primaryaddressline2`, and `primaryaddressline3`, the address fields identifiers are `primaryaddressline1`, `primaryaddressline2`, and `primaryaddressline3`.
   *
   * @public
   */
  AddressFields?: AddressField[] | undefined;
}

/**
 * Configures inspection of the response body. WAF can inspect the first 65,536 bytes (64 KB) of the response body. This is part of the `ResponseInspection` configuration for `AWSManagedRulesATPRuleSet` and `AWSManagedRulesACFPRuleSet`.
 *
 * > **Note:** Response inspection is available only in web ACLs that protect Amazon CloudFront distributions.
 *
 * @public
 */
export interface ResponseInspectionBodyContains {
  /**
   * Strings in the body of the response that indicate a successful login or account creation attempt. To be counted as a success, the string can be anywhere in the body and must be an exact match, including case. Each string must be unique among the success and failure strings.
   *
   * JSON examples: `"SuccessStrings": [ "Login successful" ]` and `"SuccessStrings": [ "Account creation successful", "Welcome to our site!" ]`
   *
   * @public
   */
  SuccessStrings: string[] | undefined;

  /**
   * Strings in the body of the response that indicate a failed login or account creation attempt. To be counted as a failure, the string can be anywhere in the body and must be an exact match, including case. Each string must be unique among the success and failure strings.
   *
   * JSON example: `"FailureStrings": [ "Request failed" ]`
   *
   * @public
   */
  FailureStrings: string[] | undefined;
}

/**
 * Configures inspection of the response header. This is part of the `ResponseInspection` configuration for `AWSManagedRulesATPRuleSet` and `AWSManagedRulesACFPRuleSet`.
 *
 * > **Note:** Response inspection is available only in web ACLs that protect Amazon CloudFront distributions.
 *
 * @public
 */
export interface ResponseInspectionHeader {
  /**
   * The name of the header to match against. The name must be an exact match, including case.
   *
   * JSON example: `"Name": [ "RequestResult" ]`
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Values in the response header with the specified name that indicate a successful login or account creation attempt. To be counted as a success, the value must be an exact match, including case. Each value must be unique among the success and failure values.
   *
   * JSON examples: `"SuccessValues": [ "LoginPassed", "Successful login" ]` and `"SuccessValues": [ "AccountCreated", "Successful account creation" ]`
   *
   * @public
   */
  SuccessValues: string[] | undefined;

  /**
   * Values in the response header with the specified name that indicate a failed login or account creation attempt. To be counted as a failure, the value must be an exact match, including case. Each value must be unique among the success and failure values.
   *
   * JSON examples: `"FailureValues": [ "LoginFailed", "Failed login" ]` and `"FailureValues": [ "AccountCreationFailed" ]`
   *
   * @public
   */
  FailureValues: string[] | undefined;
}

/**
 * Configures inspection of the response JSON. WAF can inspect the first 65,536 bytes (64 KB) of the response JSON. This is part of the `ResponseInspection` configuration for `AWSManagedRulesATPRuleSet` and `AWSManagedRulesACFPRuleSet`.
 *
 * > **Note:** Response inspection is available only in web ACLs that protect Amazon CloudFront distributions.
 *
 * @public
 */
export interface ResponseInspectionJson {
  /**
   * The identifier for the value to match against in the JSON. The identifier must be an exact match, including case.
   *
   * JSON examples: `"Identifier": [ "/login/success" ]` and `"Identifier": [ "/sign-up/success" ]`
   *
   * @public
   */
  Identifier: string | undefined;

  /**
   * Values for the specified identifier in the response JSON that indicate a successful login or account creation attempt. To be counted as a success, the value must be an exact match, including case. Each value must be unique among the success and failure values.
   *
   * JSON example: `"SuccessValues": [ "True", "Succeeded" ]`
   *
   * @public
   */
  SuccessValues: string[] | undefined;

  /**
   * Values for the specified identifier in the response JSON that indicate a failed login or account creation attempt. To be counted as a failure, the value must be an exact match, including case. Each value must be unique among the success and failure values.
   *
   * JSON example: `"FailureValues": [ "False", "Failed" ]`
   *
   * @public
   */
  FailureValues: string[] | undefined;
}

/**
 * Configures inspection of the response status code. This is part of the `ResponseInspection` configuration for `AWSManagedRulesATPRuleSet` and `AWSManagedRulesACFPRuleSet`.
 *
 * > **Note:** Response inspection is available only in web ACLs that protect Amazon CloudFront distributions.
 *
 * @public
 */
export interface ResponseInspectionStatusCode {
  /**
   * Status codes in the response that indicate a successful login or account creation attempt. To be counted as a success, the response status code must match one of these. Each code must be unique among the success and failure status codes.
   *
   * JSON example: `"SuccessCodes": [ 200, 201 ]`
   *
   * @public
   */
  SuccessCodes: number[] | undefined;

  /**
   * Status codes in the response that indicate a failed login or account creation attempt. To be counted as a failure, the response status code must match one of these. Each code must be unique among the success and failure status codes.
   *
   * JSON example: `"FailureCodes": [ 400, 404 ]`
   *
   * @public
   */
  FailureCodes: number[] | undefined;
}

/**
 * The criteria for inspecting responses to login requests and account creation requests, used by the ATP and ACFP rule groups to track login and account creation success and failure rates.
 *
 * > **Note:** Response inspection is available only in web ACLs that protect Amazon CloudFront distributions.
 *
 * The rule groups evaluates the responses that your protected resources send back to client login and account creation attempts, keeping count of successful and failed attempts from each IP address and client session. Using this information, the rule group labels and mitigates requests from client sessions and IP addresses with too much suspicious activity in a short amount of time.
 *
 * This is part of the `AWSManagedRulesATPRuleSet` and `AWSManagedRulesACFPRuleSet` configurations in `ManagedRuleGroupConfig`.
 *
 * Enable response inspection by configuring exactly one component of the response to inspect, for example, `Header` or `StatusCode`. You can't configure more than one component for inspection. If you don't configure any of the response inspection options, response inspection is disabled.
 *
 * @public
 */
export interface ResponseInspection {
  /**
   * Configures inspection of the response status code for success and failure indicators.
   *
   * @public
   */
  StatusCode?: ResponseInspectionStatusCode | undefined;

  /**
   * Configures inspection of the response header for success and failure indicators.
   *
   * @public
   */
  Header?: ResponseInspectionHeader | undefined;

  /**
   * Configures inspection of the response body for success and failure indicators. WAF can inspect the first 65,536 bytes (64 KB) of the response body.
   *
   * @public
   */
  BodyContains?: ResponseInspectionBodyContains | undefined;

  /**
   * Configures inspection of the response JSON for success and failure indicators. WAF can inspect the first 65,536 bytes (64 KB) of the response JSON.
   *
   * @public
   */
  Json?: ResponseInspectionJson | undefined;
}

/**
 * Details for your use of the account creation fraud prevention managed rule group, `AWSManagedRulesACFPRuleSet`. This configuration is used in `ManagedRuleGroupConfig`.
 *
 * For additional information about this and the other intelligent threat mitigation rule groups, see [Intelligent threat mitigation in WAF](https://docs.aws.amazon.com/waf/latest/developerguide/waf-managed-protections) and [Amazon Web Services Managed Rules rule groups list](https://docs.aws.amazon.com/waf/latest/developerguide/aws-managed-rule-groups-list) in the *WAF Developer Guide*.
 *
 * @public
 */
export interface AWSManagedRulesACFPRuleSet {
  /**
   * The path of the account creation endpoint for your application. This is the page on your website that accepts the completed registration form for a new user. This page must accept `POST` requests.
   *
   * For example, for the URL `https://example.com/web/newaccount`, you would provide the path `/web/newaccount`. Account creation page paths that start with the path that you provide are considered a match. For example `/web/newaccount` matches the account creation paths `/web/newaccount`, `/web/newaccount/`, `/web/newaccountPage`, and `/web/newaccount/thisPage`, but doesn't match the path `/home/web/newaccount` or `/website/newaccount`.
   *
   * @public
   */
  CreationPath: string | undefined;

  /**
   * The path of the account registration endpoint for your application. This is the page on your website that presents the registration form to new users.
   *
   * > **Note:** This page must accept `GET` text/html requests.
   *
   * For example, for the URL `https://example.com/web/registration`, you would provide the path `/web/registration`. Registration page paths that start with the path that you provide are considered a match. For example `/web/registration` matches the registration paths `/web/registration`, `/web/registration/`, `/web/registrationPage`, and `/web/registration/thisPage`, but doesn't match the path `/home/web/registration` or `/website/registration`.
   *
   * @public
   */
  RegistrationPagePath: string | undefined;

  /**
   * The criteria for inspecting account creation requests, used by the ACFP rule group to validate and track account creation attempts.
   *
   * @public
   */
  RequestInspection: RequestInspectionACFP | undefined;

  /**
   * The criteria for inspecting responses to account creation requests, used by the ACFP rule group to track account creation success rates.
   *
   * > **Note:** Response inspection is available only in web ACLs that protect Amazon CloudFront distributions.
   *
   * The ACFP rule group evaluates the responses that your protected resources send back to client account creation attempts, keeping count of successful and failed attempts from each IP address and client session. Using this information, the rule group labels and mitigates requests from client sessions and IP addresses that have had too many successful account creation attempts in a short amount of time.
   *
   * @public
   */
  ResponseInspection?: ResponseInspection | undefined;

  /**
   * Allow the use of regular expressions in the registration page path and the account creation path.
   *
   * @public
   */
  EnableRegexInPath?: boolean | undefined;
}

/**
 * A single regular expression. This is used in a RegexPatternSet and also in the configuration for the Amazon Web Services Managed Rules rule group `AWSManagedRulesAntiDDoSRuleSet`.
 *
 * @public
 */
export interface Regex {
  /**
   * The string representing the regular expression. WAF enforces a quota on the maximum number of characters in a regex pattern. For the current limit, see [WAF quotas](https://docs.aws.amazon.com/waf/latest/developerguide/limits.html) in the *WAF Developer Guide*.
   *
   * @public
   */
  RegexString?: string | undefined;
}

/**
 * This is part of the `AWSManagedRulesAntiDDoSRuleSet` `ClientSideActionConfig` configuration in `ManagedRuleGroupConfig`.
 *
 * @public
 */
export interface ClientSideAction {
  /**
   * Determines whether to use the `AWSManagedRulesAntiDDoSRuleSet` rules `ChallengeAllDuringEvent` and `ChallengeDDoSRequests` in the rule group evaluation and the related label `awswaf:managed:aws:anti-ddos:challengeable-request`.
   *
   * - If usage is enabled:
   *
   *   - The managed rule group adds the label `awswaf:managed:aws:anti-ddos:challengeable-request` to any web request whose URL does *NOT* match the regular expressions provided in the `ClientSideAction` setting `ExemptUriRegularExpressions`.
   *   - The two rules are evaluated against web requests for protected resources that are experiencing a DDoS attack. The two rules only apply their action to matching requests that have the label `awswaf:managed:aws:anti-ddos:challengeable-request`.
   * - If usage is disabled:
   *
   *   - The managed rule group doesn't add the label `awswaf:managed:aws:anti-ddos:challengeable-request` to any web requests.
   *   - The two rules are not evaluated.
   *   - None of the other `ClientSideAction` settings have any effect.
   *
   * > **Note:**
   * >
   * > This setting only enables or disables the use of the two anti-DDOS rules `ChallengeAllDuringEvent` and `ChallengeDDoSRequests` in the anti-DDoS managed rule group.
   * >
   * > This setting doesn't alter the action setting in the two rules. To override the actions used by the rules `ChallengeAllDuringEvent` and `ChallengeDDoSRequests`, enable this setting, and then override the rule actions in the usual way, in your managed rule group configuration.
   *
   * @public
   */
  UsageOfAction: UsageOfAction | undefined;

  /**
   * The sensitivity that the rule group rule `ChallengeDDoSRequests` uses when matching against the DDoS suspicion labeling on a request. The managed rule group adds the labeling during DDoS events, before the `ChallengeDDoSRequests` rule runs.
   *
   * The higher the sensitivity, the more levels of labeling that the rule matches:
   *
   * - Low sensitivity is less sensitive, causing the rule to match only on the most likely participants in an attack, which are the requests with the high suspicion label `awswaf:managed:aws:anti-ddos:high-suspicion-ddos-request`.
   * - Medium sensitivity causes the rule to match on the medium and high suspicion labels.
   * - High sensitivity causes the rule to match on all of the suspicion labels: low, medium, and high.
   *
   * Default: `HIGH`
   *
   * @public
   */
  Sensitivity?: SensitivityToAct | undefined;

  /**
   * The regular expression to match against the web request URI, used to identify requests that can't handle a silent browser challenge. When the `ClientSideAction` setting `UsageOfAction` is enabled, the managed rule group uses this setting to determine which requests to label with `awswaf:managed:aws:anti-ddos:challengeable-request`. If `UsageOfAction` is disabled, this setting has no effect and the managed rule group doesn't add the label to any requests.
   *
   * The anti-DDoS managed rule group doesn't evaluate the rules `ChallengeDDoSRequests` or `ChallengeAllDuringEvent` for web requests whose URIs match this regex. This is true regardless of whether you override the rule action for either of the rules in your web ACL configuration.
   *
   * Amazon Web Services recommends using a regular expression.
   *
   * This setting is required if `UsageOfAction` is set to `ENABLED`. If required, you can provide between 1 and 5 regex objects in the array of settings.
   *
   * Amazon Web Services recommends starting with the following setting. Review and update it for your application's needs:
   *
   * `\/api\/|\.(acc|avi|css|gif|jpe?g|js|mp[34]|ogg|otf|pdf|png|tiff?|ttf|webm|webp|woff2?)$`
   *
   * @public
   */
  ExemptUriRegularExpressions?: Regex[] | undefined;
}

/**
 * This is part of the configuration for the managed rules `AWSManagedRulesAntiDDoSRuleSet` in `ManagedRuleGroupConfig`.
 *
 * @public
 */
export interface ClientSideActionConfig {
  /**
   * Configuration for the use of the `AWSManagedRulesAntiDDoSRuleSet` rules `ChallengeAllDuringEvent` and `ChallengeDDoSRequests`.
   *
   * > **Note:** This setting isn't related to the configuration of the `Challenge` action itself. It only configures the use of the two anti-DDoS rules named here.
   *
   * You can enable or disable the use of these rules, and you can configure how to use them when they are enabled.
   *
   * @public
   */
  Challenge: ClientSideAction | undefined;
}

/**
 * Configures the use of the anti-DDoS managed rule group, `AWSManagedRulesAntiDDoSRuleSet`. This configuration is used in `ManagedRuleGroupConfig`.
 *
 * The configuration that you provide here determines whether and how the rules in the rule group are used.
 *
 * For additional information about this and the other intelligent threat mitigation rule groups, see [Intelligent threat mitigation in WAF](https://docs.aws.amazon.com/waf/latest/developerguide/waf-managed-protections) and [Amazon Web Services Managed Rules rule groups list](https://docs.aws.amazon.com/waf/latest/developerguide/aws-managed-rule-groups-list) in the *WAF Developer Guide*.
 *
 * @public
 */
export interface AWSManagedRulesAntiDDoSRuleSet {
  /**
   * Configures the request handling that's applied by the managed rule group rules `ChallengeAllDuringEvent` and `ChallengeDDoSRequests` during a distributed denial of service (DDoS) attack.
   *
   * @public
   */
  ClientSideActionConfig: ClientSideActionConfig | undefined;

  /**
   * The sensitivity that the rule group rule `DDoSRequests` uses when matching against the DDoS suspicion labeling on a request. The managed rule group adds the labeling during DDoS events, before the `DDoSRequests` rule runs.
   *
   * The higher the sensitivity, the more levels of labeling that the rule matches:
   *
   * - Low sensitivity is less sensitive, causing the rule to match only on the most likely participants in an attack, which are the requests with the high suspicion label `awswaf:managed:aws:anti-ddos:high-suspicion-ddos-request`.
   * - Medium sensitivity causes the rule to match on the medium and high suspicion labels.
   * - High sensitivity causes the rule to match on all of the suspicion labels: low, medium, and high.
   *
   * Default: `LOW`
   *
   * @public
   */
  SensitivityToBlock?: SensitivityToAct | undefined;
}

/**
 * The criteria for inspecting login requests, used by the ATP rule group to validate credentials usage.
 *
 * This is part of the `AWSManagedRulesATPRuleSet` configuration in `ManagedRuleGroupConfig`.
 *
 * In these settings, you specify how your application accepts login attempts by providing the request payload type and the names of the fields within the request body where the username and password are provided.
 *
 * @public
 */
export interface RequestInspection {
  /**
   * The payload type for your login endpoint, either JSON or form encoded.
   *
   * @public
   */
  PayloadType: PayloadType | undefined;

  /**
   * The name of the field in the request payload that contains your customer's username.
   *
   * How you specify this depends on the request inspection payload type.
   *
   * - For JSON payloads, specify the field name in JSON pointer syntax. For information about the JSON Pointer syntax, see the Internet Engineering Task Force (IETF) documentation [JavaScript Object Notation (JSON) Pointer](https://tools.ietf.org/html/rfc6901).
   *
   *   For example, for the JSON payload `\{ "form": \{ "username": "THE_USERNAME" \} \}`, the username field specification is `/form/username`.
   * - For form encoded payload types, use the HTML form names.
   *
   *   For example, for an HTML form with the input element named `username1`, the username field specification is `username1`
   *
   * @public
   */
  UsernameField: UsernameField | undefined;

  /**
   * The name of the field in the request payload that contains your customer's password.
   *
   * How you specify this depends on the request inspection payload type.
   *
   * - For JSON payloads, specify the field name in JSON pointer syntax. For information about the JSON Pointer syntax, see the Internet Engineering Task Force (IETF) documentation [JavaScript Object Notation (JSON) Pointer](https://tools.ietf.org/html/rfc6901).
   *
   *   For example, for the JSON payload `\{ "form": \{ "password": "THE_PASSWORD" \} \}`, the password field specification is `/form/password`.
   * - For form encoded payload types, use the HTML form names.
   *
   *   For example, for an HTML form with the input element named `password1`, the password field specification is `password1`.
   *
   * @public
   */
  PasswordField: PasswordField | undefined;
}

/**
 * Details for your use of the account takeover prevention managed rule group, `AWSManagedRulesATPRuleSet`. This configuration is used in `ManagedRuleGroupConfig`.
 *
 * For additional information about this and the other intelligent threat mitigation rule groups, see [Intelligent threat mitigation in WAF](https://docs.aws.amazon.com/waf/latest/developerguide/waf-managed-protections) and [Amazon Web Services Managed Rules rule groups list](https://docs.aws.amazon.com/waf/latest/developerguide/aws-managed-rule-groups-list) in the *WAF Developer Guide*.
 *
 * @public
 */
export interface AWSManagedRulesATPRuleSet {
  /**
   * The path of the login endpoint for your application. For example, for the URL `https://example.com/web/login`, you would provide the path `/web/login`. Login paths that start with the path that you provide are considered a match. For example `/web/login` matches the login paths `/web/login`, `/web/login/`, `/web/loginPage`, and `/web/login/thisPage`, but doesn't match the login path `/home/web/login` or `/website/login`.
   *
   * The rule group inspects only HTTP `POST` requests to your specified login endpoint.
   *
   * @public
   */
  LoginPath: string | undefined;

  /**
   * The criteria for inspecting login requests, used by the ATP rule group to validate credentials usage.
   *
   * @public
   */
  RequestInspection?: RequestInspection | undefined;

  /**
   * The criteria for inspecting responses to login requests, used by the ATP rule group to track login failure rates.
   *
   * > **Note:** Response inspection is available only in web ACLs that protect Amazon CloudFront distributions.
   *
   * The ATP rule group evaluates the responses that your protected resources send back to client login attempts, keeping count of successful and failed attempts for each IP address and client session. Using this information, the rule group labels and mitigates requests from client sessions and IP addresses that have had too many failed login attempts in a short amount of time.
   *
   * @public
   */
  ResponseInspection?: ResponseInspection | undefined;

  /**
   * Allow the use of regular expressions in the login page path.
   *
   * @public
   */
  EnableRegexInPath?: boolean | undefined;
}

/**
 * Details for your use of the Bot Control managed rule group, `AWSManagedRulesBotControlRuleSet`. This configuration is used in `ManagedRuleGroupConfig`.
 *
 * For additional information about this and the other intelligent threat mitigation rule groups, see [Intelligent threat mitigation in WAF](https://docs.aws.amazon.com/waf/latest/developerguide/waf-managed-protections) and [Amazon Web Services Managed Rules rule groups list](https://docs.aws.amazon.com/waf/latest/developerguide/aws-managed-rule-groups-list) in the *WAF Developer Guide*.
 *
 * @public
 */
export interface AWSManagedRulesBotControlRuleSet {
  /**
   * The inspection level to use for the Bot Control rule group. The common level is the least expensive. The targeted level includes all common level rules and adds rules with more advanced inspection criteria. For details, see [WAF Bot Control rule group](https://docs.aws.amazon.com/waf/latest/developerguide/aws-managed-rule-groups-bot.html) in the *WAF Developer Guide*.
   *
   * @public
   */
  InspectionLevel: InspectionLevel | undefined;

  /**
   * Applies only to the targeted inspection level.
   *
   * Determines whether to use machine learning (ML) to analyze your web traffic for bot-related activity. Machine learning is required for the Bot Control rules `TGT_ML_CoordinatedActivityLow` and `TGT_ML_CoordinatedActivityMedium`, which inspect for anomalous behavior that might indicate distributed, coordinated bot activity.
   *
   * For more information about this choice, see the listing for these rules in the table at [Bot Control rules listing](https://docs.aws.amazon.com/waf/latest/developerguide/aws-managed-rule-groups-bot.html#aws-managed-rule-groups-bot-rules) in the *WAF Developer Guide*.
   *
   * Default: `TRUE`
   *
   * @public
   */
  EnableMachineLearning?: boolean | undefined;
}

/**
 * Additional information that's used by a managed rule group. Many managed rule groups don't require this.
 *
 * The rule groups used for intelligent threat mitigation require additional configuration:
 *
 * - Use the `AWSManagedRulesACFPRuleSet` configuration object to configure the account creation fraud prevention managed rule group. The configuration includes the registration and sign-up pages of your application and the locations in the account creation request payload of data, such as the user email and phone number fields.
 * - Use the `AWSManagedRulesAntiDDoSRuleSet` configuration object to configure the anti-DDoS managed rule group. The configuration includes the sensitivity levels to use in the rules that typically block and challenge requests that might be participating in DDoS attacks and the specification to use to indicate whether a request can handle a silent browser challenge.
 * - Use the `AWSManagedRulesATPRuleSet` configuration object to configure the account takeover prevention managed rule group. The configuration includes the sign-in page of your application and the locations in the login request payload of data such as the username and password.
 * - Use the `AWSManagedRulesBotControlRuleSet` configuration object to configure the protection level that you want the Bot Control rule group to use.
 *
 * For example specifications, see the examples section of CreateWebACL.
 *
 * @public
 */
export interface ManagedRuleGroupConfig {
  /**
   * > **Note:** Instead of this setting, provide your configuration under `AWSManagedRulesATPRuleSet`.
   *
   * @deprecated Deprecated. Use AWSManagedRulesATPRuleSet LoginPath.
   * @public
   */
  LoginPath?: string | undefined;

  /**
   * > **Note:** Instead of this setting, provide your configuration under the request inspection configuration for `AWSManagedRulesATPRuleSet` or `AWSManagedRulesACFPRuleSet`.
   *
   * @deprecated Deprecated. Use AWSManagedRulesATPRuleSet RequestInspection PayloadType.
   * @public
   */
  PayloadType?: PayloadType | undefined;

  /**
   * > **Note:** Instead of this setting, provide your configuration under the request inspection configuration for `AWSManagedRulesATPRuleSet` or `AWSManagedRulesACFPRuleSet`.
   *
   * @deprecated Deprecated. Use AWSManagedRulesATPRuleSet RequestInspection UsernameField.
   * @public
   */
  UsernameField?: UsernameField | undefined;

  /**
   * > **Note:** Instead of this setting, provide your configuration under the request inspection configuration for `AWSManagedRulesATPRuleSet` or `AWSManagedRulesACFPRuleSet`.
   *
   * @deprecated Deprecated. Use AWSManagedRulesATPRuleSet RequestInspection PasswordField.
   * @public
   */
  PasswordField?: PasswordField | undefined;

  /**
   * Additional configuration for using the Bot Control managed rule group. Use this to specify the inspection level that you want to use. For information about using the Bot Control managed rule group, see [WAF Bot Control rule group](https://docs.aws.amazon.com/waf/latest/developerguide/aws-managed-rule-groups-bot.html) and [WAF Bot Control](https://docs.aws.amazon.com/waf/latest/developerguide/waf-bot-control.html) in the *WAF Developer Guide*.
   *
   * @public
   */
  AWSManagedRulesBotControlRuleSet?: AWSManagedRulesBotControlRuleSet | undefined;

  /**
   * Additional configuration for using the account takeover prevention (ATP) managed rule group, `AWSManagedRulesATPRuleSet`. Use this to provide login request information to the rule group. For web ACLs that protect CloudFront distributions, use this to also provide the information about how your distribution responds to login requests.
   *
   * This configuration replaces the individual configuration fields in `ManagedRuleGroupConfig` and provides additional feature configuration.
   *
   * For information about using the ATP managed rule group, see [WAF Fraud Control account takeover prevention (ATP) rule group](https://docs.aws.amazon.com/waf/latest/developerguide/aws-managed-rule-groups-atp.html) and [WAF Fraud Control account takeover prevention (ATP)](https://docs.aws.amazon.com/waf/latest/developerguide/waf-atp.html) in the *WAF Developer Guide*.
   *
   * @public
   */
  AWSManagedRulesATPRuleSet?: AWSManagedRulesATPRuleSet | undefined;

  /**
   * Additional configuration for using the account creation fraud prevention (ACFP) managed rule group, `AWSManagedRulesACFPRuleSet`. Use this to provide account creation request information to the rule group. For web ACLs that protect CloudFront distributions, use this to also provide the information about how your distribution responds to account creation requests.
   *
   * For information about using the ACFP managed rule group, see [WAF Fraud Control account creation fraud prevention (ACFP) rule group](https://docs.aws.amazon.com/waf/latest/developerguide/aws-managed-rule-groups-acfp.html) and [WAF Fraud Control account creation fraud prevention (ACFP)](https://docs.aws.amazon.com/waf/latest/developerguide/waf-acfp.html) in the *WAF Developer Guide*.
   *
   * @public
   */
  AWSManagedRulesACFPRuleSet?: AWSManagedRulesACFPRuleSet | undefined;

  /**
   * Additional configuration for using the anti-DDoS managed rule group, `AWSManagedRulesAntiDDoSRuleSet`. Use this to configure anti-DDoS behavior for the rule group.
   *
   * For information about using the anti-DDoS managed rule group, see [WAF Anti-DDoS rule group](https://docs.aws.amazon.com/waf/latest/developerguide/aws-managed-rule-groups-anti-ddos.html) and [Distributed Denial of Service (DDoS) prevention](https://docs.aws.amazon.com/waf/latest/developerguide/waf-anti-ddos.html) in the *WAF Developer Guide*.
   *
   * @public
   */
  AWSManagedRulesAntiDDoSRuleSet?: AWSManagedRulesAntiDDoSRuleSet | undefined;
}

/**
 * A custom response to send to the client. You can define a custom response for rule actions and default web ACL actions that are set to BlockAction.
 *
 * For information about customizing web requests and responses, see [Customizing web requests and responses in WAF](https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html) in the *WAF Developer Guide*.
 *
 * @public
 */
export interface CustomResponse {
  /**
   * The HTTP status code to return to the client.
   *
   * For a list of status codes that you can use in your custom responses, see [Supported status codes for custom response](https://docs.aws.amazon.com/waf/latest/developerguide/customizing-the-response-status-codes.html) in the *WAF Developer Guide*.
   *
   * @public
   */
  ResponseCode: number | undefined;

  /**
   * References the response body that you want WAF to return to the web request client. You can define a custom response for a rule action or a default web ACL action that is set to block. To do this, you first define the response body key and value in the `CustomResponseBodies` setting for the WebACL or RuleGroup where you want to use it. Then, in the rule action or web ACL default action `BlockAction` setting, you reference the response body using this key.
   *
   * @public
   */
  CustomResponseBodyKey?: string | undefined;

  /**
   * The HTTP headers to use in the response. You can specify any header name except for `content-type`. Duplicate header names are not allowed.
   *
   * For information about the limits on count and size for custom request and response settings, see [WAF quotas](https://docs.aws.amazon.com/waf/latest/developerguide/limits.html) in the *WAF Developer Guide*.
   *
   * @public
   */
  ResponseHeaders?: CustomHTTPHeader[] | undefined;
}

/**
 * Specifies that WAF should block the request and optionally defines additional custom handling for the response to the web request.
 *
 * This is used in the context of other settings, for example to specify values for RuleAction and web ACL DefaultAction.
 *
 * @public
 */
export interface BlockAction {
  /**
   * Defines a custom response for the web request.
   *
   * For information about customizing web requests and responses, see [Customizing web requests and responses in WAF](https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html) in the *WAF Developer Guide*.
   *
   * @public
   */
  CustomResponse?: CustomResponse | undefined;
}

/**
 * Specifies that WAF should run a `CAPTCHA` check against the request:
 *
 * - If the request includes a valid, unexpired `CAPTCHA` token, WAF applies any custom request handling and labels that you've configured and then allows the web request inspection to proceed to the next rule, similar to a `CountAction`.
 * - If the request doesn't include a valid, unexpired token, WAF discontinues the web ACL evaluation of the request and blocks it from going to its intended destination.
 *
 *   WAF generates a response that it sends back to the client, which includes the following:
 *
 *   - The header `x-amzn-waf-action` with a value of `captcha`.
 *   - The HTTP status code `405 Method Not Allowed`.
 *   - If the request contains an `Accept` header with a value of `text/html`, the response includes a `CAPTCHA` JavaScript page interstitial.
 *
 * You can configure the expiration time in the `CaptchaConfig` `ImmunityTimeProperty` setting at the rule and web ACL level. The rule setting overrides the web ACL setting.
 *
 * This action option is available for rules. It isn't available for web ACL default actions.
 *
 * @public
 */
export interface CaptchaAction {
  /**
   * Defines custom handling for the web request, used when the `CAPTCHA` inspection determines that the request's token is valid and unexpired.
   *
   * For information about customizing web requests and responses, see [Customizing web requests and responses in WAF](https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html) in the *WAF Developer Guide*.
   *
   * @public
   */
  CustomRequestHandling?: CustomRequestHandling | undefined;
}

/**
 * Specifies that WAF should run a `Challenge` check against the request to verify that the request is coming from a legitimate client session:
 *
 * - If the request includes a valid, unexpired challenge token, WAF applies any custom request handling and labels that you've configured and then allows the web request inspection to proceed to the next rule, similar to a `CountAction`.
 * - If the request doesn't include a valid, unexpired challenge token, WAF discontinues the web ACL evaluation of the request and blocks it from going to its intended destination.
 *
 *   WAF then generates a challenge response that it sends back to the client, which includes the following:
 *
 *   - The header `x-amzn-waf-action` with a value of `challenge`.
 *   - The HTTP status code `202 Request Accepted`.
 *   - If the request contains an `Accept` header with a value of `text/html`, the response includes a JavaScript page interstitial with a challenge script.
 *
 *   Challenges run silent browser interrogations in the background, and don't generally affect the end user experience.
 *
 *   A challenge enforces token acquisition using an interstitial JavaScript challenge that inspects the client session for legitimate behavior. The challenge blocks bots or at least increases the cost of operating sophisticated bots.
 *
 *   After the client session successfully responds to the challenge, it receives a new token from WAF, which the challenge script uses to resubmit the original request.
 *
 * You can configure the expiration time in the `ChallengeConfig` `ImmunityTimeProperty` setting at the rule and web ACL level. The rule setting overrides the web ACL setting.
 *
 * This action option is available for rules. It isn't available for web ACL default actions.
 *
 * @public
 */
export interface ChallengeAction {
  /**
   * Defines custom handling for the web request, used when the challenge inspection determines that the request's token is valid and unexpired.
   *
   * For information about customizing web requests and responses, see [Customizing web requests and responses in WAF](https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html) in the *WAF Developer Guide*.
   *
   * @public
   */
  CustomRequestHandling?: CustomRequestHandling | undefined;
}

/**
 * Specifies that WAF should count the request. Optionally defines additional custom handling for the request.
 *
 * This is used in the context of other settings, for example to specify values for RuleAction and web ACL DefaultAction.
 *
 * @public
 */
export interface CountAction {
  /**
   * Defines custom handling for the web request.
   *
   * For information about customizing web requests and responses, see [Customizing web requests and responses in WAF](https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html) in the *WAF Developer Guide*.
   *
   * @public
   */
  CustomRequestHandling?: CustomRequestHandling | undefined;
}

/**
 * Specifies the monetize action settings for a rule. When WAF applies this action, it returns an HTTP 402 Payment Required response containing pricing information that the requesting client uses to complete payment and gain access to the resource. This is a terminating action-if the client does not complete the 402 payment flow, the request is blocked. This action is available only for web ACLs associated with Amazon CloudFront distributions. You must configure a `MonetizationConfig` on the web ACL or rule group before adding rules that use this action. You cannot use the Monetize action for rate-based rules.
 *
 * @public
 */
export interface MonetizeAction {
  /**
   * An integer multiplier applied to the base price defined in the web ACL's `MonetizationConfig`. The effective price for the request is the base price multiplied by this value. Specify as a string. Valid values: 1 to 100.
   *
   * @public
   */
  PriceMultiplier?: string | undefined;
}

/**
 * The action that WAF should take on a web request when it matches a rule's statement. Settings at the web ACL level can override the rule action setting.
 *
 * @public
 */
export interface RuleAction {
  /**
   * Instructs WAF to block the web request.
   *
   * @public
   */
  Block?: BlockAction | undefined;

  /**
   * Instructs WAF to allow the web request.
   *
   * @public
   */
  Allow?: AllowAction | undefined;

  /**
   * Instructs WAF to count the web request and then continue evaluating the request using the remaining rules in the web ACL.
   *
   * @public
   */
  Count?: CountAction | undefined;

  /**
   * Instructs WAF to run a `CAPTCHA` check against the web request.
   *
   * @public
   */
  Captcha?: CaptchaAction | undefined;

  /**
   * Instructs WAF to run a `Challenge` check against the web request.
   *
   * @public
   */
  Challenge?: ChallengeAction | undefined;

  /**
   * Instructs WAF to return an HTTP 402 Payment Required response with a price manifest. The requesting client can complete payment and resubmit the request to gain access. This is a terminating action-requests that do not complete payment are blocked. This action is available only for web ACLs associated with Amazon CloudFront distributions and requires a `MonetizationConfig` on the web ACL.
   *
   * @public
   */
  Monetize?: MonetizeAction | undefined;
}

/**
 * Action setting to use in the place of a rule action that is configured inside the rule group. You specify one override for each rule whose action you want to change.
 *
 * > **Note:** Verify the rule names in your overrides carefully. With managed rule groups, WAF silently ignores any override that uses an invalid rule name. With customer-owned rule groups, invalid rule names in your overrides will cause web ACL updates to fail. An invalid rule name is any name that doesn't exactly match the case-sensitive name of an existing rule in the rule group.
 *
 * You can use overrides for testing, for example you can override all of rule actions to `Count` and then monitor the resulting count metrics to understand how the rule group would handle your web traffic. You can also permanently override some or all actions, to modify how the rule group manages your web traffic.
 *
 * @public
 */
export interface RuleActionOverride {
  /**
   * The name of the rule to override.
   *
   * > **Note:** Verify the rule names in your overrides carefully. With managed rule groups, WAF silently ignores any override that uses an invalid rule name. With customer-owned rule groups, invalid rule names in your overrides will cause web ACL updates to fail. An invalid rule name is any name that doesn't exactly match the case-sensitive name of an existing rule in the rule group.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The override action to use, in place of the configured action of the rule in the rule group.
   *
   * @public
   */
  ActionToUse: RuleAction | undefined;
}

/**
 * Specifies an Autonomous System Number (ASN) derived from the request's originating or forwarded IP address as an aggregate key for a rate-based rule. Each distinct ASN contributes to the aggregation instance. If you use a single ASN as your custom key, then each ASN fully defines an aggregation instance.
 *
 * @public
 */
export interface RateLimitAsn {}

/**
 * Specifies a cookie as an aggregate key for a rate-based rule. Each distinct value in the cookie contributes to the aggregation instance. If you use a single cookie as your custom key, then each value fully defines an aggregation instance.
 *
 * @public
 */
export interface RateLimitCookie {
  /**
   * The name of the cookie to use.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection. Text transformations are used in rule match statements, to transform the `FieldToMatch` request component before inspecting it, and they're used in rate-based rule statements, to transform request components before using them as custom aggregation keys. If you specify one or more transformations to apply, WAF performs all transformations on the specified content, starting from the lowest priority setting, and then uses the transformed component contents.
   *
   * @public
   */
  TextTransformations: TextTransformation[] | undefined;
}

/**
 * Specifies the first IP address in an HTTP header as an aggregate key for a rate-based rule. Each distinct forwarded IP address contributes to the aggregation instance.
 *
 * This setting is used only in the `RateBasedStatementCustomKey` specification of a rate-based rule statement. When you specify an IP or forwarded IP in the custom key settings, you must also specify at least one other key to use. You can aggregate on only the forwarded IP address by specifying `FORWARDED_IP` in your rate-based statement's `AggregateKeyType`.
 *
 * This data type supports using the forwarded IP address in the web request aggregation for a rate-based rule, in `RateBasedStatementCustomKey`. The JSON specification for using the forwarded IP address doesn't explicitly use this data type.
 *
 * JSON specification: `"ForwardedIP": \{\}`
 *
 * When you use this specification, you must also configure the forwarded IP address in the rate-based statement's `ForwardedIPConfig`.
 *
 * @public
 */
export interface RateLimitForwardedIP {}

/**
 * Specifies a header as an aggregate key for a rate-based rule. Each distinct value in the header contributes to the aggregation instance. If you use a single header as your custom key, then each value fully defines an aggregation instance.
 *
 * @public
 */
export interface RateLimitHeader {
  /**
   * The name of the header to use.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection. Text transformations are used in rule match statements, to transform the `FieldToMatch` request component before inspecting it, and they're used in rate-based rule statements, to transform request components before using them as custom aggregation keys. If you specify one or more transformations to apply, WAF performs all transformations on the specified content, starting from the lowest priority setting, and then uses the transformed component contents.
   *
   * @public
   */
  TextTransformations: TextTransformation[] | undefined;
}

/**
 * Specifies the request's HTTP method as an aggregate key for a rate-based rule. Each distinct HTTP method contributes to the aggregation instance. If you use just the HTTP method as your custom key, then each method fully defines an aggregation instance.
 *
 * JSON specification: `"RateLimitHTTPMethod": \{\}`
 *
 * @public
 */
export interface RateLimitHTTPMethod {}

/**
 * Specifies the IP address in the web request as an aggregate key for a rate-based rule. Each distinct IP address contributes to the aggregation instance.
 *
 * This setting is used only in the `RateBasedStatementCustomKey` specification of a rate-based rule statement. To use this in the custom key settings, you must specify at least one other key to use, along with the IP address. To aggregate on only the IP address, in your rate-based statement's `AggregateKeyType`, specify `IP`.
 *
 * JSON specification: `"RateLimitIP": \{\}`
 *
 * @public
 */
export interface RateLimitIP {}

/**
 * Use the request's JA3 fingerprint derived from the TLS Client Hello of an incoming request as an aggregate key. If you use a single JA3 fingerprint as your custom key, then each value fully defines an aggregation instance.
 *
 * @public
 */
export interface RateLimitJA3Fingerprint {
  /**
   * The match status to assign to the web request if there is insufficient TSL Client Hello information to compute the JA3 fingerprint.
   *
   * You can specify the following fallback behaviors:
   *
   * - `MATCH` - Treat the web request as matching the rule statement. WAF applies the rule action to the request.
   * - `NO_MATCH` - Treat the web request as not matching the rule statement.
   *
   * @public
   */
  FallbackBehavior: FallbackBehavior | undefined;
}

/**
 * Use the request's JA4 fingerprint derived from the TLS Client Hello of an incoming request as an aggregate key. If you use a single JA4 fingerprint as your custom key, then each value fully defines an aggregation instance.
 *
 * @public
 */
export interface RateLimitJA4Fingerprint {
  /**
   * The match status to assign to the web request if there is insufficient TSL Client Hello information to compute the JA4 fingerprint.
   *
   * You can specify the following fallback behaviors:
   *
   * - `MATCH` - Treat the web request as matching the rule statement. WAF applies the rule action to the request.
   * - `NO_MATCH` - Treat the web request as not matching the rule statement.
   *
   * @public
   */
  FallbackBehavior: FallbackBehavior | undefined;
}

/**
 * Specifies a label namespace to use as an aggregate key for a rate-based rule. Each distinct fully qualified label name that has the specified label namespace contributes to the aggregation instance. If you use just one label namespace as your custom key, then each label name fully defines an aggregation instance.
 *
 * This uses only labels that have been added to the request by rules that are evaluated before this rate-based rule in the web ACL.
 *
 * For information about label namespaces and names, see [Label syntax and naming requirements](https://docs.aws.amazon.com/waf/latest/developerguide/waf-rule-label-requirements.html) in the *WAF Developer Guide*.
 *
 * @public
 */
export interface RateLimitLabelNamespace {
  /**
   * The namespace to use for aggregation.
   *
   * @public
   */
  Namespace: string | undefined;
}

/**
 * Specifies a query argument in the request as an aggregate key for a rate-based rule. Each distinct value for the named query argument contributes to the aggregation instance. If you use a single query argument as your custom key, then each value fully defines an aggregation instance.
 *
 * @public
 */
export interface RateLimitQueryArgument {
  /**
   * The name of the query argument to use.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection. Text transformations are used in rule match statements, to transform the `FieldToMatch` request component before inspecting it, and they're used in rate-based rule statements, to transform request components before using them as custom aggregation keys. If you specify one or more transformations to apply, WAF performs all transformations on the specified content, starting from the lowest priority setting, and then uses the transformed component contents.
   *
   * @public
   */
  TextTransformations: TextTransformation[] | undefined;
}

/**
 * Specifies the request's query string as an aggregate key for a rate-based rule. Each distinct string contributes to the aggregation instance. If you use just the query string as your custom key, then each string fully defines an aggregation instance.
 *
 * @public
 */
export interface RateLimitQueryString {
  /**
   * Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection. Text transformations are used in rule match statements, to transform the `FieldToMatch` request component before inspecting it, and they're used in rate-based rule statements, to transform request components before using them as custom aggregation keys. If you specify one or more transformations to apply, WAF performs all transformations on the specified content, starting from the lowest priority setting, and then uses the transformed component contents.
   *
   * @public
   */
  TextTransformations: TextTransformation[] | undefined;
}

/**
 * Specifies the request's URI path as an aggregate key for a rate-based rule. Each distinct URI path contributes to the aggregation instance. If you use just the URI path as your custom key, then each URI path fully defines an aggregation instance.
 *
 * @public
 */
export interface RateLimitUriPath {
  /**
   * Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection. Text transformations are used in rule match statements, to transform the `FieldToMatch` request component before inspecting it, and they're used in rate-based rule statements, to transform request components before using them as custom aggregation keys. If you specify one or more transformations to apply, WAF performs all transformations on the specified content, starting from the lowest priority setting, and then uses the transformed component contents.
   *
   * @public
   */
  TextTransformations: TextTransformation[] | undefined;
}

/**
 * Specifies a single custom aggregate key for a rate-base rule.
 *
 * > **Note:** Web requests that are missing any of the components specified in the aggregation keys are omitted from the rate-based rule evaluation and handling.
 *
 * @public
 */
export interface RateBasedStatementCustomKey {
  /**
   * Use the value of a header in the request as an aggregate key. Each distinct value in the header contributes to the aggregation instance. If you use a single header as your custom key, then each value fully defines an aggregation instance.
   *
   * @public
   */
  Header?: RateLimitHeader | undefined;

  /**
   * Use the value of a cookie in the request as an aggregate key. Each distinct value in the cookie contributes to the aggregation instance. If you use a single cookie as your custom key, then each value fully defines an aggregation instance.
   *
   * @public
   */
  Cookie?: RateLimitCookie | undefined;

  /**
   * Use the specified query argument as an aggregate key. Each distinct value for the named query argument contributes to the aggregation instance. If you use a single query argument as your custom key, then each value fully defines an aggregation instance.
   *
   * @public
   */
  QueryArgument?: RateLimitQueryArgument | undefined;

  /**
   * Use the request's query string as an aggregate key. Each distinct string contributes to the aggregation instance. If you use just the query string as your custom key, then each string fully defines an aggregation instance.
   *
   * @public
   */
  QueryString?: RateLimitQueryString | undefined;

  /**
   * Use the request's HTTP method as an aggregate key. Each distinct HTTP method contributes to the aggregation instance. If you use just the HTTP method as your custom key, then each method fully defines an aggregation instance.
   *
   * @public
   */
  HTTPMethod?: RateLimitHTTPMethod | undefined;

  /**
   * Use the first IP address in an HTTP header as an aggregate key. Each distinct forwarded IP address contributes to the aggregation instance.
   *
   * When you specify an IP or forwarded IP in the custom key settings, you must also specify at least one other key to use. You can aggregate on only the forwarded IP address by specifying `FORWARDED_IP` in your rate-based statement's `AggregateKeyType`.
   *
   * With this option, you must specify the header to use in the rate-based rule's `ForwardedIPConfig` property.
   *
   * @public
   */
  ForwardedIP?: RateLimitForwardedIP | undefined;

  /**
   * Use the request's originating IP address as an aggregate key. Each distinct IP address contributes to the aggregation instance.
   *
   * When you specify an IP or forwarded IP in the custom key settings, you must also specify at least one other key to use. You can aggregate on only the IP address by specifying `IP` in your rate-based statement's `AggregateKeyType`.
   *
   * @public
   */
  IP?: RateLimitIP | undefined;

  /**
   * Use the specified label namespace as an aggregate key. Each distinct fully qualified label name that has the specified label namespace contributes to the aggregation instance. If you use just one label namespace as your custom key, then each label name fully defines an aggregation instance.
   *
   * This uses only labels that have been added to the request by rules that are evaluated before this rate-based rule in the web ACL.
   *
   * For information about label namespaces and names, see [Label syntax and naming requirements](https://docs.aws.amazon.com/waf/latest/developerguide/waf-rule-label-requirements.html) in the *WAF Developer Guide*.
   *
   * @public
   */
  LabelNamespace?: RateLimitLabelNamespace | undefined;

  /**
   * Use the request's URI path as an aggregate key. Each distinct URI path contributes to the aggregation instance. If you use just the URI path as your custom key, then each URI path fully defines an aggregation instance.
   *
   * @public
   */
  UriPath?: RateLimitUriPath | undefined;

  /**
   * Use the request's JA3 fingerprint as an aggregate key. If you use a single JA3 fingerprint as your custom key, then each value fully defines an aggregation instance.
   *
   * @public
   */
  JA3Fingerprint?: RateLimitJA3Fingerprint | undefined;

  /**
   * Use the request's JA4 fingerprint as an aggregate key. If you use a single JA4 fingerprint as your custom key, then each value fully defines an aggregation instance.
   *
   * @public
   */
  JA4Fingerprint?: RateLimitJA4Fingerprint | undefined;

  /**
   * Use an Autonomous System Number (ASN) derived from the request's originating or forwarded IP address as an aggregate key. Each distinct ASN contributes to the aggregation instance.
   *
   * @public
   */
  ASN?: RateLimitAsn | undefined;
}

/**
 * A rule statement used to search web request components for a match against a single regular expression.
 *
 * @public
 */
export interface RegexMatchStatement {
  /**
   * The string representing the regular expression. WAF enforces a quota on the maximum number of characters in a regex pattern. For the current limit, see [WAF quotas](https://docs.aws.amazon.com/waf/latest/developerguide/limits.html) in the *WAF Developer Guide*.
   *
   * @public
   */
  RegexString: string | undefined;

  /**
   * The part of the web request that you want WAF to inspect.
   *
   * @public
   */
  FieldToMatch: FieldToMatch | undefined;

  /**
   * Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection. Text transformations are used in rule match statements, to transform the `FieldToMatch` request component before inspecting it, and they're used in rate-based rule statements, to transform request components before using them as custom aggregation keys. If you specify one or more transformations to apply, WAF performs all transformations on the specified content, starting from the lowest priority setting, and then uses the transformed component contents.
   *
   * @public
   */
  TextTransformations: TextTransformation[] | undefined;

  /**
   * Pre-parse text transformations normalize the raw query string before WAF parses it into individual query arguments. They are applied before the standard text transformations. Pre-parse text transformations are only supported when `FieldToMatch` is `SingleQueryArgument` or `AllQueryArguments`. You can specify up to 10 pre-parse text transformations per rule statement.
   *
   * @public
   */
  PreParseTextTransformations?: PreParseTextTransformation[] | undefined;
}

/**
 * A rule statement used to search web request components for matches with regular expressions. To use this, create a RegexPatternSet that specifies the expressions that you want to detect, then use the ARN of that set in this statement. A web request matches the pattern set rule statement if the request component matches any of the patterns in the set. To create a regex pattern set, see CreateRegexPatternSet.
 *
 * Each regex pattern set rule statement references a regex pattern set. You create and maintain the set independent of your rules. This allows you to use the single set in multiple rules. When you update the referenced set, WAF automatically updates all rules that reference it.
 *
 * @public
 */
export interface RegexPatternSetReferenceStatement {
  /**
   * The Amazon Resource Name (ARN) of the RegexPatternSet that this statement references.
   *
   * @public
   */
  ARN: string | undefined;

  /**
   * The part of the web request that you want WAF to inspect.
   *
   * @public
   */
  FieldToMatch: FieldToMatch | undefined;

  /**
   * Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection. Text transformations are used in rule match statements, to transform the `FieldToMatch` request component before inspecting it, and they're used in rate-based rule statements, to transform request components before using them as custom aggregation keys. If you specify one or more transformations to apply, WAF performs all transformations on the specified content, starting from the lowest priority setting, and then uses the transformed component contents.
   *
   * @public
   */
  TextTransformations: TextTransformation[] | undefined;

  /**
   * Pre-parse text transformations normalize the raw query string before WAF parses it into individual query arguments. They are applied before the standard text transformations. Pre-parse text transformations are only supported when `FieldToMatch` is `SingleQueryArgument` or `AllQueryArguments`. You can specify up to 10 pre-parse text transformations per rule statement.
   *
   * @public
   */
  PreParseTextTransformations?: PreParseTextTransformation[] | undefined;
}

/**
 * A rule statement used to run the rules that are defined in a RuleGroup. To use this, create a rule group with your rules, then provide the ARN of the rule group in this statement.
 *
 * You cannot nest a `RuleGroupReferenceStatement`, for example for use inside a `NotStatement` or `OrStatement`. You cannot use a rule group reference statement inside another rule group. You can only reference a rule group as a top-level statement within a rule that you define in a web ACL.
 *
 * @public
 */
export interface RuleGroupReferenceStatement {
  /**
   * The Amazon Resource Name (ARN) of the entity.
   *
   * @public
   */
  ARN: string | undefined;

  /**
   * Rules in the referenced rule group whose actions are set to `Count`.
   *
   * > **Note:** Instead of this option, use `RuleActionOverrides`. It accepts any valid action setting, including `Count`.
   *
   * @public
   */
  ExcludedRules?: ExcludedRule[] | undefined;

  /**
   * Action settings to use in the place of the rule actions that are configured inside the rule group. You specify one override for each rule whose action you want to change.
   *
   * > **Note:** Verify the rule names in your overrides carefully. With managed rule groups, WAF silently ignores any override that uses an invalid rule name. With customer-owned rule groups, invalid rule names in your overrides will cause web ACL updates to fail. An invalid rule name is any name that doesn't exactly match the case-sensitive name of an existing rule in the rule group.
   *
   * You can use overrides for testing, for example you can override all of rule actions to `Count` and then monitor the resulting count metrics to understand how the rule group would handle your web traffic. You can also permanently override some or all actions, to modify how the rule group manages your web traffic.
   *
   * @public
   */
  RuleActionOverrides?: RuleActionOverride[] | undefined;
}

/**
 * A rule statement that compares a number of bytes against the size of a request component, using a comparison operator, such as greater than (>) or less than (<). For example, you can use a size constraint statement to look for query strings that are longer than 100 bytes.
 *
 * If you configure WAF to inspect the request body, WAF inspects only the number of bytes in the body up to the limit for the web ACL and protected resource type. If you know that the request body for your web requests should never exceed the inspection limit, you can use a size constraint statement to block requests that have a larger request body size. For more information about the inspection limits, see `Body` and `JsonBody` settings for the `FieldToMatch` data type.
 *
 * If you choose URI for the value of Part of the request to filter on, the slash (/) in the URI counts as one character. For example, the URI `/logo.jpg` is nine characters long.
 *
 * @public
 */
export interface SizeConstraintStatement {
  /**
   * The part of the web request that you want WAF to inspect.
   *
   * @public
   */
  FieldToMatch: FieldToMatch | undefined;

  /**
   * The operator to use to compare the request part to the size setting.
   *
   * @public
   */
  ComparisonOperator: ComparisonOperator | undefined;

  /**
   * The size, in byte, to compare to the request part, after any transformations.
   *
   * @public
   */
  Size: number | undefined;

  /**
   * Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection. Text transformations are used in rule match statements, to transform the `FieldToMatch` request component before inspecting it, and they're used in rate-based rule statements, to transform request components before using them as custom aggregation keys. If you specify one or more transformations to apply, WAF performs all transformations on the specified content, starting from the lowest priority setting, and then uses the transformed component contents.
   *
   * @public
   */
  TextTransformations: TextTransformation[] | undefined;

  /**
   * Pre-parse text transformations normalize the raw query string before WAF parses it into individual query arguments. They are applied before the standard text transformations. Pre-parse text transformations are only supported when `FieldToMatch` is `SingleQueryArgument` or `AllQueryArguments`. You can specify up to 10 pre-parse text transformations per rule statement.
   *
   * @public
   */
  PreParseTextTransformations?: PreParseTextTransformation[] | undefined;
}

/**
 * A rule statement that inspects for malicious SQL code. Attackers insert malicious SQL code into web requests to do things like modify your database or extract data from it.
 *
 * @public
 */
export interface SqliMatchStatement {
  /**
   * The part of the web request that you want WAF to inspect.
   *
   * @public
   */
  FieldToMatch: FieldToMatch | undefined;

  /**
   * Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection. Text transformations are used in rule match statements, to transform the `FieldToMatch` request component before inspecting it, and they're used in rate-based rule statements, to transform request components before using them as custom aggregation keys. If you specify one or more transformations to apply, WAF performs all transformations on the specified content, starting from the lowest priority setting, and then uses the transformed component contents.
   *
   * @public
   */
  TextTransformations: TextTransformation[] | undefined;

  /**
   * Pre-parse text transformations normalize the raw query string before WAF parses it into individual query arguments. They are applied before the standard text transformations. Pre-parse text transformations are only supported when `FieldToMatch` is `SingleQueryArgument` or `AllQueryArguments`. You can specify up to 10 pre-parse text transformations per rule statement.
   *
   * @public
   */
  PreParseTextTransformations?: PreParseTextTransformation[] | undefined;

  /**
   * The sensitivity that you want WAF to use to inspect for SQL injection attacks.
   *
   * `HIGH` detects more attacks, but might generate more false positives, especially if your web requests frequently contain unusual strings. For information about identifying and mitigating false positives, see [Testing and tuning](https://docs.aws.amazon.com/waf/latest/developerguide/web-acl-testing.html) in the *WAF Developer Guide*.
   *
   * `LOW` is generally a better choice for resources that already have other protections against SQL injection attacks or that have a low tolerance for false positives.
   *
   * Default: `LOW`
   *
   * @public
   */
  SensitivityLevel?: SensitivityLevel | undefined;
}

/**
 * A rule statement that inspects for cross-site scripting (XSS) attacks. In XSS attacks, the attacker uses vulnerabilities in a benign website as a vehicle to inject malicious client-site scripts into other legitimate web browsers.
 *
 * @public
 */
export interface XssMatchStatement {
  /**
   * The part of the web request that you want WAF to inspect.
   *
   * @public
   */
  FieldToMatch: FieldToMatch | undefined;

  /**
   * Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection. Text transformations are used in rule match statements, to transform the `FieldToMatch` request component before inspecting it, and they're used in rate-based rule statements, to transform request components before using them as custom aggregation keys. If you specify one or more transformations to apply, WAF performs all transformations on the specified content, starting from the lowest priority setting, and then uses the transformed component contents.
   *
   * @public
   */
  TextTransformations: TextTransformation[] | undefined;

  /**
   * Pre-parse text transformations normalize the raw query string before WAF parses it into individual query arguments. They are applied before the standard text transformations. Pre-parse text transformations are only supported when `FieldToMatch` is `SingleQueryArgument` or `AllQueryArguments`. You can specify up to 10 pre-parse text transformations per rule statement.
   *
   * @public
   */
  PreParseTextTransformations?: PreParseTextTransformation[] | undefined;
}

/**
 * Information for a single API key.
 *
 * API keys are required for the integration of the CAPTCHA API in your JavaScript client applications. The API lets you customize the placement and characteristics of the CAPTCHA puzzle for your end users. For more information about the CAPTCHA JavaScript integration, see [WAF client application integration](https://docs.aws.amazon.com/waf/latest/developerguide/waf-application-integration.html) in the *WAF Developer Guide*.
 *
 * @public
 */
export interface APIKeySummary {
  /**
   * The token domains that are defined in this API key.
   *
   * @public
   */
  TokenDomains?: string[] | undefined;

  /**
   * The generated, encrypted API key. You can copy this for use in your JavaScript CAPTCHA integration.
   *
   * @public
   */
  APIKey?: string | undefined;

  /**
   * The date and time that the key was created.
   *
   * @public
   */
  CreationTimestamp?: Date | undefined;

  /**
   * Internal value used by WAF to manage the key.
   *
   * @public
   */
  Version?: number | undefined;
}

/**
 * Application details defined during the web ACL creation process. Application attributes help WAF give recommendations for protection packs.
 *
 * @public
 */
export interface ApplicationAttribute {
  /**
   * Specifies the attribute name.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Specifies the attribute value.
   *
   * @public
   */
  Values?: string[] | undefined;
}

/**
 * A list of `ApplicationAttribute`s that contains information about the application.
 *
 * @public
 */
export interface ApplicationConfig {
  /**
   * Contains the attribute name and a list of values for that attribute.
   *
   * @public
   */
  Attributes?: ApplicationAttribute[] | undefined;
}

/**
 * @public
 */
export interface AssociateWebACLRequest {
  /**
   * The Amazon Resource Name (ARN) of the web ACL that you want to associate with the resource.
   *
   * @public
   */
  WebACLArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the resource to associate with the web ACL.
   *
   * The ARN must be in one of the following formats:
   *
   * - For an Application Load Balancer: `arn:partition:elasticloadbalancing:region:account-id:loadbalancer/app/load-balancer-name/load-balancer-id`
   * - For an Amazon API Gateway REST API: `arn:partition:apigateway:region::/restapis/api-id/stages/stage-name`
   * - For an AppSync GraphQL API: `arn:partition:appsync:region:account-id:apis/GraphQLApiId`
   * - For an Amazon Cognito user pool: `arn:partition:cognito-idp:region:account-id:userpool/user-pool-id`
   * - For an App Runner service: `arn:partition:apprunner:region:account-id:service/apprunner-service-name/apprunner-service-id`
   * - For an Amazon Web Services Verified Access instance: `arn:partition:ec2:region:account-id:verified-access-instance/instance-id`
   * - For an Amplify application: `arn:partition:amplify:region:account-id:apps/app-id`
   * - For an Amazon Bedrock AgentCore Gateway: `arn:partition:bedrock-agentcore:region:account-id:gateway/gateway-id`
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface AssociateWebACLResponse {}

/**
 * A WAF feature that is not supported by the CloudFront pricing plan associated with the web ACL.
 *
 * @public
 */
export interface DisallowedFeature {
  /**
   * The name of the disallowed WAF feature.
   *
   * @public
   */
  Feature?: string | undefined;

  /**
   * The name of the CloudFront pricing plan required to use the WAF feature.
   *
   * @public
   */
  RequiredPricingPlan?: string | undefined;
}

/**
 * Specifies whether the associated CloudFront distribution inserts the WAF challenge JavaScript SDK into the HTML responses that it returns. The structure is empty: including it turns insertion on, and removing it turns insertion off.
 *
 * This is used in the `ChallengeJavascriptSdkInjection` map of the `AssociationConfig` of the web ACL. The map key identifies the resource type and must be `CLOUDFRONT`.
 *
 * JSON specification: `"CLOUDFRONT": \{\}`
 *
 * @public
 */
export interface ChallengeJavascriptSdkInjectionConfig {}

/**
 * Customizes the maximum size of the request body that your protected CloudFront, API Gateway, Amazon Cognito, App Runner, and Verified Access resources forward to WAF for inspection. The default size is 16 KB (16,384 bytes). You can change the setting for any of the available resource types.
 *
 * > **Note:** You are charged additional fees when your protected resources forward body sizes that are larger than the default. For more information, see [WAF Pricing](http://aws.amazon.com/waf/pricing/).
 *
 * Example JSON: `\{ "API_GATEWAY": "KB_48", "APP_RUNNER_SERVICE": "KB_32" \}`
 *
 * For Application Load Balancer and AppSync, the limit is fixed at 8 KB (8,192 bytes).
 *
 * This is used in the `AssociationConfig` of the web ACL.
 *
 * @public
 */
export interface RequestBodyAssociatedResourceTypeConfig {
  /**
   * Specifies the maximum size of the web request body component that an associated CloudFront, API Gateway, Amazon Cognito, App Runner, or Verified Access resource should send to WAF for inspection. This applies to statements in the web ACL that inspect the body or JSON body.
   *
   * Default: `16 KB (16,384 bytes)`
   *
   * @public
   */
  DefaultSizeInspectionLimit: SizeInspectionLimit | undefined;
}

/**
 * Specifies custom configurations for the associations between the web ACL and protected resources.
 *
 * Use this to customize the maximum size of the request body that your protected resources forward to WAF for inspection. You can customize this setting for CloudFront, API Gateway, Amazon Cognito, App Runner, or Verified Access resources. The default setting is 16 KB (16,384 bytes).
 *
 * > **Note:** You are charged additional fees when your protected resources forward body sizes that are larger than the default. For more information, see [WAF Pricing](http://aws.amazon.com/waf/pricing/).
 *
 * For Application Load Balancer and AppSync, the limit is fixed at 8 KB (8,192 bytes).
 *
 * You can also use this to have your CloudFront distributions insert the WAF challenge JavaScript SDK into the HTML responses that they return. For more information, see the `ChallengeJavascriptSdkInjection` setting.
 *
 * @public
 */
export interface AssociationConfig {
  /**
   * Customizes the maximum size of the request body that your protected CloudFront, API Gateway, Amazon Cognito, App Runner, and Verified Access resources forward to WAF for inspection. The default size is 16 KB (16,384 bytes). You can change the setting for any of the available resource types.
   *
   * > **Note:** You are charged additional fees when your protected resources forward body sizes that are larger than the default. For more information, see [WAF Pricing](http://aws.amazon.com/waf/pricing/).
   *
   * Example JSON: `\{ "API_GATEWAY": "KB_48", "APP_RUNNER_SERVICE": "KB_32" \}`
   *
   * For Application Load Balancer and AppSync, the limit is fixed at 8 KB (8,192 bytes).
   *
   * @public
   */
  RequestBody?: Partial<Record<AssociatedResourceType, RequestBodyAssociatedResourceTypeConfig>> | undefined;

  /**
   * Specifies the CloudFront distributions that insert the WAF challenge JavaScript SDK into the HTML responses that they return. When you enable this setting for a distribution, you do not add the SDK to your web pages yourself.
   *
   * You can configure this setting only for CloudFront distributions, using the `CLOUDFRONT` map key. WAF rejects any other resource type, and the setting is not available for regional resources. To configure it, use the CloudFront scope.
   *
   * Your web ACL must also contain at least one of the following qualifying managed rule groups. WAF Bot Control qualifies only at the `TARGETED` inspection level, not at `COMMON`:
   *
   * - The WAF Bot Control managed rule group `AWSManagedRulesBotControlRuleSet`, with the inspection level set to `TARGETED`.
   * - The WAF Fraud Control account takeover prevention (ATP) managed rule group `AWSManagedRulesATPRuleSet`.
   * - The WAF Fraud Control account creation fraud prevention (ACFP) managed rule group `AWSManagedRulesACFPRuleSet`.
   *
   * If you remove the last qualifying managed rule group from the web ACL, or lower the WAF Bot Control inspection level from `TARGETED` to `COMMON`, you must remove this setting in the same update. Otherwise, WAF rejects the update.
   *
   * Example JSON: `\{ "CLOUDFRONT": \{\} \}`
   *
   * If you omit this setting, CloudFront does not insert the SDK. When you omit it from a web ACL that previously used it, cached HTML that already contains the SDK is still served until it expires, or until you invalidate the cache for that distribution. For more information, see [Automatic SDK integration for CloudFront distributions](https://docs.aws.amazon.com/waf/latest/developerguide/waf-challenge-javascript-sdk-injection.html) in the *WAF Developer Guide*.
   *
   * @public
   */
  ChallengeJavascriptSdkInjection?: Partial<Record<AssociatedResourceType, ChallengeJavascriptSdkInjectionConfig>> | undefined;
}

/**
 * Used for CAPTCHA and challenge token settings. Determines how long a `CAPTCHA` or challenge timestamp remains valid after WAF updates it for a successful `CAPTCHA` or challenge response.
 *
 * @public
 */
export interface ImmunityTimeProperty {
  /**
   * The amount of time, in seconds, that a `CAPTCHA` or challenge timestamp is considered valid by WAF. The default setting is 300.
   *
   * For the Challenge action, the minimum setting is 300.
   *
   * @public
   */
  ImmunityTime: number | undefined;
}

/**
 * Specifies how WAF should handle `CAPTCHA` evaluations. This is available at the web ACL level and in each rule.
 *
 * @public
 */
export interface CaptchaConfig {
  /**
   * Determines how long a `CAPTCHA` timestamp in the token remains valid after the client successfully solves a `CAPTCHA` puzzle.
   *
   * @public
   */
  ImmunityTimeProperty?: ImmunityTimeProperty | undefined;
}

/**
 * Specifies how WAF should handle `Challenge` evaluations. This is available at the web ACL level and in each rule.
 *
 * @public
 */
export interface ChallengeConfig {
  /**
   * Determines how long a challenge timestamp in the token remains valid after the client successfully responds to a challenge.
   *
   * @public
   */
  ImmunityTimeProperty?: ImmunityTimeProperty | undefined;
}

/**
 * Specifies that WAF should do nothing. This is used for the `OverrideAction` setting on a Rule when the rule uses a rule group reference statement.
 *
 * This is used in the context of other settings, for example to specify values for RuleAction and web ACL DefaultAction.
 *
 * JSON specification: `"None": \{\}`
 *
 * @public
 */
export interface NoneAction {}

/**
 * The action to use in the place of the action that results from the rule group evaluation. Set the override action to none to leave the result of the rule group alone. Set it to count to override the result to count only.
 *
 * You can only use this for rule statements that reference a rule group, like `RuleGroupReferenceStatement` and `ManagedRuleGroupStatement`.
 *
 * > **Note:** This option is usually set to none. It does not affect how the rules in the rule group are evaluated. If you want the rules in the rule group to only count matches, do not use this and instead use the rule action override option, with `Count` action, in your rule group reference statement settings.
 *
 * @public
 */
export interface OverrideAction {
  /**
   * Override the rule group evaluation result to count only.
   *
   * > **Note:** This option is usually set to none. It does not affect how the rules in the rule group are evaluated. If you want the rules in the rule group to only count matches, do not use this and instead use the rule action override option, with `Count` action, in your rule group reference statement settings.
   *
   * @public
   */
  Count?: CountAction | undefined;

  /**
   * Don't override the rule group evaluation result. This is the most common setting.
   *
   * @public
   */
  None?: NoneAction | undefined;
}

/**
 * A single label container. This is used as an element of a label array in multiple contexts, for example, in `RuleLabels` inside a Rule and in `Labels` inside a SampledHTTPRequest.
 *
 * @public
 */
export interface Label {
  /**
   * The label string.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * Defines and enables Amazon CloudWatch metrics and web request sample collection.
 *
 * @public
 */
export interface VisibilityConfig {
  /**
   * Indicates whether WAF should store a sampling of the web requests that match the rules. You can view the sampled requests through the WAF console.
   *
   * If you configure data protection for the web ACL, the protection applies to the web ACL's sampled web request data.
   *
   * > **Note:** Request sampling doesn't provide a field redaction option, and any field redaction that you specify in your logging configuration doesn't affect sampling. You can only exclude fields from request sampling by disabling sampling in the web ACL visibility configuration or by configuring data protection for the web ACL.
   *
   * @public
   */
  SampledRequestsEnabled: boolean | undefined;

  /**
   * Indicates whether the associated resource sends metrics to Amazon CloudWatch. For the list of available metrics, see [WAF Metrics](https://docs.aws.amazon.com/waf/latest/developerguide/monitoring-cloudwatch.html#waf-metrics) in the *WAF Developer Guide*.
   *
   * For web ACLs, the metrics are for web requests that have the web ACL default action applied. WAF applies the default action to web requests that pass the inspection of all rules in the web ACL without being either allowed or blocked. For more information, see [The web ACL default action](https://docs.aws.amazon.com/waf/latest/developerguide/web-acl-default-action.html) in the *WAF Developer Guide*.
   *
   * @public
   */
  CloudWatchMetricsEnabled: boolean | undefined;

  /**
   * A name of the Amazon CloudWatch metric dimension. The name can contain only the characters: A-Z, a-z, 0-9, - (hyphen), and _ (underscore). The name can be from one to 128 characters long. It can't contain whitespace or metric names that are reserved for WAF, for example `All` and `Default_Action`.
   *
   * @public
   */
  MetricName: string | undefined;
}

/**
 * @public
 */
export interface CheckCapacityResponse {
  /**
   * The capacity required by the rules and scope.
   *
   * @public
   */
  Capacity?: number | undefined;
}

/**
 * @public
 */
export interface CreateAPIKeyRequest {
  /**
   * Specifies whether this is for a global resource type, such as a Amazon CloudFront distribution. For an Amplify application, use `CLOUDFRONT`.
   *
   * To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows:
   *
   * - CLI - Specify the Region when you use the CloudFront scope: `--scope=CLOUDFRONT --region=us-east-1`.
   * - API and SDKs - For all calls, use the Region endpoint us-east-1.
   *
   * @public
   */
  Scope: Scope | undefined;

  /**
   * The client application domains that you want to use this API key for.
   *
   * Example JSON: `"TokenDomains": ["abc.com", "store.abc.com"]`
   *
   * Public suffixes aren't allowed. For example, you can't use `gov.au` or `co.uk` as token domains.
   *
   * @public
   */
  TokenDomains: string[] | undefined;
}

/**
 * @public
 */
export interface CreateAPIKeyResponse {
  /**
   * The generated, encrypted API key. You can copy this for use in your JavaScript CAPTCHA integration.
   *
   * @public
   */
  APIKey?: string | undefined;
}

/**
 * A tag associated with an Amazon Web Services resource. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing or other management. Typically, the tag key represents a category, such as "environment", and the tag value represents a specific value within that category, such as "test," "development," or "production". Or you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each Amazon Web Services resource, up to 50 tags for a resource.
 *
 * You can tag the Amazon Web Services resources that you manage through WAF: web ACLs, rule groups, IP sets, and regex pattern sets. You can't manage or view tags through the WAF console.
 *
 * @public
 */
export interface Tag {
  /**
   * Part of the key:value pair that defines a tag. You can use a tag key to describe a category of information, such as "customer." Tag keys are case-sensitive.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * Part of the key:value pair that defines a tag. You can use a tag value to describe a specific value within a category, such as "companyA" or "companyB." Tag values are case-sensitive.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface CreateIPSetRequest {
  /**
   * The name of the IP set. You cannot change the name of an `IPSet` after you create it.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Specifies whether this is for a global resource type, such as a Amazon CloudFront distribution. For an Amplify application, use `CLOUDFRONT`.
   *
   * To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows:
   *
   * - CLI - Specify the Region when you use the CloudFront scope: `--scope=CLOUDFRONT --region=us-east-1`.
   * - API and SDKs - For all calls, use the Region endpoint us-east-1.
   *
   * @public
   */
  Scope: Scope | undefined;

  /**
   * A description of the IP set that helps with identification.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The version of the IP addresses, either `IPV4` or `IPV6`.
   *
   * @public
   */
  IPAddressVersion: IPAddressVersion | undefined;

  /**
   * Contains an array of strings that specifies zero or more IP addresses or blocks of IP addresses that you want WAF to inspect for in incoming requests. All addresses must be specified using Classless Inter-Domain Routing (CIDR) notation. WAF supports all IPv4 and IPv6 CIDR ranges except for `/0`.
   *
   * Example address strings:
   *
   * - For requests that originated from the IP address 192.0.2.44, specify `192.0.2.44/32`.
   * - For requests that originated from IP addresses from 192.0.2.0 to 192.0.2.255, specify `192.0.2.0/24`.
   * - For requests that originated from the IP address 1111:0000:0000:0000:0000:0000:0000:0111, specify `1111:0000:0000:0000:0000:0000:0000:0111/128`.
   * - For requests that originated from IP addresses 1111:0000:0000:0000:0000:0000:0000:0000 to 1111:0000:0000:0000:ffff:ffff:ffff:ffff, specify `1111:0000:0000:0000:0000:0000:0000:0000/64`.
   *
   * For more information about CIDR notation, see the Wikipedia entry [Classless Inter-Domain Routing](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing).
   *
   * Example JSON `Addresses` specifications:
   *
   * - Empty array: `"Addresses": []`
   * - Array with one address: `"Addresses": ["192.0.2.44/32"]`
   * - Array with three addresses: `"Addresses": ["192.0.2.44/32", "192.0.2.0/24", "192.0.0.0/16"]`
   * - INVALID specification: `"Addresses": [""]` INVALID
   *
   * @public
   */
  Addresses: string[] | undefined;

  /**
   * An array of key:value pairs to associate with the resource.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * High-level information about an IPSet, returned by operations like create and list. This provides information like the ID, that you can use to retrieve and manage an `IPSet`, and the ARN, that you provide to the IPSetReferenceStatement to use the address set in a Rule.
 *
 * @public
 */
export interface IPSetSummary {
  /**
   * The name of the IP set. You cannot change the name of an `IPSet` after you create it.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A unique identifier for the set. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * A description of the IP set that helps with identification.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A token used for optimistic locking. WAF returns a token to your `get` and `list` requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like `update` and `delete`. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a `WAFOptimisticLockException`. If this happens, perform another `get`, and use the new token returned by that operation.
   *
   * @public
   */
  LockToken?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the entity.
   *
   * @public
   */
  ARN?: string | undefined;
}

/**
 * @public
 */
export interface CreateIPSetResponse {
  /**
   * High-level information about an IPSet, returned by operations like create and list. This provides information like the ID, that you can use to retrieve and manage an `IPSet`, and the ARN, that you provide to the IPSetReferenceStatement to use the address set in a Rule.
   *
   * @public
   */
  Summary?: IPSetSummary | undefined;
}

/**
 * @public
 */
export interface CreateRegexPatternSetRequest {
  /**
   * The name of the set. You cannot change the name after you create the set.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Specifies whether this is for a global resource type, such as a Amazon CloudFront distribution. For an Amplify application, use `CLOUDFRONT`.
   *
   * To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows:
   *
   * - CLI - Specify the Region when you use the CloudFront scope: `--scope=CLOUDFRONT --region=us-east-1`.
   * - API and SDKs - For all calls, use the Region endpoint us-east-1.
   *
   * @public
   */
  Scope: Scope | undefined;

  /**
   * A description of the set that helps with identification.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Array of regular expression strings.
   *
   * @public
   */
  RegularExpressionList: Regex[] | undefined;

  /**
   * An array of key:value pairs to associate with the resource.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * High-level information about a RegexPatternSet, returned by operations like create and list. This provides information like the ID, that you can use to retrieve and manage a `RegexPatternSet`, and the ARN, that you provide to the RegexPatternSetReferenceStatement to use the pattern set in a Rule.
 *
 * @public
 */
export interface RegexPatternSetSummary {
  /**
   * The name of the data type instance. You cannot change the name after you create the instance.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A unique identifier for the set. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * A description of the set that helps with identification.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A token used for optimistic locking. WAF returns a token to your `get` and `list` requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like `update` and `delete`. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a `WAFOptimisticLockException`. If this happens, perform another `get`, and use the new token returned by that operation.
   *
   * @public
   */
  LockToken?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the entity.
   *
   * @public
   */
  ARN?: string | undefined;
}

/**
 * @public
 */
export interface CreateRegexPatternSetResponse {
  /**
   * High-level information about a RegexPatternSet, returned by operations like create and list. This provides information like the ID, that you can use to retrieve and manage a `RegexPatternSet`, and the ARN, that you provide to the RegexPatternSetReferenceStatement to use the pattern set in a Rule.
   *
   * @public
   */
  Summary?: RegexPatternSetSummary | undefined;
}

/**
 * The response body to use in a custom response to a web request. This is referenced by key from CustomResponse `CustomResponseBodyKey`.
 *
 * @public
 */
export interface CustomResponseBody {
  /**
   * The type of content in the payload that you are defining in the `Content` string.
   *
   * @public
   */
  ContentType: ResponseContentType | undefined;

  /**
   * The payload of the custom response.
   *
   * You can use JSON escape strings in JSON content. To do this, you must specify JSON content in the `ContentType` setting.
   *
   * For information about the limits on count and size for custom request and response settings, see [WAF quotas](https://docs.aws.amazon.com/waf/latest/developerguide/limits.html) in the *WAF Developer Guide*.
   *
   * @public
   */
  Content: string | undefined;
}

/**
 * The price per request for a payment network, specifying the amount and cryptocurrency.
 *
 * @public
 */
export interface Price {
  /**
   * The price per request as a decimal string in the specified currency. Minimum: 0.001. Maximum: 999999999.999. Supports up to 3 decimal places.
   *
   * @public
   */
  Amount: string | undefined;

  /**
   * The cryptocurrency for payment. Currently only `USDC` is supported.
   *
   * @public
   */
  Currency: CryptoCurrency | undefined;
}

/**
 * A blockchain payment network configuration for receiving AI bot monetization payments. Specifies the blockchain chain, your wallet address on that chain, and the price per request.
 *
 * @public
 */
export interface PaymentNetwork {
  /**
   * The blockchain network for receiving payments. Production networks: `BASE` (Base mainnet), `SOLANA` (Solana mainnet). Test networks: `BASE_SEPOLIA` (Base Sepolia testnet), `SOLANA_DEVNET` (Solana Devnet).
   *
   * @public
   */
  Chain: BlockchainChain | undefined;

  /**
   * Your wallet address on the specified blockchain where payments are sent. For EVM chains (Base, Base Sepolia), provide a valid Ethereum address (42 characters including 0x prefix). For Solana chains, provide a valid Base58-encoded public key (32-44 characters).
   *
   * For EVM addresses, WAF performs EIP-55 checksum validation for typo detection when the address uses a mix of lower and upper case letters. You can bypass this validation by providing the address in all lowercase or all uppercase.
   *
   * @public
   */
  WalletAddress: string | undefined;

  /**
   * The price configuration for this payment network. Currently supports a single price entry in USDC.
   *
   * @public
   */
  Prices: Price[] | undefined;
}

/**
 * The cryptocurrency payment configuration for AI bot monetization. Contains the list of blockchain payment networks where you receive payments.
 *
 * @public
 */
export interface CryptoConfig {
  /**
   * The blockchain payment networks configured to receive payments. You can specify 1 to 2 networks. All networks must be in the same environment-either all production networks (Base, Solana) or all test networks (Base Sepolia, Solana Devnet).
   *
   * @public
   */
  PaymentNetworks: PaymentNetwork[] | undefined;
}

/**
 * The monetization configuration for a web ACL or rule group. Specifies the cryptocurrency payment networks and currency mode for AI bot monetization. You must provide this configuration when any rule in the web ACL or rule group uses the `Monetize` action.
 *
 * @public
 */
export interface MonetizationConfig {
  /**
   * The cryptocurrency payment configuration, including the blockchain networks and wallet addresses where you receive payments.
   *
   * @public
   */
  CryptoConfig?: CryptoConfig | undefined;

  /**
   * Specifies whether the configuration uses real or test currency. Set to `REAL` to settle payments in USDC on production blockchain networks (Base, Solana). Set to `TEST` to settle on testnet networks (Base Sepolia, Solana Devnet) with tokens that have no monetary value. If not specified, defaults to `REAL`.
   *
   * @public
   */
  CurrencyMode?: CurrencyMode | undefined;
}

/**
 * High-level information about a RuleGroup, returned by operations like create and list. This provides information like the ID, that you can use to retrieve and manage a `RuleGroup`, and the ARN, that you provide to the RuleGroupReferenceStatement to use the rule group in a Rule.
 *
 * @public
 */
export interface RuleGroupSummary {
  /**
   * The name of the data type instance. You cannot change the name after you create the instance.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A unique identifier for the rule group. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * A description of the rule group that helps with identification.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A token used for optimistic locking. WAF returns a token to your `get` and `list` requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like `update` and `delete`. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a `WAFOptimisticLockException`. If this happens, perform another `get`, and use the new token returned by that operation.
   *
   * @public
   */
  LockToken?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the entity.
   *
   * @public
   */
  ARN?: string | undefined;
}

/**
 * @public
 */
export interface CreateRuleGroupResponse {
  /**
   * High-level information about a RuleGroup, returned by operations like create and list. This provides information like the ID, that you can use to retrieve and manage a `RuleGroup`, and the ARN, that you provide to the RuleGroupReferenceStatement to use the rule group in a Rule.
   *
   * @public
   */
  Summary?: RuleGroupSummary | undefined;
}

/**
 * Specifies a field type and keys to protect in stored web request data. This is part of the data protection configuration for a web ACL.
 *
 * @public
 */
export interface FieldToProtect {
  /**
   * Specifies the web request component type to protect.
   *
   * @public
   */
  FieldType: FieldToProtectType | undefined;

  /**
   * Specifies the keys to protect for the specified field type.
   *
   * Required for `SINGLE_HEADER`, `SINGLE_COOKIE`, and `SINGLE_QUERY_ARGUMENT`: provide a non-empty array naming the specific headers, cookies, or query arguments to protect. There is no option to protect all keys of these field types, so enumerate each key you intend to protect.
   *
   * Must be omitted for `QUERY_STRING` and `BODY`: the entire component is protected and these field types take no keys. Supplying `FieldKeys` for them is rejected.
   *
   * @public
   */
  FieldKeys?: string[] | undefined;
}

/**
 * Specifies the protection behavior for a field type. This is part of the data protection configuration for a web ACL.
 *
 * @public
 */
export interface DataProtection {
  /**
   * Specifies the field type and optional keys to apply the protection behavior to.
   *
   * @public
   */
  Field: FieldToProtect | undefined;

  /**
   * Specifies how to protect the field. WAF can apply a one-way hash to the field or hard code a string substitution.
   *
   * - One-way hash example: `ade099751dEXAMPLEHASH2ea9f3393f80dd5d3bEXAMPLEHASH966ae0d3cd5a1e`
   * - Substitution example: `REDACTED`
   *
   * @public
   */
  Action: DataProtectionAction | undefined;

  /**
   * Specifies whether to also exclude any rule match details from the data protection you have enabled for a given field. WAF logs these details for non-terminating matching rules and for the terminating matching rule. For additional information, see [Log fields for web ACL traffic](https://docs.aws.amazon.com/waf/latest/developerguide/logging-fields.html) in the *WAF Developer Guide*.
   *
   * Default: `FALSE`
   *
   * @public
   */
  ExcludeRuleMatchDetails?: boolean | undefined;

  /**
   * Specifies whether to also exclude any rate-based rule details from the data protection you have enabled for a given field. If you specify this exception, RateBasedDetails will show the value of the field. For additional information, see the log field `rateBasedRuleList` at [Log fields for web ACL traffic](https://docs.aws.amazon.com/waf/latest/developerguide/logging-fields.html) in the *WAF Developer Guide*.
   *
   * Default: `FALSE`
   *
   * @public
   */
  ExcludeRateBasedDetails?: boolean | undefined;
}

/**
 * Specifies data protection to apply to the web request data for the web ACL. This is a web ACL level data protection option.
 *
 * The data protection that you configure for the web ACL alters the data that's available for any other data collection activity, including your WAF logging destinations, web ACL request sampling, and Amazon Security Lake data collection and management. Your other option for data protection is in the logging configuration, which only affects logging.
 *
 * This is part of the data protection configuration for a web ACL.
 *
 * @public
 */
export interface DataProtectionConfig {
  /**
   * An array of data protection configurations for specific web request field types. This is defined for each web ACL. WAF applies the specified protection to all web requests that the web ACL inspects.
   *
   * @public
   */
  DataProtections: DataProtection[] | undefined;
}

/**
 * In a WebACL, this is the action that you want WAF to perform when a web request doesn't match any of the rules in the `WebACL`. The default action must be a terminating action.
 *
 * @public
 */
export interface DefaultAction {
  /**
   * Specifies that WAF should block requests by default.
   *
   * @public
   */
  Block?: BlockAction | undefined;

  /**
   * Specifies that WAF should allow requests by default.
   *
   * @public
   */
  Allow?: AllowAction | undefined;
}

/**
 * Configures the level of DDoS protection that applies to web ACLs associated with Application Load Balancers.
 *
 * @public
 */
export interface OnSourceDDoSProtectionConfig {
  /**
   * The level of DDoS protection that applies to web ACLs associated with Application Load Balancers. `ACTIVE_UNDER_DDOS` protection is enabled by default whenever a web ACL is associated with an Application Load Balancer. In the event that an Application Load Balancer experiences high-load conditions or suspected DDoS attacks, the `ACTIVE_UNDER_DDOS` protection automatically rate limits traffic from known low reputation sources without disrupting Application Load Balancer availability. `ALWAYS_ON` protection provides constant, always-on monitoring of known low reputation sources for suspected DDoS attacks. While this provides a higher level of protection, there may be potential impacts on legitimate traffic.
   *
   * @public
   */
  ALBLowReputationMode: LowReputationMode | undefined;
}

/**
 * High-level information about a WebACL, returned by operations like create and list. This provides information like the ID, that you can use to retrieve and manage a `WebACL`, and the ARN, that you provide to operations like AssociateWebACL.
 *
 * @public
 */
export interface WebACLSummary {
  /**
   * The name of the web ACL. You cannot change the name of a web ACL after you create it.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The unique identifier for the web ACL. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * A description of the web ACL that helps with identification.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A token used for optimistic locking. WAF returns a token to your `get` and `list` requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like `update` and `delete`. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a `WAFOptimisticLockException`. If this happens, perform another `get`, and use the new token returned by that operation.
   *
   * @public
   */
  LockToken?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the entity.
   *
   * @public
   */
  ARN?: string | undefined;
}

/**
 * @public
 */
export interface CreateWebACLResponse {
  /**
   * High-level information about a WebACL, returned by operations like create and list. This provides information like the ID, that you can use to retrieve and manage a `WebACL`, and the ARN, that you provide to operations like AssociateWebACL.
   *
   * @public
   */
  Summary?: WebACLSummary | undefined;
}

/**
 * @public
 */
export interface DeleteAPIKeyRequest {
  /**
   * Specifies whether this is for a global resource type, such as a Amazon CloudFront distribution. For an Amplify application, use `CLOUDFRONT`.
   *
   * To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows:
   *
   * - CLI - Specify the Region when you use the CloudFront scope: `--scope=CLOUDFRONT --region=us-east-1`.
   * - API and SDKs - For all calls, use the Region endpoint us-east-1.
   *
   * @public
   */
  Scope: Scope | undefined;

  /**
   * The encrypted API key that you want to delete.
   *
   * @public
   */
  APIKey: string | undefined;
}

/**
 * @public
 */
export interface DeleteAPIKeyResponse {}

/**
 * @public
 */
export interface DeleteFirewallManagerRuleGroupsRequest {
  /**
   * The Amazon Resource Name (ARN) of the web ACL.
   *
   * @public
   */
  WebACLArn: string | undefined;

  /**
   * A token used for optimistic locking. WAF returns a token to your `get` and `list` requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like `update` and `delete`. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a `WAFOptimisticLockException`. If this happens, perform another `get`, and use the new token returned by that operation.
   *
   * @public
   */
  WebACLLockToken: string | undefined;
}

/**
 * @public
 */
export interface DeleteFirewallManagerRuleGroupsResponse {
  /**
   * A token used for optimistic locking. WAF returns a token to your `get` and `list` requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like `update` and `delete`. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a `WAFOptimisticLockException`. If this happens, perform another `get`, and use the new token returned by that operation.
   *
   * @public
   */
  NextWebACLLockToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteIPSetRequest {
  /**
   * The name of the IP set. You cannot change the name of an `IPSet` after you create it.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Specifies whether this is for a global resource type, such as a Amazon CloudFront distribution. For an Amplify application, use `CLOUDFRONT`.
   *
   * To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows:
   *
   * - CLI - Specify the Region when you use the CloudFront scope: `--scope=CLOUDFRONT --region=us-east-1`.
   * - API and SDKs - For all calls, use the Region endpoint us-east-1.
   *
   * @public
   */
  Scope: Scope | undefined;

  /**
   * A unique identifier for the set. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * A token used for optimistic locking. WAF returns a token to your `get` and `list` requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like `update` and `delete`. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a `WAFOptimisticLockException`. If this happens, perform another `get`, and use the new token returned by that operation.
   *
   * @public
   */
  LockToken: string | undefined;
}

/**
 * @public
 */
export interface DeleteIPSetResponse {}

/**
 * @public
 */
export interface DeleteLoggingConfigurationRequest {
  /**
   * The Amazon Resource Name (ARN) of the web ACL from which you want to delete the LoggingConfiguration.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * Used to distinguish between various logging options. Currently, there is one option.
   *
   * Default: `WAF_LOGS`
   *
   * @public
   */
  LogType?: LogType | undefined;

  /**
   * The owner of the logging configuration, which must be set to `CUSTOMER` for the configurations that you manage.
   *
   * The log scope `SECURITY_LAKE` indicates a configuration that is managed through Amazon Security Lake. You can use Security Lake to collect log and event data from various sources for normalization, analysis, and management. For information, see [Collecting data from Amazon Web Services services](https://docs.aws.amazon.com/security-lake/latest/userguide/internal-sources.html) in the *Amazon Security Lake user guide*.
   *
   * The log scope `CLOUDWATCH_TELEMETRY_RULE_MANAGED` indicates a configuration that is managed through Amazon CloudWatch Logs for telemetry data collection and analysis. For information, see [What is Amazon CloudWatch Logs ?](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/WhatIsCloudWatchLogs.html) in the *Amazon CloudWatch Logs user guide*.
   *
   * Default: `CUSTOMER`
   *
   * @public
   */
  LogScope?: LogScope | undefined;
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
   * The Amazon Resource Name (ARN) of the rule group from which you want to delete the policy.
   *
   * You must be the owner of the rule group to perform this operation.
   *
   * @public
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
   * The name of the set. You cannot change the name after you create the set.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Specifies whether this is for a global resource type, such as a Amazon CloudFront distribution. For an Amplify application, use `CLOUDFRONT`.
   *
   * To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows:
   *
   * - CLI - Specify the Region when you use the CloudFront scope: `--scope=CLOUDFRONT --region=us-east-1`.
   * - API and SDKs - For all calls, use the Region endpoint us-east-1.
   *
   * @public
   */
  Scope: Scope | undefined;

  /**
   * A unique identifier for the set. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * A token used for optimistic locking. WAF returns a token to your `get` and `list` requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like `update` and `delete`. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a `WAFOptimisticLockException`. If this happens, perform another `get`, and use the new token returned by that operation.
   *
   * @public
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
   * The name of the rule group. You cannot change the name of a rule group after you create it.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Specifies whether this is for a global resource type, such as a Amazon CloudFront distribution. For an Amplify application, use `CLOUDFRONT`.
   *
   * To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows:
   *
   * - CLI - Specify the Region when you use the CloudFront scope: `--scope=CLOUDFRONT --region=us-east-1`.
   * - API and SDKs - For all calls, use the Region endpoint us-east-1.
   *
   * @public
   */
  Scope: Scope | undefined;

  /**
   * A unique identifier for the rule group. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * A token used for optimistic locking. WAF returns a token to your `get` and `list` requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like `update` and `delete`. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a `WAFOptimisticLockException`. If this happens, perform another `get`, and use the new token returned by that operation.
   *
   * @public
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
   * The name of the web ACL. You cannot change the name of a web ACL after you create it.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Specifies whether this is for a global resource type, such as a Amazon CloudFront distribution. For an Amplify application, use `CLOUDFRONT`.
   *
   * To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows:
   *
   * - CLI - Specify the Region when you use the CloudFront scope: `--scope=CLOUDFRONT --region=us-east-1`.
   * - API and SDKs - For all calls, use the Region endpoint us-east-1.
   *
   * @public
   */
  Scope: Scope | undefined;

  /**
   * The unique identifier for the web ACL. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * A token used for optimistic locking. WAF returns a token to your `get` and `list` requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like `update` and `delete`. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a `WAFOptimisticLockException`. If this happens, perform another `get`, and use the new token returned by that operation.
   *
   * @public
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
   * Specifies whether this is for a global resource type, such as a Amazon CloudFront distribution. For an Amplify application, use `CLOUDFRONT`.
   *
   * To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows:
   *
   * - CLI - Specify the Region when you use the CloudFront scope: `--scope=CLOUDFRONT --region=us-east-1`.
   * - API and SDKs - For all calls, use the Region endpoint us-east-1.
   *
   * @public
   */
  Scope: Scope | undefined;
}

/**
 * The properties of a managed product, such as an Amazon Web Services Managed Rules rule group or an Amazon Web Services Marketplace managed rule group.
 *
 * @public
 */
export interface ManagedProductDescriptor {
  /**
   * The name of the managed rule group vendor. You use this, along with the rule group name, to identify a rule group.
   *
   * @public
   */
  VendorName?: string | undefined;

  /**
   * The name of the managed rule group. For example, `AWSManagedRulesAnonymousIpList` or `AWSManagedRulesATPRuleSet`.
   *
   * @public
   */
  ManagedRuleSetName?: string | undefined;

  /**
   * A unique identifier for the rule group. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.
   *
   * @public
   */
  ProductId?: string | undefined;

  /**
   * For Amazon Web Services Marketplace managed rule groups only, the link to the rule group product page.
   *
   * @public
   */
  ProductLink?: string | undefined;

  /**
   * The display name for the managed rule group. For example, `Anonymous IP list` or `Account takeover prevention`.
   *
   * @public
   */
  ProductTitle?: string | undefined;

  /**
   * A short description of the managed rule group.
   *
   * @public
   */
  ProductDescription?: string | undefined;

  /**
   * The Amazon resource name (ARN) of the Amazon Simple Notification Service SNS topic that's used to provide notification of changes to the managed rule group. You can subscribe to the SNS topic to receive notifications when the managed rule group is modified, such as for new versions and for version expiration. For more information, see the [Amazon Simple Notification Service Developer Guide](https://docs.aws.amazon.com/sns/latest/dg/welcome.html).
   *
   * @public
   */
  SnsTopicArn?: string | undefined;

  /**
   * Indicates whether the rule group is versioned.
   *
   * @public
   */
  IsVersioningSupported?: boolean | undefined;

  /**
   * Indicates whether the rule group provides an advanced set of protections, such as the the Amazon Web Services Managed Rules rule groups that are used for WAF intelligent threat mitigation.
   *
   * @public
   */
  IsAdvancedManagedRuleSet?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeAllManagedProductsResponse {
  /**
   * High-level information for the Amazon Web Services Managed Rules rule groups and Amazon Web Services Marketplace managed rule groups.
   *
   * @public
   */
  ManagedProducts?: ManagedProductDescriptor[] | undefined;
}

/**
 * @public
 */
export interface DescribeManagedProductsByVendorRequest {
  /**
   * The name of the managed rule group vendor. You use this, along with the rule group name, to identify a rule group.
   *
   * @public
   */
  VendorName: string | undefined;

  /**
   * Specifies whether this is for a global resource type, such as a Amazon CloudFront distribution. For an Amplify application, use `CLOUDFRONT`.
   *
   * To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows:
   *
   * - CLI - Specify the Region when you use the CloudFront scope: `--scope=CLOUDFRONT --region=us-east-1`.
   * - API and SDKs - For all calls, use the Region endpoint us-east-1.
   *
   * @public
   */
  Scope: Scope | undefined;
}

/**
 * @public
 */
export interface DescribeManagedProductsByVendorResponse {
  /**
   * High-level information for the managed rule groups owned by the specified vendor.
   *
   * @public
   */
  ManagedProducts?: ManagedProductDescriptor[] | undefined;
}

/**
 * @public
 */
export interface DescribeManagedRuleGroupRequest {
  /**
   * The name of the managed rule group vendor. You use this, along with the rule group name, to identify a rule group.
   *
   * @public
   */
  VendorName: string | undefined;

  /**
   * The name of the managed rule group. You use this, along with the vendor name, to identify the rule group.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Specifies whether this is for a global resource type, such as a Amazon CloudFront distribution. For an Amplify application, use `CLOUDFRONT`.
   *
   * To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows:
   *
   * - CLI - Specify the Region when you use the CloudFront scope: `--scope=CLOUDFRONT --region=us-east-1`.
   * - API and SDKs - For all calls, use the Region endpoint us-east-1.
   *
   * @public
   */
  Scope: Scope | undefined;

  /**
   * The version of the rule group. You can only use a version that is not scheduled for expiration. If you don't provide this, WAF uses the vendor's default version.
   *
   * @public
   */
  VersionName?: string | undefined;
}

/**
 * List of labels used by one or more of the rules of a RuleGroup. This summary object is used for the following rule group lists:
 *
 * - `AvailableLabels` - Labels that rules add to matching requests. These labels are defined in the `RuleLabels` for a Rule.
 * - `ConsumedLabels` - Labels that rules match against. These labels are defined in a `LabelMatchStatement` specification, in the Statement definition of a rule.
 *
 * @public
 */
export interface LabelSummary {
  /**
   * An individual label specification.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * High-level information about a Rule, returned by operations like DescribeManagedRuleGroup. This provides information like the ID, that you can use to retrieve and manage a `RuleGroup`, and the ARN, that you provide to the RuleGroupReferenceStatement to use the rule group in a Rule.
 *
 * @public
 */
export interface RuleSummary {
  /**
   * The name of the rule.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The action that WAF should take on a web request when it matches a rule's statement. Settings at the web ACL level can override the rule action setting.
   *
   * @public
   */
  Action?: RuleAction | undefined;
}

/**
 * @public
 */
export interface DescribeManagedRuleGroupResponse {
  /**
   * The managed rule group's version.
   *
   * @public
   */
  VersionName?: string | undefined;

  /**
   * The Amazon resource name (ARN) of the Amazon Simple Notification Service SNS topic that's used to provide notification of changes to the managed rule group. You can subscribe to the SNS topic to receive notifications when the managed rule group is modified, such as for new versions and for version expiration. For more information, see the [Amazon Simple Notification Service Developer Guide](https://docs.aws.amazon.com/sns/latest/dg/welcome.html).
   *
   * @public
   */
  SnsTopicArn?: string | undefined;

  /**
   * The web ACL capacity units (WCUs) required for this rule group.
   *
   * WAF uses WCUs to calculate and control the operating resources that are used to run your rules, rule groups, and web ACLs. WAF calculates capacity differently for each rule type, to reflect the relative cost of each rule. Simple rules that cost little to run use fewer WCUs than more complex rules that use more processing power. Rule group capacity is fixed at creation, which helps users plan their web ACL WCU usage when they use a rule group. For more information, see [WAF web ACL capacity units (WCU)](https://docs.aws.amazon.com/waf/latest/developerguide/aws-waf-capacity-units.html) in the *WAF Developer Guide*.
   *
   * @public
   */
  Capacity?: number | undefined;

  /**
   * @public
   */
  Rules?: RuleSummary[] | undefined;

  /**
   * The label namespace prefix for this rule group. All labels added by rules in this rule group have this prefix.
   *
   * - The syntax for the label namespace prefix for a managed rule group is the following:
   *
   *   `awswaf:managed:<vendor>:<rule group name>`:
   * - When a rule with a label matches a web request, WAF adds the fully qualified label to the request. A fully qualified label is made up of the label namespace from the rule group or web ACL where the rule is defined and the label from the rule, separated by a colon:
   *
   *   `<label namespace>:<label from rule>`
   *
   * @public
   */
  LabelNamespace?: string | undefined;

  /**
   * The labels that one or more rules in this rule group add to matching web requests. These labels are defined in the `RuleLabels` for a Rule.
   *
   * @public
   */
  AvailableLabels?: LabelSummary[] | undefined;

  /**
   * The labels that one or more rules in this rule group match against in label match statements. These labels are defined in a `LabelMatchStatement` specification, in the Statement definition of a rule.
   *
   * @public
   */
  ConsumedLabels?: LabelSummary[] | undefined;
}

/**
 * @public
 */
export interface DisassociateWebACLRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource to disassociate from the web ACL.
   *
   * The ARN must be in one of the following formats:
   *
   * - For an Application Load Balancer: `arn:partition:elasticloadbalancing:region:account-id:loadbalancer/app/load-balancer-name/load-balancer-id`
   * - For an Amazon API Gateway REST API: `arn:partition:apigateway:region::/restapis/api-id/stages/stage-name`
   * - For an AppSync GraphQL API: `arn:partition:appsync:region:account-id:apis/GraphQLApiId`
   * - For an Amazon Cognito user pool: `arn:partition:cognito-idp:region:account-id:userpool/user-pool-id`
   * - For an App Runner service: `arn:partition:apprunner:region:account-id:service/apprunner-service-name/apprunner-service-id`
   * - For an Amazon Web Services Verified Access instance: `arn:partition:ec2:region:account-id:verified-access-instance/instance-id`
   * - For an Amplify application: `arn:partition:amplify:region:account-id:apps/app-id`
   * - For an Amazon Bedrock AgentCore Gateway: `arn:partition:bedrock-agentcore:region:account-id:gateway/gateway-id`
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface DisassociateWebACLResponse {}

/**
 * @public
 */
export interface GenerateMobileSdkReleaseUrlRequest {
  /**
   * The device platform.
   *
   * @public
   */
  Platform: Platform | undefined;

  /**
   * The release version. For the latest available version, specify `LATEST`.
   *
   * @public
   */
  ReleaseVersion: string | undefined;
}

/**
 * @public
 */
export interface GenerateMobileSdkReleaseUrlResponse {
  /**
   * The presigned download URL for the specified SDK release.
   *
   * @public
   */
  Url?: string | undefined;
}

/**
 * @public
 */
export interface GetDecryptedAPIKeyRequest {
  /**
   * Specifies whether this is for a global resource type, such as a Amazon CloudFront distribution. For an Amplify application, use `CLOUDFRONT`.
   *
   * To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows:
   *
   * - CLI - Specify the Region when you use the CloudFront scope: `--scope=CLOUDFRONT --region=us-east-1`.
   * - API and SDKs - For all calls, use the Region endpoint us-east-1.
   *
   * @public
   */
  Scope: Scope | undefined;

  /**
   * The encrypted API key.
   *
   * @public
   */
  APIKey: string | undefined;
}

/**
 * @public
 */
export interface GetDecryptedAPIKeyResponse {
  /**
   * The token domains that are defined in this API key.
   *
   * @public
   */
  TokenDomains?: string[] | undefined;

  /**
   * The date and time that the key was created.
   *
   * @public
   */
  CreationTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface GetIPSetRequest {
  /**
   * The name of the IP set. You cannot change the name of an `IPSet` after you create it.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Specifies whether this is for a global resource type, such as a Amazon CloudFront distribution. For an Amplify application, use `CLOUDFRONT`.
   *
   * To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows:
   *
   * - CLI - Specify the Region when you use the CloudFront scope: `--scope=CLOUDFRONT --region=us-east-1`.
   * - API and SDKs - For all calls, use the Region endpoint us-east-1.
   *
   * @public
   */
  Scope: Scope | undefined;

  /**
   * A unique identifier for the set. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.
   *
   * @public
   */
  Id: string | undefined;
}

/**
 * Contains zero or more IP addresses or blocks of IP addresses specified in Classless Inter-Domain Routing (CIDR) notation. WAF supports all IPv4 and IPv6 CIDR ranges except for /0. For information about CIDR notation, see the Wikipedia entry [Classless Inter-Domain Routing](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing).
 *
 * WAF assigns an ARN to each `IPSet` that you create. To use an IP set in a rule, you provide the ARN to the Rule statement IPSetReferenceStatement.
 *
 * @public
 */
export interface IPSet {
  /**
   * The name of the IP set. You cannot change the name of an `IPSet` after you create it.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A unique identifier for the set. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the entity.
   *
   * @public
   */
  ARN: string | undefined;

  /**
   * A description of the IP set that helps with identification.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The version of the IP addresses, either `IPV4` or `IPV6`.
   *
   * @public
   */
  IPAddressVersion: IPAddressVersion | undefined;

  /**
   * Contains an array of strings that specifies zero or more IP addresses or blocks of IP addresses that you want WAF to inspect for in incoming requests. All addresses must be specified using Classless Inter-Domain Routing (CIDR) notation. WAF supports all IPv4 and IPv6 CIDR ranges except for `/0`.
   *
   * Example address strings:
   *
   * - For requests that originated from the IP address 192.0.2.44, specify `192.0.2.44/32`.
   * - For requests that originated from IP addresses from 192.0.2.0 to 192.0.2.255, specify `192.0.2.0/24`.
   * - For requests that originated from the IP address 1111:0000:0000:0000:0000:0000:0000:0111, specify `1111:0000:0000:0000:0000:0000:0000:0111/128`.
   * - For requests that originated from IP addresses 1111:0000:0000:0000:0000:0000:0000:0000 to 1111:0000:0000:0000:ffff:ffff:ffff:ffff, specify `1111:0000:0000:0000:0000:0000:0000:0000/64`.
   *
   * For more information about CIDR notation, see the Wikipedia entry [Classless Inter-Domain Routing](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing).
   *
   * Example JSON `Addresses` specifications:
   *
   * - Empty array: `"Addresses": []`
   * - Array with one address: `"Addresses": ["192.0.2.44/32"]`
   * - Array with three addresses: `"Addresses": ["192.0.2.44/32", "192.0.2.0/24", "192.0.0.0/16"]`
   * - INVALID specification: `"Addresses": [""]` INVALID
   *
   * @public
   */
  Addresses: string[] | undefined;
}

/**
 * @public
 */
export interface GetIPSetResponse {
  /**
   * @public
   */
  IPSet?: IPSet | undefined;

  /**
   * A token used for optimistic locking. WAF returns a token to your `get` and `list` requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like `update` and `delete`. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a `WAFOptimisticLockException`. If this happens, perform another `get`, and use the new token returned by that operation.
   *
   * @public
   */
  LockToken?: string | undefined;
}

/**
 * @public
 */
export interface GetLoggingConfigurationRequest {
  /**
   * The Amazon Resource Name (ARN) of the web ACL for which you want to get the LoggingConfiguration.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * Used to distinguish between various logging options. Currently, there is one option.
   *
   * Default: `WAF_LOGS`
   *
   * @public
   */
  LogType?: LogType | undefined;

  /**
   * The owner of the logging configuration, which must be set to `CUSTOMER` for the configurations that you manage.
   *
   * The log scope `SECURITY_LAKE` indicates a configuration that is managed through Amazon Security Lake. You can use Security Lake to collect log and event data from various sources for normalization, analysis, and management. For information, see [Collecting data from Amazon Web Services services](https://docs.aws.amazon.com/security-lake/latest/userguide/internal-sources.html) in the *Amazon Security Lake user guide*.
   *
   * The log scope `CLOUDWATCH_TELEMETRY_RULE_MANAGED` indicates a configuration that is managed through Amazon CloudWatch Logs for telemetry data collection and analysis. For information, see [What is Amazon CloudWatch Logs ?](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/WhatIsCloudWatchLogs.html) in the *Amazon CloudWatch Logs user guide*.
   *
   * Default: `CUSTOMER`
   *
   * @public
   */
  LogScope?: LogScope | undefined;
}

/**
 * A single label name condition for a Condition in a logging filter.
 *
 * @public
 */
export interface LabelNameCondition {
  /**
   * The label name that a log record must contain in order to meet the condition. This must be a fully qualified label name. Fully qualified labels have a prefix, optional namespaces, and label name. The prefix identifies the rule group or web ACL context of the rule that added the label.
   *
   * @public
   */
  LabelName: string | undefined;
}

/**
 * A single match condition for a Filter.
 *
 * @public
 */
export interface Condition {
  /**
   * A single action condition. This is the action setting that a log record must contain in order to meet the condition.
   *
   * @public
   */
  ActionCondition?: ActionCondition | undefined;

  /**
   * A single label name condition. This is the fully qualified label name that a log record must contain in order to meet the condition. Fully qualified labels have a prefix, optional namespaces, and label name. The prefix identifies the rule group or web ACL context of the rule that added the label.
   *
   * @public
   */
  LabelNameCondition?: LabelNameCondition | undefined;
}

/**
 * A single logging filter, used in LoggingFilter.
 *
 * @public
 */
export interface Filter {
  /**
   * How to handle logs that satisfy the filter's conditions and requirement.
   *
   * @public
   */
  Behavior: FilterBehavior | undefined;

  /**
   * Logic to apply to the filtering conditions. You can specify that, in order to satisfy the filter, a log must match all conditions or must match at least one condition.
   *
   * @public
   */
  Requirement: FilterRequirement | undefined;

  /**
   * Match conditions for the filter.
   *
   * @public
   */
  Conditions: Condition[] | undefined;
}

/**
 * Filtering that specifies which web requests are kept in the logs and which are dropped, defined for a web ACL's LoggingConfiguration.
 *
 * You can filter on the rule action and on the web request labels that were applied by matching rules during web ACL evaluation.
 *
 * @public
 */
export interface LoggingFilter {
  /**
   * The filters that you want to apply to the logs.
   *
   * @public
   */
  Filters: Filter[] | undefined;

  /**
   * Default handling for logs that don't match any of the specified filtering conditions.
   *
   * @public
   */
  DefaultBehavior: FilterBehavior | undefined;
}

/**
 * Defines an association between logging destinations and a web ACL resource, for logging from WAF. As part of the association, you can specify parts of the standard logging fields to keep out of the logs and you can specify filters so that you log only a subset of the logging records.
 *
 * If you configure data protection for the web ACL, the protection applies to the data that WAF sends to the logs.
 *
 * > **Note:** You can define one logging destination per web ACL.
 *
 * You can access information about the traffic that WAF inspects using the following steps:
 *
 * 1. Create your logging destination. You can use an Amazon CloudWatch Logs log group, an Amazon Simple Storage Service (Amazon S3) bucket, or an Amazon Kinesis Data Firehose.
 *
 *    The name that you give the destination must start with `aws-waf-logs-`. Depending on the type of destination, you might need to configure additional settings or permissions.
 *
 *    For configuration requirements and pricing information for each destination type, see [Logging web ACL traffic](https://docs.aws.amazon.com/waf/latest/developerguide/logging.html) in the *WAF Developer Guide*.
 * 2. Associate your logging destination to your web ACL using a `PutLoggingConfiguration` request.
 *
 * When you successfully enable logging using a `PutLoggingConfiguration` request, WAF creates an additional role or policy that is required to write logs to the logging destination. For an Amazon CloudWatch Logs log group, WAF creates a resource policy on the log group. For an Amazon S3 bucket, WAF creates a bucket policy. For an Amazon Kinesis Data Firehose, WAF creates a service-linked role.
 *
 * For additional information about web ACL logging, see [Logging web ACL traffic information](https://docs.aws.amazon.com/waf/latest/developerguide/logging.html) in the *WAF Developer Guide*.
 *
 * @public
 */
export interface LoggingConfiguration {
  /**
   * The Amazon Resource Name (ARN) of the web ACL that you want to associate with `LogDestinationConfigs`.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The logging destination configuration that you want to associate with the web ACL.
   *
   * > **Note:** You can associate one logging destination to a web ACL.
   *
   * @public
   */
  LogDestinationConfigs: string[] | undefined;

  /**
   * The parts of the request that you want to keep out of the logs.
   *
   * For example, if you redact the `SingleHeader` field, the `HEADER` field in the logs will be `REDACTED` for all rules that use the `SingleHeader` `FieldToMatch` setting.
   *
   * If you configure data protection for the web ACL, the protection applies to the data that WAF sends to the logs.
   *
   * Redaction applies only to the component that's specified in the rule's `FieldToMatch` setting, so the `SingleHeader` redaction doesn't apply to rules that use the `Headers` `FieldToMatch`.
   *
   * > **Note:** You can specify only the following fields for redaction: `UriPath`, `QueryString`, `SingleHeader`, and `Method`.
   *
   * > **Note:** This setting has no impact on request sampling. You can only exclude fields from request sampling by disabling sampling in the web ACL visibility configuration or by configuring data protection for the web ACL.
   *
   * @public
   */
  RedactedFields?: FieldToMatch[] | undefined;

  /**
   * Indicates whether the logging configuration was created by Firewall Manager, as part of an WAF policy configuration. If true, only Firewall Manager can modify or delete the configuration.
   *
   * The logging configuration can be created by Firewall Manager for use with any web ACL that Firewall Manager is using for an WAF policy. Web ACLs that Firewall Manager creates and uses have their `ManagedByFirewallManager` property set to true. Web ACLs that were created by a customer account and then retrofitted by Firewall Manager for use by a policy have their `RetrofittedByFirewallManager` property set to true. For either case, any corresponding logging configuration will indicate `ManagedByFirewallManager`.
   *
   * @public
   */
  ManagedByFirewallManager?: boolean | undefined;

  /**
   * Filtering that specifies which web requests are kept in the logs and which are dropped. You can filter on the rule action and on the web request labels that were applied by matching rules during web ACL evaluation.
   *
   * @public
   */
  LoggingFilter?: LoggingFilter | undefined;

  /**
   * Used to distinguish between various logging options. Currently, there is one option.
   *
   * Default: `WAF_LOGS`
   *
   * @public
   */
  LogType?: LogType | undefined;

  /**
   * The owner of the logging configuration, which must be set to `CUSTOMER` for the configurations that you manage.
   *
   * The log scope `SECURITY_LAKE` indicates a configuration that is managed through Amazon Security Lake. You can use Security Lake to collect log and event data from various sources for normalization, analysis, and management. For information, see [Collecting data from Amazon Web Services services](https://docs.aws.amazon.com/security-lake/latest/userguide/internal-sources.html) in the *Amazon Security Lake user guide*.
   *
   * The log scope `CLOUDWATCH_TELEMETRY_RULE_MANAGED` indicates a configuration that is managed through Amazon CloudWatch Logs for telemetry data collection and analysis. For information, see [What is Amazon CloudWatch Logs ?](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/WhatIsCloudWatchLogs.html) in the *Amazon CloudWatch Logs user guide*.
   *
   * Default: `CUSTOMER`
   *
   * @public
   */
  LogScope?: LogScope | undefined;
}

/**
 * @public
 */
export interface GetLoggingConfigurationResponse {
  /**
   * The LoggingConfiguration for the specified web ACL.
   *
   * @public
   */
  LoggingConfiguration?: LoggingConfiguration | undefined;
}

/**
 * @public
 */
export interface GetManagedRuleSetRequest {
  /**
   * The name of the managed rule set. You use this, along with the rule set ID, to identify the rule set.
   *
   * This name is assigned to the corresponding managed rule group, which your customers can access and use.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Specifies whether this is for a global resource type, such as a Amazon CloudFront distribution. For an Amplify application, use `CLOUDFRONT`.
   *
   * To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows:
   *
   * - CLI - Specify the Region when you use the CloudFront scope: `--scope=CLOUDFRONT --region=us-east-1`.
   * - API and SDKs - For all calls, use the Region endpoint us-east-1.
   *
   * @public
   */
  Scope: Scope | undefined;

  /**
   * A unique identifier for the managed rule set. The ID is returned in the responses to commands like `list`. You provide it to operations like `get` and `update`.
   *
   * @public
   */
  Id: string | undefined;
}

/**
 * Information for a single version of a managed rule set.
 *
 * > **Note:**
 * >
 * > This is intended for use only by vendors of managed rule sets. Vendors are Amazon Web Services and Amazon Web Services Marketplace sellers.
 * >
 * > Vendors, you can use the managed rule set APIs to provide controlled rollout of your versioned managed rule group offerings for your customers. The APIs are `ListManagedRuleSets`, `GetManagedRuleSet`, `PutManagedRuleSetVersions`, and `UpdateManagedRuleSetVersionExpiryDate`.
 *
 * @public
 */
export interface ManagedRuleSetVersion {
  /**
   * The Amazon Resource Name (ARN) of the vendor rule group that's used to define the published version of your managed rule group.
   *
   * @public
   */
  AssociatedRuleGroupArn?: string | undefined;

  /**
   * The web ACL capacity units (WCUs) required for this rule group.
   *
   * WAF uses WCUs to calculate and control the operating resources that are used to run your rules, rule groups, and web ACLs. WAF calculates capacity differently for each rule type, to reflect the relative cost of each rule. Simple rules that cost little to run use fewer WCUs than more complex rules that use more processing power. Rule group capacity is fixed at creation, which helps users plan their web ACL WCU usage when they use a rule group. For more information, see [WAF web ACL capacity units (WCU)](https://docs.aws.amazon.com/waf/latest/developerguide/aws-waf-capacity-units.html) in the *WAF Developer Guide*.
   *
   * @public
   */
  Capacity?: number | undefined;

  /**
   * The amount of time you expect this version of your managed rule group to last, in days.
   *
   * @public
   */
  ForecastedLifetime?: number | undefined;

  /**
   * The time that you first published this version.
   *
   * Times are in Coordinated Universal Time (UTC) format. UTC format includes the special designator, Z. For example, "2016-09-27T14:50Z".
   *
   * @public
   */
  PublishTimestamp?: Date | undefined;

  /**
   * The last time that you updated this version.
   *
   * Times are in Coordinated Universal Time (UTC) format. UTC format includes the special designator, Z. For example, "2016-09-27T14:50Z".
   *
   * @public
   */
  LastUpdateTimestamp?: Date | undefined;

  /**
   * The time that this version is set to expire.
   *
   * Times are in Coordinated Universal Time (UTC) format. UTC format includes the special designator, Z. For example, "2016-09-27T14:50Z".
   *
   * @public
   */
  ExpiryTimestamp?: Date | undefined;
}

/**
 * A set of rules that is managed by Amazon Web Services and Amazon Web Services Marketplace sellers to provide versioned managed rule groups for customers of WAF.
 *
 * > **Note:**
 * >
 * > This is intended for use only by vendors of managed rule sets. Vendors are Amazon Web Services and Amazon Web Services Marketplace sellers.
 * >
 * > Vendors, you can use the managed rule set APIs to provide controlled rollout of your versioned managed rule group offerings for your customers. The APIs are `ListManagedRuleSets`, `GetManagedRuleSet`, `PutManagedRuleSetVersions`, and `UpdateManagedRuleSetVersionExpiryDate`.
 *
 * @public
 */
export interface ManagedRuleSet {
  /**
   * The name of the managed rule set. You use this, along with the rule set ID, to identify the rule set.
   *
   * This name is assigned to the corresponding managed rule group, which your customers can access and use.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A unique identifier for the managed rule set. The ID is returned in the responses to commands like `list`. You provide it to operations like `get` and `update`.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the entity.
   *
   * @public
   */
  ARN: string | undefined;

  /**
   * A description of the set that helps with identification.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The versions of this managed rule set that are available for use by customers.
   *
   * @public
   */
  PublishedVersions?: Record<string, ManagedRuleSetVersion> | undefined;

  /**
   * The version that you would like your customers to use.
   *
   * @public
   */
  RecommendedVersion?: string | undefined;

  /**
   * The label namespace prefix for the managed rule groups that are offered to customers from this managed rule set. All labels that are added by rules in the managed rule group have this prefix.
   *
   * - The syntax for the label namespace prefix for a managed rule group is the following:
   *
   *   `awswaf:managed:<vendor>:<rule group name>`:
   * - When a rule with a label matches a web request, WAF adds the fully qualified label to the request. A fully qualified label is made up of the label namespace from the rule group or web ACL where the rule is defined and the label from the rule, separated by a colon:
   *
   *   `<label namespace>:<label from rule>`
   *
   * @public
   */
  LabelNamespace?: string | undefined;
}

/**
 * @public
 */
export interface GetManagedRuleSetResponse {
  /**
   * The managed rule set that you requested.
   *
   * @public
   */
  ManagedRuleSet?: ManagedRuleSet | undefined;

  /**
   * A token used for optimistic locking. WAF returns a token to your `get` and `list` requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like `update` and `delete`. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a `WAFOptimisticLockException`. If this happens, perform another `get`, and use the new token returned by that operation.
   *
   * @public
   */
  LockToken?: string | undefined;
}

/**
 * @public
 */
export interface GetMobileSdkReleaseRequest {
  /**
   * The device platform.
   *
   * @public
   */
  Platform: Platform | undefined;

  /**
   * The release version. For the latest available version, specify `LATEST`.
   *
   * @public
   */
  ReleaseVersion: string | undefined;
}

/**
 * Information for a release of the mobile SDK, including release notes and tags.
 *
 * The mobile SDK is not generally available. Customers who have access to the mobile SDK can use it to establish and manage WAF tokens for use in HTTP(S) requests from a mobile device to WAF. For more information, see [WAF client application integration](https://docs.aws.amazon.com/waf/latest/developerguide/waf-application-integration.html) in the *WAF Developer Guide*.
 *
 * @public
 */
export interface MobileSdkRelease {
  /**
   * The release version.
   *
   * @public
   */
  ReleaseVersion?: string | undefined;

  /**
   * The timestamp of the release.
   *
   * @public
   */
  Timestamp?: Date | undefined;

  /**
   * Notes describing the release.
   *
   * @public
   */
  ReleaseNotes?: string | undefined;

  /**
   * Tags that are associated with the release.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface GetMobileSdkReleaseResponse {
  /**
   * Information for a specified SDK release, including release notes and tags.
   *
   * @public
   */
  MobileSdkRelease?: MobileSdkRelease | undefined;
}

/**
 * @public
 */
export interface GetPermissionPolicyRequest {
  /**
   * The Amazon Resource Name (ARN) of the rule group for which you want to get the policy.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface GetPermissionPolicyResponse {
  /**
   * The IAM policy that is attached to the specified rule group.
   *
   * @public
   */
  Policy?: string | undefined;
}

/**
 * @public
 */
export interface GetRateBasedStatementManagedKeysRequest {
  /**
   * Specifies whether this is for a global resource type, such as a Amazon CloudFront distribution. For an Amplify application, use `CLOUDFRONT`.
   *
   * To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows:
   *
   * - CLI - Specify the Region when you use the CloudFront scope: `--scope=CLOUDFRONT --region=us-east-1`.
   * - API and SDKs - For all calls, use the Region endpoint us-east-1.
   *
   * @public
   */
  Scope: Scope | undefined;

  /**
   * The name of the web ACL. You cannot change the name of a web ACL after you create it.
   *
   * @public
   */
  WebACLName: string | undefined;

  /**
   * The unique identifier for the web ACL. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.
   *
   * @public
   */
  WebACLId: string | undefined;

  /**
   * The name of the rule group reference statement in your web ACL. This is required only when you have the rate-based rule nested inside a rule group.
   *
   * @public
   */
  RuleGroupRuleName?: string | undefined;

  /**
   * The name of the rate-based rule to get the keys for. If you have the rule defined inside a rule group that you're using in your web ACL, also provide the name of the rule group reference statement in the request parameter `RuleGroupRuleName`.
   *
   * @public
   */
  RuleName: string | undefined;
}

/**
 * The set of IP addresses that are currently blocked for a RateBasedStatement. This is only available for rate-based rules that aggregate on just the IP address, with the `AggregateKeyType` set to `IP` or `FORWARDED_IP`.
 *
 * A rate-based rule applies its rule action to requests from IP addresses that are in the rule's managed keys list and that match the rule's scope-down statement. When a rule has no scope-down statement, it applies the action to all requests from the IP addresses that are in the list. The rule applies its rule action to rate limit the matching requests. The action is usually Block but it can be any valid rule action except for Allow.
 *
 * The maximum number of IP addresses that can be rate limited by a single rate-based rule instance is 10,000. If more than 10,000 addresses exceed the rate limit, WAF limits those with the highest rates.
 *
 * @public
 */
export interface RateBasedStatementManagedKeysIPSet {
  /**
   * The version of the IP addresses, either `IPV4` or `IPV6`.
   *
   * @public
   */
  IPAddressVersion?: IPAddressVersion | undefined;

  /**
   * The IP addresses that are currently blocked.
   *
   * @public
   */
  Addresses?: string[] | undefined;
}

/**
 * @public
 */
export interface GetRateBasedStatementManagedKeysResponse {
  /**
   * The keys that are of Internet Protocol version 4 (IPv4).
   *
   * @public
   */
  ManagedKeysIPV4?: RateBasedStatementManagedKeysIPSet | undefined;

  /**
   * The keys that are of Internet Protocol version 6 (IPv6).
   *
   * @public
   */
  ManagedKeysIPV6?: RateBasedStatementManagedKeysIPSet | undefined;
}

/**
 * @public
 */
export interface GetRegexPatternSetRequest {
  /**
   * The name of the set. You cannot change the name after you create the set.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Specifies whether this is for a global resource type, such as a Amazon CloudFront distribution. For an Amplify application, use `CLOUDFRONT`.
   *
   * To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows:
   *
   * - CLI - Specify the Region when you use the CloudFront scope: `--scope=CLOUDFRONT --region=us-east-1`.
   * - API and SDKs - For all calls, use the Region endpoint us-east-1.
   *
   * @public
   */
  Scope: Scope | undefined;

  /**
   * A unique identifier for the set. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.
   *
   * @public
   */
  Id: string | undefined;
}

/**
 * Contains one or more regular expressions.
 *
 * WAF assigns an ARN to each `RegexPatternSet` that you create. To use a set in a rule, you provide the ARN to the Rule statement RegexPatternSetReferenceStatement.
 *
 * @public
 */
export interface RegexPatternSet {
  /**
   * The name of the set. You cannot change the name after you create the set.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A unique identifier for the set. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the entity.
   *
   * @public
   */
  ARN?: string | undefined;

  /**
   * A description of the set that helps with identification.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The regular expression patterns in the set.
   *
   * @public
   */
  RegularExpressionList?: Regex[] | undefined;
}

/**
 * @public
 */
export interface GetRegexPatternSetResponse {
  /**
   * @public
   */
  RegexPatternSet?: RegexPatternSet | undefined;

  /**
   * A token used for optimistic locking. WAF returns a token to your `get` and `list` requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like `update` and `delete`. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a `WAFOptimisticLockException`. If this happens, perform another `get`, and use the new token returned by that operation.
   *
   * @public
   */
  LockToken?: string | undefined;
}

/**
 * A filter for narrowing monetization statistics and settlement record results. Specify a filter name and one or more values to match.
 *
 * Filter behavior:
 *
 * - Multiple values within one filter: OR (match any)
 * - Multiple filters: AND (all must match)
 * - No duplicate filter names allowed (rejected with error)
 * - Duplicate values within a filter are silently deduplicated
 * - If no `CurrencyMode` filter is specified, defaults to `REAL`
 *
 * @public
 */
export interface MonetizationFilter {
  /**
   * The filter name. Format: Key is a string, Value is a list of strings.
   *
   * Enum-restricted (invalid values rejected):
   *
   * - `CurrencyMode`: `REAL`, `TEST`
   * - `ChainName`: `BASE`, `SOLANA`, `BASE_SEPOLIA`, `SOLANA_DEVNET`
   * - `SettlementStatus`: `SETTLED`, `PENDING`, `FAILED`, `SERVICE_ERROR`, `SKIPPED_ORIGIN_ERROR`, `DUPLICATE`
   * - `HttpSourceName`: `CF`, `ALB`, `APIGW`, `APPRUNNER`, `COGNITO`, `VERIFIED_ACCESS`
   *
   * ARN-validated:
   *
   * - `WebACLArn`: valid WAFv2 web ACL ARN
   *
   * Free-text (any string up to 256 chars):
   *
   * - `SourceName`: The name of the bot. Populated from Bot Control verified bot labels.
   * - `SourceCategory`: The category classification of the bot. From Bot Control categorization.
   * - `Intent`: The declared intent of the bot request.
   * - `Organization`: The organization operating the bot.
   * - `UriPathPrefix`: The URI path of the request that was monetized.
   * - `RequestId`: The WAF request ID associated with the transaction. Matches the requestId in WAF logs. Pattern: `^[a-zA-Z0-9:._\-=+/]+$`
   * - `TransactionId`: The blockchain transaction identifier. Pattern: `^[a-zA-Z0-9:._\-=+/]+$`
   * - `TerminatingRuleName`: The name of the WAF rule that triggered the Monetize action.
   * - `PayerAddress`: The blockchain wallet address of the paying client. Pattern: `^[a-zA-Z0-9:._\-=+/]+$`
   * - `HttpSourceId`: The identifier of the Amazon Web Services resource associated with the web ACL (for example, CloudFront distribution ID).
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The values to filter on. Specify as a list of strings. Results match any of the specified values (OR logic). Duplicate values are silently deduplicated. Maximum: 20 values per filter.
   *
   * @public
   */
  Values: string[] | undefined;
}

/**
 * In a GetSampledRequests request, the `StartTime` and `EndTime` objects specify the time range for which you want WAF to return a sample of web requests.
 *
 * You must specify the times in Coordinated Universal Time (UTC) format. UTC format includes the special designator, `Z`. For example, `"2016-09-27T14:50Z"`. You can specify any time range in the previous three hours.
 *
 * In a GetSampledRequests response, the `StartTime` and `EndTime` objects specify the time range for which WAF actually returned a sample of web requests. WAF gets the specified number of requests from among the first 5,000 requests that your Amazon Web Services resource receives during the specified time period. If your resource receives more than 5,000 requests during that period, WAF stops sampling after the 5,000th request. In that case, `EndTime` is the time that WAF received the 5,000th request.
 *
 * @public
 */
export interface TimeWindow {
  /**
   * The beginning of the time range from which you want `GetSampledRequests` to return a sample of the requests that your Amazon Web Services resource received. You must specify the times in Coordinated Universal Time (UTC) format. UTC format includes the special designator, `Z`. For example, `"2016-09-27T14:50Z"`. You can specify any time range in the previous three hours.
   *
   * @public
   */
  StartTime: Date | undefined;

  /**
   * The end of the time range from which you want `GetSampledRequests` to return a sample of the requests that your Amazon Web Services resource received. You must specify the times in Coordinated Universal Time (UTC) format. UTC format includes the special designator, `Z`. For example, `"2016-09-27T14:50Z"`. You can specify any time range in the previous three hours.
   *
   * @public
   */
  EndTime: Date | undefined;
}

/**
 * @public
 */
export interface GetRevenueStatisticsRequest {
  /**
   * `TOP_SOURCES_BY_REVENUE` ranks revenue from AI bot traffic, grouped by the dimension you specify in the `GroupBy` parameter (`NAME`, `CATEGORY`, `INTENT`, `ORGANIZATION`, or `WEBACL`); `GroupBy` is required for this statistic type. `TOP_PATHS_BY_REVENUE` ranks revenue by path.
   *
   * @public
   */
  StatisticType: RankingStatisticType | undefined;

  /**
   * The time range for the query. Specify start and end timestamps.
   *
   * @public
   */
  TimeWindow: TimeWindow | undefined;

  /**
   * Specifies whether this is for a Amazon CloudFront distribution (`CLOUDFRONT`) or for a regional application (`REGIONAL`).
   *
   * @public
   */
  Scope: Scope | undefined;

  /**
   * The currency for the revenue amounts in the response.
   *
   * @public
   */
  Currency: Currency | undefined;

  /**
   * The dimension to group results by: `NAME`, `CATEGORY`, `INTENT`, `ORGANIZATION`, or `WEBACL`. Required when `StatisticType` is `TOP_SOURCES_BY_REVENUE`. Not required for `TOP_PATHS_BY_REVENUE`, where results are grouped by content path. If `StatisticType` is `TOP_SOURCES_BY_REVENUE` and `GroupBy` is omitted, the request is rejected with a `WAFInvalidParameterException`.
   *
   * @public
   */
  GroupBy?: GroupByType | undefined;

  /**
   * Optional filters to narrow the results.
   *
   * @public
   */
  Filters?: MonetizationFilter[] | undefined;

  /**
   * When you get a paginated response, this marker indicates that additional results are available. Use it in a subsequent request to retrieve the next page of results.
   *
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * The maximum number of results to return.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * The field to sort results by: `REVENUE`, `PERCENTAGE`, or `NAME`.
   *
   * @public
   */
  SortBy?: RankingSortBy | undefined;

  /**
   * The sort order: `ASC` for ascending or `DESC` for descending.
   *
   * @public
   */
  SortOrder?: SortOrder | undefined;
}

/**
 * Revenue statistics for a single content path, including the path, revenue amount, and request count.
 *
 * @public
 */
export interface RevenuePathStatistics {
  /**
   * The URI path.
   *
   * @public
   */
  Path: string | undefined;

  /**
   * The percentage of total revenue from this path.
   *
   * @public
   */
  Percentage: number | undefined;

  /**
   * The total revenue amount from this path in the specified currency.
   *
   * @public
   */
  Amount: string | undefined;

  /**
   * The number of monetized requests to this path.
   *
   * @public
   */
  RequestCount: number | undefined;
}

/**
 * Revenue statistics for a single AI bot source, including the bot name, revenue amount, request count, and verification status.
 *
 * @public
 */
export interface SourceStatistics {
  /**
   * The name of the AI bot.
   *
   * @public
   */
  SourceName: string | undefined;

  /**
   * The percentage of total revenue from this source.
   *
   * @public
   */
  Percentage: number | undefined;

  /**
   * The total revenue amount from this source in the specified currency.
   *
   * @public
   */
  Amount: string | undefined;

  /**
   * The number of monetized requests from this source.
   *
   * @public
   */
  RequestCount: number | undefined;

  /**
   * The category of this AI bot source.
   *
   * @public
   */
  SourceCategory?: string | undefined;

  /**
   * The declared intent of the AI bot (for example, summarize, index, or train).
   *
   * @public
   */
  Intent?: string | undefined;

  /**
   * The organization associated with the AI bot.
   *
   * @public
   */
  Organization?: string | undefined;

  /**
   * Indicates whether the AI bot's identity was verified — for example, through a cryptographically signed request (Web Bot Auth) or another published verification method. This value is meaningful only when GroupBy is NAME, where each result represents a single, identifiable bot. For all other GroupBy values (CATEGORY, INTENT, ORGANIZATION, or WEBACL), a result aggregates multiple bots that may have different verification states, so Verified is always returned as false and should be ignored. Type and required-ness are unchanged (Boolean, optional).
   *
   * @public
   */
  Verified?: boolean | undefined;

  /**
   * The value for the group-by dimension, when grouping is applied.
   *
   * @public
   */
  GroupByValue?: string | undefined;
}

/**
 * @public
 */
export interface GetRevenueStatisticsResponse {
  /**
   * Statistics for top revenue sources (AI bots). Populated when `StatisticType` is `TOP_SOURCES_BY_REVENUE`.
   *
   * @public
   */
  SourceStatistics?: SourceStatistics[] | undefined;

  /**
   * Statistics for top revenue paths. Populated when `StatisticType` is `TOP_PATHS_BY_REVENUE`.
   *
   * @public
   */
  RevenuePathStatistics?: RevenuePathStatistics[] | undefined;

  /**
   * When you get a paginated response, this marker indicates that additional results are available.
   *
   * @public
   */
  NextMarker?: string | undefined;
}

/**
 * @public
 */
export interface GetRevenueStatisticsSummaryRequest {
  /**
   * The time range for the revenue summary query. Specify start and end timestamps.
   *
   * @public
   */
  TimeWindow: TimeWindow | undefined;

  /**
   * Specifies whether this is for a Amazon CloudFront distribution (`CLOUDFRONT`) or for a regional application (`REGIONAL`). AI bot monetization is only available for `CLOUDFRONT` scope.
   *
   * @public
   */
  Scope: Scope | undefined;

  /**
   * The currency for the revenue amounts in the response. Currently only `USDC` is supported.
   *
   * @public
   */
  Currency: Currency | undefined;

  /**
   * Optional filters to narrow the results. You can filter by source name, category, organization, intent, verified status, content path, web ACL ARN, or currency mode.
   *
   * @public
   */
  Filters?: MonetizationFilter[] | undefined;
}

/**
 * A summary of AI bot monetization revenue, including total revenue, revenue by verification tier, and request counts.
 *
 * @public
 */
export interface RevenueBreakdown {
  /**
   * The total revenue amount in the specified currency.
   *
   * @public
   */
  TotalAmount?: string | undefined;

  /**
   * The revenue amount from verified AI bots.
   *
   * @public
   */
  VerifiedAmount?: string | undefined;

  /**
   * The revenue amount from unverified AI bots.
   *
   * @public
   */
  UnverifiedAmount?: string | undefined;

  /**
   * The currency of the revenue amounts.
   *
   * @public
   */
  Currency?: Currency | undefined;

  /**
   * The total number of successfully settled payment transactions.
   *
   * @public
   */
  TotalSettled?: number | undefined;

  /**
   * The total number of HTTP 402 Payment Required responses served to AI agents.
   *
   * @public
   */
  TotalMonetizeServed?: number | undefined;
}

/**
 * @public
 */
export interface GetRevenueStatisticsSummaryResponse {
  /**
   * The revenue breakdown summary for the specified time window and filters.
   *
   * @public
   */
  RevenueBreakdown?: RevenueBreakdown | undefined;
}

/**
 * @public
 */
export interface GetRevenueStatisticsTimeSeriesRequest {
  /**
   * The type of time series data to retrieve: `DATE_HISTOGRAM` for revenue over time, or `PAYMENT_TRAFFIC` for payment traffic patterns.
   *
   * @public
   */
  StatisticType: TimeSeriesStatisticType | undefined;

  /**
   * The time range for the query. Specify start and end timestamps.
   *
   * @public
   */
  TimeWindow: TimeWindow | undefined;

  /**
   * Specifies whether this is for a Amazon CloudFront distribution (`CLOUDFRONT`) or for a regional application (`REGIONAL`).
   *
   * @public
   */
  Scope: Scope | undefined;

  /**
   * The time interval for aggregating data points: `MINUTELY`, `FIVE_MINUTELY`, `HOURLY`, or `DAILY`.
   *
   * @public
   */
  Interval: IntervalType | undefined;

  /**
   * The currency for the amounts in the response.
   *
   * @public
   */
  Currency: Currency | undefined;

  /**
   * The dimension to group results by.
   *
   * @public
   */
  GroupBy?: GroupByType | undefined;

  /**
   * Optional filters to narrow the results.
   *
   * @public
   */
  Filters?: MonetizationFilter[] | undefined;

  /**
   * The maximum number of data points to return. Minimum: 1. Maximum: 10000.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * When you get a paginated response, this marker indicates that additional results are available.
   *
   * @public
   */
  NextMarker?: string | undefined;
}

/**
 * A single data point in a revenue time series, representing aggregated monetization metrics for a specific time interval.
 *
 * @public
 */
export interface DataPointEntry {
  /**
   * The timestamp for this data point.
   *
   * @public
   */
  Date?: Date | undefined;

  /**
   * The number of HTTP 402 Payment Required responses served during this interval.
   *
   * @public
   */
  MonetizeServedCount?: number | undefined;

  /**
   * The number of successfully settled payments during this interval.
   *
   * @public
   */
  SettledCount?: number | undefined;

  /**
   * The total revenue amount during this interval in the specified currency.
   *
   * @public
   */
  TotalAmount?: string | undefined;

  /**
   * The bot category for this data point, when grouped by category.
   *
   * @public
   */
  Category?: string | undefined;

  /**
   * The intent classification for this data point, when grouped by intent.
   *
   * @public
   */
  Intent?: string | undefined;

  /**
   * The group-by dimension value for this data point.
   *
   * @public
   */
  GroupByValue?: string | undefined;
}

/**
 * @public
 */
export interface GetRevenueStatisticsTimeSeriesResponse {
  /**
   * The list of time series data points.
   *
   * @public
   */
  DataPoints?: DataPointEntry[] | undefined;

  /**
   * When you get a paginated response, this marker indicates that additional results are available.
   *
   * @public
   */
  NextMarker?: string | undefined;
}

/**
 * @public
 */
export interface GetRuleGroupRequest {
  /**
   * The name of the rule group. You cannot change the name of a rule group after you create it.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Specifies whether this is for a global resource type, such as a Amazon CloudFront distribution. For an Amplify application, use `CLOUDFRONT`.
   *
   * To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows:
   *
   * - CLI - Specify the Region when you use the CloudFront scope: `--scope=CLOUDFRONT --region=us-east-1`.
   * - API and SDKs - For all calls, use the Region endpoint us-east-1.
   *
   * @public
   */
  Scope?: Scope | undefined;

  /**
   * A unique identifier for the rule group. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the entity.
   *
   * @public
   */
  ARN?: string | undefined;
}

/**
 * @public
 */
export interface GetSampledRequestsRequest {
  /**
   * The Amazon resource name (ARN) of the `WebACL` for which you want a sample of requests.
   *
   * @public
   */
  WebAclArn: string | undefined;

  /**
   * The metric name assigned to the `Rule` or `RuleGroup` dimension for which you want a sample of requests.
   *
   * @public
   */
  RuleMetricName: string | undefined;

  /**
   * Specifies whether this is for a global resource type, such as a Amazon CloudFront distribution. For an Amplify application, use `CLOUDFRONT`.
   *
   * To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows:
   *
   * - CLI - Specify the Region when you use the CloudFront scope: `--scope=CLOUDFRONT --region=us-east-1`.
   * - API and SDKs - For all calls, use the Region endpoint us-east-1.
   *
   * @public
   */
  Scope: Scope | undefined;

  /**
   * The start date and time and the end date and time of the range for which you want `GetSampledRequests` to return a sample of requests. You must specify the times in Coordinated Universal Time (UTC) format. UTC format includes the special designator, `Z`. For example, `"2016-09-27T14:50Z"`. You can specify any time range in the previous three hours. If you specify a start time that's earlier than three hours ago, WAF sets it to three hours ago.
   *
   * @public
   */
  TimeWindow: TimeWindow | undefined;

  /**
   * The number of requests that you want WAF to return from among the first 5,000 requests that your Amazon Web Services resource received during the time range. If your resource received fewer requests than the value of `MaxItems`, `GetSampledRequests` returns information about all of them.
   *
   * @public
   */
  MaxItems: number | undefined;
}

/**
 * The result from the inspection of the web request for a valid `CAPTCHA` token.
 *
 * @public
 */
export interface CaptchaResponse {
  /**
   * The HTTP response code indicating the status of the `CAPTCHA` token in the web request. If the token is missing, invalid, or expired, this code is `405 Method Not Allowed`.
   *
   * @public
   */
  ResponseCode?: number | undefined;

  /**
   * The time that the `CAPTCHA` was last solved for the supplied token.
   *
   * @public
   */
  SolveTimestamp?: number | undefined;

  /**
   * The reason for failure, populated when the evaluation of the token fails.
   *
   * @public
   */
  FailureReason?: FailureReason | undefined;
}

/**
 * The result from the inspection of the web request for a valid challenge token.
 *
 * @public
 */
export interface ChallengeResponse {
  /**
   * The HTTP response code indicating the status of the challenge token in the web request. If the token is missing, invalid, or expired, this code is `202 Request Accepted`.
   *
   * @public
   */
  ResponseCode?: number | undefined;

  /**
   * The time that the challenge was last solved for the supplied token.
   *
   * @public
   */
  SolveTimestamp?: number | undefined;

  /**
   * The reason for failure, populated when the evaluation of the token fails.
   *
   * @public
   */
  FailureReason?: FailureReason | undefined;
}

/**
 * Part of the response from GetSampledRequests. This is a complex type that appears as `Headers` in the response syntax. `HTTPHeader` contains the names and values of all of the headers that appear in one of the web requests.
 *
 * @public
 */
export interface HTTPHeader {
  /**
   * The name of the HTTP header.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The value of the HTTP header.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * Part of the response from GetSampledRequests. This is a complex type that appears as `Request` in the response syntax. `HTTPRequest` contains information about one of the web requests.
 *
 * @public
 */
export interface HTTPRequest {
  /**
   * The IP address that the request originated from. If the web ACL is associated with a CloudFront distribution, this is the value of one of the following fields in CloudFront access logs:
   *
   * - `c-ip`, if the viewer did not use an HTTP proxy or a load balancer to send the request
   * - `x-forwarded-for`, if the viewer did use an HTTP proxy or a load balancer to send the request
   *
   * @public
   */
  ClientIP?: string | undefined;

  /**
   * The two-letter country code for the country that the request originated from. For a current list of country codes, see the Wikipedia entry [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).
   *
   * @public
   */
  Country?: string | undefined;

  /**
   * The URI path of the request, which identifies the resource, for example, `/images/daily-ad.jpg`.
   *
   * @public
   */
  URI?: string | undefined;

  /**
   * The HTTP method specified in the sampled web request.
   *
   * @public
   */
  Method?: string | undefined;

  /**
   * The HTTP version specified in the sampled web request, for example, `HTTP/1.1`.
   *
   * @public
   */
  HTTPVersion?: string | undefined;

  /**
   * A complex type that contains the name and value for each header in the sampled web request.
   *
   * @public
   */
  Headers?: HTTPHeader[] | undefined;
}

/**
 * Represents a single sampled web request. The response from GetSampledRequests includes a `SampledHTTPRequests` complex type that appears as `SampledRequests` in the response syntax. `SampledHTTPRequests` contains an array of `SampledHTTPRequest` objects.
 *
 * @public
 */
export interface SampledHTTPRequest {
  /**
   * A complex type that contains detailed information about the request.
   *
   * @public
   */
  Request: HTTPRequest | undefined;

  /**
   * A value that indicates how one result in the response relates proportionally to other results in the response. For example, a result that has a weight of `2` represents roughly twice as many web requests as a result that has a weight of `1`.
   *
   * @public
   */
  Weight: number | undefined;

  /**
   * The time at which WAF received the request from your Amazon Web Services resource, in Unix time format (in seconds).
   *
   * @public
   */
  Timestamp?: Date | undefined;

  /**
   * The action that WAF applied to the request.
   *
   * @public
   */
  Action?: string | undefined;

  /**
   * The name of the `Rule` that the request matched. For managed rule groups, the format for this name is `<vendor name>#<managed rule group name>#<rule name>`. For your own rule groups, the format for this name is `<rule group name>#<rule name>`. If the rule is not in a rule group, this field is absent.
   *
   * @public
   */
  RuleNameWithinRuleGroup?: string | undefined;

  /**
   * Custom request headers inserted by WAF into the request, according to the custom request configuration for the matching rule action.
   *
   * @public
   */
  RequestHeadersInserted?: HTTPHeader[] | undefined;

  /**
   * The response code that was sent for the request.
   *
   * @public
   */
  ResponseCodeSent?: number | undefined;

  /**
   * Labels applied to the web request by matching rules. WAF applies fully qualified labels to matching web requests. A fully qualified label is the concatenation of a label namespace and a rule label. The rule's rule group or web ACL defines the label namespace.
   *
   * For example, `awswaf:111122223333:myRuleGroup:testRules:testNS1:testNS2:labelNameA` or `awswaf:managed:aws:managed-rule-set:header:encoding:utf8`.
   *
   * @public
   */
  Labels?: Label[] | undefined;

  /**
   * The `CAPTCHA` response for the request.
   *
   * @public
   */
  CaptchaResponse?: CaptchaResponse | undefined;

  /**
   * The `Challenge` response for the request.
   *
   * @public
   */
  ChallengeResponse?: ChallengeResponse | undefined;

  /**
   * Used only for rule group rules that have a rule action override in place in the web ACL. This is the action that the rule group rule is configured for, and not the action that was applied to the request. The action that WAF applied is the `Action` value.
   *
   * @public
   */
  OverriddenAction?: string | undefined;
}

/**
 * @public
 */
export interface GetSampledRequestsResponse {
  /**
   * A complex type that contains detailed information about each of the requests in the sample.
   *
   * @public
   */
  SampledRequests?: SampledHTTPRequest[] | undefined;

  /**
   * The total number of requests from which `GetSampledRequests` got a sample of `MaxItems` requests. If `PopulationSize` is less than `MaxItems`, the sample includes every request that your Amazon Web Services resource received during the specified time range.
   *
   * @public
   */
  PopulationSize?: number | undefined;

  /**
   * Usually, `TimeWindow` is the time range that you specified in the `GetSampledRequests` request. However, if your Amazon Web Services resource received more than 5,000 requests during the time range that you specified in the request, `GetSampledRequests` returns the time range for the first 5,000 requests. Times are in Coordinated Universal Time (UTC) format.
   *
   * @public
   */
  TimeWindow?: TimeWindow | undefined;
}

/**
 * @public
 */
export interface GetTopPathStatisticsByTrafficRequest {
  /**
   * The Amazon Resource Name (ARN) of the web ACL for which you want to retrieve path statistics.
   *
   * @public
   */
  WebAclArn: string | undefined;

  /**
   * Specifies whether the web ACL is for an Amazon Web Services CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer, an AppSync GraphQL API, an Amazon Cognito user pool, an Amazon Web Services App Runner service, or an Amazon Web Services Verified Access instance.
   *
   * @public
   */
  Scope: Scope | undefined;

  /**
   * A URI path prefix to filter the results. When you specify this parameter, the operation returns statistics for individual URIs within the specified path prefix. For example, if you specify `/api`, the response includes statistics for paths like `/api/v1/users` and `/api/v2/orders`. If you don't specify this parameter, the operation returns top-level path statistics.
   *
   * @public
   */
  UriPathPrefix?: string | undefined;

  /**
   * The time window for which you want to retrieve path statistics. The time window must be within the data retention period for your web ACL.
   *
   * @public
   */
  TimeWindow: TimeWindow | undefined;

  /**
   * Filters the results to include only traffic from bots in the specified category. For example, you can filter by `ai` to see only AI crawler traffic, or `search_engine` to see only search engine bot traffic. When you apply this filter, the `Source` field is populated in the response.
   *
   * @public
   */
  BotCategory?: string | undefined;

  /**
   * Filters the results to include only traffic from bots belonging to the specified organization. For example, you can filter by `openai` or `google`. When you apply this filter, the `Source` field is populated in the response.
   *
   * @public
   */
  BotOrganization?: string | undefined;

  /**
   * Filters the results to include only traffic from the specified bot. For example, you can filter by `gptbot` or `googlebot`. When you apply this filter, the `Source` field is populated in the response.
   *
   * @public
   */
  BotName?: string | undefined;

  /**
   * The maximum number of path statistics to return. Valid values are 1 to 100.
   *
   * @public
   */
  Limit: number | undefined;

  /**
   * The maximum number of top bots to include in the statistics for each path. Valid values are 1 to 10.
   *
   * @public
   */
  NumberOfTopTrafficBotsPerPath: number | undefined;

  /**
   * When you request a list of objects with a `Limit` setting, if the number of objects that are still available for retrieval exceeds the limit, WAF returns a `NextMarker` value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.
   *
   * @public
   */
  NextMarker?: string | undefined;
}

/**
 * Information about the bot filter that was applied to the request. This structure is populated in the response when you filter by bot category, organization, or name.
 *
 * @public
 */
export interface FilterSource {
  /**
   * The bot category that was used to filter the results. For example, `ai` or `search_engine`.
   *
   * @public
   */
  BotCategory?: string | undefined;

  /**
   * The bot organization that was used to filter the results. For example, `OpenAI` or `Google`.
   *
   * @public
   */
  BotOrganization?: string | undefined;

  /**
   * The bot name that was used to filter the results. For example, `gptbot` or `googlebot`.
   *
   * @public
   */
  BotName?: string | undefined;
}

/**
 * Statistics about a specific bot's traffic to a path, including the bot name, request count, and percentage of traffic.
 *
 * @public
 */
export interface BotStatistics {
  /**
   * The name of the bot. For example, `gptbot` or `googlebot`.
   *
   * @public
   */
  BotName: string | undefined;

  /**
   * The number of requests from this bot to the associated path within the specified time window.
   *
   * @public
   */
  RequestCount: number | undefined;

  /**
   * The percentage of total requests to the associated path that came from this bot.
   *
   * @public
   */
  Percentage: number | undefined;
}

/**
 * Statistics about bot traffic to a specific URI path, including the path, request count, percentage of total traffic, and the top bots accessing that path.
 *
 * @public
 */
export interface PathStatistics {
  /**
   * Information about the bot filter that was applied to generate these statistics. This field is only populated when you filter by bot category, organization, or name.
   *
   * @public
   */
  Source?: FilterSource | undefined;

  /**
   * The URI path. For example, `/api/` or `/api/v1/users`.
   *
   * @public
   */
  Path: string | undefined;

  /**
   * The number of requests to this path within the specified time window.
   *
   * @public
   */
  RequestCount: number | undefined;

  /**
   * The percentage of total requests that were made to this path.
   *
   * @public
   */
  Percentage: number | undefined;

  /**
   * The list of top bots accessing this path, ordered by request count. The number of bots included is determined by the `NumberOfTopTrafficBotsPerPath` parameter in the request.
   *
   * @public
   */
  TopBots?: BotStatistics[] | undefined;
}

/**
 * @public
 */
export interface GetTopPathStatisticsByTrafficResponse {
  /**
   * The list of path statistics, ordered by request count. Each entry includes the path, request count, percentage of total traffic, and the top bots accessing that path.
   *
   * @public
   */
  PathStatistics: PathStatistics[] | undefined;

  /**
   * The total number of requests that match the query criteria within the specified time window.
   *
   * @public
   */
  TotalRequestCount: number | undefined;

  /**
   * When you request a list of objects with a `Limit` setting, if the number of objects that are still available for retrieval exceeds the limit, WAF returns a `NextMarker` value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.
   *
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * Category-level aggregations for visualizing bot category to path relationships. This field is only populated when no bot filters are applied to the request. Each entry includes the bot category and the paths accessed by bots in that category.
   *
   * @public
   */
  TopCategories?: PathStatistics[] | undefined;
}

/**
 * @public
 */
export interface GetWebACLRequest {
  /**
   * The name of the web ACL. You cannot change the name of a web ACL after you create it.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Specifies whether this is for a global resource type, such as a Amazon CloudFront distribution. For an Amplify application, use `CLOUDFRONT`.
   *
   * To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows:
   *
   * - CLI - Specify the Region when you use the CloudFront scope: `--scope=CLOUDFRONT --region=us-east-1`.
   * - API and SDKs - For all calls, use the Region endpoint us-east-1.
   *
   * @public
   */
  Scope?: Scope | undefined;

  /**
   * The unique identifier for the web ACL. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the web ACL that you want to retrieve.
   *
   * @public
   */
  ARN?: string | undefined;
}

/**
 * @public
 */
export interface GetWebACLForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource whose web ACL you want to retrieve.
   *
   * The ARN must be in one of the following formats:
   *
   * - For an Application Load Balancer: `arn:partition:elasticloadbalancing:region:account-id:loadbalancer/app/load-balancer-name/load-balancer-id`
   * - For an Amazon API Gateway REST API: `arn:partition:apigateway:region::/restapis/api-id/stages/stage-name`
   * - For an AppSync GraphQL API: `arn:partition:appsync:region:account-id:apis/GraphQLApiId`
   * - For an Amazon Cognito user pool: `arn:partition:cognito-idp:region:account-id:userpool/user-pool-id`
   * - For an App Runner service: `arn:partition:apprunner:region:account-id:service/apprunner-service-name/apprunner-service-id`
   * - For an Amazon Web Services Verified Access instance: `arn:partition:ec2:region:account-id:verified-access-instance/instance-id`
   * - For an Amplify application: `arn:partition:amplify:region:account-id:apps/app-id`
   * - For an Amazon Bedrock AgentCore Gateway: `arn:partition:bedrock-agentcore:region:account-id:gateway/gateway-id`
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListAPIKeysRequest {
  /**
   * Specifies whether this is for a global resource type, such as a Amazon CloudFront distribution. For an Amplify application, use `CLOUDFRONT`.
   *
   * To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows:
   *
   * - CLI - Specify the Region when you use the CloudFront scope: `--scope=CLOUDFRONT --region=us-east-1`.
   * - API and SDKs - For all calls, use the Region endpoint us-east-1.
   *
   * @public
   */
  Scope: Scope | undefined;

  /**
   * When you request a list of objects with a `Limit` setting, if the number of objects that are still available for retrieval exceeds the limit, WAF returns a `NextMarker` value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.
   *
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * The maximum number of objects that you want WAF to return for this request. If more objects are available, in the response, WAF provides a `NextMarker` value that you can use in a subsequent call to get the next batch of objects.
   *
   * @public
   */
  Limit?: number | undefined;
}

/**
 * @public
 */
export interface ListAPIKeysResponse {
  /**
   * When you request a list of objects with a `Limit` setting, if the number of objects that are still available for retrieval exceeds the limit, WAF returns a `NextMarker` value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.
   *
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * The array of key summaries. If you specified a `Limit` in your request, this might not be the full list.
   *
   * @public
   */
  APIKeySummaries?: APIKeySummary[] | undefined;

  /**
   * The CAPTCHA application integration URL, for use in your JavaScript implementation.
   *
   * @public
   */
  ApplicationIntegrationURL?: string | undefined;
}

/**
 * @public
 */
export interface ListAvailableManagedRuleGroupsRequest {
  /**
   * Specifies whether this is for a global resource type, such as a Amazon CloudFront distribution. For an Amplify application, use `CLOUDFRONT`.
   *
   * To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows:
   *
   * - CLI - Specify the Region when you use the CloudFront scope: `--scope=CLOUDFRONT --region=us-east-1`.
   * - API and SDKs - For all calls, use the Region endpoint us-east-1.
   *
   * @public
   */
  Scope: Scope | undefined;

  /**
   * When you request a list of objects with a `Limit` setting, if the number of objects that are still available for retrieval exceeds the limit, WAF returns a `NextMarker` value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.
   *
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * The maximum number of objects that you want WAF to return for this request. If more objects are available, in the response, WAF provides a `NextMarker` value that you can use in a subsequent call to get the next batch of objects.
   *
   * @public
   */
  Limit?: number | undefined;
}

/**
 * High-level information about a managed rule group, returned by ListAvailableManagedRuleGroups. This provides information like the name and vendor name, that you provide when you add a ManagedRuleGroupStatement to a web ACL. Managed rule groups include Amazon Web Services Managed Rules rule groups and Amazon Web Services Marketplace managed rule groups. To use any Amazon Web Services Marketplace managed rule group, first subscribe to the rule group through Amazon Web Services Marketplace.
 *
 * @public
 */
export interface ManagedRuleGroupSummary {
  /**
   * The name of the managed rule group vendor. You use this, along with the rule group name, to identify a rule group.
   *
   * @public
   */
  VendorName?: string | undefined;

  /**
   * The name of the managed rule group. You use this, along with the vendor name, to identify the rule group.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Indicates whether the managed rule group is versioned. If it is, you can retrieve the versions list by calling ListAvailableManagedRuleGroupVersions.
   *
   * @public
   */
  VersioningSupported?: boolean | undefined;

  /**
   * The description of the managed rule group, provided by Amazon Web Services Managed Rules or the Amazon Web Services Marketplace seller who manages it.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface ListAvailableManagedRuleGroupsResponse {
  /**
   * When you request a list of objects with a `Limit` setting, if the number of objects that are still available for retrieval exceeds the limit, WAF returns a `NextMarker` value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.
   *
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * Array of managed rule groups that you can use. If you specified a `Limit` in your request, this might not be the full list.
   *
   * @public
   */
  ManagedRuleGroups?: ManagedRuleGroupSummary[] | undefined;
}

/**
 * @public
 */
export interface ListAvailableManagedRuleGroupVersionsRequest {
  /**
   * The name of the managed rule group vendor. You use this, along with the rule group name, to identify a rule group.
   *
   * @public
   */
  VendorName: string | undefined;

  /**
   * The name of the managed rule group. You use this, along with the vendor name, to identify the rule group.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Specifies whether this is for a global resource type, such as a Amazon CloudFront distribution. For an Amplify application, use `CLOUDFRONT`.
   *
   * To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows:
   *
   * - CLI - Specify the Region when you use the CloudFront scope: `--scope=CLOUDFRONT --region=us-east-1`.
   * - API and SDKs - For all calls, use the Region endpoint us-east-1.
   *
   * @public
   */
  Scope: Scope | undefined;

  /**
   * When you request a list of objects with a `Limit` setting, if the number of objects that are still available for retrieval exceeds the limit, WAF returns a `NextMarker` value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.
   *
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * The maximum number of objects that you want WAF to return for this request. If more objects are available, in the response, WAF provides a `NextMarker` value that you can use in a subsequent call to get the next batch of objects.
   *
   * @public
   */
  Limit?: number | undefined;
}

/**
 * Describes a single version of a managed rule group.
 *
 * @public
 */
export interface ManagedRuleGroupVersion {
  /**
   * The version name.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The date and time that the managed rule group owner updated the rule group version information.
   *
   * @public
   */
  LastUpdateTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface ListAvailableManagedRuleGroupVersionsResponse {
  /**
   * When you request a list of objects with a `Limit` setting, if the number of objects that are still available for retrieval exceeds the limit, WAF returns a `NextMarker` value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.
   *
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * The versions that are currently available for the specified managed rule group. If you specified a `Limit` in your request, this might not be the full list.
   *
   * @public
   */
  Versions?: ManagedRuleGroupVersion[] | undefined;

  /**
   * The name of the version that's currently set as the default.
   *
   * @public
   */
  CurrentDefaultVersion?: string | undefined;
}

/**
 * @public
 */
export interface ListIPSetsRequest {
  /**
   * Specifies whether this is for a global resource type, such as a Amazon CloudFront distribution. For an Amplify application, use `CLOUDFRONT`.
   *
   * To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows:
   *
   * - CLI - Specify the Region when you use the CloudFront scope: `--scope=CLOUDFRONT --region=us-east-1`.
   * - API and SDKs - For all calls, use the Region endpoint us-east-1.
   *
   * @public
   */
  Scope: Scope | undefined;

  /**
   * When you request a list of objects with a `Limit` setting, if the number of objects that are still available for retrieval exceeds the limit, WAF returns a `NextMarker` value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.
   *
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * The maximum number of objects that you want WAF to return for this request. If more objects are available, in the response, WAF provides a `NextMarker` value that you can use in a subsequent call to get the next batch of objects.
   *
   * @public
   */
  Limit?: number | undefined;
}

/**
 * @public
 */
export interface ListIPSetsResponse {
  /**
   * When you request a list of objects with a `Limit` setting, if the number of objects that are still available for retrieval exceeds the limit, WAF returns a `NextMarker` value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.
   *
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * Array of IPSets. If you specified a `Limit` in your request, this might not be the full list.
   *
   * @public
   */
  IPSets?: IPSetSummary[] | undefined;
}

/**
 * @public
 */
export interface ListLoggingConfigurationsRequest {
  /**
   * Specifies whether this is for a global resource type, such as a Amazon CloudFront distribution. For an Amplify application, use `CLOUDFRONT`.
   *
   * To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows:
   *
   * - CLI - Specify the Region when you use the CloudFront scope: `--scope=CLOUDFRONT --region=us-east-1`.
   * - API and SDKs - For all calls, use the Region endpoint us-east-1.
   *
   * @public
   */
  Scope: Scope | undefined;

  /**
   * When you request a list of objects with a `Limit` setting, if the number of objects that are still available for retrieval exceeds the limit, WAF returns a `NextMarker` value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.
   *
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * The maximum number of objects that you want WAF to return for this request. If more objects are available, in the response, WAF provides a `NextMarker` value that you can use in a subsequent call to get the next batch of objects.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * The owner of the logging configuration, which must be set to `CUSTOMER` for the configurations that you manage.
   *
   * The log scope `SECURITY_LAKE` indicates a configuration that is managed through Amazon Security Lake. You can use Security Lake to collect log and event data from various sources for normalization, analysis, and management. For information, see [Collecting data from Amazon Web Services services](https://docs.aws.amazon.com/security-lake/latest/userguide/internal-sources.html) in the *Amazon Security Lake user guide*.
   *
   * The log scope `CLOUDWATCH_TELEMETRY_RULE_MANAGED` indicates a configuration that is managed through Amazon CloudWatch Logs for telemetry data collection and analysis. For information, see [What is Amazon CloudWatch Logs ?](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/WhatIsCloudWatchLogs.html) in the *Amazon CloudWatch Logs user guide*.
   *
   * Default: `CUSTOMER`
   *
   * @public
   */
  LogScope?: LogScope | undefined;
}

/**
 * @public
 */
export interface ListLoggingConfigurationsResponse {
  /**
   * Array of logging configurations. If you specified a `Limit` in your request, this might not be the full list.
   *
   * @public
   */
  LoggingConfigurations?: LoggingConfiguration[] | undefined;

  /**
   * When you request a list of objects with a `Limit` setting, if the number of objects that are still available for retrieval exceeds the limit, WAF returns a `NextMarker` value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.
   *
   * @public
   */
  NextMarker?: string | undefined;
}

/**
 * @public
 */
export interface ListManagedRuleSetsRequest {
  /**
   * Specifies whether this is for a global resource type, such as a Amazon CloudFront distribution. For an Amplify application, use `CLOUDFRONT`.
   *
   * To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows:
   *
   * - CLI - Specify the Region when you use the CloudFront scope: `--scope=CLOUDFRONT --region=us-east-1`.
   * - API and SDKs - For all calls, use the Region endpoint us-east-1.
   *
   * @public
   */
  Scope: Scope | undefined;

  /**
   * When you request a list of objects with a `Limit` setting, if the number of objects that are still available for retrieval exceeds the limit, WAF returns a `NextMarker` value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.
   *
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * The maximum number of objects that you want WAF to return for this request. If more objects are available, in the response, WAF provides a `NextMarker` value that you can use in a subsequent call to get the next batch of objects.
   *
   * @public
   */
  Limit?: number | undefined;
}

/**
 * High-level information for a managed rule set.
 *
 * > **Note:**
 * >
 * > This is intended for use only by vendors of managed rule sets. Vendors are Amazon Web Services and Amazon Web Services Marketplace sellers.
 * >
 * > Vendors, you can use the managed rule set APIs to provide controlled rollout of your versioned managed rule group offerings for your customers. The APIs are `ListManagedRuleSets`, `GetManagedRuleSet`, `PutManagedRuleSetVersions`, and `UpdateManagedRuleSetVersionExpiryDate`.
 *
 * @public
 */
export interface ManagedRuleSetSummary {
  /**
   * The name of the managed rule set. You use this, along with the rule set ID, to identify the rule set.
   *
   * This name is assigned to the corresponding managed rule group, which your customers can access and use.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A unique identifier for the managed rule set. The ID is returned in the responses to commands like `list`. You provide it to operations like `get` and `update`.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * A description of the set that helps with identification.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A token used for optimistic locking. WAF returns a token to your `get` and `list` requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like `update` and `delete`. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a `WAFOptimisticLockException`. If this happens, perform another `get`, and use the new token returned by that operation.
   *
   * @public
   */
  LockToken?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the entity.
   *
   * @public
   */
  ARN?: string | undefined;

  /**
   * The label namespace prefix for the managed rule groups that are offered to customers from this managed rule set. All labels that are added by rules in the managed rule group have this prefix.
   *
   * - The syntax for the label namespace prefix for a managed rule group is the following:
   *
   *   `awswaf:managed:<vendor>:<rule group name>`:
   * - When a rule with a label matches a web request, WAF adds the fully qualified label to the request. A fully qualified label is made up of the label namespace from the rule group or web ACL where the rule is defined and the label from the rule, separated by a colon:
   *
   *   `<label namespace>:<label from rule>`
   *
   * @public
   */
  LabelNamespace?: string | undefined;
}

/**
 * @public
 */
export interface ListManagedRuleSetsResponse {
  /**
   * When you request a list of objects with a `Limit` setting, if the number of objects that are still available for retrieval exceeds the limit, WAF returns a `NextMarker` value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.
   *
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * Your managed rule sets. If you specified a `Limit` in your request, this might not be the full list.
   *
   * @public
   */
  ManagedRuleSets?: ManagedRuleSetSummary[] | undefined;
}

/**
 * @public
 */
export interface ListMobileSdkReleasesRequest {
  /**
   * The device platform to retrieve the list for.
   *
   * @public
   */
  Platform: Platform | undefined;

  /**
   * When you request a list of objects with a `Limit` setting, if the number of objects that are still available for retrieval exceeds the limit, WAF returns a `NextMarker` value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.
   *
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * The maximum number of objects that you want WAF to return for this request. If more objects are available, in the response, WAF provides a `NextMarker` value that you can use in a subsequent call to get the next batch of objects.
   *
   * @public
   */
  Limit?: number | undefined;
}

/**
 * High level information for an SDK release.
 *
 * @public
 */
export interface ReleaseSummary {
  /**
   * The release version.
   *
   * @public
   */
  ReleaseVersion?: string | undefined;

  /**
   * The timestamp of the release.
   *
   * @public
   */
  Timestamp?: Date | undefined;
}

/**
 * @public
 */
export interface ListMobileSdkReleasesResponse {
  /**
   * The high level information for the available SDK releases. If you specified a `Limit` in your request, this might not be the full list.
   *
   * @public
   */
  ReleaseSummaries?: ReleaseSummary[] | undefined;

  /**
   * When you request a list of objects with a `Limit` setting, if the number of objects that are still available for retrieval exceeds the limit, WAF returns a `NextMarker` value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.
   *
   * @public
   */
  NextMarker?: string | undefined;
}

/**
 * @public
 */
export interface ListRegexPatternSetsRequest {
  /**
   * Specifies whether this is for a global resource type, such as a Amazon CloudFront distribution. For an Amplify application, use `CLOUDFRONT`.
   *
   * To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows:
   *
   * - CLI - Specify the Region when you use the CloudFront scope: `--scope=CLOUDFRONT --region=us-east-1`.
   * - API and SDKs - For all calls, use the Region endpoint us-east-1.
   *
   * @public
   */
  Scope: Scope | undefined;

  /**
   * When you request a list of objects with a `Limit` setting, if the number of objects that are still available for retrieval exceeds the limit, WAF returns a `NextMarker` value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.
   *
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * The maximum number of objects that you want WAF to return for this request. If more objects are available, in the response, WAF provides a `NextMarker` value that you can use in a subsequent call to get the next batch of objects.
   *
   * @public
   */
  Limit?: number | undefined;
}

/**
 * @public
 */
export interface ListRegexPatternSetsResponse {
  /**
   * When you request a list of objects with a `Limit` setting, if the number of objects that are still available for retrieval exceeds the limit, WAF returns a `NextMarker` value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.
   *
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * Array of regex pattern sets. If you specified a `Limit` in your request, this might not be the full list.
   *
   * @public
   */
  RegexPatternSets?: RegexPatternSetSummary[] | undefined;
}

/**
 * @public
 */
export interface ListResourcesForWebACLRequest {
  /**
   * The Amazon Resource Name (ARN) of the web ACL.
   *
   * @public
   */
  WebACLArn: string | undefined;

  /**
   * Retrieves the web ACLs that are used by the specified resource type.
   *
   * For Amazon CloudFront, don't use this call. Instead, use the CloudFront call `ListDistributionsByWebACLId`. For information, see [ListDistributionsByWebACLId](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListDistributionsByWebACLId.html) in the *Amazon CloudFront API Reference*.
   *
   * > **Note:** If you don't provide a resource type, the call uses the resource type `APPLICATION_LOAD_BALANCER`.
   *
   * Default: `APPLICATION_LOAD_BALANCER`
   *
   * @public
   */
  ResourceType?: ResourceType | undefined;
}

/**
 * @public
 */
export interface ListResourcesForWebACLResponse {
  /**
   * The array of Amazon Resource Names (ARNs) of the associated resources.
   *
   * @public
   */
  ResourceArns?: string[] | undefined;
}

/**
 * @public
 */
export interface ListRuleGroupsRequest {
  /**
   * Specifies whether this is for a global resource type, such as a Amazon CloudFront distribution. For an Amplify application, use `CLOUDFRONT`.
   *
   * To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows:
   *
   * - CLI - Specify the Region when you use the CloudFront scope: `--scope=CLOUDFRONT --region=us-east-1`.
   * - API and SDKs - For all calls, use the Region endpoint us-east-1.
   *
   * @public
   */
  Scope: Scope | undefined;

  /**
   * When you request a list of objects with a `Limit` setting, if the number of objects that are still available for retrieval exceeds the limit, WAF returns a `NextMarker` value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.
   *
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * The maximum number of objects that you want WAF to return for this request. If more objects are available, in the response, WAF provides a `NextMarker` value that you can use in a subsequent call to get the next batch of objects.
   *
   * @public
   */
  Limit?: number | undefined;
}

/**
 * @public
 */
export interface ListRuleGroupsResponse {
  /**
   * When you request a list of objects with a `Limit` setting, if the number of objects that are still available for retrieval exceeds the limit, WAF returns a `NextMarker` value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.
   *
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * Array of rule groups. If you specified a `Limit` in your request, this might not be the full list.
   *
   * @public
   */
  RuleGroups?: RuleGroupSummary[] | undefined;
}

/**
 * @public
 */
export interface ListSettlementRecordsRequest {
  /**
   * The time range for the query. Specify start and end timestamps.
   *
   * @public
   */
  TimeWindow: TimeWindow | undefined;

  /**
   * Specifies whether this is for a Amazon CloudFront distribution (`CLOUDFRONT`) or for a regional application (`REGIONAL`).
   *
   * @public
   */
  Scope: Scope | undefined;

  /**
   * The currency for the amounts in the response.
   *
   * @public
   */
  Currency: Currency | undefined;

  /**
   * Optional filters to narrow the results. You can filter by payer address, status, source name, network, or other settlement fields.
   *
   * @public
   */
  Filters?: MonetizationFilter[] | undefined;

  /**
   * The field to sort settlement records by: `TIMESTAMP`, `AMOUNT`, `NAME`, or `STATUS`.
   *
   * @public
   */
  SortBy?: SettlementSortBy | undefined;

  /**
   * The sort order: `ASC` for ascending or `DESC` for descending.
   *
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * The maximum number of settlement records to return. Minimum: 1. Maximum: 100.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * When you get a paginated response, this marker indicates that additional results are available.
   *
   * @public
   */
  NextMarker?: string | undefined;
}

/**
 * A single settlement transaction record for AI bot monetization. Contains details about the payment including timestamp, amount, status, and the parties involved.
 *
 * @public
 */
export interface SettlementRecord {
  /**
   * The timestamp when the settlement was recorded.
   *
   * @public
   */
  Timestamp: Date | undefined;

  /**
   * The blockchain wallet address of the paying AI agent.
   *
   * @public
   */
  PayerAddress?: string | undefined;

  /**
   * Your receiving wallet address.
   *
   * @public
   */
  WalletAddress?: string | undefined;

  /**
   * The status of the settlement. Possible values:
   *
   * - `SETTLED` - The payment was successfully settled on the blockchain and the transfer from the payer's wallet to the publisher's wallet is confirmed. The `TransactionId` field contains the on-chain transaction hash. Content is served to the client.
   * - `PENDING` - The blockchain transaction has been submitted but not yet confirmed on-chain. This is a transient state that automatically resolves to either `SETTLED` or `FAILED`. No action is required. While pending, content is not served and the API returns a 402 response. Clients can retry the request.
   * - `FAILED` - The payment settlement was attempted but failed. Possible causes include insufficient funds, an expired payment authorization, or a reverted blockchain transaction. The `failureReason` field contains a machine-readable error code. Content is not served.
   * - `SERVICE_ERROR` - Settlement could not be completed due to an internal service issue or an issue with the payment network. Content is not served. The client's payment authorization remains valid and the request can be retried.
   * - `SKIPPED_ORIGIN_ERROR` - The origin returned a non-2xx response, so settlement was intentionally skipped. The client is not charged.
   * - `DUPLICATE` - A prior request with the same payment payload has already been settled. This status typically appears when a previous attempt timed out but the payment was ultimately processed. The client is not charged again.
   *
   * @public
   */
  Status: SettlementStatus | undefined;

  /**
   * The payment amount in the specified currency.
   *
   * @public
   */
  Amount: string | undefined;

  /**
   * The currency of the payment amount.
   *
   * @public
   */
  Currency?: Currency | undefined;

  /**
   * The blockchain network on which the settlement occurred.
   *
   * @public
   */
  Network?: string | undefined;

  /**
   * The blockchain transaction identifier. You can use this to verify the transaction on a blockchain explorer.
   *
   * @public
   */
  TransactionId?: string | undefined;

  /**
   * The WAF request ID associated with this settlement.
   *
   * @public
   */
  RequestId?: string | undefined;

  /**
   * The name of the AI bot that made the payment.
   *
   * @public
   */
  SourceName?: string | undefined;

  /**
   * The organization associated with the AI bot.
   *
   * @public
   */
  Organization?: string | undefined;

  /**
   * The category of the AI bot source.
   *
   * @public
   */
  SourceCategory?: string | undefined;

  /**
   * The declared intent of the AI bot request.
   *
   * @public
   */
  Intent?: string | undefined;

  /**
   * Whether the AI bot's identity was verified.
   *
   * @public
   */
  Verified?: boolean | undefined;

  /**
   * The content path that was accessed.
   *
   * @public
   */
  ContentPath?: string | undefined;

  /**
   * The ARN of the web ACL that processed the request.
   *
   * @public
   */
  WebAclArn?: string | undefined;

  /**
   * The timestamp of the original web request.
   *
   * @public
   */
  RequestTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface ListSettlementRecordsResponse {
  /**
   * The list of settlement records.
   *
   * @public
   */
  Settlements?: SettlementRecord[] | undefined;

  /**
   * When you get a paginated response, this marker indicates that additional results are available.
   *
   * @public
   */
  NextMarker?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * When you request a list of objects with a `Limit` setting, if the number of objects that are still available for retrieval exceeds the limit, WAF returns a `NextMarker` value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.
   *
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * The maximum number of objects that you want WAF to return for this request. If more objects are available, in the response, WAF provides a `NextMarker` value that you can use in a subsequent call to get the next batch of objects.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  ResourceARN: string | undefined;
}

/**
 * The collection of tagging definitions for an Amazon Web Services resource. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing or other management. Typically, the tag key represents a category, such as "environment", and the tag value represents a specific value within that category, such as "test," "development," or "production". Or you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each Amazon Web Services resource, up to 50 tags for a resource.
 *
 * You can tag the Amazon Web Services resources that you manage through WAF: web ACLs, rule groups, IP sets, and regex pattern sets. You can't manage or view tags through the WAF console.
 *
 * @public
 */
export interface TagInfoForResource {
  /**
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  ResourceARN?: string | undefined;

  /**
   * The array of Tag objects defined for the resource.
   *
   * @public
   */
  TagList?: Tag[] | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * When you request a list of objects with a `Limit` setting, if the number of objects that are still available for retrieval exceeds the limit, WAF returns a `NextMarker` value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.
   *
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * The collection of tagging definitions for the resource. If you specified a `Limit` in your request, this might not be the full list.
   *
   * @public
   */
  TagInfoForResource?: TagInfoForResource | undefined;
}

/**
 * @public
 */
export interface ListWebACLsRequest {
  /**
   * Specifies whether this is for a global resource type, such as a Amazon CloudFront distribution. For an Amplify application, use `CLOUDFRONT`.
   *
   * To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows:
   *
   * - CLI - Specify the Region when you use the CloudFront scope: `--scope=CLOUDFRONT --region=us-east-1`.
   * - API and SDKs - For all calls, use the Region endpoint us-east-1.
   *
   * @public
   */
  Scope: Scope | undefined;

  /**
   * When you request a list of objects with a `Limit` setting, if the number of objects that are still available for retrieval exceeds the limit, WAF returns a `NextMarker` value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.
   *
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * The maximum number of objects that you want WAF to return for this request. If more objects are available, in the response, WAF provides a `NextMarker` value that you can use in a subsequent call to get the next batch of objects.
   *
   * @public
   */
  Limit?: number | undefined;
}

/**
 * @public
 */
export interface ListWebACLsResponse {
  /**
   * When you request a list of objects with a `Limit` setting, if the number of objects that are still available for retrieval exceeds the limit, WAF returns a `NextMarker` value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.
   *
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * Array of web ACLs. If you specified a `Limit` in your request, this might not be the full list.
   *
   * @public
   */
  WebACLs?: WebACLSummary[] | undefined;
}

/**
 * @public
 */
export interface PutLoggingConfigurationRequest {
  /**
   * @public
   */
  LoggingConfiguration: LoggingConfiguration | undefined;
}

/**
 * @public
 */
export interface PutLoggingConfigurationResponse {
  /**
   * @public
   */
  LoggingConfiguration?: LoggingConfiguration | undefined;
}

/**
 * A version of the named managed rule group, that the rule group's vendor publishes for use by customers.
 *
 * > **Note:**
 * >
 * > This is intended for use only by vendors of managed rule sets. Vendors are Amazon Web Services and Amazon Web Services Marketplace sellers.
 * >
 * > Vendors, you can use the managed rule set APIs to provide controlled rollout of your versioned managed rule group offerings for your customers. The APIs are `ListManagedRuleSets`, `GetManagedRuleSet`, `PutManagedRuleSetVersions`, and `UpdateManagedRuleSetVersionExpiryDate`.
 *
 * @public
 */
export interface VersionToPublish {
  /**
   * The Amazon Resource Name (ARN) of the vendor's rule group that's used in the published managed rule group version.
   *
   * @public
   */
  AssociatedRuleGroupArn?: string | undefined;

  /**
   * The amount of time the vendor expects this version of the managed rule group to last, in days.
   *
   * @public
   */
  ForecastedLifetime?: number | undefined;
}

/**
 * @public
 */
export interface PutManagedRuleSetVersionsRequest {
  /**
   * The name of the managed rule set. You use this, along with the rule set ID, to identify the rule set.
   *
   * This name is assigned to the corresponding managed rule group, which your customers can access and use.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Specifies whether this is for a global resource type, such as a Amazon CloudFront distribution. For an Amplify application, use `CLOUDFRONT`.
   *
   * To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows:
   *
   * - CLI - Specify the Region when you use the CloudFront scope: `--scope=CLOUDFRONT --region=us-east-1`.
   * - API and SDKs - For all calls, use the Region endpoint us-east-1.
   *
   * @public
   */
  Scope: Scope | undefined;

  /**
   * A unique identifier for the managed rule set. The ID is returned in the responses to commands like `list`. You provide it to operations like `get` and `update`.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * A token used for optimistic locking. WAF returns a token to your `get` and `list` requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like `update` and `delete`. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a `WAFOptimisticLockException`. If this happens, perform another `get`, and use the new token returned by that operation.
   *
   * @public
   */
  LockToken: string | undefined;

  /**
   * The version of the named managed rule group that you'd like your customers to choose, from among your version offerings.
   *
   * @public
   */
  RecommendedVersion?: string | undefined;

  /**
   * The versions of the named managed rule group that you want to offer to your customers.
   *
   * @public
   */
  VersionsToPublish?: Record<string, VersionToPublish> | undefined;
}

/**
 * @public
 */
export interface PutManagedRuleSetVersionsResponse {
  /**
   * A token used for optimistic locking. WAF returns a token to your `get` and `list` requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like `update` and `delete`. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a `WAFOptimisticLockException`. If this happens, perform another `get`, and use the new token returned by that operation.
   *
   * @public
   */
  NextLockToken?: string | undefined;
}

/**
 * @public
 */
export interface PutPermissionPolicyRequest {
  /**
   * The Amazon Resource Name (ARN) of the RuleGroup to which you want to attach the policy.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The policy to attach to the specified rule group.
   *
   * The policy specifications must conform to the following:
   *
   * - The policy must be composed using IAM Policy version 2012-10-17.
   * - The policy must include specifications for `Effect`, `Action`, and `Principal`.
   * - `Effect` must specify `Allow`.
   * - `Action` must specify `wafv2:CreateWebACL`, `wafv2:UpdateWebACL`, and `wafv2:PutFirewallManagerRuleGroups` and may optionally specify `wafv2:GetRuleGroup`. WAF rejects any extra actions or wildcard actions in the policy.
   * - The policy must not include a `Resource` parameter.
   *
   * For more information, see [IAM Policies](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html).
   *
   * @public
   */
  Policy: string | undefined;
}

/**
 * @public
 */
export interface PutPermissionPolicyResponse {}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * An array of key:value pairs to associate with the resource.
   *
   * @public
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
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * An array of keys identifying the tags to disassociate from the resource.
   *
   * @public
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
   * The name of the IP set. You cannot change the name of an `IPSet` after you create it.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Specifies whether this is for a global resource type, such as a Amazon CloudFront distribution. For an Amplify application, use `CLOUDFRONT`.
   *
   * To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows:
   *
   * - CLI - Specify the Region when you use the CloudFront scope: `--scope=CLOUDFRONT --region=us-east-1`.
   * - API and SDKs - For all calls, use the Region endpoint us-east-1.
   *
   * @public
   */
  Scope: Scope | undefined;

  /**
   * A unique identifier for the set. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * A description of the IP set that helps with identification.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Contains an array of strings that specifies zero or more IP addresses or blocks of IP addresses that you want WAF to inspect for in incoming requests. All addresses must be specified using Classless Inter-Domain Routing (CIDR) notation. WAF supports all IPv4 and IPv6 CIDR ranges except for `/0`.
   *
   * Example address strings:
   *
   * - For requests that originated from the IP address 192.0.2.44, specify `192.0.2.44/32`.
   * - For requests that originated from IP addresses from 192.0.2.0 to 192.0.2.255, specify `192.0.2.0/24`.
   * - For requests that originated from the IP address 1111:0000:0000:0000:0000:0000:0000:0111, specify `1111:0000:0000:0000:0000:0000:0000:0111/128`.
   * - For requests that originated from IP addresses 1111:0000:0000:0000:0000:0000:0000:0000 to 1111:0000:0000:0000:ffff:ffff:ffff:ffff, specify `1111:0000:0000:0000:0000:0000:0000:0000/64`.
   *
   * For more information about CIDR notation, see the Wikipedia entry [Classless Inter-Domain Routing](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing).
   *
   * Example JSON `Addresses` specifications:
   *
   * - Empty array: `"Addresses": []`
   * - Array with one address: `"Addresses": ["192.0.2.44/32"]`
   * - Array with three addresses: `"Addresses": ["192.0.2.44/32", "192.0.2.0/24", "192.0.0.0/16"]`
   * - INVALID specification: `"Addresses": [""]` INVALID
   *
   * @public
   */
  Addresses: string[] | undefined;

  /**
   * A token used for optimistic locking. WAF returns a token to your `get` and `list` requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like `update` and `delete`. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a `WAFOptimisticLockException`. If this happens, perform another `get`, and use the new token returned by that operation.
   *
   * @public
   */
  LockToken: string | undefined;
}

/**
 * @public
 */
export interface UpdateIPSetResponse {
  /**
   * A token used for optimistic locking. WAF returns this token to your `update` requests. You use `NextLockToken` in the same manner as you use `LockToken`.
   *
   * @public
   */
  NextLockToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateManagedRuleSetVersionExpiryDateRequest {
  /**
   * The name of the managed rule set. You use this, along with the rule set ID, to identify the rule set.
   *
   * This name is assigned to the corresponding managed rule group, which your customers can access and use.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Specifies whether this is for a global resource type, such as a Amazon CloudFront distribution. For an Amplify application, use `CLOUDFRONT`.
   *
   * To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows:
   *
   * - CLI - Specify the Region when you use the CloudFront scope: `--scope=CLOUDFRONT --region=us-east-1`.
   * - API and SDKs - For all calls, use the Region endpoint us-east-1.
   *
   * @public
   */
  Scope: Scope | undefined;

  /**
   * A unique identifier for the managed rule set. The ID is returned in the responses to commands like `list`. You provide it to operations like `get` and `update`.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * A token used for optimistic locking. WAF returns a token to your `get` and `list` requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like `update` and `delete`. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a `WAFOptimisticLockException`. If this happens, perform another `get`, and use the new token returned by that operation.
   *
   * @public
   */
  LockToken: string | undefined;

  /**
   * The version that you want to remove from your list of offerings for the named managed rule group.
   *
   * @public
   */
  VersionToExpire: string | undefined;

  /**
   * The time that you want the version to expire.
   *
   * Times are in Coordinated Universal Time (UTC) format. UTC format includes the special designator, Z. For example, "2016-09-27T14:50Z".
   *
   * @public
   */
  ExpiryTimestamp: Date | undefined;
}

/**
 * @public
 */
export interface UpdateManagedRuleSetVersionExpiryDateResponse {
  /**
   * The version that is set to expire.
   *
   * @public
   */
  ExpiringVersion?: string | undefined;

  /**
   * The time that the version will expire.
   *
   * Times are in Coordinated Universal Time (UTC) format. UTC format includes the special designator, Z. For example, "2016-09-27T14:50Z".
   *
   * @public
   */
  ExpiryTimestamp?: Date | undefined;

  /**
   * A token used for optimistic locking. WAF returns a token to your `get` and `list` requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like `update` and `delete`. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a `WAFOptimisticLockException`. If this happens, perform another `get`, and use the new token returned by that operation.
   *
   * @public
   */
  NextLockToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateRegexPatternSetRequest {
  /**
   * The name of the set. You cannot change the name after you create the set.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Specifies whether this is for a global resource type, such as a Amazon CloudFront distribution. For an Amplify application, use `CLOUDFRONT`.
   *
   * To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows:
   *
   * - CLI - Specify the Region when you use the CloudFront scope: `--scope=CLOUDFRONT --region=us-east-1`.
   * - API and SDKs - For all calls, use the Region endpoint us-east-1.
   *
   * @public
   */
  Scope: Scope | undefined;

  /**
   * A unique identifier for the set. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * A description of the set that helps with identification.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * @public
   */
  RegularExpressionList: Regex[] | undefined;

  /**
   * A token used for optimistic locking. WAF returns a token to your `get` and `list` requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like `update` and `delete`. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a `WAFOptimisticLockException`. If this happens, perform another `get`, and use the new token returned by that operation.
   *
   * @public
   */
  LockToken: string | undefined;
}

/**
 * @public
 */
export interface UpdateRegexPatternSetResponse {
  /**
   * A token used for optimistic locking. WAF returns this token to your `update` requests. You use `NextLockToken` in the same manner as you use `LockToken`.
   *
   * @public
   */
  NextLockToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateRuleGroupResponse {
  /**
   * A token used for optimistic locking. WAF returns this token to your `update` requests. You use `NextLockToken` in the same manner as you use `LockToken`.
   *
   * @public
   */
  NextLockToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateWebACLResponse {
  /**
   * A token used for optimistic locking. WAF returns this token to your `update` requests. You use `NextLockToken` in the same manner as you use `LockToken`.
   *
   * @public
   */
  NextLockToken?: string | undefined;
}

/**
 * The processing guidance for a Rule, used by WAF to determine whether a web request matches the rule.
 *
 * For example specifications, see the examples section of CreateWebACL.
 *
 * @public
 */
export interface Statement {
  /**
   * A rule statement that defines a string match search for WAF to apply to web requests. The byte match statement provides the bytes to search for, the location in requests that you want WAF to search, and other settings. The bytes to search for are typically a string that corresponds with ASCII characters. In the WAF console and the developer guide, this is called a string match statement.
   *
   * @public
   */
  ByteMatchStatement?: ByteMatchStatement | undefined;

  /**
   * A rule statement that inspects for malicious SQL code. Attackers insert malicious SQL code into web requests to do things like modify your database or extract data from it.
   *
   * @public
   */
  SqliMatchStatement?: SqliMatchStatement | undefined;

  /**
   * A rule statement that inspects for cross-site scripting (XSS) attacks. In XSS attacks, the attacker uses vulnerabilities in a benign website as a vehicle to inject malicious client-site scripts into other legitimate web browsers.
   *
   * @public
   */
  XssMatchStatement?: XssMatchStatement | undefined;

  /**
   * A rule statement that compares a number of bytes against the size of a request component, using a comparison operator, such as greater than (>) or less than (<). For example, you can use a size constraint statement to look for query strings that are longer than 100 bytes.
   *
   * If you configure WAF to inspect the request body, WAF inspects only the number of bytes in the body up to the limit for the web ACL and protected resource type. If you know that the request body for your web requests should never exceed the inspection limit, you can use a size constraint statement to block requests that have a larger request body size. For more information about the inspection limits, see `Body` and `JsonBody` settings for the `FieldToMatch` data type.
   *
   * If you choose URI for the value of Part of the request to filter on, the slash (/) in the URI counts as one character. For example, the URI `/logo.jpg` is nine characters long.
   *
   * @public
   */
  SizeConstraintStatement?: SizeConstraintStatement | undefined;

  /**
   * A rule statement that labels web requests by country and region and that matches against web requests based on country code. A geo match rule labels every request that it inspects regardless of whether it finds a match.
   *
   * - To manage requests only by country, you can use this statement by itself and specify the countries that you want to match against in the `CountryCodes` array.
   * - Otherwise, configure your geo match rule with Count action so that it only labels requests. Then, add one or more label match rules to run after the geo match rule and configure them to match against the geographic labels and handle the requests as needed.
   *
   * WAF labels requests using the alpha-2 country and region codes from the International Organization for Standardization (ISO) 3166 standard. WAF determines the codes using either the IP address in the web request origin or, if you specify it, the address in the geo match `ForwardedIPConfig`.
   *
   * If you use the web request origin, the label formats are `awswaf:clientip:geo:region:<ISO country code>-<ISO region code>` and `awswaf:clientip:geo:country:<ISO country code>`.
   *
   * If you use a forwarded IP address, the label formats are `awswaf:forwardedip:geo:region:<ISO country code>-<ISO region code>` and `awswaf:forwardedip:geo:country:<ISO country code>`.
   *
   * For additional details, see [Geographic match rule statement](https://docs.aws.amazon.com/waf/latest/developerguide/waf-rule-statement-type-geo-match.html) in the [WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html).
   *
   * @public
   */
  GeoMatchStatement?: GeoMatchStatement | undefined;

  /**
   * A rule statement used to run the rules that are defined in a RuleGroup. To use this, create a rule group with your rules, then provide the ARN of the rule group in this statement.
   *
   * You cannot nest a `RuleGroupReferenceStatement`, for example for use inside a `NotStatement` or `OrStatement`. You cannot use a rule group reference statement inside another rule group. You can only reference a rule group as a top-level statement within a rule that you define in a web ACL.
   *
   * @public
   */
  RuleGroupReferenceStatement?: RuleGroupReferenceStatement | undefined;

  /**
   * A rule statement used to detect web requests coming from particular IP addresses or address ranges. To use this, create an IPSet that specifies the addresses you want to detect, then use the ARN of that set in this statement. To create an IP set, see CreateIPSet.
   *
   * Each IP set rule statement references an IP set. You create and maintain the set independent of your rules. This allows you to use the single set in multiple rules. When you update the referenced set, WAF automatically updates all rules that reference it.
   *
   * @public
   */
  IPSetReferenceStatement?: IPSetReferenceStatement | undefined;

  /**
   * A rule statement used to search web request components for matches with regular expressions. To use this, create a RegexPatternSet that specifies the expressions that you want to detect, then use the ARN of that set in this statement. A web request matches the pattern set rule statement if the request component matches any of the patterns in the set. To create a regex pattern set, see CreateRegexPatternSet.
   *
   * Each regex pattern set rule statement references a regex pattern set. You create and maintain the set independent of your rules. This allows you to use the single set in multiple rules. When you update the referenced set, WAF automatically updates all rules that reference it.
   *
   * @public
   */
  RegexPatternSetReferenceStatement?: RegexPatternSetReferenceStatement | undefined;

  /**
   * A rate-based rule counts incoming requests and rate limits requests when they are coming at too fast a rate. The rule categorizes requests according to your aggregation criteria, collects them into aggregation instances, and counts and rate limits the requests for each instance.
   *
   * > **Note:** If you change any of these settings in a rule that's currently in use, the change resets the rule's rate limiting counts. This can pause the rule's rate limiting activities for up to a minute.
   *
   * You can specify individual aggregation keys, like IP address or HTTP method. You can also specify aggregation key combinations, like IP address and HTTP method, or HTTP method, query argument, and cookie.
   *
   * Each unique set of values for the aggregation keys that you specify is a separate aggregation instance, with the value from each key contributing to the aggregation instance definition.
   *
   * For example, assume the rule evaluates web requests with the following IP address and HTTP method values:
   *
   * - IP address 10.1.1.1, HTTP method POST
   * - IP address 10.1.1.1, HTTP method GET
   * - IP address 127.0.0.0, HTTP method POST
   * - IP address 10.1.1.1, HTTP method GET
   *
   * The rule would create different aggregation instances according to your aggregation criteria, for example:
   *
   * - If the aggregation criteria is just the IP address, then each individual address is an aggregation instance, and WAF counts requests separately for each. The aggregation instances and request counts for our example would be the following:
   *
   *   - IP address 10.1.1.1: count 3
   *   - IP address 127.0.0.0: count 1
   * - If the aggregation criteria is HTTP method, then each individual HTTP method is an aggregation instance. The aggregation instances and request counts for our example would be the following:
   *
   *   - HTTP method POST: count 2
   *   - HTTP method GET: count 2
   * - If the aggregation criteria is IP address and HTTP method, then each IP address and each HTTP method would contribute to the combined aggregation instance. The aggregation instances and request counts for our example would be the following:
   *
   *   - IP address 10.1.1.1, HTTP method POST: count 1
   *   - IP address 10.1.1.1, HTTP method GET: count 2
   *   - IP address 127.0.0.0, HTTP method POST: count 1
   *
   * For any n-tuple of aggregation keys, each unique combination of values for the keys defines a separate aggregation instance, which WAF counts and rate-limits individually.
   *
   * You can optionally nest another statement inside the rate-based statement, to narrow the scope of the rule so that it only counts and rate limits requests that match the nested statement. You can use this nested scope-down statement in conjunction with your aggregation key specifications or you can just count and rate limit all requests that match the scope-down statement, without additional aggregation. When you choose to just manage all requests that match a scope-down statement, the aggregation instance is singular for the rule.
   *
   * You cannot nest a `RateBasedStatement` inside another statement, for example inside a `NotStatement` or `OrStatement`. You can define a `RateBasedStatement` inside a web ACL and inside a rule group.
   *
   * For additional information about the options, see [Rate limiting web requests using rate-based rules](https://docs.aws.amazon.com/waf/latest/developerguide/waf-rate-based-rules.html) in the *WAF Developer Guide*.
   *
   * If you only aggregate on the individual IP address or forwarded IP address, you can retrieve the list of IP addresses that WAF is currently rate limiting for a rule through the API call `GetRateBasedStatementManagedKeys`. This option is not available for other aggregation configurations.
   *
   * WAF tracks and manages web requests separately for each instance of a rate-based rule that you use. For example, if you provide the same rate-based rule settings in two web ACLs, each of the two rule statements represents a separate instance of the rate-based rule and gets its own tracking and management by WAF. If you define a rate-based rule inside a rule group, and then use that rule group in multiple places, each use creates a separate instance of the rate-based rule that gets its own tracking and management by WAF.
   *
   * @public
   */
  RateBasedStatement?: RateBasedStatement | undefined;

  /**
   * A logical rule statement used to combine other rule statements with AND logic. You provide more than one Statement within the `AndStatement`.
   *
   * @public
   */
  AndStatement?: AndStatement | undefined;

  /**
   * A logical rule statement used to combine other rule statements with OR logic. You provide more than one Statement within the `OrStatement`.
   *
   * @public
   */
  OrStatement?: OrStatement | undefined;

  /**
   * A logical rule statement used to negate the results of another rule statement. You provide one Statement within the `NotStatement`.
   *
   * @public
   */
  NotStatement?: NotStatement | undefined;

  /**
   * A rule statement used to run the rules that are defined in a managed rule group. To use this, provide the vendor name and the name of the rule group in this statement. You can retrieve the required names by calling ListAvailableManagedRuleGroups.
   *
   * You cannot nest a `ManagedRuleGroupStatement`, for example for use inside a `NotStatement` or `OrStatement`. You cannot use a managed rule group inside another rule group. You can only reference a managed rule group as a top-level statement within a rule that you define in a web ACL.
   *
   * > **Note:** You are charged additional fees when you use the WAF Bot Control managed rule group `AWSManagedRulesBotControlRuleSet`, the WAF Fraud Control account takeover prevention (ATP) managed rule group `AWSManagedRulesATPRuleSet`, or the WAF Fraud Control account creation fraud prevention (ACFP) managed rule group `AWSManagedRulesACFPRuleSet`. For more information, see [WAF Pricing](http://aws.amazon.com/waf/pricing/).
   *
   * @public
   */
  ManagedRuleGroupStatement?: ManagedRuleGroupStatement | undefined;

  /**
   * A rule statement to match against labels that have been added to the web request by rules that have already run in the web ACL.
   *
   * The label match statement provides the label or namespace string to search for. The label string can represent a part or all of the fully qualified label name that had been added to the web request. Fully qualified labels have a prefix, optional namespaces, and label name. The prefix identifies the rule group or web ACL context of the rule that added the label. If you do not provide the fully qualified name in your label match string, WAF performs the search for labels that were added in the same context as the label match statement.
   *
   * @public
   */
  LabelMatchStatement?: LabelMatchStatement | undefined;

  /**
   * A rule statement used to search web request components for a match against a single regular expression.
   *
   * @public
   */
  RegexMatchStatement?: RegexMatchStatement | undefined;

  /**
   * A rule statement that inspects web traffic based on the Autonomous System Number (ASN) associated with the request's IP address.
   *
   * For additional details, see [ASN match rule statement](https://docs.aws.amazon.com/waf/latest/developerguide/waf-rule-statement-type-asn-match.html) in the [WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html).
   *
   * @public
   */
  AsnMatchStatement?: AsnMatchStatement | undefined;
}

/**
 * A rule statement used to run the rules that are defined in a managed rule group. To use this, provide the vendor name and the name of the rule group in this statement. You can retrieve the required names by calling ListAvailableManagedRuleGroups.
 *
 * You cannot nest a `ManagedRuleGroupStatement`, for example for use inside a `NotStatement` or `OrStatement`. You cannot use a managed rule group inside another rule group. You can only reference a managed rule group as a top-level statement within a rule that you define in a web ACL.
 *
 * > **Note:** You are charged additional fees when you use the WAF Bot Control managed rule group `AWSManagedRulesBotControlRuleSet`, the WAF Fraud Control account takeover prevention (ATP) managed rule group `AWSManagedRulesATPRuleSet`, or the WAF Fraud Control account creation fraud prevention (ACFP) managed rule group `AWSManagedRulesACFPRuleSet`. For more information, see [WAF Pricing](http://aws.amazon.com/waf/pricing/).
 *
 * @public
 */
export interface ManagedRuleGroupStatement {
  /**
   * The name of the managed rule group vendor. You use this, along with the rule group name, to identify a rule group.
   *
   * @public
   */
  VendorName: string | undefined;

  /**
   * The name of the managed rule group. You use this, along with the vendor name, to identify the rule group.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The version of the managed rule group to use. If you specify this, the version setting is fixed until you change it. If you don't specify this, WAF uses the vendor's default version, and then keeps the version at the vendor's default when the vendor updates the managed rule group settings.
   *
   * @public
   */
  Version?: string | undefined;

  /**
   * Rules in the referenced rule group whose actions are set to `Count`.
   *
   * > **Note:** Instead of this option, use `RuleActionOverrides`. It accepts any valid action setting, including `Count`.
   *
   * @public
   */
  ExcludedRules?: ExcludedRule[] | undefined;

  /**
   * An optional nested statement that narrows the scope of the web requests that are evaluated by the managed rule group. Requests are only evaluated by the rule group if they match the scope-down statement. You can use any nestable Statement in the scope-down statement, and you can nest statements at any level, the same as you can for a rule statement.
   *
   * @public
   */
  ScopeDownStatement?: Statement | undefined;

  /**
   * Additional information that's used by a managed rule group. Many managed rule groups don't require this.
   *
   * The rule groups used for intelligent threat mitigation require additional configuration:
   *
   * - Use the `AWSManagedRulesACFPRuleSet` configuration object to configure the account creation fraud prevention managed rule group. The configuration includes the registration and sign-up pages of your application and the locations in the account creation request payload of data, such as the user email and phone number fields.
   * - Use the `AWSManagedRulesAntiDDoSRuleSet` configuration object to configure the anti-DDoS managed rule group. The configuration includes the sensitivity levels to use in the rules that typically block and challenge requests that might be participating in DDoS attacks and the specification to use to indicate whether a request can handle a silent browser challenge.
   * - Use the `AWSManagedRulesATPRuleSet` configuration object to configure the account takeover prevention managed rule group. The configuration includes the sign-in page of your application and the locations in the login request payload of data such as the username and password.
   * - Use the `AWSManagedRulesBotControlRuleSet` configuration object to configure the protection level that you want the Bot Control rule group to use.
   *
   * @public
   */
  ManagedRuleGroupConfigs?: ManagedRuleGroupConfig[] | undefined;

  /**
   * Action settings to use in the place of the rule actions that are configured inside the rule group. You specify one override for each rule whose action you want to change.
   *
   * > **Note:** Verify the rule names in your overrides carefully. With managed rule groups, WAF silently ignores any override that uses an invalid rule name. With customer-owned rule groups, invalid rule names in your overrides will cause web ACL updates to fail. An invalid rule name is any name that doesn't exactly match the case-sensitive name of an existing rule in the rule group.
   *
   * You can use overrides for testing, for example you can override all of rule actions to `Count` and then monitor the resulting count metrics to understand how the rule group would handle your web traffic. You can also permanently override some or all actions, to modify how the rule group manages your web traffic.
   *
   * @public
   */
  RuleActionOverrides?: RuleActionOverride[] | undefined;
}

/**
 * A logical rule statement used to negate the results of another rule statement. You provide one Statement within the `NotStatement`.
 *
 * @public
 */
export interface NotStatement {
  /**
   * The statement to negate. You can use any statement that can be nested.
   *
   * @public
   */
  Statement: Statement | undefined;
}

/**
 * A rate-based rule counts incoming requests and rate limits requests when they are coming at too fast a rate. The rule categorizes requests according to your aggregation criteria, collects them into aggregation instances, and counts and rate limits the requests for each instance.
 *
 * > **Note:** If you change any of these settings in a rule that's currently in use, the change resets the rule's rate limiting counts. This can pause the rule's rate limiting activities for up to a minute.
 *
 * You can specify individual aggregation keys, like IP address or HTTP method. You can also specify aggregation key combinations, like IP address and HTTP method, or HTTP method, query argument, and cookie.
 *
 * Each unique set of values for the aggregation keys that you specify is a separate aggregation instance, with the value from each key contributing to the aggregation instance definition.
 *
 * For example, assume the rule evaluates web requests with the following IP address and HTTP method values:
 *
 * - IP address 10.1.1.1, HTTP method POST
 * - IP address 10.1.1.1, HTTP method GET
 * - IP address 127.0.0.0, HTTP method POST
 * - IP address 10.1.1.1, HTTP method GET
 *
 * The rule would create different aggregation instances according to your aggregation criteria, for example:
 *
 * - If the aggregation criteria is just the IP address, then each individual address is an aggregation instance, and WAF counts requests separately for each. The aggregation instances and request counts for our example would be the following:
 *
 *   - IP address 10.1.1.1: count 3
 *   - IP address 127.0.0.0: count 1
 * - If the aggregation criteria is HTTP method, then each individual HTTP method is an aggregation instance. The aggregation instances and request counts for our example would be the following:
 *
 *   - HTTP method POST: count 2
 *   - HTTP method GET: count 2
 * - If the aggregation criteria is IP address and HTTP method, then each IP address and each HTTP method would contribute to the combined aggregation instance. The aggregation instances and request counts for our example would be the following:
 *
 *   - IP address 10.1.1.1, HTTP method POST: count 1
 *   - IP address 10.1.1.1, HTTP method GET: count 2
 *   - IP address 127.0.0.0, HTTP method POST: count 1
 *
 * For any n-tuple of aggregation keys, each unique combination of values for the keys defines a separate aggregation instance, which WAF counts and rate-limits individually.
 *
 * You can optionally nest another statement inside the rate-based statement, to narrow the scope of the rule so that it only counts and rate limits requests that match the nested statement. You can use this nested scope-down statement in conjunction with your aggregation key specifications or you can just count and rate limit all requests that match the scope-down statement, without additional aggregation. When you choose to just manage all requests that match a scope-down statement, the aggregation instance is singular for the rule.
 *
 * You cannot nest a `RateBasedStatement` inside another statement, for example inside a `NotStatement` or `OrStatement`. You can define a `RateBasedStatement` inside a web ACL and inside a rule group.
 *
 * For additional information about the options, see [Rate limiting web requests using rate-based rules](https://docs.aws.amazon.com/waf/latest/developerguide/waf-rate-based-rules.html) in the *WAF Developer Guide*.
 *
 * If you only aggregate on the individual IP address or forwarded IP address, you can retrieve the list of IP addresses that WAF is currently rate limiting for a rule through the API call `GetRateBasedStatementManagedKeys`. This option is not available for other aggregation configurations.
 *
 * WAF tracks and manages web requests separately for each instance of a rate-based rule that you use. For example, if you provide the same rate-based rule settings in two web ACLs, each of the two rule statements represents a separate instance of the rate-based rule and gets its own tracking and management by WAF. If you define a rate-based rule inside a rule group, and then use that rule group in multiple places, each use creates a separate instance of the rate-based rule that gets its own tracking and management by WAF.
 *
 * @public
 */
export interface RateBasedStatement {
  /**
   * The limit on requests during the specified evaluation window for a single aggregation instance for the rate-based rule. If the rate-based statement includes a `ScopeDownStatement`, this limit is applied only to the requests that match the statement.
   *
   * Examples:
   *
   * - If you aggregate on just the IP address, this is the limit on requests from any single IP address.
   * - If you aggregate on the HTTP method and the query argument name "city", then this is the limit on requests for any single method, city pair.
   *
   * @public
   */
  Limit: number | undefined;

  /**
   * The amount of time, in seconds, that WAF should include in its request counts, looking back from the current time. For example, for a setting of 120, when WAF checks the rate, it counts the requests for the 2 minutes immediately preceding the current time. Valid settings are 60, 120, 300, and 600.
   *
   * This setting doesn't determine how often WAF checks the rate, but how far back it looks each time it checks. WAF checks the rate about every 10 seconds.
   *
   * Default: `300` (5 minutes)
   *
   * @public
   */
  EvaluationWindowSec?: number | undefined;

  /**
   * Setting that indicates how to aggregate the request counts.
   *
   * > **Note:** Web requests that are missing any of the components specified in the aggregation keys are omitted from the rate-based rule evaluation and handling.
   *
   * - `CONSTANT` - Count and limit the requests that match the rate-based rule's scope-down statement. With this option, the counted requests aren't further aggregated. The scope-down statement is the only specification used. When the count of all requests that satisfy the scope-down statement goes over the limit, WAF applies the rule action to all requests that satisfy the scope-down statement.
   *
   *   With this option, you must configure the `ScopeDownStatement` property.
   * - `CUSTOM_KEYS` - Aggregate the request counts using one or more web request components as the aggregate keys.
   *
   *   With this option, you must specify the aggregate keys in the `CustomKeys` property.
   *
   *   To aggregate on only the IP address or only the forwarded IP address, don't use custom keys. Instead, set the aggregate key type to `IP` or `FORWARDED_IP`.
   * - `FORWARDED_IP` - Aggregate the request counts on the first IP address in an HTTP header.
   *
   *   With this option, you must specify the header to use in the `ForwardedIPConfig` property.
   *
   *   To aggregate on a combination of the forwarded IP address with other aggregate keys, use `CUSTOM_KEYS`.
   * - `IP` - Aggregate the request counts on the IP address from the web request origin.
   *
   *   To aggregate on a combination of the IP address with other aggregate keys, use `CUSTOM_KEYS`.
   *
   * @public
   */
  AggregateKeyType: RateBasedStatementAggregateKeyType | undefined;

  /**
   * An optional nested statement that narrows the scope of the web requests that are evaluated and managed by the rate-based statement. When you use a scope-down statement, the rate-based rule only tracks and rate limits requests that match the scope-down statement. You can use any nestable Statement in the scope-down statement, and you can nest statements at any level, the same as you can for a rule statement.
   *
   * @public
   */
  ScopeDownStatement?: Statement | undefined;

  /**
   * The configuration for inspecting IP addresses in an HTTP header that you specify, instead of using the IP address that's reported by the web request origin. Commonly, this is the X-Forwarded-For (XFF) header, but you can specify any header name.
   *
   * > **Note:** If the specified header isn't present in the request, WAF doesn't apply the rule to the web request at all.
   *
   * This is required if you specify a forwarded IP in the rule's aggregate key settings.
   *
   * @public
   */
  ForwardedIPConfig?: ForwardedIPConfig | undefined;

  /**
   * Specifies the aggregate keys to use in a rate-base rule.
   *
   * @public
   */
  CustomKeys?: RateBasedStatementCustomKey[] | undefined;
}

/**
 * A single rule, which you can use in a WebACL or RuleGroup to identify web requests that you want to manage in some way. Each rule includes one top-level Statement that WAF uses to identify matching web requests, and parameters that govern how WAF handles them.
 *
 * @public
 */
export interface Rule {
  /**
   * The name of the rule.
   *
   * If you change the name of a `Rule` after you create it and you want the rule's metric name to reflect the change, update the metric name in the rule's `VisibilityConfig` settings. WAF doesn't automatically update the metric name when you update the rule name.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * If you define more than one `Rule` in a `WebACL`, WAF evaluates each request against the `Rules` in order based on the value of `Priority`. WAF processes rules with lower priority first. The priorities don't need to be consecutive, but they must all be different.
   *
   * @public
   */
  Priority: number | undefined;

  /**
   * The WAF processing statement for the rule, for example ByteMatchStatement or SizeConstraintStatement.
   *
   * @public
   */
  Statement: Statement | undefined;

  /**
   * The action that WAF should take on a web request when it matches the rule statement. Settings at the web ACL level can override the rule action setting.
   *
   * This is used only for rules whose statements do not reference a rule group. Rule statements that reference a rule group include `RuleGroupReferenceStatement` and `ManagedRuleGroupStatement`.
   *
   * You must specify either this `Action` setting or the rule `OverrideAction` setting, but not both:
   *
   * - If the rule statement does not reference a rule group, use this rule action setting and not the rule override action setting.
   * - If the rule statement references a rule group, use the override action setting and not this action setting.
   *
   * @public
   */
  Action?: RuleAction | undefined;

  /**
   * The action to use in the place of the action that results from the rule group evaluation. Set the override action to none to leave the result of the rule group alone. Set it to count to override the result to count only.
   *
   * You can only use this for rule statements that reference a rule group, like `RuleGroupReferenceStatement` and `ManagedRuleGroupStatement`.
   *
   * > **Note:** This option is usually set to none. It does not affect how the rules in the rule group are evaluated. If you want the rules in the rule group to only count matches, do not use this and instead use the rule action override option, with `Count` action, in your rule group reference statement settings.
   *
   * @public
   */
  OverrideAction?: OverrideAction | undefined;

  /**
   * Labels to apply to web requests that match the rule match statement. WAF applies fully qualified labels to matching web requests. A fully qualified label is the concatenation of a label namespace and a rule label. The rule's rule group or web ACL defines the label namespace.
   *
   * > **Note:** Any rule that isn't a rule group reference statement or managed rule group statement can add labels to matching web requests.
   *
   * Rules that run after this rule in the web ACL can match against these labels using a `LabelMatchStatement`.
   *
   * For each label, provide a case-sensitive string containing optional namespaces and a label name, according to the following guidelines:
   *
   * - Separate each component of the label with a colon.
   * - Each namespace or name can have up to 128 characters.
   * - You can specify up to 5 namespaces in a label.
   * - Don't use the following reserved words in your label specification: `aws`, `waf`, `managed`, `rulegroup`, `webacl`, `regexpatternset`, or `ipset`.
   *
   * For example, `myLabelName` or `nameSpace1:nameSpace2:myLabelName`.
   *
   * @public
   */
  RuleLabels?: Label[] | undefined;

  /**
   * Defines and enables Amazon CloudWatch metrics and web request sample collection.
   *
   * If you change the name of a `Rule` after you create it and you want the rule's metric name to reflect the change, update the metric name as well. WAF doesn't automatically update the metric name.
   *
   * @public
   */
  VisibilityConfig: VisibilityConfig | undefined;

  /**
   * Specifies how WAF should handle `CAPTCHA` evaluations. If you don't specify this, WAF uses the `CAPTCHA` configuration that's defined for the web ACL.
   *
   * @public
   */
  CaptchaConfig?: CaptchaConfig | undefined;

  /**
   * Specifies how WAF should handle `Challenge` evaluations. If you don't specify this, WAF uses the challenge configuration that's defined for the web ACL.
   *
   * @public
   */
  ChallengeConfig?: ChallengeConfig | undefined;
}

/**
 * A logical rule statement used to combine other rule statements with AND logic. You provide more than one Statement within the `AndStatement`.
 *
 * @public
 */
export interface AndStatement {
  /**
   * The statements to combine with AND logic. You can use any statements that can be nested.
   *
   * @public
   */
  Statements: Statement[] | undefined;
}

/**
 * A logical rule statement used to combine other rule statements with OR logic. You provide more than one Statement within the `OrStatement`.
 *
 * @public
 */
export interface OrStatement {
  /**
   * The statements to combine with OR logic. You can use any statements that can be nested.
   *
   * @public
   */
  Statements: Statement[] | undefined;
}

/**
 * The processing guidance for an Firewall Manager rule. This is like a regular rule Statement, but it can only contain a single rule group reference.
 *
 * @public
 */
export interface FirewallManagerStatement {
  /**
   * A statement used by Firewall Manager to run the rules that are defined in a managed rule group. This is managed by Firewall Manager for an Firewall Manager WAF policy.
   *
   * @public
   */
  ManagedRuleGroupStatement?: ManagedRuleGroupStatement | undefined;

  /**
   * A statement used by Firewall Manager to run the rules that are defined in a rule group. This is managed by Firewall Manager for an Firewall Manager WAF policy.
   *
   * @public
   */
  RuleGroupReferenceStatement?: RuleGroupReferenceStatement | undefined;
}

/**
 * A rule group that's defined for an Firewall Manager WAF policy.
 *
 * @public
 */
export interface FirewallManagerRuleGroup {
  /**
   * The name of the rule group. You cannot change the name of a rule group after you create it.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * If you define more than one rule group in the first or last Firewall Manager rule groups, WAF evaluates each request against the rule groups in order, starting from the lowest priority setting. The priorities don't need to be consecutive, but they must all be different.
   *
   * @public
   */
  Priority: number | undefined;

  /**
   * The processing guidance for an Firewall Manager rule. This is like a regular rule Statement, but it can only contain a rule group reference.
   *
   * @public
   */
  FirewallManagerStatement: FirewallManagerStatement | undefined;

  /**
   * The action to use in the place of the action that results from the rule group evaluation. Set the override action to none to leave the result of the rule group alone. Set it to count to override the result to count only.
   *
   * You can only use this for rule statements that reference a rule group, like `RuleGroupReferenceStatement` and `ManagedRuleGroupStatement`.
   *
   * > **Note:** This option is usually set to none. It does not affect how the rules in the rule group are evaluated. If you want the rules in the rule group to only count matches, do not use this and instead use the rule action override option, with `Count` action, in your rule group reference statement settings.
   *
   * @public
   */
  OverrideAction: OverrideAction | undefined;

  /**
   * Defines and enables Amazon CloudWatch metrics and web request sample collection.
   *
   * @public
   */
  VisibilityConfig: VisibilityConfig | undefined;
}

/**
 * @public
 */
export interface CheckCapacityRequest {
  /**
   * Specifies whether this is for a global resource type, such as a Amazon CloudFront distribution. For an Amplify application, use `CLOUDFRONT`.
   *
   * To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows:
   *
   * - CLI - Specify the Region when you use the CloudFront scope: `--scope=CLOUDFRONT --region=us-east-1`.
   * - API and SDKs - For all calls, use the Region endpoint us-east-1.
   *
   * @public
   */
  Scope: Scope | undefined;

  /**
   * An array of Rule that you're configuring to use in a rule group or web ACL.
   *
   * @public
   */
  Rules: Rule[] | undefined;
}

/**
 * @public
 */
export interface CreateRuleGroupRequest {
  /**
   * The name of the rule group. You cannot change the name of a rule group after you create it.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Specifies whether this is for a global resource type, such as a Amazon CloudFront distribution. For an Amplify application, use `CLOUDFRONT`.
   *
   * To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows:
   *
   * - CLI - Specify the Region when you use the CloudFront scope: `--scope=CLOUDFRONT --region=us-east-1`.
   * - API and SDKs - For all calls, use the Region endpoint us-east-1.
   *
   * @public
   */
  Scope: Scope | undefined;

  /**
   * The web ACL capacity units (WCUs) required for this rule group.
   *
   * When you create your own rule group, you define this, and you cannot change it after creation. When you add or modify the rules in a rule group, WAF enforces this limit. You can check the capacity for a set of rules using CheckCapacity.
   *
   * WAF uses WCUs to calculate and control the operating resources that are used to run your rules, rule groups, and web ACLs. WAF calculates capacity differently for each rule type, to reflect the relative cost of each rule. Simple rules that cost little to run use fewer WCUs than more complex rules that use more processing power. Rule group capacity is fixed at creation, which helps users plan their web ACL WCU usage when they use a rule group. For more information, see [WAF web ACL capacity units (WCU)](https://docs.aws.amazon.com/waf/latest/developerguide/aws-waf-capacity-units.html) in the *WAF Developer Guide*.
   *
   * @public
   */
  Capacity: number | undefined;

  /**
   * A description of the rule group that helps with identification.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The Rule statements used to identify the web requests that you want to manage. Each rule includes one top-level statement that WAF uses to identify matching web requests, and parameters that govern how WAF handles them.
   *
   * @public
   */
  Rules?: Rule[] | undefined;

  /**
   * Defines and enables Amazon CloudWatch metrics and web request sample collection.
   *
   * @public
   */
  VisibilityConfig: VisibilityConfig | undefined;

  /**
   * An array of key:value pairs to associate with the resource.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * A map of custom response keys and content bodies. When you create a rule with a block action, you can send a custom response to the web request. You define these for the rule group, and then use them in the rules that you define in the rule group.
   *
   * For information about customizing web requests and responses, see [Customizing web requests and responses in WAF](https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html) in the *WAF Developer Guide*.
   *
   * For information about the limits on count and size for custom request and response settings, see [WAF quotas](https://docs.aws.amazon.com/waf/latest/developerguide/limits.html) in the *WAF Developer Guide*.
   *
   * @public
   */
  CustomResponseBodies?: Record<string, CustomResponseBody> | undefined;

  /**
   * The monetization configuration for the rule group. Provide this when any rule in the rule group uses the `Monetize` action.
   *
   * @public
   */
  MonetizationConfig?: MonetizationConfig | undefined;
}

/**
 * @public
 */
export interface CreateWebACLRequest {
  /**
   * The name of the web ACL. You cannot change the name of a web ACL after you create it.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Specifies whether this is for a global resource type, such as a Amazon CloudFront distribution. For an Amplify application, use `CLOUDFRONT`.
   *
   * To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows:
   *
   * - CLI - Specify the Region when you use the CloudFront scope: `--scope=CLOUDFRONT --region=us-east-1`.
   * - API and SDKs - For all calls, use the Region endpoint us-east-1.
   *
   * @public
   */
  Scope: Scope | undefined;

  /**
   * The action to perform if none of the `Rules` contained in the `WebACL` match.
   *
   * @public
   */
  DefaultAction: DefaultAction | undefined;

  /**
   * A description of the web ACL that helps with identification.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The Rule statements used to identify the web requests that you want to manage. Each rule includes one top-level statement that WAF uses to identify matching web requests, and parameters that govern how WAF handles them.
   *
   * @public
   */
  Rules?: Rule[] | undefined;

  /**
   * Defines and enables Amazon CloudWatch metrics and web request sample collection.
   *
   * @public
   */
  VisibilityConfig: VisibilityConfig | undefined;

  /**
   * Specifies data protection to apply to the web request data for the web ACL. This is a web ACL level data protection option.
   *
   * The data protection that you configure for the web ACL alters the data that's available for any other data collection activity, including your WAF logging destinations, web ACL request sampling, and Amazon Security Lake data collection and management. Your other option for data protection is in the logging configuration, which only affects logging.
   *
   * @public
   */
  DataProtectionConfig?: DataProtectionConfig | undefined;

  /**
   * An array of key:value pairs to associate with the resource.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * A map of custom response keys and content bodies. When you create a rule with a block action, you can send a custom response to the web request. You define these for the web ACL, and then use them in the rules and default actions that you define in the web ACL.
   *
   * For information about customizing web requests and responses, see [Customizing web requests and responses in WAF](https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html) in the *WAF Developer Guide*.
   *
   * For information about the limits on count and size for custom request and response settings, see [WAF quotas](https://docs.aws.amazon.com/waf/latest/developerguide/limits.html) in the *WAF Developer Guide*.
   *
   * @public
   */
  CustomResponseBodies?: Record<string, CustomResponseBody> | undefined;

  /**
   * Specifies how WAF should handle `CAPTCHA` evaluations for rules that don't have their own `CaptchaConfig` settings. If you don't specify this, WAF uses its default settings for `CaptchaConfig`.
   *
   * @public
   */
  CaptchaConfig?: CaptchaConfig | undefined;

  /**
   * Specifies how WAF should handle challenge evaluations for rules that don't have their own `ChallengeConfig` settings. If you don't specify this, WAF uses its default settings for `ChallengeConfig`.
   *
   * @public
   */
  ChallengeConfig?: ChallengeConfig | undefined;

  /**
   * Specifies the domains that WAF should accept in a web request token. This enables the use of tokens across multiple protected websites. When WAF provides a token, it uses the domain of the Amazon Web Services resource that the web ACL is protecting. If you don't specify a list of token domains, WAF accepts tokens only for the domain of the protected resource. With a token domain list, WAF accepts the resource's host domain plus all domains in the token domain list, including their prefixed subdomains.
   *
   * Example JSON: `"TokenDomains": \{ "mywebsite.com", "myotherwebsite.com" \}`
   *
   * Public suffixes aren't allowed. For example, you can't use `gov.au` or `co.uk` as token domains.
   *
   * @public
   */
  TokenDomains?: string[] | undefined;

  /**
   * Specifies custom configurations for the associations between the web ACL and protected resources.
   *
   * Use this to customize the maximum size of the request body that your protected resources forward to WAF for inspection. You can customize this setting for CloudFront, API Gateway, Amazon Cognito, App Runner, or Verified Access resources. The default setting is 16 KB (16,384 bytes).
   *
   * > **Note:** You are charged additional fees when your protected resources forward body sizes that are larger than the default. For more information, see [WAF Pricing](http://aws.amazon.com/waf/pricing/).
   *
   * For Application Load Balancer and AppSync, the limit is fixed at 8 KB (8,192 bytes).
   *
   * You can also use this to have your CloudFront distributions insert the WAF challenge JavaScript SDK into the HTML responses that they return. For more information, see the `ChallengeJavascriptSdkInjection` setting.
   *
   * @public
   */
  AssociationConfig?: AssociationConfig | undefined;

  /**
   * Specifies the type of DDoS protection to apply to web request data for a web ACL. For most scenarios, it is recommended to use the default protection level, `ACTIVE_UNDER_DDOS`. If a web ACL is associated with multiple Application Load Balancers, the changes you make to DDoS protection in that web ACL will apply to all associated Application Load Balancers.
   *
   * @public
   */
  OnSourceDDoSProtectionConfig?: OnSourceDDoSProtectionConfig | undefined;

  /**
   * Configures the ability for the WAF console to store and retrieve application attributes during the web ACL creation process. Application attributes help WAF give recommendations for protection packs.
   *
   * @public
   */
  ApplicationConfig?: ApplicationConfig | undefined;

  /**
   * The monetization configuration for the web ACL. Provide this when any rule in the web ACL uses the `Monetize` action.
   *
   * @public
   */
  MonetizationConfig?: MonetizationConfig | undefined;
}

/**
 * A rule group defines a collection of rules to inspect and control web requests that you can use in a WebACL. When you create a rule group, you define an immutable capacity limit. If you update a rule group, you must stay within the capacity. This allows others to reuse the rule group with confidence in its capacity requirements.
 *
 * @public
 */
export interface RuleGroup {
  /**
   * The name of the rule group. You cannot change the name of a rule group after you create it.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A unique identifier for the rule group. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The web ACL capacity units (WCUs) required for this rule group.
   *
   * When you create your own rule group, you define this, and you cannot change it after creation. When you add or modify the rules in a rule group, WAF enforces this limit. You can check the capacity for a set of rules using CheckCapacity.
   *
   * WAF uses WCUs to calculate and control the operating resources that are used to run your rules, rule groups, and web ACLs. WAF calculates capacity differently for each rule type, to reflect the relative cost of each rule. Simple rules that cost little to run use fewer WCUs than more complex rules that use more processing power. Rule group capacity is fixed at creation, which helps users plan their web ACL WCU usage when they use a rule group. For more information, see [WAF web ACL capacity units (WCU)](https://docs.aws.amazon.com/waf/latest/developerguide/aws-waf-capacity-units.html) in the *WAF Developer Guide*.
   *
   * @public
   */
  Capacity: number | undefined;

  /**
   * The Amazon Resource Name (ARN) of the entity.
   *
   * @public
   */
  ARN: string | undefined;

  /**
   * A description of the rule group that helps with identification.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The Rule statements used to identify the web requests that you want to manage. Each rule includes one top-level statement that WAF uses to identify matching web requests, and parameters that govern how WAF handles them.
   *
   * @public
   */
  Rules?: Rule[] | undefined;

  /**
   * Defines and enables Amazon CloudWatch metrics and web request sample collection.
   *
   * @public
   */
  VisibilityConfig: VisibilityConfig | undefined;

  /**
   * The label namespace prefix for this rule group. All labels added by rules in this rule group have this prefix.
   *
   * - The syntax for the label namespace prefix for your rule groups is the following:
   *
   *   `awswaf:<account ID>:rulegroup:<rule group name>:`
   * - When a rule with a label matches a web request, WAF adds the fully qualified label to the request. A fully qualified label is made up of the label namespace from the rule group or web ACL where the rule is defined and the label from the rule, separated by a colon:
   *
   *   `<label namespace>:<label from rule>`
   *
   * @public
   */
  LabelNamespace?: string | undefined;

  /**
   * A map of custom response keys and content bodies. When you create a rule with a block action, you can send a custom response to the web request. You define these for the rule group, and then use them in the rules that you define in the rule group.
   *
   * For information about customizing web requests and responses, see [Customizing web requests and responses in WAF](https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html) in the *WAF Developer Guide*.
   *
   * For information about the limits on count and size for custom request and response settings, see [WAF quotas](https://docs.aws.amazon.com/waf/latest/developerguide/limits.html) in the *WAF Developer Guide*.
   *
   * @public
   */
  CustomResponseBodies?: Record<string, CustomResponseBody> | undefined;

  /**
   * The labels that one or more rules in this rule group add to matching web requests. These labels are defined in the `RuleLabels` for a Rule.
   *
   * @public
   */
  AvailableLabels?: LabelSummary[] | undefined;

  /**
   * The labels that one or more rules in this rule group match against in label match statements. These labels are defined in a `LabelMatchStatement` specification, in the Statement definition of a rule.
   *
   * @public
   */
  ConsumedLabels?: LabelSummary[] | undefined;

  /**
   * The monetization configuration for the rule group. Required when any rule in the rule group uses the `Monetize` action. When a rule group with a `MonetizationConfig` is used in a web ACL, the rule group's configuration applies to rules within that group unless overridden at the web ACL level.
   *
   * @public
   */
  MonetizationConfig?: MonetizationConfig | undefined;
}

/**
 * @public
 */
export interface UpdateRuleGroupRequest {
  /**
   * The name of the rule group. You cannot change the name of a rule group after you create it.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Specifies whether this is for a global resource type, such as a Amazon CloudFront distribution. For an Amplify application, use `CLOUDFRONT`.
   *
   * To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows:
   *
   * - CLI - Specify the Region when you use the CloudFront scope: `--scope=CLOUDFRONT --region=us-east-1`.
   * - API and SDKs - For all calls, use the Region endpoint us-east-1.
   *
   * @public
   */
  Scope: Scope | undefined;

  /**
   * A unique identifier for the rule group. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * A description of the rule group that helps with identification.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The Rule statements used to identify the web requests that you want to manage. Each rule includes one top-level statement that WAF uses to identify matching web requests, and parameters that govern how WAF handles them.
   *
   * @public
   */
  Rules?: Rule[] | undefined;

  /**
   * Defines and enables Amazon CloudWatch metrics and web request sample collection.
   *
   * @public
   */
  VisibilityConfig: VisibilityConfig | undefined;

  /**
   * A token used for optimistic locking. WAF returns a token to your `get` and `list` requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like `update` and `delete`. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a `WAFOptimisticLockException`. If this happens, perform another `get`, and use the new token returned by that operation.
   *
   * @public
   */
  LockToken: string | undefined;

  /**
   * A map of custom response keys and content bodies. When you create a rule with a block action, you can send a custom response to the web request. You define these for the rule group, and then use them in the rules that you define in the rule group.
   *
   * For information about customizing web requests and responses, see [Customizing web requests and responses in WAF](https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html) in the *WAF Developer Guide*.
   *
   * For information about the limits on count and size for custom request and response settings, see [WAF quotas](https://docs.aws.amazon.com/waf/latest/developerguide/limits.html) in the *WAF Developer Guide*.
   *
   * @public
   */
  CustomResponseBodies?: Record<string, CustomResponseBody> | undefined;

  /**
   * The monetization configuration for the rule group. Provide this when any rule in the rule group uses the `Monetize` action.
   *
   * @public
   */
  MonetizationConfig?: MonetizationConfig | undefined;
}

/**
 * @public
 */
export interface UpdateWebACLRequest {
  /**
   * The name of the web ACL. You cannot change the name of a web ACL after you create it.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Specifies whether this is for a global resource type, such as a Amazon CloudFront distribution. For an Amplify application, use `CLOUDFRONT`.
   *
   * To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows:
   *
   * - CLI - Specify the Region when you use the CloudFront scope: `--scope=CLOUDFRONT --region=us-east-1`.
   * - API and SDKs - For all calls, use the Region endpoint us-east-1.
   *
   * @public
   */
  Scope: Scope | undefined;

  /**
   * The unique identifier for the web ACL. This ID is returned in the responses to create and list commands. You provide it to operations like update and delete.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The action to perform if none of the `Rules` contained in the `WebACL` match.
   *
   * @public
   */
  DefaultAction: DefaultAction | undefined;

  /**
   * A description of the web ACL that helps with identification.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The Rule statements used to identify the web requests that you want to manage. Each rule includes one top-level statement that WAF uses to identify matching web requests, and parameters that govern how WAF handles them.
   *
   * @public
   */
  Rules?: Rule[] | undefined;

  /**
   * Defines and enables Amazon CloudWatch metrics and web request sample collection.
   *
   * @public
   */
  VisibilityConfig: VisibilityConfig | undefined;

  /**
   * Specifies data protection to apply to the web request data for the web ACL. This is a web ACL level data protection option.
   *
   * The data protection that you configure for the web ACL alters the data that's available for any other data collection activity, including your WAF logging destinations, web ACL request sampling, and Amazon Security Lake data collection and management. Your other option for data protection is in the logging configuration, which only affects logging.
   *
   * @public
   */
  DataProtectionConfig?: DataProtectionConfig | undefined;

  /**
   * A token used for optimistic locking. WAF returns a token to your `get` and `list` requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like `update` and `delete`. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a `WAFOptimisticLockException`. If this happens, perform another `get`, and use the new token returned by that operation.
   *
   * @public
   */
  LockToken: string | undefined;

  /**
   * A map of custom response keys and content bodies. When you create a rule with a block action, you can send a custom response to the web request. You define these for the web ACL, and then use them in the rules and default actions that you define in the web ACL.
   *
   * For information about customizing web requests and responses, see [Customizing web requests and responses in WAF](https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html) in the *WAF Developer Guide*.
   *
   * For information about the limits on count and size for custom request and response settings, see [WAF quotas](https://docs.aws.amazon.com/waf/latest/developerguide/limits.html) in the *WAF Developer Guide*.
   *
   * @public
   */
  CustomResponseBodies?: Record<string, CustomResponseBody> | undefined;

  /**
   * Specifies how WAF should handle `CAPTCHA` evaluations for rules that don't have their own `CaptchaConfig` settings. If you don't specify this, WAF uses its default settings for `CaptchaConfig`.
   *
   * @public
   */
  CaptchaConfig?: CaptchaConfig | undefined;

  /**
   * Specifies how WAF should handle challenge evaluations for rules that don't have their own `ChallengeConfig` settings. If you don't specify this, WAF uses its default settings for `ChallengeConfig`.
   *
   * @public
   */
  ChallengeConfig?: ChallengeConfig | undefined;

  /**
   * Specifies the domains that WAF should accept in a web request token. This enables the use of tokens across multiple protected websites. When WAF provides a token, it uses the domain of the Amazon Web Services resource that the web ACL is protecting. If you don't specify a list of token domains, WAF accepts tokens only for the domain of the protected resource. With a token domain list, WAF accepts the resource's host domain plus all domains in the token domain list, including their prefixed subdomains.
   *
   * Example JSON: `"TokenDomains": \{ "mywebsite.com", "myotherwebsite.com" \}`
   *
   * Public suffixes aren't allowed. For example, you can't use `gov.au` or `co.uk` as token domains.
   *
   * @public
   */
  TokenDomains?: string[] | undefined;

  /**
   * Specifies custom configurations for the associations between the web ACL and protected resources.
   *
   * Use this to customize the maximum size of the request body that your protected resources forward to WAF for inspection. You can customize this setting for CloudFront, API Gateway, Amazon Cognito, App Runner, or Verified Access resources. The default setting is 16 KB (16,384 bytes).
   *
   * > **Note:** You are charged additional fees when your protected resources forward body sizes that are larger than the default. For more information, see [WAF Pricing](http://aws.amazon.com/waf/pricing/).
   *
   * For Application Load Balancer and AppSync, the limit is fixed at 8 KB (8,192 bytes).
   *
   * You can also use this to have your CloudFront distributions insert the WAF challenge JavaScript SDK into the HTML responses that they return. For more information, see the `ChallengeJavascriptSdkInjection` setting.
   *
   * @public
   */
  AssociationConfig?: AssociationConfig | undefined;

  /**
   * Specifies the type of DDoS protection to apply to web request data for a web ACL. For most scenarios, it is recommended to use the default protection level, `ACTIVE_UNDER_DDOS`. If a web ACL is associated with multiple Application Load Balancers, the changes you make to DDoS protection in that web ACL will apply to all associated Application Load Balancers.
   *
   * @public
   */
  OnSourceDDoSProtectionConfig?: OnSourceDDoSProtectionConfig | undefined;

  /**
   * Configures the ability for the WAF console to store and retrieve application attributes. Application attributes help WAF give recommendations for protection packs.
   *
   * When using `UpdateWebACL`, `ApplicationConfig` follows these rules:
   *
   * - If you omit `ApplicationConfig` from the request, all existing entries in the web ACL are retained.
   * - If you include `ApplicationConfig`, entries must match the existing values exactly. Any attempt to modify existing entries will result in an error.
   *
   * @public
   */
  ApplicationConfig?: ApplicationConfig | undefined;

  /**
   * The monetization configuration for the web ACL. Provide this when any rule in the web ACL uses the `Monetize` action.
   *
   * @public
   */
  MonetizationConfig?: MonetizationConfig | undefined;
}

/**
 * @public
 */
export interface GetRuleGroupResponse {
  /**
   * @public
   */
  RuleGroup?: RuleGroup | undefined;

  /**
   * A token used for optimistic locking. WAF returns a token to your `get` and `list` requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like `update` and `delete`. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a `WAFOptimisticLockException`. If this happens, perform another `get`, and use the new token returned by that operation.
   *
   * @public
   */
  LockToken?: string | undefined;
}

/**
 * A web ACL defines a collection of rules to use to inspect and control web requests. Each rule has a statement that defines what to look for in web requests and an action that WAF applies to requests that match the statement. In the web ACL, you assign a default action to take (allow, block) for any request that does not match any of the rules. The rules in a web ACL can be a combination of the types Rule, RuleGroup, and managed rule group. You can associate a web ACL with one or more Amazon Web Services resources to protect. The resource types include Amazon CloudFront distribution, Amazon API Gateway REST API, Application Load Balancer, AppSync GraphQL API, Amazon Cognito user pool, App Runner service, Amplify application, Amazon Web Services Verified Access instance, and Amazon Bedrock AgentCore Gateway.
 *
 * @public
 */
export interface WebACL {
  /**
   * The name of the web ACL. You cannot change the name of a web ACL after you create it.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A unique identifier for the `WebACL`. This ID is returned in the responses to create and list commands. You use this ID to do things like get, update, and delete a `WebACL`.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the web ACL that you want to associate with the resource.
   *
   * @public
   */
  ARN: string | undefined;

  /**
   * The action to perform if none of the `Rules` contained in the `WebACL` match.
   *
   * @public
   */
  DefaultAction: DefaultAction | undefined;

  /**
   * A description of the web ACL that helps with identification.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The Rule statements used to identify the web requests that you want to manage. Each rule includes one top-level statement that WAF uses to identify matching web requests, and parameters that govern how WAF handles them.
   *
   * @public
   */
  Rules?: Rule[] | undefined;

  /**
   * Defines and enables Amazon CloudWatch metrics and web request sample collection.
   *
   * @public
   */
  VisibilityConfig: VisibilityConfig | undefined;

  /**
   * Specifies data protection to apply to the web request data for the web ACL. This is a web ACL level data protection option.
   *
   * The data protection that you configure for the web ACL alters the data that's available for any other data collection activity, including your WAF logging destinations, web ACL request sampling, and Amazon Security Lake data collection and management. Your other option for data protection is in the logging configuration, which only affects logging.
   *
   * @public
   */
  DataProtectionConfig?: DataProtectionConfig | undefined;

  /**
   * The web ACL capacity units (WCUs) currently being used by this web ACL.
   *
   * WAF uses WCUs to calculate and control the operating resources that are used to run your rules, rule groups, and web ACLs. WAF calculates capacity differently for each rule type, to reflect the relative cost of each rule. Simple rules that cost little to run use fewer WCUs than more complex rules that use more processing power. Rule group capacity is fixed at creation, which helps users plan their web ACL WCU usage when they use a rule group. For more information, see [WAF web ACL capacity units (WCU)](https://docs.aws.amazon.com/waf/latest/developerguide/aws-waf-capacity-units.html) in the *WAF Developer Guide*.
   *
   * @public
   */
  Capacity?: number | undefined;

  /**
   * The first set of rules for WAF to process in the web ACL. This is defined in an Firewall Manager WAF policy and contains only rule group references. You can't alter these. Any rules and rule groups that you define for the web ACL are prioritized after these.
   *
   * In the Firewall Manager WAF policy, the Firewall Manager administrator can define a set of rule groups to run first in the web ACL and a set of rule groups to run last. Within each set, the administrator prioritizes the rule groups, to determine their relative processing order.
   *
   * @public
   */
  PreProcessFirewallManagerRuleGroups?: FirewallManagerRuleGroup[] | undefined;

  /**
   * The last set of rules for WAF to process in the web ACL. This is defined in an Firewall Manager WAF policy and contains only rule group references. You can't alter these. Any rules and rule groups that you define for the web ACL are prioritized before these.
   *
   * In the Firewall Manager WAF policy, the Firewall Manager administrator can define a set of rule groups to run first in the web ACL and a set of rule groups to run last. Within each set, the administrator prioritizes the rule groups, to determine their relative processing order.
   *
   * @public
   */
  PostProcessFirewallManagerRuleGroups?: FirewallManagerRuleGroup[] | undefined;

  /**
   * Indicates whether this web ACL was created by Firewall Manager and is being managed by Firewall Manager. If true, then only Firewall Manager can delete the web ACL or any Firewall Manager rule groups in the web ACL. See also the properties `RetrofittedByFirewallManager`, `PreProcessFirewallManagerRuleGroups`, and `PostProcessFirewallManagerRuleGroups`.
   *
   * @public
   */
  ManagedByFirewallManager?: boolean | undefined;

  /**
   * The label namespace prefix for this web ACL. All labels added by rules in this web ACL have this prefix.
   *
   * - The syntax for the label namespace prefix for a web ACL is the following:
   *
   *   `awswaf:<account ID>:webacl:<web ACL name>:`
   * - When a rule with a label matches a web request, WAF adds the fully qualified label to the request. A fully qualified label is made up of the label namespace from the rule group or web ACL where the rule is defined and the label from the rule, separated by a colon:
   *
   *   `<label namespace>:<label from rule>`
   *
   * @public
   */
  LabelNamespace?: string | undefined;

  /**
   * A map of custom response keys and content bodies. When you create a rule with a block action, you can send a custom response to the web request. You define these for the web ACL, and then use them in the rules and default actions that you define in the web ACL.
   *
   * For information about customizing web requests and responses, see [Customizing web requests and responses in WAF](https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html) in the *WAF Developer Guide*.
   *
   * For information about the limits on count and size for custom request and response settings, see [WAF quotas](https://docs.aws.amazon.com/waf/latest/developerguide/limits.html) in the *WAF Developer Guide*.
   *
   * @public
   */
  CustomResponseBodies?: Record<string, CustomResponseBody> | undefined;

  /**
   * Specifies how WAF should handle `CAPTCHA` evaluations for rules that don't have their own `CaptchaConfig` settings. If you don't specify this, WAF uses its default settings for `CaptchaConfig`.
   *
   * @public
   */
  CaptchaConfig?: CaptchaConfig | undefined;

  /**
   * Specifies how WAF should handle challenge evaluations for rules that don't have their own `ChallengeConfig` settings. If you don't specify this, WAF uses its default settings for `ChallengeConfig`.
   *
   * @public
   */
  ChallengeConfig?: ChallengeConfig | undefined;

  /**
   * Specifies the domains that WAF should accept in a web request token. This enables the use of tokens across multiple protected websites. When WAF provides a token, it uses the domain of the Amazon Web Services resource that the web ACL is protecting. If you don't specify a list of token domains, WAF accepts tokens only for the domain of the protected resource. With a token domain list, WAF accepts the resource's host domain plus all domains in the token domain list, including their prefixed subdomains.
   *
   * @public
   */
  TokenDomains?: string[] | undefined;

  /**
   * Specifies custom configurations for the associations between the web ACL and protected resources.
   *
   * Use this to customize the maximum size of the request body that your protected resources forward to WAF for inspection. You can customize this setting for CloudFront, API Gateway, Amazon Cognito, App Runner, or Verified Access resources. The default setting is 16 KB (16,384 bytes).
   *
   * > **Note:** You are charged additional fees when your protected resources forward body sizes that are larger than the default. For more information, see [WAF Pricing](http://aws.amazon.com/waf/pricing/).
   *
   * For Application Load Balancer and AppSync, the limit is fixed at 8 KB (8,192 bytes).
   *
   * You can also use this to have your CloudFront distributions insert the WAF challenge JavaScript SDK into the HTML responses that they return. For more information, see the `ChallengeJavascriptSdkInjection` setting.
   *
   * @public
   */
  AssociationConfig?: AssociationConfig | undefined;

  /**
   * Indicates whether this web ACL was created by a customer account and then retrofitted by Firewall Manager. If true, then the web ACL is currently being managed by a Firewall Manager WAF policy, and only Firewall Manager can manage any Firewall Manager rule groups in the web ACL. See also the properties `ManagedByFirewallManager`, `PreProcessFirewallManagerRuleGroups`, and `PostProcessFirewallManagerRuleGroups`.
   *
   * @public
   */
  RetrofittedByFirewallManager?: boolean | undefined;

  /**
   * Configures the level of DDoS protection that applies to web ACLs associated with Application Load Balancers.
   *
   * @public
   */
  OnSourceDDoSProtectionConfig?: OnSourceDDoSProtectionConfig | undefined;

  /**
   * Returns a list of `ApplicationAttribute`s.
   *
   * @public
   */
  ApplicationConfig?: ApplicationConfig | undefined;

  /**
   * The monetization configuration for the web ACL. Required when any rule in the web ACL uses the `Monetize` action. Specifies the cryptocurrency payment networks and currency mode for AI bot monetization.
   *
   * @public
   */
  MonetizationConfig?: MonetizationConfig | undefined;
}

/**
 * @public
 */
export interface GetWebACLForResourceResponse {
  /**
   * The web ACL that is associated with the resource. If there is no associated resource, WAF returns a null web ACL.
   *
   * @public
   */
  WebACL?: WebACL | undefined;
}

/**
 * @public
 */
export interface GetWebACLResponse {
  /**
   * The web ACL specification. You can modify the settings in this web ACL and use it to update this web ACL or create a new one.
   *
   * @public
   */
  WebACL?: WebACL | undefined;

  /**
   * A token used for optimistic locking. WAF returns a token to your `get` and `list` requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like `update` and `delete`. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a `WAFOptimisticLockException`. If this happens, perform another `get`, and use the new token returned by that operation.
   *
   * @public
   */
  LockToken?: string | undefined;

  /**
   * The URL to use in SDK integrations with Amazon Web Services managed rule groups. For example, you can use the integration SDKs with the account takeover prevention managed rule group `AWSManagedRulesATPRuleSet` and the account creation fraud prevention managed rule group `AWSManagedRulesACFPRuleSet`. This is only populated if you are using a rule group in your web ACL that integrates with your applications in this way. For more information, see [WAF client application integration](https://docs.aws.amazon.com/waf/latest/developerguide/waf-application-integration.html) in the *WAF Developer Guide*.
   *
   * @public
   */
  ApplicationIntegrationURL?: string | undefined;
}
