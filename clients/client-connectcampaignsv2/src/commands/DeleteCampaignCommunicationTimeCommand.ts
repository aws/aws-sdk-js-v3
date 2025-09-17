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
import { DeleteCampaignCommunicationTimeRequest } from "../models/models_0";
import {
  de_DeleteCampaignCommunicationTimeCommand,
  se_DeleteCampaignCommunicationTimeCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteCampaignCommunicationTimeCommand}.
 */
export interface DeleteCampaignCommunicationTimeCommandInput extends DeleteCampaignCommunicationTimeRequest {}
/**
 * @public
 *
 * The output of {@link DeleteCampaignCommunicationTimeCommand}.
 */
export interface DeleteCampaignCommunicationTimeCommandOutput extends __MetadataBearer {}

/**
 * Deletes the communication time config for a campaign. This API is idempotent.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectCampaignsV2Client, DeleteCampaignCommunicationTimeCommand } from "@aws-sdk/client-connectcampaignsv2"; // ES Modules import
 * // const { ConnectCampaignsV2Client, DeleteCampaignCommunicationTimeCommand } = require("@aws-sdk/client-connectcampaignsv2"); // CommonJS import
 * // import type { ConnectCampaignsV2ClientConfig } from "@aws-sdk/client-connectcampaignsv2";
 * const config = {}; // type is ConnectCampaignsV2ClientConfig
 * const client = new ConnectCampaignsV2Client(config);
 * const input = { // DeleteCampaignCommunicationTimeRequest
 *   id: "STRING_VALUE", // required
 *   config: "STRING_VALUE", // required
 * };
 * const command = new DeleteCampaignCommunicationTimeCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteCampaignCommunicationTimeCommandInput - {@link DeleteCampaignCommunicationTimeCommandInput}
 * @returns {@link DeleteCampaignCommunicationTimeCommandOutput}
 * @see {@link DeleteCampaignCommunicationTimeCommandInput} for command's `input` shape.
 * @see {@link DeleteCampaignCommunicationTimeCommandOutput} for command's `response` shape.
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
 * @throws {@link ValidationException} (client fault)
 *  The input fails to satisfy the constraints specified by an AWS service.
 *
 * @throws {@link ConnectCampaignsV2ServiceException}
 * <p>Base exception class for all service exceptions from ConnectCampaignsV2 service.</p>
 *
 *
 * @public
 */
export class DeleteCampaignCommunicationTimeCommand extends $Command
  .classBuilder<
    DeleteCampaignCommunicationTimeCommandInput,
    DeleteCampaignCommunicationTimeCommandOutput,
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
  .s("AmazonConnectCampaignServiceV2", "DeleteCampaignCommunicationTime", {})
  .n("ConnectCampaignsV2Client", "DeleteCampaignCommunicationTimeCommand")
  .f(void 0, void 0)
  .ser(se_DeleteCampaignCommunicationTimeCommand)
  .de(de_DeleteCampaignCommunicationTimeCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteCampaignCommunicationTimeRequest;
      output: {};
    };
    sdk: {
      input: DeleteCampaignCommunicationTimeCommandInput;
      output: DeleteCampaignCommunicationTimeCommandOutput;
    };
  };
}
