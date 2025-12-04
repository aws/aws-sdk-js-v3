// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTAnalyticsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTAnalyticsClient";
import type { CreateDatasetContentRequest, CreateDatasetContentResponse } from "../models/models_0";
import { CreateDatasetContent } from "../schemas/schemas_0";

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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIoTAnalytics", "CreateDatasetContent", {})
  .n("IoTAnalyticsClient", "CreateDatasetContentCommand")
  .sc(CreateDatasetContent)
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
