// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteVpcConfigurationRequest, DeleteVpcConfigurationResponse } from "../models/models_0";
import { DeleteVpcConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteVpcConfigurationCommand}.
 */
export interface DeleteVpcConfigurationCommandInput extends DeleteVpcConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteVpcConfigurationCommand}.
 */
export interface DeleteVpcConfigurationCommandOutput extends DeleteVpcConfigurationResponse, __MetadataBearer {}

/**
 * Deletes a VPC configuration. This operation is asynchronous: it returns status `DELETING`. Poll `GetVpcConfiguration` until it returns a `ResourceNotFoundException`, indicating the configuration is deleted. Delete requests are idempotent and safe to retry.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentClient, DeleteVpcConfigurationCommand } from "@aws-sdk/client-bedrock-agent"; // ES Modules import
 * // const { BedrockAgentClient, DeleteVpcConfigurationCommand } = require("@aws-sdk/client-bedrock-agent"); // CommonJS import
 * // import type { BedrockAgentClientConfig } from "@aws-sdk/client-bedrock-agent";
 * const config = {}; // type is BedrockAgentClientConfig
 * const client = new BedrockAgentClient(config);
 * const input = { // DeleteVpcConfigurationRequest
 *   knowledgeBaseId: "STRING_VALUE", // required
 *   vpcConfigurationId: "STRING_VALUE", // required
 * };
 * const command = new DeleteVpcConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // DeleteVpcConfigurationResponse
 * //   vpcConfigurationId: "STRING_VALUE", // required
 * //   status: "CREATING" || "CREATED" || "DELETING" || "CREATE_FAILED" || "DELETE_FAILED", // required
 * // };
 *
 * ```
 *
 * @param DeleteVpcConfigurationCommandInput - {@link DeleteVpcConfigurationCommandInput}
 * @returns {@link DeleteVpcConfigurationCommandOutput}
 * @see {@link DeleteVpcConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteVpcConfigurationCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentClientResolvedConfig | config} for BedrockAgentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The request is denied because of missing access permissions.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * There was a conflict performing an operation.
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
 * @throws {@link BedrockAgentServiceException}
 *
 * Base exception class for all service exceptions from BedrockAgent service.
 *
 * @public
 */
export class DeleteVpcConfigurationCommand extends command<DeleteVpcConfigurationCommandInput, DeleteVpcConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "DeleteVpcConfiguration",
  DeleteVpcConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteVpcConfigurationRequest;
      output: DeleteVpcConfigurationResponse;
    };
    sdk: {
      input: DeleteVpcConfigurationCommandInput;
      output: DeleteVpcConfigurationCommandOutput;
    };
  };
}
