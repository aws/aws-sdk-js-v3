// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import type { ListExecutionsRequest, ListExecutionsResponse } from "../models/models_0";
import { ListExecutions } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListExecutionsCommand}.
 */
export interface ListExecutionsCommandInput extends ListExecutionsRequest {}
/**
 * @public
 *
 * The output of {@link ListExecutionsCommand}.
 */
export interface ListExecutionsCommandOutput extends ListExecutionsResponse, __MetadataBearer {}

/**
 * <p>Retrieves a paginated list of summaries of all executions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, ListExecutionsCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, ListExecutionsCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * // import type { IoTSiteWiseClientConfig } from "@aws-sdk/client-iotsitewise";
 * const config = {}; // type is IoTSiteWiseClientConfig
 * const client = new IoTSiteWiseClient(config);
 * const input = { // ListExecutionsRequest
 *   targetResourceType: "ASSET" || "COMPUTATION_MODEL", // required
 *   targetResourceId: "STRING_VALUE", // required
 *   resolveToResourceType: "ASSET",
 *   resolveToResourceId: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   actionType: "STRING_VALUE",
 * };
 * const command = new ListExecutionsCommand(input);
 * const response = await client.send(command);
 * // { // ListExecutionsResponse
 * //   executionSummaries: [ // ExecutionSummaries // required
 * //     { // ExecutionSummary
 * //       executionId: "STRING_VALUE", // required
 * //       actionType: "STRING_VALUE",
 * //       targetResource: { // TargetResource
 * //         assetId: "STRING_VALUE",
 * //         computationModelId: "STRING_VALUE",
 * //       },
 * //       targetResourceVersion: "STRING_VALUE", // required
 * //       resolveTo: { // ResolveTo
 * //         assetId: "STRING_VALUE", // required
 * //       },
 * //       executionStartTime: new Date("TIMESTAMP"), // required
 * //       executionEndTime: new Date("TIMESTAMP"),
 * //       executionStatus: { // ExecutionStatus
 * //         state: "RUNNING" || "COMPLETED" || "FAILED", // required
 * //       },
 * //       executionEntityVersion: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListExecutionsCommandInput - {@link ListExecutionsCommandInput}
 * @returns {@link ListExecutionsCommandOutput}
 * @see {@link ListExecutionsCommandInput} for command's `input` shape.
 * @see {@link ListExecutionsCommandOutput} for command's `response` shape.
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
export class ListExecutionsCommand extends $Command
  .classBuilder<
    ListExecutionsCommandInput,
    ListExecutionsCommandOutput,
    IoTSiteWiseClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTSiteWiseClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIoTSiteWise", "ListExecutions", {})
  .n("IoTSiteWiseClient", "ListExecutionsCommand")
  .sc(ListExecutions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListExecutionsRequest;
      output: ListExecutionsResponse;
    };
    sdk: {
      input: ListExecutionsCommandInput;
      output: ListExecutionsCommandOutput;
    };
  };
}
