import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { BatchGetDevEndpointsRequest, BatchGetDevEndpointsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1BatchGetDevEndpointsCommand,
  serializeAws_json1_1BatchGetDevEndpointsCommand,
} from "../protocols/Aws_json1_1";
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

export type BatchGetDevEndpointsCommandInput = BatchGetDevEndpointsRequest;
export type BatchGetDevEndpointsCommandOutput = BatchGetDevEndpointsResponse & __MetadataBearer;

/**
 * <p>Returns a list of resource metadata for a given list of development endpoint names. After
 *       calling the <code>ListDevEndpoints</code> operation, you can call this operation to access the
 *       data to which you have been granted permissions. This operation supports all IAM permissions,
 *       including permission conditions that uses tags.</p>
 */
export class BatchGetDevEndpointsCommand extends $Command<
  BatchGetDevEndpointsCommandInput,
  BatchGetDevEndpointsCommandOutput,
  GlueClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BatchGetDevEndpointsCommandInput) {
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
  ): Handler<BatchGetDevEndpointsCommandInput, BatchGetDevEndpointsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "BatchGetDevEndpointsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchGetDevEndpointsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: BatchGetDevEndpointsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchGetDevEndpointsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1BatchGetDevEndpointsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchGetDevEndpointsCommandOutput> {
    return deserializeAws_json1_1BatchGetDevEndpointsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
