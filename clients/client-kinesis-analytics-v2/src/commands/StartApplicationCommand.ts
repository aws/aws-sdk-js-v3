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
import { StartApplicationRequest, StartApplicationResponse } from "../models/models_0";
import { StartApplication } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartApplicationCommand}.
 */
export interface StartApplicationCommandInput extends StartApplicationRequest {}
/**
 * @public
 *
 * The output of {@link StartApplicationCommand}.
 */
export interface StartApplicationCommandOutput extends StartApplicationResponse, __MetadataBearer {}

/**
 * <p>Starts the specified Managed Service for Apache Flink application. After creating an application, you must exclusively call this operation to
 *       start your application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsV2Client, StartApplicationCommand } from "@aws-sdk/client-kinesis-analytics-v2"; // ES Modules import
 * // const { KinesisAnalyticsV2Client, StartApplicationCommand } = require("@aws-sdk/client-kinesis-analytics-v2"); // CommonJS import
 * // import type { KinesisAnalyticsV2ClientConfig } from "@aws-sdk/client-kinesis-analytics-v2";
 * const config = {}; // type is KinesisAnalyticsV2ClientConfig
 * const client = new KinesisAnalyticsV2Client(config);
 * const input = { // StartApplicationRequest
 *   ApplicationName: "STRING_VALUE", // required
 *   RunConfiguration: { // RunConfiguration
 *     FlinkRunConfiguration: { // FlinkRunConfiguration
 *       AllowNonRestoredState: true || false,
 *     },
 *     SqlRunConfigurations: [ // SqlRunConfigurations
 *       { // SqlRunConfiguration
 *         InputId: "STRING_VALUE", // required
 *         InputStartingPositionConfiguration: { // InputStartingPositionConfiguration
 *           InputStartingPosition: "NOW" || "TRIM_HORIZON" || "LAST_STOPPED_POINT",
 *         },
 *       },
 *     ],
 *     ApplicationRestoreConfiguration: { // ApplicationRestoreConfiguration
 *       ApplicationRestoreType: "SKIP_RESTORE_FROM_SNAPSHOT" || "RESTORE_FROM_LATEST_SNAPSHOT" || "RESTORE_FROM_CUSTOM_SNAPSHOT", // required
 *       SnapshotName: "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new StartApplicationCommand(input);
 * const response = await client.send(command);
 * // { // StartApplicationResponse
 * //   OperationId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartApplicationCommandInput - {@link StartApplicationCommandInput}
 * @returns {@link StartApplicationCommandOutput}
 * @see {@link StartApplicationCommandInput} for command's `input` shape.
 * @see {@link StartApplicationCommandOutput} for command's `response` shape.
 * @see {@link KinesisAnalyticsV2ClientResolvedConfig | config} for KinesisAnalyticsV2Client's `config` shape.
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
export class StartApplicationCommand extends $Command
  .classBuilder<
    StartApplicationCommandInput,
    StartApplicationCommandOutput,
    KinesisAnalyticsV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: KinesisAnalyticsV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("KinesisAnalytics_20180523", "StartApplication", {})
  .n("KinesisAnalyticsV2Client", "StartApplicationCommand")
  .sc(StartApplication)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartApplicationRequest;
      output: StartApplicationResponse;
    };
    sdk: {
      input: StartApplicationCommandInput;
      output: StartApplicationCommandOutput;
    };
  };
}
