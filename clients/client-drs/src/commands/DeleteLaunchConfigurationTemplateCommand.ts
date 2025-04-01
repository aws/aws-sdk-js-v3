// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DrsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DrsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DeleteLaunchConfigurationTemplateRequest,
  DeleteLaunchConfigurationTemplateResponse,
} from "../models/models_0";
import {
  de_DeleteLaunchConfigurationTemplateCommand,
  se_DeleteLaunchConfigurationTemplateCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteLaunchConfigurationTemplateCommand}.
 */
export interface DeleteLaunchConfigurationTemplateCommandInput extends DeleteLaunchConfigurationTemplateRequest {}
/**
 * @public
 *
 * The output of {@link DeleteLaunchConfigurationTemplateCommand}.
 */
export interface DeleteLaunchConfigurationTemplateCommandOutput
  extends DeleteLaunchConfigurationTemplateResponse,
    __MetadataBearer {}

/**
 * <p>Deletes a single Launch Configuration Template by ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DrsClient, DeleteLaunchConfigurationTemplateCommand } from "@aws-sdk/client-drs"; // ES Modules import
 * // const { DrsClient, DeleteLaunchConfigurationTemplateCommand } = require("@aws-sdk/client-drs"); // CommonJS import
 * const client = new DrsClient(config);
 * const input = { // DeleteLaunchConfigurationTemplateRequest
 *   launchConfigurationTemplateID: "STRING_VALUE", // required
 * };
 * const command = new DeleteLaunchConfigurationTemplateCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteLaunchConfigurationTemplateCommandInput - {@link DeleteLaunchConfigurationTemplateCommandInput}
 * @returns {@link DeleteLaunchConfigurationTemplateCommandOutput}
 * @see {@link DeleteLaunchConfigurationTemplateCommandInput} for command's `input` shape.
 * @see {@link DeleteLaunchConfigurationTemplateCommandOutput} for command's `response` shape.
 * @see {@link DrsClientResolvedConfig | config} for DrsClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be completed due to a conflict with the current state of the target resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource for this operation was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link UninitializedAccountException} (client fault)
 *  <p>The account performing the request has not been initialized.</p>
 *
 * @throws {@link DrsServiceException}
 * <p>Base exception class for all service exceptions from Drs service.</p>
 *
 *
 * @public
 */
export class DeleteLaunchConfigurationTemplateCommand extends $Command
  .classBuilder<
    DeleteLaunchConfigurationTemplateCommandInput,
    DeleteLaunchConfigurationTemplateCommandOutput,
    DrsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DrsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ElasticDisasterRecoveryService", "DeleteLaunchConfigurationTemplate", {})
  .n("DrsClient", "DeleteLaunchConfigurationTemplateCommand")
  .f(void 0, void 0)
  .ser(se_DeleteLaunchConfigurationTemplateCommand)
  .de(de_DeleteLaunchConfigurationTemplateCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteLaunchConfigurationTemplateRequest;
      output: {};
    };
    sdk: {
      input: DeleteLaunchConfigurationTemplateCommandInput;
      output: DeleteLaunchConfigurationTemplateCommandOutput;
    };
  };
}
