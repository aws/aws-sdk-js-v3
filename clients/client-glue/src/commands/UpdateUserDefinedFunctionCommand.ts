// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateUserDefinedFunctionRequest, UpdateUserDefinedFunctionResponse } from "../models/models_3";
import { UpdateUserDefinedFunction$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateUserDefinedFunctionCommand}.
 */
export interface UpdateUserDefinedFunctionCommandInput extends UpdateUserDefinedFunctionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateUserDefinedFunctionCommand}.
 */
export interface UpdateUserDefinedFunctionCommandOutput extends UpdateUserDefinedFunctionResponse, __MetadataBearer {}

/**
 * Updates an existing function definition in the Data Catalog.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, UpdateUserDefinedFunctionCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, UpdateUserDefinedFunctionCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // UpdateUserDefinedFunctionRequest
 *   CatalogId: "STRING_VALUE",
 *   DatabaseName: "STRING_VALUE", // required
 *   FunctionName: "STRING_VALUE", // required
 *   FunctionInput: { // UserDefinedFunctionInput
 *     FunctionName: "STRING_VALUE",
 *     ClassName: "STRING_VALUE",
 *     OwnerName: "STRING_VALUE",
 *     FunctionType: "REGULAR_FUNCTION" || "AGGREGATE_FUNCTION" || "STORED_PROCEDURE",
 *     OwnerType: "USER" || "ROLE" || "GROUP",
 *     ResourceUris: [ // ResourceUriList
 *       { // ResourceUri
 *         ResourceType: "JAR" || "FILE" || "ARCHIVE",
 *         Uri: "STRING_VALUE",
 *       },
 *     ],
 *   },
 * };
 * const command = new UpdateUserDefinedFunctionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateUserDefinedFunctionCommandInput - {@link UpdateUserDefinedFunctionCommandInput}
 * @returns {@link UpdateUserDefinedFunctionCommandOutput}
 * @see {@link UpdateUserDefinedFunctionCommandInput} for command's `input` shape.
 * @see {@link UpdateUserDefinedFunctionCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *
 * A specified entity does not exist
 *
 * @throws {@link GlueEncryptionException} (client fault)
 *
 * An encryption operation failed.
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
export class UpdateUserDefinedFunctionCommand extends command<UpdateUserDefinedFunctionCommandInput, UpdateUserDefinedFunctionCommandOutput>(
  _ep0,
  _mw0,
  "UpdateUserDefinedFunction",
  UpdateUserDefinedFunction$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateUserDefinedFunctionRequest;
      output: {};
    };
    sdk: {
      input: UpdateUserDefinedFunctionCommandInput;
      output: UpdateUserDefinedFunctionCommandOutput;
    };
  };
}
