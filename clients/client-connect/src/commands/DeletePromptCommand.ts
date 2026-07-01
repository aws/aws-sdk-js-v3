// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeletePromptRequest } from "../models/models_1";
import { DeletePrompt$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeletePromptCommand}.
 */
export interface DeletePromptCommandInput extends DeletePromptRequest {}
/**
 * @public
 *
 * The output of {@link DeletePromptCommand}.
 */
export interface DeletePromptCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a prompt.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DeletePromptCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DeletePromptCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // DeletePromptRequest
 *   InstanceId: "STRING_VALUE", // required
 *   PromptId: "STRING_VALUE", // required
 * };
 * const command = new DeletePromptCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeletePromptCommandInput - {@link DeletePromptCommandInput}
 * @returns {@link DeletePromptCommandOutput}
 * @see {@link DeletePromptCommandInput} for command's `input` shape.
 * @see {@link DeletePromptCommandOutput} for command's `response` shape.
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
export class DeletePromptCommand extends command<DeletePromptCommandInput, DeletePromptCommandOutput>(
  _ep0,
  _mw0,
  "DeletePrompt",
  DeletePrompt$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeletePromptRequest;
      output: {};
    };
    sdk: {
      input: DeletePromptCommandInput;
      output: DeletePromptCommandOutput;
    };
  };
}
