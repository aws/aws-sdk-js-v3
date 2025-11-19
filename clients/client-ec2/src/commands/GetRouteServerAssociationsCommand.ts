// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetRouteServerAssociationsRequest, GetRouteServerAssociationsResult } from "../models/models_6";
import { GetRouteServerAssociations } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetRouteServerAssociationsCommand}.
 */
export interface GetRouteServerAssociationsCommandInput extends GetRouteServerAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link GetRouteServerAssociationsCommand}.
 */
export interface GetRouteServerAssociationsCommandOutput extends GetRouteServerAssociationsResult, __MetadataBearer {}

/**
 * <p>Gets information about the associations for the specified route server.</p>
 *          <p>A route server association is the connection established between a route server and a VPC.</p>
 *          <p>For more information see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/dynamic-routing-route-server.html">Dynamic routing in your VPC with VPC Route Server</a> in the <i>Amazon VPC User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetRouteServerAssociationsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetRouteServerAssociationsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // GetRouteServerAssociationsRequest
 *   RouteServerId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new GetRouteServerAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // GetRouteServerAssociationsResult
 * //   RouteServerAssociations: [ // RouteServerAssociationsList
 * //     { // RouteServerAssociation
 * //       RouteServerId: "STRING_VALUE",
 * //       VpcId: "STRING_VALUE",
 * //       State: "associating" || "associated" || "disassociating",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetRouteServerAssociationsCommandInput - {@link GetRouteServerAssociationsCommandInput}
 * @returns {@link GetRouteServerAssociationsCommandOutput}
 * @see {@link GetRouteServerAssociationsCommandInput} for command's `input` shape.
 * @see {@link GetRouteServerAssociationsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class GetRouteServerAssociationsCommand extends $Command
  .classBuilder<
    GetRouteServerAssociationsCommandInput,
    GetRouteServerAssociationsCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "GetRouteServerAssociations", {})
  .n("EC2Client", "GetRouteServerAssociationsCommand")
  .sc(GetRouteServerAssociations)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRouteServerAssociationsRequest;
      output: GetRouteServerAssociationsResult;
    };
    sdk: {
      input: GetRouteServerAssociationsCommandInput;
      output: GetRouteServerAssociationsCommandOutput;
    };
  };
}
