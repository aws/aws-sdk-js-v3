// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  ConnectCampaignsV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ConnectCampaignsV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteConnectInstanceConfigRequest } from "../models/models_0";
import { DeleteConnectInstanceConfig$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteConnectInstanceConfigCommand}.
 */
export interface DeleteConnectInstanceConfigCommandInput extends DeleteConnectInstanceConfigRequest {}
/**
 * @public
 *
 * The output of {@link DeleteConnectInstanceConfigCommand}.
 */
export interface DeleteConnectInstanceConfigCommandOutput extends __MetadataBearer {}

/**
 * Deletes a connect instance config from the specified AWS account.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectCampaignsV2Client, DeleteConnectInstanceConfigCommand } from "@aws-sdk/client-connectcampaignsv2"; // ES Modules import
 * // const { ConnectCampaignsV2Client, DeleteConnectInstanceConfigCommand } = require("@aws-sdk/client-connectcampaignsv2"); // CommonJS import
 * // import type { ConnectCampaignsV2ClientConfig } from "@aws-sdk/client-connectcampaignsv2";
 * const config = {}; // type is ConnectCampaignsV2ClientConfig
 * const client = new ConnectCampaignsV2Client(config);
 * const input = { // DeleteConnectInstanceConfigRequest
 *   connectInstanceId: "STRING_VALUE", // required
 *   campaignDeletionPolicy: "STRING_VALUE",
 * };
 * const command = new DeleteConnectInstanceConfigCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteConnectInstanceConfigCommandInput - {@link DeleteConnectInstanceConfigCommandInput}
 * @returns {@link DeleteConnectInstanceConfigCommandOutput}
 * @see {@link DeleteConnectInstanceConfigCommandInput} for command's `input` shape.
 * @see {@link DeleteConnectInstanceConfigCommandOutput} for command's `response` shape.
 * @see {@link ConnectCampaignsV2ClientResolvedConfig | config} for ConnectCampaignsV2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *  Request processing failed because of an error or failure with the service.
 *
 * @throws {@link InvalidStateException} (client fault)
 *  The request could not be processed because of conflict in the current state.
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
export class DeleteConnectInstanceConfigCommand extends $Command
  .classBuilder<
    DeleteConnectInstanceConfigCommandInput,
    DeleteConnectInstanceConfigCommandOutput,
    ConnectCampaignsV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectCampaignsV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectCampaignServiceV2", "DeleteConnectInstanceConfig", {})
  .n("ConnectCampaignsV2Client", "DeleteConnectInstanceConfigCommand")
  .sc(DeleteConnectInstanceConfig$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteConnectInstanceConfigRequest;
      output: {};
    };
    sdk: {
      input: DeleteConnectInstanceConfigCommandInput;
      output: DeleteConnectInstanceConfigCommandOutput;
    };
  };
}
