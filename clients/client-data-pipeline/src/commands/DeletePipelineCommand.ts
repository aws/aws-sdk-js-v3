// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DataPipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataPipelineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeletePipelineInput } from "../models/models_0";
import { DeletePipeline } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeletePipelineCommand}.
 */
export interface DeletePipelineCommandInput extends DeletePipelineInput {}
/**
 * @public
 *
 * The output of {@link DeletePipelineCommand}.
 */
export interface DeletePipelineCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a pipeline, its pipeline definition, and its run history.
 *            AWS Data Pipeline attempts to cancel instances associated with the pipeline that are currently being processed by task runners.</p>
 *         <p>Deleting a pipeline cannot be undone. You cannot query or restore a deleted pipeline.
 *             To temporarily pause a pipeline instead of deleting it, call <a>SetStatus</a> with the status set to <code>PAUSE</code> on individual components.
 *             Components that are paused by <a>SetStatus</a> can be resumed.</p>
 *
 *         <examples>
 *             <request>
 *
 * POST / HTTP/1.1
 * Content-Type: application/x-amz-json-1.1
 * X-Amz-Target: DataPipeline.DeletePipeline
 * Content-Length: 50
 * Host: datapipeline.us-east-1.amazonaws.com
 * X-Amz-Date: Mon, 12 Nov 2012 17:49:52 GMT
 * Authorization: AuthParams
 *
 * \{"pipelineId": "df-06372391ZG65EXAMPLE"\}
 *
 *             </request>
 *
 *             <response>
 *
 * x-amzn-RequestId: b7a88c81-0754-11e2-af6f-6bc7a6be60d9
 * Content-Type: application/x-amz-json-1.1
 * Content-Length: 0
 * Date: Mon, 12 Nov 2012 17:50:53 GMT
 *
 * Unexpected response: 200, OK, undefined
 *
 *             </response>
 *         </examples>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataPipelineClient, DeletePipelineCommand } from "@aws-sdk/client-data-pipeline"; // ES Modules import
 * // const { DataPipelineClient, DeletePipelineCommand } = require("@aws-sdk/client-data-pipeline"); // CommonJS import
 * // import type { DataPipelineClientConfig } from "@aws-sdk/client-data-pipeline";
 * const config = {}; // type is DataPipelineClientConfig
 * const client = new DataPipelineClient(config);
 * const input = { // DeletePipelineInput
 *   pipelineId: "STRING_VALUE", // required
 * };
 * const command = new DeletePipelineCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeletePipelineCommandInput - {@link DeletePipelineCommandInput}
 * @returns {@link DeletePipelineCommandOutput}
 * @see {@link DeletePipelineCommandInput} for command's `input` shape.
 * @see {@link DeletePipelineCommandOutput} for command's `response` shape.
 * @see {@link DataPipelineClientResolvedConfig | config} for DataPipelineClient's `config` shape.
 *
 * @throws {@link InternalServiceError} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request was not valid. Verify that your request was properly formatted, that the signature was generated with the correct credentials, and that you haven't exceeded any of the service limits for your account.</p>
 *
 * @throws {@link PipelineNotFoundException} (client fault)
 *  <p>The specified pipeline was not found. Verify that you used the correct user and account identifiers.</p>
 *
 * @throws {@link DataPipelineServiceException}
 * <p>Base exception class for all service exceptions from DataPipeline service.</p>
 *
 *
 * @public
 */
export class DeletePipelineCommand extends $Command
  .classBuilder<
    DeletePipelineCommandInput,
    DeletePipelineCommandOutput,
    DataPipelineClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataPipelineClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DataPipeline", "DeletePipeline", {})
  .n("DataPipelineClient", "DeletePipelineCommand")
  .sc(DeletePipeline)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeletePipelineInput;
      output: {};
    };
    sdk: {
      input: DeletePipelineCommandInput;
      output: DeletePipelineCommandOutput;
    };
  };
}
