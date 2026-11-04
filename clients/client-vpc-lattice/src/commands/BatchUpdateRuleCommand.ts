// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { BatchUpdateRuleRequest, BatchUpdateRuleResponse } from "../models/models_0";
import { BatchUpdateRule$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Updates the listener rules in a batch. You can use this operation to change the priority of listener rules. This can be useful when bulk updating or swapping rule priority.
 *
 * **Required permissions:** `vpc-lattice:UpdateRule`
 *
 * For more information, see [How Amazon VPC Lattice works with IAM](https://docs.aws.amazon.com/vpc-lattice/latest/ug/security_iam_service-with-iam.html) in the *Amazon VPC Lattice User Guide*.
 *
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
 *
 * The user does not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request conflicts with the current state of the resource. Updating or deleting a resource can cause an inconsistent state.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected error occurred while processing the request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The request references a resource that does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The limit on the number of requests per second was exceeded.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input does not satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link VPCLatticeServiceException}
 *
 * Base exception class for all service exceptions from VPCLattice service.
 *
 * @public
 */
export class BatchUpdateRuleCommand extends command<BatchUpdateRuleCommandInput, BatchUpdateRuleCommandOutput>(
  _ep0,
  _mw0,
  "BatchUpdateRule",
  BatchUpdateRule$
) {
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
