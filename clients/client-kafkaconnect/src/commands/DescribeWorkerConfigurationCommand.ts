// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeWorkerConfigurationRequest, DescribeWorkerConfigurationResponse } from "../models/models_0";
import { DescribeWorkerConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeWorkerConfigurationCommand}.
 */
export interface DescribeWorkerConfigurationCommandInput extends DescribeWorkerConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeWorkerConfigurationCommand}.
 */
export interface DescribeWorkerConfigurationCommandOutput extends DescribeWorkerConfigurationResponse, __MetadataBearer {}

/**
 * Returns information about a worker configuration.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaConnectClient, DescribeWorkerConfigurationCommand } from "@aws-sdk/client-kafkaconnect"; // ES Modules import
 * // const { KafkaConnectClient, DescribeWorkerConfigurationCommand } = require("@aws-sdk/client-kafkaconnect"); // CommonJS import
 * // import type { KafkaConnectClientConfig } from "@aws-sdk/client-kafkaconnect";
 * const config = {}; // type is KafkaConnectClientConfig
 * const client = new KafkaConnectClient(config);
 * const input = { // DescribeWorkerConfigurationRequest
 *   workerConfigurationArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeWorkerConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeWorkerConfigurationResponse
 * //   creationTime: new Date("TIMESTAMP"),
 * //   description: "STRING_VALUE",
 * //   latestRevision: { // WorkerConfigurationRevisionDescription
 * //     creationTime: new Date("TIMESTAMP"),
 * //     description: "STRING_VALUE",
 * //     propertiesFileContent: "STRING_VALUE",
 * //     revision: Number("long"),
 * //   },
 * //   name: "STRING_VALUE",
 * //   workerConfigurationArn: "STRING_VALUE",
 * //   workerConfigurationState: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeWorkerConfigurationCommandInput - {@link DescribeWorkerConfigurationCommandInput}
 * @returns {@link DescribeWorkerConfigurationCommandOutput}
 * @see {@link DescribeWorkerConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeWorkerConfigurationCommandOutput} for command's `response` shape.
 * @see {@link KafkaConnectClientResolvedConfig | config} for KafkaConnectClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * HTTP Status Code 400: Bad request due to incorrect input. Correct your request and then retry it.
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
export class DescribeWorkerConfigurationCommand extends command<DescribeWorkerConfigurationCommandInput, DescribeWorkerConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "DescribeWorkerConfiguration",
  DescribeWorkerConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeWorkerConfigurationRequest;
      output: DescribeWorkerConfigurationResponse;
    };
    sdk: {
      input: DescribeWorkerConfigurationCommandInput;
      output: DescribeWorkerConfigurationCommandOutput;
    };
  };
}
