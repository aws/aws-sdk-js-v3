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
  GetStreamingSessionStreamRequest,
  GetStreamingSessionStreamRequestFilterSensitiveLog,
  GetStreamingSessionStreamResponse,
  GetStreamingSessionStreamResponseFilterSensitiveLog,
} from "../models/models_0";
import { NimbleClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NimbleClient";
import {
  deserializeAws_restJson1GetStreamingSessionStreamCommand,
  serializeAws_restJson1GetStreamingSessionStreamCommand,
} from "../protocols/Aws_restJson1";

export interface GetStreamingSessionStreamCommandInput extends GetStreamingSessionStreamRequest {}
export interface GetStreamingSessionStreamCommandOutput extends GetStreamingSessionStreamResponse, __MetadataBearer {}

/**
 * <p>Gets a StreamingSessionStream for a streaming session.</p>
 *         <p>Invoke this operation to poll the resource after invoking
 *                 <code>CreateStreamingSessionStream</code>.</p>
 *         <p>After the <code>StreamingSessionStream</code> changes to the <code>READY</code> state,
 *             the url property will contain a stream to be used with the DCV streaming client.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, GetStreamingSessionStreamCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, GetStreamingSessionStreamCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const command = new GetStreamingSessionStreamCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetStreamingSessionStreamCommandInput} for command's `input` shape.
 * @see {@link GetStreamingSessionStreamCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for NimbleClient's `config` shape.
 *
 */
export class GetStreamingSessionStreamCommand extends $Command<
  GetStreamingSessionStreamCommandInput,
  GetStreamingSessionStreamCommandOutput,
  NimbleClientResolvedConfig
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

  constructor(readonly input: GetStreamingSessionStreamCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NimbleClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetStreamingSessionStreamCommandInput, GetStreamingSessionStreamCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetStreamingSessionStreamCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NimbleClient";
    const commandName = "GetStreamingSessionStreamCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetStreamingSessionStreamRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetStreamingSessionStreamResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetStreamingSessionStreamCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetStreamingSessionStreamCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetStreamingSessionStreamCommandOutput> {
    return deserializeAws_restJson1GetStreamingSessionStreamCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
