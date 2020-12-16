import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import { GetEvidenceFolderRequest, GetEvidenceFolderResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetEvidenceFolderCommand,
  serializeAws_restJson1GetEvidenceFolderCommand,
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

export type GetEvidenceFolderCommandInput = GetEvidenceFolderRequest;
export type GetEvidenceFolderCommandOutput = GetEvidenceFolderResponse & __MetadataBearer;

/**
 * <p>
 * Returns an evidence folder from the specified assessment in AWS Audit Manager.
 * </p>
 */
export class GetEvidenceFolderCommand extends $Command<
  GetEvidenceFolderCommandInput,
  GetEvidenceFolderCommandOutput,
  AuditManagerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetEvidenceFolderCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AuditManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetEvidenceFolderCommandInput, GetEvidenceFolderCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AuditManagerClient";
    const commandName = "GetEvidenceFolderCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetEvidenceFolderRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetEvidenceFolderResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetEvidenceFolderCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetEvidenceFolderCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetEvidenceFolderCommandOutput> {
    return deserializeAws_restJson1GetEvidenceFolderCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
