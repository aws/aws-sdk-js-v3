// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteEnvironmentInput } from "../models/models_0";
import { DeleteEnvironment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteEnvironmentCommand}.
 */
export interface DeleteEnvironmentCommandInput extends DeleteEnvironmentInput {}
/**
 * @public
 *
 * The output of {@link DeleteEnvironmentCommand}.
 */
export interface DeleteEnvironmentCommandOutput extends __MetadataBearer {}

/**
 * Deletes an environment and its associated resources.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ContinuumClient, DeleteEnvironmentCommand } from "@aws-sdk/client-continuum"; // ES Modules import
 * // const { ContinuumClient, DeleteEnvironmentCommand } = require("@aws-sdk/client-continuum"); // CommonJS import
 * // import type { ContinuumClientConfig } from "@aws-sdk/client-continuum";
 * const config = {}; // type is ContinuumClientConfig
 * const client = new ContinuumClient(config);
 * const input = { // DeleteEnvironmentInput
 *   environmentId: "STRING_VALUE", // required
 * };
 * const command = new DeleteEnvironmentCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteEnvironmentCommandInput - {@link DeleteEnvironmentCommandInput}
 * @returns {@link DeleteEnvironmentCommandOutput}
 * @see {@link DeleteEnvironmentCommandInput} for command's `input` shape.
 * @see {@link DeleteEnvironmentCommandOutput} for command's `response` shape.
 * @see {@link ContinuumClientResolvedConfig | config} for ContinuumClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  The request is not authorized. Verify that your credentials and request signature are valid and that you have permission to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *  The request could not be completed due to a conflict with the current state of the resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *  The request couldn't be processed because of an internal server issue. Try again later. If the problem persists, contact AWS Support.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The specified resource was not found. Verify that the resource identifier is correct and that the resource exists.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * @throws {@link ContinuumServiceException}
 * <p>Base exception class for all service exceptions from Continuum service.</p>
 *
 *
 * @public
 */
export class DeleteEnvironmentCommand extends command<DeleteEnvironmentCommandInput, DeleteEnvironmentCommandOutput>(
  _ep0,
  _mw0,
  "DeleteEnvironment",
  DeleteEnvironment$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteEnvironmentInput;
      output: {};
    };
    sdk: {
      input: DeleteEnvironmentCommandInput;
      output: DeleteEnvironmentCommandOutput;
    };
  };
}
