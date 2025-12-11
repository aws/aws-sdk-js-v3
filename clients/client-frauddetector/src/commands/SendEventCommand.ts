// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import type { SendEventRequest, SendEventResult } from "../models/models_0";
import { SendEvent } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SendEventCommand}.
 */
export interface SendEventCommandInput extends SendEventRequest {}
/**
 * @public
 *
 * The output of {@link SendEventCommand}.
 */
export interface SendEventCommandOutput extends SendEventResult, __MetadataBearer {}

/**
 * <p>Stores events in Amazon Fraud Detector without generating fraud predictions for those events. For example, you can use <code>SendEvent</code> to upload a historical dataset, which you can then later use to train a model.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, SendEventCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, SendEventCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * // import type { FraudDetectorClientConfig } from "@aws-sdk/client-frauddetector";
 * const config = {}; // type is FraudDetectorClientConfig
 * const client = new FraudDetectorClient(config);
 * const input = { // SendEventRequest
 *   eventId: "STRING_VALUE", // required
 *   eventTypeName: "STRING_VALUE", // required
 *   eventTimestamp: "STRING_VALUE", // required
 *   eventVariables: { // EventVariableMap // required
 *     "<keys>": "STRING_VALUE",
 *   },
 *   assignedLabel: "STRING_VALUE",
 *   labelTimestamp: "STRING_VALUE",
 *   entities: [ // listOfEntities // required
 *     { // Entity
 *       entityType: "STRING_VALUE", // required
 *       entityId: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new SendEventCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SendEventCommandInput - {@link SendEventCommandInput}
 * @returns {@link SendEventCommandOutput}
 * @see {@link SendEventCommandInput} for command's `input` shape.
 * @see {@link SendEventCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for FraudDetectorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>An exception indicating Amazon Fraud Detector does not have the needed permissions. This can occur if you submit a request, such as <code>PutExternalModel</code>, that specifies a role that is not in your account.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>An exception indicating there was a conflict during a delete operation.</p>
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
export class SendEventCommand extends $Command
  .classBuilder<
    SendEventCommandInput,
    SendEventCommandOutput,
    FraudDetectorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FraudDetectorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSHawksNestServiceFacade", "SendEvent", {})
  .n("FraudDetectorClient", "SendEventCommand")
  .sc(SendEvent)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SendEventRequest;
      output: {};
    };
    sdk: {
      input: SendEventCommandInput;
      output: SendEventCommandOutput;
    };
  };
}
