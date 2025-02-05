// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListDevicePoolsRequest, ListDevicePoolsResult } from "../models/models_0";
import { de_ListDevicePoolsCommand, se_ListDevicePoolsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDevicePoolsCommand}.
 */
export interface ListDevicePoolsCommandInput extends ListDevicePoolsRequest {}
/**
 * @public
 *
 * The output of {@link ListDevicePoolsCommand}.
 */
export interface ListDevicePoolsCommandOutput extends ListDevicePoolsResult, __MetadataBearer {}

/**
 * <p>Gets information about device pools.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, ListDevicePoolsCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, ListDevicePoolsCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new DeviceFarmClient(config);
 * const input = { // ListDevicePoolsRequest
 *   arn: "STRING_VALUE", // required
 *   type: "CURATED" || "PRIVATE",
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListDevicePoolsCommand(input);
 * const response = await client.send(command);
 * // { // ListDevicePoolsResult
 * //   devicePools: [ // DevicePools
 * //     { // DevicePool
 * //       arn: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       type: "CURATED" || "PRIVATE",
 * //       rules: [ // Rules
 * //         { // Rule
 * //           attribute: "ARN" || "PLATFORM" || "FORM_FACTOR" || "MANUFACTURER" || "REMOTE_ACCESS_ENABLED" || "REMOTE_DEBUG_ENABLED" || "APPIUM_VERSION" || "INSTANCE_ARN" || "INSTANCE_LABELS" || "FLEET_TYPE" || "OS_VERSION" || "MODEL" || "AVAILABILITY",
 * //           operator: "EQUALS" || "LESS_THAN" || "LESS_THAN_OR_EQUALS" || "GREATER_THAN" || "GREATER_THAN_OR_EQUALS" || "IN" || "NOT_IN" || "CONTAINS",
 * //           value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       maxDevices: Number("int"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDevicePoolsCommandInput - {@link ListDevicePoolsCommandInput}
 * @returns {@link ListDevicePoolsCommandOutput}
 * @see {@link ListDevicePoolsCommandInput} for command's `input` shape.
 * @see {@link ListDevicePoolsCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for DeviceFarmClient's `config` shape.
 *
 * @throws {@link ArgumentException} (client fault)
 *  <p>An invalid argument was specified.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit was exceeded.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The specified entity was not found.</p>
 *
 * @throws {@link ServiceAccountException} (client fault)
 *  <p>There was a problem with the service account.</p>
 *
 * @throws {@link DeviceFarmServiceException}
 * <p>Base exception class for all service exceptions from DeviceFarm service.</p>
 *
 * @public
 * @example To get information about device pools
 * ```javascript
 * // The following example returns information about the private device pools in a specific project.
 * const input = {
 *   "type": "PRIVATE",
 *   "arn": "arn:aws:devicefarm:us-west-2:123456789101:project:EXAMPLE-GUID-123-456"
 * };
 * const command = new ListDevicePoolsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "devicePools": [
 *     {
 *       "name": "Top Devices",
 *       "arn": "arn:aws:devicefarm:us-west-2::devicepool:082d10e5-d7d7-48a5-ba5c-12345EXAMPLE",
 *       "description": "Top devices",
 *       "rules": [
 *         {
 *           "value": "[\"arn:aws:devicefarm:us-west-2::device:123456789EXAMPLE\",\"arn:aws:devicefarm:us-west-2::device:123456789EXAMPLE\",\"arn:aws:devicefarm:us-west-2::device:123456789EXAMPLE\",\"arn:aws:devicefarm:us-west-2::device:123456789EXAMPLE\",\"arn:aws:devicefarm:us-west-2::device:123456789EXAMPLE\",\"arn:aws:devicefarm:us-west-2::device:123456789EXAMPLE\",\"arn:aws:devicefarm:us-west-2::device:123456789EXAMPLE\",\"arn:aws:devicefarm:us-west-2::device:123456789EXAMPLE\",\"arn:aws:devicefarm:us-west-2::device:123456789EXAMPLE\",\"arn:aws:devicefarm:us-west-2::device:123456789EXAMPLE\"]",
 *           "attribute": "ARN",
 *           "operator": "IN"
 *         }
 *       ]
 *     },
 *     {
 *       "name": "My Android Device Pool",
 *       "arn": "arn:aws:devicefarm:us-west-2:123456789101:devicepool:5e01a8c7-c861-4c0a-b1d5-5ec6e6c6dd23/bf96e75a-28f6-4e61-b6a7-12345EXAMPLE",
 *       "description": "Samsung Galaxy Android devices",
 *       "rules": [
 *         {
 *           "value": "[\"arn:aws:devicefarm:us-west-2::device:123456789EXAMPLE\",\"arn:aws:devicefarm:us-west-2::device:123456789EXAMPLE\",\"arn:aws:devicefarm:us-west-2::device:123456789EXAMPLE\"]",
 *           "attribute": "ARN",
 *           "operator": "IN"
 *         }
 *       ]
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-get-information-about-device-pools-1471635745170
 * ```
 *
 */
export class ListDevicePoolsCommand extends $Command
  .classBuilder<
    ListDevicePoolsCommandInput,
    ListDevicePoolsCommandOutput,
    DeviceFarmClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DeviceFarmClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("DeviceFarm_20150623", "ListDevicePools", {})
  .n("DeviceFarmClient", "ListDevicePoolsCommand")
  .f(void 0, void 0)
  .ser(se_ListDevicePoolsCommand)
  .de(de_ListDevicePoolsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDevicePoolsRequest;
      output: ListDevicePoolsResult;
    };
    sdk: {
      input: ListDevicePoolsCommandInput;
      output: ListDevicePoolsCommandOutput;
    };
  };
}
