// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTAnalyticsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTAnalyticsClient";
import { GetDatasetContentRequest, GetDatasetContentResponse } from "../models/models_0";
import { de_GetDatasetContentCommand, se_GetDatasetContentCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDatasetContentCommand}.
 */
export interface GetDatasetContentCommandInput extends GetDatasetContentRequest {}
/**
 * @public
 *
 * The output of {@link GetDatasetContentCommand}.
 */
export interface GetDatasetContentCommandOutput extends GetDatasetContentResponse, __MetadataBearer {}

/**
 * <p>Retrieves the contents of a dataset as presigned URIs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTAnalyticsClient, GetDatasetContentCommand } from "@aws-sdk/client-iotanalytics"; // ES Modules import
 * // const { IoTAnalyticsClient, GetDatasetContentCommand } = require("@aws-sdk/client-iotanalytics"); // CommonJS import
 * // import type { IoTAnalyticsClientConfig } from "@aws-sdk/client-iotanalytics";
 * const config = {}; // type is IoTAnalyticsClientConfig
 * const client = new IoTAnalyticsClient(config);
 * const input = { // GetDatasetContentRequest
 *   datasetName: "STRING_VALUE", // required
 *   versionId: "STRING_VALUE",
 * };
 * const command = new GetDatasetContentCommand(input);
 * const response = await client.send(command);
 * // { // GetDatasetContentResponse
 * //   entries: [ // DatasetEntries
 * //     { // DatasetEntry
 * //       entryName: "STRING_VALUE",
 * //       dataURI: "STRING_VALUE",
 * //     },
 * //   ],
 * //   timestamp: new Date("TIMESTAMP"),
 * //   status: { // DatasetContentStatus
 * //     state: "CREATING" || "SUCCEEDED" || "FAILED",
 * //     reason: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetDatasetContentCommandInput - {@link GetDatasetContentCommandInput}
 * @returns {@link GetDatasetContentCommandOutput}
 * @see {@link GetDatasetContentCommandInput} for command's `input` shape.
 * @see {@link GetDatasetContentCommandOutput} for command's `response` shape.
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
export class GetDatasetContentCommand extends $Command
  .classBuilder<
    GetDatasetContentCommandInput,
    GetDatasetContentCommandOutput,
    IoTAnalyticsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTAnalyticsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIoTAnalytics", "GetDatasetContent", {})
  .n("IoTAnalyticsClient", "GetDatasetContentCommand")
  .f(void 0, void 0)
  .ser(se_GetDatasetContentCommand)
  .de(de_GetDatasetContentCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDatasetContentRequest;
      output: GetDatasetContentResponse;
    };
    sdk: {
      input: GetDatasetContentCommandInput;
      output: GetDatasetContentCommandOutput;
    };
  };
}
