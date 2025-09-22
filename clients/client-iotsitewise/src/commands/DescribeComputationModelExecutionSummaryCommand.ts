// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import {
  DescribeComputationModelExecutionSummaryRequest,
  DescribeComputationModelExecutionSummaryResponse,
} from "../models/models_0";
import { DescribeComputationModelExecutionSummary } from "../schemas/schemas_17_Describe";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeComputationModelExecutionSummaryCommand}.
 */
export interface DescribeComputationModelExecutionSummaryCommandInput
  extends DescribeComputationModelExecutionSummaryRequest {}
/**
 * @public
 *
 * The output of {@link DescribeComputationModelExecutionSummaryCommand}.
 */
export interface DescribeComputationModelExecutionSummaryCommandOutput
  extends DescribeComputationModelExecutionSummaryResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves information about the execution summary of a computation model.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, DescribeComputationModelExecutionSummaryCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, DescribeComputationModelExecutionSummaryCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * // import type { IoTSiteWiseClientConfig } from "@aws-sdk/client-iotsitewise";
 * const config = {}; // type is IoTSiteWiseClientConfig
 * const client = new IoTSiteWiseClient(config);
 * const input = { // DescribeComputationModelExecutionSummaryRequest
 *   computationModelId: "STRING_VALUE", // required
 *   resolveToResourceType: "ASSET",
 *   resolveToResourceId: "STRING_VALUE",
 * };
 * const command = new DescribeComputationModelExecutionSummaryCommand(input);
 * const response = await client.send(command);
 * // { // DescribeComputationModelExecutionSummaryResponse
 * //   computationModelId: "STRING_VALUE", // required
 * //   resolveTo: { // ResolveTo
 * //     assetId: "STRING_VALUE", // required
 * //   },
 * //   computationModelExecutionSummary: { // ComputationModelExecutionSummary // required
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeComputationModelExecutionSummaryCommandInput - {@link DescribeComputationModelExecutionSummaryCommandInput}
 * @returns {@link DescribeComputationModelExecutionSummaryCommandOutput}
 * @see {@link DescribeComputationModelExecutionSummaryCommandInput} for command's `input` shape.
 * @see {@link DescribeComputationModelExecutionSummaryCommandOutput} for command's `response` shape.
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
export class DescribeComputationModelExecutionSummaryCommand extends $Command
  .classBuilder<
    DescribeComputationModelExecutionSummaryCommandInput,
    DescribeComputationModelExecutionSummaryCommandOutput,
    IoTSiteWiseClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTSiteWiseClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIoTSiteWise", "DescribeComputationModelExecutionSummary", {})
  .n("IoTSiteWiseClient", "DescribeComputationModelExecutionSummaryCommand")
  .sc(DescribeComputationModelExecutionSummary)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeComputationModelExecutionSummaryRequest;
      output: DescribeComputationModelExecutionSummaryResponse;
    };
    sdk: {
      input: DescribeComputationModelExecutionSummaryCommandInput;
      output: DescribeComputationModelExecutionSummaryCommandOutput;
    };
  };
}
