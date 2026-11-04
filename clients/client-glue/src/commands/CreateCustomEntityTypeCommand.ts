// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateCustomEntityTypeRequest, CreateCustomEntityTypeResponse } from "../models/models_1";
import { CreateCustomEntityType$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateCustomEntityTypeCommand}.
 */
export interface CreateCustomEntityTypeCommandInput extends CreateCustomEntityTypeRequest {}
/**
 * @public
 *
 * The output of {@link CreateCustomEntityTypeCommand}.
 */
export interface CreateCustomEntityTypeCommandOutput extends CreateCustomEntityTypeResponse, __MetadataBearer {}

/**
 * Creates a custom pattern that is used to detect sensitive data across the columns and rows of your structured data.
 *
 * Each custom pattern you create specifies a regular expression and an optional list of context words. If no context words are passed only a regular expression is checked.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, CreateCustomEntityTypeCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, CreateCustomEntityTypeCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // CreateCustomEntityTypeRequest
 *   Name: "STRING_VALUE", // required
 *   RegexString: "STRING_VALUE", // required
 *   ContextWords: [ // ContextWords
 *     "STRING_VALUE",
 *   ],
 *   Tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateCustomEntityTypeCommand(input);
 * const response = await client.send(command);
 * // { // CreateCustomEntityTypeResponse
 * //   Name: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateCustomEntityTypeCommandInput - {@link CreateCustomEntityTypeCommandInput}
 * @returns {@link CreateCustomEntityTypeCommandOutput}
 * @see {@link CreateCustomEntityTypeCommandInput} for command's `input` shape.
 * @see {@link CreateCustomEntityTypeCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access to a resource was denied.
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *
 * A resource to be created or added already exists.
 *
 * @throws {@link IdempotentParameterMismatchException} (client fault)
 *
 * The same unique identifier was associated with two different records.
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
export class CreateCustomEntityTypeCommand extends command<CreateCustomEntityTypeCommandInput, CreateCustomEntityTypeCommandOutput>(
  _ep0,
  _mw0,
  "CreateCustomEntityType",
  CreateCustomEntityType$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateCustomEntityTypeRequest;
      output: CreateCustomEntityTypeResponse;
    };
    sdk: {
      input: CreateCustomEntityTypeCommandInput;
      output: CreateCustomEntityTypeCommandOutput;
    };
  };
}
