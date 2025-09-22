// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTAnalyticsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTAnalyticsClient";
import { DeleteDatasetContentRequest } from "../models/models_0";
import { DeleteDatasetContent } from "../schemas/schemas_4_Dataset";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteDatasetContentCommand}.
 */
export interface DeleteDatasetContentCommandInput extends DeleteDatasetContentRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDatasetContentCommand}.
 */
export interface DeleteDatasetContentCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the content of the specified dataset.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTAnalyticsClient, DeleteDatasetContentCommand } from "@aws-sdk/client-iotanalytics"; // ES Modules import
 * // const { IoTAnalyticsClient, DeleteDatasetContentCommand } = require("@aws-sdk/client-iotanalytics"); // CommonJS import
 * // import type { IoTAnalyticsClientConfig } from "@aws-sdk/client-iotanalytics";
 * const config = {}; // type is IoTAnalyticsClientConfig
 * const client = new IoTAnalyticsClient(config);
 * const input = { // DeleteDatasetContentRequest
 *   datasetName: "STRING_VALUE", // required
 *   versionId: "STRING_VALUE",
 * };
 * const command = new DeleteDatasetContentCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteDatasetContentCommandInput - {@link DeleteDatasetContentCommandInput}
 * @returns {@link DeleteDatasetContentCommandOutput}
 * @see {@link DeleteDatasetContentCommandInput} for command's `input` shape.
 * @see {@link DeleteDatasetContentCommandOutput} for command's `response` shape.
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
export class DeleteDatasetContentCommand extends $Command
  .classBuilder<
    DeleteDatasetContentCommandInput,
    DeleteDatasetContentCommandOutput,
    IoTAnalyticsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTAnalyticsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIoTAnalytics", "DeleteDatasetContent", {})
  .n("IoTAnalyticsClient", "DeleteDatasetContentCommand")
  .sc(DeleteDatasetContent)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDatasetContentRequest;
      output: {};
    };
    sdk: {
      input: DeleteDatasetContentCommandInput;
      output: DeleteDatasetContentCommandOutput;
    };
  };
}
