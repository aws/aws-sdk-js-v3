// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetDatasetIntegrationInput, GetDatasetIntegrationOutput } from "../models/models_0";
import { GetDatasetIntegration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetDatasetIntegrationCommand}.
 */
export interface GetDatasetIntegrationCommandInput extends GetDatasetIntegrationInput {}
/**
 * @public
 *
 * The output of {@link GetDatasetIntegrationCommand}.
 */
export interface GetDatasetIntegrationCommandOutput extends GetDatasetIntegrationOutput, __MetadataBearer {}

/**
 * <p>Returns the dataset integration for the caller's account in the current region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ObservabilityAdminClient, GetDatasetIntegrationCommand } from "@aws-sdk/client-observabilityadmin"; // ES Modules import
 * // const { ObservabilityAdminClient, GetDatasetIntegrationCommand } = require("@aws-sdk/client-observabilityadmin"); // CommonJS import
 * // import type { ObservabilityAdminClientConfig } from "@aws-sdk/client-observabilityadmin";
 * const config = {}; // type is ObservabilityAdminClientConfig
 * const client = new ObservabilityAdminClient(config);
 * const input = { // GetDatasetIntegrationInput
 *   Arn: "STRING_VALUE", // required
 * };
 * const command = new GetDatasetIntegrationCommand(input);
 * const response = await client.send(command);
 * // { // GetDatasetIntegrationOutput
 * //   Arn: "STRING_VALUE",
 * //   RoleArn: "STRING_VALUE",
 * //   CreatedAt: new Date("TIMESTAMP"),
 * //   UpdatedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetDatasetIntegrationCommandInput - {@link GetDatasetIntegrationCommandInput}
 * @returns {@link GetDatasetIntegrationCommandOutput}
 * @see {@link GetDatasetIntegrationCommandInput} for command's `input` shape.
 * @see {@link GetDatasetIntegrationCommandOutput} for command's `response` shape.
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
export class GetDatasetIntegrationCommand extends command<GetDatasetIntegrationCommandInput, GetDatasetIntegrationCommandOutput>(
  _ep0,
  _mw0,
  "GetDatasetIntegration",
  GetDatasetIntegration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDatasetIntegrationInput;
      output: GetDatasetIntegrationOutput;
    };
    sdk: {
      input: GetDatasetIntegrationCommandInput;
      output: GetDatasetIntegrationCommandOutput;
    };
  };
}
