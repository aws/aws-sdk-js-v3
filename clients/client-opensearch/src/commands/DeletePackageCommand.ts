// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeletePackageRequest, DeletePackageResponse } from "../models/models_0";
import { OpenSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpenSearchClient";
import { DeletePackage } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeletePackageCommand}.
 */
export interface DeletePackageCommandInput extends DeletePackageRequest {}
/**
 * @public
 *
 * The output of {@link DeletePackageCommand}.
 */
export interface DeletePackageCommandOutput extends DeletePackageResponse, __MetadataBearer {}

/**
 * <p>Deletes an Amazon OpenSearch Service package. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/custom-packages.html">Custom packages
 *                 for Amazon OpenSearch Service</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, DeletePackageCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, DeletePackageCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * // import type { OpenSearchClientConfig } from "@aws-sdk/client-opensearch";
 * const config = {}; // type is OpenSearchClientConfig
 * const client = new OpenSearchClient(config);
 * const input = { // DeletePackageRequest
 *   PackageID: "STRING_VALUE", // required
 * };
 * const command = new DeletePackageCommand(input);
 * const response = await client.send(command);
 * // { // DeletePackageResponse
 * //   PackageDetails: { // PackageDetails
 * //     PackageID: "STRING_VALUE",
 * //     PackageName: "STRING_VALUE",
 * //     PackageType: "TXT-DICTIONARY" || "ZIP-PLUGIN" || "PACKAGE-LICENSE" || "PACKAGE-CONFIG",
 * //     PackageDescription: "STRING_VALUE",
 * //     PackageStatus: "COPYING" || "COPY_FAILED" || "VALIDATING" || "VALIDATION_FAILED" || "AVAILABLE" || "DELETING" || "DELETED" || "DELETE_FAILED",
 * //     CreatedAt: new Date("TIMESTAMP"),
 * //     LastUpdatedAt: new Date("TIMESTAMP"),
 * //     AvailablePackageVersion: "STRING_VALUE",
 * //     ErrorDetails: { // ErrorDetails
 * //       ErrorType: "STRING_VALUE",
 * //       ErrorMessage: "STRING_VALUE",
 * //     },
 * //     EngineVersion: "STRING_VALUE",
 * //     AvailablePluginProperties: { // PluginProperties
 * //       Name: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       Version: "STRING_VALUE",
 * //       ClassName: "STRING_VALUE",
 * //       UncompressedSizeInBytes: Number("long"),
 * //     },
 * //     AvailablePackageConfiguration: { // PackageConfiguration
 * //       LicenseRequirement: "REQUIRED" || "OPTIONAL" || "NONE", // required
 * //       LicenseFilepath: "STRING_VALUE",
 * //       ConfigurationRequirement: "REQUIRED" || "OPTIONAL" || "NONE", // required
 * //       RequiresRestartForConfigurationUpdate: true || false,
 * //     },
 * //     AllowListedUserList: [ // PackageUserList
 * //       "STRING_VALUE",
 * //     ],
 * //     PackageOwner: "STRING_VALUE",
 * //     PackageVendingOptions: { // PackageVendingOptions
 * //       VendingEnabled: true || false, // required
 * //     },
 * //     PackageEncryptionOptions: { // PackageEncryptionOptions
 * //       KmsKeyIdentifier: "STRING_VALUE",
 * //       EncryptionEnabled: true || false, // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DeletePackageCommandInput - {@link DeletePackageCommandInput}
 * @returns {@link DeletePackageCommandOutput}
 * @see {@link DeletePackageCommandInput} for command's `input` shape.
 * @see {@link DeletePackageCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchClientResolvedConfig | config} for OpenSearchClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>An error occurred because you don't have permissions to access the resource.</p>
 *
 * @throws {@link BaseException} (client fault)
 *  <p>An error occurred while processing the request.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>An error occurred because the client attempts to remove a resource that is currently in use.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Request processing failed because of an unknown error, exception, or internal failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An exception for accessing or deleting a resource that doesn't exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception for accessing or deleting a resource that doesn't exist.</p>
 *
 * @throws {@link OpenSearchServiceException}
 * <p>Base exception class for all service exceptions from OpenSearch service.</p>
 *
 *
 * @public
 */
export class DeletePackageCommand extends $Command
  .classBuilder<
    DeletePackageCommandInput,
    DeletePackageCommandOutput,
    OpenSearchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OpenSearchClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonOpenSearchService", "DeletePackage", {})
  .n("OpenSearchClient", "DeletePackageCommand")
  .sc(DeletePackage)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeletePackageRequest;
      output: DeletePackageResponse;
    };
    sdk: {
      input: DeletePackageCommandInput;
      output: DeletePackageCommandOutput;
    };
  };
}
