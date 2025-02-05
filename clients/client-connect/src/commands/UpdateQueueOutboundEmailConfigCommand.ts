// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateQueueOutboundEmailConfigRequest } from "../models/models_2";
import {
  de_UpdateQueueOutboundEmailConfigCommand,
  se_UpdateQueueOutboundEmailConfigCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateQueueOutboundEmailConfigCommand}.
 */
export interface UpdateQueueOutboundEmailConfigCommandInput extends UpdateQueueOutboundEmailConfigRequest {}
/**
 * @public
 *
 * The output of {@link UpdateQueueOutboundEmailConfigCommand}.
 */
export interface UpdateQueueOutboundEmailConfigCommandOutput extends __MetadataBearer {}

/**
 * <p>Updates the outbound email address Id for a specified queue.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateQueueOutboundEmailConfigCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateQueueOutboundEmailConfigCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ConnectClient(config);
 * const input = { // UpdateQueueOutboundEmailConfigRequest
 *   InstanceId: "STRING_VALUE", // required
 *   QueueId: "STRING_VALUE", // required
 *   OutboundEmailConfig: { // OutboundEmailConfig
 *     OutboundEmailAddressId: "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateQueueOutboundEmailConfigCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateQueueOutboundEmailConfigCommandInput - {@link UpdateQueueOutboundEmailConfigCommandInput}
 * @returns {@link UpdateQueueOutboundEmailConfigCommandOutput}
 * @see {@link UpdateQueueOutboundEmailConfigCommandInput} for command's `input` shape.
 * @see {@link UpdateQueueOutboundEmailConfigCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link ConditionalOperationFailedException} (client fault)
 *  <p>Request processing failed because dependent condition failed.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 * @public
 */
export class UpdateQueueOutboundEmailConfigCommand extends $Command
  .classBuilder<
    UpdateQueueOutboundEmailConfigCommandInput,
    UpdateQueueOutboundEmailConfigCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonConnectService", "UpdateQueueOutboundEmailConfig", {})
  .n("ConnectClient", "UpdateQueueOutboundEmailConfigCommand")
  .f(void 0, void 0)
  .ser(se_UpdateQueueOutboundEmailConfigCommand)
  .de(de_UpdateQueueOutboundEmailConfigCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateQueueOutboundEmailConfigRequest;
      output: {};
    };
    sdk: {
      input: UpdateQueueOutboundEmailConfigCommandInput;
      output: UpdateQueueOutboundEmailConfigCommandOutput;
    };
  };
}
