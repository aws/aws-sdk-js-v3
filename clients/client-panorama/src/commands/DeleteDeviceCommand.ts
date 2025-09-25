// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteDeviceRequest, DeleteDeviceResponse } from "../models/models_0";
import { PanoramaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PanoramaClient";
import { DeleteDevice } from "../schemas/schemas_3_Device";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteDeviceCommand}.
 */
export interface DeleteDeviceCommandInput extends DeleteDeviceRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDeviceCommand}.
 */
export interface DeleteDeviceCommandOutput extends DeleteDeviceResponse, __MetadataBearer {}

/**
 * <p>Deletes a device.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PanoramaClient, DeleteDeviceCommand } from "@aws-sdk/client-panorama"; // ES Modules import
 * // const { PanoramaClient, DeleteDeviceCommand } = require("@aws-sdk/client-panorama"); // CommonJS import
 * // import type { PanoramaClientConfig } from "@aws-sdk/client-panorama";
 * const config = {}; // type is PanoramaClientConfig
 * const client = new PanoramaClient(config);
 * const input = { // DeleteDeviceRequest
 *   DeviceId: "STRING_VALUE", // required
 * };
 * const command = new DeleteDeviceCommand(input);
 * const response = await client.send(command);
 * // { // DeleteDeviceResponse
 * //   DeviceId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteDeviceCommandInput - {@link DeleteDeviceCommandInput}
 * @returns {@link DeleteDeviceCommandOutput}
 * @see {@link DeleteDeviceCommandInput} for command's `input` shape.
 * @see {@link DeleteDeviceCommandOutput} for command's `response` shape.
 * @see {@link PanoramaClientResolvedConfig | config} for PanoramaClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The requestor does not have permission to access the target action or resource.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The target resource is in use.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The target resource was not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request contains an invalid parameter value.</p>
 *
 * @throws {@link PanoramaServiceException}
 * <p>Base exception class for all service exceptions from Panorama service.</p>
 *
 *
 * @public
 */
export class DeleteDeviceCommand extends $Command
  .classBuilder<
    DeleteDeviceCommandInput,
    DeleteDeviceCommandOutput,
    PanoramaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PanoramaClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("OmniCloudServiceLambda", "DeleteDevice", {})
  .n("PanoramaClient", "DeleteDeviceCommand")
  .sc(DeleteDevice)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDeviceRequest;
      output: DeleteDeviceResponse;
    };
    sdk: {
      input: DeleteDeviceCommandInput;
      output: DeleteDeviceCommandOutput;
    };
  };
}
