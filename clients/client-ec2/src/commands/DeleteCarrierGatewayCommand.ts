// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteCarrierGatewayRequest, DeleteCarrierGatewayResult } from "../models/models_2";
import { DeleteCarrierGateway } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteCarrierGatewayCommand}.
 */
export interface DeleteCarrierGatewayCommandInput extends DeleteCarrierGatewayRequest {}
/**
 * @public
 *
 * The output of {@link DeleteCarrierGatewayCommand}.
 */
export interface DeleteCarrierGatewayCommandOutput extends DeleteCarrierGatewayResult, __MetadataBearer {}

/**
 * <p>Deletes a carrier gateway.</p>
 *          <important>
 *             <p>If you do not delete the route that contains the carrier gateway as the
 *                 Target, the route is a blackhole route. For information about how to delete a route, see
 *                 <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteRoute.html">DeleteRoute</a>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteCarrierGatewayCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteCarrierGatewayCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DeleteCarrierGatewayRequest
 *   CarrierGatewayId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new DeleteCarrierGatewayCommand(input);
 * const response = await client.send(command);
 * // { // DeleteCarrierGatewayResult
 * //   CarrierGateway: { // CarrierGateway
 * //     CarrierGatewayId: "STRING_VALUE",
 * //     VpcId: "STRING_VALUE",
 * //     State: "pending" || "available" || "deleting" || "deleted",
 * //     OwnerId: "STRING_VALUE",
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteCarrierGatewayCommandInput - {@link DeleteCarrierGatewayCommandInput}
 * @returns {@link DeleteCarrierGatewayCommandOutput}
 * @see {@link DeleteCarrierGatewayCommandInput} for command's `input` shape.
 * @see {@link DeleteCarrierGatewayCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DeleteCarrierGatewayCommand extends $Command
  .classBuilder<
    DeleteCarrierGatewayCommandInput,
    DeleteCarrierGatewayCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DeleteCarrierGateway", {})
  .n("EC2Client", "DeleteCarrierGatewayCommand")
  .sc(DeleteCarrierGateway)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteCarrierGatewayRequest;
      output: DeleteCarrierGatewayResult;
    };
    sdk: {
      input: DeleteCarrierGatewayCommandInput;
      output: DeleteCarrierGatewayCommandOutput;
    };
  };
}
