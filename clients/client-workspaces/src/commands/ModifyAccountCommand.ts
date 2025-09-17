// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyAccountRequest, ModifyAccountResult } from "../models/models_0";
import { de_ModifyAccountCommand, se_ModifyAccountCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyAccountCommand}.
 */
export interface ModifyAccountCommandInput extends ModifyAccountRequest {}
/**
 * @public
 *
 * The output of {@link ModifyAccountCommand}.
 */
export interface ModifyAccountCommandOutput extends ModifyAccountResult, __MetadataBearer {}

/**
 * <p>Modifies the configuration of Bring Your Own License (BYOL) for the specified
 *          account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, ModifyAccountCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, ModifyAccountCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * // import type { WorkSpacesClientConfig } from "@aws-sdk/client-workspaces";
 * const config = {}; // type is WorkSpacesClientConfig
 * const client = new WorkSpacesClient(config);
 * const input = { // ModifyAccountRequest
 *   DedicatedTenancySupport: "ENABLED",
 *   DedicatedTenancyManagementCidrRange: "STRING_VALUE",
 * };
 * const command = new ModifyAccountCommand(input);
 * const response = await client.send(command);
 * // { // ModifyAccountResult
 * //   Message: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ModifyAccountCommandInput - {@link ModifyAccountCommandInput}
 * @returns {@link ModifyAccountCommandOutput}
 * @see {@link ModifyAccountCommandInput} for command's `input` shape.
 * @see {@link ModifyAccountCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for WorkSpacesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The user is not authorized to access a resource.</p>
 *
 * @throws {@link InvalidParameterValuesException} (client fault)
 *  <p>One or more parameter values are not valid.</p>
 *
 * @throws {@link InvalidResourceStateException} (client fault)
 *  <p>The state of the resource is not valid for this operation.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link ResourceUnavailableException} (client fault)
 *  <p>The specified resource is not available.</p>
 *
 * @throws {@link WorkSpacesServiceException}
 * <p>Base exception class for all service exceptions from WorkSpaces service.</p>
 *
 *
 * @public
 */
export class ModifyAccountCommand extends $Command
  .classBuilder<
    ModifyAccountCommandInput,
    ModifyAccountCommandOutput,
    WorkSpacesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WorkspacesService", "ModifyAccount", {})
  .n("WorkSpacesClient", "ModifyAccountCommand")
  .f(void 0, void 0)
  .ser(se_ModifyAccountCommand)
  .de(de_ModifyAccountCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyAccountRequest;
      output: ModifyAccountResult;
    };
    sdk: {
      input: ModifyAccountCommandInput;
      output: ModifyAccountCommandOutput;
    };
  };
}
