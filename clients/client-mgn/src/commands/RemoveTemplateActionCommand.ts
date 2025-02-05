// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import { RemoveTemplateActionRequest, RemoveTemplateActionResponse } from "../models/models_0";
import { de_RemoveTemplateActionCommand, se_RemoveTemplateActionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RemoveTemplateActionCommand}.
 */
export interface RemoveTemplateActionCommandInput extends RemoveTemplateActionRequest {}
/**
 * @public
 *
 * The output of {@link RemoveTemplateActionCommand}.
 */
export interface RemoveTemplateActionCommandOutput extends RemoveTemplateActionResponse, __MetadataBearer {}

/**
 * <p>Remove template post migration custom action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, RemoveTemplateActionCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, RemoveTemplateActionCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new MgnClient(config);
 * const input = { // RemoveTemplateActionRequest
 *   launchConfigurationTemplateID: "STRING_VALUE", // required
 *   actionID: "STRING_VALUE", // required
 * };
 * const command = new RemoveTemplateActionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RemoveTemplateActionCommandInput - {@link RemoveTemplateActionCommandInput}
 * @returns {@link RemoveTemplateActionCommandOutput}
 * @see {@link RemoveTemplateActionCommandInput} for command's `input` shape.
 * @see {@link RemoveTemplateActionCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for MgnClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource not found exception.</p>
 *
 * @throws {@link UninitializedAccountException} (client fault)
 *  <p>Uninitialized account exception.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validate exception.</p>
 *
 * @throws {@link MgnServiceException}
 * <p>Base exception class for all service exceptions from Mgn service.</p>
 *
 * @public
 */
export class RemoveTemplateActionCommand extends $Command
  .classBuilder<
    RemoveTemplateActionCommandInput,
    RemoveTemplateActionCommandOutput,
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
  .s("ApplicationMigrationService", "RemoveTemplateAction", {})
  .n("MgnClient", "RemoveTemplateActionCommand")
  .f(void 0, void 0)
  .ser(se_RemoveTemplateActionCommand)
  .de(de_RemoveTemplateActionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RemoveTemplateActionRequest;
      output: {};
    };
    sdk: {
      input: RemoveTemplateActionCommandInput;
      output: RemoveTemplateActionCommandOutput;
    };
  };
}
