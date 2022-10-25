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

import { DataBrewClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataBrewClient";
import {
  SendProjectSessionActionRequest,
  SendProjectSessionActionRequestFilterSensitiveLog,
  SendProjectSessionActionResponse,
  SendProjectSessionActionResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1SendProjectSessionActionCommand,
  serializeAws_restJson1SendProjectSessionActionCommand,
} from "../protocols/Aws_restJson1";

export interface SendProjectSessionActionCommandInput extends SendProjectSessionActionRequest {}
export interface SendProjectSessionActionCommandOutput extends SendProjectSessionActionResponse, __MetadataBearer {}

/**
 * <p>Performs a recipe step within an interactive DataBrew session that's currently
 *             open.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, SendProjectSessionActionCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, SendProjectSessionActionCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * const client = new DataBrewClient(config);
 * const command = new SendProjectSessionActionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SendProjectSessionActionCommandInput} for command's `input` shape.
 * @see {@link SendProjectSessionActionCommandOutput} for command's `response` shape.
 * @see {@link DataBrewClientResolvedConfig | config} for DataBrewClient's `config` shape.
 *
 */
export class SendProjectSessionActionCommand extends $Command<
  SendProjectSessionActionCommandInput,
  SendProjectSessionActionCommandOutput,
  DataBrewClientResolvedConfig
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

  constructor(readonly input: SendProjectSessionActionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DataBrewClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SendProjectSessionActionCommandInput, SendProjectSessionActionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SendProjectSessionActionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataBrewClient";
    const commandName = "SendProjectSessionActionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SendProjectSessionActionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: SendProjectSessionActionResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SendProjectSessionActionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1SendProjectSessionActionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SendProjectSessionActionCommandOutput> {
    return deserializeAws_restJson1SendProjectSessionActionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
