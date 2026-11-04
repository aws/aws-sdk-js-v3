// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateDomainUnitInput, UpdateDomainUnitOutput } from "../models/models_1";
import { UpdateDomainUnit$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateDomainUnitCommand}.
 */
export interface UpdateDomainUnitCommandInput extends UpdateDomainUnitInput {}
/**
 * @public
 *
 * The output of {@link UpdateDomainUnitCommand}.
 */
export interface UpdateDomainUnitCommandOutput extends UpdateDomainUnitOutput, __MetadataBearer {}

/**
 * Updates the domain unit.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, UpdateDomainUnitCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, UpdateDomainUnitCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // UpdateDomainUnitInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   name: "STRING_VALUE",
 * };
 * const command = new UpdateDomainUnitCommand(input);
 * const response = await client.send(command);
 * // { // UpdateDomainUnitOutput
 * //   id: "STRING_VALUE", // required
 * //   domainId: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   owners: [ // DomainUnitOwners // required
 * //     { // DomainUnitOwnerProperties Union: only one key present
 * //       user: { // DomainUnitUserProperties
 * //         userId: "STRING_VALUE",
 * //       },
 * //       group: { // DomainUnitGroupProperties
 * //         groupId: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   description: "STRING_VALUE",
 * //   parentDomainUnitId: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"),
 * //   lastUpdatedAt: new Date("TIMESTAMP"),
 * //   createdBy: "STRING_VALUE",
 * //   lastUpdatedBy: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateDomainUnitCommandInput - {@link UpdateDomainUnitCommandInput}
 * @returns {@link UpdateDomainUnitCommandOutput}
 * @see {@link UpdateDomainUnitCommandInput} for command's `input` shape.
 * @see {@link UpdateDomainUnitCommandOutput} for command's `response` shape.
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
export class UpdateDomainUnitCommand extends command<UpdateDomainUnitCommandInput, UpdateDomainUnitCommandOutput>(
  _ep0,
  _mw0,
  "UpdateDomainUnit",
  UpdateDomainUnit$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDomainUnitInput;
      output: UpdateDomainUnitOutput;
    };
    sdk: {
      input: UpdateDomainUnitCommandInput;
      output: UpdateDomainUnitCommandOutput;
    };
  };
}
