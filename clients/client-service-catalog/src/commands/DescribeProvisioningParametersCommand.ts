// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeProvisioningParametersInput, DescribeProvisioningParametersOutput } from "../models/models_0";
import { DescribeProvisioningParameters$ } from "../schemas/schemas_0";
import type {
  ServiceCatalogClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ServiceCatalogClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeProvisioningParametersCommand}.
 */
export interface DescribeProvisioningParametersCommandInput extends DescribeProvisioningParametersInput {}
/**
 * @public
 *
 * The output of {@link DescribeProvisioningParametersCommand}.
 */
export interface DescribeProvisioningParametersCommandOutput
  extends DescribeProvisioningParametersOutput,
    __MetadataBearer {}

/**
 * <p>Gets information about the configuration required to provision the specified product using
 *          the specified provisioning artifact.</p>
 *          <p>If the output contains a TagOption key with an empty list of values, there is a
 *          TagOption conflict for that key. The end user cannot take action to fix the conflict, and
 *          launch is not blocked. In subsequent calls to <a>ProvisionProduct</a>,
 *          do not include conflicted TagOption keys as tags, or this causes the error
 *          "Parameter validation failed: Missing required parameter in Tags[<i>N</i>]:<i>Value</i>".
 *          Tag the provisioned product with the value <code>sc-tagoption-conflict-portfolioId-productId</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, DescribeProvisioningParametersCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, DescribeProvisioningParametersCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * // import type { ServiceCatalogClientConfig } from "@aws-sdk/client-service-catalog";
 * const config = {}; // type is ServiceCatalogClientConfig
 * const client = new ServiceCatalogClient(config);
 * const input = { // DescribeProvisioningParametersInput
 *   AcceptLanguage: "STRING_VALUE",
 *   ProductId: "STRING_VALUE",
 *   ProductName: "STRING_VALUE",
 *   ProvisioningArtifactId: "STRING_VALUE",
 *   ProvisioningArtifactName: "STRING_VALUE",
 *   PathId: "STRING_VALUE",
 *   PathName: "STRING_VALUE",
 * };
 * const command = new DescribeProvisioningParametersCommand(input);
 * const response = await client.send(command);
 * // { // DescribeProvisioningParametersOutput
 * //   ProvisioningArtifactParameters: [ // ProvisioningArtifactParameters
 * //     { // ProvisioningArtifactParameter
 * //       ParameterKey: "STRING_VALUE",
 * //       DefaultValue: "STRING_VALUE",
 * //       ParameterType: "STRING_VALUE",
 * //       IsNoEcho: true || false,
 * //       Description: "STRING_VALUE",
 * //       ParameterConstraints: { // ParameterConstraints
 * //         AllowedValues: [ // AllowedValues
 * //           "STRING_VALUE",
 * //         ],
 * //         AllowedPattern: "STRING_VALUE",
 * //         ConstraintDescription: "STRING_VALUE",
 * //         MaxLength: "STRING_VALUE",
 * //         MinLength: "STRING_VALUE",
 * //         MaxValue: "STRING_VALUE",
 * //         MinValue: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   ConstraintSummaries: [ // ConstraintSummaries
 * //     { // ConstraintSummary
 * //       Type: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //     },
 * //   ],
 * //   UsageInstructions: [ // UsageInstructions
 * //     { // UsageInstruction
 * //       Type: "STRING_VALUE",
 * //       Value: "STRING_VALUE",
 * //     },
 * //   ],
 * //   TagOptions: [ // TagOptionSummaries
 * //     { // TagOptionSummary
 * //       Key: "STRING_VALUE",
 * //       Values: [ // TagOptionValues
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   ProvisioningArtifactPreferences: { // ProvisioningArtifactPreferences
 * //     StackSetAccounts: [ // StackSetAccounts
 * //       "STRING_VALUE",
 * //     ],
 * //     StackSetRegions: [ // StackSetRegions
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * //   ProvisioningArtifactOutputs: [ // ProvisioningArtifactOutputs
 * //     { // ProvisioningArtifactOutput
 * //       Key: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //     },
 * //   ],
 * //   ProvisioningArtifactOutputKeys: [
 * //     {
 * //       Key: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeProvisioningParametersCommandInput - {@link DescribeProvisioningParametersCommandInput}
 * @returns {@link DescribeProvisioningParametersCommandOutput}
 * @see {@link DescribeProvisioningParametersCommandInput} for command's `input` shape.
 * @see {@link DescribeProvisioningParametersCommandOutput} for command's `response` shape.
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
export class DescribeProvisioningParametersCommand extends $Command
  .classBuilder<
    DescribeProvisioningParametersCommandInput,
    DescribeProvisioningParametersCommandOutput,
    ServiceCatalogClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ServiceCatalogClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWS242ServiceCatalogService", "DescribeProvisioningParameters", {})
  .n("ServiceCatalogClient", "DescribeProvisioningParametersCommand")
  .sc(DescribeProvisioningParameters$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeProvisioningParametersInput;
      output: DescribeProvisioningParametersOutput;
    };
    sdk: {
      input: DescribeProvisioningParametersCommandInput;
      output: DescribeProvisioningParametersCommandOutput;
    };
  };
}
