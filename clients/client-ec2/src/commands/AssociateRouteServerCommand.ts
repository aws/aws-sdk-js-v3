// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { AssociateRouteServerRequest, AssociateRouteServerResult } from "../models/models_0";
import { de_AssociateRouteServerCommand, se_AssociateRouteServerCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateRouteServerCommand}.
 */
export interface AssociateRouteServerCommandInput extends AssociateRouteServerRequest {}
/**
 * @public
 *
 * The output of {@link AssociateRouteServerCommand}.
 */
export interface AssociateRouteServerCommandOutput extends AssociateRouteServerResult, __MetadataBearer {}

/**
 * <p>Associates a route server with a VPC to enable dynamic route updates.</p>
 *          <p>A route server association is the connection established between a route server and a VPC.</p>
 *          <p>For more information see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/dynamic-routing-route-server.html">Dynamic routing in your VPC with VPC Route Server</a> in the <i>Amazon VPC User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AssociateRouteServerCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AssociateRouteServerCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // AssociateRouteServerRequest
 *   RouteServerId: "STRING_VALUE", // required
 *   VpcId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new AssociateRouteServerCommand(input);
 * const response = await client.send(command);
 * // { // AssociateRouteServerResult
 * //   RouteServerAssociation: { // RouteServerAssociation
 * //     RouteServerId: "STRING_VALUE",
 * //     VpcId: "STRING_VALUE",
 * //     State: "associating" || "associated" || "disassociating",
 * //   },
 * // };
 *
 * ```
 *
 * @param AssociateRouteServerCommandInput - {@link AssociateRouteServerCommandInput}
 * @returns {@link AssociateRouteServerCommandOutput}
 * @see {@link AssociateRouteServerCommandInput} for command's `input` shape.
 * @see {@link AssociateRouteServerCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class AssociateRouteServerCommand extends $Command
  .classBuilder<
    AssociateRouteServerCommandInput,
    AssociateRouteServerCommandOutput,
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
  .s("AmazonEC2", "AssociateRouteServer", {})
  .n("EC2Client", "AssociateRouteServerCommand")
  .f(void 0, void 0)
  .ser(se_AssociateRouteServerCommand)
  .de(de_AssociateRouteServerCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateRouteServerRequest;
      output: AssociateRouteServerResult;
    };
    sdk: {
      input: AssociateRouteServerCommandInput;
      output: AssociateRouteServerCommandOutput;
    };
  };
}
