// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListPipelinesRequest, ListPipelinesResponse } from "../models/models_1";
import { ListPipelines$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListPipelinesCommand}.
 */
export interface ListPipelinesCommandInput extends ListPipelinesRequest {}
/**
 * @public
 *
 * The output of {@link ListPipelinesCommand}.
 */
export interface ListPipelinesCommandOutput extends ListPipelinesResponse, __MetadataBearer {}

/**
 * <p>Lists pipelines in a workspace. To get complete details about a pipeline, use <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribePipeline.html">DescribePipeline</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, ListPipelinesCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, ListPipelinesCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * // import type { IoTSiteWiseClientConfig } from "@aws-sdk/client-iotsitewise";
 * const config = {}; // type is IoTSiteWiseClientConfig
 * const client = new IoTSiteWiseClient(config);
 * const input = { // ListPipelinesRequest
 *   workspaceName: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListPipelinesCommand(input);
 * const response = await client.send(command);
 * // { // ListPipelinesResponse
 * //   pipelineSummaries: [ // PipelineSummaries // required
 * //     { // PipelineSummary
 * //       pipelineName: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       pipelineArn: "STRING_VALUE", // required
 * //       version: "STRING_VALUE", // required
 * //       status: { // ResourceStatus
 * //         error: { // ResourceError
 * //           code: "VALIDATION_ERROR" || "INTERNAL_FAILURE",
 * //           message: "STRING_VALUE",
 * //         },
 * //         state: "CREATING" || "ACTIVE" || "UPDATING" || "DELETING" || "FAILED",
 * //       },
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPipelinesCommandInput - {@link ListPipelinesCommandInput}
 * @returns {@link ListPipelinesCommandOutput}
 * @see {@link ListPipelinesCommandInput} for command's `input` shape.
 * @see {@link ListPipelinesCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for IoTSiteWiseClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access is denied.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>IoT SiteWise can't process your request right now. Try again later.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or
 *       unsupported characters. Check your request and try again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request exceeded a rate limit. For example, you might have exceeded the number of
 *       IoT SiteWise assets that can be created per second, the allowed number of messages per second, and so
 *       on.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p>
 *
 * @throws {@link IoTSiteWiseServiceException}
 * <p>Base exception class for all service exceptions from IoTSiteWise service.</p>
 *
 *
 * @public
 */
export class ListPipelinesCommand extends command<ListPipelinesCommandInput, ListPipelinesCommandOutput>(
  _ep0,
  _mw0,
  "ListPipelines",
  ListPipelines$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPipelinesRequest;
      output: ListPipelinesResponse;
    };
    sdk: {
      input: ListPipelinesCommandInput;
      output: ListPipelinesCommandOutput;
    };
  };
}
