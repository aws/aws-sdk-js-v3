// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient";
import { SearchSystemTemplatesRequest, SearchSystemTemplatesResponse } from "../models/models_0";
import { de_SearchSystemTemplatesCommand, se_SearchSystemTemplatesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SearchSystemTemplatesCommand}.
 */
export interface SearchSystemTemplatesCommandInput extends SearchSystemTemplatesRequest {}
/**
 * @public
 *
 * The output of {@link SearchSystemTemplatesCommand}.
 */
export interface SearchSystemTemplatesCommandOutput extends SearchSystemTemplatesResponse, __MetadataBearer {}

/**
 * <p>Searches for summary information about systems in the user's account. You can filter by the ID of a workflow to return only systems that use the specified workflow.</p>
 *
 * @deprecated since: 2022-08-30
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTThingsGraphClient, SearchSystemTemplatesCommand } from "@aws-sdk/client-iotthingsgraph"; // ES Modules import
 * // const { IoTThingsGraphClient, SearchSystemTemplatesCommand } = require("@aws-sdk/client-iotthingsgraph"); // CommonJS import
 * // import type { IoTThingsGraphClientConfig } from "@aws-sdk/client-iotthingsgraph";
 * const config = {}; // type is IoTThingsGraphClientConfig
 * const client = new IoTThingsGraphClient(config);
 * const input = { // SearchSystemTemplatesRequest
 *   filters: [ // SystemTemplateFilters
 *     { // SystemTemplateFilter
 *       name: "FLOW_TEMPLATE_ID", // required
 *       value: [ // SystemTemplateFilterValues // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new SearchSystemTemplatesCommand(input);
 * const response = await client.send(command);
 * // { // SearchSystemTemplatesResponse
 * //   summaries: [ // SystemTemplateSummaries
 * //     { // SystemTemplateSummary
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
 * @param SearchSystemTemplatesCommandInput - {@link SearchSystemTemplatesCommandInput}
 * @returns {@link SearchSystemTemplatesCommandOutput}
 * @see {@link SearchSystemTemplatesCommandInput} for command's `input` shape.
 * @see {@link SearchSystemTemplatesCommandOutput} for command's `response` shape.
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
export class SearchSystemTemplatesCommand extends $Command
  .classBuilder<
    SearchSystemTemplatesCommandInput,
    SearchSystemTemplatesCommandOutput,
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
  .s("IotThingsGraphFrontEndService", "SearchSystemTemplates", {})
  .n("IoTThingsGraphClient", "SearchSystemTemplatesCommand")
  .f(void 0, void 0)
  .ser(se_SearchSystemTemplatesCommand)
  .de(de_SearchSystemTemplatesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchSystemTemplatesRequest;
      output: SearchSystemTemplatesResponse;
    };
    sdk: {
      input: SearchSystemTemplatesCommandInput;
      output: SearchSystemTemplatesCommandOutput;
    };
  };
}
