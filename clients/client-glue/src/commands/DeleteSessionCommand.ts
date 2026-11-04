// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteSessionRequest, DeleteSessionResponse } from "../models/models_1";
import { DeleteSession$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteSessionCommand}.
 */
export interface DeleteSessionCommandInput extends DeleteSessionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteSessionCommand}.
 */
export interface DeleteSessionCommandOutput extends DeleteSessionResponse, __MetadataBearer {}

/**
 * Deletes the session.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, DeleteSessionCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, DeleteSessionCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // DeleteSessionRequest
 *   Id: "STRING_VALUE", // required
 *   RequestOrigin: "STRING_VALUE",
 * };
 * const command = new DeleteSessionCommand(input);
 * const response = await client.send(command);
 * // { // DeleteSessionResponse
 * //   Id: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteSessionCommandInput - {@link DeleteSessionCommandInput}
 * @returns {@link DeleteSessionCommandOutput}
 * @see {@link DeleteSessionCommandInput} for command's `input` shape.
 * @see {@link DeleteSessionCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access to a resource was denied.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *
 * Two processes are trying to modify a resource simultaneously.
 *
 * @throws {@link IllegalSessionStateException} (client fault)
 *
 * The session is in an invalid state to perform a requested operation.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * An internal service error occurred.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * The input provided was not valid.
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *
 * The operation timed out.
 *
 * @throws {@link GlueServiceException}
 *
 * Base exception class for all service exceptions from Glue service.
 *
 * @public
 */
export class DeleteSessionCommand extends command<DeleteSessionCommandInput, DeleteSessionCommandOutput>(
  _ep0,
  _mw0,
  "DeleteSession",
  DeleteSession$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteSessionRequest;
      output: DeleteSessionResponse;
    };
    sdk: {
      input: DeleteSessionCommandInput;
      output: DeleteSessionCommandOutput;
    };
  };
}
