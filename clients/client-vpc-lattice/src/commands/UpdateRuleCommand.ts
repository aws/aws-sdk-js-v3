// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateRuleRequest, UpdateRuleResponse } from "../models/models_0";
import { UpdateRule$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Updates a specified rule for the listener. You can't modify a default listener rule. To modify a default listener rule, use `UpdateListener`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VPCLatticeClient, UpdateRuleCommand } from "@aws-sdk/client-vpc-lattice"; // ES Modules import
 * // const { VPCLatticeClient, UpdateRuleCommand } = require("@aws-sdk/client-vpc-lattice"); // CommonJS import
 * // import type { VPCLatticeClientConfig } from "@aws-sdk/client-vpc-lattice";
 * const config = {}; // type is VPCLatticeClientConfig
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request would cause a service quota to be exceeded.
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
export class UpdateRuleCommand extends command<UpdateRuleCommandInput, UpdateRuleCommandOutput>(
  _ep0,
  _mw0,
  "UpdateRule",
  UpdateRule$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateRuleRequest;
      output: UpdateRuleResponse;
    };
    sdk: {
      input: UpdateRuleCommandInput;
      output: UpdateRuleCommandOutput;
    };
  };
}
