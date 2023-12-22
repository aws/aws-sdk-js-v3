// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AmpClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmpClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { PutRuleGroupsNamespaceRequest, PutRuleGroupsNamespaceResponse } from "../models/models_0";
import { de_PutRuleGroupsNamespaceCommand, se_PutRuleGroupsNamespaceCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * @public
 * Update a rule groups namespace.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmpClient, PutRuleGroupsNamespaceCommand } from "@aws-sdk/client-amp"; // ES Modules import
 * // const { AmpClient, PutRuleGroupsNamespaceCommand } = require("@aws-sdk/client-amp"); // CommonJS import
 * const client = new AmpClient(config);
 * const input = { // PutRuleGroupsNamespaceRequest
 *   workspaceId: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   data: "BLOB_VALUE", // required
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
 *  User does not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *  Updating or deleting a resource can cause an inconsistent state.
 *
 * @throws {@link InternalServerException} (server fault)
 *  Unexpected error during processing of request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  Request references a resource which does not exist.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  Request would cause a service quota to be exceeded.
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
export class PutRuleGroupsNamespaceCommand extends $Command
  .classBuilder<
    PutRuleGroupsNamespaceCommandInput,
    PutRuleGroupsNamespaceCommandOutput,
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
  .s("AmazonPrometheusService", "PutRuleGroupsNamespace", {})
  .n("AmpClient", "PutRuleGroupsNamespaceCommand")
  .f(void 0, void 0)
  .ser(se_PutRuleGroupsNamespaceCommand)
  .de(de_PutRuleGroupsNamespaceCommand)
  .build() {}
