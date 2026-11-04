// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RemoveEntityOwnerInput, RemoveEntityOwnerOutput } from "../models/models_2";
import { RemoveEntityOwner$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RemoveEntityOwnerCommand}.
 */
export interface RemoveEntityOwnerCommandInput extends RemoveEntityOwnerInput {}
/**
 * @public
 *
 * The output of {@link RemoveEntityOwnerCommand}.
 */
export interface RemoveEntityOwnerCommandOutput extends RemoveEntityOwnerOutput, __MetadataBearer {}

/**
 * Removes an owner from an entity.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, RemoveEntityOwnerCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, RemoveEntityOwnerCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // RemoveEntityOwnerInput
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
 * const command = new RemoveEntityOwnerCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RemoveEntityOwnerCommandInput - {@link RemoveEntityOwnerCommandInput}
 * @returns {@link RemoveEntityOwnerCommandOutput}
 * @see {@link RemoveEntityOwnerCommandInput} for command's `input` shape.
 * @see {@link RemoveEntityOwnerCommandOutput} for command's `response` shape.
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
export class RemoveEntityOwnerCommand extends command<RemoveEntityOwnerCommandInput, RemoveEntityOwnerCommandOutput>(
  _ep0,
  _mw0,
  "RemoveEntityOwner",
  RemoveEntityOwner$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RemoveEntityOwnerInput;
      output: {};
    };
    sdk: {
      input: RemoveEntityOwnerCommandInput;
      output: RemoveEntityOwnerCommandOutput;
    };
  };
}
