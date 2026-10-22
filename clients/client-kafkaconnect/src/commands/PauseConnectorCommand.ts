// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PauseConnectorRequest, PauseConnectorResponse } from "../models/models_0";
import { PauseConnector$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PauseConnectorCommand}.
 */
export interface PauseConnectorCommandInput extends PauseConnectorRequest {}
/**
 * @public
 *
 * The output of {@link PauseConnectorCommand}.
 */
export interface PauseConnectorCommandOutput extends PauseConnectorResponse, __MetadataBearer {}

/**
 * <p>Pauses the specified connector. The operation runs asynchronously. To track the pause, pass the connector operation ARN from the response to <code>DescribeConnectorOperation</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaConnectClient, PauseConnectorCommand } from "@aws-sdk/client-kafkaconnect"; // ES Modules import
 * // const { KafkaConnectClient, PauseConnectorCommand } = require("@aws-sdk/client-kafkaconnect"); // CommonJS import
 * // import type { KafkaConnectClientConfig } from "@aws-sdk/client-kafkaconnect";
 * const config = {}; // type is KafkaConnectClientConfig
 * const client = new KafkaConnectClient(config);
 * const input = { // PauseConnectorRequest
 *   connectorArn: "STRING_VALUE", // required
 * };
 * const command = new PauseConnectorCommand(input);
 * const response = await client.send(command);
 * // { // PauseConnectorResponse
 * //   connectorArn: "STRING_VALUE",
 * //   connectorOperationArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PauseConnectorCommandInput - {@link PauseConnectorCommandInput}
 * @returns {@link PauseConnectorCommandOutput}
 * @see {@link PauseConnectorCommandInput} for command's `input` shape.
 * @see {@link PauseConnectorCommandOutput} for command's `response` shape.
 * @see {@link KafkaConnectClientResolvedConfig | config} for KafkaConnectClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>HTTP Status Code 400: Bad request due to incorrect input. Correct your request and then retry it.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>HTTP Status Code 409: Conflict. A resource with this name already exists. Retry your request with another name.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>HTTP Status Code 403: Access forbidden. Correct your credentials and then retry your request.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>HTTP Status Code 500: Unexpected internal server error. Retrying your request might resolve the issue.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>HTTP Status Code 404: Resource not found due to incorrect input. Correct your request and then retry it.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>HTTP Status Code 503: Service Unavailable. Retrying your request in some time might resolve the issue.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>HTTP Status Code 429: Limit exceeded. Resource limit reached.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>HTTP Status Code 401: Unauthorized request. The provided credentials couldn't be validated.</p>
 *
 * @throws {@link KafkaConnectServiceException}
 * <p>Base exception class for all service exceptions from KafkaConnect service.</p>
 *
 *
 * @public
 */
export class PauseConnectorCommand extends command<PauseConnectorCommandInput, PauseConnectorCommandOutput>(
  _ep0,
  _mw0,
  "PauseConnector",
  PauseConnector$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PauseConnectorRequest;
      output: PauseConnectorResponse;
    };
    sdk: {
      input: PauseConnectorCommandInput;
      output: PauseConnectorCommandOutput;
    };
  };
}
