// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import type { PutEventTypeRequest, PutEventTypeResult } from "../models/models_0";
import { PutEventType$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutEventTypeCommand}.
 */
export interface PutEventTypeCommandInput extends PutEventTypeRequest {}
/**
 * @public
 *
 * The output of {@link PutEventTypeCommand}.
 */
export interface PutEventTypeCommandOutput extends PutEventTypeResult, __MetadataBearer {}

/**
 * <p>Creates or updates an event type. An event is a business activity that is evaluated for fraud risk. With Amazon Fraud Detector, you generate fraud predictions for events. An event type defines the structure for an event sent to Amazon Fraud Detector. This includes the variables sent as part of the event, the entity performing the event (such as a customer), and the labels that classify the event. Example event types include online payment transactions, account registrations, and authentications.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, PutEventTypeCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, PutEventTypeCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * // import type { FraudDetectorClientConfig } from "@aws-sdk/client-frauddetector";
 * const config = {}; // type is FraudDetectorClientConfig
 * const client = new FraudDetectorClient(config);
 * const input = { // PutEventTypeRequest
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   eventVariables: [ // NonEmptyListOfStrings // required
 *     "STRING_VALUE",
 *   ],
 *   labels: [ // ListOfStrings
 *     "STRING_VALUE",
 *   ],
 *   entityTypes: [ // required
 *     "STRING_VALUE",
 *   ],
 *   eventIngestion: "ENABLED" || "DISABLED",
 *   tags: [ // tagList
 *     { // Tag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 *   eventOrchestration: { // EventOrchestration
 *     eventBridgeEnabled: true || false, // required
 *   },
 * };
 * const command = new PutEventTypeCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutEventTypeCommandInput - {@link PutEventTypeCommandInput}
 * @returns {@link PutEventTypeCommandOutput}
 * @see {@link PutEventTypeCommandInput} for command's `input` shape.
 * @see {@link PutEventTypeCommandOutput} for command's `response` shape.
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
export class PutEventTypeCommand extends $Command
  .classBuilder<
    PutEventTypeCommandInput,
    PutEventTypeCommandOutput,
    FraudDetectorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FraudDetectorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSHawksNestServiceFacade", "PutEventType", {})
  .n("FraudDetectorClient", "PutEventTypeCommand")
  .sc(PutEventType$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutEventTypeRequest;
      output: {};
    };
    sdk: {
      input: PutEventTypeCommandInput;
      output: PutEventTypeCommandOutput;
    };
  };
}
