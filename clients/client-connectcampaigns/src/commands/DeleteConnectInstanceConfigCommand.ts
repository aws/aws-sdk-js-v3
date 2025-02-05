// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectCampaignsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectCampaignsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteConnectInstanceConfigRequest } from "../models/models_0";
import {
  de_DeleteConnectInstanceConfigCommand,
  se_DeleteConnectInstanceConfigCommand,
} from "../protocols/Aws_restJson1";

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
 * import { ConnectCampaignsClient, DeleteConnectInstanceConfigCommand } from "@aws-sdk/client-connectcampaigns"; // ES Modules import
 * // const { ConnectCampaignsClient, DeleteConnectInstanceConfigCommand } = require("@aws-sdk/client-connectcampaigns"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ConnectCampaignsClient(config);
 * const input = { // DeleteConnectInstanceConfigRequest
 *   connectInstanceId: "STRING_VALUE", // required
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
 * @see {@link ConnectCampaignsClientResolvedConfig | config} for ConnectCampaignsClient's `config` shape.
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
 * @throws {@link ConnectCampaignsServiceException}
 * <p>Base exception class for all service exceptions from ConnectCampaigns service.</p>
 *
 * @public
 */
export class DeleteConnectInstanceConfigCommand extends $Command
  .classBuilder<
    DeleteConnectInstanceConfigCommandInput,
    DeleteConnectInstanceConfigCommandOutput,
    ConnectCampaignsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectCampaignsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonConnectCampaignService", "DeleteConnectInstanceConfig", {})
  .n("ConnectCampaignsClient", "DeleteConnectInstanceConfigCommand")
  .f(void 0, void 0)
  .ser(se_DeleteConnectInstanceConfigCommand)
  .de(de_DeleteConnectInstanceConfigCommand)
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
