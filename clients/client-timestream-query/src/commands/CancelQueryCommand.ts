// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CancelQueryRequest, CancelQueryResponse } from "../models/models_0";
import { CancelQuery$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CancelQueryCommand}.
 */
export interface CancelQueryCommandInput extends CancelQueryRequest {}
/**
 * @public
 *
 * The output of {@link CancelQueryCommand}.
 */
export interface CancelQueryCommandOutput extends CancelQueryResponse, __MetadataBearer {}

/**
 * Cancels a query that has been issued. Cancellation is provided only if the query has not completed running before the cancellation request was issued. Because cancellation is an idempotent operation, subsequent cancellation requests will return a `CancellationMessage`, indicating that the query has already been canceled. See [code sample](https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.cancel-query.html) for details.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TimestreamQueryClient, CancelQueryCommand } from "@aws-sdk/client-timestream-query"; // ES Modules import
 * // const { TimestreamQueryClient, CancelQueryCommand } = require("@aws-sdk/client-timestream-query"); // CommonJS import
 * // import type { TimestreamQueryClientConfig } from "@aws-sdk/client-timestream-query";
 * const config = {}; // type is TimestreamQueryClientConfig
 * const client = new TimestreamQueryClient(config);
 * const input = { // CancelQueryRequest
 *   QueryId: "STRING_VALUE", // required
 * };
 * const command = new CancelQueryCommand(input);
 * const response = await client.send(command);
 * // { // CancelQueryResponse
 * //   CancellationMessage: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CancelQueryCommandInput - {@link CancelQueryCommandInput}
 * @returns {@link CancelQueryCommandOutput}
 * @see {@link CancelQueryCommandInput} for command's `input` shape.
 * @see {@link CancelQueryCommandOutput} for command's `response` shape.
 * @see {@link TimestreamQueryClientResolvedConfig | config} for TimestreamQueryClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have the necessary permissions to access the account settings.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal server error occurred while processing the request.
 *
 * @throws {@link InvalidEndpointException} (client fault)
 *
 * The requested endpoint is invalid.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was throttled due to excessive requests.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Invalid or malformed request.
 *
 * @throws {@link TimestreamQueryServiceException}
 *
 * Base exception class for all service exceptions from TimestreamQuery service.
 *
 * @public
 */
export class CancelQueryCommand extends command<CancelQueryCommandInput, CancelQueryCommandOutput>(
  _ep0,
  _mw0,
  "CancelQuery",
  CancelQuery$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelQueryRequest;
      output: CancelQueryResponse;
    };
    sdk: {
      input: CancelQueryCommandInput;
      output: CancelQueryCommandOutput;
    };
  };
}
