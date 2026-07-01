// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListIncidentFindingsInput, ListIncidentFindingsOutput } from "../models/models_0";
import { ListIncidentFindings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListIncidentFindingsCommand}.
 */
export interface ListIncidentFindingsCommandInput extends ListIncidentFindingsInput {}
/**
 * @public
 *
 * The output of {@link ListIncidentFindingsCommand}.
 */
export interface ListIncidentFindingsCommandOutput extends ListIncidentFindingsOutput, __MetadataBearer {}

/**
 * <p>Retrieves a list of the IDs of findings, plus their last modified times, that have been
 *       identified for a specified incident. A finding represents a recent application environment
 *       change made by an CloudFormation stack creation or update or an CodeDeploy
 *       deployment that can be investigated as a potential cause of the incident.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMIncidentsClient, ListIncidentFindingsCommand } from "@aws-sdk/client-ssm-incidents"; // ES Modules import
 * // const { SSMIncidentsClient, ListIncidentFindingsCommand } = require("@aws-sdk/client-ssm-incidents"); // CommonJS import
 * // import type { SSMIncidentsClientConfig } from "@aws-sdk/client-ssm-incidents";
 * const config = {}; // type is SSMIncidentsClientConfig
 * const client = new SSMIncidentsClient(config);
 * const input = { // ListIncidentFindingsInput
 *   incidentRecordArn: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListIncidentFindingsCommand(input);
 * const response = await client.send(command);
 * // { // ListIncidentFindingsOutput
 * //   findings: [ // FindingSummaryList // required
 * //     { // FindingSummary
 * //       id: "STRING_VALUE", // required
 * //       lastModifiedTime: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListIncidentFindingsCommandInput - {@link ListIncidentFindingsCommandInput}
 * @returns {@link ListIncidentFindingsCommandOutput}
 * @see {@link ListIncidentFindingsCommandInput} for command's `input` shape.
 * @see {@link ListIncidentFindingsCommandOutput} for command's `response` shape.
 * @see {@link SSMIncidentsClientResolvedConfig | config} for SSMIncidentsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this operation.</p>
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
export class ListIncidentFindingsCommand extends command<ListIncidentFindingsCommandInput, ListIncidentFindingsCommandOutput>(
  _ep0,
  _mw0,
  "ListIncidentFindings",
  ListIncidentFindings$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListIncidentFindingsInput;
      output: ListIncidentFindingsOutput;
    };
    sdk: {
      input: ListIncidentFindingsCommandInput;
      output: ListIncidentFindingsCommandOutput;
    };
  };
}
