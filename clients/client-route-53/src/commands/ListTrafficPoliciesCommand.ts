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

import { ListTrafficPoliciesRequest, ListTrafficPoliciesResponse } from "../models/models_0";
import { de_ListTrafficPoliciesCommand, se_ListTrafficPoliciesCommand } from "../protocols/Aws_restXml";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListTrafficPoliciesCommand}.
 */
export interface ListTrafficPoliciesCommandInput extends ListTrafficPoliciesRequest {}
/**
 * @public
 *
 * The output of {@link ListTrafficPoliciesCommand}.
 */
export interface ListTrafficPoliciesCommandOutput extends ListTrafficPoliciesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets information about the latest version for every traffic policy that is associated
 * 			with the current Amazon Web Services account. Policies are listed in the order that they
 * 			were created in. </p>
 *          <p>For information about how of deleting a traffic policy affects the response from
 * 				<code>ListTrafficPolicies</code>, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_DeleteTrafficPolicy.html">DeleteTrafficPolicy</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, ListTrafficPoliciesCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, ListTrafficPoliciesCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const input = { // ListTrafficPoliciesRequest
 *   TrafficPolicyIdMarker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListTrafficPoliciesCommand(input);
 * const response = await client.send(command);
 * // { // ListTrafficPoliciesResponse
 * //   TrafficPolicySummaries: [ // TrafficPolicySummaries // required
 * //     { // TrafficPolicySummary
 * //       Id: "STRING_VALUE", // required
 * //       Name: "STRING_VALUE", // required
 * //       Type: "SOA" || "A" || "TXT" || "NS" || "CNAME" || "MX" || "NAPTR" || "PTR" || "SRV" || "SPF" || "AAAA" || "CAA" || "DS", // required
 * //       LatestVersion: Number("int"), // required
 * //       TrafficPolicyCount: Number("int"), // required
 * //     },
 * //   ],
 * //   IsTruncated: true || false, // required
 * //   TrafficPolicyIdMarker: "STRING_VALUE", // required
 * //   MaxItems: Number("int"), // required
 * // };
 *
 * ```
 *
 * @param ListTrafficPoliciesCommandInput - {@link ListTrafficPoliciesCommandInput}
 * @returns {@link ListTrafficPoliciesCommandOutput}
 * @see {@link ListTrafficPoliciesCommandInput} for command's `input` shape.
 * @see {@link ListTrafficPoliciesCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>The input is not valid.</p>
 *
 * @throws {@link Route53ServiceException}
 * <p>Base exception class for all service exceptions from Route53 service.</p>
 *
 */
export class ListTrafficPoliciesCommand extends $Command<
  ListTrafficPoliciesCommandInput,
  ListTrafficPoliciesCommandOutput,
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
  constructor(readonly input: ListTrafficPoliciesCommandInput) {
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
  ): Handler<ListTrafficPoliciesCommandInput, ListTrafficPoliciesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListTrafficPoliciesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "ListTrafficPoliciesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSDnsV20130401",
        operation: "ListTrafficPolicies",
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
  private serialize(input: ListTrafficPoliciesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListTrafficPoliciesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListTrafficPoliciesCommandOutput> {
    return de_ListTrafficPoliciesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
