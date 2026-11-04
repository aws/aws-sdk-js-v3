// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AssociateApplicationFleetRequest, AssociateApplicationFleetResult } from "../models/models_0";
import { AssociateApplicationFleet$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AssociateApplicationFleetCommand}.
 */
export interface AssociateApplicationFleetCommandInput extends AssociateApplicationFleetRequest {}
/**
 * @public
 *
 * The output of {@link AssociateApplicationFleetCommand}.
 */
export interface AssociateApplicationFleetCommandOutput extends AssociateApplicationFleetResult, __MetadataBearer {}

/**
 * Associates the specified application with the specified fleet. This is only supported for Elastic fleets.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, AssociateApplicationFleetCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, AssociateApplicationFleetCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * // import type { AppStreamClientConfig } from "@aws-sdk/client-appstream";
 * const config = {}; // type is AppStreamClientConfig
 * const client = new AppStreamClient(config);
 * const input = { // AssociateApplicationFleetRequest
 *   FleetName: "STRING_VALUE", // required
 *   ApplicationArn: "STRING_VALUE", // required
 * };
 * const command = new AssociateApplicationFleetCommand(input);
 * const response = await client.send(command);
 * // { // AssociateApplicationFleetResult
 * //   ApplicationFleetAssociation: { // ApplicationFleetAssociation
 * //     FleetName: "STRING_VALUE", // required
 * //     ApplicationArn: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param AssociateApplicationFleetCommandInput - {@link AssociateApplicationFleetCommandInput}
 * @returns {@link AssociateApplicationFleetCommandOutput}
 * @see {@link AssociateApplicationFleetCommandInput} for command's `input` shape.
 * @see {@link AssociateApplicationFleetCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for AppStreamClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *
 * An API error occurred. Wait a few minutes and try again.
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *
 * Indicates an incorrect combination of parameters, or a missing parameter.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The requested limit exceeds the permitted limit for an account.
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *
 * The attempted operation is not permitted.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link AppStreamServiceException}
 *
 * Base exception class for all service exceptions from AppStream service.
 *
 * @public
 */
export class AssociateApplicationFleetCommand extends command<AssociateApplicationFleetCommandInput, AssociateApplicationFleetCommandOutput>(
  _ep0,
  _mw0,
  "AssociateApplicationFleet",
  AssociateApplicationFleet$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateApplicationFleetRequest;
      output: AssociateApplicationFleetResult;
    };
    sdk: {
      input: AssociateApplicationFleetCommandInput;
      output: AssociateApplicationFleetCommandOutput;
    };
  };
}
