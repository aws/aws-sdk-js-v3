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
  CreateStreamingSessionStreamRequest,
  CreateStreamingSessionStreamRequestFilterSensitiveLog,
  CreateStreamingSessionStreamResponse,
  CreateStreamingSessionStreamResponseFilterSensitiveLog,
} from "../models/models_0";
import { NimbleClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NimbleClient";
import {
  deserializeAws_restJson1CreateStreamingSessionStreamCommand,
  serializeAws_restJson1CreateStreamingSessionStreamCommand,
} from "../protocols/Aws_restJson1";

export interface CreateStreamingSessionStreamCommandInput extends CreateStreamingSessionStreamRequest {}
export interface CreateStreamingSessionStreamCommandOutput
  extends CreateStreamingSessionStreamResponse,
    __MetadataBearer {}

/**
 * <p>Creates a streaming session stream for a streaming session.</p>
 *         <p>After invoking this API, invoke GetStreamingSessionStream with the returned streamId
 *             to poll the resource until it is in the <code>READY</code> state.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, CreateStreamingSessionStreamCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, CreateStreamingSessionStreamCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const command = new CreateStreamingSessionStreamCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateStreamingSessionStreamCommandInput} for command's `input` shape.
 * @see {@link CreateStreamingSessionStreamCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for NimbleClient's `config` shape.
 *
 */
export class CreateStreamingSessionStreamCommand extends $Command<
  CreateStreamingSessionStreamCommandInput,
  CreateStreamingSessionStreamCommandOutput,
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

  constructor(readonly input: CreateStreamingSessionStreamCommandInput) {
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
  ): Handler<CreateStreamingSessionStreamCommandInput, CreateStreamingSessionStreamCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateStreamingSessionStreamCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NimbleClient";
    const commandName = "CreateStreamingSessionStreamCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateStreamingSessionStreamRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateStreamingSessionStreamResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateStreamingSessionStreamCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateStreamingSessionStreamCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateStreamingSessionStreamCommandOutput> {
    return deserializeAws_restJson1CreateStreamingSessionStreamCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
