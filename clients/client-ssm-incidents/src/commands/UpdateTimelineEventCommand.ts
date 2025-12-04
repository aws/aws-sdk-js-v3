// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateTimelineEventInput, UpdateTimelineEventOutput } from "../models/models_0";
import { UpdateTimelineEvent } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SSMIncidentsClientResolvedConfig } from "../SSMIncidentsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateTimelineEventCommand}.
 */
export interface UpdateTimelineEventCommandInput extends UpdateTimelineEventInput {}
/**
 * @public
 *
 * The output of {@link UpdateTimelineEventCommand}.
 */
export interface UpdateTimelineEventCommandOutput extends UpdateTimelineEventOutput, __MetadataBearer {}

/**
 * <p>Updates a timeline event. You can update events of type <code>Custom Event</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMIncidentsClient, UpdateTimelineEventCommand } from "@aws-sdk/client-ssm-incidents"; // ES Modules import
 * // const { SSMIncidentsClient, UpdateTimelineEventCommand } = require("@aws-sdk/client-ssm-incidents"); // CommonJS import
 * // import type { SSMIncidentsClientConfig } from "@aws-sdk/client-ssm-incidents";
 * const config = {}; // type is SSMIncidentsClientConfig
 * const client = new SSMIncidentsClient(config);
 * const input = { // UpdateTimelineEventInput
 *   clientToken: "STRING_VALUE",
 *   incidentRecordArn: "STRING_VALUE", // required
 *   eventId: "STRING_VALUE", // required
 *   eventTime: new Date("TIMESTAMP"),
 *   eventType: "STRING_VALUE",
 *   eventData: "STRING_VALUE",
 *   eventReferences: [ // EventReferenceList
 *     { // EventReference Union: only one key present
 *       resource: "STRING_VALUE",
 *       relatedItemId: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new UpdateTimelineEventCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateTimelineEventCommandInput - {@link UpdateTimelineEventCommandInput}
 * @returns {@link UpdateTimelineEventCommandOutput}
 * @see {@link UpdateTimelineEventCommandInput} for command's `input` shape.
 * @see {@link UpdateTimelineEventCommandOutput} for command's `response` shape.
 * @see {@link SSMIncidentsClientResolvedConfig | config} for SSMIncidentsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this operation.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource causes an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource which doesn't exist. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services
 *       service.</p>
 *
 * @throws {@link SSMIncidentsServiceException}
 * <p>Base exception class for all service exceptions from SSMIncidents service.</p>
 *
 *
 * @public
 */
export class UpdateTimelineEventCommand extends $Command
  .classBuilder<
    UpdateTimelineEventCommandInput,
    UpdateTimelineEventCommandOutput,
    SSMIncidentsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMIncidentsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SSMIncidents", "UpdateTimelineEvent", {})
  .n("SSMIncidentsClient", "UpdateTimelineEventCommand")
  .sc(UpdateTimelineEvent)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateTimelineEventInput;
      output: {};
    };
    sdk: {
      input: UpdateTimelineEventCommandInput;
      output: UpdateTimelineEventCommandOutput;
    };
  };
}
