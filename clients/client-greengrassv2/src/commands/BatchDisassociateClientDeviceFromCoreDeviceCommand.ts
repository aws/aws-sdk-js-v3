// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GreengrassV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassV2Client";
import {
  BatchDisassociateClientDeviceFromCoreDeviceRequest,
  BatchDisassociateClientDeviceFromCoreDeviceResponse,
} from "../models/models_0";
import {
  de_BatchDisassociateClientDeviceFromCoreDeviceCommand,
  se_BatchDisassociateClientDeviceFromCoreDeviceCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchDisassociateClientDeviceFromCoreDeviceCommand}.
 */
export interface BatchDisassociateClientDeviceFromCoreDeviceCommandInput
  extends BatchDisassociateClientDeviceFromCoreDeviceRequest {}
/**
 * @public
 *
 * The output of {@link BatchDisassociateClientDeviceFromCoreDeviceCommand}.
 */
export interface BatchDisassociateClientDeviceFromCoreDeviceCommandOutput
  extends BatchDisassociateClientDeviceFromCoreDeviceResponse,
    __MetadataBearer {}

/**
 * <p>Disassociates a list of client devices from a core device. After you disassociate a client
 *       device from a core device, the client device won't be able to use cloud discovery to retrieve
 *       the core device's connectivity information and certificates.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassV2Client, BatchDisassociateClientDeviceFromCoreDeviceCommand } from "@aws-sdk/client-greengrassv2"; // ES Modules import
 * // const { GreengrassV2Client, BatchDisassociateClientDeviceFromCoreDeviceCommand } = require("@aws-sdk/client-greengrassv2"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new GreengrassV2Client(config);
 * const input = { // BatchDisassociateClientDeviceFromCoreDeviceRequest
 *   entries: [ // DisassociateClientDeviceFromCoreDeviceEntryList
 *     { // DisassociateClientDeviceFromCoreDeviceEntry
 *       thingName: "STRING_VALUE", // required
 *     },
 *   ],
 *   coreDeviceThingName: "STRING_VALUE", // required
 * };
 * const command = new BatchDisassociateClientDeviceFromCoreDeviceCommand(input);
 * const response = await client.send(command);
 * // { // BatchDisassociateClientDeviceFromCoreDeviceResponse
 * //   errorEntries: [ // DisassociateClientDeviceFromCoreDeviceErrorList
 * //     { // DisassociateClientDeviceFromCoreDeviceErrorEntry
 * //       thingName: "STRING_VALUE",
 * //       code: "STRING_VALUE",
 * //       message: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchDisassociateClientDeviceFromCoreDeviceCommandInput - {@link BatchDisassociateClientDeviceFromCoreDeviceCommandInput}
 * @returns {@link BatchDisassociateClientDeviceFromCoreDeviceCommandOutput}
 * @see {@link BatchDisassociateClientDeviceFromCoreDeviceCommandInput} for command's `input` shape.
 * @see {@link BatchDisassociateClientDeviceFromCoreDeviceCommandOutput} for command's `response` shape.
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
 * @public
 */
export class BatchDisassociateClientDeviceFromCoreDeviceCommand extends $Command
  .classBuilder<
    BatchDisassociateClientDeviceFromCoreDeviceCommandInput,
    BatchDisassociateClientDeviceFromCoreDeviceCommandOutput,
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
  .s("GreengrassV2", "BatchDisassociateClientDeviceFromCoreDevice", {})
  .n("GreengrassV2Client", "BatchDisassociateClientDeviceFromCoreDeviceCommand")
  .f(void 0, void 0)
  .ser(se_BatchDisassociateClientDeviceFromCoreDeviceCommand)
  .de(de_BatchDisassociateClientDeviceFromCoreDeviceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchDisassociateClientDeviceFromCoreDeviceRequest;
      output: BatchDisassociateClientDeviceFromCoreDeviceResponse;
    };
    sdk: {
      input: BatchDisassociateClientDeviceFromCoreDeviceCommandInput;
      output: BatchDisassociateClientDeviceFromCoreDeviceCommandOutput;
    };
  };
}
