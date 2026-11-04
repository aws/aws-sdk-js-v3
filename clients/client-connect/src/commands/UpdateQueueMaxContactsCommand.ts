// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateQueueMaxContactsRequest } from "../models/models_4";
import { UpdateQueueMaxContacts$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateQueueMaxContactsCommand}.
 */
export interface UpdateQueueMaxContactsCommandInput extends UpdateQueueMaxContactsRequest {}
/**
 * @public
 *
 * The output of {@link UpdateQueueMaxContactsCommand}.
 */
export interface UpdateQueueMaxContactsCommandOutput extends __MetadataBearer {}

/**
 * Updates the maximum number of contacts allowed in a queue before it is considered full.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateQueueMaxContactsCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateQueueMaxContactsCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // UpdateQueueMaxContactsRequest
 *   InstanceId: "STRING_VALUE", // required
 *   QueueId: "STRING_VALUE", // required
 *   MaxContacts: Number("int"),
 * };
 * const command = new UpdateQueueMaxContactsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateQueueMaxContactsCommandInput - {@link UpdateQueueMaxContactsCommandInput}
 * @returns {@link UpdateQueueMaxContactsCommandOutput}
 * @see {@link UpdateQueueMaxContactsCommandInput} for command's `input` shape.
 * @see {@link UpdateQueueMaxContactsCommandOutput} for command's `response` shape.
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
export class UpdateQueueMaxContactsCommand extends command<UpdateQueueMaxContactsCommandInput, UpdateQueueMaxContactsCommandOutput>(
  _ep0,
  _mw0,
  "UpdateQueueMaxContacts",
  UpdateQueueMaxContacts$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateQueueMaxContactsRequest;
      output: {};
    };
    sdk: {
      input: UpdateQueueMaxContactsCommandInput;
      output: UpdateQueueMaxContactsCommandOutput;
    };
  };
}
