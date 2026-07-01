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
 * <p>Submits calculations for execution within a session. You can supply the code to run as
 *             an inline code block within the request.</p>
 *          <note>
 *             <p>The request syntax requires the <a>StartCalculationExecutionRequest$CodeBlock</a> parameter or the <a>CalculationConfiguration$CodeBlock</a> parameter, but not both. Because
 *                     <a>CalculationConfiguration$CodeBlock</a> is deprecated, use the
 *                     <a>StartCalculationExecutionRequest$CodeBlock</a> parameter
 *                 instead.</p>
 *          </note>
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
 *  <p>Indicates a platform issue, which may be due to a transient condition or
 *             outage.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Indicates that something is wrong with the input to the request. For example, a
 *             required parameter may be missing or out of range.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource, such as a workgroup, was not found.</p>
 *
 * @throws {@link AthenaServiceException}
 * <p>Base exception class for all service exceptions from Athena service.</p>
 *
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
