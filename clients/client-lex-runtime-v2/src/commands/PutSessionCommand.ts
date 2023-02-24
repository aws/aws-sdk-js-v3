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
  SdkStream as __SdkStream,
  SdkStreamSerdeContext as __SdkStreamSerdeContext,
  SerdeContext as __SerdeContext,
  WithSdkStreamMixin as __WithSdkStreamMixin,
} from "@aws-sdk/types";

import { LexRuntimeV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexRuntimeV2Client";
import {
  PutSessionRequest,
  PutSessionRequestFilterSensitiveLog,
  PutSessionResponse,
  PutSessionResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1PutSessionCommand,
  serializeAws_restJson1PutSessionCommand,
} from "../protocols/Aws_restJson1";

export interface PutSessionCommandInput extends PutSessionRequest {}
export interface PutSessionCommandOutput
  extends __WithSdkStreamMixin<PutSessionResponse, "audioStream">,
    __MetadataBearer {}

/**
 * <p>Creates a new session or modifies an existing session with an Amazon Lex V2
 *          bot. Use this operation to enable your application to set the state of
 *          the bot.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexRuntimeV2Client, PutSessionCommand } from "@aws-sdk/client-lex-runtime-v2"; // ES Modules import
 * // const { LexRuntimeV2Client, PutSessionCommand } = require("@aws-sdk/client-lex-runtime-v2"); // CommonJS import
 * const client = new LexRuntimeV2Client(config);
 * const command = new PutSessionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutSessionCommandInput} for command's `input` shape.
 * @see {@link PutSessionCommandOutput} for command's `response` shape.
 * @see {@link LexRuntimeV2ClientResolvedConfig | config} for LexRuntimeV2Client's `config` shape.
 *
 */
export class PutSessionCommand extends $Command<
  PutSessionCommandInput,
  PutSessionCommandOutput,
  LexRuntimeV2ClientResolvedConfig
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

  constructor(readonly input: PutSessionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LexRuntimeV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutSessionCommandInput, PutSessionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, PutSessionCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexRuntimeV2Client";
    const commandName = "PutSessionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutSessionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: PutSessionResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutSessionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1PutSessionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext & __SdkStreamSerdeContext
  ): Promise<PutSessionCommandOutput> {
    return deserializeAws_restJson1PutSessionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
