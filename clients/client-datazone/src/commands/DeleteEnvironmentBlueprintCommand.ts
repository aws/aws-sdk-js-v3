// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteEnvironmentBlueprintInput } from "../models/models_1";
import { DeleteEnvironmentBlueprint$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteEnvironmentBlueprintCommand}.
 */
export interface DeleteEnvironmentBlueprintCommandInput extends DeleteEnvironmentBlueprintInput {}
/**
 * @public
 *
 * The output of {@link DeleteEnvironmentBlueprintCommand}.
 */
export interface DeleteEnvironmentBlueprintCommandOutput extends __MetadataBearer {}

/**
 * Deletes a blueprint in Amazon DataZone.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, DeleteEnvironmentBlueprintCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, DeleteEnvironmentBlueprintCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // DeleteEnvironmentBlueprintInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteEnvironmentBlueprintCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteEnvironmentBlueprintCommandInput - {@link DeleteEnvironmentBlueprintCommandInput}
 * @returns {@link DeleteEnvironmentBlueprintCommandOutput}
 * @see {@link DeleteEnvironmentBlueprintCommandInput} for command's `input` shape.
 * @see {@link DeleteEnvironmentBlueprintCommandOutput} for command's `response` shape.
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
export class DeleteEnvironmentBlueprintCommand extends command<DeleteEnvironmentBlueprintCommandInput, DeleteEnvironmentBlueprintCommandOutput>(
  _ep0,
  _mw0,
  "DeleteEnvironmentBlueprint",
  DeleteEnvironmentBlueprint$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteEnvironmentBlueprintInput;
      output: {};
    };
    sdk: {
      input: DeleteEnvironmentBlueprintCommandInput;
      output: DeleteEnvironmentBlueprintCommandOutput;
    };
  };
}
