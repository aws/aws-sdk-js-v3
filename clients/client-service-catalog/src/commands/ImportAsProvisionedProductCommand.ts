// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ImportAsProvisionedProductInput, ImportAsProvisionedProductOutput } from "../models/models_0";
import { ImportAsProvisionedProduct$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Requests the import of a resource as an Service Catalog provisioned product that is associated to an Service Catalog product and provisioning artifact. Once imported, all supported governance actions are supported on the provisioned product.
 *
 * Resource import only supports CloudFormation stack ARNs. CloudFormation StackSets, and non-root nested stacks, are not supported.
 *
 * The CloudFormation stack must have one of the following statuses to be imported: `CREATE_COMPLETE`, `UPDATE_COMPLETE`, `UPDATE_ROLLBACK_COMPLETE`, `IMPORT_COMPLETE`, and `IMPORT_ROLLBACK_COMPLETE`.
 *
 * Import of the resource requires that the CloudFormation stack template matches the associated Service Catalog product provisioning artifact.
 *
 * > **Note:** When you import an existing CloudFormation stack into a portfolio, Service Catalog does not apply the product's associated constraints during the import process. Service Catalog applies the constraints after you call `UpdateProvisionedProduct` for the provisioned product.
 *
 * The user or role that performs this operation must have the `cloudformation:GetTemplate` and `cloudformation:DescribeStacks` IAM policy permissions.
 *
 * You can only import one provisioned product at a time. The product's CloudFormation stack must have the `IMPORT_COMPLETE` status before you import another.
 *
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
 *
 * The specified resource is a duplicate.
 *
 * @throws {@link InvalidParametersException} (client fault)
 *
 * One or more parameters provided to the operation are not valid.
 *
 * @throws {@link InvalidStateException} (client fault)
 *
 * An attempt was made to modify a resource that is in a state that is not valid. Check your resources to ensure that they are in valid states before retrying the operation.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link ServiceCatalogServiceException}
 *
 * Base exception class for all service exceptions from ServiceCatalog service.
 *
 * @public
 */
export class ImportAsProvisionedProductCommand extends command<ImportAsProvisionedProductCommandInput, ImportAsProvisionedProductCommandOutput>(
  _ep0,
  _mw0,
  "ImportAsProvisionedProduct",
  ImportAsProvisionedProduct$
) {
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
