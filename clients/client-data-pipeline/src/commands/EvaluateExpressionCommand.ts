// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { EvaluateExpressionInput, EvaluateExpressionOutput } from "../models/models_0";
import { EvaluateExpression$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link EvaluateExpressionCommand}.
 */
export interface EvaluateExpressionCommandInput extends EvaluateExpressionInput {}
/**
 * @public
 *
 * The output of {@link EvaluateExpressionCommand}.
 */
export interface EvaluateExpressionCommandOutput extends EvaluateExpressionOutput, __MetadataBearer {}

/**
 * Task runners call `EvaluateExpression` to evaluate a string in the context of the specified object. For example, a task runner can evaluate SQL queries stored in Amazon S3.
 *
 *
 *         <examples>
 *             <request>
 *
 * POST / HTTP/1.1
 * Content-Type: application/x-amz-json-1.1
 * X-Amz-Target: DataPipeline.DescribePipelines
 * Content-Length: 164
 * Host: datapipeline.us-east-1.amazonaws.com
 * X-Amz-Date: Mon, 12 Nov 2012 17:49:52 GMT
 * Authorization: AuthParams
 *
 * \{"pipelineId": "df-08785951KAKJEXAMPLE",
 *         "objectId": "Schedule",
 *         "expression": "Transform started at #\{startDateTime\} and finished at #\{endDateTime\}"\}
 *
 *             </request>
 *
 *
 *             <response>
 *
 * x-amzn-RequestId: 02870eb7-0736-11e2-af6f-6bc7a6be60d9
 * Content-Type: application/x-amz-json-1.1
 * Content-Length: 103
 * Date: Mon, 12 Nov 2012 17:50:53 GMT
 *
 * \{"evaluatedExpression": "Transform started at 2012-12-12T00:00:00 and finished at 2012-12-21T18:00:00"\}
 * </response>
 *         </examples>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataPipelineClient, EvaluateExpressionCommand } from "@aws-sdk/client-data-pipeline"; // ES Modules import
 * // const { DataPipelineClient, EvaluateExpressionCommand } = require("@aws-sdk/client-data-pipeline"); // CommonJS import
 * // import type { DataPipelineClientConfig } from "@aws-sdk/client-data-pipeline";
 * const config = {}; // type is DataPipelineClientConfig
 * const client = new DataPipelineClient(config);
 * const input = { // EvaluateExpressionInput
 *   pipelineId: "STRING_VALUE", // required
 *   objectId: "STRING_VALUE", // required
 *   expression: "STRING_VALUE", // required
 * };
 * const command = new EvaluateExpressionCommand(input);
 * const response = await client.send(command);
 * // { // EvaluateExpressionOutput
 * //   evaluatedExpression: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param EvaluateExpressionCommandInput - {@link EvaluateExpressionCommandInput}
 * @returns {@link EvaluateExpressionCommandOutput}
 * @see {@link EvaluateExpressionCommandInput} for command's `input` shape.
 * @see {@link EvaluateExpressionCommandOutput} for command's `response` shape.
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
 * @throws {@link TaskNotFoundException} (client fault)
 *
 * The specified task was not found.
 *
 * @throws {@link DataPipelineServiceException}
 *
 * Base exception class for all service exceptions from DataPipeline service.
 *
 * @public
 */
export class EvaluateExpressionCommand extends command<EvaluateExpressionCommandInput, EvaluateExpressionCommandOutput>(
  _ep0,
  _mw0,
  "EvaluateExpression",
  EvaluateExpression$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: EvaluateExpressionInput;
      output: EvaluateExpressionOutput;
    };
    sdk: {
      input: EvaluateExpressionCommandInput;
      output: EvaluateExpressionCommandOutput;
    };
  };
}
