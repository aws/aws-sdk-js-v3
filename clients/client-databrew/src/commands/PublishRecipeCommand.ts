// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DataBrewClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataBrewClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { PublishRecipeRequest, PublishRecipeResponse } from "../models/models_0";
import { PublishRecipe } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PublishRecipeCommand}.
 */
export interface PublishRecipeCommandInput extends PublishRecipeRequest {}
/**
 * @public
 *
 * The output of {@link PublishRecipeCommand}.
 */
export interface PublishRecipeCommandOutput extends PublishRecipeResponse, __MetadataBearer {}

/**
 * <p>Publishes a new version of a DataBrew recipe.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, PublishRecipeCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, PublishRecipeCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * // import type { DataBrewClientConfig } from "@aws-sdk/client-databrew";
 * const config = {}; // type is DataBrewClientConfig
 * const client = new DataBrewClient(config);
 * const input = { // PublishRecipeRequest
 *   Description: "STRING_VALUE",
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new PublishRecipeCommand(input);
 * const response = await client.send(command);
 * // { // PublishRecipeResponse
 * //   Name: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param PublishRecipeCommandInput - {@link PublishRecipeCommandInput}
 * @returns {@link PublishRecipeCommandOutput}
 * @see {@link PublishRecipeCommandInput} for command's `input` shape.
 * @see {@link PublishRecipeCommandOutput} for command's `response` shape.
 * @see {@link DataBrewClientResolvedConfig | config} for DataBrewClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>A service quota is exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input parameters for this request failed validation.</p>
 *
 * @throws {@link DataBrewServiceException}
 * <p>Base exception class for all service exceptions from DataBrew service.</p>
 *
 *
 * @public
 */
export class PublishRecipeCommand extends $Command
  .classBuilder<
    PublishRecipeCommandInput,
    PublishRecipeCommandOutput,
    DataBrewClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataBrewClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlueDataBrew", "PublishRecipe", {})
  .n("DataBrewClient", "PublishRecipeCommand")
  .sc(PublishRecipe)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PublishRecipeRequest;
      output: PublishRecipeResponse;
    };
    sdk: {
      input: PublishRecipeCommandInput;
      output: PublishRecipeCommandOutput;
    };
  };
}
