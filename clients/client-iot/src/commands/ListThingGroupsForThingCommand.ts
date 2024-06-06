// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ListThingGroupsForThingRequest, ListThingGroupsForThingResponse } from "../models/models_2";
import { de_ListThingGroupsForThingCommand, se_ListThingGroupsForThingCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListThingGroupsForThingCommand}.
 */
export interface ListThingGroupsForThingCommandInput extends ListThingGroupsForThingRequest {}
/**
 * @public
 *
 * The output of {@link ListThingGroupsForThingCommand}.
 */
export interface ListThingGroupsForThingCommandOutput extends ListThingGroupsForThingResponse, __MetadataBearer {}

/**
 * <p>List the thing groups to which the specified thing belongs.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListThingGroupsForThing</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListThingGroupsForThingCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListThingGroupsForThingCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // ListThingGroupsForThingRequest
 *   thingName: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListThingGroupsForThingCommand(input);
 * const response = await client.send(command);
 * // { // ListThingGroupsForThingResponse
 * //   thingGroups: [ // ThingGroupNameAndArnList
 * //     { // GroupNameAndArn
 * //       groupName: "STRING_VALUE",
 * //       groupArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListThingGroupsForThingCommandInput - {@link ListThingGroupsForThingCommandInput}
 * @returns {@link ListThingGroupsForThingCommandOutput}
 * @see {@link ListThingGroupsForThingCommandInput} for command's `input` shape.
 * @see {@link ListThingGroupsForThingCommandOutput} for command's `response` shape.
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
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 * @public
 */
export class ListThingGroupsForThingCommand extends $Command
  .classBuilder<
    ListThingGroupsForThingCommandInput,
    ListThingGroupsForThingCommandOutput,
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
  .s("AWSIotService", "ListThingGroupsForThing", {})
  .n("IoTClient", "ListThingGroupsForThingCommand")
  .f(void 0, void 0)
  .ser(se_ListThingGroupsForThingCommand)
  .de(de_ListThingGroupsForThingCommand)
  .build() {}
