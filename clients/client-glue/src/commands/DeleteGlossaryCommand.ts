// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteGlossaryRequest, DeleteGlossaryResponse } from "../models/models_1";
import { DeleteGlossary$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteGlossaryCommand}.
 */
export interface DeleteGlossaryCommandInput extends DeleteGlossaryRequest {}
/**
 * @public
 *
 * The output of {@link DeleteGlossaryCommand}.
 */
export interface DeleteGlossaryCommandOutput extends DeleteGlossaryResponse, __MetadataBearer {}

/**
 * <p>Deletes a business glossary from Glue Data Catalog. A glossary cannot be deleted if it still contains glossary terms.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, DeleteGlossaryCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, DeleteGlossaryCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // DeleteGlossaryRequest
 *   Identifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteGlossaryCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteGlossaryCommandInput - {@link DeleteGlossaryCommandInput}
 * @returns {@link DeleteGlossaryCommandOutput}
 * @see {@link DeleteGlossaryCommandInput} for command's `input` shape.
 * @see {@link DeleteGlossaryCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Two processes are trying to modify a resource simultaneously.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The <code>CreatePartitions</code> API was called on a table that has indexes enabled.	</p>
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
export class DeleteGlossaryCommand extends command<DeleteGlossaryCommandInput, DeleteGlossaryCommandOutput>(
  _ep0,
  _mw0,
  "DeleteGlossary",
  DeleteGlossary$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteGlossaryRequest;
      output: {};
    };
    sdk: {
      input: DeleteGlossaryCommandInput;
      output: DeleteGlossaryCommandOutput;
    };
  };
}
