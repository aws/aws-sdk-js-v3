// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteLensInput } from "../models/models_0";
import { de_DeleteLensCommand, se_DeleteLensCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WellArchitectedClientResolvedConfig } from "../WellArchitectedClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteLensCommand}.
 */
export interface DeleteLensCommandInput extends DeleteLensInput {}
/**
 * @public
 *
 * The output of {@link DeleteLensCommand}.
 */
export interface DeleteLensCommandOutput extends __MetadataBearer {}

/**
 * <p>Delete an existing lens.</p>
 *          <p>Only the owner of a lens can delete it.  After the lens is deleted,  Amazon Web Services accounts and users
 *               that you shared the lens with can continue to use it, but they will no longer be able to apply it to new workloads.
 *         </p>
 *          <note>
 *             <p>
 *                <b>Disclaimer</b>
 *             </p>
 *             <p>By sharing your custom lenses with other Amazon Web Services accounts,
 *                 you acknowledge that Amazon Web Services will make your custom lenses available to those
 *                 other accounts. Those other accounts may continue to access and use your
 *                 shared custom lenses even if you delete the custom lenses
 *                 from your own Amazon Web Services account or terminate
 *                 your Amazon Web Services account.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, DeleteLensCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, DeleteLensCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * const client = new WellArchitectedClient(config);
 * const input = { // DeleteLensInput
 *   LensAlias: "STRING_VALUE", // required
 *   ClientRequestToken: "STRING_VALUE", // required
 *   LensStatus: "ALL" || "DRAFT" || "PUBLISHED", // required
 * };
 * const command = new DeleteLensCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteLensCommandInput - {@link DeleteLensCommandInput}
 * @returns {@link DeleteLensCommandOutput}
 * @see {@link DeleteLensCommandInput} for command's `input` shape.
 * @see {@link DeleteLensCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for WellArchitectedClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The resource has already been processed, was deleted, or is too large.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There is a problem with the Well-Architected Tool API service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The user input is not valid.</p>
 *
 * @throws {@link WellArchitectedServiceException}
 * <p>Base exception class for all service exceptions from WellArchitected service.</p>
 *
 *
 * @public
 */
export class DeleteLensCommand extends $Command
  .classBuilder<
    DeleteLensCommandInput,
    DeleteLensCommandOutput,
    WellArchitectedClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WellArchitectedClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WellArchitectedApiServiceLambda", "DeleteLens", {})
  .n("WellArchitectedClient", "DeleteLensCommand")
  .f(void 0, void 0)
  .ser(se_DeleteLensCommand)
  .de(de_DeleteLensCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteLensInput;
      output: {};
    };
    sdk: {
      input: DeleteLensCommandInput;
      output: DeleteLensCommandOutput;
    };
  };
}
