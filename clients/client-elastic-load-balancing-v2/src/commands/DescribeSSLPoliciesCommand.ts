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

import {
  ElasticLoadBalancingV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticLoadBalancingV2Client";
import {
  DescribeSSLPoliciesInput,
  DescribeSSLPoliciesInputFilterSensitiveLog,
  DescribeSSLPoliciesOutput,
  DescribeSSLPoliciesOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryDescribeSSLPoliciesCommand,
  serializeAws_queryDescribeSSLPoliciesCommand,
} from "../protocols/Aws_query";

/**
 * The input for {@link DescribeSSLPoliciesCommand}.
 */
export interface DescribeSSLPoliciesCommandInput extends DescribeSSLPoliciesInput {}
/**
 * The output of {@link DescribeSSLPoliciesCommand}.
 */
export interface DescribeSSLPoliciesCommandOutput extends DescribeSSLPoliciesOutput, __MetadataBearer {}

/**
 * <p>Describes the specified policies or all policies used for SSL negotiation.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html#describe-ssl-policies">Security policies</a> in the <i>Application Load Balancers Guide</i> or
 *         <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html#describe-ssl-policies">Security policies</a> in the <i>Network Load Balancers Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, DescribeSSLPoliciesCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, DescribeSSLPoliciesCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * const client = new ElasticLoadBalancingV2Client(config);
 * const command = new DescribeSSLPoliciesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeSSLPoliciesCommandInput} for command's `input` shape.
 * @see {@link DescribeSSLPoliciesCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingV2ClientResolvedConfig | config} for ElasticLoadBalancingV2Client's `config` shape.
 *
 * @throws {@link SSLPolicyNotFoundException} (client fault)
 *  <p>The specified SSL policy does not exist.</p>
 *
 *
 * @example To describe a policy used for SSL negotiation
 * ```javascript
 * // This example describes the specified policy used for SSL negotiation.
 * const input = {
 *   "Names": [
 *     "ELBSecurityPolicy-2015-05"
 *   ]
 * };
 * const command = new DescribeSSLPoliciesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "SslPolicies": [
 *     {
 *       "Ciphers": [
 *         {
 *           "Name": "ECDHE-ECDSA-AES128-GCM-SHA256",
 *           "Priority": 1
 *         },
 *         {
 *           "Name": "ECDHE-RSA-AES128-GCM-SHA256",
 *           "Priority": 2
 *         },
 *         {
 *           "Name": "ECDHE-ECDSA-AES128-SHA256",
 *           "Priority": 3
 *         },
 *         {
 *           "Name": "ECDHE-RSA-AES128-SHA256",
 *           "Priority": 4
 *         },
 *         {
 *           "Name": "ECDHE-ECDSA-AES128-SHA",
 *           "Priority": 5
 *         },
 *         {
 *           "Name": "ECDHE-RSA-AES128-SHA",
 *           "Priority": 6
 *         },
 *         {
 *           "Name": "DHE-RSA-AES128-SHA",
 *           "Priority": 7
 *         },
 *         {
 *           "Name": "ECDHE-ECDSA-AES256-GCM-SHA384",
 *           "Priority": 8
 *         },
 *         {
 *           "Name": "ECDHE-RSA-AES256-GCM-SHA384",
 *           "Priority": 9
 *         },
 *         {
 *           "Name": "ECDHE-ECDSA-AES256-SHA384",
 *           "Priority": 10
 *         },
 *         {
 *           "Name": "ECDHE-RSA-AES256-SHA384",
 *           "Priority": 11
 *         },
 *         {
 *           "Name": "ECDHE-RSA-AES256-SHA",
 *           "Priority": 12
 *         },
 *         {
 *           "Name": "ECDHE-ECDSA-AES256-SHA",
 *           "Priority": 13
 *         },
 *         {
 *           "Name": "AES128-GCM-SHA256",
 *           "Priority": 14
 *         },
 *         {
 *           "Name": "AES128-SHA256",
 *           "Priority": 15
 *         },
 *         {
 *           "Name": "AES128-SHA",
 *           "Priority": 16
 *         },
 *         {
 *           "Name": "AES256-GCM-SHA384",
 *           "Priority": 17
 *         },
 *         {
 *           "Name": "AES256-SHA256",
 *           "Priority": 18
 *         },
 *         {
 *           "Name": "AES256-SHA",
 *           "Priority": 19
 *         }
 *       ],
 *       "Name": "ELBSecurityPolicy-2015-05",
 *       "SslProtocols": [
 *         "TLSv1",
 *         "TLSv1.1",
 *         "TLSv1.2"
 *       ]
 *     }
 *   ]
 * }
 * *\/
 * // example id: elbv2-describe-ssl-policies-1
 * ```
 *
 */
export class DescribeSSLPoliciesCommand extends $Command<
  DescribeSSLPoliciesCommandInput,
  DescribeSSLPoliciesCommandOutput,
  ElasticLoadBalancingV2ClientResolvedConfig
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

  constructor(readonly input: DescribeSSLPoliciesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticLoadBalancingV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeSSLPoliciesCommandInput, DescribeSSLPoliciesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeSSLPoliciesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticLoadBalancingV2Client";
    const commandName = "DescribeSSLPoliciesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeSSLPoliciesInputFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeSSLPoliciesOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeSSLPoliciesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeSSLPoliciesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeSSLPoliciesCommandOutput> {
    return deserializeAws_queryDescribeSSLPoliciesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
