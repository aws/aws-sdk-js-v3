// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeServiceActionInput, DescribeServiceActionOutput } from "../models/models_0";
import { DescribeServiceAction } from "../schemas/schemas_0";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeServiceActionCommand}.
 */
export interface DescribeServiceActionCommandInput extends DescribeServiceActionInput {}
/**
 * @public
 *
 * The output of {@link DescribeServiceActionCommand}.
 */
export interface DescribeServiceActionCommandOutput extends DescribeServiceActionOutput, __MetadataBearer {}

/**
 * <p>Describes a self-service action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, DescribeServiceActionCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, DescribeServiceActionCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * // import type { ServiceCatalogClientConfig } from "@aws-sdk/client-service-catalog";
 * const config = {}; // type is ServiceCatalogClientConfig
 * const client = new ServiceCatalogClient(config);
 * const input = { // DescribeServiceActionInput
 *   Id: "STRING_VALUE", // required
 *   AcceptLanguage: "STRING_VALUE",
 * };
 * const command = new DescribeServiceActionCommand(input);
 * const response = await client.send(command);
 * // { // DescribeServiceActionOutput
 * //   ServiceActionDetail: { // ServiceActionDetail
 * //     ServiceActionSummary: { // ServiceActionSummary
 * //       Id: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       DefinitionType: "SSM_AUTOMATION",
 * //     },
 * //     Definition: { // ServiceActionDefinitionMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeServiceActionCommandInput - {@link DescribeServiceActionCommandInput}
 * @returns {@link DescribeServiceActionCommandOutput}
 * @see {@link DescribeServiceActionCommandInput} for command's `input` shape.
 * @see {@link DescribeServiceActionCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for ServiceCatalogClient's `config` shape.
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
export class DescribeServiceActionCommand extends $Command
  .classBuilder<
    DescribeServiceActionCommandInput,
    DescribeServiceActionCommandOutput,
    ServiceCatalogClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ServiceCatalogClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWS242ServiceCatalogService", "DescribeServiceAction", {})
  .n("ServiceCatalogClient", "DescribeServiceActionCommand")
  .sc(DescribeServiceAction)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeServiceActionInput;
      output: DescribeServiceActionOutput;
    };
    sdk: {
      input: DescribeServiceActionCommandInput;
      output: DescribeServiceActionCommandOutput;
    };
  };
}
