// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateRuleRequest, UpdateRuleResponse } from "../models/models_0";
import { de_UpdateRuleCommand, se_UpdateRuleCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, VPCLatticeClientResolvedConfig } from "../VPCLatticeClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateRuleCommand}.
 */
export interface UpdateRuleCommandInput extends UpdateRuleRequest {}
/**
 * @public
 *
 * The output of {@link UpdateRuleCommand}.
 */
export interface UpdateRuleCommandOutput extends UpdateRuleResponse, __MetadataBearer {}

/**
 * <p>Updates a rule for the listener. You can't modify a default listener rule. To modify a
 *    default listener rule, use <code>UpdateListener</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VPCLatticeClient, UpdateRuleCommand } from "@aws-sdk/client-vpc-lattice"; // ES Modules import
 * // const { VPCLatticeClient, UpdateRuleCommand } = require("@aws-sdk/client-vpc-lattice"); // CommonJS import
 * const client = new VPCLatticeClient(config);
 * const input = { // UpdateRuleRequest
 *   serviceIdentifier: "STRING_VALUE", // required
 *   listenerIdentifier: "STRING_VALUE", // required
 *   ruleIdentifier: "STRING_VALUE", // required
 *   match: { // RuleMatch Union: only one key present
 *     httpMatch: { // HttpMatch
 *       method: "STRING_VALUE",
 *       pathMatch: { // PathMatch
 *         match: { // PathMatchType Union: only one key present
 *           exact: "STRING_VALUE",
 *           prefix: "STRING_VALUE",
 *         },
 *         caseSensitive: true || false,
 *       },
 *       headerMatches: [ // HeaderMatchList
 *         { // HeaderMatch
 *           name: "STRING_VALUE", // required
 *           match: { // HeaderMatchType Union: only one key present
 *             exact: "STRING_VALUE",
 *             prefix: "STRING_VALUE",
 *             contains: "STRING_VALUE",
 *           },
 *           caseSensitive: true || false,
 *         },
 *       ],
 *     },
 *   },
 *   priority: Number("int"),
 *   action: { // RuleAction Union: only one key present
 *     forward: { // ForwardAction
 *       targetGroups: [ // WeightedTargetGroupList // required
 *         { // WeightedTargetGroup
 *           targetGroupIdentifier: "STRING_VALUE", // required
 *           weight: Number("int"),
 *         },
 *       ],
 *     },
 *     fixedResponse: { // FixedResponseAction
 *       statusCode: Number("int"), // required
 *     },
 *   },
 * };
 * const command = new UpdateRuleCommand(input);
 * const response = await client.send(command);
 * // { // UpdateRuleResponse
 * //   arn: "STRING_VALUE",
 * //   id: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   isDefault: true || false,
 * //   match: { // RuleMatch Union: only one key present
 * //     httpMatch: { // HttpMatch
 * //       method: "STRING_VALUE",
 * //       pathMatch: { // PathMatch
 * //         match: { // PathMatchType Union: only one key present
 * //           exact: "STRING_VALUE",
 * //           prefix: "STRING_VALUE",
 * //         },
 * //         caseSensitive: true || false,
 * //       },
 * //       headerMatches: [ // HeaderMatchList
 * //         { // HeaderMatch
 * //           name: "STRING_VALUE", // required
 * //           match: { // HeaderMatchType Union: only one key present
 * //             exact: "STRING_VALUE",
 * //             prefix: "STRING_VALUE",
 * //             contains: "STRING_VALUE",
 * //           },
 * //           caseSensitive: true || false,
 * //         },
 * //       ],
 * //     },
 * //   },
 * //   priority: Number("int"),
 * //   action: { // RuleAction Union: only one key present
 * //     forward: { // ForwardAction
 * //       targetGroups: [ // WeightedTargetGroupList // required
 * //         { // WeightedTargetGroup
 * //           targetGroupIdentifier: "STRING_VALUE", // required
 * //           weight: Number("int"),
 * //         },
 * //       ],
 * //     },
 * //     fixedResponse: { // FixedResponseAction
 * //       statusCode: Number("int"), // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateRuleCommandInput - {@link UpdateRuleCommandInput}
 * @returns {@link UpdateRuleCommandOutput}
 * @see {@link UpdateRuleCommandInput} for command's `input` shape.
 * @see {@link UpdateRuleCommandOutput} for command's `response` shape.
 * @see {@link VPCLatticeClientResolvedConfig | config} for VPCLatticeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The user does not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request conflicts with the current state of the resource. Updating or deleting a
 *    resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred while processing the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource that does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input does not satisfy the constraints specified by an Amazon Web Services
 *    service.</p>
 *
 * @throws {@link VPCLatticeServiceException}
 * <p>Base exception class for all service exceptions from VPCLattice service.</p>
 *
 * @public
 */
export class UpdateRuleCommand extends $Command
  .classBuilder<
    UpdateRuleCommandInput,
    UpdateRuleCommandOutput,
    VPCLatticeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: VPCLatticeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MercuryControlPlane", "UpdateRule", {})
  .n("VPCLatticeClient", "UpdateRuleCommand")
  .f(void 0, void 0)
  .ser(se_UpdateRuleCommand)
  .de(de_UpdateRuleCommand)
  .build() {}
