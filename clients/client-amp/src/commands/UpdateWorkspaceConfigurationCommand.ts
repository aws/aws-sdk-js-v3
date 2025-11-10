// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AmpClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmpClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateWorkspaceConfigurationRequest, UpdateWorkspaceConfigurationResponse } from "../models/models_0";
import { UpdateWorkspaceConfiguration } from "../schemas/schemas_0";

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
 * <p>Use this operation to create or update the label sets, label set limits, and retention period of a workspace.</p> <p>You must specify at least one of <code>limitsPerLabelSet</code> or <code>retentionPeriodInDays</code> for the request to be valid.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmpClient, UpdateWorkspaceConfigurationCommand } from "@aws-sdk/client-amp"; // ES Modules import
 * // const { AmpClient, UpdateWorkspaceConfigurationCommand } = require("@aws-sdk/client-amp"); // CommonJS import
 * // import type { AmpClientConfig } from "@aws-sdk/client-amp";
 * const config = {}; // type is AmpClientConfig
 * const client = new AmpClient(config);
 * const input = { // UpdateWorkspaceConfigurationRequest
 *   workspaceId: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 *   limitsPerLabelSet: [ // LimitsPerLabelSetList
 *     { // LimitsPerLabelSet
 *       limits: { // LimitsPerLabelSetEntry
 *         maxSeries: Number("long"),
 *       },
 *       labelSet: { // LabelSet // required
 *         "<keys>": "STRING_VALUE",
 *       },
 *     },
 *   ],
 *   retentionPeriodInDays: Number("int"),
 * };
 * const command = new UpdateWorkspaceConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateWorkspaceConfigurationResponse
 * //   status: { // WorkspaceConfigurationStatus
 * //     statusCode: "STRING_VALUE", // required
 * //     statusReason: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateWorkspaceConfigurationCommandInput - {@link UpdateWorkspaceConfigurationCommandInput}
 * @returns {@link UpdateWorkspaceConfigurationCommandOutput}
 * @see {@link UpdateWorkspaceConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateWorkspaceConfigurationCommandOutput} for command's `response` shape.
 * @see {@link AmpClientResolvedConfig | config} for AmpClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request would cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred during the processing of the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resources that doesn't exist.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Completing the request would cause a service quota to be exceeded.</p>
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
export class UpdateWorkspaceConfigurationCommand extends $Command
  .classBuilder<
    UpdateWorkspaceConfigurationCommandInput,
    UpdateWorkspaceConfigurationCommandOutput,
    AmpClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AmpClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonPrometheusService", "UpdateWorkspaceConfiguration", {})
  .n("AmpClient", "UpdateWorkspaceConfigurationCommand")
  .sc(UpdateWorkspaceConfiguration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateWorkspaceConfigurationRequest;
      output: UpdateWorkspaceConfigurationResponse;
    };
    sdk: {
      input: UpdateWorkspaceConfigurationCommandInput;
      output: UpdateWorkspaceConfigurationCommandOutput;
    };
  };
}
