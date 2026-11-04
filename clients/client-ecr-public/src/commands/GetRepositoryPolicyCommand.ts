// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetRepositoryPolicyRequest, GetRepositoryPolicyResponse } from "../models/models_0";
import { GetRepositoryPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetRepositoryPolicyCommand}.
 */
export interface GetRepositoryPolicyCommandInput extends GetRepositoryPolicyRequest {}
/**
 * @public
 *
 * The output of {@link GetRepositoryPolicyCommand}.
 */
export interface GetRepositoryPolicyCommandOutput extends GetRepositoryPolicyResponse, __MetadataBearer {}

/**
 * Retrieves the repository policy for the specified repository.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRPUBLICClient, GetRepositoryPolicyCommand } from "@aws-sdk/client-ecr-public"; // ES Modules import
 * // const { ECRPUBLICClient, GetRepositoryPolicyCommand } = require("@aws-sdk/client-ecr-public"); // CommonJS import
 * // import type { ECRPUBLICClientConfig } from "@aws-sdk/client-ecr-public";
 * const config = {}; // type is ECRPUBLICClientConfig
 * const client = new ECRPUBLICClient(config);
 * const input = { // GetRepositoryPolicyRequest
 *   registryId: "STRING_VALUE",
 *   repositoryName: "STRING_VALUE", // required
 * };
 * const command = new GetRepositoryPolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetRepositoryPolicyResponse
 * //   registryId: "STRING_VALUE",
 * //   repositoryName: "STRING_VALUE",
 * //   policyText: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetRepositoryPolicyCommandInput - {@link GetRepositoryPolicyCommandInput}
 * @returns {@link GetRepositoryPolicyCommandOutput}
 * @see {@link GetRepositoryPolicyCommandInput} for command's `input` shape.
 * @see {@link GetRepositoryPolicyCommandOutput} for command's `response` shape.
 * @see {@link ECRPUBLICClientResolvedConfig | config} for ECRPUBLICClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * The specified parameter is invalid. Review the available parameters for the API request.
 *
 * @throws {@link RepositoryNotFoundException} (client fault)
 *
 * The specified repository can't be found. Check the spelling of the specified repository and ensure that you're performing operations on the correct registry.
 *
 * @throws {@link RepositoryPolicyNotFoundException} (client fault)
 *
 * The specified repository and registry combination doesn't have an associated repository policy.
 *
 * @throws {@link ServerException} (server fault)
 *
 * These errors are usually caused by a server-side issue.
 *
 * @throws {@link UnsupportedCommandException} (client fault)
 *
 * The action isn't supported in this Region.
 *
 * @throws {@link ECRPUBLICServiceException}
 *
 * Base exception class for all service exceptions from ECRPUBLIC service.
 *
 * @public
 */
export class GetRepositoryPolicyCommand extends command<GetRepositoryPolicyCommandInput, GetRepositoryPolicyCommandOutput>(
  _ep0,
  _mw0,
  "GetRepositoryPolicy",
  GetRepositoryPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRepositoryPolicyRequest;
      output: GetRepositoryPolicyResponse;
    };
    sdk: {
      input: GetRepositoryPolicyCommandInput;
      output: GetRepositoryPolicyCommandOutput;
    };
  };
}
