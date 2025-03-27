// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeServiceActionExecutionParametersInput,
  DescribeServiceActionExecutionParametersOutput,
} from "../models/models_0";
import {
  de_DescribeServiceActionExecutionParametersCommand,
  se_DescribeServiceActionExecutionParametersCommand,
} from "../protocols/Aws_json1_1";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeServiceActionExecutionParametersCommand}.
 */
export interface DescribeServiceActionExecutionParametersCommandInput
  extends DescribeServiceActionExecutionParametersInput {}
/**
 * @public
 *
 * The output of {@link DescribeServiceActionExecutionParametersCommand}.
 */
export interface DescribeServiceActionExecutionParametersCommandOutput
  extends DescribeServiceActionExecutionParametersOutput,
    __MetadataBearer {}

/**
 * <p>Finds the default parameters for a specific self-service action on a specific provisioned product and returns a map of the results to the user.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, DescribeServiceActionExecutionParametersCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, DescribeServiceActionExecutionParametersCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const input = { // DescribeServiceActionExecutionParametersInput
 *   ProvisionedProductId: "STRING_VALUE", // required
 *   ServiceActionId: "STRING_VALUE", // required
 *   AcceptLanguage: "STRING_VALUE",
 * };
 * const command = new DescribeServiceActionExecutionParametersCommand(input);
 * const response = await client.send(command);
 * // { // DescribeServiceActionExecutionParametersOutput
 * //   ServiceActionParameters: [ // ExecutionParameters
 * //     { // ExecutionParameter
 * //       Name: "STRING_VALUE",
 * //       Type: "STRING_VALUE",
 * //       DefaultValues: [ // ExecutionParameterValueList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeServiceActionExecutionParametersCommandInput - {@link DescribeServiceActionExecutionParametersCommandInput}
 * @returns {@link DescribeServiceActionExecutionParametersCommandOutput}
 * @see {@link DescribeServiceActionExecutionParametersCommandInput} for command's `input` shape.
 * @see {@link DescribeServiceActionExecutionParametersCommandOutput} for command's `response` shape.
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
export class DescribeServiceActionExecutionParametersCommand extends $Command
  .classBuilder<
    DescribeServiceActionExecutionParametersCommandInput,
    DescribeServiceActionExecutionParametersCommandOutput,
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
  .s("AWS242ServiceCatalogService", "DescribeServiceActionExecutionParameters", {})
  .n("ServiceCatalogClient", "DescribeServiceActionExecutionParametersCommand")
  .f(void 0, void 0)
  .ser(se_DescribeServiceActionExecutionParametersCommand)
  .de(de_DescribeServiceActionExecutionParametersCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeServiceActionExecutionParametersInput;
      output: DescribeServiceActionExecutionParametersOutput;
    };
    sdk: {
      input: DescribeServiceActionExecutionParametersCommandInput;
      output: DescribeServiceActionExecutionParametersCommandOutput;
    };
  };
}
