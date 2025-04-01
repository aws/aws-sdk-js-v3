// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DisassociateLensesInput } from "../models/models_0";
import { de_DisassociateLensesCommand, se_DisassociateLensesCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WellArchitectedClientResolvedConfig } from "../WellArchitectedClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateLensesCommand}.
 */
export interface DisassociateLensesCommandInput extends DisassociateLensesInput {}
/**
 * @public
 *
 * The output of {@link DisassociateLensesCommand}.
 */
export interface DisassociateLensesCommandOutput extends __MetadataBearer {}

/**
 * <p>Disassociate a lens from a workload.</p>
 *          <p>Up to 10 lenses can be disassociated from a workload in a single API operation.</p>
 *          <note>
 *             <p>The Amazon Web Services Well-Architected Framework lens (<code>wellarchitected</code>) cannot be
 *                 removed from a workload.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, DisassociateLensesCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, DisassociateLensesCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * const client = new WellArchitectedClient(config);
 * const input = { // DisassociateLensesInput
 *   WorkloadId: "STRING_VALUE", // required
 *   LensAliases: [ // LensAliases // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DisassociateLensesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateLensesCommandInput - {@link DisassociateLensesCommandInput}
 * @returns {@link DisassociateLensesCommandOutput}
 * @see {@link DisassociateLensesCommandInput} for command's `input` shape.
 * @see {@link DisassociateLensesCommandOutput} for command's `response` shape.
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
export class DisassociateLensesCommand extends $Command
  .classBuilder<
    DisassociateLensesCommandInput,
    DisassociateLensesCommandOutput,
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
  .s("WellArchitectedApiServiceLambda", "DisassociateLenses", {})
  .n("WellArchitectedClient", "DisassociateLensesCommand")
  .f(void 0, void 0)
  .ser(se_DisassociateLensesCommand)
  .de(de_DisassociateLensesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateLensesInput;
      output: {};
    };
    sdk: {
      input: DisassociateLensesCommandInput;
      output: DisassociateLensesCommandOutput;
    };
  };
}
