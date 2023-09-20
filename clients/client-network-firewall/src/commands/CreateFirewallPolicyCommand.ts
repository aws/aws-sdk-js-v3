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

import { CreateFirewallPolicyRequest, CreateFirewallPolicyResponse } from "../models/models_0";
import { NetworkFirewallClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkFirewallClient";
import { de_CreateFirewallPolicyCommand, se_CreateFirewallPolicyCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateFirewallPolicyCommand}.
 */
export interface CreateFirewallPolicyCommandInput extends CreateFirewallPolicyRequest {}
/**
 * @public
 *
 * The output of {@link CreateFirewallPolicyCommand}.
 */
export interface CreateFirewallPolicyCommandOutput extends CreateFirewallPolicyResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates the firewall policy for the firewall according to the specifications. </p>
 *          <p>An Network Firewall firewall policy defines the behavior of a firewall, in a collection of
 *          stateless and stateful rule groups and other settings. You can use one firewall policy for
 *          multiple firewalls. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, CreateFirewallPolicyCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, CreateFirewallPolicyCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * const client = new NetworkFirewallClient(config);
 * const input = { // CreateFirewallPolicyRequest
 *   FirewallPolicyName: "STRING_VALUE", // required
 *   FirewallPolicy: { // FirewallPolicy
 *     StatelessRuleGroupReferences: [ // StatelessRuleGroupReferences
 *       { // StatelessRuleGroupReference
 *         ResourceArn: "STRING_VALUE", // required
 *         Priority: Number("int"), // required
 *       },
 *     ],
 *     StatelessDefaultActions: [ // StatelessActions // required
 *       "STRING_VALUE",
 *     ],
 *     StatelessFragmentDefaultActions: [ // required
 *       "STRING_VALUE",
 *     ],
 *     StatelessCustomActions: [ // CustomActions
 *       { // CustomAction
 *         ActionName: "STRING_VALUE", // required
 *         ActionDefinition: { // ActionDefinition
 *           PublishMetricAction: { // PublishMetricAction
 *             Dimensions: [ // Dimensions // required
 *               { // Dimension
 *                 Value: "STRING_VALUE", // required
 *               },
 *             ],
 *           },
 *         },
 *       },
 *     ],
 *     StatefulRuleGroupReferences: [ // StatefulRuleGroupReferences
 *       { // StatefulRuleGroupReference
 *         ResourceArn: "STRING_VALUE", // required
 *         Priority: Number("int"),
 *         Override: { // StatefulRuleGroupOverride
 *           Action: "DROP_TO_ALERT",
 *         },
 *       },
 *     ],
 *     StatefulDefaultActions: [ // StatefulActions
 *       "STRING_VALUE",
 *     ],
 *     StatefulEngineOptions: { // StatefulEngineOptions
 *       RuleOrder: "DEFAULT_ACTION_ORDER" || "STRICT_ORDER",
 *       StreamExceptionPolicy: "DROP" || "CONTINUE" || "REJECT",
 *     },
 *     TLSInspectionConfigurationArn: "STRING_VALUE",
 *     PolicyVariables: { // PolicyVariables
 *       RuleVariables: { // IPSets
 *         "<keys>": { // IPSet
 *           Definition: [ // VariableDefinitionList // required
 *             "STRING_VALUE",
 *           ],
 *         },
 *       },
 *     },
 *   },
 *   Description: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   DryRun: true || false,
 *   EncryptionConfiguration: { // EncryptionConfiguration
 *     KeyId: "STRING_VALUE",
 *     Type: "CUSTOMER_KMS" || "AWS_OWNED_KMS_KEY", // required
 *   },
 * };
 * const command = new CreateFirewallPolicyCommand(input);
 * const response = await client.send(command);
 * // { // CreateFirewallPolicyResponse
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
 * // };
 *
 * ```
 *
 * @param CreateFirewallPolicyCommandInput - {@link CreateFirewallPolicyCommandInput}
 * @returns {@link CreateFirewallPolicyCommandOutput}
 * @see {@link CreateFirewallPolicyCommandInput} for command's `input` shape.
 * @see {@link CreateFirewallPolicyCommandOutput} for command's `response` shape.
 * @see {@link NetworkFirewallClientResolvedConfig | config} for NetworkFirewallClient's `config` shape.
 *
 * @throws {@link InsufficientCapacityException} (server fault)
 *  <p>Amazon Web Services doesn't currently have enough available capacity to fulfill your request. Try your
 *          request later. </p>
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
 * @throws {@link LimitExceededException} (client fault)
 *  <p>Unable to perform the operation because doing so would violate a limit setting. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Unable to process the request due to throttling limitations.</p>
 *
 * @throws {@link NetworkFirewallServiceException}
 * <p>Base exception class for all service exceptions from NetworkFirewall service.</p>
 *
 */
export class CreateFirewallPolicyCommand extends $Command<
  CreateFirewallPolicyCommandInput,
  CreateFirewallPolicyCommandOutput,
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
  constructor(readonly input: CreateFirewallPolicyCommandInput) {
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
  ): Handler<CreateFirewallPolicyCommandInput, CreateFirewallPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateFirewallPolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NetworkFirewallClient";
    const commandName = "CreateFirewallPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "NetworkFirewall_20201112",
        operation: "CreateFirewallPolicy",
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
  private serialize(input: CreateFirewallPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateFirewallPolicyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateFirewallPolicyCommandOutput> {
    return de_CreateFirewallPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
