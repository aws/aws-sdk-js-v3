// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetTopPathStatisticsByTrafficRequest, GetTopPathStatisticsByTrafficResponse } from "../models/models_0";
import { GetTopPathStatisticsByTraffic$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WAFV2ClientResolvedConfig } from "../WAFV2Client";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetTopPathStatisticsByTrafficCommand}.
 */
export interface GetTopPathStatisticsByTrafficCommandInput extends GetTopPathStatisticsByTrafficRequest {}
/**
 * @public
 *
 * The output of {@link GetTopPathStatisticsByTrafficCommand}.
 */
export interface GetTopPathStatisticsByTrafficCommandOutput extends GetTopPathStatisticsByTrafficResponse, __MetadataBearer {}

/**
 * <p>Retrieves aggregated statistics about the top URI paths accessed by bot traffic for a specified web ACL and time window.
 *          You can use this operation to analyze which paths on your web application receive the most bot traffic and identify the specific bots accessing those paths.
 *          The operation supports filtering by bot category, organization, or name, and allows you to drill down into specific path prefixes to view detailed URI-level statistics.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, GetTopPathStatisticsByTrafficCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, GetTopPathStatisticsByTrafficCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * // import type { WAFV2ClientConfig } from "@aws-sdk/client-wafv2";
 * const config = {}; // type is WAFV2ClientConfig
 * const client = new WAFV2Client(config);
 * const input = { // GetTopPathStatisticsByTrafficRequest
 *   WebAclArn: "STRING_VALUE", // required
 *   Scope: "CLOUDFRONT" || "REGIONAL", // required
 *   UriPathPrefix: "STRING_VALUE",
 *   TimeWindow: { // TimeWindow
 *     StartTime: new Date("TIMESTAMP"), // required
 *     EndTime: new Date("TIMESTAMP"), // required
 *   },
 *   BotCategory: "STRING_VALUE",
 *   BotOrganization: "STRING_VALUE",
 *   BotName: "STRING_VALUE",
 *   Limit: Number("int"), // required
 *   NumberOfTopTrafficBotsPerPath: Number("int"), // required
 *   NextMarker: "STRING_VALUE",
 * };
 * const command = new GetTopPathStatisticsByTrafficCommand(input);
 * const response = await client.send(command);
 * // { // GetTopPathStatisticsByTrafficResponse
 * //   PathStatistics: [ // PathStatisticsList // required
 * //     { // PathStatistics
 * //       Source: { // FilterSource
 * //         BotCategory: "STRING_VALUE",
 * //         BotOrganization: "STRING_VALUE",
 * //         BotName: "STRING_VALUE",
 * //       },
 * //       Path: "STRING_VALUE", // required
 * //       RequestCount: Number("long"), // required
 * //       Percentage: Number("double"), // required
 * //       TopBots: [ // BotStatisticsList
 * //         { // BotStatistics
 * //           BotName: "STRING_VALUE", // required
 * //           RequestCount: Number("long"), // required
 * //           Percentage: Number("double"), // required
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   TotalRequestCount: Number("long"), // required
 * //   NextMarker: "STRING_VALUE",
 * //   TopCategories: [
 * //     {
 * //       Source: {
 * //         BotCategory: "STRING_VALUE",
 * //         BotOrganization: "STRING_VALUE",
 * //         BotName: "STRING_VALUE",
 * //       },
 * //       Path: "STRING_VALUE", // required
 * //       RequestCount: Number("long"), // required
 * //       Percentage: Number("double"), // required
 * //       TopBots: [
 * //         {
 * //           BotName: "STRING_VALUE", // required
 * //           RequestCount: Number("long"), // required
 * //           Percentage: Number("double"), // required
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetTopPathStatisticsByTrafficCommandInput - {@link GetTopPathStatisticsByTrafficCommandInput}
 * @returns {@link GetTopPathStatisticsByTrafficCommandOutput}
 * @see {@link GetTopPathStatisticsByTrafficCommandInput} for command's `input` shape.
 * @see {@link GetTopPathStatisticsByTrafficCommandOutput} for command's `response` shape.
 * @see {@link WAFV2ClientResolvedConfig | config} for WAFV2Client's `config` shape.
 *
 * @throws {@link WAFFeatureNotIncludedInPricingPlanException} (client fault)
 *  <p>The operation failed because the specified WAF feature isn't supported by the CloudFront pricing plan associated with the web ACL.</p>
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
export class GetTopPathStatisticsByTrafficCommand extends $Command
  .classBuilder<
    GetTopPathStatisticsByTrafficCommandInput,
    GetTopPathStatisticsByTrafficCommandOutput,
    WAFV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WAFV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSWAF_20190729", "GetTopPathStatisticsByTraffic", {})
  .n("WAFV2Client", "GetTopPathStatisticsByTrafficCommand")
  .sc(GetTopPathStatisticsByTraffic$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTopPathStatisticsByTrafficRequest;
      output: GetTopPathStatisticsByTrafficResponse;
    };
    sdk: {
      input: GetTopPathStatisticsByTrafficCommandInput;
      output: GetTopPathStatisticsByTrafficCommandOutput;
    };
  };
}
