// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getEventStreamPlugin } from "@aws-sdk/middleware-eventstream";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getWebSocketPlugin } from "@aws-sdk/middleware-websocket";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  EventStreamSerdeContext as __EventStreamSerdeContext,
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  StartStreamingLivenessSessionRequest,
  StartStreamingLivenessSessionRequestFilterSensitiveLog,
  StartStreamingLivenessSessionResponse,
  StartStreamingLivenessSessionResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1StartStreamingLivenessSessionCommand,
  serializeAws_restJson1StartStreamingLivenessSessionCommand,
} from "../protocols/Aws_restJson1";
import {
  RekognitionStreamingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RekognitionStreamingClient";

/**
 * @public
 *
 * The input for {@link StartStreamingLivenessSessionCommand}.
 */
export interface StartStreamingLivenessSessionCommandInput extends StartStreamingLivenessSessionRequest {}
/**
 * @public
 *
 * The output of {@link StartStreamingLivenessSessionCommand}.
 */
export interface StartStreamingLivenessSessionCommandOutput
  extends StartStreamingLivenessSessionResponse,
    __MetadataBearer {}

export class StartStreamingLivenessSessionCommand extends $Command<
  StartStreamingLivenessSessionCommandInput,
  StartStreamingLivenessSessionCommandOutput,
  RekognitionStreamingClientResolvedConfig
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
  constructor(readonly input: StartStreamingLivenessSessionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RekognitionStreamingClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartStreamingLivenessSessionCommandInput, StartStreamingLivenessSessionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartStreamingLivenessSessionCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getEventStreamPlugin(configuration));
    this.middlewareStack.use(
      getWebSocketPlugin(configuration, { headerPrefix: "x-amz-rekognition-streaming-liveness-" })
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RekognitionStreamingClient";
    const commandName = "StartStreamingLivenessSessionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartStreamingLivenessSessionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StartStreamingLivenessSessionResponseFilterSensitiveLog,
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
  private serialize(
    input: StartStreamingLivenessSessionCommandInput,
    context: __SerdeContext & __EventStreamSerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1StartStreamingLivenessSessionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext & __EventStreamSerdeContext
  ): Promise<StartStreamingLivenessSessionCommandOutput> {
    return deserializeAws_restJson1StartStreamingLivenessSessionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
