// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import { BatchDeleteDevicePositionHistoryRequest, BatchDeleteDevicePositionHistoryResponse } from "../models/models_0";
import {
  de_BatchDeleteDevicePositionHistoryCommand,
  se_BatchDeleteDevicePositionHistoryCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchDeleteDevicePositionHistoryCommand}.
 */
export interface BatchDeleteDevicePositionHistoryCommandInput extends BatchDeleteDevicePositionHistoryRequest {}
/**
 * @public
 *
 * The output of {@link BatchDeleteDevicePositionHistoryCommand}.
 */
export interface BatchDeleteDevicePositionHistoryCommandOutput
  extends BatchDeleteDevicePositionHistoryResponse,
    __MetadataBearer {}

/**
 * <p>Deletes the position history of one or more devices from a tracker resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, BatchDeleteDevicePositionHistoryCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, BatchDeleteDevicePositionHistoryCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new LocationClient(config);
 * const input = { // BatchDeleteDevicePositionHistoryRequest
 *   TrackerName: "STRING_VALUE", // required
 *   DeviceIds: [ // DeviceIdsList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchDeleteDevicePositionHistoryCommand(input);
 * const response = await client.send(command);
 * // { // BatchDeleteDevicePositionHistoryResponse
 * //   Errors: [ // BatchDeleteDevicePositionHistoryErrorList // required
 * //     { // BatchDeleteDevicePositionHistoryError
 * //       DeviceId: "STRING_VALUE", // required
 * //       Error: { // BatchItemError
 * //         Code: "STRING_VALUE",
 * //         Message: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchDeleteDevicePositionHistoryCommandInput - {@link BatchDeleteDevicePositionHistoryCommandInput}
 * @returns {@link BatchDeleteDevicePositionHistoryCommandOutput}
 * @see {@link BatchDeleteDevicePositionHistoryCommandInput} for command's `input` shape.
 * @see {@link BatchDeleteDevicePositionHistoryCommandOutput} for command's `response` shape.
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
export class BatchDeleteDevicePositionHistoryCommand extends $Command
  .classBuilder<
    BatchDeleteDevicePositionHistoryCommandInput,
    BatchDeleteDevicePositionHistoryCommandOutput,
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
  .s("LocationService", "BatchDeleteDevicePositionHistory", {})
  .n("LocationClient", "BatchDeleteDevicePositionHistoryCommand")
  .f(void 0, void 0)
  .ser(se_BatchDeleteDevicePositionHistoryCommand)
  .de(de_BatchDeleteDevicePositionHistoryCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchDeleteDevicePositionHistoryRequest;
      output: BatchDeleteDevicePositionHistoryResponse;
    };
    sdk: {
      input: BatchDeleteDevicePositionHistoryCommandInput;
      output: BatchDeleteDevicePositionHistoryCommandOutput;
    };
  };
}
