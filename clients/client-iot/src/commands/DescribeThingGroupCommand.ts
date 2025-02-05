// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DescribeThingGroupRequest, DescribeThingGroupResponse } from "../models/models_1";
import { de_DescribeThingGroupCommand, se_DescribeThingGroupCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Describe a thing group.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeThingGroup</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeThingGroupCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeThingGroupCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
export class DescribeThingGroupCommand extends $Command
  .classBuilder<
    DescribeThingGroupCommandInput,
    DescribeThingGroupCommandOutput,
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
  .s("AWSIotService", "DescribeThingGroup", {})
  .n("IoTClient", "DescribeThingGroupCommand")
  .f(void 0, void 0)
  .ser(se_DescribeThingGroupCommand)
  .de(de_DescribeThingGroupCommand)
  .build() {
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
