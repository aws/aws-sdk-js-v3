// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateTelemetryPipelineInput, CreateTelemetryPipelineOutput } from "../models/models_0";
import { CreateTelemetryPipeline$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateTelemetryPipelineCommand}.
 */
export interface CreateTelemetryPipelineCommandInput extends CreateTelemetryPipelineInput {}
/**
 * @public
 *
 * The output of {@link CreateTelemetryPipelineCommand}.
 */
export interface CreateTelemetryPipelineCommandOutput extends CreateTelemetryPipelineOutput, __MetadataBearer {}

/**
 * Creates a telemetry pipeline for processing and transforming telemetry data. The pipeline defines how data flows from sources through processors to destinations, enabling data transformation and delivering capabilities.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ObservabilityAdminClient, CreateTelemetryPipelineCommand } from "@aws-sdk/client-observabilityadmin"; // ES Modules import
 * // const { ObservabilityAdminClient, CreateTelemetryPipelineCommand } = require("@aws-sdk/client-observabilityadmin"); // CommonJS import
 * // import type { ObservabilityAdminClientConfig } from "@aws-sdk/client-observabilityadmin";
 * const config = {}; // type is ObservabilityAdminClientConfig
 * const client = new ObservabilityAdminClient(config);
 * const input = { // CreateTelemetryPipelineInput
 *   Name: "STRING_VALUE", // required
 *   Configuration: { // TelemetryPipelineConfiguration
 *     Body: "STRING_VALUE", // required
 *   },
 *   Tags: { // TagMapInput
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateTelemetryPipelineCommand(input);
 * const response = await client.send(command);
 * // { // CreateTelemetryPipelineOutput
 * //   Arn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateTelemetryPipelineCommandInput - {@link CreateTelemetryPipelineCommandInput}
 * @returns {@link CreateTelemetryPipelineCommandOutput}
 * @see {@link CreateTelemetryPipelineCommandInput} for command's `input` shape.
 * @see {@link CreateTelemetryPipelineCommandOutput} for command's `response` shape.
 * @see {@link ObservabilityAdminClientResolvedConfig | config} for ObservabilityAdminClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Indicates you don't have permissions to perform the requested operation. The user or role that is making the request must have at least one IAM permissions policy attached that grants the required permissions. For more information, see [Access management for Amazon Web Services resources](https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html) in the IAM user guide.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The requested operation conflicts with the current state of the specified resource or with another request.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Indicates the request has failed to process because of an unknown server error, exception, or failure.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The requested operation would exceed the allowed quota for the specified resource type.
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
export class CreateTelemetryPipelineCommand extends command<CreateTelemetryPipelineCommandInput, CreateTelemetryPipelineCommandOutput>(
  _ep0,
  _mw0,
  "CreateTelemetryPipeline",
  CreateTelemetryPipeline$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateTelemetryPipelineInput;
      output: CreateTelemetryPipelineOutput;
    };
    sdk: {
      input: CreateTelemetryPipelineCommandInput;
      output: CreateTelemetryPipelineCommandOutput;
    };
  };
}
