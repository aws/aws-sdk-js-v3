// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteNetworkInsightsPathRequest, DeleteNetworkInsightsPathResult } from "../models/models_2";
import { DeleteNetworkInsightsPath } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteNetworkInsightsPathCommand}.
 */
export interface DeleteNetworkInsightsPathCommandInput extends DeleteNetworkInsightsPathRequest {}
/**
 * @public
 *
 * The output of {@link DeleteNetworkInsightsPathCommand}.
 */
export interface DeleteNetworkInsightsPathCommandOutput extends DeleteNetworkInsightsPathResult, __MetadataBearer {}

/**
 * <p>Deletes the specified path.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteNetworkInsightsPathCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteNetworkInsightsPathCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DeleteNetworkInsightsPathRequest
 *   DryRun: true || false,
 *   NetworkInsightsPathId: "STRING_VALUE", // required
 * };
 * const command = new DeleteNetworkInsightsPathCommand(input);
 * const response = await client.send(command);
 * // { // DeleteNetworkInsightsPathResult
 * //   NetworkInsightsPathId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteNetworkInsightsPathCommandInput - {@link DeleteNetworkInsightsPathCommandInput}
 * @returns {@link DeleteNetworkInsightsPathCommandOutput}
 * @see {@link DeleteNetworkInsightsPathCommandInput} for command's `input` shape.
 * @see {@link DeleteNetworkInsightsPathCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DeleteNetworkInsightsPathCommand extends $Command
  .classBuilder<
    DeleteNetworkInsightsPathCommandInput,
    DeleteNetworkInsightsPathCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DeleteNetworkInsightsPath", {})
  .n("EC2Client", "DeleteNetworkInsightsPathCommand")
  .sc(DeleteNetworkInsightsPath)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteNetworkInsightsPathRequest;
      output: DeleteNetworkInsightsPathResult;
    };
    sdk: {
      input: DeleteNetworkInsightsPathCommandInput;
      output: DeleteNetworkInsightsPathCommandOutput;
    };
  };
}
