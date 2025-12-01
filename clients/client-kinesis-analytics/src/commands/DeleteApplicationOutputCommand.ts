// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  KinesisAnalyticsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../KinesisAnalyticsClient";
import type { DeleteApplicationOutputRequest, DeleteApplicationOutputResponse } from "../models/models_0";
import { DeleteApplicationOutput } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteApplicationOutputCommand}.
 */
export interface DeleteApplicationOutputCommandInput extends DeleteApplicationOutputRequest {}
/**
 * @public
 *
 * The output of {@link DeleteApplicationOutputCommand}.
 */
export interface DeleteApplicationOutputCommandOutput extends DeleteApplicationOutputResponse, __MetadataBearer {}

/**
 * <note>
 *             <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p>
 *          </note>
 *         <p>Deletes output destination configuration from your application configuration. Amazon Kinesis Analytics will no longer write data from the corresponding in-application stream to the external output destination.</p>
 *         <p>This operation requires permissions to perform the
 *             <code>kinesisanalytics:DeleteApplicationOutput</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsClient, DeleteApplicationOutputCommand } from "@aws-sdk/client-kinesis-analytics"; // ES Modules import
 * // const { KinesisAnalyticsClient, DeleteApplicationOutputCommand } = require("@aws-sdk/client-kinesis-analytics"); // CommonJS import
 * // import type { KinesisAnalyticsClientConfig } from "@aws-sdk/client-kinesis-analytics";
 * const config = {}; // type is KinesisAnalyticsClientConfig
 * const client = new KinesisAnalyticsClient(config);
 * const input = { // DeleteApplicationOutputRequest
 *   ApplicationName: "STRING_VALUE", // required
 *   CurrentApplicationVersionId: Number("long"), // required
 *   OutputId: "STRING_VALUE", // required
 * };
 * const command = new DeleteApplicationOutputCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteApplicationOutputCommandInput - {@link DeleteApplicationOutputCommandInput}
 * @returns {@link DeleteApplicationOutputCommandOutput}
 * @see {@link DeleteApplicationOutputCommandInput} for command's `input` shape.
 * @see {@link DeleteApplicationOutputCommandOutput} for command's `response` shape.
 * @see {@link KinesisAnalyticsClientResolvedConfig | config} for KinesisAnalyticsClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Exception thrown as a result of concurrent modification to an application. For example, two individuals attempting to edit the same application at the same time.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>Specified input parameter value is invalid.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>Application is not available for this operation.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Specified application can't be found.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>The request was rejected because a specified parameter is not supported or a specified resource is not valid for this operation. </p>
 *
 * @throws {@link KinesisAnalyticsServiceException}
 * <p>Base exception class for all service exceptions from KinesisAnalytics service.</p>
 *
 *
 * @public
 */
export class DeleteApplicationOutputCommand extends $Command
  .classBuilder<
    DeleteApplicationOutputCommandInput,
    DeleteApplicationOutputCommandOutput,
    KinesisAnalyticsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: KinesisAnalyticsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("KinesisAnalytics_20150814", "DeleteApplicationOutput", {})
  .n("KinesisAnalyticsClient", "DeleteApplicationOutputCommand")
  .sc(DeleteApplicationOutput)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteApplicationOutputRequest;
      output: {};
    };
    sdk: {
      input: DeleteApplicationOutputCommandInput;
      output: DeleteApplicationOutputCommandOutput;
    };
  };
}
