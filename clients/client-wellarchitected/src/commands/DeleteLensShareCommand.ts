// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteLensShareInput } from "../models/models_0";
import { DeleteLensShare } from "../schemas/schemas_0";
import type {
  ServiceInputTypes,
  ServiceOutputTypes,
  WellArchitectedClientResolvedConfig,
} from "../WellArchitectedClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteLensShareCommand}.
 */
export interface DeleteLensShareCommandInput extends DeleteLensShareInput {}
/**
 * @public
 *
 * The output of {@link DeleteLensShareCommand}.
 */
export interface DeleteLensShareCommandOutput extends __MetadataBearer {}

/**
 * <p>Delete a lens share.</p>
 *          <p>After the lens share is deleted,  Amazon Web Services accounts, users, organizations,
 *             and organizational units (OUs)
 *             that you shared the lens with can continue to use it, but they will no longer be able to apply it to new workloads.</p>
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
 * import { WellArchitectedClient, DeleteLensShareCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, DeleteLensShareCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * // import type { WellArchitectedClientConfig } from "@aws-sdk/client-wellarchitected";
 * const config = {}; // type is WellArchitectedClientConfig
 * const client = new WellArchitectedClient(config);
 * const input = { // DeleteLensShareInput
 *   ShareId: "STRING_VALUE", // required
 *   LensAlias: "STRING_VALUE", // required
 *   ClientRequestToken: "STRING_VALUE", // required
 * };
 * const command = new DeleteLensShareCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteLensShareCommandInput - {@link DeleteLensShareCommandInput}
 * @returns {@link DeleteLensShareCommandOutput}
 * @see {@link DeleteLensShareCommandInput} for command's `input` shape.
 * @see {@link DeleteLensShareCommandOutput} for command's `response` shape.
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
export class DeleteLensShareCommand extends $Command
  .classBuilder<
    DeleteLensShareCommandInput,
    DeleteLensShareCommandOutput,
    WellArchitectedClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WellArchitectedClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WellArchitectedApiServiceLambda", "DeleteLensShare", {})
  .n("WellArchitectedClient", "DeleteLensShareCommand")
  .sc(DeleteLensShare)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteLensShareInput;
      output: {};
    };
    sdk: {
      input: DeleteLensShareCommandInput;
      output: DeleteLensShareCommandOutput;
    };
  };
}
