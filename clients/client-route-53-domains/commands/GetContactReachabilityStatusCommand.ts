import { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53DomainsClient";
import { GetContactReachabilityStatusRequest, GetContactReachabilityStatusResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetContactReachabilityStatusCommand,
  serializeAws_json1_1GetContactReachabilityStatusCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type GetContactReachabilityStatusCommandInput = GetContactReachabilityStatusRequest;
export type GetContactReachabilityStatusCommandOutput = GetContactReachabilityStatusResponse & __MetadataBearer;

/**
 * <p>For operations that require confirmation that the email address for the registrant contact is valid,
 * 			such as registering a new domain, this operation returns information about whether the registrant contact has responded.</p>
 * 		       <p>If you want us to resend the email, use the <code>ResendContactReachabilityEmail</code> operation.</p>
 */
export class GetContactReachabilityStatusCommand extends $Command<
  GetContactReachabilityStatusCommandInput,
  GetContactReachabilityStatusCommandOutput,
  Route53DomainsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53DomainsClient";
    const commandName = "GetContactReachabilityStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetContactReachabilityStatusRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetContactReachabilityStatusResponse.filterSensitiveLog,
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
