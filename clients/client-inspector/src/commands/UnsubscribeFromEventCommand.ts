// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { UnsubscribeFromEventRequest } from "../models/models_0";
import { de_UnsubscribeFromEventCommand, se_UnsubscribeFromEventCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UnsubscribeFromEventCommand}.
 */
export interface UnsubscribeFromEventCommandInput extends UnsubscribeFromEventRequest {}
/**
 * @public
 *
 * The output of {@link UnsubscribeFromEventCommand}.
 */
export interface UnsubscribeFromEventCommandOutput extends __MetadataBearer {}

/**
 * <p>Disables the process of sending Amazon Simple Notification Service (SNS)
 *          notifications about a specified event to a specified SNS topic.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, UnsubscribeFromEventCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, UnsubscribeFromEventCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const input = { // UnsubscribeFromEventRequest
 *   resourceArn: "STRING_VALUE", // required
 *   event: "ASSESSMENT_RUN_STARTED" || "ASSESSMENT_RUN_COMPLETED" || "ASSESSMENT_RUN_STATE_CHANGED" || "FINDING_REPORTED" || "OTHER", // required
 *   topicArn: "STRING_VALUE", // required
 * };
 * const command = new UnsubscribeFromEventCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UnsubscribeFromEventCommandInput - {@link UnsubscribeFromEventCommandInput}
 * @returns {@link UnsubscribeFromEventCommandOutput}
 * @see {@link UnsubscribeFromEventCommandInput} for command's `input` shape.
 * @see {@link UnsubscribeFromEventCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for InspectorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have required permissions to access the requested resource.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because an invalid or out-of-range value was supplied for an
 *          input parameter.</p>
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *  <p>The request was rejected because it referenced an entity that does not exist. The
 *          error code describes the entity.</p>
 *
 * @throws {@link ServiceTemporarilyUnavailableException} (server fault)
 *  <p>The serice is temporary unavailable.</p>
 *
 * @throws {@link InspectorServiceException}
 * <p>Base exception class for all service exceptions from Inspector service.</p>
 *
 * @public
 * @example Unsubscribe from event
 * ```javascript
 * // Disables the process of sending Amazon Simple Notification Service (SNS) notifications about a specified event to a specified SNS topic.
 * const input = {
 *   "event": "ASSESSMENT_RUN_COMPLETED",
 *   "resourceArn": "arn:aws:inspector:us-west-2:123456789012:target/0-nvgVhaxX/template/0-7sbz2Kz0",
 *   "topicArn": "arn:aws:sns:us-west-2:123456789012:exampletopic"
 * };
 * const command = new UnsubscribeFromEventCommand(input);
 * await client.send(command);
 * // example id: unsubscribe-from-event-1481067781705
 * ```
 *
 */
export class UnsubscribeFromEventCommand extends $Command
  .classBuilder<
    UnsubscribeFromEventCommandInput,
    UnsubscribeFromEventCommandOutput,
    InspectorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: InspectorClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("InspectorService", "UnsubscribeFromEvent", {})
  .n("InspectorClient", "UnsubscribeFromEventCommand")
  .f(void 0, void 0)
  .ser(se_UnsubscribeFromEventCommand)
  .de(de_UnsubscribeFromEventCommand)
  .build() {}
