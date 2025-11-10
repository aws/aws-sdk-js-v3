// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { AssociateEnvironmentRoleInput, AssociateEnvironmentRoleOutput } from "../models/models_0";
import { AssociateEnvironmentRole } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Associates the environment role in Amazon DataZone.</p>
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
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There is a conflict while performing this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the Amazon Web Services service.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You do not have permission to perform this action.</p>
 *
 * @throws {@link DataZoneServiceException}
 * <p>Base exception class for all service exceptions from DataZone service.</p>
 *
 *
 * @public
 */
export class AssociateEnvironmentRoleCommand extends $Command
  .classBuilder<
    AssociateEnvironmentRoleCommandInput,
    AssociateEnvironmentRoleCommandOutput,
    DataZoneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataZoneClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DataZone", "AssociateEnvironmentRole", {})
  .n("DataZoneClient", "AssociateEnvironmentRoleCommand")
  .sc(AssociateEnvironmentRole)
  .build() {
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
