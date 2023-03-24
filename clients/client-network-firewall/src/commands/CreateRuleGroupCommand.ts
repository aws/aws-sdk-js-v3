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

import { CreateRuleGroupRequest, CreateRuleGroupResponse } from "../models/models_0";
import { NetworkFirewallClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkFirewallClient";
import {
  deserializeAws_json1_0CreateRuleGroupCommand,
  serializeAws_json1_0CreateRuleGroupCommand,
} from "../protocols/Aws_json1_0";

/**
 * @public
 *
 * The input for {@link CreateRuleGroupCommand}.
 */
export interface CreateRuleGroupCommandInput extends CreateRuleGroupRequest {}
/**
 * @public
 *
 * The output of {@link CreateRuleGroupCommand}.
 */
export interface CreateRuleGroupCommandOutput extends CreateRuleGroupResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates the specified stateless or stateful rule group, which includes the rules for
 *          network traffic inspection, a capacity setting, and tags. </p>
 *          <p>You provide your rule group specification in your request using either
 *             <code>RuleGroup</code> or <code>Rules</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, CreateRuleGroupCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, CreateRuleGroupCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * const client = new NetworkFirewallClient(config);
 * const input = {
 *   RuleGroupName: "STRING_VALUE", // required
 *   RuleGroup: {
 *     RuleVariables: {
 *       IPSets: {
 *         "<keys>": {
 *           Definition: [ // required
 *             "STRING_VALUE",
 *           ],
 *         },
 *       },
 *       PortSets: {
 *         "<keys>": {
 *           Definition: [
 *             "STRING_VALUE",
 *           ],
 *         },
 *       },
 *     },
 *     ReferenceSets: {
 *       IPSetReferences: {
 *         "<keys>": {
 *           ReferenceArn: "STRING_VALUE",
 *         },
 *       },
 *     },
 *     RulesSource: {
 *       RulesString: "STRING_VALUE",
 *       RulesSourceList: {
 *         Targets: [ // required
 *           "STRING_VALUE",
 *         ],
 *         TargetTypes: [ // required
 *           "TLS_SNI" || "HTTP_HOST",
 *         ],
 *         GeneratedRulesType: "ALLOWLIST" || "DENYLIST", // required
 *       },
 *       StatefulRules: [
 *         {
 *           Action: "PASS" || "DROP" || "ALERT" || "REJECT", // required
 *           Header: {
 *             Protocol: "IP" || "TCP" || "UDP" || "ICMP" || "HTTP" || "FTP" || "TLS" || "SMB" || "DNS" || "DCERPC" || "SSH" || "SMTP" || "IMAP" || "MSN" || "KRB5" || "IKEV2" || "TFTP" || "NTP" || "DHCP", // required
 *             Source: "STRING_VALUE", // required
 *             SourcePort: "STRING_VALUE", // required
 *             Direction: "FORWARD" || "ANY", // required
 *             Destination: "STRING_VALUE", // required
 *             DestinationPort: "STRING_VALUE", // required
 *           },
 *           RuleOptions: [ // required
 *             {
 *               Keyword: "STRING_VALUE", // required
 *               Settings: [
 *                 "STRING_VALUE",
 *               ],
 *             },
 *           ],
 *         },
 *       ],
 *       StatelessRulesAndCustomActions: {
 *         StatelessRules: [ // required
 *           {
 *             RuleDefinition: {
 *               MatchAttributes: {
 *                 Sources: [
 *                   {
 *                     AddressDefinition: "STRING_VALUE", // required
 *                   },
 *                 ],
 *                 Destinations: [
 *                   {
 *                     AddressDefinition: "STRING_VALUE", // required
 *                   },
 *                 ],
 *                 SourcePorts: [
 *                   {
 *                     FromPort: Number("int"), // required
 *                     ToPort: Number("int"), // required
 *                   },
 *                 ],
 *                 DestinationPorts: [
 *                   {
 *                     FromPort: Number("int"), // required
 *                     ToPort: Number("int"), // required
 *                   },
 *                 ],
 *                 Protocols: [
 *                   Number("int"),
 *                 ],
 *                 TCPFlags: [
 *                   {
 *                     Flags: [ // required
 *                       "FIN" || "SYN" || "RST" || "PSH" || "ACK" || "URG" || "ECE" || "CWR",
 *                     ],
 *                     Masks: [
 *                       "FIN" || "SYN" || "RST" || "PSH" || "ACK" || "URG" || "ECE" || "CWR",
 *                     ],
 *                   },
 *                 ],
 *               },
 *               Actions: [ // required
 *                 "STRING_VALUE",
 *               ],
 *             },
 *             Priority: Number("int"), // required
 *           },
 *         ],
 *         CustomActions: [
 *           {
 *             ActionName: "STRING_VALUE", // required
 *             ActionDefinition: {
 *               PublishMetricAction: {
 *                 Dimensions: [ // required
 *                   {
 *                     Value: "STRING_VALUE", // required
 *                   },
 *                 ],
 *               },
 *             },
 *           },
 *         ],
 *       },
 *     },
 *     StatefulRuleOptions: {
 *       RuleOrder: "DEFAULT_ACTION_ORDER" || "STRICT_ORDER",
 *     },
 *   },
 *   Rules: "STRING_VALUE",
 *   Type: "STATELESS" || "STATEFUL", // required
 *   Description: "STRING_VALUE",
 *   Capacity: Number("int"), // required
 *   Tags: [
 *     {
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   DryRun: true || false,
 *   EncryptionConfiguration: {
 *     KeyId: "STRING_VALUE",
 *     Type: "CUSTOMER_KMS" || "AWS_OWNED_KMS_KEY", // required
 *   },
 *   SourceMetadata: {
 *     SourceArn: "STRING_VALUE",
 *     SourceUpdateToken: "STRING_VALUE",
 *   },
 * };
 * const command = new CreateRuleGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param CreateRuleGroupCommandInput - {@link CreateRuleGroupCommandInput}
 * @returns {@link CreateRuleGroupCommandOutput}
 * @see {@link CreateRuleGroupCommandInput} for command's `input` shape.
 * @see {@link CreateRuleGroupCommandOutput} for command's `response` shape.
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
 *
 */
export class CreateRuleGroupCommand extends $Command<
  CreateRuleGroupCommandInput,
  CreateRuleGroupCommandOutput,
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
  constructor(readonly input: CreateRuleGroupCommandInput) {
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
  ): Handler<CreateRuleGroupCommandInput, CreateRuleGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateRuleGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NetworkFirewallClient";
    const commandName = "CreateRuleGroupCommand";
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
  private serialize(input: CreateRuleGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0CreateRuleGroupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateRuleGroupCommandOutput> {
    return deserializeAws_json1_0CreateRuleGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
