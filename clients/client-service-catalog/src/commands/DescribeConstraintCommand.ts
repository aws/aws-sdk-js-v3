// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeConstraintInput, DescribeConstraintOutput } from "../models/models_0";
import { de_DescribeConstraintCommand, se_DescribeConstraintCommand } from "../protocols/Aws_json1_1";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeConstraintCommand}.
 */
export interface DescribeConstraintCommandInput extends DescribeConstraintInput {}
/**
 * @public
 *
 * The output of {@link DescribeConstraintCommand}.
 */
export interface DescribeConstraintCommandOutput extends DescribeConstraintOutput, __MetadataBearer {}

/**
 * <p>Gets information about the specified constraint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, DescribeConstraintCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, DescribeConstraintCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const input = { // DescribeConstraintInput
 *   AcceptLanguage: "STRING_VALUE",
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new DescribeConstraintCommand(input);
 * const response = await client.send(command);
 * // { // DescribeConstraintOutput
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
 * @param DescribeConstraintCommandInput - {@link DescribeConstraintCommandInput}
 * @returns {@link DescribeConstraintCommandOutput}
 * @see {@link DescribeConstraintCommandInput} for command's `input` shape.
 * @see {@link DescribeConstraintCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for ServiceCatalogClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ServiceCatalogServiceException}
 * <p>Base exception class for all service exceptions from ServiceCatalog service.</p>
 *
 * @public
 */
export class DescribeConstraintCommand extends $Command
  .classBuilder<
    DescribeConstraintCommandInput,
    DescribeConstraintCommandOutput,
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
  .s("AWS242ServiceCatalogService", "DescribeConstraint", {})
  .n("ServiceCatalogClient", "DescribeConstraintCommand")
  .f(void 0, void 0)
  .ser(se_DescribeConstraintCommand)
  .de(de_DescribeConstraintCommand)
  .build() {}
