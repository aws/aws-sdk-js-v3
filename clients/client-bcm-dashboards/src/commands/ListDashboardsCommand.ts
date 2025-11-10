// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BCMDashboardsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BCMDashboardsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListDashboardsRequest, ListDashboardsResponse } from "../models/models_0";
import { ListDashboards } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDashboardsCommand}.
 */
export interface ListDashboardsCommandInput extends ListDashboardsRequest {}
/**
 * @public
 *
 * The output of {@link ListDashboardsCommand}.
 */
export interface ListDashboardsCommandOutput extends ListDashboardsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of all dashboards in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BCMDashboardsClient, ListDashboardsCommand } from "@aws-sdk/client-bcm-dashboards"; // ES Modules import
 * // const { BCMDashboardsClient, ListDashboardsCommand } = require("@aws-sdk/client-bcm-dashboards"); // CommonJS import
 * // import type { BCMDashboardsClientConfig } from "@aws-sdk/client-bcm-dashboards";
 * const config = {}; // type is BCMDashboardsClientConfig
 * const client = new BCMDashboardsClient(config);
 * const input = { // ListDashboardsRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListDashboardsCommand(input);
 * const response = await client.send(command);
 * // { // ListDashboardsResponse
 * //   dashboards: [ // DashboardReferenceList // required
 * //     { // DashboardReference
 * //       arn: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       type: "CUSTOM", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDashboardsCommandInput - {@link ListDashboardsCommandInput}
 * @returns {@link ListDashboardsCommandOutput}
 * @see {@link ListDashboardsCommandInput} for command's `input` shape.
 * @see {@link ListDashboardsCommandOutput} for command's `response` shape.
 * @see {@link BCMDashboardsClientResolvedConfig | config} for BCMDashboardsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action. Verify your IAM permissions and any resource policies.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error occurred while processing the request. Retry your request. If the problem persists, contact Amazon Web Services Support.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling. Reduce the frequency of requests and use exponential backoff.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input parameters do not satisfy the requirements. Check the error message for specific validation details.</p>
 *
 * @throws {@link BCMDashboardsServiceException}
 * <p>Base exception class for all service exceptions from BCMDashboards service.</p>
 *
 *
 * @example Listing dashboards for a user
 * ```javascript
 * //
 * const input = { /* empty *\/ };
 * const command = new ListDashboardsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   dashboards: [
 *     {
 *       arn: "arn:aws:bcm-dashboards::123456789012:dashboard/abcd1234-ab12-12ab-1ab2-abcd1234efgh",
 *       createdAt: 1.753741462721E9,
 *       description: "Dashboard for tracking monthly cost",
 *       name: "monthly-cost-dashboard",
 *       type: "CUSTOM",
 *       updatedAt: 1.753741462721E9
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListDashboardsCommand extends $Command
  .classBuilder<
    ListDashboardsCommandInput,
    ListDashboardsCommandOutput,
    BCMDashboardsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BCMDashboardsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSBCMDashboardsService", "ListDashboards", {})
  .n("BCMDashboardsClient", "ListDashboardsCommand")
  .sc(ListDashboards)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDashboardsRequest;
      output: ListDashboardsResponse;
    };
    sdk: {
      input: ListDashboardsCommandInput;
      output: ListDashboardsCommandOutput;
    };
  };
}
