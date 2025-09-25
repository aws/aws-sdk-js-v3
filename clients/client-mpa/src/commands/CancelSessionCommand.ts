// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CancelSessionRequest, CancelSessionResponse } from "../models/models_0";
import { MPAClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MPAClient";
import { CancelSession } from "../schemas/schemas_7_ApprovalTeam";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CancelSessionCommand}.
 */
export interface CancelSessionCommandInput extends CancelSessionRequest {}
/**
 * @public
 *
 * The output of {@link CancelSessionCommand}.
 */
export interface CancelSessionCommandOutput extends CancelSessionResponse, __MetadataBearer {}

/**
 * <p>Cancels an approval session. For more information, see <a href="https://docs.aws.amazon.com/mpa/latest/userguide/mpa-concepts.html">Session</a> in the <i>Multi-party approval User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MPAClient, CancelSessionCommand } from "@aws-sdk/client-mpa"; // ES Modules import
 * // const { MPAClient, CancelSessionCommand } = require("@aws-sdk/client-mpa"); // CommonJS import
 * // import type { MPAClientConfig } from "@aws-sdk/client-mpa";
 * const config = {}; // type is MPAClientConfig
 * const client = new MPAClient(config);
 * const input = { // CancelSessionRequest
 *   SessionArn: "STRING_VALUE", // required
 * };
 * const command = new CancelSessionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CancelSessionCommandInput - {@link CancelSessionCommandInput}
 * @returns {@link CancelSessionCommandOutput}
 * @see {@link CancelSessionCommandInput} for command's `input` shape.
 * @see {@link CancelSessionCommandOutput} for command's `response` shape.
 * @see {@link MPAClientResolvedConfig | config} for MPAClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action. Check your permissions, and try again.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request cannot be completed because it conflicts with the current state of a resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service encountered an internal error. Try your request again. If the problem persists, contact Amazon Web Services Support.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource doesn't exist. Check the resource ID, and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link MPAServiceException}
 * <p>Base exception class for all service exceptions from MPA service.</p>
 *
 *
 * @public
 */
export class CancelSessionCommand extends $Command
  .classBuilder<
    CancelSessionCommandInput,
    CancelSessionCommandOutput,
    MPAClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MPAClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSFluffyCoreService", "CancelSession", {})
  .n("MPAClient", "CancelSessionCommand")
  .sc(CancelSession)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelSessionRequest;
      output: {};
    };
    sdk: {
      input: CancelSessionCommandInput;
      output: CancelSessionCommandOutput;
    };
  };
}
