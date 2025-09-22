// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IvschatClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IvschatClient";
import { UpdateLoggingConfigurationRequest, UpdateLoggingConfigurationResponse } from "../models/models_0";
import { UpdateLoggingConfiguration } from "../schemas/schemas_1_Logging";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateLoggingConfigurationCommand}.
 */
export interface UpdateLoggingConfigurationCommandInput extends UpdateLoggingConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateLoggingConfigurationCommand}.
 */
export interface UpdateLoggingConfigurationCommandOutput extends UpdateLoggingConfigurationResponse, __MetadataBearer {}

/**
 * <p>Updates a specified logging configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IvschatClient, UpdateLoggingConfigurationCommand } from "@aws-sdk/client-ivschat"; // ES Modules import
 * // const { IvschatClient, UpdateLoggingConfigurationCommand } = require("@aws-sdk/client-ivschat"); // CommonJS import
 * // import type { IvschatClientConfig } from "@aws-sdk/client-ivschat";
 * const config = {}; // type is IvschatClientConfig
 * const client = new IvschatClient(config);
 * const input = { // UpdateLoggingConfigurationRequest
 *   identifier: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   destinationConfiguration: { // DestinationConfiguration Union: only one key present
 *     s3: { // S3DestinationConfiguration
 *       bucketName: "STRING_VALUE", // required
 *     },
 *     cloudWatchLogs: { // CloudWatchLogsDestinationConfiguration
 *       logGroupName: "STRING_VALUE", // required
 *     },
 *     firehose: { // FirehoseDestinationConfiguration
 *       deliveryStreamName: "STRING_VALUE", // required
 *     },
 *   },
 * };
 * const command = new UpdateLoggingConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateLoggingConfigurationResponse
 * //   arn: "STRING_VALUE",
 * //   id: "STRING_VALUE",
 * //   createTime: new Date("TIMESTAMP"),
 * //   updateTime: new Date("TIMESTAMP"),
 * //   name: "STRING_VALUE",
 * //   destinationConfiguration: { // DestinationConfiguration Union: only one key present
 * //     s3: { // S3DestinationConfiguration
 * //       bucketName: "STRING_VALUE", // required
 * //     },
 * //     cloudWatchLogs: { // CloudWatchLogsDestinationConfiguration
 * //       logGroupName: "STRING_VALUE", // required
 * //     },
 * //     firehose: { // FirehoseDestinationConfiguration
 * //       deliveryStreamName: "STRING_VALUE", // required
 * //     },
 * //   },
 * //   state: "STRING_VALUE",
 * //   tags: { // Tags
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateLoggingConfigurationCommandInput - {@link UpdateLoggingConfigurationCommandInput}
 * @returns {@link UpdateLoggingConfigurationCommandOutput}
 * @see {@link UpdateLoggingConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateLoggingConfigurationCommandOutput} for command's `response` shape.
 * @see {@link IvschatClientResolvedConfig | config} for IvschatClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p/>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p/>
 *
 * @throws {@link PendingVerification} (client fault)
 *  <p/>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p/>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p/>
 *
 * @throws {@link IvschatServiceException}
 * <p>Base exception class for all service exceptions from Ivschat service.</p>
 *
 *
 * @public
 */
export class UpdateLoggingConfigurationCommand extends $Command
  .classBuilder<
    UpdateLoggingConfigurationCommandInput,
    UpdateLoggingConfigurationCommandOutput,
    IvschatClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IvschatClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonInteractiveVideoServiceChat", "UpdateLoggingConfiguration", {})
  .n("IvschatClient", "UpdateLoggingConfigurationCommand")
  .sc(UpdateLoggingConfiguration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateLoggingConfigurationRequest;
      output: UpdateLoggingConfigurationResponse;
    };
    sdk: {
      input: UpdateLoggingConfigurationCommandInput;
      output: UpdateLoggingConfigurationCommandOutput;
    };
  };
}
