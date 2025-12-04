// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IvschatClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IvschatClient";
import type { GetLoggingConfigurationRequest, GetLoggingConfigurationResponse } from "../models/models_0";
import { GetLoggingConfiguration } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetLoggingConfigurationCommand}.
 */
export interface GetLoggingConfigurationCommandInput extends GetLoggingConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetLoggingConfigurationCommand}.
 */
export interface GetLoggingConfigurationCommandOutput extends GetLoggingConfigurationResponse, __MetadataBearer {}

/**
 * <p>Gets the specified logging configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IvschatClient, GetLoggingConfigurationCommand } from "@aws-sdk/client-ivschat"; // ES Modules import
 * // const { IvschatClient, GetLoggingConfigurationCommand } = require("@aws-sdk/client-ivschat"); // CommonJS import
 * // import type { IvschatClientConfig } from "@aws-sdk/client-ivschat";
 * const config = {}; // type is IvschatClientConfig
 * const client = new IvschatClient(config);
 * const input = { // GetLoggingConfigurationRequest
 *   identifier: "STRING_VALUE", // required
 * };
 * const command = new GetLoggingConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetLoggingConfigurationResponse
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
 * @param GetLoggingConfigurationCommandInput - {@link GetLoggingConfigurationCommandInput}
 * @returns {@link GetLoggingConfigurationCommandOutput}
 * @see {@link GetLoggingConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetLoggingConfigurationCommandOutput} for command's `response` shape.
 * @see {@link IvschatClientResolvedConfig | config} for IvschatClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
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
export class GetLoggingConfigurationCommand extends $Command
  .classBuilder<
    GetLoggingConfigurationCommandInput,
    GetLoggingConfigurationCommandOutput,
    IvschatClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IvschatClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonInteractiveVideoServiceChat", "GetLoggingConfiguration", {})
  .n("IvschatClient", "GetLoggingConfigurationCommand")
  .sc(GetLoggingConfiguration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetLoggingConfigurationRequest;
      output: GetLoggingConfigurationResponse;
    };
    sdk: {
      input: GetLoggingConfigurationCommandInput;
      output: GetLoggingConfigurationCommandOutput;
    };
  };
}
