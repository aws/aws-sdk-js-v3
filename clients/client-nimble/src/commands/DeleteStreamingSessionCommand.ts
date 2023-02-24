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
  DeleteStreamingSessionRequest,
  DeleteStreamingSessionRequestFilterSensitiveLog,
  DeleteStreamingSessionResponse,
  DeleteStreamingSessionResponseFilterSensitiveLog,
} from "../models/models_0";
import { NimbleClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NimbleClient";
import {
  deserializeAws_restJson1DeleteStreamingSessionCommand,
  serializeAws_restJson1DeleteStreamingSessionCommand,
} from "../protocols/Aws_restJson1";

export interface DeleteStreamingSessionCommandInput extends DeleteStreamingSessionRequest {}
export interface DeleteStreamingSessionCommandOutput extends DeleteStreamingSessionResponse, __MetadataBearer {}

/**
 * <p>Deletes streaming session resource.</p>
 *         <p>After invoking this operation, use GetStreamingSession to poll the resource until it
 *             transitions to a <code>DELETED</code> state.</p>
 *         <p>A streaming session will count against your streaming session quota until it is marked
 *                 <code>DELETED</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, DeleteStreamingSessionCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, DeleteStreamingSessionCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const command = new DeleteStreamingSessionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteStreamingSessionCommandInput} for command's `input` shape.
 * @see {@link DeleteStreamingSessionCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for NimbleClient's `config` shape.
 *
 */
export class DeleteStreamingSessionCommand extends $Command<
  DeleteStreamingSessionCommandInput,
  DeleteStreamingSessionCommandOutput,
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

  constructor(readonly input: DeleteStreamingSessionCommandInput) {
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
  ): Handler<DeleteStreamingSessionCommandInput, DeleteStreamingSessionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteStreamingSessionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NimbleClient";
    const commandName = "DeleteStreamingSessionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteStreamingSessionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteStreamingSessionResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteStreamingSessionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteStreamingSessionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteStreamingSessionCommandOutput> {
    return deserializeAws_restJson1DeleteStreamingSessionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
