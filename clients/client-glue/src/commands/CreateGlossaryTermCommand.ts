// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateGlossaryTermRequest, CreateGlossaryTermResponse } from "../models/models_1";
import { CreateGlossaryTerm$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateGlossaryTermCommand}.
 */
export interface CreateGlossaryTermCommandInput extends CreateGlossaryTermRequest {}
/**
 * @public
 *
 * The output of {@link CreateGlossaryTermCommand}.
 */
export interface CreateGlossaryTermCommandOutput extends CreateGlossaryTermResponse, __MetadataBearer {}

/**
 * Creates a glossary term within a business glossary in Glue Data Catalog.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, CreateGlossaryTermCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, CreateGlossaryTermCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // CreateGlossaryTermRequest
 *   GlossaryIdentifier: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   ShortDescription: "STRING_VALUE",
 *   LongDescription: "STRING_VALUE",
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new CreateGlossaryTermCommand(input);
 * const response = await client.send(command);
 * // { // CreateGlossaryTermResponse
 * //   Id: "STRING_VALUE",
 * //   GlossaryId: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   ShortDescription: "STRING_VALUE",
 * //   LongDescription: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateGlossaryTermCommandInput - {@link CreateGlossaryTermCommandInput}
 * @returns {@link CreateGlossaryTermCommandOutput}
 * @see {@link CreateGlossaryTermCommandInput} for command's `input` shape.
 * @see {@link CreateGlossaryTermCommandOutput} for command's `response` shape.
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
 * @throws {@link ConcurrentModificationException} (client fault)
 *
 * Two processes are trying to modify a resource simultaneously.
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
 * @throws {@link ThrottlingException} (client fault)
 *
 * The throttling threshhold was exceeded.
 *
 * @throws {@link GlueServiceException}
 *
 * Base exception class for all service exceptions from Glue service.
 *
 * @public
 */
export class CreateGlossaryTermCommand extends command<CreateGlossaryTermCommandInput, CreateGlossaryTermCommandOutput>(
  _ep0,
  _mw0,
  "CreateGlossaryTerm",
  CreateGlossaryTerm$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateGlossaryTermRequest;
      output: CreateGlossaryTermResponse;
    };
    sdk: {
      input: CreateGlossaryTermCommandInput;
      output: CreateGlossaryTermCommandOutput;
    };
  };
}
