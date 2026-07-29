// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribePipelineRequest, DescribePipelineResponse } from "../models/models_0";
import { DescribePipeline$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribePipelineCommand}.
 */
export interface DescribePipelineCommandInput extends DescribePipelineRequest {}
/**
 * @public
 *
 * The output of {@link DescribePipelineCommand}.
 */
export interface DescribePipelineCommandOutput extends DescribePipelineResponse, __MetadataBearer {}

/**
 * <p>Retrieves detailed information about a specific pipeline in a workspace.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, DescribePipelineCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, DescribePipelineCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * // import type { IoTSiteWiseClientConfig } from "@aws-sdk/client-iotsitewise";
 * const config = {}; // type is IoTSiteWiseClientConfig
 * const client = new IoTSiteWiseClient(config);
 * const input = { // DescribePipelineRequest
 *   workspaceName: "STRING_VALUE", // required
 *   pipelineName: "STRING_VALUE", // required
 *   pipelineVersion: "STRING_VALUE",
 * };
 * const command = new DescribePipelineCommand(input);
 * const response = await client.send(command);
 * // { // DescribePipelineResponse
 * //   pipelineName: "STRING_VALUE", // required
 * //   workspaceName: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   pipelineArn: "STRING_VALUE", // required
 * //   version: "STRING_VALUE", // required
 * //   environmentVariables: { // EnvironmentVariablesMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   computations: [ // ComputeNodeList // required
 * //     { // ComputeNode
 * //       computeNodeName: "STRING_VALUE", // required
 * //       taskName: "STRING_VALUE", // required
 * //       environmentVariables: {
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       dependsOn: [ // ComputeNodeNameList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   status: { // ResourceStatus
 * //     error: { // ResourceError
 * //       code: "VALIDATION_ERROR" || "INTERNAL_FAILURE",
 * //       message: "STRING_VALUE",
 * //     },
 * //     state: "CREATING" || "ACTIVE" || "UPDATING" || "DELETING" || "FAILED",
 * //   },
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param DescribePipelineCommandInput - {@link DescribePipelineCommandInput}
 * @returns {@link DescribePipelineCommandOutput}
 * @see {@link DescribePipelineCommandInput} for command's `input` shape.
 * @see {@link DescribePipelineCommandOutput} for command's `response` shape.
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
export class DescribePipelineCommand extends command<DescribePipelineCommandInput, DescribePipelineCommandOutput>(
  _ep0,
  _mw0,
  "DescribePipeline",
  DescribePipeline$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribePipelineRequest;
      output: DescribePipelineResponse;
    };
    sdk: {
      input: DescribePipelineCommandInput;
      output: DescribePipelineCommandOutput;
    };
  };
}
