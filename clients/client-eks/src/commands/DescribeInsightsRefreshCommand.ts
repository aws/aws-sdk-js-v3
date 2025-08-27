// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeInsightsRefreshRequest, DescribeInsightsRefreshResponse } from "../models/models_0";
import { de_DescribeInsightsRefreshCommand, se_DescribeInsightsRefreshCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeInsightsRefreshCommand}.
 */
export interface DescribeInsightsRefreshCommandInput extends DescribeInsightsRefreshRequest {}
/**
 * @public
 *
 * The output of {@link DescribeInsightsRefreshCommand}.
 */
export interface DescribeInsightsRefreshCommandOutput extends DescribeInsightsRefreshResponse, __MetadataBearer {}

/**
 * <p>Returns the status of the latest on-demand cluster insights refresh operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, DescribeInsightsRefreshCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, DescribeInsightsRefreshCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const input = { // DescribeInsightsRefreshRequest
 *   clusterName: "STRING_VALUE", // required
 * };
 * const command = new DescribeInsightsRefreshCommand(input);
 * const response = await client.send(command);
 * // { // DescribeInsightsRefreshResponse
 * //   message: "STRING_VALUE",
 * //   status: "IN_PROGRESS" || "FAILED" || "COMPLETED",
 * //   startedAt: new Date("TIMESTAMP"),
 * //   endedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param DescribeInsightsRefreshCommandInput - {@link DescribeInsightsRefreshCommandInput}
 * @returns {@link DescribeInsightsRefreshCommandOutput}
 * @see {@link DescribeInsightsRefreshCommandInput} for command's `input` shape.
 * @see {@link DescribeInsightsRefreshCommandOutput} for command's `response` shape.
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
export class DescribeInsightsRefreshCommand extends $Command
  .classBuilder<
    DescribeInsightsRefreshCommandInput,
    DescribeInsightsRefreshCommandOutput,
    EKSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EKSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSWesleyFrontend", "DescribeInsightsRefresh", {})
  .n("EKSClient", "DescribeInsightsRefreshCommand")
  .f(void 0, void 0)
  .ser(se_DescribeInsightsRefreshCommand)
  .de(de_DescribeInsightsRefreshCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeInsightsRefreshRequest;
      output: DescribeInsightsRefreshResponse;
    };
    sdk: {
      input: DescribeInsightsRefreshCommandInput;
      output: DescribeInsightsRefreshCommandOutput;
    };
  };
}
