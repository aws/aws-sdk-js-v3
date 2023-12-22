// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AmpClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmpClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeRuleGroupsNamespaceRequest, DescribeRuleGroupsNamespaceResponse } from "../models/models_0";
import {
  de_DescribeRuleGroupsNamespaceCommand,
  se_DescribeRuleGroupsNamespaceCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * @public
 * Describe a rule groups namespace.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmpClient, DescribeRuleGroupsNamespaceCommand } from "@aws-sdk/client-amp"; // ES Modules import
 * // const { AmpClient, DescribeRuleGroupsNamespaceCommand } = require("@aws-sdk/client-amp"); // CommonJS import
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
 * //     data: "BLOB_VALUE", // required
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
 *  User does not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *  Unexpected error during processing of request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  Request references a resource which does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  Request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *  The input fails to satisfy the constraints specified by an AWS service.
 *
 * @throws {@link AmpServiceException}
 * <p>Base exception class for all service exceptions from Amp service.</p>
 *
 */
export class DescribeRuleGroupsNamespaceCommand extends $Command
  .classBuilder<
    DescribeRuleGroupsNamespaceCommandInput,
    DescribeRuleGroupsNamespaceCommandOutput,
    AmpClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: AmpClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonPrometheusService", "DescribeRuleGroupsNamespace", {})
  .n("AmpClient", "DescribeRuleGroupsNamespaceCommand")
  .f(void 0, void 0)
  .ser(se_DescribeRuleGroupsNamespaceCommand)
  .de(de_DescribeRuleGroupsNamespaceCommand)
  .build() {}
