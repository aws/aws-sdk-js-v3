// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateWorkerConfigurationRequest, CreateWorkerConfigurationResponse } from "../models/models_0";
import { CreateWorkerConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateWorkerConfigurationCommand}.
 */
export interface CreateWorkerConfigurationCommandInput extends CreateWorkerConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link CreateWorkerConfigurationCommand}.
 */
export interface CreateWorkerConfigurationCommandOutput extends CreateWorkerConfigurationResponse, __MetadataBearer {}

/**
 * Creates a worker configuration using the specified properties.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaConnectClient, CreateWorkerConfigurationCommand } from "@aws-sdk/client-kafkaconnect"; // ES Modules import
 * // const { KafkaConnectClient, CreateWorkerConfigurationCommand } = require("@aws-sdk/client-kafkaconnect"); // CommonJS import
 * // import type { KafkaConnectClientConfig } from "@aws-sdk/client-kafkaconnect";
 * const config = {}; // type is KafkaConnectClientConfig
 * const client = new KafkaConnectClient(config);
 * const input = { // CreateWorkerConfigurationRequest
 *   description: "STRING_VALUE",
 *   name: "STRING_VALUE", // required
 *   propertiesFileContent: "STRING_VALUE", // required
 *   tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateWorkerConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // CreateWorkerConfigurationResponse
 * //   creationTime: new Date("TIMESTAMP"),
 * //   latestRevision: { // WorkerConfigurationRevisionSummary
 * //     creationTime: new Date("TIMESTAMP"),
 * //     description: "STRING_VALUE",
 * //     revision: Number("long"),
 * //   },
 * //   name: "STRING_VALUE",
 * //   workerConfigurationArn: "STRING_VALUE",
 * //   workerConfigurationState: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateWorkerConfigurationCommandInput - {@link CreateWorkerConfigurationCommandInput}
 * @returns {@link CreateWorkerConfigurationCommandOutput}
 * @see {@link CreateWorkerConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateWorkerConfigurationCommandOutput} for command's `response` shape.
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
export class CreateWorkerConfigurationCommand extends command<CreateWorkerConfigurationCommandInput, CreateWorkerConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "CreateWorkerConfiguration",
  CreateWorkerConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateWorkerConfigurationRequest;
      output: CreateWorkerConfigurationResponse;
    };
    sdk: {
      input: CreateWorkerConfigurationCommandInput;
      output: CreateWorkerConfigurationCommandOutput;
    };
  };
}
