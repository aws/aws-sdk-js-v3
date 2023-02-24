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
  GetStreamingSessionRequest,
  GetStreamingSessionRequestFilterSensitiveLog,
  GetStreamingSessionResponse,
  GetStreamingSessionResponseFilterSensitiveLog,
} from "../models/models_0";
import { NimbleClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NimbleClient";
import {
  deserializeAws_restJson1GetStreamingSessionCommand,
  serializeAws_restJson1GetStreamingSessionCommand,
} from "../protocols/Aws_restJson1";

export interface GetStreamingSessionCommandInput extends GetStreamingSessionRequest {}
export interface GetStreamingSessionCommandOutput extends GetStreamingSessionResponse, __MetadataBearer {}

/**
 * <p>Gets StreamingSession resource.</p>
 *         <p>Invoke this operation to poll for a streaming session state while creating or deleting
 *             a session.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, GetStreamingSessionCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, GetStreamingSessionCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const command = new GetStreamingSessionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetStreamingSessionCommandInput} for command's `input` shape.
 * @see {@link GetStreamingSessionCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for NimbleClient's `config` shape.
 *
 */
export class GetStreamingSessionCommand extends $Command<
  GetStreamingSessionCommandInput,
  GetStreamingSessionCommandOutput,
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

  constructor(readonly input: GetStreamingSessionCommandInput) {
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
  ): Handler<GetStreamingSessionCommandInput, GetStreamingSessionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetStreamingSessionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NimbleClient";
    const commandName = "GetStreamingSessionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetStreamingSessionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetStreamingSessionResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetStreamingSessionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetStreamingSessionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetStreamingSessionCommandOutput> {
    return deserializeAws_restJson1GetStreamingSessionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
