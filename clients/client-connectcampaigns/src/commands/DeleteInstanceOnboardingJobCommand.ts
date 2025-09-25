// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectCampaignsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectCampaignsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteInstanceOnboardingJobRequest } from "../models/models_0";
import { DeleteInstanceOnboardingJob } from "../schemas/schemas_3_Instance";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteInstanceOnboardingJobCommand}.
 */
export interface DeleteInstanceOnboardingJobCommandInput extends DeleteInstanceOnboardingJobRequest {}
/**
 * @public
 *
 * The output of {@link DeleteInstanceOnboardingJobCommand}.
 */
export interface DeleteInstanceOnboardingJobCommandOutput extends __MetadataBearer {}

/**
 * Delete the Connect Campaigns onboarding job for the specified Amazon Connect instance.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectCampaignsClient, DeleteInstanceOnboardingJobCommand } from "@aws-sdk/client-connectcampaigns"; // ES Modules import
 * // const { ConnectCampaignsClient, DeleteInstanceOnboardingJobCommand } = require("@aws-sdk/client-connectcampaigns"); // CommonJS import
 * // import type { ConnectCampaignsClientConfig } from "@aws-sdk/client-connectcampaigns";
 * const config = {}; // type is ConnectCampaignsClientConfig
 * const client = new ConnectCampaignsClient(config);
 * const input = { // DeleteInstanceOnboardingJobRequest
 *   connectInstanceId: "STRING_VALUE", // required
 * };
 * const command = new DeleteInstanceOnboardingJobCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteInstanceOnboardingJobCommandInput - {@link DeleteInstanceOnboardingJobCommandInput}
 * @returns {@link DeleteInstanceOnboardingJobCommandOutput}
 * @see {@link DeleteInstanceOnboardingJobCommandInput} for command's `input` shape.
 * @see {@link DeleteInstanceOnboardingJobCommandOutput} for command's `response` shape.
 * @see {@link ConnectCampaignsClientResolvedConfig | config} for ConnectCampaignsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *  Request processing failed because of an error or failure with the service.
 *
 * @throws {@link InvalidStateException} (client fault)
 *  The request could not be processed because of conflict in the current state.
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
export class DeleteInstanceOnboardingJobCommand extends $Command
  .classBuilder<
    DeleteInstanceOnboardingJobCommandInput,
    DeleteInstanceOnboardingJobCommandOutput,
    ConnectCampaignsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectCampaignsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectCampaignService", "DeleteInstanceOnboardingJob", {})
  .n("ConnectCampaignsClient", "DeleteInstanceOnboardingJobCommand")
  .sc(DeleteInstanceOnboardingJob)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteInstanceOnboardingJobRequest;
      output: {};
    };
    sdk: {
      input: DeleteInstanceOnboardingJobCommandInput;
      output: DeleteInstanceOnboardingJobCommandOutput;
    };
  };
}
