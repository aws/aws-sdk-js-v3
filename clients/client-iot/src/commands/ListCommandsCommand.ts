// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ListCommandsRequest, ListCommandsResponse } from "../models/models_1";
import { de_ListCommandsCommand, se_ListCommandsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCommandsCommand}.
 */
export interface ListCommandsCommandInput extends ListCommandsRequest {}
/**
 * @public
 *
 * The output of {@link ListCommandsCommand}.
 */
export interface ListCommandsCommandOutput extends ListCommandsResponse, __MetadataBearer {}

/**
 * <p>List all commands in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListCommandsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListCommandsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new IoTClient(config);
 * const input = { // ListCommandsRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   namespace: "AWS-IoT" || "AWS-IoT-FleetWise",
 *   commandParameterName: "STRING_VALUE",
 *   sortOrder: "ASCENDING" || "DESCENDING",
 * };
 * const command = new ListCommandsCommand(input);
 * const response = await client.send(command);
 * // { // ListCommandsResponse
 * //   commands: [ // CommandSummaryList
 * //     { // CommandSummary
 * //       commandArn: "STRING_VALUE",
 * //       commandId: "STRING_VALUE",
 * //       displayName: "STRING_VALUE",
 * //       deprecated: true || false,
 * //       createdAt: new Date("TIMESTAMP"),
 * //       lastUpdatedAt: new Date("TIMESTAMP"),
 * //       pendingDeletion: true || false,
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCommandsCommandInput - {@link ListCommandsCommandInput}
 * @returns {@link ListCommandsCommandOutput}
 * @see {@link ListCommandsCommandInput} for command's `input` shape.
 * @see {@link ListCommandsCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal error from the service that indicates an unexpected error or that the service
 *             is unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 * @public
 */
export class ListCommandsCommand extends $Command
  .classBuilder<
    ListCommandsCommandInput,
    ListCommandsCommandOutput,
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
  .s("AWSIotService", "ListCommands", {})
  .n("IoTClient", "ListCommandsCommand")
  .f(void 0, void 0)
  .ser(se_ListCommandsCommand)
  .de(de_ListCommandsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCommandsRequest;
      output: ListCommandsResponse;
    };
    sdk: {
      input: ListCommandsCommandInput;
      output: ListCommandsCommandOutput;
    };
  };
}
