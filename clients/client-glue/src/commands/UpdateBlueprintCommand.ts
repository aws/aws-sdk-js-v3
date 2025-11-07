// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { UpdateBlueprintRequest, UpdateBlueprintResponse } from "../models/models_3";
import { UpdateBlueprint } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateBlueprintCommand}.
 */
export interface UpdateBlueprintCommandInput extends UpdateBlueprintRequest {}
/**
 * @public
 *
 * The output of {@link UpdateBlueprintCommand}.
 */
export interface UpdateBlueprintCommandOutput extends UpdateBlueprintResponse, __MetadataBearer {}

/**
 * <p>Updates a registered blueprint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, UpdateBlueprintCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, UpdateBlueprintCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // UpdateBlueprintRequest
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   BlueprintLocation: "STRING_VALUE", // required
 * };
 * const command = new UpdateBlueprintCommand(input);
 * const response = await client.send(command);
 * // { // UpdateBlueprintResponse
 * //   Name: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateBlueprintCommandInput - {@link UpdateBlueprintCommandInput}
 * @returns {@link UpdateBlueprintCommandOutput}
 * @see {@link UpdateBlueprintCommandInput} for command's `input` shape.
 * @see {@link UpdateBlueprintCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Two processes are trying to modify a resource simultaneously.</p>
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link IllegalBlueprintStateException} (client fault)
 *  <p>The blueprint is in an invalid state to perform a requested operation.</p>
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
export class UpdateBlueprintCommand extends $Command
  .classBuilder<
    UpdateBlueprintCommandInput,
    UpdateBlueprintCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "UpdateBlueprint", {})
  .n("GlueClient", "UpdateBlueprintCommand")
  .sc(UpdateBlueprint)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateBlueprintRequest;
      output: UpdateBlueprintResponse;
    };
    sdk: {
      input: UpdateBlueprintCommandInput;
      output: UpdateBlueprintCommandOutput;
    };
  };
}
