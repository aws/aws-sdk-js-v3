// smithy-typescript generated code
import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
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

import { GetTrafficPolicyInstanceRequest, GetTrafficPolicyInstanceResponse } from "../models/models_0";
import { de_GetTrafficPolicyInstanceCommand, se_GetTrafficPolicyInstanceCommand } from "../protocols/Aws_restXml";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetTrafficPolicyInstanceCommand}.
 */
export interface GetTrafficPolicyInstanceCommandInput extends GetTrafficPolicyInstanceRequest {}
/**
 * @public
 *
 * The output of {@link GetTrafficPolicyInstanceCommand}.
 */
export interface GetTrafficPolicyInstanceCommandOutput extends GetTrafficPolicyInstanceResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets information about a specified traffic policy instance.</p>
 *          <note>
 *             <p>After you submit a <code>CreateTrafficPolicyInstance</code> or an
 * 					<code>UpdateTrafficPolicyInstance</code> request, there's a brief delay while
 * 				Amazon Route 53 creates the resource record sets that are specified in the traffic
 * 				policy definition. For more information, see the <code>State</code> response
 * 				element.</p>
 *          </note>
 *          <note>
 *             <p>In the Route 53 console, traffic policy instances are known as policy
 * 				records.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, GetTrafficPolicyInstanceCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, GetTrafficPolicyInstanceCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const input = { // GetTrafficPolicyInstanceRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new GetTrafficPolicyInstanceCommand(input);
 * const response = await client.send(command);
 * // { // GetTrafficPolicyInstanceResponse
 * //   TrafficPolicyInstance: { // TrafficPolicyInstance
 * //     Id: "STRING_VALUE", // required
 * //     HostedZoneId: "STRING_VALUE", // required
 * //     Name: "STRING_VALUE", // required
 * //     TTL: Number("long"), // required
 * //     State: "STRING_VALUE", // required
 * //     Message: "STRING_VALUE", // required
 * //     TrafficPolicyId: "STRING_VALUE", // required
 * //     TrafficPolicyVersion: Number("int"), // required
 * //     TrafficPolicyType: "SOA" || "A" || "TXT" || "NS" || "CNAME" || "MX" || "NAPTR" || "PTR" || "SRV" || "SPF" || "AAAA" || "CAA" || "DS", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetTrafficPolicyInstanceCommandInput - {@link GetTrafficPolicyInstanceCommandInput}
 * @returns {@link GetTrafficPolicyInstanceCommandOutput}
 * @see {@link GetTrafficPolicyInstanceCommandInput} for command's `input` shape.
 * @see {@link GetTrafficPolicyInstanceCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>The input is not valid.</p>
 *
 * @throws {@link NoSuchTrafficPolicyInstance} (client fault)
 *  <p>No traffic policy instance exists with the specified ID.</p>
 *
 * @throws {@link Route53ServiceException}
 * <p>Base exception class for all service exceptions from Route53 service.</p>
 *
 */
export class GetTrafficPolicyInstanceCommand extends $Command<
  GetTrafficPolicyInstanceCommandInput,
  GetTrafficPolicyInstanceCommandOutput,
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
  constructor(readonly input: GetTrafficPolicyInstanceCommandInput) {
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
  ): Handler<GetTrafficPolicyInstanceCommandInput, GetTrafficPolicyInstanceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetTrafficPolicyInstanceCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getIdNormalizerPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "GetTrafficPolicyInstanceCommand";
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
  private serialize(input: GetTrafficPolicyInstanceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetTrafficPolicyInstanceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetTrafficPolicyInstanceCommandOutput> {
    return de_GetTrafficPolicyInstanceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
