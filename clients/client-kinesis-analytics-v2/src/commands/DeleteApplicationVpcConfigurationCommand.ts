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
  DeleteApplicationVpcConfigurationRequest,
  DeleteApplicationVpcConfigurationResponse,
} from "../models/models_0";
import { DeleteApplicationVpcConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteApplicationVpcConfigurationCommand}.
 */
export interface DeleteApplicationVpcConfigurationCommandInput extends DeleteApplicationVpcConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteApplicationVpcConfigurationCommand}.
 */
export interface DeleteApplicationVpcConfigurationCommandOutput extends DeleteApplicationVpcConfigurationResponse, __MetadataBearer {}

/**
 * <p>Removes a VPC configuration from a Managed Service for Apache Flink application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsV2Client, DeleteApplicationVpcConfigurationCommand } from "@aws-sdk/client-kinesis-analytics-v2"; // ES Modules import
 * // const { KinesisAnalyticsV2Client, DeleteApplicationVpcConfigurationCommand } = require("@aws-sdk/client-kinesis-analytics-v2"); // CommonJS import
 * // import type { KinesisAnalyticsV2ClientConfig } from "@aws-sdk/client-kinesis-analytics-v2";
 * const config = {}; // type is KinesisAnalyticsV2ClientConfig
 * const client = new KinesisAnalyticsV2Client(config);
 * const input = { // DeleteApplicationVpcConfigurationRequest
 *   ApplicationName: "STRING_VALUE", // required
 *   CurrentApplicationVersionId: Number("long"),
 *   VpcConfigurationId: "STRING_VALUE", // required
 *   ConditionalToken: "STRING_VALUE",
 * };
 * const command = new DeleteApplicationVpcConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // DeleteApplicationVpcConfigurationResponse
 * //   ApplicationARN: "STRING_VALUE",
 * //   ApplicationVersionId: Number("long"),
 * //   OperationId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteApplicationVpcConfigurationCommandInput - {@link DeleteApplicationVpcConfigurationCommandInput}
 * @returns {@link DeleteApplicationVpcConfigurationCommandOutput}
 * @see {@link DeleteApplicationVpcConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteApplicationVpcConfigurationCommandOutput} for command's `response` shape.
 * @see {@link KinesisAnalyticsV2ClientResolvedConfig | config} for KinesisAnalyticsV2Client's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Exception thrown as a result of concurrent modifications to an application. This error can
 *       be the result of attempting to modify an application without using the current application
 *       ID.</p>
 *
 * @throws {@link InvalidApplicationConfigurationException} (client fault)
 *  <p>The user-provided application configuration is not valid.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>The specified input parameter value is not valid.</p>
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
export class DeleteApplicationVpcConfigurationCommand extends $Command
  .classBuilder<
    DeleteApplicationVpcConfigurationCommandInput,
    DeleteApplicationVpcConfigurationCommandOutput,
    KinesisAnalyticsV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: KinesisAnalyticsV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("KinesisAnalytics_20180523", "DeleteApplicationVpcConfiguration", {})
  .n("KinesisAnalyticsV2Client", "DeleteApplicationVpcConfigurationCommand")
  .sc(DeleteApplicationVpcConfiguration$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteApplicationVpcConfigurationRequest;
      output: DeleteApplicationVpcConfigurationResponse;
    };
    sdk: {
      input: DeleteApplicationVpcConfigurationCommandInput;
      output: DeleteApplicationVpcConfigurationCommandOutput;
    };
  };
}
