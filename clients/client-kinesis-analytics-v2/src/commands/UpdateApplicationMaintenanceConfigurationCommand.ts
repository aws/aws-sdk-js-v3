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
import {
  UpdateApplicationMaintenanceConfigurationRequest,
  UpdateApplicationMaintenanceConfigurationResponse,
} from "../models/models_0";
import { UpdateApplicationMaintenanceConfiguration } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateApplicationMaintenanceConfigurationCommand}.
 */
export interface UpdateApplicationMaintenanceConfigurationCommandInput
  extends UpdateApplicationMaintenanceConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateApplicationMaintenanceConfigurationCommand}.
 */
export interface UpdateApplicationMaintenanceConfigurationCommandOutput
  extends UpdateApplicationMaintenanceConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Updates the maintenance configuration of the Managed Service for Apache Flink application. </p>
 *          <p>You can invoke this operation on an application that is in one of the two following
 *       states: <code>READY</code> or <code>RUNNING</code>. If you invoke it when the application is
 *       in a state other than these two states, it throws a <code>ResourceInUseException</code>. The
 *       service makes use of the updated configuration the next time it schedules maintenance for the
 *       application. If you invoke this operation after the service schedules maintenance, the service
 *       will apply the configuration update the next time it schedules maintenance for the
 *       application. This means that you might not see the maintenance configuration update applied to
 *       the maintenance process that follows a successful invocation of this operation, but to the
 *       following maintenance process instead.</p>
 *          <p>To see the current maintenance configuration of your application, invoke the
 *       <a>DescribeApplication</a> operation.</p>
 *          <p>For information about application maintenance, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/maintenance.html">Managed Service for Apache Flink for Apache Flink Maintenance</a>.</p>
 *          <note>
 *             <p>This operation is supported only for Managed Service for Apache Flink.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsV2Client, UpdateApplicationMaintenanceConfigurationCommand } from "@aws-sdk/client-kinesis-analytics-v2"; // ES Modules import
 * // const { KinesisAnalyticsV2Client, UpdateApplicationMaintenanceConfigurationCommand } = require("@aws-sdk/client-kinesis-analytics-v2"); // CommonJS import
 * // import type { KinesisAnalyticsV2ClientConfig } from "@aws-sdk/client-kinesis-analytics-v2";
 * const config = {}; // type is KinesisAnalyticsV2ClientConfig
 * const client = new KinesisAnalyticsV2Client(config);
 * const input = { // UpdateApplicationMaintenanceConfigurationRequest
 *   ApplicationName: "STRING_VALUE", // required
 *   ApplicationMaintenanceConfigurationUpdate: { // ApplicationMaintenanceConfigurationUpdate
 *     ApplicationMaintenanceWindowStartTimeUpdate: "STRING_VALUE", // required
 *   },
 * };
 * const command = new UpdateApplicationMaintenanceConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateApplicationMaintenanceConfigurationResponse
 * //   ApplicationARN: "STRING_VALUE",
 * //   ApplicationMaintenanceConfigurationDescription: { // ApplicationMaintenanceConfigurationDescription
 * //     ApplicationMaintenanceWindowStartTime: "STRING_VALUE", // required
 * //     ApplicationMaintenanceWindowEndTime: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateApplicationMaintenanceConfigurationCommandInput - {@link UpdateApplicationMaintenanceConfigurationCommandInput}
 * @returns {@link UpdateApplicationMaintenanceConfigurationCommandOutput}
 * @see {@link UpdateApplicationMaintenanceConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateApplicationMaintenanceConfigurationCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The application is not available for this operation.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Specified application can't be found.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>The request was rejected because a specified parameter is not supported or a specified resource is not valid for this
 *       operation. </p>
 *
 * @throws {@link KinesisAnalyticsV2ServiceException}
 * <p>Base exception class for all service exceptions from KinesisAnalyticsV2 service.</p>
 *
 *
 * @public
 */
export class UpdateApplicationMaintenanceConfigurationCommand extends $Command
  .classBuilder<
    UpdateApplicationMaintenanceConfigurationCommandInput,
    UpdateApplicationMaintenanceConfigurationCommandOutput,
    KinesisAnalyticsV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: KinesisAnalyticsV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("KinesisAnalytics_20180523", "UpdateApplicationMaintenanceConfiguration", {})
  .n("KinesisAnalyticsV2Client", "UpdateApplicationMaintenanceConfigurationCommand")
  .sc(UpdateApplicationMaintenanceConfiguration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateApplicationMaintenanceConfigurationRequest;
      output: UpdateApplicationMaintenanceConfigurationResponse;
    };
    sdk: {
      input: UpdateApplicationMaintenanceConfigurationCommandInput;
      output: UpdateApplicationMaintenanceConfigurationCommandOutput;
    };
  };
}
