// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IvschatClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IvschatClient";
import type { ListLoggingConfigurationsRequest, ListLoggingConfigurationsResponse } from "../models/models_0";
import { ListLoggingConfigurations } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListLoggingConfigurationsCommand}.
 */
export interface ListLoggingConfigurationsCommandInput extends ListLoggingConfigurationsRequest {}
/**
 * @public
 *
 * The output of {@link ListLoggingConfigurationsCommand}.
 */
export interface ListLoggingConfigurationsCommandOutput extends ListLoggingConfigurationsResponse, __MetadataBearer {}

/**
 * <p>Gets summary information about all your logging configurations in the AWS region where
 *          the API request is processed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IvschatClient, ListLoggingConfigurationsCommand } from "@aws-sdk/client-ivschat"; // ES Modules import
 * // const { IvschatClient, ListLoggingConfigurationsCommand } = require("@aws-sdk/client-ivschat"); // CommonJS import
 * // import type { IvschatClientConfig } from "@aws-sdk/client-ivschat";
 * const config = {}; // type is IvschatClientConfig
 * const client = new IvschatClient(config);
 * const input = { // ListLoggingConfigurationsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListLoggingConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // ListLoggingConfigurationsResponse
 * //   loggingConfigurations: [ // LoggingConfigurationList // required
 * //     { // LoggingConfigurationSummary
 * //       arn: "STRING_VALUE",
 * //       id: "STRING_VALUE",
 * //       createTime: new Date("TIMESTAMP"),
 * //       updateTime: new Date("TIMESTAMP"),
 * //       name: "STRING_VALUE",
 * //       destinationConfiguration: { // DestinationConfiguration Union: only one key present
 * //         s3: { // S3DestinationConfiguration
 * //           bucketName: "STRING_VALUE", // required
 * //         },
 * //         cloudWatchLogs: { // CloudWatchLogsDestinationConfiguration
 * //           logGroupName: "STRING_VALUE", // required
 * //         },
 * //         firehose: { // FirehoseDestinationConfiguration
 * //           deliveryStreamName: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       state: "STRING_VALUE",
 * //       tags: { // Tags
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListLoggingConfigurationsCommandInput - {@link ListLoggingConfigurationsCommandInput}
 * @returns {@link ListLoggingConfigurationsCommandOutput}
 * @see {@link ListLoggingConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListLoggingConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link IvschatClientResolvedConfig | config} for IvschatClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
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
export class ListLoggingConfigurationsCommand extends $Command
  .classBuilder<
    ListLoggingConfigurationsCommandInput,
    ListLoggingConfigurationsCommandOutput,
    IvschatClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IvschatClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonInteractiveVideoServiceChat", "ListLoggingConfigurations", {})
  .n("IvschatClient", "ListLoggingConfigurationsCommand")
  .sc(ListLoggingConfigurations)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListLoggingConfigurationsRequest;
      output: ListLoggingConfigurationsResponse;
    };
    sdk: {
      input: ListLoggingConfigurationsCommandInput;
      output: ListLoggingConfigurationsCommandOutput;
    };
  };
}
