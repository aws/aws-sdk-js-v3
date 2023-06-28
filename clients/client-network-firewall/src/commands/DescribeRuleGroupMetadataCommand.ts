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

import { DescribeRuleGroupMetadataRequest, DescribeRuleGroupMetadataResponse } from "../models/models_0";
import { NetworkFirewallClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkFirewallClient";
import { de_DescribeRuleGroupMetadataCommand, se_DescribeRuleGroupMetadataCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeRuleGroupMetadataCommand}.
 */
export interface DescribeRuleGroupMetadataCommandInput extends DescribeRuleGroupMetadataRequest {}
/**
 * @public
 *
 * The output of {@link DescribeRuleGroupMetadataCommand}.
 */
export interface DescribeRuleGroupMetadataCommandOutput extends DescribeRuleGroupMetadataResponse, __MetadataBearer {}

/**
 * @public
 * <p>High-level information about a rule group, returned by operations like create and describe.
 *          You can use the information provided in the metadata to retrieve and manage a rule group.
 *          You can retrieve all objects for a rule group by calling <a>DescribeRuleGroup</a>.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, DescribeRuleGroupMetadataCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, DescribeRuleGroupMetadataCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * const client = new NetworkFirewallClient(config);
 * const input = { // DescribeRuleGroupMetadataRequest
 *   RuleGroupName: "STRING_VALUE",
 *   RuleGroupArn: "STRING_VALUE",
 *   Type: "STATELESS" || "STATEFUL",
 * };
 * const command = new DescribeRuleGroupMetadataCommand(input);
 * const response = await client.send(command);
 * // { // DescribeRuleGroupMetadataResponse
 * //   RuleGroupArn: "STRING_VALUE", // required
 * //   RuleGroupName: "STRING_VALUE", // required
 * //   Description: "STRING_VALUE",
 * //   Type: "STATELESS" || "STATEFUL",
 * //   Capacity: Number("int"),
 * //   StatefulRuleOptions: { // StatefulRuleOptions
 * //     RuleOrder: "DEFAULT_ACTION_ORDER" || "STRICT_ORDER",
 * //   },
 * //   LastModifiedTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param DescribeRuleGroupMetadataCommandInput - {@link DescribeRuleGroupMetadataCommandInput}
 * @returns {@link DescribeRuleGroupMetadataCommandOutput}
 * @see {@link DescribeRuleGroupMetadataCommandInput} for command's `input` shape.
 * @see {@link DescribeRuleGroupMetadataCommandOutput} for command's `response` shape.
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
export class DescribeRuleGroupMetadataCommand extends $Command<
  DescribeRuleGroupMetadataCommandInput,
  DescribeRuleGroupMetadataCommandOutput,
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
  constructor(readonly input: DescribeRuleGroupMetadataCommandInput) {
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
  ): Handler<DescribeRuleGroupMetadataCommandInput, DescribeRuleGroupMetadataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeRuleGroupMetadataCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NetworkFirewallClient";
    const commandName = "DescribeRuleGroupMetadataCommand";
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
  private serialize(input: DescribeRuleGroupMetadataCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeRuleGroupMetadataCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeRuleGroupMetadataCommandOutput> {
    return de_DescribeRuleGroupMetadataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
