// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTAnalyticsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTAnalyticsClient";
import { CreateDatasetContentRequest, CreateDatasetContentResponse } from "../models/models_0";
import { de_CreateDatasetContentCommand, se_CreateDatasetContentCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateDatasetContentCommand}.
 */
export interface CreateDatasetContentCommandInput extends CreateDatasetContentRequest {}
/**
 * @public
 *
 * The output of {@link CreateDatasetContentCommand}.
 */
export interface CreateDatasetContentCommandOutput extends CreateDatasetContentResponse, __MetadataBearer {}

/**
 * <p>Creates the content of a dataset by applying a <code>queryAction</code> (a SQL query) or a
 *         <code>containerAction</code> (executing a containerized application).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTAnalyticsClient, CreateDatasetContentCommand } from "@aws-sdk/client-iotanalytics"; // ES Modules import
 * // const { IoTAnalyticsClient, CreateDatasetContentCommand } = require("@aws-sdk/client-iotanalytics"); // CommonJS import
 * // import type { IoTAnalyticsClientConfig } from "@aws-sdk/client-iotanalytics";
 * const config = {}; // type is IoTAnalyticsClientConfig
 * const client = new IoTAnalyticsClient(config);
 * const input = { // CreateDatasetContentRequest
 *   datasetName: "STRING_VALUE", // required
 *   versionId: "STRING_VALUE",
 * };
 * const command = new CreateDatasetContentCommand(input);
 * const response = await client.send(command);
 * // { // CreateDatasetContentResponse
 * //   versionId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateDatasetContentCommandInput - {@link CreateDatasetContentCommandInput}
 * @returns {@link CreateDatasetContentCommandOutput}
 * @see {@link CreateDatasetContentCommandInput} for command's `input` shape.
 * @see {@link CreateDatasetContentCommandOutput} for command's `response` shape.
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
export class CreateDatasetContentCommand extends $Command
  .classBuilder<
    CreateDatasetContentCommandInput,
    CreateDatasetContentCommandOutput,
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
  .s("AWSIoTAnalytics", "CreateDatasetContent", {})
  .n("IoTAnalyticsClient", "CreateDatasetContentCommand")
  .f(void 0, void 0)
  .ser(se_CreateDatasetContentCommand)
  .de(de_CreateDatasetContentCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDatasetContentRequest;
      output: CreateDatasetContentResponse;
    };
    sdk: {
      input: CreateDatasetContentCommandInput;
      output: CreateDatasetContentCommandOutput;
    };
  };
}
