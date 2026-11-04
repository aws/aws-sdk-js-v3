// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteAppBundleRequest, DeleteAppBundleResponse } from "../models/models_0";
import { DeleteAppBundle$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteAppBundleCommand}.
 */
export interface DeleteAppBundleCommandInput extends DeleteAppBundleRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAppBundleCommand}.
 */
export interface DeleteAppBundleCommandOutput extends DeleteAppBundleResponse, __MetadataBearer {}

/**
 * Deletes an app bundle. You must delete all associated app authorizations before you can delete an app bundle.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppFabricClient, DeleteAppBundleCommand } from "@aws-sdk/client-appfabric"; // ES Modules import
 * // const { AppFabricClient, DeleteAppBundleCommand } = require("@aws-sdk/client-appfabric"); // CommonJS import
 * // import type { AppFabricClientConfig } from "@aws-sdk/client-appfabric";
 * const config = {}; // type is AppFabricClientConfig
 * const client = new AppFabricClient(config);
 * const input = { // DeleteAppBundleRequest
 *   appBundleIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteAppBundleCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAppBundleCommandInput - {@link DeleteAppBundleCommandInput}
 * @returns {@link DeleteAppBundleCommandOutput}
 * @see {@link DeleteAppBundleCommandInput} for command's `input` shape.
 * @see {@link DeleteAppBundleCommandOutput} for command's `response` shape.
 * @see {@link AppFabricClientResolvedConfig | config} for AppFabricClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You are not authorized to perform this operation.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request has created a conflict. Check the request parameters and try again.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception, or failure with an internal server.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request rate exceeds the limit.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request has invalid or missing parameters.
 *
 * @throws {@link AppFabricServiceException}
 *
 * Base exception class for all service exceptions from AppFabric service.
 *
 * @public
 */
export class DeleteAppBundleCommand extends command<DeleteAppBundleCommandInput, DeleteAppBundleCommandOutput>(
  _ep0,
  _mw0,
  "DeleteAppBundle",
  DeleteAppBundle$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAppBundleRequest;
      output: {};
    };
    sdk: {
      input: DeleteAppBundleCommandInput;
      output: DeleteAppBundleCommandOutput;
    };
  };
}
