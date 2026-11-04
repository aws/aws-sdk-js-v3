// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeWorkspaceConfigurationRequest, DescribeWorkspaceConfigurationResponse } from "../models/models_0";
import { DescribeWorkspaceConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeWorkspaceConfigurationCommand}.
 */
export interface DescribeWorkspaceConfigurationCommandInput extends DescribeWorkspaceConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeWorkspaceConfigurationCommand}.
 */
export interface DescribeWorkspaceConfigurationCommandOutput extends DescribeWorkspaceConfigurationResponse, __MetadataBearer {}

/**
 * Gets the current configuration string for the given workspace.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GrafanaClient, DescribeWorkspaceConfigurationCommand } from "@aws-sdk/client-grafana"; // ES Modules import
 * // const { GrafanaClient, DescribeWorkspaceConfigurationCommand } = require("@aws-sdk/client-grafana"); // CommonJS import
 * // import type { GrafanaClientConfig } from "@aws-sdk/client-grafana";
 * const config = {}; // type is GrafanaClientConfig
 * const client = new GrafanaClient(config);
 * const input = { // DescribeWorkspaceConfigurationRequest
 *   workspaceId: "STRING_VALUE", // required
 * };
 * const command = new DescribeWorkspaceConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeWorkspaceConfigurationResponse
 * //   configuration: "STRING_VALUE", // required
 * //   grafanaVersion: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeWorkspaceConfigurationCommandInput - {@link DescribeWorkspaceConfigurationCommandInput}
 * @returns {@link DescribeWorkspaceConfigurationCommandOutput}
 * @see {@link DescribeWorkspaceConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeWorkspaceConfigurationCommandOutput} for command's `response` shape.
 * @see {@link GrafanaClientResolvedConfig | config} for GrafanaClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient permissions to perform this action.
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
 * @throws {@link GrafanaServiceException}
 *
 * Base exception class for all service exceptions from Grafana service.
 *
 * @public
 */
export class DescribeWorkspaceConfigurationCommand extends command<DescribeWorkspaceConfigurationCommandInput, DescribeWorkspaceConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "DescribeWorkspaceConfiguration",
  DescribeWorkspaceConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeWorkspaceConfigurationRequest;
      output: DescribeWorkspaceConfigurationResponse;
    };
    sdk: {
      input: DescribeWorkspaceConfigurationCommandInput;
      output: DescribeWorkspaceConfigurationCommandOutput;
    };
  };
}
