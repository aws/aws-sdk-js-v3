// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  RegisterPullTimeUpdateExclusionRequest,
  RegisterPullTimeUpdateExclusionResponse,
} from "../models/models_0";
import { RegisterPullTimeUpdateExclusion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RegisterPullTimeUpdateExclusionCommand}.
 */
export interface RegisterPullTimeUpdateExclusionCommandInput extends RegisterPullTimeUpdateExclusionRequest {}
/**
 * @public
 *
 * The output of {@link RegisterPullTimeUpdateExclusionCommand}.
 */
export interface RegisterPullTimeUpdateExclusionCommandOutput
  extends RegisterPullTimeUpdateExclusionResponse,
    __MetadataBearer {}

/**
 * <p>Adds an IAM principal to the pull time update exclusion list for a registry. Amazon ECR will not record the pull time if an excluded principal pulls an image.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, RegisterPullTimeUpdateExclusionCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, RegisterPullTimeUpdateExclusionCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * // import type { ECRClientConfig } from "@aws-sdk/client-ecr";
 * const config = {}; // type is ECRClientConfig
 * const client = new ECRClient(config);
 * const input = { // RegisterPullTimeUpdateExclusionRequest
 *   principalArn: "STRING_VALUE", // required
 * };
 * const command = new RegisterPullTimeUpdateExclusionCommand(input);
 * const response = await client.send(command);
 * // { // RegisterPullTimeUpdateExclusionResponse
 * //   principalArn: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param RegisterPullTimeUpdateExclusionCommandInput - {@link RegisterPullTimeUpdateExclusionCommandInput}
 * @returns {@link RegisterPullTimeUpdateExclusionCommandOutput}
 * @see {@link RegisterPullTimeUpdateExclusionCommandInput} for command's `input` shape.
 * @see {@link RegisterPullTimeUpdateExclusionCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for ECRClient's `config` shape.
 *
 * @throws {@link ExclusionAlreadyExistsException} (client fault)
 *  <p>The specified pull time update exclusion already exists for the registry.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter is invalid. Review the available parameters for the API
 *             request.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The operation did not succeed because it would have exceeded a service limit for your
 *             account. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/service-quotas.html">Amazon ECR service quotas</a> in
 *             the Amazon Elastic Container Registry User Guide.</p>
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
 *
 * @public
 */
export class RegisterPullTimeUpdateExclusionCommand extends $Command
  .classBuilder<
    RegisterPullTimeUpdateExclusionCommandInput,
    RegisterPullTimeUpdateExclusionCommandOutput,
    ECRClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ECRClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2ContainerRegistry_V20150921", "RegisterPullTimeUpdateExclusion", {})
  .n("ECRClient", "RegisterPullTimeUpdateExclusionCommand")
  .sc(RegisterPullTimeUpdateExclusion$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RegisterPullTimeUpdateExclusionRequest;
      output: RegisterPullTimeUpdateExclusionResponse;
    };
    sdk: {
      input: RegisterPullTimeUpdateExclusionCommandInput;
      output: RegisterPullTimeUpdateExclusionCommandOutput;
    };
  };
}
