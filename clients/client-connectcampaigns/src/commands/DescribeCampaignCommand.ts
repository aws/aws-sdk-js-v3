// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  ConnectCampaignsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ConnectCampaignsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeCampaignRequest, DescribeCampaignResponse } from "../models/models_0";
import { DescribeCampaign } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeCampaignCommand}.
 */
export interface DescribeCampaignCommandInput extends DescribeCampaignRequest {}
/**
 * @public
 *
 * The output of {@link DescribeCampaignCommand}.
 */
export interface DescribeCampaignCommandOutput extends DescribeCampaignResponse, __MetadataBearer {}

/**
 * Describes the specific campaign.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectCampaignsClient, DescribeCampaignCommand } from "@aws-sdk/client-connectcampaigns"; // ES Modules import
 * // const { ConnectCampaignsClient, DescribeCampaignCommand } = require("@aws-sdk/client-connectcampaigns"); // CommonJS import
 * // import type { ConnectCampaignsClientConfig } from "@aws-sdk/client-connectcampaigns";
 * const config = {}; // type is ConnectCampaignsClientConfig
 * const client = new ConnectCampaignsClient(config);
 * const input = { // DescribeCampaignRequest
 *   id: "STRING_VALUE", // required
 * };
 * const command = new DescribeCampaignCommand(input);
 * const response = await client.send(command);
 * // { // DescribeCampaignResponse
 * //   campaign: { // Campaign
 * //     id: "STRING_VALUE", // required
 * //     arn: "STRING_VALUE", // required
 * //     name: "STRING_VALUE", // required
 * //     connectInstanceId: "STRING_VALUE", // required
 * //     dialerConfig: { // DialerConfig Union: only one key present
 * //       progressiveDialerConfig: { // ProgressiveDialerConfig
 * //         bandwidthAllocation: Number("double"), // required
 * //         dialingCapacity: Number("double"),
 * //       },
 * //       predictiveDialerConfig: { // PredictiveDialerConfig
 * //         bandwidthAllocation: Number("double"), // required
 * //         dialingCapacity: Number("double"),
 * //       },
 * //       agentlessDialerConfig: { // AgentlessDialerConfig
 * //         dialingCapacity: Number("double"),
 * //       },
 * //     },
 * //     outboundCallConfig: { // OutboundCallConfig
 * //       connectContactFlowId: "STRING_VALUE", // required
 * //       connectSourcePhoneNumber: "STRING_VALUE",
 * //       connectQueueId: "STRING_VALUE",
 * //       answerMachineDetectionConfig: { // AnswerMachineDetectionConfig
 * //         enableAnswerMachineDetection: true || false, // required
 * //         awaitAnswerMachinePrompt: true || false,
 * //       },
 * //     },
 * //     tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeCampaignCommandInput - {@link DescribeCampaignCommandInput}
 * @returns {@link DescribeCampaignCommandOutput}
 * @see {@link DescribeCampaignCommandInput} for command's `input` shape.
 * @see {@link DescribeCampaignCommandOutput} for command's `response` shape.
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
export class DescribeCampaignCommand extends $Command
  .classBuilder<
    DescribeCampaignCommandInput,
    DescribeCampaignCommandOutput,
    ConnectCampaignsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectCampaignsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectCampaignService", "DescribeCampaign", {})
  .n("ConnectCampaignsClient", "DescribeCampaignCommand")
  .sc(DescribeCampaign)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeCampaignRequest;
      output: DescribeCampaignResponse;
    };
    sdk: {
      input: DescribeCampaignCommandInput;
      output: DescribeCampaignCommandOutput;
    };
  };
}
