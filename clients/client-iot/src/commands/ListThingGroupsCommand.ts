// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import type { ListThingGroupsRequest, ListThingGroupsResponse } from "../models/models_1";
import { ListThingGroups$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListThingGroupsCommand}.
 */
export interface ListThingGroupsCommandInput extends ListThingGroupsRequest {}
/**
 * @public
 *
 * The output of {@link ListThingGroupsCommand}.
 */
export interface ListThingGroupsCommandOutput extends ListThingGroupsResponse, __MetadataBearer {}

/**
 * <p>List the thing groups in your account.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListThingGroups</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListThingGroupsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListThingGroupsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // ListThingGroupsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   parentGroup: "STRING_VALUE",
 *   namePrefixFilter: "STRING_VALUE",
 *   recursive: true || false,
 * };
 * const command = new ListThingGroupsCommand(input);
 * const response = await client.send(command);
 * // { // ListThingGroupsResponse
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
 * @param ListThingGroupsCommandInput - {@link ListThingGroupsCommandInput}
 * @returns {@link ListThingGroupsCommandOutput}
 * @see {@link ListThingGroupsCommandInput} for command's `input` shape.
 * @see {@link ListThingGroupsCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class ListThingGroupsCommand extends $Command
  .classBuilder<
    ListThingGroupsCommandInput,
    ListThingGroupsCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIotService", "ListThingGroups", {})
  .n("IoTClient", "ListThingGroupsCommand")
  .sc(ListThingGroups$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListThingGroupsRequest;
      output: ListThingGroupsResponse;
    };
    sdk: {
      input: ListThingGroupsCommandInput;
      output: ListThingGroupsCommandOutput;
    };
  };
}
