// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import type { RemoveTemplateActionRequest, RemoveTemplateActionResponse } from "../models/models_0";
import { RemoveTemplateAction } from "../schemas/schemas_0";

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
 * // import type { MgnClientConfig } from "@aws-sdk/client-mgn";
 * const config = {}; // type is MgnClientConfig
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ApplicationMigrationService", "RemoveTemplateAction", {})
  .n("MgnClient", "RemoveTemplateActionCommand")
  .sc(RemoveTemplateAction)
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
