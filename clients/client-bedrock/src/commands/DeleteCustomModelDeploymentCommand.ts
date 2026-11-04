// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteCustomModelDeploymentRequest, DeleteCustomModelDeploymentResponse } from "../models/models_0";
import { DeleteCustomModelDeployment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteCustomModelDeploymentCommand}.
 */
export interface DeleteCustomModelDeploymentCommandInput extends DeleteCustomModelDeploymentRequest {}
/**
 * @public
 *
 * The output of {@link DeleteCustomModelDeploymentCommand}.
 */
export interface DeleteCustomModelDeploymentCommandOutput extends DeleteCustomModelDeploymentResponse, __MetadataBearer {}

/**
 * Deletes a custom model deployment. This operation stops the deployment and removes it from your account. After deletion, the deployment ARN can no longer be used for inference requests.
 *
 * The following actions are related to the `DeleteCustomModelDeployment` operation:
 *
 * - [CreateCustomModelDeployment](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_CreateCustomModelDeployment.html)
 * - [GetCustomModelDeployment](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_GetCustomModelDeployment.html)
 * - [ListCustomModelDeployments](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_ListCustomModelDeployments.html)
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, DeleteCustomModelDeploymentCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, DeleteCustomModelDeploymentCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * // import type { BedrockClientConfig } from "@aws-sdk/client-bedrock";
 * const config = {}; // type is BedrockClientConfig
 * const client = new BedrockClient(config);
 * const input = { // DeleteCustomModelDeploymentRequest
 *   customModelDeploymentIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteCustomModelDeploymentCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteCustomModelDeploymentCommandInput - {@link DeleteCustomModelDeploymentCommandInput}
 * @returns {@link DeleteCustomModelDeploymentCommandOutput}
 * @see {@link DeleteCustomModelDeploymentCommandInput} for command's `input` shape.
 * @see {@link DeleteCustomModelDeploymentCommandOutput} for command's `response` shape.
 * @see {@link BedrockClientResolvedConfig | config} for BedrockClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The request is denied because of missing access permissions.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Error occurred because of a conflict while performing an operation.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal server error occurred. Retry your request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource Amazon Resource Name (ARN) was not found. Check the Amazon Resource Name (ARN) and try your request again.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The number of requests exceeds the limit. Resubmit your request later.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Input validation failed. Check your request parameters and retry the request.
 *
 * @throws {@link BedrockServiceException}
 *
 * Base exception class for all service exceptions from Bedrock service.
 *
 * @public
 */
export class DeleteCustomModelDeploymentCommand extends command<DeleteCustomModelDeploymentCommandInput, DeleteCustomModelDeploymentCommandOutput>(
  _ep0,
  _mw0,
  "DeleteCustomModelDeployment",
  DeleteCustomModelDeployment$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteCustomModelDeploymentRequest;
      output: {};
    };
    sdk: {
      input: DeleteCustomModelDeploymentCommandInput;
      output: DeleteCustomModelDeploymentCommandOutput;
    };
  };
}
