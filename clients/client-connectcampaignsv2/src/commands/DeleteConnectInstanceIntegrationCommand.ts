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
import { DeleteConnectInstanceIntegrationRequest } from "../models/models_0";
import { DeleteConnectInstanceIntegration } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteConnectInstanceIntegrationCommand}.
 */
export interface DeleteConnectInstanceIntegrationCommandInput extends DeleteConnectInstanceIntegrationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteConnectInstanceIntegrationCommand}.
 */
export interface DeleteConnectInstanceIntegrationCommandOutput extends __MetadataBearer {}

/**
 * Delete the integration for the specified Amazon Connect instance.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectCampaignsV2Client, DeleteConnectInstanceIntegrationCommand } from "@aws-sdk/client-connectcampaignsv2"; // ES Modules import
 * // const { ConnectCampaignsV2Client, DeleteConnectInstanceIntegrationCommand } = require("@aws-sdk/client-connectcampaignsv2"); // CommonJS import
 * // import type { ConnectCampaignsV2ClientConfig } from "@aws-sdk/client-connectcampaignsv2";
 * const config = {}; // type is ConnectCampaignsV2ClientConfig
 * const client = new ConnectCampaignsV2Client(config);
 * const input = { // DeleteConnectInstanceIntegrationRequest
 *   connectInstanceId: "STRING_VALUE", // required
 *   integrationIdentifier: { // IntegrationIdentifier Union: only one key present
 *     customerProfiles: { // CustomerProfilesIntegrationIdentifier
 *       domainArn: "STRING_VALUE", // required
 *     },
 *     qConnect: { // QConnectIntegrationIdentifier
 *       knowledgeBaseArn: "STRING_VALUE", // required
 *     },
 *     lambda: { // LambdaIntegrationIdentifier
 *       functionArn: "STRING_VALUE", // required
 *     },
 *   },
 * };
 * const command = new DeleteConnectInstanceIntegrationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteConnectInstanceIntegrationCommandInput - {@link DeleteConnectInstanceIntegrationCommandInput}
 * @returns {@link DeleteConnectInstanceIntegrationCommandOutput}
 * @see {@link DeleteConnectInstanceIntegrationCommandInput} for command's `input` shape.
 * @see {@link DeleteConnectInstanceIntegrationCommandOutput} for command's `response` shape.
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
export class DeleteConnectInstanceIntegrationCommand extends $Command
  .classBuilder<
    DeleteConnectInstanceIntegrationCommandInput,
    DeleteConnectInstanceIntegrationCommandOutput,
    ConnectCampaignsV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectCampaignsV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectCampaignServiceV2", "DeleteConnectInstanceIntegration", {})
  .n("ConnectCampaignsV2Client", "DeleteConnectInstanceIntegrationCommand")
  .sc(DeleteConnectInstanceIntegration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteConnectInstanceIntegrationRequest;
      output: {};
    };
    sdk: {
      input: DeleteConnectInstanceIntegrationCommandInput;
      output: DeleteConnectInstanceIntegrationCommandOutput;
    };
  };
}
