// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KafkaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaConnectClient";
import {
  CreateWorkerConfigurationRequest,
  CreateWorkerConfigurationRequestFilterSensitiveLog,
  CreateWorkerConfigurationResponse,
} from "../models/models_0";
import { de_CreateWorkerConfigurationCommand, se_CreateWorkerConfigurationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Creates a worker configuration using the specified properties.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaConnectClient, CreateWorkerConfigurationCommand } from "@aws-sdk/client-kafkaconnect"; // ES Modules import
 * // const { KafkaConnectClient, CreateWorkerConfigurationCommand } = require("@aws-sdk/client-kafkaconnect"); // CommonJS import
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
 *  <p>HTTP Status Code 400: Bad request due to incorrect input. Correct your request and then
 *          retry it.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>HTTP Status Code 409: Conflict. A resource with this name already exists. Retry your
 *          request with another name.</p>
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
export class CreateWorkerConfigurationCommand extends $Command
  .classBuilder<
    CreateWorkerConfigurationCommandInput,
    CreateWorkerConfigurationCommandOutput,
    KafkaConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: KafkaConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("KafkaConnect", "CreateWorkerConfiguration", {})
  .n("KafkaConnectClient", "CreateWorkerConfigurationCommand")
  .f(CreateWorkerConfigurationRequestFilterSensitiveLog, void 0)
  .ser(se_CreateWorkerConfigurationCommand)
  .de(de_CreateWorkerConfigurationCommand)
  .build() {
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
