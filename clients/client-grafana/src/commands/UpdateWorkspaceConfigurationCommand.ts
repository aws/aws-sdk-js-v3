// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateWorkspaceConfigurationRequest, UpdateWorkspaceConfigurationResponse } from "../models/models_0";
import { UpdateWorkspaceConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface UpdateWorkspaceConfigurationCommandOutput extends UpdateWorkspaceConfigurationResponse, __MetadataBearer {}

/**
 * Updates the configuration string for the given workspace
 *
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
 *
 * You do not have sufficient permissions to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * A resource was in an inconsistent state during an update or a deletion.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Unexpected error while processing the request. Retry the request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The request references a resource that does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied because of request throttling. Retry the request.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The value of a parameter in the request caused an error.
 *
 * @throws {@link GrafanaServiceException}
 *
 * Base exception class for all service exceptions from Grafana service.
 *
 * @public
 */
export class UpdateWorkspaceConfigurationCommand extends command<UpdateWorkspaceConfigurationCommandInput, UpdateWorkspaceConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "UpdateWorkspaceConfiguration",
  UpdateWorkspaceConfiguration$
) {
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
