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
  ResendContactReachabilityEmailRequest,
  ResendContactReachabilityEmailRequestFilterSensitiveLog,
  ResendContactReachabilityEmailResponse,
  ResendContactReachabilityEmailResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ResendContactReachabilityEmailCommand,
  serializeAws_json1_1ResendContactReachabilityEmailCommand,
} from "../protocols/Aws_json1_1";
import { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53DomainsClient";

export interface ResendContactReachabilityEmailCommandInput extends ResendContactReachabilityEmailRequest {}
export interface ResendContactReachabilityEmailCommandOutput
  extends ResendContactReachabilityEmailResponse,
    __MetadataBearer {}

/**
 * <p>For operations that require confirmation that the email address for the registrant
 * 			contact is valid, such as registering a new domain, this operation resends the
 * 			confirmation email to the current email address for the registrant contact.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53DomainsClient, ResendContactReachabilityEmailCommand } from "@aws-sdk/client-route-53-domains"; // ES Modules import
 * // const { Route53DomainsClient, ResendContactReachabilityEmailCommand } = require("@aws-sdk/client-route-53-domains"); // CommonJS import
 * const client = new Route53DomainsClient(config);
 * const command = new ResendContactReachabilityEmailCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ResendContactReachabilityEmailCommandInput} for command's `input` shape.
 * @see {@link ResendContactReachabilityEmailCommandOutput} for command's `response` shape.
 * @see {@link Route53DomainsClientResolvedConfig | config} for Route53DomainsClient's `config` shape.
 *
 */
export class ResendContactReachabilityEmailCommand extends $Command<
  ResendContactReachabilityEmailCommandInput,
  ResendContactReachabilityEmailCommandOutput,
  Route53DomainsClientResolvedConfig
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

  constructor(readonly input: ResendContactReachabilityEmailCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53DomainsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ResendContactReachabilityEmailCommandInput, ResendContactReachabilityEmailCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ResendContactReachabilityEmailCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53DomainsClient";
    const commandName = "ResendContactReachabilityEmailCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ResendContactReachabilityEmailRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ResendContactReachabilityEmailResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ResendContactReachabilityEmailCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1ResendContactReachabilityEmailCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ResendContactReachabilityEmailCommandOutput> {
    return deserializeAws_json1_1ResendContactReachabilityEmailCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
