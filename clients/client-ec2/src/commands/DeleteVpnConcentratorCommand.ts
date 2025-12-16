// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteVpnConcentratorRequest, DeleteVpnConcentratorResult } from "../models/models_3";
import { DeleteVpnConcentrator$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteVpnConcentratorCommand}.
 */
export interface DeleteVpnConcentratorCommandInput extends DeleteVpnConcentratorRequest {}
/**
 * @public
 *
 * The output of {@link DeleteVpnConcentratorCommand}.
 */
export interface DeleteVpnConcentratorCommandOutput extends DeleteVpnConcentratorResult, __MetadataBearer {}

/**
 * <p>Deletes the specified VPN concentrator.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteVpnConcentratorCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteVpnConcentratorCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DeleteVpnConcentratorRequest
 *   VpnConcentratorId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new DeleteVpnConcentratorCommand(input);
 * const response = await client.send(command);
 * // { // DeleteVpnConcentratorResult
 * //   Return: true || false,
 * // };
 *
 * ```
 *
 * @param DeleteVpnConcentratorCommandInput - {@link DeleteVpnConcentratorCommandInput}
 * @returns {@link DeleteVpnConcentratorCommandOutput}
 * @see {@link DeleteVpnConcentratorCommandInput} for command's `input` shape.
 * @see {@link DeleteVpnConcentratorCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DeleteVpnConcentratorCommand extends $Command
  .classBuilder<
    DeleteVpnConcentratorCommandInput,
    DeleteVpnConcentratorCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DeleteVpnConcentrator", {})
  .n("EC2Client", "DeleteVpnConcentratorCommand")
  .sc(DeleteVpnConcentrator$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteVpnConcentratorRequest;
      output: DeleteVpnConcentratorResult;
    };
    sdk: {
      input: DeleteVpnConcentratorCommandInput;
      output: DeleteVpnConcentratorCommandOutput;
    };
  };
}
