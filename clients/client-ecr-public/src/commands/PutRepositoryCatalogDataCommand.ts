// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ECRPUBLICClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRPUBLICClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { PutRepositoryCatalogDataRequest, PutRepositoryCatalogDataResponse } from "../models/models_0";
import { de_PutRepositoryCatalogDataCommand, se_PutRepositoryCatalogDataCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutRepositoryCatalogDataCommand}.
 */
export interface PutRepositoryCatalogDataCommandInput extends PutRepositoryCatalogDataRequest {}
/**
 * @public
 *
 * The output of {@link PutRepositoryCatalogDataCommand}.
 */
export interface PutRepositoryCatalogDataCommandOutput extends PutRepositoryCatalogDataResponse, __MetadataBearer {}

/**
 * <p>Creates or updates the catalog data for a repository in a public registry.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRPUBLICClient, PutRepositoryCatalogDataCommand } from "@aws-sdk/client-ecr-public"; // ES Modules import
 * // const { ECRPUBLICClient, PutRepositoryCatalogDataCommand } = require("@aws-sdk/client-ecr-public"); // CommonJS import
 * // import type { ECRPUBLICClientConfig } from "@aws-sdk/client-ecr-public";
 * const config = {}; // type is ECRPUBLICClientConfig
 * const client = new ECRPUBLICClient(config);
 * const input = { // PutRepositoryCatalogDataRequest
 *   registryId: "STRING_VALUE",
 *   repositoryName: "STRING_VALUE", // required
 *   catalogData: { // RepositoryCatalogDataInput
 *     description: "STRING_VALUE",
 *     architectures: [ // ArchitectureList
 *       "STRING_VALUE",
 *     ],
 *     operatingSystems: [ // OperatingSystemList
 *       "STRING_VALUE",
 *     ],
 *     logoImageBlob: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *     aboutText: "STRING_VALUE",
 *     usageText: "STRING_VALUE",
 *   },
 * };
 * const command = new PutRepositoryCatalogDataCommand(input);
 * const response = await client.send(command);
 * // { // PutRepositoryCatalogDataResponse
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
 * @param PutRepositoryCatalogDataCommandInput - {@link PutRepositoryCatalogDataCommandInput}
 * @returns {@link PutRepositoryCatalogDataCommandOutput}
 * @see {@link PutRepositoryCatalogDataCommandInput} for command's `input` shape.
 * @see {@link PutRepositoryCatalogDataCommandOutput} for command's `response` shape.
 * @see {@link ECRPUBLICClientResolvedConfig | config} for ECRPUBLICClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter is invalid. Review the available parameters for the API
 *          request.</p>
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
export class PutRepositoryCatalogDataCommand extends $Command
  .classBuilder<
    PutRepositoryCatalogDataCommandInput,
    PutRepositoryCatalogDataCommandOutput,
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
  .s("SpencerFrontendService", "PutRepositoryCatalogData", {})
  .n("ECRPUBLICClient", "PutRepositoryCatalogDataCommand")
  .f(void 0, void 0)
  .ser(se_PutRepositoryCatalogDataCommand)
  .de(de_PutRepositoryCatalogDataCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutRepositoryCatalogDataRequest;
      output: PutRepositoryCatalogDataResponse;
    };
    sdk: {
      input: PutRepositoryCatalogDataCommandInput;
      output: PutRepositoryCatalogDataCommandOutput;
    };
  };
}
