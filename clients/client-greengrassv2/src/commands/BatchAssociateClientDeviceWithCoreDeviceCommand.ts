// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GreengrassV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassV2Client";
import {
  BatchAssociateClientDeviceWithCoreDeviceRequest,
  BatchAssociateClientDeviceWithCoreDeviceResponse,
} from "../models/models_0";
import { BatchAssociateClientDeviceWithCoreDevice } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchAssociateClientDeviceWithCoreDeviceCommand}.
 */
export interface BatchAssociateClientDeviceWithCoreDeviceCommandInput
  extends BatchAssociateClientDeviceWithCoreDeviceRequest {}
/**
 * @public
 *
 * The output of {@link BatchAssociateClientDeviceWithCoreDeviceCommand}.
 */
export interface BatchAssociateClientDeviceWithCoreDeviceCommandOutput
  extends BatchAssociateClientDeviceWithCoreDeviceResponse,
    __MetadataBearer {}

/**
 * <p>Associates a list of client devices with a core device. Use this API operation to specify
 *       which client devices can discover a core device through cloud discovery. With cloud discovery,
 *       client devices connect to IoT Greengrass to retrieve associated core devices' connectivity information
 *       and certificates. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/configure-cloud-discovery.html">Configure cloud
 *         discovery</a> in the <i>IoT Greengrass V2 Developer Guide</i>.</p>
 *          <note>
 *             <p>Client devices are local IoT devices that connect to and communicate with an IoT Greengrass core
 *         device over MQTT. You can connect client devices to a core device to sync MQTT messages and
 *         data to Amazon Web Services IoT Core and interact with client devices in Greengrass components. For more information,
 *         see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/interact-with-local-iot-devices.html">Interact with
 *           local IoT devices</a> in the <i>IoT Greengrass V2 Developer Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassV2Client, BatchAssociateClientDeviceWithCoreDeviceCommand } from "@aws-sdk/client-greengrassv2"; // ES Modules import
 * // const { GreengrassV2Client, BatchAssociateClientDeviceWithCoreDeviceCommand } = require("@aws-sdk/client-greengrassv2"); // CommonJS import
 * // import type { GreengrassV2ClientConfig } from "@aws-sdk/client-greengrassv2";
 * const config = {}; // type is GreengrassV2ClientConfig
 * const client = new GreengrassV2Client(config);
 * const input = { // BatchAssociateClientDeviceWithCoreDeviceRequest
 *   entries: [ // AssociateClientDeviceWithCoreDeviceEntryList
 *     { // AssociateClientDeviceWithCoreDeviceEntry
 *       thingName: "STRING_VALUE", // required
 *     },
 *   ],
 *   coreDeviceThingName: "STRING_VALUE", // required
 * };
 * const command = new BatchAssociateClientDeviceWithCoreDeviceCommand(input);
 * const response = await client.send(command);
 * // { // BatchAssociateClientDeviceWithCoreDeviceResponse
 * //   errorEntries: [ // AssociateClientDeviceWithCoreDeviceErrorList
 * //     { // AssociateClientDeviceWithCoreDeviceErrorEntry
 * //       thingName: "STRING_VALUE",
 * //       code: "STRING_VALUE",
 * //       message: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchAssociateClientDeviceWithCoreDeviceCommandInput - {@link BatchAssociateClientDeviceWithCoreDeviceCommandInput}
 * @returns {@link BatchAssociateClientDeviceWithCoreDeviceCommandOutput}
 * @see {@link BatchAssociateClientDeviceWithCoreDeviceCommandInput} for command's `input` shape.
 * @see {@link BatchAssociateClientDeviceWithCoreDeviceCommandOutput} for command's `response` shape.
 * @see {@link GreengrassV2ClientResolvedConfig | config} for GreengrassV2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform the action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>IoT Greengrass can't process your request right now. Try again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource can't be found.</p>
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
export class BatchAssociateClientDeviceWithCoreDeviceCommand extends $Command
  .classBuilder<
    BatchAssociateClientDeviceWithCoreDeviceCommandInput,
    BatchAssociateClientDeviceWithCoreDeviceCommandOutput,
    GreengrassV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GreengrassV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GreengrassV2", "BatchAssociateClientDeviceWithCoreDevice", {})
  .n("GreengrassV2Client", "BatchAssociateClientDeviceWithCoreDeviceCommand")
  .sc(BatchAssociateClientDeviceWithCoreDevice)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchAssociateClientDeviceWithCoreDeviceRequest;
      output: BatchAssociateClientDeviceWithCoreDeviceResponse;
    };
    sdk: {
      input: BatchAssociateClientDeviceWithCoreDeviceCommandInput;
      output: BatchAssociateClientDeviceWithCoreDeviceCommandOutput;
    };
  };
}
