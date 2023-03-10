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
  ListTrafficPolicyInstancesRequest,
  ListTrafficPolicyInstancesRequestFilterSensitiveLog,
  ListTrafficPolicyInstancesResponse,
  ListTrafficPolicyInstancesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restXmlListTrafficPolicyInstancesCommand,
  serializeAws_restXmlListTrafficPolicyInstancesCommand,
} from "../protocols/Aws_restXml";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";

/**
 * The input for {@link ListTrafficPolicyInstancesCommand}.
 */
export interface ListTrafficPolicyInstancesCommandInput extends ListTrafficPolicyInstancesRequest {}
/**
 * The output of {@link ListTrafficPolicyInstancesCommand}.
 */
export interface ListTrafficPolicyInstancesCommandOutput extends ListTrafficPolicyInstancesResponse, __MetadataBearer {}

/**
 * <p>Gets information about the traffic policy instances that you created by using the
 * 			current Amazon Web Services account.</p>
 *          <note>
 *             <p>After you submit an <code>UpdateTrafficPolicyInstance</code> request, there's a
 * 				brief delay while Amazon Route 53 creates the resource record sets that are
 * 				specified in the traffic policy definition. For more information, see the
 * 					<code>State</code> response element.</p>
 *          </note>
 *          <p>Route 53 returns a maximum of 100 items in each response. If you have a lot of traffic
 * 			policy instances, you can use the <code>MaxItems</code> parameter to list them in groups
 * 			of up to 100.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, ListTrafficPolicyInstancesCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, ListTrafficPolicyInstancesCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new ListTrafficPolicyInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTrafficPolicyInstancesCommandInput} for command's `input` shape.
 * @see {@link ListTrafficPolicyInstancesCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>The input is not valid.</p>
 *
 * @throws {@link NoSuchTrafficPolicyInstance} (client fault)
 *  <p>No traffic policy instance exists with the specified ID.</p>
 *
 *
 */
export class ListTrafficPolicyInstancesCommand extends $Command<
  ListTrafficPolicyInstancesCommandInput,
  ListTrafficPolicyInstancesCommandOutput,
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

  constructor(readonly input: ListTrafficPolicyInstancesCommandInput) {
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
  ): Handler<ListTrafficPolicyInstancesCommandInput, ListTrafficPolicyInstancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListTrafficPolicyInstancesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "ListTrafficPolicyInstancesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListTrafficPolicyInstancesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListTrafficPolicyInstancesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListTrafficPolicyInstancesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlListTrafficPolicyInstancesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListTrafficPolicyInstancesCommandOutput> {
    return deserializeAws_restXmlListTrafficPolicyInstancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
