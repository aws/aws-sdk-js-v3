// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteAppMonitorRequest, DeleteAppMonitorResponse } from "../models/models_0";
import { DeleteAppMonitor$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteAppMonitorCommand}.
 */
export interface DeleteAppMonitorCommandInput extends DeleteAppMonitorRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAppMonitorCommand}.
 */
export interface DeleteAppMonitorCommandOutput extends DeleteAppMonitorResponse, __MetadataBearer {}

/**
 * Deletes an existing app monitor. This immediately stops the collection of data.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RUMClient, DeleteAppMonitorCommand } from "@aws-sdk/client-rum"; // ES Modules import
 * // const { RUMClient, DeleteAppMonitorCommand } = require("@aws-sdk/client-rum"); // CommonJS import
 * // import type { RUMClientConfig } from "@aws-sdk/client-rum";
 * const config = {}; // type is RUMClientConfig
 * const client = new RUMClient(config);
 * const input = { // DeleteAppMonitorRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new DeleteAppMonitorCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAppMonitorCommandInput - {@link DeleteAppMonitorCommandInput}
 * @returns {@link DeleteAppMonitorCommandOutput}
 * @see {@link DeleteAppMonitorCommandInput} for command's `input` shape.
 * @see {@link DeleteAppMonitorCommandOutput} for command's `response` shape.
 * @see {@link RUMClientResolvedConfig | config} for RUMClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have sufficient permissions to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * This operation attempted to create a resource that already exists.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Internal service exception.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Resource not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was throttled because of quota limits.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * One of the arguments for the request is not valid.
 *
 * @throws {@link RUMServiceException}
 *
 * Base exception class for all service exceptions from RUM service.
 *
 * @public
 */
export class DeleteAppMonitorCommand extends command<DeleteAppMonitorCommandInput, DeleteAppMonitorCommandOutput>(
  _ep0,
  _mw0,
  "DeleteAppMonitor",
  DeleteAppMonitor$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAppMonitorRequest;
      output: {};
    };
    sdk: {
      input: DeleteAppMonitorCommandInput;
      output: DeleteAppMonitorCommandOutput;
    };
  };
}
