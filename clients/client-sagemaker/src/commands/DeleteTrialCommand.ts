// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteTrialRequest, DeleteTrialResponse } from "../models/models_2";
import { DeleteTrial$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteTrialCommand}.
 */
export interface DeleteTrialCommandInput extends DeleteTrialRequest {}
/**
 * @public
 *
 * The output of {@link DeleteTrialCommand}.
 */
export interface DeleteTrialCommandOutput extends DeleteTrialResponse, __MetadataBearer {}

/**
 * Deletes the specified trial. All trial components that make up the trial must be deleted first. Use the [DescribeTrialComponent](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeTrialComponent.html) API to get the list of trial components.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteTrialCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteTrialCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // DeleteTrialRequest
 *   TrialName: "STRING_VALUE", // required
 * };
 * const command = new DeleteTrialCommand(input);
 * const response = await client.send(command);
 * // { // DeleteTrialResponse
 * //   TrialArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteTrialCommandInput - {@link DeleteTrialCommandInput}
 * @returns {@link DeleteTrialCommandOutput}
 * @see {@link DeleteTrialCommandInput} for command's `input` shape.
 * @see {@link DeleteTrialCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
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
export class DeleteTrialCommand extends command<DeleteTrialCommandInput, DeleteTrialCommandOutput>(
  _ep0,
  _mw0,
  "DeleteTrial",
  DeleteTrial$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteTrialRequest;
      output: DeleteTrialResponse;
    };
    sdk: {
      input: DeleteTrialCommandInput;
      output: DeleteTrialCommandOutput;
    };
  };
}
