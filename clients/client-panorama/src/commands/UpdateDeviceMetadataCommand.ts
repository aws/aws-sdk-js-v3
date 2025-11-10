// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateDeviceMetadataRequest, UpdateDeviceMetadataResponse } from "../models/models_0";
import { PanoramaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PanoramaClient";
import { UpdateDeviceMetadata } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateDeviceMetadataCommand}.
 */
export interface UpdateDeviceMetadataCommandInput extends UpdateDeviceMetadataRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDeviceMetadataCommand}.
 */
export interface UpdateDeviceMetadataCommandOutput extends UpdateDeviceMetadataResponse, __MetadataBearer {}

/**
 * <p>Updates a device's metadata.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PanoramaClient, UpdateDeviceMetadataCommand } from "@aws-sdk/client-panorama"; // ES Modules import
 * // const { PanoramaClient, UpdateDeviceMetadataCommand } = require("@aws-sdk/client-panorama"); // CommonJS import
 * // import type { PanoramaClientConfig } from "@aws-sdk/client-panorama";
 * const config = {}; // type is PanoramaClientConfig
 * const client = new PanoramaClient(config);
 * const input = { // UpdateDeviceMetadataRequest
 *   DeviceId: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 * };
 * const command = new UpdateDeviceMetadataCommand(input);
 * const response = await client.send(command);
 * // { // UpdateDeviceMetadataResponse
 * //   DeviceId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateDeviceMetadataCommandInput - {@link UpdateDeviceMetadataCommandInput}
 * @returns {@link UpdateDeviceMetadataCommandOutput}
 * @see {@link UpdateDeviceMetadataCommandInput} for command's `input` shape.
 * @see {@link UpdateDeviceMetadataCommandOutput} for command's `response` shape.
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
export class UpdateDeviceMetadataCommand extends $Command
  .classBuilder<
    UpdateDeviceMetadataCommandInput,
    UpdateDeviceMetadataCommandOutput,
    PanoramaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PanoramaClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("OmniCloudServiceLambda", "UpdateDeviceMetadata", {})
  .n("PanoramaClient", "UpdateDeviceMetadataCommand")
  .sc(UpdateDeviceMetadata)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDeviceMetadataRequest;
      output: UpdateDeviceMetadataResponse;
    };
    sdk: {
      input: UpdateDeviceMetadataCommandInput;
      output: UpdateDeviceMetadataCommandOutput;
    };
  };
}
