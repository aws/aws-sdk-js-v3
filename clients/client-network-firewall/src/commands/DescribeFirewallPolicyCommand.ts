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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { DescribeFirewallPolicyRequest, DescribeFirewallPolicyResponse } from "../models/models_0";
import { NetworkFirewallClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkFirewallClient";
import { de_DescribeFirewallPolicyCommand, se_DescribeFirewallPolicyCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeFirewallPolicyCommand}.
 */
export interface DescribeFirewallPolicyCommandInput extends DescribeFirewallPolicyRequest {}
/**
 * @public
 *
 * The output of {@link DescribeFirewallPolicyCommand}.
 */
export interface DescribeFirewallPolicyCommandOutput extends DescribeFirewallPolicyResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns the data objects for the specified firewall policy. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, DescribeFirewallPolicyCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, DescribeFirewallPolicyCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * const client = new NetworkFirewallClient(config);
 * const input = { // DescribeFirewallPolicyRequest
 *   FirewallPolicyName: "STRING_VALUE",
 *   FirewallPolicyArn: "STRING_VALUE",
 * };
 * const command = new DescribeFirewallPolicyCommand(input);
 * const response = await client.send(command);
 * // { // DescribeFirewallPolicyResponse
 * //   UpdateToken: "STRING_VALUE", // required
 * //   FirewallPolicyResponse: { // FirewallPolicyResponse
 * //     FirewallPolicyName: "STRING_VALUE", // required
 * //     FirewallPolicyArn: "STRING_VALUE", // required
 * //     FirewallPolicyId: "STRING_VALUE", // required
 * //     Description: "STRING_VALUE",
 * //     FirewallPolicyStatus: "ACTIVE" || "DELETING",
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     ConsumedStatelessRuleCapacity: Number("int"),
 * //     ConsumedStatefulRuleCapacity: Number("int"),
 * //     NumberOfAssociations: Number("int"),
 * //     EncryptionConfiguration: { // EncryptionConfiguration
 * //       KeyId: "STRING_VALUE",
 * //       Type: "CUSTOMER_KMS" || "AWS_OWNED_KMS_KEY", // required
 * //     },
 * //     LastModifiedTime: new Date("TIMESTAMP"),
 * //   },
 * //   FirewallPolicy: { // FirewallPolicy
 * //     StatelessRuleGroupReferences: [ // StatelessRuleGroupReferences
 * //       { // StatelessRuleGroupReference
 * //         ResourceArn: "STRING_VALUE", // required
 * //         Priority: Number("int"), // required
 * //       },
 * //     ],
 * //     StatelessDefaultActions: [ // StatelessActions // required
 * //       "STRING_VALUE",
 * //     ],
 * //     StatelessFragmentDefaultActions: [ // required
 * //       "STRING_VALUE",
 * //     ],
 * //     StatelessCustomActions: [ // CustomActions
 * //       { // CustomAction
 * //         ActionName: "STRING_VALUE", // required
 * //         ActionDefinition: { // ActionDefinition
 * //           PublishMetricAction: { // PublishMetricAction
 * //             Dimensions: [ // Dimensions // required
 * //               { // Dimension
 * //                 Value: "STRING_VALUE", // required
 * //               },
 * //             ],
 * //           },
 * //         },
 * //       },
 * //     ],
 * //     StatefulRuleGroupReferences: [ // StatefulRuleGroupReferences
 * //       { // StatefulRuleGroupReference
 * //         ResourceArn: "STRING_VALUE", // required
 * //         Priority: Number("int"),
 * //         Override: { // StatefulRuleGroupOverride
 * //           Action: "DROP_TO_ALERT",
 * //         },
 * //       },
 * //     ],
 * //     StatefulDefaultActions: [ // StatefulActions
 * //       "STRING_VALUE",
 * //     ],
 * //     StatefulEngineOptions: { // StatefulEngineOptions
 * //       RuleOrder: "DEFAULT_ACTION_ORDER" || "STRICT_ORDER",
 * //       StreamExceptionPolicy: "DROP" || "CONTINUE" || "REJECT",
 * //     },
 * //     TLSInspectionConfigurationArn: "STRING_VALUE",
 * //     PolicyVariables: { // PolicyVariables
 * //       RuleVariables: { // IPSets
 * //         "<keys>": { // IPSet
 * //           Definition: [ // VariableDefinitionList // required
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeFirewallPolicyCommandInput - {@link DescribeFirewallPolicyCommandInput}
 * @returns {@link DescribeFirewallPolicyCommandOutput}
 * @see {@link DescribeFirewallPolicyCommandInput} for command's `input` shape.
 * @see {@link DescribeFirewallPolicyCommandOutput} for command's `response` shape.
 * @see {@link NetworkFirewallClientResolvedConfig | config} for NetworkFirewallClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Your request is valid, but Network Firewall couldn’t perform the operation because of a
 *          system problem. Retry your request. </p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The operation failed because of a problem with your request. Examples include: </p>
 *          <ul>
 *             <li>
 *                <p>You specified an unsupported parameter name or value.</p>
 *             </li>
 *             <li>
 *                <p>You tried to update a property with a value that isn't among the available
 *                types.</p>
 *             </li>
 *             <li>
 *                <p>Your request references an ARN that is malformed, or corresponds to a resource
 *                that isn't valid in the context of the request.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Unable to locate a resource using the parameters that you provided.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Unable to process the request due to throttling limitations.</p>
 *
 * @throws {@link NetworkFirewallServiceException}
 * <p>Base exception class for all service exceptions from NetworkFirewall service.</p>
 *
 */
export class DescribeFirewallPolicyCommand extends $Command<
  DescribeFirewallPolicyCommandInput,
  DescribeFirewallPolicyCommandOutput,
  NetworkFirewallClientResolvedConfig
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
  constructor(readonly input: DescribeFirewallPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NetworkFirewallClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeFirewallPolicyCommandInput, DescribeFirewallPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeFirewallPolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NetworkFirewallClient";
    const commandName = "DescribeFirewallPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "NetworkFirewall_20201112",
        operation: "DescribeFirewallPolicy",
      },
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
  private serialize(input: DescribeFirewallPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeFirewallPolicyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeFirewallPolicyCommandOutput> {
    return de_DescribeFirewallPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
