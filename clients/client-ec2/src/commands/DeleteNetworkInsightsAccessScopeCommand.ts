// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteNetworkInsightsAccessScopeRequest, DeleteNetworkInsightsAccessScopeResult } from "../models/models_3";
import {
  de_DeleteNetworkInsightsAccessScopeCommand,
  se_DeleteNetworkInsightsAccessScopeCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteNetworkInsightsAccessScopeCommand}.
 */
export interface DeleteNetworkInsightsAccessScopeCommandInput extends DeleteNetworkInsightsAccessScopeRequest {}
/**
 * @public
 *
 * The output of {@link DeleteNetworkInsightsAccessScopeCommand}.
 */
export interface DeleteNetworkInsightsAccessScopeCommandOutput
  extends DeleteNetworkInsightsAccessScopeResult,
    __MetadataBearer {}

/**
 * <p>Deletes the specified Network Access Scope.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteNetworkInsightsAccessScopeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteNetworkInsightsAccessScopeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DeleteNetworkInsightsAccessScopeRequest
 *   DryRun: true || false,
 *   NetworkInsightsAccessScopeId: "STRING_VALUE", // required
 * };
 * const command = new DeleteNetworkInsightsAccessScopeCommand(input);
 * const response = await client.send(command);
 * // { // DeleteNetworkInsightsAccessScopeResult
 * //   NetworkInsightsAccessScopeId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteNetworkInsightsAccessScopeCommandInput - {@link DeleteNetworkInsightsAccessScopeCommandInput}
 * @returns {@link DeleteNetworkInsightsAccessScopeCommandOutput}
 * @see {@link DeleteNetworkInsightsAccessScopeCommandInput} for command's `input` shape.
 * @see {@link DeleteNetworkInsightsAccessScopeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DeleteNetworkInsightsAccessScopeCommand extends $Command
  .classBuilder<
    DeleteNetworkInsightsAccessScopeCommandInput,
    DeleteNetworkInsightsAccessScopeCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2", "DeleteNetworkInsightsAccessScope", {})
  .n("EC2Client", "DeleteNetworkInsightsAccessScopeCommand")
  .f(void 0, void 0)
  .ser(se_DeleteNetworkInsightsAccessScopeCommand)
  .de(de_DeleteNetworkInsightsAccessScopeCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteNetworkInsightsAccessScopeRequest;
      output: DeleteNetworkInsightsAccessScopeResult;
    };
    sdk: {
      input: DeleteNetworkInsightsAccessScopeCommandInput;
      output: DeleteNetworkInsightsAccessScopeCommandOutput;
    };
  };
}
