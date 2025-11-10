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
import { GetCampaignStateBatchRequest, GetCampaignStateBatchResponse } from "../models/models_0";
import { GetCampaignStateBatch } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetCampaignStateBatchCommand}.
 */
export interface GetCampaignStateBatchCommandInput extends GetCampaignStateBatchRequest {}
/**
 * @public
 *
 * The output of {@link GetCampaignStateBatchCommand}.
 */
export interface GetCampaignStateBatchCommandOutput extends GetCampaignStateBatchResponse, __MetadataBearer {}

/**
 * Get state of campaigns for the specified Amazon Connect account.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectCampaignsV2Client, GetCampaignStateBatchCommand } from "@aws-sdk/client-connectcampaignsv2"; // ES Modules import
 * // const { ConnectCampaignsV2Client, GetCampaignStateBatchCommand } = require("@aws-sdk/client-connectcampaignsv2"); // CommonJS import
 * // import type { ConnectCampaignsV2ClientConfig } from "@aws-sdk/client-connectcampaignsv2";
 * const config = {}; // type is ConnectCampaignsV2ClientConfig
 * const client = new ConnectCampaignsV2Client(config);
 * const input = { // GetCampaignStateBatchRequest
 *   campaignIds: [ // CampaignIdList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new GetCampaignStateBatchCommand(input);
 * const response = await client.send(command);
 * // { // GetCampaignStateBatchResponse
 * //   successfulRequests: [ // SuccessfulCampaignStateResponseList
 * //     { // SuccessfulCampaignStateResponse
 * //       campaignId: "STRING_VALUE",
 * //       state: "STRING_VALUE",
 * //     },
 * //   ],
 * //   failedRequests: [ // FailedCampaignStateResponseList
 * //     { // FailedCampaignStateResponse
 * //       campaignId: "STRING_VALUE",
 * //       failureCode: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetCampaignStateBatchCommandInput - {@link GetCampaignStateBatchCommandInput}
 * @returns {@link GetCampaignStateBatchCommandOutput}
 * @see {@link GetCampaignStateBatchCommandInput} for command's `input` shape.
 * @see {@link GetCampaignStateBatchCommandOutput} for command's `response` shape.
 * @see {@link ConnectCampaignsV2ClientResolvedConfig | config} for ConnectCampaignsV2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *  Request processing failed because of an error or failure with the service.
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
 *
 * @public
 */
export class GetCampaignStateBatchCommand extends $Command
  .classBuilder<
    GetCampaignStateBatchCommandInput,
    GetCampaignStateBatchCommandOutput,
    ConnectCampaignsV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectCampaignsV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectCampaignServiceV2", "GetCampaignStateBatch", {})
  .n("ConnectCampaignsV2Client", "GetCampaignStateBatchCommand")
  .sc(GetCampaignStateBatch)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCampaignStateBatchRequest;
      output: GetCampaignStateBatchResponse;
    };
    sdk: {
      input: GetCampaignStateBatchCommandInput;
      output: GetCampaignStateBatchCommandOutput;
    };
  };
}
