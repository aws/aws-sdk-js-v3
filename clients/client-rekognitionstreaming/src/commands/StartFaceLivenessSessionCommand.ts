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
  StartFaceLivenessSessionRequest,
  StartFaceLivenessSessionRequestFilterSensitiveLog,
  StartFaceLivenessSessionResponse,
  StartFaceLivenessSessionResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1StartFaceLivenessSessionCommand,
  serializeAws_restJson1StartFaceLivenessSessionCommand,
} from "../protocols/Aws_restJson1";
import {
  RekognitionStreamingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RekognitionStreamingClient";

/**
 * @public
 *
 * The input for {@link StartFaceLivenessSessionCommand}.
 */
export interface StartFaceLivenessSessionCommandInput extends StartFaceLivenessSessionRequest {}
/**
 * @public
 *
 * The output of {@link StartFaceLivenessSessionCommand}.
 */
export interface StartFaceLivenessSessionCommandOutput extends StartFaceLivenessSessionResponse, __MetadataBearer {}

export class StartFaceLivenessSessionCommand extends $Command<
  StartFaceLivenessSessionCommandInput,
  StartFaceLivenessSessionCommandOutput,
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
  constructor(readonly input: StartFaceLivenessSessionCommandInput) {
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
  ): Handler<StartFaceLivenessSessionCommandInput, StartFaceLivenessSessionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartFaceLivenessSessionCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getEventStreamPlugin(configuration));
    this.middlewareStack.use(
      getWebSocketPlugin(configuration, { headerPrefix: "x-amz-rekognition-streaming-liveness-" })
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RekognitionStreamingClient";
    const commandName = "StartFaceLivenessSessionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartFaceLivenessSessionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StartFaceLivenessSessionResponseFilterSensitiveLog,
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
    input: StartFaceLivenessSessionCommandInput,
    context: __SerdeContext & __EventStreamSerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1StartFaceLivenessSessionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext & __EventStreamSerdeContext
  ): Promise<StartFaceLivenessSessionCommandOutput> {
    return deserializeAws_restJson1StartFaceLivenessSessionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
