// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateTelemetryPipelineInput, UpdateTelemetryPipelineOutput } from "../models/models_0";
import { UpdateTelemetryPipeline$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Updates the configuration of an existing telemetry pipeline.
 *
 * > **Note:**
 * >
 * > The following attributes cannot be updated after pipeline creation:
 * >
 * > - **Pipeline name** - The pipeline name is immutable
 * > - **Pipeline ARN** - The ARN is automatically generated and cannot be changed
 * > - **Source type** - Once a pipeline is created with a specific source type (such as S3, CloudWatch Logs, GitHub, or third-party sources), it cannot be changed to a different source type
 * >
 * > Processors can be added, removed, or modified. However, some processors are not supported for third-party pipelines and cannot be added through updates.
 *
 * **Source-Specific Update Rules**
 *
 * - **CloudWatch Logs Sources (Vended and Custom)**
 *
 *   **Updatable:** `sts_role_arn`
 *
 *   **Fixed:** `data_source_name`, `data_source_type`, sink (must remain `@original`)
 *
 * - **S3 Sources (Crowdstrike, Zscaler, SentinelOne, Custom)**
 *
 *   **Updatable:** All SQS configuration parameters, `sts_role_arn`, codec settings, compression type, bucket ownership settings, sink log group
 *
 *   **Fixed:** `notification_type`, `aws.region`
 *
 * - **GitHub Audit Logs**
 *
 *   **Updatable:** All Amazon Web Services Secrets Manager attributes, `scope` (can switch between ORGANIZATION/ENTERPRISE), `organization` or `enterprise` name, `range`, authentication credentials (PAT or GitHub App)
 *
 * - **Microsoft Sources (Entra ID, Office365, Windows)**
 *
 *   **Updatable:** All Amazon Web Services Secrets Manager attributes, `tenant_id`, `workspace_id` (Windows only), OAuth2 credentials (`client_id`, `client_secret`)
 *
 * - **Okta Sources (SSO, Auth0)**
 *
 *   **Updatable:** All Amazon Web Services Secrets Manager attributes, `domain`, `range`, OAuth2 credentials (`client_id`, `client_secret`)
 *
 * - **Palo Alto Networks**
 *
 *   **Updatable:** All Amazon Web Services Secrets Manager attributes, `hostname`, basic authentication credentials (`username`, `password`)
 *
 * - **ServiceNow CMDB**
 *
 *   **Updatable:** All Amazon Web Services Secrets Manager attributes, `instance_url`, `range`, OAuth2 credentials (`client_id`, `client_secret`)
 *
 * - **Wiz CNAPP**
 *
 *   **Updatable:** All Amazon Web Services Secrets Manager attributes, `region`, `range`, OAuth2 credentials (`client_id`, `client_secret`)
 *
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
 *
 * Indicates you don't have permissions to perform the requested operation. The user or role that is making the request must have at least one IAM permissions policy attached that grants the required permissions. For more information, see [Access management for Amazon Web Services resources](https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html) in the IAM user guide.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Indicates the request has failed to process because of an unknown server error, exception, or failure.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource (such as a telemetry rule) could not be found.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * The request throughput limit was exceeded.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Indicates input validation failed. Check your request parameters and retry the request.
 *
 * @throws {@link ObservabilityAdminServiceException}
 *
 * Base exception class for all service exceptions from ObservabilityAdmin service.
 *
 * @public
 */
export class UpdateTelemetryPipelineCommand extends command<UpdateTelemetryPipelineCommandInput, UpdateTelemetryPipelineCommandOutput>(
  _ep0,
  _mw0,
  "UpdateTelemetryPipeline",
  UpdateTelemetryPipeline$
) {
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
