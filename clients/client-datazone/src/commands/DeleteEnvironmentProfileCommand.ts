// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteEnvironmentProfileInput } from "../models/models_1";
import { DeleteEnvironmentProfile$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteEnvironmentProfileCommand}.
 */
export interface DeleteEnvironmentProfileCommandInput extends DeleteEnvironmentProfileInput {}
/**
 * @public
 *
 * The output of {@link DeleteEnvironmentProfileCommand}.
 */
export interface DeleteEnvironmentProfileCommandOutput extends __MetadataBearer {}

/**
 * Deletes an environment profile in Amazon DataZone.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, DeleteEnvironmentProfileCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, DeleteEnvironmentProfileCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // DeleteEnvironmentProfileInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteEnvironmentProfileCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteEnvironmentProfileCommandInput - {@link DeleteEnvironmentProfileCommandInput}
 * @returns {@link DeleteEnvironmentProfileCommandOutput}
 * @see {@link DeleteEnvironmentProfileCommandInput} for command's `input` shape.
 * @see {@link DeleteEnvironmentProfileCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
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
export class DeleteEnvironmentProfileCommand extends command<DeleteEnvironmentProfileCommandInput, DeleteEnvironmentProfileCommandOutput>(
  _ep0,
  _mw0,
  "DeleteEnvironmentProfile",
  DeleteEnvironmentProfile$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteEnvironmentProfileInput;
      output: {};
    };
    sdk: {
      input: DeleteEnvironmentProfileCommandInput;
      output: DeleteEnvironmentProfileCommandOutput;
    };
  };
}
