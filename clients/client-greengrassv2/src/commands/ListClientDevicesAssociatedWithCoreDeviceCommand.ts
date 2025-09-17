// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GreengrassV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassV2Client";
import {
  ListClientDevicesAssociatedWithCoreDeviceRequest,
  ListClientDevicesAssociatedWithCoreDeviceResponse,
} from "../models/models_0";
import {
  de_ListClientDevicesAssociatedWithCoreDeviceCommand,
  se_ListClientDevicesAssociatedWithCoreDeviceCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListClientDevicesAssociatedWithCoreDeviceCommand}.
 */
export interface ListClientDevicesAssociatedWithCoreDeviceCommandInput
  extends ListClientDevicesAssociatedWithCoreDeviceRequest {}
/**
 * @public
 *
 * The output of {@link ListClientDevicesAssociatedWithCoreDeviceCommand}.
 */
export interface ListClientDevicesAssociatedWithCoreDeviceCommandOutput
  extends ListClientDevicesAssociatedWithCoreDeviceResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves a paginated list of client devices that are associated with a core
 *       device.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassV2Client, ListClientDevicesAssociatedWithCoreDeviceCommand } from "@aws-sdk/client-greengrassv2"; // ES Modules import
 * // const { GreengrassV2Client, ListClientDevicesAssociatedWithCoreDeviceCommand } = require("@aws-sdk/client-greengrassv2"); // CommonJS import
 * // import type { GreengrassV2ClientConfig } from "@aws-sdk/client-greengrassv2";
 * const config = {}; // type is GreengrassV2ClientConfig
 * const client = new GreengrassV2Client(config);
 * const input = { // ListClientDevicesAssociatedWithCoreDeviceRequest
 *   coreDeviceThingName: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListClientDevicesAssociatedWithCoreDeviceCommand(input);
 * const response = await client.send(command);
 * // { // ListClientDevicesAssociatedWithCoreDeviceResponse
 * //   associatedClientDevices: [ // AssociatedClientDeviceList
 * //     { // AssociatedClientDevice
 * //       thingName: "STRING_VALUE",
 * //       associationTimestamp: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListClientDevicesAssociatedWithCoreDeviceCommandInput - {@link ListClientDevicesAssociatedWithCoreDeviceCommandInput}
 * @returns {@link ListClientDevicesAssociatedWithCoreDeviceCommandOutput}
 * @see {@link ListClientDevicesAssociatedWithCoreDeviceCommandInput} for command's `input` shape.
 * @see {@link ListClientDevicesAssociatedWithCoreDeviceCommandOutput} for command's `response` shape.
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
export class ListClientDevicesAssociatedWithCoreDeviceCommand extends $Command
  .classBuilder<
    ListClientDevicesAssociatedWithCoreDeviceCommandInput,
    ListClientDevicesAssociatedWithCoreDeviceCommandOutput,
    GreengrassV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GreengrassV2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("GreengrassV2", "ListClientDevicesAssociatedWithCoreDevice", {})
  .n("GreengrassV2Client", "ListClientDevicesAssociatedWithCoreDeviceCommand")
  .f(void 0, void 0)
  .ser(se_ListClientDevicesAssociatedWithCoreDeviceCommand)
  .de(de_ListClientDevicesAssociatedWithCoreDeviceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListClientDevicesAssociatedWithCoreDeviceRequest;
      output: ListClientDevicesAssociatedWithCoreDeviceResponse;
    };
    sdk: {
      input: ListClientDevicesAssociatedWithCoreDeviceCommandInput;
      output: ListClientDevicesAssociatedWithCoreDeviceCommandOutput;
    };
  };
}
