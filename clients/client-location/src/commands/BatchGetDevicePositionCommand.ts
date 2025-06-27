// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import {
  BatchGetDevicePositionRequest,
  BatchGetDevicePositionResponse,
  BatchGetDevicePositionResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_BatchGetDevicePositionCommand, se_BatchGetDevicePositionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchGetDevicePositionCommand}.
 */
export interface BatchGetDevicePositionCommandInput extends BatchGetDevicePositionRequest {}
/**
 * @public
 *
 * The output of {@link BatchGetDevicePositionCommand}.
 */
export interface BatchGetDevicePositionCommandOutput extends BatchGetDevicePositionResponse, __MetadataBearer {}

/**
 * <p>Lists the latest device positions for requested devices.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, BatchGetDevicePositionCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, BatchGetDevicePositionCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const input = { // BatchGetDevicePositionRequest
 *   TrackerName: "STRING_VALUE", // required
 *   DeviceIds: [ // IdList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchGetDevicePositionCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetDevicePositionResponse
 * //   Errors: [ // BatchGetDevicePositionErrorList // required
 * //     { // BatchGetDevicePositionError
 * //       DeviceId: "STRING_VALUE", // required
 * //       Error: { // BatchItemError
 * //         Code: "STRING_VALUE",
 * //         Message: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
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
 * // };
 *
 * ```
 *
 * @param BatchGetDevicePositionCommandInput - {@link BatchGetDevicePositionCommandInput}
 * @returns {@link BatchGetDevicePositionCommandOutput}
 * @see {@link BatchGetDevicePositionCommandInput} for command's `input` shape.
 * @see {@link BatchGetDevicePositionCommandOutput} for command's `response` shape.
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
export class BatchGetDevicePositionCommand extends $Command
  .classBuilder<
    BatchGetDevicePositionCommandInput,
    BatchGetDevicePositionCommandOutput,
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
  .s("LocationService", "BatchGetDevicePosition", {})
  .n("LocationClient", "BatchGetDevicePositionCommand")
  .f(void 0, BatchGetDevicePositionResponseFilterSensitiveLog)
  .ser(se_BatchGetDevicePositionCommand)
  .de(de_BatchGetDevicePositionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchGetDevicePositionRequest;
      output: BatchGetDevicePositionResponse;
    };
    sdk: {
      input: BatchGetDevicePositionCommandInput;
      output: BatchGetDevicePositionCommandOutput;
    };
  };
}
