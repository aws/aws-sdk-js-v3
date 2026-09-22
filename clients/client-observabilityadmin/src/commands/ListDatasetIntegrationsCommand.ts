// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListDatasetIntegrationsInput, ListDatasetIntegrationsOutput } from "../models/models_0";
import { ListDatasetIntegrations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListDatasetIntegrationsCommand}.
 */
export interface ListDatasetIntegrationsCommandInput extends ListDatasetIntegrationsInput {}
/**
 * @public
 *
 * The output of {@link ListDatasetIntegrationsCommand}.
 */
export interface ListDatasetIntegrationsCommandOutput extends ListDatasetIntegrationsOutput, __MetadataBearer {}

/**
 * <p>Returns the dataset integrations in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ObservabilityAdminClient, ListDatasetIntegrationsCommand } from "@aws-sdk/client-observabilityadmin"; // ES Modules import
 * // const { ObservabilityAdminClient, ListDatasetIntegrationsCommand } = require("@aws-sdk/client-observabilityadmin"); // CommonJS import
 * // import type { ObservabilityAdminClientConfig } from "@aws-sdk/client-observabilityadmin";
 * const config = {}; // type is ObservabilityAdminClientConfig
 * const client = new ObservabilityAdminClient(config);
 * const input = { // ListDatasetIntegrationsInput
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListDatasetIntegrationsCommand(input);
 * const response = await client.send(command);
 * // { // ListDatasetIntegrationsOutput
 * //   DatasetIntegrationSummaries: [ // DatasetIntegrationSummaries // required
 * //     { // DatasetIntegrationSummary
 * //       Arn: "STRING_VALUE", // required
 * //       RoleArn: "STRING_VALUE",
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       UpdatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDatasetIntegrationsCommandInput - {@link ListDatasetIntegrationsCommandInput}
 * @returns {@link ListDatasetIntegrationsCommandOutput}
 * @see {@link ListDatasetIntegrationsCommandInput} for command's `input` shape.
 * @see {@link ListDatasetIntegrationsCommandOutput} for command's `response` shape.
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
export class ListDatasetIntegrationsCommand extends command<ListDatasetIntegrationsCommandInput, ListDatasetIntegrationsCommandOutput>(
  _ep0,
  _mw0,
  "ListDatasetIntegrations",
  ListDatasetIntegrations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDatasetIntegrationsInput;
      output: ListDatasetIntegrationsOutput;
    };
    sdk: {
      input: ListDatasetIntegrationsCommandInput;
      output: ListDatasetIntegrationsCommandOutput;
    };
  };
}
