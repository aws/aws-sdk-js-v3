// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AmpClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmpClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeWorkspaceConfigurationRequest, DescribeWorkspaceConfigurationResponse } from "../models/models_0";
import { DescribeWorkspaceConfiguration$ } from "../schemas/schemas_0";

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
export interface DescribeWorkspaceConfigurationCommandOutput extends DescribeWorkspaceConfigurationResponse, __MetadataBearer {}

/**
 * <p>Use this operation to return information about the configuration of a workspace. The configuration details returned include workspace configuration status, label set limits, and retention period.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmpClient, DescribeWorkspaceConfigurationCommand } from "@aws-sdk/client-amp"; // ES Modules import
 * // const { AmpClient, DescribeWorkspaceConfigurationCommand } = require("@aws-sdk/client-amp"); // CommonJS import
 * // import type { AmpClientConfig } from "@aws-sdk/client-amp";
 * const config = {}; // type is AmpClientConfig
 * const client = new AmpClient(config);
 * const input = { // DescribeWorkspaceConfigurationRequest
 *   workspaceId: "STRING_VALUE", // required
 * };
 * const command = new DescribeWorkspaceConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeWorkspaceConfigurationResponse
 * //   workspaceConfiguration: { // WorkspaceConfigurationDescription
 * //     status: { // WorkspaceConfigurationStatus
 * //       statusCode: "STRING_VALUE", // required
 * //       statusReason: "STRING_VALUE",
 * //     },
 * //     limitsPerLabelSet: [ // LimitsPerLabelSetList
 * //       { // LimitsPerLabelSet
 * //         limits: { // LimitsPerLabelSetEntry
 * //           maxSeries: Number("long"),
 * //         },
 * //         labelSet: { // LabelSet // required
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //     retentionPeriodInDays: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeWorkspaceConfigurationCommandInput - {@link DescribeWorkspaceConfigurationCommandInput}
 * @returns {@link DescribeWorkspaceConfigurationCommandOutput}
 * @see {@link DescribeWorkspaceConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeWorkspaceConfigurationCommandOutput} for command's `response` shape.
 * @see {@link AmpClientResolvedConfig | config} for AmpClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred during the processing of the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resources that doesn't exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link AmpServiceException}
 * <p>Base exception class for all service exceptions from Amp service.</p>
 *
 *
 * @public
 */
export class DescribeWorkspaceConfigurationCommand extends $Command
  .classBuilder<
    DescribeWorkspaceConfigurationCommandInput,
    DescribeWorkspaceConfigurationCommandOutput,
    AmpClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AmpClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonPrometheusService", "DescribeWorkspaceConfiguration", {})
  .n("AmpClient", "DescribeWorkspaceConfigurationCommand")
  .sc(DescribeWorkspaceConfiguration$)
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
