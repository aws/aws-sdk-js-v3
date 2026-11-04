// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateUserDefinedFunctionRequest, CreateUserDefinedFunctionResponse } from "../models/models_1";
import { CreateUserDefinedFunction$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateUserDefinedFunctionCommand}.
 */
export interface CreateUserDefinedFunctionCommandInput extends CreateUserDefinedFunctionRequest {}
/**
 * @public
 *
 * The output of {@link CreateUserDefinedFunctionCommand}.
 */
export interface CreateUserDefinedFunctionCommandOutput extends CreateUserDefinedFunctionResponse, __MetadataBearer {}

/**
 * Creates a new function definition in the Data Catalog.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, CreateUserDefinedFunctionCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, CreateUserDefinedFunctionCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // CreateUserDefinedFunctionRequest
 *   CatalogId: "STRING_VALUE",
 *   DatabaseName: "STRING_VALUE", // required
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
 * const command = new CreateUserDefinedFunctionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateUserDefinedFunctionCommandInput - {@link CreateUserDefinedFunctionCommandInput}
 * @returns {@link CreateUserDefinedFunctionCommandOutput}
 * @see {@link CreateUserDefinedFunctionCommandInput} for command's `input` shape.
 * @see {@link CreateUserDefinedFunctionCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *
 * A resource to be created or added already exists.
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
 * @throws {@link ResourceNumberLimitExceededException} (client fault)
 *
 * A resource numerical limit was exceeded.
 *
 * @throws {@link GlueServiceException}
 *
 * Base exception class for all service exceptions from Glue service.
 *
 * @public
 */
export class CreateUserDefinedFunctionCommand extends command<CreateUserDefinedFunctionCommandInput, CreateUserDefinedFunctionCommandOutput>(
  _ep0,
  _mw0,
  "CreateUserDefinedFunction",
  CreateUserDefinedFunction$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateUserDefinedFunctionRequest;
      output: {};
    };
    sdk: {
      input: CreateUserDefinedFunctionCommandInput;
      output: CreateUserDefinedFunctionCommandOutput;
    };
  };
}
