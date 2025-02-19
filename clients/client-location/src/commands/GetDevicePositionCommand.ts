// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import {
  GetDevicePositionRequest,
  GetDevicePositionResponse,
  GetDevicePositionResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_GetDevicePositionCommand, se_GetDevicePositionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDevicePositionCommand}.
 */
export interface GetDevicePositionCommandInput extends GetDevicePositionRequest {}
/**
 * @public
 *
 * The output of {@link GetDevicePositionCommand}.
 */
export interface GetDevicePositionCommandOutput extends GetDevicePositionResponse, __MetadataBearer {}

/**
 * <p>Retrieves a device's most recent position according to its sample time.</p>
 *          <note>
 *             <p>Device positions are deleted after 30 days.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, GetDevicePositionCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, GetDevicePositionCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const input = { // GetDevicePositionRequest
 *   TrackerName: "STRING_VALUE", // required
 *   DeviceId: "STRING_VALUE", // required
 * };
 * const command = new GetDevicePositionCommand(input);
 * const response = await client.send(command);
 * // { // GetDevicePositionResponse
 * //   DeviceId: "STRING_VALUE",
 * //   SampleTime: new Date("TIMESTAMP"), // required
 * //   ReceivedTime: new Date("TIMESTAMP"), // required
 * //   Position: [ // Position // required
 * //     Number("double"),
 * //   ],
 * //   Accuracy: { // PositionalAccuracy
 * //     Horizontal: Number("double"), // required
 * //   },
 * //   PositionProperties: { // PositionPropertyMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetDevicePositionCommandInput - {@link GetDevicePositionCommandInput}
 * @returns {@link GetDevicePositionCommandOutput}
 * @see {@link GetDevicePositionCommandInput} for command's `input` shape.
 * @see {@link GetDevicePositionCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied because of insufficient access or permissions. Check with an
 *       administrator to verify your permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed to process because of an unknown server error, exception, or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource that you've entered was not found in your AWS account.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because of request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input failed to meet the constraints specified by the AWS service. </p>
 *
 * @throws {@link LocationServiceException}
 * <p>Base exception class for all service exceptions from Location service.</p>
 *
 * @public
 */
export class GetDevicePositionCommand extends $Command
  .classBuilder<
    GetDevicePositionCommandInput,
    GetDevicePositionCommandOutput,
    LocationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LocationClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("LocationService", "GetDevicePosition", {})
  .n("LocationClient", "GetDevicePositionCommand")
  .f(void 0, GetDevicePositionResponseFilterSensitiveLog)
  .ser(se_GetDevicePositionCommand)
  .de(de_GetDevicePositionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDevicePositionRequest;
      output: GetDevicePositionResponse;
    };
    sdk: {
      input: GetDevicePositionCommandInput;
      output: GetDevicePositionCommandOutput;
    };
  };
}
