// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { BatchUpdateRuleRequest, BatchUpdateRuleResponse } from "../models/models_0";
import { BatchUpdateRule$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, VPCLatticeClientResolvedConfig } from "../VPCLatticeClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchUpdateRuleCommand}.
 */
export interface BatchUpdateRuleCommandInput extends BatchUpdateRuleRequest {}
/**
 * @public
 *
 * The output of {@link BatchUpdateRuleCommand}.
 */
export interface BatchUpdateRuleCommandOutput extends BatchUpdateRuleResponse, __MetadataBearer {}

/**
 * <p>Updates the listener rules in a batch. You can use this operation to change the priority of listener rules. This can be useful when bulk updating or swapping rule priority.</p> <p> <b>Required permissions:</b> <code>vpc-lattice:UpdateRule</code> </p> <p>For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/security_iam_service-with-iam.html">How Amazon VPC Lattice works with IAM</a> in the <i>Amazon VPC Lattice User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VPCLatticeClient, BatchUpdateRuleCommand } from "@aws-sdk/client-vpc-lattice"; // ES Modules import
 * // const { VPCLatticeClient, BatchUpdateRuleCommand } = require("@aws-sdk/client-vpc-lattice"); // CommonJS import
 * // import type { VPCLatticeClientConfig } from "@aws-sdk/client-vpc-lattice";
 * const config = {}; // type is VPCLatticeClientConfig
 * const client = new VPCLatticeClient(config);
 * const input = { // BatchUpdateRuleRequest
 *   serviceIdentifier: "STRING_VALUE", // required
 *   listenerIdentifier: "STRING_VALUE", // required
 *   rules: [ // RuleUpdateList // required
 *     { // RuleUpdate
 *       ruleIdentifier: "STRING_VALUE", // required
 *       match: { // RuleMatch Union: only one key present
 *         httpMatch: { // HttpMatch
 *           method: "STRING_VALUE",
 *           pathMatch: { // PathMatch
 *             match: { // PathMatchType Union: only one key present
 *               exact: "STRING_VALUE",
 *               prefix: "STRING_VALUE",
 *             },
 *             caseSensitive: true || false,
 *           },
 *           headerMatches: [ // HeaderMatchList
 *             { // HeaderMatch
 *               name: "STRING_VALUE", // required
 *               match: { // HeaderMatchType Union: only one key present
 *                 exact: "STRING_VALUE",
 *                 prefix: "STRING_VALUE",
 *                 contains: "STRING_VALUE",
 *               },
 *               caseSensitive: true || false,
 *             },
 *           ],
 *         },
 *       },
 *       priority: Number("int"),
 *       action: { // RuleAction Union: only one key present
 *         forward: { // ForwardAction
 *           targetGroups: [ // WeightedTargetGroupList // required
 *             { // WeightedTargetGroup
 *               targetGroupIdentifier: "STRING_VALUE", // required
 *               weight: Number("int"),
 *             },
 *           ],
 *         },
 *         fixedResponse: { // FixedResponseAction
 *           statusCode: Number("int"), // required
 *         },
 *       },
 *     },
 *   ],
 * };
 * const command = new BatchUpdateRuleCommand(input);
 * const response = await client.send(command);
 * // { // BatchUpdateRuleResponse
 * //   successful: [ // RuleUpdateSuccessList
 * //     { // RuleUpdateSuccess
 * //       arn: "STRING_VALUE",
 * //       id: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       isDefault: true || false,
 * //       match: { // RuleMatch Union: only one key present
 * //         httpMatch: { // HttpMatch
 * //           method: "STRING_VALUE",
 * //           pathMatch: { // PathMatch
 * //             match: { // PathMatchType Union: only one key present
 * //               exact: "STRING_VALUE",
 * //               prefix: "STRING_VALUE",
 * //             },
 * //             caseSensitive: true || false,
 * //           },
 * //           headerMatches: [ // HeaderMatchList
 * //             { // HeaderMatch
 * //               name: "STRING_VALUE", // required
 * //               match: { // HeaderMatchType Union: only one key present
 * //                 exact: "STRING_VALUE",
 * //                 prefix: "STRING_VALUE",
 * //                 contains: "STRING_VALUE",
 * //               },
 * //               caseSensitive: true || false,
 * //             },
 * //           ],
 * //         },
 * //       },
 * //       priority: Number("int"),
 * //       action: { // RuleAction Union: only one key present
 * //         forward: { // ForwardAction
 * //           targetGroups: [ // WeightedTargetGroupList // required
 * //             { // WeightedTargetGroup
 * //               targetGroupIdentifier: "STRING_VALUE", // required
 * //               weight: Number("int"),
 * //             },
 * //           ],
 * //         },
 * //         fixedResponse: { // FixedResponseAction
 * //           statusCode: Number("int"), // required
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   unsuccessful: [ // RuleUpdateFailureList
 * //     { // RuleUpdateFailure
 * //       ruleIdentifier: "STRING_VALUE",
 * //       failureCode: "STRING_VALUE",
 * //       failureMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchUpdateRuleCommandInput - {@link BatchUpdateRuleCommandInput}
 * @returns {@link BatchUpdateRuleCommandOutput}
 * @see {@link BatchUpdateRuleCommandInput} for command's `input` shape.
 * @see {@link BatchUpdateRuleCommandOutput} for command's `response` shape.
 * @see {@link VPCLatticeClientResolvedConfig | config} for VPCLatticeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The user does not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request conflicts with the current state of the resource. Updating or deleting a resource can cause an inconsistent state.</p>
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
 *  <p>The input does not satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link VPCLatticeServiceException}
 * <p>Base exception class for all service exceptions from VPCLattice service.</p>
 *
 *
 * @public
 */
export class BatchUpdateRuleCommand extends $Command
  .classBuilder<
    BatchUpdateRuleCommandInput,
    BatchUpdateRuleCommandOutput,
    VPCLatticeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: VPCLatticeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MercuryControlPlane", "BatchUpdateRule", {})
  .n("VPCLatticeClient", "BatchUpdateRuleCommand")
  .sc(BatchUpdateRule$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchUpdateRuleRequest;
      output: BatchUpdateRuleResponse;
    };
    sdk: {
      input: BatchUpdateRuleCommandInput;
      output: BatchUpdateRuleCommandOutput;
    };
  };
}
