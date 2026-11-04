// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteProjectProfileInput, DeleteProjectProfileOutput } from "../models/models_1";
import { DeleteProjectProfile$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteProjectProfileCommand}.
 */
export interface DeleteProjectProfileCommandInput extends DeleteProjectProfileInput {}
/**
 * @public
 *
 * The output of {@link DeleteProjectProfileCommand}.
 */
export interface DeleteProjectProfileCommandOutput extends DeleteProjectProfileOutput, __MetadataBearer {}

/**
 * Deletes a project profile.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, DeleteProjectProfileCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, DeleteProjectProfileCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // DeleteProjectProfileInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteProjectProfileCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteProjectProfileCommandInput - {@link DeleteProjectProfileCommandInput}
 * @returns {@link DeleteProjectProfileCommandOutput}
 * @see {@link DeleteProjectProfileCommandInput} for command's `input` shape.
 * @see {@link DeleteProjectProfileCommandOutput} for command's `response` shape.
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
export class DeleteProjectProfileCommand extends command<DeleteProjectProfileCommandInput, DeleteProjectProfileCommandOutput>(
  _ep0,
  _mw0,
  "DeleteProjectProfile",
  DeleteProjectProfile$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteProjectProfileInput;
      output: {};
    };
    sdk: {
      input: DeleteProjectProfileCommandInput;
      output: DeleteProjectProfileCommandOutput;
    };
  };
}
