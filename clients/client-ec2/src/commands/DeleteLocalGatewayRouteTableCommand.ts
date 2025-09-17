// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteLocalGatewayRouteTableRequest, DeleteLocalGatewayRouteTableResult } from "../models/models_3";
import { de_DeleteLocalGatewayRouteTableCommand, se_DeleteLocalGatewayRouteTableCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteLocalGatewayRouteTableCommand}.
 */
export interface DeleteLocalGatewayRouteTableCommandInput extends DeleteLocalGatewayRouteTableRequest {}
/**
 * @public
 *
 * The output of {@link DeleteLocalGatewayRouteTableCommand}.
 */
export interface DeleteLocalGatewayRouteTableCommandOutput
  extends DeleteLocalGatewayRouteTableResult,
    __MetadataBearer {}

/**
 * <p>
 *       Deletes a local gateway route table.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteLocalGatewayRouteTableCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteLocalGatewayRouteTableCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DeleteLocalGatewayRouteTableRequest
 *   LocalGatewayRouteTableId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new DeleteLocalGatewayRouteTableCommand(input);
 * const response = await client.send(command);
 * // { // DeleteLocalGatewayRouteTableResult
 * //   LocalGatewayRouteTable: { // LocalGatewayRouteTable
 * //     LocalGatewayRouteTableId: "STRING_VALUE",
 * //     LocalGatewayRouteTableArn: "STRING_VALUE",
 * //     LocalGatewayId: "STRING_VALUE",
 * //     OutpostArn: "STRING_VALUE",
 * //     OwnerId: "STRING_VALUE",
 * //     State: "STRING_VALUE",
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     Mode: "direct-vpc-routing" || "coip",
 * //     StateReason: { // StateReason
 * //       Code: "STRING_VALUE",
 * //       Message: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteLocalGatewayRouteTableCommandInput - {@link DeleteLocalGatewayRouteTableCommandInput}
 * @returns {@link DeleteLocalGatewayRouteTableCommandOutput}
 * @see {@link DeleteLocalGatewayRouteTableCommandInput} for command's `input` shape.
 * @see {@link DeleteLocalGatewayRouteTableCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DeleteLocalGatewayRouteTableCommand extends $Command
  .classBuilder<
    DeleteLocalGatewayRouteTableCommandInput,
    DeleteLocalGatewayRouteTableCommandOutput,
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
  .s("AmazonEC2", "DeleteLocalGatewayRouteTable", {})
  .n("EC2Client", "DeleteLocalGatewayRouteTableCommand")
  .f(void 0, void 0)
  .ser(se_DeleteLocalGatewayRouteTableCommand)
  .de(de_DeleteLocalGatewayRouteTableCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteLocalGatewayRouteTableRequest;
      output: DeleteLocalGatewayRouteTableResult;
    };
    sdk: {
      input: DeleteLocalGatewayRouteTableCommandInput;
      output: DeleteLocalGatewayRouteTableCommandOutput;
    };
  };
}
