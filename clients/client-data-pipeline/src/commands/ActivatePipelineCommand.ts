// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ActivatePipelineInput, ActivatePipelineOutput } from "../models/models_0";
import { ActivatePipeline$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ActivatePipelineCommand}.
 */
export interface ActivatePipelineCommandInput extends ActivatePipelineInput {}
/**
 * @public
 *
 * The output of {@link ActivatePipelineCommand}.
 */
export interface ActivatePipelineCommandOutput extends ActivatePipelineOutput, __MetadataBearer {}

/**
 * Validates the specified pipeline and starts processing pipeline tasks. If the pipeline does not pass validation, activation fails.
 *
 * If you need to pause the pipeline to investigate an issue with a component, such as a data source or script, call DeactivatePipeline.
 *
 * To activate a finished pipeline, modify the end date for the pipeline and then activate it.
 *
 *         <examples>
 *             <request>
 *
 * POST / HTTP/1.1
 * Content-Type: application/x-amz-json-1.1
 * X-Amz-Target: DataPipeline.ActivatePipeline
 * Content-Length: 39
 * Host: datapipeline.us-east-1.amazonaws.com
 * X-Amz-Date: Mon, 12 Nov 2012 17:49:52 GMT
 * Authorization: AuthParams
 *
 * \{"pipelineId": "df-06372391ZG65EXAMPLE"\}
 *
 *             </request>
 *             <response>
 *
 * HTTP/1.1 200
 * x-amzn-RequestId: ee19d5bf-074e-11e2-af6f-6bc7a6be60d9
 * Content-Type: application/x-amz-json-1.1
 * Content-Length: 2
 * Date: Mon, 12 Nov 2012 17:50:53 GMT
 *
 * \{\}
 *
 *             </response>
 *         </examples>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataPipelineClient, ActivatePipelineCommand } from "@aws-sdk/client-data-pipeline"; // ES Modules import
 * // const { DataPipelineClient, ActivatePipelineCommand } = require("@aws-sdk/client-data-pipeline"); // CommonJS import
 * // import type { DataPipelineClientConfig } from "@aws-sdk/client-data-pipeline";
 * const config = {}; // type is DataPipelineClientConfig
 * const client = new DataPipelineClient(config);
 * const input = { // ActivatePipelineInput
 *   pipelineId: "STRING_VALUE", // required
 *   parameterValues: [ // ParameterValueList
 *     { // ParameterValue
 *       id: "STRING_VALUE", // required
 *       stringValue: "STRING_VALUE", // required
 *     },
 *   ],
 *   startTimestamp: new Date("TIMESTAMP"),
 * };
 * const command = new ActivatePipelineCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ActivatePipelineCommandInput - {@link ActivatePipelineCommandInput}
 * @returns {@link ActivatePipelineCommandOutput}
 * @see {@link ActivatePipelineCommandInput} for command's `input` shape.
 * @see {@link ActivatePipelineCommandOutput} for command's `response` shape.
 * @see {@link DataPipelineClientResolvedConfig | config} for DataPipelineClient's `config` shape.
 *
 * @throws {@link InternalServiceError} (server fault)
 *
 * An internal service error occurred.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request was not valid. Verify that your request was properly formatted, that the signature was generated with the correct credentials, and that you haven't exceeded any of the service limits for your account.
 *
 * @throws {@link PipelineDeletedException} (client fault)
 *
 * The specified pipeline has been deleted.
 *
 * @throws {@link PipelineNotFoundException} (client fault)
 *
 * The specified pipeline was not found. Verify that you used the correct user and account identifiers.
 *
 * @throws {@link DataPipelineServiceException}
 *
 * Base exception class for all service exceptions from DataPipeline service.
 *
 * @public
 */
export class ActivatePipelineCommand extends command<ActivatePipelineCommandInput, ActivatePipelineCommandOutput>(
  _ep0,
  _mw0,
  "ActivatePipeline",
  ActivatePipeline$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ActivatePipelineInput;
      output: {};
    };
    sdk: {
      input: ActivatePipelineCommandInput;
      output: ActivatePipelineCommandOutput;
    };
  };
}
