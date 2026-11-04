// smithy-typescript generated code
import type {
  ChangeAction,
  ChangeTokenStatus,
  ComparisonOperator,
  GeoMatchConstraintType,
  GeoMatchConstraintValue,
  IPSetDescriptorType,
  MatchFieldType,
  PositionalConstraint,
  PredicateType,
  RateKey,
  TextTransformation,
  WafActionType,
  WafOverrideActionType,
  WafRuleType,
} from "./enums";

/**
 * > **Note:**
 * >
 * > This is **AWS WAF Classic** documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 * >
 * > **For the latest version of AWS WAF**, use the AWS WAFV2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html). With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 *
 *
 *
 * For the action that is associated with a rule in a `WebACL`, specifies the action that you want AWS WAF to perform when a web request matches all of the conditions in a rule. For the default action in a `WebACL`, specifies the action that you want AWS WAF to take when a web request doesn't match all of the conditions in any of the rules in a `WebACL`.
 *
 * @public
 */
export interface WafAction {
  /**
   * Specifies how you want AWS WAF to respond to requests that match the settings in a `Rule`. Valid settings include the following:
   *
   * - `ALLOW`: AWS WAF allows requests
   * - `BLOCK`: AWS WAF blocks requests
   * - `COUNT`: AWS WAF increments a counter of the requests that match all of the conditions in the rule. AWS WAF then continues to inspect the web request based on the remaining rules in the web ACL. You can't specify `COUNT` for the default action for a `WebACL`.
   *
   * @public
   */
  Type: WafActionType | undefined;
}

/**
 * > **Note:**
 * >
 * > This is **AWS WAF Classic** documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 * >
 * > **For the latest version of AWS WAF**, use the AWS WAFV2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html). With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 *
 *
 *
 * The rule to exclude from a rule group. This is applicable only when the `ActivatedRule` refers to a `RuleGroup`. The rule must belong to the `RuleGroup` that is specified by the `ActivatedRule`.
 *
 * @public
 */
export interface ExcludedRule {
  /**
   * The unique identifier for the rule to exclude from the rule group.
   *
   * @public
   */
  RuleId: string | undefined;
}

/**
 * > **Note:**
 * >
 * > This is **AWS WAF Classic** documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 * >
 * > **For the latest version of AWS WAF**, use the AWS WAFV2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html). With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 *
 *
 *
 * The action to take if any rule within the `RuleGroup` matches a request.
 *
 * @public
 */
export interface WafOverrideAction {
  /**
   * `COUNT` overrides the action specified by the individual rule within a `RuleGroup` . If set to `NONE`, the rule's action will take place.
   *
   * @public
   */
  Type: WafOverrideActionType | undefined;
}

/**
 * > **Note:**
 * >
 * > This is **AWS WAF Classic** documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 * >
 * > **For the latest version of AWS WAF**, use the AWS WAFV2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html). With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 *
 *
 *
 * The `ActivatedRule` object in an UpdateWebACL request specifies a `Rule` that you want to insert or delete, the priority of the `Rule` in the `WebACL`, and the action that you want AWS WAF to take when a web request matches the `Rule` (`ALLOW`, `BLOCK`, or `COUNT`).
 *
 * To specify whether to insert or delete a `Rule`, use the `Action` parameter in the WebACLUpdate data type.
 *
 * @public
 */
export interface ActivatedRule {
  /**
   * Specifies the order in which the `Rules` in a `WebACL` are evaluated. Rules with a lower value for `Priority` are evaluated before `Rules` with a higher value. The value must be a unique integer. If you add multiple `Rules` to a `WebACL`, the values don't need to be consecutive.
   *
   * @public
   */
  Priority: number | undefined;

  /**
   * The `RuleId` for a `Rule`. You use `RuleId` to get more information about a `Rule` (see GetRule), update a `Rule` (see UpdateRule), insert a `Rule` into a `WebACL` or delete a one from a `WebACL` (see UpdateWebACL), or delete a `Rule` from AWS WAF (see DeleteRule).
   *
   * `RuleId` is returned by CreateRule and by ListRules.
   *
   * @public
   */
  RuleId: string | undefined;

  /**
   * Specifies the action that CloudFront or AWS WAF takes when a web request matches the conditions in the `Rule`. Valid values for `Action` include the following:
   *
   * - `ALLOW`: CloudFront responds with the requested object.
   * - `BLOCK`: CloudFront responds with an HTTP 403 (Forbidden) status code.
   * - `COUNT`: AWS WAF increments a counter of requests that match the conditions in the rule and then continues to inspect the web request based on the remaining rules in the web ACL.
   *
   * `ActivatedRule|OverrideAction` applies only when updating or adding a `RuleGroup` to a `WebACL`. In this case, you do not use `ActivatedRule|Action`. For all other update requests, `ActivatedRule|Action` is used instead of `ActivatedRule|OverrideAction`.
   *
   * @public
   */
  Action?: WafAction | undefined;

  /**
   * Use the `OverrideAction` to test your `RuleGroup`.
   *
   * Any rule in a `RuleGroup` can potentially block a request. If you set the `OverrideAction` to `None`, the `RuleGroup` will block a request if any individual rule in the `RuleGroup` matches the request and is configured to block that request. However if you first want to test the `RuleGroup`, set the `OverrideAction` to `Count`. The `RuleGroup` will then override any block action specified by individual rules contained within the group. Instead of blocking matching requests, those requests will be counted. You can view a record of counted requests using GetSampledRequests.
   *
   * `ActivatedRule|OverrideAction` applies only when updating or adding a `RuleGroup` to a `WebACL`. In this case you do not use `ActivatedRule|Action`. For all other update requests, `ActivatedRule|Action` is used instead of `ActivatedRule|OverrideAction`.
   *
   * @public
   */
  OverrideAction?: WafOverrideAction | undefined;

  /**
   * The rule type, either `REGULAR`, as defined by Rule, `RATE_BASED`, as defined by RateBasedRule, or `GROUP`, as defined by RuleGroup. The default is REGULAR. Although this field is optional, be aware that if you try to add a RATE_BASED rule to a web ACL without setting the type, the UpdateWebACL request will fail because the request tries to add a REGULAR rule with the specified ID, which does not exist.
   *
   * @public
   */
  Type?: WafRuleType | undefined;

  /**
   * An array of rules to exclude from a rule group. This is applicable only when the `ActivatedRule` refers to a `RuleGroup`.
   *
   * Sometimes it is necessary to troubleshoot rule groups that are blocking traffic unexpectedly (false positives). One troubleshooting technique is to identify the specific rule within the rule group that is blocking the legitimate traffic and then disable (exclude) that particular rule. You can exclude rules from both your own rule groups and AWS Marketplace rule groups that have been associated with a web ACL.
   *
   * Specifying `ExcludedRules` does not remove those rules from the rule group. Rather, it changes the action for the rules to `COUNT`. Therefore, requests that match an `ExcludedRule` are counted but not blocked. The `RuleGroup` owner will receive COUNT metrics for each `ExcludedRule`.
   *
   * If you want to exclude rules from a rule group that is already associated with a web ACL, perform the following steps:
   *
   * 1. Use the AWS WAF logs to identify the IDs of the rules that you want to exclude. For more information about the logs, see [Logging Web ACL Traffic Information](https://docs.aws.amazon.com/waf/latest/developerguide/logging.html).
   * 2. Submit an UpdateWebACL request that has two actions:
   *
   *    - The first action deletes the existing rule group from the web ACL. That is, in the UpdateWebACL request, the first `Updates:Action` should be `DELETE` and `Updates:ActivatedRule:RuleId` should be the rule group that contains the rules that you want to exclude.
   *    - The second action inserts the same rule group back in, but specifying the rules to exclude. That is, the second `Updates:Action` should be `INSERT`, `Updates:ActivatedRule:RuleId` should be the rule group that you just removed, and `ExcludedRules` should contain the rules that you want to exclude.
   *
   * @public
   */
  ExcludedRules?: ExcludedRule[] | undefined;
}

/**
 * @public
 */
export interface CreateByteMatchSetRequest {
  /**
   * A friendly name or description of the ByteMatchSet. You can't change `Name` after you create a `ByteMatchSet`.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The value returned by the most recent call to GetChangeToken.
   *
   * @public
   */
  ChangeToken: string | undefined;
}

/**
 * > **Note:**
 * >
 * > This is **AWS WAF Classic** documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 * >
 * > **For the latest version of AWS WAF**, use the AWS WAFV2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html). With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 *
 *
 *
 * Specifies where in a web request to look for `TargetString`.
 *
 * @public
 */
export interface FieldToMatch {
  /**
   * The part of the web request that you want AWS WAF to search for a specified string. Parts of a request that you can search include the following:
   *
   * - `HEADER`: A specified request header, for example, the value of the `User-Agent` or `Referer` header. If you choose `HEADER` for the type, specify the name of the header in `Data`.
   * - `METHOD`: The HTTP method, which indicated the type of operation that the request is asking the origin to perform. Amazon CloudFront supports the following methods: `DELETE`, `GET`, `HEAD`, `OPTIONS`, `PATCH`, `POST`, and `PUT`.
   * - `QUERY_STRING`: A query string, which is the part of a URL that appears after a `?` character, if any.
   * - `URI`: The part of a web request that identifies a resource, for example, `/images/daily-ad.jpg`.
   * - `BODY`: The part of a request that contains any additional data that you want to send to your web server as the HTTP request body, such as data from a form. The request body immediately follows the request headers. Note that only the first `8192` bytes of the request body are forwarded to AWS WAF for inspection. To allow or block requests based on the length of the body, you can create a size constraint set. For more information, see CreateSizeConstraintSet.
   * - `SINGLE_QUERY_ARG`: The parameter in the query string that you will inspect, such as *UserName* or *SalesRegion*. The maximum length for `SINGLE_QUERY_ARG` is 30 characters.
   * - `ALL_QUERY_ARGS`: Similar to `SINGLE_QUERY_ARG`, but rather than inspecting a single parameter, AWS WAF will inspect all parameters within the query for the value or regex pattern that you specify in `TargetString`.
   *
   * @public
   */
  Type: MatchFieldType | undefined;

  /**
   * When the value of `Type` is `HEADER`, enter the name of the header that you want AWS WAF to search, for example, `User-Agent` or `Referer`. The name of the header is not case sensitive.
   *
   * When the value of `Type` is `SINGLE_QUERY_ARG`, enter the name of the parameter that you want AWS WAF to search, for example, `UserName` or `SalesRegion`. The parameter name is not case sensitive.
   *
   * If the value of `Type` is any other value, omit `Data`.
   *
   * @public
   */
  Data?: string | undefined;
}

/**
 * > **Note:**
 * >
 * > This is **AWS WAF Classic** documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 * >
 * > **For the latest version of AWS WAF**, use the AWS WAFV2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html). With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 *
 *
 *
 * The bytes (typically a string that corresponds with ASCII characters) that you want AWS WAF to search for in web requests, the location in requests that you want AWS WAF to search, and other settings.
 *
 * @public
 */
export interface ByteMatchTuple {
  /**
   * The part of a web request that you want AWS WAF to search, such as a specified header or a query string. For more information, see FieldToMatch.
   *
   * @public
   */
  FieldToMatch: FieldToMatch | undefined;

  /**
   * The value that you want AWS WAF to search for. AWS WAF searches for the specified string in the part of web requests that you specified in `FieldToMatch`. The maximum length of the value is 50 bytes.
   *
   * Valid values depend on the values that you specified for `FieldToMatch`:
   *
   *
   *
   * - `HEADER`: The value that you want AWS WAF to search for in the request header that you specified in FieldToMatch, for example, the value of the `User-Agent` or `Referer` header.
   * - `METHOD`: The HTTP method, which indicates the type of operation specified in the request. CloudFront supports the following methods: `DELETE`, `GET`, `HEAD`, `OPTIONS`, `PATCH`, `POST`, and `PUT`.
   * - `QUERY_STRING`: The value that you want AWS WAF to search for in the query string, which is the part of a URL that appears after a `?` character.
   * - `URI`: The value that you want AWS WAF to search for in the part of a URL that identifies a resource, for example, `/images/daily-ad.jpg`.
   * - `BODY`: The part of a request that contains any additional data that you want to send to your web server as the HTTP request body, such as data from a form. The request body immediately follows the request headers. Note that only the first `8192` bytes of the request body are forwarded to AWS WAF for inspection. To allow or block requests based on the length of the body, you can create a size constraint set. For more information, see CreateSizeConstraintSet.
   * - `SINGLE_QUERY_ARG`: The parameter in the query string that you will inspect, such as *UserName* or *SalesRegion*. The maximum length for `SINGLE_QUERY_ARG` is 30 characters.
   * - `ALL_QUERY_ARGS`: Similar to `SINGLE_QUERY_ARG`, but instead of inspecting a single parameter, AWS WAF inspects all parameters within the query string for the value or regex pattern that you specify in `TargetString`.
   *
   *
   *
   * If `TargetString` includes alphabetic characters A-Z and a-z, note that the value is case sensitive.
   *
   * **If you're using the AWS WAF API**
   *
   * Specify a base64-encoded version of the value. The maximum length of the value before you base64-encode it is 50 bytes.
   *
   * For example, suppose the value of `Type` is `HEADER` and the value of `Data` is `User-Agent`. If you want to search the `User-Agent` header for the value `BadBot`, you base64-encode `BadBot` using MIME base64-encoding and include the resulting value, `QmFkQm90`, in the value of `TargetString`.
   *
   * **If you're using the AWS CLI or one of the AWS SDKs**
   *
   * The value that you want AWS WAF to search for. The SDK automatically base64 encodes the value.
   *
   * @public
   */
  TargetString: Uint8Array | undefined;

  /**
   * Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass AWS WAF. If you specify a transformation, AWS WAF performs the transformation on `FieldToMatch` before inspecting it for a match.
   *
   * You can only specify a single type of TextTransformation.
   *
   *
   *
   * **CMD_LINE**
   *
   * When you're concerned that attackers are injecting an operating system command line command and using unusual formatting to disguise some or all of the command, use this option to perform the following transformations:
   *
   * - Delete the following characters: \ " ' ^
   * - Delete spaces before the following characters: / (
   * - Replace the following characters with a space: , ;
   * - Replace multiple spaces with one space
   * - Convert uppercase letters (A-Z) to lowercase (a-z)
   *
   *
   *
   * **COMPRESS_WHITE_SPACE**
   *
   * Use this option to replace the following characters with a space character (decimal 32):
   *
   * - \f, formfeed, decimal 12
   * - \t, tab, decimal 9
   * - \n, newline, decimal 10
   * - \r, carriage return, decimal 13
   * - \v, vertical tab, decimal 11
   * - non-breaking space, decimal 160
   *
   * `COMPRESS_WHITE_SPACE` also replaces multiple spaces with one space.
   *
   *
   *
   * **HTML_ENTITY_DECODE**
   *
   * Use this option to replace HTML-encoded characters with unencoded characters. `HTML_ENTITY_DECODE` performs the following operations:
   *
   * - Replaces `(ampersand)quot;` with `"`
   * - Replaces `(ampersand)nbsp;` with a non-breaking space, decimal 160
   * - Replaces `(ampersand)lt;` with a "less than" symbol
   * - Replaces `(ampersand)gt;` with `>`
   * - Replaces characters that are represented in hexadecimal format, `(ampersand)#xhhhh;`, with the corresponding characters
   * - Replaces characters that are represented in decimal format, `(ampersand)#nnnn;`, with the corresponding characters
   *
   *
   *
   * **LOWERCASE**
   *
   * Use this option to convert uppercase letters (A-Z) to lowercase (a-z).
   *
   *
   *
   * **URL_DECODE**
   *
   * Use this option to decode a URL-encoded value.
   *
   *
   *
   * **NONE**
   *
   * Specify `NONE` if you don't want to perform any text transformations.
   *
   * @public
   */
  TextTransformation: TextTransformation | undefined;

  /**
   * Within the portion of a web request that you want to search (for example, in the query string, if any), specify where you want AWS WAF to search. Valid values include the following:
   *
   * **CONTAINS**
   *
   * The specified part of the web request must include the value of `TargetString`, but the location doesn't matter.
   *
   *
   *
   * **CONTAINS_WORD**
   *
   * The specified part of the web request must include the value of `TargetString`, and `TargetString` must contain only alphanumeric characters or underscore (A-Z, a-z, 0-9, or _). In addition, `TargetString` must be a word, which means one of the following:
   *
   * - `TargetString` exactly matches the value of the specified part of the web request, such as the value of a header.
   * - `TargetString` is at the beginning of the specified part of the web request and is followed by a character other than an alphanumeric character or underscore (_), for example, `BadBot;`.
   * - `TargetString` is at the end of the specified part of the web request and is preceded by a character other than an alphanumeric character or underscore (_), for example, `;BadBot`.
   * - `TargetString` is in the middle of the specified part of the web request and is preceded and followed by characters other than alphanumeric characters or underscore (_), for example, `-BadBot;`.
   *
   * **EXACTLY**
   *
   * The value of the specified part of the web request must exactly match the value of `TargetString`.
   *
   * **STARTS_WITH**
   *
   * The value of `TargetString` must appear at the beginning of the specified part of the web request.
   *
   *
   *
   * **ENDS_WITH**
   *
   * The value of `TargetString` must appear at the end of the specified part of the web request.
   *
   * @public
   */
  PositionalConstraint: PositionalConstraint | undefined;
}

/**
 * > **Note:**
 * >
 * > This is **AWS WAF Classic** documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 * >
 * > **For the latest version of AWS WAF**, use the AWS WAFV2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html). With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 *
 *
 *
 * In a GetByteMatchSet request, `ByteMatchSet` is a complex type that contains the `ByteMatchSetId` and `Name` of a `ByteMatchSet`, and the values that you specified when you updated the `ByteMatchSet`.
 *
 * A complex type that contains `ByteMatchTuple` objects, which specify the parts of web requests that you want AWS WAF to inspect and the values that you want AWS WAF to search for. If a `ByteMatchSet` contains more than one `ByteMatchTuple` object, a request needs to match the settings in only one `ByteMatchTuple` to be considered a match.
 *
 * @public
 */
export interface ByteMatchSet {
  /**
   * The `ByteMatchSetId` for a `ByteMatchSet`. You use `ByteMatchSetId` to get information about a `ByteMatchSet` (see GetByteMatchSet), update a `ByteMatchSet` (see UpdateByteMatchSet), insert a `ByteMatchSet` into a `Rule` or delete one from a `Rule` (see UpdateRule), and delete a `ByteMatchSet` from AWS WAF (see DeleteByteMatchSet).
   *
   * `ByteMatchSetId` is returned by CreateByteMatchSet and by ListByteMatchSets.
   *
   * @public
   */
  ByteMatchSetId: string | undefined;

  /**
   * A friendly name or description of the ByteMatchSet. You can't change `Name` after you create a `ByteMatchSet`.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Specifies the bytes (typically a string that corresponds with ASCII characters) that you want AWS WAF to search for in web requests, the location in requests that you want AWS WAF to search, and other settings.
   *
   * @public
   */
  ByteMatchTuples: ByteMatchTuple[] | undefined;
}

/**
 * @public
 */
export interface CreateByteMatchSetResponse {
  /**
   * A ByteMatchSet that contains no `ByteMatchTuple` objects.
   *
   * @public
   */
  ByteMatchSet?: ByteMatchSet | undefined;

  /**
   * The `ChangeToken` that you used to submit the `CreateByteMatchSet` request. You can also use this value to query the status of the request. For more information, see GetChangeTokenStatus.
   *
   * @public
   */
  ChangeToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateGeoMatchSetRequest {
  /**
   * A friendly name or description of the GeoMatchSet. You can't change `Name` after you create the `GeoMatchSet`.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The value returned by the most recent call to GetChangeToken.
   *
   * @public
   */
  ChangeToken: string | undefined;
}

/**
 * > **Note:**
 * >
 * > This is **AWS WAF Classic** documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 * >
 * > **For the latest version of AWS WAF**, use the AWS WAFV2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html). With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 *
 *
 *
 * The country from which web requests originate that you want AWS WAF to search for.
 *
 * @public
 */
export interface GeoMatchConstraint {
  /**
   * The type of geographical area you want AWS WAF to search for. Currently `Country` is the only valid value.
   *
   * @public
   */
  Type: GeoMatchConstraintType | undefined;

  /**
   * The country that you want AWS WAF to search for.
   *
   * @public
   */
  Value: GeoMatchConstraintValue | undefined;
}

/**
 * > **Note:**
 * >
 * > This is **AWS WAF Classic** documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 * >
 * > **For the latest version of AWS WAF**, use the AWS WAFV2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html). With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 *
 *
 *
 * Contains one or more countries that AWS WAF will search for.
 *
 * @public
 */
export interface GeoMatchSet {
  /**
   * The `GeoMatchSetId` for an `GeoMatchSet`. You use `GeoMatchSetId` to get information about a `GeoMatchSet` (see GeoMatchSet), update a `GeoMatchSet` (see UpdateGeoMatchSet), insert a `GeoMatchSet` into a `Rule` or delete one from a `Rule` (see UpdateRule), and delete a `GeoMatchSet` from AWS WAF (see DeleteGeoMatchSet).
   *
   * `GeoMatchSetId` is returned by CreateGeoMatchSet and by ListGeoMatchSets.
   *
   * @public
   */
  GeoMatchSetId: string | undefined;

  /**
   * A friendly name or description of the GeoMatchSet. You can't change the name of an `GeoMatchSet` after you create it.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * An array of GeoMatchConstraint objects, which contain the country that you want AWS WAF to search for.
   *
   * @public
   */
  GeoMatchConstraints: GeoMatchConstraint[] | undefined;
}

/**
 * @public
 */
export interface CreateGeoMatchSetResponse {
  /**
   * The GeoMatchSet returned in the `CreateGeoMatchSet` response. The `GeoMatchSet` contains no `GeoMatchConstraints`.
   *
   * @public
   */
  GeoMatchSet?: GeoMatchSet | undefined;

  /**
   * The `ChangeToken` that you used to submit the `CreateGeoMatchSet` request. You can also use this value to query the status of the request. For more information, see GetChangeTokenStatus.
   *
   * @public
   */
  ChangeToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateIPSetRequest {
  /**
   * A friendly name or description of the IPSet. You can't change `Name` after you create the `IPSet`.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The value returned by the most recent call to GetChangeToken.
   *
   * @public
   */
  ChangeToken: string | undefined;
}

/**
 * > **Note:**
 * >
 * > This is **AWS WAF Classic** documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 * >
 * > **For the latest version of AWS WAF**, use the AWS WAFV2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html). With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 *
 *
 *
 * Specifies the IP address type (`IPV4` or `IPV6`) and the IP address range (in CIDR format) that web requests originate from.
 *
 * @public
 */
export interface IPSetDescriptor {
  /**
   * Specify `IPV4` or `IPV6`.
   *
   * @public
   */
  Type: IPSetDescriptorType | undefined;

  /**
   * Specify an IPv4 address by using CIDR notation. For example:
   *
   * - To configure AWS WAF to allow, block, or count requests that originated from the IP address 192.0.2.44, specify `192.0.2.44/32`.
   * - To configure AWS WAF to allow, block, or count requests that originated from IP addresses from 192.0.2.0 to 192.0.2.255, specify `192.0.2.0/24`.
   *
   *
   *
   * For more information about CIDR notation, see the Wikipedia entry [Classless Inter-Domain Routing](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing).
   *
   * Specify an IPv6 address by using CIDR notation. For example:
   *
   * - To configure AWS WAF to allow, block, or count requests that originated from the IP address 1111:0000:0000:0000:0000:0000:0000:0111, specify `1111:0000:0000:0000:0000:0000:0000:0111/128`.
   * - To configure AWS WAF to allow, block, or count requests that originated from IP addresses 1111:0000:0000:0000:0000:0000:0000:0000 to 1111:0000:0000:0000:ffff:ffff:ffff:ffff, specify `1111:0000:0000:0000:0000:0000:0000:0000/64`.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * > **Note:**
 * >
 * > This is **AWS WAF Classic** documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 * >
 * > **For the latest version of AWS WAF**, use the AWS WAFV2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html). With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 *
 *
 *
 * Contains one or more IP addresses or blocks of IP addresses specified in Classless Inter-Domain Routing (CIDR) notation. AWS WAF supports IPv4 address ranges: /8 and any range between /16 through /32. AWS WAF supports IPv6 address ranges: /24, /32, /48, /56, /64, and /128.
 *
 * To specify an individual IP address, you specify the four-part IP address followed by a `/32`, for example, 192.0.2.0/32. To block a range of IP addresses, you can specify /8 or any range between /16 through /32 (for IPv4) or /24, /32, /48, /56, /64, or /128 (for IPv6). For more information about CIDR notation, see the Wikipedia entry [Classless Inter-Domain Routing](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing).
 *
 * @public
 */
export interface IPSet {
  /**
   * The `IPSetId` for an `IPSet`. You use `IPSetId` to get information about an `IPSet` (see GetIPSet), update an `IPSet` (see UpdateIPSet), insert an `IPSet` into a `Rule` or delete one from a `Rule` (see UpdateRule), and delete an `IPSet` from AWS WAF (see DeleteIPSet).
   *
   * `IPSetId` is returned by CreateIPSet and by ListIPSets.
   *
   * @public
   */
  IPSetId: string | undefined;

  /**
   * A friendly name or description of the IPSet. You can't change the name of an `IPSet` after you create it.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The IP address type (`IPV4` or `IPV6`) and the IP address range (in CIDR notation) that web requests originate from. If the `WebACL` is associated with a CloudFront distribution and the viewer did not use an HTTP proxy or a load balancer to send the request, this is the value of the c-ip field in the CloudFront access logs.
   *
   * @public
   */
  IPSetDescriptors: IPSetDescriptor[] | undefined;
}

/**
 * @public
 */
export interface CreateIPSetResponse {
  /**
   * The IPSet returned in the `CreateIPSet` response.
   *
   * @public
   */
  IPSet?: IPSet | undefined;

  /**
   * The `ChangeToken` that you used to submit the `CreateIPSet` request. You can also use this value to query the status of the request. For more information, see GetChangeTokenStatus.
   *
   * @public
   */
  ChangeToken?: string | undefined;
}

/**
 * > **Note:**
 * >
 * > This is **AWS WAF Classic** documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 * >
 * > **For the latest version of AWS WAF**, use the AWS WAFV2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html). With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 *
 *
 *
 * A tag associated with an AWS resource. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing. For example, you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each AWS resource, up to 50 tags for a resource.
 *
 * Tagging is only available through the API, SDKs, and CLI. You can't manage or view tags through the AWS WAF Classic console. You can tag the AWS resources that you manage through AWS WAF Classic: web ACLs, rule groups, and rules.
 *
 * @public
 */
export interface Tag {
  /**
   * @public
   */
  Key: string | undefined;

  /**
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface CreateRateBasedRuleRequest {
  /**
   * A friendly name or description of the RateBasedRule. You can't change the name of a `RateBasedRule` after you create it.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A friendly name or description for the metrics for this `RateBasedRule`. The name can contain only alphanumeric characters (A-Z, a-z, 0-9), with maximum length 128 and minimum length one. It can't contain whitespace or metric names reserved for AWS WAF, including "All" and "Default_Action." You can't change the name of the metric after you create the `RateBasedRule`.
   *
   * @public
   */
  MetricName: string | undefined;

  /**
   * The field that AWS WAF uses to determine if requests are likely arriving from a single source and thus subject to rate monitoring. The only valid value for `RateKey` is `IP`. `IP` indicates that requests that arrive from the same IP address are subject to the `RateLimit` that is specified in the `RateBasedRule`.
   *
   * @public
   */
  RateKey: RateKey | undefined;

  /**
   * The maximum number of requests, which have an identical value in the field that is specified by `RateKey`, allowed in a five-minute period. If the number of requests exceeds the `RateLimit` and the other predicates specified in the rule are also met, AWS WAF triggers the action that is specified for this rule.
   *
   * @public
   */
  RateLimit: number | undefined;

  /**
   * The `ChangeToken` that you used to submit the `CreateRateBasedRule` request. You can also use this value to query the status of the request. For more information, see GetChangeTokenStatus.
   *
   * @public
   */
  ChangeToken: string | undefined;

  /**
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * > **Note:**
 * >
 * > This is **AWS WAF Classic** documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 * >
 * > **For the latest version of AWS WAF**, use the AWS WAFV2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html). With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 *
 *
 *
 * Specifies the ByteMatchSet, IPSet, SqlInjectionMatchSet, XssMatchSet, RegexMatchSet, GeoMatchSet, and SizeConstraintSet objects that you want to add to a `Rule` and, for each object, indicates whether you want to negate the settings, for example, requests that do NOT originate from the IP address 192.0.2.44.
 *
 * @public
 */
export interface Predicate {
  /**
   * Set `Negated` to `False` if you want AWS WAF to allow, block, or count requests based on the settings in the specified ByteMatchSet, IPSet, SqlInjectionMatchSet, XssMatchSet, RegexMatchSet, GeoMatchSet, or SizeConstraintSet. For example, if an `IPSet` includes the IP address `192.0.2.44`, AWS WAF will allow or block requests based on that IP address.
   *
   *
   *
   * Set `Negated` to `True` if you want AWS WAF to allow or block a request based on the negation of the settings in the ByteMatchSet, IPSet, SqlInjectionMatchSet, XssMatchSet, RegexMatchSet, GeoMatchSet, or SizeConstraintSet. For example, if an `IPSet` includes the IP address `192.0.2.44`, AWS WAF will allow, block, or count requests based on all IP addresses *except* `192.0.2.44`.
   *
   * @public
   */
  Negated: boolean | undefined;

  /**
   * The type of predicate in a `Rule`, such as `ByteMatch` or `IPSet`.
   *
   * @public
   */
  Type: PredicateType | undefined;

  /**
   * A unique identifier for a predicate in a `Rule`, such as `ByteMatchSetId` or `IPSetId`. The ID is returned by the corresponding `Create` or `List` command.
   *
   * @public
   */
  DataId: string | undefined;
}

/**
 * > **Note:**
 * >
 * > This is **AWS WAF Classic** documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 * >
 * > **For the latest version of AWS WAF**, use the AWS WAFV2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html). With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 *
 *
 *
 * A `RateBasedRule` is identical to a regular Rule, with one addition: a `RateBasedRule` counts the number of requests that arrive from a specified IP address every five minutes. For example, based on recent requests that you've seen from an attacker, you might create a `RateBasedRule` that includes the following conditions:
 *
 * - The requests come from 192.0.2.44.
 * - They contain the value `BadBot` in the `User-Agent` header.
 *
 * In the rule, you also define the rate limit as 1,000.
 *
 * Requests that meet both of these conditions and exceed 1,000 requests every five minutes trigger the rule's action (block or count), which is defined in the web ACL.
 *
 * @public
 */
export interface RateBasedRule {
  /**
   * A unique identifier for a `RateBasedRule`. You use `RuleId` to get more information about a `RateBasedRule` (see GetRateBasedRule), update a `RateBasedRule` (see UpdateRateBasedRule), insert a `RateBasedRule` into a `WebACL` or delete one from a `WebACL` (see UpdateWebACL), or delete a `RateBasedRule` from AWS WAF (see DeleteRateBasedRule).
   *
   * @public
   */
  RuleId: string | undefined;

  /**
   * A friendly name or description for a `RateBasedRule`. You can't change the name of a `RateBasedRule` after you create it.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A friendly name or description for the metrics for a `RateBasedRule`. The name can contain only alphanumeric characters (A-Z, a-z, 0-9), with maximum length 128 and minimum length one. It can't contain whitespace or metric names reserved for AWS WAF, including "All" and "Default_Action." You can't change the name of the metric after you create the `RateBasedRule`.
   *
   * @public
   */
  MetricName?: string | undefined;

  /**
   * The `Predicates` object contains one `Predicate` element for each ByteMatchSet, IPSet, or SqlInjectionMatchSet object that you want to include in a `RateBasedRule`.
   *
   * @public
   */
  MatchPredicates: Predicate[] | undefined;

  /**
   * The field that AWS WAF uses to determine if requests are likely arriving from single source and thus subject to rate monitoring. The only valid value for `RateKey` is `IP`. `IP` indicates that requests arriving from the same IP address are subject to the `RateLimit` that is specified in the `RateBasedRule`.
   *
   * @public
   */
  RateKey: RateKey | undefined;

  /**
   * The maximum number of requests, which have an identical value in the field specified by the `RateKey`, allowed in a five-minute period. If the number of requests exceeds the `RateLimit` and the other predicates specified in the rule are also met, AWS WAF triggers the action that is specified for this rule.
   *
   * @public
   */
  RateLimit: number | undefined;
}

/**
 * @public
 */
export interface CreateRateBasedRuleResponse {
  /**
   * The RateBasedRule that is returned in the `CreateRateBasedRule` response.
   *
   * @public
   */
  Rule?: RateBasedRule | undefined;

  /**
   * The `ChangeToken` that you used to submit the `CreateRateBasedRule` request. You can also use this value to query the status of the request. For more information, see GetChangeTokenStatus.
   *
   * @public
   */
  ChangeToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateRegexMatchSetRequest {
  /**
   * A friendly name or description of the RegexMatchSet. You can't change `Name` after you create a `RegexMatchSet`.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The value returned by the most recent call to GetChangeToken.
   *
   * @public
   */
  ChangeToken: string | undefined;
}

/**
 * > **Note:**
 * >
 * > This is **AWS WAF Classic** documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 * >
 * > **For the latest version of AWS WAF**, use the AWS WAFV2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html). With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 *
 *
 *
 * The regular expression pattern that you want AWS WAF to search for in web requests, the location in requests that you want AWS WAF to search, and other settings. Each `RegexMatchTuple` object contains:
 *
 * - The part of a web request that you want AWS WAF to inspect, such as a query string or the value of the `User-Agent` header.
 * - The identifier of the pattern (a regular expression) that you want AWS WAF to look for. For more information, see RegexPatternSet.
 * - Whether to perform any conversions on the request, such as converting it to lowercase, before inspecting it for the specified string.
 *
 * @public
 */
export interface RegexMatchTuple {
  /**
   * Specifies where in a web request to look for the `RegexPatternSet`.
   *
   * @public
   */
  FieldToMatch: FieldToMatch | undefined;

  /**
   * Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass AWS WAF. If you specify a transformation, AWS WAF performs the transformation on `RegexPatternSet` before inspecting a request for a match.
   *
   *
   *
   * You can only specify a single type of TextTransformation.
   *
   *
   *
   * **CMD_LINE**
   *
   * When you're concerned that attackers are injecting an operating system commandline command and using unusual formatting to disguise some or all of the command, use this option to perform the following transformations:
   *
   * - Delete the following characters: \ " ' ^
   * - Delete spaces before the following characters: / (
   * - Replace the following characters with a space: , ;
   * - Replace multiple spaces with one space
   * - Convert uppercase letters (A-Z) to lowercase (a-z)
   *
   *
   *
   * **COMPRESS_WHITE_SPACE**
   *
   * Use this option to replace the following characters with a space character (decimal 32):
   *
   * - \f, formfeed, decimal 12
   * - \t, tab, decimal 9
   * - \n, newline, decimal 10
   * - \r, carriage return, decimal 13
   * - \v, vertical tab, decimal 11
   * - non-breaking space, decimal 160
   *
   * `COMPRESS_WHITE_SPACE` also replaces multiple spaces with one space.
   *
   *
   *
   * **HTML_ENTITY_DECODE**
   *
   * Use this option to replace HTML-encoded characters with unencoded characters. `HTML_ENTITY_DECODE` performs the following operations:
   *
   * - Replaces `(ampersand)quot;` with `"`
   * - Replaces `(ampersand)nbsp;` with a non-breaking space, decimal 160
   * - Replaces `(ampersand)lt;` with a "less than" symbol
   * - Replaces `(ampersand)gt;` with `>`
   * - Replaces characters that are represented in hexadecimal format, `(ampersand)#xhhhh;`, with the corresponding characters
   * - Replaces characters that are represented in decimal format, `(ampersand)#nnnn;`, with the corresponding characters
   *
   *
   *
   * **LOWERCASE**
   *
   * Use this option to convert uppercase letters (A-Z) to lowercase (a-z).
   *
   *
   *
   * **URL_DECODE**
   *
   * Use this option to decode a URL-encoded value.
   *
   *
   *
   * **NONE**
   *
   * Specify `NONE` if you don't want to perform any text transformations.
   *
   * @public
   */
  TextTransformation: TextTransformation | undefined;

  /**
   * The `RegexPatternSetId` for a `RegexPatternSet`. You use `RegexPatternSetId` to get information about a `RegexPatternSet` (see GetRegexPatternSet), update a `RegexPatternSet` (see UpdateRegexPatternSet), insert a `RegexPatternSet` into a `RegexMatchSet` or delete one from a `RegexMatchSet` (see UpdateRegexMatchSet), and delete an `RegexPatternSet` from AWS WAF (see DeleteRegexPatternSet).
   *
   * `RegexPatternSetId` is returned by CreateRegexPatternSet and by ListRegexPatternSets.
   *
   * @public
   */
  RegexPatternSetId: string | undefined;
}

/**
 * > **Note:**
 * >
 * > This is **AWS WAF Classic** documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 * >
 * > **For the latest version of AWS WAF**, use the AWS WAFV2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html). With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 *
 *
 *
 * In a GetRegexMatchSet request, `RegexMatchSet` is a complex type that contains the `RegexMatchSetId` and `Name` of a `RegexMatchSet`, and the values that you specified when you updated the `RegexMatchSet`.
 *
 * The values are contained in a `RegexMatchTuple` object, which specify the parts of web requests that you want AWS WAF to inspect and the values that you want AWS WAF to search for. If a `RegexMatchSet` contains more than one `RegexMatchTuple` object, a request needs to match the settings in only one `ByteMatchTuple` to be considered a match.
 *
 * @public
 */
export interface RegexMatchSet {
  /**
   * The `RegexMatchSetId` for a `RegexMatchSet`. You use `RegexMatchSetId` to get information about a `RegexMatchSet` (see GetRegexMatchSet), update a `RegexMatchSet` (see UpdateRegexMatchSet), insert a `RegexMatchSet` into a `Rule` or delete one from a `Rule` (see UpdateRule), and delete a `RegexMatchSet` from AWS WAF (see DeleteRegexMatchSet).
   *
   * `RegexMatchSetId` is returned by CreateRegexMatchSet and by ListRegexMatchSets.
   *
   * @public
   */
  RegexMatchSetId?: string | undefined;

  /**
   * A friendly name or description of the RegexMatchSet. You can't change `Name` after you create a `RegexMatchSet`.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Contains an array of RegexMatchTuple objects. Each `RegexMatchTuple` object contains:
   *
   * - The part of a web request that you want AWS WAF to inspect, such as a query string or the value of the `User-Agent` header.
   * - The identifier of the pattern (a regular expression) that you want AWS WAF to look for. For more information, see RegexPatternSet.
   * - Whether to perform any conversions on the request, such as converting it to lowercase, before inspecting it for the specified string.
   *
   * @public
   */
  RegexMatchTuples?: RegexMatchTuple[] | undefined;
}

/**
 * @public
 */
export interface CreateRegexMatchSetResponse {
  /**
   * A RegexMatchSet that contains no `RegexMatchTuple` objects.
   *
   * @public
   */
  RegexMatchSet?: RegexMatchSet | undefined;

  /**
   * The `ChangeToken` that you used to submit the `CreateRegexMatchSet` request. You can also use this value to query the status of the request. For more information, see GetChangeTokenStatus.
   *
   * @public
   */
  ChangeToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateRegexPatternSetRequest {
  /**
   * A friendly name or description of the RegexPatternSet. You can't change `Name` after you create a `RegexPatternSet`.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The value returned by the most recent call to GetChangeToken.
   *
   * @public
   */
  ChangeToken: string | undefined;
}

/**
 * > **Note:**
 * >
 * > This is **AWS WAF Classic** documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 * >
 * > **For the latest version of AWS WAF**, use the AWS WAFV2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html). With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 *
 *
 *
 * The `RegexPatternSet` specifies the regular expression (regex) pattern that you want AWS WAF to search for, such as `B[a@]dB[o0]t`. You can then configure AWS WAF to reject those requests.
 *
 * @public
 */
export interface RegexPatternSet {
  /**
   * The identifier for the `RegexPatternSet`. You use `RegexPatternSetId` to get information about a `RegexPatternSet`, update a `RegexPatternSet`, remove a `RegexPatternSet` from a `RegexMatchSet`, and delete a `RegexPatternSet` from AWS WAF.
   *
   * `RegexMatchSetId` is returned by CreateRegexPatternSet and by ListRegexPatternSets.
   *
   * @public
   */
  RegexPatternSetId: string | undefined;

  /**
   * A friendly name or description of the RegexPatternSet. You can't change `Name` after you create a `RegexPatternSet`.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Specifies the regular expression (regex) patterns that you want AWS WAF to search for, such as `B[a@]dB[o0]t`.
   *
   * @public
   */
  RegexPatternStrings: string[] | undefined;
}

/**
 * @public
 */
export interface CreateRegexPatternSetResponse {
  /**
   * A RegexPatternSet that contains no objects.
   *
   * @public
   */
  RegexPatternSet?: RegexPatternSet | undefined;

  /**
   * The `ChangeToken` that you used to submit the `CreateRegexPatternSet` request. You can also use this value to query the status of the request. For more information, see GetChangeTokenStatus.
   *
   * @public
   */
  ChangeToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateRuleRequest {
  /**
   * A friendly name or description of the Rule. You can't change the name of a `Rule` after you create it.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A friendly name or description for the metrics for this `Rule`. The name can contain only alphanumeric characters (A-Z, a-z, 0-9), with maximum length 128 and minimum length one. It can't contain whitespace or metric names reserved for AWS WAF, including "All" and "Default_Action." You can't change the name of the metric after you create the `Rule`.
   *
   * @public
   */
  MetricName: string | undefined;

  /**
   * The value returned by the most recent call to GetChangeToken.
   *
   * @public
   */
  ChangeToken: string | undefined;

  /**
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * > **Note:**
 * >
 * > This is **AWS WAF Classic** documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 * >
 * > **For the latest version of AWS WAF**, use the AWS WAFV2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html). With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 *
 *
 *
 * A combination of ByteMatchSet, IPSet, and/or SqlInjectionMatchSet objects that identify the web requests that you want to allow, block, or count. For example, you might create a `Rule` that includes the following predicates:
 *
 * - An `IPSet` that causes AWS WAF to search for web requests that originate from the IP address `192.0.2.44`
 * - A `ByteMatchSet` that causes AWS WAF to search for web requests for which the value of the `User-Agent` header is `BadBot`.
 *
 * To match the settings in this `Rule`, a request must originate from `192.0.2.44` AND include a `User-Agent` header for which the value is `BadBot`.
 *
 * @public
 */
export interface Rule {
  /**
   * A unique identifier for a `Rule`. You use `RuleId` to get more information about a `Rule` (see GetRule), update a `Rule` (see UpdateRule), insert a `Rule` into a `WebACL` or delete a one from a `WebACL` (see UpdateWebACL), or delete a `Rule` from AWS WAF (see DeleteRule).
   *
   * `RuleId` is returned by CreateRule and by ListRules.
   *
   * @public
   */
  RuleId: string | undefined;

  /**
   * The friendly name or description for the `Rule`. You can't change the name of a `Rule` after you create it.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A friendly name or description for the metrics for this `Rule`. The name can contain only alphanumeric characters (A-Z, a-z, 0-9), with maximum length 128 and minimum length one. It can't contain whitespace or metric names reserved for AWS WAF, including "All" and "Default_Action." You can't change `MetricName` after you create the `Rule`.
   *
   * @public
   */
  MetricName?: string | undefined;

  /**
   * The `Predicates` object contains one `Predicate` element for each ByteMatchSet, IPSet, or SqlInjectionMatchSet object that you want to include in a `Rule`.
   *
   * @public
   */
  Predicates: Predicate[] | undefined;
}

/**
 * @public
 */
export interface CreateRuleResponse {
  /**
   * The Rule returned in the `CreateRule` response.
   *
   * @public
   */
  Rule?: Rule | undefined;

  /**
   * The `ChangeToken` that you used to submit the `CreateRule` request. You can also use this value to query the status of the request. For more information, see GetChangeTokenStatus.
   *
   * @public
   */
  ChangeToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateRuleGroupRequest {
  /**
   * A friendly name or description of the RuleGroup. You can't change `Name` after you create a `RuleGroup`.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A friendly name or description for the metrics for this `RuleGroup`. The name can contain only alphanumeric characters (A-Z, a-z, 0-9), with maximum length 128 and minimum length one. It can't contain whitespace or metric names reserved for AWS WAF, including "All" and "Default_Action." You can't change the name of the metric after you create the `RuleGroup`.
   *
   * @public
   */
  MetricName: string | undefined;

  /**
   * The value returned by the most recent call to GetChangeToken.
   *
   * @public
   */
  ChangeToken: string | undefined;

  /**
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * > **Note:**
 * >
 * > This is **AWS WAF Classic** documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 * >
 * > **For the latest version of AWS WAF**, use the AWS WAFV2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html). With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 *
 *
 *
 * A collection of predefined rules that you can add to a web ACL.
 *
 * Rule groups are subject to the following limits:
 *
 * - Three rule groups per account. You can request an increase to this limit by contacting customer support.
 * - One rule group per web ACL.
 * - Ten rules per rule group.
 *
 * @public
 */
export interface RuleGroup {
  /**
   * A unique identifier for a `RuleGroup`. You use `RuleGroupId` to get more information about a `RuleGroup` (see GetRuleGroup), update a `RuleGroup` (see UpdateRuleGroup), insert a `RuleGroup` into a `WebACL` or delete a one from a `WebACL` (see UpdateWebACL), or delete a `RuleGroup` from AWS WAF (see DeleteRuleGroup).
   *
   * `RuleGroupId` is returned by CreateRuleGroup and by ListRuleGroups.
   *
   * @public
   */
  RuleGroupId: string | undefined;

  /**
   * The friendly name or description for the `RuleGroup`. You can't change the name of a `RuleGroup` after you create it.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A friendly name or description for the metrics for this `RuleGroup`. The name can contain only alphanumeric characters (A-Z, a-z, 0-9), with maximum length 128 and minimum length one. It can't contain whitespace or metric names reserved for AWS WAF, including "All" and "Default_Action." You can't change the name of the metric after you create the `RuleGroup`.
   *
   * @public
   */
  MetricName?: string | undefined;
}

/**
 * @public
 */
export interface CreateRuleGroupResponse {
  /**
   * An empty RuleGroup.
   *
   * @public
   */
  RuleGroup?: RuleGroup | undefined;

  /**
   * The `ChangeToken` that you used to submit the `CreateRuleGroup` request. You can also use this value to query the status of the request. For more information, see GetChangeTokenStatus.
   *
   * @public
   */
  ChangeToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateSizeConstraintSetRequest {
  /**
   * A friendly name or description of the SizeConstraintSet. You can't change `Name` after you create a `SizeConstraintSet`.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The value returned by the most recent call to GetChangeToken.
   *
   * @public
   */
  ChangeToken: string | undefined;
}

/**
 * > **Note:**
 * >
 * > This is **AWS WAF Classic** documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 * >
 * > **For the latest version of AWS WAF**, use the AWS WAFV2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html). With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 *
 *
 *
 * Specifies a constraint on the size of a part of the web request. AWS WAF uses the `Size`, `ComparisonOperator`, and `FieldToMatch` to build an expression in the form of "`Size` `ComparisonOperator` size in bytes of `FieldToMatch`". If that expression is true, the `SizeConstraint` is considered to match.
 *
 * @public
 */
export interface SizeConstraint {
  /**
   * Specifies where in a web request to look for the size constraint.
   *
   * @public
   */
  FieldToMatch: FieldToMatch | undefined;

  /**
   * Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass AWS WAF. If you specify a transformation, AWS WAF performs the transformation on `FieldToMatch` before inspecting it for a match.
   *
   * You can only specify a single type of TextTransformation.
   *
   *
   *
   * Note that if you choose `BODY` for the value of `Type`, you must choose `NONE` for `TextTransformation` because CloudFront forwards only the first 8192 bytes for inspection.
   *
   *
   *
   * **NONE**
   *
   * Specify `NONE` if you don't want to perform any text transformations.
   *
   *
   *
   * **CMD_LINE**
   *
   * When you're concerned that attackers are injecting an operating system command line command and using unusual formatting to disguise some or all of the command, use this option to perform the following transformations:
   *
   * - Delete the following characters: \ " ' ^
   * - Delete spaces before the following characters: / (
   * - Replace the following characters with a space: , ;
   * - Replace multiple spaces with one space
   * - Convert uppercase letters (A-Z) to lowercase (a-z)
   *
   *
   *
   * **COMPRESS_WHITE_SPACE**
   *
   * Use this option to replace the following characters with a space character (decimal 32):
   *
   * - \f, formfeed, decimal 12
   * - \t, tab, decimal 9
   * - \n, newline, decimal 10
   * - \r, carriage return, decimal 13
   * - \v, vertical tab, decimal 11
   * - non-breaking space, decimal 160
   *
   * `COMPRESS_WHITE_SPACE` also replaces multiple spaces with one space.
   *
   *
   *
   * **HTML_ENTITY_DECODE**
   *
   * Use this option to replace HTML-encoded characters with unencoded characters. `HTML_ENTITY_DECODE` performs the following operations:
   *
   * - Replaces `(ampersand)quot;` with `"`
   * - Replaces `(ampersand)nbsp;` with a non-breaking space, decimal 160
   * - Replaces `(ampersand)lt;` with a "less than" symbol
   * - Replaces `(ampersand)gt;` with `>`
   * - Replaces characters that are represented in hexadecimal format, `(ampersand)#xhhhh;`, with the corresponding characters
   * - Replaces characters that are represented in decimal format, `(ampersand)#nnnn;`, with the corresponding characters
   *
   *
   *
   * **LOWERCASE**
   *
   * Use this option to convert uppercase letters (A-Z) to lowercase (a-z).
   *
   *
   *
   * **URL_DECODE**
   *
   * Use this option to decode a URL-encoded value.
   *
   * @public
   */
  TextTransformation: TextTransformation | undefined;

  /**
   * The type of comparison you want AWS WAF to perform. AWS WAF uses this in combination with the provided `Size` and `FieldToMatch` to build an expression in the form of "`Size` `ComparisonOperator` size in bytes of `FieldToMatch`". If that expression is true, the `SizeConstraint` is considered to match.
   *
   * **EQ**: Used to test if the `Size` is equal to the size of the `FieldToMatch`
   *
   * **NE**: Used to test if the `Size` is not equal to the size of the `FieldToMatch`
   *
   * **LE**: Used to test if the `Size` is less than or equal to the size of the `FieldToMatch`
   *
   * **LT**: Used to test if the `Size` is strictly less than the size of the `FieldToMatch`
   *
   * **GE**: Used to test if the `Size` is greater than or equal to the size of the `FieldToMatch`
   *
   * **GT**: Used to test if the `Size` is strictly greater than the size of the `FieldToMatch`
   *
   * @public
   */
  ComparisonOperator: ComparisonOperator | undefined;

  /**
   * The size in bytes that you want AWS WAF to compare against the size of the specified `FieldToMatch`. AWS WAF uses this in combination with `ComparisonOperator` and `FieldToMatch` to build an expression in the form of "`Size` `ComparisonOperator` size in bytes of `FieldToMatch`". If that expression is true, the `SizeConstraint` is considered to match.
   *
   * Valid values for size are 0 - 21474836480 bytes (0 - 20 GB).
   *
   * If you specify `URI` for the value of `Type`, the / in the URI counts as one character. For example, the URI `/logo.jpg` is nine characters long.
   *
   * @public
   */
  Size: number | undefined;
}

/**
 * > **Note:**
 * >
 * > This is **AWS WAF Classic** documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 * >
 * > **For the latest version of AWS WAF**, use the AWS WAFV2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html). With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 *
 *
 *
 * A complex type that contains `SizeConstraint` objects, which specify the parts of web requests that you want AWS WAF to inspect the size of. If a `SizeConstraintSet` contains more than one `SizeConstraint` object, a request only needs to match one constraint to be considered a match.
 *
 * @public
 */
export interface SizeConstraintSet {
  /**
   * A unique identifier for a `SizeConstraintSet`. You use `SizeConstraintSetId` to get information about a `SizeConstraintSet` (see GetSizeConstraintSet), update a `SizeConstraintSet` (see UpdateSizeConstraintSet), insert a `SizeConstraintSet` into a `Rule` or delete one from a `Rule` (see UpdateRule), and delete a `SizeConstraintSet` from AWS WAF (see DeleteSizeConstraintSet).
   *
   * `SizeConstraintSetId` is returned by CreateSizeConstraintSet and by ListSizeConstraintSets.
   *
   * @public
   */
  SizeConstraintSetId: string | undefined;

  /**
   * The name, if any, of the `SizeConstraintSet`.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Specifies the parts of web requests that you want to inspect the size of.
   *
   * @public
   */
  SizeConstraints: SizeConstraint[] | undefined;
}

/**
 * @public
 */
export interface CreateSizeConstraintSetResponse {
  /**
   * A SizeConstraintSet that contains no `SizeConstraint` objects.
   *
   * @public
   */
  SizeConstraintSet?: SizeConstraintSet | undefined;

  /**
   * The `ChangeToken` that you used to submit the `CreateSizeConstraintSet` request. You can also use this value to query the status of the request. For more information, see GetChangeTokenStatus.
   *
   * @public
   */
  ChangeToken?: string | undefined;
}

/**
 * A request to create a SqlInjectionMatchSet.
 *
 * @public
 */
export interface CreateSqlInjectionMatchSetRequest {
  /**
   * A friendly name or description for the SqlInjectionMatchSet that you're creating. You can't change `Name` after you create the `SqlInjectionMatchSet`.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The value returned by the most recent call to GetChangeToken.
   *
   * @public
   */
  ChangeToken: string | undefined;
}

/**
 * > **Note:**
 * >
 * > This is **AWS WAF Classic** documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 * >
 * > **For the latest version of AWS WAF**, use the AWS WAFV2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html). With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 *
 *
 *
 * Specifies the part of a web request that you want AWS WAF to inspect for snippets of malicious SQL code and, if you want AWS WAF to inspect a header, the name of the header.
 *
 * @public
 */
export interface SqlInjectionMatchTuple {
  /**
   * Specifies where in a web request to look for snippets of malicious SQL code.
   *
   * @public
   */
  FieldToMatch: FieldToMatch | undefined;

  /**
   * Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass AWS WAF. If you specify a transformation, AWS WAF performs the transformation on `FieldToMatch` before inspecting it for a match.
   *
   * You can only specify a single type of TextTransformation.
   *
   *
   *
   * **CMD_LINE**
   *
   * When you're concerned that attackers are injecting an operating system command line command and using unusual formatting to disguise some or all of the command, use this option to perform the following transformations:
   *
   * - Delete the following characters: \ " ' ^
   * - Delete spaces before the following characters: / (
   * - Replace the following characters with a space: , ;
   * - Replace multiple spaces with one space
   * - Convert uppercase letters (A-Z) to lowercase (a-z)
   *
   *
   *
   * **COMPRESS_WHITE_SPACE**
   *
   * Use this option to replace the following characters with a space character (decimal 32):
   *
   * - \f, formfeed, decimal 12
   * - \t, tab, decimal 9
   * - \n, newline, decimal 10
   * - \r, carriage return, decimal 13
   * - \v, vertical tab, decimal 11
   * - non-breaking space, decimal 160
   *
   * `COMPRESS_WHITE_SPACE` also replaces multiple spaces with one space.
   *
   *
   *
   * **HTML_ENTITY_DECODE**
   *
   * Use this option to replace HTML-encoded characters with unencoded characters. `HTML_ENTITY_DECODE` performs the following operations:
   *
   * - Replaces `(ampersand)quot;` with `"`
   * - Replaces `(ampersand)nbsp;` with a non-breaking space, decimal 160
   * - Replaces `(ampersand)lt;` with a "less than" symbol
   * - Replaces `(ampersand)gt;` with `>`
   * - Replaces characters that are represented in hexadecimal format, `(ampersand)#xhhhh;`, with the corresponding characters
   * - Replaces characters that are represented in decimal format, `(ampersand)#nnnn;`, with the corresponding characters
   *
   *
   *
   * **LOWERCASE**
   *
   * Use this option to convert uppercase letters (A-Z) to lowercase (a-z).
   *
   *
   *
   * **URL_DECODE**
   *
   * Use this option to decode a URL-encoded value.
   *
   *
   *
   * **NONE**
   *
   * Specify `NONE` if you don't want to perform any text transformations.
   *
   * @public
   */
  TextTransformation: TextTransformation | undefined;
}

/**
 * > **Note:**
 * >
 * > This is **AWS WAF Classic** documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 * >
 * > **For the latest version of AWS WAF**, use the AWS WAFV2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html). With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 *
 *
 *
 * A complex type that contains `SqlInjectionMatchTuple` objects, which specify the parts of web requests that you want AWS WAF to inspect for snippets of malicious SQL code and, if you want AWS WAF to inspect a header, the name of the header. If a `SqlInjectionMatchSet` contains more than one `SqlInjectionMatchTuple` object, a request needs to include snippets of SQL code in only one of the specified parts of the request to be considered a match.
 *
 * @public
 */
export interface SqlInjectionMatchSet {
  /**
   * A unique identifier for a `SqlInjectionMatchSet`. You use `SqlInjectionMatchSetId` to get information about a `SqlInjectionMatchSet` (see GetSqlInjectionMatchSet), update a `SqlInjectionMatchSet` (see UpdateSqlInjectionMatchSet), insert a `SqlInjectionMatchSet` into a `Rule` or delete one from a `Rule` (see UpdateRule), and delete a `SqlInjectionMatchSet` from AWS WAF (see DeleteSqlInjectionMatchSet).
   *
   * `SqlInjectionMatchSetId` is returned by CreateSqlInjectionMatchSet and by ListSqlInjectionMatchSets.
   *
   * @public
   */
  SqlInjectionMatchSetId: string | undefined;

  /**
   * The name, if any, of the `SqlInjectionMatchSet`.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Specifies the parts of web requests that you want to inspect for snippets of malicious SQL code.
   *
   * @public
   */
  SqlInjectionMatchTuples: SqlInjectionMatchTuple[] | undefined;
}

/**
 * The response to a `CreateSqlInjectionMatchSet` request.
 *
 * @public
 */
export interface CreateSqlInjectionMatchSetResponse {
  /**
   * A SqlInjectionMatchSet.
   *
   * @public
   */
  SqlInjectionMatchSet?: SqlInjectionMatchSet | undefined;

  /**
   * The `ChangeToken` that you used to submit the `CreateSqlInjectionMatchSet` request. You can also use this value to query the status of the request. For more information, see GetChangeTokenStatus.
   *
   * @public
   */
  ChangeToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateWebACLRequest {
  /**
   * A friendly name or description of the WebACL. You can't change `Name` after you create the `WebACL`.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A friendly name or description for the metrics for this `WebACL`.The name can contain only alphanumeric characters (A-Z, a-z, 0-9), with maximum length 128 and minimum length one. It can't contain whitespace or metric names reserved for AWS WAF, including "All" and "Default_Action." You can't change `MetricName` after you create the `WebACL`.
   *
   * @public
   */
  MetricName: string | undefined;

  /**
   * The action that you want AWS WAF to take when a request doesn't match the criteria specified in any of the `Rule` objects that are associated with the `WebACL`.
   *
   * @public
   */
  DefaultAction: WafAction | undefined;

  /**
   * The value returned by the most recent call to GetChangeToken.
   *
   * @public
   */
  ChangeToken: string | undefined;

  /**
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * > **Note:**
 * >
 * > This is **AWS WAF Classic** documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 * >
 * > **For the latest version of AWS WAF**, use the AWS WAFV2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html). With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 *
 *
 *
 * Contains the `Rules` that identify the requests that you want to allow, block, or count. In a `WebACL`, you also specify a default action (`ALLOW` or `BLOCK`), and the action for each `Rule` that you add to a `WebACL`, for example, block requests from specified IP addresses or block requests from specified referrers. You also associate the `WebACL` with a CloudFront distribution to identify the requests that you want AWS WAF to filter. If you add more than one `Rule` to a `WebACL`, a request needs to match only one of the specifications to be allowed, blocked, or counted. For more information, see UpdateWebACL.
 *
 * @public
 */
export interface WebACL {
  /**
   * A unique identifier for a `WebACL`. You use `WebACLId` to get information about a `WebACL` (see GetWebACL), update a `WebACL` (see UpdateWebACL), and delete a `WebACL` from AWS WAF (see DeleteWebACL).
   *
   * `WebACLId` is returned by CreateWebACL and by ListWebACLs.
   *
   * @public
   */
  WebACLId: string | undefined;

  /**
   * A friendly name or description of the `WebACL`. You can't change the name of a `WebACL` after you create it.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A friendly name or description for the metrics for this `WebACL`. The name can contain only alphanumeric characters (A-Z, a-z, 0-9), with maximum length 128 and minimum length one. It can't contain whitespace or metric names reserved for AWS WAF, including "All" and "Default_Action." You can't change `MetricName` after you create the `WebACL`.
   *
   * @public
   */
  MetricName?: string | undefined;

  /**
   * The action to perform if none of the `Rules` contained in the `WebACL` match. The action is specified by the WafAction object.
   *
   * @public
   */
  DefaultAction: WafAction | undefined;

  /**
   * An array that contains the action for each `Rule` in a `WebACL`, the priority of the `Rule`, and the ID of the `Rule`.
   *
   * @public
   */
  Rules: ActivatedRule[] | undefined;

  /**
   * Tha Amazon Resource Name (ARN) of the web ACL.
   *
   * @public
   */
  WebACLArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateWebACLResponse {
  /**
   * The WebACL returned in the `CreateWebACL` response.
   *
   * @public
   */
  WebACL?: WebACL | undefined;

  /**
   * The `ChangeToken` that you used to submit the `CreateWebACL` request. You can also use this value to query the status of the request. For more information, see GetChangeTokenStatus.
   *
   * @public
   */
  ChangeToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateWebACLMigrationStackRequest {
  /**
   * The UUID of the WAF Classic web ACL that you want to migrate to WAF v2.
   *
   * @public
   */
  WebACLId: string | undefined;

  /**
   * The name of the Amazon S3 bucket to store the CloudFormation template in. The S3 bucket must be configured as follows for the migration:
   *
   * - The bucket name must start with `aws-waf-migration-`. For example, `aws-waf-migration-my-web-acl`.
   * - The bucket must be in the Region where you are deploying the template. For example, for a web ACL in us-west-2, you must use an Amazon S3 bucket in us-west-2 and you must deploy the template stack to us-west-2.
   * - The bucket policies must permit the migration process to write data. For listings of the bucket policies, see the Examples section.
   *
   * @public
   */
  S3BucketName: string | undefined;

  /**
   * Indicates whether to exclude entities that can't be migrated or to stop the migration. Set this to true to ignore unsupported entities in the web ACL during the migration. Otherwise, if AWS WAF encounters unsupported entities, it stops the process and throws an exception.
   *
   * @public
   */
  IgnoreUnsupportedType: boolean | undefined;
}

/**
 * @public
 */
export interface CreateWebACLMigrationStackResponse {
  /**
   * The URL of the template created in Amazon S3.
   *
   * @public
   */
  S3ObjectUrl: string | undefined;
}

/**
 * A request to create an XssMatchSet.
 *
 * @public
 */
export interface CreateXssMatchSetRequest {
  /**
   * A friendly name or description for the XssMatchSet that you're creating. You can't change `Name` after you create the `XssMatchSet`.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The value returned by the most recent call to GetChangeToken.
   *
   * @public
   */
  ChangeToken: string | undefined;
}

/**
 * > **Note:**
 * >
 * > This is **AWS WAF Classic** documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 * >
 * > **For the latest version of AWS WAF**, use the AWS WAFV2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html). With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 *
 *
 *
 * Specifies the part of a web request that you want AWS WAF to inspect for cross-site scripting attacks and, if you want AWS WAF to inspect a header, the name of the header.
 *
 * @public
 */
export interface XssMatchTuple {
  /**
   * Specifies where in a web request to look for cross-site scripting attacks.
   *
   * @public
   */
  FieldToMatch: FieldToMatch | undefined;

  /**
   * Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass AWS WAF. If you specify a transformation, AWS WAF performs the transformation on `FieldToMatch` before inspecting it for a match.
   *
   *
   *
   * You can only specify a single type of TextTransformation.
   *
   *
   *
   * **CMD_LINE**
   *
   * When you're concerned that attackers are injecting an operating system command line command and using unusual formatting to disguise some or all of the command, use this option to perform the following transformations:
   *
   * - Delete the following characters: \ " ' ^
   * - Delete spaces before the following characters: / (
   * - Replace the following characters with a space: , ;
   * - Replace multiple spaces with one space
   * - Convert uppercase letters (A-Z) to lowercase (a-z)
   *
   *
   *
   * **COMPRESS_WHITE_SPACE**
   *
   * Use this option to replace the following characters with a space character (decimal 32):
   *
   * - \f, formfeed, decimal 12
   * - \t, tab, decimal 9
   * - \n, newline, decimal 10
   * - \r, carriage return, decimal 13
   * - \v, vertical tab, decimal 11
   * - non-breaking space, decimal 160
   *
   * `COMPRESS_WHITE_SPACE` also replaces multiple spaces with one space.
   *
   *
   *
   * **HTML_ENTITY_DECODE**
   *
   * Use this option to replace HTML-encoded characters with unencoded characters. `HTML_ENTITY_DECODE` performs the following operations:
   *
   * - Replaces `(ampersand)quot;` with `"`
   * - Replaces `(ampersand)nbsp;` with a non-breaking space, decimal 160
   * - Replaces `(ampersand)lt;` with a "less than" symbol
   * - Replaces `(ampersand)gt;` with `>`
   * - Replaces characters that are represented in hexadecimal format, `(ampersand)#xhhhh;`, with the corresponding characters
   * - Replaces characters that are represented in decimal format, `(ampersand)#nnnn;`, with the corresponding characters
   *
   *
   *
   * **LOWERCASE**
   *
   * Use this option to convert uppercase letters (A-Z) to lowercase (a-z).
   *
   *
   *
   * **URL_DECODE**
   *
   * Use this option to decode a URL-encoded value.
   *
   *
   *
   * **NONE**
   *
   * Specify `NONE` if you don't want to perform any text transformations.
   *
   * @public
   */
  TextTransformation: TextTransformation | undefined;
}

/**
 * > **Note:**
 * >
 * > This is **AWS WAF Classic** documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 * >
 * > **For the latest version of AWS WAF**, use the AWS WAFV2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html). With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 *
 *
 *
 * A complex type that contains `XssMatchTuple` objects, which specify the parts of web requests that you want AWS WAF to inspect for cross-site scripting attacks and, if you want AWS WAF to inspect a header, the name of the header. If a `XssMatchSet` contains more than one `XssMatchTuple` object, a request needs to include cross-site scripting attacks in only one of the specified parts of the request to be considered a match.
 *
 * @public
 */
export interface XssMatchSet {
  /**
   * A unique identifier for an `XssMatchSet`. You use `XssMatchSetId` to get information about an `XssMatchSet` (see GetXssMatchSet), update an `XssMatchSet` (see UpdateXssMatchSet), insert an `XssMatchSet` into a `Rule` or delete one from a `Rule` (see UpdateRule), and delete an `XssMatchSet` from AWS WAF (see DeleteXssMatchSet).
   *
   * `XssMatchSetId` is returned by CreateXssMatchSet and by ListXssMatchSets.
   *
   * @public
   */
  XssMatchSetId: string | undefined;

  /**
   * The name, if any, of the `XssMatchSet`.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Specifies the parts of web requests that you want to inspect for cross-site scripting attacks.
   *
   * @public
   */
  XssMatchTuples: XssMatchTuple[] | undefined;
}

/**
 * The response to a `CreateXssMatchSet` request.
 *
 * @public
 */
export interface CreateXssMatchSetResponse {
  /**
   * An XssMatchSet.
   *
   * @public
   */
  XssMatchSet?: XssMatchSet | undefined;

  /**
   * The `ChangeToken` that you used to submit the `CreateXssMatchSet` request. You can also use this value to query the status of the request. For more information, see GetChangeTokenStatus.
   *
   * @public
   */
  ChangeToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteByteMatchSetRequest {
  /**
   * The `ByteMatchSetId` of the ByteMatchSet that you want to delete. `ByteMatchSetId` is returned by CreateByteMatchSet and by ListByteMatchSets.
   *
   * @public
   */
  ByteMatchSetId: string | undefined;

  /**
   * The value returned by the most recent call to GetChangeToken.
   *
   * @public
   */
  ChangeToken: string | undefined;
}

/**
 * @public
 */
export interface DeleteByteMatchSetResponse {
  /**
   * The `ChangeToken` that you used to submit the `DeleteByteMatchSet` request. You can also use this value to query the status of the request. For more information, see GetChangeTokenStatus.
   *
   * @public
   */
  ChangeToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteGeoMatchSetRequest {
  /**
   * The `GeoMatchSetID` of the GeoMatchSet that you want to delete. `GeoMatchSetId` is returned by CreateGeoMatchSet and by ListGeoMatchSets.
   *
   * @public
   */
  GeoMatchSetId: string | undefined;

  /**
   * The value returned by the most recent call to GetChangeToken.
   *
   * @public
   */
  ChangeToken: string | undefined;
}

/**
 * @public
 */
export interface DeleteGeoMatchSetResponse {
  /**
   * The `ChangeToken` that you used to submit the `DeleteGeoMatchSet` request. You can also use this value to query the status of the request. For more information, see GetChangeTokenStatus.
   *
   * @public
   */
  ChangeToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteIPSetRequest {
  /**
   * The `IPSetId` of the IPSet that you want to delete. `IPSetId` is returned by CreateIPSet and by ListIPSets.
   *
   * @public
   */
  IPSetId: string | undefined;

  /**
   * The value returned by the most recent call to GetChangeToken.
   *
   * @public
   */
  ChangeToken: string | undefined;
}

/**
 * @public
 */
export interface DeleteIPSetResponse {
  /**
   * The `ChangeToken` that you used to submit the `DeleteIPSet` request. You can also use this value to query the status of the request. For more information, see GetChangeTokenStatus.
   *
   * @public
   */
  ChangeToken?: string | undefined;
}

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
   * The Amazon Resource Name (ARN) of the RuleGroup from which you want to delete the policy.
   *
   * The user making the request must be the owner of the RuleGroup.
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
export interface DeleteRateBasedRuleRequest {
  /**
   * The `RuleId` of the RateBasedRule that you want to delete. `RuleId` is returned by CreateRateBasedRule and by ListRateBasedRules.
   *
   * @public
   */
  RuleId: string | undefined;

  /**
   * The value returned by the most recent call to GetChangeToken.
   *
   * @public
   */
  ChangeToken: string | undefined;
}

/**
 * @public
 */
export interface DeleteRateBasedRuleResponse {
  /**
   * The `ChangeToken` that you used to submit the `DeleteRateBasedRule` request. You can also use this value to query the status of the request. For more information, see GetChangeTokenStatus.
   *
   * @public
   */
  ChangeToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteRegexMatchSetRequest {
  /**
   * The `RegexMatchSetId` of the RegexMatchSet that you want to delete. `RegexMatchSetId` is returned by CreateRegexMatchSet and by ListRegexMatchSets.
   *
   * @public
   */
  RegexMatchSetId: string | undefined;

  /**
   * The value returned by the most recent call to GetChangeToken.
   *
   * @public
   */
  ChangeToken: string | undefined;
}

/**
 * @public
 */
export interface DeleteRegexMatchSetResponse {
  /**
   * The `ChangeToken` that you used to submit the `DeleteRegexMatchSet` request. You can also use this value to query the status of the request. For more information, see GetChangeTokenStatus.
   *
   * @public
   */
  ChangeToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteRegexPatternSetRequest {
  /**
   * The `RegexPatternSetId` of the RegexPatternSet that you want to delete. `RegexPatternSetId` is returned by CreateRegexPatternSet and by ListRegexPatternSets.
   *
   * @public
   */
  RegexPatternSetId: string | undefined;

  /**
   * The value returned by the most recent call to GetChangeToken.
   *
   * @public
   */
  ChangeToken: string | undefined;
}

/**
 * @public
 */
export interface DeleteRegexPatternSetResponse {
  /**
   * The `ChangeToken` that you used to submit the `DeleteRegexPatternSet` request. You can also use this value to query the status of the request. For more information, see GetChangeTokenStatus.
   *
   * @public
   */
  ChangeToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteRuleRequest {
  /**
   * The `RuleId` of the Rule that you want to delete. `RuleId` is returned by CreateRule and by ListRules.
   *
   * @public
   */
  RuleId: string | undefined;

  /**
   * The value returned by the most recent call to GetChangeToken.
   *
   * @public
   */
  ChangeToken: string | undefined;
}

/**
 * @public
 */
export interface DeleteRuleResponse {
  /**
   * The `ChangeToken` that you used to submit the `DeleteRule` request. You can also use this value to query the status of the request. For more information, see GetChangeTokenStatus.
   *
   * @public
   */
  ChangeToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteRuleGroupRequest {
  /**
   * The `RuleGroupId` of the RuleGroup that you want to delete. `RuleGroupId` is returned by CreateRuleGroup and by ListRuleGroups.
   *
   * @public
   */
  RuleGroupId: string | undefined;

  /**
   * The value returned by the most recent call to GetChangeToken.
   *
   * @public
   */
  ChangeToken: string | undefined;
}

/**
 * @public
 */
export interface DeleteRuleGroupResponse {
  /**
   * The `ChangeToken` that you used to submit the `DeleteRuleGroup` request. You can also use this value to query the status of the request. For more information, see GetChangeTokenStatus.
   *
   * @public
   */
  ChangeToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteSizeConstraintSetRequest {
  /**
   * The `SizeConstraintSetId` of the SizeConstraintSet that you want to delete. `SizeConstraintSetId` is returned by CreateSizeConstraintSet and by ListSizeConstraintSets.
   *
   * @public
   */
  SizeConstraintSetId: string | undefined;

  /**
   * The value returned by the most recent call to GetChangeToken.
   *
   * @public
   */
  ChangeToken: string | undefined;
}

/**
 * @public
 */
export interface DeleteSizeConstraintSetResponse {
  /**
   * The `ChangeToken` that you used to submit the `DeleteSizeConstraintSet` request. You can also use this value to query the status of the request. For more information, see GetChangeTokenStatus.
   *
   * @public
   */
  ChangeToken?: string | undefined;
}

/**
 * A request to delete a SqlInjectionMatchSet from AWS WAF.
 *
 * @public
 */
export interface DeleteSqlInjectionMatchSetRequest {
  /**
   * The `SqlInjectionMatchSetId` of the SqlInjectionMatchSet that you want to delete. `SqlInjectionMatchSetId` is returned by CreateSqlInjectionMatchSet and by ListSqlInjectionMatchSets.
   *
   * @public
   */
  SqlInjectionMatchSetId: string | undefined;

  /**
   * The value returned by the most recent call to GetChangeToken.
   *
   * @public
   */
  ChangeToken: string | undefined;
}

/**
 * The response to a request to delete a SqlInjectionMatchSet from AWS WAF.
 *
 * @public
 */
export interface DeleteSqlInjectionMatchSetResponse {
  /**
   * The `ChangeToken` that you used to submit the `DeleteSqlInjectionMatchSet` request. You can also use this value to query the status of the request. For more information, see GetChangeTokenStatus.
   *
   * @public
   */
  ChangeToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteWebACLRequest {
  /**
   * The `WebACLId` of the WebACL that you want to delete. `WebACLId` is returned by CreateWebACL and by ListWebACLs.
   *
   * @public
   */
  WebACLId: string | undefined;

  /**
   * The value returned by the most recent call to GetChangeToken.
   *
   * @public
   */
  ChangeToken: string | undefined;
}

/**
 * @public
 */
export interface DeleteWebACLResponse {
  /**
   * The `ChangeToken` that you used to submit the `DeleteWebACL` request. You can also use this value to query the status of the request. For more information, see GetChangeTokenStatus.
   *
   * @public
   */
  ChangeToken?: string | undefined;
}

/**
 * A request to delete an XssMatchSet from AWS WAF.
 *
 * @public
 */
export interface DeleteXssMatchSetRequest {
  /**
   * The `XssMatchSetId` of the XssMatchSet that you want to delete. `XssMatchSetId` is returned by CreateXssMatchSet and by ListXssMatchSets.
   *
   * @public
   */
  XssMatchSetId: string | undefined;

  /**
   * The value returned by the most recent call to GetChangeToken.
   *
   * @public
   */
  ChangeToken: string | undefined;
}

/**
 * The response to a request to delete an XssMatchSet from AWS WAF.
 *
 * @public
 */
export interface DeleteXssMatchSetResponse {
  /**
   * The `ChangeToken` that you used to submit the `DeleteXssMatchSet` request. You can also use this value to query the status of the request. For more information, see GetChangeTokenStatus.
   *
   * @public
   */
  ChangeToken?: string | undefined;
}

/**
 * @public
 */
export interface GetByteMatchSetRequest {
  /**
   * The `ByteMatchSetId` of the ByteMatchSet that you want to get. `ByteMatchSetId` is returned by CreateByteMatchSet and by ListByteMatchSets.
   *
   * @public
   */
  ByteMatchSetId: string | undefined;
}

/**
 * @public
 */
export interface GetByteMatchSetResponse {
  /**
   * Information about the ByteMatchSet that you specified in the `GetByteMatchSet` request. For more information, see the following topics:
   *
   * - ByteMatchSet: Contains `ByteMatchSetId`, `ByteMatchTuples`, and `Name`
   * - `ByteMatchTuples`: Contains an array of ByteMatchTuple objects. Each `ByteMatchTuple` object contains FieldToMatch, `PositionalConstraint`, `TargetString`, and `TextTransformation`
   * - FieldToMatch: Contains `Data` and `Type`
   *
   * @public
   */
  ByteMatchSet?: ByteMatchSet | undefined;
}

/**
 * @public
 */
export interface GetChangeTokenRequest {}

/**
 * @public
 */
export interface GetChangeTokenResponse {
  /**
   * The `ChangeToken` that you used in the request. Use this value in a `GetChangeTokenStatus` request to get the current status of the request.
   *
   * @public
   */
  ChangeToken?: string | undefined;
}

/**
 * @public
 */
export interface GetChangeTokenStatusRequest {
  /**
   * The change token for which you want to get the status. This change token was previously returned in the `GetChangeToken` response.
   *
   * @public
   */
  ChangeToken: string | undefined;
}

/**
 * @public
 */
export interface GetChangeTokenStatusResponse {
  /**
   * The status of the change token.
   *
   * @public
   */
  ChangeTokenStatus?: ChangeTokenStatus | undefined;
}

/**
 * @public
 */
export interface GetGeoMatchSetRequest {
  /**
   * The `GeoMatchSetId` of the GeoMatchSet that you want to get. `GeoMatchSetId` is returned by CreateGeoMatchSet and by ListGeoMatchSets.
   *
   * @public
   */
  GeoMatchSetId: string | undefined;
}

/**
 * @public
 */
export interface GetGeoMatchSetResponse {
  /**
   * Information about the GeoMatchSet that you specified in the `GetGeoMatchSet` request. This includes the `Type`, which for a `GeoMatchContraint` is always `Country`, as well as the `Value`, which is the identifier for a specific country.
   *
   * @public
   */
  GeoMatchSet?: GeoMatchSet | undefined;
}

/**
 * @public
 */
export interface GetIPSetRequest {
  /**
   * The `IPSetId` of the IPSet that you want to get. `IPSetId` is returned by CreateIPSet and by ListIPSets.
   *
   * @public
   */
  IPSetId: string | undefined;
}

/**
 * @public
 */
export interface GetIPSetResponse {
  /**
   * Information about the IPSet that you specified in the `GetIPSet` request. For more information, see the following topics:
   *
   * - IPSet: Contains `IPSetDescriptors`, `IPSetId`, and `Name`
   * - `IPSetDescriptors`: Contains an array of IPSetDescriptor objects. Each `IPSetDescriptor` object contains `Type` and `Value`
   *
   * @public
   */
  IPSet?: IPSet | undefined;
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
}

/**
 * > **Note:**
 * >
 * > This is **AWS WAF Classic** documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 * >
 * > **For the latest version of AWS WAF**, use the AWS WAFV2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html). With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 *
 *
 *
 * The Amazon Kinesis Data Firehose, `RedactedFields` information, and the web ACL Amazon Resource Name (ARN).
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
   * An array of Amazon Kinesis Data Firehose ARNs.
   *
   * @public
   */
  LogDestinationConfigs: string[] | undefined;

  /**
   * The parts of the request that you want redacted from the logs. For example, if you redact the cookie field, the cookie field in the firehose will be `xxx`.
   *
   * @public
   */
  RedactedFields?: FieldToMatch[] | undefined;
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
export interface GetPermissionPolicyRequest {
  /**
   * The Amazon Resource Name (ARN) of the RuleGroup for which you want to get the policy.
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
   * The IAM policy attached to the specified RuleGroup.
   *
   * @public
   */
  Policy?: string | undefined;
}

/**
 * @public
 */
export interface GetRateBasedRuleRequest {
  /**
   * The `RuleId` of the RateBasedRule that you want to get. `RuleId` is returned by CreateRateBasedRule and by ListRateBasedRules.
   *
   * @public
   */
  RuleId: string | undefined;
}

/**
 * @public
 */
export interface GetRateBasedRuleResponse {
  /**
   * Information about the RateBasedRule that you specified in the `GetRateBasedRule` request.
   *
   * @public
   */
  Rule?: RateBasedRule | undefined;
}

/**
 * @public
 */
export interface GetRateBasedRuleManagedKeysRequest {
  /**
   * The `RuleId` of the RateBasedRule for which you want to get a list of `ManagedKeys`. `RuleId` is returned by CreateRateBasedRule and by ListRateBasedRules.
   *
   * @public
   */
  RuleId: string | undefined;

  /**
   * A null value and not currently used. Do not include this in your request.
   *
   * @public
   */
  NextMarker?: string | undefined;
}

/**
 * @public
 */
export interface GetRateBasedRuleManagedKeysResponse {
  /**
   * An array of IP addresses that currently are blocked by the specified RateBasedRule.
   *
   * @public
   */
  ManagedKeys?: string[] | undefined;

  /**
   * A null value and not currently used.
   *
   * @public
   */
  NextMarker?: string | undefined;
}

/**
 * @public
 */
export interface GetRegexMatchSetRequest {
  /**
   * The `RegexMatchSetId` of the RegexMatchSet that you want to get. `RegexMatchSetId` is returned by CreateRegexMatchSet and by ListRegexMatchSets.
   *
   * @public
   */
  RegexMatchSetId: string | undefined;
}

/**
 * @public
 */
export interface GetRegexMatchSetResponse {
  /**
   * Information about the RegexMatchSet that you specified in the `GetRegexMatchSet` request. For more information, see RegexMatchTuple.
   *
   * @public
   */
  RegexMatchSet?: RegexMatchSet | undefined;
}

/**
 * @public
 */
export interface GetRegexPatternSetRequest {
  /**
   * The `RegexPatternSetId` of the RegexPatternSet that you want to get. `RegexPatternSetId` is returned by CreateRegexPatternSet and by ListRegexPatternSets.
   *
   * @public
   */
  RegexPatternSetId: string | undefined;
}

/**
 * @public
 */
export interface GetRegexPatternSetResponse {
  /**
   * Information about the RegexPatternSet that you specified in the `GetRegexPatternSet` request, including the identifier of the pattern set and the regular expression patterns you want AWS WAF to search for.
   *
   * @public
   */
  RegexPatternSet?: RegexPatternSet | undefined;
}

/**
 * @public
 */
export interface GetRuleRequest {
  /**
   * The `RuleId` of the Rule that you want to get. `RuleId` is returned by CreateRule and by ListRules.
   *
   * @public
   */
  RuleId: string | undefined;
}

/**
 * @public
 */
export interface GetRuleResponse {
  /**
   * Information about the Rule that you specified in the `GetRule` request. For more information, see the following topics:
   *
   * - Rule: Contains `MetricName`, `Name`, an array of `Predicate` objects, and `RuleId`
   * - Predicate: Each `Predicate` object contains `DataId`, `Negated`, and `Type`
   *
   * @public
   */
  Rule?: Rule | undefined;
}

/**
 * @public
 */
export interface GetRuleGroupRequest {
  /**
   * The `RuleGroupId` of the RuleGroup that you want to get. `RuleGroupId` is returned by CreateRuleGroup and by ListRuleGroups.
   *
   * @public
   */
  RuleGroupId: string | undefined;
}

/**
 * @public
 */
export interface GetRuleGroupResponse {
  /**
   * Information about the RuleGroup that you specified in the `GetRuleGroup` request.
   *
   * @public
   */
  RuleGroup?: RuleGroup | undefined;
}

/**
 * > **Note:**
 * >
 * > This is **AWS WAF Classic** documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 * >
 * > **For the latest version of AWS WAF**, use the AWS WAFV2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html). With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 *
 *
 *
 * In a GetSampledRequests request, the `StartTime` and `EndTime` objects specify the time range for which you want AWS WAF to return a sample of web requests.
 *
 * You must specify the times in Coordinated Universal Time (UTC) format. UTC format includes the special designator, `Z`. For example, `"2016-09-27T14:50Z"`.
 *
 * In a GetSampledRequests response, the `StartTime` and `EndTime` objects specify the time range for which AWS WAF actually returned a sample of web requests. AWS WAF gets the specified number of requests from among the first 5,000 requests that your AWS resource receives during the specified time period. If your resource receives more than 5,000 requests during that period, AWS WAF stops sampling after the 5,000th request. In that case, `EndTime` is the time that AWS WAF received the 5,000th request.
 *
 * @public
 */
export interface TimeWindow {
  /**
   * The beginning of the time range from which you want `GetSampledRequests` to return a sample of the requests that your AWS resource received. You must specify the date and time in Coordinated Universal Time (UTC) format. UTC format includes the special designator, `Z`. For example, `"2016-09-27T14:50Z"`. You can specify any time range in the previous three hours.
   *
   * @public
   */
  StartTime: Date | undefined;

  /**
   * The end of the time range from which you want `GetSampledRequests` to return a sample of the requests that your AWS resource received. You must specify the date and time in Coordinated Universal Time (UTC) format. UTC format includes the special designator, `Z`. For example, `"2016-09-27T14:50Z"`. You can specify any time range in the previous three hours.
   *
   * @public
   */
  EndTime: Date | undefined;
}

/**
 * @public
 */
export interface GetSampledRequestsRequest {
  /**
   * The `WebACLId` of the `WebACL` for which you want `GetSampledRequests` to return a sample of requests.
   *
   * @public
   */
  WebAclId: string | undefined;

  /**
   * `RuleId` is one of three values:
   *
   * - The `RuleId` of the `Rule` or the `RuleGroupId` of the `RuleGroup` for which you want `GetSampledRequests` to return a sample of requests.
   * - `Default_Action`, which causes `GetSampledRequests` to return a sample of the requests that didn't match any of the rules in the specified `WebACL`.
   *
   * @public
   */
  RuleId: string | undefined;

  /**
   * The start date and time and the end date and time of the range for which you want `GetSampledRequests` to return a sample of requests. You must specify the times in Coordinated Universal Time (UTC) format. UTC format includes the special designator, `Z`. For example, `"2016-09-27T14:50Z"`. You can specify any time range in the previous three hours.
   *
   * @public
   */
  TimeWindow: TimeWindow | undefined;

  /**
   * The number of requests that you want AWS WAF to return from among the first 5,000 requests that your AWS resource received during the time range. If your resource received fewer requests than the value of `MaxItems`, `GetSampledRequests` returns information about all of them.
   *
   * @public
   */
  MaxItems: number | undefined;
}

/**
 * > **Note:**
 * >
 * > This is **AWS WAF Classic** documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 * >
 * > **For the latest version of AWS WAF**, use the AWS WAFV2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html). With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 *
 *
 *
 * The response from a GetSampledRequests request includes an `HTTPHeader` complex type that appears as `Headers` in the response syntax. `HTTPHeader` contains the names and values of all of the headers that appear in one of the web requests that were returned by `GetSampledRequests`.
 *
 * @public
 */
export interface HTTPHeader {
  /**
   * The name of one of the headers in the sampled web request.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The value of one of the headers in the sampled web request.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * > **Note:**
 * >
 * > This is **AWS WAF Classic** documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 * >
 * > **For the latest version of AWS WAF**, use the AWS WAFV2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html). With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 *
 *
 *
 * The response from a GetSampledRequests request includes an `HTTPRequest` complex type that appears as `Request` in the response syntax. `HTTPRequest` contains information about one of the web requests that were returned by `GetSampledRequests`.
 *
 * @public
 */
export interface HTTPRequest {
  /**
   * The IP address that the request originated from. If the `WebACL` is associated with a CloudFront distribution, this is the value of one of the following fields in CloudFront access logs:
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
   * The part of a web request that identifies the resource, for example, `/images/daily-ad.jpg`.
   *
   * @public
   */
  URI?: string | undefined;

  /**
   * The HTTP method specified in the sampled web request. CloudFront supports the following methods: `DELETE`, `GET`, `HEAD`, `OPTIONS`, `PATCH`, `POST`, and `PUT`.
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
   * A complex type that contains two values for each header in the sampled web request: the name of the header and the value of the header.
   *
   * @public
   */
  Headers?: HTTPHeader[] | undefined;
}

/**
 * > **Note:**
 * >
 * > This is **AWS WAF Classic** documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 * >
 * > **For the latest version of AWS WAF**, use the AWS WAFV2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html). With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 *
 *
 *
 * The response from a GetSampledRequests request includes a `SampledHTTPRequests` complex type that appears as `SampledRequests` in the response syntax. `SampledHTTPRequests` contains one `SampledHTTPRequest` object for each web request that is returned by `GetSampledRequests`.
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
   * A value that indicates how one result in the response relates proportionally to other results in the response. A result that has a weight of `2` represents roughly twice as many CloudFront web requests as a result that has a weight of `1`.
   *
   * @public
   */
  Weight: number | undefined;

  /**
   * The time at which AWS WAF received the request from your AWS resource, in Unix time format (in seconds).
   *
   * @public
   */
  Timestamp?: Date | undefined;

  /**
   * The action for the `Rule` that the request matched: `ALLOW`, `BLOCK`, or `COUNT`.
   *
   * @public
   */
  Action?: string | undefined;

  /**
   * This value is returned if the `GetSampledRequests` request specifies the ID of a `RuleGroup` rather than the ID of an individual rule. `RuleWithinRuleGroup` is the rule within the specified `RuleGroup` that matched the request listed in the response.
   *
   * @public
   */
  RuleWithinRuleGroup?: string | undefined;
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
   * The total number of requests from which `GetSampledRequests` got a sample of `MaxItems` requests. If `PopulationSize` is less than `MaxItems`, the sample includes every request that your AWS resource received during the specified time range.
   *
   * @public
   */
  PopulationSize?: number | undefined;

  /**
   * Usually, `TimeWindow` is the time range that you specified in the `GetSampledRequests` request. However, if your AWS resource received more than 5,000 requests during the time range that you specified in the request, `GetSampledRequests` returns the time range for the first 5,000 requests. Times are in Coordinated Universal Time (UTC) format.
   *
   * @public
   */
  TimeWindow?: TimeWindow | undefined;
}

/**
 * @public
 */
export interface GetSizeConstraintSetRequest {
  /**
   * The `SizeConstraintSetId` of the SizeConstraintSet that you want to get. `SizeConstraintSetId` is returned by CreateSizeConstraintSet and by ListSizeConstraintSets.
   *
   * @public
   */
  SizeConstraintSetId: string | undefined;
}

/**
 * @public
 */
export interface GetSizeConstraintSetResponse {
  /**
   * Information about the SizeConstraintSet that you specified in the `GetSizeConstraintSet` request. For more information, see the following topics:
   *
   * - SizeConstraintSet: Contains `SizeConstraintSetId`, `SizeConstraints`, and `Name`
   * - `SizeConstraints`: Contains an array of SizeConstraint objects. Each `SizeConstraint` object contains FieldToMatch, `TextTransformation`, `ComparisonOperator`, and `Size`
   * - FieldToMatch: Contains `Data` and `Type`
   *
   * @public
   */
  SizeConstraintSet?: SizeConstraintSet | undefined;
}

/**
 * A request to get a SqlInjectionMatchSet.
 *
 * @public
 */
export interface GetSqlInjectionMatchSetRequest {
  /**
   * The `SqlInjectionMatchSetId` of the SqlInjectionMatchSet that you want to get. `SqlInjectionMatchSetId` is returned by CreateSqlInjectionMatchSet and by ListSqlInjectionMatchSets.
   *
   * @public
   */
  SqlInjectionMatchSetId: string | undefined;
}

/**
 * The response to a GetSqlInjectionMatchSet request.
 *
 * @public
 */
export interface GetSqlInjectionMatchSetResponse {
  /**
   * Information about the SqlInjectionMatchSet that you specified in the `GetSqlInjectionMatchSet` request. For more information, see the following topics:
   *
   * - SqlInjectionMatchSet: Contains `Name`, `SqlInjectionMatchSetId`, and an array of `SqlInjectionMatchTuple` objects
   * - SqlInjectionMatchTuple: Each `SqlInjectionMatchTuple` object contains `FieldToMatch` and `TextTransformation`
   * - FieldToMatch: Contains `Data` and `Type`
   *
   * @public
   */
  SqlInjectionMatchSet?: SqlInjectionMatchSet | undefined;
}

/**
 * @public
 */
export interface GetWebACLRequest {
  /**
   * The `WebACLId` of the WebACL that you want to get. `WebACLId` is returned by CreateWebACL and by ListWebACLs.
   *
   * @public
   */
  WebACLId: string | undefined;
}

/**
 * @public
 */
export interface GetWebACLResponse {
  /**
   * Information about the WebACL that you specified in the `GetWebACL` request. For more information, see the following topics:
   *
   * - WebACL: Contains `DefaultAction`, `MetricName`, `Name`, an array of `Rule` objects, and `WebACLId`
   * - `DefaultAction` (Data type is WafAction): Contains `Type`
   * - `Rules`: Contains an array of `ActivatedRule` objects, which contain `Action`, `Priority`, and `RuleId`
   * - `Action`: Contains `Type`
   *
   * @public
   */
  WebACL?: WebACL | undefined;
}

/**
 * A request to get an XssMatchSet.
 *
 * @public
 */
export interface GetXssMatchSetRequest {
  /**
   * The `XssMatchSetId` of the XssMatchSet that you want to get. `XssMatchSetId` is returned by CreateXssMatchSet and by ListXssMatchSets.
   *
   * @public
   */
  XssMatchSetId: string | undefined;
}

/**
 * The response to a GetXssMatchSet request.
 *
 * @public
 */
export interface GetXssMatchSetResponse {
  /**
   * Information about the XssMatchSet that you specified in the `GetXssMatchSet` request. For more information, see the following topics:
   *
   * - XssMatchSet: Contains `Name`, `XssMatchSetId`, and an array of `XssMatchTuple` objects
   * - XssMatchTuple: Each `XssMatchTuple` object contains `FieldToMatch` and `TextTransformation`
   * - FieldToMatch: Contains `Data` and `Type`
   *
   * @public
   */
  XssMatchSet?: XssMatchSet | undefined;
}

/**
 * @public
 */
export interface ListActivatedRulesInRuleGroupRequest {
  /**
   * The `RuleGroupId` of the RuleGroup for which you want to get a list of ActivatedRule objects.
   *
   * @public
   */
  RuleGroupId?: string | undefined;

  /**
   * If you specify a value for `Limit` and you have more `ActivatedRules` than the value of `Limit`, AWS WAF returns a `NextMarker` value in the response that allows you to list another group of `ActivatedRules`. For the second and subsequent `ListActivatedRulesInRuleGroup` requests, specify the value of `NextMarker` from the previous response to get information about another batch of `ActivatedRules`.
   *
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * Specifies the number of `ActivatedRules` that you want AWS WAF to return for this request. If you have more `ActivatedRules` than the number that you specify for `Limit`, the response includes a `NextMarker` value that you can use to get another batch of `ActivatedRules`.
   *
   * @public
   */
  Limit?: number | undefined;
}

/**
 * @public
 */
export interface ListActivatedRulesInRuleGroupResponse {
  /**
   * If you have more `ActivatedRules` than the number that you specified for `Limit` in the request, the response includes a `NextMarker` value. To list more `ActivatedRules`, submit another `ListActivatedRulesInRuleGroup` request, and specify the `NextMarker` value from the response in the `NextMarker` value in the next request.
   *
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * An array of `ActivatedRules` objects.
   *
   * @public
   */
  ActivatedRules?: ActivatedRule[] | undefined;
}

/**
 * @public
 */
export interface ListByteMatchSetsRequest {
  /**
   * If you specify a value for `Limit` and you have more `ByteMatchSets` than the value of `Limit`, AWS WAF returns a `NextMarker` value in the response that allows you to list another group of `ByteMatchSets`. For the second and subsequent `ListByteMatchSets` requests, specify the value of `NextMarker` from the previous response to get information about another batch of `ByteMatchSets`.
   *
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * Specifies the number of `ByteMatchSet` objects that you want AWS WAF to return for this request. If you have more `ByteMatchSets` objects than the number you specify for `Limit`, the response includes a `NextMarker` value that you can use to get another batch of `ByteMatchSet` objects.
   *
   * @public
   */
  Limit?: number | undefined;
}

/**
 * > **Note:**
 * >
 * > This is **AWS WAF Classic** documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 * >
 * > **For the latest version of AWS WAF**, use the AWS WAFV2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html). With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 *
 *
 *
 * Returned by ListByteMatchSets. Each `ByteMatchSetSummary` object includes the `Name` and `ByteMatchSetId` for one ByteMatchSet.
 *
 * @public
 */
export interface ByteMatchSetSummary {
  /**
   * The `ByteMatchSetId` for a `ByteMatchSet`. You use `ByteMatchSetId` to get information about a `ByteMatchSet`, update a `ByteMatchSet`, remove a `ByteMatchSet` from a `Rule`, and delete a `ByteMatchSet` from AWS WAF.
   *
   * `ByteMatchSetId` is returned by CreateByteMatchSet and by ListByteMatchSets.
   *
   * @public
   */
  ByteMatchSetId: string | undefined;

  /**
   * A friendly name or description of the ByteMatchSet. You can't change `Name` after you create a `ByteMatchSet`.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface ListByteMatchSetsResponse {
  /**
   * If you have more `ByteMatchSet` objects than the number that you specified for `Limit` in the request, the response includes a `NextMarker` value. To list more `ByteMatchSet` objects, submit another `ListByteMatchSets` request, and specify the `NextMarker` value from the response in the `NextMarker` value in the next request.
   *
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * An array of ByteMatchSetSummary objects.
   *
   * @public
   */
  ByteMatchSets?: ByteMatchSetSummary[] | undefined;
}

/**
 * @public
 */
export interface ListGeoMatchSetsRequest {
  /**
   * If you specify a value for `Limit` and you have more `GeoMatchSet`s than the value of `Limit`, AWS WAF returns a `NextMarker` value in the response that allows you to list another group of `GeoMatchSet` objects. For the second and subsequent `ListGeoMatchSets` requests, specify the value of `NextMarker` from the previous response to get information about another batch of `GeoMatchSet` objects.
   *
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * Specifies the number of `GeoMatchSet` objects that you want AWS WAF to return for this request. If you have more `GeoMatchSet` objects than the number you specify for `Limit`, the response includes a `NextMarker` value that you can use to get another batch of `GeoMatchSet` objects.
   *
   * @public
   */
  Limit?: number | undefined;
}

/**
 * > **Note:**
 * >
 * > This is **AWS WAF Classic** documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 * >
 * > **For the latest version of AWS WAF**, use the AWS WAFV2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html). With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 *
 *
 *
 * Contains the identifier and the name of the `GeoMatchSet`.
 *
 * @public
 */
export interface GeoMatchSetSummary {
  /**
   * The `GeoMatchSetId` for an GeoMatchSet. You can use `GeoMatchSetId` in a GetGeoMatchSet request to get detailed information about an GeoMatchSet.
   *
   * @public
   */
  GeoMatchSetId: string | undefined;

  /**
   * A friendly name or description of the GeoMatchSet. You can't change the name of an `GeoMatchSet` after you create it.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface ListGeoMatchSetsResponse {
  /**
   * If you have more `GeoMatchSet` objects than the number that you specified for `Limit` in the request, the response includes a `NextMarker` value. To list more `GeoMatchSet` objects, submit another `ListGeoMatchSets` request, and specify the `NextMarker` value from the response in the `NextMarker` value in the next request.
   *
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * An array of GeoMatchSetSummary objects.
   *
   * @public
   */
  GeoMatchSets?: GeoMatchSetSummary[] | undefined;
}

/**
 * @public
 */
export interface ListIPSetsRequest {
  /**
   * AWS WAF returns a `NextMarker` value in the response that allows you to list another group of `IPSets`. For the second and subsequent `ListIPSets` requests, specify the value of `NextMarker` from the previous response to get information about another batch of `IPSets`.
   *
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * Specifies the number of `IPSet` objects that you want AWS WAF to return for this request. If you have more `IPSet` objects than the number you specify for `Limit`, the response includes a `NextMarker` value that you can use to get another batch of `IPSet` objects.
   *
   * @public
   */
  Limit?: number | undefined;
}

/**
 * > **Note:**
 * >
 * > This is **AWS WAF Classic** documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 * >
 * > **For the latest version of AWS WAF**, use the AWS WAFV2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html). With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 *
 *
 *
 * Contains the identifier and the name of the `IPSet`.
 *
 * @public
 */
export interface IPSetSummary {
  /**
   * The `IPSetId` for an IPSet. You can use `IPSetId` in a GetIPSet request to get detailed information about an IPSet.
   *
   * @public
   */
  IPSetId: string | undefined;

  /**
   * A friendly name or description of the IPSet. You can't change the name of an `IPSet` after you create it.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface ListIPSetsResponse {
  /**
   * To list more `IPSet` objects, submit another `ListIPSets` request, and in the next request use the `NextMarker` response value as the `NextMarker` value.
   *
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * An array of IPSetSummary objects.
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
   * If you specify a value for `Limit` and you have more `LoggingConfigurations` than the value of `Limit`, AWS WAF returns a `NextMarker` value in the response that allows you to list another group of `LoggingConfigurations`. For the second and subsequent `ListLoggingConfigurations` requests, specify the value of `NextMarker` from the previous response to get information about another batch of `ListLoggingConfigurations`.
   *
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * Specifies the number of `LoggingConfigurations` that you want AWS WAF to return for this request. If you have more `LoggingConfigurations` than the number that you specify for `Limit`, the response includes a `NextMarker` value that you can use to get another batch of `LoggingConfigurations`.
   *
   * @public
   */
  Limit?: number | undefined;
}

/**
 * @public
 */
export interface ListLoggingConfigurationsResponse {
  /**
   * An array of LoggingConfiguration objects.
   *
   * @public
   */
  LoggingConfigurations?: LoggingConfiguration[] | undefined;

  /**
   * If you have more `LoggingConfigurations` than the number that you specified for `Limit` in the request, the response includes a `NextMarker` value. To list more `LoggingConfigurations`, submit another `ListLoggingConfigurations` request, and specify the `NextMarker` value from the response in the `NextMarker` value in the next request.
   *
   * @public
   */
  NextMarker?: string | undefined;
}

/**
 * @public
 */
export interface ListRateBasedRulesRequest {
  /**
   * If you specify a value for `Limit` and you have more `Rules` than the value of `Limit`, AWS WAF returns a `NextMarker` value in the response that allows you to list another group of `Rules`. For the second and subsequent `ListRateBasedRules` requests, specify the value of `NextMarker` from the previous response to get information about another batch of `Rules`.
   *
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * Specifies the number of `Rules` that you want AWS WAF to return for this request. If you have more `Rules` than the number that you specify for `Limit`, the response includes a `NextMarker` value that you can use to get another batch of `Rules`.
   *
   * @public
   */
  Limit?: number | undefined;
}

/**
 * > **Note:**
 * >
 * > This is **AWS WAF Classic** documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 * >
 * > **For the latest version of AWS WAF**, use the AWS WAFV2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html). With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 *
 *
 *
 * Contains the identifier and the friendly name or description of the `Rule`.
 *
 * @public
 */
export interface RuleSummary {
  /**
   * A unique identifier for a `Rule`. You use `RuleId` to get more information about a `Rule` (see GetRule), update a `Rule` (see UpdateRule), insert a `Rule` into a `WebACL` or delete one from a `WebACL` (see UpdateWebACL), or delete a `Rule` from AWS WAF (see DeleteRule).
   *
   * `RuleId` is returned by CreateRule and by ListRules.
   *
   * @public
   */
  RuleId: string | undefined;

  /**
   * A friendly name or description of the Rule. You can't change the name of a `Rule` after you create it.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface ListRateBasedRulesResponse {
  /**
   * If you have more `Rules` than the number that you specified for `Limit` in the request, the response includes a `NextMarker` value. To list more `Rules`, submit another `ListRateBasedRules` request, and specify the `NextMarker` value from the response in the `NextMarker` value in the next request.
   *
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * An array of RuleSummary objects.
   *
   * @public
   */
  Rules?: RuleSummary[] | undefined;
}

/**
 * @public
 */
export interface ListRegexMatchSetsRequest {
  /**
   * If you specify a value for `Limit` and you have more `RegexMatchSet` objects than the value of `Limit`, AWS WAF returns a `NextMarker` value in the response that allows you to list another group of `ByteMatchSets`. For the second and subsequent `ListRegexMatchSets` requests, specify the value of `NextMarker` from the previous response to get information about another batch of `RegexMatchSet` objects.
   *
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * Specifies the number of `RegexMatchSet` objects that you want AWS WAF to return for this request. If you have more `RegexMatchSet` objects than the number you specify for `Limit`, the response includes a `NextMarker` value that you can use to get another batch of `RegexMatchSet` objects.
   *
   * @public
   */
  Limit?: number | undefined;
}

/**
 * > **Note:**
 * >
 * > This is **AWS WAF Classic** documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 * >
 * > **For the latest version of AWS WAF**, use the AWS WAFV2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html). With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 *
 *
 *
 * Returned by ListRegexMatchSets. Each `RegexMatchSetSummary` object includes the `Name` and `RegexMatchSetId` for one RegexMatchSet.
 *
 * @public
 */
export interface RegexMatchSetSummary {
  /**
   * The `RegexMatchSetId` for a `RegexMatchSet`. You use `RegexMatchSetId` to get information about a `RegexMatchSet`, update a `RegexMatchSet`, remove a `RegexMatchSet` from a `Rule`, and delete a `RegexMatchSet` from AWS WAF.
   *
   * `RegexMatchSetId` is returned by CreateRegexMatchSet and by ListRegexMatchSets.
   *
   * @public
   */
  RegexMatchSetId: string | undefined;

  /**
   * A friendly name or description of the RegexMatchSet. You can't change `Name` after you create a `RegexMatchSet`.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface ListRegexMatchSetsResponse {
  /**
   * If you have more `RegexMatchSet` objects than the number that you specified for `Limit` in the request, the response includes a `NextMarker` value. To list more `RegexMatchSet` objects, submit another `ListRegexMatchSets` request, and specify the `NextMarker` value from the response in the `NextMarker` value in the next request.
   *
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * An array of RegexMatchSetSummary objects.
   *
   * @public
   */
  RegexMatchSets?: RegexMatchSetSummary[] | undefined;
}

/**
 * @public
 */
export interface ListRegexPatternSetsRequest {
  /**
   * If you specify a value for `Limit` and you have more `RegexPatternSet` objects than the value of `Limit`, AWS WAF returns a `NextMarker` value in the response that allows you to list another group of `RegexPatternSet` objects. For the second and subsequent `ListRegexPatternSets` requests, specify the value of `NextMarker` from the previous response to get information about another batch of `RegexPatternSet` objects.
   *
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * Specifies the number of `RegexPatternSet` objects that you want AWS WAF to return for this request. If you have more `RegexPatternSet` objects than the number you specify for `Limit`, the response includes a `NextMarker` value that you can use to get another batch of `RegexPatternSet` objects.
   *
   * @public
   */
  Limit?: number | undefined;
}

/**
 * > **Note:**
 * >
 * > This is **AWS WAF Classic** documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 * >
 * > **For the latest version of AWS WAF**, use the AWS WAFV2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html). With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 *
 *
 *
 * Returned by ListRegexPatternSets. Each `RegexPatternSetSummary` object includes the `Name` and `RegexPatternSetId` for one RegexPatternSet.
 *
 * @public
 */
export interface RegexPatternSetSummary {
  /**
   * The `RegexPatternSetId` for a `RegexPatternSet`. You use `RegexPatternSetId` to get information about a `RegexPatternSet`, update a `RegexPatternSet`, remove a `RegexPatternSet` from a `RegexMatchSet`, and delete a `RegexPatternSet` from AWS WAF.
   *
   * `RegexPatternSetId` is returned by CreateRegexPatternSet and by ListRegexPatternSets.
   *
   * @public
   */
  RegexPatternSetId: string | undefined;

  /**
   * A friendly name or description of the RegexPatternSet. You can't change `Name` after you create a `RegexPatternSet`.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface ListRegexPatternSetsResponse {
  /**
   * If you have more `RegexPatternSet` objects than the number that you specified for `Limit` in the request, the response includes a `NextMarker` value. To list more `RegexPatternSet` objects, submit another `ListRegexPatternSets` request, and specify the `NextMarker` value from the response in the `NextMarker` value in the next request.
   *
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * An array of RegexPatternSetSummary objects.
   *
   * @public
   */
  RegexPatternSets?: RegexPatternSetSummary[] | undefined;
}

/**
 * @public
 */
export interface ListRuleGroupsRequest {
  /**
   * If you specify a value for `Limit` and you have more `RuleGroups` than the value of `Limit`, AWS WAF returns a `NextMarker` value in the response that allows you to list another group of `RuleGroups`. For the second and subsequent `ListRuleGroups` requests, specify the value of `NextMarker` from the previous response to get information about another batch of `RuleGroups`.
   *
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * Specifies the number of `RuleGroups` that you want AWS WAF to return for this request. If you have more `RuleGroups` than the number that you specify for `Limit`, the response includes a `NextMarker` value that you can use to get another batch of `RuleGroups`.
   *
   * @public
   */
  Limit?: number | undefined;
}

/**
 * > **Note:**
 * >
 * > This is **AWS WAF Classic** documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 * >
 * > **For the latest version of AWS WAF**, use the AWS WAFV2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html). With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 *
 *
 *
 * Contains the identifier and the friendly name or description of the `RuleGroup`.
 *
 * @public
 */
export interface RuleGroupSummary {
  /**
   * A unique identifier for a `RuleGroup`. You use `RuleGroupId` to get more information about a `RuleGroup` (see GetRuleGroup), update a `RuleGroup` (see UpdateRuleGroup), insert a `RuleGroup` into a `WebACL` or delete one from a `WebACL` (see UpdateWebACL), or delete a `RuleGroup` from AWS WAF (see DeleteRuleGroup).
   *
   * `RuleGroupId` is returned by CreateRuleGroup and by ListRuleGroups.
   *
   * @public
   */
  RuleGroupId: string | undefined;

  /**
   * A friendly name or description of the RuleGroup. You can't change the name of a `RuleGroup` after you create it.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface ListRuleGroupsResponse {
  /**
   * If you have more `RuleGroups` than the number that you specified for `Limit` in the request, the response includes a `NextMarker` value. To list more `RuleGroups`, submit another `ListRuleGroups` request, and specify the `NextMarker` value from the response in the `NextMarker` value in the next request.
   *
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * An array of RuleGroup objects.
   *
   * @public
   */
  RuleGroups?: RuleGroupSummary[] | undefined;
}

/**
 * @public
 */
export interface ListRulesRequest {
  /**
   * If you specify a value for `Limit` and you have more `Rules` than the value of `Limit`, AWS WAF returns a `NextMarker` value in the response that allows you to list another group of `Rules`. For the second and subsequent `ListRules` requests, specify the value of `NextMarker` from the previous response to get information about another batch of `Rules`.
   *
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * Specifies the number of `Rules` that you want AWS WAF to return for this request. If you have more `Rules` than the number that you specify for `Limit`, the response includes a `NextMarker` value that you can use to get another batch of `Rules`.
   *
   * @public
   */
  Limit?: number | undefined;
}

/**
 * @public
 */
export interface ListRulesResponse {
  /**
   * If you have more `Rules` than the number that you specified for `Limit` in the request, the response includes a `NextMarker` value. To list more `Rules`, submit another `ListRules` request, and specify the `NextMarker` value from the response in the `NextMarker` value in the next request.
   *
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * An array of RuleSummary objects.
   *
   * @public
   */
  Rules?: RuleSummary[] | undefined;
}

/**
 * @public
 */
export interface ListSizeConstraintSetsRequest {
  /**
   * If you specify a value for `Limit` and you have more `SizeConstraintSets` than the value of `Limit`, AWS WAF returns a `NextMarker` value in the response that allows you to list another group of `SizeConstraintSets`. For the second and subsequent `ListSizeConstraintSets` requests, specify the value of `NextMarker` from the previous response to get information about another batch of `SizeConstraintSets`.
   *
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * Specifies the number of `SizeConstraintSet` objects that you want AWS WAF to return for this request. If you have more `SizeConstraintSets` objects than the number you specify for `Limit`, the response includes a `NextMarker` value that you can use to get another batch of `SizeConstraintSet` objects.
   *
   * @public
   */
  Limit?: number | undefined;
}

/**
 * > **Note:**
 * >
 * > This is **AWS WAF Classic** documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 * >
 * > **For the latest version of AWS WAF**, use the AWS WAFV2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html). With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 *
 *
 *
 * The `Id` and `Name` of a `SizeConstraintSet`.
 *
 * @public
 */
export interface SizeConstraintSetSummary {
  /**
   * A unique identifier for a `SizeConstraintSet`. You use `SizeConstraintSetId` to get information about a `SizeConstraintSet` (see GetSizeConstraintSet), update a `SizeConstraintSet` (see UpdateSizeConstraintSet), insert a `SizeConstraintSet` into a `Rule` or delete one from a `Rule` (see UpdateRule), and delete a `SizeConstraintSet` from AWS WAF (see DeleteSizeConstraintSet).
   *
   * `SizeConstraintSetId` is returned by CreateSizeConstraintSet and by ListSizeConstraintSets.
   *
   * @public
   */
  SizeConstraintSetId: string | undefined;

  /**
   * The name of the `SizeConstraintSet`, if any.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface ListSizeConstraintSetsResponse {
  /**
   * If you have more `SizeConstraintSet` objects than the number that you specified for `Limit` in the request, the response includes a `NextMarker` value. To list more `SizeConstraintSet` objects, submit another `ListSizeConstraintSets` request, and specify the `NextMarker` value from the response in the `NextMarker` value in the next request.
   *
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * An array of SizeConstraintSetSummary objects.
   *
   * @public
   */
  SizeConstraintSets?: SizeConstraintSetSummary[] | undefined;
}

/**
 * A request to list the SqlInjectionMatchSet objects created by the current AWS account.
 *
 * @public
 */
export interface ListSqlInjectionMatchSetsRequest {
  /**
   * If you specify a value for `Limit` and you have more SqlInjectionMatchSet objects than the value of `Limit`, AWS WAF returns a `NextMarker` value in the response that allows you to list another group of `SqlInjectionMatchSets`. For the second and subsequent `ListSqlInjectionMatchSets` requests, specify the value of `NextMarker` from the previous response to get information about another batch of `SqlInjectionMatchSets`.
   *
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * Specifies the number of SqlInjectionMatchSet objects that you want AWS WAF to return for this request. If you have more `SqlInjectionMatchSet` objects than the number you specify for `Limit`, the response includes a `NextMarker` value that you can use to get another batch of `Rules`.
   *
   * @public
   */
  Limit?: number | undefined;
}

/**
 * > **Note:**
 * >
 * > This is **AWS WAF Classic** documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 * >
 * > **For the latest version of AWS WAF**, use the AWS WAFV2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html). With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 *
 *
 *
 * The `Id` and `Name` of a `SqlInjectionMatchSet`.
 *
 * @public
 */
export interface SqlInjectionMatchSetSummary {
  /**
   * A unique identifier for a `SqlInjectionMatchSet`. You use `SqlInjectionMatchSetId` to get information about a `SqlInjectionMatchSet` (see GetSqlInjectionMatchSet), update a `SqlInjectionMatchSet` (see UpdateSqlInjectionMatchSet), insert a `SqlInjectionMatchSet` into a `Rule` or delete one from a `Rule` (see UpdateRule), and delete a `SqlInjectionMatchSet` from AWS WAF (see DeleteSqlInjectionMatchSet).
   *
   * `SqlInjectionMatchSetId` is returned by CreateSqlInjectionMatchSet and by ListSqlInjectionMatchSets.
   *
   * @public
   */
  SqlInjectionMatchSetId: string | undefined;

  /**
   * The name of the `SqlInjectionMatchSet`, if any, specified by `Id`.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * The response to a ListSqlInjectionMatchSets request.
 *
 * @public
 */
export interface ListSqlInjectionMatchSetsResponse {
  /**
   * If you have more SqlInjectionMatchSet objects than the number that you specified for `Limit` in the request, the response includes a `NextMarker` value. To list more `SqlInjectionMatchSet` objects, submit another `ListSqlInjectionMatchSets` request, and specify the `NextMarker` value from the response in the `NextMarker` value in the next request.
   *
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * An array of SqlInjectionMatchSetSummary objects.
   *
   * @public
   */
  SqlInjectionMatchSets?: SqlInjectionMatchSetSummary[] | undefined;
}

/**
 * @public
 */
export interface ListSubscribedRuleGroupsRequest {
  /**
   * If you specify a value for `Limit` and you have more `ByteMatchSets`subscribed rule groups than the value of `Limit`, AWS WAF returns a `NextMarker` value in the response that allows you to list another group of subscribed rule groups. For the second and subsequent `ListSubscribedRuleGroupsRequest` requests, specify the value of `NextMarker` from the previous response to get information about another batch of subscribed rule groups.
   *
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * Specifies the number of subscribed rule groups that you want AWS WAF to return for this request. If you have more objects than the number you specify for `Limit`, the response includes a `NextMarker` value that you can use to get another batch of objects.
   *
   * @public
   */
  Limit?: number | undefined;
}

/**
 * > **Note:**
 * >
 * > This is **AWS WAF Classic** documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 * >
 * > **For the latest version of AWS WAF**, use the AWS WAFV2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html). With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 *
 *
 *
 * A summary of the rule groups you are subscribed to.
 *
 * @public
 */
export interface SubscribedRuleGroupSummary {
  /**
   * A unique identifier for a `RuleGroup`.
   *
   * @public
   */
  RuleGroupId: string | undefined;

  /**
   * A friendly name or description of the `RuleGroup`. You can't change the name of a `RuleGroup` after you create it.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A friendly name or description for the metrics for this `RuleGroup`. The name can contain only alphanumeric characters (A-Z, a-z, 0-9), with maximum length 128 and minimum length one. It can't contain whitespace or metric names reserved for AWS WAF, including "All" and "Default_Action." You can't change the name of the metric after you create the `RuleGroup`.
   *
   * @public
   */
  MetricName: string | undefined;
}

/**
 * @public
 */
export interface ListSubscribedRuleGroupsResponse {
  /**
   * If you have more objects than the number that you specified for `Limit` in the request, the response includes a `NextMarker` value. To list more objects, submit another `ListSubscribedRuleGroups` request, and specify the `NextMarker` value from the response in the `NextMarker` value in the next request.
   *
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * An array of RuleGroup objects.
   *
   * @public
   */
  RuleGroups?: SubscribedRuleGroupSummary[] | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * @public
   */
  Limit?: number | undefined;

  /**
   * @public
   */
  ResourceARN: string | undefined;
}

/**
 * > **Note:**
 * >
 * > This is **AWS WAF Classic** documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 * >
 * > **For the latest version of AWS WAF**, use the AWS WAFV2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html). With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 *
 *
 *
 * Information for a tag associated with an AWS resource. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing. For example, you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each AWS resource, up to 50 tags for a resource.
 *
 * Tagging is only available through the API, SDKs, and CLI. You can't manage or view tags through the AWS WAF Classic console. You can tag the AWS resources that you manage through AWS WAF Classic: web ACLs, rule groups, and rules.
 *
 * @public
 */
export interface TagInfoForResource {
  /**
   * @public
   */
  ResourceARN?: string | undefined;

  /**
   * @public
   */
  TagList?: Tag[] | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * @public
   */
  TagInfoForResource?: TagInfoForResource | undefined;
}

/**
 * @public
 */
export interface ListWebACLsRequest {
  /**
   * If you specify a value for `Limit` and you have more `WebACL` objects than the number that you specify for `Limit`, AWS WAF returns a `NextMarker` value in the response that allows you to list another group of `WebACL` objects. For the second and subsequent `ListWebACLs` requests, specify the value of `NextMarker` from the previous response to get information about another batch of `WebACL` objects.
   *
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * Specifies the number of `WebACL` objects that you want AWS WAF to return for this request. If you have more `WebACL` objects than the number that you specify for `Limit`, the response includes a `NextMarker` value that you can use to get another batch of `WebACL` objects.
   *
   * @public
   */
  Limit?: number | undefined;
}

/**
 * > **Note:**
 * >
 * > This is **AWS WAF Classic** documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 * >
 * > **For the latest version of AWS WAF**, use the AWS WAFV2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html). With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 *
 *
 *
 * Contains the identifier and the name or description of the WebACL.
 *
 * @public
 */
export interface WebACLSummary {
  /**
   * A unique identifier for a `WebACL`. You use `WebACLId` to get information about a `WebACL` (see GetWebACL), update a `WebACL` (see UpdateWebACL), and delete a `WebACL` from AWS WAF (see DeleteWebACL).
   *
   * `WebACLId` is returned by CreateWebACL and by ListWebACLs.
   *
   * @public
   */
  WebACLId: string | undefined;

  /**
   * A friendly name or description of the WebACL. You can't change the name of a `WebACL` after you create it.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface ListWebACLsResponse {
  /**
   * If you have more `WebACL` objects than the number that you specified for `Limit` in the request, the response includes a `NextMarker` value. To list more `WebACL` objects, submit another `ListWebACLs` request, and specify the `NextMarker` value from the response in the `NextMarker` value in the next request.
   *
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * An array of WebACLSummary objects.
   *
   * @public
   */
  WebACLs?: WebACLSummary[] | undefined;
}

/**
 * A request to list the XssMatchSet objects created by the current AWS account.
 *
 * @public
 */
export interface ListXssMatchSetsRequest {
  /**
   * If you specify a value for `Limit` and you have more XssMatchSet objects than the value of `Limit`, AWS WAF returns a `NextMarker` value in the response that allows you to list another group of `XssMatchSets`. For the second and subsequent `ListXssMatchSets` requests, specify the value of `NextMarker` from the previous response to get information about another batch of `XssMatchSets`.
   *
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * Specifies the number of XssMatchSet objects that you want AWS WAF to return for this request. If you have more `XssMatchSet` objects than the number you specify for `Limit`, the response includes a `NextMarker` value that you can use to get another batch of `Rules`.
   *
   * @public
   */
  Limit?: number | undefined;
}

/**
 * > **Note:**
 * >
 * > This is **AWS WAF Classic** documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 * >
 * > **For the latest version of AWS WAF**, use the AWS WAFV2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html). With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 *
 *
 *
 * The `Id` and `Name` of an `XssMatchSet`.
 *
 * @public
 */
export interface XssMatchSetSummary {
  /**
   * A unique identifier for an `XssMatchSet`. You use `XssMatchSetId` to get information about a `XssMatchSet` (see GetXssMatchSet), update an `XssMatchSet` (see UpdateXssMatchSet), insert an `XssMatchSet` into a `Rule` or delete one from a `Rule` (see UpdateRule), and delete an `XssMatchSet` from AWS WAF (see DeleteXssMatchSet).
   *
   * `XssMatchSetId` is returned by CreateXssMatchSet and by ListXssMatchSets.
   *
   * @public
   */
  XssMatchSetId: string | undefined;

  /**
   * The name of the `XssMatchSet`, if any, specified by `Id`.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * The response to a ListXssMatchSets request.
 *
 * @public
 */
export interface ListXssMatchSetsResponse {
  /**
   * If you have more XssMatchSet objects than the number that you specified for `Limit` in the request, the response includes a `NextMarker` value. To list more `XssMatchSet` objects, submit another `ListXssMatchSets` request, and specify the `NextMarker` value from the response in the `NextMarker` value in the next request.
   *
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * An array of XssMatchSetSummary objects.
   *
   * @public
   */
  XssMatchSets?: XssMatchSetSummary[] | undefined;
}

/**
 * @public
 */
export interface PutLoggingConfigurationRequest {
  /**
   * The Amazon Kinesis Data Firehose that contains the inspected traffic information, the redacted fields details, and the Amazon Resource Name (ARN) of the web ACL to monitor.
   *
   * > **Note:** When specifying `Type` in `RedactedFields`, you must use one of the following values: `URI`, `QUERY_STRING`, `HEADER`, or `METHOD`.
   *
   * @public
   */
  LoggingConfiguration: LoggingConfiguration | undefined;
}

/**
 * @public
 */
export interface PutLoggingConfigurationResponse {
  /**
   * The LoggingConfiguration that you submitted in the request.
   *
   * @public
   */
  LoggingConfiguration?: LoggingConfiguration | undefined;
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
   * The policy to attach to the specified RuleGroup.
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
   * @public
   */
  ResourceARN: string | undefined;

  /**
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
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * > **Note:**
 * >
 * > This is **AWS WAF Classic** documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 * >
 * > **For the latest version of AWS WAF**, use the AWS WAFV2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html). With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 *
 *
 *
 * In an UpdateByteMatchSet request, `ByteMatchSetUpdate` specifies whether to insert or delete a ByteMatchTuple and includes the settings for the `ByteMatchTuple`.
 *
 * @public
 */
export interface ByteMatchSetUpdate {
  /**
   * Specifies whether to insert or delete a ByteMatchTuple.
   *
   * @public
   */
  Action: ChangeAction | undefined;

  /**
   * Information about the part of a web request that you want AWS WAF to inspect and the value that you want AWS WAF to search for. If you specify `DELETE` for the value of `Action`, the `ByteMatchTuple` values must exactly match the values in the `ByteMatchTuple` that you want to delete from the `ByteMatchSet`.
   *
   * @public
   */
  ByteMatchTuple: ByteMatchTuple | undefined;
}

/**
 * @public
 */
export interface UpdateByteMatchSetRequest {
  /**
   * The `ByteMatchSetId` of the ByteMatchSet that you want to update. `ByteMatchSetId` is returned by CreateByteMatchSet and by ListByteMatchSets.
   *
   * @public
   */
  ByteMatchSetId: string | undefined;

  /**
   * The value returned by the most recent call to GetChangeToken.
   *
   * @public
   */
  ChangeToken: string | undefined;

  /**
   * An array of `ByteMatchSetUpdate` objects that you want to insert into or delete from a ByteMatchSet. For more information, see the applicable data types:
   *
   * - ByteMatchSetUpdate: Contains `Action` and `ByteMatchTuple`
   * - ByteMatchTuple: Contains `FieldToMatch`, `PositionalConstraint`, `TargetString`, and `TextTransformation`
   * - FieldToMatch: Contains `Data` and `Type`
   *
   * @public
   */
  Updates: ByteMatchSetUpdate[] | undefined;
}

/**
 * @public
 */
export interface UpdateByteMatchSetResponse {
  /**
   * The `ChangeToken` that you used to submit the `UpdateByteMatchSet` request. You can also use this value to query the status of the request. For more information, see GetChangeTokenStatus.
   *
   * @public
   */
  ChangeToken?: string | undefined;
}

/**
 * > **Note:**
 * >
 * > This is **AWS WAF Classic** documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 * >
 * > **For the latest version of AWS WAF**, use the AWS WAFV2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html). With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 *
 *
 *
 * Specifies the type of update to perform to an GeoMatchSet with UpdateGeoMatchSet.
 *
 * @public
 */
export interface GeoMatchSetUpdate {
  /**
   * Specifies whether to insert or delete a country with UpdateGeoMatchSet.
   *
   * @public
   */
  Action: ChangeAction | undefined;

  /**
   * The country from which web requests originate that you want AWS WAF to search for.
   *
   * @public
   */
  GeoMatchConstraint: GeoMatchConstraint | undefined;
}

/**
 * @public
 */
export interface UpdateGeoMatchSetRequest {
  /**
   * The `GeoMatchSetId` of the GeoMatchSet that you want to update. `GeoMatchSetId` is returned by CreateGeoMatchSet and by ListGeoMatchSets.
   *
   * @public
   */
  GeoMatchSetId: string | undefined;

  /**
   * The value returned by the most recent call to GetChangeToken.
   *
   * @public
   */
  ChangeToken: string | undefined;

  /**
   * An array of `GeoMatchSetUpdate` objects that you want to insert into or delete from an GeoMatchSet. For more information, see the applicable data types:
   *
   * - GeoMatchSetUpdate: Contains `Action` and `GeoMatchConstraint`
   * - GeoMatchConstraint: Contains `Type` and `Value`
   *
   *   You can have only one `Type` and `Value` per `GeoMatchConstraint`. To add multiple countries, include multiple `GeoMatchSetUpdate` objects in your request.
   *
   * @public
   */
  Updates: GeoMatchSetUpdate[] | undefined;
}

/**
 * @public
 */
export interface UpdateGeoMatchSetResponse {
  /**
   * The `ChangeToken` that you used to submit the `UpdateGeoMatchSet` request. You can also use this value to query the status of the request. For more information, see GetChangeTokenStatus.
   *
   * @public
   */
  ChangeToken?: string | undefined;
}

/**
 * > **Note:**
 * >
 * > This is **AWS WAF Classic** documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 * >
 * > **For the latest version of AWS WAF**, use the AWS WAFV2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html). With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 *
 *
 *
 * Specifies the type of update to perform to an IPSet with UpdateIPSet.
 *
 * @public
 */
export interface IPSetUpdate {
  /**
   * Specifies whether to insert or delete an IP address with UpdateIPSet.
   *
   * @public
   */
  Action: ChangeAction | undefined;

  /**
   * The IP address type (`IPV4` or `IPV6`) and the IP address range (in CIDR notation) that web requests originate from.
   *
   * @public
   */
  IPSetDescriptor: IPSetDescriptor | undefined;
}

/**
 * @public
 */
export interface UpdateIPSetRequest {
  /**
   * The `IPSetId` of the IPSet that you want to update. `IPSetId` is returned by CreateIPSet and by ListIPSets.
   *
   * @public
   */
  IPSetId: string | undefined;

  /**
   * The value returned by the most recent call to GetChangeToken.
   *
   * @public
   */
  ChangeToken: string | undefined;

  /**
   * An array of `IPSetUpdate` objects that you want to insert into or delete from an IPSet. For more information, see the applicable data types:
   *
   * - IPSetUpdate: Contains `Action` and `IPSetDescriptor`
   * - IPSetDescriptor: Contains `Type` and `Value`
   *
   * You can insert a maximum of 1000 addresses in a single request.
   *
   * @public
   */
  Updates: IPSetUpdate[] | undefined;
}

/**
 * @public
 */
export interface UpdateIPSetResponse {
  /**
   * The `ChangeToken` that you used to submit the `UpdateIPSet` request. You can also use this value to query the status of the request. For more information, see GetChangeTokenStatus.
   *
   * @public
   */
  ChangeToken?: string | undefined;
}

/**
 * > **Note:**
 * >
 * > This is **AWS WAF Classic** documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 * >
 * > **For the latest version of AWS WAF**, use the AWS WAFV2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html). With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 *
 *
 *
 * Specifies a `Predicate` (such as an `IPSet`) and indicates whether you want to add it to a `Rule` or delete it from a `Rule`.
 *
 * @public
 */
export interface RuleUpdate {
  /**
   * Specify `INSERT` to add a `Predicate` to a `Rule`. Use `DELETE` to remove a `Predicate` from a `Rule`.
   *
   * @public
   */
  Action: ChangeAction | undefined;

  /**
   * The ID of the `Predicate` (such as an `IPSet`) that you want to add to a `Rule`.
   *
   * @public
   */
  Predicate: Predicate | undefined;
}

/**
 * @public
 */
export interface UpdateRateBasedRuleRequest {
  /**
   * The `RuleId` of the `RateBasedRule` that you want to update. `RuleId` is returned by `CreateRateBasedRule` and by ListRateBasedRules.
   *
   * @public
   */
  RuleId: string | undefined;

  /**
   * The value returned by the most recent call to GetChangeToken.
   *
   * @public
   */
  ChangeToken: string | undefined;

  /**
   * An array of `RuleUpdate` objects that you want to insert into or delete from a RateBasedRule.
   *
   * @public
   */
  Updates: RuleUpdate[] | undefined;

  /**
   * The maximum number of requests, which have an identical value in the field specified by the `RateKey`, allowed in a five-minute period. If the number of requests exceeds the `RateLimit` and the other predicates specified in the rule are also met, AWS WAF triggers the action that is specified for this rule.
   *
   * @public
   */
  RateLimit: number | undefined;
}

/**
 * @public
 */
export interface UpdateRateBasedRuleResponse {
  /**
   * The `ChangeToken` that you used to submit the `UpdateRateBasedRule` request. You can also use this value to query the status of the request. For more information, see GetChangeTokenStatus.
   *
   * @public
   */
  ChangeToken?: string | undefined;
}

/**
 * > **Note:**
 * >
 * > This is **AWS WAF Classic** documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 * >
 * > **For the latest version of AWS WAF**, use the AWS WAFV2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html). With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 *
 *
 *
 * In an UpdateRegexMatchSet request, `RegexMatchSetUpdate` specifies whether to insert or delete a RegexMatchTuple and includes the settings for the `RegexMatchTuple`.
 *
 * @public
 */
export interface RegexMatchSetUpdate {
  /**
   * Specifies whether to insert or delete a RegexMatchTuple.
   *
   * @public
   */
  Action: ChangeAction | undefined;

  /**
   * Information about the part of a web request that you want AWS WAF to inspect and the identifier of the regular expression (regex) pattern that you want AWS WAF to search for. If you specify `DELETE` for the value of `Action`, the `RegexMatchTuple` values must exactly match the values in the `RegexMatchTuple` that you want to delete from the `RegexMatchSet`.
   *
   * @public
   */
  RegexMatchTuple: RegexMatchTuple | undefined;
}

/**
 * @public
 */
export interface UpdateRegexMatchSetRequest {
  /**
   * The `RegexMatchSetId` of the RegexMatchSet that you want to update. `RegexMatchSetId` is returned by CreateRegexMatchSet and by ListRegexMatchSets.
   *
   * @public
   */
  RegexMatchSetId: string | undefined;

  /**
   * An array of `RegexMatchSetUpdate` objects that you want to insert into or delete from a RegexMatchSet. For more information, see RegexMatchTuple.
   *
   * @public
   */
  Updates: RegexMatchSetUpdate[] | undefined;

  /**
   * The value returned by the most recent call to GetChangeToken.
   *
   * @public
   */
  ChangeToken: string | undefined;
}

/**
 * @public
 */
export interface UpdateRegexMatchSetResponse {
  /**
   * The `ChangeToken` that you used to submit the `UpdateRegexMatchSet` request. You can also use this value to query the status of the request. For more information, see GetChangeTokenStatus.
   *
   * @public
   */
  ChangeToken?: string | undefined;
}

/**
 * > **Note:**
 * >
 * > This is **AWS WAF Classic** documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 * >
 * > **For the latest version of AWS WAF**, use the AWS WAFV2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html). With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 *
 *
 *
 * In an UpdateRegexPatternSet request, `RegexPatternSetUpdate` specifies whether to insert or delete a `RegexPatternString` and includes the settings for the `RegexPatternString`.
 *
 * @public
 */
export interface RegexPatternSetUpdate {
  /**
   * Specifies whether to insert or delete a `RegexPatternString`.
   *
   * @public
   */
  Action: ChangeAction | undefined;

  /**
   * Specifies the regular expression (regex) pattern that you want AWS WAF to search for, such as `B[a@]dB[o0]t`.
   *
   * @public
   */
  RegexPatternString: string | undefined;
}

/**
 * @public
 */
export interface UpdateRegexPatternSetRequest {
  /**
   * The `RegexPatternSetId` of the RegexPatternSet that you want to update. `RegexPatternSetId` is returned by CreateRegexPatternSet and by ListRegexPatternSets.
   *
   * @public
   */
  RegexPatternSetId: string | undefined;

  /**
   * An array of `RegexPatternSetUpdate` objects that you want to insert into or delete from a RegexPatternSet.
   *
   * @public
   */
  Updates: RegexPatternSetUpdate[] | undefined;

  /**
   * The value returned by the most recent call to GetChangeToken.
   *
   * @public
   */
  ChangeToken: string | undefined;
}

/**
 * @public
 */
export interface UpdateRegexPatternSetResponse {
  /**
   * The `ChangeToken` that you used to submit the `UpdateRegexPatternSet` request. You can also use this value to query the status of the request. For more information, see GetChangeTokenStatus.
   *
   * @public
   */
  ChangeToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateRuleRequest {
  /**
   * The `RuleId` of the `Rule` that you want to update. `RuleId` is returned by `CreateRule` and by ListRules.
   *
   * @public
   */
  RuleId: string | undefined;

  /**
   * The value returned by the most recent call to GetChangeToken.
   *
   * @public
   */
  ChangeToken: string | undefined;

  /**
   * An array of `RuleUpdate` objects that you want to insert into or delete from a Rule. For more information, see the applicable data types:
   *
   * - RuleUpdate: Contains `Action` and `Predicate`
   * - Predicate: Contains `DataId`, `Negated`, and `Type`
   * - FieldToMatch: Contains `Data` and `Type`
   *
   * @public
   */
  Updates: RuleUpdate[] | undefined;
}

/**
 * @public
 */
export interface UpdateRuleResponse {
  /**
   * The `ChangeToken` that you used to submit the `UpdateRule` request. You can also use this value to query the status of the request. For more information, see GetChangeTokenStatus.
   *
   * @public
   */
  ChangeToken?: string | undefined;
}

/**
 * > **Note:**
 * >
 * > This is **AWS WAF Classic** documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 * >
 * > **For the latest version of AWS WAF**, use the AWS WAFV2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html). With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 *
 *
 *
 * Specifies an `ActivatedRule` and indicates whether you want to add it to a `RuleGroup` or delete it from a `RuleGroup`.
 *
 * @public
 */
export interface RuleGroupUpdate {
  /**
   * Specify `INSERT` to add an `ActivatedRule` to a `RuleGroup`. Use `DELETE` to remove an `ActivatedRule` from a `RuleGroup`.
   *
   * @public
   */
  Action: ChangeAction | undefined;

  /**
   * The `ActivatedRule` object specifies a `Rule` that you want to insert or delete, the priority of the `Rule` in the `WebACL`, and the action that you want AWS WAF to take when a web request matches the `Rule` (`ALLOW`, `BLOCK`, or `COUNT`).
   *
   * @public
   */
  ActivatedRule: ActivatedRule | undefined;
}

/**
 * @public
 */
export interface UpdateRuleGroupRequest {
  /**
   * The `RuleGroupId` of the RuleGroup that you want to update. `RuleGroupId` is returned by CreateRuleGroup and by ListRuleGroups.
   *
   * @public
   */
  RuleGroupId: string | undefined;

  /**
   * An array of `RuleGroupUpdate` objects that you want to insert into or delete from a RuleGroup.
   *
   * You can only insert `REGULAR` rules into a rule group.
   *
   * `ActivatedRule|OverrideAction` applies only when updating or adding a `RuleGroup` to a `WebACL`. In this case you do not use `ActivatedRule|Action`. For all other update requests, `ActivatedRule|Action` is used instead of `ActivatedRule|OverrideAction`.
   *
   * @public
   */
  Updates: RuleGroupUpdate[] | undefined;

  /**
   * The value returned by the most recent call to GetChangeToken.
   *
   * @public
   */
  ChangeToken: string | undefined;
}

/**
 * @public
 */
export interface UpdateRuleGroupResponse {
  /**
   * The `ChangeToken` that you used to submit the `UpdateRuleGroup` request. You can also use this value to query the status of the request. For more information, see GetChangeTokenStatus.
   *
   * @public
   */
  ChangeToken?: string | undefined;
}

/**
 * > **Note:**
 * >
 * > This is **AWS WAF Classic** documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 * >
 * > **For the latest version of AWS WAF**, use the AWS WAFV2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html). With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 *
 *
 *
 * Specifies the part of a web request that you want to inspect the size of and indicates whether you want to add the specification to a SizeConstraintSet or delete it from a `SizeConstraintSet`.
 *
 * @public
 */
export interface SizeConstraintSetUpdate {
  /**
   * Specify `INSERT` to add a SizeConstraintSetUpdate to a SizeConstraintSet. Use `DELETE` to remove a `SizeConstraintSetUpdate` from a `SizeConstraintSet`.
   *
   * @public
   */
  Action: ChangeAction | undefined;

  /**
   * Specifies a constraint on the size of a part of the web request. AWS WAF uses the `Size`, `ComparisonOperator`, and `FieldToMatch` to build an expression in the form of "`Size` `ComparisonOperator` size in bytes of `FieldToMatch`". If that expression is true, the `SizeConstraint` is considered to match.
   *
   * @public
   */
  SizeConstraint: SizeConstraint | undefined;
}

/**
 * @public
 */
export interface UpdateSizeConstraintSetRequest {
  /**
   * The `SizeConstraintSetId` of the SizeConstraintSet that you want to update. `SizeConstraintSetId` is returned by CreateSizeConstraintSet and by ListSizeConstraintSets.
   *
   * @public
   */
  SizeConstraintSetId: string | undefined;

  /**
   * The value returned by the most recent call to GetChangeToken.
   *
   * @public
   */
  ChangeToken: string | undefined;

  /**
   * An array of `SizeConstraintSetUpdate` objects that you want to insert into or delete from a SizeConstraintSet. For more information, see the applicable data types:
   *
   * - SizeConstraintSetUpdate: Contains `Action` and `SizeConstraint`
   * - SizeConstraint: Contains `FieldToMatch`, `TextTransformation`, `ComparisonOperator`, and `Size`
   * - FieldToMatch: Contains `Data` and `Type`
   *
   * @public
   */
  Updates: SizeConstraintSetUpdate[] | undefined;
}

/**
 * @public
 */
export interface UpdateSizeConstraintSetResponse {
  /**
   * The `ChangeToken` that you used to submit the `UpdateSizeConstraintSet` request. You can also use this value to query the status of the request. For more information, see GetChangeTokenStatus.
   *
   * @public
   */
  ChangeToken?: string | undefined;
}

/**
 * > **Note:**
 * >
 * > This is **AWS WAF Classic** documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 * >
 * > **For the latest version of AWS WAF**, use the AWS WAFV2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html). With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 *
 *
 *
 * Specifies the part of a web request that you want to inspect for snippets of malicious SQL code and indicates whether you want to add the specification to a SqlInjectionMatchSet or delete it from a `SqlInjectionMatchSet`.
 *
 * @public
 */
export interface SqlInjectionMatchSetUpdate {
  /**
   * Specify `INSERT` to add a SqlInjectionMatchSetUpdate to a SqlInjectionMatchSet. Use `DELETE` to remove a `SqlInjectionMatchSetUpdate` from a `SqlInjectionMatchSet`.
   *
   * @public
   */
  Action: ChangeAction | undefined;

  /**
   * Specifies the part of a web request that you want AWS WAF to inspect for snippets of malicious SQL code and, if you want AWS WAF to inspect a header, the name of the header.
   *
   * @public
   */
  SqlInjectionMatchTuple: SqlInjectionMatchTuple | undefined;
}

/**
 * A request to update a SqlInjectionMatchSet.
 *
 * @public
 */
export interface UpdateSqlInjectionMatchSetRequest {
  /**
   * The `SqlInjectionMatchSetId` of the `SqlInjectionMatchSet` that you want to update. `SqlInjectionMatchSetId` is returned by CreateSqlInjectionMatchSet and by ListSqlInjectionMatchSets.
   *
   * @public
   */
  SqlInjectionMatchSetId: string | undefined;

  /**
   * The value returned by the most recent call to GetChangeToken.
   *
   * @public
   */
  ChangeToken: string | undefined;

  /**
   * An array of `SqlInjectionMatchSetUpdate` objects that you want to insert into or delete from a SqlInjectionMatchSet. For more information, see the applicable data types:
   *
   * - SqlInjectionMatchSetUpdate: Contains `Action` and `SqlInjectionMatchTuple`
   * - SqlInjectionMatchTuple: Contains `FieldToMatch` and `TextTransformation`
   * - FieldToMatch: Contains `Data` and `Type`
   *
   * @public
   */
  Updates: SqlInjectionMatchSetUpdate[] | undefined;
}

/**
 * The response to an UpdateSqlInjectionMatchSets request.
 *
 * @public
 */
export interface UpdateSqlInjectionMatchSetResponse {
  /**
   * The `ChangeToken` that you used to submit the `UpdateSqlInjectionMatchSet` request. You can also use this value to query the status of the request. For more information, see GetChangeTokenStatus.
   *
   * @public
   */
  ChangeToken?: string | undefined;
}

/**
 * > **Note:**
 * >
 * > This is **AWS WAF Classic** documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 * >
 * > **For the latest version of AWS WAF**, use the AWS WAFV2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html). With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 *
 *
 *
 * Specifies whether to insert a `Rule` into or delete a `Rule` from a `WebACL`.
 *
 * @public
 */
export interface WebACLUpdate {
  /**
   * Specifies whether to insert a `Rule` into or delete a `Rule` from a `WebACL`.
   *
   * @public
   */
  Action: ChangeAction | undefined;

  /**
   * The `ActivatedRule` object in an UpdateWebACL request specifies a `Rule` that you want to insert or delete, the priority of the `Rule` in the `WebACL`, and the action that you want AWS WAF to take when a web request matches the `Rule` (`ALLOW`, `BLOCK`, or `COUNT`).
   *
   * @public
   */
  ActivatedRule: ActivatedRule | undefined;
}

/**
 * @public
 */
export interface UpdateWebACLRequest {
  /**
   * The `WebACLId` of the WebACL that you want to update. `WebACLId` is returned by CreateWebACL and by ListWebACLs.
   *
   * @public
   */
  WebACLId: string | undefined;

  /**
   * The value returned by the most recent call to GetChangeToken.
   *
   * @public
   */
  ChangeToken: string | undefined;

  /**
   * An array of updates to make to the WebACL.
   *
   *
   *
   * An array of `WebACLUpdate` objects that you want to insert into or delete from a WebACL. For more information, see the applicable data types:
   *
   * - WebACLUpdate: Contains `Action` and `ActivatedRule`
   * - ActivatedRule: Contains `Action`, `OverrideAction`, `Priority`, `RuleId`, and `Type`. `ActivatedRule|OverrideAction` applies only when updating or adding a `RuleGroup` to a `WebACL`. In this case, you do not use `ActivatedRule|Action`. For all other update requests, `ActivatedRule|Action` is used instead of `ActivatedRule|OverrideAction`.
   * - WafAction: Contains `Type`
   *
   * @public
   */
  Updates?: WebACLUpdate[] | undefined;

  /**
   * A default action for the web ACL, either ALLOW or BLOCK. AWS WAF performs the default action if a request doesn't match the criteria in any of the rules in a web ACL.
   *
   * @public
   */
  DefaultAction?: WafAction | undefined;
}

/**
 * @public
 */
export interface UpdateWebACLResponse {
  /**
   * The `ChangeToken` that you used to submit the `UpdateWebACL` request. You can also use this value to query the status of the request. For more information, see GetChangeTokenStatus.
   *
   * @public
   */
  ChangeToken?: string | undefined;
}

/**
 * > **Note:**
 * >
 * > This is **AWS WAF Classic** documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 * >
 * > **For the latest version of AWS WAF**, use the AWS WAFV2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html). With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 *
 *
 *
 * Specifies the part of a web request that you want to inspect for cross-site scripting attacks and indicates whether you want to add the specification to an XssMatchSet or delete it from an `XssMatchSet`.
 *
 * @public
 */
export interface XssMatchSetUpdate {
  /**
   * Specify `INSERT` to add an XssMatchSetUpdate to an XssMatchSet. Use `DELETE` to remove an `XssMatchSetUpdate` from an `XssMatchSet`.
   *
   * @public
   */
  Action: ChangeAction | undefined;

  /**
   * Specifies the part of a web request that you want AWS WAF to inspect for cross-site scripting attacks and, if you want AWS WAF to inspect a header, the name of the header.
   *
   * @public
   */
  XssMatchTuple: XssMatchTuple | undefined;
}

/**
 * A request to update an XssMatchSet.
 *
 * @public
 */
export interface UpdateXssMatchSetRequest {
  /**
   * The `XssMatchSetId` of the `XssMatchSet` that you want to update. `XssMatchSetId` is returned by CreateXssMatchSet and by ListXssMatchSets.
   *
   * @public
   */
  XssMatchSetId: string | undefined;

  /**
   * The value returned by the most recent call to GetChangeToken.
   *
   * @public
   */
  ChangeToken: string | undefined;

  /**
   * An array of `XssMatchSetUpdate` objects that you want to insert into or delete from an XssMatchSet. For more information, see the applicable data types:
   *
   * - XssMatchSetUpdate: Contains `Action` and `XssMatchTuple`
   * - XssMatchTuple: Contains `FieldToMatch` and `TextTransformation`
   * - FieldToMatch: Contains `Data` and `Type`
   *
   * @public
   */
  Updates: XssMatchSetUpdate[] | undefined;
}

/**
 * The response to an UpdateXssMatchSets request.
 *
 * @public
 */
export interface UpdateXssMatchSetResponse {
  /**
   * The `ChangeToken` that you used to submit the `UpdateXssMatchSet` request. You can also use this value to query the status of the request. For more information, see GetChangeTokenStatus.
   *
   * @public
   */
  ChangeToken?: string | undefined;
}
