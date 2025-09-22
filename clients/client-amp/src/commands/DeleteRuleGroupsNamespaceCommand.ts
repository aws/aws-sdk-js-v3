// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AmpClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmpClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteRuleGroupsNamespaceRequest } from "../models/models_0";
import { DeleteRuleGroupsNamespace } from "../schemas/schemas_17_RuleGroups";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteRuleGroupsNamespaceCommand}.
 */
export interface DeleteRuleGroupsNamespaceCommandInput extends DeleteRuleGroupsNamespaceRequest {}
/**
 * @public
 *
 * The output of {@link DeleteRuleGroupsNamespaceCommand}.
 */
export interface DeleteRuleGroupsNamespaceCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes one rule groups namespace and its associated rule groups definition.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmpClient, DeleteRuleGroupsNamespaceCommand } from "@aws-sdk/client-amp"; // ES Modules import
 * // const { AmpClient, DeleteRuleGroupsNamespaceCommand } = require("@aws-sdk/client-amp"); // CommonJS import
 * // import type { AmpClientConfig } from "@aws-sdk/client-amp";
 * const config = {}; // type is AmpClientConfig
 * const client = new AmpClient(config);
 * const input = { // DeleteRuleGroupsNamespaceRequest
 *   workspaceId: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new DeleteRuleGroupsNamespaceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteRuleGroupsNamespaceCommandInput - {@link DeleteRuleGroupsNamespaceCommandInput}
 * @returns {@link DeleteRuleGroupsNamespaceCommandOutput}
 * @see {@link DeleteRuleGroupsNamespaceCommandInput} for command's `input` shape.
 * @see {@link DeleteRuleGroupsNamespaceCommandOutput} for command's `response` shape.
 * @see {@link AmpClientResolvedConfig | config} for AmpClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request would cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred during the processing of the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resources that doesn't exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link AmpServiceException}
 * <p>Base exception class for all service exceptions from Amp service.</p>
 *
 *
 * @public
 */
export class DeleteRuleGroupsNamespaceCommand extends $Command
  .classBuilder<
    DeleteRuleGroupsNamespaceCommandInput,
    DeleteRuleGroupsNamespaceCommandOutput,
    AmpClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AmpClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonPrometheusService", "DeleteRuleGroupsNamespace", {})
  .n("AmpClient", "DeleteRuleGroupsNamespaceCommand")
  .sc(DeleteRuleGroupsNamespace)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteRuleGroupsNamespaceRequest;
      output: {};
    };
    sdk: {
      input: DeleteRuleGroupsNamespaceCommandInput;
      output: DeleteRuleGroupsNamespaceCommandOutput;
    };
  };
}
