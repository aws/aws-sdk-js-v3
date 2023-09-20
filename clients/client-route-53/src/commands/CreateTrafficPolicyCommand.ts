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

import { CreateTrafficPolicyRequest, CreateTrafficPolicyResponse } from "../models/models_0";
import { de_CreateTrafficPolicyCommand, se_CreateTrafficPolicyCommand } from "../protocols/Aws_restXml";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateTrafficPolicyCommand}.
 */
export interface CreateTrafficPolicyCommandInput extends CreateTrafficPolicyRequest {}
/**
 * @public
 *
 * The output of {@link CreateTrafficPolicyCommand}.
 */
export interface CreateTrafficPolicyCommandOutput extends CreateTrafficPolicyResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a traffic policy, which you use to create multiple DNS resource record sets
 * 			for one domain name (such as example.com) or one subdomain name (such as
 * 			www.example.com).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, CreateTrafficPolicyCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, CreateTrafficPolicyCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const input = { // CreateTrafficPolicyRequest
 *   Name: "STRING_VALUE", // required
 *   Document: "STRING_VALUE", // required
 *   Comment: "STRING_VALUE",
 * };
 * const command = new CreateTrafficPolicyCommand(input);
 * const response = await client.send(command);
 * // { // CreateTrafficPolicyResponse
 * //   TrafficPolicy: { // TrafficPolicy
 * //     Id: "STRING_VALUE", // required
 * //     Version: Number("int"), // required
 * //     Name: "STRING_VALUE", // required
 * //     Type: "SOA" || "A" || "TXT" || "NS" || "CNAME" || "MX" || "NAPTR" || "PTR" || "SRV" || "SPF" || "AAAA" || "CAA" || "DS", // required
 * //     Document: "STRING_VALUE", // required
 * //     Comment: "STRING_VALUE",
 * //   },
 * //   Location: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateTrafficPolicyCommandInput - {@link CreateTrafficPolicyCommandInput}
 * @returns {@link CreateTrafficPolicyCommandOutput}
 * @see {@link CreateTrafficPolicyCommandInput} for command's `input` shape.
 * @see {@link CreateTrafficPolicyCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>The input is not valid.</p>
 *
 * @throws {@link InvalidTrafficPolicyDocument} (client fault)
 *  <p>The format of the traffic policy document that you specified in the
 * 				<code>Document</code> element is not valid.</p>
 *
 * @throws {@link TooManyTrafficPolicies} (client fault)
 *  <p>This traffic policy can't be created because the current account has reached the limit
 * 			on the number of traffic policies.</p>
 *          <p>For information about default limits, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DNSLimitations.html">Limits</a> in the
 * 				<i>Amazon Route 53 Developer Guide</i>.</p>
 *          <p>To get the current limit for an account, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetAccountLimit.html">GetAccountLimit</a>. </p>
 *          <p>To request a higher limit, <a href="http://aws.amazon.com/route53-request">create a
 * 				case</a> with the Amazon Web Services Support Center.</p>
 *
 * @throws {@link TrafficPolicyAlreadyExists} (client fault)
 *  <p>A traffic policy that has the same value for <code>Name</code> already exists.</p>
 *
 * @throws {@link Route53ServiceException}
 * <p>Base exception class for all service exceptions from Route53 service.</p>
 *
 */
export class CreateTrafficPolicyCommand extends $Command<
  CreateTrafficPolicyCommandInput,
  CreateTrafficPolicyCommandOutput,
  Route53ClientResolvedConfig
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
  constructor(readonly input: CreateTrafficPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateTrafficPolicyCommandInput, CreateTrafficPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateTrafficPolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "CreateTrafficPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSDnsV20130401",
        operation: "CreateTrafficPolicy",
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
  private serialize(input: CreateTrafficPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateTrafficPolicyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateTrafficPolicyCommandOutput> {
    return de_CreateTrafficPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
