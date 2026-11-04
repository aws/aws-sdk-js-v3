// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetDevicePositionHistoryRequest, GetDevicePositionHistoryResponse } from "../models/models_0";
import { GetDevicePositionHistory$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetDevicePositionHistoryCommand}.
 */
export interface GetDevicePositionHistoryCommandInput extends GetDevicePositionHistoryRequest {}
/**
 * @public
 *
 * The output of {@link GetDevicePositionHistoryCommand}.
 */
export interface GetDevicePositionHistoryCommandOutput extends GetDevicePositionHistoryResponse, __MetadataBearer {}

/**
 * Retrieves the device position history from a tracker resource within a specified range of time.
 *
 * > **Note:** Device positions are deleted after 30 days.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, GetDevicePositionHistoryCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, GetDevicePositionHistoryCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * // import type { LocationClientConfig } from "@aws-sdk/client-location";
 * const config = {}; // type is LocationClientConfig
 * const client = new LocationClient(config);
 * const input = { // GetDevicePositionHistoryRequest
 *   TrackerName: "STRING_VALUE", // required
 *   DeviceId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   StartTimeInclusive: new Date("TIMESTAMP"),
 *   EndTimeExclusive: new Date("TIMESTAMP"),
 *   MaxResults: Number("int"),
 * };
 * const command = new GetDevicePositionHistoryCommand(input);
 * const response = await client.send(command);
 * // { // GetDevicePositionHistoryResponse
 * //   DevicePositions: [ // DevicePositionList // required
 * //     { // DevicePosition
 * //       DeviceId: "STRING_VALUE",
 * //       SampleTime: new Date("TIMESTAMP"), // required
 * //       ReceivedTime: new Date("TIMESTAMP"), // required
 * //       Position: [ // Position // required
 * //         Number("double"),
 * //       ],
 * //       Accuracy: { // PositionalAccuracy
 * //         Horizontal: Number("double"), // required
 * //       },
 * //       PositionProperties: { // PositionPropertyMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetDevicePositionHistoryCommandInput - {@link GetDevicePositionHistoryCommandInput}
 * @returns {@link GetDevicePositionHistoryCommandOutput}
 * @see {@link GetDevicePositionHistoryCommandInput} for command's `input` shape.
 * @see {@link GetDevicePositionHistoryCommandOutput} for command's `response` shape.
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
export class GetDevicePositionHistoryCommand extends command<GetDevicePositionHistoryCommandInput, GetDevicePositionHistoryCommandOutput>(
  _ep0,
  _mw0,
  "GetDevicePositionHistory",
  GetDevicePositionHistory$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDevicePositionHistoryRequest;
      output: GetDevicePositionHistoryResponse;
    };
    sdk: {
      input: GetDevicePositionHistoryCommandInput;
      output: GetDevicePositionHistoryCommandOutput;
    };
  };
}
