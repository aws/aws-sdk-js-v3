// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AmpClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmpClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { PutRuleGroupsNamespaceRequest, PutRuleGroupsNamespaceResponse } from "../models/models_0";
import { PutRuleGroupsNamespace } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutRuleGroupsNamespaceCommand}.
 */
export interface PutRuleGroupsNamespaceCommandInput extends PutRuleGroupsNamespaceRequest {}
/**
 * @public
 *
 * The output of {@link PutRuleGroupsNamespaceCommand}.
 */
export interface PutRuleGroupsNamespaceCommandOutput extends PutRuleGroupsNamespaceResponse, __MetadataBearer {}

/**
 * <p>Updates an existing rule groups namespace within a workspace. A rule groups namespace is associated with exactly one rules file. A workspace can have multiple rule groups namespaces.</p> <p>Use this operation only to update existing rule groups namespaces. To create a new rule groups namespace, use <code>CreateRuleGroupsNamespace</code>.</p> <p>You can't use this operation to add tags to an existing rule groups namespace. Instead, use <code>TagResource</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmpClient, PutRuleGroupsNamespaceCommand } from "@aws-sdk/client-amp"; // ES Modules import
 * // const { AmpClient, PutRuleGroupsNamespaceCommand } = require("@aws-sdk/client-amp"); // CommonJS import
 * // import type { AmpClientConfig } from "@aws-sdk/client-amp";
 * const config = {}; // type is AmpClientConfig
 * const client = new AmpClient(config);
 * const input = { // PutRuleGroupsNamespaceRequest
 *   workspaceId: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   data: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")   // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new PutRuleGroupsNamespaceCommand(input);
 * const response = await client.send(command);
 * // { // PutRuleGroupsNamespaceResponse
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
 * @param PutRuleGroupsNamespaceCommandInput - {@link PutRuleGroupsNamespaceCommandInput}
 * @returns {@link PutRuleGroupsNamespaceCommandOutput}
 * @see {@link PutRuleGroupsNamespaceCommandInput} for command's `input` shape.
 * @see {@link PutRuleGroupsNamespaceCommandOutput} for command's `response` shape.
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
export class PutRuleGroupsNamespaceCommand extends $Command
  .classBuilder<
    PutRuleGroupsNamespaceCommandInput,
    PutRuleGroupsNamespaceCommandOutput,
    AmpClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AmpClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonPrometheusService", "PutRuleGroupsNamespace", {})
  .n("AmpClient", "PutRuleGroupsNamespaceCommand")
  .sc(PutRuleGroupsNamespace)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutRuleGroupsNamespaceRequest;
      output: PutRuleGroupsNamespaceResponse;
    };
    sdk: {
      input: PutRuleGroupsNamespaceCommandInput;
      output: PutRuleGroupsNamespaceCommandOutput;
    };
  };
}
