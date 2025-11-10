// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ConnectCampaignsV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ConnectCampaignsV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetInstanceOnboardingJobStatusRequest, GetInstanceOnboardingJobStatusResponse } from "../models/models_0";
import { GetInstanceOnboardingJobStatus } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetInstanceOnboardingJobStatusCommand}.
 */
export interface GetInstanceOnboardingJobStatusCommandInput extends GetInstanceOnboardingJobStatusRequest {}
/**
 * @public
 *
 * The output of {@link GetInstanceOnboardingJobStatusCommand}.
 */
export interface GetInstanceOnboardingJobStatusCommandOutput
  extends GetInstanceOnboardingJobStatusResponse,
    __MetadataBearer {}

/**
 * Get the specific instance onboarding job status.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectCampaignsV2Client, GetInstanceOnboardingJobStatusCommand } from "@aws-sdk/client-connectcampaignsv2"; // ES Modules import
 * // const { ConnectCampaignsV2Client, GetInstanceOnboardingJobStatusCommand } = require("@aws-sdk/client-connectcampaignsv2"); // CommonJS import
 * // import type { ConnectCampaignsV2ClientConfig } from "@aws-sdk/client-connectcampaignsv2";
 * const config = {}; // type is ConnectCampaignsV2ClientConfig
 * const client = new ConnectCampaignsV2Client(config);
 * const input = { // GetInstanceOnboardingJobStatusRequest
 *   connectInstanceId: "STRING_VALUE", // required
 * };
 * const command = new GetInstanceOnboardingJobStatusCommand(input);
 * const response = await client.send(command);
 * // { // GetInstanceOnboardingJobStatusResponse
 * //   connectInstanceOnboardingJobStatus: { // InstanceOnboardingJobStatus
 * //     connectInstanceId: "STRING_VALUE", // required
 * //     status: "STRING_VALUE", // required
 * //     failureCode: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetInstanceOnboardingJobStatusCommandInput - {@link GetInstanceOnboardingJobStatusCommandInput}
 * @returns {@link GetInstanceOnboardingJobStatusCommandOutput}
 * @see {@link GetInstanceOnboardingJobStatusCommandInput} for command's `input` shape.
 * @see {@link GetInstanceOnboardingJobStatusCommandOutput} for command's `response` shape.
 * @see {@link ConnectCampaignsV2ClientResolvedConfig | config} for ConnectCampaignsV2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  You do not have sufficient access to perform this action.
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
 * @throws {@link ConnectCampaignsV2ServiceException}
 * <p>Base exception class for all service exceptions from ConnectCampaignsV2 service.</p>
 *
 *
 * @public
 */
export class GetInstanceOnboardingJobStatusCommand extends $Command
  .classBuilder<
    GetInstanceOnboardingJobStatusCommandInput,
    GetInstanceOnboardingJobStatusCommandOutput,
    ConnectCampaignsV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectCampaignsV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectCampaignServiceV2", "GetInstanceOnboardingJobStatus", {})
  .n("ConnectCampaignsV2Client", "GetInstanceOnboardingJobStatusCommand")
  .sc(GetInstanceOnboardingJobStatus)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetInstanceOnboardingJobStatusRequest;
      output: GetInstanceOnboardingJobStatusResponse;
    };
    sdk: {
      input: GetInstanceOnboardingJobStatusCommandInput;
      output: GetInstanceOnboardingJobStatusCommandOutput;
    };
  };
}
