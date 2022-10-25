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
  UpdateAccountSettingsRequest,
  UpdateAccountSettingsRequestFilterSensitiveLog,
  UpdateAccountSettingsResponse,
  UpdateAccountSettingsResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restJson1UpdateAccountSettingsCommand,
  serializeAws_restJson1UpdateAccountSettingsCommand,
} from "../protocols/Aws_restJson1";

export interface UpdateAccountSettingsCommandInput extends UpdateAccountSettingsRequest {}
export interface UpdateAccountSettingsCommandOutput extends UpdateAccountSettingsResponse, __MetadataBearer {}

/**
 * <p>Updates the settings for the specified Amazon Chime account. You can update settings for
 *             remote control of shared screens, or for the dial-out option. For more information about
 *             these settings, see <a href="https://docs.aws.amazon.com/chime/latest/ag/policies.html">Use
 *                 the Policies Page</a> in the <i>Amazon Chime Administration
 *                 Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, UpdateAccountSettingsCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, UpdateAccountSettingsCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new UpdateAccountSettingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateAccountSettingsCommandInput} for command's `input` shape.
 * @see {@link UpdateAccountSettingsCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 */
export class UpdateAccountSettingsCommand extends $Command<
  UpdateAccountSettingsCommandInput,
  UpdateAccountSettingsCommandOutput,
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

  constructor(readonly input: UpdateAccountSettingsCommandInput) {
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
  ): Handler<UpdateAccountSettingsCommandInput, UpdateAccountSettingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateAccountSettingsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "UpdateAccountSettingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateAccountSettingsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateAccountSettingsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateAccountSettingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateAccountSettingsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateAccountSettingsCommandOutput> {
    return deserializeAws_restJson1UpdateAccountSettingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
