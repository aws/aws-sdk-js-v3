// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { AssociatePackagesRequest, AssociatePackagesResponse } from "../models/models_0";
import { OpenSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpenSearchClient";
import { de_AssociatePackagesCommand, se_AssociatePackagesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociatePackagesCommand}.
 */
export interface AssociatePackagesCommandInput extends AssociatePackagesRequest {}
/**
 * @public
 *
 * The output of {@link AssociatePackagesCommand}.
 */
export interface AssociatePackagesCommandOutput extends AssociatePackagesResponse, __MetadataBearer {}

/**
 * <p>Operation in the Amazon OpenSearch Service API for associating multiple packages with a
 *    domain simultaneously.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, AssociatePackagesCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, AssociatePackagesCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * const client = new OpenSearchClient(config);
 * const input = { // AssociatePackagesRequest
 *   PackageList: [ // PackageDetailsForAssociationList // required
 *     { // PackageDetailsForAssociation
 *       PackageID: "STRING_VALUE", // required
 *       PrerequisitePackageIDList: [ // PackageIDList
 *         "STRING_VALUE",
 *       ],
 *       AssociationConfiguration: { // PackageAssociationConfiguration
 *         KeyStoreAccessOption: { // KeyStoreAccessOption
 *           KeyAccessRoleArn: "STRING_VALUE",
 *           KeyStoreAccessEnabled: true || false, // required
 *         },
 *       },
 *     },
 *   ],
 *   DomainName: "STRING_VALUE", // required
 * };
 * const command = new AssociatePackagesCommand(input);
 * const response = await client.send(command);
 * // { // AssociatePackagesResponse
 * //   DomainPackageDetailsList: [ // DomainPackageDetailsList
 * //     { // DomainPackageDetails
 * //       PackageID: "STRING_VALUE",
 * //       PackageName: "STRING_VALUE",
 * //       PackageType: "TXT-DICTIONARY" || "ZIP-PLUGIN" || "PACKAGE-LICENSE" || "PACKAGE-CONFIG",
 * //       LastUpdated: new Date("TIMESTAMP"),
 * //       DomainName: "STRING_VALUE",
 * //       DomainPackageStatus: "ASSOCIATING" || "ASSOCIATION_FAILED" || "ACTIVE" || "DISSOCIATING" || "DISSOCIATION_FAILED",
 * //       PackageVersion: "STRING_VALUE",
 * //       PrerequisitePackageIDList: [ // PackageIDList
 * //         "STRING_VALUE",
 * //       ],
 * //       ReferencePath: "STRING_VALUE",
 * //       ErrorDetails: { // ErrorDetails
 * //         ErrorType: "STRING_VALUE",
 * //         ErrorMessage: "STRING_VALUE",
 * //       },
 * //       AssociationConfiguration: { // PackageAssociationConfiguration
 * //         KeyStoreAccessOption: { // KeyStoreAccessOption
 * //           KeyAccessRoleArn: "STRING_VALUE",
 * //           KeyStoreAccessEnabled: true || false, // required
 * //         },
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param AssociatePackagesCommandInput - {@link AssociatePackagesCommandInput}
 * @returns {@link AssociatePackagesCommandOutput}
 * @see {@link AssociatePackagesCommandInput} for command's `input` shape.
 * @see {@link AssociatePackagesCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchClientResolvedConfig | config} for OpenSearchClient's `config` shape.
 *
 * @throws {@link BaseException} (client fault)
 *  <p>An error occurred while processing the request.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>An error occurred because the client attempts to remove a resource that is currently in use.</p>
 *
 * @throws {@link DisabledOperationException} (client fault)
 *  <p>An error occured because the client wanted to access an unsupported operation.</p>
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
export class AssociatePackagesCommand extends $Command
  .classBuilder<
    AssociatePackagesCommandInput,
    AssociatePackagesCommandOutput,
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
  .s("AmazonOpenSearchService", "AssociatePackages", {})
  .n("OpenSearchClient", "AssociatePackagesCommand")
  .f(void 0, void 0)
  .ser(se_AssociatePackagesCommand)
  .de(de_AssociatePackagesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociatePackagesRequest;
      output: AssociatePackagesResponse;
    };
    sdk: {
      input: AssociatePackagesCommandInput;
      output: AssociatePackagesCommandOutput;
    };
  };
}
