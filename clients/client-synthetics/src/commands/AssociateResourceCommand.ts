// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { AssociateResourceRequest, AssociateResourceResponse } from "../models/models_0";
import { de_AssociateResourceCommand, se_AssociateResourceCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SyntheticsClientResolvedConfig } from "../SyntheticsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateResourceCommand}.
 */
export interface AssociateResourceCommandInput extends AssociateResourceRequest {}
/**
 * @public
 *
 * The output of {@link AssociateResourceCommand}.
 */
export interface AssociateResourceCommandOutput extends AssociateResourceResponse, __MetadataBearer {}

/**
 * <p>Associates a canary with a group. Using groups can help you with
 *          managing and automating your canaries, and you can also view aggregated run results and statistics
 *          for all canaries in a group. </p>
 *          <p>You must run this operation in the Region where the canary exists.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SyntheticsClient, AssociateResourceCommand } from "@aws-sdk/client-synthetics"; // ES Modules import
 * // const { SyntheticsClient, AssociateResourceCommand } = require("@aws-sdk/client-synthetics"); // CommonJS import
 * // import type { SyntheticsClientConfig } from "@aws-sdk/client-synthetics";
 * const config = {}; // type is SyntheticsClientConfig
 * const client = new SyntheticsClient(config);
 * const input = { // AssociateResourceRequest
 *   GroupIdentifier: "STRING_VALUE", // required
 *   ResourceArn: "STRING_VALUE", // required
 * };
 * const command = new AssociateResourceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssociateResourceCommandInput - {@link AssociateResourceCommandInput}
 * @returns {@link AssociateResourceCommandOutput}
 * @see {@link AssociateResourceCommandInput} for command's `input` shape.
 * @see {@link AssociateResourceCommandOutput} for command's `response` shape.
 * @see {@link SyntheticsClientResolvedConfig | config} for SyntheticsClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A conflicting operation is already in progress.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unknown internal error occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One of the specified resources was not found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request exceeded a service quota value.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A parameter could not be validated.</p>
 *
 * @throws {@link SyntheticsServiceException}
 * <p>Base exception class for all service exceptions from Synthetics service.</p>
 *
 *
 * @public
 */
export class AssociateResourceCommand extends $Command
  .classBuilder<
    AssociateResourceCommandInput,
    AssociateResourceCommandOutput,
    SyntheticsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SyntheticsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Synthetics", "AssociateResource", {})
  .n("SyntheticsClient", "AssociateResourceCommand")
  .f(void 0, void 0)
  .ser(se_AssociateResourceCommand)
  .de(de_AssociateResourceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateResourceRequest;
      output: {};
    };
    sdk: {
      input: AssociateResourceCommandInput;
      output: AssociateResourceCommandOutput;
    };
  };
}
