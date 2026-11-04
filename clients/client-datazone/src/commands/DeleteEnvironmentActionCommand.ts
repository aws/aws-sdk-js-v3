// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteEnvironmentActionInput } from "../models/models_1";
import { DeleteEnvironmentAction$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteEnvironmentActionCommand}.
 */
export interface DeleteEnvironmentActionCommandInput extends DeleteEnvironmentActionInput {}
/**
 * @public
 *
 * The output of {@link DeleteEnvironmentActionCommand}.
 */
export interface DeleteEnvironmentActionCommandOutput extends __MetadataBearer {}

/**
 * Deletes an action for the environment, for example, deletes a console link for an analytics tool that is available in this environment.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, DeleteEnvironmentActionCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, DeleteEnvironmentActionCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // DeleteEnvironmentActionInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   environmentIdentifier: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteEnvironmentActionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteEnvironmentActionCommandInput - {@link DeleteEnvironmentActionCommandInput}
 * @returns {@link DeleteEnvironmentActionCommandOutput}
 * @see {@link DeleteEnvironmentActionCommandInput} for command's `input` shape.
 * @see {@link DeleteEnvironmentActionCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * There is a conflict while performing this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request has failed because of an unknown error, exception or failure.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource cannot be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by the Amazon Web Services service.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * You do not have permission to perform this action.
 *
 * @throws {@link DataZoneServiceException}
 *
 * Base exception class for all service exceptions from DataZone service.
 *
 * @public
 */
export class DeleteEnvironmentActionCommand extends command<DeleteEnvironmentActionCommandInput, DeleteEnvironmentActionCommandOutput>(
  _ep0,
  _mw0,
  "DeleteEnvironmentAction",
  DeleteEnvironmentAction$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteEnvironmentActionInput;
      output: {};
    };
    sdk: {
      input: DeleteEnvironmentActionCommandInput;
      output: DeleteEnvironmentActionCommandOutput;
    };
  };
}
