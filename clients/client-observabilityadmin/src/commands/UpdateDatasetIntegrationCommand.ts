// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateDatasetIntegrationInput, UpdateDatasetIntegrationOutput } from "../models/models_0";
import { UpdateDatasetIntegration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateDatasetIntegrationCommand}.
 */
export interface UpdateDatasetIntegrationCommandInput extends UpdateDatasetIntegrationInput {}
/**
 * @public
 *
 * The output of {@link UpdateDatasetIntegrationCommand}.
 */
export interface UpdateDatasetIntegrationCommandOutput extends UpdateDatasetIntegrationOutput, __MetadataBearer {}

/**
 * <p>Updates a dataset integration for the caller's account in the current region. This operation is idempotent; if you submit the same update more than once, each call succeeds.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ObservabilityAdminClient, UpdateDatasetIntegrationCommand } from "@aws-sdk/client-observabilityadmin"; // ES Modules import
 * // const { ObservabilityAdminClient, UpdateDatasetIntegrationCommand } = require("@aws-sdk/client-observabilityadmin"); // CommonJS import
 * // import type { ObservabilityAdminClientConfig } from "@aws-sdk/client-observabilityadmin";
 * const config = {}; // type is ObservabilityAdminClientConfig
 * const client = new ObservabilityAdminClient(config);
 * const input = { // UpdateDatasetIntegrationInput
 *   Arn: "STRING_VALUE", // required
 *   RoleArn: "STRING_VALUE", // required
 * };
 * const command = new UpdateDatasetIntegrationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateDatasetIntegrationOutput
 * //   Arn: "STRING_VALUE", // required
 * //   RoleArn: "STRING_VALUE", // required
 * //   CreatedAt: new Date("TIMESTAMP"), // required
 * //   UpdatedAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param UpdateDatasetIntegrationCommandInput - {@link UpdateDatasetIntegrationCommandInput}
 * @returns {@link UpdateDatasetIntegrationCommandOutput}
 * @see {@link UpdateDatasetIntegrationCommandInput} for command's `input` shape.
 * @see {@link UpdateDatasetIntegrationCommandOutput} for command's `response` shape.
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
export class UpdateDatasetIntegrationCommand extends command<UpdateDatasetIntegrationCommandInput, UpdateDatasetIntegrationCommandOutput>(
  _ep0,
  _mw0,
  "UpdateDatasetIntegration",
  UpdateDatasetIntegration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDatasetIntegrationInput;
      output: UpdateDatasetIntegrationOutput;
    };
    sdk: {
      input: UpdateDatasetIntegrationCommandInput;
      output: UpdateDatasetIntegrationCommandOutput;
    };
  };
}
