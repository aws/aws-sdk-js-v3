// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConnectClient";
import { DeregisterGatewayInstanceRequest, DeregisterGatewayInstanceResponse } from "../models/models_0";
import { de_DeregisterGatewayInstanceCommand, se_DeregisterGatewayInstanceCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeregisterGatewayInstanceCommand}.
 */
export interface DeregisterGatewayInstanceCommandInput extends DeregisterGatewayInstanceRequest {}
/**
 * @public
 *
 * The output of {@link DeregisterGatewayInstanceCommand}.
 */
export interface DeregisterGatewayInstanceCommandOutput extends DeregisterGatewayInstanceResponse, __MetadataBearer {}

/**
 * Deregisters an instance. Before you deregister an instance, all bridges running on the instance must be stopped. If you want to deregister an instance without stopping the bridges, you must use the --force option.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, DeregisterGatewayInstanceCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, DeregisterGatewayInstanceCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new MediaConnectClient(config);
 * const input = { // DeregisterGatewayInstanceRequest
 *   Force: true || false,
 *   GatewayInstanceArn: "STRING_VALUE", // required
 * };
 * const command = new DeregisterGatewayInstanceCommand(input);
 * const response = await client.send(command);
 * // { // DeregisterGatewayInstanceResponse
 * //   GatewayInstanceArn: "STRING_VALUE",
 * //   InstanceState: "REGISTERING" || "ACTIVE" || "DEREGISTERING" || "DEREGISTERED" || "REGISTRATION_ERROR" || "DEREGISTRATION_ERROR",
 * // };
 *
 * ```
 *
 * @param DeregisterGatewayInstanceCommandInput - {@link DeregisterGatewayInstanceCommandInput}
 * @returns {@link DeregisterGatewayInstanceCommandOutput}
 * @see {@link DeregisterGatewayInstanceCommandInput} for command's `input` shape.
 * @see {@link DeregisterGatewayInstanceCommandOutput} for command's `response` shape.
 * @see {@link MediaConnectClientResolvedConfig | config} for MediaConnectClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 *
 * @throws {@link ConflictException} (client fault)
 *  Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 *
 * @throws {@link ForbiddenException} (client fault)
 *  Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 *
 * @throws {@link NotFoundException} (client fault)
 *  Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 *
 * @throws {@link MediaConnectServiceException}
 * <p>Base exception class for all service exceptions from MediaConnect service.</p>
 *
 * @public
 */
export class DeregisterGatewayInstanceCommand extends $Command
  .classBuilder<
    DeregisterGatewayInstanceCommandInput,
    DeregisterGatewayInstanceCommandOutput,
    MediaConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MediaConnect", "DeregisterGatewayInstance", {})
  .n("MediaConnectClient", "DeregisterGatewayInstanceCommand")
  .f(void 0, void 0)
  .ser(se_DeregisterGatewayInstanceCommand)
  .de(de_DeregisterGatewayInstanceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeregisterGatewayInstanceRequest;
      output: DeregisterGatewayInstanceResponse;
    };
    sdk: {
      input: DeregisterGatewayInstanceCommandInput;
      output: DeregisterGatewayInstanceCommandOutput;
    };
  };
}
