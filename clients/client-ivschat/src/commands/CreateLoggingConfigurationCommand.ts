// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IvschatClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IvschatClient";
import { CreateLoggingConfigurationRequest, CreateLoggingConfigurationResponse } from "../models/models_0";
import { de_CreateLoggingConfigurationCommand, se_CreateLoggingConfigurationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateLoggingConfigurationCommand}.
 */
export interface CreateLoggingConfigurationCommandInput extends CreateLoggingConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link CreateLoggingConfigurationCommand}.
 */
export interface CreateLoggingConfigurationCommandOutput extends CreateLoggingConfigurationResponse, __MetadataBearer {}

/**
 * <p>Creates a logging configuration that allows clients to store and record sent
 *          messages.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IvschatClient, CreateLoggingConfigurationCommand } from "@aws-sdk/client-ivschat"; // ES Modules import
 * // const { IvschatClient, CreateLoggingConfigurationCommand } = require("@aws-sdk/client-ivschat"); // CommonJS import
 * const client = new IvschatClient(config);
 * const input = { // CreateLoggingConfigurationRequest
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
 *   tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateLoggingConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // CreateLoggingConfigurationResponse
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
 * @param CreateLoggingConfigurationCommandInput - {@link CreateLoggingConfigurationCommandInput}
 * @returns {@link CreateLoggingConfigurationCommandOutput}
 * @see {@link CreateLoggingConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateLoggingConfigurationCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p/>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p/>
 *
 * @throws {@link IvschatServiceException}
 * <p>Base exception class for all service exceptions from Ivschat service.</p>
 *
 * @public
 */
export class CreateLoggingConfigurationCommand extends $Command
  .classBuilder<
    CreateLoggingConfigurationCommandInput,
    CreateLoggingConfigurationCommandOutput,
    IvschatClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: IvschatClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonInteractiveVideoServiceChat", "CreateLoggingConfiguration", {})
  .n("IvschatClient", "CreateLoggingConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_CreateLoggingConfigurationCommand)
  .de(de_CreateLoggingConfigurationCommand)
  .build() {}
