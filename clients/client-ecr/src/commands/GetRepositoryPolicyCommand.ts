// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetRepositoryPolicyRequest, GetRepositoryPolicyResponse } from "../models/models_0";
import { de_GetRepositoryPolicyCommand, se_GetRepositoryPolicyCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Retrieves the repository policy for the specified repository.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, GetRepositoryPolicyCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, GetRepositoryPolicyCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * const client = new ECRClient(config);
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
 * @see {@link ECRClientResolvedConfig | config} for ECRClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter is invalid. Review the available parameters for the API
 *             request.</p>
 *
 * @throws {@link RepositoryNotFoundException} (client fault)
 *  <p>The specified repository could not be found. Check the spelling of the specified
 *             repository and ensure that you are performing operations on the correct registry.</p>
 *
 * @throws {@link RepositoryPolicyNotFoundException} (client fault)
 *  <p>The specified repository and registry combination does not have an associated
 *             repository policy.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server-side issue.</p>
 *
 * @throws {@link ECRServiceException}
 * <p>Base exception class for all service exceptions from ECR service.</p>
 *
 *
 * @example To get the current policy for a repository
 * ```javascript
 * // This example obtains the repository policy for the repository named ubuntu.
 * const input = {
 *   repositoryName: "ubuntu"
 * };
 * const command = new GetRepositoryPolicyCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   policyText: `{
 *   "Version" : "2008-10-17",
 *   "Statement" : [ {
 *     "Sid" : "new statement",
 *     "Effect" : "Allow",
 *     "Principal" : {
 *      "AWS" : "arn:aws:iam::012345678901:role/CodeDeployDemo"
 *     },
 * "Action" : [ "ecr:GetDownloadUrlForLayer", "ecr:BatchGetImage", "ecr:BatchCheckLayerAvailability" ]
 *  } ]
 * }`,
 *   registryId: "012345678901",
 *   repositoryName: "ubuntu"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetRepositoryPolicyCommand extends $Command
  .classBuilder<
    GetRepositoryPolicyCommandInput,
    GetRepositoryPolicyCommandOutput,
    ECRClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ECRClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2ContainerRegistry_V20150921", "GetRepositoryPolicy", {})
  .n("ECRClient", "GetRepositoryPolicyCommand")
  .f(void 0, void 0)
  .ser(se_GetRepositoryPolicyCommand)
  .de(de_GetRepositoryPolicyCommand)
  .build() {
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
