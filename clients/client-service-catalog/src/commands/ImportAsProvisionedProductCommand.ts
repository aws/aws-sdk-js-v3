// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ImportAsProvisionedProductInput, ImportAsProvisionedProductOutput } from "../models/models_0";
import { de_ImportAsProvisionedProductCommand, se_ImportAsProvisionedProductCommand } from "../protocols/Aws_json1_1";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ImportAsProvisionedProductCommand}.
 */
export interface ImportAsProvisionedProductCommandInput extends ImportAsProvisionedProductInput {}
/**
 * @public
 *
 * The output of {@link ImportAsProvisionedProductCommand}.
 */
export interface ImportAsProvisionedProductCommandOutput extends ImportAsProvisionedProductOutput, __MetadataBearer {}

/**
 * <p>
 *          Requests the import of a resource as an Service Catalog provisioned product
 *          that is associated to an Service Catalog product and provisioning artifact.
 *          Once imported, all supported governance actions are supported on the provisioned product.
 *       </p>
 *          <p>
 *          Resource import only supports CloudFormation stack ARNs. CloudFormation StackSets,
 *          and non-root nested stacks, are not supported.
 *       </p>
 *          <p>
 *          The CloudFormation stack must have one
 *          of the following statuses
 *          to be imported: <code>CREATE_COMPLETE</code>, <code>UPDATE_COMPLETE</code>,
 *          <code>UPDATE_ROLLBACK_COMPLETE</code>, <code>IMPORT_COMPLETE</code>, and
 *          <code>IMPORT_ROLLBACK_COMPLETE</code>.
 *       </p>
 *          <p>
 *          Import of the resource requires that the CloudFormation stack template matches
 *          the associated Service Catalog product provisioning artifact.
 *       </p>
 *          <note>
 *             <p>
 *             When you import an existing CloudFormation stack
 *             into a portfolio, Service Catalog does not apply the product's associated constraints
 *             during the import process. Service Catalog applies the constraints
 *             after you call <code>UpdateProvisionedProduct</code> for the provisioned product.
 *          </p>
 *          </note>
 *          <p>
 *          The user or role that performs this operation must have the <code>cloudformation:GetTemplate</code>
 *          and <code>cloudformation:DescribeStacks</code> IAM policy permissions.
 *       </p>
 *          <p>You can only import one provisioned product at a time. The product's CloudFormation stack must have the
 *          <code>IMPORT_COMPLETE</code> status before you import another. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, ImportAsProvisionedProductCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, ImportAsProvisionedProductCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * // import type { ServiceCatalogClientConfig } from "@aws-sdk/client-service-catalog";
 * const config = {}; // type is ServiceCatalogClientConfig
 * const client = new ServiceCatalogClient(config);
 * const input = { // ImportAsProvisionedProductInput
 *   AcceptLanguage: "STRING_VALUE",
 *   ProductId: "STRING_VALUE", // required
 *   ProvisioningArtifactId: "STRING_VALUE", // required
 *   ProvisionedProductName: "STRING_VALUE", // required
 *   PhysicalId: "STRING_VALUE", // required
 *   IdempotencyToken: "STRING_VALUE", // required
 * };
 * const command = new ImportAsProvisionedProductCommand(input);
 * const response = await client.send(command);
 * // { // ImportAsProvisionedProductOutput
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
 * @param ImportAsProvisionedProductCommandInput - {@link ImportAsProvisionedProductCommandInput}
 * @returns {@link ImportAsProvisionedProductCommandOutput}
 * @see {@link ImportAsProvisionedProductCommandInput} for command's `input` shape.
 * @see {@link ImportAsProvisionedProductCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for ServiceCatalogClient's `config` shape.
 *
 * @throws {@link DuplicateResourceException} (client fault)
 *  <p>The specified resource is a duplicate.</p>
 *
 * @throws {@link InvalidParametersException} (client fault)
 *  <p>One or more parameters provided to the operation are not valid.</p>
 *
 * @throws {@link InvalidStateException} (client fault)
 *  <p>An attempt was made to modify a resource that is in a state that is not valid.
 *          Check your resources to ensure that they are in valid states before retrying the operation.</p>
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
export class ImportAsProvisionedProductCommand extends $Command
  .classBuilder<
    ImportAsProvisionedProductCommandInput,
    ImportAsProvisionedProductCommandOutput,
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
  .s("AWS242ServiceCatalogService", "ImportAsProvisionedProduct", {})
  .n("ServiceCatalogClient", "ImportAsProvisionedProductCommand")
  .f(void 0, void 0)
  .ser(se_ImportAsProvisionedProductCommand)
  .de(de_ImportAsProvisionedProductCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ImportAsProvisionedProductInput;
      output: ImportAsProvisionedProductOutput;
    };
    sdk: {
      input: ImportAsProvisionedProductCommandInput;
      output: ImportAsProvisionedProductCommandOutput;
    };
  };
}
