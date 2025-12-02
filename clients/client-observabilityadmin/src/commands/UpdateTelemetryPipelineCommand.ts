// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateTelemetryPipelineInput, UpdateTelemetryPipelineOutput } from "../models/models_0";
import {
  ObservabilityAdminClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ObservabilityAdminClient";
import { UpdateTelemetryPipeline } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateTelemetryPipelineCommand}.
 */
export interface UpdateTelemetryPipelineCommandInput extends UpdateTelemetryPipelineInput {}
/**
 * @public
 *
 * The output of {@link UpdateTelemetryPipelineCommand}.
 */
export interface UpdateTelemetryPipelineCommandOutput extends UpdateTelemetryPipelineOutput, __MetadataBearer {}

/**
 * <p>Updates the configuration of an existing telemetry pipeline.</p> <note> <p>The following attributes cannot be updated after pipeline creation:</p> <ul> <li> <p> <b>Pipeline name</b> - The pipeline name is immutable</p> </li> <li> <p> <b>Pipeline ARN</b> - The ARN is automatically generated and cannot be changed</p> </li> <li> <p> <b>Source type</b> - Once a pipeline is created with a specific source type (such as S3, CloudWatch Logs, GitHub, or third-party sources), it cannot be changed to a different source type</p> </li> </ul> <p>Processors can be added, removed, or modified. However, some processors are not supported for third-party pipelines and cannot be added through updates.</p> </note> <p> <b>Source-Specific Update Rules</b> </p> <dl> <dt>CloudWatch Logs Sources (Vended and Custom)</dt> <dd> <p> <b>Updatable:</b> <code>sts_role_arn</code> </p> <p> <b>Fixed:</b> <code>data_source_name</code>, <code>data_source_type</code>, sink (must remain <code>@original</code>)</p> </dd> <dt>S3 Sources (Crowdstrike, Zscaler, SentinelOne, Custom)</dt> <dd> <p> <b>Updatable:</b> All SQS configuration parameters, <code>sts_role_arn</code>, codec settings, compression type, bucket ownership settings, sink log group</p> <p> <b>Fixed:</b> <code>notification_type</code>, <code>aws.region</code> </p> </dd> <dt>GitHub Audit Logs</dt> <dd> <p> <b>Updatable:</b> All Amazon Web Services Secrets Manager attributes, <code>scope</code> (can switch between ORGANIZATION/ENTERPRISE), <code>organization</code> or <code>enterprise</code> name, <code>range</code>, authentication credentials (PAT or GitHub App)</p> </dd> <dt>Microsoft Sources (Entra ID, Office365, Windows)</dt> <dd> <p> <b>Updatable:</b> All Amazon Web Services Secrets Manager attributes, <code>tenant_id</code>, <code>workspace_id</code> (Windows only), OAuth2 credentials (<code>client_id</code>, <code>client_secret</code>)</p> </dd> <dt>Okta Sources (SSO, Auth0)</dt> <dd> <p> <b>Updatable:</b> All Amazon Web Services Secrets Manager attributes, <code>domain</code>, <code>range</code> (SSO only), OAuth2 credentials (<code>client_id</code>, <code>client_secret</code>)</p> </dd> <dt>Palo Alto Networks</dt> <dd> <p> <b>Updatable:</b> All Amazon Web Services Secrets Manager attributes, <code>hostname</code>, basic authentication credentials (<code>username</code>, <code>password</code>)</p> </dd> <dt>ServiceNow CMDB</dt> <dd> <p> <b>Updatable:</b> All Amazon Web Services Secrets Manager attributes, <code>instance_url</code>, <code>range</code>, OAuth2 credentials (<code>client_id</code>, <code>client_secret</code>)</p> </dd> <dt>Wiz CNAPP</dt> <dd> <p> <b>Updatable:</b> All Amazon Web Services Secrets Manager attributes, <code>region</code>, <code>range</code>, OAuth2 credentials (<code>client_id</code>, <code>client_secret</code>)</p> </dd> </dl>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ObservabilityAdminClient, UpdateTelemetryPipelineCommand } from "@aws-sdk/client-observabilityadmin"; // ES Modules import
 * // const { ObservabilityAdminClient, UpdateTelemetryPipelineCommand } = require("@aws-sdk/client-observabilityadmin"); // CommonJS import
 * // import type { ObservabilityAdminClientConfig } from "@aws-sdk/client-observabilityadmin";
 * const config = {}; // type is ObservabilityAdminClientConfig
 * const client = new ObservabilityAdminClient(config);
 * const input = { // UpdateTelemetryPipelineInput
 *   PipelineIdentifier: "STRING_VALUE", // required
 *   Configuration: { // TelemetryPipelineConfiguration
 *     Body: "STRING_VALUE", // required
 *   },
 * };
 * const command = new UpdateTelemetryPipelineCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateTelemetryPipelineCommandInput - {@link UpdateTelemetryPipelineCommandInput}
 * @returns {@link UpdateTelemetryPipelineCommandOutput}
 * @see {@link UpdateTelemetryPipelineCommandInput} for command's `input` shape.
 * @see {@link UpdateTelemetryPipelineCommandOutput} for command's `response` shape.
 * @see {@link ObservabilityAdminClientResolvedConfig | config} for ObservabilityAdminClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> Indicates you don't have permissions to perform the requested operation. The user or role that is making the request must have at least one IAM permissions policy attached that grants the required permissions. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access management for Amazon Web Services resources</a> in the IAM user guide. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> Indicates the request has failed to process because of an unknown server error, exception, or failure. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p> The specified resource (such as a telemetry rule) could not be found. </p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p> The request throughput limit was exceeded. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> Indicates input validation failed. Check your request parameters and retry the request. </p>
 *
 * @throws {@link ObservabilityAdminServiceException}
 * <p>Base exception class for all service exceptions from ObservabilityAdmin service.</p>
 *
 *
 * @public
 */
export class UpdateTelemetryPipelineCommand extends $Command
  .classBuilder<
    UpdateTelemetryPipelineCommandInput,
    UpdateTelemetryPipelineCommandOutput,
    ObservabilityAdminClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ObservabilityAdminClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ObservabilityAdmin", "UpdateTelemetryPipeline", {})
  .n("ObservabilityAdminClient", "UpdateTelemetryPipelineCommand")
  .sc(UpdateTelemetryPipeline)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateTelemetryPipelineInput;
      output: {};
    };
    sdk: {
      input: UpdateTelemetryPipelineCommandInput;
      output: UpdateTelemetryPipelineCommandOutput;
    };
  };
}
