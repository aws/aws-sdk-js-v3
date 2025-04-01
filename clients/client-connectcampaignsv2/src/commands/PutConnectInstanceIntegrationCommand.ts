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
import { PutConnectInstanceIntegrationRequest } from "../models/models_0";
import {
  de_PutConnectInstanceIntegrationCommand,
  se_PutConnectInstanceIntegrationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutConnectInstanceIntegrationCommand}.
 */
export interface PutConnectInstanceIntegrationCommandInput extends PutConnectInstanceIntegrationRequest {}
/**
 * @public
 *
 * The output of {@link PutConnectInstanceIntegrationCommand}.
 */
export interface PutConnectInstanceIntegrationCommandOutput extends __MetadataBearer {}

/**
 * Put or update the integration for the specified Amazon Connect instance.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectCampaignsV2Client, PutConnectInstanceIntegrationCommand } from "@aws-sdk/client-connectcampaignsv2"; // ES Modules import
 * // const { ConnectCampaignsV2Client, PutConnectInstanceIntegrationCommand } = require("@aws-sdk/client-connectcampaignsv2"); // CommonJS import
 * const client = new ConnectCampaignsV2Client(config);
 * const input = { // PutConnectInstanceIntegrationRequest
 *   connectInstanceId: "STRING_VALUE", // required
 *   integrationConfig: { // IntegrationConfig Union: only one key present
 *     customerProfiles: { // CustomerProfilesIntegrationConfig
 *       domainArn: "STRING_VALUE", // required
 *       objectTypeNames: { // ObjectTypeNamesMap // required
 *         "<keys>": "STRING_VALUE",
 *       },
 *     },
 *     qConnect: { // QConnectIntegrationConfig
 *       knowledgeBaseArn: "STRING_VALUE", // required
 *     },
 *   },
 * };
 * const command = new PutConnectInstanceIntegrationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutConnectInstanceIntegrationCommandInput - {@link PutConnectInstanceIntegrationCommandInput}
 * @returns {@link PutConnectInstanceIntegrationCommandOutput}
 * @see {@link PutConnectInstanceIntegrationCommandInput} for command's `input` shape.
 * @see {@link PutConnectInstanceIntegrationCommandOutput} for command's `response` shape.
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
export class PutConnectInstanceIntegrationCommand extends $Command
  .classBuilder<
    PutConnectInstanceIntegrationCommandInput,
    PutConnectInstanceIntegrationCommandOutput,
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
  .s("AmazonConnectCampaignServiceV2", "PutConnectInstanceIntegration", {})
  .n("ConnectCampaignsV2Client", "PutConnectInstanceIntegrationCommand")
  .f(void 0, void 0)
  .ser(se_PutConnectInstanceIntegrationCommand)
  .de(de_PutConnectInstanceIntegrationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutConnectInstanceIntegrationRequest;
      output: {};
    };
    sdk: {
      input: PutConnectInstanceIntegrationCommandInput;
      output: PutConnectInstanceIntegrationCommandOutput;
    };
  };
}
