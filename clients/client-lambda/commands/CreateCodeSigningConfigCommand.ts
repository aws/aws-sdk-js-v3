import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import { CreateCodeSigningConfigRequest, CreateCodeSigningConfigResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateCodeSigningConfigCommand,
  serializeAws_restJson1CreateCodeSigningConfigCommand,
} from "../protocols/Aws_restJson1";
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

export type CreateCodeSigningConfigCommandInput = CreateCodeSigningConfigRequest;
export type CreateCodeSigningConfigCommandOutput = CreateCodeSigningConfigResponse & __MetadataBearer;

/**
 * <p>Creates a code signing configuration. A <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-trustedcode.html">code signing configuration</a> defines a list of
 *       allowed signing profiles and defines the code-signing validation policy (action to be taken if deployment
 *       validation checks fail). </p>
 */
export class CreateCodeSigningConfigCommand extends $Command<
  CreateCodeSigningConfigCommandInput,
  CreateCodeSigningConfigCommandOutput,
  LambdaClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateCodeSigningConfigCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LambdaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateCodeSigningConfigCommandInput, CreateCodeSigningConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LambdaClient";
    const commandName = "CreateCodeSigningConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateCodeSigningConfigRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateCodeSigningConfigResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateCodeSigningConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateCodeSigningConfigCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateCodeSigningConfigCommandOutput> {
    return deserializeAws_restJson1CreateCodeSigningConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
