// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeCopyProductStatusInput, DescribeCopyProductStatusOutput } from "../models/models_0";
import { DescribeCopyProductStatus } from "../schemas/schemas_0";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeCopyProductStatusCommand}.
 */
export interface DescribeCopyProductStatusCommandInput extends DescribeCopyProductStatusInput {}
/**
 * @public
 *
 * The output of {@link DescribeCopyProductStatusCommand}.
 */
export interface DescribeCopyProductStatusCommandOutput extends DescribeCopyProductStatusOutput, __MetadataBearer {}

/**
 * <p>Gets the status of the specified copy product operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, DescribeCopyProductStatusCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, DescribeCopyProductStatusCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * // import type { ServiceCatalogClientConfig } from "@aws-sdk/client-service-catalog";
 * const config = {}; // type is ServiceCatalogClientConfig
 * const client = new ServiceCatalogClient(config);
 * const input = { // DescribeCopyProductStatusInput
 *   AcceptLanguage: "STRING_VALUE",
 *   CopyProductToken: "STRING_VALUE", // required
 * };
 * const command = new DescribeCopyProductStatusCommand(input);
 * const response = await client.send(command);
 * // { // DescribeCopyProductStatusOutput
 * //   CopyProductStatus: "SUCCEEDED" || "IN_PROGRESS" || "FAILED",
 * //   TargetProductId: "STRING_VALUE",
 * //   StatusDetail: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeCopyProductStatusCommandInput - {@link DescribeCopyProductStatusCommandInput}
 * @returns {@link DescribeCopyProductStatusCommandOutput}
 * @see {@link DescribeCopyProductStatusCommandInput} for command's `input` shape.
 * @see {@link DescribeCopyProductStatusCommandOutput} for command's `response` shape.
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
export class DescribeCopyProductStatusCommand extends $Command
  .classBuilder<
    DescribeCopyProductStatusCommandInput,
    DescribeCopyProductStatusCommandOutput,
    ServiceCatalogClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ServiceCatalogClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWS242ServiceCatalogService", "DescribeCopyProductStatus", {})
  .n("ServiceCatalogClient", "DescribeCopyProductStatusCommand")
  .sc(DescribeCopyProductStatus)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeCopyProductStatusInput;
      output: DescribeCopyProductStatusOutput;
    };
    sdk: {
      input: DescribeCopyProductStatusCommandInput;
      output: DescribeCopyProductStatusCommandOutput;
    };
  };
}
