// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListThirdPartyTelemetryEnrichmentsInput,
  ListThirdPartyTelemetryEnrichmentsOutput,
} from "../models/models_0";
import { ListThirdPartyTelemetryEnrichments$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListThirdPartyTelemetryEnrichmentsCommand}.
 */
export interface ListThirdPartyTelemetryEnrichmentsCommandInput extends ListThirdPartyTelemetryEnrichmentsInput {}
/**
 * @public
 *
 * The output of {@link ListThirdPartyTelemetryEnrichmentsCommand}.
 */
export interface ListThirdPartyTelemetryEnrichmentsCommandOutput extends ListThirdPartyTelemetryEnrichmentsOutput, __MetadataBearer {}

/**
 * <p>Returns a summary of each third-party telemetry enrichment in your account and Region. To get the full configuration of an enrichment, use <code>GetThirdPartyTelemetryEnrichment</code>. The results are paginated. To get the next page of results, use <code>NextToken</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ObservabilityAdminClient, ListThirdPartyTelemetryEnrichmentsCommand } from "@aws-sdk/client-observabilityadmin"; // ES Modules import
 * // const { ObservabilityAdminClient, ListThirdPartyTelemetryEnrichmentsCommand } = require("@aws-sdk/client-observabilityadmin"); // CommonJS import
 * // import type { ObservabilityAdminClientConfig } from "@aws-sdk/client-observabilityadmin";
 * const config = {}; // type is ObservabilityAdminClientConfig
 * const client = new ObservabilityAdminClient(config);
 * const input = { // ListThirdPartyTelemetryEnrichmentsInput
 *   Status: "Initializing" || "Running" || "Stopped" || "Impaired",
 *   TelemetrySource: "Azure",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListThirdPartyTelemetryEnrichmentsCommand(input);
 * const response = await client.send(command);
 * // { // ListThirdPartyTelemetryEnrichmentsOutput
 * //   TelemetryEnrichments: [ // ThirdPartyTelemetryEnrichmentSummaries
 * //     { // ThirdPartyTelemetryEnrichmentSummary
 * //       Name: "STRING_VALUE",
 * //       TelemetrySource: "Azure",
 * //       Status: "Initializing" || "Running" || "Stopped" || "Impaired",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListThirdPartyTelemetryEnrichmentsCommandInput - {@link ListThirdPartyTelemetryEnrichmentsCommandInput}
 * @returns {@link ListThirdPartyTelemetryEnrichmentsCommandOutput}
 * @see {@link ListThirdPartyTelemetryEnrichmentsCommandInput} for command's `input` shape.
 * @see {@link ListThirdPartyTelemetryEnrichmentsCommandOutput} for command's `response` shape.
 * @see {@link ObservabilityAdminClientResolvedConfig | config} for ObservabilityAdminClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> Indicates you don't have permissions to perform the requested operation. The user or role that is making the request must have at least one IAM permissions policy attached that grants the required permissions. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access management for Amazon Web Services resources</a> in the IAM user guide. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> Indicates the request has failed to process because of an unknown server error, exception, or failure. </p>
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
export class ListThirdPartyTelemetryEnrichmentsCommand extends command<ListThirdPartyTelemetryEnrichmentsCommandInput, ListThirdPartyTelemetryEnrichmentsCommandOutput>(
  _ep0,
  _mw0,
  "ListThirdPartyTelemetryEnrichments",
  ListThirdPartyTelemetryEnrichments$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListThirdPartyTelemetryEnrichmentsInput;
      output: ListThirdPartyTelemetryEnrichmentsOutput;
    };
    sdk: {
      input: ListThirdPartyTelemetryEnrichmentsCommandInput;
      output: ListThirdPartyTelemetryEnrichmentsCommandOutput;
    };
  };
}
