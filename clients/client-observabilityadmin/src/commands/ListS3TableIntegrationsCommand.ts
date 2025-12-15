// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListS3TableIntegrationsInput, ListS3TableIntegrationsOutput } from "../models/models_0";
import type {
  ObservabilityAdminClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ObservabilityAdminClient";
import { ListS3TableIntegrations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListS3TableIntegrationsCommand}.
 */
export interface ListS3TableIntegrationsCommandInput extends ListS3TableIntegrationsInput {}
/**
 * @public
 *
 * The output of {@link ListS3TableIntegrationsCommand}.
 */
export interface ListS3TableIntegrationsCommandOutput extends ListS3TableIntegrationsOutput, __MetadataBearer {}

/**
 * <p>Lists all S3 Table integrations in your account. We recommend using pagination to ensure that the operation returns quickly and successfully.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ObservabilityAdminClient, ListS3TableIntegrationsCommand } from "@aws-sdk/client-observabilityadmin"; // ES Modules import
 * // const { ObservabilityAdminClient, ListS3TableIntegrationsCommand } = require("@aws-sdk/client-observabilityadmin"); // CommonJS import
 * // import type { ObservabilityAdminClientConfig } from "@aws-sdk/client-observabilityadmin";
 * const config = {}; // type is ObservabilityAdminClientConfig
 * const client = new ObservabilityAdminClient(config);
 * const input = { // ListS3TableIntegrationsInput
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListS3TableIntegrationsCommand(input);
 * const response = await client.send(command);
 * // { // ListS3TableIntegrationsOutput
 * //   IntegrationSummaries: [ // IntegrationSummaries
 * //     { // IntegrationSummary
 * //       Arn: "STRING_VALUE",
 * //       Status: "ACTIVE" || "DELETING",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListS3TableIntegrationsCommandInput - {@link ListS3TableIntegrationsCommandInput}
 * @returns {@link ListS3TableIntegrationsCommandOutput}
 * @see {@link ListS3TableIntegrationsCommandInput} for command's `input` shape.
 * @see {@link ListS3TableIntegrationsCommandOutput} for command's `response` shape.
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
export class ListS3TableIntegrationsCommand extends $Command
  .classBuilder<
    ListS3TableIntegrationsCommandInput,
    ListS3TableIntegrationsCommandOutput,
    ObservabilityAdminClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ObservabilityAdminClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ObservabilityAdmin", "ListS3TableIntegrations", {})
  .n("ObservabilityAdminClient", "ListS3TableIntegrationsCommand")
  .sc(ListS3TableIntegrations$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListS3TableIntegrationsInput;
      output: ListS3TableIntegrationsOutput;
    };
    sdk: {
      input: ListS3TableIntegrationsCommandInput;
      output: ListS3TableIntegrationsCommandOutput;
    };
  };
}
