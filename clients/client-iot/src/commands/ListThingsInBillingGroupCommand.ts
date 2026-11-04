// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListThingsInBillingGroupRequest, ListThingsInBillingGroupResponse } from "../models/models_2";
import { ListThingsInBillingGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListThingsInBillingGroupCommand}.
 */
export interface ListThingsInBillingGroupCommandInput extends ListThingsInBillingGroupRequest {}
/**
 * @public
 *
 * The output of {@link ListThingsInBillingGroupCommand}.
 */
export interface ListThingsInBillingGroupCommandOutput extends ListThingsInBillingGroupResponse, __MetadataBearer {}

/**
 * Lists the things you have added to the given billing group.
 *
 * Requires permission to access the [ListThingsInBillingGroup](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListThingsInBillingGroupCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListThingsInBillingGroupCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // ListThingsInBillingGroupRequest
 *   billingGroupName: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListThingsInBillingGroupCommand(input);
 * const response = await client.send(command);
 * // { // ListThingsInBillingGroupResponse
 * //   things: [ // ThingNameList
 * //     "STRING_VALUE",
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListThingsInBillingGroupCommandInput - {@link ListThingsInBillingGroupCommandInput}
 * @returns {@link ListThingsInBillingGroupCommandOutput}
 * @see {@link ListThingsInBillingGroupCommandInput} for command's `input` shape.
 * @see {@link ListThingsInBillingGroupCommandOutput} for command's `response` shape.
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
export class ListThingsInBillingGroupCommand extends command<ListThingsInBillingGroupCommandInput, ListThingsInBillingGroupCommandOutput>(
  _ep0,
  _mw0,
  "ListThingsInBillingGroup",
  ListThingsInBillingGroup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListThingsInBillingGroupRequest;
      output: ListThingsInBillingGroupResponse;
    };
    sdk: {
      input: ListThingsInBillingGroupCommandInput;
      output: ListThingsInBillingGroupCommandOutput;
    };
  };
}
