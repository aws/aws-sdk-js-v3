// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteKxDatabaseRequest, DeleteKxDatabaseResponse } from "../models/models_0";
import { DeleteKxDatabase$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteKxDatabaseCommand}.
 */
export interface DeleteKxDatabaseCommandInput extends DeleteKxDatabaseRequest {}
/**
 * @public
 *
 * The output of {@link DeleteKxDatabaseCommand}.
 */
export interface DeleteKxDatabaseCommandOutput extends DeleteKxDatabaseResponse, __MetadataBearer {}

/**
 * <p>Deletes the specified database and all of its associated data. This action is irreversible. You must copy any data out of the database before deleting it if the data is to be retained.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceClient, DeleteKxDatabaseCommand } from "@aws-sdk/client-finspace"; // ES Modules import
 * // const { FinspaceClient, DeleteKxDatabaseCommand } = require("@aws-sdk/client-finspace"); // CommonJS import
 * // import type { FinspaceClientConfig } from "@aws-sdk/client-finspace";
 * const config = {}; // type is FinspaceClientConfig
 * const client = new FinspaceClient(config);
 * const input = { // DeleteKxDatabaseRequest
 *   environmentId: "STRING_VALUE", // required
 *   databaseName: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE", // required
 * };
 * const command = new DeleteKxDatabaseCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteKxDatabaseCommandInput - {@link DeleteKxDatabaseCommandInput}
 * @returns {@link DeleteKxDatabaseCommandOutput}
 * @see {@link DeleteKxDatabaseCommandInput} for command's `input` shape.
 * @see {@link DeleteKxDatabaseCommandOutput} for command's `response` shape.
 * @see {@link FinspaceClientResolvedConfig | config} for FinspaceClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict with this action, and it could not be completed.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *          failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link FinspaceServiceException}
 * <p>Base exception class for all service exceptions from Finspace service.</p>
 *
 *
 * @public
 */
export class DeleteKxDatabaseCommand extends command<DeleteKxDatabaseCommandInput, DeleteKxDatabaseCommandOutput>(
  _ep0,
  _mw0,
  "DeleteKxDatabase",
  DeleteKxDatabase$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteKxDatabaseRequest;
      output: {};
    };
    sdk: {
      input: DeleteKxDatabaseCommandInput;
      output: DeleteKxDatabaseCommandOutput;
    };
  };
}
