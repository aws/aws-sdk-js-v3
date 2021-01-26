import { GlacierClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlacierClient";
import { InitiateJobInput, InitiateJobOutput } from "../models/models_0";
import {
  deserializeAws_restJson1InitiateJobCommand,
  serializeAws_restJson1InitiateJobCommand,
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

export type InitiateJobCommandInput = InitiateJobInput;
export type InitiateJobCommandOutput = InitiateJobOutput & __MetadataBearer;

/**
 * <p>This operation initiates a job of the specified type, which can be a select, an archival retrieval,
 *          or a vault retrieval. For more information about using this operation,
 *          see the documentation for the underlying REST API <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-initiate-job-post.html">Initiate
 *             a Job</a>.
 *       </p>
 */
export class InitiateJobCommand extends $Command<
  InitiateJobCommandInput,
  InitiateJobCommandOutput,
  GlacierClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: InitiateJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlacierClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<InitiateJobCommandInput, InitiateJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlacierClient";
    const commandName = "InitiateJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: InitiateJobInput.filterSensitiveLog,
      outputFilterSensitiveLog: InitiateJobOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: InitiateJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1InitiateJobCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<InitiateJobCommandOutput> {
    return deserializeAws_restJson1InitiateJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
