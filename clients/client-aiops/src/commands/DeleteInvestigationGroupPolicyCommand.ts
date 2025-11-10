// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AIOpsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AIOpsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteInvestigationGroupPolicyOutput, DeleteInvestigationGroupPolicyRequest } from "../models/models_0";
import { DeleteInvestigationGroupPolicy } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteInvestigationGroupPolicyCommand}.
 */
export interface DeleteInvestigationGroupPolicyCommandInput extends DeleteInvestigationGroupPolicyRequest {}
/**
 * @public
 *
 * The output of {@link DeleteInvestigationGroupPolicyCommand}.
 */
export interface DeleteInvestigationGroupPolicyCommandOutput
  extends DeleteInvestigationGroupPolicyOutput,
    __MetadataBearer {}

/**
 * <p>Removes the IAM resource policy from being associated with the investigation group that you specify.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AIOpsClient, DeleteInvestigationGroupPolicyCommand } from "@aws-sdk/client-aiops"; // ES Modules import
 * // const { AIOpsClient, DeleteInvestigationGroupPolicyCommand } = require("@aws-sdk/client-aiops"); // CommonJS import
 * // import type { AIOpsClientConfig } from "@aws-sdk/client-aiops";
 * const config = {}; // type is AIOpsClientConfig
 * const client = new AIOpsClient(config);
 * const input = { // DeleteInvestigationGroupPolicyRequest
 *   identifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteInvestigationGroupPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteInvestigationGroupPolicyCommandInput - {@link DeleteInvestigationGroupPolicyCommandInput}
 * @returns {@link DeleteInvestigationGroupPolicyCommandOutput}
 * @see {@link DeleteInvestigationGroupPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteInvestigationGroupPolicyCommandOutput} for command's `response` shape.
 * @see {@link AIOpsClientResolvedConfig | config} for AIOpsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. You can try again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource doesn't exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled because of quota limits. You can try again later.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>This operation or its parameters aren't formatted correctly.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This operation couldn't be completed because of a conflict in resource states.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>Access id denied for this operation, or this operation is not valid for the specified resource.</p>
 *
 * @throws {@link AIOpsServiceException}
 * <p>Base exception class for all service exceptions from AIOps service.</p>
 *
 *
 * @public
 */
export class DeleteInvestigationGroupPolicyCommand extends $Command
  .classBuilder<
    DeleteInvestigationGroupPolicyCommandInput,
    DeleteInvestigationGroupPolicyCommandOutput,
    AIOpsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AIOpsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AIOps", "DeleteInvestigationGroupPolicy", {})
  .n("AIOpsClient", "DeleteInvestigationGroupPolicyCommand")
  .sc(DeleteInvestigationGroupPolicy)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteInvestigationGroupPolicyRequest;
      output: {};
    };
    sdk: {
      input: DeleteInvestigationGroupPolicyCommandInput;
      output: DeleteInvestigationGroupPolicyCommandOutput;
    };
  };
}
