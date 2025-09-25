// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KafkaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaConnectClient";
import { UpdateConnectorRequest, UpdateConnectorResponse } from "../models/models_0";
import { UpdateConnector } from "../schemas/schemas_1_Connector";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateConnectorCommand}.
 */
export interface UpdateConnectorCommandInput extends UpdateConnectorRequest {}
/**
 * @public
 *
 * The output of {@link UpdateConnectorCommand}.
 */
export interface UpdateConnectorCommandOutput extends UpdateConnectorResponse, __MetadataBearer {}

/**
 * <p>Updates the specified connector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaConnectClient, UpdateConnectorCommand } from "@aws-sdk/client-kafkaconnect"; // ES Modules import
 * // const { KafkaConnectClient, UpdateConnectorCommand } = require("@aws-sdk/client-kafkaconnect"); // CommonJS import
 * // import type { KafkaConnectClientConfig } from "@aws-sdk/client-kafkaconnect";
 * const config = {}; // type is KafkaConnectClientConfig
 * const client = new KafkaConnectClient(config);
 * const input = { // UpdateConnectorRequest
 *   capacity: { // CapacityUpdate
 *     autoScaling: { // AutoScalingUpdate
 *       maxWorkerCount: Number("int"), // required
 *       mcuCount: Number("int"), // required
 *       minWorkerCount: Number("int"), // required
 *       scaleInPolicy: { // ScaleInPolicyUpdate
 *         cpuUtilizationPercentage: Number("int"), // required
 *       },
 *       scaleOutPolicy: { // ScaleOutPolicyUpdate
 *         cpuUtilizationPercentage: Number("int"), // required
 *       },
 *     },
 *     provisionedCapacity: { // ProvisionedCapacityUpdate
 *       mcuCount: Number("int"), // required
 *       workerCount: Number("int"), // required
 *     },
 *   },
 *   connectorConfiguration: { // ConnectorConfigurationUpdate
 *     "<keys>": "STRING_VALUE",
 *   },
 *   connectorArn: "STRING_VALUE", // required
 *   currentVersion: "STRING_VALUE", // required
 * };
 * const command = new UpdateConnectorCommand(input);
 * const response = await client.send(command);
 * // { // UpdateConnectorResponse
 * //   connectorArn: "STRING_VALUE",
 * //   connectorState: "STRING_VALUE",
 * //   connectorOperationArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateConnectorCommandInput - {@link UpdateConnectorCommandInput}
 * @returns {@link UpdateConnectorCommandOutput}
 * @see {@link UpdateConnectorCommandInput} for command's `input` shape.
 * @see {@link UpdateConnectorCommandOutput} for command's `response` shape.
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
export class UpdateConnectorCommand extends $Command
  .classBuilder<
    UpdateConnectorCommandInput,
    UpdateConnectorCommandOutput,
    KafkaConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: KafkaConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("KafkaConnect", "UpdateConnector", {})
  .n("KafkaConnectClient", "UpdateConnectorCommand")
  .sc(UpdateConnector)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateConnectorRequest;
      output: UpdateConnectorResponse;
    };
    sdk: {
      input: UpdateConnectorCommandInput;
      output: UpdateConnectorCommandOutput;
    };
  };
}
