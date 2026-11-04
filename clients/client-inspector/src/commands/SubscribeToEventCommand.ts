// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SubscribeToEventRequest } from "../models/models_0";
import { SubscribeToEvent$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link SubscribeToEventCommand}.
 */
export interface SubscribeToEventCommandInput extends SubscribeToEventRequest {}
/**
 * @public
 *
 * The output of {@link SubscribeToEventCommand}.
 */
export interface SubscribeToEventCommandOutput extends __MetadataBearer {}

/**
 * Enables the process of sending Amazon Simple Notification Service (SNS) notifications about a specified event to a specified SNS topic.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, SubscribeToEventCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, SubscribeToEventCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * // import type { InspectorClientConfig } from "@aws-sdk/client-inspector";
 * const config = {}; // type is InspectorClientConfig
 * const client = new InspectorClient(config);
 * const input = { // SubscribeToEventRequest
 *   resourceArn: "STRING_VALUE", // required
 *   event: "ASSESSMENT_RUN_STARTED" || "ASSESSMENT_RUN_COMPLETED" || "ASSESSMENT_RUN_STATE_CHANGED" || "FINDING_REPORTED" || "OTHER", // required
 *   topicArn: "STRING_VALUE", // required
 * };
 * const command = new SubscribeToEventCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SubscribeToEventCommandInput - {@link SubscribeToEventCommandInput}
 * @returns {@link SubscribeToEventCommandOutput}
 * @see {@link SubscribeToEventCommandInput} for command's `input` shape.
 * @see {@link SubscribeToEventCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for InspectorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have required permissions to access the requested resource.
 *
 * @throws {@link InternalException} (server fault)
 *
 * Internal server error.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * The request was rejected because an invalid or out-of-range value was supplied for an input parameter.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The request was rejected because it attempted to create resources beyond the current AWS account limits. The error code describes the limit exceeded.
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *
 * The request was rejected because it referenced an entity that does not exist. The error code describes the entity.
 *
 * @throws {@link ServiceTemporarilyUnavailableException} (server fault)
 *
 * The serice is temporary unavailable.
 *
 * @throws {@link InspectorServiceException}
 *
 * Base exception class for all service exceptions from Inspector service.
 *
 * @example Subscribe to event
 * ```javascript
 * // Enables the process of sending Amazon Simple Notification Service (SNS) notifications about a specified event to a specified SNS topic.
 * const input = {
 *   event: "ASSESSMENT_RUN_COMPLETED",
 *   resourceArn: "arn:aws:inspector:us-west-2:123456789012:target/0-nvgVhaxX/template/0-7sbz2Kz0",
 *   topicArn: "arn:aws:sns:us-west-2:123456789012:exampletopic"
 * };
 * const command = new SubscribeToEventCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class SubscribeToEventCommand extends command<SubscribeToEventCommandInput, SubscribeToEventCommandOutput>(
  _ep0,
  _mw0,
  "SubscribeToEvent",
  SubscribeToEvent$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SubscribeToEventRequest;
      output: {};
    };
    sdk: {
      input: SubscribeToEventCommandInput;
      output: SubscribeToEventCommandOutput;
    };
  };
}
