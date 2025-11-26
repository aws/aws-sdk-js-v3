// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeProvisioningArtifactInput, DescribeProvisioningArtifactOutput } from "../models/models_0";
import { DescribeProvisioningArtifact } from "../schemas/schemas_0";
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
 * The input for {@link DescribeProvisioningArtifactCommand}.
 */
export interface DescribeProvisioningArtifactCommandInput extends DescribeProvisioningArtifactInput {}
/**
 * @public
 *
 * The output of {@link DescribeProvisioningArtifactCommand}.
 */
export interface DescribeProvisioningArtifactCommandOutput
  extends DescribeProvisioningArtifactOutput,
    __MetadataBearer {}

/**
 * <p>Gets information about the specified provisioning artifact (also known as a version) for the specified product.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, DescribeProvisioningArtifactCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, DescribeProvisioningArtifactCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * // import type { ServiceCatalogClientConfig } from "@aws-sdk/client-service-catalog";
 * const config = {}; // type is ServiceCatalogClientConfig
 * const client = new ServiceCatalogClient(config);
 * const input = { // DescribeProvisioningArtifactInput
 *   AcceptLanguage: "STRING_VALUE",
 *   ProvisioningArtifactId: "STRING_VALUE",
 *   ProductId: "STRING_VALUE",
 *   ProvisioningArtifactName: "STRING_VALUE",
 *   ProductName: "STRING_VALUE",
 *   Verbose: true || false,
 *   IncludeProvisioningArtifactParameters: true || false,
 * };
 * const command = new DescribeProvisioningArtifactCommand(input);
 * const response = await client.send(command);
 * // { // DescribeProvisioningArtifactOutput
 * //   ProvisioningArtifactDetail: { // ProvisioningArtifactDetail
 * //     Id: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     Type: "CLOUD_FORMATION_TEMPLATE" || "MARKETPLACE_AMI" || "MARKETPLACE_CAR" || "TERRAFORM_OPEN_SOURCE" || "TERRAFORM_CLOUD" || "EXTERNAL",
 * //     CreatedTime: new Date("TIMESTAMP"),
 * //     Active: true || false,
 * //     Guidance: "DEFAULT" || "DEPRECATED",
 * //     SourceRevision: "STRING_VALUE",
 * //   },
 * //   Info: { // ProvisioningArtifactInfo
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   Status: "AVAILABLE" || "CREATING" || "FAILED",
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
 * // };
 *
 * ```
 *
 * @param DescribeProvisioningArtifactCommandInput - {@link DescribeProvisioningArtifactCommandInput}
 * @returns {@link DescribeProvisioningArtifactCommandOutput}
 * @see {@link DescribeProvisioningArtifactCommandInput} for command's `input` shape.
 * @see {@link DescribeProvisioningArtifactCommandOutput} for command's `response` shape.
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
export class DescribeProvisioningArtifactCommand extends $Command
  .classBuilder<
    DescribeProvisioningArtifactCommandInput,
    DescribeProvisioningArtifactCommandOutput,
    ServiceCatalogClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ServiceCatalogClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWS242ServiceCatalogService", "DescribeProvisioningArtifact", {})
  .n("ServiceCatalogClient", "DescribeProvisioningArtifactCommand")
  .sc(DescribeProvisioningArtifact)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeProvisioningArtifactInput;
      output: DescribeProvisioningArtifactOutput;
    };
    sdk: {
      input: DescribeProvisioningArtifactCommandInput;
      output: DescribeProvisioningArtifactCommandOutput;
    };
  };
}
