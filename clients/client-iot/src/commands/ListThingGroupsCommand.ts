// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListThingGroupsRequest, ListThingGroupsResponse } from "../models/models_2";
import { ListThingGroups$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * List the thing groups in your account.
 *
 * Requires permission to access the [ListThingGroups](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
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
 *
 * An unexpected error has occurred.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The rate exceeds the limit.
 *
 * @throws {@link IoTServiceException}
 *
 * Base exception class for all service exceptions from IoT service.
 *
 * @public
 */
export class ListThingGroupsCommand extends command<ListThingGroupsCommandInput, ListThingGroupsCommandOutput>(
  _ep0,
  _mw0,
  "ListThingGroups",
  ListThingGroups$
) {
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
