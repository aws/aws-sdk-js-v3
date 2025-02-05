// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeCopyProductStatusInput, DescribeCopyProductStatusOutput } from "../models/models_0";
import { de_DescribeCopyProductStatusCommand, se_DescribeCopyProductStatusCommand } from "../protocols/Aws_json1_1";
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
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWS242ServiceCatalogService", "DescribeCopyProductStatus", {})
  .n("ServiceCatalogClient", "DescribeCopyProductStatusCommand")
  .f(void 0, void 0)
  .ser(se_DescribeCopyProductStatusCommand)
  .de(de_DescribeCopyProductStatusCommand)
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
