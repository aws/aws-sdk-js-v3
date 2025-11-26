// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  DeregisterPullTimeUpdateExclusionRequest,
  DeregisterPullTimeUpdateExclusionResponse,
} from "../models/models_0";
import { DeregisterPullTimeUpdateExclusion } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeregisterPullTimeUpdateExclusionCommand}.
 */
export interface DeregisterPullTimeUpdateExclusionCommandInput extends DeregisterPullTimeUpdateExclusionRequest {}
/**
 * @public
 *
 * The output of {@link DeregisterPullTimeUpdateExclusionCommand}.
 */
export interface DeregisterPullTimeUpdateExclusionCommandOutput
  extends DeregisterPullTimeUpdateExclusionResponse,
    __MetadataBearer {}

/**
 * <p>Removes a principal from the pull time update exclusion list for a registry. Once removed, Amazon ECR will resume updating the pull time if the specified principal pulls an image.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, DeregisterPullTimeUpdateExclusionCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, DeregisterPullTimeUpdateExclusionCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * // import type { ECRClientConfig } from "@aws-sdk/client-ecr";
 * const config = {}; // type is ECRClientConfig
 * const client = new ECRClient(config);
 * const input = { // DeregisterPullTimeUpdateExclusionRequest
 *   principalArn: "STRING_VALUE", // required
 * };
 * const command = new DeregisterPullTimeUpdateExclusionCommand(input);
 * const response = await client.send(command);
 * // { // DeregisterPullTimeUpdateExclusionResponse
 * //   principalArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeregisterPullTimeUpdateExclusionCommandInput - {@link DeregisterPullTimeUpdateExclusionCommandInput}
 * @returns {@link DeregisterPullTimeUpdateExclusionCommandOutput}
 * @see {@link DeregisterPullTimeUpdateExclusionCommandInput} for command's `input` shape.
 * @see {@link DeregisterPullTimeUpdateExclusionCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for ECRClient's `config` shape.
 *
 * @throws {@link ExclusionNotFoundException} (client fault)
 *  <p>The specified pull time update exclusion was not found.</p>
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
 * @example To remove a principal from the pull time exclusion list
 * ```javascript
 * // This example removes an IAM role from the pull time update exclusion list. Amazon ECR will resume recording image pull timestamps for this principal.
 * const input = {
 *   principalArn: "arn:aws:iam::012345678910:role/ECRAccess"
 * };
 * const command = new DeregisterPullTimeUpdateExclusionCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   principalArn: "arn:aws:iam::012345678910:role/ECRAccess"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DeregisterPullTimeUpdateExclusionCommand extends $Command
  .classBuilder<
    DeregisterPullTimeUpdateExclusionCommandInput,
    DeregisterPullTimeUpdateExclusionCommandOutput,
    ECRClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ECRClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2ContainerRegistry_V20150921", "DeregisterPullTimeUpdateExclusion", {})
  .n("ECRClient", "DeregisterPullTimeUpdateExclusionCommand")
  .sc(DeregisterPullTimeUpdateExclusion)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeregisterPullTimeUpdateExclusionRequest;
      output: DeregisterPullTimeUpdateExclusionResponse;
    };
    sdk: {
      input: DeregisterPullTimeUpdateExclusionCommandInput;
      output: DeregisterPullTimeUpdateExclusionCommandOutput;
    };
  };
}
