// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import {
  ListDevicePositionsRequest,
  ListDevicePositionsRequestFilterSensitiveLog,
  ListDevicePositionsResponse,
  ListDevicePositionsResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_ListDevicePositionsCommand, se_ListDevicePositionsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDevicePositionsCommand}.
 */
export interface ListDevicePositionsCommandInput extends ListDevicePositionsRequest {}
/**
 * @public
 *
 * The output of {@link ListDevicePositionsCommand}.
 */
export interface ListDevicePositionsCommandOutput extends ListDevicePositionsResponse, __MetadataBearer {}

/**
 * <p>A batch request to retrieve all device positions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, ListDevicePositionsCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, ListDevicePositionsCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const input = { // ListDevicePositionsRequest
 *   TrackerName: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   FilterGeometry: { // TrackingFilterGeometry
 *     Polygon: [ // LinearRings
 *       [ // LinearRing
 *         [ // Position
 *           Number("double"),
 *         ],
 *       ],
 *     ],
 *   },
 * };
 * const command = new ListDevicePositionsCommand(input);
 * const response = await client.send(command);
 * // { // ListDevicePositionsResponse
 * //   Entries: [ // ListDevicePositionsResponseEntryList // required
 * //     { // ListDevicePositionsResponseEntry
 * //       DeviceId: "STRING_VALUE", // required
 * //       SampleTime: new Date("TIMESTAMP"), // required
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
 * @param ListDevicePositionsCommandInput - {@link ListDevicePositionsCommandInput}
 * @returns {@link ListDevicePositionsCommandOutput}
 * @see {@link ListDevicePositionsCommandInput} for command's `input` shape.
 * @see {@link ListDevicePositionsCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied because of insufficient access or permissions. Check with an
 *       administrator to verify your permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed to process because of an unknown server error, exception, or failure.</p>
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
export class ListDevicePositionsCommand extends $Command
  .classBuilder<
    ListDevicePositionsCommandInput,
    ListDevicePositionsCommandOutput,
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
  .s("LocationService", "ListDevicePositions", {})
  .n("LocationClient", "ListDevicePositionsCommand")
  .f(ListDevicePositionsRequestFilterSensitiveLog, ListDevicePositionsResponseFilterSensitiveLog)
  .ser(se_ListDevicePositionsCommand)
  .de(de_ListDevicePositionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDevicePositionsRequest;
      output: ListDevicePositionsResponse;
    };
    sdk: {
      input: ListDevicePositionsCommandInput;
      output: ListDevicePositionsCommandOutput;
    };
  };
}
