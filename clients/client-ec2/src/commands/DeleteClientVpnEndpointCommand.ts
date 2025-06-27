// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteClientVpnEndpointRequest, DeleteClientVpnEndpointResult } from "../models/models_3";
import { de_DeleteClientVpnEndpointCommand, se_DeleteClientVpnEndpointCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteClientVpnEndpointCommand}.
 */
export interface DeleteClientVpnEndpointCommandInput extends DeleteClientVpnEndpointRequest {}
/**
 * @public
 *
 * The output of {@link DeleteClientVpnEndpointCommand}.
 */
export interface DeleteClientVpnEndpointCommandOutput extends DeleteClientVpnEndpointResult, __MetadataBearer {}

/**
 * <p>Deletes the specified Client VPN endpoint. You must disassociate all target networks before you
 * 			can delete a Client VPN endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteClientVpnEndpointCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteClientVpnEndpointCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DeleteClientVpnEndpointRequest
 *   ClientVpnEndpointId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new DeleteClientVpnEndpointCommand(input);
 * const response = await client.send(command);
 * // { // DeleteClientVpnEndpointResult
 * //   Status: { // ClientVpnEndpointStatus
 * //     Code: "pending-associate" || "available" || "deleting" || "deleted",
 * //     Message: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteClientVpnEndpointCommandInput - {@link DeleteClientVpnEndpointCommandInput}
 * @returns {@link DeleteClientVpnEndpointCommandOutput}
 * @see {@link DeleteClientVpnEndpointCommandInput} for command's `input` shape.
 * @see {@link DeleteClientVpnEndpointCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DeleteClientVpnEndpointCommand extends $Command
  .classBuilder<
    DeleteClientVpnEndpointCommandInput,
    DeleteClientVpnEndpointCommandOutput,
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
  .s("AmazonEC2", "DeleteClientVpnEndpoint", {})
  .n("EC2Client", "DeleteClientVpnEndpointCommand")
  .f(void 0, void 0)
  .ser(se_DeleteClientVpnEndpointCommand)
  .de(de_DeleteClientVpnEndpointCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteClientVpnEndpointRequest;
      output: DeleteClientVpnEndpointResult;
    };
    sdk: {
      input: DeleteClientVpnEndpointCommandInput;
      output: DeleteClientVpnEndpointCommandOutput;
    };
  };
}
