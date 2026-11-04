// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListTemplateSharesInput, ListTemplateSharesOutput } from "../models/models_0";
import { ListTemplateShares$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListTemplateSharesCommand}.
 */
export interface ListTemplateSharesCommandInput extends ListTemplateSharesInput {}
/**
 * @public
 *
 * The output of {@link ListTemplateSharesCommand}.
 */
export interface ListTemplateSharesCommandOutput extends ListTemplateSharesOutput, __MetadataBearer {}

/**
 * List review template shares.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, ListTemplateSharesCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, ListTemplateSharesCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * // import type { WellArchitectedClientConfig } from "@aws-sdk/client-wellarchitected";
 * const config = {}; // type is WellArchitectedClientConfig
 * const client = new WellArchitectedClient(config);
 * const input = { // ListTemplateSharesInput
 *   TemplateArn: "STRING_VALUE", // required
 *   SharedWithPrefix: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   Status: "ACCEPTED" || "REJECTED" || "PENDING" || "REVOKED" || "EXPIRED" || "ASSOCIATING" || "ASSOCIATED" || "FAILED",
 * };
 * const command = new ListTemplateSharesCommand(input);
 * const response = await client.send(command);
 * // { // ListTemplateSharesOutput
 * //   TemplateArn: "STRING_VALUE",
 * //   TemplateShareSummaries: [ // TemplateShareSummaries
 * //     { // TemplateShareSummary
 * //       ShareId: "STRING_VALUE",
 * //       SharedWith: "STRING_VALUE",
 * //       Status: "ACCEPTED" || "REJECTED" || "PENDING" || "REVOKED" || "EXPIRED" || "ASSOCIATING" || "ASSOCIATED" || "FAILED",
 * //       StatusMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTemplateSharesCommandInput - {@link ListTemplateSharesCommandInput}
 * @returns {@link ListTemplateSharesCommandOutput}
 * @see {@link ListTemplateSharesCommandInput} for command's `input` shape.
 * @see {@link ListTemplateSharesCommandOutput} for command's `response` shape.
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
export class ListTemplateSharesCommand extends command<ListTemplateSharesCommandInput, ListTemplateSharesCommandOutput>(
  _ep0,
  _mw0,
  "ListTemplateShares",
  ListTemplateShares$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTemplateSharesInput;
      output: ListTemplateSharesOutput;
    };
    sdk: {
      input: ListTemplateSharesCommandInput;
      output: ListTemplateSharesCommandOutput;
    };
  };
}
