// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ListStreamsRequest, ListStreamsResponse } from "../models/models_2";
import { de_ListStreamsCommand, se_ListStreamsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListStreamsCommand}.
 */
export interface ListStreamsCommandInput extends ListStreamsRequest {}
/**
 * @public
 *
 * The output of {@link ListStreamsCommand}.
 */
export interface ListStreamsCommandOutput extends ListStreamsResponse, __MetadataBearer {}

/**
 * <p>Lists all of the streams in your Amazon Web Services account.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListStreams</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListStreamsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListStreamsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // ListStreamsRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   ascendingOrder: true || false,
 * };
 * const command = new ListStreamsCommand(input);
 * const response = await client.send(command);
 * // { // ListStreamsResponse
 * //   streams: [ // StreamsSummary
 * //     { // StreamSummary
 * //       streamId: "STRING_VALUE",
 * //       streamArn: "STRING_VALUE",
 * //       streamVersion: Number("int"),
 * //       description: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListStreamsCommandInput - {@link ListStreamsCommandInput}
 * @returns {@link ListStreamsCommandOutput}
 * @see {@link ListStreamsCommandInput} for command's `input` shape.
 * @see {@link ListStreamsCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
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
 * @public
 */
export class ListStreamsCommand extends $Command
  .classBuilder<
    ListStreamsCommandInput,
    ListStreamsCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIotService", "ListStreams", {})
  .n("IoTClient", "ListStreamsCommand")
  .f(void 0, void 0)
  .ser(se_ListStreamsCommand)
  .de(de_ListStreamsCommand)
  .build() {}
