// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataPipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataPipelineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { SetStatusInput } from "../models/models_0";
import { SetStatus } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SetStatusCommand}.
 */
export interface SetStatusCommandInput extends SetStatusInput {}
/**
 * @public
 *
 * The output of {@link SetStatusCommand}.
 */
export interface SetStatusCommandOutput extends __MetadataBearer {}

/**
 * <p>Requests that the status of the specified physical or logical pipeline objects be updated in the specified pipeline.
 *             This update might not occur immediately, but is eventually consistent. The status that can be set depends on the type of object (for example, DataNode or Activity).
 *             You cannot perform this operation on <code>FINISHED</code> pipelines and attempting to do so returns <code>InvalidRequestException</code>.</p>
 *
 *         <examples>
 *             <request>
 *
 * POST / HTTP/1.1
 * Content-Type: application/x-amz-json-1.1
 * X-Amz-Target: DataPipeline.SetStatus
 * Content-Length: 100
 * Host: datapipeline.us-east-1.amazonaws.com
 * X-Amz-Date: Mon, 12 Nov 2012 17:49:52 GMT
 * Authorization: AuthParams
 *
 * \{"pipelineId": "df-0634701J7KEXAMPLE",
 *  "objectIds":
 *   ["o-08600941GHJWMBR9E2"],
 *  "status": "pause"\}
 *
 *             </request>
 *
 *             <response>
 *
 * x-amzn-RequestId: e83b8ab7-076a-11e2-af6f-6bc7a6be60d9
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
 * import { DataPipelineClient, SetStatusCommand } from "@aws-sdk/client-data-pipeline"; // ES Modules import
 * // const { DataPipelineClient, SetStatusCommand } = require("@aws-sdk/client-data-pipeline"); // CommonJS import
 * // import type { DataPipelineClientConfig } from "@aws-sdk/client-data-pipeline";
 * const config = {}; // type is DataPipelineClientConfig
 * const client = new DataPipelineClient(config);
 * const input = { // SetStatusInput
 *   pipelineId: "STRING_VALUE", // required
 *   objectIds: [ // idList // required
 *     "STRING_VALUE",
 *   ],
 *   status: "STRING_VALUE", // required
 * };
 * const command = new SetStatusCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SetStatusCommandInput - {@link SetStatusCommandInput}
 * @returns {@link SetStatusCommandOutput}
 * @see {@link SetStatusCommandInput} for command's `input` shape.
 * @see {@link SetStatusCommandOutput} for command's `response` shape.
 * @see {@link DataPipelineClientResolvedConfig | config} for DataPipelineClient's `config` shape.
 *
 * @throws {@link InternalServiceError} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request was not valid. Verify that your request was properly formatted, that the signature was generated with the correct credentials, and that you haven't exceeded any of the service limits for your account.</p>
 *
 * @throws {@link PipelineDeletedException} (client fault)
 *  <p>The specified pipeline has been deleted.</p>
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
export class SetStatusCommand extends $Command
  .classBuilder<
    SetStatusCommandInput,
    SetStatusCommandOutput,
    DataPipelineClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataPipelineClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DataPipeline", "SetStatus", {})
  .n("DataPipelineClient", "SetStatusCommand")
  .sc(SetStatus)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SetStatusInput;
      output: {};
    };
    sdk: {
      input: SetStatusCommandInput;
      output: SetStatusCommandOutput;
    };
  };
}
