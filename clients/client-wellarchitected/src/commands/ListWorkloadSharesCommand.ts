// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListWorkloadSharesInput, ListWorkloadSharesOutput } from "../models/models_0";
import { ListWorkloadShares$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListWorkloadSharesCommand}.
 */
export interface ListWorkloadSharesCommandInput extends ListWorkloadSharesInput {}
/**
 * @public
 *
 * The output of {@link ListWorkloadSharesCommand}.
 */
export interface ListWorkloadSharesCommandOutput extends ListWorkloadSharesOutput, __MetadataBearer {}

/**
 * List the workload shares associated with the workload.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, ListWorkloadSharesCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, ListWorkloadSharesCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * // import type { WellArchitectedClientConfig } from "@aws-sdk/client-wellarchitected";
 * const config = {}; // type is WellArchitectedClientConfig
 * const client = new WellArchitectedClient(config);
 * const input = { // ListWorkloadSharesInput
 *   WorkloadId: "STRING_VALUE", // required
 *   SharedWithPrefix: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   Status: "ACCEPTED" || "REJECTED" || "PENDING" || "REVOKED" || "EXPIRED" || "ASSOCIATING" || "ASSOCIATED" || "FAILED",
 * };
 * const command = new ListWorkloadSharesCommand(input);
 * const response = await client.send(command);
 * // { // ListWorkloadSharesOutput
 * //   WorkloadId: "STRING_VALUE",
 * //   WorkloadShareSummaries: [ // WorkloadShareSummaries
 * //     { // WorkloadShareSummary
 * //       ShareId: "STRING_VALUE",
 * //       SharedWith: "STRING_VALUE",
 * //       PermissionType: "READONLY" || "CONTRIBUTOR",
 * //       Status: "ACCEPTED" || "REJECTED" || "PENDING" || "REVOKED" || "EXPIRED" || "ASSOCIATING" || "ASSOCIATED" || "FAILED",
 * //       StatusMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListWorkloadSharesCommandInput - {@link ListWorkloadSharesCommandInput}
 * @returns {@link ListWorkloadSharesCommandOutput}
 * @see {@link ListWorkloadSharesCommandInput} for command's `input` shape.
 * @see {@link ListWorkloadSharesCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource was not found.
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
export class ListWorkloadSharesCommand extends command<ListWorkloadSharesCommandInput, ListWorkloadSharesCommandOutput>(
  _ep0,
  _mw0,
  "ListWorkloadShares",
  ListWorkloadShares$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListWorkloadSharesInput;
      output: ListWorkloadSharesOutput;
    };
    sdk: {
      input: ListWorkloadSharesCommandInput;
      output: ListWorkloadSharesCommandOutput;
    };
  };
}
