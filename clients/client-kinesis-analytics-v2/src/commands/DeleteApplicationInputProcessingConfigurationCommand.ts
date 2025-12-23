// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  KinesisAnalyticsV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../KinesisAnalyticsV2Client";
import type {
  DeleteApplicationInputProcessingConfigurationRequest,
  DeleteApplicationInputProcessingConfigurationResponse,
} from "../models/models_0";
import { DeleteApplicationInputProcessingConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteApplicationInputProcessingConfigurationCommand}.
 */
export interface DeleteApplicationInputProcessingConfigurationCommandInput extends DeleteApplicationInputProcessingConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteApplicationInputProcessingConfigurationCommand}.
 */
export interface DeleteApplicationInputProcessingConfigurationCommandOutput extends DeleteApplicationInputProcessingConfigurationResponse, __MetadataBearer {}

/**
 * <p>Deletes an <a>InputProcessingConfiguration</a> from an input.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsV2Client, DeleteApplicationInputProcessingConfigurationCommand } from "@aws-sdk/client-kinesis-analytics-v2"; // ES Modules import
 * // const { KinesisAnalyticsV2Client, DeleteApplicationInputProcessingConfigurationCommand } = require("@aws-sdk/client-kinesis-analytics-v2"); // CommonJS import
 * // import type { KinesisAnalyticsV2ClientConfig } from "@aws-sdk/client-kinesis-analytics-v2";
 * const config = {}; // type is KinesisAnalyticsV2ClientConfig
 * const client = new KinesisAnalyticsV2Client(config);
 * const input = { // DeleteApplicationInputProcessingConfigurationRequest
 *   ApplicationName: "STRING_VALUE", // required
 *   CurrentApplicationVersionId: Number("long"), // required
 *   InputId: "STRING_VALUE", // required
 * };
 * const command = new DeleteApplicationInputProcessingConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // DeleteApplicationInputProcessingConfigurationResponse
 * //   ApplicationARN: "STRING_VALUE",
 * //   ApplicationVersionId: Number("long"),
 * // };
 *
 * ```
 *
 * @param DeleteApplicationInputProcessingConfigurationCommandInput - {@link DeleteApplicationInputProcessingConfigurationCommandInput}
 * @returns {@link DeleteApplicationInputProcessingConfigurationCommandOutput}
 * @see {@link DeleteApplicationInputProcessingConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteApplicationInputProcessingConfigurationCommandOutput} for command's `response` shape.
 * @see {@link KinesisAnalyticsV2ClientResolvedConfig | config} for KinesisAnalyticsV2Client's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Exception thrown as a result of concurrent modifications to an application. This error can
 *       be the result of attempting to modify an application without using the current application
 *       ID.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>The specified input parameter value is not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request JSON is not valid for the operation.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The application is not available for this operation.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Specified application can't be found.</p>
 *
 * @throws {@link KinesisAnalyticsV2ServiceException}
 * <p>Base exception class for all service exceptions from KinesisAnalyticsV2 service.</p>
 *
 *
 * @public
 */
export class DeleteApplicationInputProcessingConfigurationCommand extends $Command
  .classBuilder<
    DeleteApplicationInputProcessingConfigurationCommandInput,
    DeleteApplicationInputProcessingConfigurationCommandOutput,
    KinesisAnalyticsV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: KinesisAnalyticsV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("KinesisAnalytics_20180523", "DeleteApplicationInputProcessingConfiguration", {})
  .n("KinesisAnalyticsV2Client", "DeleteApplicationInputProcessingConfigurationCommand")
  .sc(DeleteApplicationInputProcessingConfiguration$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteApplicationInputProcessingConfigurationRequest;
      output: DeleteApplicationInputProcessingConfigurationResponse;
    };
    sdk: {
      input: DeleteApplicationInputProcessingConfigurationCommandInput;
      output: DeleteApplicationInputProcessingConfigurationCommandOutput;
    };
  };
}
