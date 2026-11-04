// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListTopicRuleDestinationsRequest, ListTopicRuleDestinationsResponse } from "../models/models_2";
import { ListTopicRuleDestinations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListTopicRuleDestinationsCommand}.
 */
export interface ListTopicRuleDestinationsCommandInput extends ListTopicRuleDestinationsRequest {}
/**
 * @public
 *
 * The output of {@link ListTopicRuleDestinationsCommand}.
 */
export interface ListTopicRuleDestinationsCommandOutput extends ListTopicRuleDestinationsResponse, __MetadataBearer {}

/**
 * Lists all the topic rule destinations in your Amazon Web Services account.
 *
 * Requires permission to access the [ListTopicRuleDestinations](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListTopicRuleDestinationsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListTopicRuleDestinationsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // ListTopicRuleDestinationsRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListTopicRuleDestinationsCommand(input);
 * const response = await client.send(command);
 * // { // ListTopicRuleDestinationsResponse
 * //   destinationSummaries: [ // TopicRuleDestinationSummaries
 * //     { // TopicRuleDestinationSummary
 * //       arn: "STRING_VALUE",
 * //       status: "ENABLED" || "IN_PROGRESS" || "DISABLED" || "ERROR" || "DELETING",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       lastUpdatedAt: new Date("TIMESTAMP"),
 * //       statusReason: "STRING_VALUE",
 * //       httpUrlSummary: { // HttpUrlDestinationSummary
 * //         confirmationUrl: "STRING_VALUE",
 * //       },
 * //       vpcDestinationSummary: { // VpcDestinationSummary
 * //         subnetIds: [ // SubnetIdList
 * //           "STRING_VALUE",
 * //         ],
 * //         securityGroups: [ // SecurityGroupList
 * //           "STRING_VALUE",
 * //         ],
 * //         vpcId: "STRING_VALUE",
 * //         roleArn: "STRING_VALUE",
 * //       },
 * //       influxDBSummary: { // InfluxDBDestinationSummary
 * //         endpoint: "STRING_VALUE",
 * //         influxDBVersion: "V2" || "V3",
 * //         secretId: "STRING_VALUE",
 * //         secretType: "SecretString" || "SecretBinary",
 * //         secretKey: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTopicRuleDestinationsCommandInput - {@link ListTopicRuleDestinationsCommandInput}
 * @returns {@link ListTopicRuleDestinationsCommandOutput}
 * @see {@link ListTopicRuleDestinationsCommandInput} for command's `input` shape.
 * @see {@link ListTopicRuleDestinationsCommandOutput} for command's `response` shape.
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
export class ListTopicRuleDestinationsCommand extends command<ListTopicRuleDestinationsCommandInput, ListTopicRuleDestinationsCommandOutput>(
  _ep0,
  _mw0,
  "ListTopicRuleDestinations",
  ListTopicRuleDestinations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTopicRuleDestinationsRequest;
      output: ListTopicRuleDestinationsResponse;
    };
    sdk: {
      input: ListTopicRuleDestinationsCommandInput;
      output: ListTopicRuleDestinationsCommandOutput;
    };
  };
}
