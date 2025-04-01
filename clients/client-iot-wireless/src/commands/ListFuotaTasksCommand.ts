// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { ListFuotaTasksRequest, ListFuotaTasksResponse } from "../models/models_0";
import { de_ListFuotaTasksCommand, se_ListFuotaTasksCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListFuotaTasksCommand}.
 */
export interface ListFuotaTasksCommandInput extends ListFuotaTasksRequest {}
/**
 * @public
 *
 * The output of {@link ListFuotaTasksCommand}.
 */
export interface ListFuotaTasksCommandOutput extends ListFuotaTasksResponse, __MetadataBearer {}

/**
 * <p>Lists the FUOTA tasks registered to your AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, ListFuotaTasksCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, ListFuotaTasksCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const input = { // ListFuotaTasksRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListFuotaTasksCommand(input);
 * const response = await client.send(command);
 * // { // ListFuotaTasksResponse
 * //   NextToken: "STRING_VALUE",
 * //   FuotaTaskList: [ // FuotaTaskList
 * //     { // FuotaTask
 * //       Id: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListFuotaTasksCommandInput - {@link ListFuotaTasksCommandInput}
 * @returns {@link ListFuotaTasksCommandOutput}
 * @see {@link ListFuotaTasksCommandInput} for command's `input` shape.
 * @see {@link ListFuotaTasksCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for IoTWirelessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have permission to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred while processing a request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because it exceeded the allowed API request rate.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input did not meet the specified constraints.</p>
 *
 * @throws {@link IoTWirelessServiceException}
 * <p>Base exception class for all service exceptions from IoTWireless service.</p>
 *
 *
 * @public
 */
export class ListFuotaTasksCommand extends $Command
  .classBuilder<
    ListFuotaTasksCommandInput,
    ListFuotaTasksCommandOutput,
    IoTWirelessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTWirelessClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("iotwireless", "ListFuotaTasks", {})
  .n("IoTWirelessClient", "ListFuotaTasksCommand")
  .f(void 0, void 0)
  .ser(se_ListFuotaTasksCommand)
  .de(de_ListFuotaTasksCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListFuotaTasksRequest;
      output: ListFuotaTasksResponse;
    };
    sdk: {
      input: ListFuotaTasksCommandInput;
      output: ListFuotaTasksCommandOutput;
    };
  };
}
