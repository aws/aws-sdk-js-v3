// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import type {
  UpdateGlueIdentityCenterConfigurationRequest,
  UpdateGlueIdentityCenterConfigurationResponse,
} from "../models/models_2";
import { UpdateGlueIdentityCenterConfiguration$ } from "../schemas/schemas_0";

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
 *   UserBackgroundSessionsEnabled: true || false,
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "UpdateGlueIdentityCenterConfiguration", {})
  .n("GlueClient", "UpdateGlueIdentityCenterConfigurationCommand")
  .sc(UpdateGlueIdentityCenterConfiguration$)
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
