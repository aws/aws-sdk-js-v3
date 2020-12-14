import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { RegisterDBProxyTargetsRequest, RegisterDBProxyTargetsResponse } from "../models/models_1";
import {
  deserializeAws_queryRegisterDBProxyTargetsCommand,
  serializeAws_queryRegisterDBProxyTargetsCommand,
} from "../protocols/Aws_query";
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

export type RegisterDBProxyTargetsCommandInput = RegisterDBProxyTargetsRequest;
export type RegisterDBProxyTargetsCommandOutput = RegisterDBProxyTargetsResponse & __MetadataBearer;

/**
 * <p>Associate one or more <code>DBProxyTarget</code> data structures with a <code>DBProxyTargetGroup</code>.</p>
 */
export class RegisterDBProxyTargetsCommand extends $Command<
  RegisterDBProxyTargetsCommandInput,
  RegisterDBProxyTargetsCommandOutput,
  RDSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RegisterDBProxyTargetsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RegisterDBProxyTargetsCommandInput, RegisterDBProxyTargetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "RegisterDBProxyTargetsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RegisterDBProxyTargetsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RegisterDBProxyTargetsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RegisterDBProxyTargetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryRegisterDBProxyTargetsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RegisterDBProxyTargetsCommandOutput> {
    return deserializeAws_queryRegisterDBProxyTargetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
