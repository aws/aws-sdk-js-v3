// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RestartConnectorRequest, RestartConnectorResponse } from "../models/models_0";
import { RestartConnector$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RestartConnectorCommand}.
 */
export interface RestartConnectorCommandInput extends RestartConnectorRequest {}
/**
 * @public
 *
 * The output of {@link RestartConnectorCommand}.
 */
export interface RestartConnectorCommandOutput extends RestartConnectorResponse, __MetadataBearer {}

/**
 * <p>Restarts the specified connector. By default, this operation restarts the connector and all of its tasks. This operation is asynchronous and returns a connector operation ARN that you can pass to <code>DescribeConnectorOperation</code> to track the state of the restart.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaConnectClient, RestartConnectorCommand } from "@aws-sdk/client-kafkaconnect"; // ES Modules import
 * // const { KafkaConnectClient, RestartConnectorCommand } = require("@aws-sdk/client-kafkaconnect"); // CommonJS import
 * // import type { KafkaConnectClientConfig } from "@aws-sdk/client-kafkaconnect";
 * const config = {}; // type is KafkaConnectClientConfig
 * const client = new KafkaConnectClient(config);
 * const input = { // RestartConnectorRequest
 *   connectorArn: "STRING_VALUE", // required
 *   onlyFailedTasks: true || false,
 * };
 * const command = new RestartConnectorCommand(input);
 * const response = await client.send(command);
 * // { // RestartConnectorResponse
 * //   connectorArn: "STRING_VALUE",
 * //   connectorOperationArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RestartConnectorCommandInput - {@link RestartConnectorCommandInput}
 * @returns {@link RestartConnectorCommandOutput}
 * @see {@link RestartConnectorCommandInput} for command's `input` shape.
 * @see {@link RestartConnectorCommandOutput} for command's `response` shape.
 * @see {@link KafkaConnectClientResolvedConfig | config} for KafkaConnectClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>HTTP Status Code 400: Bad request due to incorrect input. Correct your request and then retry it.</p>
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
export class RestartConnectorCommand extends command<RestartConnectorCommandInput, RestartConnectorCommandOutput>(
  _ep0,
  _mw0,
  "RestartConnector",
  RestartConnector$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RestartConnectorRequest;
      output: RestartConnectorResponse;
    };
    sdk: {
      input: RestartConnectorCommandInput;
      output: RestartConnectorCommandOutput;
    };
  };
}
