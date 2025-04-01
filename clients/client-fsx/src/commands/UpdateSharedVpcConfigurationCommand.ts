// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FSxClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FSxClient";
import { UpdateSharedVpcConfigurationRequest, UpdateSharedVpcConfigurationResponse } from "../models/models_0";
import {
  de_UpdateSharedVpcConfigurationCommand,
  se_UpdateSharedVpcConfigurationCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateSharedVpcConfigurationCommand}.
 */
export interface UpdateSharedVpcConfigurationCommandInput extends UpdateSharedVpcConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateSharedVpcConfigurationCommand}.
 */
export interface UpdateSharedVpcConfigurationCommandOutput
  extends UpdateSharedVpcConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Configures whether participant accounts in your organization can create Amazon FSx for NetApp ONTAP Multi-AZ file systems in subnets that are shared by a virtual
 *             private cloud (VPC) owner. For more information, see the <a href="https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/maz-shared-vpc.html">Amazon FSx for NetApp ONTAP User
 *                 Guide</a>.</p>
 *          <note>
 *             <p>We strongly recommend that participant-created Multi-AZ file systems in the shared
 *                 VPC are deleted before you disable this feature. Once the feature is disabled, these
 *                 file systems will enter a <code>MISCONFIGURED</code> state and behave like Single-AZ
 *                 file systems. For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/maz-shared-vpc.html#disabling-maz-vpc-sharing">Important considerations before disabling shared VPC support for Multi-AZ file
 *                     systems</a>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, UpdateSharedVpcConfigurationCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, UpdateSharedVpcConfigurationCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * const client = new FSxClient(config);
 * const input = { // UpdateSharedVpcConfigurationRequest
 *   EnableFsxRouteTableUpdatesFromParticipantAccounts: "STRING_VALUE",
 *   ClientRequestToken: "STRING_VALUE",
 * };
 * const command = new UpdateSharedVpcConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateSharedVpcConfigurationResponse
 * //   EnableFsxRouteTableUpdatesFromParticipantAccounts: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateSharedVpcConfigurationCommandInput - {@link UpdateSharedVpcConfigurationCommandInput}
 * @returns {@link UpdateSharedVpcConfigurationCommandOutput}
 * @see {@link UpdateSharedVpcConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateSharedVpcConfigurationCommandOutput} for command's `response` shape.
 * @see {@link FSxClientResolvedConfig | config} for FSxClient's `config` shape.
 *
 * @throws {@link BadRequest} (client fault)
 *  <p>A generic error indicating a failure with a client request.</p>
 *
 * @throws {@link IncompatibleParameterError} (client fault)
 *  <p>The error returned when a second request is received with the same client request
 *             token but different parameters settings. A client request token should always uniquely
 *             identify a single request.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>A generic error indicating a server-side failure.</p>
 *
 * @throws {@link FSxServiceException}
 * <p>Base exception class for all service exceptions from FSx service.</p>
 *
 *
 * @public
 */
export class UpdateSharedVpcConfigurationCommand extends $Command
  .classBuilder<
    UpdateSharedVpcConfigurationCommandInput,
    UpdateSharedVpcConfigurationCommandOutput,
    FSxClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FSxClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSSimbaAPIService_v20180301", "UpdateSharedVpcConfiguration", {})
  .n("FSxClient", "UpdateSharedVpcConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_UpdateSharedVpcConfigurationCommand)
  .de(de_UpdateSharedVpcConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateSharedVpcConfigurationRequest;
      output: UpdateSharedVpcConfigurationResponse;
    };
    sdk: {
      input: UpdateSharedVpcConfigurationCommandInput;
      output: UpdateSharedVpcConfigurationCommandOutput;
    };
  };
}
