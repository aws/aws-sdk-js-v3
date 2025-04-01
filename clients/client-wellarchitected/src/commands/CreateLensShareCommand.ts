// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateLensShareInput, CreateLensShareOutput } from "../models/models_0";
import { de_CreateLensShareCommand, se_CreateLensShareCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WellArchitectedClientResolvedConfig } from "../WellArchitectedClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateLensShareCommand}.
 */
export interface CreateLensShareCommandInput extends CreateLensShareInput {}
/**
 * @public
 *
 * The output of {@link CreateLensShareCommand}.
 */
export interface CreateLensShareCommandOutput extends CreateLensShareOutput, __MetadataBearer {}

/**
 * <p>Create a lens share.</p>
 *          <p>The owner of a lens can share it with other Amazon Web Services accounts, users, an organization,
 *             and organizational units (OUs) in the same Amazon Web Services Region.
 *             Lenses provided by Amazon Web Services (Amazon Web Services Official Content) cannot be shared.</p>
 *          <p>
 *             Shared access to a lens is not removed until the lens invitation is deleted.</p>
 *          <p>If you share a lens with an organization or OU, all accounts in the organization or OU
 *         are granted access to the lens.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/lenses-sharing.html">Sharing a custom lens</a> in the
 *             <i>Well-Architected Tool User Guide</i>.</p>
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
 * import { WellArchitectedClient, CreateLensShareCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, CreateLensShareCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * const client = new WellArchitectedClient(config);
 * const input = { // CreateLensShareInput
 *   LensAlias: "STRING_VALUE", // required
 *   SharedWith: "STRING_VALUE", // required
 *   ClientRequestToken: "STRING_VALUE", // required
 * };
 * const command = new CreateLensShareCommand(input);
 * const response = await client.send(command);
 * // { // CreateLensShareOutput
 * //   ShareId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateLensShareCommandInput - {@link CreateLensShareCommandInput}
 * @returns {@link CreateLensShareCommandOutput}
 * @see {@link CreateLensShareCommandInput} for command's `input` shape.
 * @see {@link CreateLensShareCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The user has reached their resource quota.</p>
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
export class CreateLensShareCommand extends $Command
  .classBuilder<
    CreateLensShareCommandInput,
    CreateLensShareCommandOutput,
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
  .s("WellArchitectedApiServiceLambda", "CreateLensShare", {})
  .n("WellArchitectedClient", "CreateLensShareCommand")
  .f(void 0, void 0)
  .ser(se_CreateLensShareCommand)
  .de(de_CreateLensShareCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateLensShareInput;
      output: CreateLensShareOutput;
    };
    sdk: {
      input: CreateLensShareCommandInput;
      output: CreateLensShareCommandOutput;
    };
  };
}
