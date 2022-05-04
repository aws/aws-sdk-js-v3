// smithy-typescript generated code
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
import { GetUnfilteredPartitionsMetadataRequest, GetUnfilteredPartitionsMetadataResponse } from "../models/models_1";
import {
  deserializeAws_json1_1GetUnfilteredPartitionsMetadataCommand,
  serializeAws_json1_1GetUnfilteredPartitionsMetadataCommand,
} from "../protocols/Aws_json1_1";

export interface GetUnfilteredPartitionsMetadataCommandInput extends GetUnfilteredPartitionsMetadataRequest {}
export interface GetUnfilteredPartitionsMetadataCommandOutput
  extends GetUnfilteredPartitionsMetadataResponse,
    __MetadataBearer {}

export class GetUnfilteredPartitionsMetadataCommand extends $Command<
  GetUnfilteredPartitionsMetadataCommandInput,
  GetUnfilteredPartitionsMetadataCommandOutput,
  GlueClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetUnfilteredPartitionsMetadataCommandInput) {
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
  ): Handler<GetUnfilteredPartitionsMetadataCommandInput, GetUnfilteredPartitionsMetadataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "GetUnfilteredPartitionsMetadataCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetUnfilteredPartitionsMetadataRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetUnfilteredPartitionsMetadataResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetUnfilteredPartitionsMetadataCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1GetUnfilteredPartitionsMetadataCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetUnfilteredPartitionsMetadataCommandOutput> {
    return deserializeAws_json1_1GetUnfilteredPartitionsMetadataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
