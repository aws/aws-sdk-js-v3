// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectCampaignsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectCampaignsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateCampaignRequest, CreateCampaignResponse } from "../models/models_0";
import { de_CreateCampaignCommand, se_CreateCampaignCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateCampaignCommand}.
 */
export interface CreateCampaignCommandInput extends CreateCampaignRequest {}
/**
 * @public
 *
 * The output of {@link CreateCampaignCommand}.
 */
export interface CreateCampaignCommandOutput extends CreateCampaignResponse, __MetadataBearer {}

/**
 * Creates a campaign for the specified Amazon Connect account. This API is idempotent.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectCampaignsClient, CreateCampaignCommand } from "@aws-sdk/client-connectcampaigns"; // ES Modules import
 * // const { ConnectCampaignsClient, CreateCampaignCommand } = require("@aws-sdk/client-connectcampaigns"); // CommonJS import
 * const client = new ConnectCampaignsClient(config);
 * const input = { // CreateCampaignRequest
 *   name: "STRING_VALUE", // required
 *   connectInstanceId: "STRING_VALUE", // required
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
 *   outboundCallConfig: { // OutboundCallConfig
 *     connectContactFlowId: "STRING_VALUE", // required
 *     connectSourcePhoneNumber: "STRING_VALUE",
 *     connectQueueId: "STRING_VALUE",
 *     answerMachineDetectionConfig: { // AnswerMachineDetectionConfig
 *       enableAnswerMachineDetection: true || false, // required
 *       awaitAnswerMachinePrompt: true || false,
 *     },
 *   },
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateCampaignCommand(input);
 * const response = await client.send(command);
 * // { // CreateCampaignResponse
 * //   id: "STRING_VALUE",
 * //   arn: "STRING_VALUE",
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateCampaignCommandInput - {@link CreateCampaignCommandInput}
 * @returns {@link CreateCampaignCommandOutput}
 * @see {@link CreateCampaignCommandInput} for command's `input` shape.
 * @see {@link CreateCampaignCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  Request would cause a service quota to be exceeded.
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
export class CreateCampaignCommand extends $Command
  .classBuilder<
    CreateCampaignCommandInput,
    CreateCampaignCommandOutput,
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
  .s("AmazonConnectCampaignService", "CreateCampaign", {})
  .n("ConnectCampaignsClient", "CreateCampaignCommand")
  .f(void 0, void 0)
  .ser(se_CreateCampaignCommand)
  .de(de_CreateCampaignCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateCampaignRequest;
      output: CreateCampaignResponse;
    };
    sdk: {
      input: CreateCampaignCommandInput;
      output: CreateCampaignCommandOutput;
    };
  };
}
