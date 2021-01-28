import { HoneycodeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HoneycodeClient";
import { GetScreenDataRequest, GetScreenDataResult } from "../models/models_0";
import {
  deserializeAws_restJson1GetScreenDataCommand,
  serializeAws_restJson1GetScreenDataCommand,
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

export type GetScreenDataCommandInput = GetScreenDataRequest;
export type GetScreenDataCommandOutput = GetScreenDataResult & __MetadataBearer;

/**
 * <p>
 *             The GetScreenData API allows retrieval of data from a screen in a Honeycode app.
 *             The API allows setting local variables in the screen to filter, sort or otherwise affect what will be
 *             displayed on the screen.
 *         </p>
 */
export class GetScreenDataCommand extends $Command<
  GetScreenDataCommandInput,
  GetScreenDataCommandOutput,
  HoneycodeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetScreenDataCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: HoneycodeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetScreenDataCommandInput, GetScreenDataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "HoneycodeClient";
    const commandName = "GetScreenDataCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetScreenDataRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetScreenDataResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetScreenDataCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetScreenDataCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetScreenDataCommandOutput> {
    return deserializeAws_restJson1GetScreenDataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
