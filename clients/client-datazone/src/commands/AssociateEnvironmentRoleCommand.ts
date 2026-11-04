// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AssociateEnvironmentRoleInput, AssociateEnvironmentRoleOutput } from "../models/models_0";
import { AssociateEnvironmentRole$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AssociateEnvironmentRoleCommand}.
 */
export interface AssociateEnvironmentRoleCommandInput extends AssociateEnvironmentRoleInput {}
/**
 * @public
 *
 * The output of {@link AssociateEnvironmentRoleCommand}.
 */
export interface AssociateEnvironmentRoleCommandOutput extends AssociateEnvironmentRoleOutput, __MetadataBearer {}

/**
 * Associates the environment role in Amazon DataZone.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, AssociateEnvironmentRoleCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, AssociateEnvironmentRoleCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // AssociateEnvironmentRoleInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   environmentIdentifier: "STRING_VALUE", // required
 *   environmentRoleArn: "STRING_VALUE", // required
 * };
 * const command = new AssociateEnvironmentRoleCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssociateEnvironmentRoleCommandInput - {@link AssociateEnvironmentRoleCommandInput}
 * @returns {@link AssociateEnvironmentRoleCommandOutput}
 * @see {@link AssociateEnvironmentRoleCommandInput} for command's `input` shape.
 * @see {@link AssociateEnvironmentRoleCommandOutput} for command's `response` shape.
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
export class AssociateEnvironmentRoleCommand extends command<AssociateEnvironmentRoleCommandInput, AssociateEnvironmentRoleCommandOutput>(
  _ep0,
  _mw0,
  "AssociateEnvironmentRole",
  AssociateEnvironmentRole$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateEnvironmentRoleInput;
      output: {};
    };
    sdk: {
      input: AssociateEnvironmentRoleCommandInput;
      output: AssociateEnvironmentRoleCommandOutput;
    };
  };
}
