import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";
import { PutResolverRulePolicyRequest, PutResolverRulePolicyResponse } from "../models/models_0";
import {
  deserializeAws_json1_1PutResolverRulePolicyCommand,
  serializeAws_json1_1PutResolverRulePolicyCommand,
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

export type PutResolverRulePolicyCommandInput = PutResolverRulePolicyRequest;
export type PutResolverRulePolicyCommandOutput = PutResolverRulePolicyResponse & __MetadataBearer;

/**
 * <p>Specifies an AWS account that you want to share rules with, the Resolver rules that you want to share, and the operations that you want
 * 			the account to be able to perform on those rules.</p>
 */
export class PutResolverRulePolicyCommand extends $Command<
  PutResolverRulePolicyCommandInput,
  PutResolverRulePolicyCommandOutput,
  Route53ResolverClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutResolverRulePolicyCommandInput) {
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
  ): Handler<PutResolverRulePolicyCommandInput, PutResolverRulePolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53ResolverClient";
    const commandName = "PutResolverRulePolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutResolverRulePolicyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutResolverRulePolicyResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutResolverRulePolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutResolverRulePolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutResolverRulePolicyCommandOutput> {
    return deserializeAws_json1_1PutResolverRulePolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
