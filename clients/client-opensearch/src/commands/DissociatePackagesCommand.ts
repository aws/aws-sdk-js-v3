// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DissociatePackagesRequest, DissociatePackagesResponse } from "../models/models_0";
import { OpenSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpenSearchClient";
import { de_DissociatePackagesCommand, se_DissociatePackagesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DissociatePackagesCommand}.
 */
export interface DissociatePackagesCommandInput extends DissociatePackagesRequest {}
/**
 * @public
 *
 * The output of {@link DissociatePackagesCommand}.
 */
export interface DissociatePackagesCommandOutput extends DissociatePackagesResponse, __MetadataBearer {}

/**
 * <p>Dissociates multiple packages from a domain simulatneously.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, DissociatePackagesCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, DissociatePackagesCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * const client = new OpenSearchClient(config);
 * const input = { // DissociatePackagesRequest
 *   PackageList: [ // PackageIDList // required
 *     "STRING_VALUE",
 *   ],
 *   DomainName: "STRING_VALUE", // required
 * };
 * const command = new DissociatePackagesCommand(input);
 * const response = await client.send(command);
 * // { // DissociatePackagesResponse
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
 * @param DissociatePackagesCommandInput - {@link DissociatePackagesCommandInput}
 * @returns {@link DissociatePackagesCommandOutput}
 * @see {@link DissociatePackagesCommandInput} for command's `input` shape.
 * @see {@link DissociatePackagesCommandOutput} for command's `response` shape.
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
 * @public
 */
export class DissociatePackagesCommand extends $Command
  .classBuilder<
    DissociatePackagesCommandInput,
    DissociatePackagesCommandOutput,
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
  .s("AmazonOpenSearchService", "DissociatePackages", {})
  .n("OpenSearchClient", "DissociatePackagesCommand")
  .f(void 0, void 0)
  .ser(se_DissociatePackagesCommand)
  .de(de_DissociatePackagesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DissociatePackagesRequest;
      output: DissociatePackagesResponse;
    };
    sdk: {
      input: DissociatePackagesCommandInput;
      output: DissociatePackagesCommandOutput;
    };
  };
}
