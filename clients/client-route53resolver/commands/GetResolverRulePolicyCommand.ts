import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";
import { GetResolverRulePolicyRequest, GetResolverRulePolicyResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetResolverRulePolicyCommand,
  serializeAws_json1_1GetResolverRulePolicyCommand,
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

export type GetResolverRulePolicyCommandInput = GetResolverRulePolicyRequest;
export type GetResolverRulePolicyCommandOutput = GetResolverRulePolicyResponse & __MetadataBearer;

/**
 * <p>Gets information about the Resolver rule policy for a specified rule. A Resolver rule policy includes the rule that you want to share
 * 			with another account, the account that you want to share the rule with, and the Resolver operations that you want to allow the account to use. </p>
 */
export class GetResolverRulePolicyCommand extends $Command<
  GetResolverRulePolicyCommandInput,
  GetResolverRulePolicyCommandOutput,
  Route53ResolverClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetResolverRulePolicyCommandInput) {
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
  ): Handler<GetResolverRulePolicyCommandInput, GetResolverRulePolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53ResolverClient";
    const commandName = "GetResolverRulePolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetResolverRulePolicyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetResolverRulePolicyResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetResolverRulePolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetResolverRulePolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetResolverRulePolicyCommandOutput> {
    return deserializeAws_json1_1GetResolverRulePolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
