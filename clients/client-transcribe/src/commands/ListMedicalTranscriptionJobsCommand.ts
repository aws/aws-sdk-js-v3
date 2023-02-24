// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
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

import {
  ListMedicalTranscriptionJobsRequest,
  ListMedicalTranscriptionJobsRequestFilterSensitiveLog,
  ListMedicalTranscriptionJobsResponse,
  ListMedicalTranscriptionJobsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListMedicalTranscriptionJobsCommand,
  serializeAws_json1_1ListMedicalTranscriptionJobsCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";

export interface ListMedicalTranscriptionJobsCommandInput extends ListMedicalTranscriptionJobsRequest {}
export interface ListMedicalTranscriptionJobsCommandOutput
  extends ListMedicalTranscriptionJobsResponse,
    __MetadataBearer {}

/**
 * <p>Provides a list of medical transcription jobs that match the specified criteria. If no
 *             criteria are specified, all medical transcription jobs are returned.</p>
 *          <p>To get detailed information about a specific medical transcription job, use the  operation.</p>
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
 * @see {@link TranscribeClientResolvedConfig | config} for TranscribeClient's `config` shape.
 *
 */
export class ListMedicalTranscriptionJobsCommand extends $Command<
  ListMedicalTranscriptionJobsCommandInput,
  ListMedicalTranscriptionJobsCommandOutput,
  TranscribeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListMedicalTranscriptionJobsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TranscribeClient";
    const commandName = "ListMedicalTranscriptionJobsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListMedicalTranscriptionJobsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListMedicalTranscriptionJobsResponseFilterSensitiveLog,
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
