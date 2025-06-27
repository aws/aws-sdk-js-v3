// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient";
import { SearchFlowTemplatesRequest, SearchFlowTemplatesResponse } from "../models/models_0";
import { de_SearchFlowTemplatesCommand, se_SearchFlowTemplatesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SearchFlowTemplatesCommand}.
 */
export interface SearchFlowTemplatesCommandInput extends SearchFlowTemplatesRequest {}
/**
 * @public
 *
 * The output of {@link SearchFlowTemplatesCommand}.
 */
export interface SearchFlowTemplatesCommandOutput extends SearchFlowTemplatesResponse, __MetadataBearer {}

/**
 * <p>Searches for summary information about workflows.</p>
 *
 * @deprecated since: 2022-08-30
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTThingsGraphClient, SearchFlowTemplatesCommand } from "@aws-sdk/client-iotthingsgraph"; // ES Modules import
 * // const { IoTThingsGraphClient, SearchFlowTemplatesCommand } = require("@aws-sdk/client-iotthingsgraph"); // CommonJS import
 * const client = new IoTThingsGraphClient(config);
 * const input = { // SearchFlowTemplatesRequest
 *   filters: [ // FlowTemplateFilters
 *     { // FlowTemplateFilter
 *       name: "DEVICE_MODEL_ID", // required
 *       value: [ // FlowTemplateFilterValues // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new SearchFlowTemplatesCommand(input);
 * const response = await client.send(command);
 * // { // SearchFlowTemplatesResponse
 * //   summaries: [ // FlowTemplateSummaries
 * //     { // FlowTemplateSummary
 * //       id: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       revisionNumber: Number("long"),
 * //       createdAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SearchFlowTemplatesCommandInput - {@link SearchFlowTemplatesCommandInput}
 * @returns {@link SearchFlowTemplatesCommandOutput}
 * @see {@link SearchFlowTemplatesCommandInput} for command's `input` shape.
 * @see {@link SearchFlowTemplatesCommandOutput} for command's `response` shape.
 * @see {@link IoTThingsGraphClientResolvedConfig | config} for IoTThingsGraphClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p></p>
 *
 * @throws {@link InvalidRequestException} (client fault)
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
export class SearchFlowTemplatesCommand extends $Command
  .classBuilder<
    SearchFlowTemplatesCommandInput,
    SearchFlowTemplatesCommandOutput,
    IoTThingsGraphClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTThingsGraphClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("IotThingsGraphFrontEndService", "SearchFlowTemplates", {})
  .n("IoTThingsGraphClient", "SearchFlowTemplatesCommand")
  .f(void 0, void 0)
  .ser(se_SearchFlowTemplatesCommand)
  .de(de_SearchFlowTemplatesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchFlowTemplatesRequest;
      output: SearchFlowTemplatesResponse;
    };
    sdk: {
      input: SearchFlowTemplatesCommandInput;
      output: SearchFlowTemplatesCommandOutput;
    };
  };
}
