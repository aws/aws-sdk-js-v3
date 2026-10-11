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
 * <p>Deletes a VPC configuration. This operation is asynchronous: it returns status <code>DELETING</code>. Poll <code>GetVpcConfiguration</code> until it returns a <code>ResourceNotFoundException</code>, indicating the configuration is deleted. Delete requests are idempotent and safe to retry.</p>
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
 *  <p>The request is denied because of missing access permissions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict performing an operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource Amazon Resource Name (ARN) was not found. Check the Amazon Resource Name (ARN) and try your request again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The number of requests exceeds the limit. Resubmit your request later.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Input validation failed. Check your request parameters and retry the request.</p>
 *
 * @throws {@link BedrockAgentServiceException}
 * <p>Base exception class for all service exceptions from BedrockAgent service.</p>
 *
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
