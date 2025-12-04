// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  CloudWatchEventsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudWatchEventsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreatePartnerEventSourceRequest, CreatePartnerEventSourceResponse } from "../models/models_0";
import { CreatePartnerEventSource } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreatePartnerEventSourceCommand}.
 */
export interface CreatePartnerEventSourceCommandInput extends CreatePartnerEventSourceRequest {}
/**
 * @public
 *
 * The output of {@link CreatePartnerEventSourceCommand}.
 */
export interface CreatePartnerEventSourceCommandOutput extends CreatePartnerEventSourceResponse, __MetadataBearer {}

/**
 * <p>Called by an SaaS partner to create a partner event source. This operation is not used by
 *       Amazon Web Services customers.</p>
 *          <p>Each partner event source can be used by one Amazon Web Services account to create a matching partner
 *       event bus in that Amazon Web Services account. A SaaS partner must create one partner event source for each
 *       Amazon Web Services account that wants to receive those event types. </p>
 *          <p>A partner event source creates events based on resources within the SaaS partner's service
 *       or application.</p>
 *          <p>An Amazon Web Services account that creates a partner event bus that matches the partner event source can
 *       use that event bus to receive events from the partner, and then process them using Amazon Web Services Events
 *       rules and targets.</p>
 *          <p>Partner event source names follow this format:</p>
 *          <p>
 *             <code>
 *                <i>partner_name</i>/<i>event_namespace</i>/<i>event_name</i>
 *             </code>
 *          </p>
 *          <p>
 *             <i>partner_name</i> is determined during partner registration and identifies
 *       the partner to Amazon Web Services customers. <i>event_namespace</i> is determined by the
 *       partner and is a way for the partner to categorize their events.
 *         <i>event_name</i> is determined by the partner, and should uniquely identify
 *       an event-generating resource within the partner system. The combination of
 *         <i>event_namespace</i> and <i>event_name</i> should help Amazon Web Services
 *       customers decide whether to create an event bus to receive these events.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchEventsClient, CreatePartnerEventSourceCommand } from "@aws-sdk/client-cloudwatch-events"; // ES Modules import
 * // const { CloudWatchEventsClient, CreatePartnerEventSourceCommand } = require("@aws-sdk/client-cloudwatch-events"); // CommonJS import
 * // import type { CloudWatchEventsClientConfig } from "@aws-sdk/client-cloudwatch-events";
 * const config = {}; // type is CloudWatchEventsClientConfig
 * const client = new CloudWatchEventsClient(config);
 * const input = { // CreatePartnerEventSourceRequest
 *   Name: "STRING_VALUE", // required
 *   Account: "STRING_VALUE", // required
 * };
 * const command = new CreatePartnerEventSourceCommand(input);
 * const response = await client.send(command);
 * // { // CreatePartnerEventSourceResponse
 * //   EventSourceArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreatePartnerEventSourceCommandInput - {@link CreatePartnerEventSourceCommandInput}
 * @returns {@link CreatePartnerEventSourceCommandOutput}
 * @see {@link CreatePartnerEventSourceCommandInput} for command's `input` shape.
 * @see {@link CreatePartnerEventSourceCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchEventsClientResolvedConfig | config} for CloudWatchEventsClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>There is concurrent modification on a rule, target, archive, or replay.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception occurs due to unexpected causes.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request failed because it attempted to create resource beyond the allowed service
 *       quota.</p>
 *
 * @throws {@link OperationDisabledException} (client fault)
 *  <p>The operation you are attempting is not available in this region.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The resource you are trying to create already exists.</p>
 *
 * @throws {@link CloudWatchEventsServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchEvents service.</p>
 *
 *
 * @public
 */
export class CreatePartnerEventSourceCommand extends $Command
  .classBuilder<
    CreatePartnerEventSourceCommandInput,
    CreatePartnerEventSourceCommandOutput,
    CloudWatchEventsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchEventsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSEvents", "CreatePartnerEventSource", {})
  .n("CloudWatchEventsClient", "CreatePartnerEventSourceCommand")
  .sc(CreatePartnerEventSource)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreatePartnerEventSourceRequest;
      output: CreatePartnerEventSourceResponse;
    };
    sdk: {
      input: CreatePartnerEventSourceCommandInput;
      output: CreatePartnerEventSourceCommandOutput;
    };
  };
}
