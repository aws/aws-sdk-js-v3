// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StopNotebookExecutionInput } from "../models/models_0";
import { de_StopNotebookExecutionCommand, se_StopNotebookExecutionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * @public
 */
export class StopNotebookExecutionCommand extends $Command
  .classBuilder<
    StopNotebookExecutionCommandInput,
    StopNotebookExecutionCommandOutput,
    EMRClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: EMRClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ElasticMapReduce", "StopNotebookExecution", {})
  .n("EMRClient", "StopNotebookExecutionCommand")
  .f(void 0, void 0)
  .ser(se_StopNotebookExecutionCommand)
  .de(de_StopNotebookExecutionCommand)
  .build() {}
