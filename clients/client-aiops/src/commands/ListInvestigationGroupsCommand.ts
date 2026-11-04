// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListInvestigationGroupsInput, ListInvestigationGroupsOutput } from "../models/models_0";
import { ListInvestigationGroups$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListInvestigationGroupsCommand}.
 */
export interface ListInvestigationGroupsCommandInput extends ListInvestigationGroupsInput {}
/**
 * @public
 *
 * The output of {@link ListInvestigationGroupsCommand}.
 */
export interface ListInvestigationGroupsCommandOutput extends ListInvestigationGroupsOutput, __MetadataBearer {}

/**
 * Returns the ARN and name of each investigation group in the account.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AIOpsClient, ListInvestigationGroupsCommand } from "@aws-sdk/client-aiops"; // ES Modules import
 * // const { AIOpsClient, ListInvestigationGroupsCommand } = require("@aws-sdk/client-aiops"); // CommonJS import
 * // import type { AIOpsClientConfig } from "@aws-sdk/client-aiops";
 * const config = {}; // type is AIOpsClientConfig
 * const client = new AIOpsClient(config);
 * const input = { // ListInvestigationGroupsInput
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListInvestigationGroupsCommand(input);
 * const response = await client.send(command);
 * // { // ListInvestigationGroupsOutput
 * //   nextToken: "STRING_VALUE",
 * //   investigationGroups: [ // InvestigationGroups
 * //     { // ListInvestigationGroupsModel
 * //       arn: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListInvestigationGroupsCommandInput - {@link ListInvestigationGroupsCommandInput}
 * @returns {@link ListInvestigationGroupsCommandOutput}
 * @see {@link ListInvestigationGroupsCommandInput} for command's `input` shape.
 * @see {@link ListInvestigationGroupsCommandOutput} for command's `response` shape.
 * @see {@link AIOpsClientResolvedConfig | config} for AIOpsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have sufficient permissions to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal server error occurred. You can try again later.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was throttled because of quota limits. You can try again later.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * This operation couldn't be completed because of a conflict in resource states.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * Access id denied for this operation, or this operation is not valid for the specified resource.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource doesn't exist.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * This operation or its parameters aren't formatted correctly.
 *
 * @throws {@link AIOpsServiceException}
 *
 * Base exception class for all service exceptions from AIOps service.
 *
 * @public
 */
export class ListInvestigationGroupsCommand extends command<ListInvestigationGroupsCommandInput, ListInvestigationGroupsCommandOutput>(
  _ep0,
  _mw0,
  "ListInvestigationGroups",
  ListInvestigationGroups$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListInvestigationGroupsInput;
      output: ListInvestigationGroupsOutput;
    };
    sdk: {
      input: ListInvestigationGroupsCommandInput;
      output: ListInvestigationGroupsCommandOutput;
    };
  };
}
