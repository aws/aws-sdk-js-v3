// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  DeregisterPatchBaselineForPatchGroupRequest,
  DeregisterPatchBaselineForPatchGroupResult,
} from "../models/models_0";
import { DeregisterPatchBaselineForPatchGroup$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeregisterPatchBaselineForPatchGroupCommand}.
 */
export interface DeregisterPatchBaselineForPatchGroupCommandInput extends DeregisterPatchBaselineForPatchGroupRequest {}
/**
 * @public
 *
 * The output of {@link DeregisterPatchBaselineForPatchGroupCommand}.
 */
export interface DeregisterPatchBaselineForPatchGroupCommandOutput
  extends DeregisterPatchBaselineForPatchGroupResult,
    __MetadataBearer {}

/**
 * <p>Removes a patch group from a patch baseline.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DeregisterPatchBaselineForPatchGroupCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DeregisterPatchBaselineForPatchGroupCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // DeregisterPatchBaselineForPatchGroupRequest
 *   BaselineId: "STRING_VALUE", // required
 *   PatchGroup: "STRING_VALUE", // required
 * };
 * const command = new DeregisterPatchBaselineForPatchGroupCommand(input);
 * const response = await client.send(command);
 * // { // DeregisterPatchBaselineForPatchGroupResult
 * //   BaselineId: "STRING_VALUE",
 * //   PatchGroup: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeregisterPatchBaselineForPatchGroupCommandInput - {@link DeregisterPatchBaselineForPatchGroupCommandInput}
 * @returns {@link DeregisterPatchBaselineForPatchGroupCommandOutput}
 * @see {@link DeregisterPatchBaselineForPatchGroupCommandInput} for command's `input` shape.
 * @see {@link DeregisterPatchBaselineForPatchGroupCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidResourceId} (client fault)
 *  <p>The resource ID isn't valid. Verify that you entered the correct ID and try again.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 *
 * @public
 */
export class DeregisterPatchBaselineForPatchGroupCommand extends $Command
  .classBuilder<
    DeregisterPatchBaselineForPatchGroupCommandInput,
    DeregisterPatchBaselineForPatchGroupCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonSSM", "DeregisterPatchBaselineForPatchGroup", {})
  .n("SSMClient", "DeregisterPatchBaselineForPatchGroupCommand")
  .sc(DeregisterPatchBaselineForPatchGroup$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeregisterPatchBaselineForPatchGroupRequest;
      output: DeregisterPatchBaselineForPatchGroupResult;
    };
    sdk: {
      input: DeregisterPatchBaselineForPatchGroupCommandInput;
      output: DeregisterPatchBaselineForPatchGroupCommandOutput;
    };
  };
}
