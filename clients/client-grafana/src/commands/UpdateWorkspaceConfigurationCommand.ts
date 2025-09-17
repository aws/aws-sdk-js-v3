// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GrafanaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GrafanaClient";
import { UpdateWorkspaceConfigurationRequest, UpdateWorkspaceConfigurationResponse } from "../models/models_0";
import {
  de_UpdateWorkspaceConfigurationCommand,
  se_UpdateWorkspaceConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateWorkspaceConfigurationCommand}.
 */
export interface UpdateWorkspaceConfigurationCommandInput extends UpdateWorkspaceConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateWorkspaceConfigurationCommand}.
 */
export interface UpdateWorkspaceConfigurationCommandOutput
  extends UpdateWorkspaceConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Updates the configuration string for the given workspace</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GrafanaClient, UpdateWorkspaceConfigurationCommand } from "@aws-sdk/client-grafana"; // ES Modules import
 * // const { GrafanaClient, UpdateWorkspaceConfigurationCommand } = require("@aws-sdk/client-grafana"); // CommonJS import
 * // import type { GrafanaClientConfig } from "@aws-sdk/client-grafana";
 * const config = {}; // type is GrafanaClientConfig
 * const client = new GrafanaClient(config);
 * const input = { // UpdateWorkspaceConfigurationRequest
 *   configuration: "STRING_VALUE", // required
 *   workspaceId: "STRING_VALUE", // required
 *   grafanaVersion: "STRING_VALUE",
 * };
 * const command = new UpdateWorkspaceConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateWorkspaceConfigurationCommandInput - {@link UpdateWorkspaceConfigurationCommandInput}
 * @returns {@link UpdateWorkspaceConfigurationCommandOutput}
 * @see {@link UpdateWorkspaceConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateWorkspaceConfigurationCommandOutput} for command's `response` shape.
 * @see {@link GrafanaClientResolvedConfig | config} for GrafanaClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action. </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A resource was in an inconsistent state during an update or a deletion.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error while processing the request. Retry the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource that does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because of request throttling. Retry the request.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The value of a parameter in the request caused an error.</p>
 *
 * @throws {@link GrafanaServiceException}
 * <p>Base exception class for all service exceptions from Grafana service.</p>
 *
 *
 * @public
 */
export class UpdateWorkspaceConfigurationCommand extends $Command
  .classBuilder<
    UpdateWorkspaceConfigurationCommandInput,
    UpdateWorkspaceConfigurationCommandOutput,
    GrafanaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GrafanaClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGrafanaControlPlane", "UpdateWorkspaceConfiguration", {})
  .n("GrafanaClient", "UpdateWorkspaceConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_UpdateWorkspaceConfigurationCommand)
  .de(de_UpdateWorkspaceConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateWorkspaceConfigurationRequest;
      output: {};
    };
    sdk: {
      input: UpdateWorkspaceConfigurationCommandInput;
      output: UpdateWorkspaceConfigurationCommandOutput;
    };
  };
}
