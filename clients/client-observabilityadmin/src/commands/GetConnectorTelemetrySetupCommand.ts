// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetConnectorTelemetrySetupInput, GetConnectorTelemetrySetupOutput } from "../models/models_0";
import { GetConnectorTelemetrySetup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetConnectorTelemetrySetupCommand}.
 */
export interface GetConnectorTelemetrySetupCommandInput extends GetConnectorTelemetrySetupInput {}
/**
 * @public
 *
 * The output of {@link GetConnectorTelemetrySetupCommand}.
 */
export interface GetConnectorTelemetrySetupCommandOutput extends GetConnectorTelemetrySetupOutput, __MetadataBearer {}

/**
 * <p>Generates the artifacts that you use to create the infrastructure in your cloud provider that delivers the telemetry declared in the connector's telemetry manifest. This operation doesn't change any resources in your cloud provider or in Amazon Web Services.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ObservabilityAdminClient, GetConnectorTelemetrySetupCommand } from "@aws-sdk/client-observabilityadmin"; // ES Modules import
 * // const { ObservabilityAdminClient, GetConnectorTelemetrySetupCommand } = require("@aws-sdk/client-observabilityadmin"); // CommonJS import
 * // import type { ObservabilityAdminClientConfig } from "@aws-sdk/client-observabilityadmin";
 * const config = {}; // type is ObservabilityAdminClientConfig
 * const client = new ObservabilityAdminClient(config);
 * const input = { // GetConnectorTelemetrySetupInput
 *   ConnectorIdentifier: "STRING_VALUE", // required
 *   Format: "BICEP",
 * };
 * const command = new GetConnectorTelemetrySetupCommand(input);
 * const response = await client.send(command);
 * // { // GetConnectorTelemetrySetupOutput
 * //   Artifacts: [ // SetupArtifactList // required
 * //     { // SetupArtifact
 * //       FileName: "STRING_VALUE", // required
 * //       Content: "STRING_VALUE", // required
 * //       Format: "BICEP", // required
 * //       ContentType: "STRING_VALUE",
 * //     },
 * //   ],
 * //   RequiredPermissionsToApply: [ // PermissionList
 * //     "STRING_VALUE",
 * //   ],
 * //   Format: "BICEP", // required
 * //   Provider: "AZURE",
 * //   ManifestVersion: Number("long"),
 * // };
 *
 * ```
 *
 * @param GetConnectorTelemetrySetupCommandInput - {@link GetConnectorTelemetrySetupCommandInput}
 * @returns {@link GetConnectorTelemetrySetupCommandOutput}
 * @see {@link GetConnectorTelemetrySetupCommandInput} for command's `input` shape.
 * @see {@link GetConnectorTelemetrySetupCommandOutput} for command's `response` shape.
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
export class GetConnectorTelemetrySetupCommand extends command<GetConnectorTelemetrySetupCommandInput, GetConnectorTelemetrySetupCommandOutput>(
  _ep0,
  _mw0,
  "GetConnectorTelemetrySetup",
  GetConnectorTelemetrySetup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetConnectorTelemetrySetupInput;
      output: GetConnectorTelemetrySetupOutput;
    };
    sdk: {
      input: GetConnectorTelemetrySetupCommandInput;
      output: GetConnectorTelemetrySetupCommandOutput;
    };
  };
}
