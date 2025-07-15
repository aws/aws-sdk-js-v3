// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { AssociatePackageRequest, AssociatePackageResponse } from "../models/models_0";
import { OpenSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpenSearchClient";
import { de_AssociatePackageCommand, se_AssociatePackageCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociatePackageCommand}.
 */
export interface AssociatePackageCommandInput extends AssociatePackageRequest {}
/**
 * @public
 *
 * The output of {@link AssociatePackageCommand}.
 */
export interface AssociatePackageCommandOutput extends AssociatePackageResponse, __MetadataBearer {}

/**
 * <p>Associates a package with an Amazon OpenSearch Service domain. For more information, see
 *     <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/custom-packages.html">Custom packages for Amazon OpenSearch Service</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, AssociatePackageCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, AssociatePackageCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * const client = new OpenSearchClient(config);
 * const input = { // AssociatePackageRequest
 *   PackageID: "STRING_VALUE", // required
 *   DomainName: "STRING_VALUE", // required
 *   PrerequisitePackageIDList: [ // PackageIDList
 *     "STRING_VALUE",
 *   ],
 *   AssociationConfiguration: { // PackageAssociationConfiguration
 *     KeyStoreAccessOption: { // KeyStoreAccessOption
 *       KeyAccessRoleArn: "STRING_VALUE",
 *       KeyStoreAccessEnabled: true || false, // required
 *     },
 *   },
 * };
 * const command = new AssociatePackageCommand(input);
 * const response = await client.send(command);
 * // { // AssociatePackageResponse
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
 * @param AssociatePackageCommandInput - {@link AssociatePackageCommandInput}
 * @returns {@link AssociatePackageCommandOutput}
 * @see {@link AssociatePackageCommandInput} for command's `input` shape.
 * @see {@link AssociatePackageCommandOutput} for command's `response` shape.
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
export class AssociatePackageCommand extends $Command
  .classBuilder<
    AssociatePackageCommandInput,
    AssociatePackageCommandOutput,
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
  .s("AmazonOpenSearchService", "AssociatePackage", {})
  .n("OpenSearchClient", "AssociatePackageCommand")
  .f(void 0, void 0)
  .ser(se_AssociatePackageCommand)
  .de(de_AssociatePackageCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociatePackageRequest;
      output: AssociatePackageResponse;
    };
    sdk: {
      input: AssociatePackageCommandInput;
      output: AssociatePackageCommandOutput;
    };
  };
}
