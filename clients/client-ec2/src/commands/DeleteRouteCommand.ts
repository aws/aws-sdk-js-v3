// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteRouteRequest } from "../models/models_3";
import { DeleteRoute } from "../schemas/schemas_242_DeleteRoute";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteRouteCommand}.
 */
export interface DeleteRouteCommandInput extends DeleteRouteRequest {}
/**
 * @public
 *
 * The output of {@link DeleteRouteCommand}.
 */
export interface DeleteRouteCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the specified route from the specified route table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteRouteCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteRouteCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DeleteRouteRequest
 *   DestinationPrefixListId: "STRING_VALUE",
 *   DryRun: true || false,
 *   RouteTableId: "STRING_VALUE", // required
 *   DestinationCidrBlock: "STRING_VALUE",
 *   DestinationIpv6CidrBlock: "STRING_VALUE",
 * };
 * const command = new DeleteRouteCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteRouteCommandInput - {@link DeleteRouteCommandInput}
 * @returns {@link DeleteRouteCommandOutput}
 * @see {@link DeleteRouteCommandInput} for command's `input` shape.
 * @see {@link DeleteRouteCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @example To delete a route
 * ```javascript
 * // This example deletes the specified route from the specified route table.
 * const input = {
 *   DestinationCidrBlock: "0.0.0.0/0",
 *   RouteTableId: "rtb-22574640"
 * };
 * const command = new DeleteRouteCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteRouteCommand extends $Command
  .classBuilder<
    DeleteRouteCommandInput,
    DeleteRouteCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DeleteRoute", {})
  .n("EC2Client", "DeleteRouteCommand")
  .sc(DeleteRoute)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteRouteRequest;
      output: {};
    };
    sdk: {
      input: DeleteRouteCommandInput;
      output: DeleteRouteCommandOutput;
    };
  };
}
