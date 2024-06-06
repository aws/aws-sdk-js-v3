// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetSagemakerServicecatalogPortfolioStatusInput,
  GetSagemakerServicecatalogPortfolioStatusOutput,
} from "../models/models_3";
import {
  de_GetSagemakerServicecatalogPortfolioStatusCommand,
  se_GetSagemakerServicecatalogPortfolioStatusCommand,
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
 * The input for {@link GetSagemakerServicecatalogPortfolioStatusCommand}.
 */
export interface GetSagemakerServicecatalogPortfolioStatusCommandInput
  extends GetSagemakerServicecatalogPortfolioStatusInput {}
/**
 * @public
 *
 * The output of {@link GetSagemakerServicecatalogPortfolioStatusCommand}.
 */
export interface GetSagemakerServicecatalogPortfolioStatusCommandOutput
  extends GetSagemakerServicecatalogPortfolioStatusOutput,
    __MetadataBearer {}

/**
 * <p>Gets the status of Service Catalog in SageMaker. Service Catalog is used to create
 *             SageMaker projects.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, GetSagemakerServicecatalogPortfolioStatusCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, GetSagemakerServicecatalogPortfolioStatusCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = {};
 * const command = new GetSagemakerServicecatalogPortfolioStatusCommand(input);
 * const response = await client.send(command);
 * // { // GetSagemakerServicecatalogPortfolioStatusOutput
 * //   Status: "Enabled" || "Disabled",
 * // };
 *
 * ```
 *
 * @param GetSagemakerServicecatalogPortfolioStatusCommandInput - {@link GetSagemakerServicecatalogPortfolioStatusCommandInput}
 * @returns {@link GetSagemakerServicecatalogPortfolioStatusCommandOutput}
 * @see {@link GetSagemakerServicecatalogPortfolioStatusCommandInput} for command's `input` shape.
 * @see {@link GetSagemakerServicecatalogPortfolioStatusCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 * @public
 */
export class GetSagemakerServicecatalogPortfolioStatusCommand extends $Command
  .classBuilder<
    GetSagemakerServicecatalogPortfolioStatusCommandInput,
    GetSagemakerServicecatalogPortfolioStatusCommandOutput,
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
  .s("SageMaker", "GetSagemakerServicecatalogPortfolioStatus", {})
  .n("SageMakerClient", "GetSagemakerServicecatalogPortfolioStatusCommand")
  .f(void 0, void 0)
  .ser(se_GetSagemakerServicecatalogPortfolioStatusCommand)
  .de(de_GetSagemakerServicecatalogPortfolioStatusCommand)
  .build() {}
