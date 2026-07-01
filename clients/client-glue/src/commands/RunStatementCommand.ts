// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RunStatementRequest, RunStatementResponse } from "../models/models_2";
import { RunStatement$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RunStatementCommand}.
 */
export interface RunStatementCommandInput extends RunStatementRequest {}
/**
 * @public
 *
 * The output of {@link RunStatementCommand}.
 */
export interface RunStatementCommandOutput extends RunStatementResponse, __MetadataBearer {}

/**
 * <p>Executes the statement.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, RunStatementCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, RunStatementCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // RunStatementRequest
 *   SessionId: "STRING_VALUE", // required
 *   Code: "STRING_VALUE", // required
 *   RequestOrigin: "STRING_VALUE",
 * };
 * const command = new RunStatementCommand(input);
 * const response = await client.send(command);
 * // { // RunStatementResponse
 * //   Id: Number("int"),
 * // };
 *
 * ```
 *
 * @param RunStatementCommandInput - {@link RunStatementCommandInput}
 * @returns {@link RunStatementCommandOutput}
 * @see {@link RunStatementCommandInput} for command's `input` shape.
 * @see {@link RunStatementCommandOutput} for command's `response` shape.
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
 * @throws {@link OperationNotSupportedException} (client fault)
 *  <p>The operation is not available in the region.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link ResourceNumberLimitExceededException} (client fault)
 *  <p>A resource numerical limit was exceeded.</p>
 *
 * @throws {@link SessionBusyException} (client fault)
 *  <p>The session is currently busy processing another request and cannot accept new operations.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A value could not be validated.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class RunStatementCommand extends command<RunStatementCommandInput, RunStatementCommandOutput>(
  _ep0,
  _mw0,
  "RunStatement",
  RunStatement$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RunStatementRequest;
      output: RunStatementResponse;
    };
    sdk: {
      input: RunStatementCommandInput;
      output: RunStatementCommandOutput;
    };
  };
}
