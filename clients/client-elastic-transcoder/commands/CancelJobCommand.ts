import {
  ElasticTranscoderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticTranscoderClient";
import { CancelJobRequest, CancelJobResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CancelJobCommand,
  serializeAws_restJson1CancelJobCommand,
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

export type CancelJobCommandInput = CancelJobRequest;
export type CancelJobCommandOutput = CancelJobResponse & __MetadataBearer;

/**
 * <p>The CancelJob operation cancels an unfinished job.</p>
 *         <note>
 *             <p>You can only cancel a job that has a status of <code>Submitted</code>. To prevent a
 *             pipeline from starting to process a job while you're getting the job identifier, use
 *                 <a>UpdatePipelineStatus</a> to temporarily pause the pipeline.</p>
 *          </note>
 */
export class CancelJobCommand extends $Command<
  CancelJobCommandInput,
  CancelJobCommandOutput,
  ElasticTranscoderClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CancelJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticTranscoderClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CancelJobCommandInput, CancelJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticTranscoderClient";
    const commandName = "CancelJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CancelJobRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CancelJobResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CancelJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CancelJobCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CancelJobCommandOutput> {
    return deserializeAws_restJson1CancelJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
