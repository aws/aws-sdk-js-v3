// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KafkaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaConnectClient";
import { DeleteCustomPluginRequest, DeleteCustomPluginResponse } from "../models/models_0";
import { de_DeleteCustomPluginCommand, se_DeleteCustomPluginCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteCustomPluginCommand}.
 */
export interface DeleteCustomPluginCommandInput extends DeleteCustomPluginRequest {}
/**
 * @public
 *
 * The output of {@link DeleteCustomPluginCommand}.
 */
export interface DeleteCustomPluginCommandOutput extends DeleteCustomPluginResponse, __MetadataBearer {}

/**
 * <p>Deletes a custom plugin.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaConnectClient, DeleteCustomPluginCommand } from "@aws-sdk/client-kafkaconnect"; // ES Modules import
 * // const { KafkaConnectClient, DeleteCustomPluginCommand } = require("@aws-sdk/client-kafkaconnect"); // CommonJS import
 * const client = new KafkaConnectClient(config);
 * const input = { // DeleteCustomPluginRequest
 *   customPluginArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteCustomPluginCommand(input);
 * const response = await client.send(command);
 * // { // DeleteCustomPluginResponse
 * //   customPluginArn: "STRING_VALUE",
 * //   customPluginState: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteCustomPluginCommandInput - {@link DeleteCustomPluginCommandInput}
 * @returns {@link DeleteCustomPluginCommandOutput}
 * @see {@link DeleteCustomPluginCommandInput} for command's `input` shape.
 * @see {@link DeleteCustomPluginCommandOutput} for command's `response` shape.
 * @see {@link KafkaConnectClientResolvedConfig | config} for KafkaConnectClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>HTTP Status Code 400: Bad request due to incorrect input. Correct your request and then
 *          retry it.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>HTTP Status Code 403: Access forbidden. Correct your credentials and then retry your
 *          request.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>HTTP Status Code 500: Unexpected internal server error. Retrying your request might
 *          resolve the issue.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>HTTP Status Code 404: Resource not found due to incorrect input. Correct your request
 *          and then retry it.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>HTTP Status Code 503: Service Unavailable. Retrying your request in some time might
 *          resolve the issue.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>HTTP Status Code 429: Limit exceeded. Resource limit reached.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>HTTP Status Code 401: Unauthorized request. The provided credentials couldn't be
 *          validated.</p>
 *
 * @throws {@link KafkaConnectServiceException}
 * <p>Base exception class for all service exceptions from KafkaConnect service.</p>
 *
 * @public
 */
export class DeleteCustomPluginCommand extends $Command
  .classBuilder<
    DeleteCustomPluginCommandInput,
    DeleteCustomPluginCommandOutput,
    KafkaConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: KafkaConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("KafkaConnect", "DeleteCustomPlugin", {})
  .n("KafkaConnectClient", "DeleteCustomPluginCommand")
  .f(void 0, void 0)
  .ser(se_DeleteCustomPluginCommand)
  .de(de_DeleteCustomPluginCommand)
  .build() {}
