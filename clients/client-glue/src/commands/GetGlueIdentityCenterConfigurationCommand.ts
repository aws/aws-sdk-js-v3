// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import {
  GetGlueIdentityCenterConfigurationRequest,
  GetGlueIdentityCenterConfigurationResponse,
} from "../models/models_2";
import {
  de_GetGlueIdentityCenterConfigurationCommand,
  se_GetGlueIdentityCenterConfigurationCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetGlueIdentityCenterConfigurationCommand}.
 */
export interface GetGlueIdentityCenterConfigurationCommandInput extends GetGlueIdentityCenterConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetGlueIdentityCenterConfigurationCommand}.
 */
export interface GetGlueIdentityCenterConfigurationCommandOutput
  extends GetGlueIdentityCenterConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves the current Glue Identity Center configuration details, including the associated Identity Center instance and
 *       application information.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetGlueIdentityCenterConfigurationCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetGlueIdentityCenterConfigurationCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = {};
 * const command = new GetGlueIdentityCenterConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetGlueIdentityCenterConfigurationResponse
 * //   ApplicationArn: "STRING_VALUE",
 * //   InstanceArn: "STRING_VALUE",
 * //   Scopes: [ // OrchestrationStringList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetGlueIdentityCenterConfigurationCommandInput - {@link GetGlueIdentityCenterConfigurationCommandInput}
 * @returns {@link GetGlueIdentityCenterConfigurationCommandOutput}
 * @see {@link GetGlueIdentityCenterConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetGlueIdentityCenterConfigurationCommandOutput} for command's `response` shape.
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
export class GetGlueIdentityCenterConfigurationCommand extends $Command
  .classBuilder<
    GetGlueIdentityCenterConfigurationCommandInput,
    GetGlueIdentityCenterConfigurationCommandOutput,
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
  .s("AWSGlue", "GetGlueIdentityCenterConfiguration", {})
  .n("GlueClient", "GetGlueIdentityCenterConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_GetGlueIdentityCenterConfigurationCommand)
  .de(de_GetGlueIdentityCenterConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetGlueIdentityCenterConfigurationResponse;
    };
    sdk: {
      input: GetGlueIdentityCenterConfigurationCommandInput;
      output: GetGlueIdentityCenterConfigurationCommandOutput;
    };
  };
}
