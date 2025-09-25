// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { DeleteResourcePolicyRequest, DeleteResourcePolicyResponse } from "../models/models_1";
import { DeleteResourcePolicy } from "../schemas/schemas_82_Policy";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteResourcePolicyCommand}.
 */
export interface DeleteResourcePolicyCommandInput extends DeleteResourcePolicyRequest {}
/**
 * @public
 *
 * The output of {@link DeleteResourcePolicyCommand}.
 */
export interface DeleteResourcePolicyCommandOutput extends DeleteResourcePolicyResponse, __MetadataBearer {}

/**
 * <p>Deletes a specified policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, DeleteResourcePolicyCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, DeleteResourcePolicyCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // DeleteResourcePolicyRequest
 *   PolicyHashCondition: "STRING_VALUE",
 *   ResourceArn: "STRING_VALUE",
 * };
 * const command = new DeleteResourcePolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteResourcePolicyCommandInput - {@link DeleteResourcePolicyCommandInput}
 * @returns {@link DeleteResourcePolicyCommandOutput}
 * @see {@link DeleteResourcePolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteResourcePolicyCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link ConditionCheckFailureException} (client fault)
 *  <p>A specified condition was not satisfied.</p>
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class DeleteResourcePolicyCommand extends $Command
  .classBuilder<
    DeleteResourcePolicyCommandInput,
    DeleteResourcePolicyCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "DeleteResourcePolicy", {})
  .n("GlueClient", "DeleteResourcePolicyCommand")
  .sc(DeleteResourcePolicy)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteResourcePolicyRequest;
      output: {};
    };
    sdk: {
      input: DeleteResourcePolicyCommandInput;
      output: DeleteResourcePolicyCommandOutput;
    };
  };
}
