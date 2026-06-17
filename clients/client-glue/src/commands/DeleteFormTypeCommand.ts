// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import type { DeleteFormTypeRequest, DeleteFormTypeResponse } from "../models/models_1";
import { DeleteFormType$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteFormTypeCommand}.
 */
export interface DeleteFormTypeCommandInput extends DeleteFormTypeRequest {}
/**
 * @public
 *
 * The output of {@link DeleteFormTypeCommand}.
 */
export interface DeleteFormTypeCommandOutput extends DeleteFormTypeResponse, __MetadataBearer {}

/**
 * <p>Deletes a form type from Glue Data Catalog. A form type cannot be deleted if it is still referenced by an asset type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, DeleteFormTypeCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, DeleteFormTypeCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // DeleteFormTypeRequest
 *   Identifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteFormTypeCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteFormTypeCommandInput - {@link DeleteFormTypeCommandInput}
 * @returns {@link DeleteFormTypeCommandOutput}
 * @see {@link DeleteFormTypeCommandInput} for command's `input` shape.
 * @see {@link DeleteFormTypeCommandOutput} for command's `response` shape.
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
export class DeleteFormTypeCommand extends $Command
  .classBuilder<
    DeleteFormTypeCommandInput,
    DeleteFormTypeCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "DeleteFormType", {})
  .n("GlueClient", "DeleteFormTypeCommand")
  .sc(DeleteFormType$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteFormTypeRequest;
      output: {};
    };
    sdk: {
      input: DeleteFormTypeCommandInput;
      output: DeleteFormTypeCommandOutput;
    };
  };
}
