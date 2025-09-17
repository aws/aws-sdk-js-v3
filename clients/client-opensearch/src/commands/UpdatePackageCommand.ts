// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdatePackageRequest, UpdatePackageResponse } from "../models/models_1";
import { OpenSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpenSearchClient";
import { de_UpdatePackageCommand, se_UpdatePackageCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdatePackageCommand}.
 */
export interface UpdatePackageCommandInput extends UpdatePackageRequest {}
/**
 * @public
 *
 * The output of {@link UpdatePackageCommand}.
 */
export interface UpdatePackageCommandOutput extends UpdatePackageResponse, __MetadataBearer {}

/**
 * <p>Updates a package for use with Amazon OpenSearch Service domains. For more information, see
 *     <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/custom-packages.html">Custom packages for Amazon OpenSearch Service</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, UpdatePackageCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, UpdatePackageCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * // import type { OpenSearchClientConfig } from "@aws-sdk/client-opensearch";
 * const config = {}; // type is OpenSearchClientConfig
 * const client = new OpenSearchClient(config);
 * const input = { // UpdatePackageRequest
 *   PackageID: "STRING_VALUE", // required
 *   PackageSource: { // PackageSource
 *     S3BucketName: "STRING_VALUE",
 *     S3Key: "STRING_VALUE",
 *   },
 *   PackageDescription: "STRING_VALUE",
 *   CommitMessage: "STRING_VALUE",
 *   PackageConfiguration: { // PackageConfiguration
 *     LicenseRequirement: "REQUIRED" || "OPTIONAL" || "NONE", // required
 *     LicenseFilepath: "STRING_VALUE",
 *     ConfigurationRequirement: "REQUIRED" || "OPTIONAL" || "NONE", // required
 *     RequiresRestartForConfigurationUpdate: true || false,
 *   },
 *   PackageEncryptionOptions: { // PackageEncryptionOptions
 *     KmsKeyIdentifier: "STRING_VALUE",
 *     EncryptionEnabled: true || false, // required
 *   },
 * };
 * const command = new UpdatePackageCommand(input);
 * const response = await client.send(command);
 * // { // UpdatePackageResponse
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
 * @param UpdatePackageCommandInput - {@link UpdatePackageCommandInput}
 * @returns {@link UpdatePackageCommandOutput}
 * @see {@link UpdatePackageCommandInput} for command's `input` shape.
 * @see {@link UpdatePackageCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchClientResolvedConfig | config} for OpenSearchClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>An error occurred because you don't have permissions to access the resource.</p>
 *
 * @throws {@link BaseException} (client fault)
 *  <p>An error occurred while processing the request.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Request processing failed because of an unknown error, exception, or internal failure.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>An exception for trying to create more than the allowed number of resources or sub-resources.</p>
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
export class UpdatePackageCommand extends $Command
  .classBuilder<
    UpdatePackageCommandInput,
    UpdatePackageCommandOutput,
    OpenSearchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OpenSearchClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonOpenSearchService", "UpdatePackage", {})
  .n("OpenSearchClient", "UpdatePackageCommand")
  .f(void 0, void 0)
  .ser(se_UpdatePackageCommand)
  .de(de_UpdatePackageCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdatePackageRequest;
      output: UpdatePackageResponse;
    };
    sdk: {
      input: UpdatePackageCommandInput;
      output: UpdatePackageCommandOutput;
    };
  };
}
