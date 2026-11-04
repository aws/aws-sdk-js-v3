// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateScheduledQueryRequest } from "../models/models_0";
import { UpdateScheduledQuery$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateScheduledQueryCommand}.
 */
export interface UpdateScheduledQueryCommandInput extends UpdateScheduledQueryRequest {}
/**
 * @public
 *
 * The output of {@link UpdateScheduledQueryCommand}.
 */
export interface UpdateScheduledQueryCommandOutput extends __MetadataBearer {}

/**
 * Update a scheduled query.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TimestreamQueryClient, UpdateScheduledQueryCommand } from "@aws-sdk/client-timestream-query"; // ES Modules import
 * // const { TimestreamQueryClient, UpdateScheduledQueryCommand } = require("@aws-sdk/client-timestream-query"); // CommonJS import
 * // import type { TimestreamQueryClientConfig } from "@aws-sdk/client-timestream-query";
 * const config = {}; // type is TimestreamQueryClientConfig
 * const client = new TimestreamQueryClient(config);
 * const input = { // UpdateScheduledQueryRequest
 *   ScheduledQueryArn: "STRING_VALUE", // required
 *   State: "ENABLED" || "DISABLED", // required
 * };
 * const command = new UpdateScheduledQueryCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateScheduledQueryCommandInput - {@link UpdateScheduledQueryCommandInput}
 * @returns {@link UpdateScheduledQueryCommandOutput}
 * @see {@link UpdateScheduledQueryCommandInput} for command's `input` shape.
 * @see {@link UpdateScheduledQueryCommandOutput} for command's `response` shape.
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
export class UpdateScheduledQueryCommand extends command<UpdateScheduledQueryCommandInput, UpdateScheduledQueryCommandOutput>(
  _ep0,
  _mw0,
  "UpdateScheduledQuery",
  UpdateScheduledQuery$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateScheduledQueryRequest;
      output: {};
    };
    sdk: {
      input: UpdateScheduledQueryCommandInput;
      output: UpdateScheduledQueryCommandOutput;
    };
  };
}
