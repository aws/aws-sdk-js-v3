// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ECRPUBLICClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRPUBLICClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeRepositoriesRequest, DescribeRepositoriesResponse } from "../models/models_0";
import { DescribeRepositories } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeRepositoriesCommand}.
 */
export interface DescribeRepositoriesCommandInput extends DescribeRepositoriesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeRepositoriesCommand}.
 */
export interface DescribeRepositoriesCommandOutput extends DescribeRepositoriesResponse, __MetadataBearer {}

/**
 * <p>Describes repositories that are in a public registry.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRPUBLICClient, DescribeRepositoriesCommand } from "@aws-sdk/client-ecr-public"; // ES Modules import
 * // const { ECRPUBLICClient, DescribeRepositoriesCommand } = require("@aws-sdk/client-ecr-public"); // CommonJS import
 * // import type { ECRPUBLICClientConfig } from "@aws-sdk/client-ecr-public";
 * const config = {}; // type is ECRPUBLICClientConfig
 * const client = new ECRPUBLICClient(config);
 * const input = { // DescribeRepositoriesRequest
 *   registryId: "STRING_VALUE",
 *   repositoryNames: [ // RepositoryNameList
 *     "STRING_VALUE",
 *   ],
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new DescribeRepositoriesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeRepositoriesResponse
 * //   repositories: [ // RepositoryList
 * //     { // Repository
 * //       repositoryArn: "STRING_VALUE",
 * //       registryId: "STRING_VALUE",
 * //       repositoryName: "STRING_VALUE",
 * //       repositoryUri: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeRepositoriesCommandInput - {@link DescribeRepositoriesCommandInput}
 * @returns {@link DescribeRepositoriesCommandOutput}
 * @see {@link DescribeRepositoriesCommandInput} for command's `input` shape.
 * @see {@link DescribeRepositoriesCommandOutput} for command's `response` shape.
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
export class DescribeRepositoriesCommand extends $Command
  .classBuilder<
    DescribeRepositoriesCommandInput,
    DescribeRepositoriesCommandOutput,
    ECRPUBLICClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ECRPUBLICClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SpencerFrontendService", "DescribeRepositories", {})
  .n("ECRPUBLICClient", "DescribeRepositoriesCommand")
  .sc(DescribeRepositories)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeRepositoriesRequest;
      output: DescribeRepositoriesResponse;
    };
    sdk: {
      input: DescribeRepositoriesCommandInput;
      output: DescribeRepositoriesCommandOutput;
    };
  };
}
