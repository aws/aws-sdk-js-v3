// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AddEntityOwnerInput, AddEntityOwnerOutput } from "../models/models_0";
import { AddEntityOwner$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AddEntityOwnerCommand}.
 */
export interface AddEntityOwnerCommandInput extends AddEntityOwnerInput {}
/**
 * @public
 *
 * The output of {@link AddEntityOwnerCommand}.
 */
export interface AddEntityOwnerCommandOutput extends AddEntityOwnerOutput, __MetadataBearer {}

/**
 * Adds the owner of an entity (a domain unit).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, AddEntityOwnerCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, AddEntityOwnerCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // AddEntityOwnerInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   entityType: "DOMAIN_UNIT", // required
 *   entityIdentifier: "STRING_VALUE", // required
 *   owner: { // OwnerProperties Union: only one key present
 *     user: { // OwnerUserProperties
 *       userIdentifier: "STRING_VALUE", // required
 *     },
 *     group: { // OwnerGroupProperties
 *       groupIdentifier: "STRING_VALUE", // required
 *     },
 *   },
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new AddEntityOwnerCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AddEntityOwnerCommandInput - {@link AddEntityOwnerCommandInput}
 * @returns {@link AddEntityOwnerCommandOutput}
 * @see {@link AddEntityOwnerCommandInput} for command's `input` shape.
 * @see {@link AddEntityOwnerCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request has exceeded the specified service quota.
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
export class AddEntityOwnerCommand extends command<AddEntityOwnerCommandInput, AddEntityOwnerCommandOutput>(
  _ep0,
  _mw0,
  "AddEntityOwner",
  AddEntityOwner$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AddEntityOwnerInput;
      output: {};
    };
    sdk: {
      input: AddEntityOwnerCommandInput;
      output: AddEntityOwnerCommandOutput;
    };
  };
}
