// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateGlossaryRequest, CreateGlossaryResponse } from "../models/models_1";
import { CreateGlossary$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateGlossaryCommand}.
 */
export interface CreateGlossaryCommandInput extends CreateGlossaryRequest {}
/**
 * @public
 *
 * The output of {@link CreateGlossaryCommand}.
 */
export interface CreateGlossaryCommandOutput extends CreateGlossaryResponse, __MetadataBearer {}

/**
 * <p>Creates a business glossary in Glue Data Catalog. A glossary is a container for glossary terms that define business concepts.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, CreateGlossaryCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, CreateGlossaryCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // CreateGlossaryRequest
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new CreateGlossaryCommand(input);
 * const response = await client.send(command);
 * // { // CreateGlossaryResponse
 * //   Id: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateGlossaryCommandInput - {@link CreateGlossaryCommandInput}
 * @returns {@link CreateGlossaryCommandOutput}
 * @see {@link CreateGlossaryCommandInput} for command's `input` shape.
 * @see {@link CreateGlossaryCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *  <p>A resource to be created or added already exists.</p>
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Two processes are trying to modify a resource simultaneously.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling threshhold was exceeded.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class CreateGlossaryCommand extends command<CreateGlossaryCommandInput, CreateGlossaryCommandOutput>(
  _ep0,
  _mw0,
  "CreateGlossary",
  CreateGlossary$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateGlossaryRequest;
      output: CreateGlossaryResponse;
    };
    sdk: {
      input: CreateGlossaryCommandInput;
      output: CreateGlossaryCommandOutput;
    };
  };
}
