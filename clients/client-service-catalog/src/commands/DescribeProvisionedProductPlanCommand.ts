// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeProvisionedProductPlanInput, DescribeProvisionedProductPlanOutput } from "../models/models_0";
import { DescribeProvisionedProductPlan } from "../schemas/schemas_0";
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
 * The input for {@link DescribeProvisionedProductPlanCommand}.
 */
export interface DescribeProvisionedProductPlanCommandInput extends DescribeProvisionedProductPlanInput {}
/**
 * @public
 *
 * The output of {@link DescribeProvisionedProductPlanCommand}.
 */
export interface DescribeProvisionedProductPlanCommandOutput
  extends DescribeProvisionedProductPlanOutput,
    __MetadataBearer {}

/**
 * <p>Gets information about the resource changes for the specified plan.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, DescribeProvisionedProductPlanCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, DescribeProvisionedProductPlanCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * // import type { ServiceCatalogClientConfig } from "@aws-sdk/client-service-catalog";
 * const config = {}; // type is ServiceCatalogClientConfig
 * const client = new ServiceCatalogClient(config);
 * const input = { // DescribeProvisionedProductPlanInput
 *   AcceptLanguage: "STRING_VALUE",
 *   PlanId: "STRING_VALUE", // required
 *   PageSize: Number("int"),
 *   PageToken: "STRING_VALUE",
 * };
 * const command = new DescribeProvisionedProductPlanCommand(input);
 * const response = await client.send(command);
 * // { // DescribeProvisionedProductPlanOutput
 * //   ProvisionedProductPlanDetails: { // ProvisionedProductPlanDetails
 * //     CreatedTime: new Date("TIMESTAMP"),
 * //     PathId: "STRING_VALUE",
 * //     ProductId: "STRING_VALUE",
 * //     PlanName: "STRING_VALUE",
 * //     PlanId: "STRING_VALUE",
 * //     ProvisionProductId: "STRING_VALUE",
 * //     ProvisionProductName: "STRING_VALUE",
 * //     PlanType: "CLOUDFORMATION",
 * //     ProvisioningArtifactId: "STRING_VALUE",
 * //     Status: "CREATE_IN_PROGRESS" || "CREATE_SUCCESS" || "CREATE_FAILED" || "EXECUTE_IN_PROGRESS" || "EXECUTE_SUCCESS" || "EXECUTE_FAILED",
 * //     UpdatedTime: new Date("TIMESTAMP"),
 * //     NotificationArns: [ // NotificationArns
 * //       "STRING_VALUE",
 * //     ],
 * //     ProvisioningParameters: [ // UpdateProvisioningParameters
 * //       { // UpdateProvisioningParameter
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //         UsePreviousValue: true || false,
 * //       },
 * //     ],
 * //     Tags: [ // Tags
 * //       { // Tag
 * //         Key: "STRING_VALUE", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     StatusMessage: "STRING_VALUE",
 * //   },
 * //   ResourceChanges: [ // ResourceChanges
 * //     { // ResourceChange
 * //       Action: "ADD" || "MODIFY" || "REMOVE",
 * //       LogicalResourceId: "STRING_VALUE",
 * //       PhysicalResourceId: "STRING_VALUE",
 * //       ResourceType: "STRING_VALUE",
 * //       Replacement: "TRUE" || "FALSE" || "CONDITIONAL",
 * //       Scope: [ // Scope
 * //         "PROPERTIES" || "METADATA" || "CREATIONPOLICY" || "UPDATEPOLICY" || "DELETIONPOLICY" || "TAGS",
 * //       ],
 * //       Details: [ // ResourceChangeDetails
 * //         { // ResourceChangeDetail
 * //           Target: { // ResourceTargetDefinition
 * //             Attribute: "PROPERTIES" || "METADATA" || "CREATIONPOLICY" || "UPDATEPOLICY" || "DELETIONPOLICY" || "TAGS",
 * //             Name: "STRING_VALUE",
 * //             RequiresRecreation: "NEVER" || "CONDITIONALLY" || "ALWAYS",
 * //           },
 * //           Evaluation: "STATIC" || "DYNAMIC",
 * //           CausingEntity: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextPageToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeProvisionedProductPlanCommandInput - {@link DescribeProvisionedProductPlanCommandInput}
 * @returns {@link DescribeProvisionedProductPlanCommandOutput}
 * @see {@link DescribeProvisionedProductPlanCommandInput} for command's `input` shape.
 * @see {@link DescribeProvisionedProductPlanCommandOutput} for command's `response` shape.
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
export class DescribeProvisionedProductPlanCommand extends $Command
  .classBuilder<
    DescribeProvisionedProductPlanCommandInput,
    DescribeProvisionedProductPlanCommandOutput,
    ServiceCatalogClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ServiceCatalogClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWS242ServiceCatalogService", "DescribeProvisionedProductPlan", {})
  .n("ServiceCatalogClient", "DescribeProvisionedProductPlanCommand")
  .sc(DescribeProvisionedProductPlan)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeProvisionedProductPlanInput;
      output: DescribeProvisionedProductPlanOutput;
    };
    sdk: {
      input: DescribeProvisionedProductPlanCommandInput;
      output: DescribeProvisionedProductPlanCommandOutput;
    };
  };
}
