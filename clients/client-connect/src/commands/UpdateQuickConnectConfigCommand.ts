// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
<<<<<<< HEAD
import { UpdateQuickConnectConfigRequest } from "../models/models_3";
=======
import type { UpdateQuickConnectConfigRequest } from "../models/models_2";
>>>>>>> 60efd81940b (chore: codegen)
import { UpdateQuickConnectConfig } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateQuickConnectConfigCommand}.
 */
export interface UpdateQuickConnectConfigCommandInput extends UpdateQuickConnectConfigRequest {}
/**
 * @public
 *
 * The output of {@link UpdateQuickConnectConfigCommand}.
 */
export interface UpdateQuickConnectConfigCommandOutput extends __MetadataBearer {}

/**
 * <p>Updates the configuration settings for the specified quick connect.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateQuickConnectConfigCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateQuickConnectConfigCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // UpdateQuickConnectConfigRequest
 *   InstanceId: "STRING_VALUE", // required
 *   QuickConnectId: "STRING_VALUE", // required
 *   QuickConnectConfig: { // QuickConnectConfig
 *     QuickConnectType: "USER" || "QUEUE" || "PHONE_NUMBER" || "FLOW", // required
 *     UserConfig: { // UserQuickConnectConfig
 *       UserId: "STRING_VALUE", // required
 *       ContactFlowId: "STRING_VALUE", // required
 *     },
 *     QueueConfig: { // QueueQuickConnectConfig
 *       QueueId: "STRING_VALUE", // required
 *       ContactFlowId: "STRING_VALUE", // required
 *     },
 *     PhoneConfig: { // PhoneNumberQuickConnectConfig
 *       PhoneNumber: "STRING_VALUE", // required
 *     },
 *     FlowConfig: { // FlowQuickConnectConfig
 *       ContactFlowId: "STRING_VALUE", // required
 *     },
 *   },
 * };
 * const command = new UpdateQuickConnectConfigCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateQuickConnectConfigCommandInput - {@link UpdateQuickConnectConfigCommandInput}
 * @returns {@link UpdateQuickConnectConfigCommandOutput}
 * @see {@link UpdateQuickConnectConfigCommandInput} for command's `input` shape.
 * @see {@link UpdateQuickConnectConfigCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
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
 *
 * @public
 */
export class UpdateQuickConnectConfigCommand extends $Command
  .classBuilder<
    UpdateQuickConnectConfigCommandInput,
    UpdateQuickConnectConfigCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "UpdateQuickConnectConfig", {})
  .n("ConnectClient", "UpdateQuickConnectConfigCommand")
  .sc(UpdateQuickConnectConfig)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateQuickConnectConfigRequest;
      output: {};
    };
    sdk: {
      input: UpdateQuickConnectConfigCommandInput;
      output: UpdateQuickConnectConfigCommandOutput;
    };
  };
}
