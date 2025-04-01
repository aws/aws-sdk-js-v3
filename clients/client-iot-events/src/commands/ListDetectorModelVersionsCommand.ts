// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTEventsClient";
import { ListDetectorModelVersionsRequest, ListDetectorModelVersionsResponse } from "../models/models_0";
import { de_ListDetectorModelVersionsCommand, se_ListDetectorModelVersionsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDetectorModelVersionsCommand}.
 */
export interface ListDetectorModelVersionsCommandInput extends ListDetectorModelVersionsRequest {}
/**
 * @public
 *
 * The output of {@link ListDetectorModelVersionsCommand}.
 */
export interface ListDetectorModelVersionsCommandOutput extends ListDetectorModelVersionsResponse, __MetadataBearer {}

/**
 * <p>Lists all the versions of a detector model. Only the metadata associated with each
 *       detector model version is returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsClient, ListDetectorModelVersionsCommand } from "@aws-sdk/client-iot-events"; // ES Modules import
 * // const { IoTEventsClient, ListDetectorModelVersionsCommand } = require("@aws-sdk/client-iot-events"); // CommonJS import
 * const client = new IoTEventsClient(config);
 * const input = { // ListDetectorModelVersionsRequest
 *   detectorModelName: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListDetectorModelVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListDetectorModelVersionsResponse
 * //   detectorModelVersionSummaries: [ // DetectorModelVersionSummaries
 * //     { // DetectorModelVersionSummary
 * //       detectorModelName: "STRING_VALUE",
 * //       detectorModelVersion: "STRING_VALUE",
 * //       detectorModelArn: "STRING_VALUE",
 * //       roleArn: "STRING_VALUE",
 * //       creationTime: new Date("TIMESTAMP"),
 * //       lastUpdateTime: new Date("TIMESTAMP"),
 * //       status: "ACTIVE" || "ACTIVATING" || "INACTIVE" || "DEPRECATED" || "DRAFT" || "PAUSED" || "FAILED",
 * //       evaluationMethod: "BATCH" || "SERIAL",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDetectorModelVersionsCommandInput - {@link ListDetectorModelVersionsCommandInput}
 * @returns {@link ListDetectorModelVersionsCommandOutput}
 * @see {@link ListDetectorModelVersionsCommandInput} for command's `input` shape.
 * @see {@link ListDetectorModelVersionsCommandOutput} for command's `response` shape.
 * @see {@link IoTEventsClientResolvedConfig | config} for IoTEventsClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request was invalid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource was not found.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request could not be completed due to throttling.</p>
 *
 * @throws {@link IoTEventsServiceException}
 * <p>Base exception class for all service exceptions from IoTEvents service.</p>
 *
 *
 * @public
 */
export class ListDetectorModelVersionsCommand extends $Command
  .classBuilder<
    ListDetectorModelVersionsCommandInput,
    ListDetectorModelVersionsCommandOutput,
    IoTEventsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTEventsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("IotColumboService", "ListDetectorModelVersions", {})
  .n("IoTEventsClient", "ListDetectorModelVersionsCommand")
  .f(void 0, void 0)
  .ser(se_ListDetectorModelVersionsCommand)
  .de(de_ListDetectorModelVersionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDetectorModelVersionsRequest;
      output: ListDetectorModelVersionsResponse;
    };
    sdk: {
      input: ListDetectorModelVersionsCommandInput;
      output: ListDetectorModelVersionsCommandOutput;
    };
  };
}
