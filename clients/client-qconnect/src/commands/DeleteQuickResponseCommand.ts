// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteQuickResponseRequest, DeleteQuickResponseResponse } from "../models/models_1";
import { DeleteQuickResponse$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteQuickResponseCommand}.
 */
export interface DeleteQuickResponseCommandInput extends DeleteQuickResponseRequest {}
/**
 * @public
 *
 * The output of {@link DeleteQuickResponseCommand}.
 */
export interface DeleteQuickResponseCommandOutput extends DeleteQuickResponseResponse, __MetadataBearer {}

/**
 * Deletes a quick response.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QConnectClient, DeleteQuickResponseCommand } from "@aws-sdk/client-qconnect"; // ES Modules import
 * // const { QConnectClient, DeleteQuickResponseCommand } = require("@aws-sdk/client-qconnect"); // CommonJS import
 * // import type { QConnectClientConfig } from "@aws-sdk/client-qconnect";
 * const config = {}; // type is QConnectClientConfig
 * const client = new QConnectClient(config);
 * const input = { // DeleteQuickResponseRequest
 *   knowledgeBaseId: "STRING_VALUE", // required
 *   quickResponseId: "STRING_VALUE", // required
 * };
 * const command = new DeleteQuickResponseCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteQuickResponseCommandInput - {@link DeleteQuickResponseCommandInput}
 * @returns {@link DeleteQuickResponseCommandOutput}
 * @see {@link DeleteQuickResponseCommandInput} for command's `input` shape.
 * @see {@link DeleteQuickResponseCommandOutput} for command's `response` shape.
 * @see {@link QConnectClientResolvedConfig | config} for QConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * You do not have permission to perform this action.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by a service.
 *
 * @throws {@link QConnectServiceException}
 *
 * Base exception class for all service exceptions from QConnect service.
 *
 * @public
 */
export class DeleteQuickResponseCommand extends command<DeleteQuickResponseCommandInput, DeleteQuickResponseCommandOutput>(
  _ep0,
  _mw0,
  "DeleteQuickResponse",
  DeleteQuickResponse$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteQuickResponseRequest;
      output: {};
    };
    sdk: {
      input: DeleteQuickResponseCommandInput;
      output: DeleteQuickResponseCommandOutput;
    };
  };
}
