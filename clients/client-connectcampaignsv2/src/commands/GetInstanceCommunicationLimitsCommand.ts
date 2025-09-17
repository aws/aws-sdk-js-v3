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
import { GetInstanceCommunicationLimitsRequest, GetInstanceCommunicationLimitsResponse } from "../models/models_0";
import {
  de_GetInstanceCommunicationLimitsCommand,
  se_GetInstanceCommunicationLimitsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetInstanceCommunicationLimitsCommand}.
 */
export interface GetInstanceCommunicationLimitsCommandInput extends GetInstanceCommunicationLimitsRequest {}
/**
 * @public
 *
 * The output of {@link GetInstanceCommunicationLimitsCommand}.
 */
export interface GetInstanceCommunicationLimitsCommandOutput
  extends GetInstanceCommunicationLimitsResponse,
    __MetadataBearer {}

/**
 * Get the instance communication limits.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectCampaignsV2Client, GetInstanceCommunicationLimitsCommand } from "@aws-sdk/client-connectcampaignsv2"; // ES Modules import
 * // const { ConnectCampaignsV2Client, GetInstanceCommunicationLimitsCommand } = require("@aws-sdk/client-connectcampaignsv2"); // CommonJS import
 * // import type { ConnectCampaignsV2ClientConfig } from "@aws-sdk/client-connectcampaignsv2";
 * const config = {}; // type is ConnectCampaignsV2ClientConfig
 * const client = new ConnectCampaignsV2Client(config);
 * const input = { // GetInstanceCommunicationLimitsRequest
 *   connectInstanceId: "STRING_VALUE", // required
 * };
 * const command = new GetInstanceCommunicationLimitsCommand(input);
 * const response = await client.send(command);
 * // { // GetInstanceCommunicationLimitsResponse
 * //   communicationLimitsConfig: { // InstanceCommunicationLimitsConfig
 * //     allChannelSubtypes: { // CommunicationLimits Union: only one key present
 * //       communicationLimitsList: [ // CommunicationLimitList
 * //         { // CommunicationLimit
 * //           maxCountPerRecipient: Number("int"), // required
 * //           frequency: Number("int"), // required
 * //           unit: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetInstanceCommunicationLimitsCommandInput - {@link GetInstanceCommunicationLimitsCommandInput}
 * @returns {@link GetInstanceCommunicationLimitsCommandOutput}
 * @see {@link GetInstanceCommunicationLimitsCommandInput} for command's `input` shape.
 * @see {@link GetInstanceCommunicationLimitsCommandOutput} for command's `response` shape.
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
export class GetInstanceCommunicationLimitsCommand extends $Command
  .classBuilder<
    GetInstanceCommunicationLimitsCommandInput,
    GetInstanceCommunicationLimitsCommandOutput,
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
  .s("AmazonConnectCampaignServiceV2", "GetInstanceCommunicationLimits", {})
  .n("ConnectCampaignsV2Client", "GetInstanceCommunicationLimitsCommand")
  .f(void 0, void 0)
  .ser(se_GetInstanceCommunicationLimitsCommand)
  .de(de_GetInstanceCommunicationLimitsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetInstanceCommunicationLimitsRequest;
      output: GetInstanceCommunicationLimitsResponse;
    };
    sdk: {
      input: GetInstanceCommunicationLimitsCommandInput;
      output: GetInstanceCommunicationLimitsCommandOutput;
    };
  };
}
