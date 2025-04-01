// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DisassociateRouteServerRequest, DisassociateRouteServerResult } from "../models/models_6";
import { de_DisassociateRouteServerCommand, se_DisassociateRouteServerCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateRouteServerCommand}.
 */
export interface DisassociateRouteServerCommandInput extends DisassociateRouteServerRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateRouteServerCommand}.
 */
export interface DisassociateRouteServerCommandOutput extends DisassociateRouteServerResult, __MetadataBearer {}

/**
 * <p>Disassociates a route server from a VPC.</p>
 *          <p>A route server association is the connection established between a route server and a VPC. This is a fundamental configuration step that enables the route server to work with appliances in your VPC.</p>
 *          <p>For more information see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Dynamic routing in your VPC with VPC Route Server</a> in the <i>Amazon VPC User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DisassociateRouteServerCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DisassociateRouteServerCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DisassociateRouteServerRequest
 *   RouteServerId: "STRING_VALUE", // required
 *   VpcId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new DisassociateRouteServerCommand(input);
 * const response = await client.send(command);
 * // { // DisassociateRouteServerResult
 * //   RouteServerAssociation: { // RouteServerAssociation
 * //     RouteServerId: "STRING_VALUE",
 * //     VpcId: "STRING_VALUE",
 * //     State: "associating" || "associated" || "disassociating",
 * //   },
 * // };
 *
 * ```
 *
 * @param DisassociateRouteServerCommandInput - {@link DisassociateRouteServerCommandInput}
 * @returns {@link DisassociateRouteServerCommandOutput}
 * @see {@link DisassociateRouteServerCommandInput} for command's `input` shape.
 * @see {@link DisassociateRouteServerCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DisassociateRouteServerCommand extends $Command
  .classBuilder<
    DisassociateRouteServerCommandInput,
    DisassociateRouteServerCommandOutput,
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
  .s("AmazonEC2", "DisassociateRouteServer", {})
  .n("EC2Client", "DisassociateRouteServerCommand")
  .f(void 0, void 0)
  .ser(se_DisassociateRouteServerCommand)
  .de(de_DisassociateRouteServerCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateRouteServerRequest;
      output: DisassociateRouteServerResult;
    };
    sdk: {
      input: DisassociateRouteServerCommandInput;
      output: DisassociateRouteServerCommandOutput;
    };
  };
}
