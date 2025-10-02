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
import { ListCampaignsRequest, ListCampaignsResponse } from "../models/models_0";
import { de_ListCampaignsCommand, se_ListCampaignsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCampaignsCommand}.
 */
export interface ListCampaignsCommandInput extends ListCampaignsRequest {}
/**
 * @public
 *
 * The output of {@link ListCampaignsCommand}.
 */
export interface ListCampaignsCommandOutput extends ListCampaignsResponse, __MetadataBearer {}

/**
 * Provides summary information about the campaigns under the specified Amazon Connect account.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectCampaignsV2Client, ListCampaignsCommand } from "@aws-sdk/client-connectcampaignsv2"; // ES Modules import
 * // const { ConnectCampaignsV2Client, ListCampaignsCommand } = require("@aws-sdk/client-connectcampaignsv2"); // CommonJS import
 * // import type { ConnectCampaignsV2ClientConfig } from "@aws-sdk/client-connectcampaignsv2";
 * const config = {}; // type is ConnectCampaignsV2ClientConfig
 * const client = new ConnectCampaignsV2Client(config);
 * const input = { // ListCampaignsRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   filters: { // CampaignFilters
 *     instanceIdFilter: { // InstanceIdFilter
 *       value: "STRING_VALUE", // required
 *       operator: "STRING_VALUE", // required
 *     },
 *   },
 * };
 * const command = new ListCampaignsCommand(input);
 * const response = await client.send(command);
 * // { // ListCampaignsResponse
 * //   nextToken: "STRING_VALUE",
 * //   campaignSummaryList: [ // CampaignSummaryList
 * //     { // CampaignSummary
 * //       id: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       connectInstanceId: "STRING_VALUE", // required
 * //       channelSubtypes: [ // ChannelSubtypeList // required
 * //         "STRING_VALUE",
 * //       ],
 * //       schedule: { // Schedule
 * //         startTime: new Date("TIMESTAMP"), // required
 * //         endTime: new Date("TIMESTAMP"), // required
 * //         refreshFrequency: "STRING_VALUE",
 * //       },
 * //       connectCampaignFlowArn: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListCampaignsCommandInput - {@link ListCampaignsCommandInput}
 * @returns {@link ListCampaignsCommandOutput}
 * @see {@link ListCampaignsCommandInput} for command's `input` shape.
 * @see {@link ListCampaignsCommandOutput} for command's `response` shape.
 * @see {@link ConnectCampaignsV2ClientResolvedConfig | config} for ConnectCampaignsV2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *  Request processing failed because of an error or failure with the service.
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
export class ListCampaignsCommand extends $Command
  .classBuilder<
    ListCampaignsCommandInput,
    ListCampaignsCommandOutput,
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
  .s("AmazonConnectCampaignServiceV2", "ListCampaigns", {})
  .n("ConnectCampaignsV2Client", "ListCampaignsCommand")
  .f(void 0, void 0)
  .ser(se_ListCampaignsCommand)
  .de(de_ListCampaignsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCampaignsRequest;
      output: ListCampaignsResponse;
    };
    sdk: {
      input: ListCampaignsCommandInput;
      output: ListCampaignsCommandOutput;
    };
  };
}
