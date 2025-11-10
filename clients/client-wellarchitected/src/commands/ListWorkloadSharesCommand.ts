// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListWorkloadSharesInput, ListWorkloadSharesOutput } from "../models/models_0";
import { ListWorkloadShares } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, WellArchitectedClientResolvedConfig } from "../WellArchitectedClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>List the workload shares associated with the workload.</p>
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
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There is a problem with the Well-Architected Tool API service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The user input is not valid.</p>
 *
 * @throws {@link WellArchitectedServiceException}
 * <p>Base exception class for all service exceptions from WellArchitected service.</p>
 *
 *
 * @public
 */
export class ListWorkloadSharesCommand extends $Command
  .classBuilder<
    ListWorkloadSharesCommandInput,
    ListWorkloadSharesCommandOutput,
    WellArchitectedClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WellArchitectedClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WellArchitectedApiServiceLambda", "ListWorkloadShares", {})
  .n("WellArchitectedClient", "ListWorkloadSharesCommand")
  .sc(ListWorkloadShares)
  .build() {
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
