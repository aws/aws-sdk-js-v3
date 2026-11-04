// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ResumeConnectorRequest, ResumeConnectorResponse } from "../models/models_0";
import { ResumeConnector$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ResumeConnectorCommand}.
 */
export interface ResumeConnectorCommandInput extends ResumeConnectorRequest {}
/**
 * @public
 *
 * The output of {@link ResumeConnectorCommand}.
 */
export interface ResumeConnectorCommandOutput extends ResumeConnectorResponse, __MetadataBearer {}

/**
 * Resumes the specified paused connector. The operation runs asynchronously. To track the resume, pass the connector operation ARN from the response to `DescribeConnectorOperation`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaConnectClient, ResumeConnectorCommand } from "@aws-sdk/client-kafkaconnect"; // ES Modules import
 * // const { KafkaConnectClient, ResumeConnectorCommand } = require("@aws-sdk/client-kafkaconnect"); // CommonJS import
 * // import type { KafkaConnectClientConfig } from "@aws-sdk/client-kafkaconnect";
 * const config = {}; // type is KafkaConnectClientConfig
 * const client = new KafkaConnectClient(config);
 * const input = { // ResumeConnectorRequest
 *   connectorArn: "STRING_VALUE", // required
 * };
 * const command = new ResumeConnectorCommand(input);
 * const response = await client.send(command);
 * // { // ResumeConnectorResponse
 * //   connectorArn: "STRING_VALUE",
 * //   connectorOperationArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ResumeConnectorCommandInput - {@link ResumeConnectorCommandInput}
 * @returns {@link ResumeConnectorCommandOutput}
 * @see {@link ResumeConnectorCommandInput} for command's `input` shape.
 * @see {@link ResumeConnectorCommandOutput} for command's `response` shape.
 * @see {@link KafkaConnectClientResolvedConfig | config} for KafkaConnectClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * HTTP Status Code 400: Bad request due to incorrect input. Correct your request and then retry it.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * HTTP Status Code 409: Conflict. A resource with this name already exists. Retry your request with another name.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * HTTP Status Code 403: Access forbidden. Correct your credentials and then retry your request.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *
 * HTTP Status Code 500: Unexpected internal server error. Retrying your request might resolve the issue.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * HTTP Status Code 404: Resource not found due to incorrect input. Correct your request and then retry it.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * HTTP Status Code 503: Service Unavailable. Retrying your request in some time might resolve the issue.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * HTTP Status Code 429: Limit exceeded. Resource limit reached.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * HTTP Status Code 401: Unauthorized request. The provided credentials couldn't be validated.
 *
 * @throws {@link KafkaConnectServiceException}
 *
 * Base exception class for all service exceptions from KafkaConnect service.
 *
 * @public
 */
export class ResumeConnectorCommand extends command<ResumeConnectorCommandInput, ResumeConnectorCommandOutput>(
  _ep0,
  _mw0,
  "ResumeConnector",
  ResumeConnector$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ResumeConnectorRequest;
      output: ResumeConnectorResponse;
    };
    sdk: {
      input: ResumeConnectorCommandInput;
      output: ResumeConnectorCommandOutput;
    };
  };
}
