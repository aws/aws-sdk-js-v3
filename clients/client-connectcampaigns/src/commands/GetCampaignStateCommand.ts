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
import type { GetCampaignStateRequest, GetCampaignStateResponse } from "../models/models_0";
import { GetCampaignState$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetCampaignStateCommand}.
 */
export interface GetCampaignStateCommandInput extends GetCampaignStateRequest {}
/**
 * @public
 *
 * The output of {@link GetCampaignStateCommand}.
 */
export interface GetCampaignStateCommandOutput extends GetCampaignStateResponse, __MetadataBearer {}

/**
 * Get state of a campaign for the specified Amazon Connect account.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectCampaignsClient, GetCampaignStateCommand } from "@aws-sdk/client-connectcampaigns"; // ES Modules import
 * // const { ConnectCampaignsClient, GetCampaignStateCommand } = require("@aws-sdk/client-connectcampaigns"); // CommonJS import
 * // import type { ConnectCampaignsClientConfig } from "@aws-sdk/client-connectcampaigns";
 * const config = {}; // type is ConnectCampaignsClientConfig
 * const client = new ConnectCampaignsClient(config);
 * const input = { // GetCampaignStateRequest
 *   id: "STRING_VALUE", // required
 * };
 * const command = new GetCampaignStateCommand(input);
 * const response = await client.send(command);
 * // { // GetCampaignStateResponse
 * //   state: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetCampaignStateCommandInput - {@link GetCampaignStateCommandInput}
 * @returns {@link GetCampaignStateCommandOutput}
 * @see {@link GetCampaignStateCommandInput} for command's `input` shape.
 * @see {@link GetCampaignStateCommandOutput} for command's `response` shape.
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
export class GetCampaignStateCommand extends $Command
  .classBuilder<
    GetCampaignStateCommandInput,
    GetCampaignStateCommandOutput,
    ConnectCampaignsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectCampaignsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectCampaignService", "GetCampaignState", {})
  .n("ConnectCampaignsClient", "GetCampaignStateCommand")
  .sc(GetCampaignState$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCampaignStateRequest;
      output: GetCampaignStateResponse;
    };
    sdk: {
      input: GetCampaignStateCommandInput;
      output: GetCampaignStateCommandOutput;
    };
  };
}
