// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreatePackageRequest, CreatePackageResponse } from "../models/models_0";
import { CreatePackage$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreatePackageCommand}.
 */
export interface CreatePackageCommandInput extends CreatePackageRequest {}
/**
 * @public
 *
 * The output of {@link CreatePackageCommand}.
 */
export interface CreatePackageCommandOutput extends CreatePackageResponse, __MetadataBearer {}

/**
 * Creates a package for use with Amazon OpenSearch Service domains. For more information, see [Custom packages for Amazon OpenSearch Service](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/custom-packages.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, CreatePackageCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, CreatePackageCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * // import type { OpenSearchClientConfig } from "@aws-sdk/client-opensearch";
 * const config = {}; // type is OpenSearchClientConfig
 * const client = new OpenSearchClient(config);
 * const input = { // CreatePackageRequest
 *   PackageName: "STRING_VALUE", // required
 *   PackageType: "TXT-DICTIONARY" || "ZIP-PLUGIN" || "PACKAGE-LICENSE" || "PACKAGE-CONFIG", // required
 *   PackageDescription: "STRING_VALUE",
 *   PackageSource: { // PackageSource
 *     S3BucketName: "STRING_VALUE",
 *     S3Key: "STRING_VALUE",
 *   },
 *   PackageConfiguration: { // PackageConfiguration
 *     LicenseRequirement: "REQUIRED" || "OPTIONAL" || "NONE", // required
 *     LicenseFilepath: "STRING_VALUE",
 *     ConfigurationRequirement: "REQUIRED" || "OPTIONAL" || "NONE", // required
 *     RequiresRestartForConfigurationUpdate: true || false,
 *   },
 *   EngineVersion: "STRING_VALUE",
 *   PackageVendingOptions: { // PackageVendingOptions
 *     VendingEnabled: true || false, // required
 *   },
 *   PackageEncryptionOptions: { // PackageEncryptionOptions
 *     KmsKeyIdentifier: "STRING_VALUE",
 *     EncryptionEnabled: true || false, // required
 *   },
 * };
 * const command = new CreatePackageCommand(input);
 * const response = await client.send(command);
 * // { // CreatePackageResponse
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
 * @param CreatePackageCommandInput - {@link CreatePackageCommandInput}
 * @returns {@link CreatePackageCommandOutput}
 * @see {@link CreatePackageCommandInput} for command's `input` shape.
 * @see {@link CreatePackageCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchClientResolvedConfig | config} for OpenSearchClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * An error occurred because you don't have permissions to access the resource.
 *
 * @throws {@link BaseException} (client fault)
 *
 * An error occurred while processing the request.
 *
 * @throws {@link InternalException} (server fault)
 *
 * Request processing failed because of an unknown error, exception, or internal failure.
 *
 * @throws {@link InvalidTypeException} (client fault)
 *
 * An exception for trying to create or access a sub-resource that's either invalid or not supported.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * An exception for trying to create more than the allowed number of resources or sub-resources.
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *
 * An exception for creating a resource that already exists.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * An exception for accessing or deleting a resource that doesn't exist.
 *
 * @throws {@link OpenSearchServiceException}
 *
 * Base exception class for all service exceptions from OpenSearch service.
 *
 * @public
 */
export class CreatePackageCommand extends command<CreatePackageCommandInput, CreatePackageCommandOutput>(
  _ep0,
  _mw0,
  "CreatePackage",
  CreatePackage$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreatePackageRequest;
      output: CreatePackageResponse;
    };
    sdk: {
      input: CreatePackageCommandInput;
      output: CreatePackageCommandOutput;
    };
  };
}
