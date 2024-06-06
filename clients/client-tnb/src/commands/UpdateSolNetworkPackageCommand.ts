// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateSolNetworkPackageInput, UpdateSolNetworkPackageOutput } from "../models/models_0";
import { de_UpdateSolNetworkPackageCommand, se_UpdateSolNetworkPackageCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, TnbClientResolvedConfig } from "../TnbClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateSolNetworkPackageCommand}.
 */
export interface UpdateSolNetworkPackageCommandInput extends UpdateSolNetworkPackageInput {}
/**
 * @public
 *
 * The output of {@link UpdateSolNetworkPackageCommand}.
 */
export interface UpdateSolNetworkPackageCommandOutput extends UpdateSolNetworkPackageOutput, __MetadataBearer {}

/**
 * <p>Updates the operational state of a network package.</p>
 *          <p>A network package is a .zip file in CSAR (Cloud Service Archive) format defines the function packages you want to deploy and the Amazon Web Services infrastructure you want to deploy them on.</p>
 *          <p>A network service descriptor is a .yaml file in a network package that uses the TOSCA standard to describe the network functions you want to deploy and the Amazon Web Services infrastructure you want to deploy the network functions on.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TnbClient, UpdateSolNetworkPackageCommand } from "@aws-sdk/client-tnb"; // ES Modules import
 * // const { TnbClient, UpdateSolNetworkPackageCommand } = require("@aws-sdk/client-tnb"); // CommonJS import
 * const client = new TnbClient(config);
 * const input = { // UpdateSolNetworkPackageInput
 *   nsdInfoId: "STRING_VALUE", // required
 *   nsdOperationalState: "ENABLED" || "DISABLED", // required
 * };
 * const command = new UpdateSolNetworkPackageCommand(input);
 * const response = await client.send(command);
 * // { // UpdateSolNetworkPackageOutput
 * //   nsdOperationalState: "ENABLED" || "DISABLED", // required
 * // };
 *
 * ```
 *
 * @param UpdateSolNetworkPackageCommandInput - {@link UpdateSolNetworkPackageCommandInput}
 * @returns {@link UpdateSolNetworkPackageCommandOutput}
 * @see {@link UpdateSolNetworkPackageCommandInput} for command's `input` shape.
 * @see {@link UpdateSolNetworkPackageCommandOutput} for command's `response` shape.
 * @see {@link TnbClientResolvedConfig | config} for TnbClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Insufficient permissions to make request.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error occurred. Problem on the server.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource that doesn't exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Exception caused by throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Unable to process the request because the client provided input failed to satisfy request constraints.</p>
 *
 * @throws {@link TnbServiceException}
 * <p>Base exception class for all service exceptions from Tnb service.</p>
 *
 * @public
 */
export class UpdateSolNetworkPackageCommand extends $Command
  .classBuilder<
    UpdateSolNetworkPackageCommandInput,
    UpdateSolNetworkPackageCommandOutput,
    TnbClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: TnbClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("TNB", "UpdateSolNetworkPackage", {})
  .n("TnbClient", "UpdateSolNetworkPackageCommand")
  .f(void 0, void 0)
  .ser(se_UpdateSolNetworkPackageCommand)
  .de(de_UpdateSolNetworkPackageCommand)
  .build() {}
