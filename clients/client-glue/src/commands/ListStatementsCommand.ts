// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import type { ListStatementsRequest, ListStatementsResponse } from "../models/models_2";
import { ListStatements } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Lists statements for the session.</p>
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
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link IllegalSessionStateException} (client fault)
 *  <p>The session is in an invalid state to perform a requested operation.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class ListStatementsCommand extends $Command
  .classBuilder<
    ListStatementsCommandInput,
    ListStatementsCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "ListStatements", {})
  .n("GlueClient", "ListStatementsCommand")
  .sc(ListStatements)
  .build() {
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
