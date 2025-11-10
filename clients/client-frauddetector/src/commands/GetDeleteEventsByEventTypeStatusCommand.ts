// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { GetDeleteEventsByEventTypeStatusRequest, GetDeleteEventsByEventTypeStatusResult } from "../models/models_0";
import { GetDeleteEventsByEventTypeStatus } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDeleteEventsByEventTypeStatusCommand}.
 */
export interface GetDeleteEventsByEventTypeStatusCommandInput extends GetDeleteEventsByEventTypeStatusRequest {}
/**
 * @public
 *
 * The output of {@link GetDeleteEventsByEventTypeStatusCommand}.
 */
export interface GetDeleteEventsByEventTypeStatusCommandOutput
  extends GetDeleteEventsByEventTypeStatusResult,
    __MetadataBearer {}

/**
 * <p>Retrieves the status of a <code>DeleteEventsByEventType</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, GetDeleteEventsByEventTypeStatusCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, GetDeleteEventsByEventTypeStatusCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * // import type { FraudDetectorClientConfig } from "@aws-sdk/client-frauddetector";
 * const config = {}; // type is FraudDetectorClientConfig
 * const client = new FraudDetectorClient(config);
 * const input = { // GetDeleteEventsByEventTypeStatusRequest
 *   eventTypeName: "STRING_VALUE", // required
 * };
 * const command = new GetDeleteEventsByEventTypeStatusCommand(input);
 * const response = await client.send(command);
 * // { // GetDeleteEventsByEventTypeStatusResult
 * //   eventTypeName: "STRING_VALUE",
 * //   eventsDeletionStatus: "IN_PROGRESS_INITIALIZING" || "IN_PROGRESS" || "CANCEL_IN_PROGRESS" || "CANCELED" || "COMPLETE" || "FAILED",
 * // };
 *
 * ```
 *
 * @param GetDeleteEventsByEventTypeStatusCommandInput - {@link GetDeleteEventsByEventTypeStatusCommandInput}
 * @returns {@link GetDeleteEventsByEventTypeStatusCommandOutput}
 * @see {@link GetDeleteEventsByEventTypeStatusCommandInput} for command's `input` shape.
 * @see {@link GetDeleteEventsByEventTypeStatusCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for FraudDetectorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>An exception indicating Amazon Fraud Detector does not have the needed permissions. This can occur if you submit a request, such as <code>PutExternalModel</code>, that specifies a role that is not in your account.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An exception indicating an internal server error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An exception indicating the specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>An exception indicating a throttling error.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception indicating a specified value is not allowed.</p>
 *
 * @throws {@link FraudDetectorServiceException}
 * <p>Base exception class for all service exceptions from FraudDetector service.</p>
 *
 *
 * @public
 */
export class GetDeleteEventsByEventTypeStatusCommand extends $Command
  .classBuilder<
    GetDeleteEventsByEventTypeStatusCommandInput,
    GetDeleteEventsByEventTypeStatusCommandOutput,
    FraudDetectorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FraudDetectorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSHawksNestServiceFacade", "GetDeleteEventsByEventTypeStatus", {})
  .n("FraudDetectorClient", "GetDeleteEventsByEventTypeStatusCommand")
  .sc(GetDeleteEventsByEventTypeStatus)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDeleteEventsByEventTypeStatusRequest;
      output: GetDeleteEventsByEventTypeStatusResult;
    };
    sdk: {
      input: GetDeleteEventsByEventTypeStatusCommandInput;
      output: GetDeleteEventsByEventTypeStatusCommandOutput;
    };
  };
}
