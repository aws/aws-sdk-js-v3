// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteEgressOnlyInternetGatewayRequest, DeleteEgressOnlyInternetGatewayResult } from "../models/models_3";
import {
  de_DeleteEgressOnlyInternetGatewayCommand,
  se_DeleteEgressOnlyInternetGatewayCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteEgressOnlyInternetGatewayCommand}.
 */
export interface DeleteEgressOnlyInternetGatewayCommandInput extends DeleteEgressOnlyInternetGatewayRequest {}
/**
 * @public
 *
 * The output of {@link DeleteEgressOnlyInternetGatewayCommand}.
 */
export interface DeleteEgressOnlyInternetGatewayCommandOutput
  extends DeleteEgressOnlyInternetGatewayResult,
    __MetadataBearer {}

/**
 * <p>Deletes an egress-only internet gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteEgressOnlyInternetGatewayCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteEgressOnlyInternetGatewayCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DeleteEgressOnlyInternetGatewayRequest
 *   DryRun: true || false,
 *   EgressOnlyInternetGatewayId: "STRING_VALUE", // required
 * };
 * const command = new DeleteEgressOnlyInternetGatewayCommand(input);
 * const response = await client.send(command);
 * // { // DeleteEgressOnlyInternetGatewayResult
 * //   ReturnCode: true || false,
 * // };
 *
 * ```
 *
 * @param DeleteEgressOnlyInternetGatewayCommandInput - {@link DeleteEgressOnlyInternetGatewayCommandInput}
 * @returns {@link DeleteEgressOnlyInternetGatewayCommandOutput}
 * @see {@link DeleteEgressOnlyInternetGatewayCommandInput} for command's `input` shape.
 * @see {@link DeleteEgressOnlyInternetGatewayCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DeleteEgressOnlyInternetGatewayCommand extends $Command
  .classBuilder<
    DeleteEgressOnlyInternetGatewayCommandInput,
    DeleteEgressOnlyInternetGatewayCommandOutput,
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
  .s("AmazonEC2", "DeleteEgressOnlyInternetGateway", {})
  .n("EC2Client", "DeleteEgressOnlyInternetGatewayCommand")
  .f(void 0, void 0)
  .ser(se_DeleteEgressOnlyInternetGatewayCommand)
  .de(de_DeleteEgressOnlyInternetGatewayCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteEgressOnlyInternetGatewayRequest;
      output: DeleteEgressOnlyInternetGatewayResult;
    };
    sdk: {
      input: DeleteEgressOnlyInternetGatewayCommandInput;
      output: DeleteEgressOnlyInternetGatewayCommandOutput;
    };
  };
}
