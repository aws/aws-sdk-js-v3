// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteSolFunctionPackageInput } from "../models/models_0";
import { de_DeleteSolFunctionPackageCommand, se_DeleteSolFunctionPackageCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, TnbClientResolvedConfig } from "../TnbClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteSolFunctionPackageCommand}.
 */
export interface DeleteSolFunctionPackageCommandInput extends DeleteSolFunctionPackageInput {}
/**
 * @public
 *
 * The output of {@link DeleteSolFunctionPackageCommand}.
 */
export interface DeleteSolFunctionPackageCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a function package.</p>
 *          <p>A function package is a .zip file in CSAR (Cloud Service Archive) format that contains a network function (an ETSI standard telecommunication application) and function package descriptor that uses the TOSCA standard to describe how the network functions should run on your network.</p>
 *          <p>To delete a function package, the package must be in a disabled state. To disable a function package, see <a href="https://docs.aws.amazon.com/tnb/latest/APIReference/API_UpdateSolFunctionPackage.html">UpdateSolFunctionPackage</a>.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TnbClient, DeleteSolFunctionPackageCommand } from "@aws-sdk/client-tnb"; // ES Modules import
 * // const { TnbClient, DeleteSolFunctionPackageCommand } = require("@aws-sdk/client-tnb"); // CommonJS import
 * const client = new TnbClient(config);
 * const input = { // DeleteSolFunctionPackageInput
 *   vnfPkgId: "STRING_VALUE", // required
 * };
 * const command = new DeleteSolFunctionPackageCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteSolFunctionPackageCommandInput - {@link DeleteSolFunctionPackageCommandInput}
 * @returns {@link DeleteSolFunctionPackageCommandOutput}
 * @see {@link DeleteSolFunctionPackageCommandInput} for command's `input` shape.
 * @see {@link DeleteSolFunctionPackageCommandOutput} for command's `response` shape.
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
export class DeleteSolFunctionPackageCommand extends $Command
  .classBuilder<
    DeleteSolFunctionPackageCommandInput,
    DeleteSolFunctionPackageCommandOutput,
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
  .s("TNB", "DeleteSolFunctionPackage", {})
  .n("TnbClient", "DeleteSolFunctionPackageCommand")
  .f(void 0, void 0)
  .ser(se_DeleteSolFunctionPackageCommand)
  .de(de_DeleteSolFunctionPackageCommand)
  .build() {}
