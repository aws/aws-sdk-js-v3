// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { StartInsightsRefreshRequest, StartInsightsRefreshResponse } from "../models/models_0";
import { StartInsightsRefresh$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartInsightsRefreshCommand}.
 */
export interface StartInsightsRefreshCommandInput extends StartInsightsRefreshRequest {}
/**
 * @public
 *
 * The output of {@link StartInsightsRefreshCommand}.
 */
export interface StartInsightsRefreshCommandOutput extends StartInsightsRefreshResponse, __MetadataBearer {}

/**
 * <p>Initiates an on-demand refresh operation for cluster insights, getting the latest analysis outside of the standard refresh schedule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, StartInsightsRefreshCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, StartInsightsRefreshCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * // import type { EKSClientConfig } from "@aws-sdk/client-eks";
 * const config = {}; // type is EKSClientConfig
 * const client = new EKSClient(config);
 * const input = { // StartInsightsRefreshRequest
 *   clusterName: "STRING_VALUE", // required
 * };
 * const command = new StartInsightsRefreshCommand(input);
 * const response = await client.send(command);
 * // { // StartInsightsRefreshResponse
 * //   message: "STRING_VALUE",
 * //   status: "IN_PROGRESS" || "FAILED" || "COMPLETED",
 * // };
 *
 * ```
 *
 * @param StartInsightsRefreshCommandInput - {@link StartInsightsRefreshCommandInput}
 * @returns {@link StartInsightsRefreshCommandOutput}
 * @see {@link StartInsightsRefreshCommandInput} for command's `input` shape.
 * @see {@link StartInsightsRefreshCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for EKSClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter is invalid. Review the available parameters for the API
 *             request.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is invalid given the state of the cluster. Check the state of the cluster
 *             and the associated operations.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found. You can view your available clusters with
 *                 <code>ListClusters</code>. You can view your available managed node groups with
 *                 <code>ListNodegroups</code>. Amazon EKS clusters and node groups are Amazon Web Services Region
 *             specific.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server-side issue.</p>
 *
 * @throws {@link EKSServiceException}
 * <p>Base exception class for all service exceptions from EKS service.</p>
 *
 *
 * @public
 */
export class StartInsightsRefreshCommand extends $Command
  .classBuilder<
    StartInsightsRefreshCommandInput,
    StartInsightsRefreshCommandOutput,
    EKSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EKSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSWesleyFrontend", "StartInsightsRefresh", {})
  .n("EKSClient", "StartInsightsRefreshCommand")
  .sc(StartInsightsRefresh$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartInsightsRefreshRequest;
      output: StartInsightsRefreshResponse;
    };
    sdk: {
      input: StartInsightsRefreshCommandInput;
      output: StartInsightsRefreshCommandOutput;
    };
  };
}
