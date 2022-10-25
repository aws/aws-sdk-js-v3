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
  CreateConfigurationSetRequest,
  CreateConfigurationSetRequestFilterSensitiveLog,
  CreateConfigurationSetResponse,
  CreateConfigurationSetResponseFilterSensitiveLog,
} from "../models/models_0";
import { PinpointEmailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointEmailClient";
import {
  deserializeAws_restJson1CreateConfigurationSetCommand,
  serializeAws_restJson1CreateConfigurationSetCommand,
} from "../protocols/Aws_restJson1";

export interface CreateConfigurationSetCommandInput extends CreateConfigurationSetRequest {}
export interface CreateConfigurationSetCommandOutput extends CreateConfigurationSetResponse, __MetadataBearer {}

/**
 * <p>Create a configuration set. <i>Configuration sets</i> are groups of
 *             rules that you can apply to the emails you send using Amazon Pinpoint. You apply a configuration
 *             set to an email by including a reference to the configuration set in the headers of the
 *             email. When you apply a configuration set to an email, all of the rules in that
 *             configuration set are applied to the email. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointEmailClient, CreateConfigurationSetCommand } from "@aws-sdk/client-pinpoint-email"; // ES Modules import
 * // const { PinpointEmailClient, CreateConfigurationSetCommand } = require("@aws-sdk/client-pinpoint-email"); // CommonJS import
 * const client = new PinpointEmailClient(config);
 * const command = new CreateConfigurationSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateConfigurationSetCommandInput} for command's `input` shape.
 * @see {@link CreateConfigurationSetCommandOutput} for command's `response` shape.
 * @see {@link PinpointEmailClientResolvedConfig | config} for PinpointEmailClient's `config` shape.
 *
 */
export class CreateConfigurationSetCommand extends $Command<
  CreateConfigurationSetCommandInput,
  CreateConfigurationSetCommandOutput,
  PinpointEmailClientResolvedConfig
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

  constructor(readonly input: CreateConfigurationSetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PinpointEmailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateConfigurationSetCommandInput, CreateConfigurationSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateConfigurationSetCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointEmailClient";
    const commandName = "CreateConfigurationSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateConfigurationSetRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateConfigurationSetResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateConfigurationSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateConfigurationSetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateConfigurationSetCommandOutput> {
    return deserializeAws_restJson1CreateConfigurationSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
