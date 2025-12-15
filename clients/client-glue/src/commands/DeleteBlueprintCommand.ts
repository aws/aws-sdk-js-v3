// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import type { DeleteBlueprintRequest, DeleteBlueprintResponse } from "../models/models_1";
import { DeleteBlueprint$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteBlueprintCommand}.
 */
export interface DeleteBlueprintCommandInput extends DeleteBlueprintRequest {}
/**
 * @public
 *
 * The output of {@link DeleteBlueprintCommand}.
 */
export interface DeleteBlueprintCommandOutput extends DeleteBlueprintResponse, __MetadataBearer {}

/**
 * <p>Deletes an existing blueprint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, DeleteBlueprintCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, DeleteBlueprintCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // DeleteBlueprintRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new DeleteBlueprintCommand(input);
 * const response = await client.send(command);
 * // { // DeleteBlueprintResponse
 * //   Name: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteBlueprintCommandInput - {@link DeleteBlueprintCommandInput}
 * @returns {@link DeleteBlueprintCommandOutput}
 * @see {@link DeleteBlueprintCommandInput} for command's `input` shape.
 * @see {@link DeleteBlueprintCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
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
export class DeleteBlueprintCommand extends $Command
  .classBuilder<
    DeleteBlueprintCommandInput,
    DeleteBlueprintCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "DeleteBlueprint", {})
  .n("GlueClient", "DeleteBlueprintCommand")
  .sc(DeleteBlueprint$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteBlueprintRequest;
      output: DeleteBlueprintResponse;
    };
    sdk: {
      input: DeleteBlueprintCommandInput;
      output: DeleteBlueprintCommandOutput;
    };
  };
}
