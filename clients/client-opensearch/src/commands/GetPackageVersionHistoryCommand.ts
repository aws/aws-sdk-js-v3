// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetPackageVersionHistoryRequest, GetPackageVersionHistoryResponse } from "../models/models_0";
import { OpenSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpenSearchClient";
import { de_GetPackageVersionHistoryCommand, se_GetPackageVersionHistoryCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetPackageVersionHistoryCommand}.
 */
export interface GetPackageVersionHistoryCommandInput extends GetPackageVersionHistoryRequest {}
/**
 * @public
 *
 * The output of {@link GetPackageVersionHistoryCommand}.
 */
export interface GetPackageVersionHistoryCommandOutput extends GetPackageVersionHistoryResponse, __MetadataBearer {}

/**
 * <p>Returns a list of Amazon OpenSearch Service package versions, along with their creation
 *    time, commit message, and plugin properties (if the package is a zip plugin package). For more
 *    information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/custom-packages.html">Custom packages for Amazon
 *     OpenSearch Service</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, GetPackageVersionHistoryCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, GetPackageVersionHistoryCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * const client = new OpenSearchClient(config);
 * const input = { // GetPackageVersionHistoryRequest
 *   PackageID: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetPackageVersionHistoryCommand(input);
 * const response = await client.send(command);
 * // { // GetPackageVersionHistoryResponse
 * //   PackageID: "STRING_VALUE",
 * //   PackageVersionHistoryList: [ // PackageVersionHistoryList
 * //     { // PackageVersionHistory
 * //       PackageVersion: "STRING_VALUE",
 * //       CommitMessage: "STRING_VALUE",
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       PluginProperties: { // PluginProperties
 * //         Name: "STRING_VALUE",
 * //         Description: "STRING_VALUE",
 * //         Version: "STRING_VALUE",
 * //         ClassName: "STRING_VALUE",
 * //         UncompressedSizeInBytes: Number("long"),
 * //       },
 * //       PackageConfiguration: { // PackageConfiguration
 * //         LicenseRequirement: "REQUIRED" || "OPTIONAL" || "NONE", // required
 * //         LicenseFilepath: "STRING_VALUE",
 * //         ConfigurationRequirement: "REQUIRED" || "OPTIONAL" || "NONE", // required
 * //         RequiresRestartForConfigurationUpdate: true || false,
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetPackageVersionHistoryCommandInput - {@link GetPackageVersionHistoryCommandInput}
 * @returns {@link GetPackageVersionHistoryCommandOutput}
 * @see {@link GetPackageVersionHistoryCommandInput} for command's `input` shape.
 * @see {@link GetPackageVersionHistoryCommandOutput} for command's `response` shape.
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
export class GetPackageVersionHistoryCommand extends $Command
  .classBuilder<
    GetPackageVersionHistoryCommandInput,
    GetPackageVersionHistoryCommandOutput,
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
  .s("AmazonOpenSearchService", "GetPackageVersionHistory", {})
  .n("OpenSearchClient", "GetPackageVersionHistoryCommand")
  .f(void 0, void 0)
  .ser(se_GetPackageVersionHistoryCommand)
  .de(de_GetPackageVersionHistoryCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetPackageVersionHistoryRequest;
      output: GetPackageVersionHistoryResponse;
    };
    sdk: {
      input: GetPackageVersionHistoryCommandInput;
      output: GetPackageVersionHistoryCommandOutput;
    };
  };
}
