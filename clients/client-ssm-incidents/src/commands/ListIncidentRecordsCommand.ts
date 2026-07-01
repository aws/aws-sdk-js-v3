// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListIncidentRecordsInput, ListIncidentRecordsOutput } from "../models/models_0";
import { ListIncidentRecords$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListIncidentRecordsCommand}.
 */
export interface ListIncidentRecordsCommandInput extends ListIncidentRecordsInput {}
/**
 * @public
 *
 * The output of {@link ListIncidentRecordsCommand}.
 */
export interface ListIncidentRecordsCommandOutput extends ListIncidentRecordsOutput, __MetadataBearer {}

/**
 * <p>Lists all incident records in your account. Use this command to retrieve the Amazon
 *       Resource Name (ARN) of the incident record you want to update. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMIncidentsClient, ListIncidentRecordsCommand } from "@aws-sdk/client-ssm-incidents"; // ES Modules import
 * // const { SSMIncidentsClient, ListIncidentRecordsCommand } = require("@aws-sdk/client-ssm-incidents"); // CommonJS import
 * // import type { SSMIncidentsClientConfig } from "@aws-sdk/client-ssm-incidents";
 * const config = {}; // type is SSMIncidentsClientConfig
 * const client = new SSMIncidentsClient(config);
 * const input = { // ListIncidentRecordsInput
 *   filters: [ // FilterList
 *     { // Filter
 *       key: "STRING_VALUE", // required
 *       condition: { // Condition Union: only one key present
 *         before: new Date("TIMESTAMP"),
 *         after: new Date("TIMESTAMP"),
 *         equals: { // AttributeValueList Union: only one key present
 *           stringValues: [ // StringList
 *             "STRING_VALUE",
 *           ],
 *           integerValues: [ // IntegerList
 *             Number("int"),
 *           ],
 *         },
 *       },
 *     },
 *   ],
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListIncidentRecordsCommand(input);
 * const response = await client.send(command);
 * // { // ListIncidentRecordsOutput
 * //   incidentRecordSummaries: [ // IncidentRecordSummaryList // required
 * //     { // IncidentRecordSummary
 * //       arn: "STRING_VALUE", // required
 * //       title: "STRING_VALUE", // required
 * //       status: "STRING_VALUE", // required
 * //       impact: Number("int"), // required
 * //       creationTime: new Date("TIMESTAMP"), // required
 * //       resolvedTime: new Date("TIMESTAMP"),
 * //       incidentRecordSource: { // IncidentRecordSource
 * //         createdBy: "STRING_VALUE", // required
 * //         invokedBy: "STRING_VALUE",
 * //         resourceArn: "STRING_VALUE",
 * //         source: "STRING_VALUE", // required
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListIncidentRecordsCommandInput - {@link ListIncidentRecordsCommandInput}
 * @returns {@link ListIncidentRecordsCommandOutput}
 * @see {@link ListIncidentRecordsCommandInput} for command's `input` shape.
 * @see {@link ListIncidentRecordsCommandOutput} for command's `response` shape.
 * @see {@link SSMIncidentsClientResolvedConfig | config} for SSMIncidentsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
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
export class ListIncidentRecordsCommand extends command<ListIncidentRecordsCommandInput, ListIncidentRecordsCommandOutput>(
  _ep0,
  _mw0,
  "ListIncidentRecords",
  ListIncidentRecords$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListIncidentRecordsInput;
      output: ListIncidentRecordsOutput;
    };
    sdk: {
      input: ListIncidentRecordsCommandInput;
      output: ListIncidentRecordsCommandOutput;
    };
  };
}
