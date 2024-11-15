// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ConnectCampaignsV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ConnectCampaignsV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteInstanceOnboardingJobRequest } from "../models/models_0";
import {
  de_DeleteInstanceOnboardingJobCommand,
  se_DeleteInstanceOnboardingJobCommand,
} from "../protocols/Aws_restJson1";

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
 * import { ConnectCampaignsV2Client, DeleteInstanceOnboardingJobCommand } from "@aws-sdk/client-connectcampaignsv2"; // ES Modules import
 * // const { ConnectCampaignsV2Client, DeleteInstanceOnboardingJobCommand } = require("@aws-sdk/client-connectcampaignsv2"); // CommonJS import
 * const client = new ConnectCampaignsV2Client(config);
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
 * @see {@link ConnectCampaignsV2ClientResolvedConfig | config} for ConnectCampaignsV2Client's `config` shape.
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
 * @throws {@link ConnectCampaignsV2ServiceException}
 * <p>Base exception class for all service exceptions from ConnectCampaignsV2 service.</p>
 *
 * @public
 */
export class DeleteInstanceOnboardingJobCommand extends $Command
  .classBuilder<
    DeleteInstanceOnboardingJobCommandInput,
    DeleteInstanceOnboardingJobCommandOutput,
    ConnectCampaignsV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectCampaignsV2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonConnectCampaignServiceV2", "DeleteInstanceOnboardingJob", {})
  .n("ConnectCampaignsV2Client", "DeleteInstanceOnboardingJobCommand")
  .f(void 0, void 0)
  .ser(se_DeleteInstanceOnboardingJobCommand)
  .de(de_DeleteInstanceOnboardingJobCommand)
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
