// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateConstraintInput, CreateConstraintOutput } from "../models/models_0";
import { de_CreateConstraintCommand, se_CreateConstraintCommand } from "../protocols/Aws_json1_1";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateConstraintCommand}.
 */
export interface CreateConstraintCommandInput extends CreateConstraintInput {}
/**
 * @public
 *
 * The output of {@link CreateConstraintCommand}.
 */
export interface CreateConstraintCommandOutput extends CreateConstraintOutput, __MetadataBearer {}

/**
 * <p>Creates a constraint.</p>
 *          <p>A delegated admin is authorized to invoke this command.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, CreateConstraintCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, CreateConstraintCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const input = { // CreateConstraintInput
 *   AcceptLanguage: "STRING_VALUE",
 *   PortfolioId: "STRING_VALUE", // required
 *   ProductId: "STRING_VALUE", // required
 *   Parameters: "STRING_VALUE", // required
 *   Type: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   IdempotencyToken: "STRING_VALUE", // required
 * };
 * const command = new CreateConstraintCommand(input);
 * const response = await client.send(command);
 * // { // CreateConstraintOutput
 * //   ConstraintDetail: { // ConstraintDetail
 * //     ConstraintId: "STRING_VALUE",
 * //     Type: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     Owner: "STRING_VALUE",
 * //     ProductId: "STRING_VALUE",
 * //     PortfolioId: "STRING_VALUE",
 * //   },
 * //   ConstraintParameters: "STRING_VALUE",
 * //   Status: "AVAILABLE" || "CREATING" || "FAILED",
 * // };
 *
 * ```
 *
 * @param CreateConstraintCommandInput - {@link CreateConstraintCommandInput}
 * @returns {@link CreateConstraintCommandOutput}
 * @see {@link CreateConstraintCommandInput} for command's `input` shape.
 * @see {@link CreateConstraintCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for ServiceCatalogClient's `config` shape.
 *
 * @throws {@link DuplicateResourceException} (client fault)
 *  <p>The specified resource is a duplicate.</p>
 *
 * @throws {@link InvalidParametersException} (client fault)
 *  <p>One or more parameters provided to the operation are not valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The current limits of the service would have been exceeded by this operation. Decrease your
 *          resource use or increase your service limits and retry the operation.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ServiceCatalogServiceException}
 * <p>Base exception class for all service exceptions from ServiceCatalog service.</p>
 *
 * @public
 */
export class CreateConstraintCommand extends $Command
  .classBuilder<
    CreateConstraintCommandInput,
    CreateConstraintCommandOutput,
    ServiceCatalogClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ServiceCatalogClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWS242ServiceCatalogService", "CreateConstraint", {})
  .n("ServiceCatalogClient", "CreateConstraintCommand")
  .f(void 0, void 0)
  .ser(se_CreateConstraintCommand)
  .de(de_CreateConstraintCommand)
  .build() {}
