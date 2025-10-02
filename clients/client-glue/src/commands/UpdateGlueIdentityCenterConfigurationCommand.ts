// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import {
  UpdateGlueIdentityCenterConfigurationRequest,
  UpdateGlueIdentityCenterConfigurationResponse,
} from "../models/models_3";
import {
  de_UpdateGlueIdentityCenterConfigurationCommand,
  se_UpdateGlueIdentityCenterConfigurationCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateGlueIdentityCenterConfigurationCommand}.
 */
export interface UpdateGlueIdentityCenterConfigurationCommandInput
  extends UpdateGlueIdentityCenterConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateGlueIdentityCenterConfigurationCommand}.
 */
export interface UpdateGlueIdentityCenterConfigurationCommandOutput
  extends UpdateGlueIdentityCenterConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Updates the existing Glue Identity Center configuration, allowing modification of scopes and permissions for the integration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, UpdateGlueIdentityCenterConfigurationCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, UpdateGlueIdentityCenterConfigurationCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // UpdateGlueIdentityCenterConfigurationRequest
 *   Scopes: [ // IdentityCenterScopesList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UpdateGlueIdentityCenterConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateGlueIdentityCenterConfigurationCommandInput - {@link UpdateGlueIdentityCenterConfigurationCommandInput}
 * @returns {@link UpdateGlueIdentityCenterConfigurationCommandOutput}
 * @see {@link UpdateGlueIdentityCenterConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateGlueIdentityCenterConfigurationCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Two processes are trying to modify a resource simultaneously.</p>
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class UpdateGlueIdentityCenterConfigurationCommand extends $Command
  .classBuilder<
    UpdateGlueIdentityCenterConfigurationCommandInput,
    UpdateGlueIdentityCenterConfigurationCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGlue", "UpdateGlueIdentityCenterConfiguration", {})
  .n("GlueClient", "UpdateGlueIdentityCenterConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_UpdateGlueIdentityCenterConfigurationCommand)
  .de(de_UpdateGlueIdentityCenterConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateGlueIdentityCenterConfigurationRequest;
      output: {};
    };
    sdk: {
      input: UpdateGlueIdentityCenterConfigurationCommandInput;
      output: UpdateGlueIdentityCenterConfigurationCommandOutput;
    };
  };
}
