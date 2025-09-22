// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  ModifyVerifiedAccessInstanceLoggingConfigurationRequest,
  ModifyVerifiedAccessInstanceLoggingConfigurationResult,
} from "../models/models_7";
import { ModifyVerifiedAccessInstanceLoggingConfiguration } from "../schemas/schemas_84_Logging";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyVerifiedAccessInstanceLoggingConfigurationCommand}.
 */
export interface ModifyVerifiedAccessInstanceLoggingConfigurationCommandInput
  extends ModifyVerifiedAccessInstanceLoggingConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link ModifyVerifiedAccessInstanceLoggingConfigurationCommand}.
 */
export interface ModifyVerifiedAccessInstanceLoggingConfigurationCommandOutput
  extends ModifyVerifiedAccessInstanceLoggingConfigurationResult,
    __MetadataBearer {}

/**
 * <p>Modifies the logging configuration for the specified Amazon Web Services Verified Access instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyVerifiedAccessInstanceLoggingConfigurationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyVerifiedAccessInstanceLoggingConfigurationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // ModifyVerifiedAccessInstanceLoggingConfigurationRequest
 *   VerifiedAccessInstanceId: "STRING_VALUE", // required
 *   AccessLogs: { // VerifiedAccessLogOptions
 *     S3: { // VerifiedAccessLogS3DestinationOptions
 *       Enabled: true || false, // required
 *       BucketName: "STRING_VALUE",
 *       Prefix: "STRING_VALUE",
 *       BucketOwner: "STRING_VALUE",
 *     },
 *     CloudWatchLogs: { // VerifiedAccessLogCloudWatchLogsDestinationOptions
 *       Enabled: true || false, // required
 *       LogGroup: "STRING_VALUE",
 *     },
 *     KinesisDataFirehose: { // VerifiedAccessLogKinesisDataFirehoseDestinationOptions
 *       Enabled: true || false, // required
 *       DeliveryStream: "STRING_VALUE",
 *     },
 *     LogVersion: "STRING_VALUE",
 *     IncludeTrustContext: true || false,
 *   },
 *   DryRun: true || false,
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new ModifyVerifiedAccessInstanceLoggingConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // ModifyVerifiedAccessInstanceLoggingConfigurationResult
 * //   LoggingConfiguration: { // VerifiedAccessInstanceLoggingConfiguration
 * //     VerifiedAccessInstanceId: "STRING_VALUE",
 * //     AccessLogs: { // VerifiedAccessLogs
 * //       S3: { // VerifiedAccessLogS3Destination
 * //         Enabled: true || false,
 * //         DeliveryStatus: { // VerifiedAccessLogDeliveryStatus
 * //           Code: "success" || "failed",
 * //           Message: "STRING_VALUE",
 * //         },
 * //         BucketName: "STRING_VALUE",
 * //         Prefix: "STRING_VALUE",
 * //         BucketOwner: "STRING_VALUE",
 * //       },
 * //       CloudWatchLogs: { // VerifiedAccessLogCloudWatchLogsDestination
 * //         Enabled: true || false,
 * //         DeliveryStatus: {
 * //           Code: "success" || "failed",
 * //           Message: "STRING_VALUE",
 * //         },
 * //         LogGroup: "STRING_VALUE",
 * //       },
 * //       KinesisDataFirehose: { // VerifiedAccessLogKinesisDataFirehoseDestination
 * //         Enabled: true || false,
 * //         DeliveryStatus: {
 * //           Code: "success" || "failed",
 * //           Message: "STRING_VALUE",
 * //         },
 * //         DeliveryStream: "STRING_VALUE",
 * //       },
 * //       LogVersion: "STRING_VALUE",
 * //       IncludeTrustContext: true || false,
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param ModifyVerifiedAccessInstanceLoggingConfigurationCommandInput - {@link ModifyVerifiedAccessInstanceLoggingConfigurationCommandInput}
 * @returns {@link ModifyVerifiedAccessInstanceLoggingConfigurationCommandOutput}
 * @see {@link ModifyVerifiedAccessInstanceLoggingConfigurationCommandInput} for command's `input` shape.
 * @see {@link ModifyVerifiedAccessInstanceLoggingConfigurationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class ModifyVerifiedAccessInstanceLoggingConfigurationCommand extends $Command
  .classBuilder<
    ModifyVerifiedAccessInstanceLoggingConfigurationCommandInput,
    ModifyVerifiedAccessInstanceLoggingConfigurationCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "ModifyVerifiedAccessInstanceLoggingConfiguration", {})
  .n("EC2Client", "ModifyVerifiedAccessInstanceLoggingConfigurationCommand")
  .sc(ModifyVerifiedAccessInstanceLoggingConfiguration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyVerifiedAccessInstanceLoggingConfigurationRequest;
      output: ModifyVerifiedAccessInstanceLoggingConfigurationResult;
    };
    sdk: {
      input: ModifyVerifiedAccessInstanceLoggingConfigurationCommandInput;
      output: ModifyVerifiedAccessInstanceLoggingConfigurationCommandOutput;
    };
  };
}
