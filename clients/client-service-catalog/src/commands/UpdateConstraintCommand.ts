// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateConstraintInput, UpdateConstraintOutput } from "../models/models_0";
import { de_UpdateConstraintCommand, se_UpdateConstraintCommand } from "../protocols/Aws_json1_1";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateConstraintCommand}.
 */
export interface UpdateConstraintCommandInput extends UpdateConstraintInput {}
/**
 * @public
 *
 * The output of {@link UpdateConstraintCommand}.
 */
export interface UpdateConstraintCommandOutput extends UpdateConstraintOutput, __MetadataBearer {}

/**
 * <p>Updates the specified constraint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, UpdateConstraintCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, UpdateConstraintCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * // import type { ServiceCatalogClientConfig } from "@aws-sdk/client-service-catalog";
 * const config = {}; // type is ServiceCatalogClientConfig
 * const client = new ServiceCatalogClient(config);
 * const input = { // UpdateConstraintInput
 *   AcceptLanguage: "STRING_VALUE",
 *   Id: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   Parameters: "STRING_VALUE",
 * };
 * const command = new UpdateConstraintCommand(input);
 * const response = await client.send(command);
 * // { // UpdateConstraintOutput
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
 * @param UpdateConstraintCommandInput - {@link UpdateConstraintCommandInput}
 * @returns {@link UpdateConstraintCommandOutput}
 * @see {@link UpdateConstraintCommandInput} for command's `input` shape.
 * @see {@link UpdateConstraintCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for ServiceCatalogClient's `config` shape.
 *
 * @throws {@link InvalidParametersException} (client fault)
 *  <p>One or more parameters provided to the operation are not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ServiceCatalogServiceException}
 * <p>Base exception class for all service exceptions from ServiceCatalog service.</p>
 *
 *
 * @public
 */
export class UpdateConstraintCommand extends $Command
  .classBuilder<
    UpdateConstraintCommandInput,
    UpdateConstraintCommandOutput,
    ServiceCatalogClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ServiceCatalogClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWS242ServiceCatalogService", "UpdateConstraint", {})
  .n("ServiceCatalogClient", "UpdateConstraintCommand")
  .f(void 0, void 0)
  .ser(se_UpdateConstraintCommand)
  .de(de_UpdateConstraintCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateConstraintInput;
      output: UpdateConstraintOutput;
    };
    sdk: {
      input: UpdateConstraintCommandInput;
      output: UpdateConstraintCommandOutput;
    };
  };
}
