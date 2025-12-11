// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTAnalyticsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTAnalyticsClient";
import type { ListDatasetsRequest, ListDatasetsResponse } from "../models/models_0";
import { ListDatasets } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDatasetsCommand}.
 */
export interface ListDatasetsCommandInput extends ListDatasetsRequest {}
/**
 * @public
 *
 * The output of {@link ListDatasetsCommand}.
 */
export interface ListDatasetsCommandOutput extends ListDatasetsResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about datasets.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTAnalyticsClient, ListDatasetsCommand } from "@aws-sdk/client-iotanalytics"; // ES Modules import
 * // const { IoTAnalyticsClient, ListDatasetsCommand } = require("@aws-sdk/client-iotanalytics"); // CommonJS import
 * // import type { IoTAnalyticsClientConfig } from "@aws-sdk/client-iotanalytics";
 * const config = {}; // type is IoTAnalyticsClientConfig
 * const client = new IoTAnalyticsClient(config);
 * const input = { // ListDatasetsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListDatasetsCommand(input);
 * const response = await client.send(command);
 * // { // ListDatasetsResponse
 * //   datasetSummaries: [ // DatasetSummaries
 * //     { // DatasetSummary
 * //       datasetName: "STRING_VALUE",
 * //       status: "CREATING" || "ACTIVE" || "DELETING",
 * //       creationTime: new Date("TIMESTAMP"),
 * //       lastUpdateTime: new Date("TIMESTAMP"),
 * //       triggers: [ // DatasetTriggers
 * //         { // DatasetTrigger
 * //           schedule: { // Schedule
 * //             expression: "STRING_VALUE",
 * //           },
 * //           dataset: { // TriggeringDataset
 * //             name: "STRING_VALUE", // required
 * //           },
 * //         },
 * //       ],
 * //       actions: [ // DatasetActionSummaries
 * //         { // DatasetActionSummary
 * //           actionName: "STRING_VALUE",
 * //           actionType: "QUERY" || "CONTAINER",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDatasetsCommandInput - {@link ListDatasetsCommandInput}
 * @returns {@link ListDatasetsCommandOutput}
 * @see {@link ListDatasetsCommandInput} for command's `input` shape.
 * @see {@link ListDatasetsCommandOutput} for command's `response` shape.
 * @see {@link IoTAnalyticsClientResolvedConfig | config} for IoTAnalyticsClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>There was an internal failure.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request was not valid.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link IoTAnalyticsServiceException}
 * <p>Base exception class for all service exceptions from IoTAnalytics service.</p>
 *
 *
 * @public
 */
export class ListDatasetsCommand extends $Command
  .classBuilder<
    ListDatasetsCommandInput,
    ListDatasetsCommandOutput,
    IoTAnalyticsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTAnalyticsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIoTAnalytics", "ListDatasets", {})
  .n("IoTAnalyticsClient", "ListDatasetsCommand")
  .sc(ListDatasets)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDatasetsRequest;
      output: ListDatasetsResponse;
    };
    sdk: {
      input: ListDatasetsCommandInput;
      output: ListDatasetsCommandOutput;
    };
  };
}
