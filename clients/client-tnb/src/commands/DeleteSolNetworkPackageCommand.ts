// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteSolNetworkPackageInput } from "../models/models_0";
import { de_DeleteSolNetworkPackageCommand, se_DeleteSolNetworkPackageCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, TnbClientResolvedConfig } from "../TnbClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteSolNetworkPackageCommand}.
 */
export interface DeleteSolNetworkPackageCommandInput extends DeleteSolNetworkPackageInput {}
/**
 * @public
 *
 * The output of {@link DeleteSolNetworkPackageCommand}.
 */
export interface DeleteSolNetworkPackageCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes network package.</p>
 *          <p>A network package is a .zip file in CSAR (Cloud Service Archive) format defines the function packages you want to deploy and the Amazon Web Services infrastructure you want to deploy them on.</p>
 *          <p>To delete a network package, the package must be in a disable state. To disable a network package, see <a href="https://docs.aws.amazon.com/tnb/latest/APIReference/API_UpdateSolNetworkPackage.html">UpdateSolNetworkPackage</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TnbClient, DeleteSolNetworkPackageCommand } from "@aws-sdk/client-tnb"; // ES Modules import
 * // const { TnbClient, DeleteSolNetworkPackageCommand } = require("@aws-sdk/client-tnb"); // CommonJS import
 * const client = new TnbClient(config);
 * const input = { // DeleteSolNetworkPackageInput
 *   nsdInfoId: "STRING_VALUE", // required
 * };
 * const command = new DeleteSolNetworkPackageCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteSolNetworkPackageCommandInput - {@link DeleteSolNetworkPackageCommandInput}
 * @returns {@link DeleteSolNetworkPackageCommandOutput}
 * @see {@link DeleteSolNetworkPackageCommandInput} for command's `input` shape.
 * @see {@link DeleteSolNetworkPackageCommandOutput} for command's `response` shape.
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
export class DeleteSolNetworkPackageCommand extends $Command
  .classBuilder<
    DeleteSolNetworkPackageCommandInput,
    DeleteSolNetworkPackageCommandOutput,
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
  .s("TNB", "DeleteSolNetworkPackage", {})
  .n("TnbClient", "DeleteSolNetworkPackageCommand")
  .f(void 0, void 0)
  .ser(se_DeleteSolNetworkPackageCommand)
  .de(de_DeleteSolNetworkPackageCommand)
  .build() {}
