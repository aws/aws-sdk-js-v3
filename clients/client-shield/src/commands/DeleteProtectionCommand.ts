// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteProtectionRequest, DeleteProtectionResponse } from "../models/models_0";
import { de_DeleteProtectionCommand, se_DeleteProtectionCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, ShieldClientResolvedConfig } from "../ShieldClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteProtectionCommand}.
 */
export interface DeleteProtectionCommandInput extends DeleteProtectionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteProtectionCommand}.
 */
export interface DeleteProtectionCommandOutput extends DeleteProtectionResponse, __MetadataBearer {}

/**
 * <p>Deletes an Shield Advanced <a>Protection</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ShieldClient, DeleteProtectionCommand } from "@aws-sdk/client-shield"; // ES Modules import
 * // const { ShieldClient, DeleteProtectionCommand } = require("@aws-sdk/client-shield"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ShieldClient(config);
 * const input = { // DeleteProtectionRequest
 *   ProtectionId: "STRING_VALUE", // required
 * };
 * const command = new DeleteProtectionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteProtectionCommandInput - {@link DeleteProtectionCommandInput}
 * @returns {@link DeleteProtectionCommandOutput}
 * @see {@link DeleteProtectionCommandInput} for command's `input` shape.
 * @see {@link DeleteProtectionCommandOutput} for command's `response` shape.
 * @see {@link ShieldClientResolvedConfig | config} for ShieldClient's `config` shape.
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>Exception that indicates that a problem occurred with the service infrastructure. You can retry the request.</p>
 *
 * @throws {@link OptimisticLockException} (client fault)
 *  <p>Exception that indicates that the resource state has been modified by another
 *          client. Retrieve the resource and then retry your request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Exception indicating the specified resource does not exist. If available, this exception includes details in additional properties. </p>
 *
 * @throws {@link ShieldServiceException}
 * <p>Base exception class for all service exceptions from Shield service.</p>
 *
 * @public
 */
export class DeleteProtectionCommand extends $Command
  .classBuilder<
    DeleteProtectionCommandInput,
    DeleteProtectionCommandOutput,
    ShieldClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ShieldClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSShield_20160616", "DeleteProtection", {})
  .n("ShieldClient", "DeleteProtectionCommand")
  .f(void 0, void 0)
  .ser(se_DeleteProtectionCommand)
  .de(de_DeleteProtectionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteProtectionRequest;
      output: {};
    };
    sdk: {
      input: DeleteProtectionCommandInput;
      output: DeleteProtectionCommandOutput;
    };
  };
}
