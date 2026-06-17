// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import type { DeleteGlossaryTermRequest, DeleteGlossaryTermResponse } from "../models/models_1";
import { DeleteGlossaryTerm$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteGlossaryTermCommand}.
 */
export interface DeleteGlossaryTermCommandInput extends DeleteGlossaryTermRequest {}
/**
 * @public
 *
 * The output of {@link DeleteGlossaryTermCommand}.
 */
export interface DeleteGlossaryTermCommandOutput extends DeleteGlossaryTermResponse, __MetadataBearer {}

/**
 * <p>Deletes a glossary term from Glue Data Catalog.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, DeleteGlossaryTermCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, DeleteGlossaryTermCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // DeleteGlossaryTermRequest
 *   Identifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteGlossaryTermCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteGlossaryTermCommandInput - {@link DeleteGlossaryTermCommandInput}
 * @returns {@link DeleteGlossaryTermCommandOutput}
 * @see {@link DeleteGlossaryTermCommandInput} for command's `input` shape.
 * @see {@link DeleteGlossaryTermCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
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
export class DeleteGlossaryTermCommand extends $Command
  .classBuilder<
    DeleteGlossaryTermCommandInput,
    DeleteGlossaryTermCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "DeleteGlossaryTerm", {})
  .n("GlueClient", "DeleteGlossaryTermCommand")
  .sc(DeleteGlossaryTerm$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteGlossaryTermRequest;
      output: {};
    };
    sdk: {
      input: DeleteGlossaryTermCommandInput;
      output: DeleteGlossaryTermCommandOutput;
    };
  };
}
