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
  ListSpeakerEnrollmentJobsRequest,
  ListSpeakerEnrollmentJobsRequestFilterSensitiveLog,
  ListSpeakerEnrollmentJobsResponse,
  ListSpeakerEnrollmentJobsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_0ListSpeakerEnrollmentJobsCommand,
  serializeAws_json1_0ListSpeakerEnrollmentJobsCommand,
} from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, VoiceIDClientResolvedConfig } from "../VoiceIDClient";

export interface ListSpeakerEnrollmentJobsCommandInput extends ListSpeakerEnrollmentJobsRequest {}
export interface ListSpeakerEnrollmentJobsCommandOutput extends ListSpeakerEnrollmentJobsResponse, __MetadataBearer {}

/**
 * <p>Lists all the speaker enrollment jobs in the domain with the specified
 *                 <code>JobStatus</code>. If <code>JobStatus</code> is not provided, this lists all
 *             jobs with all possible speaker enrollment job statuses.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VoiceIDClient, ListSpeakerEnrollmentJobsCommand } from "@aws-sdk/client-voice-id"; // ES Modules import
 * // const { VoiceIDClient, ListSpeakerEnrollmentJobsCommand } = require("@aws-sdk/client-voice-id"); // CommonJS import
 * const client = new VoiceIDClient(config);
 * const command = new ListSpeakerEnrollmentJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSpeakerEnrollmentJobsCommandInput} for command's `input` shape.
 * @see {@link ListSpeakerEnrollmentJobsCommandOutput} for command's `response` shape.
 * @see {@link VoiceIDClientResolvedConfig | config} for VoiceIDClient's `config` shape.
 *
 */
export class ListSpeakerEnrollmentJobsCommand extends $Command<
  ListSpeakerEnrollmentJobsCommandInput,
  ListSpeakerEnrollmentJobsCommandOutput,
  VoiceIDClientResolvedConfig
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

  constructor(readonly input: ListSpeakerEnrollmentJobsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: VoiceIDClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListSpeakerEnrollmentJobsCommandInput, ListSpeakerEnrollmentJobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListSpeakerEnrollmentJobsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "VoiceIDClient";
    const commandName = "ListSpeakerEnrollmentJobsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListSpeakerEnrollmentJobsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListSpeakerEnrollmentJobsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListSpeakerEnrollmentJobsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0ListSpeakerEnrollmentJobsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListSpeakerEnrollmentJobsCommandOutput> {
    return deserializeAws_json1_0ListSpeakerEnrollmentJobsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
