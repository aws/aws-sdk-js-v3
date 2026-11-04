// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartCalculationExecutionRequest, StartCalculationExecutionResponse } from "../models/models_0";
import { StartCalculationExecution$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartCalculationExecutionCommand}.
 */
export interface StartCalculationExecutionCommandInput extends StartCalculationExecutionRequest {}
/**
 * @public
 *
 * The output of {@link StartCalculationExecutionCommand}.
 */
export interface StartCalculationExecutionCommandOutput extends StartCalculationExecutionResponse, __MetadataBearer {}

/**
 * Submits calculations for execution within a session. You can supply the code to run as an inline code block within the request.
 *
 * > **Note:** The request syntax requires the StartCalculationExecutionRequest$CodeBlock parameter or the CalculationConfiguration$CodeBlock parameter, but not both. Because CalculationConfiguration$CodeBlock is deprecated, use the StartCalculationExecutionRequest$CodeBlock parameter instead.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, StartCalculationExecutionCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, StartCalculationExecutionCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * // import type { AthenaClientConfig } from "@aws-sdk/client-athena";
 * const config = {}; // type is AthenaClientConfig
 * const client = new AthenaClient(config);
 * const input = { // StartCalculationExecutionRequest
 *   SessionId: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   CalculationConfiguration: { // CalculationConfiguration
 *     CodeBlock: "STRING_VALUE",
 *   },
 *   CodeBlock: "STRING_VALUE",
 *   ClientRequestToken: "STRING_VALUE",
 * };
 * const command = new StartCalculationExecutionCommand(input);
 * const response = await client.send(command);
 * // { // StartCalculationExecutionResponse
 * //   CalculationExecutionId: "STRING_VALUE",
 * //   State: "CREATING" || "CREATED" || "QUEUED" || "RUNNING" || "CANCELING" || "CANCELED" || "COMPLETED" || "FAILED",
 * // };
 *
 * ```
 *
 * @param StartCalculationExecutionCommandInput - {@link StartCalculationExecutionCommandInput}
 * @returns {@link StartCalculationExecutionCommandOutput}
 * @see {@link StartCalculationExecutionCommandInput} for command's `input` shape.
 * @see {@link StartCalculationExecutionCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for AthenaClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Indicates a platform issue, which may be due to a transient condition or outage.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * Indicates that something is wrong with the input to the request. For example, a required parameter may be missing or out of range.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * A resource, such as a workgroup, was not found.
 *
 * @throws {@link AthenaServiceException}
 *
 * Base exception class for all service exceptions from Athena service.
 *
 * @public
 */
export class StartCalculationExecutionCommand extends command<StartCalculationExecutionCommandInput, StartCalculationExecutionCommandOutput>(
  _ep0,
  _mw0,
  "StartCalculationExecution",
  StartCalculationExecution$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartCalculationExecutionRequest;
      output: StartCalculationExecutionResponse;
    };
    sdk: {
      input: StartCalculationExecutionCommandInput;
      output: StartCalculationExecutionCommandOutput;
    };
  };
}
