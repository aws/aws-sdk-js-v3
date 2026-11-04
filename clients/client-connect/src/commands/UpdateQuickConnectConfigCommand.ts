// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateQuickConnectConfigRequest } from "../models/models_4";
import { UpdateQuickConnectConfig$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Updates the configuration settings for the specified quick connect.
 *
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
 *
 * Request processing failed because of an error or failure with the service.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more of the specified parameters are not valid.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The throttling limit has been exceeded.
 *
 * @throws {@link ConnectServiceException}
 *
 * Base exception class for all service exceptions from Connect service.
 *
 * @public
 */
export class UpdateQuickConnectConfigCommand extends command<UpdateQuickConnectConfigCommandInput, UpdateQuickConnectConfigCommandOutput>(
  _ep0,
  _mw0,
  "UpdateQuickConnectConfig",
  UpdateQuickConnectConfig$
) {
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
