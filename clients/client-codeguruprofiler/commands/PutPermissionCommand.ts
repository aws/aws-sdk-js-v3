import { CodeGuruProfilerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeGuruProfilerClient";
import { PutPermissionRequest, PutPermissionResponse } from "../models/models_0";
import {
  deserializeAws_restJson1PutPermissionCommand,
  serializeAws_restJson1PutPermissionCommand,
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

export type PutPermissionCommandInput = PutPermissionRequest;
export type PutPermissionCommandOutput = PutPermissionResponse & __MetadataBearer;

/**
 * <p>Provides permission to the principals. This overwrites the existing permissions, and
 *             is not additive.</p>
 */
export class PutPermissionCommand extends $Command<
  PutPermissionCommandInput,
  PutPermissionCommandOutput,
  CodeGuruProfilerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutPermissionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeGuruProfilerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutPermissionCommandInput, PutPermissionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeGuruProfilerClient";
    const commandName = "PutPermissionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutPermissionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutPermissionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutPermissionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1PutPermissionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutPermissionCommandOutput> {
    return deserializeAws_restJson1PutPermissionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
