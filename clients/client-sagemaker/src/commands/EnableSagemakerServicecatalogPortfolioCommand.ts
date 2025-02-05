// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  EnableSagemakerServicecatalogPortfolioInput,
  EnableSagemakerServicecatalogPortfolioOutput,
} from "../models/models_3";
import {
  de_EnableSagemakerServicecatalogPortfolioCommand,
  se_EnableSagemakerServicecatalogPortfolioCommand,
} from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

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
export interface EnableSagemakerServicecatalogPortfolioCommandInput
  extends EnableSagemakerServicecatalogPortfolioInput {}
/**
 * @public
 *
 * The output of {@link EnableSagemakerServicecatalogPortfolioCommand}.
 */
export interface EnableSagemakerServicecatalogPortfolioCommandOutput
  extends EnableSagemakerServicecatalogPortfolioOutput,
    __MetadataBearer {}

/**
 * <p>Enables using Service Catalog in SageMaker. Service Catalog is used to create
 *             SageMaker projects.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, EnableSagemakerServicecatalogPortfolioCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, EnableSagemakerServicecatalogPortfolioCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SageMaker", "EnableSagemakerServicecatalogPortfolio", {})
  .n("SageMakerClient", "EnableSagemakerServicecatalogPortfolioCommand")
  .f(void 0, void 0)
  .ser(se_EnableSagemakerServicecatalogPortfolioCommand)
  .de(de_EnableSagemakerServicecatalogPortfolioCommand)
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
