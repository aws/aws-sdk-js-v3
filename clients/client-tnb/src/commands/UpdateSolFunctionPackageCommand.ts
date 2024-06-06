// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateSolFunctionPackageInput, UpdateSolFunctionPackageOutput } from "../models/models_0";
import { de_UpdateSolFunctionPackageCommand, se_UpdateSolFunctionPackageCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, TnbClientResolvedConfig } from "../TnbClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateSolFunctionPackageCommand}.
 */
export interface UpdateSolFunctionPackageCommandInput extends UpdateSolFunctionPackageInput {}
/**
 * @public
 *
 * The output of {@link UpdateSolFunctionPackageCommand}.
 */
export interface UpdateSolFunctionPackageCommandOutput extends UpdateSolFunctionPackageOutput, __MetadataBearer {}

/**
 * <p>Updates the operational state of function package.</p>
 *          <p>A function package is a .zip file in CSAR (Cloud Service Archive) format that contains a network function (an ETSI standard telecommunication application) and function package descriptor that uses the TOSCA standard to describe how the network functions should run on your network.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TnbClient, UpdateSolFunctionPackageCommand } from "@aws-sdk/client-tnb"; // ES Modules import
 * // const { TnbClient, UpdateSolFunctionPackageCommand } = require("@aws-sdk/client-tnb"); // CommonJS import
 * const client = new TnbClient(config);
 * const input = { // UpdateSolFunctionPackageInput
 *   vnfPkgId: "STRING_VALUE", // required
 *   operationalState: "ENABLED" || "DISABLED", // required
 * };
 * const command = new UpdateSolFunctionPackageCommand(input);
 * const response = await client.send(command);
 * // { // UpdateSolFunctionPackageOutput
 * //   operationalState: "ENABLED" || "DISABLED", // required
 * // };
 *
 * ```
 *
 * @param UpdateSolFunctionPackageCommandInput - {@link UpdateSolFunctionPackageCommandInput}
 * @returns {@link UpdateSolFunctionPackageCommandOutput}
 * @see {@link UpdateSolFunctionPackageCommandInput} for command's `input` shape.
 * @see {@link UpdateSolFunctionPackageCommandOutput} for command's `response` shape.
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
export class UpdateSolFunctionPackageCommand extends $Command
  .classBuilder<
    UpdateSolFunctionPackageCommandInput,
    UpdateSolFunctionPackageCommandOutput,
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
  .s("TNB", "UpdateSolFunctionPackage", {})
  .n("TnbClient", "UpdateSolFunctionPackageCommand")
  .f(void 0, void 0)
  .ser(se_UpdateSolFunctionPackageCommand)
  .de(de_UpdateSolFunctionPackageCommand)
  .build() {}
