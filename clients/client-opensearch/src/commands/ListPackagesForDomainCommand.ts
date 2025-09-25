// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListPackagesForDomainRequest, ListPackagesForDomainResponse } from "../models/models_1";
import { OpenSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpenSearchClient";
import { ListPackagesForDomain } from "../schemas/schemas_2_Package";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPackagesForDomainCommand}.
 */
export interface ListPackagesForDomainCommandInput extends ListPackagesForDomainRequest {}
/**
 * @public
 *
 * The output of {@link ListPackagesForDomainCommand}.
 */
export interface ListPackagesForDomainCommandOutput extends ListPackagesForDomainResponse, __MetadataBearer {}

/**
 * <p>Lists all packages associated with an Amazon OpenSearch Service domain. For more
 *    information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/custom-packages.html">Custom packages for Amazon
 *     OpenSearch Service</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, ListPackagesForDomainCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, ListPackagesForDomainCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * // import type { OpenSearchClientConfig } from "@aws-sdk/client-opensearch";
 * const config = {}; // type is OpenSearchClientConfig
 * const client = new OpenSearchClient(config);
 * const input = { // ListPackagesForDomainRequest
 *   DomainName: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListPackagesForDomainCommand(input);
 * const response = await client.send(command);
 * // { // ListPackagesForDomainResponse
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
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPackagesForDomainCommandInput - {@link ListPackagesForDomainCommandInput}
 * @returns {@link ListPackagesForDomainCommandOutput}
 * @see {@link ListPackagesForDomainCommandInput} for command's `input` shape.
 * @see {@link ListPackagesForDomainCommandOutput} for command's `response` shape.
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
export class ListPackagesForDomainCommand extends $Command
  .classBuilder<
    ListPackagesForDomainCommandInput,
    ListPackagesForDomainCommandOutput,
    OpenSearchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OpenSearchClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonOpenSearchService", "ListPackagesForDomain", {})
  .n("OpenSearchClient", "ListPackagesForDomainCommand")
  .sc(ListPackagesForDomain)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPackagesForDomainRequest;
      output: ListPackagesForDomainResponse;
    };
    sdk: {
      input: ListPackagesForDomainCommandInput;
      output: ListPackagesForDomainCommandOutput;
    };
  };
}
