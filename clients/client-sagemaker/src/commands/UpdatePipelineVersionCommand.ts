// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdatePipelineVersionRequest, UpdatePipelineVersionResponse } from "../models/models_5";
import { UpdatePipelineVersion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdatePipelineVersionCommand}.
 */
export interface UpdatePipelineVersionCommandInput extends UpdatePipelineVersionRequest {}
/**
 * @public
 *
 * The output of {@link UpdatePipelineVersionCommand}.
 */
export interface UpdatePipelineVersionCommandOutput extends UpdatePipelineVersionResponse, __MetadataBearer {}

/**
 * <p>Updates a pipeline version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, UpdatePipelineVersionCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, UpdatePipelineVersionCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // UpdatePipelineVersionRequest
 *   PipelineArn: "STRING_VALUE", // required
 *   PipelineVersionId: Number("long"), // required
 *   PipelineVersionDisplayName: "STRING_VALUE",
 *   PipelineVersionDescription: "STRING_VALUE",
 * };
 * const command = new UpdatePipelineVersionCommand(input);
 * const response = await client.send(command);
 * // { // UpdatePipelineVersionResponse
 * //   PipelineArn: "STRING_VALUE",
 * //   PipelineVersionId: Number("long"),
 * // };
 *
 * ```
 *
 * @param UpdatePipelineVersionCommandInput - {@link UpdatePipelineVersionCommandInput}
 * @returns {@link UpdatePipelineVersionCommandOutput}
 * @see {@link UpdatePipelineVersionCommandInput} for command's `input` shape.
 * @see {@link UpdatePipelineVersionCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict when you attempted to modify a SageMaker entity such as an <code>Experiment</code> or <code>Artifact</code>.</p>
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
export class UpdatePipelineVersionCommand extends command<UpdatePipelineVersionCommandInput, UpdatePipelineVersionCommandOutput>(
  _ep0,
  _mw0,
  "UpdatePipelineVersion",
  UpdatePipelineVersion$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdatePipelineVersionRequest;
      output: UpdatePipelineVersionResponse;
    };
    sdk: {
      input: UpdatePipelineVersionCommandInput;
      output: UpdatePipelineVersionCommandOutput;
    };
  };
}
