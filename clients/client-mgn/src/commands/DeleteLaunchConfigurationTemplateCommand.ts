// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
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
 * import { MgnClient, DeleteLaunchConfigurationTemplateCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, DeleteLaunchConfigurationTemplateCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * // import type { MgnClientConfig } from "@aws-sdk/client-mgn";
 * const config = {}; // type is MgnClientConfig
 * const client = new MgnClient(config);
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
 * @see {@link MgnClientResolvedConfig | config} for MgnClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be completed due to a conflict with the current state of the target resource.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource not found exception.</p>
 *
 * @throws {@link UninitializedAccountException} (client fault)
 *  <p>Uninitialized account exception.</p>
 *
 * @throws {@link MgnServiceException}
 * <p>Base exception class for all service exceptions from Mgn service.</p>
 *
 *
 * @public
 */
export class DeleteLaunchConfigurationTemplateCommand extends $Command
  .classBuilder<
    DeleteLaunchConfigurationTemplateCommandInput,
    DeleteLaunchConfigurationTemplateCommandOutput,
    MgnClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MgnClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ApplicationMigrationService", "DeleteLaunchConfigurationTemplate", {})
  .n("MgnClient", "DeleteLaunchConfigurationTemplateCommand")
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
