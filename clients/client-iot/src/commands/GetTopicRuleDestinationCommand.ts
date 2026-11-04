// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetTopicRuleDestinationRequest, GetTopicRuleDestinationResponse } from "../models/models_1";
import { GetTopicRuleDestination$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetTopicRuleDestinationCommand}.
 */
export interface GetTopicRuleDestinationCommandInput extends GetTopicRuleDestinationRequest {}
/**
 * @public
 *
 * The output of {@link GetTopicRuleDestinationCommand}.
 */
export interface GetTopicRuleDestinationCommandOutput extends GetTopicRuleDestinationResponse, __MetadataBearer {}

/**
 * Gets information about a topic rule destination.
 *
 * Requires permission to access the [GetTopicRuleDestination](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, GetTopicRuleDestinationCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, GetTopicRuleDestinationCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // GetTopicRuleDestinationRequest
 *   arn: "STRING_VALUE", // required
 * };
 * const command = new GetTopicRuleDestinationCommand(input);
 * const response = await client.send(command);
 * // { // GetTopicRuleDestinationResponse
 * //   topicRuleDestination: { // TopicRuleDestination
 * //     arn: "STRING_VALUE",
 * //     status: "ENABLED" || "IN_PROGRESS" || "DISABLED" || "ERROR" || "DELETING",
 * //     createdAt: new Date("TIMESTAMP"),
 * //     lastUpdatedAt: new Date("TIMESTAMP"),
 * //     statusReason: "STRING_VALUE",
 * //     httpUrlProperties: { // HttpUrlDestinationProperties
 * //       confirmationUrl: "STRING_VALUE",
 * //     },
 * //     vpcProperties: { // VpcDestinationProperties
 * //       subnetIds: [ // SubnetIdList
 * //         "STRING_VALUE",
 * //       ],
 * //       securityGroups: [ // SecurityGroupList
 * //         "STRING_VALUE",
 * //       ],
 * //       vpcId: "STRING_VALUE",
 * //       roleArn: "STRING_VALUE",
 * //     },
 * //     influxDBProperties: { // InfluxDBDestinationProperties
 * //       endpoint: "STRING_VALUE",
 * //       influxDBVersion: "V2" || "V3",
 * //       secretId: "STRING_VALUE",
 * //       secretType: "SecretString" || "SecretBinary",
 * //       secretKey: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetTopicRuleDestinationCommandInput - {@link GetTopicRuleDestinationCommandInput}
 * @returns {@link GetTopicRuleDestinationCommandOutput}
 * @see {@link GetTopicRuleDestinationCommandInput} for command's `input` shape.
 * @see {@link GetTopicRuleDestinationCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *
 * An unexpected error has occurred.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service is temporarily unavailable.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * You are not authorized to perform this operation.
 *
 * @throws {@link IoTServiceException}
 *
 * Base exception class for all service exceptions from IoT service.
 *
 * @public
 */
export class GetTopicRuleDestinationCommand extends command<GetTopicRuleDestinationCommandInput, GetTopicRuleDestinationCommandOutput>(
  _ep0,
  _mw0,
  "GetTopicRuleDestination",
  GetTopicRuleDestination$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTopicRuleDestinationRequest;
      output: GetTopicRuleDestinationResponse;
    };
    sdk: {
      input: GetTopicRuleDestinationCommandInput;
      output: GetTopicRuleDestinationCommandOutput;
    };
  };
}
