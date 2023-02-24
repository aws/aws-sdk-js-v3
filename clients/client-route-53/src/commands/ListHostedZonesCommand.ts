// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
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
  ListHostedZonesRequest,
  ListHostedZonesRequestFilterSensitiveLog,
  ListHostedZonesResponse,
  ListHostedZonesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restXmlListHostedZonesCommand,
  serializeAws_restXmlListHostedZonesCommand,
} from "../protocols/Aws_restXml";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";

export interface ListHostedZonesCommandInput extends ListHostedZonesRequest {}
export interface ListHostedZonesCommandOutput extends ListHostedZonesResponse, __MetadataBearer {}

/**
 * <p>Retrieves a list of the public and private hosted zones that are associated with the
 * 			current Amazon Web Services account. The response includes a <code>HostedZones</code>
 * 			child element for each hosted zone.</p>
 *          <p>Amazon Route 53 returns a maximum of 100 items in each response. If you have a lot of
 * 			hosted zones, you can use the <code>maxitems</code> parameter to list them in groups of
 * 			up to 100.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, ListHostedZonesCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, ListHostedZonesCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new ListHostedZonesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListHostedZonesCommandInput} for command's `input` shape.
 * @see {@link ListHostedZonesCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 */
export class ListHostedZonesCommand extends $Command<
  ListHostedZonesCommandInput,
  ListHostedZonesCommandOutput,
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

  constructor(readonly input: ListHostedZonesCommandInput) {
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
  ): Handler<ListHostedZonesCommandInput, ListHostedZonesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListHostedZonesCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getIdNormalizerPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "ListHostedZonesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListHostedZonesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListHostedZonesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListHostedZonesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlListHostedZonesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListHostedZonesCommandOutput> {
    return deserializeAws_restXmlListHostedZonesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
