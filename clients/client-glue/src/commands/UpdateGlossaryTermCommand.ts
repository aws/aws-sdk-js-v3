// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateGlossaryTermRequest, UpdateGlossaryTermResponse } from "../models/models_3";
import { UpdateGlossaryTerm$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateGlossaryTermCommand}.
 */
export interface UpdateGlossaryTermCommandInput extends UpdateGlossaryTermRequest {}
/**
 * @public
 *
 * The output of {@link UpdateGlossaryTermCommand}.
 */
export interface UpdateGlossaryTermCommandOutput extends UpdateGlossaryTermResponse, __MetadataBearer {}

/**
 * <p>Updates a glossary term in Glue Data Catalog.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, UpdateGlossaryTermCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, UpdateGlossaryTermCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // UpdateGlossaryTermRequest
 *   Identifier: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   ShortDescription: "STRING_VALUE",
 *   LongDescription: "STRING_VALUE",
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new UpdateGlossaryTermCommand(input);
 * const response = await client.send(command);
 * // { // UpdateGlossaryTermResponse
 * //   Id: "STRING_VALUE",
 * //   GlossaryId: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   ShortDescription: "STRING_VALUE",
 * //   LongDescription: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateGlossaryTermCommandInput - {@link UpdateGlossaryTermCommandInput}
 * @returns {@link UpdateGlossaryTermCommandOutput}
 * @see {@link UpdateGlossaryTermCommandInput} for command's `input` shape.
 * @see {@link UpdateGlossaryTermCommandOutput} for command's `response` shape.
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
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
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
export class UpdateGlossaryTermCommand extends command<UpdateGlossaryTermCommandInput, UpdateGlossaryTermCommandOutput>(
  _ep0,
  _mw0,
  "UpdateGlossaryTerm",
  UpdateGlossaryTerm$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateGlossaryTermRequest;
      output: UpdateGlossaryTermResponse;
    };
    sdk: {
      input: UpdateGlossaryTermCommandInput;
      output: UpdateGlossaryTermCommandOutput;
    };
  };
}
