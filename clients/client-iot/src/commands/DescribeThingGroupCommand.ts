// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeThingGroupRequest, DescribeThingGroupResponse } from "../models/models_1";
import { DescribeThingGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeThingGroupCommand}.
 */
export interface DescribeThingGroupCommandInput extends DescribeThingGroupRequest {}
/**
 * @public
 *
 * The output of {@link DescribeThingGroupCommand}.
 */
export interface DescribeThingGroupCommandOutput extends DescribeThingGroupResponse, __MetadataBearer {}

/**
 * Describe a thing group.
 *
 * Requires permission to access the [DescribeThingGroup](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeThingGroupCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeThingGroupCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // DescribeThingGroupRequest
 *   thingGroupName: "STRING_VALUE", // required
 * };
 * const command = new DescribeThingGroupCommand(input);
 * const response = await client.send(command);
 * // { // DescribeThingGroupResponse
 * //   thingGroupName: "STRING_VALUE",
 * //   thingGroupId: "STRING_VALUE",
 * //   thingGroupArn: "STRING_VALUE",
 * //   version: Number("long"),
 * //   thingGroupProperties: { // ThingGroupProperties
 * //     thingGroupDescription: "STRING_VALUE",
 * //     attributePayload: { // AttributePayload
 * //       attributes: { // Attributes
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       merge: true || false,
 * //     },
 * //   },
 * //   thingGroupMetadata: { // ThingGroupMetadata
 * //     parentGroupName: "STRING_VALUE",
 * //     rootToParentThingGroups: [ // ThingGroupNameAndArnList
 * //       { // GroupNameAndArn
 * //         groupName: "STRING_VALUE",
 * //         groupArn: "STRING_VALUE",
 * //       },
 * //     ],
 * //     creationDate: new Date("TIMESTAMP"),
 * //   },
 * //   indexName: "STRING_VALUE",
 * //   queryString: "STRING_VALUE",
 * //   queryVersion: "STRING_VALUE",
 * //   status: "ACTIVE" || "BUILDING" || "REBUILDING",
 * // };
 *
 * ```
 *
 * @param DescribeThingGroupCommandInput - {@link DescribeThingGroupCommandInput}
 * @returns {@link DescribeThingGroupCommandOutput}
 * @see {@link DescribeThingGroupCommandInput} for command's `input` shape.
 * @see {@link DescribeThingGroupCommandOutput} for command's `response` shape.
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
export class DescribeThingGroupCommand extends command<DescribeThingGroupCommandInput, DescribeThingGroupCommandOutput>(
  _ep0,
  _mw0,
  "DescribeThingGroup",
  DescribeThingGroup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeThingGroupRequest;
      output: DescribeThingGroupResponse;
    };
    sdk: {
      input: DescribeThingGroupCommandInput;
      output: DescribeThingGroupCommandOutput;
    };
  };
}
