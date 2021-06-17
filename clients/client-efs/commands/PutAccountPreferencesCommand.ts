import { EFSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EFSClient";
import { PutAccountPreferencesRequest, PutAccountPreferencesResponse } from "../models/models_0";
import {
  deserializeAws_restJson1PutAccountPreferencesCommand,
  serializeAws_restJson1PutAccountPreferencesCommand,
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

export interface PutAccountPreferencesCommandInput extends PutAccountPreferencesRequest {}
export interface PutAccountPreferencesCommandOutput extends PutAccountPreferencesResponse, __MetadataBearer {}

export class PutAccountPreferencesCommand extends $Command<
  PutAccountPreferencesCommandInput,
  PutAccountPreferencesCommandOutput,
  EFSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutAccountPreferencesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EFSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutAccountPreferencesCommandInput, PutAccountPreferencesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EFSClient";
    const commandName = "PutAccountPreferencesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutAccountPreferencesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutAccountPreferencesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutAccountPreferencesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1PutAccountPreferencesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutAccountPreferencesCommandOutput> {
    return deserializeAws_restJson1PutAccountPreferencesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
