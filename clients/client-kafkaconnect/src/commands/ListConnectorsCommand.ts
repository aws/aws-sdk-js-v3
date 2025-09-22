// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KafkaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaConnectClient";
import { ListConnectorsRequest, ListConnectorsResponse } from "../models/models_0";
import { ListConnectors } from "../schemas/schemas_2_Describe";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListConnectorsCommand}.
 */
export interface ListConnectorsCommandInput extends ListConnectorsRequest {}
/**
 * @public
 *
 * The output of {@link ListConnectorsCommand}.
 */
export interface ListConnectorsCommandOutput extends ListConnectorsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of all the connectors in this account and Region. The list is limited to
 *          connectors whose name starts with the specified prefix. The response also includes a
 *          description of each of the listed connectors.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaConnectClient, ListConnectorsCommand } from "@aws-sdk/client-kafkaconnect"; // ES Modules import
 * // const { KafkaConnectClient, ListConnectorsCommand } = require("@aws-sdk/client-kafkaconnect"); // CommonJS import
 * // import type { KafkaConnectClientConfig } from "@aws-sdk/client-kafkaconnect";
 * const config = {}; // type is KafkaConnectClientConfig
 * const client = new KafkaConnectClient(config);
 * const input = { // ListConnectorsRequest
 *   connectorNamePrefix: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListConnectorsCommand(input);
 * const response = await client.send(command);
 * // { // ListConnectorsResponse
 * //   connectors: [ // __listOfConnectorSummary
 * //     { // ConnectorSummary
 * //       capacity: { // CapacityDescription
 * //         autoScaling: { // AutoScalingDescription
 * //           maxWorkerCount: Number("int"),
 * //           mcuCount: Number("int"),
 * //           minWorkerCount: Number("int"),
 * //           scaleInPolicy: { // ScaleInPolicyDescription
 * //             cpuUtilizationPercentage: Number("int"),
 * //           },
 * //           scaleOutPolicy: { // ScaleOutPolicyDescription
 * //             cpuUtilizationPercentage: Number("int"),
 * //           },
 * //         },
 * //         provisionedCapacity: { // ProvisionedCapacityDescription
 * //           mcuCount: Number("int"),
 * //           workerCount: Number("int"),
 * //         },
 * //       },
 * //       connectorArn: "STRING_VALUE",
 * //       connectorDescription: "STRING_VALUE",
 * //       connectorName: "STRING_VALUE",
 * //       connectorState: "STRING_VALUE",
 * //       creationTime: new Date("TIMESTAMP"),
 * //       currentVersion: "STRING_VALUE",
 * //       kafkaCluster: { // KafkaClusterDescription
 * //         apacheKafkaCluster: { // ApacheKafkaClusterDescription
 * //           bootstrapServers: "STRING_VALUE",
 * //           vpc: { // VpcDescription
 * //             securityGroups: [ // __listOf__string
 * //               "STRING_VALUE",
 * //             ],
 * //             subnets: [
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         },
 * //       },
 * //       kafkaClusterClientAuthentication: { // KafkaClusterClientAuthenticationDescription
 * //         authenticationType: "STRING_VALUE",
 * //       },
 * //       kafkaClusterEncryptionInTransit: { // KafkaClusterEncryptionInTransitDescription
 * //         encryptionType: "STRING_VALUE",
 * //       },
 * //       kafkaConnectVersion: "STRING_VALUE",
 * //       logDelivery: { // LogDeliveryDescription
 * //         workerLogDelivery: { // WorkerLogDeliveryDescription
 * //           cloudWatchLogs: { // CloudWatchLogsLogDeliveryDescription
 * //             enabled: true || false,
 * //             logGroup: "STRING_VALUE",
 * //           },
 * //           firehose: { // FirehoseLogDeliveryDescription
 * //             deliveryStream: "STRING_VALUE",
 * //             enabled: true || false,
 * //           },
 * //           s3: { // S3LogDeliveryDescription
 * //             bucket: "STRING_VALUE",
 * //             enabled: true || false,
 * //             prefix: "STRING_VALUE",
 * //           },
 * //         },
 * //       },
 * //       plugins: [ // __listOfPluginDescription
 * //         { // PluginDescription
 * //           customPlugin: { // CustomPluginDescription
 * //             customPluginArn: "STRING_VALUE",
 * //             revision: Number("long"),
 * //           },
 * //         },
 * //       ],
 * //       serviceExecutionRoleArn: "STRING_VALUE",
 * //       workerConfiguration: { // WorkerConfigurationDescription
 * //         revision: Number("long"),
 * //         workerConfigurationArn: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListConnectorsCommandInput - {@link ListConnectorsCommandInput}
 * @returns {@link ListConnectorsCommandOutput}
 * @see {@link ListConnectorsCommandInput} for command's `input` shape.
 * @see {@link ListConnectorsCommandOutput} for command's `response` shape.
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
export class ListConnectorsCommand extends $Command
  .classBuilder<
    ListConnectorsCommandInput,
    ListConnectorsCommandOutput,
    KafkaConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: KafkaConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("KafkaConnect", "ListConnectors", {})
  .n("KafkaConnectClient", "ListConnectorsCommand")
  .sc(ListConnectors)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListConnectorsRequest;
      output: ListConnectorsResponse;
    };
    sdk: {
      input: ListConnectorsCommandInput;
      output: ListConnectorsCommandOutput;
    };
  };
}
