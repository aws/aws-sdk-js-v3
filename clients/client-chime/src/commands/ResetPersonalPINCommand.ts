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
  ResetPersonalPINRequest,
  ResetPersonalPINRequestFilterSensitiveLog,
  ResetPersonalPINResponse,
  ResetPersonalPINResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restJson1ResetPersonalPINCommand,
  serializeAws_restJson1ResetPersonalPINCommand,
} from "../protocols/Aws_restJson1";

export interface ResetPersonalPINCommandInput extends ResetPersonalPINRequest {}
export interface ResetPersonalPINCommandOutput extends ResetPersonalPINResponse, __MetadataBearer {}

/**
 * <p>Resets the personal meeting PIN for the specified user on an Amazon Chime account. Returns
 *             the <a>User</a> object with the updated personal meeting PIN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, ResetPersonalPINCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, ResetPersonalPINCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new ResetPersonalPINCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ResetPersonalPINCommandInput} for command's `input` shape.
 * @see {@link ResetPersonalPINCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 */
export class ResetPersonalPINCommand extends $Command<
  ResetPersonalPINCommandInput,
  ResetPersonalPINCommandOutput,
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

  constructor(readonly input: ResetPersonalPINCommandInput) {
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
  ): Handler<ResetPersonalPINCommandInput, ResetPersonalPINCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ResetPersonalPINCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "ResetPersonalPINCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ResetPersonalPINRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ResetPersonalPINResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ResetPersonalPINCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ResetPersonalPINCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ResetPersonalPINCommandOutput> {
    return deserializeAws_restJson1ResetPersonalPINCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
