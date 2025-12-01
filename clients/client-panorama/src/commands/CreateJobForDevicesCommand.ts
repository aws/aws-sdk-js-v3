// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateJobForDevicesRequest, CreateJobForDevicesResponse } from "../models/models_0";
import type { PanoramaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PanoramaClient";
import { CreateJobForDevices } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateJobForDevicesCommand}.
 */
export interface CreateJobForDevicesCommandInput extends CreateJobForDevicesRequest {}
/**
 * @public
 *
 * The output of {@link CreateJobForDevicesCommand}.
 */
export interface CreateJobForDevicesCommandOutput extends CreateJobForDevicesResponse, __MetadataBearer {}

/**
 * <p>Creates a job to run on a device. A job can update a device's software or reboot it.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PanoramaClient, CreateJobForDevicesCommand } from "@aws-sdk/client-panorama"; // ES Modules import
 * // const { PanoramaClient, CreateJobForDevicesCommand } = require("@aws-sdk/client-panorama"); // CommonJS import
 * // import type { PanoramaClientConfig } from "@aws-sdk/client-panorama";
 * const config = {}; // type is PanoramaClientConfig
 * const client = new PanoramaClient(config);
 * const input = { // CreateJobForDevicesRequest
 *   DeviceIds: [ // DeviceIdList // required
 *     "STRING_VALUE",
 *   ],
 *   DeviceJobConfig: { // DeviceJobConfig
 *     OTAJobConfig: { // OTAJobConfig
 *       ImageVersion: "STRING_VALUE", // required
 *       AllowMajorVersionUpdate: true || false,
 *     },
 *   },
 *   JobType: "STRING_VALUE", // required
 * };
 * const command = new CreateJobForDevicesCommand(input);
 * const response = await client.send(command);
 * // { // CreateJobForDevicesResponse
 * //   Jobs: [ // JobList // required
 * //     { // Job
 * //       JobId: "STRING_VALUE",
 * //       DeviceId: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param CreateJobForDevicesCommandInput - {@link CreateJobForDevicesCommandInput}
 * @returns {@link CreateJobForDevicesCommandOutput}
 * @see {@link CreateJobForDevicesCommandInput} for command's `input` shape.
 * @see {@link CreateJobForDevicesCommandOutput} for command's `response` shape.
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
export class CreateJobForDevicesCommand extends $Command
  .classBuilder<
    CreateJobForDevicesCommandInput,
    CreateJobForDevicesCommandOutput,
    PanoramaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PanoramaClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("OmniCloudServiceLambda", "CreateJobForDevices", {})
  .n("PanoramaClient", "CreateJobForDevicesCommand")
  .sc(CreateJobForDevices)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateJobForDevicesRequest;
      output: CreateJobForDevicesResponse;
    };
    sdk: {
      input: CreateJobForDevicesCommandInput;
      output: CreateJobForDevicesCommandOutput;
    };
  };
}
