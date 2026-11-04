// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateQueueNameRequest } from "../models/models_4";
import { UpdateQueueName$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateQueueNameCommand}.
 */
export interface UpdateQueueNameCommandInput extends UpdateQueueNameRequest {}
/**
 * @public
 *
 * The output of {@link UpdateQueueNameCommand}.
 */
export interface UpdateQueueNameCommandOutput extends __MetadataBearer {}

/**
 * Updates the name and description of a queue. At least `Name` or `Description` must be provided.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateQueueNameCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateQueueNameCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // UpdateQueueNameRequest
 *   InstanceId: "STRING_VALUE", // required
 *   QueueId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 * };
 * const command = new UpdateQueueNameCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateQueueNameCommandInput - {@link UpdateQueueNameCommandInput}
 * @returns {@link UpdateQueueNameCommandOutput}
 * @see {@link UpdateQueueNameCommandInput} for command's `input` shape.
 * @see {@link UpdateQueueNameCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link DuplicateResourceException} (client fault)
 *
 * A resource with the specified name already exists.
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
export class UpdateQueueNameCommand extends command<UpdateQueueNameCommandInput, UpdateQueueNameCommandOutput>(
  _ep0,
  _mw0,
  "UpdateQueueName",
  UpdateQueueName$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateQueueNameRequest;
      output: {};
    };
    sdk: {
      input: UpdateQueueNameCommandInput;
      output: UpdateQueueNameCommandOutput;
    };
  };
}
