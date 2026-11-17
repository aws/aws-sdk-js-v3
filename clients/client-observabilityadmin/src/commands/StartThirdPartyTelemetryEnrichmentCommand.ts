// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  StartThirdPartyTelemetryEnrichmentInput,
  StartThirdPartyTelemetryEnrichmentOutput,
} from "../models/models_0";
import { StartThirdPartyTelemetryEnrichment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartThirdPartyTelemetryEnrichmentCommand}.
 */
export interface StartThirdPartyTelemetryEnrichmentCommandInput extends StartThirdPartyTelemetryEnrichmentInput {}
/**
 * @public
 *
 * The output of {@link StartThirdPartyTelemetryEnrichmentCommand}.
 */
export interface StartThirdPartyTelemetryEnrichmentCommandOutput extends StartThirdPartyTelemetryEnrichmentOutput, __MetadataBearer {}

/**
 * <p>Starts a third-party telemetry enrichment. An enrichment adds resource metadata, such as tags, from a third-party telemetry source to the telemetry that CloudWatch receives from the resources of that source.</p> <p>You specify an Amazon Web Services Config connector for your third-party environment, such as a Microsoft Azure tenant. You can use each connector for only one enrichment.</p> <p>To use this operation, you must have the <code>config:PutThirdPartyServiceLinkedConfigurationRecorder</code> permission. If the Amazon Web Services Config service-linked role does not exist in your account, you must also have the <code>iam:CreateServiceLinkedRole</code> permission.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ObservabilityAdminClient, StartThirdPartyTelemetryEnrichmentCommand } from "@aws-sdk/client-observabilityadmin"; // ES Modules import
 * // const { ObservabilityAdminClient, StartThirdPartyTelemetryEnrichmentCommand } = require("@aws-sdk/client-observabilityadmin"); // CommonJS import
 * // import type { ObservabilityAdminClientConfig } from "@aws-sdk/client-observabilityadmin";
 * const config = {}; // type is ObservabilityAdminClientConfig
 * const client = new ObservabilityAdminClient(config);
 * const input = { // StartThirdPartyTelemetryEnrichmentInput
 *   Name: "STRING_VALUE", // required
 *   TelemetrySourceConfiguration: { // TelemetrySourceConfigurationInput Union: only one key present
 *     Azure: { // AzureTelemetrySourceConfigurationInput
 *       AwsConfigConnectorArn: "STRING_VALUE", // required
 *     },
 *   },
 *   Tags: { // TagMapInput
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new StartThirdPartyTelemetryEnrichmentCommand(input);
 * const response = await client.send(command);
 * // { // StartThirdPartyTelemetryEnrichmentOutput
 * //   Arn: "STRING_VALUE", // required
 * //   Name: "STRING_VALUE", // required
 * //   Status: "Initializing" || "Running" || "Stopped" || "Impaired", // required
 * //   StatusReason: "STRING_VALUE",
 * //   TelemetrySourceConfiguration: { // TelemetrySourceConfigurationOutput Union: only one key present
 * //     Azure: { // AzureTelemetrySourceConfigurationOutput
 * //       AwsConfigConnectorArn: "STRING_VALUE",
 * //       ServiceLinkedRecorderArn: "STRING_VALUE",
 * //     },
 * //   },
 * //   Tags: { // TagMapOutput
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param StartThirdPartyTelemetryEnrichmentCommandInput - {@link StartThirdPartyTelemetryEnrichmentCommandInput}
 * @returns {@link StartThirdPartyTelemetryEnrichmentCommandOutput}
 * @see {@link StartThirdPartyTelemetryEnrichmentCommandInput} for command's `input` shape.
 * @see {@link StartThirdPartyTelemetryEnrichmentCommandOutput} for command's `response` shape.
 * @see {@link ObservabilityAdminClientResolvedConfig | config} for ObservabilityAdminClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> Indicates you don't have permissions to perform the requested operation. The user or role that is making the request must have at least one IAM permissions policy attached that grants the required permissions. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access management for Amazon Web Services resources</a> in the IAM user guide. </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p> The requested operation conflicts with the current state of the specified resource or with another request. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> Indicates the request has failed to process because of an unknown server error, exception, or failure. </p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p> The requested operation would exceed the allowed quota for the specified resource type. </p>
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
export class StartThirdPartyTelemetryEnrichmentCommand extends command<StartThirdPartyTelemetryEnrichmentCommandInput, StartThirdPartyTelemetryEnrichmentCommandOutput>(
  _ep0,
  _mw0,
  "StartThirdPartyTelemetryEnrichment",
  StartThirdPartyTelemetryEnrichment$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartThirdPartyTelemetryEnrichmentInput;
      output: StartThirdPartyTelemetryEnrichmentOutput;
    };
    sdk: {
      input: StartThirdPartyTelemetryEnrichmentCommandInput;
      output: StartThirdPartyTelemetryEnrichmentCommandOutput;
    };
  };
}
