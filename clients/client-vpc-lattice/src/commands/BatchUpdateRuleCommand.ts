// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { BatchUpdateRuleRequest, BatchUpdateRuleResponse } from "../models/models_0";
import { de_BatchUpdateRuleCommand, se_BatchUpdateRuleCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, VPCLatticeClientResolvedConfig } from "../VPCLatticeClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * @public
 * <p>Updates the listener rules in a batch. You can use this operation to change the priority of
 *    listener rules. This can be useful when bulk updating or swapping rule priority. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VPCLatticeClient, BatchUpdateRuleCommand } from "@aws-sdk/client-vpc-lattice"; // ES Modules import
 * // const { VPCLatticeClient, BatchUpdateRuleCommand } = require("@aws-sdk/client-vpc-lattice"); // CommonJS import
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
 */
export class BatchUpdateRuleCommand extends $Command<
  BatchUpdateRuleCommandInput,
  BatchUpdateRuleCommandOutput,
  VPCLatticeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: BatchUpdateRuleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: VPCLatticeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchUpdateRuleCommandInput, BatchUpdateRuleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchUpdateRuleCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "VPCLatticeClient";
    const commandName = "BatchUpdateRuleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: BatchUpdateRuleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_BatchUpdateRuleCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchUpdateRuleCommandOutput> {
    return de_BatchUpdateRuleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
