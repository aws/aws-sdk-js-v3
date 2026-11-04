// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetStatementRequest, GetStatementResponse } from "../models/models_2";
import { GetStatement$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetStatementCommand}.
 */
export interface GetStatementCommandInput extends GetStatementRequest {}
/**
 * @public
 *
 * The output of {@link GetStatementCommand}.
 */
export interface GetStatementCommandOutput extends GetStatementResponse, __MetadataBearer {}

/**
 * Retrieves the statement.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetStatementCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetStatementCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // GetStatementRequest
 *   SessionId: "STRING_VALUE", // required
 *   Id: Number("int"), // required
 *   RequestOrigin: "STRING_VALUE",
 * };
 * const command = new GetStatementCommand(input);
 * const response = await client.send(command);
 * // { // GetStatementResponse
 * //   Statement: { // Statement
 * //     Id: Number("int"),
 * //     Code: "STRING_VALUE",
 * //     State: "WAITING" || "RUNNING" || "AVAILABLE" || "CANCELLING" || "CANCELLED" || "ERROR",
 * //     Output: { // StatementOutput
 * //       Data: { // StatementOutputData
 * //         TextPlain: "STRING_VALUE",
 * //       },
 * //       ExecutionCount: Number("int"),
 * //       Status: "WAITING" || "RUNNING" || "AVAILABLE" || "CANCELLING" || "CANCELLED" || "ERROR",
 * //       ErrorName: "STRING_VALUE",
 * //       ErrorValue: "STRING_VALUE",
 * //       Traceback: [ // OrchestrationStringList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     Progress: Number("double"),
 * //     StartedOn: Number("long"),
 * //     CompletedOn: Number("long"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetStatementCommandInput - {@link GetStatementCommandInput}
 * @returns {@link GetStatementCommandOutput}
 * @see {@link GetStatementCommandInput} for command's `input` shape.
 * @see {@link GetStatementCommandOutput} for command's `response` shape.
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
export class GetStatementCommand extends command<GetStatementCommandInput, GetStatementCommandOutput>(
  _ep0,
  _mw0,
  "GetStatement",
  GetStatement$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetStatementRequest;
      output: GetStatementResponse;
    };
    sdk: {
      input: GetStatementCommandInput;
      output: GetStatementCommandOutput;
    };
  };
}
