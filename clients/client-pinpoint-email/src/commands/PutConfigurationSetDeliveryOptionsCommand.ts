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
  PutConfigurationSetDeliveryOptionsRequest,
  PutConfigurationSetDeliveryOptionsRequestFilterSensitiveLog,
  PutConfigurationSetDeliveryOptionsResponse,
  PutConfigurationSetDeliveryOptionsResponseFilterSensitiveLog,
} from "../models/models_0";
import { PinpointEmailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointEmailClient";
import {
  deserializeAws_restJson1PutConfigurationSetDeliveryOptionsCommand,
  serializeAws_restJson1PutConfigurationSetDeliveryOptionsCommand,
} from "../protocols/Aws_restJson1";

export interface PutConfigurationSetDeliveryOptionsCommandInput extends PutConfigurationSetDeliveryOptionsRequest {}
export interface PutConfigurationSetDeliveryOptionsCommandOutput
  extends PutConfigurationSetDeliveryOptionsResponse,
    __MetadataBearer {}

/**
 * <p>Associate a configuration set with a dedicated IP pool. You can use dedicated IP pools
 *             to create groups of dedicated IP addresses for sending specific types of email.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointEmailClient, PutConfigurationSetDeliveryOptionsCommand } from "@aws-sdk/client-pinpoint-email"; // ES Modules import
 * // const { PinpointEmailClient, PutConfigurationSetDeliveryOptionsCommand } = require("@aws-sdk/client-pinpoint-email"); // CommonJS import
 * const client = new PinpointEmailClient(config);
 * const command = new PutConfigurationSetDeliveryOptionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutConfigurationSetDeliveryOptionsCommandInput} for command's `input` shape.
 * @see {@link PutConfigurationSetDeliveryOptionsCommandOutput} for command's `response` shape.
 * @see {@link PinpointEmailClientResolvedConfig | config} for PinpointEmailClient's `config` shape.
 *
 */
export class PutConfigurationSetDeliveryOptionsCommand extends $Command<
  PutConfigurationSetDeliveryOptionsCommandInput,
  PutConfigurationSetDeliveryOptionsCommandOutput,
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

  constructor(readonly input: PutConfigurationSetDeliveryOptionsCommandInput) {
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
  ): Handler<PutConfigurationSetDeliveryOptionsCommandInput, PutConfigurationSetDeliveryOptionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutConfigurationSetDeliveryOptionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointEmailClient";
    const commandName = "PutConfigurationSetDeliveryOptionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutConfigurationSetDeliveryOptionsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: PutConfigurationSetDeliveryOptionsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: PutConfigurationSetDeliveryOptionsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1PutConfigurationSetDeliveryOptionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutConfigurationSetDeliveryOptionsCommandOutput> {
    return deserializeAws_restJson1PutConfigurationSetDeliveryOptionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
