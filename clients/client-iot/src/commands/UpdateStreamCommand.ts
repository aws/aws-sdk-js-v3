// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { UpdateStreamRequest, UpdateStreamResponse } from "../models/models_2";
import { de_UpdateStreamCommand, se_UpdateStreamCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateStreamCommand}.
 */
export interface UpdateStreamCommandInput extends UpdateStreamRequest {}
/**
 * @public
 *
 * The output of {@link UpdateStreamCommand}.
 */
export interface UpdateStreamCommandOutput extends UpdateStreamResponse, __MetadataBearer {}

/**
 * <p>Updates an existing stream. The stream version will be incremented by one.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateStream</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, UpdateStreamCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, UpdateStreamCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // UpdateStreamRequest
 *   streamId: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   files: [ // StreamFiles
 *     { // StreamFile
 *       fileId: Number("int"),
 *       s3Location: { // S3Location
 *         bucket: "STRING_VALUE",
 *         key: "STRING_VALUE",
 *         version: "STRING_VALUE",
 *       },
 *     },
 *   ],
 *   roleArn: "STRING_VALUE",
 * };
 * const command = new UpdateStreamCommand(input);
 * const response = await client.send(command);
 * // { // UpdateStreamResponse
 * //   streamId: "STRING_VALUE",
 * //   streamArn: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   streamVersion: Number("int"),
 * // };
 *
 * ```
 *
 * @param UpdateStreamCommandInput - {@link UpdateStreamCommandInput}
 * @returns {@link UpdateStreamCommandOutput}
 * @see {@link UpdateStreamCommandInput} for command's `input` shape.
 * @see {@link UpdateStreamCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit has been exceeded.</p>
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
export class UpdateStreamCommand extends $Command
  .classBuilder<
    UpdateStreamCommandInput,
    UpdateStreamCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIotService", "UpdateStream", {})
  .n("IoTClient", "UpdateStreamCommand")
  .f(void 0, void 0)
  .ser(se_UpdateStreamCommand)
  .de(de_UpdateStreamCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateStreamRequest;
      output: UpdateStreamResponse;
    };
    sdk: {
      input: UpdateStreamCommandInput;
      output: UpdateStreamCommandOutput;
    };
  };
}
