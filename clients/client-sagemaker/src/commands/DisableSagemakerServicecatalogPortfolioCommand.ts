// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  DisableSagemakerServicecatalogPortfolioInput,
  DisableSagemakerServicecatalogPortfolioOutput,
} from "../models/models_3";
import {
  de_DisableSagemakerServicecatalogPortfolioCommand,
  se_DisableSagemakerServicecatalogPortfolioCommand,
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
 * The input for {@link DisableSagemakerServicecatalogPortfolioCommand}.
 */
export interface DisableSagemakerServicecatalogPortfolioCommandInput
  extends DisableSagemakerServicecatalogPortfolioInput {}
/**
 * @public
 *
 * The output of {@link DisableSagemakerServicecatalogPortfolioCommand}.
 */
export interface DisableSagemakerServicecatalogPortfolioCommandOutput
  extends DisableSagemakerServicecatalogPortfolioOutput,
    __MetadataBearer {}

/**
 * <p>Disables using Service Catalog in SageMaker. Service Catalog is used to create
 *             SageMaker projects.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DisableSagemakerServicecatalogPortfolioCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DisableSagemakerServicecatalogPortfolioCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = {};
 * const command = new DisableSagemakerServicecatalogPortfolioCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisableSagemakerServicecatalogPortfolioCommandInput - {@link DisableSagemakerServicecatalogPortfolioCommandInput}
 * @returns {@link DisableSagemakerServicecatalogPortfolioCommandOutput}
 * @see {@link DisableSagemakerServicecatalogPortfolioCommandInput} for command's `input` shape.
 * @see {@link DisableSagemakerServicecatalogPortfolioCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 * @public
 */
export class DisableSagemakerServicecatalogPortfolioCommand extends $Command
  .classBuilder<
    DisableSagemakerServicecatalogPortfolioCommandInput,
    DisableSagemakerServicecatalogPortfolioCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SageMaker", "DisableSagemakerServicecatalogPortfolio", {})
  .n("SageMakerClient", "DisableSagemakerServicecatalogPortfolioCommand")
  .f(void 0, void 0)
  .ser(se_DisableSagemakerServicecatalogPortfolioCommand)
  .de(de_DisableSagemakerServicecatalogPortfolioCommand)
  .build() {}
