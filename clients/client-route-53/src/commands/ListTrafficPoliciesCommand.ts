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
  ListTrafficPoliciesRequest,
  ListTrafficPoliciesRequestFilterSensitiveLog,
  ListTrafficPoliciesResponse,
  ListTrafficPoliciesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restXmlListTrafficPoliciesCommand,
  serializeAws_restXmlListTrafficPoliciesCommand,
} from "../protocols/Aws_restXml";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";

/**
 * The input for {@link ListTrafficPoliciesCommand}.
 */
export interface ListTrafficPoliciesCommandInput extends ListTrafficPoliciesRequest {}
/**
 * The output of {@link ListTrafficPoliciesCommand}.
 */
export interface ListTrafficPoliciesCommandOutput extends ListTrafficPoliciesResponse, __MetadataBearer {}

/**
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
 * const command = new ListTrafficPoliciesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTrafficPoliciesCommandInput} for command's `input` shape.
 * @see {@link ListTrafficPoliciesCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>The input is not valid.</p>
 *
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
      inputFilterSensitiveLog: ListTrafficPoliciesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListTrafficPoliciesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListTrafficPoliciesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlListTrafficPoliciesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListTrafficPoliciesCommandOutput> {
    return deserializeAws_restXmlListTrafficPoliciesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
