// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeProductAsAdminInput, DescribeProductAsAdminOutput } from "../models/models_0";
import { DescribeProductAsAdmin } from "../schemas/schemas_0";
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
 * The input for {@link DescribeProductAsAdminCommand}.
 */
export interface DescribeProductAsAdminCommandInput extends DescribeProductAsAdminInput {}
/**
 * @public
 *
 * The output of {@link DescribeProductAsAdminCommand}.
 */
export interface DescribeProductAsAdminCommandOutput extends DescribeProductAsAdminOutput, __MetadataBearer {}

/**
 * <p>Gets information about the specified product. This operation is run with administrator access.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, DescribeProductAsAdminCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, DescribeProductAsAdminCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * // import type { ServiceCatalogClientConfig } from "@aws-sdk/client-service-catalog";
 * const config = {}; // type is ServiceCatalogClientConfig
 * const client = new ServiceCatalogClient(config);
 * const input = { // DescribeProductAsAdminInput
 *   AcceptLanguage: "STRING_VALUE",
 *   Id: "STRING_VALUE",
 *   Name: "STRING_VALUE",
 *   SourcePortfolioId: "STRING_VALUE",
 * };
 * const command = new DescribeProductAsAdminCommand(input);
 * const response = await client.send(command);
 * // { // DescribeProductAsAdminOutput
 * //   ProductViewDetail: { // ProductViewDetail
 * //     ProductViewSummary: { // ProductViewSummary
 * //       Id: "STRING_VALUE",
 * //       ProductId: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Owner: "STRING_VALUE",
 * //       ShortDescription: "STRING_VALUE",
 * //       Type: "CLOUD_FORMATION_TEMPLATE" || "MARKETPLACE" || "TERRAFORM_OPEN_SOURCE" || "TERRAFORM_CLOUD" || "EXTERNAL",
 * //       Distributor: "STRING_VALUE",
 * //       HasDefaultPath: true || false,
 * //       SupportEmail: "STRING_VALUE",
 * //       SupportDescription: "STRING_VALUE",
 * //       SupportUrl: "STRING_VALUE",
 * //     },
 * //     Status: "AVAILABLE" || "CREATING" || "FAILED",
 * //     ProductARN: "STRING_VALUE",
 * //     CreatedTime: new Date("TIMESTAMP"),
 * //     SourceConnection: { // SourceConnectionDetail
 * //       Type: "CODESTAR",
 * //       ConnectionParameters: { // SourceConnectionParameters
 * //         CodeStar: { // CodeStarParameters
 * //           ConnectionArn: "STRING_VALUE", // required
 * //           Repository: "STRING_VALUE", // required
 * //           Branch: "STRING_VALUE", // required
 * //           ArtifactPath: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       LastSync: { // LastSync
 * //         LastSyncTime: new Date("TIMESTAMP"),
 * //         LastSyncStatus: "SUCCEEDED" || "FAILED",
 * //         LastSyncStatusMessage: "STRING_VALUE",
 * //         LastSuccessfulSyncTime: new Date("TIMESTAMP"),
 * //         LastSuccessfulSyncProvisioningArtifactId: "STRING_VALUE",
 * //       },
 * //     },
 * //   },
 * //   ProvisioningArtifactSummaries: [ // ProvisioningArtifactSummaries
 * //     { // ProvisioningArtifactSummary
 * //       Id: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       CreatedTime: new Date("TIMESTAMP"),
 * //       ProvisioningArtifactMetadata: { // ProvisioningArtifactInfo
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   Tags: [ // Tags
 * //     { // Tag
 * //       Key: "STRING_VALUE", // required
 * //       Value: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   TagOptions: [ // TagOptionDetails
 * //     { // TagOptionDetail
 * //       Key: "STRING_VALUE",
 * //       Value: "STRING_VALUE",
 * //       Active: true || false,
 * //       Id: "STRING_VALUE",
 * //       Owner: "STRING_VALUE",
 * //     },
 * //   ],
 * //   Budgets: [ // Budgets
 * //     { // BudgetDetail
 * //       BudgetName: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeProductAsAdminCommandInput - {@link DescribeProductAsAdminCommandInput}
 * @returns {@link DescribeProductAsAdminCommandOutput}
 * @see {@link DescribeProductAsAdminCommandInput} for command's `input` shape.
 * @see {@link DescribeProductAsAdminCommandOutput} for command's `response` shape.
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
export class DescribeProductAsAdminCommand extends $Command
  .classBuilder<
    DescribeProductAsAdminCommandInput,
    DescribeProductAsAdminCommandOutput,
    ServiceCatalogClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ServiceCatalogClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWS242ServiceCatalogService", "DescribeProductAsAdmin", {})
  .n("ServiceCatalogClient", "DescribeProductAsAdminCommand")
  .sc(DescribeProductAsAdmin)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeProductAsAdminInput;
      output: DescribeProductAsAdminOutput;
    };
    sdk: {
      input: DescribeProductAsAdminCommandInput;
      output: DescribeProductAsAdminCommandOutput;
    };
  };
}
