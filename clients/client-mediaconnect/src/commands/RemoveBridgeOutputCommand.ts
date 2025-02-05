// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConnectClient";
import { RemoveBridgeOutputRequest, RemoveBridgeOutputResponse } from "../models/models_0";
import { de_RemoveBridgeOutputCommand, se_RemoveBridgeOutputCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RemoveBridgeOutputCommand}.
 */
export interface RemoveBridgeOutputCommandInput extends RemoveBridgeOutputRequest {}
/**
 * @public
 *
 * The output of {@link RemoveBridgeOutputCommand}.
 */
export interface RemoveBridgeOutputCommandOutput extends RemoveBridgeOutputResponse, __MetadataBearer {}

/**
 * Removes an output from a bridge.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, RemoveBridgeOutputCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, RemoveBridgeOutputCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new MediaConnectClient(config);
 * const input = { // RemoveBridgeOutputRequest
 *   BridgeArn: "STRING_VALUE", // required
 *   OutputName: "STRING_VALUE", // required
 * };
 * const command = new RemoveBridgeOutputCommand(input);
 * const response = await client.send(command);
 * // { // RemoveBridgeOutputResponse
 * //   BridgeArn: "STRING_VALUE",
 * //   OutputName: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RemoveBridgeOutputCommandInput - {@link RemoveBridgeOutputCommandInput}
 * @returns {@link RemoveBridgeOutputCommandOutput}
 * @see {@link RemoveBridgeOutputCommandInput} for command's `input` shape.
 * @see {@link RemoveBridgeOutputCommandOutput} for command's `response` shape.
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
export class RemoveBridgeOutputCommand extends $Command
  .classBuilder<
    RemoveBridgeOutputCommandInput,
    RemoveBridgeOutputCommandOutput,
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
  .s("MediaConnect", "RemoveBridgeOutput", {})
  .n("MediaConnectClient", "RemoveBridgeOutputCommand")
  .f(void 0, void 0)
  .ser(se_RemoveBridgeOutputCommand)
  .de(de_RemoveBridgeOutputCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RemoveBridgeOutputRequest;
      output: RemoveBridgeOutputResponse;
    };
    sdk: {
      input: RemoveBridgeOutputCommandInput;
      output: RemoveBridgeOutputCommandOutput;
    };
  };
}
