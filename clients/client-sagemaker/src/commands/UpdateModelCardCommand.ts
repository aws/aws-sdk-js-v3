// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateModelCardRequest, UpdateModelCardResponse } from "../models/models_5";
import { UpdateModelCard$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Update an Amazon SageMaker Model Card.
 *
 * > **Important:** You cannot update both model card content and model card status in a single call.
 *
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
 *
 * There was a conflict when you attempted to modify a SageMaker entity such as an `Experiment` or `Artifact`.
 *
 * @throws {@link ResourceLimitExceeded} (client fault)
 *
 * You have exceeded an SageMaker resource limit. For example, you might have too many training jobs created.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *
 * Resource being access is not found.
 *
 * @throws {@link SageMakerServiceException}
 *
 * Base exception class for all service exceptions from SageMaker service.
 *
 * @public
 */
export class UpdateModelCardCommand extends command<UpdateModelCardCommandInput, UpdateModelCardCommandOutput>(
  _ep0,
  _mw0,
  "UpdateModelCard",
  UpdateModelCard$
) {
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
