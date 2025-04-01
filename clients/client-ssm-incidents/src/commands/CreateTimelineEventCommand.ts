// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateTimelineEventInput, CreateTimelineEventOutput } from "../models/models_0";
import { de_CreateTimelineEventCommand, se_CreateTimelineEventCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SSMIncidentsClientResolvedConfig } from "../SSMIncidentsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateTimelineEventCommand}.
 */
export interface CreateTimelineEventCommandInput extends CreateTimelineEventInput {}
/**
 * @public
 *
 * The output of {@link CreateTimelineEventCommand}.
 */
export interface CreateTimelineEventCommandOutput extends CreateTimelineEventOutput, __MetadataBearer {}

/**
 * <p>Creates a custom timeline event on the incident details page of an incident record.
 *       Incident Manager automatically creates timeline events that mark key moments during an incident.
 *       You can create custom timeline events to mark important events that Incident Manager can detect
 *       automatically.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMIncidentsClient, CreateTimelineEventCommand } from "@aws-sdk/client-ssm-incidents"; // ES Modules import
 * // const { SSMIncidentsClient, CreateTimelineEventCommand } = require("@aws-sdk/client-ssm-incidents"); // CommonJS import
 * const client = new SSMIncidentsClient(config);
 * const input = { // CreateTimelineEventInput
 *   clientToken: "STRING_VALUE",
 *   incidentRecordArn: "STRING_VALUE", // required
 *   eventTime: new Date("TIMESTAMP"), // required
 *   eventType: "STRING_VALUE", // required
 *   eventData: "STRING_VALUE", // required
 *   eventReferences: [ // EventReferenceList
 *     { // EventReference Union: only one key present
 *       resource: "STRING_VALUE",
 *       relatedItemId: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateTimelineEventCommand(input);
 * const response = await client.send(command);
 * // { // CreateTimelineEventOutput
 * //   incidentRecordArn: "STRING_VALUE", // required
 * //   eventId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateTimelineEventCommandInput - {@link CreateTimelineEventCommandInput}
 * @returns {@link CreateTimelineEventCommandOutput}
 * @see {@link CreateTimelineEventCommandInput} for command's `input` shape.
 * @see {@link CreateTimelineEventCommandOutput} for command's `response` shape.
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
export class CreateTimelineEventCommand extends $Command
  .classBuilder<
    CreateTimelineEventCommandInput,
    CreateTimelineEventCommandOutput,
    SSMIncidentsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMIncidentsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SSMIncidents", "CreateTimelineEvent", {})
  .n("SSMIncidentsClient", "CreateTimelineEventCommand")
  .f(void 0, void 0)
  .ser(se_CreateTimelineEventCommand)
  .de(de_CreateTimelineEventCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateTimelineEventInput;
      output: CreateTimelineEventOutput;
    };
    sdk: {
      input: CreateTimelineEventCommandInput;
      output: CreateTimelineEventCommandOutput;
    };
  };
}
