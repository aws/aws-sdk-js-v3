// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import {
  GetDevicePositionHistoryRequest,
  GetDevicePositionHistoryRequestFilterSensitiveLog,
  GetDevicePositionHistoryResponse,
  GetDevicePositionHistoryResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_GetDevicePositionHistoryCommand, se_GetDevicePositionHistoryCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Retrieves the device position history from a tracker resource within a specified range
 *             of time.</p>
 *          <note>
 *             <p>Device positions are deleted after 30 days.</p>
 *          </note>
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
 *
 * @public
 */
export class GetDevicePositionHistoryCommand extends $Command
  .classBuilder<
    GetDevicePositionHistoryCommandInput,
    GetDevicePositionHistoryCommandOutput,
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
  .s("LocationService", "GetDevicePositionHistory", {})
  .n("LocationClient", "GetDevicePositionHistoryCommand")
  .f(GetDevicePositionHistoryRequestFilterSensitiveLog, GetDevicePositionHistoryResponseFilterSensitiveLog)
  .ser(se_GetDevicePositionHistoryCommand)
  .de(de_GetDevicePositionHistoryCommand)
  .build() {
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
