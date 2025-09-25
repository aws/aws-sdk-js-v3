// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KafkaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaConnectClient";
import { DeleteWorkerConfigurationRequest, DeleteWorkerConfigurationResponse } from "../models/models_0";
import { DeleteWorkerConfiguration } from "../schemas/schemas_7_Worker";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteWorkerConfigurationCommand}.
 */
export interface DeleteWorkerConfigurationCommandInput extends DeleteWorkerConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteWorkerConfigurationCommand}.
 */
export interface DeleteWorkerConfigurationCommandOutput extends DeleteWorkerConfigurationResponse, __MetadataBearer {}

/**
 * <p>Deletes the specified worker configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaConnectClient, DeleteWorkerConfigurationCommand } from "@aws-sdk/client-kafkaconnect"; // ES Modules import
 * // const { KafkaConnectClient, DeleteWorkerConfigurationCommand } = require("@aws-sdk/client-kafkaconnect"); // CommonJS import
 * // import type { KafkaConnectClientConfig } from "@aws-sdk/client-kafkaconnect";
 * const config = {}; // type is KafkaConnectClientConfig
 * const client = new KafkaConnectClient(config);
 * const input = { // DeleteWorkerConfigurationRequest
 *   workerConfigurationArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteWorkerConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // DeleteWorkerConfigurationResponse
 * //   workerConfigurationArn: "STRING_VALUE",
 * //   workerConfigurationState: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteWorkerConfigurationCommandInput - {@link DeleteWorkerConfigurationCommandInput}
 * @returns {@link DeleteWorkerConfigurationCommandOutput}
 * @see {@link DeleteWorkerConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteWorkerConfigurationCommandOutput} for command's `response` shape.
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
export class DeleteWorkerConfigurationCommand extends $Command
  .classBuilder<
    DeleteWorkerConfigurationCommandInput,
    DeleteWorkerConfigurationCommandOutput,
    KafkaConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: KafkaConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("KafkaConnect", "DeleteWorkerConfiguration", {})
  .n("KafkaConnectClient", "DeleteWorkerConfigurationCommand")
  .sc(DeleteWorkerConfiguration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteWorkerConfigurationRequest;
      output: DeleteWorkerConfigurationResponse;
    };
    sdk: {
      input: DeleteWorkerConfigurationCommandInput;
      output: DeleteWorkerConfigurationCommandOutput;
    };
  };
}
