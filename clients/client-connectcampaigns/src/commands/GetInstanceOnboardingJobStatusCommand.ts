// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectCampaignsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectCampaignsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetInstanceOnboardingJobStatusRequest, GetInstanceOnboardingJobStatusResponse } from "../models/models_0";
import {
  de_GetInstanceOnboardingJobStatusCommand,
  se_GetInstanceOnboardingJobStatusCommand,
} from "../protocols/Aws_restJson1";

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
 * import { ConnectCampaignsClient, GetInstanceOnboardingJobStatusCommand } from "@aws-sdk/client-connectcampaigns"; // ES Modules import
 * // const { ConnectCampaignsClient, GetInstanceOnboardingJobStatusCommand } = require("@aws-sdk/client-connectcampaigns"); // CommonJS import
 * const client = new ConnectCampaignsClient(config);
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
 * @see {@link ConnectCampaignsClientResolvedConfig | config} for ConnectCampaignsClient's `config` shape.
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
 * @throws {@link ConnectCampaignsServiceException}
 * <p>Base exception class for all service exceptions from ConnectCampaigns service.</p>
 *
 *
 * @public
 */
export class GetInstanceOnboardingJobStatusCommand extends $Command
  .classBuilder<
    GetInstanceOnboardingJobStatusCommandInput,
    GetInstanceOnboardingJobStatusCommandOutput,
    ConnectCampaignsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectCampaignsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonConnectCampaignService", "GetInstanceOnboardingJobStatus", {})
  .n("ConnectCampaignsClient", "GetInstanceOnboardingJobStatusCommand")
  .f(void 0, void 0)
  .ser(se_GetInstanceOnboardingJobStatusCommand)
  .de(de_GetInstanceOnboardingJobStatusCommand)
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
