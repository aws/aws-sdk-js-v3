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

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import {
  SendAnnouncementRequest,
  SendAnnouncementRequestFilterSensitiveLog,
  SendAnnouncementResponse,
  SendAnnouncementResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1SendAnnouncementCommand,
  serializeAws_json1_1SendAnnouncementCommand,
} from "../protocols/Aws_json1_1";

export interface SendAnnouncementCommandInput extends SendAnnouncementRequest {}
export interface SendAnnouncementCommandOutput extends SendAnnouncementResponse, __MetadataBearer {}

/**
 * <p>Triggers an asynchronous flow to send text, SSML, or audio announcements to rooms that
 *          are identified by a search or filter. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, SendAnnouncementCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, SendAnnouncementCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new SendAnnouncementCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SendAnnouncementCommandInput} for command's `input` shape.
 * @see {@link SendAnnouncementCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for AlexaForBusinessClient's `config` shape.
 *
 */
export class SendAnnouncementCommand extends $Command<
  SendAnnouncementCommandInput,
  SendAnnouncementCommandOutput,
  AlexaForBusinessClientResolvedConfig
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

  constructor(readonly input: SendAnnouncementCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AlexaForBusinessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SendAnnouncementCommandInput, SendAnnouncementCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SendAnnouncementCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AlexaForBusinessClient";
    const commandName = "SendAnnouncementCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SendAnnouncementRequestFilterSensitiveLog,
      outputFilterSensitiveLog: SendAnnouncementResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SendAnnouncementCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1SendAnnouncementCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SendAnnouncementCommandOutput> {
    return deserializeAws_json1_1SendAnnouncementCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
