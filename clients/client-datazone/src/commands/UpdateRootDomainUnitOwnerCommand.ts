// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateRootDomainUnitOwnerInput, UpdateRootDomainUnitOwnerOutput } from "../models/models_2";
import { UpdateRootDomainUnitOwner } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Updates the owner of the root domain unit.</p>
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
export class UpdateRootDomainUnitOwnerCommand extends $Command
  .classBuilder<
    UpdateRootDomainUnitOwnerCommandInput,
    UpdateRootDomainUnitOwnerCommandOutput,
    DataZoneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataZoneClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DataZone", "UpdateRootDomainUnitOwner", {})
  .n("DataZoneClient", "UpdateRootDomainUnitOwnerCommand")
  .sc(UpdateRootDomainUnitOwner)
  .build() {
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
