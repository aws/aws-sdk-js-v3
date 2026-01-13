// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  EnableSagemakerServicecatalogPortfolioInput,
  EnableSagemakerServicecatalogPortfolioOutput,
} from "../models/models_3";
import type { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { EnableSagemakerServicecatalogPortfolio$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link EnableSagemakerServicecatalogPortfolioCommand}.
 */
export interface EnableSagemakerServicecatalogPortfolioCommandInput extends EnableSagemakerServicecatalogPortfolioInput {}
/**
 * @public
 *
 * The output of {@link EnableSagemakerServicecatalogPortfolioCommand}.
 */
export interface EnableSagemakerServicecatalogPortfolioCommandOutput extends EnableSagemakerServicecatalogPortfolioOutput, __MetadataBearer {}

/**
 * <p>Enables using Service Catalog in SageMaker. Service Catalog is used to create SageMaker projects.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, EnableSagemakerServicecatalogPortfolioCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, EnableSagemakerServicecatalogPortfolioCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = {};
 * const command = new EnableSagemakerServicecatalogPortfolioCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param EnableSagemakerServicecatalogPortfolioCommandInput - {@link EnableSagemakerServicecatalogPortfolioCommandInput}
 * @returns {@link EnableSagemakerServicecatalogPortfolioCommandOutput}
 * @see {@link EnableSagemakerServicecatalogPortfolioCommandInput} for command's `input` shape.
 * @see {@link EnableSagemakerServicecatalogPortfolioCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 *
 * @public
 */
export class EnableSagemakerServicecatalogPortfolioCommand extends $Command
  .classBuilder<
    EnableSagemakerServicecatalogPortfolioCommandInput,
    EnableSagemakerServicecatalogPortfolioCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SageMaker", "EnableSagemakerServicecatalogPortfolio", {})
  .n("SageMakerClient", "EnableSagemakerServicecatalogPortfolioCommand")
  .sc(EnableSagemakerServicecatalogPortfolio$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: {};
    };
    sdk: {
      input: EnableSagemakerServicecatalogPortfolioCommandInput;
      output: EnableSagemakerServicecatalogPortfolioCommandOutput;
    };
  };
}
