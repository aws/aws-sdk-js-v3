// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteNetworkInsightsAnalysisRequest, DeleteNetworkInsightsAnalysisResult } from "../models/models_3";
import { de_DeleteNetworkInsightsAnalysisCommand, se_DeleteNetworkInsightsAnalysisCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteNetworkInsightsAnalysisCommand}.
 */
export interface DeleteNetworkInsightsAnalysisCommandInput extends DeleteNetworkInsightsAnalysisRequest {}
/**
 * @public
 *
 * The output of {@link DeleteNetworkInsightsAnalysisCommand}.
 */
export interface DeleteNetworkInsightsAnalysisCommandOutput
  extends DeleteNetworkInsightsAnalysisResult,
    __MetadataBearer {}

/**
 * <p>Deletes the specified network insights analysis.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteNetworkInsightsAnalysisCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteNetworkInsightsAnalysisCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DeleteNetworkInsightsAnalysisRequest
 *   DryRun: true || false,
 *   NetworkInsightsAnalysisId: "STRING_VALUE", // required
 * };
 * const command = new DeleteNetworkInsightsAnalysisCommand(input);
 * const response = await client.send(command);
 * // { // DeleteNetworkInsightsAnalysisResult
 * //   NetworkInsightsAnalysisId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteNetworkInsightsAnalysisCommandInput - {@link DeleteNetworkInsightsAnalysisCommandInput}
 * @returns {@link DeleteNetworkInsightsAnalysisCommandOutput}
 * @see {@link DeleteNetworkInsightsAnalysisCommandInput} for command's `input` shape.
 * @see {@link DeleteNetworkInsightsAnalysisCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class DeleteNetworkInsightsAnalysisCommand extends $Command
  .classBuilder<
    DeleteNetworkInsightsAnalysisCommandInput,
    DeleteNetworkInsightsAnalysisCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2", "DeleteNetworkInsightsAnalysis", {})
  .n("EC2Client", "DeleteNetworkInsightsAnalysisCommand")
  .f(void 0, void 0)
  .ser(se_DeleteNetworkInsightsAnalysisCommand)
  .de(de_DeleteNetworkInsightsAnalysisCommand)
  .build() {}
