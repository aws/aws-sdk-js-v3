// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutLifecyclePolicyRequest, PutLifecyclePolicyResponse } from "../models/models_0";
import { PutLifecyclePolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutLifecyclePolicyCommand}.
 */
export interface PutLifecyclePolicyCommandInput extends PutLifecyclePolicyRequest {}
/**
 * @public
 *
 * The output of {@link PutLifecyclePolicyCommand}.
 */
export interface PutLifecyclePolicyCommandOutput extends PutLifecyclePolicyResponse, __MetadataBearer {}

/**
 * Creates or updates the lifecycle policy for the specified repository. For more information, see [Lifecycle policy template](https://docs.aws.amazon.com/AmazonECR/latest/userguide/LifecyclePolicies.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, PutLifecyclePolicyCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, PutLifecyclePolicyCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * // import type { ECRClientConfig } from "@aws-sdk/client-ecr";
 * const config = {}; // type is ECRClientConfig
 * const client = new ECRClient(config);
 * const input = { // PutLifecyclePolicyRequest
 *   registryId: "STRING_VALUE",
 *   repositoryName: "STRING_VALUE", // required
 *   lifecyclePolicyText: "STRING_VALUE", // required
 * };
 * const command = new PutLifecyclePolicyCommand(input);
 * const response = await client.send(command);
 * // { // PutLifecyclePolicyResponse
 * //   registryId: "STRING_VALUE",
 * //   repositoryName: "STRING_VALUE",
 * //   lifecyclePolicyText: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PutLifecyclePolicyCommandInput - {@link PutLifecyclePolicyCommandInput}
 * @returns {@link PutLifecyclePolicyCommandOutput}
 * @see {@link PutLifecyclePolicyCommandInput} for command's `input` shape.
 * @see {@link PutLifecyclePolicyCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for ECRClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * The specified parameter is invalid. Review the available parameters for the API request.
 *
 * @throws {@link RepositoryNotFoundException} (client fault)
 *
 * The specified repository could not be found. Check the spelling of the specified repository and ensure that you are performing operations on the correct registry.
 *
 * @throws {@link ServerException} (server fault)
 *
 * These errors are usually caused by a server-side issue.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * There was an exception validating this request.
 *
 * @throws {@link ECRServiceException}
 *
 * Base exception class for all service exceptions from ECR service.
 *
 * @public
 */
export class PutLifecyclePolicyCommand extends command<PutLifecyclePolicyCommandInput, PutLifecyclePolicyCommandOutput>(
  _ep0,
  _mw0,
  "PutLifecyclePolicy",
  PutLifecyclePolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutLifecyclePolicyRequest;
      output: PutLifecyclePolicyResponse;
    };
    sdk: {
      input: PutLifecyclePolicyCommandInput;
      output: PutLifecyclePolicyCommandOutput;
    };
  };
}
