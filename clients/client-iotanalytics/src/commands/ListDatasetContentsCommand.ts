// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTAnalyticsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTAnalyticsClient";
import type { ListDatasetContentsRequest, ListDatasetContentsResponse } from "../models/models_0";
import { ListDatasetContents$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDatasetContentsCommand}.
 */
export interface ListDatasetContentsCommandInput extends ListDatasetContentsRequest {}
/**
 * @public
 *
 * The output of {@link ListDatasetContentsCommand}.
 */
export interface ListDatasetContentsCommandOutput extends ListDatasetContentsResponse, __MetadataBearer {}

/**
 * <p>Lists information about dataset contents that have been created.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTAnalyticsClient, ListDatasetContentsCommand } from "@aws-sdk/client-iotanalytics"; // ES Modules import
 * // const { IoTAnalyticsClient, ListDatasetContentsCommand } = require("@aws-sdk/client-iotanalytics"); // CommonJS import
 * // import type { IoTAnalyticsClientConfig } from "@aws-sdk/client-iotanalytics";
 * const config = {}; // type is IoTAnalyticsClientConfig
 * const client = new IoTAnalyticsClient(config);
 * const input = { // ListDatasetContentsRequest
 *   datasetName: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   scheduledOnOrAfter: new Date("TIMESTAMP"),
 *   scheduledBefore: new Date("TIMESTAMP"),
 * };
 * const command = new ListDatasetContentsCommand(input);
 * const response = await client.send(command);
 * // { // ListDatasetContentsResponse
 * //   datasetContentSummaries: [ // DatasetContentSummaries
 * //     { // DatasetContentSummary
 * //       version: "STRING_VALUE",
 * //       status: { // DatasetContentStatus
 * //         state: "CREATING" || "SUCCEEDED" || "FAILED",
 * //         reason: "STRING_VALUE",
 * //       },
 * //       creationTime: new Date("TIMESTAMP"),
 * //       scheduleTime: new Date("TIMESTAMP"),
 * //       completionTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDatasetContentsCommandInput - {@link ListDatasetContentsCommandInput}
 * @returns {@link ListDatasetContentsCommandOutput}
 * @see {@link ListDatasetContentsCommandInput} for command's `input` shape.
 * @see {@link ListDatasetContentsCommandOutput} for command's `response` shape.
 * @see {@link IoTAnalyticsClientResolvedConfig | config} for IoTAnalyticsClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>There was an internal failure.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request was not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource with the specified name could not be found.</p>
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
export class ListDatasetContentsCommand extends $Command
  .classBuilder<
    ListDatasetContentsCommandInput,
    ListDatasetContentsCommandOutput,
    IoTAnalyticsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTAnalyticsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIoTAnalytics", "ListDatasetContents", {})
  .n("IoTAnalyticsClient", "ListDatasetContentsCommand")
  .sc(ListDatasetContents$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDatasetContentsRequest;
      output: ListDatasetContentsResponse;
    };
    sdk: {
      input: ListDatasetContentsCommandInput;
      output: ListDatasetContentsCommandOutput;
    };
  };
}
