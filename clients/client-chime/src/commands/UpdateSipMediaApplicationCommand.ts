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

import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import {
  UpdateSipMediaApplicationRequest,
  UpdateSipMediaApplicationRequestFilterSensitiveLog,
  UpdateSipMediaApplicationResponse,
  UpdateSipMediaApplicationResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restJson1UpdateSipMediaApplicationCommand,
  serializeAws_restJson1UpdateSipMediaApplicationCommand,
} from "../protocols/Aws_restJson1";

export interface UpdateSipMediaApplicationCommandInput extends UpdateSipMediaApplicationRequest {}
export interface UpdateSipMediaApplicationCommandOutput extends UpdateSipMediaApplicationResponse, __MetadataBearer {}

/**
 * <p>Updates the details of the specified SIP media application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, UpdateSipMediaApplicationCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, UpdateSipMediaApplicationCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new UpdateSipMediaApplicationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateSipMediaApplicationCommandInput} for command's `input` shape.
 * @see {@link UpdateSipMediaApplicationCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 */
export class UpdateSipMediaApplicationCommand extends $Command<
  UpdateSipMediaApplicationCommandInput,
  UpdateSipMediaApplicationCommandOutput,
  ChimeClientResolvedConfig
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

  constructor(readonly input: UpdateSipMediaApplicationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateSipMediaApplicationCommandInput, UpdateSipMediaApplicationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateSipMediaApplicationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "UpdateSipMediaApplicationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateSipMediaApplicationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateSipMediaApplicationResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateSipMediaApplicationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateSipMediaApplicationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateSipMediaApplicationCommandOutput> {
    return deserializeAws_restJson1UpdateSipMediaApplicationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
