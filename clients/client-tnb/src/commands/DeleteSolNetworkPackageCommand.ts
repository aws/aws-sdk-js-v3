// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteSolNetworkPackageInput } from "../models/models_0";
import { DeleteSolNetworkPackage$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 *          <p>To delete a network package, the package must be in a disable state. To disable a
 *          network package, see <a href="https://docs.aws.amazon.com/tnb/latest/APIReference/API_UpdateSolNetworkPackage.html">UpdateSolNetworkPackage</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TnbClient, DeleteSolNetworkPackageCommand } from "@aws-sdk/client-tnb"; // ES Modules import
 * // const { TnbClient, DeleteSolNetworkPackageCommand } = require("@aws-sdk/client-tnb"); // CommonJS import
 * // import type { TnbClientConfig } from "@aws-sdk/client-tnb";
 * const config = {}; // type is TnbClientConfig
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
 *  <p>Unable to process the request because the client provided input failed to satisfy
 *          request constraints.</p>
 *
 * @throws {@link TnbServiceException}
 * <p>Base exception class for all service exceptions from Tnb service.</p>
 *
 *
 * @example Delete a Sol network package
 * ```javascript
 * //
 * const input = {
 *   nsdInfoId: "np-0d5b823eb5c2a9241"
 * };
 * const command = new DeleteSolNetworkPackageCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteSolNetworkPackageCommand extends command<DeleteSolNetworkPackageCommandInput, DeleteSolNetworkPackageCommandOutput>(
  _ep0,
  _mw0,
  "DeleteSolNetworkPackage",
  DeleteSolNetworkPackage$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteSolNetworkPackageInput;
      output: {};
    };
    sdk: {
      input: DeleteSolNetworkPackageCommandInput;
      output: DeleteSolNetworkPackageCommandOutput;
    };
  };
}
