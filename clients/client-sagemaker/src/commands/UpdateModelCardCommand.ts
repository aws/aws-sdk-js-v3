// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateModelCardRequest, UpdateModelCardResponse } from "../models/models_5";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { UpdateModelCard } from "../schemas/schemas_89_Model";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateModelCardCommand}.
 */
export interface UpdateModelCardCommandInput extends UpdateModelCardRequest {}
/**
 * @public
 *
 * The output of {@link UpdateModelCardCommand}.
 */
export interface UpdateModelCardCommandOutput extends UpdateModelCardResponse, __MetadataBearer {}

/**
 * <p>Update an Amazon SageMaker Model Card.</p> <important> <p>You cannot update both model card content and model card status in a single call.</p> </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, UpdateModelCardCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, UpdateModelCardCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // UpdateModelCardRequest
 *   ModelCardName: "STRING_VALUE", // required
 *   Content: "STRING_VALUE",
 *   ModelCardStatus: "Draft" || "PendingReview" || "Approved" || "Archived",
 * };
 * const command = new UpdateModelCardCommand(input);
 * const response = await client.send(command);
 * // { // UpdateModelCardResponse
 * //   ModelCardArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateModelCardCommandInput - {@link UpdateModelCardCommandInput}
 * @returns {@link UpdateModelCardCommandOutput}
 * @see {@link UpdateModelCardCommandInput} for command's `input` shape.
 * @see {@link UpdateModelCardCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict when you attempted to modify a SageMaker entity such as an <code>Experiment</code> or <code>Artifact</code>.</p>
 *
 * @throws {@link ResourceLimitExceeded} (client fault)
 *  <p> You have exceeded an SageMaker resource limit. For example, you might have too many training jobs created. </p>
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 *
 * @public
 */
export class UpdateModelCardCommand extends $Command
  .classBuilder<
    UpdateModelCardCommandInput,
    UpdateModelCardCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SageMaker", "UpdateModelCard", {})
  .n("SageMakerClient", "UpdateModelCardCommand")
  .sc(UpdateModelCard)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateModelCardRequest;
      output: UpdateModelCardResponse;
    };
    sdk: {
      input: UpdateModelCardCommandInput;
      output: UpdateModelCardCommandOutput;
    };
  };
}
