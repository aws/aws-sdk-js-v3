// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ListOTAUpdatesRequest, ListOTAUpdatesResponse } from "../models/models_2";
import { de_ListOTAUpdatesCommand, se_ListOTAUpdatesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListOTAUpdatesCommand}.
 */
export interface ListOTAUpdatesCommandInput extends ListOTAUpdatesRequest {}
/**
 * @public
 *
 * The output of {@link ListOTAUpdatesCommand}.
 */
export interface ListOTAUpdatesCommandOutput extends ListOTAUpdatesResponse, __MetadataBearer {}

/**
 * <p>Lists OTA updates.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListOTAUpdates</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListOTAUpdatesCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListOTAUpdatesCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new IoTClient(config);
 * const input = { // ListOTAUpdatesRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   otaUpdateStatus: "CREATE_PENDING" || "CREATE_IN_PROGRESS" || "CREATE_COMPLETE" || "CREATE_FAILED" || "DELETE_IN_PROGRESS" || "DELETE_FAILED",
 * };
 * const command = new ListOTAUpdatesCommand(input);
 * const response = await client.send(command);
 * // { // ListOTAUpdatesResponse
 * //   otaUpdates: [ // OTAUpdatesSummary
 * //     { // OTAUpdateSummary
 * //       otaUpdateId: "STRING_VALUE",
 * //       otaUpdateArn: "STRING_VALUE",
 * //       creationDate: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListOTAUpdatesCommandInput - {@link ListOTAUpdatesCommandInput}
 * @returns {@link ListOTAUpdatesCommandOutput}
 * @see {@link ListOTAUpdatesCommandInput} for command's `input` shape.
 * @see {@link ListOTAUpdatesCommandOutput} for command's `response` shape.
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
export class ListOTAUpdatesCommand extends $Command
  .classBuilder<
    ListOTAUpdatesCommandInput,
    ListOTAUpdatesCommandOutput,
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
  .s("AWSIotService", "ListOTAUpdates", {})
  .n("IoTClient", "ListOTAUpdatesCommand")
  .f(void 0, void 0)
  .ser(se_ListOTAUpdatesCommand)
  .de(de_ListOTAUpdatesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListOTAUpdatesRequest;
      output: ListOTAUpdatesResponse;
    };
    sdk: {
      input: ListOTAUpdatesCommandInput;
      output: ListOTAUpdatesCommandOutput;
    };
  };
}
