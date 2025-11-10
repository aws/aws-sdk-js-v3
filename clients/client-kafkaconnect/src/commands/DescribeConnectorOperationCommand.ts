// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KafkaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaConnectClient";
import { DescribeConnectorOperationRequest, DescribeConnectorOperationResponse } from "../models/models_0";
import { DescribeConnectorOperation } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeConnectorOperationCommand}.
 */
export interface DescribeConnectorOperationCommandInput extends DescribeConnectorOperationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeConnectorOperationCommand}.
 */
export interface DescribeConnectorOperationCommandOutput extends DescribeConnectorOperationResponse, __MetadataBearer {}

/**
 * <p>Returns information about the specified connector's operations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaConnectClient, DescribeConnectorOperationCommand } from "@aws-sdk/client-kafkaconnect"; // ES Modules import
 * // const { KafkaConnectClient, DescribeConnectorOperationCommand } = require("@aws-sdk/client-kafkaconnect"); // CommonJS import
 * // import type { KafkaConnectClientConfig } from "@aws-sdk/client-kafkaconnect";
 * const config = {}; // type is KafkaConnectClientConfig
 * const client = new KafkaConnectClient(config);
 * const input = { // DescribeConnectorOperationRequest
 *   connectorOperationArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeConnectorOperationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeConnectorOperationResponse
 * //   connectorArn: "STRING_VALUE",
 * //   connectorOperationArn: "STRING_VALUE",
 * //   connectorOperationState: "STRING_VALUE",
 * //   connectorOperationType: "STRING_VALUE",
 * //   operationSteps: [ // __listOfConnectorOperationStep
 * //     { // ConnectorOperationStep
 * //       stepType: "STRING_VALUE",
 * //       stepState: "STRING_VALUE",
 * //     },
 * //   ],
 * //   originWorkerSetting: { // WorkerSetting
 * //     capacity: { // CapacityDescription
 * //       autoScaling: { // AutoScalingDescription
 * //         maxWorkerCount: Number("int"),
 * //         mcuCount: Number("int"),
 * //         minWorkerCount: Number("int"),
 * //         scaleInPolicy: { // ScaleInPolicyDescription
 * //           cpuUtilizationPercentage: Number("int"),
 * //         },
 * //         scaleOutPolicy: { // ScaleOutPolicyDescription
 * //           cpuUtilizationPercentage: Number("int"),
 * //         },
 * //       },
 * //       provisionedCapacity: { // ProvisionedCapacityDescription
 * //         mcuCount: Number("int"),
 * //         workerCount: Number("int"),
 * //       },
 * //     },
 * //   },
 * //   originConnectorConfiguration: { // ConnectorConfiguration
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   targetWorkerSetting: {
 * //     capacity: {
 * //       autoScaling: {
 * //         maxWorkerCount: Number("int"),
 * //         mcuCount: Number("int"),
 * //         minWorkerCount: Number("int"),
 * //         scaleInPolicy: {
 * //           cpuUtilizationPercentage: Number("int"),
 * //         },
 * //         scaleOutPolicy: {
 * //           cpuUtilizationPercentage: Number("int"),
 * //         },
 * //       },
 * //       provisionedCapacity: {
 * //         mcuCount: Number("int"),
 * //         workerCount: Number("int"),
 * //       },
 * //     },
 * //   },
 * //   targetConnectorConfiguration: {
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   errorInfo: { // StateDescription
 * //     code: "STRING_VALUE",
 * //     message: "STRING_VALUE",
 * //   },
 * //   creationTime: new Date("TIMESTAMP"),
 * //   endTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param DescribeConnectorOperationCommandInput - {@link DescribeConnectorOperationCommandInput}
 * @returns {@link DescribeConnectorOperationCommandOutput}
 * @see {@link DescribeConnectorOperationCommandInput} for command's `input` shape.
 * @see {@link DescribeConnectorOperationCommandOutput} for command's `response` shape.
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
export class DescribeConnectorOperationCommand extends $Command
  .classBuilder<
    DescribeConnectorOperationCommandInput,
    DescribeConnectorOperationCommandOutput,
    KafkaConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: KafkaConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("KafkaConnect", "DescribeConnectorOperation", {})
  .n("KafkaConnectClient", "DescribeConnectorOperationCommand")
  .sc(DescribeConnectorOperation)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeConnectorOperationRequest;
      output: DescribeConnectorOperationResponse;
    };
    sdk: {
      input: DescribeConnectorOperationCommandInput;
      output: DescribeConnectorOperationCommandOutput;
    };
  };
}
