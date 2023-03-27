// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { UpdateFirewallPolicyRequest, UpdateFirewallPolicyResponse } from "../models/models_0";
import { NetworkFirewallClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkFirewallClient";
import {
  deserializeAws_json1_0UpdateFirewallPolicyCommand,
  serializeAws_json1_0UpdateFirewallPolicyCommand,
} from "../protocols/Aws_json1_0";

/**
 * @public
 *
 * The input for {@link UpdateFirewallPolicyCommand}.
 */
export interface UpdateFirewallPolicyCommandInput extends UpdateFirewallPolicyRequest {}
/**
 * @public
 *
 * The output of {@link UpdateFirewallPolicyCommand}.
 */
export interface UpdateFirewallPolicyCommandOutput extends UpdateFirewallPolicyResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates the properties of the specified firewall policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, UpdateFirewallPolicyCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, UpdateFirewallPolicyCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * const client = new NetworkFirewallClient(config);
 * const input = { // UpdateFirewallPolicyRequest
 *   UpdateToken: "STRING_VALUE", // required
 *   FirewallPolicyArn: "STRING_VALUE",
 *   FirewallPolicyName: "STRING_VALUE",
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
 *       StreamExceptionPolicy: "DROP" || "CONTINUE",
 *     },
 *   },
 *   Description: "STRING_VALUE",
 *   DryRun: true || false,
 *   EncryptionConfiguration: { // EncryptionConfiguration
 *     KeyId: "STRING_VALUE",
 *     Type: "CUSTOMER_KMS" || "AWS_OWNED_KMS_KEY", // required
 *   },
 * };
 * const command = new UpdateFirewallPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param UpdateFirewallPolicyCommandInput - {@link UpdateFirewallPolicyCommandInput}
 * @returns {@link UpdateFirewallPolicyCommandOutput}
 * @see {@link UpdateFirewallPolicyCommandInput} for command's `input` shape.
 * @see {@link UpdateFirewallPolicyCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidTokenException} (client fault)
 *  <p>The token you provided is stale or isn't valid for the operation. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Unable to locate a resource using the parameters that you provided.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Unable to process the request due to throttling limitations.</p>
 *
 *
 */
export class UpdateFirewallPolicyCommand extends $Command<
  UpdateFirewallPolicyCommandInput,
  UpdateFirewallPolicyCommandOutput,
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
  constructor(readonly input: UpdateFirewallPolicyCommandInput) {
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
  ): Handler<UpdateFirewallPolicyCommandInput, UpdateFirewallPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateFirewallPolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NetworkFirewallClient";
    const commandName = "UpdateFirewallPolicyCommand";
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
  private serialize(input: UpdateFirewallPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0UpdateFirewallPolicyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateFirewallPolicyCommandOutput> {
    return deserializeAws_json1_0UpdateFirewallPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
