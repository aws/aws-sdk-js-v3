// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateQueueStatusRequest } from "../models/models_4";
import { UpdateQueueStatus$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateQueueStatusCommand}.
 */
export interface UpdateQueueStatusCommandInput extends UpdateQueueStatusRequest {}
/**
 * @public
 *
 * The output of {@link UpdateQueueStatusCommand}.
 */
export interface UpdateQueueStatusCommandOutput extends __MetadataBearer {}

/**
 * Updates the status of the queue.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateQueueStatusCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateQueueStatusCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // UpdateQueueStatusRequest
 *   InstanceId: "STRING_VALUE", // required
 *   QueueId: "STRING_VALUE", // required
 *   Status: "ENABLED" || "DISABLED", // required
 * };
 * const command = new UpdateQueueStatusCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateQueueStatusCommandInput - {@link UpdateQueueStatusCommandInput}
 * @returns {@link UpdateQueueStatusCommandOutput}
 * @see {@link UpdateQueueStatusCommandInput} for command's `input` shape.
 * @see {@link UpdateQueueStatusCommandOutput} for command's `response` shape.
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
export class UpdateQueueStatusCommand extends command<UpdateQueueStatusCommandInput, UpdateQueueStatusCommandOutput>(
  _ep0,
  _mw0,
  "UpdateQueueStatus",
  UpdateQueueStatus$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateQueueStatusRequest;
      output: {};
    };
    sdk: {
      input: UpdateQueueStatusCommandInput;
      output: UpdateQueueStatusCommandOutput;
    };
  };
}
