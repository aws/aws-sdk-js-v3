// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AmpClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmpClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateRuleGroupsNamespaceRequest, CreateRuleGroupsNamespaceResponse } from "../models/models_0";
import { CreateRuleGroupsNamespace } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateRuleGroupsNamespaceCommand}.
 */
export interface CreateRuleGroupsNamespaceCommandInput extends CreateRuleGroupsNamespaceRequest {}
/**
 * @public
 *
 * The output of {@link CreateRuleGroupsNamespaceCommand}.
 */
export interface CreateRuleGroupsNamespaceCommandOutput extends CreateRuleGroupsNamespaceResponse, __MetadataBearer {}

/**
 * <p>The <code>CreateRuleGroupsNamespace</code> operation creates a rule groups namespace within a workspace. A rule groups namespace is associated with exactly one rules file. A workspace can have multiple rule groups namespaces.</p> <important> <p>The combined length of a rule group namespace and a rule group name cannot exceed 721 UTF-8 bytes.</p> </important> <p>Use this operation only to create new rule groups namespaces. To update an existing rule groups namespace, use <code>PutRuleGroupsNamespace</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmpClient, CreateRuleGroupsNamespaceCommand } from "@aws-sdk/client-amp"; // ES Modules import
 * // const { AmpClient, CreateRuleGroupsNamespaceCommand } = require("@aws-sdk/client-amp"); // CommonJS import
 * // import type { AmpClientConfig } from "@aws-sdk/client-amp";
 * const config = {}; // type is AmpClientConfig
 * const client = new AmpClient(config);
 * const input = { // CreateRuleGroupsNamespaceRequest
 *   workspaceId: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   data: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")   // required
 *   clientToken: "STRING_VALUE",
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateRuleGroupsNamespaceCommand(input);
 * const response = await client.send(command);
 * // { // CreateRuleGroupsNamespaceResponse
 * //   name: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * //   status: { // RuleGroupsNamespaceStatus
 * //     statusCode: "STRING_VALUE", // required
 * //     statusReason: "STRING_VALUE",
 * //   },
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateRuleGroupsNamespaceCommandInput - {@link CreateRuleGroupsNamespaceCommandInput}
 * @returns {@link CreateRuleGroupsNamespaceCommandOutput}
 * @see {@link CreateRuleGroupsNamespaceCommandInput} for command's `input` shape.
 * @see {@link CreateRuleGroupsNamespaceCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Completing the request would cause a service quota to be exceeded.</p>
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
export class CreateRuleGroupsNamespaceCommand extends $Command
  .classBuilder<
    CreateRuleGroupsNamespaceCommandInput,
    CreateRuleGroupsNamespaceCommandOutput,
    AmpClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AmpClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonPrometheusService", "CreateRuleGroupsNamespace", {})
  .n("AmpClient", "CreateRuleGroupsNamespaceCommand")
  .sc(CreateRuleGroupsNamespace)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateRuleGroupsNamespaceRequest;
      output: CreateRuleGroupsNamespaceResponse;
    };
    sdk: {
      input: CreateRuleGroupsNamespaceCommandInput;
      output: CreateRuleGroupsNamespaceCommandOutput;
    };
  };
}
