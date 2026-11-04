// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DissociatePackageRequest, DissociatePackageResponse } from "../models/models_0";
import { DissociatePackage$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DissociatePackageCommand}.
 */
export interface DissociatePackageCommandInput extends DissociatePackageRequest {}
/**
 * @public
 *
 * The output of {@link DissociatePackageCommand}.
 */
export interface DissociatePackageCommandOutput extends DissociatePackageResponse, __MetadataBearer {}

/**
 * Removes a package from the specified Amazon OpenSearch Service domain. The package can't be in use with any OpenSearch index for the dissociation to succeed. The package is still available in OpenSearch Service for association later. For more information, see [Custom packages for Amazon OpenSearch Service](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/custom-packages.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, DissociatePackageCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, DissociatePackageCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * // import type { OpenSearchClientConfig } from "@aws-sdk/client-opensearch";
 * const config = {}; // type is OpenSearchClientConfig
 * const client = new OpenSearchClient(config);
 * const input = { // DissociatePackageRequest
 *   PackageID: "STRING_VALUE", // required
 *   DomainName: "STRING_VALUE", // required
 * };
 * const command = new DissociatePackageCommand(input);
 * const response = await client.send(command);
 * // { // DissociatePackageResponse
 * //   DomainPackageDetails: { // DomainPackageDetails
 * //     PackageID: "STRING_VALUE",
 * //     PackageName: "STRING_VALUE",
 * //     PackageType: "TXT-DICTIONARY" || "ZIP-PLUGIN" || "PACKAGE-LICENSE" || "PACKAGE-CONFIG",
 * //     LastUpdated: new Date("TIMESTAMP"),
 * //     DomainName: "STRING_VALUE",
 * //     DomainPackageStatus: "ASSOCIATING" || "ASSOCIATION_FAILED" || "ACTIVE" || "DISSOCIATING" || "DISSOCIATION_FAILED",
 * //     PackageVersion: "STRING_VALUE",
 * //     PrerequisitePackageIDList: [ // PackageIDList
 * //       "STRING_VALUE",
 * //     ],
 * //     ReferencePath: "STRING_VALUE",
 * //     ErrorDetails: { // ErrorDetails
 * //       ErrorType: "STRING_VALUE",
 * //       ErrorMessage: "STRING_VALUE",
 * //     },
 * //     AssociationConfiguration: { // PackageAssociationConfiguration
 * //       KeyStoreAccessOption: { // KeyStoreAccessOption
 * //         KeyAccessRoleArn: "STRING_VALUE",
 * //         KeyStoreAccessEnabled: true || false, // required
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DissociatePackageCommandInput - {@link DissociatePackageCommandInput}
 * @returns {@link DissociatePackageCommandOutput}
 * @see {@link DissociatePackageCommandInput} for command's `input` shape.
 * @see {@link DissociatePackageCommandOutput} for command's `response` shape.
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
 * @throws {@link ConflictException} (client fault)
 *
 * An error occurred because the client attempts to remove a resource that is currently in use.
 *
 * @throws {@link InternalException} (server fault)
 *
 * Request processing failed because of an unknown error, exception, or internal failure.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * An exception for accessing or deleting a resource that doesn't exist.
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
export class DissociatePackageCommand extends command<DissociatePackageCommandInput, DissociatePackageCommandOutput>(
  _ep0,
  _mw0,
  "DissociatePackage",
  DissociatePackage$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DissociatePackageRequest;
      output: DissociatePackageResponse;
    };
    sdk: {
      input: DissociatePackageCommandInput;
      output: DissociatePackageCommandOutput;
    };
  };
}
