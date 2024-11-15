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
import {
  PutOutboundRequestBatchRequest,
  PutOutboundRequestBatchRequestFilterSensitiveLog,
  PutOutboundRequestBatchResponse,
} from "../models/models_0";
import { de_PutOutboundRequestBatchCommand, se_PutOutboundRequestBatchCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutOutboundRequestBatchCommand}.
 */
export interface PutOutboundRequestBatchCommandInput extends PutOutboundRequestBatchRequest {}
/**
 * @public
 *
 * The output of {@link PutOutboundRequestBatchCommand}.
 */
export interface PutOutboundRequestBatchCommandOutput extends PutOutboundRequestBatchResponse, __MetadataBearer {}

/**
 * Creates outbound requests for the specified campaign Amazon Connect account. This API is idempotent.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectCampaignsV2Client, PutOutboundRequestBatchCommand } from "@aws-sdk/client-connectcampaignsv2"; // ES Modules import
 * // const { ConnectCampaignsV2Client, PutOutboundRequestBatchCommand } = require("@aws-sdk/client-connectcampaignsv2"); // CommonJS import
 * const client = new ConnectCampaignsV2Client(config);
 * const input = { // PutOutboundRequestBatchRequest
 *   id: "STRING_VALUE", // required
 *   outboundRequests: [ // OutboundRequestList // required
 *     { // OutboundRequest
 *       clientToken: "STRING_VALUE", // required
 *       expirationTime: new Date("TIMESTAMP"), // required
 *       channelSubtypeParameters: { // ChannelSubtypeParameters Union: only one key present
 *         telephony: { // TelephonyChannelSubtypeParameters
 *           destinationPhoneNumber: "STRING_VALUE", // required
 *           attributes: { // Attributes // required
 *             "<keys>": "STRING_VALUE",
 *           },
 *           connectSourcePhoneNumber: "STRING_VALUE",
 *           answerMachineDetectionConfig: { // AnswerMachineDetectionConfig
 *             enableAnswerMachineDetection: true || false, // required
 *             awaitAnswerMachinePrompt: true || false,
 *           },
 *         },
 *         sms: { // SmsChannelSubtypeParameters
 *           destinationPhoneNumber: "STRING_VALUE", // required
 *           connectSourcePhoneNumberArn: "STRING_VALUE",
 *           templateArn: "STRING_VALUE",
 *           templateParameters: { // required
 *             "<keys>": "STRING_VALUE",
 *           },
 *         },
 *         email: { // EmailChannelSubtypeParameters
 *           destinationEmailAddress: "STRING_VALUE", // required
 *           connectSourceEmailAddress: "STRING_VALUE",
 *           templateArn: "STRING_VALUE",
 *           templateParameters: { // required
 *             "<keys>": "STRING_VALUE",
 *           },
 *         },
 *       },
 *     },
 *   ],
 * };
 * const command = new PutOutboundRequestBatchCommand(input);
 * const response = await client.send(command);
 * // { // PutOutboundRequestBatchResponse
 * //   successfulRequests: [ // SuccessfulRequestList
 * //     { // SuccessfulRequest
 * //       clientToken: "STRING_VALUE",
 * //       id: "STRING_VALUE",
 * //     },
 * //   ],
 * //   failedRequests: [ // FailedRequestList
 * //     { // FailedRequest
 * //       clientToken: "STRING_VALUE",
 * //       id: "STRING_VALUE",
 * //       failureCode: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param PutOutboundRequestBatchCommandInput - {@link PutOutboundRequestBatchCommandInput}
 * @returns {@link PutOutboundRequestBatchCommandOutput}
 * @see {@link PutOutboundRequestBatchCommandInput} for command's `input` shape.
 * @see {@link PutOutboundRequestBatchCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidCampaignStateException} (client fault)
 *  The request could not be processed because of conflict in the current state of the campaign.
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
export class PutOutboundRequestBatchCommand extends $Command
  .classBuilder<
    PutOutboundRequestBatchCommandInput,
    PutOutboundRequestBatchCommandOutput,
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
  .s("AmazonConnectCampaignServiceV2", "PutOutboundRequestBatch", {})
  .n("ConnectCampaignsV2Client", "PutOutboundRequestBatchCommand")
  .f(PutOutboundRequestBatchRequestFilterSensitiveLog, void 0)
  .ser(se_PutOutboundRequestBatchCommand)
  .de(de_PutOutboundRequestBatchCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutOutboundRequestBatchRequest;
      output: PutOutboundRequestBatchResponse;
    };
    sdk: {
      input: PutOutboundRequestBatchCommandInput;
      output: PutOutboundRequestBatchCommandOutput;
    };
  };
}
