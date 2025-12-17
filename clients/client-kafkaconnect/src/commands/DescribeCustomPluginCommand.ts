// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { KafkaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaConnectClient";
import type { DescribeCustomPluginRequest, DescribeCustomPluginResponse } from "../models/models_0";
import { DescribeCustomPlugin$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeCustomPluginCommand}.
 */
export interface DescribeCustomPluginCommandInput extends DescribeCustomPluginRequest {}
/**
 * @public
 *
 * The output of {@link DescribeCustomPluginCommand}.
 */
export interface DescribeCustomPluginCommandOutput extends DescribeCustomPluginResponse, __MetadataBearer {}

/**
 * <p>A summary description of the custom plugin.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaConnectClient, DescribeCustomPluginCommand } from "@aws-sdk/client-kafkaconnect"; // ES Modules import
 * // const { KafkaConnectClient, DescribeCustomPluginCommand } = require("@aws-sdk/client-kafkaconnect"); // CommonJS import
 * // import type { KafkaConnectClientConfig } from "@aws-sdk/client-kafkaconnect";
 * const config = {}; // type is KafkaConnectClientConfig
 * const client = new KafkaConnectClient(config);
 * const input = { // DescribeCustomPluginRequest
 *   customPluginArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeCustomPluginCommand(input);
 * const response = await client.send(command);
 * // { // DescribeCustomPluginResponse
 * //   creationTime: new Date("TIMESTAMP"),
 * //   customPluginArn: "STRING_VALUE",
 * //   customPluginState: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   latestRevision: { // CustomPluginRevisionSummary
 * //     contentType: "STRING_VALUE",
 * //     creationTime: new Date("TIMESTAMP"),
 * //     description: "STRING_VALUE",
 * //     fileDescription: { // CustomPluginFileDescription
 * //       fileMd5: "STRING_VALUE",
 * //       fileSize: Number("long"),
 * //     },
 * //     location: { // CustomPluginLocationDescription
 * //       s3Location: { // S3LocationDescription
 * //         bucketArn: "STRING_VALUE",
 * //         fileKey: "STRING_VALUE",
 * //         objectVersion: "STRING_VALUE",
 * //       },
 * //     },
 * //     revision: Number("long"),
 * //   },
 * //   name: "STRING_VALUE",
 * //   stateDescription: { // StateDescription
 * //     code: "STRING_VALUE",
 * //     message: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeCustomPluginCommandInput - {@link DescribeCustomPluginCommandInput}
 * @returns {@link DescribeCustomPluginCommandOutput}
 * @see {@link DescribeCustomPluginCommandInput} for command's `input` shape.
 * @see {@link DescribeCustomPluginCommandOutput} for command's `response` shape.
 * @see {@link KafkaConnectClientResolvedConfig | config} for KafkaConnectClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>HTTP Status Code 400: Bad request due to incorrect input. Correct your request and then retry it.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>HTTP Status Code 403: Access forbidden. Correct your credentials and then retry your request.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>HTTP Status Code 500: Unexpected internal server error. Retrying your request might resolve the issue.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>HTTP Status Code 404: Resource not found due to incorrect input. Correct your request and then retry it.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>HTTP Status Code 503: Service Unavailable. Retrying your request in some time might resolve the issue.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>HTTP Status Code 429: Limit exceeded. Resource limit reached.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>HTTP Status Code 401: Unauthorized request. The provided credentials couldn't be validated.</p>
 *
 * @throws {@link KafkaConnectServiceException}
 * <p>Base exception class for all service exceptions from KafkaConnect service.</p>
 *
 *
 * @public
 */
export class DescribeCustomPluginCommand extends $Command
  .classBuilder<
    DescribeCustomPluginCommandInput,
    DescribeCustomPluginCommandOutput,
    KafkaConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: KafkaConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("KafkaConnect", "DescribeCustomPlugin", {})
  .n("KafkaConnectClient", "DescribeCustomPluginCommand")
  .sc(DescribeCustomPlugin$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeCustomPluginRequest;
      output: DescribeCustomPluginResponse;
    };
    sdk: {
      input: DescribeCustomPluginCommandInput;
      output: DescribeCustomPluginCommandOutput;
    };
  };
}
