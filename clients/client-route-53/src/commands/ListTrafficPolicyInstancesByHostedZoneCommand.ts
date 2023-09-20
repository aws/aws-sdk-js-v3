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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import {
  ListTrafficPolicyInstancesByHostedZoneRequest,
  ListTrafficPolicyInstancesByHostedZoneResponse,
} from "../models/models_0";
import {
  de_ListTrafficPolicyInstancesByHostedZoneCommand,
  se_ListTrafficPolicyInstancesByHostedZoneCommand,
} from "../protocols/Aws_restXml";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListTrafficPolicyInstancesByHostedZoneCommand}.
 */
export interface ListTrafficPolicyInstancesByHostedZoneCommandInput
  extends ListTrafficPolicyInstancesByHostedZoneRequest {}
/**
 * @public
 *
 * The output of {@link ListTrafficPolicyInstancesByHostedZoneCommand}.
 */
export interface ListTrafficPolicyInstancesByHostedZoneCommandOutput
  extends ListTrafficPolicyInstancesByHostedZoneResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Gets information about the traffic policy instances that you created in a specified
 * 			hosted zone.</p>
 *          <note>
 *             <p>After you submit a <code>CreateTrafficPolicyInstance</code> or an
 * 					<code>UpdateTrafficPolicyInstance</code> request, there's a brief delay while
 * 				Amazon Route 53 creates the resource record sets that are specified in the traffic
 * 				policy definition. For more information, see the <code>State</code> response
 * 				element.</p>
 *          </note>
 *          <p>Route 53 returns a maximum of 100 items in each response. If you have a lot of traffic
 * 			policy instances, you can use the <code>MaxItems</code> parameter to list them in groups
 * 			of up to 100.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, ListTrafficPolicyInstancesByHostedZoneCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, ListTrafficPolicyInstancesByHostedZoneCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const input = { // ListTrafficPolicyInstancesByHostedZoneRequest
 *   HostedZoneId: "STRING_VALUE", // required
 *   TrafficPolicyInstanceNameMarker: "STRING_VALUE",
 *   TrafficPolicyInstanceTypeMarker: "SOA" || "A" || "TXT" || "NS" || "CNAME" || "MX" || "NAPTR" || "PTR" || "SRV" || "SPF" || "AAAA" || "CAA" || "DS",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListTrafficPolicyInstancesByHostedZoneCommand(input);
 * const response = await client.send(command);
 * // { // ListTrafficPolicyInstancesByHostedZoneResponse
 * //   TrafficPolicyInstances: [ // TrafficPolicyInstances // required
 * //     { // TrafficPolicyInstance
 * //       Id: "STRING_VALUE", // required
 * //       HostedZoneId: "STRING_VALUE", // required
 * //       Name: "STRING_VALUE", // required
 * //       TTL: Number("long"), // required
 * //       State: "STRING_VALUE", // required
 * //       Message: "STRING_VALUE", // required
 * //       TrafficPolicyId: "STRING_VALUE", // required
 * //       TrafficPolicyVersion: Number("int"), // required
 * //       TrafficPolicyType: "SOA" || "A" || "TXT" || "NS" || "CNAME" || "MX" || "NAPTR" || "PTR" || "SRV" || "SPF" || "AAAA" || "CAA" || "DS", // required
 * //     },
 * //   ],
 * //   TrafficPolicyInstanceNameMarker: "STRING_VALUE",
 * //   TrafficPolicyInstanceTypeMarker: "SOA" || "A" || "TXT" || "NS" || "CNAME" || "MX" || "NAPTR" || "PTR" || "SRV" || "SPF" || "AAAA" || "CAA" || "DS",
 * //   IsTruncated: true || false, // required
 * //   MaxItems: Number("int"), // required
 * // };
 *
 * ```
 *
 * @param ListTrafficPolicyInstancesByHostedZoneCommandInput - {@link ListTrafficPolicyInstancesByHostedZoneCommandInput}
 * @returns {@link ListTrafficPolicyInstancesByHostedZoneCommandOutput}
 * @see {@link ListTrafficPolicyInstancesByHostedZoneCommandInput} for command's `input` shape.
 * @see {@link ListTrafficPolicyInstancesByHostedZoneCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>The input is not valid.</p>
 *
 * @throws {@link NoSuchHostedZone} (client fault)
 *  <p>No hosted zone exists with the ID that you specified.</p>
 *
 * @throws {@link NoSuchTrafficPolicyInstance} (client fault)
 *  <p>No traffic policy instance exists with the specified ID.</p>
 *
 * @throws {@link Route53ServiceException}
 * <p>Base exception class for all service exceptions from Route53 service.</p>
 *
 */
export class ListTrafficPolicyInstancesByHostedZoneCommand extends $Command<
  ListTrafficPolicyInstancesByHostedZoneCommandInput,
  ListTrafficPolicyInstancesByHostedZoneCommandOutput,
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
  constructor(readonly input: ListTrafficPolicyInstancesByHostedZoneCommandInput) {
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
  ): Handler<ListTrafficPolicyInstancesByHostedZoneCommandInput, ListTrafficPolicyInstancesByHostedZoneCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListTrafficPolicyInstancesByHostedZoneCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getIdNormalizerPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "ListTrafficPolicyInstancesByHostedZoneCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSDnsV20130401",
        operation: "ListTrafficPolicyInstancesByHostedZone",
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
  private serialize(
    input: ListTrafficPolicyInstancesByHostedZoneCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ListTrafficPolicyInstancesByHostedZoneCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListTrafficPolicyInstancesByHostedZoneCommandOutput> {
    return de_ListTrafficPolicyInstancesByHostedZoneCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
