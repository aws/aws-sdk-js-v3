import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";
import { GetResolverQueryLogConfigPolicyRequest, GetResolverQueryLogConfigPolicyResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetResolverQueryLogConfigPolicyCommand,
  serializeAws_json1_1GetResolverQueryLogConfigPolicyCommand,
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

export type GetResolverQueryLogConfigPolicyCommandInput = GetResolverQueryLogConfigPolicyRequest;
export type GetResolverQueryLogConfigPolicyCommandOutput = GetResolverQueryLogConfigPolicyResponse & __MetadataBearer;

/**
 * <p>Gets information about a query logging policy. A query logging policy specifies the Resolver query logging
 * 			operations and resources that you want to allow another AWS account to be able to use.</p>
 */
export class GetResolverQueryLogConfigPolicyCommand extends $Command<
  GetResolverQueryLogConfigPolicyCommandInput,
  GetResolverQueryLogConfigPolicyCommandOutput,
  Route53ResolverClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetResolverQueryLogConfigPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53ResolverClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetResolverQueryLogConfigPolicyCommandInput, GetResolverQueryLogConfigPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53ResolverClient";
    const commandName = "GetResolverQueryLogConfigPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetResolverQueryLogConfigPolicyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetResolverQueryLogConfigPolicyResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetResolverQueryLogConfigPolicyCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1GetResolverQueryLogConfigPolicyCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetResolverQueryLogConfigPolicyCommandOutput> {
    return deserializeAws_json1_1GetResolverQueryLogConfigPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
