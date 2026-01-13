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
import type { GetCampaignStateBatchRequest, GetCampaignStateBatchResponse } from "../models/models_0";
import { GetCampaignStateBatch$ } from "../schemas/schemas_0";

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
 * import { ConnectCampaignsClient, GetCampaignStateBatchCommand } from "@aws-sdk/client-connectcampaigns"; // ES Modules import
 * // const { ConnectCampaignsClient, GetCampaignStateBatchCommand } = require("@aws-sdk/client-connectcampaigns"); // CommonJS import
 * // import type { ConnectCampaignsClientConfig } from "@aws-sdk/client-connectcampaigns";
 * const config = {}; // type is ConnectCampaignsClientConfig
 * const client = new ConnectCampaignsClient(config);
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
 * @see {@link ConnectCampaignsClientResolvedConfig | config} for ConnectCampaignsClient's `config` shape.
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
 * @throws {@link ConnectCampaignsServiceException}
 * <p>Base exception class for all service exceptions from ConnectCampaigns service.</p>
 *
 *
 * @public
 */
export class GetCampaignStateBatchCommand extends $Command
  .classBuilder<
    GetCampaignStateBatchCommandInput,
    GetCampaignStateBatchCommandOutput,
    ConnectCampaignsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectCampaignsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectCampaignService", "GetCampaignStateBatch", {})
  .n("ConnectCampaignsClient", "GetCampaignStateBatchCommand")
  .sc(GetCampaignStateBatch$)
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
