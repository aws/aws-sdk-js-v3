// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteClientVpnRouteRequest, DeleteClientVpnRouteResult } from "../models/models_3";
import { de_DeleteClientVpnRouteCommand, se_DeleteClientVpnRouteCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteClientVpnRouteCommand}.
 */
export interface DeleteClientVpnRouteCommandInput extends DeleteClientVpnRouteRequest {}
/**
 * @public
 *
 * The output of {@link DeleteClientVpnRouteCommand}.
 */
export interface DeleteClientVpnRouteCommandOutput extends DeleteClientVpnRouteResult, __MetadataBearer {}

/**
 * <p>Deletes a route from a Client VPN endpoint. You can only delete routes that you manually added using
 * 			the <b>CreateClientVpnRoute</b> action. You cannot delete routes that were
 * 			automatically added when associating a subnet. To remove routes that have been automatically added,
 * 			disassociate the target subnet from the Client VPN endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteClientVpnRouteCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteClientVpnRouteCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new EC2Client(config);
 * const input = { // DeleteClientVpnRouteRequest
 *   ClientVpnEndpointId: "STRING_VALUE", // required
 *   TargetVpcSubnetId: "STRING_VALUE",
 *   DestinationCidrBlock: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new DeleteClientVpnRouteCommand(input);
 * const response = await client.send(command);
 * // { // DeleteClientVpnRouteResult
 * //   Status: { // ClientVpnRouteStatus
 * //     Code: "creating" || "active" || "failed" || "deleting",
 * //     Message: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteClientVpnRouteCommandInput - {@link DeleteClientVpnRouteCommandInput}
 * @returns {@link DeleteClientVpnRouteCommandOutput}
 * @see {@link DeleteClientVpnRouteCommandInput} for command's `input` shape.
 * @see {@link DeleteClientVpnRouteCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class DeleteClientVpnRouteCommand extends $Command
  .classBuilder<
    DeleteClientVpnRouteCommandInput,
    DeleteClientVpnRouteCommandOutput,
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
  .s("AmazonEC2", "DeleteClientVpnRoute", {})
  .n("EC2Client", "DeleteClientVpnRouteCommand")
  .f(void 0, void 0)
  .ser(se_DeleteClientVpnRouteCommand)
  .de(de_DeleteClientVpnRouteCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteClientVpnRouteRequest;
      output: DeleteClientVpnRouteResult;
    };
    sdk: {
      input: DeleteClientVpnRouteCommandInput;
      output: DeleteClientVpnRouteCommandOutput;
    };
  };
}
