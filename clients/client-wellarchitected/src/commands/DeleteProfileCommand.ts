// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteProfileInput } from "../models/models_0";
import { DeleteProfile } from "../schemas/schemas_27_DeleteProfile";
import { ServiceInputTypes, ServiceOutputTypes, WellArchitectedClientResolvedConfig } from "../WellArchitectedClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteProfileCommand}.
 */
export interface DeleteProfileCommandInput extends DeleteProfileInput {}
/**
 * @public
 *
 * The output of {@link DeleteProfileCommand}.
 */
export interface DeleteProfileCommandOutput extends __MetadataBearer {}

/**
 * <p>Delete a profile.</p>
 *          <note>
 *             <p>
 *                <b>Disclaimer</b>
 *             </p>
 *             <p>By sharing your profile with other Amazon Web Services accounts,
 *                you acknowledge that Amazon Web Services will make your profile available to those
 *                other accounts. Those other accounts may continue to access and use your
 *                shared profile even if you delete the profile
 *                from your own Amazon Web Services account or terminate
 *                your Amazon Web Services account.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, DeleteProfileCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, DeleteProfileCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * // import type { WellArchitectedClientConfig } from "@aws-sdk/client-wellarchitected";
 * const config = {}; // type is WellArchitectedClientConfig
 * const client = new WellArchitectedClient(config);
 * const input = { // DeleteProfileInput
 *   ProfileArn: "STRING_VALUE", // required
 *   ClientRequestToken: "STRING_VALUE", // required
 * };
 * const command = new DeleteProfileCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteProfileCommandInput - {@link DeleteProfileCommandInput}
 * @returns {@link DeleteProfileCommandOutput}
 * @see {@link DeleteProfileCommandInput} for command's `input` shape.
 * @see {@link DeleteProfileCommandOutput} for command's `response` shape.
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
export class DeleteProfileCommand extends $Command
  .classBuilder<
    DeleteProfileCommandInput,
    DeleteProfileCommandOutput,
    WellArchitectedClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WellArchitectedClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WellArchitectedApiServiceLambda", "DeleteProfile", {})
  .n("WellArchitectedClient", "DeleteProfileCommand")
  .sc(DeleteProfile)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteProfileInput;
      output: {};
    };
    sdk: {
      input: DeleteProfileCommandInput;
      output: DeleteProfileCommandOutput;
    };
  };
}
