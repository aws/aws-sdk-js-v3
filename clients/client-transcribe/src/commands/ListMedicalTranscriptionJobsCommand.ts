import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";
import { ListMedicalTranscriptionJobsRequest, ListMedicalTranscriptionJobsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListMedicalTranscriptionJobsCommand,
  serializeAws_json1_1ListMedicalTranscriptionJobsCommand,
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

export interface ListMedicalTranscriptionJobsCommandInput extends ListMedicalTranscriptionJobsRequest {}
export interface ListMedicalTranscriptionJobsCommandOutput
  extends ListMedicalTranscriptionJobsResponse,
    __MetadataBearer {}

/**
 * <p>Lists medical transcription jobs with a specified status or substring that matches their names.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeClient, ListMedicalTranscriptionJobsCommand } from "@aws-sdk/client-transcribe"; // ES Modules import
 * // const { TranscribeClient, ListMedicalTranscriptionJobsCommand } = require("@aws-sdk/client-transcribe"); // CommonJS import
 * const client = new TranscribeClient(config);
 * const command = new ListMedicalTranscriptionJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListMedicalTranscriptionJobsCommandInput} for command's `input` shape.
 * @see {@link ListMedicalTranscriptionJobsCommandOutput} for command's `response` shape.
 * @see {@link TranscribeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListMedicalTranscriptionJobsCommand extends $Command<
  ListMedicalTranscriptionJobsCommandInput,
  ListMedicalTranscriptionJobsCommandOutput,
  TranscribeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListMedicalTranscriptionJobsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TranscribeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListMedicalTranscriptionJobsCommandInput, ListMedicalTranscriptionJobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TranscribeClient";
    const commandName = "ListMedicalTranscriptionJobsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListMedicalTranscriptionJobsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListMedicalTranscriptionJobsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListMedicalTranscriptionJobsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListMedicalTranscriptionJobsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListMedicalTranscriptionJobsCommandOutput> {
    return deserializeAws_json1_1ListMedicalTranscriptionJobsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
