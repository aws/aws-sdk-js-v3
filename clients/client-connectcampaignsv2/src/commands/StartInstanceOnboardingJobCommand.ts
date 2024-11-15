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
import { StartInstanceOnboardingJobRequest, StartInstanceOnboardingJobResponse } from "../models/models_0";
import { de_StartInstanceOnboardingJobCommand, se_StartInstanceOnboardingJobCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartInstanceOnboardingJobCommand}.
 */
export interface StartInstanceOnboardingJobCommandInput extends StartInstanceOnboardingJobRequest {}
/**
 * @public
 *
 * The output of {@link StartInstanceOnboardingJobCommand}.
 */
export interface StartInstanceOnboardingJobCommandOutput extends StartInstanceOnboardingJobResponse, __MetadataBearer {}

/**
 * Onboard the specific Amazon Connect instance to Connect Campaigns.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectCampaignsV2Client, StartInstanceOnboardingJobCommand } from "@aws-sdk/client-connectcampaignsv2"; // ES Modules import
 * // const { ConnectCampaignsV2Client, StartInstanceOnboardingJobCommand } = require("@aws-sdk/client-connectcampaignsv2"); // CommonJS import
 * const client = new ConnectCampaignsV2Client(config);
 * const input = { // StartInstanceOnboardingJobRequest
 *   connectInstanceId: "STRING_VALUE", // required
 *   encryptionConfig: { // EncryptionConfig
 *     enabled: true || false, // required
 *     encryptionType: "STRING_VALUE",
 *     keyArn: "STRING_VALUE",
 *   },
 * };
 * const command = new StartInstanceOnboardingJobCommand(input);
 * const response = await client.send(command);
 * // { // StartInstanceOnboardingJobResponse
 * //   connectInstanceOnboardingJobStatus: { // InstanceOnboardingJobStatus
 * //     connectInstanceId: "STRING_VALUE", // required
 * //     status: "STRING_VALUE", // required
 * //     failureCode: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param StartInstanceOnboardingJobCommandInput - {@link StartInstanceOnboardingJobCommandInput}
 * @returns {@link StartInstanceOnboardingJobCommandOutput}
 * @see {@link StartInstanceOnboardingJobCommandInput} for command's `input` shape.
 * @see {@link StartInstanceOnboardingJobCommandOutput} for command's `response` shape.
 * @see {@link ConnectCampaignsV2ClientResolvedConfig | config} for ConnectCampaignsV2Client's `config` shape.
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
 * @throws {@link ConnectCampaignsV2ServiceException}
 * <p>Base exception class for all service exceptions from ConnectCampaignsV2 service.</p>
 *
 * @public
 */
export class StartInstanceOnboardingJobCommand extends $Command
  .classBuilder<
    StartInstanceOnboardingJobCommandInput,
    StartInstanceOnboardingJobCommandOutput,
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
  .s("AmazonConnectCampaignServiceV2", "StartInstanceOnboardingJob", {})
  .n("ConnectCampaignsV2Client", "StartInstanceOnboardingJobCommand")
  .f(void 0, void 0)
  .ser(se_StartInstanceOnboardingJobCommand)
  .de(de_StartInstanceOnboardingJobCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartInstanceOnboardingJobRequest;
      output: StartInstanceOnboardingJobResponse;
    };
    sdk: {
      input: StartInstanceOnboardingJobCommandInput;
      output: StartInstanceOnboardingJobCommandOutput;
    };
  };
}
