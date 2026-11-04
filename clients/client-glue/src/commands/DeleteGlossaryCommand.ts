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
 * Deletes a business glossary from Glue Data Catalog. A glossary cannot be deleted if it still contains glossary terms.
 *
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
 *
 * Access to a resource was denied.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *
 * Two processes are trying to modify a resource simultaneously.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The `CreatePartitions` API was called on a table that has indexes enabled.
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
