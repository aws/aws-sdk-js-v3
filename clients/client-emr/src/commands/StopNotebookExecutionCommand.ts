// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StopNotebookExecutionInput } from "../models/models_0";
import { StopNotebookExecution$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StopNotebookExecutionCommand}.
 */
export interface StopNotebookExecutionCommandInput extends StopNotebookExecutionInput {}
/**
 * @public
 *
 * The output of {@link StopNotebookExecutionCommand}.
 */
export interface StopNotebookExecutionCommandOutput extends __MetadataBearer {}

/**
 * <p>Stops a notebook execution.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, StopNotebookExecutionCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, StopNotebookExecutionCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * // import type { EMRClientConfig } from "@aws-sdk/client-emr";
 * const config = {}; // type is EMRClientConfig
 * const client = new EMRClient(config);
 * const input = { // StopNotebookExecutionInput
 *   NotebookExecutionId: "STRING_VALUE", // required
 * };
 * const command = new StopNotebookExecutionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopNotebookExecutionCommandInput - {@link StopNotebookExecutionCommandInput}
 * @returns {@link StopNotebookExecutionCommandOutput}
 * @see {@link StopNotebookExecutionCommandInput} for command's `input` shape.
 * @see {@link StopNotebookExecutionCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for EMRClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Indicates that an error occurred while processing the request and that the request was
 *          not completed.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception occurs when there is something wrong with user input.</p>
 *
 * @throws {@link EMRServiceException}
 * <p>Base exception class for all service exceptions from EMR service.</p>
 *
 *
 * @public
 */
export class StopNotebookExecutionCommand extends command<StopNotebookExecutionCommandInput, StopNotebookExecutionCommandOutput>(
  _ep0,
  _mw0,
  "StopNotebookExecution",
  StopNotebookExecution$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopNotebookExecutionInput;
      output: {};
    };
    sdk: {
      input: StopNotebookExecutionCommandInput;
      output: StopNotebookExecutionCommandOutput;
    };
  };
}
