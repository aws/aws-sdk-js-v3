// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConnectClient";
import { RemoveBridgeSourceRequest, RemoveBridgeSourceResponse } from "../models/models_0";
import { de_RemoveBridgeSourceCommand, se_RemoveBridgeSourceCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RemoveBridgeSourceCommand}.
 */
export interface RemoveBridgeSourceCommandInput extends RemoveBridgeSourceRequest {}
/**
 * @public
 *
 * The output of {@link RemoveBridgeSourceCommand}.
 */
export interface RemoveBridgeSourceCommandOutput extends RemoveBridgeSourceResponse, __MetadataBearer {}

/**
 * Removes a source from a bridge.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, RemoveBridgeSourceCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, RemoveBridgeSourceCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new MediaConnectClient(config);
 * const input = { // RemoveBridgeSourceRequest
 *   BridgeArn: "STRING_VALUE", // required
 *   SourceName: "STRING_VALUE", // required
 * };
 * const command = new RemoveBridgeSourceCommand(input);
 * const response = await client.send(command);
 * // { // RemoveBridgeSourceResponse
 * //   BridgeArn: "STRING_VALUE",
 * //   SourceName: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RemoveBridgeSourceCommandInput - {@link RemoveBridgeSourceCommandInput}
 * @returns {@link RemoveBridgeSourceCommandOutput}
 * @see {@link RemoveBridgeSourceCommandInput} for command's `input` shape.
 * @see {@link RemoveBridgeSourceCommandOutput} for command's `response` shape.
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
export class RemoveBridgeSourceCommand extends $Command
  .classBuilder<
    RemoveBridgeSourceCommandInput,
    RemoveBridgeSourceCommandOutput,
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
  .s("MediaConnect", "RemoveBridgeSource", {})
  .n("MediaConnectClient", "RemoveBridgeSourceCommand")
  .f(void 0, void 0)
  .ser(se_RemoveBridgeSourceCommand)
  .de(de_RemoveBridgeSourceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RemoveBridgeSourceRequest;
      output: RemoveBridgeSourceResponse;
    };
    sdk: {
      input: RemoveBridgeSourceCommandInput;
      output: RemoveBridgeSourceCommandOutput;
    };
  };
}
