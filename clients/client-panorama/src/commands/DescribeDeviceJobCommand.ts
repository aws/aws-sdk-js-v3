// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeDeviceJobRequest, DescribeDeviceJobResponse } from "../models/models_0";
import { PanoramaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PanoramaClient";
import { DescribeDeviceJob } from "../schemas/schemas_3_Device";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeDeviceJobCommand}.
 */
export interface DescribeDeviceJobCommandInput extends DescribeDeviceJobRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDeviceJobCommand}.
 */
export interface DescribeDeviceJobCommandOutput extends DescribeDeviceJobResponse, __MetadataBearer {}

/**
 * <p>Returns information about a device job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PanoramaClient, DescribeDeviceJobCommand } from "@aws-sdk/client-panorama"; // ES Modules import
 * // const { PanoramaClient, DescribeDeviceJobCommand } = require("@aws-sdk/client-panorama"); // CommonJS import
 * // import type { PanoramaClientConfig } from "@aws-sdk/client-panorama";
 * const config = {}; // type is PanoramaClientConfig
 * const client = new PanoramaClient(config);
 * const input = { // DescribeDeviceJobRequest
 *   JobId: "STRING_VALUE", // required
 * };
 * const command = new DescribeDeviceJobCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDeviceJobResponse
 * //   JobId: "STRING_VALUE",
 * //   DeviceId: "STRING_VALUE",
 * //   DeviceArn: "STRING_VALUE",
 * //   DeviceName: "STRING_VALUE",
 * //   DeviceType: "STRING_VALUE",
 * //   ImageVersion: "STRING_VALUE",
 * //   Status: "STRING_VALUE",
 * //   CreatedTime: new Date("TIMESTAMP"),
 * //   JobType: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeDeviceJobCommandInput - {@link DescribeDeviceJobCommandInput}
 * @returns {@link DescribeDeviceJobCommandOutput}
 * @see {@link DescribeDeviceJobCommandInput} for command's `input` shape.
 * @see {@link DescribeDeviceJobCommandOutput} for command's `response` shape.
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
export class DescribeDeviceJobCommand extends $Command
  .classBuilder<
    DescribeDeviceJobCommandInput,
    DescribeDeviceJobCommandOutput,
    PanoramaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PanoramaClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("OmniCloudServiceLambda", "DescribeDeviceJob", {})
  .n("PanoramaClient", "DescribeDeviceJobCommand")
  .sc(DescribeDeviceJob)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeDeviceJobRequest;
      output: DescribeDeviceJobResponse;
    };
    sdk: {
      input: DescribeDeviceJobCommandInput;
      output: DescribeDeviceJobCommandOutput;
    };
  };
}
