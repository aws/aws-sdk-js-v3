// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTEventsClient";
import { DeleteDetectorModelRequest, DeleteDetectorModelResponse } from "../models/models_0";
import { DeleteDetectorModel } from "../schemas/schemas_6_Detector";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteDetectorModelCommand}.
 */
export interface DeleteDetectorModelCommandInput extends DeleteDetectorModelRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDetectorModelCommand}.
 */
export interface DeleteDetectorModelCommandOutput extends DeleteDetectorModelResponse, __MetadataBearer {}

/**
 * <p>Deletes a detector model. Any active instances of the detector model are also
 *       deleted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsClient, DeleteDetectorModelCommand } from "@aws-sdk/client-iot-events"; // ES Modules import
 * // const { IoTEventsClient, DeleteDetectorModelCommand } = require("@aws-sdk/client-iot-events"); // CommonJS import
 * // import type { IoTEventsClientConfig } from "@aws-sdk/client-iot-events";
 * const config = {}; // type is IoTEventsClientConfig
 * const client = new IoTEventsClient(config);
 * const input = { // DeleteDetectorModelRequest
 *   detectorModelName: "STRING_VALUE", // required
 * };
 * const command = new DeleteDetectorModelCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteDetectorModelCommandInput - {@link DeleteDetectorModelCommandInput}
 * @returns {@link DeleteDetectorModelCommandOutput}
 * @see {@link DeleteDetectorModelCommandInput} for command's `input` shape.
 * @see {@link DeleteDetectorModelCommandOutput} for command's `response` shape.
 * @see {@link IoTEventsClientResolvedConfig | config} for IoTEventsClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request was invalid.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The resource is in use.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource was not found.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request could not be completed due to throttling.</p>
 *
 * @throws {@link IoTEventsServiceException}
 * <p>Base exception class for all service exceptions from IoTEvents service.</p>
 *
 *
 * @public
 */
export class DeleteDetectorModelCommand extends $Command
  .classBuilder<
    DeleteDetectorModelCommandInput,
    DeleteDetectorModelCommandOutput,
    IoTEventsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTEventsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("IotColumboService", "DeleteDetectorModel", {})
  .n("IoTEventsClient", "DeleteDetectorModelCommand")
  .sc(DeleteDetectorModel)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDetectorModelRequest;
      output: {};
    };
    sdk: {
      input: DeleteDetectorModelCommandInput;
      output: DeleteDetectorModelCommandOutput;
    };
  };
}
