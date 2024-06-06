// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConnectClient";
import { UpdateGatewayInstanceRequest, UpdateGatewayInstanceResponse } from "../models/models_0";
import { de_UpdateGatewayInstanceCommand, se_UpdateGatewayInstanceCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateGatewayInstanceCommand}.
 */
export interface UpdateGatewayInstanceCommandInput extends UpdateGatewayInstanceRequest {}
/**
 * @public
 *
 * The output of {@link UpdateGatewayInstanceCommand}.
 */
export interface UpdateGatewayInstanceCommandOutput extends UpdateGatewayInstanceResponse, __MetadataBearer {}

/**
 * Updates the configuration of an existing Gateway Instance.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, UpdateGatewayInstanceCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, UpdateGatewayInstanceCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * const client = new MediaConnectClient(config);
 * const input = { // UpdateGatewayInstanceRequest
 *   BridgePlacement: "AVAILABLE" || "LOCKED",
 *   GatewayInstanceArn: "STRING_VALUE", // required
 * };
 * const command = new UpdateGatewayInstanceCommand(input);
 * const response = await client.send(command);
 * // { // UpdateGatewayInstanceResponse
 * //   BridgePlacement: "AVAILABLE" || "LOCKED",
 * //   GatewayInstanceArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateGatewayInstanceCommandInput - {@link UpdateGatewayInstanceCommandInput}
 * @returns {@link UpdateGatewayInstanceCommandOutput}
 * @see {@link UpdateGatewayInstanceCommandInput} for command's `input` shape.
 * @see {@link UpdateGatewayInstanceCommandOutput} for command's `response` shape.
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
export class UpdateGatewayInstanceCommand extends $Command
  .classBuilder<
    UpdateGatewayInstanceCommandInput,
    UpdateGatewayInstanceCommandOutput,
    MediaConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: MediaConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MediaConnect", "UpdateGatewayInstance", {})
  .n("MediaConnectClient", "UpdateGatewayInstanceCommand")
  .f(void 0, void 0)
  .ser(se_UpdateGatewayInstanceCommand)
  .de(de_UpdateGatewayInstanceCommand)
  .build() {}
