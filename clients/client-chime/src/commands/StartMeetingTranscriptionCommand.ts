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

import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { StartMeetingTranscriptionRequest, StartMeetingTranscriptionResponse } from "../models/models_1";
import {
  deserializeAws_restJson1StartMeetingTranscriptionCommand,
  serializeAws_restJson1StartMeetingTranscriptionCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link StartMeetingTranscriptionCommand}.
 */
export interface StartMeetingTranscriptionCommandInput extends StartMeetingTranscriptionRequest {}
/**
 * @public
 *
 * The output of {@link StartMeetingTranscriptionCommand}.
 */
export interface StartMeetingTranscriptionCommandOutput extends StartMeetingTranscriptionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Starts transcription for the specified <code>meetingId</code>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, StartMeetingTranscriptionCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, StartMeetingTranscriptionCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new StartMeetingTranscriptionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param StartMeetingTranscriptionCommandInput - {@link StartMeetingTranscriptionCommandInput}
 * @returns {@link StartMeetingTranscriptionCommandOutput}
 * @see {@link StartMeetingTranscriptionCommandInput} for command's `input` shape.
 * @see {@link StartMeetingTranscriptionCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>One or more of the resources in the request does not exist in the system.</p>
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *  <p>The request exceeds the resource limit.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The service encountered an unexpected error.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ThrottledClientException} (client fault)
 *  <p>The client exceeded its request rate limit.</p>
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *  <p>The client is not currently authorized to make the request.</p>
 *
 * @throws {@link UnprocessableEntityException} (client fault)
 *  <p>The request was well-formed but was unable to be followed due to semantic errors.</p>
 *
 *
 */
export class StartMeetingTranscriptionCommand extends $Command<
  StartMeetingTranscriptionCommandInput,
  StartMeetingTranscriptionCommandOutput,
  ChimeClientResolvedConfig
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

  /**
   * @public
   */
  constructor(readonly input: StartMeetingTranscriptionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartMeetingTranscriptionCommandInput, StartMeetingTranscriptionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartMeetingTranscriptionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "StartMeetingTranscriptionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: StartMeetingTranscriptionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1StartMeetingTranscriptionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StartMeetingTranscriptionCommandOutput> {
    return deserializeAws_restJson1StartMeetingTranscriptionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
