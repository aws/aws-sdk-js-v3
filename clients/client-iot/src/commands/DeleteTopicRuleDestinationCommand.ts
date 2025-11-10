// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DeleteTopicRuleDestinationRequest, DeleteTopicRuleDestinationResponse } from "../models/models_1";
import { DeleteTopicRuleDestination } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteTopicRuleDestinationCommand}.
 */
export interface DeleteTopicRuleDestinationCommandInput extends DeleteTopicRuleDestinationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteTopicRuleDestinationCommand}.
 */
export interface DeleteTopicRuleDestinationCommandOutput extends DeleteTopicRuleDestinationResponse, __MetadataBearer {}

/**
 * <p>Deletes a topic rule destination.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteTopicRuleDestination</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DeleteTopicRuleDestinationCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DeleteTopicRuleDestinationCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // DeleteTopicRuleDestinationRequest
 *   arn: "STRING_VALUE", // required
 * };
 * const command = new DeleteTopicRuleDestinationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteTopicRuleDestinationCommandInput - {@link DeleteTopicRuleDestinationCommandInput}
 * @returns {@link DeleteTopicRuleDestinationCommandOutput}
 * @see {@link DeleteTopicRuleDestinationCommandInput} for command's `input` shape.
 * @see {@link DeleteTopicRuleDestinationCommandOutput} for command's `response` shape.
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
export class DeleteTopicRuleDestinationCommand extends $Command
  .classBuilder<
    DeleteTopicRuleDestinationCommandInput,
    DeleteTopicRuleDestinationCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIotService", "DeleteTopicRuleDestination", {})
  .n("IoTClient", "DeleteTopicRuleDestinationCommand")
  .sc(DeleteTopicRuleDestination)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteTopicRuleDestinationRequest;
      output: {};
    };
    sdk: {
      input: DeleteTopicRuleDestinationCommandInput;
      output: DeleteTopicRuleDestinationCommandOutput;
    };
  };
}
