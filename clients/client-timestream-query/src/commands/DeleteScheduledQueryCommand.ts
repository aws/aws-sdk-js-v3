// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteScheduledQueryRequest } from "../models/models_0";
import { DeleteScheduledQuery$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteScheduledQueryCommand}.
 */
export interface DeleteScheduledQueryCommandInput extends DeleteScheduledQueryRequest {}
/**
 * @public
 *
 * The output of {@link DeleteScheduledQueryCommand}.
 */
export interface DeleteScheduledQueryCommandOutput extends __MetadataBearer {}

/**
 * Deletes a given scheduled query. This is an irreversible operation.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TimestreamQueryClient, DeleteScheduledQueryCommand } from "@aws-sdk/client-timestream-query"; // ES Modules import
 * // const { TimestreamQueryClient, DeleteScheduledQueryCommand } = require("@aws-sdk/client-timestream-query"); // CommonJS import
 * // import type { TimestreamQueryClientConfig } from "@aws-sdk/client-timestream-query";
 * const config = {}; // type is TimestreamQueryClientConfig
 * const client = new TimestreamQueryClient(config);
 * const input = { // DeleteScheduledQueryRequest
 *   ScheduledQueryArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteScheduledQueryCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteScheduledQueryCommandInput - {@link DeleteScheduledQueryCommandInput}
 * @returns {@link DeleteScheduledQueryCommandOutput}
 * @see {@link DeleteScheduledQueryCommandInput} for command's `input` shape.
 * @see {@link DeleteScheduledQueryCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource could not be found.
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
export class DeleteScheduledQueryCommand extends command<DeleteScheduledQueryCommandInput, DeleteScheduledQueryCommandOutput>(
  _ep0,
  _mw0,
  "DeleteScheduledQuery",
  DeleteScheduledQuery$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteScheduledQueryRequest;
      output: {};
    };
    sdk: {
      input: DeleteScheduledQueryCommandInput;
      output: DeleteScheduledQueryCommandOutput;
    };
  };
}
