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
  NotifyAppValidationOutputRequest,
  NotifyAppValidationOutputRequestFilterSensitiveLog,
  NotifyAppValidationOutputResponse,
  NotifyAppValidationOutputResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1NotifyAppValidationOutputCommand,
  serializeAws_json1_1NotifyAppValidationOutputCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SMSClientResolvedConfig } from "../SMSClient";

export interface NotifyAppValidationOutputCommandInput extends NotifyAppValidationOutputRequest {}
export interface NotifyAppValidationOutputCommandOutput extends NotifyAppValidationOutputResponse, __MetadataBearer {}

/**
 * <p>Provides information to Server Migration Service about whether application validation is successful.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, NotifyAppValidationOutputCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, NotifyAppValidationOutputCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * const client = new SMSClient(config);
 * const command = new NotifyAppValidationOutputCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link NotifyAppValidationOutputCommandInput} for command's `input` shape.
 * @see {@link NotifyAppValidationOutputCommandOutput} for command's `response` shape.
 * @see {@link SMSClientResolvedConfig | config} for SMSClient's `config` shape.
 *
 */
export class NotifyAppValidationOutputCommand extends $Command<
  NotifyAppValidationOutputCommandInput,
  NotifyAppValidationOutputCommandOutput,
  SMSClientResolvedConfig
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

  constructor(readonly input: NotifyAppValidationOutputCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SMSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<NotifyAppValidationOutputCommandInput, NotifyAppValidationOutputCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, NotifyAppValidationOutputCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SMSClient";
    const commandName = "NotifyAppValidationOutputCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: NotifyAppValidationOutputRequestFilterSensitiveLog,
      outputFilterSensitiveLog: NotifyAppValidationOutputResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: NotifyAppValidationOutputCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1NotifyAppValidationOutputCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<NotifyAppValidationOutputCommandOutput> {
    return deserializeAws_json1_1NotifyAppValidationOutputCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
