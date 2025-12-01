// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetLoggingConfigurationRequest, GetLoggingConfigurationResponse } from "../models/models_0";
import { GetLoggingConfiguration } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WAFV2ClientResolvedConfig } from "../WAFV2Client";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetLoggingConfigurationCommand}.
 */
export interface GetLoggingConfigurationCommandInput extends GetLoggingConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetLoggingConfigurationCommand}.
 */
export interface GetLoggingConfigurationCommandOutput extends GetLoggingConfigurationResponse, __MetadataBearer {}

/**
 * <p>Returns the <a>LoggingConfiguration</a> for the specified web ACL.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, GetLoggingConfigurationCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, GetLoggingConfigurationCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * // import type { WAFV2ClientConfig } from "@aws-sdk/client-wafv2";
 * const config = {}; // type is WAFV2ClientConfig
 * const client = new WAFV2Client(config);
 * const input = { // GetLoggingConfigurationRequest
 *   ResourceArn: "STRING_VALUE", // required
 *   LogType: "WAF_LOGS",
 *   LogScope: "CUSTOMER" || "SECURITY_LAKE" || "CLOUDWATCH_TELEMETRY_RULE_MANAGED",
 * };
 * const command = new GetLoggingConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetLoggingConfigurationResponse
 * //   LoggingConfiguration: { // LoggingConfiguration
 * //     ResourceArn: "STRING_VALUE", // required
 * //     LogDestinationConfigs: [ // LogDestinationConfigs // required
 * //       "STRING_VALUE",
 * //     ],
 * //     RedactedFields: [ // RedactedFields
 * //       { // FieldToMatch
 * //         SingleHeader: { // SingleHeader
 * //           Name: "STRING_VALUE", // required
 * //         },
 * //         SingleQueryArgument: { // SingleQueryArgument
 * //           Name: "STRING_VALUE", // required
 * //         },
 * //         AllQueryArguments: {},
 * //         UriPath: {},
 * //         QueryString: {},
 * //         Body: { // Body
 * //           OversizeHandling: "CONTINUE" || "MATCH" || "NO_MATCH",
 * //         },
 * //         Method: {},
 * //         JsonBody: { // JsonBody
 * //           MatchPattern: { // JsonMatchPattern
 * //             All: {},
 * //             IncludedPaths: [ // JsonPointerPaths
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //           MatchScope: "ALL" || "KEY" || "VALUE", // required
 * //           InvalidFallbackBehavior: "MATCH" || "NO_MATCH" || "EVALUATE_AS_STRING",
 * //           OversizeHandling: "CONTINUE" || "MATCH" || "NO_MATCH",
 * //         },
 * //         Headers: { // Headers
 * //           MatchPattern: { // HeaderMatchPattern
 * //             All: {},
 * //             IncludedHeaders: [ // HeaderNames
 * //               "STRING_VALUE",
 * //             ],
 * //             ExcludedHeaders: [
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //           MatchScope: "ALL" || "KEY" || "VALUE", // required
 * //           OversizeHandling: "CONTINUE" || "MATCH" || "NO_MATCH", // required
 * //         },
 * //         Cookies: { // Cookies
 * //           MatchPattern: { // CookieMatchPattern
 * //             All: {},
 * //             IncludedCookies: [ // CookieNames
 * //               "STRING_VALUE",
 * //             ],
 * //             ExcludedCookies: [
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //           MatchScope: "ALL" || "KEY" || "VALUE", // required
 * //           OversizeHandling: "CONTINUE" || "MATCH" || "NO_MATCH", // required
 * //         },
 * //         HeaderOrder: { // HeaderOrder
 * //           OversizeHandling: "CONTINUE" || "MATCH" || "NO_MATCH", // required
 * //         },
 * //         JA3Fingerprint: { // JA3Fingerprint
 * //           FallbackBehavior: "MATCH" || "NO_MATCH", // required
 * //         },
 * //         JA4Fingerprint: { // JA4Fingerprint
 * //           FallbackBehavior: "MATCH" || "NO_MATCH", // required
 * //         },
 * //         UriFragment: { // UriFragment
 * //           FallbackBehavior: "MATCH" || "NO_MATCH",
 * //         },
 * //       },
 * //     ],
 * //     ManagedByFirewallManager: true || false,
 * //     LoggingFilter: { // LoggingFilter
 * //       Filters: [ // Filters // required
 * //         { // Filter
 * //           Behavior: "KEEP" || "DROP", // required
 * //           Requirement: "MEETS_ALL" || "MEETS_ANY", // required
 * //           Conditions: [ // Conditions // required
 * //             { // Condition
 * //               ActionCondition: { // ActionCondition
 * //                 Action: "ALLOW" || "BLOCK" || "COUNT" || "CAPTCHA" || "CHALLENGE" || "EXCLUDED_AS_COUNT", // required
 * //               },
 * //               LabelNameCondition: { // LabelNameCondition
 * //                 LabelName: "STRING_VALUE", // required
 * //               },
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //       DefaultBehavior: "KEEP" || "DROP", // required
 * //     },
 * //     LogType: "WAF_LOGS",
 * //     LogScope: "CUSTOMER" || "SECURITY_LAKE" || "CLOUDWATCH_TELEMETRY_RULE_MANAGED",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetLoggingConfigurationCommandInput - {@link GetLoggingConfigurationCommandInput}
 * @returns {@link GetLoggingConfigurationCommandOutput}
 * @see {@link GetLoggingConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetLoggingConfigurationCommandOutput} for command's `response` shape.
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
export class GetLoggingConfigurationCommand extends $Command
  .classBuilder<
    GetLoggingConfigurationCommandInput,
    GetLoggingConfigurationCommandOutput,
    WAFV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WAFV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSWAF_20190729", "GetLoggingConfiguration", {})
  .n("WAFV2Client", "GetLoggingConfigurationCommand")
  .sc(GetLoggingConfiguration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetLoggingConfigurationRequest;
      output: GetLoggingConfigurationResponse;
    };
    sdk: {
      input: GetLoggingConfigurationCommandInput;
      output: GetLoggingConfigurationCommandOutput;
    };
  };
}
