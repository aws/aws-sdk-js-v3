// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GreengrassV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassV2Client";
import type { ListCoreDevicesRequest, ListCoreDevicesResponse } from "../models/models_0";
import { ListCoreDevices } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCoreDevicesCommand}.
 */
export interface ListCoreDevicesCommandInput extends ListCoreDevicesRequest {}
/**
 * @public
 *
 * The output of {@link ListCoreDevicesCommand}.
 */
export interface ListCoreDevicesCommandOutput extends ListCoreDevicesResponse, __MetadataBearer {}

/**
 * <p>Retrieves a paginated list of Greengrass core devices.</p>
 *          <note>
 *             <p>IoT Greengrass relies on individual devices to send status updates to the Amazon Web Services Cloud. If the
 *         IoT Greengrass Core software isn't running on the device, or if device isn't connected to the Amazon Web Services Cloud,
 *         then the reported status of that device might not reflect its current status. The status
 *         timestamp indicates when the device status was last updated.</p>
 *             <p>Core devices send status updates at the following times:</p>
 *             <ul>
 *                <li>
 *                   <p>When the IoT Greengrass Core software starts</p>
 *                </li>
 *                <li>
 *                   <p>When the core device receives a deployment from the Amazon Web Services Cloud</p>
 *                </li>
 *                <li>
 *                   <p>For Greengrass nucleus 2.12.2 and earlier, the core device sends status updates when the
 *             status of any component on the core device becomes <code>ERRORED</code> or
 *               <code>BROKEN</code>.</p>
 *                </li>
 *                <li>
 *                   <p>For Greengrass nucleus 2.12.3 and later, the core device sends status updates when the
 *             status of any component on the core device becomes <code>ERRORED</code>,
 *               <code>BROKEN</code>, <code>RUNNING</code>, or <code>FINISHED</code>.</p>
 *                </li>
 *                <li>
 *                   <p>At a <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/greengrass-nucleus-component.html#greengrass-nucleus-component-configuration-fss">regular interval that you can configure</a>, which defaults to 24 hours</p>
 *                </li>
 *                <li>
 *                   <p>For IoT Greengrass Core v2.7.0, the core device sends status updates upon local deployment and
 *             cloud deployment</p>
 *                </li>
 *             </ul>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassV2Client, ListCoreDevicesCommand } from "@aws-sdk/client-greengrassv2"; // ES Modules import
 * // const { GreengrassV2Client, ListCoreDevicesCommand } = require("@aws-sdk/client-greengrassv2"); // CommonJS import
 * // import type { GreengrassV2ClientConfig } from "@aws-sdk/client-greengrassv2";
 * const config = {}; // type is GreengrassV2ClientConfig
 * const client = new GreengrassV2Client(config);
 * const input = { // ListCoreDevicesRequest
 *   thingGroupArn: "STRING_VALUE",
 *   status: "HEALTHY" || "UNHEALTHY",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   runtime: "STRING_VALUE",
 * };
 * const command = new ListCoreDevicesCommand(input);
 * const response = await client.send(command);
 * // { // ListCoreDevicesResponse
 * //   coreDevices: [ // CoreDevicesList
 * //     { // CoreDevice
 * //       coreDeviceThingName: "STRING_VALUE",
 * //       status: "HEALTHY" || "UNHEALTHY",
 * //       lastStatusUpdateTimestamp: new Date("TIMESTAMP"),
 * //       platform: "STRING_VALUE",
 * //       architecture: "STRING_VALUE",
 * //       runtime: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCoreDevicesCommandInput - {@link ListCoreDevicesCommandInput}
 * @returns {@link ListCoreDevicesCommandOutput}
 * @see {@link ListCoreDevicesCommandInput} for command's `input` shape.
 * @see {@link ListCoreDevicesCommandOutput} for command's `response` shape.
 * @see {@link GreengrassV2ClientResolvedConfig | config} for GreengrassV2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform the action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>IoT Greengrass can't process your request right now. Try again later.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request exceeded a request rate quota. For example, you might have exceeded the
 *       amount of times that you can retrieve device or deployment status per second.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or
 *       unsupported characters.</p>
 *
 * @throws {@link GreengrassV2ServiceException}
 * <p>Base exception class for all service exceptions from GreengrassV2 service.</p>
 *
 *
 * @public
 */
export class ListCoreDevicesCommand extends $Command
  .classBuilder<
    ListCoreDevicesCommandInput,
    ListCoreDevicesCommandOutput,
    GreengrassV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GreengrassV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GreengrassV2", "ListCoreDevices", {})
  .n("GreengrassV2Client", "ListCoreDevicesCommand")
  .sc(ListCoreDevices)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCoreDevicesRequest;
      output: ListCoreDevicesResponse;
    };
    sdk: {
      input: ListCoreDevicesCommandInput;
      output: ListCoreDevicesCommandOutput;
    };
  };
}
