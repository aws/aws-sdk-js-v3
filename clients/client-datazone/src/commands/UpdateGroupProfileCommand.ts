// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateGroupProfileInput, UpdateGroupProfileOutput } from "../models/models_2";
import { UpdateGroupProfile$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateGroupProfileCommand}.
 */
export interface UpdateGroupProfileCommandInput extends UpdateGroupProfileInput {}
/**
 * @public
 *
 * The output of {@link UpdateGroupProfileCommand}.
 */
export interface UpdateGroupProfileCommandOutput extends UpdateGroupProfileOutput, __MetadataBearer {}

/**
 * Updates the specified group profile in Amazon DataZone.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, UpdateGroupProfileCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, UpdateGroupProfileCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // UpdateGroupProfileInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   groupIdentifier: "STRING_VALUE", // required
 *   status: "ASSIGNED" || "NOT_ASSIGNED", // required
 * };
 * const command = new UpdateGroupProfileCommand(input);
 * const response = await client.send(command);
 * // { // UpdateGroupProfileOutput
 * //   domainId: "STRING_VALUE",
 * //   id: "STRING_VALUE",
 * //   status: "ASSIGNED" || "NOT_ASSIGNED",
 * //   groupName: "STRING_VALUE",
 * //   rolePrincipalArn: "STRING_VALUE",
 * //   rolePrincipalId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateGroupProfileCommandInput - {@link UpdateGroupProfileCommandInput}
 * @returns {@link UpdateGroupProfileCommandOutput}
 * @see {@link UpdateGroupProfileCommandInput} for command's `input` shape.
 * @see {@link UpdateGroupProfileCommandOutput} for command's `response` shape.
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
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by the Amazon Web Services service.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
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
export class UpdateGroupProfileCommand extends command<UpdateGroupProfileCommandInput, UpdateGroupProfileCommandOutput>(
  _ep0,
  _mw0,
  "UpdateGroupProfile",
  UpdateGroupProfile$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateGroupProfileInput;
      output: UpdateGroupProfileOutput;
    };
    sdk: {
      input: UpdateGroupProfileCommandInput;
      output: UpdateGroupProfileCommandOutput;
    };
  };
}
