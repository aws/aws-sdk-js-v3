// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteProtectionGroupRequest, DeleteProtectionGroupResponse } from "../models/models_0";
import { de_DeleteProtectionGroupCommand, se_DeleteProtectionGroupCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, ShieldClientResolvedConfig } from "../ShieldClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteProtectionGroupCommand}.
 */
export interface DeleteProtectionGroupCommandInput extends DeleteProtectionGroupRequest {}
/**
 * @public
 *
 * The output of {@link DeleteProtectionGroupCommand}.
 */
export interface DeleteProtectionGroupCommandOutput extends DeleteProtectionGroupResponse, __MetadataBearer {}

/**
 * <p>Removes the specified protection group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ShieldClient, DeleteProtectionGroupCommand } from "@aws-sdk/client-shield"; // ES Modules import
 * // const { ShieldClient, DeleteProtectionGroupCommand } = require("@aws-sdk/client-shield"); // CommonJS import
 * // import type { ShieldClientConfig } from "@aws-sdk/client-shield";
 * const config = {}; // type is ShieldClientConfig
 * const client = new ShieldClient(config);
 * const input = { // DeleteProtectionGroupRequest
 *   ProtectionGroupId: "STRING_VALUE", // required
 * };
 * const command = new DeleteProtectionGroupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteProtectionGroupCommandInput - {@link DeleteProtectionGroupCommandInput}
 * @returns {@link DeleteProtectionGroupCommandOutput}
 * @see {@link DeleteProtectionGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteProtectionGroupCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class DeleteProtectionGroupCommand extends $Command
  .classBuilder<
    DeleteProtectionGroupCommandInput,
    DeleteProtectionGroupCommandOutput,
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
  .s("AWSShield_20160616", "DeleteProtectionGroup", {})
  .n("ShieldClient", "DeleteProtectionGroupCommand")
  .f(void 0, void 0)
  .ser(se_DeleteProtectionGroupCommand)
  .de(de_DeleteProtectionGroupCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteProtectionGroupRequest;
      output: {};
    };
    sdk: {
      input: DeleteProtectionGroupCommandInput;
      output: DeleteProtectionGroupCommandOutput;
    };
  };
}
