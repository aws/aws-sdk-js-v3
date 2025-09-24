// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient";
import { SearchFlowExecutionsRequest, SearchFlowExecutionsResponse } from "../models/models_0";
import { SearchFlowExecutions } from "../schemas/schemas_1_Search";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SearchFlowExecutionsCommand}.
 */
export interface SearchFlowExecutionsCommandInput extends SearchFlowExecutionsRequest {}
/**
 * @public
 *
 * The output of {@link SearchFlowExecutionsCommand}.
 */
export interface SearchFlowExecutionsCommandOutput extends SearchFlowExecutionsResponse, __MetadataBearer {}

/**
 * <p>Searches for AWS IoT Things Graph workflow execution instances.</p>
 *
 * @deprecated since: 2022-08-30
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTThingsGraphClient, SearchFlowExecutionsCommand } from "@aws-sdk/client-iotthingsgraph"; // ES Modules import
 * // const { IoTThingsGraphClient, SearchFlowExecutionsCommand } = require("@aws-sdk/client-iotthingsgraph"); // CommonJS import
 * // import type { IoTThingsGraphClientConfig } from "@aws-sdk/client-iotthingsgraph";
 * const config = {}; // type is IoTThingsGraphClientConfig
 * const client = new IoTThingsGraphClient(config);
 * const input = { // SearchFlowExecutionsRequest
 *   systemInstanceId: "STRING_VALUE", // required
 *   flowExecutionId: "STRING_VALUE",
 *   startTime: new Date("TIMESTAMP"),
 *   endTime: new Date("TIMESTAMP"),
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new SearchFlowExecutionsCommand(input);
 * const response = await client.send(command);
 * // { // SearchFlowExecutionsResponse
 * //   summaries: [ // FlowExecutionSummaries
 * //     { // FlowExecutionSummary
 * //       flowExecutionId: "STRING_VALUE",
 * //       status: "RUNNING" || "ABORTED" || "SUCCEEDED" || "FAILED",
 * //       systemInstanceId: "STRING_VALUE",
 * //       flowTemplateId: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       updatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SearchFlowExecutionsCommandInput - {@link SearchFlowExecutionsCommandInput}
 * @returns {@link SearchFlowExecutionsCommandOutput}
 * @see {@link SearchFlowExecutionsCommandInput} for command's `input` shape.
 * @see {@link SearchFlowExecutionsCommandOutput} for command's `response` shape.
 * @see {@link IoTThingsGraphClientResolvedConfig | config} for IoTThingsGraphClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p></p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p></p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p></p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p></p>
 *
 * @throws {@link IoTThingsGraphServiceException}
 * <p>Base exception class for all service exceptions from IoTThingsGraph service.</p>
 *
 *
 * @public
 */
export class SearchFlowExecutionsCommand extends $Command
  .classBuilder<
    SearchFlowExecutionsCommandInput,
    SearchFlowExecutionsCommandOutput,
    IoTThingsGraphClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTThingsGraphClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("IotThingsGraphFrontEndService", "SearchFlowExecutions", {})
  .n("IoTThingsGraphClient", "SearchFlowExecutionsCommand")
  .sc(SearchFlowExecutions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchFlowExecutionsRequest;
      output: SearchFlowExecutionsResponse;
    };
    sdk: {
      input: SearchFlowExecutionsCommandInput;
      output: SearchFlowExecutionsCommandOutput;
    };
  };
}
