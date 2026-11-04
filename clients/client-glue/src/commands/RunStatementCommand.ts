// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RunStatementRequest, RunStatementResponse } from "../models/models_3";
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
 * Executes the statement.
 *
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
 * @throws {@link OperationNotSupportedException} (client fault)
 *
 * The operation is not available in the region.
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *
 * The operation timed out.
 *
 * @throws {@link ResourceNumberLimitExceededException} (client fault)
 *
 * A resource numerical limit was exceeded.
 *
 * @throws {@link SessionBusyException} (client fault)
 *
 * The session is currently busy processing another request and cannot accept new operations.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * A value could not be validated.
 *
 * @throws {@link GlueServiceException}
 *
 * Base exception class for all service exceptions from Glue service.
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
