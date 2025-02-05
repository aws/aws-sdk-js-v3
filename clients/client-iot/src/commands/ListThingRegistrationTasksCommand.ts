// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ListThingRegistrationTasksRequest, ListThingRegistrationTasksResponse } from "../models/models_2";
import { de_ListThingRegistrationTasksCommand, se_ListThingRegistrationTasksCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListThingRegistrationTasksCommand}.
 */
export interface ListThingRegistrationTasksCommandInput extends ListThingRegistrationTasksRequest {}
/**
 * @public
 *
 * The output of {@link ListThingRegistrationTasksCommand}.
 */
export interface ListThingRegistrationTasksCommandOutput extends ListThingRegistrationTasksResponse, __MetadataBearer {}

/**
 * <p>List bulk thing provisioning tasks.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListThingRegistrationTasks</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListThingRegistrationTasksCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListThingRegistrationTasksCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new IoTClient(config);
 * const input = { // ListThingRegistrationTasksRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   status: "InProgress" || "Completed" || "Failed" || "Cancelled" || "Cancelling",
 * };
 * const command = new ListThingRegistrationTasksCommand(input);
 * const response = await client.send(command);
 * // { // ListThingRegistrationTasksResponse
 * //   taskIds: [ // TaskIdList
 * //     "STRING_VALUE",
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListThingRegistrationTasksCommandInput - {@link ListThingRegistrationTasksCommandInput}
 * @returns {@link ListThingRegistrationTasksCommandOutput}
 * @see {@link ListThingRegistrationTasksCommandInput} for command's `input` shape.
 * @see {@link ListThingRegistrationTasksCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
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
export class ListThingRegistrationTasksCommand extends $Command
  .classBuilder<
    ListThingRegistrationTasksCommandInput,
    ListThingRegistrationTasksCommandOutput,
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
  .s("AWSIotService", "ListThingRegistrationTasks", {})
  .n("IoTClient", "ListThingRegistrationTasksCommand")
  .f(void 0, void 0)
  .ser(se_ListThingRegistrationTasksCommand)
  .de(de_ListThingRegistrationTasksCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListThingRegistrationTasksRequest;
      output: ListThingRegistrationTasksResponse;
    };
    sdk: {
      input: ListThingRegistrationTasksCommandInput;
      output: ListThingRegistrationTasksCommandOutput;
    };
  };
}
