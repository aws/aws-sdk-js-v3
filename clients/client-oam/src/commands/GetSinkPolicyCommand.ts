// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetSinkPolicyInput, GetSinkPolicyOutput } from "../models/models_0";
import { OAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OAMClient";
import { de_GetSinkPolicyCommand, se_GetSinkPolicyCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSinkPolicyCommand}.
 */
export interface GetSinkPolicyCommandInput extends GetSinkPolicyInput {}
/**
 * @public
 *
 * The output of {@link GetSinkPolicyCommand}.
 */
export interface GetSinkPolicyCommandOutput extends GetSinkPolicyOutput, __MetadataBearer {}

/**
 * <p>Returns the current sink policy attached to this sink. The sink policy specifies what
 *       accounts can attach to this sink as source accounts, and what types of data they can share.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OAMClient, GetSinkPolicyCommand } from "@aws-sdk/client-oam"; // ES Modules import
 * // const { OAMClient, GetSinkPolicyCommand } = require("@aws-sdk/client-oam"); // CommonJS import
 * const client = new OAMClient(config);
 * const input = { // GetSinkPolicyInput
 *   SinkIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetSinkPolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetSinkPolicyOutput
 * //   SinkArn: "STRING_VALUE",
 * //   SinkId: "STRING_VALUE",
 * //   Policy: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetSinkPolicyCommandInput - {@link GetSinkPolicyCommandInput}
 * @returns {@link GetSinkPolicyCommandOutput}
 * @see {@link GetSinkPolicyCommandInput} for command's `input` shape.
 * @see {@link GetSinkPolicyCommandOutput} for command's `response` shape.
 * @see {@link OAMClientResolvedConfig | config} for OAMClient's `config` shape.
 *
 * @throws {@link InternalServiceFault} (server fault)
 *  <p>Unexpected error while processing the request. Retry the request.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter is specified incorrectly.</p>
 *
 * @throws {@link MissingRequiredParameterException} (client fault)
 *  <p>A required parameter is missing from the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource that does not exist.</p>
 *
 * @throws {@link OAMServiceException}
 * <p>Base exception class for all service exceptions from OAM service.</p>
 *
 *
 * @public
 */
export class GetSinkPolicyCommand extends $Command
  .classBuilder<
    GetSinkPolicyCommandInput,
    GetSinkPolicyCommandOutput,
    OAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OAMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("oamservice", "GetSinkPolicy", {})
  .n("OAMClient", "GetSinkPolicyCommand")
  .f(void 0, void 0)
  .ser(se_GetSinkPolicyCommand)
  .de(de_GetSinkPolicyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSinkPolicyInput;
      output: GetSinkPolicyOutput;
    };
    sdk: {
      input: GetSinkPolicyCommandInput;
      output: GetSinkPolicyCommandOutput;
    };
  };
}
