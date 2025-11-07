// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  KinesisAnalyticsV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../KinesisAnalyticsV2Client";
import { StopApplicationRequest, StopApplicationResponse } from "../models/models_0";
import { StopApplication } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopApplicationCommand}.
 */
export interface StopApplicationCommandInput extends StopApplicationRequest {}
/**
 * @public
 *
 * The output of {@link StopApplicationCommand}.
 */
export interface StopApplicationCommandOutput extends StopApplicationResponse, __MetadataBearer {}

/**
 * <p>Stops the application from processing data. You can stop
 *       an application only if it is in the running status, unless you set the <code>Force</code>
 *         parameter to <code>true</code>.</p>
 *          <p>You can use the <a>DescribeApplication</a> operation to find the application status.
 *        </p>
 *          <p>Managed Service for Apache Flink takes a snapshot when the application is stopped, unless <code>Force</code> is set
 *           to <code>true</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsV2Client, StopApplicationCommand } from "@aws-sdk/client-kinesis-analytics-v2"; // ES Modules import
 * // const { KinesisAnalyticsV2Client, StopApplicationCommand } = require("@aws-sdk/client-kinesis-analytics-v2"); // CommonJS import
 * // import type { KinesisAnalyticsV2ClientConfig } from "@aws-sdk/client-kinesis-analytics-v2";
 * const config = {}; // type is KinesisAnalyticsV2ClientConfig
 * const client = new KinesisAnalyticsV2Client(config);
 * const input = { // StopApplicationRequest
 *   ApplicationName: "STRING_VALUE", // required
 *   Force: true || false,
 * };
 * const command = new StopApplicationCommand(input);
 * const response = await client.send(command);
 * // { // StopApplicationResponse
 * //   OperationId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StopApplicationCommandInput - {@link StopApplicationCommandInput}
 * @returns {@link StopApplicationCommandOutput}
 * @see {@link StopApplicationCommandInput} for command's `input` shape.
 * @see {@link StopApplicationCommandOutput} for command's `response` shape.
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
export class StopApplicationCommand extends $Command
  .classBuilder<
    StopApplicationCommandInput,
    StopApplicationCommandOutput,
    KinesisAnalyticsV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: KinesisAnalyticsV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("KinesisAnalytics_20180523", "StopApplication", {})
  .n("KinesisAnalyticsV2Client", "StopApplicationCommand")
  .sc(StopApplication)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopApplicationRequest;
      output: StopApplicationResponse;
    };
    sdk: {
      input: StopApplicationCommandInput;
      output: StopApplicationCommandOutput;
    };
  };
}
