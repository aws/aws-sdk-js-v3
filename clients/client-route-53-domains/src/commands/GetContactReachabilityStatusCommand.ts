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
  GetContactReachabilityStatusRequest,
  GetContactReachabilityStatusRequestFilterSensitiveLog,
  GetContactReachabilityStatusResponse,
  GetContactReachabilityStatusResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetContactReachabilityStatusCommand,
  serializeAws_json1_1GetContactReachabilityStatusCommand,
} from "../protocols/Aws_json1_1";
import { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53DomainsClient";

export interface GetContactReachabilityStatusCommandInput extends GetContactReachabilityStatusRequest {}
export interface GetContactReachabilityStatusCommandOutput
  extends GetContactReachabilityStatusResponse,
    __MetadataBearer {}

/**
 * <p>For operations that require confirmation that the email address for the registrant
 * 			contact is valid, such as registering a new domain, this operation returns information
 * 			about whether the registrant contact has responded.</p>
 *          <p>If you want us to resend the email, use the
 * 				<code>ResendContactReachabilityEmail</code> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53DomainsClient, GetContactReachabilityStatusCommand } from "@aws-sdk/client-route-53-domains"; // ES Modules import
 * // const { Route53DomainsClient, GetContactReachabilityStatusCommand } = require("@aws-sdk/client-route-53-domains"); // CommonJS import
 * const client = new Route53DomainsClient(config);
 * const command = new GetContactReachabilityStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetContactReachabilityStatusCommandInput} for command's `input` shape.
 * @see {@link GetContactReachabilityStatusCommandOutput} for command's `response` shape.
 * @see {@link Route53DomainsClientResolvedConfig | config} for Route53DomainsClient's `config` shape.
 *
 */
export class GetContactReachabilityStatusCommand extends $Command<
  GetContactReachabilityStatusCommandInput,
  GetContactReachabilityStatusCommandOutput,
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

  constructor(readonly input: GetContactReachabilityStatusCommandInput) {
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
  ): Handler<GetContactReachabilityStatusCommandInput, GetContactReachabilityStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetContactReachabilityStatusCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53DomainsClient";
    const commandName = "GetContactReachabilityStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetContactReachabilityStatusRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetContactReachabilityStatusResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetContactReachabilityStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetContactReachabilityStatusCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetContactReachabilityStatusCommandOutput> {
    return deserializeAws_json1_1GetContactReachabilityStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
