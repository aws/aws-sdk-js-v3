// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import type { ListTopicRuleDestinationsRequest, ListTopicRuleDestinationsResponse } from "../models/models_2";
import { ListTopicRuleDestinations } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Lists all the topic rule destinations in your Amazon Web Services account.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListTopicRuleDestinations</a> action.</p>
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
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You are not authorized to perform this operation.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 *
 * @public
 */
export class ListTopicRuleDestinationsCommand extends $Command
  .classBuilder<
    ListTopicRuleDestinationsCommandInput,
    ListTopicRuleDestinationsCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIotService", "ListTopicRuleDestinations", {})
  .n("IoTClient", "ListTopicRuleDestinationsCommand")
  .sc(ListTopicRuleDestinations)
  .build() {
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
