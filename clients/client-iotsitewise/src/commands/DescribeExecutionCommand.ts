// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import { DescribeExecutionRequest, DescribeExecutionResponse } from "../models/models_0";
import { DescribeExecution } from "../schemas/schemas_4_Describe";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeExecutionCommand}.
 */
export interface DescribeExecutionCommandInput extends DescribeExecutionRequest {}
/**
 * @public
 *
 * The output of {@link DescribeExecutionCommand}.
 */
export interface DescribeExecutionCommandOutput extends DescribeExecutionResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about the execution.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, DescribeExecutionCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, DescribeExecutionCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * // import type { IoTSiteWiseClientConfig } from "@aws-sdk/client-iotsitewise";
 * const config = {}; // type is IoTSiteWiseClientConfig
 * const client = new IoTSiteWiseClient(config);
 * const input = { // DescribeExecutionRequest
 *   executionId: "STRING_VALUE", // required
 * };
 * const command = new DescribeExecutionCommand(input);
 * const response = await client.send(command);
 * // { // DescribeExecutionResponse
 * //   executionId: "STRING_VALUE", // required
 * //   actionType: "STRING_VALUE",
 * //   targetResource: { // TargetResource
 * //     assetId: "STRING_VALUE",
 * //     computationModelId: "STRING_VALUE",
 * //   },
 * //   targetResourceVersion: "STRING_VALUE", // required
 * //   resolveTo: { // ResolveTo
 * //     assetId: "STRING_VALUE", // required
 * //   },
 * //   executionStartTime: new Date("TIMESTAMP"), // required
 * //   executionEndTime: new Date("TIMESTAMP"),
 * //   executionStatus: { // ExecutionStatus
 * //     state: "RUNNING" || "COMPLETED" || "FAILED", // required
 * //   },
 * //   executionResult: { // ExecutionResult
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   executionDetails: { // ExecutionDetails
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   executionEntityVersion: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeExecutionCommandInput - {@link DescribeExecutionCommandInput}
 * @returns {@link DescribeExecutionCommandOutput}
 * @see {@link DescribeExecutionCommandInput} for command's `input` shape.
 * @see {@link DescribeExecutionCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for IoTSiteWiseClient's `config` shape.
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
export class DescribeExecutionCommand extends $Command
  .classBuilder<
    DescribeExecutionCommandInput,
    DescribeExecutionCommandOutput,
    IoTSiteWiseClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTSiteWiseClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIoTSiteWise", "DescribeExecution", {})
  .n("IoTSiteWiseClient", "DescribeExecutionCommand")
  .sc(DescribeExecution)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeExecutionRequest;
      output: DescribeExecutionResponse;
    };
    sdk: {
      input: DescribeExecutionCommandInput;
      output: DescribeExecutionCommandOutput;
    };
  };
}
