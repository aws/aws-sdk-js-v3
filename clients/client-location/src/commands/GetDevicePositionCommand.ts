// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetDevicePositionRequest, GetDevicePositionResponse } from "../models/models_0";
import { GetDevicePosition$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Retrieves a device's most recent position according to its sample time.
 *
 * > **Note:** Device positions are deleted after 30 days.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, GetDevicePositionCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, GetDevicePositionCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * // import type { LocationClientConfig } from "@aws-sdk/client-location";
 * const config = {}; // type is LocationClientConfig
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
 *
 * The request was denied because of insufficient access or permissions. Check with an administrator to verify your permissions.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request has failed to process because of an unknown server error, exception, or failure.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource that you've entered was not found in your AWS account.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied because of request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input failed to meet the constraints specified by the AWS service.
 *
 * @throws {@link LocationServiceException}
 *
 * Base exception class for all service exceptions from Location service.
 *
 * @public
 */
export class GetDevicePositionCommand extends command<GetDevicePositionCommandInput, GetDevicePositionCommandOutput>(
  _ep0,
  _mw0,
  "GetDevicePosition",
  GetDevicePosition$
) {
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
