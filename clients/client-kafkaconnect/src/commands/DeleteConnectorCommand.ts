// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { KafkaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaConnectClient";
import type { DeleteConnectorRequest, DeleteConnectorResponse } from "../models/models_0";
import { DeleteConnector } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteConnectorCommand}.
 */
export interface DeleteConnectorCommandInput extends DeleteConnectorRequest {}
/**
 * @public
 *
 * The output of {@link DeleteConnectorCommand}.
 */
export interface DeleteConnectorCommandOutput extends DeleteConnectorResponse, __MetadataBearer {}

/**
 * <p>Deletes the specified connector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaConnectClient, DeleteConnectorCommand } from "@aws-sdk/client-kafkaconnect"; // ES Modules import
 * // const { KafkaConnectClient, DeleteConnectorCommand } = require("@aws-sdk/client-kafkaconnect"); // CommonJS import
 * // import type { KafkaConnectClientConfig } from "@aws-sdk/client-kafkaconnect";
 * const config = {}; // type is KafkaConnectClientConfig
 * const client = new KafkaConnectClient(config);
 * const input = { // DeleteConnectorRequest
 *   connectorArn: "STRING_VALUE", // required
 *   currentVersion: "STRING_VALUE",
 * };
 * const command = new DeleteConnectorCommand(input);
 * const response = await client.send(command);
 * // { // DeleteConnectorResponse
 * //   connectorArn: "STRING_VALUE",
 * //   connectorState: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteConnectorCommandInput - {@link DeleteConnectorCommandInput}
 * @returns {@link DeleteConnectorCommandOutput}
 * @see {@link DeleteConnectorCommandInput} for command's `input` shape.
 * @see {@link DeleteConnectorCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class DeleteConnectorCommand extends $Command
  .classBuilder<
    DeleteConnectorCommandInput,
    DeleteConnectorCommandOutput,
    KafkaConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: KafkaConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("KafkaConnect", "DeleteConnector", {})
  .n("KafkaConnectClient", "DeleteConnectorCommand")
  .sc(DeleteConnector)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteConnectorRequest;
      output: DeleteConnectorResponse;
    };
    sdk: {
      input: DeleteConnectorCommandInput;
      output: DeleteConnectorCommandOutput;
    };
  };
}
