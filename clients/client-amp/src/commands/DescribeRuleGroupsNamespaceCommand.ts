// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AmpClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmpClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeRuleGroupsNamespaceRequest, DescribeRuleGroupsNamespaceResponse } from "../models/models_0";
import { DescribeRuleGroupsNamespace } from "../schemas/schemas_5_Describe";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeRuleGroupsNamespaceCommand}.
 */
export interface DescribeRuleGroupsNamespaceCommandInput extends DescribeRuleGroupsNamespaceRequest {}
/**
 * @public
 *
 * The output of {@link DescribeRuleGroupsNamespaceCommand}.
 */
export interface DescribeRuleGroupsNamespaceCommandOutput
  extends DescribeRuleGroupsNamespaceResponse,
    __MetadataBearer {}

/**
 * <p>Returns complete information about one rule groups namespace. To retrieve a list of rule groups namespaces, use <code>ListRuleGroupsNamespaces</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmpClient, DescribeRuleGroupsNamespaceCommand } from "@aws-sdk/client-amp"; // ES Modules import
 * // const { AmpClient, DescribeRuleGroupsNamespaceCommand } = require("@aws-sdk/client-amp"); // CommonJS import
 * // import type { AmpClientConfig } from "@aws-sdk/client-amp";
 * const config = {}; // type is AmpClientConfig
 * const client = new AmpClient(config);
 * const input = { // DescribeRuleGroupsNamespaceRequest
 *   workspaceId: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 * };
 * const command = new DescribeRuleGroupsNamespaceCommand(input);
 * const response = await client.send(command);
 * // { // DescribeRuleGroupsNamespaceResponse
 * //   ruleGroupsNamespace: { // RuleGroupsNamespaceDescription
 * //     arn: "STRING_VALUE", // required
 * //     name: "STRING_VALUE", // required
 * //     status: { // RuleGroupsNamespaceStatus
 * //       statusCode: "STRING_VALUE", // required
 * //       statusReason: "STRING_VALUE",
 * //     },
 * //     data: new Uint8Array(), // required
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     modifiedAt: new Date("TIMESTAMP"), // required
 * //     tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeRuleGroupsNamespaceCommandInput - {@link DescribeRuleGroupsNamespaceCommandInput}
 * @returns {@link DescribeRuleGroupsNamespaceCommandOutput}
 * @see {@link DescribeRuleGroupsNamespaceCommandInput} for command's `input` shape.
 * @see {@link DescribeRuleGroupsNamespaceCommandOutput} for command's `response` shape.
 * @see {@link AmpClientResolvedConfig | config} for AmpClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
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
export class DescribeRuleGroupsNamespaceCommand extends $Command
  .classBuilder<
    DescribeRuleGroupsNamespaceCommandInput,
    DescribeRuleGroupsNamespaceCommandOutput,
    AmpClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AmpClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonPrometheusService", "DescribeRuleGroupsNamespace", {})
  .n("AmpClient", "DescribeRuleGroupsNamespaceCommand")
  .sc(DescribeRuleGroupsNamespace)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeRuleGroupsNamespaceRequest;
      output: DescribeRuleGroupsNamespaceResponse;
    };
    sdk: {
      input: DescribeRuleGroupsNamespaceCommandInput;
      output: DescribeRuleGroupsNamespaceCommandOutput;
    };
  };
}
