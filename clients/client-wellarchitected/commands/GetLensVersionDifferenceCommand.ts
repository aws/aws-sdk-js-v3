import { ServiceInputTypes, ServiceOutputTypes, WellArchitectedClientResolvedConfig } from "../WellArchitectedClient";
import { GetLensVersionDifferenceInput, GetLensVersionDifferenceOutput } from "../models/models_0";
import {
  deserializeAws_restJson1GetLensVersionDifferenceCommand,
  serializeAws_restJson1GetLensVersionDifferenceCommand,
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

export type GetLensVersionDifferenceCommandInput = GetLensVersionDifferenceInput;
export type GetLensVersionDifferenceCommandOutput = GetLensVersionDifferenceOutput & __MetadataBearer;

/**
 * <p>Get lens version differences.</p>
 */
export class GetLensVersionDifferenceCommand extends $Command<
  GetLensVersionDifferenceCommandInput,
  GetLensVersionDifferenceCommandOutput,
  WellArchitectedClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetLensVersionDifferenceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WellArchitectedClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetLensVersionDifferenceCommandInput, GetLensVersionDifferenceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WellArchitectedClient";
    const commandName = "GetLensVersionDifferenceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetLensVersionDifferenceInput.filterSensitiveLog,
      outputFilterSensitiveLog: GetLensVersionDifferenceOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetLensVersionDifferenceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetLensVersionDifferenceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetLensVersionDifferenceCommandOutput> {
    return deserializeAws_restJson1GetLensVersionDifferenceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
