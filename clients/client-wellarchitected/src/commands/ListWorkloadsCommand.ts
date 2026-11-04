// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListWorkloadsInput, ListWorkloadsOutput } from "../models/models_0";
import { ListWorkloads$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListWorkloadsCommand}.
 */
export interface ListWorkloadsCommandInput extends ListWorkloadsInput {}
/**
 * @public
 *
 * The output of {@link ListWorkloadsCommand}.
 */
export interface ListWorkloadsCommandOutput extends ListWorkloadsOutput, __MetadataBearer {}

/**
 * Paginated list of workloads.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, ListWorkloadsCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, ListWorkloadsCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * // import type { WellArchitectedClientConfig } from "@aws-sdk/client-wellarchitected";
 * const config = {}; // type is WellArchitectedClientConfig
 * const client = new WellArchitectedClient(config);
 * const input = { // ListWorkloadsInput
 *   WorkloadNamePrefix: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListWorkloadsCommand(input);
 * const response = await client.send(command);
 * // { // ListWorkloadsOutput
 * //   WorkloadSummaries: [ // WorkloadSummaries
 * //     { // WorkloadSummary
 * //       WorkloadId: "STRING_VALUE",
 * //       WorkloadArn: "STRING_VALUE",
 * //       WorkloadName: "STRING_VALUE",
 * //       Owner: "STRING_VALUE",
 * //       UpdatedAt: new Date("TIMESTAMP"),
 * //       Lenses: [ // WorkloadLenses
 * //         "STRING_VALUE",
 * //       ],
 * //       RiskCounts: { // RiskCounts
 * //         "<keys>": Number("int"),
 * //       },
 * //       ImprovementStatus: "NOT_APPLICABLE" || "NOT_STARTED" || "IN_PROGRESS" || "COMPLETE" || "RISK_ACKNOWLEDGED",
 * //       Profiles: [ // WorkloadProfiles
 * //         { // WorkloadProfile
 * //           ProfileArn: "STRING_VALUE",
 * //           ProfileVersion: "STRING_VALUE",
 * //         },
 * //       ],
 * //       PrioritizedRiskCounts: {
 * //         "<keys>": Number("int"),
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListWorkloadsCommandInput - {@link ListWorkloadsCommandInput}
 * @returns {@link ListWorkloadsCommandOutput}
 * @see {@link ListWorkloadsCommandInput} for command's `input` shape.
 * @see {@link ListWorkloadsCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for WellArchitectedClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * User does not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * There is a problem with the Well-Architected Tool API service.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The user input is not valid.
 *
 * @throws {@link WellArchitectedServiceException}
 *
 * Base exception class for all service exceptions from WellArchitected service.
 *
 * @public
 */
export class ListWorkloadsCommand extends command<ListWorkloadsCommandInput, ListWorkloadsCommandOutput>(
  _ep0,
  _mw0,
  "ListWorkloads",
  ListWorkloads$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListWorkloadsInput;
      output: ListWorkloadsOutput;
    };
    sdk: {
      input: ListWorkloadsCommandInput;
      output: ListWorkloadsCommandOutput;
    };
  };
}
