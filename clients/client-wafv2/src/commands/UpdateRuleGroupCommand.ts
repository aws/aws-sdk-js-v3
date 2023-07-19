// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { UpdateRuleGroupRequest, UpdateRuleGroupResponse } from "../models/models_0";
import { de_UpdateRuleGroupCommand, se_UpdateRuleGroupCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WAFV2ClientResolvedConfig } from "../WAFV2Client";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateRuleGroupCommand}.
 */
export interface UpdateRuleGroupCommandInput extends UpdateRuleGroupRequest {}
/**
 * @public
 *
 * The output of {@link UpdateRuleGroupCommand}.
 */
export interface UpdateRuleGroupCommandOutput extends UpdateRuleGroupResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates the specified <a>RuleGroup</a>.</p>
 *          <note>
 *             <p>This operation completely replaces the mutable specifications that you already have for the rule group with the ones that you provide to this call. </p>
 *             <p>To modify a rule group, do the following: </p>
 *             <ol>
 *                <li>
 *                   <p>Retrieve it by calling <a>GetRuleGroup</a>
 *                   </p>
 *                </li>
 *                <li>
 *                   <p>Update its settings as needed</p>
 *                </li>
 *                <li>
 *                   <p>Provide the complete rule group specification to this call</p>
 *                </li>
 *             </ol>
 *          </note>
 *          <p>When you make changes to web ACLs or web ACL components, like rules and rule groups, WAF propagates the changes everywhere that the web ACL and its components are stored and used. Your changes are applied within seconds, but there might be a brief period of inconsistency when the changes have arrived in some places and not in others. So, for example, if you change a rule action setting, the action might be the old action in one area and the new action in another area. Or if you add an IP address to an IP set used in a blocking rule, the new address might briefly be blocked in one area while still allowed in another. This temporary inconsistency can occur when you first associate a web ACL with an Amazon Web Services resource and when you change a web ACL that is already associated with a resource. Generally, any inconsistencies of this type last only a few seconds.</p>
 *          <p> A rule group defines a collection of rules to inspect and control web requests that you can use in a <a>WebACL</a>. When you create a rule group, you define an immutable capacity limit. If you update a rule group, you must stay within the capacity. This allows others to reuse the rule group with confidence in its capacity requirements. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, UpdateRuleGroupCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, UpdateRuleGroupCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * const client = new WAFV2Client(config);
 * const input = { // UpdateRuleGroupRequest
 *   Name: "STRING_VALUE", // required
 *   Scope: "CLOUDFRONT" || "REGIONAL", // required
 *   Id: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   Rules: [ // Rules
 *     { // Rule
 *       Name: "STRING_VALUE", // required
 *       Priority: Number("int"), // required
 *       Statement: { // Statement
 *         ByteMatchStatement: { // ByteMatchStatement
 *           SearchString: "BLOB_VALUE", // required
 *           FieldToMatch: { // FieldToMatch
 *             SingleHeader: { // SingleHeader
 *               Name: "STRING_VALUE", // required
 *             },
 *             SingleQueryArgument: { // SingleQueryArgument
 *               Name: "STRING_VALUE", // required
 *             },
 *             AllQueryArguments: {},
 *             UriPath: {},
 *             QueryString: {},
 *             Body: { // Body
 *               OversizeHandling: "CONTINUE" || "MATCH" || "NO_MATCH",
 *             },
 *             Method: {},
 *             JsonBody: { // JsonBody
 *               MatchPattern: { // JsonMatchPattern
 *                 All: {},
 *                 IncludedPaths: [ // JsonPointerPaths
 *                   "STRING_VALUE",
 *                 ],
 *               },
 *               MatchScope: "ALL" || "KEY" || "VALUE", // required
 *               InvalidFallbackBehavior: "MATCH" || "NO_MATCH" || "EVALUATE_AS_STRING",
 *               OversizeHandling: "CONTINUE" || "MATCH" || "NO_MATCH",
 *             },
 *             Headers: { // Headers
 *               MatchPattern: { // HeaderMatchPattern
 *                 All: {},
 *                 IncludedHeaders: [ // HeaderNames
 *                   "STRING_VALUE",
 *                 ],
 *                 ExcludedHeaders: [
 *                   "STRING_VALUE",
 *                 ],
 *               },
 *               MatchScope: "ALL" || "KEY" || "VALUE", // required
 *               OversizeHandling: "CONTINUE" || "MATCH" || "NO_MATCH", // required
 *             },
 *             Cookies: { // Cookies
 *               MatchPattern: { // CookieMatchPattern
 *                 All: {},
 *                 IncludedCookies: [ // CookieNames
 *                   "STRING_VALUE",
 *                 ],
 *                 ExcludedCookies: [
 *                   "STRING_VALUE",
 *                 ],
 *               },
 *               MatchScope: "ALL" || "KEY" || "VALUE", // required
 *               OversizeHandling: "CONTINUE" || "MATCH" || "NO_MATCH", // required
 *             },
 *             HeaderOrder: { // HeaderOrder
 *               OversizeHandling: "CONTINUE" || "MATCH" || "NO_MATCH", // required
 *             },
 *           },
 *           TextTransformations: [ // TextTransformations // required
 *             { // TextTransformation
 *               Priority: Number("int"), // required
 *               Type: "NONE" || "COMPRESS_WHITE_SPACE" || "HTML_ENTITY_DECODE" || "LOWERCASE" || "CMD_LINE" || "URL_DECODE" || "BASE64_DECODE" || "HEX_DECODE" || "MD5" || "REPLACE_COMMENTS" || "ESCAPE_SEQ_DECODE" || "SQL_HEX_DECODE" || "CSS_DECODE" || "JS_DECODE" || "NORMALIZE_PATH" || "NORMALIZE_PATH_WIN" || "REMOVE_NULLS" || "REPLACE_NULLS" || "BASE64_DECODE_EXT" || "URL_DECODE_UNI" || "UTF8_TO_UNICODE", // required
 *             },
 *           ],
 *           PositionalConstraint: "EXACTLY" || "STARTS_WITH" || "ENDS_WITH" || "CONTAINS" || "CONTAINS_WORD", // required
 *         },
 *         SqliMatchStatement: { // SqliMatchStatement
 *           FieldToMatch: {
 *             SingleHeader: {
 *               Name: "STRING_VALUE", // required
 *             },
 *             SingleQueryArgument: {
 *               Name: "STRING_VALUE", // required
 *             },
 *             AllQueryArguments: {},
 *             UriPath: {},
 *             QueryString: {},
 *             Body: {
 *               OversizeHandling: "CONTINUE" || "MATCH" || "NO_MATCH",
 *             },
 *             Method: {},
 *             JsonBody: {
 *               MatchPattern: {
 *                 All: {},
 *                 IncludedPaths: [
 *                   "STRING_VALUE",
 *                 ],
 *               },
 *               MatchScope: "ALL" || "KEY" || "VALUE", // required
 *               InvalidFallbackBehavior: "MATCH" || "NO_MATCH" || "EVALUATE_AS_STRING",
 *               OversizeHandling: "CONTINUE" || "MATCH" || "NO_MATCH",
 *             },
 *             Headers: {
 *               MatchPattern: {
 *                 All: {},
 *                 IncludedHeaders: [
 *                   "STRING_VALUE",
 *                 ],
 *                 ExcludedHeaders: [
 *                   "STRING_VALUE",
 *                 ],
 *               },
 *               MatchScope: "ALL" || "KEY" || "VALUE", // required
 *               OversizeHandling: "CONTINUE" || "MATCH" || "NO_MATCH", // required
 *             },
 *             Cookies: {
 *               MatchPattern: {
 *                 All: "<All>",
 *                 IncludedCookies: [
 *                   "STRING_VALUE",
 *                 ],
 *                 ExcludedCookies: [
 *                   "STRING_VALUE",
 *                 ],
 *               },
 *               MatchScope: "ALL" || "KEY" || "VALUE", // required
 *               OversizeHandling: "CONTINUE" || "MATCH" || "NO_MATCH", // required
 *             },
 *             HeaderOrder: {
 *               OversizeHandling: "CONTINUE" || "MATCH" || "NO_MATCH", // required
 *             },
 *           },
 *           TextTransformations: [ // required
 *             {
 *               Priority: Number("int"), // required
 *               Type: "NONE" || "COMPRESS_WHITE_SPACE" || "HTML_ENTITY_DECODE" || "LOWERCASE" || "CMD_LINE" || "URL_DECODE" || "BASE64_DECODE" || "HEX_DECODE" || "MD5" || "REPLACE_COMMENTS" || "ESCAPE_SEQ_DECODE" || "SQL_HEX_DECODE" || "CSS_DECODE" || "JS_DECODE" || "NORMALIZE_PATH" || "NORMALIZE_PATH_WIN" || "REMOVE_NULLS" || "REPLACE_NULLS" || "BASE64_DECODE_EXT" || "URL_DECODE_UNI" || "UTF8_TO_UNICODE", // required
 *             },
 *           ],
 *           SensitivityLevel: "LOW" || "HIGH",
 *         },
 *         XssMatchStatement: { // XssMatchStatement
 *           FieldToMatch: {
 *             SingleHeader: {
 *               Name: "STRING_VALUE", // required
 *             },
 *             SingleQueryArgument: {
 *               Name: "STRING_VALUE", // required
 *             },
 *             AllQueryArguments: {},
 *             UriPath: {},
 *             QueryString: {},
 *             Body: {
 *               OversizeHandling: "CONTINUE" || "MATCH" || "NO_MATCH",
 *             },
 *             Method: {},
 *             JsonBody: {
 *               MatchPattern: {
 *                 All: "<All>",
 *                 IncludedPaths: [
 *                   "STRING_VALUE",
 *                 ],
 *               },
 *               MatchScope: "ALL" || "KEY" || "VALUE", // required
 *               InvalidFallbackBehavior: "MATCH" || "NO_MATCH" || "EVALUATE_AS_STRING",
 *               OversizeHandling: "CONTINUE" || "MATCH" || "NO_MATCH",
 *             },
 *             Headers: {
 *               MatchPattern: {
 *                 All: "<All>",
 *                 IncludedHeaders: [
 *                   "STRING_VALUE",
 *                 ],
 *                 ExcludedHeaders: "<HeaderNames>",
 *               },
 *               MatchScope: "ALL" || "KEY" || "VALUE", // required
 *               OversizeHandling: "CONTINUE" || "MATCH" || "NO_MATCH", // required
 *             },
 *             Cookies: {
 *               MatchPattern: {
 *                 All: "<All>",
 *                 IncludedCookies: [
 *                   "STRING_VALUE",
 *                 ],
 *                 ExcludedCookies: "<CookieNames>",
 *               },
 *               MatchScope: "ALL" || "KEY" || "VALUE", // required
 *               OversizeHandling: "CONTINUE" || "MATCH" || "NO_MATCH", // required
 *             },
 *             HeaderOrder: {
 *               OversizeHandling: "CONTINUE" || "MATCH" || "NO_MATCH", // required
 *             },
 *           },
 *           TextTransformations: [ // required
 *             {
 *               Priority: Number("int"), // required
 *               Type: "NONE" || "COMPRESS_WHITE_SPACE" || "HTML_ENTITY_DECODE" || "LOWERCASE" || "CMD_LINE" || "URL_DECODE" || "BASE64_DECODE" || "HEX_DECODE" || "MD5" || "REPLACE_COMMENTS" || "ESCAPE_SEQ_DECODE" || "SQL_HEX_DECODE" || "CSS_DECODE" || "JS_DECODE" || "NORMALIZE_PATH" || "NORMALIZE_PATH_WIN" || "REMOVE_NULLS" || "REPLACE_NULLS" || "BASE64_DECODE_EXT" || "URL_DECODE_UNI" || "UTF8_TO_UNICODE", // required
 *             },
 *           ],
 *         },
 *         SizeConstraintStatement: { // SizeConstraintStatement
 *           FieldToMatch: {
 *             SingleHeader: {
 *               Name: "STRING_VALUE", // required
 *             },
 *             SingleQueryArgument: {
 *               Name: "STRING_VALUE", // required
 *             },
 *             AllQueryArguments: {},
 *             UriPath: {},
 *             QueryString: {},
 *             Body: {
 *               OversizeHandling: "CONTINUE" || "MATCH" || "NO_MATCH",
 *             },
 *             Method: {},
 *             JsonBody: {
 *               MatchPattern: {
 *                 All: "<All>",
 *                 IncludedPaths: [
 *                   "STRING_VALUE",
 *                 ],
 *               },
 *               MatchScope: "ALL" || "KEY" || "VALUE", // required
 *               InvalidFallbackBehavior: "MATCH" || "NO_MATCH" || "EVALUATE_AS_STRING",
 *               OversizeHandling: "CONTINUE" || "MATCH" || "NO_MATCH",
 *             },
 *             Headers: {
 *               MatchPattern: {
 *                 All: "<All>",
 *                 IncludedHeaders: "<HeaderNames>",
 *                 ExcludedHeaders: "<HeaderNames>",
 *               },
 *               MatchScope: "ALL" || "KEY" || "VALUE", // required
 *               OversizeHandling: "CONTINUE" || "MATCH" || "NO_MATCH", // required
 *             },
 *             Cookies: {
 *               MatchPattern: {
 *                 All: "<All>",
 *                 IncludedCookies: "<CookieNames>",
 *                 ExcludedCookies: "<CookieNames>",
 *               },
 *               MatchScope: "ALL" || "KEY" || "VALUE", // required
 *               OversizeHandling: "CONTINUE" || "MATCH" || "NO_MATCH", // required
 *             },
 *             HeaderOrder: {
 *               OversizeHandling: "CONTINUE" || "MATCH" || "NO_MATCH", // required
 *             },
 *           },
 *           ComparisonOperator: "EQ" || "NE" || "LE" || "LT" || "GE" || "GT", // required
 *           Size: Number("long"), // required
 *           TextTransformations: [ // required
 *             {
 *               Priority: Number("int"), // required
 *               Type: "NONE" || "COMPRESS_WHITE_SPACE" || "HTML_ENTITY_DECODE" || "LOWERCASE" || "CMD_LINE" || "URL_DECODE" || "BASE64_DECODE" || "HEX_DECODE" || "MD5" || "REPLACE_COMMENTS" || "ESCAPE_SEQ_DECODE" || "SQL_HEX_DECODE" || "CSS_DECODE" || "JS_DECODE" || "NORMALIZE_PATH" || "NORMALIZE_PATH_WIN" || "REMOVE_NULLS" || "REPLACE_NULLS" || "BASE64_DECODE_EXT" || "URL_DECODE_UNI" || "UTF8_TO_UNICODE", // required
 *             },
 *           ],
 *         },
 *         GeoMatchStatement: { // GeoMatchStatement
 *           CountryCodes: [ // CountryCodes
 *             "AF" || "AX" || "AL" || "DZ" || "AS" || "AD" || "AO" || "AI" || "AQ" || "AG" || "AR" || "AM" || "AW" || "AU" || "AT" || "AZ" || "BS" || "BH" || "BD" || "BB" || "BY" || "BE" || "BZ" || "BJ" || "BM" || "BT" || "BO" || "BQ" || "BA" || "BW" || "BV" || "BR" || "IO" || "BN" || "BG" || "BF" || "BI" || "KH" || "CM" || "CA" || "CV" || "KY" || "CF" || "TD" || "CL" || "CN" || "CX" || "CC" || "CO" || "KM" || "CG" || "CD" || "CK" || "CR" || "CI" || "HR" || "CU" || "CW" || "CY" || "CZ" || "DK" || "DJ" || "DM" || "DO" || "EC" || "EG" || "SV" || "GQ" || "ER" || "EE" || "ET" || "FK" || "FO" || "FJ" || "FI" || "FR" || "GF" || "PF" || "TF" || "GA" || "GM" || "GE" || "DE" || "GH" || "GI" || "GR" || "GL" || "GD" || "GP" || "GU" || "GT" || "GG" || "GN" || "GW" || "GY" || "HT" || "HM" || "VA" || "HN" || "HK" || "HU" || "IS" || "IN" || "ID" || "IR" || "IQ" || "IE" || "IM" || "IL" || "IT" || "JM" || "JP" || "JE" || "JO" || "KZ" || "KE" || "KI" || "KP" || "KR" || "KW" || "KG" || "LA" || "LV" || "LB" || "LS" || "LR" || "LY" || "LI" || "LT" || "LU" || "MO" || "MK" || "MG" || "MW" || "MY" || "MV" || "ML" || "MT" || "MH" || "MQ" || "MR" || "MU" || "YT" || "MX" || "FM" || "MD" || "MC" || "MN" || "ME" || "MS" || "MA" || "MZ" || "MM" || "NA" || "NR" || "NP" || "NL" || "NC" || "NZ" || "NI" || "NE" || "NG" || "NU" || "NF" || "MP" || "NO" || "OM" || "PK" || "PW" || "PS" || "PA" || "PG" || "PY" || "PE" || "PH" || "PN" || "PL" || "PT" || "PR" || "QA" || "RE" || "RO" || "RU" || "RW" || "BL" || "SH" || "KN" || "LC" || "MF" || "PM" || "VC" || "WS" || "SM" || "ST" || "SA" || "SN" || "RS" || "SC" || "SL" || "SG" || "SX" || "SK" || "SI" || "SB" || "SO" || "ZA" || "GS" || "SS" || "ES" || "LK" || "SD" || "SR" || "SJ" || "SZ" || "SE" || "CH" || "SY" || "TW" || "TJ" || "TZ" || "TH" || "TL" || "TG" || "TK" || "TO" || "TT" || "TN" || "TR" || "TM" || "TC" || "TV" || "UG" || "UA" || "AE" || "GB" || "US" || "UM" || "UY" || "UZ" || "VU" || "VE" || "VN" || "VG" || "VI" || "WF" || "EH" || "YE" || "ZM" || "ZW" || "XK",
 *           ],
 *           ForwardedIPConfig: { // ForwardedIPConfig
 *             HeaderName: "STRING_VALUE", // required
 *             FallbackBehavior: "MATCH" || "NO_MATCH", // required
 *           },
 *         },
 *         RuleGroupReferenceStatement: { // RuleGroupReferenceStatement
 *           ARN: "STRING_VALUE", // required
 *           ExcludedRules: [ // ExcludedRules
 *             { // ExcludedRule
 *               Name: "STRING_VALUE", // required
 *             },
 *           ],
 *           RuleActionOverrides: [ // RuleActionOverrides
 *             { // RuleActionOverride
 *               Name: "STRING_VALUE", // required
 *               ActionToUse: { // RuleAction
 *                 Block: { // BlockAction
 *                   CustomResponse: { // CustomResponse
 *                     ResponseCode: Number("int"), // required
 *                     CustomResponseBodyKey: "STRING_VALUE",
 *                     ResponseHeaders: [ // CustomHTTPHeaders
 *                       { // CustomHTTPHeader
 *                         Name: "STRING_VALUE", // required
 *                         Value: "STRING_VALUE", // required
 *                       },
 *                     ],
 *                   },
 *                 },
 *                 Allow: { // AllowAction
 *                   CustomRequestHandling: { // CustomRequestHandling
 *                     InsertHeaders: [ // required
 *                       {
 *                         Name: "STRING_VALUE", // required
 *                         Value: "STRING_VALUE", // required
 *                       },
 *                     ],
 *                   },
 *                 },
 *                 Count: { // CountAction
 *                   CustomRequestHandling: {
 *                     InsertHeaders: [ // required
 *                       {
 *                         Name: "STRING_VALUE", // required
 *                         Value: "STRING_VALUE", // required
 *                       },
 *                     ],
 *                   },
 *                 },
 *                 Captcha: { // CaptchaAction
 *                   CustomRequestHandling: {
 *                     InsertHeaders: [ // required
 *                       {
 *                         Name: "STRING_VALUE", // required
 *                         Value: "STRING_VALUE", // required
 *                       },
 *                     ],
 *                   },
 *                 },
 *                 Challenge: { // ChallengeAction
 *                   CustomRequestHandling: {
 *                     InsertHeaders: [ // required
 *                       {
 *                         Name: "STRING_VALUE", // required
 *                         Value: "STRING_VALUE", // required
 *                       },
 *                     ],
 *                   },
 *                 },
 *               },
 *             },
 *           ],
 *         },
 *         IPSetReferenceStatement: { // IPSetReferenceStatement
 *           ARN: "STRING_VALUE", // required
 *           IPSetForwardedIPConfig: { // IPSetForwardedIPConfig
 *             HeaderName: "STRING_VALUE", // required
 *             FallbackBehavior: "MATCH" || "NO_MATCH", // required
 *             Position: "FIRST" || "LAST" || "ANY", // required
 *           },
 *         },
 *         RegexPatternSetReferenceStatement: { // RegexPatternSetReferenceStatement
 *           ARN: "STRING_VALUE", // required
 *           FieldToMatch: {
 *             SingleHeader: {
 *               Name: "STRING_VALUE", // required
 *             },
 *             SingleQueryArgument: {
 *               Name: "STRING_VALUE", // required
 *             },
 *             AllQueryArguments: {},
 *             UriPath: {},
 *             QueryString: {},
 *             Body: {
 *               OversizeHandling: "CONTINUE" || "MATCH" || "NO_MATCH",
 *             },
 *             Method: {},
 *             JsonBody: {
 *               MatchPattern: {
 *                 All: "<All>",
 *                 IncludedPaths: [
 *                   "STRING_VALUE",
 *                 ],
 *               },
 *               MatchScope: "ALL" || "KEY" || "VALUE", // required
 *               InvalidFallbackBehavior: "MATCH" || "NO_MATCH" || "EVALUATE_AS_STRING",
 *               OversizeHandling: "CONTINUE" || "MATCH" || "NO_MATCH",
 *             },
 *             Headers: {
 *               MatchPattern: {
 *                 All: "<All>",
 *                 IncludedHeaders: "<HeaderNames>",
 *                 ExcludedHeaders: "<HeaderNames>",
 *               },
 *               MatchScope: "ALL" || "KEY" || "VALUE", // required
 *               OversizeHandling: "CONTINUE" || "MATCH" || "NO_MATCH", // required
 *             },
 *             Cookies: {
 *               MatchPattern: {
 *                 All: "<All>",
 *                 IncludedCookies: "<CookieNames>",
 *                 ExcludedCookies: "<CookieNames>",
 *               },
 *               MatchScope: "ALL" || "KEY" || "VALUE", // required
 *               OversizeHandling: "CONTINUE" || "MATCH" || "NO_MATCH", // required
 *             },
 *             HeaderOrder: {
 *               OversizeHandling: "CONTINUE" || "MATCH" || "NO_MATCH", // required
 *             },
 *           },
 *           TextTransformations: [ // required
 *             {
 *               Priority: Number("int"), // required
 *               Type: "NONE" || "COMPRESS_WHITE_SPACE" || "HTML_ENTITY_DECODE" || "LOWERCASE" || "CMD_LINE" || "URL_DECODE" || "BASE64_DECODE" || "HEX_DECODE" || "MD5" || "REPLACE_COMMENTS" || "ESCAPE_SEQ_DECODE" || "SQL_HEX_DECODE" || "CSS_DECODE" || "JS_DECODE" || "NORMALIZE_PATH" || "NORMALIZE_PATH_WIN" || "REMOVE_NULLS" || "REPLACE_NULLS" || "BASE64_DECODE_EXT" || "URL_DECODE_UNI" || "UTF8_TO_UNICODE", // required
 *             },
 *           ],
 *         },
 *         RateBasedStatement: { // RateBasedStatement
 *           Limit: Number("long"), // required
 *           AggregateKeyType: "IP" || "FORWARDED_IP" || "CUSTOM_KEYS" || "CONSTANT", // required
 *           ScopeDownStatement: {
 *             ByteMatchStatement: {
 *               SearchString: "BLOB_VALUE", // required
 *               FieldToMatch: "<FieldToMatch>", // required
 *               TextTransformations: "<TextTransformations>", // required
 *               PositionalConstraint: "EXACTLY" || "STARTS_WITH" || "ENDS_WITH" || "CONTAINS" || "CONTAINS_WORD", // required
 *             },
 *             SqliMatchStatement: {
 *               FieldToMatch: "<FieldToMatch>", // required
 *               TextTransformations: "<TextTransformations>", // required
 *               SensitivityLevel: "LOW" || "HIGH",
 *             },
 *             XssMatchStatement: {
 *               FieldToMatch: "<FieldToMatch>", // required
 *               TextTransformations: "<TextTransformations>", // required
 *             },
 *             SizeConstraintStatement: {
 *               FieldToMatch: "<FieldToMatch>", // required
 *               ComparisonOperator: "EQ" || "NE" || "LE" || "LT" || "GE" || "GT", // required
 *               Size: Number("long"), // required
 *               TextTransformations: "<TextTransformations>", // required
 *             },
 *             GeoMatchStatement: {
 *               CountryCodes: [
 *                 "AF" || "AX" || "AL" || "DZ" || "AS" || "AD" || "AO" || "AI" || "AQ" || "AG" || "AR" || "AM" || "AW" || "AU" || "AT" || "AZ" || "BS" || "BH" || "BD" || "BB" || "BY" || "BE" || "BZ" || "BJ" || "BM" || "BT" || "BO" || "BQ" || "BA" || "BW" || "BV" || "BR" || "IO" || "BN" || "BG" || "BF" || "BI" || "KH" || "CM" || "CA" || "CV" || "KY" || "CF" || "TD" || "CL" || "CN" || "CX" || "CC" || "CO" || "KM" || "CG" || "CD" || "CK" || "CR" || "CI" || "HR" || "CU" || "CW" || "CY" || "CZ" || "DK" || "DJ" || "DM" || "DO" || "EC" || "EG" || "SV" || "GQ" || "ER" || "EE" || "ET" || "FK" || "FO" || "FJ" || "FI" || "FR" || "GF" || "PF" || "TF" || "GA" || "GM" || "GE" || "DE" || "GH" || "GI" || "GR" || "GL" || "GD" || "GP" || "GU" || "GT" || "GG" || "GN" || "GW" || "GY" || "HT" || "HM" || "VA" || "HN" || "HK" || "HU" || "IS" || "IN" || "ID" || "IR" || "IQ" || "IE" || "IM" || "IL" || "IT" || "JM" || "JP" || "JE" || "JO" || "KZ" || "KE" || "KI" || "KP" || "KR" || "KW" || "KG" || "LA" || "LV" || "LB" || "LS" || "LR" || "LY" || "LI" || "LT" || "LU" || "MO" || "MK" || "MG" || "MW" || "MY" || "MV" || "ML" || "MT" || "MH" || "MQ" || "MR" || "MU" || "YT" || "MX" || "FM" || "MD" || "MC" || "MN" || "ME" || "MS" || "MA" || "MZ" || "MM" || "NA" || "NR" || "NP" || "NL" || "NC" || "NZ" || "NI" || "NE" || "NG" || "NU" || "NF" || "MP" || "NO" || "OM" || "PK" || "PW" || "PS" || "PA" || "PG" || "PY" || "PE" || "PH" || "PN" || "PL" || "PT" || "PR" || "QA" || "RE" || "RO" || "RU" || "RW" || "BL" || "SH" || "KN" || "LC" || "MF" || "PM" || "VC" || "WS" || "SM" || "ST" || "SA" || "SN" || "RS" || "SC" || "SL" || "SG" || "SX" || "SK" || "SI" || "SB" || "SO" || "ZA" || "GS" || "SS" || "ES" || "LK" || "SD" || "SR" || "SJ" || "SZ" || "SE" || "CH" || "SY" || "TW" || "TJ" || "TZ" || "TH" || "TL" || "TG" || "TK" || "TO" || "TT" || "TN" || "TR" || "TM" || "TC" || "TV" || "UG" || "UA" || "AE" || "GB" || "US" || "UM" || "UY" || "UZ" || "VU" || "VE" || "VN" || "VG" || "VI" || "WF" || "EH" || "YE" || "ZM" || "ZW" || "XK",
 *               ],
 *               ForwardedIPConfig: {
 *                 HeaderName: "STRING_VALUE", // required
 *                 FallbackBehavior: "MATCH" || "NO_MATCH", // required
 *               },
 *             },
 *             RuleGroupReferenceStatement: {
 *               ARN: "STRING_VALUE", // required
 *               ExcludedRules: [
 *                 {
 *                   Name: "STRING_VALUE", // required
 *                 },
 *               ],
 *               RuleActionOverrides: [
 *                 {
 *                   Name: "STRING_VALUE", // required
 *                   ActionToUse: {
 *                     Block: {
 *                       CustomResponse: {
 *                         ResponseCode: Number("int"), // required
 *                         CustomResponseBodyKey: "STRING_VALUE",
 *                         ResponseHeaders: "<CustomHTTPHeaders>",
 *                       },
 *                     },
 *                     Allow: {
 *                       CustomRequestHandling: {
 *                         InsertHeaders: "<CustomHTTPHeaders>", // required
 *                       },
 *                     },
 *                     Count: {
 *                       CustomRequestHandling: "<CustomRequestHandling>",
 *                     },
 *                     Captcha: {
 *                       CustomRequestHandling: "<CustomRequestHandling>",
 *                     },
 *                     Challenge: {
 *                       CustomRequestHandling: "<CustomRequestHandling>",
 *                     },
 *                   },
 *                 },
 *               ],
 *             },
 *             IPSetReferenceStatement: {
 *               ARN: "STRING_VALUE", // required
 *               IPSetForwardedIPConfig: {
 *                 HeaderName: "STRING_VALUE", // required
 *                 FallbackBehavior: "MATCH" || "NO_MATCH", // required
 *                 Position: "FIRST" || "LAST" || "ANY", // required
 *               },
 *             },
 *             RegexPatternSetReferenceStatement: {
 *               ARN: "STRING_VALUE", // required
 *               FieldToMatch: "<FieldToMatch>", // required
 *               TextTransformations: "<TextTransformations>", // required
 *             },
 *             RateBasedStatement: {
 *               Limit: Number("long"), // required
 *               AggregateKeyType: "IP" || "FORWARDED_IP" || "CUSTOM_KEYS" || "CONSTANT", // required
 *               ScopeDownStatement: "<Statement>",
 *               ForwardedIPConfig: {
 *                 HeaderName: "STRING_VALUE", // required
 *                 FallbackBehavior: "MATCH" || "NO_MATCH", // required
 *               },
 *               CustomKeys: [ // RateBasedStatementCustomKeys
 *                 { // RateBasedStatementCustomKey
 *                   Header: { // RateLimitHeader
 *                     Name: "STRING_VALUE", // required
 *                     TextTransformations: "<TextTransformations>", // required
 *                   },
 *                   Cookie: { // RateLimitCookie
 *                     Name: "STRING_VALUE", // required
 *                     TextTransformations: "<TextTransformations>", // required
 *                   },
 *                   QueryArgument: { // RateLimitQueryArgument
 *                     Name: "STRING_VALUE", // required
 *                     TextTransformations: "<TextTransformations>", // required
 *                   },
 *                   QueryString: { // RateLimitQueryString
 *                     TextTransformations: "<TextTransformations>", // required
 *                   },
 *                   HTTPMethod: {},
 *                   ForwardedIP: {},
 *                   IP: {},
 *                   LabelNamespace: { // RateLimitLabelNamespace
 *                     Namespace: "STRING_VALUE", // required
 *                   },
 *                   UriPath: { // RateLimitUriPath
 *                     TextTransformations: "<TextTransformations>", // required
 *                   },
 *                 },
 *               ],
 *             },
 *             AndStatement: { // AndStatement
 *               Statements: [ // Statements // required
 *                 "<Statement>",
 *               ],
 *             },
 *             OrStatement: { // OrStatement
 *               Statements: [ // required
 *                 "<Statement>",
 *               ],
 *             },
 *             NotStatement: { // NotStatement
 *               Statement: "<Statement>", // required
 *             },
 *             ManagedRuleGroupStatement: { // ManagedRuleGroupStatement
 *               VendorName: "STRING_VALUE", // required
 *               Name: "STRING_VALUE", // required
 *               Version: "STRING_VALUE",
 *               ExcludedRules: [
 *                 {
 *                   Name: "STRING_VALUE", // required
 *                 },
 *               ],
 *               ScopeDownStatement: "<Statement>",
 *               ManagedRuleGroupConfigs: [ // ManagedRuleGroupConfigs
 *                 { // ManagedRuleGroupConfig
 *                   LoginPath: "STRING_VALUE",
 *                   PayloadType: "JSON" || "FORM_ENCODED",
 *                   UsernameField: { // UsernameField
 *                     Identifier: "STRING_VALUE", // required
 *                   },
 *                   PasswordField: { // PasswordField
 *                     Identifier: "STRING_VALUE", // required
 *                   },
 *                   AWSManagedRulesBotControlRuleSet: { // AWSManagedRulesBotControlRuleSet
 *                     InspectionLevel: "COMMON" || "TARGETED", // required
 *                   },
 *                   AWSManagedRulesATPRuleSet: { // AWSManagedRulesATPRuleSet
 *                     LoginPath: "STRING_VALUE", // required
 *                     RequestInspection: { // RequestInspection
 *                       PayloadType: "JSON" || "FORM_ENCODED", // required
 *                       UsernameField: {
 *                         Identifier: "STRING_VALUE", // required
 *                       },
 *                       PasswordField: {
 *                         Identifier: "STRING_VALUE", // required
 *                       },
 *                     },
 *                     ResponseInspection: { // ResponseInspection
 *                       StatusCode: { // ResponseInspectionStatusCode
 *                         SuccessCodes: [ // ResponseInspectionStatusCodeSuccessCodes // required
 *                           Number("int"),
 *                         ],
 *                         FailureCodes: [ // ResponseInspectionStatusCodeFailureCodes // required
 *                           Number("int"),
 *                         ],
 *                       },
 *                       Header: { // ResponseInspectionHeader
 *                         Name: "STRING_VALUE", // required
 *                         SuccessValues: [ // ResponseInspectionHeaderSuccessValues // required
 *                           "STRING_VALUE",
 *                         ],
 *                         FailureValues: [ // ResponseInspectionHeaderFailureValues // required
 *                           "STRING_VALUE",
 *                         ],
 *                       },
 *                       BodyContains: { // ResponseInspectionBodyContains
 *                         SuccessStrings: [ // ResponseInspectionBodyContainsSuccessStrings // required
 *                           "STRING_VALUE",
 *                         ],
 *                         FailureStrings: [ // ResponseInspectionBodyContainsFailureStrings // required
 *                           "STRING_VALUE",
 *                         ],
 *                       },
 *                       Json: { // ResponseInspectionJson
 *                         Identifier: "STRING_VALUE", // required
 *                         SuccessValues: [ // ResponseInspectionJsonSuccessValues // required
 *                           "STRING_VALUE",
 *                         ],
 *                         FailureValues: [ // ResponseInspectionJsonFailureValues // required
 *                           "STRING_VALUE",
 *                         ],
 *                       },
 *                     },
 *                     EnableRegexInPath: true || false,
 *                   },
 *                   AWSManagedRulesACFPRuleSet: { // AWSManagedRulesACFPRuleSet
 *                     CreationPath: "STRING_VALUE", // required
 *                     RegistrationPagePath: "STRING_VALUE", // required
 *                     RequestInspection: { // RequestInspectionACFP
 *                       PayloadType: "JSON" || "FORM_ENCODED", // required
 *                       UsernameField: {
 *                         Identifier: "STRING_VALUE", // required
 *                       },
 *                       PasswordField: {
 *                         Identifier: "STRING_VALUE", // required
 *                       },
 *                       EmailField: { // EmailField
 *                         Identifier: "STRING_VALUE", // required
 *                       },
 *                       PhoneNumberFields: [ // PhoneNumberFields
 *                         { // PhoneNumberField
 *                           Identifier: "STRING_VALUE", // required
 *                         },
 *                       ],
 *                       AddressFields: [ // AddressFields
 *                         { // AddressField
 *                           Identifier: "STRING_VALUE", // required
 *                         },
 *                       ],
 *                     },
 *                     ResponseInspection: {
 *                       StatusCode: {
 *                         SuccessCodes: [ // required
 *                           Number("int"),
 *                         ],
 *                         FailureCodes: [ // required
 *                           Number("int"),
 *                         ],
 *                       },
 *                       Header: {
 *                         Name: "STRING_VALUE", // required
 *                         SuccessValues: [ // required
 *                           "STRING_VALUE",
 *                         ],
 *                         FailureValues: [ // required
 *                           "STRING_VALUE",
 *                         ],
 *                       },
 *                       BodyContains: {
 *                         SuccessStrings: [ // required
 *                           "STRING_VALUE",
 *                         ],
 *                         FailureStrings: [ // required
 *                           "STRING_VALUE",
 *                         ],
 *                       },
 *                       Json: {
 *                         Identifier: "STRING_VALUE", // required
 *                         SuccessValues: [ // required
 *                           "STRING_VALUE",
 *                         ],
 *                         FailureValues: [ // required
 *                           "STRING_VALUE",
 *                         ],
 *                       },
 *                     },
 *                     EnableRegexInPath: true || false,
 *                   },
 *                 },
 *               ],
 *               RuleActionOverrides: [
 *                 {
 *                   Name: "STRING_VALUE", // required
 *                   ActionToUse: {
 *                     Block: {
 *                       CustomResponse: {
 *                         ResponseCode: Number("int"), // required
 *                         CustomResponseBodyKey: "STRING_VALUE",
 *                         ResponseHeaders: "<CustomHTTPHeaders>",
 *                       },
 *                     },
 *                     Allow: {
 *                       CustomRequestHandling: "<CustomRequestHandling>",
 *                     },
 *                     Count: {
 *                       CustomRequestHandling: "<CustomRequestHandling>",
 *                     },
 *                     Captcha: {
 *                       CustomRequestHandling: "<CustomRequestHandling>",
 *                     },
 *                     Challenge: {
 *                       CustomRequestHandling: "<CustomRequestHandling>",
 *                     },
 *                   },
 *                 },
 *               ],
 *             },
 *             LabelMatchStatement: { // LabelMatchStatement
 *               Scope: "LABEL" || "NAMESPACE", // required
 *               Key: "STRING_VALUE", // required
 *             },
 *             RegexMatchStatement: { // RegexMatchStatement
 *               RegexString: "STRING_VALUE", // required
 *               FieldToMatch: "<FieldToMatch>", // required
 *               TextTransformations: "<TextTransformations>", // required
 *             },
 *           },
 *           ForwardedIPConfig: {
 *             HeaderName: "STRING_VALUE", // required
 *             FallbackBehavior: "MATCH" || "NO_MATCH", // required
 *           },
 *           CustomKeys: [
 *             {
 *               Header: {
 *                 Name: "STRING_VALUE", // required
 *                 TextTransformations: "<TextTransformations>", // required
 *               },
 *               Cookie: {
 *                 Name: "STRING_VALUE", // required
 *                 TextTransformations: "<TextTransformations>", // required
 *               },
 *               QueryArgument: {
 *                 Name: "STRING_VALUE", // required
 *                 TextTransformations: "<TextTransformations>", // required
 *               },
 *               QueryString: {
 *                 TextTransformations: "<TextTransformations>", // required
 *               },
 *               HTTPMethod: {},
 *               ForwardedIP: {},
 *               IP: {},
 *               LabelNamespace: {
 *                 Namespace: "STRING_VALUE", // required
 *               },
 *               UriPath: {
 *                 TextTransformations: "<TextTransformations>", // required
 *               },
 *             },
 *           ],
 *         },
 *         AndStatement: {
 *           Statements: [ // required
 *             "<Statement>",
 *           ],
 *         },
 *         OrStatement: {
 *           Statements: [ // required
 *             "<Statement>",
 *           ],
 *         },
 *         NotStatement: {
 *           Statement: "<Statement>", // required
 *         },
 *         ManagedRuleGroupStatement: {
 *           VendorName: "STRING_VALUE", // required
 *           Name: "STRING_VALUE", // required
 *           Version: "STRING_VALUE",
 *           ExcludedRules: [
 *             {
 *               Name: "STRING_VALUE", // required
 *             },
 *           ],
 *           ScopeDownStatement: "<Statement>",
 *           ManagedRuleGroupConfigs: [
 *             {
 *               LoginPath: "STRING_VALUE",
 *               PayloadType: "JSON" || "FORM_ENCODED",
 *               UsernameField: "<UsernameField>",
 *               PasswordField: "<PasswordField>",
 *               AWSManagedRulesBotControlRuleSet: {
 *                 InspectionLevel: "COMMON" || "TARGETED", // required
 *               },
 *               AWSManagedRulesATPRuleSet: {
 *                 LoginPath: "STRING_VALUE", // required
 *                 RequestInspection: {
 *                   PayloadType: "JSON" || "FORM_ENCODED", // required
 *                   UsernameField: "<UsernameField>", // required
 *                   PasswordField: "<PasswordField>", // required
 *                 },
 *                 ResponseInspection: {
 *                   StatusCode: {
 *                     SuccessCodes: [ // required
 *                       Number("int"),
 *                     ],
 *                     FailureCodes: [ // required
 *                       Number("int"),
 *                     ],
 *                   },
 *                   Header: {
 *                     Name: "STRING_VALUE", // required
 *                     SuccessValues: [ // required
 *                       "STRING_VALUE",
 *                     ],
 *                     FailureValues: [ // required
 *                       "STRING_VALUE",
 *                     ],
 *                   },
 *                   BodyContains: {
 *                     SuccessStrings: [ // required
 *                       "STRING_VALUE",
 *                     ],
 *                     FailureStrings: [ // required
 *                       "STRING_VALUE",
 *                     ],
 *                   },
 *                   Json: {
 *                     Identifier: "STRING_VALUE", // required
 *                     SuccessValues: [ // required
 *                       "STRING_VALUE",
 *                     ],
 *                     FailureValues: [ // required
 *                       "STRING_VALUE",
 *                     ],
 *                   },
 *                 },
 *                 EnableRegexInPath: true || false,
 *               },
 *               AWSManagedRulesACFPRuleSet: {
 *                 CreationPath: "STRING_VALUE", // required
 *                 RegistrationPagePath: "STRING_VALUE", // required
 *                 RequestInspection: {
 *                   PayloadType: "JSON" || "FORM_ENCODED", // required
 *                   UsernameField: "<UsernameField>",
 *                   PasswordField: "<PasswordField>",
 *                   EmailField: {
 *                     Identifier: "STRING_VALUE", // required
 *                   },
 *                   PhoneNumberFields: [
 *                     {
 *                       Identifier: "STRING_VALUE", // required
 *                     },
 *                   ],
 *                   AddressFields: [
 *                     {
 *                       Identifier: "STRING_VALUE", // required
 *                     },
 *                   ],
 *                 },
 *                 ResponseInspection: {
 *                   StatusCode: {
 *                     SuccessCodes: [ // required
 *                       Number("int"),
 *                     ],
 *                     FailureCodes: [ // required
 *                       Number("int"),
 *                     ],
 *                   },
 *                   Header: {
 *                     Name: "STRING_VALUE", // required
 *                     SuccessValues: [ // required
 *                       "STRING_VALUE",
 *                     ],
 *                     FailureValues: [ // required
 *                       "STRING_VALUE",
 *                     ],
 *                   },
 *                   BodyContains: {
 *                     SuccessStrings: [ // required
 *                       "STRING_VALUE",
 *                     ],
 *                     FailureStrings: [ // required
 *                       "STRING_VALUE",
 *                     ],
 *                   },
 *                   Json: {
 *                     Identifier: "STRING_VALUE", // required
 *                     SuccessValues: [ // required
 *                       "STRING_VALUE",
 *                     ],
 *                     FailureValues: [ // required
 *                       "STRING_VALUE",
 *                     ],
 *                   },
 *                 },
 *                 EnableRegexInPath: true || false,
 *               },
 *             },
 *           ],
 *           RuleActionOverrides: [
 *             {
 *               Name: "STRING_VALUE", // required
 *               ActionToUse: {
 *                 Block: {
 *                   CustomResponse: {
 *                     ResponseCode: Number("int"), // required
 *                     CustomResponseBodyKey: "STRING_VALUE",
 *                     ResponseHeaders: "<CustomHTTPHeaders>",
 *                   },
 *                 },
 *                 Allow: {
 *                   CustomRequestHandling: "<CustomRequestHandling>",
 *                 },
 *                 Count: {
 *                   CustomRequestHandling: "<CustomRequestHandling>",
 *                 },
 *                 Captcha: {
 *                   CustomRequestHandling: "<CustomRequestHandling>",
 *                 },
 *                 Challenge: {
 *                   CustomRequestHandling: "<CustomRequestHandling>",
 *                 },
 *               },
 *             },
 *           ],
 *         },
 *         LabelMatchStatement: {
 *           Scope: "LABEL" || "NAMESPACE", // required
 *           Key: "STRING_VALUE", // required
 *         },
 *         RegexMatchStatement: {
 *           RegexString: "STRING_VALUE", // required
 *           FieldToMatch: "<FieldToMatch>", // required
 *           TextTransformations: "<TextTransformations>", // required
 *         },
 *       },
 *       Action: "<RuleAction>",
 *       OverrideAction: { // OverrideAction
 *         Count: "<CountAction>",
 *         None: {},
 *       },
 *       RuleLabels: [ // Labels
 *         { // Label
 *           Name: "STRING_VALUE", // required
 *         },
 *       ],
 *       VisibilityConfig: { // VisibilityConfig
 *         SampledRequestsEnabled: true || false, // required
 *         CloudWatchMetricsEnabled: true || false, // required
 *         MetricName: "STRING_VALUE", // required
 *       },
 *       CaptchaConfig: { // CaptchaConfig
 *         ImmunityTimeProperty: { // ImmunityTimeProperty
 *           ImmunityTime: Number("long"), // required
 *         },
 *       },
 *       ChallengeConfig: { // ChallengeConfig
 *         ImmunityTimeProperty: {
 *           ImmunityTime: Number("long"), // required
 *         },
 *       },
 *     },
 *   ],
 *   VisibilityConfig: {
 *     SampledRequestsEnabled: true || false, // required
 *     CloudWatchMetricsEnabled: true || false, // required
 *     MetricName: "STRING_VALUE", // required
 *   },
 *   LockToken: "STRING_VALUE", // required
 *   CustomResponseBodies: { // CustomResponseBodies
 *     "<keys>": { // CustomResponseBody
 *       ContentType: "TEXT_PLAIN" || "TEXT_HTML" || "APPLICATION_JSON", // required
 *       Content: "STRING_VALUE", // required
 *     },
 *   },
 * };
 * const command = new UpdateRuleGroupCommand(input);
 * const response = await client.send(command);
 * // { // UpdateRuleGroupResponse
 * //   NextLockToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateRuleGroupCommandInput - {@link UpdateRuleGroupCommandInput}
 * @returns {@link UpdateRuleGroupCommandOutput}
 * @see {@link UpdateRuleGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateRuleGroupCommandOutput} for command's `response` shape.
 * @see {@link WAFV2ClientResolvedConfig | config} for WAFV2Client's `config` shape.
 *
 * @throws {@link WAFConfigurationWarningException} (client fault)
 *  <p>The operation failed because you are inspecting the web request body, headers, or
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
 *
 * @throws {@link WAFDuplicateItemException} (client fault)
 *  <p>WAF couldn’t perform the operation because the resource that you tried to save is
 *          a duplicate of an existing one.</p>
 *
 * @throws {@link WAFInternalErrorException} (server fault)
 *  <p>Your request is valid, but WAF couldn’t perform the operation because of a system
 *          problem. Retry your request. </p>
 *
 * @throws {@link WAFInvalidOperationException} (client fault)
 *  <p>The operation isn't valid. </p>
 *
 * @throws {@link WAFInvalidParameterException} (client fault)
 *  <p>The operation failed because WAF didn't recognize a parameter in the request. For
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
 *
 * @throws {@link WAFLimitsExceededException} (client fault)
 *  <p>WAF couldn’t perform the operation because you exceeded your resource limit. For
 *          example, the maximum number of <code>WebACL</code> objects that you can create for an Amazon Web Services
 *          account. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/limits.html">WAF quotas</a> in the
 *             <i>WAF Developer Guide</i>.</p>
 *
 * @throws {@link WAFNonexistentItemException} (client fault)
 *  <p>WAF couldn’t perform the operation because your resource doesn't exist.
 *        If you've just created a resource that you're using in this operation, you might
 *        just need to wait a few minutes. It can take from a few seconds to a number of minutes
 *        for changes to propagate. </p>
 *
 * @throws {@link WAFOptimisticLockException} (client fault)
 *  <p>WAF couldn’t save your changes because you tried to update or delete a resource
 *          that has changed since you last retrieved it. Get the resource again, make any changes you
 *          need to make to the new copy, and retry your operation. </p>
 *
 * @throws {@link WAFSubscriptionNotFoundException} (client fault)
 *  <p>You tried to use a managed rule group that's available by subscription, but you aren't
 *          subscribed to it yet. </p>
 *
 * @throws {@link WAFUnavailableEntityException} (client fault)
 *  <p>WAF couldn’t retrieve a resource that you specified for this operation.
 *        If you've just created a resource that you're using in this operation, you might
 *        just need to wait a few minutes. It can take from a few seconds to a number of minutes
 *        for changes to propagate. Verify the resources that you are specifying in your request
 *        parameters and then retry the operation.</p>
 *
 * @throws {@link WAFV2ServiceException}
 * <p>Base exception class for all service exceptions from WAFV2 service.</p>
 *
 */
export class UpdateRuleGroupCommand extends $Command<
  UpdateRuleGroupCommandInput,
  UpdateRuleGroupCommandOutput,
  WAFV2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: UpdateRuleGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WAFV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateRuleGroupCommandInput, UpdateRuleGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateRuleGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WAFV2Client";
    const commandName = "UpdateRuleGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: UpdateRuleGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateRuleGroupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateRuleGroupCommandOutput> {
    return de_UpdateRuleGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
