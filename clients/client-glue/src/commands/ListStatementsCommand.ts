// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListStatementsRequest, ListStatementsResponse } from "../models/models_2";
import { ListStatements$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListStatementsCommand}.
 */
export interface ListStatementsCommandInput extends ListStatementsRequest {}
/**
 * @public
 *
 * The output of {@link ListStatementsCommand}.
 */
export interface ListStatementsCommandOutput extends ListStatementsResponse, __MetadataBearer {}

/**
 * Lists statements for the session.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, ListStatementsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, ListStatementsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // ListStatementsRequest
 *   SessionId: "STRING_VALUE", // required
 *   RequestOrigin: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListStatementsCommand(input);
 * const response = await client.send(command);
 * // { // ListStatementsResponse
 * //   Statements: [ // StatementList
 * //     { // Statement
 * //       Id: Number("int"),
 * //       Code: "STRING_VALUE",
 * //       State: "WAITING" || "RUNNING" || "AVAILABLE" || "CANCELLING" || "CANCELLED" || "ERROR",
 * //       Output: { // StatementOutput
 * //         Data: { // StatementOutputData
 * //           TextPlain: "STRING_VALUE",
 * //         },
 * //         ExecutionCount: Number("int"),
 * //         Status: "WAITING" || "RUNNING" || "AVAILABLE" || "CANCELLING" || "CANCELLED" || "ERROR",
 * //         ErrorName: "STRING_VALUE",
 * //         ErrorValue: "STRING_VALUE",
 * //         Traceback: [ // OrchestrationStringList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       Progress: Number("double"),
 * //       StartedOn: Number("long"),
 * //       CompletedOn: Number("long"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListStatementsCommandInput - {@link ListStatementsCommandInput}
 * @returns {@link ListStatementsCommandOutput}
 * @see {@link ListStatementsCommandInput} for command's `input` shape.
 * @see {@link ListStatementsCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access to a resource was denied.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *
 * A specified entity does not exist
 *
 * @throws {@link IllegalSessionStateException} (client fault)
 *
 * The session is in an invalid state to perform a requested operation.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * An internal service error occurred.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * The input provided was not valid.
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *
 * The operation timed out.
 *
 * @throws {@link GlueServiceException}
 *
 * Base exception class for all service exceptions from Glue service.
 *
 * @public
 */
export class ListStatementsCommand extends command<ListStatementsCommandInput, ListStatementsCommandOutput>(
  _ep0,
  _mw0,
  "ListStatements",
  ListStatements$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListStatementsRequest;
      output: ListStatementsResponse;
    };
    sdk: {
      input: ListStatementsCommandInput;
      output: ListStatementsCommandOutput;
    };
  };
}
