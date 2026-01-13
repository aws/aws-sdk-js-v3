// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import type {
  DeleteGlueIdentityCenterConfigurationRequest,
  DeleteGlueIdentityCenterConfigurationResponse,
} from "../models/models_1";
import { DeleteGlueIdentityCenterConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteGlueIdentityCenterConfigurationCommand}.
 */
export interface DeleteGlueIdentityCenterConfigurationCommandInput extends DeleteGlueIdentityCenterConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteGlueIdentityCenterConfigurationCommand}.
 */
export interface DeleteGlueIdentityCenterConfigurationCommandOutput extends DeleteGlueIdentityCenterConfigurationResponse, __MetadataBearer {}

/**
 * <p>Deletes the existing Glue Identity Center configuration, removing the integration between Glue and
 *       Amazon Web Services IAM Identity Center.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, DeleteGlueIdentityCenterConfigurationCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, DeleteGlueIdentityCenterConfigurationCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = {};
 * const command = new DeleteGlueIdentityCenterConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteGlueIdentityCenterConfigurationCommandInput - {@link DeleteGlueIdentityCenterConfigurationCommandInput}
 * @returns {@link DeleteGlueIdentityCenterConfigurationCommandOutput}
 * @see {@link DeleteGlueIdentityCenterConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteGlueIdentityCenterConfigurationCommandOutput} for command's `response` shape.
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
export class DeleteGlueIdentityCenterConfigurationCommand extends $Command
  .classBuilder<
    DeleteGlueIdentityCenterConfigurationCommandInput,
    DeleteGlueIdentityCenterConfigurationCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "DeleteGlueIdentityCenterConfiguration", {})
  .n("GlueClient", "DeleteGlueIdentityCenterConfigurationCommand")
  .sc(DeleteGlueIdentityCenterConfiguration$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: {};
    };
    sdk: {
      input: DeleteGlueIdentityCenterConfigurationCommandInput;
      output: DeleteGlueIdentityCenterConfigurationCommandOutput;
    };
  };
}
