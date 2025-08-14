// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import {
  CreateGlueIdentityCenterConfigurationRequest,
  CreateGlueIdentityCenterConfigurationResponse,
} from "../models/models_1";
import {
  de_CreateGlueIdentityCenterConfigurationCommand,
  se_CreateGlueIdentityCenterConfigurationCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateGlueIdentityCenterConfigurationCommand}.
 */
export interface CreateGlueIdentityCenterConfigurationCommandInput
  extends CreateGlueIdentityCenterConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link CreateGlueIdentityCenterConfigurationCommand}.
 */
export interface CreateGlueIdentityCenterConfigurationCommandOutput
  extends CreateGlueIdentityCenterConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Creates a new Glue Identity Center configuration to enable integration between Glue and Amazon Web Services IAM
 *       Identity Center for authentication and authorization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, CreateGlueIdentityCenterConfigurationCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, CreateGlueIdentityCenterConfigurationCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // CreateGlueIdentityCenterConfigurationRequest
 *   InstanceArn: "STRING_VALUE", // required
 *   Scopes: [ // IdentityCenterScopesList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new CreateGlueIdentityCenterConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // CreateGlueIdentityCenterConfigurationResponse
 * //   ApplicationArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateGlueIdentityCenterConfigurationCommandInput - {@link CreateGlueIdentityCenterConfigurationCommandInput}
 * @returns {@link CreateGlueIdentityCenterConfigurationCommandOutput}
 * @see {@link CreateGlueIdentityCenterConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateGlueIdentityCenterConfigurationCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *  <p>A resource to be created or added already exists.</p>
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Two processes are trying to modify a resource simultaneously.</p>
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
export class CreateGlueIdentityCenterConfigurationCommand extends $Command
  .classBuilder<
    CreateGlueIdentityCenterConfigurationCommandInput,
    CreateGlueIdentityCenterConfigurationCommandOutput,
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
  .s("AWSGlue", "CreateGlueIdentityCenterConfiguration", {})
  .n("GlueClient", "CreateGlueIdentityCenterConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_CreateGlueIdentityCenterConfigurationCommand)
  .de(de_CreateGlueIdentityCenterConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateGlueIdentityCenterConfigurationRequest;
      output: CreateGlueIdentityCenterConfigurationResponse;
    };
    sdk: {
      input: CreateGlueIdentityCenterConfigurationCommandInput;
      output: CreateGlueIdentityCenterConfigurationCommandOutput;
    };
  };
}
