// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { BedrockAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockAgentClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DisassociateAgentCollaboratorRequest, DisassociateAgentCollaboratorResponse } from "../models/models_0";
import { DisassociateAgentCollaborator$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateAgentCollaboratorCommand}.
 */
export interface DisassociateAgentCollaboratorCommandInput extends DisassociateAgentCollaboratorRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateAgentCollaboratorCommand}.
 */
export interface DisassociateAgentCollaboratorCommandOutput
  extends DisassociateAgentCollaboratorResponse,
    __MetadataBearer {}

/**
 * <p>Disassociates an agent collaborator.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentClient, DisassociateAgentCollaboratorCommand } from "@aws-sdk/client-bedrock-agent"; // ES Modules import
 * // const { BedrockAgentClient, DisassociateAgentCollaboratorCommand } = require("@aws-sdk/client-bedrock-agent"); // CommonJS import
 * // import type { BedrockAgentClientConfig } from "@aws-sdk/client-bedrock-agent";
 * const config = {}; // type is BedrockAgentClientConfig
 * const client = new BedrockAgentClient(config);
 * const input = { // DisassociateAgentCollaboratorRequest
 *   agentId: "STRING_VALUE", // required
 *   agentVersion: "STRING_VALUE", // required
 *   collaboratorId: "STRING_VALUE", // required
 * };
 * const command = new DisassociateAgentCollaboratorCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateAgentCollaboratorCommandInput - {@link DisassociateAgentCollaboratorCommandInput}
 * @returns {@link DisassociateAgentCollaboratorCommandOutput}
 * @see {@link DisassociateAgentCollaboratorCommandInput} for command's `input` shape.
 * @see {@link DisassociateAgentCollaboratorCommandOutput} for command's `response` shape.
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
export class DisassociateAgentCollaboratorCommand extends $Command
  .classBuilder<
    DisassociateAgentCollaboratorCommandInput,
    DisassociateAgentCollaboratorCommandOutput,
    BedrockAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentBuildTimeLambda", "DisassociateAgentCollaborator", {})
  .n("BedrockAgentClient", "DisassociateAgentCollaboratorCommand")
  .sc(DisassociateAgentCollaborator$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateAgentCollaboratorRequest;
      output: {};
    };
    sdk: {
      input: DisassociateAgentCollaboratorCommandInput;
      output: DisassociateAgentCollaboratorCommandOutput;
    };
  };
}
