// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { AssociateLensesInput } from "../models/models_0";
import { de_AssociateLensesCommand, se_AssociateLensesCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WellArchitectedClientResolvedConfig } from "../WellArchitectedClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateLensesCommand}.
 */
export interface AssociateLensesCommandInput extends AssociateLensesInput {}
/**
 * @public
 *
 * The output of {@link AssociateLensesCommand}.
 */
export interface AssociateLensesCommandOutput extends __MetadataBearer {}

/**
 * <p>Associate a lens to a workload.</p>
 *          <p>Up to 10 lenses can be associated with a workload in a single API operation. A
 *         maximum of 20 lenses can be associated with a workload.</p>
 *          <note>
 *             <p>
 *                <b>Disclaimer</b>
 *             </p>
 *             <p>By accessing and/or applying custom lenses created by another Amazon Web Services user or account,
 *             you acknowledge that custom lenses created by other users and shared with you are
 *             Third Party Content as defined in the Amazon Web Services Customer Agreement.    </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, AssociateLensesCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, AssociateLensesCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * // import type { WellArchitectedClientConfig } from "@aws-sdk/client-wellarchitected";
 * const config = {}; // type is WellArchitectedClientConfig
 * const client = new WellArchitectedClient(config);
 * const input = { // AssociateLensesInput
 *   WorkloadId: "STRING_VALUE", // required
 *   LensAliases: [ // LensAliases // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new AssociateLensesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssociateLensesCommandInput - {@link AssociateLensesCommandInput}
 * @returns {@link AssociateLensesCommandOutput}
 * @see {@link AssociateLensesCommandInput} for command's `input` shape.
 * @see {@link AssociateLensesCommandOutput} for command's `response` shape.
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
export class AssociateLensesCommand extends $Command
  .classBuilder<
    AssociateLensesCommandInput,
    AssociateLensesCommandOutput,
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
  .s("WellArchitectedApiServiceLambda", "AssociateLenses", {})
  .n("WellArchitectedClient", "AssociateLensesCommand")
  .f(void 0, void 0)
  .ser(se_AssociateLensesCommand)
  .de(de_AssociateLensesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateLensesInput;
      output: {};
    };
    sdk: {
      input: AssociateLensesCommandInput;
      output: AssociateLensesCommandOutput;
    };
  };
}
