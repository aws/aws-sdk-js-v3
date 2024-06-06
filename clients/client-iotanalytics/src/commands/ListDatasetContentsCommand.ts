// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTAnalyticsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTAnalyticsClient";
import { ListDatasetContentsRequest, ListDatasetContentsResponse } from "../models/models_0";
import { de_ListDatasetContentsCommand, se_ListDatasetContentsCommand } from "../protocols/Aws_restJson1";

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
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: IoTAnalyticsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIoTAnalytics", "ListDatasetContents", {})
  .n("IoTAnalyticsClient", "ListDatasetContentsCommand")
  .f(void 0, void 0)
  .ser(se_ListDatasetContentsCommand)
  .de(de_ListDatasetContentsCommand)
  .build() {}
