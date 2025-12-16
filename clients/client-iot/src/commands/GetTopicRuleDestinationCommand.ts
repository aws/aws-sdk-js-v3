// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import type { GetTopicRuleDestinationRequest, GetTopicRuleDestinationResponse } from "../models/models_1";
import { GetTopicRuleDestination$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Gets information about a topic rule destination.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetTopicRuleDestination</a> action.</p>
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
export class GetTopicRuleDestinationCommand extends $Command
  .classBuilder<
    GetTopicRuleDestinationCommandInput,
    GetTopicRuleDestinationCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIotService", "GetTopicRuleDestination", {})
  .n("IoTClient", "GetTopicRuleDestinationCommand")
  .sc(GetTopicRuleDestination$)
  .build() {
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
