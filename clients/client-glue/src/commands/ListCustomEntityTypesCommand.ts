import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { ListCustomEntityTypesRequest, ListCustomEntityTypesResponse } from "../models/models_1";
import {
  deserializeAws_json1_1ListCustomEntityTypesCommand,
  serializeAws_json1_1ListCustomEntityTypesCommand,
} from "../protocols/Aws_json1_1";

export interface ListCustomEntityTypesCommandInput extends ListCustomEntityTypesRequest {}
export interface ListCustomEntityTypesCommandOutput extends ListCustomEntityTypesResponse, __MetadataBearer {}

export class ListCustomEntityTypesCommand extends $Command<
  ListCustomEntityTypesCommandInput,
  ListCustomEntityTypesCommandOutput,
  GlueClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListCustomEntityTypesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlueClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListCustomEntityTypesCommandInput, ListCustomEntityTypesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "ListCustomEntityTypesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListCustomEntityTypesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListCustomEntityTypesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListCustomEntityTypesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListCustomEntityTypesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListCustomEntityTypesCommandOutput> {
    return deserializeAws_json1_1ListCustomEntityTypesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
