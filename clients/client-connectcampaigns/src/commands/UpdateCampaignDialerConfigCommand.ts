// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectCampaignsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectCampaignsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateCampaignDialerConfigRequest } from "../models/models_0";
import { UpdateCampaignDialerConfig } from "../schemas/schemas_1_Campaign";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateCampaignDialerConfigCommand}.
 */
export interface UpdateCampaignDialerConfigCommandInput extends UpdateCampaignDialerConfigRequest {}
/**
 * @public
 *
 * The output of {@link UpdateCampaignDialerConfigCommand}.
 */
export interface UpdateCampaignDialerConfigCommandOutput extends __MetadataBearer {}

/**
 * Updates the dialer config of a campaign. This API is idempotent.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectCampaignsClient, UpdateCampaignDialerConfigCommand } from "@aws-sdk/client-connectcampaigns"; // ES Modules import
 * // const { ConnectCampaignsClient, UpdateCampaignDialerConfigCommand } = require("@aws-sdk/client-connectcampaigns"); // CommonJS import
 * // import type { ConnectCampaignsClientConfig } from "@aws-sdk/client-connectcampaigns";
 * const config = {}; // type is ConnectCampaignsClientConfig
 * const client = new ConnectCampaignsClient(config);
 * const input = { // UpdateCampaignDialerConfigRequest
 *   id: "STRING_VALUE", // required
 *   dialerConfig: { // DialerConfig Union: only one key present
 *     progressiveDialerConfig: { // ProgressiveDialerConfig
 *       bandwidthAllocation: Number("double"), // required
 *       dialingCapacity: Number("double"),
 *     },
 *     predictiveDialerConfig: { // PredictiveDialerConfig
 *       bandwidthAllocation: Number("double"), // required
 *       dialingCapacity: Number("double"),
 *     },
 *     agentlessDialerConfig: { // AgentlessDialerConfig
 *       dialingCapacity: Number("double"),
 *     },
 *   },
 * };
 * const command = new UpdateCampaignDialerConfigCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateCampaignDialerConfigCommandInput - {@link UpdateCampaignDialerConfigCommandInput}
 * @returns {@link UpdateCampaignDialerConfigCommandOutput}
 * @see {@link UpdateCampaignDialerConfigCommandInput} for command's `input` shape.
 * @see {@link UpdateCampaignDialerConfigCommandOutput} for command's `response` shape.
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
 * @throws {@link ValidationException} (client fault)
 *  The input fails to satisfy the constraints specified by an AWS service.
 *
 * @throws {@link ConnectCampaignsServiceException}
 * <p>Base exception class for all service exceptions from ConnectCampaigns service.</p>
 *
 *
 * @public
 */
export class UpdateCampaignDialerConfigCommand extends $Command
  .classBuilder<
    UpdateCampaignDialerConfigCommandInput,
    UpdateCampaignDialerConfigCommandOutput,
    ConnectCampaignsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectCampaignsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectCampaignService", "UpdateCampaignDialerConfig", {})
  .n("ConnectCampaignsClient", "UpdateCampaignDialerConfigCommand")
  .sc(UpdateCampaignDialerConfig)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateCampaignDialerConfigRequest;
      output: {};
    };
    sdk: {
      input: UpdateCampaignDialerConfigCommandInput;
      output: UpdateCampaignDialerConfigCommandOutput;
    };
  };
}
