// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateTimelineEventInput, CreateTimelineEventOutput } from "../models/models_0";
import { CreateTimelineEvent$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates a custom timeline event on the incident details page of an incident record. Incident Manager automatically creates timeline events that mark key moments during an incident. You can create custom timeline events to mark important events that Incident Manager can detect automatically.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMIncidentsClient, CreateTimelineEventCommand } from "@aws-sdk/client-ssm-incidents"; // ES Modules import
 * // const { SSMIncidentsClient, CreateTimelineEventCommand } = require("@aws-sdk/client-ssm-incidents"); // CommonJS import
 * // import type { SSMIncidentsClientConfig } from "@aws-sdk/client-ssm-incidents";
 * const config = {}; // type is SSMIncidentsClientConfig
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
 *
 * You don't have sufficient access to perform this operation.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Updating or deleting a resource causes an inconsistent state.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception or failure.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Request references a resource which doesn't exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link SSMIncidentsServiceException}
 *
 * Base exception class for all service exceptions from SSMIncidents service.
 *
 * @public
 */
export class CreateTimelineEventCommand extends command<CreateTimelineEventCommandInput, CreateTimelineEventCommandOutput>(
  _ep0,
  _mw0,
  "CreateTimelineEvent",
  CreateTimelineEvent$
) {
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
