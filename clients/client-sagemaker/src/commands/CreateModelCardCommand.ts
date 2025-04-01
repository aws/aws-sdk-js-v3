// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateModelCardRequest,
  CreateModelCardRequestFilterSensitiveLog,
  CreateModelCardResponse,
} from "../models/models_1";
import { de_CreateModelCardCommand, se_CreateModelCardCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateModelCardCommand}.
 */
export interface CreateModelCardCommandInput extends CreateModelCardRequest {}
/**
 * @public
 *
 * The output of {@link CreateModelCardCommand}.
 */
export interface CreateModelCardCommandOutput extends CreateModelCardResponse, __MetadataBearer {}

/**
 * <p>Creates an Amazon SageMaker Model Card.</p>
 *          <p>For information about how to use model cards, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/model-cards.html">Amazon SageMaker Model Card</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateModelCardCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateModelCardCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // CreateModelCardRequest
 *   ModelCardName: "STRING_VALUE", // required
 *   SecurityConfig: { // ModelCardSecurityConfig
 *     KmsKeyId: "STRING_VALUE",
 *   },
 *   Content: "STRING_VALUE", // required
 *   ModelCardStatus: "Draft" || "PendingReview" || "Approved" || "Archived", // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateModelCardCommand(input);
 * const response = await client.send(command);
 * // { // CreateModelCardResponse
 * //   ModelCardArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateModelCardCommandInput - {@link CreateModelCardCommandInput}
 * @returns {@link CreateModelCardCommandOutput}
 * @see {@link CreateModelCardCommandInput} for command's `input` shape.
 * @see {@link CreateModelCardCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict when you attempted to modify a SageMaker entity such as an
 *       <code>Experiment</code> or <code>Artifact</code>.</p>
 *
 * @throws {@link ResourceLimitExceeded} (client fault)
 *  <p> You have exceeded an SageMaker resource limit. For example, you might have too many
 *             training jobs created. </p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 *
 * @public
 */
export class CreateModelCardCommand extends $Command
  .classBuilder<
    CreateModelCardCommandInput,
    CreateModelCardCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SageMaker", "CreateModelCard", {})
  .n("SageMakerClient", "CreateModelCardCommand")
  .f(CreateModelCardRequestFilterSensitiveLog, void 0)
  .ser(se_CreateModelCardCommand)
  .de(de_CreateModelCardCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateModelCardRequest;
      output: CreateModelCardResponse;
    };
    sdk: {
      input: CreateModelCardCommandInput;
      output: CreateModelCardCommandOutput;
    };
  };
}
