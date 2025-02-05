// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { CreateTopicRuleDestinationRequest } from "../models/models_0";
import { CreateTopicRuleDestinationResponse } from "../models/models_1";
import { de_CreateTopicRuleDestinationCommand, se_CreateTopicRuleDestinationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateTopicRuleDestinationCommand}.
 */
export interface CreateTopicRuleDestinationCommandInput extends CreateTopicRuleDestinationRequest {}
/**
 * @public
 *
 * The output of {@link CreateTopicRuleDestinationCommand}.
 */
export interface CreateTopicRuleDestinationCommandOutput extends CreateTopicRuleDestinationResponse, __MetadataBearer {}

/**
 * <p>Creates a topic rule destination. The destination must be confirmed prior to use.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateTopicRuleDestination</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CreateTopicRuleDestinationCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CreateTopicRuleDestinationCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new IoTClient(config);
 * const input = { // CreateTopicRuleDestinationRequest
 *   destinationConfiguration: { // TopicRuleDestinationConfiguration
 *     httpUrlConfiguration: { // HttpUrlDestinationConfiguration
 *       confirmationUrl: "STRING_VALUE", // required
 *     },
 *     vpcConfiguration: { // VpcDestinationConfiguration
 *       subnetIds: [ // SubnetIdList // required
 *         "STRING_VALUE",
 *       ],
 *       securityGroups: [ // SecurityGroupList
 *         "STRING_VALUE",
 *       ],
 *       vpcId: "STRING_VALUE", // required
 *       roleArn: "STRING_VALUE", // required
 *     },
 *   },
 * };
 * const command = new CreateTopicRuleDestinationCommand(input);
 * const response = await client.send(command);
 * // { // CreateTopicRuleDestinationResponse
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
 * @param CreateTopicRuleDestinationCommandInput - {@link CreateTopicRuleDestinationCommandInput}
 * @returns {@link CreateTopicRuleDestinationCommandOutput}
 * @see {@link CreateTopicRuleDestinationCommandInput} for command's `input` shape.
 * @see {@link CreateTopicRuleDestinationCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link ConflictingResourceUpdateException} (client fault)
 *  <p>A conflicting resource update exception. This exception is thrown when two pending
 *          updates cause a conflict.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The resource already exists.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 * @public
 */
export class CreateTopicRuleDestinationCommand extends $Command
  .classBuilder<
    CreateTopicRuleDestinationCommandInput,
    CreateTopicRuleDestinationCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIotService", "CreateTopicRuleDestination", {})
  .n("IoTClient", "CreateTopicRuleDestinationCommand")
  .f(void 0, void 0)
  .ser(se_CreateTopicRuleDestinationCommand)
  .de(de_CreateTopicRuleDestinationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateTopicRuleDestinationRequest;
      output: CreateTopicRuleDestinationResponse;
    };
    sdk: {
      input: CreateTopicRuleDestinationCommandInput;
      output: CreateTopicRuleDestinationCommandOutput;
    };
  };
}
