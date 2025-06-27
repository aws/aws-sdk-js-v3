// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetRuleGroupRequest, GetRuleGroupResponse } from "../models/models_0";
import { de_GetRuleGroupCommand, se_GetRuleGroupCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WAFV2ClientResolvedConfig } from "../WAFV2Client";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetRuleGroupCommand}.
 */
export interface GetRuleGroupCommandInput extends GetRuleGroupRequest {}
/**
 * @public
 *
 * The output of {@link GetRuleGroupCommand}.
 */
export interface GetRuleGroupCommandOutput extends GetRuleGroupResponse, __MetadataBearer {}

/**
 * <p>Retrieves the specified <a>RuleGroup</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, GetRuleGroupCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, GetRuleGroupCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * const client = new WAFV2Client(config);
 * const input = { // GetRuleGroupRequest
 *   Name: "STRING_VALUE",
 *   Scope: "CLOUDFRONT" || "REGIONAL",
 *   Id: "STRING_VALUE",
 *   ARN: "STRING_VALUE",
 * };
 * const command = new GetRuleGroupCommand(input);
 * const response = await client.send(command);
 * // { // GetRuleGroupResponse
 * //   RuleGroup: { // RuleGroup
 * //     Name: "STRING_VALUE", // required
 * //     Id: "STRING_VALUE", // required
 * //     Capacity: Number("long"), // required
 * //     ARN: "STRING_VALUE", // required
 * //     Description: "STRING_VALUE",
 * //     Rules: [ // Rules
 * //       { // Rule
 * //         Name: "STRING_VALUE", // required
 * //         Priority: Number("int"), // required
 * //         Statement: { // Statement
 * //           ByteMatchStatement: { // ByteMatchStatement
 * //             SearchString: new Uint8Array(), // required
 * //             FieldToMatch: { // FieldToMatch
 * //               SingleHeader: { // SingleHeader
 * //                 Name: "STRING_VALUE", // required
 * //               },
 * //               SingleQueryArgument: { // SingleQueryArgument
 * //                 Name: "STRING_VALUE", // required
 * //               },
 * //               AllQueryArguments: {},
 * //               UriPath: {},
 * //               QueryString: {},
 * //               Body: { // Body
 * //                 OversizeHandling: "CONTINUE" || "MATCH" || "NO_MATCH",
 * //               },
 * //               Method: {},
 * //               JsonBody: { // JsonBody
 * //                 MatchPattern: { // JsonMatchPattern
 * //                   All: {},
 * //                   IncludedPaths: [ // JsonPointerPaths
 * //                     "STRING_VALUE",
 * //                   ],
 * //                 },
 * //                 MatchScope: "ALL" || "KEY" || "VALUE", // required
 * //                 InvalidFallbackBehavior: "MATCH" || "NO_MATCH" || "EVALUATE_AS_STRING",
 * //                 OversizeHandling: "CONTINUE" || "MATCH" || "NO_MATCH",
 * //               },
 * //               Headers: { // Headers
 * //                 MatchPattern: { // HeaderMatchPattern
 * //                   All: {},
 * //                   IncludedHeaders: [ // HeaderNames
 * //                     "STRING_VALUE",
 * //                   ],
 * //                   ExcludedHeaders: [
 * //                     "STRING_VALUE",
 * //                   ],
 * //                 },
 * //                 MatchScope: "ALL" || "KEY" || "VALUE", // required
 * //                 OversizeHandling: "CONTINUE" || "MATCH" || "NO_MATCH", // required
 * //               },
 * //               Cookies: { // Cookies
 * //                 MatchPattern: { // CookieMatchPattern
 * //                   All: {},
 * //                   IncludedCookies: [ // CookieNames
 * //                     "STRING_VALUE",
 * //                   ],
 * //                   ExcludedCookies: [
 * //                     "STRING_VALUE",
 * //                   ],
 * //                 },
 * //                 MatchScope: "ALL" || "KEY" || "VALUE", // required
 * //                 OversizeHandling: "CONTINUE" || "MATCH" || "NO_MATCH", // required
 * //               },
 * //               HeaderOrder: { // HeaderOrder
 * //                 OversizeHandling: "CONTINUE" || "MATCH" || "NO_MATCH", // required
 * //               },
 * //               JA3Fingerprint: { // JA3Fingerprint
 * //                 FallbackBehavior: "MATCH" || "NO_MATCH", // required
 * //               },
 * //               JA4Fingerprint: { // JA4Fingerprint
 * //                 FallbackBehavior: "MATCH" || "NO_MATCH", // required
 * //               },
 * //               UriFragment: { // UriFragment
 * //                 FallbackBehavior: "MATCH" || "NO_MATCH",
 * //               },
 * //             },
 * //             TextTransformations: [ // TextTransformations // required
 * //               { // TextTransformation
 * //                 Priority: Number("int"), // required
 * //                 Type: "NONE" || "COMPRESS_WHITE_SPACE" || "HTML_ENTITY_DECODE" || "LOWERCASE" || "CMD_LINE" || "URL_DECODE" || "BASE64_DECODE" || "HEX_DECODE" || "MD5" || "REPLACE_COMMENTS" || "ESCAPE_SEQ_DECODE" || "SQL_HEX_DECODE" || "CSS_DECODE" || "JS_DECODE" || "NORMALIZE_PATH" || "NORMALIZE_PATH_WIN" || "REMOVE_NULLS" || "REPLACE_NULLS" || "BASE64_DECODE_EXT" || "URL_DECODE_UNI" || "UTF8_TO_UNICODE", // required
 * //               },
 * //             ],
 * //             PositionalConstraint: "EXACTLY" || "STARTS_WITH" || "ENDS_WITH" || "CONTAINS" || "CONTAINS_WORD", // required
 * //           },
 * //           SqliMatchStatement: { // SqliMatchStatement
 * //             FieldToMatch: {
 * //               SingleHeader: {
 * //                 Name: "STRING_VALUE", // required
 * //               },
 * //               SingleQueryArgument: {
 * //                 Name: "STRING_VALUE", // required
 * //               },
 * //               AllQueryArguments: {},
 * //               UriPath: {},
 * //               QueryString: {},
 * //               Body: {
 * //                 OversizeHandling: "CONTINUE" || "MATCH" || "NO_MATCH",
 * //               },
 * //               Method: {},
 * //               JsonBody: {
 * //                 MatchPattern: {
 * //                   All: {},
 * //                   IncludedPaths: [
 * //                     "STRING_VALUE",
 * //                   ],
 * //                 },
 * //                 MatchScope: "ALL" || "KEY" || "VALUE", // required
 * //                 InvalidFallbackBehavior: "MATCH" || "NO_MATCH" || "EVALUATE_AS_STRING",
 * //                 OversizeHandling: "CONTINUE" || "MATCH" || "NO_MATCH",
 * //               },
 * //               Headers: {
 * //                 MatchPattern: {
 * //                   All: {},
 * //                   IncludedHeaders: [
 * //                     "STRING_VALUE",
 * //                   ],
 * //                   ExcludedHeaders: [
 * //                     "STRING_VALUE",
 * //                   ],
 * //                 },
 * //                 MatchScope: "ALL" || "KEY" || "VALUE", // required
 * //                 OversizeHandling: "CONTINUE" || "MATCH" || "NO_MATCH", // required
 * //               },
 * //               Cookies: {
 * //                 MatchPattern: {
 * //                   All: "<All>",
 * //                   IncludedCookies: [
 * //                     "STRING_VALUE",
 * //                   ],
 * //                   ExcludedCookies: [
 * //                     "STRING_VALUE",
 * //                   ],
 * //                 },
 * //                 MatchScope: "ALL" || "KEY" || "VALUE", // required
 * //                 OversizeHandling: "CONTINUE" || "MATCH" || "NO_MATCH", // required
 * //               },
 * //               HeaderOrder: {
 * //                 OversizeHandling: "CONTINUE" || "MATCH" || "NO_MATCH", // required
 * //               },
 * //               JA3Fingerprint: {
 * //                 FallbackBehavior: "MATCH" || "NO_MATCH", // required
 * //               },
 * //               JA4Fingerprint: {
 * //                 FallbackBehavior: "MATCH" || "NO_MATCH", // required
 * //               },
 * //               UriFragment: {
 * //                 FallbackBehavior: "MATCH" || "NO_MATCH",
 * //               },
 * //             },
 * //             TextTransformations: [ // required
 * //               {
 * //                 Priority: Number("int"), // required
 * //                 Type: "NONE" || "COMPRESS_WHITE_SPACE" || "HTML_ENTITY_DECODE" || "LOWERCASE" || "CMD_LINE" || "URL_DECODE" || "BASE64_DECODE" || "HEX_DECODE" || "MD5" || "REPLACE_COMMENTS" || "ESCAPE_SEQ_DECODE" || "SQL_HEX_DECODE" || "CSS_DECODE" || "JS_DECODE" || "NORMALIZE_PATH" || "NORMALIZE_PATH_WIN" || "REMOVE_NULLS" || "REPLACE_NULLS" || "BASE64_DECODE_EXT" || "URL_DECODE_UNI" || "UTF8_TO_UNICODE", // required
 * //               },
 * //             ],
 * //             SensitivityLevel: "LOW" || "HIGH",
 * //           },
 * //           XssMatchStatement: { // XssMatchStatement
 * //             FieldToMatch: {
 * //               SingleHeader: {
 * //                 Name: "STRING_VALUE", // required
 * //               },
 * //               SingleQueryArgument: {
 * //                 Name: "STRING_VALUE", // required
 * //               },
 * //               AllQueryArguments: {},
 * //               UriPath: {},
 * //               QueryString: {},
 * //               Body: {
 * //                 OversizeHandling: "CONTINUE" || "MATCH" || "NO_MATCH",
 * //               },
 * //               Method: {},
 * //               JsonBody: {
 * //                 MatchPattern: {
 * //                   All: "<All>",
 * //                   IncludedPaths: [
 * //                     "STRING_VALUE",
 * //                   ],
 * //                 },
 * //                 MatchScope: "ALL" || "KEY" || "VALUE", // required
 * //                 InvalidFallbackBehavior: "MATCH" || "NO_MATCH" || "EVALUATE_AS_STRING",
 * //                 OversizeHandling: "CONTINUE" || "MATCH" || "NO_MATCH",
 * //               },
 * //               Headers: {
 * //                 MatchPattern: {
 * //                   All: "<All>",
 * //                   IncludedHeaders: [
 * //                     "STRING_VALUE",
 * //                   ],
 * //                   ExcludedHeaders: "<HeaderNames>",
 * //                 },
 * //                 MatchScope: "ALL" || "KEY" || "VALUE", // required
 * //                 OversizeHandling: "CONTINUE" || "MATCH" || "NO_MATCH", // required
 * //               },
 * //               Cookies: {
 * //                 MatchPattern: {
 * //                   All: "<All>",
 * //                   IncludedCookies: [
 * //                     "STRING_VALUE",
 * //                   ],
 * //                   ExcludedCookies: "<CookieNames>",
 * //                 },
 * //                 MatchScope: "ALL" || "KEY" || "VALUE", // required
 * //                 OversizeHandling: "CONTINUE" || "MATCH" || "NO_MATCH", // required
 * //               },
 * //               HeaderOrder: {
 * //                 OversizeHandling: "CONTINUE" || "MATCH" || "NO_MATCH", // required
 * //               },
 * //               JA3Fingerprint: {
 * //                 FallbackBehavior: "MATCH" || "NO_MATCH", // required
 * //               },
 * //               JA4Fingerprint: {
 * //                 FallbackBehavior: "MATCH" || "NO_MATCH", // required
 * //               },
 * //               UriFragment: {
 * //                 FallbackBehavior: "MATCH" || "NO_MATCH",
 * //               },
 * //             },
 * //             TextTransformations: [ // required
 * //               {
 * //                 Priority: Number("int"), // required
 * //                 Type: "NONE" || "COMPRESS_WHITE_SPACE" || "HTML_ENTITY_DECODE" || "LOWERCASE" || "CMD_LINE" || "URL_DECODE" || "BASE64_DECODE" || "HEX_DECODE" || "MD5" || "REPLACE_COMMENTS" || "ESCAPE_SEQ_DECODE" || "SQL_HEX_DECODE" || "CSS_DECODE" || "JS_DECODE" || "NORMALIZE_PATH" || "NORMALIZE_PATH_WIN" || "REMOVE_NULLS" || "REPLACE_NULLS" || "BASE64_DECODE_EXT" || "URL_DECODE_UNI" || "UTF8_TO_UNICODE", // required
 * //               },
 * //             ],
 * //           },
 * //           SizeConstraintStatement: { // SizeConstraintStatement
 * //             FieldToMatch: {
 * //               SingleHeader: {
 * //                 Name: "STRING_VALUE", // required
 * //               },
 * //               SingleQueryArgument: {
 * //                 Name: "STRING_VALUE", // required
 * //               },
 * //               AllQueryArguments: {},
 * //               UriPath: {},
 * //               QueryString: {},
 * //               Body: {
 * //                 OversizeHandling: "CONTINUE" || "MATCH" || "NO_MATCH",
 * //               },
 * //               Method: {},
 * //               JsonBody: {
 * //                 MatchPattern: {
 * //                   All: "<All>",
 * //                   IncludedPaths: [
 * //                     "STRING_VALUE",
 * //                   ],
 * //                 },
 * //                 MatchScope: "ALL" || "KEY" || "VALUE", // required
 * //                 InvalidFallbackBehavior: "MATCH" || "NO_MATCH" || "EVALUATE_AS_STRING",
 * //                 OversizeHandling: "CONTINUE" || "MATCH" || "NO_MATCH",
 * //               },
 * //               Headers: {
 * //                 MatchPattern: {
 * //                   All: "<All>",
 * //                   IncludedHeaders: "<HeaderNames>",
 * //                   ExcludedHeaders: "<HeaderNames>",
 * //                 },
 * //                 MatchScope: "ALL" || "KEY" || "VALUE", // required
 * //                 OversizeHandling: "CONTINUE" || "MATCH" || "NO_MATCH", // required
 * //               },
 * //               Cookies: {
 * //                 MatchPattern: {
 * //                   All: "<All>",
 * //                   IncludedCookies: "<CookieNames>",
 * //                   ExcludedCookies: "<CookieNames>",
 * //                 },
 * //                 MatchScope: "ALL" || "KEY" || "VALUE", // required
 * //                 OversizeHandling: "CONTINUE" || "MATCH" || "NO_MATCH", // required
 * //               },
 * //               HeaderOrder: {
 * //                 OversizeHandling: "CONTINUE" || "MATCH" || "NO_MATCH", // required
 * //               },
 * //               JA3Fingerprint: {
 * //                 FallbackBehavior: "MATCH" || "NO_MATCH", // required
 * //               },
 * //               JA4Fingerprint: {
 * //                 FallbackBehavior: "MATCH" || "NO_MATCH", // required
 * //               },
 * //               UriFragment: {
 * //                 FallbackBehavior: "MATCH" || "NO_MATCH",
 * //               },
 * //             },
 * //             ComparisonOperator: "EQ" || "NE" || "LE" || "LT" || "GE" || "GT", // required
 * //             Size: Number("long"), // required
 * //             TextTransformations: [ // required
 * //               {
 * //                 Priority: Number("int"), // required
 * //                 Type: "NONE" || "COMPRESS_WHITE_SPACE" || "HTML_ENTITY_DECODE" || "LOWERCASE" || "CMD_LINE" || "URL_DECODE" || "BASE64_DECODE" || "HEX_DECODE" || "MD5" || "REPLACE_COMMENTS" || "ESCAPE_SEQ_DECODE" || "SQL_HEX_DECODE" || "CSS_DECODE" || "JS_DECODE" || "NORMALIZE_PATH" || "NORMALIZE_PATH_WIN" || "REMOVE_NULLS" || "REPLACE_NULLS" || "BASE64_DECODE_EXT" || "URL_DECODE_UNI" || "UTF8_TO_UNICODE", // required
 * //               },
 * //             ],
 * //           },
 * //           GeoMatchStatement: { // GeoMatchStatement
 * //             CountryCodes: [ // CountryCodes
 * //               "AF" || "AX" || "AL" || "DZ" || "AS" || "AD" || "AO" || "AI" || "AQ" || "AG" || "AR" || "AM" || "AW" || "AU" || "AT" || "AZ" || "BS" || "BH" || "BD" || "BB" || "BY" || "BE" || "BZ" || "BJ" || "BM" || "BT" || "BO" || "BQ" || "BA" || "BW" || "BV" || "BR" || "IO" || "BN" || "BG" || "BF" || "BI" || "KH" || "CM" || "CA" || "CV" || "KY" || "CF" || "TD" || "CL" || "CN" || "CX" || "CC" || "CO" || "KM" || "CG" || "CD" || "CK" || "CR" || "CI" || "HR" || "CU" || "CW" || "CY" || "CZ" || "DK" || "DJ" || "DM" || "DO" || "EC" || "EG" || "SV" || "GQ" || "ER" || "EE" || "ET" || "FK" || "FO" || "FJ" || "FI" || "FR" || "GF" || "PF" || "TF" || "GA" || "GM" || "GE" || "DE" || "GH" || "GI" || "GR" || "GL" || "GD" || "GP" || "GU" || "GT" || "GG" || "GN" || "GW" || "GY" || "HT" || "HM" || "VA" || "HN" || "HK" || "HU" || "IS" || "IN" || "ID" || "IR" || "IQ" || "IE" || "IM" || "IL" || "IT" || "JM" || "JP" || "JE" || "JO" || "KZ" || "KE" || "KI" || "KP" || "KR" || "KW" || "KG" || "LA" || "LV" || "LB" || "LS" || "LR" || "LY" || "LI" || "LT" || "LU" || "MO" || "MK" || "MG" || "MW" || "MY" || "MV" || "ML" || "MT" || "MH" || "MQ" || "MR" || "MU" || "YT" || "MX" || "FM" || "MD" || "MC" || "MN" || "ME" || "MS" || "MA" || "MZ" || "MM" || "NA" || "NR" || "NP" || "NL" || "NC" || "NZ" || "NI" || "NE" || "NG" || "NU" || "NF" || "MP" || "NO" || "OM" || "PK" || "PW" || "PS" || "PA" || "PG" || "PY" || "PE" || "PH" || "PN" || "PL" || "PT" || "PR" || "QA" || "RE" || "RO" || "RU" || "RW" || "BL" || "SH" || "KN" || "LC" || "MF" || "PM" || "VC" || "WS" || "SM" || "ST" || "SA" || "SN" || "RS" || "SC" || "SL" || "SG" || "SX" || "SK" || "SI" || "SB" || "SO" || "ZA" || "GS" || "SS" || "ES" || "LK" || "SD" || "SR" || "SJ" || "SZ" || "SE" || "CH" || "SY" || "TW" || "TJ" || "TZ" || "TH" || "TL" || "TG" || "TK" || "TO" || "TT" || "TN" || "TR" || "TM" || "TC" || "TV" || "UG" || "UA" || "AE" || "GB" || "US" || "UM" || "UY" || "UZ" || "VU" || "VE" || "VN" || "VG" || "VI" || "WF" || "EH" || "YE" || "ZM" || "ZW" || "XK",
 * //             ],
 * //             ForwardedIPConfig: { // ForwardedIPConfig
 * //               HeaderName: "STRING_VALUE", // required
 * //               FallbackBehavior: "MATCH" || "NO_MATCH", // required
 * //             },
 * //           },
 * //           RuleGroupReferenceStatement: { // RuleGroupReferenceStatement
 * //             ARN: "STRING_VALUE", // required
 * //             ExcludedRules: [ // ExcludedRules
 * //               { // ExcludedRule
 * //                 Name: "STRING_VALUE", // required
 * //               },
 * //             ],
 * //             RuleActionOverrides: [ // RuleActionOverrides
 * //               { // RuleActionOverride
 * //                 Name: "STRING_VALUE", // required
 * //                 ActionToUse: { // RuleAction
 * //                   Block: { // BlockAction
 * //                     CustomResponse: { // CustomResponse
 * //                       ResponseCode: Number("int"), // required
 * //                       CustomResponseBodyKey: "STRING_VALUE",
 * //                       ResponseHeaders: [ // CustomHTTPHeaders
 * //                         { // CustomHTTPHeader
 * //                           Name: "STRING_VALUE", // required
 * //                           Value: "STRING_VALUE", // required
 * //                         },
 * //                       ],
 * //                     },
 * //                   },
 * //                   Allow: { // AllowAction
 * //                     CustomRequestHandling: { // CustomRequestHandling
 * //                       InsertHeaders: [ // required
 * //                         {
 * //                           Name: "STRING_VALUE", // required
 * //                           Value: "STRING_VALUE", // required
 * //                         },
 * //                       ],
 * //                     },
 * //                   },
 * //                   Count: { // CountAction
 * //                     CustomRequestHandling: {
 * //                       InsertHeaders: [ // required
 * //                         {
 * //                           Name: "STRING_VALUE", // required
 * //                           Value: "STRING_VALUE", // required
 * //                         },
 * //                       ],
 * //                     },
 * //                   },
 * //                   Captcha: { // CaptchaAction
 * //                     CustomRequestHandling: {
 * //                       InsertHeaders: [ // required
 * //                         {
 * //                           Name: "STRING_VALUE", // required
 * //                           Value: "STRING_VALUE", // required
 * //                         },
 * //                       ],
 * //                     },
 * //                   },
 * //                   Challenge: { // ChallengeAction
 * //                     CustomRequestHandling: {
 * //                       InsertHeaders: [ // required
 * //                         {
 * //                           Name: "STRING_VALUE", // required
 * //                           Value: "STRING_VALUE", // required
 * //                         },
 * //                       ],
 * //                     },
 * //                   },
 * //                 },
 * //               },
 * //             ],
 * //           },
 * //           IPSetReferenceStatement: { // IPSetReferenceStatement
 * //             ARN: "STRING_VALUE", // required
 * //             IPSetForwardedIPConfig: { // IPSetForwardedIPConfig
 * //               HeaderName: "STRING_VALUE", // required
 * //               FallbackBehavior: "MATCH" || "NO_MATCH", // required
 * //               Position: "FIRST" || "LAST" || "ANY", // required
 * //             },
 * //           },
 * //           RegexPatternSetReferenceStatement: { // RegexPatternSetReferenceStatement
 * //             ARN: "STRING_VALUE", // required
 * //             FieldToMatch: {
 * //               SingleHeader: {
 * //                 Name: "STRING_VALUE", // required
 * //               },
 * //               SingleQueryArgument: {
 * //                 Name: "STRING_VALUE", // required
 * //               },
 * //               AllQueryArguments: {},
 * //               UriPath: {},
 * //               QueryString: {},
 * //               Body: {
 * //                 OversizeHandling: "CONTINUE" || "MATCH" || "NO_MATCH",
 * //               },
 * //               Method: {},
 * //               JsonBody: {
 * //                 MatchPattern: {
 * //                   All: "<All>",
 * //                   IncludedPaths: [
 * //                     "STRING_VALUE",
 * //                   ],
 * //                 },
 * //                 MatchScope: "ALL" || "KEY" || "VALUE", // required
 * //                 InvalidFallbackBehavior: "MATCH" || "NO_MATCH" || "EVALUATE_AS_STRING",
 * //                 OversizeHandling: "CONTINUE" || "MATCH" || "NO_MATCH",
 * //               },
 * //               Headers: {
 * //                 MatchPattern: {
 * //                   All: "<All>",
 * //                   IncludedHeaders: "<HeaderNames>",
 * //                   ExcludedHeaders: "<HeaderNames>",
 * //                 },
 * //                 MatchScope: "ALL" || "KEY" || "VALUE", // required
 * //                 OversizeHandling: "CONTINUE" || "MATCH" || "NO_MATCH", // required
 * //               },
 * //               Cookies: {
 * //                 MatchPattern: {
 * //                   All: "<All>",
 * //                   IncludedCookies: "<CookieNames>",
 * //                   ExcludedCookies: "<CookieNames>",
 * //                 },
 * //                 MatchScope: "ALL" || "KEY" || "VALUE", // required
 * //                 OversizeHandling: "CONTINUE" || "MATCH" || "NO_MATCH", // required
 * //               },
 * //               HeaderOrder: {
 * //                 OversizeHandling: "CONTINUE" || "MATCH" || "NO_MATCH", // required
 * //               },
 * //               JA3Fingerprint: {
 * //                 FallbackBehavior: "MATCH" || "NO_MATCH", // required
 * //               },
 * //               JA4Fingerprint: {
 * //                 FallbackBehavior: "MATCH" || "NO_MATCH", // required
 * //               },
 * //               UriFragment: {
 * //                 FallbackBehavior: "MATCH" || "NO_MATCH",
 * //               },
 * //             },
 * //             TextTransformations: [ // required
 * //               {
 * //                 Priority: Number("int"), // required
 * //                 Type: "NONE" || "COMPRESS_WHITE_SPACE" || "HTML_ENTITY_DECODE" || "LOWERCASE" || "CMD_LINE" || "URL_DECODE" || "BASE64_DECODE" || "HEX_DECODE" || "MD5" || "REPLACE_COMMENTS" || "ESCAPE_SEQ_DECODE" || "SQL_HEX_DECODE" || "CSS_DECODE" || "JS_DECODE" || "NORMALIZE_PATH" || "NORMALIZE_PATH_WIN" || "REMOVE_NULLS" || "REPLACE_NULLS" || "BASE64_DECODE_EXT" || "URL_DECODE_UNI" || "UTF8_TO_UNICODE", // required
 * //               },
 * //             ],
 * //           },
 * //           RateBasedStatement: { // RateBasedStatement
 * //             Limit: Number("long"), // required
 * //             EvaluationWindowSec: Number("long"),
 * //             AggregateKeyType: "IP" || "FORWARDED_IP" || "CUSTOM_KEYS" || "CONSTANT", // required
 * //             ScopeDownStatement: {
 * //               ByteMatchStatement: {
 * //                 SearchString: new Uint8Array(), // required
 * //                 FieldToMatch: "<FieldToMatch>", // required
 * //                 TextTransformations: "<TextTransformations>", // required
 * //                 PositionalConstraint: "EXACTLY" || "STARTS_WITH" || "ENDS_WITH" || "CONTAINS" || "CONTAINS_WORD", // required
 * //               },
 * //               SqliMatchStatement: {
 * //                 FieldToMatch: "<FieldToMatch>", // required
 * //                 TextTransformations: "<TextTransformations>", // required
 * //                 SensitivityLevel: "LOW" || "HIGH",
 * //               },
 * //               XssMatchStatement: {
 * //                 FieldToMatch: "<FieldToMatch>", // required
 * //                 TextTransformations: "<TextTransformations>", // required
 * //               },
 * //               SizeConstraintStatement: {
 * //                 FieldToMatch: "<FieldToMatch>", // required
 * //                 ComparisonOperator: "EQ" || "NE" || "LE" || "LT" || "GE" || "GT", // required
 * //                 Size: Number("long"), // required
 * //                 TextTransformations: "<TextTransformations>", // required
 * //               },
 * //               GeoMatchStatement: {
 * //                 CountryCodes: [
 * //                   "AF" || "AX" || "AL" || "DZ" || "AS" || "AD" || "AO" || "AI" || "AQ" || "AG" || "AR" || "AM" || "AW" || "AU" || "AT" || "AZ" || "BS" || "BH" || "BD" || "BB" || "BY" || "BE" || "BZ" || "BJ" || "BM" || "BT" || "BO" || "BQ" || "BA" || "BW" || "BV" || "BR" || "IO" || "BN" || "BG" || "BF" || "BI" || "KH" || "CM" || "CA" || "CV" || "KY" || "CF" || "TD" || "CL" || "CN" || "CX" || "CC" || "CO" || "KM" || "CG" || "CD" || "CK" || "CR" || "CI" || "HR" || "CU" || "CW" || "CY" || "CZ" || "DK" || "DJ" || "DM" || "DO" || "EC" || "EG" || "SV" || "GQ" || "ER" || "EE" || "ET" || "FK" || "FO" || "FJ" || "FI" || "FR" || "GF" || "PF" || "TF" || "GA" || "GM" || "GE" || "DE" || "GH" || "GI" || "GR" || "GL" || "GD" || "GP" || "GU" || "GT" || "GG" || "GN" || "GW" || "GY" || "HT" || "HM" || "VA" || "HN" || "HK" || "HU" || "IS" || "IN" || "ID" || "IR" || "IQ" || "IE" || "IM" || "IL" || "IT" || "JM" || "JP" || "JE" || "JO" || "KZ" || "KE" || "KI" || "KP" || "KR" || "KW" || "KG" || "LA" || "LV" || "LB" || "LS" || "LR" || "LY" || "LI" || "LT" || "LU" || "MO" || "MK" || "MG" || "MW" || "MY" || "MV" || "ML" || "MT" || "MH" || "MQ" || "MR" || "MU" || "YT" || "MX" || "FM" || "MD" || "MC" || "MN" || "ME" || "MS" || "MA" || "MZ" || "MM" || "NA" || "NR" || "NP" || "NL" || "NC" || "NZ" || "NI" || "NE" || "NG" || "NU" || "NF" || "MP" || "NO" || "OM" || "PK" || "PW" || "PS" || "PA" || "PG" || "PY" || "PE" || "PH" || "PN" || "PL" || "PT" || "PR" || "QA" || "RE" || "RO" || "RU" || "RW" || "BL" || "SH" || "KN" || "LC" || "MF" || "PM" || "VC" || "WS" || "SM" || "ST" || "SA" || "SN" || "RS" || "SC" || "SL" || "SG" || "SX" || "SK" || "SI" || "SB" || "SO" || "ZA" || "GS" || "SS" || "ES" || "LK" || "SD" || "SR" || "SJ" || "SZ" || "SE" || "CH" || "SY" || "TW" || "TJ" || "TZ" || "TH" || "TL" || "TG" || "TK" || "TO" || "TT" || "TN" || "TR" || "TM" || "TC" || "TV" || "UG" || "UA" || "AE" || "GB" || "US" || "UM" || "UY" || "UZ" || "VU" || "VE" || "VN" || "VG" || "VI" || "WF" || "EH" || "YE" || "ZM" || "ZW" || "XK",
 * //                 ],
 * //                 ForwardedIPConfig: {
 * //                   HeaderName: "STRING_VALUE", // required
 * //                   FallbackBehavior: "MATCH" || "NO_MATCH", // required
 * //                 },
 * //               },
 * //               RuleGroupReferenceStatement: {
 * //                 ARN: "STRING_VALUE", // required
 * //                 ExcludedRules: [
 * //                   {
 * //                     Name: "STRING_VALUE", // required
 * //                   },
 * //                 ],
 * //                 RuleActionOverrides: [
 * //                   {
 * //                     Name: "STRING_VALUE", // required
 * //                     ActionToUse: {
 * //                       Block: {
 * //                         CustomResponse: {
 * //                           ResponseCode: Number("int"), // required
 * //                           CustomResponseBodyKey: "STRING_VALUE",
 * //                           ResponseHeaders: "<CustomHTTPHeaders>",
 * //                         },
 * //                       },
 * //                       Allow: {
 * //                         CustomRequestHandling: {
 * //                           InsertHeaders: "<CustomHTTPHeaders>", // required
 * //                         },
 * //                       },
 * //                       Count: {
 * //                         CustomRequestHandling: "<CustomRequestHandling>",
 * //                       },
 * //                       Captcha: {
 * //                         CustomRequestHandling: "<CustomRequestHandling>",
 * //                       },
 * //                       Challenge: {
 * //                         CustomRequestHandling: "<CustomRequestHandling>",
 * //                       },
 * //                     },
 * //                   },
 * //                 ],
 * //               },
 * //               IPSetReferenceStatement: {
 * //                 ARN: "STRING_VALUE", // required
 * //                 IPSetForwardedIPConfig: {
 * //                   HeaderName: "STRING_VALUE", // required
 * //                   FallbackBehavior: "MATCH" || "NO_MATCH", // required
 * //                   Position: "FIRST" || "LAST" || "ANY", // required
 * //                 },
 * //               },
 * //               RegexPatternSetReferenceStatement: {
 * //                 ARN: "STRING_VALUE", // required
 * //                 FieldToMatch: "<FieldToMatch>", // required
 * //                 TextTransformations: "<TextTransformations>", // required
 * //               },
 * //               RateBasedStatement: {
 * //                 Limit: Number("long"), // required
 * //                 EvaluationWindowSec: Number("long"),
 * //                 AggregateKeyType: "IP" || "FORWARDED_IP" || "CUSTOM_KEYS" || "CONSTANT", // required
 * //                 ScopeDownStatement: "<Statement>",
 * //                 ForwardedIPConfig: {
 * //                   HeaderName: "STRING_VALUE", // required
 * //                   FallbackBehavior: "MATCH" || "NO_MATCH", // required
 * //                 },
 * //                 CustomKeys: [ // RateBasedStatementCustomKeys
 * //                   { // RateBasedStatementCustomKey
 * //                     Header: { // RateLimitHeader
 * //                       Name: "STRING_VALUE", // required
 * //                       TextTransformations: "<TextTransformations>", // required
 * //                     },
 * //                     Cookie: { // RateLimitCookie
 * //                       Name: "STRING_VALUE", // required
 * //                       TextTransformations: "<TextTransformations>", // required
 * //                     },
 * //                     QueryArgument: { // RateLimitQueryArgument
 * //                       Name: "STRING_VALUE", // required
 * //                       TextTransformations: "<TextTransformations>", // required
 * //                     },
 * //                     QueryString: { // RateLimitQueryString
 * //                       TextTransformations: "<TextTransformations>", // required
 * //                     },
 * //                     HTTPMethod: {},
 * //                     ForwardedIP: {},
 * //                     IP: {},
 * //                     LabelNamespace: { // RateLimitLabelNamespace
 * //                       Namespace: "STRING_VALUE", // required
 * //                     },
 * //                     UriPath: { // RateLimitUriPath
 * //                       TextTransformations: "<TextTransformations>", // required
 * //                     },
 * //                     JA3Fingerprint: { // RateLimitJA3Fingerprint
 * //                       FallbackBehavior: "MATCH" || "NO_MATCH", // required
 * //                     },
 * //                     JA4Fingerprint: { // RateLimitJA4Fingerprint
 * //                       FallbackBehavior: "MATCH" || "NO_MATCH", // required
 * //                     },
 * //                     ASN: {},
 * //                   },
 * //                 ],
 * //               },
 * //               AndStatement: { // AndStatement
 * //                 Statements: [ // Statements // required
 * //                   "<Statement>",
 * //                 ],
 * //               },
 * //               OrStatement: { // OrStatement
 * //                 Statements: [ // required
 * //                   "<Statement>",
 * //                 ],
 * //               },
 * //               NotStatement: { // NotStatement
 * //                 Statement: "<Statement>", // required
 * //               },
 * //               ManagedRuleGroupStatement: { // ManagedRuleGroupStatement
 * //                 VendorName: "STRING_VALUE", // required
 * //                 Name: "STRING_VALUE", // required
 * //                 Version: "STRING_VALUE",
 * //                 ExcludedRules: [
 * //                   {
 * //                     Name: "STRING_VALUE", // required
 * //                   },
 * //                 ],
 * //                 ScopeDownStatement: "<Statement>",
 * //                 ManagedRuleGroupConfigs: [ // ManagedRuleGroupConfigs
 * //                   { // ManagedRuleGroupConfig
 * //                     LoginPath: "STRING_VALUE",
 * //                     PayloadType: "JSON" || "FORM_ENCODED",
 * //                     UsernameField: { // UsernameField
 * //                       Identifier: "STRING_VALUE", // required
 * //                     },
 * //                     PasswordField: { // PasswordField
 * //                       Identifier: "STRING_VALUE", // required
 * //                     },
 * //                     AWSManagedRulesBotControlRuleSet: { // AWSManagedRulesBotControlRuleSet
 * //                       InspectionLevel: "COMMON" || "TARGETED", // required
 * //                       EnableMachineLearning: true || false,
 * //                     },
 * //                     AWSManagedRulesATPRuleSet: { // AWSManagedRulesATPRuleSet
 * //                       LoginPath: "STRING_VALUE", // required
 * //                       RequestInspection: { // RequestInspection
 * //                         PayloadType: "JSON" || "FORM_ENCODED", // required
 * //                         UsernameField: {
 * //                           Identifier: "STRING_VALUE", // required
 * //                         },
 * //                         PasswordField: {
 * //                           Identifier: "STRING_VALUE", // required
 * //                         },
 * //                       },
 * //                       ResponseInspection: { // ResponseInspection
 * //                         StatusCode: { // ResponseInspectionStatusCode
 * //                           SuccessCodes: [ // ResponseInspectionStatusCodeSuccessCodes // required
 * //                             Number("int"),
 * //                           ],
 * //                           FailureCodes: [ // ResponseInspectionStatusCodeFailureCodes // required
 * //                             Number("int"),
 * //                           ],
 * //                         },
 * //                         Header: { // ResponseInspectionHeader
 * //                           Name: "STRING_VALUE", // required
 * //                           SuccessValues: [ // ResponseInspectionHeaderSuccessValues // required
 * //                             "STRING_VALUE",
 * //                           ],
 * //                           FailureValues: [ // ResponseInspectionHeaderFailureValues // required
 * //                             "STRING_VALUE",
 * //                           ],
 * //                         },
 * //                         BodyContains: { // ResponseInspectionBodyContains
 * //                           SuccessStrings: [ // ResponseInspectionBodyContainsSuccessStrings // required
 * //                             "STRING_VALUE",
 * //                           ],
 * //                           FailureStrings: [ // ResponseInspectionBodyContainsFailureStrings // required
 * //                             "STRING_VALUE",
 * //                           ],
 * //                         },
 * //                         Json: { // ResponseInspectionJson
 * //                           Identifier: "STRING_VALUE", // required
 * //                           SuccessValues: [ // ResponseInspectionJsonSuccessValues // required
 * //                             "STRING_VALUE",
 * //                           ],
 * //                           FailureValues: [ // ResponseInspectionJsonFailureValues // required
 * //                             "STRING_VALUE",
 * //                           ],
 * //                         },
 * //                       },
 * //                       EnableRegexInPath: true || false,
 * //                     },
 * //                     AWSManagedRulesACFPRuleSet: { // AWSManagedRulesACFPRuleSet
 * //                       CreationPath: "STRING_VALUE", // required
 * //                       RegistrationPagePath: "STRING_VALUE", // required
 * //                       RequestInspection: { // RequestInspectionACFP
 * //                         PayloadType: "JSON" || "FORM_ENCODED", // required
 * //                         UsernameField: {
 * //                           Identifier: "STRING_VALUE", // required
 * //                         },
 * //                         PasswordField: {
 * //                           Identifier: "STRING_VALUE", // required
 * //                         },
 * //                         EmailField: { // EmailField
 * //                           Identifier: "STRING_VALUE", // required
 * //                         },
 * //                         PhoneNumberFields: [ // PhoneNumberFields
 * //                           { // PhoneNumberField
 * //                             Identifier: "STRING_VALUE", // required
 * //                           },
 * //                         ],
 * //                         AddressFields: [ // AddressFields
 * //                           { // AddressField
 * //                             Identifier: "STRING_VALUE", // required
 * //                           },
 * //                         ],
 * //                       },
 * //                       ResponseInspection: {
 * //                         StatusCode: {
 * //                           SuccessCodes: [ // required
 * //                             Number("int"),
 * //                           ],
 * //                           FailureCodes: [ // required
 * //                             Number("int"),
 * //                           ],
 * //                         },
 * //                         Header: {
 * //                           Name: "STRING_VALUE", // required
 * //                           SuccessValues: [ // required
 * //                             "STRING_VALUE",
 * //                           ],
 * //                           FailureValues: [ // required
 * //                             "STRING_VALUE",
 * //                           ],
 * //                         },
 * //                         BodyContains: {
 * //                           SuccessStrings: [ // required
 * //                             "STRING_VALUE",
 * //                           ],
 * //                           FailureStrings: [ // required
 * //                             "STRING_VALUE",
 * //                           ],
 * //                         },
 * //                         Json: {
 * //                           Identifier: "STRING_VALUE", // required
 * //                           SuccessValues: [ // required
 * //                             "STRING_VALUE",
 * //                           ],
 * //                           FailureValues: [ // required
 * //                             "STRING_VALUE",
 * //                           ],
 * //                         },
 * //                       },
 * //                       EnableRegexInPath: true || false,
 * //                     },
 * //                     AWSManagedRulesAntiDDoSRuleSet: { // AWSManagedRulesAntiDDoSRuleSet
 * //                       ClientSideActionConfig: { // ClientSideActionConfig
 * //                         Challenge: { // ClientSideAction
 * //                           UsageOfAction: "ENABLED" || "DISABLED", // required
 * //                           Sensitivity: "LOW" || "MEDIUM" || "HIGH",
 * //                           ExemptUriRegularExpressions: [ // RegularExpressionList
 * //                             { // Regex
 * //                               RegexString: "STRING_VALUE",
 * //                             },
 * //                           ],
 * //                         },
 * //                       },
 * //                       SensitivityToBlock: "LOW" || "MEDIUM" || "HIGH",
 * //                     },
 * //                   },
 * //                 ],
 * //                 RuleActionOverrides: [
 * //                   {
 * //                     Name: "STRING_VALUE", // required
 * //                     ActionToUse: {
 * //                       Block: {
 * //                         CustomResponse: {
 * //                           ResponseCode: Number("int"), // required
 * //                           CustomResponseBodyKey: "STRING_VALUE",
 * //                           ResponseHeaders: "<CustomHTTPHeaders>",
 * //                         },
 * //                       },
 * //                       Allow: {
 * //                         CustomRequestHandling: "<CustomRequestHandling>",
 * //                       },
 * //                       Count: {
 * //                         CustomRequestHandling: "<CustomRequestHandling>",
 * //                       },
 * //                       Captcha: {
 * //                         CustomRequestHandling: "<CustomRequestHandling>",
 * //                       },
 * //                       Challenge: {
 * //                         CustomRequestHandling: "<CustomRequestHandling>",
 * //                       },
 * //                     },
 * //                   },
 * //                 ],
 * //               },
 * //               LabelMatchStatement: { // LabelMatchStatement
 * //                 Scope: "LABEL" || "NAMESPACE", // required
 * //                 Key: "STRING_VALUE", // required
 * //               },
 * //               RegexMatchStatement: { // RegexMatchStatement
 * //                 RegexString: "STRING_VALUE", // required
 * //                 FieldToMatch: "<FieldToMatch>", // required
 * //                 TextTransformations: "<TextTransformations>", // required
 * //               },
 * //               AsnMatchStatement: { // AsnMatchStatement
 * //                 AsnList: [ // AsnList // required
 * //                   Number("long"),
 * //                 ],
 * //                 ForwardedIPConfig: {
 * //                   HeaderName: "STRING_VALUE", // required
 * //                   FallbackBehavior: "MATCH" || "NO_MATCH", // required
 * //                 },
 * //               },
 * //             },
 * //             ForwardedIPConfig: {
 * //               HeaderName: "STRING_VALUE", // required
 * //               FallbackBehavior: "MATCH" || "NO_MATCH", // required
 * //             },
 * //             CustomKeys: [
 * //               {
 * //                 Header: {
 * //                   Name: "STRING_VALUE", // required
 * //                   TextTransformations: "<TextTransformations>", // required
 * //                 },
 * //                 Cookie: {
 * //                   Name: "STRING_VALUE", // required
 * //                   TextTransformations: "<TextTransformations>", // required
 * //                 },
 * //                 QueryArgument: {
 * //                   Name: "STRING_VALUE", // required
 * //                   TextTransformations: "<TextTransformations>", // required
 * //                 },
 * //                 QueryString: {
 * //                   TextTransformations: "<TextTransformations>", // required
 * //                 },
 * //                 HTTPMethod: {},
 * //                 ForwardedIP: {},
 * //                 IP: {},
 * //                 LabelNamespace: {
 * //                   Namespace: "STRING_VALUE", // required
 * //                 },
 * //                 UriPath: {
 * //                   TextTransformations: "<TextTransformations>", // required
 * //                 },
 * //                 JA3Fingerprint: {
 * //                   FallbackBehavior: "MATCH" || "NO_MATCH", // required
 * //                 },
 * //                 JA4Fingerprint: {
 * //                   FallbackBehavior: "MATCH" || "NO_MATCH", // required
 * //                 },
 * //                 ASN: {},
 * //               },
 * //             ],
 * //           },
 * //           AndStatement: {
 * //             Statements: [ // required
 * //               "<Statement>",
 * //             ],
 * //           },
 * //           OrStatement: {
 * //             Statements: [ // required
 * //               "<Statement>",
 * //             ],
 * //           },
 * //           NotStatement: {
 * //             Statement: "<Statement>", // required
 * //           },
 * //           ManagedRuleGroupStatement: {
 * //             VendorName: "STRING_VALUE", // required
 * //             Name: "STRING_VALUE", // required
 * //             Version: "STRING_VALUE",
 * //             ExcludedRules: [
 * //               {
 * //                 Name: "STRING_VALUE", // required
 * //               },
 * //             ],
 * //             ScopeDownStatement: "<Statement>",
 * //             ManagedRuleGroupConfigs: [
 * //               {
 * //                 LoginPath: "STRING_VALUE",
 * //                 PayloadType: "JSON" || "FORM_ENCODED",
 * //                 UsernameField: "<UsernameField>",
 * //                 PasswordField: "<PasswordField>",
 * //                 AWSManagedRulesBotControlRuleSet: {
 * //                   InspectionLevel: "COMMON" || "TARGETED", // required
 * //                   EnableMachineLearning: true || false,
 * //                 },
 * //                 AWSManagedRulesATPRuleSet: {
 * //                   LoginPath: "STRING_VALUE", // required
 * //                   RequestInspection: {
 * //                     PayloadType: "JSON" || "FORM_ENCODED", // required
 * //                     UsernameField: "<UsernameField>", // required
 * //                     PasswordField: "<PasswordField>", // required
 * //                   },
 * //                   ResponseInspection: {
 * //                     StatusCode: {
 * //                       SuccessCodes: [ // required
 * //                         Number("int"),
 * //                       ],
 * //                       FailureCodes: [ // required
 * //                         Number("int"),
 * //                       ],
 * //                     },
 * //                     Header: {
 * //                       Name: "STRING_VALUE", // required
 * //                       SuccessValues: [ // required
 * //                         "STRING_VALUE",
 * //                       ],
 * //                       FailureValues: [ // required
 * //                         "STRING_VALUE",
 * //                       ],
 * //                     },
 * //                     BodyContains: {
 * //                       SuccessStrings: [ // required
 * //                         "STRING_VALUE",
 * //                       ],
 * //                       FailureStrings: [ // required
 * //                         "STRING_VALUE",
 * //                       ],
 * //                     },
 * //                     Json: {
 * //                       Identifier: "STRING_VALUE", // required
 * //                       SuccessValues: [ // required
 * //                         "STRING_VALUE",
 * //                       ],
 * //                       FailureValues: [ // required
 * //                         "STRING_VALUE",
 * //                       ],
 * //                     },
 * //                   },
 * //                   EnableRegexInPath: true || false,
 * //                 },
 * //                 AWSManagedRulesACFPRuleSet: {
 * //                   CreationPath: "STRING_VALUE", // required
 * //                   RegistrationPagePath: "STRING_VALUE", // required
 * //                   RequestInspection: {
 * //                     PayloadType: "JSON" || "FORM_ENCODED", // required
 * //                     UsernameField: "<UsernameField>",
 * //                     PasswordField: "<PasswordField>",
 * //                     EmailField: {
 * //                       Identifier: "STRING_VALUE", // required
 * //                     },
 * //                     PhoneNumberFields: [
 * //                       {
 * //                         Identifier: "STRING_VALUE", // required
 * //                       },
 * //                     ],
 * //                     AddressFields: [
 * //                       {
 * //                         Identifier: "STRING_VALUE", // required
 * //                       },
 * //                     ],
 * //                   },
 * //                   ResponseInspection: {
 * //                     StatusCode: {
 * //                       SuccessCodes: [ // required
 * //                         Number("int"),
 * //                       ],
 * //                       FailureCodes: [ // required
 * //                         Number("int"),
 * //                       ],
 * //                     },
 * //                     Header: {
 * //                       Name: "STRING_VALUE", // required
 * //                       SuccessValues: [ // required
 * //                         "STRING_VALUE",
 * //                       ],
 * //                       FailureValues: [ // required
 * //                         "STRING_VALUE",
 * //                       ],
 * //                     },
 * //                     BodyContains: {
 * //                       SuccessStrings: [ // required
 * //                         "STRING_VALUE",
 * //                       ],
 * //                       FailureStrings: [ // required
 * //                         "STRING_VALUE",
 * //                       ],
 * //                     },
 * //                     Json: {
 * //                       Identifier: "STRING_VALUE", // required
 * //                       SuccessValues: [ // required
 * //                         "STRING_VALUE",
 * //                       ],
 * //                       FailureValues: [ // required
 * //                         "STRING_VALUE",
 * //                       ],
 * //                     },
 * //                   },
 * //                   EnableRegexInPath: true || false,
 * //                 },
 * //                 AWSManagedRulesAntiDDoSRuleSet: {
 * //                   ClientSideActionConfig: {
 * //                     Challenge: {
 * //                       UsageOfAction: "ENABLED" || "DISABLED", // required
 * //                       Sensitivity: "LOW" || "MEDIUM" || "HIGH",
 * //                       ExemptUriRegularExpressions: [
 * //                         {
 * //                           RegexString: "STRING_VALUE",
 * //                         },
 * //                       ],
 * //                     },
 * //                   },
 * //                   SensitivityToBlock: "LOW" || "MEDIUM" || "HIGH",
 * //                 },
 * //               },
 * //             ],
 * //             RuleActionOverrides: [
 * //               {
 * //                 Name: "STRING_VALUE", // required
 * //                 ActionToUse: {
 * //                   Block: {
 * //                     CustomResponse: {
 * //                       ResponseCode: Number("int"), // required
 * //                       CustomResponseBodyKey: "STRING_VALUE",
 * //                       ResponseHeaders: "<CustomHTTPHeaders>",
 * //                     },
 * //                   },
 * //                   Allow: {
 * //                     CustomRequestHandling: "<CustomRequestHandling>",
 * //                   },
 * //                   Count: {
 * //                     CustomRequestHandling: "<CustomRequestHandling>",
 * //                   },
 * //                   Captcha: {
 * //                     CustomRequestHandling: "<CustomRequestHandling>",
 * //                   },
 * //                   Challenge: {
 * //                     CustomRequestHandling: "<CustomRequestHandling>",
 * //                   },
 * //                 },
 * //               },
 * //             ],
 * //           },
 * //           LabelMatchStatement: {
 * //             Scope: "LABEL" || "NAMESPACE", // required
 * //             Key: "STRING_VALUE", // required
 * //           },
 * //           RegexMatchStatement: {
 * //             RegexString: "STRING_VALUE", // required
 * //             FieldToMatch: "<FieldToMatch>", // required
 * //             TextTransformations: "<TextTransformations>", // required
 * //           },
 * //           AsnMatchStatement: {
 * //             AsnList: [ // required
 * //               Number("long"),
 * //             ],
 * //             ForwardedIPConfig: "<ForwardedIPConfig>",
 * //           },
 * //         },
 * //         Action: "<RuleAction>",
 * //         OverrideAction: { // OverrideAction
 * //           Count: "<CountAction>",
 * //           None: {},
 * //         },
 * //         RuleLabels: [ // Labels
 * //           { // Label
 * //             Name: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //         VisibilityConfig: { // VisibilityConfig
 * //           SampledRequestsEnabled: true || false, // required
 * //           CloudWatchMetricsEnabled: true || false, // required
 * //           MetricName: "STRING_VALUE", // required
 * //         },
 * //         CaptchaConfig: { // CaptchaConfig
 * //           ImmunityTimeProperty: { // ImmunityTimeProperty
 * //             ImmunityTime: Number("long"), // required
 * //           },
 * //         },
 * //         ChallengeConfig: { // ChallengeConfig
 * //           ImmunityTimeProperty: {
 * //             ImmunityTime: Number("long"), // required
 * //           },
 * //         },
 * //       },
 * //     ],
 * //     VisibilityConfig: {
 * //       SampledRequestsEnabled: true || false, // required
 * //       CloudWatchMetricsEnabled: true || false, // required
 * //       MetricName: "STRING_VALUE", // required
 * //     },
 * //     LabelNamespace: "STRING_VALUE",
 * //     CustomResponseBodies: { // CustomResponseBodies
 * //       "<keys>": { // CustomResponseBody
 * //         ContentType: "TEXT_PLAIN" || "TEXT_HTML" || "APPLICATION_JSON", // required
 * //         Content: "STRING_VALUE", // required
 * //       },
 * //     },
 * //     AvailableLabels: [ // LabelSummaries
 * //       { // LabelSummary
 * //         Name: "STRING_VALUE",
 * //       },
 * //     ],
 * //     ConsumedLabels: [
 * //       {
 * //         Name: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * //   LockToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetRuleGroupCommandInput - {@link GetRuleGroupCommandInput}
 * @returns {@link GetRuleGroupCommandOutput}
 * @see {@link GetRuleGroupCommandInput} for command's `input` shape.
 * @see {@link GetRuleGroupCommandOutput} for command's `response` shape.
 * @see {@link WAFV2ClientResolvedConfig | config} for WAFV2Client's `config` shape.
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
 * @throws {@link WAFNonexistentItemException} (client fault)
 *  <p>WAF couldn’t perform the operation because your resource doesn't exist.
 *        If you've just created a resource that you're using in this operation, you might
 *        just need to wait a few minutes. It can take from a few seconds to a number of minutes
 *        for changes to propagate. </p>
 *
 * @throws {@link WAFV2ServiceException}
 * <p>Base exception class for all service exceptions from WAFV2 service.</p>
 *
 *
 * @public
 */
export class GetRuleGroupCommand extends $Command
  .classBuilder<
    GetRuleGroupCommandInput,
    GetRuleGroupCommandOutput,
    WAFV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WAFV2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSWAF_20190729", "GetRuleGroup", {})
  .n("WAFV2Client", "GetRuleGroupCommand")
  .f(void 0, void 0)
  .ser(se_GetRuleGroupCommand)
  .de(de_GetRuleGroupCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRuleGroupRequest;
      output: GetRuleGroupResponse;
    };
    sdk: {
      input: GetRuleGroupCommandInput;
      output: GetRuleGroupCommandOutput;
    };
  };
}
