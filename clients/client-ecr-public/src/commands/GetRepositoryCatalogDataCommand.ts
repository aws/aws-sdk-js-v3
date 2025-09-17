// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ECRPUBLICClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRPUBLICClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetRepositoryCatalogDataRequest, GetRepositoryCatalogDataResponse } from "../models/models_0";
import { de_GetRepositoryCatalogDataCommand, se_GetRepositoryCatalogDataCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetRepositoryCatalogDataCommand}.
 */
export interface GetRepositoryCatalogDataCommandInput extends GetRepositoryCatalogDataRequest {}
/**
 * @public
 *
 * The output of {@link GetRepositoryCatalogDataCommand}.
 */
export interface GetRepositoryCatalogDataCommandOutput extends GetRepositoryCatalogDataResponse, __MetadataBearer {}

/**
 * <p>Retrieve catalog metadata for a repository in a public registry. This metadata is
 *          displayed publicly in the Amazon ECR Public Gallery.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRPUBLICClient, GetRepositoryCatalogDataCommand } from "@aws-sdk/client-ecr-public"; // ES Modules import
 * // const { ECRPUBLICClient, GetRepositoryCatalogDataCommand } = require("@aws-sdk/client-ecr-public"); // CommonJS import
 * // import type { ECRPUBLICClientConfig } from "@aws-sdk/client-ecr-public";
 * const config = {}; // type is ECRPUBLICClientConfig
 * const client = new ECRPUBLICClient(config);
 * const input = { // GetRepositoryCatalogDataRequest
 *   registryId: "STRING_VALUE",
 *   repositoryName: "STRING_VALUE", // required
 * };
 * const command = new GetRepositoryCatalogDataCommand(input);
 * const response = await client.send(command);
 * // { // GetRepositoryCatalogDataResponse
 * //   catalogData: { // RepositoryCatalogData
 * //     description: "STRING_VALUE",
 * //     architectures: [ // ArchitectureList
 * //       "STRING_VALUE",
 * //     ],
 * //     operatingSystems: [ // OperatingSystemList
 * //       "STRING_VALUE",
 * //     ],
 * //     logoUrl: "STRING_VALUE",
 * //     aboutText: "STRING_VALUE",
 * //     usageText: "STRING_VALUE",
 * //     marketplaceCertified: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param GetRepositoryCatalogDataCommandInput - {@link GetRepositoryCatalogDataCommandInput}
 * @returns {@link GetRepositoryCatalogDataCommandOutput}
 * @see {@link GetRepositoryCatalogDataCommandInput} for command's `input` shape.
 * @see {@link GetRepositoryCatalogDataCommandOutput} for command's `response` shape.
 * @see {@link ECRPUBLICClientResolvedConfig | config} for ECRPUBLICClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter is invalid. Review the available parameters for the API
 *          request.</p>
 *
 * @throws {@link RepositoryCatalogDataNotFoundException} (client fault)
 *  <p>The repository catalog data doesn't exist.</p>
 *
 * @throws {@link RepositoryNotFoundException} (client fault)
 *  <p>The specified repository can't be found. Check the spelling of the specified repository
 *          and ensure that you're performing operations on the correct registry.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server-side issue.</p>
 *
 * @throws {@link UnsupportedCommandException} (client fault)
 *  <p>The action isn't supported in this Region.</p>
 *
 * @throws {@link ECRPUBLICServiceException}
 * <p>Base exception class for all service exceptions from ECRPUBLIC service.</p>
 *
 *
 * @public
 */
export class GetRepositoryCatalogDataCommand extends $Command
  .classBuilder<
    GetRepositoryCatalogDataCommandInput,
    GetRepositoryCatalogDataCommandOutput,
    ECRPUBLICClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ECRPUBLICClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SpencerFrontendService", "GetRepositoryCatalogData", {})
  .n("ECRPUBLICClient", "GetRepositoryCatalogDataCommand")
  .f(void 0, void 0)
  .ser(se_GetRepositoryCatalogDataCommand)
  .de(de_GetRepositoryCatalogDataCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRepositoryCatalogDataRequest;
      output: GetRepositoryCatalogDataResponse;
    };
    sdk: {
      input: GetRepositoryCatalogDataCommandInput;
      output: GetRepositoryCatalogDataCommandOutput;
    };
  };
}
