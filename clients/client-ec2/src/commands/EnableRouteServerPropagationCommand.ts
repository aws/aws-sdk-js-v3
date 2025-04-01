// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { EnableRouteServerPropagationRequest, EnableRouteServerPropagationResult } from "../models/models_6";
import { de_EnableRouteServerPropagationCommand, se_EnableRouteServerPropagationCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link EnableRouteServerPropagationCommand}.
 */
export interface EnableRouteServerPropagationCommandInput extends EnableRouteServerPropagationRequest {}
/**
 * @public
 *
 * The output of {@link EnableRouteServerPropagationCommand}.
 */
export interface EnableRouteServerPropagationCommandOutput
  extends EnableRouteServerPropagationResult,
    __MetadataBearer {}

/**
 * <p>Defines which route tables the route server can update with routes.</p>
 *          <p>When enabled, route server propagation installs the routes in the FIB on the route table you've specified. Route server supports IPv4 and IPv6 route propagation.</p>
 *          <p>For more information see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Dynamic routing in your VPC with VPC Route Server</a> in the <i>Amazon VPC User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, EnableRouteServerPropagationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, EnableRouteServerPropagationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // EnableRouteServerPropagationRequest
 *   RouteServerId: "STRING_VALUE", // required
 *   RouteTableId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new EnableRouteServerPropagationCommand(input);
 * const response = await client.send(command);
 * // { // EnableRouteServerPropagationResult
 * //   RouteServerPropagation: { // RouteServerPropagation
 * //     RouteServerId: "STRING_VALUE",
 * //     RouteTableId: "STRING_VALUE",
 * //     State: "pending" || "available" || "deleting",
 * //   },
 * // };
 *
 * ```
 *
 * @param EnableRouteServerPropagationCommandInput - {@link EnableRouteServerPropagationCommandInput}
 * @returns {@link EnableRouteServerPropagationCommandOutput}
 * @see {@link EnableRouteServerPropagationCommandInput} for command's `input` shape.
 * @see {@link EnableRouteServerPropagationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class EnableRouteServerPropagationCommand extends $Command
  .classBuilder<
    EnableRouteServerPropagationCommandInput,
    EnableRouteServerPropagationCommandOutput,
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
  .s("AmazonEC2", "EnableRouteServerPropagation", {})
  .n("EC2Client", "EnableRouteServerPropagationCommand")
  .f(void 0, void 0)
  .ser(se_EnableRouteServerPropagationCommand)
  .de(de_EnableRouteServerPropagationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: EnableRouteServerPropagationRequest;
      output: EnableRouteServerPropagationResult;
    };
    sdk: {
      input: EnableRouteServerPropagationCommandInput;
      output: EnableRouteServerPropagationCommandOutput;
    };
  };
}
