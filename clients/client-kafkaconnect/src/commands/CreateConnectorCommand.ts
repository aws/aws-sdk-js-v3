// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KafkaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaConnectClient";
import {
  CreateConnectorRequest,
  CreateConnectorRequestFilterSensitiveLog,
  CreateConnectorResponse,
} from "../models/models_0";
import { de_CreateConnectorCommand, se_CreateConnectorCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateConnectorCommand}.
 */
export interface CreateConnectorCommandInput extends CreateConnectorRequest {}
/**
 * @public
 *
 * The output of {@link CreateConnectorCommand}.
 */
export interface CreateConnectorCommandOutput extends CreateConnectorResponse, __MetadataBearer {}

/**
 * <p>Creates a connector using the specified properties. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaConnectClient, CreateConnectorCommand } from "@aws-sdk/client-kafkaconnect"; // ES Modules import
 * // const { KafkaConnectClient, CreateConnectorCommand } = require("@aws-sdk/client-kafkaconnect"); // CommonJS import
 * const client = new KafkaConnectClient(config);
 * const input = { // CreateConnectorRequest
 *   capacity: { // Capacity
 *     autoScaling: { // AutoScaling
 *       maxWorkerCount: Number("int"), // required
 *       mcuCount: Number("int"), // required
 *       minWorkerCount: Number("int"), // required
 *       scaleInPolicy: { // ScaleInPolicy
 *         cpuUtilizationPercentage: Number("int"), // required
 *       },
 *       scaleOutPolicy: { // ScaleOutPolicy
 *         cpuUtilizationPercentage: Number("int"), // required
 *       },
 *     },
 *     provisionedCapacity: { // ProvisionedCapacity
 *       mcuCount: Number("int"), // required
 *       workerCount: Number("int"), // required
 *     },
 *   },
 *   connectorConfiguration: { // __sensitive__mapOf__string // required
 *     "<keys>": "STRING_VALUE",
 *   },
 *   connectorDescription: "STRING_VALUE",
 *   connectorName: "STRING_VALUE", // required
 *   kafkaCluster: { // KafkaCluster
 *     apacheKafkaCluster: { // ApacheKafkaCluster
 *       bootstrapServers: "STRING_VALUE", // required
 *       vpc: { // Vpc
 *         securityGroups: [ // __listOf__string
 *           "STRING_VALUE",
 *         ],
 *         subnets: [ // required
 *           "STRING_VALUE",
 *         ],
 *       },
 *     },
 *   },
 *   kafkaClusterClientAuthentication: { // KafkaClusterClientAuthentication
 *     authenticationType: "STRING_VALUE", // required
 *   },
 *   kafkaClusterEncryptionInTransit: { // KafkaClusterEncryptionInTransit
 *     encryptionType: "STRING_VALUE", // required
 *   },
 *   kafkaConnectVersion: "STRING_VALUE", // required
 *   logDelivery: { // LogDelivery
 *     workerLogDelivery: { // WorkerLogDelivery
 *       cloudWatchLogs: { // CloudWatchLogsLogDelivery
 *         enabled: true || false, // required
 *         logGroup: "STRING_VALUE",
 *       },
 *       firehose: { // FirehoseLogDelivery
 *         deliveryStream: "STRING_VALUE",
 *         enabled: true || false, // required
 *       },
 *       s3: { // S3LogDelivery
 *         bucket: "STRING_VALUE",
 *         enabled: true || false, // required
 *         prefix: "STRING_VALUE",
 *       },
 *     },
 *   },
 *   plugins: [ // __listOfPlugin // required
 *     { // Plugin
 *       customPlugin: { // CustomPlugin
 *         customPluginArn: "STRING_VALUE", // required
 *         revision: Number("long"), // required
 *       },
 *     },
 *   ],
 *   serviceExecutionRoleArn: "STRING_VALUE", // required
 *   workerConfiguration: { // WorkerConfiguration
 *     revision: Number("long"), // required
 *     workerConfigurationArn: "STRING_VALUE", // required
 *   },
 *   tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateConnectorCommand(input);
 * const response = await client.send(command);
 * // { // CreateConnectorResponse
 * //   connectorArn: "STRING_VALUE",
 * //   connectorName: "STRING_VALUE",
 * //   connectorState: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateConnectorCommandInput - {@link CreateConnectorCommandInput}
 * @returns {@link CreateConnectorCommandOutput}
 * @see {@link CreateConnectorCommandInput} for command's `input` shape.
 * @see {@link CreateConnectorCommandOutput} for command's `response` shape.
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
 * @public
 */
export class CreateConnectorCommand extends $Command
  .classBuilder<
    CreateConnectorCommandInput,
    CreateConnectorCommandOutput,
    KafkaConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: KafkaConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("KafkaConnect", "CreateConnector", {})
  .n("KafkaConnectClient", "CreateConnectorCommand")
  .f(CreateConnectorRequestFilterSensitiveLog, void 0)
  .ser(se_CreateConnectorCommand)
  .de(de_CreateConnectorCommand)
  .build() {}
