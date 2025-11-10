// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { CreateBlueprintRequest, CreateBlueprintResponse } from "../models/models_1";
import { CreateBlueprint } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateBlueprintCommand}.
 */
export interface CreateBlueprintCommandInput extends CreateBlueprintRequest {}
/**
 * @public
 *
 * The output of {@link CreateBlueprintCommand}.
 */
export interface CreateBlueprintCommandOutput extends CreateBlueprintResponse, __MetadataBearer {}

/**
 * <p>Registers a blueprint with Glue.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, CreateBlueprintCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, CreateBlueprintCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // CreateBlueprintRequest
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   BlueprintLocation: "STRING_VALUE", // required
 *   Tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateBlueprintCommand(input);
 * const response = await client.send(command);
 * // { // CreateBlueprintResponse
 * //   Name: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateBlueprintCommandInput - {@link CreateBlueprintCommandInput}
 * @returns {@link CreateBlueprintCommandOutput}
 * @see {@link CreateBlueprintCommandInput} for command's `input` shape.
 * @see {@link CreateBlueprintCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *  <p>A resource to be created or added already exists.</p>
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
 * @throws {@link ResourceNumberLimitExceededException} (client fault)
 *  <p>A resource numerical limit was exceeded.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class CreateBlueprintCommand extends $Command
  .classBuilder<
    CreateBlueprintCommandInput,
    CreateBlueprintCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "CreateBlueprint", {})
  .n("GlueClient", "CreateBlueprintCommand")
  .sc(CreateBlueprint)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateBlueprintRequest;
      output: CreateBlueprintResponse;
    };
    sdk: {
      input: CreateBlueprintCommandInput;
      output: CreateBlueprintCommandOutput;
    };
  };
}
