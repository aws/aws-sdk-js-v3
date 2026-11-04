// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DisassociateEnvironmentRoleInput, DisassociateEnvironmentRoleOutput } from "../models/models_1";
import { DisassociateEnvironmentRole$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DisassociateEnvironmentRoleCommand}.
 */
export interface DisassociateEnvironmentRoleCommandInput extends DisassociateEnvironmentRoleInput {}
/**
 * @public
 *
 * The output of {@link DisassociateEnvironmentRoleCommand}.
 */
export interface DisassociateEnvironmentRoleCommandOutput extends DisassociateEnvironmentRoleOutput, __MetadataBearer {}

/**
 * Disassociates the environment role in Amazon DataZone.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, DisassociateEnvironmentRoleCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, DisassociateEnvironmentRoleCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // DisassociateEnvironmentRoleInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   environmentIdentifier: "STRING_VALUE", // required
 *   environmentRoleArn: "STRING_VALUE", // required
 * };
 * const command = new DisassociateEnvironmentRoleCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateEnvironmentRoleCommandInput - {@link DisassociateEnvironmentRoleCommandInput}
 * @returns {@link DisassociateEnvironmentRoleCommandOutput}
 * @see {@link DisassociateEnvironmentRoleCommandInput} for command's `input` shape.
 * @see {@link DisassociateEnvironmentRoleCommandOutput} for command's `response` shape.
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
export class DisassociateEnvironmentRoleCommand extends command<DisassociateEnvironmentRoleCommandInput, DisassociateEnvironmentRoleCommandOutput>(
  _ep0,
  _mw0,
  "DisassociateEnvironmentRole",
  DisassociateEnvironmentRole$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateEnvironmentRoleInput;
      output: {};
    };
    sdk: {
      input: DisassociateEnvironmentRoleCommandInput;
      output: DisassociateEnvironmentRoleCommandOutput;
    };
  };
}
