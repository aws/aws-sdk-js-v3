// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListRequest, ListSubjectsResponse } from "../models/models_0";
import { ListSubjects$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListSubjectsCommand}.
 */
export interface ListSubjectsCommandInput extends ListRequest {}
/**
 * @public
 *
 * The output of {@link ListSubjectsCommand}.
 */
export interface ListSubjectsCommandOutput extends ListSubjectsResponse, __MetadataBearer {}

/**
 * Lists the subjects in the authenticated account and Amazon Web Services Region.
 *
 * **Required permissions:** `rolesanywhere:ListSubjects`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RolesAnywhereClient, ListSubjectsCommand } from "@aws-sdk/client-rolesanywhere"; // ES Modules import
 * // const { RolesAnywhereClient, ListSubjectsCommand } = require("@aws-sdk/client-rolesanywhere"); // CommonJS import
 * // import type { RolesAnywhereClientConfig } from "@aws-sdk/client-rolesanywhere";
 * const config = {}; // type is RolesAnywhereClientConfig
 * const client = new RolesAnywhereClient(config);
 * const input = { // ListRequest
 *   nextToken: "STRING_VALUE",
 *   pageSize: Number("int"),
 * };
 * const command = new ListSubjectsCommand(input);
 * const response = await client.send(command);
 * // { // ListSubjectsResponse
 * //   subjects: [ // SubjectSummaries
 * //     { // SubjectSummary
 * //       subjectArn: "STRING_VALUE",
 * //       subjectId: "STRING_VALUE",
 * //       enabled: true || false,
 * //       x509Subject: "STRING_VALUE",
 * //       lastSeenAt: new Date("TIMESTAMP"),
 * //       createdAt: new Date("TIMESTAMP"),
 * //       updatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSubjectsCommandInput - {@link ListSubjectsCommandInput}
 * @returns {@link ListSubjectsCommandOutput}
 * @see {@link ListSubjectsCommandInput} for command's `input` shape.
 * @see {@link ListSubjectsCommandOutput} for command's `response` shape.
 * @see {@link RolesAnywhereClientResolvedConfig | config} for RolesAnywhereClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Validation exception error.
 *
 * @throws {@link RolesAnywhereServiceException}
 *
 * Base exception class for all service exceptions from RolesAnywhere service.
 *
 * @public
 */
export class ListSubjectsCommand extends command<ListSubjectsCommandInput, ListSubjectsCommandOutput>(
  _ep0,
  _mw0,
  "ListSubjects",
  ListSubjects$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRequest;
      output: ListSubjectsResponse;
    };
    sdk: {
      input: ListSubjectsCommandInput;
      output: ListSubjectsCommandOutput;
    };
  };
}
