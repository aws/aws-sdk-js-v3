// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListTagsForResourcesRequest, ListTagsForResourcesResponse } from "../models/models_0";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { ListTagsForResources } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListTagsForResourcesCommand}.
 */
export interface ListTagsForResourcesCommandInput extends ListTagsForResourcesRequest {}
/**
 * @public
 *
 * The output of {@link ListTagsForResourcesCommand}.
 */
export interface ListTagsForResourcesCommandOutput extends ListTagsForResourcesResponse, __MetadataBearer {}

/**
 * <p>Lists tags for up to 10 health checks or hosted zones.</p>
 *          <p>For information about using tags for cost allocation, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Using Cost Allocation
 * 				Tags</a> in the <i>Billing and Cost Management User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, ListTagsForResourcesCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, ListTagsForResourcesCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * // import type { Route53ClientConfig } from "@aws-sdk/client-route-53";
 * const config = {}; // type is Route53ClientConfig
 * const client = new Route53Client(config);
 * const input = { // ListTagsForResourcesRequest
 *   ResourceType: "healthcheck" || "hostedzone", // required
 *   ResourceIds: [ // TagResourceIdList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new ListTagsForResourcesCommand(input);
 * const response = await client.send(command);
 * // { // ListTagsForResourcesResponse
 * //   ResourceTagSets: [ // ResourceTagSetList // required
 * //     { // ResourceTagSet
 * //       ResourceType: "healthcheck" || "hostedzone",
 * //       ResourceId: "STRING_VALUE",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListTagsForResourcesCommandInput - {@link ListTagsForResourcesCommandInput}
 * @returns {@link ListTagsForResourcesCommandOutput}
 * @see {@link ListTagsForResourcesCommandInput} for command's `input` shape.
 * @see {@link ListTagsForResourcesCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>The input is not valid.</p>
 *
 * @throws {@link NoSuchHealthCheck} (client fault)
 *  <p>No health check exists with the specified ID.</p>
 *
 * @throws {@link NoSuchHostedZone} (client fault)
 *  <p>No hosted zone exists with the ID that you specified.</p>
 *
 * @throws {@link PriorRequestNotComplete} (client fault)
 *  <p>If Amazon Route 53 can't process a request before the next request arrives, it will
 * 			reject subsequent requests for the same hosted zone and return an <code>HTTP 400
 * 				error</code> (<code>Bad request</code>). If Route 53 returns this error repeatedly
 * 			for the same request, we recommend that you wait, in intervals of increasing duration,
 * 			before you try the request again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded.</p>
 *
 * @throws {@link Route53ServiceException}
 * <p>Base exception class for all service exceptions from Route53 service.</p>
 *
 *
 * @public
 */
export class ListTagsForResourcesCommand extends $Command
  .classBuilder<
    ListTagsForResourcesCommandInput,
    ListTagsForResourcesCommandOutput,
    Route53ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSDnsV20130401", "ListTagsForResources", {})
  .n("Route53Client", "ListTagsForResourcesCommand")
  .sc(ListTagsForResources)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTagsForResourcesRequest;
      output: ListTagsForResourcesResponse;
    };
    sdk: {
      input: ListTagsForResourcesCommandInput;
      output: ListTagsForResourcesCommandOutput;
    };
  };
}
