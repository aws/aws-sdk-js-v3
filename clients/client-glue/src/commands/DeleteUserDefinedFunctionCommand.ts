// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteUserDefinedFunctionRequest, DeleteUserDefinedFunctionResponse } from "../models/models_1";
import { DeleteUserDefinedFunction$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteUserDefinedFunctionCommand}.
 */
export interface DeleteUserDefinedFunctionCommandInput extends DeleteUserDefinedFunctionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteUserDefinedFunctionCommand}.
 */
export interface DeleteUserDefinedFunctionCommandOutput extends DeleteUserDefinedFunctionResponse, __MetadataBearer {}

/**
 * Deletes an existing function definition from the Data Catalog.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, DeleteUserDefinedFunctionCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, DeleteUserDefinedFunctionCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // DeleteUserDefinedFunctionRequest
 *   CatalogId: "STRING_VALUE",
 *   DatabaseName: "STRING_VALUE", // required
 *   FunctionName: "STRING_VALUE", // required
 * };
 * const command = new DeleteUserDefinedFunctionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteUserDefinedFunctionCommandInput - {@link DeleteUserDefinedFunctionCommandInput}
 * @returns {@link DeleteUserDefinedFunctionCommandOutput}
 * @see {@link DeleteUserDefinedFunctionCommandInput} for command's `input` shape.
 * @see {@link DeleteUserDefinedFunctionCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *
 * A specified entity does not exist
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
export class DeleteUserDefinedFunctionCommand extends command<DeleteUserDefinedFunctionCommandInput, DeleteUserDefinedFunctionCommandOutput>(
  _ep0,
  _mw0,
  "DeleteUserDefinedFunction",
  DeleteUserDefinedFunction$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteUserDefinedFunctionRequest;
      output: {};
    };
    sdk: {
      input: DeleteUserDefinedFunctionCommandInput;
      output: DeleteUserDefinedFunctionCommandOutput;
    };
  };
}
