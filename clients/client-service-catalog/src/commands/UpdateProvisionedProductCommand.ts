// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateProvisionedProductInput, UpdateProvisionedProductOutput } from "../models/models_0";
import { UpdateProvisionedProduct } from "../schemas/schemas_0";
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
 * The input for {@link UpdateProvisionedProductCommand}.
 */
export interface UpdateProvisionedProductCommandInput extends UpdateProvisionedProductInput {}
/**
 * @public
 *
 * The output of {@link UpdateProvisionedProductCommand}.
 */
export interface UpdateProvisionedProductCommandOutput extends UpdateProvisionedProductOutput, __MetadataBearer {}

/**
 * <p>Requests updates to the configuration of the specified provisioned product.</p>
 *          <p>If there are tags associated with the object, they cannot be updated or added.
 *          Depending on the specific updates requested, this operation can update with no
 *          interruption, with some interruption, or replace the provisioned product entirely.</p>
 *          <p>You can check the status of this request using <a>DescribeRecord</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, UpdateProvisionedProductCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, UpdateProvisionedProductCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * // import type { ServiceCatalogClientConfig } from "@aws-sdk/client-service-catalog";
 * const config = {}; // type is ServiceCatalogClientConfig
 * const client = new ServiceCatalogClient(config);
 * const input = { // UpdateProvisionedProductInput
 *   AcceptLanguage: "STRING_VALUE",
 *   ProvisionedProductName: "STRING_VALUE",
 *   ProvisionedProductId: "STRING_VALUE",
 *   ProductId: "STRING_VALUE",
 *   ProductName: "STRING_VALUE",
 *   ProvisioningArtifactId: "STRING_VALUE",
 *   ProvisioningArtifactName: "STRING_VALUE",
 *   PathId: "STRING_VALUE",
 *   PathName: "STRING_VALUE",
 *   ProvisioningParameters: [ // UpdateProvisioningParameters
 *     { // UpdateProvisioningParameter
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *       UsePreviousValue: true || false,
 *     },
 *   ],
 *   ProvisioningPreferences: { // UpdateProvisioningPreferences
 *     StackSetAccounts: [ // StackSetAccounts
 *       "STRING_VALUE",
 *     ],
 *     StackSetRegions: [ // StackSetRegions
 *       "STRING_VALUE",
 *     ],
 *     StackSetFailureToleranceCount: Number("int"),
 *     StackSetFailureTolerancePercentage: Number("int"),
 *     StackSetMaxConcurrencyCount: Number("int"),
 *     StackSetMaxConcurrencyPercentage: Number("int"),
 *     StackSetOperationType: "CREATE" || "UPDATE" || "DELETE",
 *   },
 *   Tags: [ // Tags
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   UpdateToken: "STRING_VALUE", // required
 * };
 * const command = new UpdateProvisionedProductCommand(input);
 * const response = await client.send(command);
 * // { // UpdateProvisionedProductOutput
 * //   RecordDetail: { // RecordDetail
 * //     RecordId: "STRING_VALUE",
 * //     ProvisionedProductName: "STRING_VALUE",
 * //     Status: "CREATED" || "IN_PROGRESS" || "IN_PROGRESS_IN_ERROR" || "SUCCEEDED" || "FAILED",
 * //     CreatedTime: new Date("TIMESTAMP"),
 * //     UpdatedTime: new Date("TIMESTAMP"),
 * //     ProvisionedProductType: "STRING_VALUE",
 * //     RecordType: "STRING_VALUE",
 * //     ProvisionedProductId: "STRING_VALUE",
 * //     ProductId: "STRING_VALUE",
 * //     ProvisioningArtifactId: "STRING_VALUE",
 * //     PathId: "STRING_VALUE",
 * //     RecordErrors: [ // RecordErrors
 * //       { // RecordError
 * //         Code: "STRING_VALUE",
 * //         Description: "STRING_VALUE",
 * //       },
 * //     ],
 * //     RecordTags: [ // RecordTags
 * //       { // RecordTag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     LaunchRoleArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateProvisionedProductCommandInput - {@link UpdateProvisionedProductCommandInput}
 * @returns {@link UpdateProvisionedProductCommandOutput}
 * @see {@link UpdateProvisionedProductCommandInput} for command's `input` shape.
 * @see {@link UpdateProvisionedProductCommandOutput} for command's `response` shape.
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
export class UpdateProvisionedProductCommand extends $Command
  .classBuilder<
    UpdateProvisionedProductCommandInput,
    UpdateProvisionedProductCommandOutput,
    ServiceCatalogClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ServiceCatalogClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWS242ServiceCatalogService", "UpdateProvisionedProduct", {})
  .n("ServiceCatalogClient", "UpdateProvisionedProductCommand")
  .sc(UpdateProvisionedProduct)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateProvisionedProductInput;
      output: UpdateProvisionedProductOutput;
    };
    sdk: {
      input: UpdateProvisionedProductCommandInput;
      output: UpdateProvisionedProductCommandOutput;
    };
  };
}
