// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { PutImageTagMutabilityRequest, PutImageTagMutabilityResponse } from "../models/models_0";
import { de_PutImageTagMutabilityCommand, se_PutImageTagMutabilityCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutImageTagMutabilityCommand}.
 */
export interface PutImageTagMutabilityCommandInput extends PutImageTagMutabilityRequest {}
/**
 * @public
 *
 * The output of {@link PutImageTagMutabilityCommand}.
 */
export interface PutImageTagMutabilityCommandOutput extends PutImageTagMutabilityResponse, __MetadataBearer {}

/**
 * <p>Updates the image tag mutability settings for the specified repository. For more
 *             information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/image-tag-mutability.html">Image tag
 *                 mutability</a> in the <i>Amazon Elastic Container Registry User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, PutImageTagMutabilityCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, PutImageTagMutabilityCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * const client = new ECRClient(config);
 * const input = { // PutImageTagMutabilityRequest
 *   registryId: "STRING_VALUE",
 *   repositoryName: "STRING_VALUE", // required
 *   imageTagMutability: "MUTABLE" || "IMMUTABLE", // required
 * };
 * const command = new PutImageTagMutabilityCommand(input);
 * const response = await client.send(command);
 * // { // PutImageTagMutabilityResponse
 * //   registryId: "STRING_VALUE",
 * //   repositoryName: "STRING_VALUE",
 * //   imageTagMutability: "MUTABLE" || "IMMUTABLE",
 * // };
 *
 * ```
 *
 * @param PutImageTagMutabilityCommandInput - {@link PutImageTagMutabilityCommandInput}
 * @returns {@link PutImageTagMutabilityCommandOutput}
 * @see {@link PutImageTagMutabilityCommandInput} for command's `input` shape.
 * @see {@link PutImageTagMutabilityCommandOutput} for command's `response` shape.
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
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server-side issue.</p>
 *
 * @throws {@link ECRServiceException}
 * <p>Base exception class for all service exceptions from ECR service.</p>
 *
 * @public
 */
export class PutImageTagMutabilityCommand extends $Command
  .classBuilder<
    PutImageTagMutabilityCommandInput,
    PutImageTagMutabilityCommandOutput,
    ECRClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ECRClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2ContainerRegistry_V20150921", "PutImageTagMutability", {})
  .n("ECRClient", "PutImageTagMutabilityCommand")
  .f(void 0, void 0)
  .ser(se_PutImageTagMutabilityCommand)
  .de(de_PutImageTagMutabilityCommand)
  .build() {}
