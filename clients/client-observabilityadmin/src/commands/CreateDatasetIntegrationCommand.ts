// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateDatasetIntegrationInput, CreateDatasetIntegrationOutput } from "../models/models_0";
import { CreateDatasetIntegration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateDatasetIntegrationCommand}.
 */
export interface CreateDatasetIntegrationCommandInput extends CreateDatasetIntegrationInput {}
/**
 * @public
 *
 * The output of {@link CreateDatasetIntegrationCommand}.
 */
export interface CreateDatasetIntegrationCommandOutput extends CreateDatasetIntegrationOutput, __MetadataBearer {}

/**
 * <p>Creates a dataset integration for the caller's account in the current region and returns its ARN.</p> <p>To use this operation, you must have permission to access the dataset integration resources through the IAM role specified in the <code>RoleArn</code> parameter.</p> <p>If a dataset integration already exists for the account, this operation fails with a <code>ConflictException</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ObservabilityAdminClient, CreateDatasetIntegrationCommand } from "@aws-sdk/client-observabilityadmin"; // ES Modules import
 * // const { ObservabilityAdminClient, CreateDatasetIntegrationCommand } = require("@aws-sdk/client-observabilityadmin"); // CommonJS import
 * // import type { ObservabilityAdminClientConfig } from "@aws-sdk/client-observabilityadmin";
 * const config = {}; // type is ObservabilityAdminClientConfig
 * const client = new ObservabilityAdminClient(config);
 * const input = { // CreateDatasetIntegrationInput
 *   RoleArn: "STRING_VALUE", // required
 *   Tags: { // TagMapInput
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateDatasetIntegrationCommand(input);
 * const response = await client.send(command);
 * // { // CreateDatasetIntegrationOutput
 * //   Arn: "STRING_VALUE", // required
 * //   RoleArn: "STRING_VALUE", // required
 * //   CreatedAt: new Date("TIMESTAMP"), // required
 * //   UpdatedAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param CreateDatasetIntegrationCommandInput - {@link CreateDatasetIntegrationCommandInput}
 * @returns {@link CreateDatasetIntegrationCommandOutput}
 * @see {@link CreateDatasetIntegrationCommandInput} for command's `input` shape.
 * @see {@link CreateDatasetIntegrationCommandOutput} for command's `response` shape.
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
export class CreateDatasetIntegrationCommand extends command<CreateDatasetIntegrationCommandInput, CreateDatasetIntegrationCommandOutput>(
  _ep0,
  _mw0,
  "CreateDatasetIntegration",
  CreateDatasetIntegration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDatasetIntegrationInput;
      output: CreateDatasetIntegrationOutput;
    };
    sdk: {
      input: CreateDatasetIntegrationCommandInput;
      output: CreateDatasetIntegrationCommandOutput;
    };
  };
}
