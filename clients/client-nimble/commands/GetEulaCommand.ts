import { NimbleClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NimbleClient";
import { GetEulaRequest, GetEulaResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetEulaCommand,
  serializeAws_restJson1GetEulaCommand,
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

export interface GetEulaCommandInput extends GetEulaRequest {}
export interface GetEulaCommandOutput extends GetEulaResponse, __MetadataBearer {}

/**
 * <p>Get Eula.</p>
 */
export class GetEulaCommand extends $Command<GetEulaCommandInput, GetEulaCommandOutput, NimbleClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetEulaCommandInput) {
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
  ): Handler<GetEulaCommandInput, GetEulaCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NimbleClient";
    const commandName = "GetEulaCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetEulaRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetEulaResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetEulaCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetEulaCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetEulaCommandOutput> {
    return deserializeAws_restJson1GetEulaCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
