// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StartLifecyclePolicyPreviewRequest, StartLifecyclePolicyPreviewResponse } from "../models/models_0";
import { de_StartLifecyclePolicyPreviewCommand, se_StartLifecyclePolicyPreviewCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartLifecyclePolicyPreviewCommand}.
 */
export interface StartLifecyclePolicyPreviewCommandInput extends StartLifecyclePolicyPreviewRequest {}
/**
 * @public
 *
 * The output of {@link StartLifecyclePolicyPreviewCommand}.
 */
export interface StartLifecyclePolicyPreviewCommandOutput
  extends StartLifecyclePolicyPreviewResponse,
    __MetadataBearer {}

/**
 * <p>Starts a preview of a lifecycle policy for the specified repository. This allows you
 *             to see the results before associating the lifecycle policy with the repository.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, StartLifecyclePolicyPreviewCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, StartLifecyclePolicyPreviewCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ECRClient(config);
 * const input = { // StartLifecyclePolicyPreviewRequest
 *   registryId: "STRING_VALUE",
 *   repositoryName: "STRING_VALUE", // required
 *   lifecyclePolicyText: "STRING_VALUE",
 * };
 * const command = new StartLifecyclePolicyPreviewCommand(input);
 * const response = await client.send(command);
 * // { // StartLifecyclePolicyPreviewResponse
 * //   registryId: "STRING_VALUE",
 * //   repositoryName: "STRING_VALUE",
 * //   lifecyclePolicyText: "STRING_VALUE",
 * //   status: "IN_PROGRESS" || "COMPLETE" || "EXPIRED" || "FAILED",
 * // };
 *
 * ```
 *
 * @param StartLifecyclePolicyPreviewCommandInput - {@link StartLifecyclePolicyPreviewCommandInput}
 * @returns {@link StartLifecyclePolicyPreviewCommandOutput}
 * @see {@link StartLifecyclePolicyPreviewCommandInput} for command's `input` shape.
 * @see {@link StartLifecyclePolicyPreviewCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for ECRClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter is invalid. Review the available parameters for the API
 *             request.</p>
 *
 * @throws {@link LifecyclePolicyNotFoundException} (client fault)
 *  <p>The lifecycle policy could not be found, and no policy is set to the
 *             repository.</p>
 *
 * @throws {@link LifecyclePolicyPreviewInProgressException} (client fault)
 *  <p>The previous lifecycle policy preview request has not completed. Wait and try
 *             again.</p>
 *
 * @throws {@link RepositoryNotFoundException} (client fault)
 *  <p>The specified repository could not be found. Check the spelling of the specified
 *             repository and ensure that you are performing operations on the correct registry.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server-side issue.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>There was an exception validating this request.</p>
 *
 * @throws {@link ECRServiceException}
 * <p>Base exception class for all service exceptions from ECR service.</p>
 *
 * @public
 */
export class StartLifecyclePolicyPreviewCommand extends $Command
  .classBuilder<
    StartLifecyclePolicyPreviewCommandInput,
    StartLifecyclePolicyPreviewCommandOutput,
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
  .s("AmazonEC2ContainerRegistry_V20150921", "StartLifecyclePolicyPreview", {})
  .n("ECRClient", "StartLifecyclePolicyPreviewCommand")
  .f(void 0, void 0)
  .ser(se_StartLifecyclePolicyPreviewCommand)
  .de(de_StartLifecyclePolicyPreviewCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartLifecyclePolicyPreviewRequest;
      output: StartLifecyclePolicyPreviewResponse;
    };
    sdk: {
      input: StartLifecyclePolicyPreviewCommandInput;
      output: StartLifecyclePolicyPreviewCommandOutput;
    };
  };
}
