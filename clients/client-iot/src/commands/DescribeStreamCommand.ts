// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DescribeStreamRequest, DescribeStreamResponse } from "../models/models_1";
import { DescribeStream } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeStreamCommand}.
 */
export interface DescribeStreamCommandInput extends DescribeStreamRequest {}
/**
 * @public
 *
 * The output of {@link DescribeStreamCommand}.
 */
export interface DescribeStreamCommandOutput extends DescribeStreamResponse, __MetadataBearer {}

/**
 * <p>Gets information about a stream.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeStream</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeStreamCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeStreamCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // DescribeStreamRequest
 *   streamId: "STRING_VALUE", // required
 * };
 * const command = new DescribeStreamCommand(input);
 * const response = await client.send(command);
 * // { // DescribeStreamResponse
 * //   streamInfo: { // StreamInfo
 * //     streamId: "STRING_VALUE",
 * //     streamArn: "STRING_VALUE",
 * //     streamVersion: Number("int"),
 * //     description: "STRING_VALUE",
 * //     files: [ // StreamFiles
 * //       { // StreamFile
 * //         fileId: Number("int"),
 * //         s3Location: { // S3Location
 * //           bucket: "STRING_VALUE",
 * //           key: "STRING_VALUE",
 * //           version: "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //     createdAt: new Date("TIMESTAMP"),
 * //     lastUpdatedAt: new Date("TIMESTAMP"),
 * //     roleArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeStreamCommandInput - {@link DescribeStreamCommandInput}
 * @returns {@link DescribeStreamCommandOutput}
 * @see {@link DescribeStreamCommandInput} for command's `input` shape.
 * @see {@link DescribeStreamCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You are not authorized to perform this operation.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 *
 * @public
 */
export class DescribeStreamCommand extends $Command
  .classBuilder<
    DescribeStreamCommandInput,
    DescribeStreamCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIotService", "DescribeStream", {})
  .n("IoTClient", "DescribeStreamCommand")
  .sc(DescribeStream)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeStreamRequest;
      output: DescribeStreamResponse;
    };
    sdk: {
      input: DescribeStreamCommandInput;
      output: DescribeStreamCommandOutput;
    };
  };
}
