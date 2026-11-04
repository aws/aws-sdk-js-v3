// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateRootDomainUnitOwnerInput, UpdateRootDomainUnitOwnerOutput } from "../models/models_2";
import { UpdateRootDomainUnitOwner$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateRootDomainUnitOwnerCommand}.
 */
export interface UpdateRootDomainUnitOwnerCommandInput extends UpdateRootDomainUnitOwnerInput {}
/**
 * @public
 *
 * The output of {@link UpdateRootDomainUnitOwnerCommand}.
 */
export interface UpdateRootDomainUnitOwnerCommandOutput extends UpdateRootDomainUnitOwnerOutput, __MetadataBearer {}

/**
 * Updates the owner of the root domain unit.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, UpdateRootDomainUnitOwnerCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, UpdateRootDomainUnitOwnerCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // UpdateRootDomainUnitOwnerInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   currentOwner: "STRING_VALUE", // required
 *   newOwner: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new UpdateRootDomainUnitOwnerCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateRootDomainUnitOwnerCommandInput - {@link UpdateRootDomainUnitOwnerCommandInput}
 * @returns {@link UpdateRootDomainUnitOwnerCommandOutput}
 * @see {@link UpdateRootDomainUnitOwnerCommandInput} for command's `input` shape.
 * @see {@link UpdateRootDomainUnitOwnerCommandOutput} for command's `response` shape.
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
export class UpdateRootDomainUnitOwnerCommand extends command<UpdateRootDomainUnitOwnerCommandInput, UpdateRootDomainUnitOwnerCommandOutput>(
  _ep0,
  _mw0,
  "UpdateRootDomainUnitOwner",
  UpdateRootDomainUnitOwner$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateRootDomainUnitOwnerInput;
      output: {};
    };
    sdk: {
      input: UpdateRootDomainUnitOwnerCommandInput;
      output: UpdateRootDomainUnitOwnerCommandOutput;
    };
  };
}
