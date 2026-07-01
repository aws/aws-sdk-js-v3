// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateCampaignOutboundCallConfigRequest } from "../models/models_0";
import { UpdateCampaignOutboundCallConfig$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateCampaignOutboundCallConfigCommand}.
 */
export interface UpdateCampaignOutboundCallConfigCommandInput extends UpdateCampaignOutboundCallConfigRequest {}
/**
 * @public
 *
 * The output of {@link UpdateCampaignOutboundCallConfigCommand}.
 */
export interface UpdateCampaignOutboundCallConfigCommandOutput extends __MetadataBearer {}

/**
 * Updates the outbound call config of a campaign. This API is idempotent.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectCampaignsClient, UpdateCampaignOutboundCallConfigCommand } from "@aws-sdk/client-connectcampaigns"; // ES Modules import
 * // const { ConnectCampaignsClient, UpdateCampaignOutboundCallConfigCommand } = require("@aws-sdk/client-connectcampaigns"); // CommonJS import
 * // import type { ConnectCampaignsClientConfig } from "@aws-sdk/client-connectcampaigns";
 * const config = {}; // type is ConnectCampaignsClientConfig
 * const client = new ConnectCampaignsClient(config);
 * const input = { // UpdateCampaignOutboundCallConfigRequest
 *   id: "STRING_VALUE", // required
 *   connectContactFlowId: "STRING_VALUE",
 *   connectSourcePhoneNumber: "STRING_VALUE",
 *   answerMachineDetectionConfig: { // AnswerMachineDetectionConfig
 *     enableAnswerMachineDetection: true || false, // required
 *     awaitAnswerMachinePrompt: true || false,
 *   },
 * };
 * const command = new UpdateCampaignOutboundCallConfigCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateCampaignOutboundCallConfigCommandInput - {@link UpdateCampaignOutboundCallConfigCommandInput}
 * @returns {@link UpdateCampaignOutboundCallConfigCommandOutput}
 * @see {@link UpdateCampaignOutboundCallConfigCommandInput} for command's `input` shape.
 * @see {@link UpdateCampaignOutboundCallConfigCommandOutput} for command's `response` shape.
 * @see {@link ConnectCampaignsClientResolvedConfig | config} for ConnectCampaignsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *  The request could not be processed because of conflict in the current state of the resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *  Request processing failed because of an error or failure with the service.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The specified resource was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *  The input fails to satisfy the constraints specified by an AWS service.
 *
 * @throws {@link ConnectCampaignsServiceException}
 * <p>Base exception class for all service exceptions from ConnectCampaigns service.</p>
 *
 *
 * @public
 */
export class UpdateCampaignOutboundCallConfigCommand extends command<UpdateCampaignOutboundCallConfigCommandInput, UpdateCampaignOutboundCallConfigCommandOutput>(
  _ep0,
  _mw0,
  "UpdateCampaignOutboundCallConfig",
  UpdateCampaignOutboundCallConfig$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateCampaignOutboundCallConfigRequest;
      output: {};
    };
    sdk: {
      input: UpdateCampaignOutboundCallConfigCommandInput;
      output: UpdateCampaignOutboundCallConfigCommandOutput;
    };
  };
}
