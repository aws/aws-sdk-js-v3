// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteEventActionRequest } from "../models/models_0";
import { DeleteEventAction$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteEventActionCommand}.
 */
export interface DeleteEventActionCommandInput extends DeleteEventActionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteEventActionCommand}.
 */
export interface DeleteEventActionCommandOutput extends __MetadataBearer {}

/**
 * This operation deletes the event action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataExchangeClient, DeleteEventActionCommand } from "@aws-sdk/client-dataexchange"; // ES Modules import
 * // const { DataExchangeClient, DeleteEventActionCommand } = require("@aws-sdk/client-dataexchange"); // CommonJS import
 * // import type { DataExchangeClientConfig } from "@aws-sdk/client-dataexchange";
 * const config = {}; // type is DataExchangeClientConfig
 * const client = new DataExchangeClient(config);
 * const input = { // DeleteEventActionRequest
 *   EventActionId: "STRING_VALUE", // required
 * };
 * const command = new DeleteEventActionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteEventActionCommandInput - {@link DeleteEventActionCommandInput}
 * @returns {@link DeleteEventActionCommandOutput}
 * @see {@link DeleteEventActionCommandInput} for command's `input` shape.
 * @see {@link DeleteEventActionCommandOutput} for command's `response` shape.
 * @see {@link DataExchangeClientResolvedConfig | config} for DataExchangeClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An exception occurred with the service.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource couldn't be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The limit on the number of requests per second was exceeded.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request was invalid.
 *
 * @throws {@link DataExchangeServiceException}
 *
 * Base exception class for all service exceptions from DataExchange service.
 *
 * @public
 */
export class DeleteEventActionCommand extends command<DeleteEventActionCommandInput, DeleteEventActionCommandOutput>(
  _ep0,
  _mw0,
  "DeleteEventAction",
  DeleteEventAction$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteEventActionRequest;
      output: {};
    };
    sdk: {
      input: DeleteEventActionCommandInput;
      output: DeleteEventActionCommandOutput;
    };
  };
}
