// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateQueueOutboundEmailConfigRequest } from "../models/models_4";
import { UpdateQueueOutboundEmailConfig$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Updates the outbound email address Id for a specified queue.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateQueueOutboundEmailConfigCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateQueueOutboundEmailConfigCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
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
 *
 * You do not have sufficient permissions to perform this action.
 *
 * @throws {@link ConditionalOperationFailedException} (client fault)
 *
 * Request processing failed because dependent condition failed.
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
export class UpdateQueueOutboundEmailConfigCommand extends command<UpdateQueueOutboundEmailConfigCommandInput, UpdateQueueOutboundEmailConfigCommandOutput>(
  _ep0,
  _mw0,
  "UpdateQueueOutboundEmailConfig",
  UpdateQueueOutboundEmailConfig$
) {
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
