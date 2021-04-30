import { NimbleClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NimbleClient";
import { GetLaunchProfileInitializationRequest, GetLaunchProfileInitializationResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetLaunchProfileInitializationCommand,
  serializeAws_restJson1GetLaunchProfileInitializationCommand,
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

export interface GetLaunchProfileInitializationCommandInput extends GetLaunchProfileInitializationRequest {}
export interface GetLaunchProfileInitializationCommandOutput
  extends GetLaunchProfileInitializationResponse,
    __MetadataBearer {}

/**
 * <p>Get a launch profile initialization.</p>
 */
export class GetLaunchProfileInitializationCommand extends $Command<
  GetLaunchProfileInitializationCommandInput,
  GetLaunchProfileInitializationCommandOutput,
  NimbleClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetLaunchProfileInitializationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NimbleClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetLaunchProfileInitializationCommandInput, GetLaunchProfileInitializationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NimbleClient";
    const commandName = "GetLaunchProfileInitializationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetLaunchProfileInitializationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetLaunchProfileInitializationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetLaunchProfileInitializationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1GetLaunchProfileInitializationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetLaunchProfileInitializationCommandOutput> {
    return deserializeAws_restJson1GetLaunchProfileInitializationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
