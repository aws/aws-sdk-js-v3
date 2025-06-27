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
import { PutInstanceCommunicationLimitsRequest } from "../models/models_0";
import {
  de_PutInstanceCommunicationLimitsCommand,
  se_PutInstanceCommunicationLimitsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutInstanceCommunicationLimitsCommand}.
 */
export interface PutInstanceCommunicationLimitsCommandInput extends PutInstanceCommunicationLimitsRequest {}
/**
 * @public
 *
 * The output of {@link PutInstanceCommunicationLimitsCommand}.
 */
export interface PutInstanceCommunicationLimitsCommandOutput extends __MetadataBearer {}

/**
 * Put the instance communication limits. This API is idempotent.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectCampaignsV2Client, PutInstanceCommunicationLimitsCommand } from "@aws-sdk/client-connectcampaignsv2"; // ES Modules import
 * // const { ConnectCampaignsV2Client, PutInstanceCommunicationLimitsCommand } = require("@aws-sdk/client-connectcampaignsv2"); // CommonJS import
 * const client = new ConnectCampaignsV2Client(config);
 * const input = { // PutInstanceCommunicationLimitsRequest
 *   connectInstanceId: "STRING_VALUE", // required
 *   communicationLimitsConfig: { // InstanceCommunicationLimitsConfig
 *     allChannelSubtypes: { // CommunicationLimits Union: only one key present
 *       communicationLimitsList: [ // CommunicationLimitList
 *         { // CommunicationLimit
 *           maxCountPerRecipient: Number("int"), // required
 *           frequency: Number("int"), // required
 *           unit: "STRING_VALUE", // required
 *         },
 *       ],
 *     },
 *   },
 * };
 * const command = new PutInstanceCommunicationLimitsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutInstanceCommunicationLimitsCommandInput - {@link PutInstanceCommunicationLimitsCommandInput}
 * @returns {@link PutInstanceCommunicationLimitsCommandOutput}
 * @see {@link PutInstanceCommunicationLimitsCommandInput} for command's `input` shape.
 * @see {@link PutInstanceCommunicationLimitsCommandOutput} for command's `response` shape.
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
export class PutInstanceCommunicationLimitsCommand extends $Command
  .classBuilder<
    PutInstanceCommunicationLimitsCommandInput,
    PutInstanceCommunicationLimitsCommandOutput,
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
  .s("AmazonConnectCampaignServiceV2", "PutInstanceCommunicationLimits", {})
  .n("ConnectCampaignsV2Client", "PutInstanceCommunicationLimitsCommand")
  .f(void 0, void 0)
  .ser(se_PutInstanceCommunicationLimitsCommand)
  .de(de_PutInstanceCommunicationLimitsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutInstanceCommunicationLimitsRequest;
      output: {};
    };
    sdk: {
      input: PutInstanceCommunicationLimitsCommandInput;
      output: PutInstanceCommunicationLimitsCommandOutput;
    };
  };
}
