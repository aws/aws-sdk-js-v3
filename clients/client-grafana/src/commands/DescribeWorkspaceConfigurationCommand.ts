// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GrafanaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GrafanaClient";
import { DescribeWorkspaceConfigurationRequest, DescribeWorkspaceConfigurationResponse } from "../models/models_0";
import {
  de_DescribeWorkspaceConfigurationCommand,
  se_DescribeWorkspaceConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface DescribeWorkspaceConfigurationCommandOutput
  extends DescribeWorkspaceConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Gets the current configuration string for the given workspace.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GrafanaClient, DescribeWorkspaceConfigurationCommand } from "@aws-sdk/client-grafana"; // ES Modules import
 * // const { GrafanaClient, DescribeWorkspaceConfigurationCommand } = require("@aws-sdk/client-grafana"); // CommonJS import
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
 *  <p>You do not have sufficient permissions to perform this action. </p>
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
 * @throws {@link GrafanaServiceException}
 * <p>Base exception class for all service exceptions from Grafana service.</p>
 *
 *
 * @public
 */
export class DescribeWorkspaceConfigurationCommand extends $Command
  .classBuilder<
    DescribeWorkspaceConfigurationCommandInput,
    DescribeWorkspaceConfigurationCommandOutput,
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
  .s("AWSGrafanaControlPlane", "DescribeWorkspaceConfiguration", {})
  .n("GrafanaClient", "DescribeWorkspaceConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_DescribeWorkspaceConfigurationCommand)
  .de(de_DescribeWorkspaceConfigurationCommand)
  .build() {
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
