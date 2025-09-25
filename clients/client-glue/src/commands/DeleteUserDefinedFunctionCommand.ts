// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { DeleteUserDefinedFunctionRequest, DeleteUserDefinedFunctionResponse } from "../models/models_1";
import { DeleteUserDefinedFunction } from "../schemas/schemas_29_DeleteUserDefinedFunction";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteUserDefinedFunctionCommand}.
 */
export interface DeleteUserDefinedFunctionCommandInput extends DeleteUserDefinedFunctionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteUserDefinedFunctionCommand}.
 */
export interface DeleteUserDefinedFunctionCommandOutput extends DeleteUserDefinedFunctionResponse, __MetadataBearer {}

/**
 * <p>Deletes an existing function definition from the Data Catalog.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, DeleteUserDefinedFunctionCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, DeleteUserDefinedFunctionCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // DeleteUserDefinedFunctionRequest
 *   CatalogId: "STRING_VALUE",
 *   DatabaseName: "STRING_VALUE", // required
 *   FunctionName: "STRING_VALUE", // required
 * };
 * const command = new DeleteUserDefinedFunctionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteUserDefinedFunctionCommandInput - {@link DeleteUserDefinedFunctionCommandInput}
 * @returns {@link DeleteUserDefinedFunctionCommandOutput}
 * @see {@link DeleteUserDefinedFunctionCommandInput} for command's `input` shape.
 * @see {@link DeleteUserDefinedFunctionCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
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
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class DeleteUserDefinedFunctionCommand extends $Command
  .classBuilder<
    DeleteUserDefinedFunctionCommandInput,
    DeleteUserDefinedFunctionCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "DeleteUserDefinedFunction", {})
  .n("GlueClient", "DeleteUserDefinedFunctionCommand")
  .sc(DeleteUserDefinedFunction)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteUserDefinedFunctionRequest;
      output: {};
    };
    sdk: {
      input: DeleteUserDefinedFunctionCommandInput;
      output: DeleteUserDefinedFunctionCommandOutput;
    };
  };
}
