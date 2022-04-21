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
import { GetCustomEntityTypeRequest, GetCustomEntityTypeResponse } from "../models/models_1";
import {
  deserializeAws_json1_1GetCustomEntityTypeCommand,
  serializeAws_json1_1GetCustomEntityTypeCommand,
} from "../protocols/Aws_json1_1";

export interface GetCustomEntityTypeCommandInput extends GetCustomEntityTypeRequest {}
export interface GetCustomEntityTypeCommandOutput extends GetCustomEntityTypeResponse, __MetadataBearer {}

export class GetCustomEntityTypeCommand extends $Command<
  GetCustomEntityTypeCommandInput,
  GetCustomEntityTypeCommandOutput,
  GlueClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetCustomEntityTypeCommandInput) {
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
  ): Handler<GetCustomEntityTypeCommandInput, GetCustomEntityTypeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "GetCustomEntityTypeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetCustomEntityTypeRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetCustomEntityTypeResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetCustomEntityTypeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetCustomEntityTypeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetCustomEntityTypeCommandOutput> {
    return deserializeAws_json1_1GetCustomEntityTypeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
